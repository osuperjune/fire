<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <jsp:include page="../header.jsp"></jsp:include>
    <script type="text/javascript" src="assets/js/validate.js"></script>
    <script type="text/javascript" src="assets/js/add_user.js"></script>
  </head>
  
  <body>
  	<div style="border:1px solid #E6E6FA;margin-top: 15px;padding-top: 10px;padding-left: 90px;">
    <form id="userForm">
	    <table>
	    	<tr>
	    		<td>账号</td>
	    		<td>
		    		<input type="text" class="easyui-validatebox" name="username" 
		    			data-options="required:true" validType="remote['user/checkUser','username']" style="width: 240px;">
	    		</td>
	    	</tr>
	    	<tr id="userRoleTr">
	    		<td>角色</td>
	    		<td>
	    			<select name="role" style="width: 240px;" onchange="changeRole(this)">
	    				<option value="1">总队</option>
	    				<option value="2">支大队</option>
	    				<option value="3">法人</option>
	    				<option value="4">企业录入员</option>
	    			</select>
	    		</td>
	    	</tr>
	    	<tr>
	    		<td>密码</td>
	    		<td><input type="password" class="easyui-validatebox" id="password" name="password" required="true" style="width: 240px;"></td>
	    	</tr>
	    	<tr>
	    		<td>确认密码</td>
	    		<td>
	    			<input type="password" class="easyui-validatebox" data-options="required:true"  validType="same['#password']" invalidMessage="两次输入的密码不一致!"
	    			 style="width: 240px;">
	    		</td>
	    	</tr>
	    	<tr>
	    		<td>身份证号码</td>
	    		<td>
	    			<input type="text" class="easyui-validatebox" data-options="validType:'idcard'" name="idcard" style="width: 240px;">
	    		</td>
	    	</tr>
	    	<tr>
	    		<td colspan="2" align="center">
	    			<a href="javascript:void(0)" id="submitUserForm" class="easyui-linkbutton">保存</a>
	    		</td>
	    	</tr>
	    </table>
    </form>
    </div>
  </body>
</html>
