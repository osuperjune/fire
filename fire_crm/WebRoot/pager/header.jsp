<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>重庆市消防设施监测评价管理系统</title>
    <link type="text/css" rel="stylesheet" href="assets/easyui/themes/default/easyui.css" />
	<link type="text/css" rel="stylesheet" href="assets/easyui/themes/icon.css" />
	<link type="text/css" rel="stylesheet" href="assets/css/common.css" />
    <script type="text/javascript" src="assets/jslib/jquery.min.js"></script>
	<script type="text/javascript" src="assets/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="assets/easyui/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript">  
	    var basePath = '<%=basePath%>';  
	</script> 
  </head>
  
  <body>
  </body>
</html>
