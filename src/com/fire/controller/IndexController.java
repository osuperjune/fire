package com.fire.controller;

import java.util.List;

import com.fire.common.BaseController;
import com.fire.entity.SysMenu;
import com.fire.model.SysUser;
import com.jfinal.ext.route.ControllerBind;

@ControllerBind(controllerKey="/index")
public class IndexController extends BaseController {
    
	public void index() {
	    int userId = getUser().getInt("id");
	    List<SysMenu> menuList = SysUser.dao.getMenusById(userId);
	    getRequest().setAttribute("sysmenus", menuList);
	    render("/pager/index/main.jsp");
	}
}





