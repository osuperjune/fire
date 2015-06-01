package com.fire.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;

import com.fire.common.BaseController;
import com.jfinal.ext.route.ControllerBind;
import com.jfinal.kit.PathKit;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.upload.UploadFile;

@ControllerBind(controllerKey="/opinion")
public class OpinionController extends BaseController {
    
    public void list(){
        String gcmc = getPara("gcmc");
        String jzmc = getPara("jzmc");
        int pageNumber = getParaToInt("page")==null?1:getParaToInt("page");
        int pageSize = getParaToInt("rows")==null?10:getParaToInt("rows");
        
        String sql = " from CommunityOpinion a LEFT JOIN ProjectDetail b ON";
        sql += " a.pid=b.pid LEFT JOIN ProjectBuild c on b.did=c.pid";
        sql += " WHERE 1=1";
        
        if (StringUtils.isNotBlank(gcmc)) {
            sql += " and b.gcmc like '%"+gcmc+"%'";
        }
        if (StringUtils.isNotBlank(jzmc)) {
            sql += " and c.jzmc like '%"+jzmc+"%'";
        }
        
        sql += " ORDER BY a.yjrq desc";
        
        Page<Record> infoes = Db.paginate(pageNumber, pageSize, "SELECT a.coid,b.gcmc,a.yjxx,a.yjfj,a.yjrq,a.yjhf,a.yjzt,a.fjmc,c.jzmc", sql);
        Map<String,Object> result = getResultMap();
        result.put("total", infoes.getTotalRow());
        result.put("rows", infoes.getList());
        
        renderJson(result);
    }
    
    public void storeOpinion() {
        String yjfj = "";
        String fileName = "";
        UploadFile file = getFile("yjfj", PathKit.getWebRootPath() + "/temp");
        if (file != null) {
            File source = file.getFile();
            fileName = file.getFileName();
            String extension = fileName.substring(fileName.lastIndexOf("."));
            String prefix = "";
            String newFileName = "";
            if(".png".equals(extension) || ".jpg".equals(extension) || ".gif".equals(extension)){
                prefix = "img";
            }else{
                prefix = "file";
            }
            
            UUID uuid = new UUID(System.currentTimeMillis(), System.currentTimeMillis());
            newFileName = String.valueOf(uuid) + extension;
            try {
                String realPath = PathKit.getWebRootPath() + "/fire/opinion/" + prefix + "/" + newFileName;
                File targetDir = new File(realPath);
                FileUtils.copyFile(source, targetDir);
                source.delete();
                
                yjfj = "/fire/opinion/" + prefix + "/" + newFileName;
            } catch (IOException e) {
                source.delete();
                renderJson(0);
                return;
            }
        }
        
        try {
            Record record = new Record();
            record.set("pid", getPara("pid"));
            record.set("yjxx", getPara("yjxx"));
            record.set("yjzt", "0");
            record.set("yjrq", new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
            record.set("yjfj", yjfj);
            record.set("fjmc", fileName);
            
            Db.save("CommunityOpinion", record);
            renderJson(1);
        } catch (Exception e) {
            renderJson(0);
        }
    }
    
    public void download() {
        int coid = getParaToInt("coid");
        Record re = Db.findById("CommunityOpinion","coid",coid);
        renderFile(re.getStr("yjfj"));
    }
    
    public void answer(){
        String sql = "update CommunityOpinion set yjhf=?,yjzt=1 where coid=?";
        
        try {
            Db.update(sql, new Object[]{getPara("yjhf"),getParaToInt("coid")});
            renderJson("1");
        } catch (Exception e) {
            renderJson("0");
        }
        
    }

}
