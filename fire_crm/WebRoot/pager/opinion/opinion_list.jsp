<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<title>投诉列表</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <jsp:include page="../header.jsp"></jsp:include>
    <script type="text/javascript" src="${basePath}assets/js/opinion_list.js"></script>
  </head>
  <body>
    <div id="tb" style="padding:5px;height:auto;">    
       <div style="margin-bottom:5px">
                                工程名称<input type="text" id="gcmc">
                                建筑名称<input type="text" id="jzmc">
           <a href="javascript:void(0)" id="searchList" class="easyui-linkbutton" iconCls="icon-search">查询</a>    
           <a href="javascript:void(0)" class="easyui-linkbutton">导出Excel</a>    
       </div>    
    </div>
    
    <table id="opinionList"></table>
    <div id="answerDialog" data-options="iconCls:'icon-save'" style="width:700px;height:250px;display:none;">
	    <form id="answerForm" method="post" action="${basePath}opinion/answer">
	    <input type="hidden" id="coid" name="coid"/>
		<table style="border-collapse:separate;border-spacing:10px;">
			<tr>
				<td>建筑名称：</td>
				<td>
					<span id="jzmc_span"></span>
				</td>
			</tr>
			<tr>
				<td>所属工程：</td>
				<td>
					<span id="gcmc_span"></span>
				</td>
			</tr>
			<tr>
				<td>回复内容：</td>
				<td>
					<textarea cols="60" id="yjhf" name="yjhf"></textarea>
					<span id="checkContent" style="color: red;"></span>
				</td>
			</tr>
		</table>
	</form>
	</div>
  </body>
</html>
