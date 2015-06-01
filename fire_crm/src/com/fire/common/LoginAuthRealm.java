package com.fire.common;

import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.fire.model.SysUser;

public class LoginAuthRealm extends AuthorizingRealm {
    
    public LoginAuthRealm() {
        super();
        // 设置认证token的实现类
        setAuthenticationTokenClass(UsernamePasswordToken.class);
    }
    
    /**
     * 授权
     */
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        SimpleAuthorizationInfo result = new SimpleAuthorizationInfo();
        // 获取当前登录的用户
        SysUser user = (SysUser) super.getAvailablePrincipal(principals);
        
        return null;
    }

    /**
     * 认证
     */
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
        try {
            UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
            String username = token.getUsername();
            SysUser user = SysUser.dao.getByName(username);
            
            if (!StringUtils.isBlank(username)) {
                if (user != null) {
                    return new SimpleAuthenticationInfo(user.getStr("username"), user.getStr("password"), getName());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return null;
    }

}
