/**回调函数的引用*/
var modelCallBack;
/**回调函数参数，由setReturnParam方法设置*/
var modelCallBackParam;
/**
 * 模态框展示对话框
 * @param title 对话框标题
 * @param url 地址
 * @param width 宽度
 * @param height 高度
 * @param locationY 垂直位置
 * @param callBack 回调函数
 */
function showModelWindows(title,url,width,height,locationY,callBack){
	//拼写需要的宽度，高度等属性
	var appendStr = "TB_iframe=true&width="+width+"&height="+height;
	//加入url参数
	if(url.indexOf('?')>-1){
		appendStr = "&"+appendStr;
	}else{
		appendStr = "?"+appendStr;
	}
	//设置回调函数
	modelCallBack = callBack;
	tb_show(title,url+appendStr,false);
}
/**
 * 关闭模态框，由模态框页面调用
 */
function closeModelWindows(){
	window.parent.tb_remove();
	//回调父页面的回调函数
	if(parent.modelCallBack!=null&&typeof(parent.modelCallBack) != "undefined"){
		parent.modelCallBack(parent.modelCallBackParam);
	}
	parent.modelCallBackParam = null;
	parent.modelCallBack = null;
}
/**
 * 关闭模态框
 */
function closeModelWindowNotCallBack(){
	window.parent.tb_remove();
}
/**
 * 设置回调函数的参数，由模态框页面调用
 * @param param
 */
function setReturnParam(param){
	parent.modelCallBackParam = param;
}

/**
 * 弹出框
 */
function reimburseAlert(msg,callback){
  alert(msg);
	// var width = 100;
	// var height = 70;
	// modelCallBack = callback;
	// if(msg.length>8){
	// 	width = 300;
	// 	height = 150;
	// }
	// var appendStr = contextPath+"/resources/scripts/reimburse/bill/alert.jsp";
	// appendStr+="?popup=true&msg="+encodeURI(msg)+"&TB_iframe=true&width="+width+"&height="+height;
	// tb_show("提示",appendStr,false);
}


/**
 * 弹出确认框
 */
function reimburseConfirm(msg,callback){
	modelCallBack = callback;
	var appendStr = contextPath+"/resources/scripts/reimburse/bill/confirmBox.jsp";
	appendStr+="?popup=true&msg="+encodeURI(msg)+"&TB_iframe=true&width=150&height=70";
	tb_show("提示",appendStr,false);
}

