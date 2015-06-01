package com.fire.controller;

import java.util.Map;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;

import com.fire.common.BaseController;
import com.fire.model.SysUser;
import com.jfinal.ext.route.ControllerBind;
import com.jfinal.kit.JsonKit;

@ControllerBind(controllerKey="/")
public class LoginController extends BaseController {
    
    public void index() {
        renderJsp("/pager/index/login.jsp");
    }

    public void login() {
        String username = getPara("username");
        String userpass = getPara("userpass");
        String verify = getPara("verify");
        Map<String, Object> result = getResultMap();
        
        if(StringUtils.isBlank(username)) {
            result.put(ERROR, "用户名不能为空！");
            renderJson(JsonKit.toJson(result));
            return;
        }

        if(StringUtils.isBlank(userpass)) {
            result.put(ERROR, "密码不能为空！");
            renderJson(result);
            return;
        }
        
        if(StringUtils.isBlank(verify)) {
            result.put(ERROR, "验证码不能为空！");
            renderJson(result);
            return;
        }
        
        String acode = (String) this.getSession().getAttribute("checkcode");
        if(acode == null){
            result.put(ERROR, "验证码输入错误！");
            renderJson(result);
            return;
        }else  if(!acode.trim().equalsIgnoreCase(verify)){
            result.put(ERROR, "验证码输入错误！");
            renderJson(result);
            return;
        }
        
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, userpass);
        try {
            if (subject.isAuthenticated()) {// 重复登录
                SysUser user = getUser();
                if (!user.getStr("username").equals(username)) {// 如果登录名不同
                    subject.logout();
                    subject.login(token);
                }
            } else {
                subject.login(token);
            }
            
            result.put(RESULT, true);
        } catch (AuthenticationException e) {e.printStackTrace();
            token.clear();
            getLog(this).error("登录失败错误信息:" + e);
            result.put(ERROR, "用户名或密码错误！");
        }

        renderJson(result);
    }
    
    public void logout() {
        SecurityUtils.getSubject().logout();
        redirect("/");
    }
}
