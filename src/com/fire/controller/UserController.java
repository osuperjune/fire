package com.fire.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.fire.common.BaseController;
import com.fire.common.Constant;
import com.fire.model.SysUser;
import com.jfinal.ext.route.ControllerBind;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

@ControllerBind(controllerKey="/user")
public class UserController extends BaseController {
    
    public void store() {
        renderJsp("/pager/user/add_user.jsp");
    }
    
    public void submitStore() {
        int role = getParaToInt("role");
        SysUser user = new SysUser();
        user.set("username", getPara("username"));
        user.set("password", getPara("password"));
        user.set("idcard", getPara("idcard"));
        user.set("roleId", role);
        
        // 支队指定单位、区域
        if(role == Constant.SUBBOSS) {
        	user.set("did", getPara("did"));
        }
        
//        Map<String,Object> param = new HashMap<String, Object>();
//        param.put("username", getPara("username"));
//        param.put("password", getPara("password"));
//        param.put("idcard", getPara("idcard"));
//        param.put("roleId", role);
        
        int result;
        try {
//            new SysUser().setAttrs(param).save();
            user.save();
            int uid = user.getInt("id");
            // 是法人角色的用户需要创建企业名称,法人姓名
            if(role == Constant.COMPANY) {
                Record re = new Record();
                re.set("dwmc", getPara("dwmc"));
                re.set("fddbr", getPara("frxm"));
                re.set("uid", uid);
                Db.save("Enterprise","eid",re);
            }
            result = 1;
        } catch (Exception e) {e.printStackTrace();
            result = 0;
        }
        
        renderJson(result);
    }
    
    public void list() {
        int page = getParaToInt("page")==null?1:getParaToInt("page");
        int pageSize = getParaToInt("rows")==null?10:getParaToInt("rows");
        
        String username = getPara("username");
        String sql = " from sys_user a LEFT JOIN sys_roles b ON";
        sql += " a.roleId=b.id WHERE 1=1";
        if (StringUtils.isNotBlank(username)) {
            sql += " and a.username LIKE '%"+username+"%'";
        }
        sql += " order by update_time desc";
        
        Page<SysUser> infoes = SysUser.dao.paginate(page,pageSize,"select a.username,a.usbkey,a.realname,a.sex,a.idcard,b.remark",sql);
        
        Map<String,Object> result = getResultMap();
        result.put("total", infoes.getTotalRow());
        result.put("rows", infoes.getList());
        
        renderJson(result);
    }
    
    public void checkUser(){
        SysUser user = SysUser.dao.findFirst("select count(1) count from sys_user where username=?", getPara("username"));
        boolean isHave = true;
        
        if(user.getInt("count") > 0){
            isHave = false;
        }
        
        renderJson(isHave);
    }

}
