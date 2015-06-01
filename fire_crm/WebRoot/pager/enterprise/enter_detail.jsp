<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>企业详情</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <jsp:include page="../header.jsp"></jsp:include>
    <script type="text/javascript" src="assets/js/enter_detail.js"></script>
    <style type="text/css">
    	input,select:{width: 250px;}
    </style>
  </head>
  
  <body>
    <div id="companyBox">
    	<div title="消防从业企业信息">
    		<fieldset>
    			<legend>企业基本信息</legend>
    				<table>
    					<tr>
    						<td align="right">
    							<font color="red">*</font>单位全称
    						</td>
    						<td width="23%">
    							<input type="text" style="width: 250px;" disabled="disabled" value="${enter.dwmc}">
    						</td>
    						<td align="right">成立时间</td>
    						<td width="23%">
    							<input type="text" name="clsj" class="easyui-datebox" style="width: 250px;">
    						</td>
    						<td align="right">联系电话</td>
    						<td width="23%">
    							<input type="text" name="lxdh" style="width: 250px;">
    						</td>
    					</tr>
    					<tr>
    						<td align="right">区域:</td>
    						<td width="23%">
    							<select name="qy">
    								<option value="1">渝中区</option>
    								<option value="2">沙坪坝区</option>
    								<option value="3">九龙坡区</option>
    								<option value="4">江北区</option>
    								<option value="5">渝北区</option>
    								<option value="6">南岸区</option>
    								<option value="7">奉节县</option>
    							</select>
    						</td>
    						<td align="right">地址</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">县(区)</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    					</tr>
    					<tr>
    						<td align="right">乡镇/街道/门牌号</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">邮政编码</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right"></td>
    						<td width="23%"></td>
    					</tr>
    					<tr>
    						<td align="right">法定代表人</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">法定代表人电话</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">法定代表人职务</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    					</tr>
    					<tr>
    						<td align="right">技术负责人</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">技术负责人职务</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">技术负责人职称</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    					</tr>
    					<tr>
    						<td align="right">经营范围</td>
    						<td width="23%" colspan="5"><textarea cols="74"></textarea></td>
    					</tr>
    					<tr>
    						<td align="right">承包工程范围</td>
    						<td width="23%" colspan="5"><textarea cols="74"></textarea></td>
    					</tr>
    					<tr>
    						<td align="right">工程技术人员</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">消防专业考试合格人员数量</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right"></td>
    						<td width="23%"></td>
    					</tr>
    					<tr>
    						<td align="right">工商营业执照注册号</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">注册资金(万元)</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">公司类型</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    					</tr>
    					<tr>
    						<td align="right">组织机构代码</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">营业执照发证机关</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">发证时间</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    					</tr>
    					<tr>
    						<td align="right">注册地址:省</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">市(区)</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right">县(区)</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    					</tr>
    					<tr>
    						<td align="right">乡镇/街道/门牌号</td>
    						<td width="23%"><input type="text" style="width: 250px;"></td>
    						<td align="right"></td>
    						<td width="23%"></td>
    						<td align="right"></td>
    						<td width="23%"></td>
    					</tr>
    				</table>
    		</fieldset>
    		<fieldset>
    			<legend>资质类别</legend>
    				<table>
    					<tr>
    						<td align="right"><strong>建筑业企业资质</strong></td>
    						<td colspan="7"><input type="checkbox"></td>
    					</tr>
    					<tr>
    						<td align="right">资质证书编号</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证机关</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">等级</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证日期</td>
    						<td width="15%"><input type="text"></td>
    					</tr>
    					<tr>
    						<td align="right"><strong>建设工程设计单位资质</strong></td>
    						<td colspan="7"><input type="checkbox"></td>
    					</tr>
    					<tr>
    						<td align="right">资质证书编号</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证机关</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">等级</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证日期</td>
    						<td width="15%"><input type="text"></td>
    					</tr>
    					<tr>
    						<td align="right"><strong>设计施工一体化</strong></td>
    						<td colspan="7"><input type="checkbox"></td>
    					</tr>
    					<tr>
    						<td align="right">资质证书编号</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证机关</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">等级</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证日期</td>
    						<td width="15%"><input type="text"></td>
    					</tr>
    					<tr>
    						<td align="right"><strong>监理企业资质</strong></td>
    						<td colspan="7"><input type="checkbox"></td>
    					</tr>
    					<tr>
    						<td align="right">资质证书编号</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证机关</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">等级</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证日期</td>
    						<td width="15%"><input type="text"></td>
    					</tr>
    					<tr>
    						<td align="right"><strong>消防技术服务资质</strong></td>
    						<td colspan="7"><input type="checkbox"></td>
    					</tr>
    					<tr>
    						<td align="right">资质证书编号</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证机关</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">等级</td>
    						<td width="15%"><input type="text"></td>
    						<td align="right">发证日期</td>
    						<td width="15%"><input type="text"></td>
    					</tr>
    					<tr>
    						<td align="right"><strong>尚未取得消防认证</strong></td>
    						<td colspan="7"><input type="checkbox"></td>
    					</tr>
    				</table>
    		</fieldset>
    		<div style="border:1px solid #E6E6FA;text-align: right;margin-top: 10px;height: 20px;padding: 10px;">
    			填写人<input type="text">&nbsp;&nbsp;&nbsp;填写时间<input type="text">
    		</div>
    		<fieldset>
    			<legend>核查意见</legend>
    			<table>
    				<tr>
    					<td width="10%" align="right">意见</td>
    					<td><textarea cols="120"></textarea></td>
    				</tr>
    				<tr>
    					<td colspan="2" align="right">
    						签名<input type="text">
    						<label style="margin-left: 30px;">时间<input type="text"></label>
    					</td>
    				</tr>
    				<tr>
    					<td colspan="2" align="right">
    						<a href="javascript:void(0)" class="easyui-linkbutton" style="width: 90px;margin-top: 20px;">同意</a>
    						<a href="javascript:void(0)" class="easyui-linkbutton" style="width: 90px;margin-left: 30px;margin-top: 20px;">不同意</a>
    					</td>
    				</tr>
    			</table>
    		</fieldset>
    	</div>
    	<div title="消防专业考试合格人员">
    		<h3 style="text-align: center;">消防专业考试合格人员信息录入</h3>
    		<table id="tt" style="width:100%;height:auto"
			data-options="iconCls:'icon-edit',singleSelect:true,idField:'itemid'">
		<thead>
			<tr>
				<th data-options="field:'itemid',editor:'text'">人员姓名</th>
				<th data-options="field:'cardId',width:100,editor:'numberbox'">居民身份证号</th>
				<th data-options="field:'productid',width:60,formatter:productFormatter,
						editor:{
							type:'combobox',
							options:{
								valueField:'productid',
								textField:'name',
								data:products,
								required:true
							}
						}">性别</th>
				<th data-options="field:'listprice',width:120,editor:{type:'numberbox',options:{precision:1}}">消防专业</th>
				<th data-options="field:'unitcost',width:160,editor:'numberbox'">消防专业考试合格证编号</th>
				<th data-options="field:'attr1',editor:'text'">消防专业考试合格证发证日期</th>
				<th data-options="field:'attr2',width:120,editor:'text'">有效期</th>
				<th data-options="field:'attr3',width:100,editor:'text'">职称</th>
				<th data-options="field:'attr4',width:100,editor:'text'">职业证书类型</th>
				<th data-options="field:'attr5',width:100,editor:'text'">执业编号</th>
				<th data-options="field:'attr6',width:100,editor:'text'">证书编号</th>
			</tr>
		</thead>
	</table>
    	</div>
    </div>
    <div id="tab-tools">
	<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-save">保存</a>
	</div>
  </body>
</html>
