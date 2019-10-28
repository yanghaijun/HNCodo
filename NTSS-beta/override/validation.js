// 统一验证调用js文件
/**
 * 进行验证的方法 自动调用validationArray栈，如果传值则执行传值的验证队列
 * 注意：ajax验证时，请勿使用异步，否则可能出现验证未通过而提交成功的现象
 * @vArray 验证栈，如果为空，则调用默认的验证队列 队列内结构 json：{id:"验证函数描述"，method:function 验证函数,sort:验证顺序}
 * @return 返回json对象 flag：是否通过验证 msg：具体未通过验证原因，result:其他的信息，会根据每个验证顺次放入数组中
 */
function validation(vArray){
	//返回的对象
	var ret = new Object();
	//如果参数没传，则使用默认的验证队列
	var temArray = validationArray;
	if(vArray!=null&&typeof vArray!="undefined"){
		temArray=vArray;
	}
	//是否能够通过
	ret.msg = "";
	var pass = true;
	//根据sort字段进行排序
	temArray.sort(function(a,b){
		return a.sort> b.sort?1:-1;
	});
	
	//调用验证数组中每个函数，当有验证不通过，错误信息累加，不停止验证
	for(var i=0;i<temArray.length;i++){
		var validatFun = temArray[i].method;
		var vRet = validatFun();
		if(!vRet.flag){
			pass = false;
			ret.msg = ret.msg + vRet.msg+",";
		}
	}
	ret.flag = pass;
	if(ret.msg.length>0){
		var alert = ret.msg.substring(0,ret.msg.length-1);
		reimburseAlert(alert);
	}
	return ret
}
/**
 * 检验数字
 * @param num 所要检验的数字
 * @param min 检验数字范围下限
 * @param max 检验数字范上限
 * @return 返回json对象 flag：是否通过验证 msg：具体未通过验证原因
 */
function validatNum(num,min,max){
	var ret = new Object();
	//检验最大值与最小值关系
	if(min!=null&&max!=null&&(!isNaN(min))&&(!isNaN(max))){
		if(min>max){
			ret.flag = false;
			ret.msg = "最大值"+max+"小于最小值"+min;
			return ret;
		}
		
	}
	//检验是否为数字
	if(isNaN(num)){
		ret.flag = false;
		ret.msg = "不是数字";
		return ret;
	}
	//检验下限
	if(min!=null&&(!isNaN(min))){
		if(num<min){
			ret.flag = false;
			ret.msg = "小于最小值"+min;
		}
	}
	//检验上限
	if(max!=null&&(!isNaN(max))){
		if(num>max){
			ret.flag = false;
			ret.msg = "大于最大值"+max;
		}
	}
	ret.flag= true;
	return ret;
}
/**
 * 检验是否为空值
 * @param value 所要检验的字符串
 * @return true：字符串为空 ， false：不为空
 */
function validatEmpty(value){
	if(value==null){
		return true;
	}
	//trim()
	value = value.replace(/^\s+/g,"").replace(/\s+$/g,"");
	if(value==""){
		return true;
	}
	return false;
}

/**
 * 检验字符串的长度
 * @return 返回json对象 flag：是否通过验证 msg：具体未通过验证原因
 */
function validatLength(value,minLength,maxlength){
	var ret = new Object();
	if(validatEmpty(value)){
		ret.flag = false;
		ret.msg = "空字符串";
		return ret;
	}
	var length = value.length();
	//检验长度
	var json = validatNum(length,minLength,maxlength);
	if(json.flag==false){
		json.msg = "字符串长度"+json.msg;
		return json;
	}
	return json;
}
/**
 * 检验2位小数
 * @param value
 */
function validatNumberTwo(value){
	if(value.indexOf('.')==-1){
		return true;
	}
	var point = value.substring(value.indexOf('.'),value.length);
	if(point.length>3)
		return false;
	else
		return true;
	
}
