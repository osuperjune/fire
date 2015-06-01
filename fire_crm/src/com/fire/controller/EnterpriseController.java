package com.fire.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.fire.common.BaseController;
import com.fire.model.Enterprise;
import com.fire.model.QualificationPerson;
import com.jfinal.ext.route.ControllerBind;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

@ControllerBind(controllerKey="/enterprise")
public class EnterpriseController extends BaseController {
	
	/**
	 * 根据当前登录用户Id查询出企业详情
	 */
	public void store() {
		int userId = getUser().getInt("id");
		String sql = "select * from Enterprise where uid=" + userId;
		
		Enterprise enter = Enterprise.dao.findFirst(sql);
		
		setAttr("enter", enter);
		render("/pager/enterprise/enter_detail.jsp");
	}
	
	/**
	 * 更新企业详情
	 */
	public void updateEnterprise() {
		String eid = getPara("eid");
		getModel(Enterprise.class,"enter").update();
		
		// 先删除以前历史的考试合格人员,再做新增
		String sql = "delete from QualificationPerson where eid="+eid;
		Db.find(sql);
		
		render("/pager/enterprise/detail.jsp");
	}
	
	/**
	 * 保存企业消防专业考试合格人员
	 */
	public void storeQualificationPerson() {
		// 考试合格人员数量
		int personNum = getParaToInt("personNum");
		// 验证考试合格人员证书唯一,不得重复挂证
		for(int i = 0; i < personNum; i++) {
			
		}
		
		for(int i = 0; i < personNum; i++) {
			getModel(QualificationPerson.class, "qp"+i).save();
		}
		
	}
	
	/**
	 * 总队审核,只有总队角色有这个权限处理
	 */
	public void updateStatus() {
		// 总队审核,更新审核状态,审核意见,审核日期
		String sql = "update Enterprise set zt=1,shyj=?,shrq=? where eid=?";
		String today = new SimpleDateFormat().format(new Date());
		
		try {
			Db.update(sql,new Object[]{getPara("zt"),getPara("shyj"),today,getPara("eid")});
			renderJson("1");
		} catch (Exception e) {
			renderJson("0");
		}
	}
	
	/**
	 * 企业列表
	 */
	public void list() {
		String dwmc = getPara("dwmc");
		String qy = getPara("qy");
		String fddbr = getPara("fddbr");
		String status = getPara("status");
		int pageNumber = getParaToInt("page")==null?1:getParaToInt("page");
        int pageSize = getParaToInt("rows")==null?10:getParaToInt("rows");
		
        String sql = " from Enterprise where 1=1";
		if(StringUtils.isNotBlank(dwmc)) {
			sql.concat(" and dwmc like '%"+dwmc+"%'");
		}
		if(StringUtils.isNotBlank(qy)) {
			sql.concat(" and qy like '%"+qy+"%'");
		}
		if(StringUtils.isNotBlank(fddbr)) {
			sql.concat(" and fddbr like '%"+fddbr+"%'");
		}
		// 默认查询出申请审核状态的数据
		if(StringUtils.isNotBlank(status)) {
			sql.concat(" and zt="+status);
		} else {
			sql.concat(" and zt=15");
		}
		
		sql.concat(" order by eid");
		
		Page<Record> infoes = Db.paginate(pageNumber, pageSize, "select dwmc,qy,dz,clsj,lxdh,fddbr,gcjsrysl,fzjg,zt", sql);
        Map<String,Object> result = getResultMap();
        result.put("total", infoes.getTotalRow());
        result.put("rows", infoes.getList());
        
        renderJson(result);
		
	}
	
	public void queryStatement() {
		
	}

}
