package com.fire.common;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

import com.fire.model.SysUser;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class BaseController extends Controller {
    protected final String DATA = "d";
    protected final String ERROR = "e";
    protected final String SUCCESS = "s";
    protected final String RESULT = "r";
    protected final String MESSAGE = "m";
    
    /**
     * 获取日志输出对象
     * 
     * @param object
     * @return
     */
    public Log getLog(Object object) {
        return LogFactory.getLog(object.getClass());
    }
    
    /**
     * 获取result Map对象
     * 
     * @return
     */
    protected Map<String, Object> getResultMap() {
        return new HashMap<String, Object>();
    }
    
    public void getDepatments() {
    	String sql = "select did,dwmc,dq from Depatment order by did";
    	List<Record> infoes = Db.find(sql);
    	
    	renderJson(infoes);
    }
    
    /**
     * 获取系统用户
     * @return
     */
    public static SysUser getUser() {
        Subject subject = SecurityUtils.getSubject();
        if (subject.isAuthenticated() || subject.isRemembered()) {
            String username = (String) subject.getPrincipal();
            String session_key = "_SESSION_USER_OBJECT_" + username;
            Session session = subject.getSession();
            Object user = session.getAttribute(session_key);
            if (user == null) {
                user = SysUser.dao.getByName(username);
                session.setAttribute(session_key, user);
            }
            return (SysUser) user;
        }
        
        return null;
    }

}
