<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>用户列表</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <jsp:include page="../header.jsp"></jsp:include>
    <script type="text/javascript" src="${basePath}assets/js/user_list.js"></script>
  </head>
  <body>
    <div id="tb" style="padding:5px;height:auto;">    
       <div style="margin-bottom:5px">
                                姓名<input type="text" id="username">
                                所属单位<input type="text" id="department">
           <a href="javascript:void(0)" id="searchUser" class="easyui-linkbutton" iconCls="icon-search">查询</a>    
           <a href="javascript:void(0)" class="easyui-linkbutton">导出Excel</a>    
       </div>    
    </div>
    
    <table id="userList"></table> 
  </body>
</html>
