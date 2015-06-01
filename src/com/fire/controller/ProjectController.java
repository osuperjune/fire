package com.fire.controller;

import java.util.Map;
import org.apache.commons.lang.StringUtils;
import com.fire.common.BaseController;
import com.fire.model.Project;
import com.jfinal.ext.route.ControllerBind;
import com.jfinal.plugin.activerecord.Page;

@ControllerBind(controllerKey="/project")
public class ProjectController extends BaseController {
    
    public void findProject() {
        int page = getParaToInt("page")==null?1:getParaToInt("page");
        int pageSize = getParaToInt("rows")==null?10:getParaToInt("rows");
        
        String sql = " from ProjectDetail a INNER JOIN Depatment b ON a.did=b.did INNER JOIN Enterprise c ON a.eid=c.eid INNER JOIN ProjectBuild d ON a.pid=d.pid";
        sql += " where 1=1";
        if (StringUtils.isNotBlank(getPara("jzmc"))) {
            sql += " and d.jzmc LIKE '%"+getPara("jzmc")+"%'";
        }
        if(StringUtils.isNotBlank(getPara("qy"))) {
            sql += " AND b.dq= '"+getPara("qy")+"'";
        }
        
        Page<Project> infoes = Project.dao.paginate(page, pageSize, "select a.pid,a.gcmc,c.dwmc,d.jzmc", sql);
        
        Map<String,Object> result = getResultMap();
        result.put("total", infoes.getTotalRow());
        result.put("rows", infoes.getList());
        
        renderJson(result);
    }
}
