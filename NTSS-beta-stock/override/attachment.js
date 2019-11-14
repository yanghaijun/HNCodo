var uploadStyleFlag = 1;
//uploadStyleFlag值为1代表用ftp上传文件，值为0代表用opentext上传文件，从config.properties文件中读取uploadStyleFlag字段
$.ajax({
	type:'GET',
	dataType:'json',
	url:contextPath+'/opentextAttachment/getUploadStyleFlag.action',
	async:false,
	success:function(data){
	uploadStyleFlag=parseInt(data.msg);
	//alert("property is "+uploadStyleFlag);
	}/*,
	error:function(data){
	alert("读取不到配置文件config.properties");
	}*/
});
if(uploadStyleFlag == 1)
{
	/**下载附件的地址*/
	var ATTACHMENT_DOWN_URL_PREFIX=contextPath+"/attachment/download.action?attachmentObject.attachId=";
	/**动态上传附件*/
	var ATTACHMENT_UPDATE_URL_PREFIX=contextPath+'/attachment/ajaxUpload.action';
	/**动态加载附件列表*/
	var ATTACHMENT_LOAD_URL_PREFIX=contextPath+'/attachment/listByEntityIdAndType.action?baseinfoId=';
	/**动态删除附件的列表*/
	var ATTACHMENT_DELETE_URL_PREFIX=contextPath+"/attachment/deleteByAjax.action?attachmentObject.attachId=";
}
else
{
	/**下载附件的地址*/
	var ATTACHMENT_DOWN_URL_PREFIX=contextPath+"/opentextAttachment/download.action?attachmentObject.attachId=";
	/**动态上传附件*/
	var ATTACHMENT_UPDATE_URL_PREFIX=contextPath+'/opentextAttachment/uploadDocument.action';
	/**动态加载附件列表*/
	var ATTACHMENT_LOAD_URL_PREFIX=contextPath+'/opentextAttachment/listEntityByBaseInfoId.action?baseinfoId=';
	/**动态删除附件的列表*/
	var ATTACHMENT_DELETE_URL_PREFIX=contextPath+"/opentextAttachment/deleteByAjax.action?attachmentObject.attachId=";
}

/**
 * 动态增加附件
 * @param updateUrl 上传附件的URL
 * @returns {Boolean} 
 */
function addAttachmentByAjax(entityId,entityType,detail, status){
//	alert(entityId+"aa"+entityType+"bb"+detail+"cc"+status);
	var inputValue=$("#commonAttachmentFileDoc").val();
	 if(typeof inputValue == "undefined" ||  inputValue == "" ||  inputValue == null){
		 window.alert("请选择需要保存的附件");
		return false;
	}
	 /*debugger;
	 if(findSize("commonAttachmentFileDoc")>20*1024){
		 window.alert("文件不能超过20M!");
			return false;
	 }*/
	//建立上传的frame
    var iframe = $('<iframe name="postiframe" id="postiframe" style="display: none" ></iframe>');
    $("body").append(iframe);//在当前页面中嵌入iframe。（当前页面是填单提交后，可以上传附件的那个页面）
    
    var url=ATTACHMENT_UPDATE_URL_PREFIX;
	url=url+"?"+$("#ajaxAttachmentForm").serialize();
	

    var form = $('#ajaxAttachmentForm');
    form.attr("action", url);
    form.attr("method", "post");
    form.attr("enctype", "multipart/form-data");
    form.attr("encoding", "multipart/form-data");
    form.attr("target", "postiframe");
    form.attr("doc", $('#fileDoc').val());
    form.attr("attachType", $('#attachType').val());
    form.submit();
    
    	// $('#ajaxAttachmentForm').attr("action", url).attr("method", "post").attr("enctype", "multipart/form-data").attr("encoding", "multipart/form-data").attr("target", "postiframe").submit();
    	//显示正在加载状态
    	show_attachment_query_hint('');
    //更新上传状态
    $("#postiframe").load(function() {
    	//$("#postiframe").empty();
		// 重新加载列表,只是重新加载附件部分，不是整页更新。iframe作用是页面提交后的返回值，输出到iframe中,附件列表不在iframe内
		//attachmentListByAjax(entityId, entityType, detail, status);
		var win = document.getElementById('postiframe').contentWindow;
		//alert(win.document.body.innerText);
		var innerText = win.document.body.innerText;
		if(innerText.indexOf("上传文件大小不能超过20M")!=-1){
			reimburseAlert("上传文件大小不能超过20M！");
			//隐藏正在加载状态
			queryAttachmentHintCallback('');
			return false;
		}
		var parsedJson = jQuery.parseJSON(innerText);
		//隐藏正在加载状态
		queryAttachmentHintCallback('');
		if(parsedJson.flag == "SUCCESS"){
			// reimburseAlert("文件上传成功!");
      alert('文件上传成功！');
			try{
				deleteLocalFile(inputValue);
			}catch(e){
				
			}
			attachmentListByAjax(entityId,entityType,detail, status);
		}
		if(parsedJson.flag == "FAIL"){
			var returnInfo = parsedJson.msg;
			reimburseAlert(returnInfo);
			return false;
		}
        if(typeof parsedJson.flag == "undefined" || parsedJson.flag == "" || parsedJson.flag == null)  //原来是resultMsg，感觉不对
        {
        	reimburseAlert("文件上传失败!");
        }
        $("#postiframe").remove();
    });
    
    //清空文件选择框
    var file=$("#commonAttachmentFileDoc");
    file.after(file.clone().val(""));   
	file.remove();   
	
    return false;
}

/**
 * 动态增加附件
 * @param updateUrl 上传附件的URL
 * @returns {Boolean} 
 */
function addAttachmentByAjax_noneLogin(entityId,entityType,detail, status){
//	alert(entityId+"aa"+entityType+"bb"+detail+"cc"+status);
	var inputValue=$("#commonAttachmentFileDoc").val();
	 if(typeof inputValue == "undefined" ||  inputValue == "" ||  inputValue == null){
		 window.alert("请选择需要保存的附件");
		return false;
	}
	 /*debugger;
	 if(findSize("commonAttachmentFileDoc")>20*1024){
		 window.alert("文件不能超过20M!");
			return false;
	 }*/
	//建立上传的frame
    var iframe = $('<iframe name="postiframe" id="postiframe" style="display: none" ></iframe>');
    $("body").append(iframe);//在当前页面中嵌入iframe。（当前页面是填单提交后，可以上传附件的那个页面）
    
    //设置上传参数
    var param=$("#ajaxAttachmentForm").serialize();
    if(""==param){
    	$("#attachmentList").find("div[class='tablebox']").append('<form id="ajaxAttachmentForm" name="ajaxAttachmentForm" action="#" namespace="attachment" target="postiframe" method="get" enctype="multipart/form-data"></form>');
    	ajaxAttachmentForm=$("#ajaxAttachmentForm");
    	ajaxAttachmentForm.append($("#popup"));
    	ajaxAttachmentForm.append($("#a_attachment_id"));
    	ajaxAttachmentForm.append($("#attachmentEntityId"));
    	ajaxAttachmentForm.append($("#attachmentList").find("div[class='tablebox']").find("table")[1]);
    	ajaxAttachmentForm.attr("action","#");
    }
    
    var url=ATTACHMENT_UPDATE_URL_PREFIX;
	url=url+"?"+$("#ajaxAttachmentForm").serialize();
	

    var form = $('#ajaxAttachmentForm');
    form.attr("action", url);
    form.attr("method", "post");
    form.attr("enctype", "multipart/form-data");
    form.attr("encoding", "multipart/form-data");
    form.attr("target", "postiframe");
    form.attr("doc", $('#fileDoc').val());
    form.attr("attachType", $('#attachType').val());
    form.submit();
    
    	// $('#ajaxAttachmentForm').attr("action", url).attr("method", "post").attr("enctype", "multipart/form-data").attr("encoding", "multipart/form-data").attr("target", "postiframe").submit();
    	//显示正在加载状态
    	show_attachment_query_hint('');
    //更新上传状态
    $("#postiframe").load(function() {
    	//$("#postiframe").empty();
		// 重新加载列表,只是重新加载附件部分，不是整页更新。iframe作用是页面提交后的返回值，输出到iframe中,附件列表不在iframe内
		//attachmentListByAjax(entityId, entityType, detail, status);
		var win = document.getElementById('postiframe').contentWindow;
		//alert(win.document.body.innerText);
		var innerText = win.document.body.innerText;
		alert(innerText);
		if(innerText.indexOf("上传文件大小不能超过20M")!=-1){
			reimburseAlert("上传文件大小不能超过20M！");
			//隐藏正在加载状态
			queryAttachmentHintCallback('');
			return false;
		}
		var parsedJson = jQuery.parseJSON(innerText);
		//隐藏正在加载状态
		queryAttachmentHintCallback('');
		if(parsedJson.flag == "SUCCESS")
		{
			reimburseAlert("文件上传成功!");
			try{
				deleteLocalFile(inputValue);
			}catch(e){
				
			}
			fileName=inputValue.substring(inputValue.lastIndexOf('\\')+1,inputValue.length);
			//alert("fileName:"+fileName);
			attach[attach.length]=fileName;
			attachmentListByAjax_noneLogin(entityId,entityType,detail, status);
		}
		if(parsedJson.flag == "FAIL")
		{
			var returnInfo = parsedJson.msg;
			var pos = returnInfo.indexOf(",");
			var headStr="";
			var tailStr="";
			if(pos > 0)
			{
				headStr = returnInfo.substring(0,pos);//存放失败文字
				tailStr = returnInfo.substring(pos+1);//存放失败具体信息
			}
			else
			{
				headStr = returnInfo;
			}
			switch (headStr)
			{
				case "uploadFileFail":
					reimburseAlert(tailStr+" 上传失败!");
					break;
				case "createFolderFail":
					reimburseAlert("不能在opentext上创建文件夹，上传失败");
					break;
				/*case "fileTooLarge":
					alert("文件大小不能超过20M！");
					break;*/
				default:
					;
			}
			return false;
		}
        if(typeof parsedJson.flag == "undefined" || parsedJson.flag == "" || parsedJson.flag == null)  //原来是resultMsg，感觉不对
        {
        	reimburseAlert("文件上传失败!");
        }
        $("#postiframe").remove();
    });
    
    //清空文件选择框
    var file=$("#commonAttachmentFileDoc");
    file.after(file.clone().val(""));   
	file.remove();   
	
    return false;
}

/**
 * 动态加载附件列表
 * @param entityId 实体ID
 * @param entityType 实体类型
 * 前台jsp页面中调用该函数，当前代码从该函数开始执行form的显示。
 */
function attachmentListByAjax(entityId,entityType,detail, status){
	
	//entityId = 2638;
	//添加上传文件需要的动态参数
	var flag=true;
	if(detail == 'detail' || status == 'CANCEL'||status == 'END'){
		flag=false;
	}
	//初始化div
	$("#attachmentList").html('');//attachmentList是前台页面中id为的div，即：<div id="attachmentList" name="attachmentList"></div>
	var attachmentDiv='';
	attachmentDiv ='<div  class="tablebox">';
	attachmentDiv=attachmentDiv+'<div id="commonAttachmentTableList"></div>';
	attachmentDiv=attachmentDiv+'<form id="ajaxAttachmentForm" name="ajaxAttachmentForm" action="#" namespace="attachment" target="postiframe" method="get" enctype="multipart/form-data">';
	attachmentDiv=attachmentDiv+'<input type="hidden" name="popup" id="popup"/>';
	attachmentDiv=attachmentDiv+'<input type="hidden" name="attachmentIds" id="a_attachment_id"/>';
	attachmentDiv=attachmentDiv+'<input type="hidden" name="attachmentObject.baseinfoId"  id="attachmentEntityId" value='+entityId+'/>';
	/*attachmentDiv=attachmentDiv+'<input type="hidden" name="attachmentObject.entityType"  id="attachmentEntityType" value="AJAX"/>';*/
	/*attachmentDiv=attachmentDiv+'<input type="hidden" name="targetUrl" id="targetUrl" value="/attachment/attachment!listByEntityId.action?popup=true"/>';
	attachmentDiv=attachmentDiv+'<input type="hidden" id="trigger"/>';*/
	
	if(flag){
	attachmentDiv=attachmentDiv+'<table width="100%" border="0">';
	attachmentDiv=attachmentDiv+'<tbody><tr>';
	attachmentDiv=attachmentDiv+'<td>';
	attachmentDiv=attachmentDiv+'<select id="attachType" name="attachType" style="width:90px;hight:20px">';
	attachmentDiv=attachmentDiv+'<option label="其他附件" value="other" />';
	attachmentDiv=attachmentDiv+'<option label="列车时刻表" value="train" />';
	attachmentDiv=attachmentDiv+'<option label="会议通知单" value="conf" />';
	attachmentDiv=attachmentDiv+'<option label="培训通知单" value="training" />';
	attachmentDiv=attachmentDiv+'</select>';
	attachmentDiv=attachmentDiv+'<input type="file" id="commonAttachmentFileDoc" name="doc" style="width: 400px; height: 24px;"/>';
	attachmentDiv=attachmentDiv+'<span style="color:green">(小提示：附件最大20MB)</span>';
	attachmentDiv=attachmentDiv+'<div style="float:right; margin-right: 35px;margin-top: 5px;width: 90px;"><button id="attSubmit" class="bt bt_green" onclick="return false;">保存附件</button></div></td></tr>';
	attachmentDiv=attachmentDiv+'<tr><td>';
	attachmentDiv=attachmentDiv+'</td></tr></tbody></table>';
	}
	
	attachmentDiv=attachmentDiv+'</form></div>';
	$("#attachmentList").html(attachmentDiv);
	
	
	//初始化并添加table
	var attachmentList='';
	attachmentList = attachmentList +'<table id="attList" width="100%" border="0" cellspacing="0" cellpadding="0"  class="list_Table">';
	attachmentList = attachmentList +'<tr>';
	if(flag){
	attachmentList = attachmentList +'<th style="width: 60px;">操作</th>';
	}
	attachmentList = attachmentList +'<th style="width: 100px;">附件类型</th>';
	attachmentList = attachmentList +'<th>附件</th>';
	attachmentList = attachmentList +'<th style="width: 140px;">上传时间</th>';
	attachmentList = attachmentList +'</tr>';
	attachmentList = attachmentList +'<tbody id="attachmentListTbody"></tbody></table>';
	$("#commonAttachmentTableList").empty();//是一个id为commonAttachmentTableList的div，由本页代码生成。
	$("#commonAttachmentTableList").append(attachmentList);
		
	//动态加载附件列表
	//alert(ATTACHMENT_LOAD_URL_PREFIX+entityId);
	$.ajax({
		  url: ATTACHMENT_LOAD_URL_PREFIX+entityId,
		  datatype:'json',
		  type: "POST",
		  async : false
		}).done(function(jsonArray) {
			 if(typeof jsonArray.result != "undefined" &&  jsonArray.result != "" && jsonArray.result != null){

				var comment='';
				$.each(jsonArray.result,function(index,item){
							comment=comment+'<tr id="tr_'+item.attachId+'"  name="tr_att_'+item.baseinfoId+'/>" class="topBorder wbg">';
							if(flag)
							{
								if (item.nodeId.length == 0) 
								{
									comment=comment+'<td><a href="javascript:void(0);" onclick="deleteAttachmentByAjax(\''+item.attachId+'\'); return false;" value="删除">删除</td>';
									
								}
								else
								{
									comment=comment+'<td><a href="javascript:void(0);" onclick="deleteAttachmentWithOpentext(\''+item.attachId+'\'); return false;" value="删除">删除</td>';
								}
							}
							if (item.nodeId.length == 0) 
							{
								ATTACHMENT_DOWN_URL_PREFIX=contextPath+"/attachment/download.action?attachmentObject.attachId=";
							}
							else
							{
								ATTACHMENT_DOWN_URL_PREFIX=contextPath+"/opentextAttachment/download.action?attachmentObject.attachId=";
							}
							//alert(ATTACHMENT_DOWN_URL_PREFIX);
							comment=comment+'<td><input id="td_'+(index+1)+'" type="hidden" value="'+item.attachType+'"></input>';
							comment=comment+item.attachTypeName+'</td>';
							comment=comment+'<td><a href="'+ATTACHMENT_DOWN_URL_PREFIX+item.attachId+'">'+item.fileRealName+'</a></td>';
							/*comment=comment+'<td><a href="'+item.downloadURL+'">'+item.fileRealName+'</a></td>';*/
							comment=comment+'<td>'+item.uploadDate+'</td>';
							comment=comment+'</tr>';
				});
				$("#attachmentListTbody").append(comment);
				
			 }
		});
	//触发上传文件函数
	$("#attSubmit").click(function(){
		addAttachmentByAjax(entityId,entityType,detail, status);
	});
	$("#attachmentEntityId").val(entityId);
	//$("#attachmentEntityType").val(entityType);
}

/**
 * 动态加载附件列表
 * @param entityId 实体ID
 * @param entityType 实体类型
 * 前台jsp页面中调用该函数，当前代码从该函数开始执行form的显示。
 */
function attachmentListByAjax_noneLogin(entityId,entityType,detail, status){
	
	//entityId = 2638;
	//添加上传文件需要的动态参数
	var flag=true;
	if(detail == 'detail' || status == 'CANCEL'||status == 'END'){
		flag=false;
	}
	//初始化div
	$("#attachmentList").html('');//attachmentList是前台页面中id为的div，即：<div id="attachmentList" name="attachmentList"></div>
	var attachmentDiv='';
	attachmentDiv ='<div  class="tablebox">';
	attachmentDiv=attachmentDiv+'<div id="commonAttachmentTableList"></div>';
	attachmentDiv=attachmentDiv+'<form id="ajaxAttachmentForm" name="ajaxAttachmentForm" action="#" namespace="attachment" target="postiframe" method="get" enctype="multipart/form-data">';
	attachmentDiv=attachmentDiv+'<input type="hidden" name="popup" id="popup"/>';
	attachmentDiv=attachmentDiv+'<input type="hidden" name="attachmentIds" id="a_attachment_id"/>';
	attachmentDiv=attachmentDiv+'<input type="hidden" name="attachmentObject.baseinfoId"  id="attachmentEntityId" value='+entityId+'/>';
	/*attachmentDiv=attachmentDiv+'<input type="hidden" name="attachmentObject.entityType"  id="attachmentEntityType" value="AJAX"/>';*/
	/*attachmentDiv=attachmentDiv+'<input type="hidden" name="targetUrl" id="targetUrl" value="/attachment/attachment!listByEntityId.action?popup=true"/>';
	attachmentDiv=attachmentDiv+'<input type="hidden" id="trigger"/>';*/
	
	if(flag){
	attachmentDiv=attachmentDiv+'<table width="100%" border="0">';
	attachmentDiv=attachmentDiv+'<tbody><tr>';
	attachmentDiv=attachmentDiv+'<td>';
	attachmentDiv=attachmentDiv+'<select id="attachType" name="attachType" style="width:90px;hight:20px">';
	attachmentDiv=attachmentDiv+'<option label="其他附件" value="other" />';
	attachmentDiv=attachmentDiv+'<option label="列车时刻表" value="train" />';
	attachmentDiv=attachmentDiv+'<option label="会议通知单" value="conf" />';
	attachmentDiv=attachmentDiv+'<option label="培训通知单" value="training" />';
	attachmentDiv=attachmentDiv+'</select>';
	attachmentDiv=attachmentDiv+'<input type="file" id="commonAttachmentFileDoc" name="doc" style="width: 400px; height: 24px;"/>';
	attachmentDiv=attachmentDiv+'<span style="color:green">(小提示：附件最大20MB)</span>';
	attachmentDiv=attachmentDiv+'<div style="float:right; margin-right: 35px;margin-top: 5px;width: 90px;"><button id="attSubmit" class="bt bt_green" onclick="return false;">保存附件</button></div></td></tr>';
	attachmentDiv=attachmentDiv+'<tr><td>';
	attachmentDiv=attachmentDiv+'</td></tr></tbody></table>';
	}
	
	attachmentDiv=attachmentDiv+'</form></div>';
	$("#attachmentList").html(attachmentDiv);
	
	
	//初始化并添加table
	var attachmentList='';
	attachmentList = attachmentList +'<table id="attList"  width="100%" border="0" cellspacing="0" cellpadding="0"  class="list_Table">';
	attachmentList = attachmentList +'<tr>';
	if(flag){
	attachmentList = attachmentList +'<th style="width: 60px;">操作</th>';
	}
	attachmentList = attachmentList +'<th style="width: 100px;">附件类型</th>';
	attachmentList = attachmentList +'<th>附件</th>';
	attachmentList = attachmentList +'<th style="width: 140px;">上传时间</th>';
	attachmentList = attachmentList +'</tr>';
	attachmentList = attachmentList +'<tbody id="attachmentListTbody"></tbody></table>';
	$("#commonAttachmentTableList").empty();//是一个id为commonAttachmentTableList的div，由本页代码生成。
	$("#commonAttachmentTableList").append(attachmentList);
		
	//动态加载附件列表
	//alert(ATTACHMENT_LOAD_URL_PREFIX+entityId);
	$.ajax({
		  url: ATTACHMENT_LOAD_URL_PREFIX+entityId,
		  datatype:'json',
		  type: "POST",
		  async : false,
		  cache : false,
		}).done(function(jsonArray) {
			 if(typeof jsonArray.result != "undefined" &&  jsonArray.result != "" && jsonArray.result != null){

				var comment='';
				$.each(jsonArray.result,function(index,item){
							uploaded=false;
							$.each(attach,function(idx,it){
								//alert("fileNameList:"+it);
								if(it==item.fileRealName){
									uploaded=true;
									return false;
								}
							});
							if(uploaded){
								comment=comment+'<tr id="tr_'+item.attachId+'"  name="tr_att_'+item.baseinfoId+'/>" class="topBorder wbg">';
								if(flag)
								{
									if (item.nodeId.length == 0) 
									{
										comment=comment+'<td><a href="javascript:void(0);" onclick="deleteAttachmentByAjax(\''+item.attachId+'\'); return false;" value="删除">删除</td>';
										
									}
									else
									{
										comment=comment+'<td><a href="javascript:void(0);" onclick="deleteAttachmentWithOpentext(\''+item.attachId+'\'); return false;" value="删除">删除</td>';
									}
								}
								if (item.nodeId.length == 0) 
								{
									ATTACHMENT_DOWN_URL_PREFIX=contextPath+"/attachment/download.action?attachmentObject.attachId=";
								}
								else
								{
									ATTACHMENT_DOWN_URL_PREFIX=contextPath+"/opentextAttachment/download.action?attachmentObject.attachId=";
								}
								//alert(ATTACHMENT_DOWN_URL_PREFIX);
								comment=comment+'<td><input id="td_'+(index+1)+'" type="hidden" value="'+item.attachType+'"></input>';
								comment=comment+item.attachTypeName+'</td>';
								comment=comment+'<td><a href="'+ATTACHMENT_DOWN_URL_PREFIX+item.attachId+'">'+item.fileRealName+'</a></td>';
								/*comment=comment+'<td><a href="'+item.downloadURL+'">'+item.fileRealName+'</a></td>';*/
								comment=comment+'<td>'+item.uploadDate+'</td>';
								comment=comment+'</tr>';
							}
				});
				$("#attachmentListTbody").append(comment);
				
			 }
		});
	//触发上传文件函数
	$("#attSubmit").click(function(){
		addAttachmentByAjax_noneLogin(entityId,entityType,detail, status);
	});
	$("#attachmentEntityId").val(entityId);
	//$("#attachmentEntityType").val(entityType);
}

/**
 * 通过ID删除附件(使用ftp)
 * @param id
 */
function deleteAttachmentByAjax(id){
	if(!confirm("确认要删除吗?")){
		return false;
	}
	if(typeof id == "undefined" || id == "" || id == null){
		reimburseAlert("删除失败，没有传入删除ID");
		return false;
	}
	show_attachment_delete_hint();//正在删除附件。。。。
	var url=ATTACHMENT_DELETE_URL_PREFIX+id;
	$.ajax({
		type: "GET",
		url : url,
		dataType : 'json',
		success : function(data) {
			if(data.flag == AJAX_RETURN_SUCCESS){
				$("#tr_"+id).remove();
				queryAttachmentHintdeleteCallback();
				//closeLoad();
				reimburseAlert("删除成功！");
			}
		}
	});
	
}


/**
 * 通过ID删除附件(使用opentext)
 * @param id
 */
function deleteAttachmentWithOpentext(id){
	if(!confirm("确认要删除吗?")){
		return false;
	}
	if(typeof id == "undefined" || id == "" || id == null){
		reimburseAlert("删除失败，没有传入删除ID");
		return false;
	}
	show_attachment_delete_hint();//正在删除附件。。。。
	//showLoad('附件正在删除中...');
	ATTACHMENT_DELETE_URL_PREFIX=contextPath+"/opentextAttachment/deleteByAjax.action?attachmentObject.attachId=";
	var url=ATTACHMENT_DELETE_URL_PREFIX+id;
	$.ajax({
		type: "GET",
		url : url,
		dataType : 'json',
		success : function(data) {
			if(data.flag == AJAX_RETURN_SUCCESS){
				$("#tr_"+id).remove();
				queryAttachmentHintdeleteCallback();
				//closeLoad();
				reimburseAlert("删除成功！");
			}
		}
	});
	
}
/**
 * 通过ID下载附件
 * @param id
 */
function downAttachmentByAjax(id){
	var url=ATTACHMENT_DOWN_URL_PREFIX+id;
	$.ajax({
		type: "GET",
		url : url,
		dataType : 'json',
		success : function(data) {
			if(data.flag == AJAX_RETURN_SUCCESS){
				
			}
		}
	});
	
}
/*function findSize(field_id)
{
           var f = document.getElementById(field_id).files;  
           alert(f[0].size/(1024*1024));  
           return ( Math.ceil(f[0].size / 1024) ); // Size returned in KB.
}*/