<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>欢迎登录</title><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" /><link rel='stylesheet' href='/domcfg.nsf/css/login.css' type='text/css' /><link rel='stylesheet' type='text/css' href='/domcfg.nsf/css/bgstretcher.css' /><link type='text/css' href='/domcfg.nsf/css/jquery.ibutton.css' rel='stylesheet' media='all' /><link rel='stylesheet' type='text/css' href='/domcfg.nsf/css/freeow/freeow.css' /><link rel='stylesheet' type='text/css' href='/domcfg.nsf/css/demo.css' /><script type='text/javascript' src='/domcfg.nsf/js/jquery-1.5.2.min.js'></script><script type='text/javascript' src='/domcfg.nsf/js/bgstretcher.js'></script><script type='text/javascript' src='/domcfg.nsf/js/jquery.ibutton.js'></script><script type='text/javascript' src='/domcfg.nsf/js/jquery.freeow.js'></script>
<script language="JavaScript" type="text/javascript">
<!-- 
window.onerror = new Function("return true;");var opts = {};opts.classes = ["smokey"];opts.autoHide = true;opts.classes.push("slide");opts.hideStyle = {	opacity: 0,	left: "400px"};opts.showStyle = {	opacity: 1,	left: 0};function setFormFocus() {	document.forms[0].Username.focus(); 	document.forms[0].Username.select();}//在cookies中保存用户登录账号function setCookie(c_name,value,expiredays){	var exdate=new Date()	exdate.setDate(exdate.getDate()+expiredays)	document.cookie=c_name+ "=" +escape(value)+	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())}//获取已保存在cookies中的用户登录账号function getCookie(c_name){	if (document.cookie.length>0){  		c_start=document.cookie.indexOf(c_name + "=")  		if (c_start!=-1){     			c_start=c_start + c_name.length+1 			c_end=document.cookie.indexOf(";",c_start)    			if (c_end==-1) c_end=document.cookie.length    			return unescape(document.cookie.substring(c_start,c_end))    		}   	}	return ""}function DoSubmit(){	setCookie('oaklogin_user',window.document.forms[0].Username.value,30);	if (document.all.RememberPwd.checked==true){		setCookie('oaklogin_Pwd'+encodeURI(document.all.Username.value),window.document.forms[0].Password.value,30);	}else{		setCookie('oaklogin_Pwd'+encodeURI(document.all.Username.value),null,30);	}	$('#freeow-show').val('请稍候...');		window.document.forms[0].submit();}$(document).ready(function(){	$('.login_blk_position').bgStretcher({		images: ['/domcfg.nsf/images/8.jpg','/domcfg.nsf/images/1.jpg', '/domcfg.nsf/images/2.jpg', '/domcfg.nsf/images/3.jpg','/domcfg.nsf/images/4.jpg','/domcfg.nsf/images/6.jpg','/domcfg.nsf/images/7.jpg',],		imageWidth: 770, 		imageHeight: 320, 		slideDirection: 'N',		slideShowSpeed: 3000,		nextSlideDelay:8000,		transitionEffect: 'fade',		sequenceMode: 'normal'	});			var username = ($('[name=Username]').val() == '请输入用户名' || $('[name=Username]').val() == '') ? getCookie('oaklogin_user') : '';	var password = getCookie('oaklogin_Pwd'+encodeURI(username));	if (username!=null && username!=''){		$('[name=Username]').val(username);	}	if (password!=null && password!='null' && password!=''){		$('[name=Password]').val(password);		$('[name=RememberPwd]').attr('checked',true);	}		$(":checkbox").iButton();		$('[name=Username]').keypress(function(event){		if(event.keyCode == 13){			if($(this).val() != ''){				$('[name=Password]').focus();			}		}	});		$('[name=Password]').keypress(function(event){		if(event.keyCode == 13){			if($(this).val() != ''){				DoSubmit();			}		}	});		$("#freeow-show").click(function() {		if($('[name=Username]').val() == ''){			$("#freeow-br").freeow('登录失败', '用户名不能为空，核对好后再重新登录。', opts);			$('[name=Username]').focus();			return false;		}		if($('[name=Password]').val() == ''){			$("#freeow-br").freeow('登录失败', '密码不能为空，核对好后再重新登录。', opts);			$('[name=Password]').focus();			return false;		}				DoSubmit();	});		if($('#freeow-msg').text() != ''){		$('#freeow-br').freeow('登录失败', $('#freeow-msg').text(), opts);	}		});
// -->
</script>
</head>
<body text="#000000" bgcolor="#FFFFFF" scroll='auto'  class='login_blk_position'>

<form method="post" action="/names.nsf?Login" name="_DominoForm">
<input type="hidden" name="%%ModDate" value="0000000000000000"><div>
   <div class="login_blk">
   
      
   
      <div class="login_banner">
         <div class="login_panel">
            
            <dl class="login_form">
                <dt></dt>
                <dd class="login_form_text"><span class="username"></span><input class="text_off" onfocus="this.className='text_on'" onblur="this.className='text_off'" type="text" name="Username" /></dd>
                <dd class="login_form_text"><span class="password"></span><input  class="text_off" onfocus="this.className='text_on'" onblur="this.className='text_off'" type="password" name="Password" /></dd>
                
                <dd>
                
                  <div class="row" style="float:left;">
                    <input type="checkbox" name="RememberPwd" id="ex01" /> 
                  </div>
                  <div class="forget_pw_text">记住密码</div>
                
  </dd>
                
                <dd class="enter_system"><input class="btn_off" onmouseover="this.className='btn_on'" onmouseout="this.className='btn_off'" type="button" value="登录" id="freeow-show" /></dd>
                
            </dl>
            
            
         </div>
      </div>
      
      
      
   </div>
</div>
<div class="top_fixed">
   <div class="mask"></div>
   <div class="top_bar" style="background-image:url(/domcfg.nsf/images/miracles_system_logo2.png);"></div>
</div>
<div class="bottom_fixed">
   <div class="mask"></div>
   <div class="bottom_blk">
         <span class="bottom_tips">为了有更良好的用户体验，请用IE8以上的浏览器预览本系统，部分模块需要您下载浏览器控件才能查看。<a href="/WebOfficeFrame/syslib.nsf/fomDownloadAttachment?OpenForm" class="down_link" target="_blank">请下载</a></span>
   </div>
</div>
  
</div>
<div id="freeow-br" class="freeow freeow-bottom-right"></div>
<div style="display:none" id="freeow-msg"></div>
<div style="display:none">
<p>
<input type="submit" value="提交"></form>
</body>
</html>
