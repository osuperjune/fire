package com.fire.model;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fire.entity.SysMenu;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Record;

public class SysUser extends Model<SysUser> {
    
    /**
     * 序列化ID
     */
    private static final long serialVersionUID = -1418570751901376234L;
    public static final SysUser dao = new SysUser();
    
    public SysUser getByName(String username) {
        String sql = "select u.*,s.status roleStatus,s.remark rolename";
        sql += " from sys_user u,sys_roles s";
        sql += " where u.roleId = s.id and s.status = 0";
        sql += " and u.username = ?";
        
        return dao.findFirst(sql, username);
    }
    
    public List<SysMenu> getMenusById(int uid) {
        String sql = "SELECT a.*,b.menuName c_menuName,b.id c_id,b.isParent c_isParent,b.parentId c_parentId,b.url c_url,b.sort c_sort from(";
        sql += " SELECT c.id,c.menuName,c.isParent,c.parentId,c.url,c.sort FROM sys_user a LEFT JOIN sys_role_menu b ON";
        sql += " a.roleId=b.roleId LEFT JOIN sys_menu c ON b.menuId=c.id WHERE a.id=? AND c.isParent=1)a";
        sql += " LEFT JOIN";
        sql += " (SELECT c.id,c.menuName,c.isParent,c.parentId,c.url,c.sort FROM sys_user a LEFT JOIN sys_role_menu b ON";
        sql += " a.roleId=b.roleId LEFT JOIN sys_menu c ON b.menuId=c.id";
        sql += " WHERE a.id=? AND c.isParent=0)b ON a.id=b.parentId";
        sql += " ORDER BY a.sort asc,b.sort asc";
        
        List<Record> menus = Db.find(sql,new Object[]{uid,uid});
        List<SysMenu> menuList = new ArrayList<SysMenu>();
        Map<Integer,SysMenu> menuMap = new LinkedHashMap<Integer, SysMenu>();
        SysMenu menu = null;
        SysMenu subMenu = null;
        for(Record r : menus) {
            if(menuMap.containsKey(r.getInt("id"))) {
                subMenu = new SysMenu();
                subMenu.setId(r.getInt("c_id"));
                subMenu.setMenuName(r.getStr("c_menuName"));
                subMenu.setIsParent(r.getInt("c_isParent"));
                subMenu.setParentId(r.getInt("c_parentId"));
                subMenu.setUrl(r.getStr("c_url"));
                subMenu.setSort(r.getInt("c_sort"));
                menuMap.get(r.getInt("id")).getChildren().add(subMenu);
            } else {
                menu = new SysMenu();
                menu.setId(r.getInt("id"));
                menu.setMenuName(r.getStr("menuName"));
                menu.setIsParent(r.getInt("isParent"));
                menu.setParentId(r.getInt("parentId"));
                menu.setUrl(r.getStr("url"));
                menu.setSort(r.getInt("sort"));
                
                subMenu = new SysMenu();
                subMenu.setId(r.getInt("c_id"));
                subMenu.setMenuName(r.getStr("c_menuName"));
                subMenu.setIsParent(r.getInt("c_isParent"));
                subMenu.setParentId(r.getInt("c_parentId"));
                subMenu.setUrl(r.getStr("c_url"));
                subMenu.setSort(r.getInt("c_sort"));
                menu.setChildren(new ArrayList<SysMenu>());
                menu.getChildren().add(subMenu);
                menuMap.put(menu.getId(), menu);
            }
        }
        
        for(Map.Entry<Integer, SysMenu> entry : menuMap.entrySet()) {
            menuList.add(entry.getValue());
        }
        
        return menuList;
    }

}
