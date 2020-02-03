"use strict";

// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {
  var utils = ysp.utils;
  var topWin = top;
  topWin.getTitle = function(id){
    if(id){
      localStorage.setItem('appTitle',id);
    }
  };
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */
     //getTitle:_getTitle,
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){
     }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function onTargetLoad(aWin, doc) {
      setTimeout(function () {
        if (aWin.location.href.indexOf("EditDocument") != "-1") {
          var port = aWin.location.port;
          var _web = aWin.location.href.split('/')[3];
          var _url;
          if(port == '31003' || port == '31020'){ //四川公司、吉林
            _url = "http://59.110.171.69:" + port + "/" + _web + "/MoaWebConfigSet.nsf/fomDownFile?OpenForm&QxxxDbName=" + doc.getElementsByName("fldQxxxDbName")[0].value + "&QXXXID=" + doc.getElementsByName("fldQXXXID")[0].value;
          } else if(port == '31046' || port == '31017' || port == '31008' || port == '31069') { //山西、招标公司、信息公司、贵州
            _url = "http://59.110.171.69:" + port + "/" + _web + "/MoaWebConfigSet.nsf/fomDownFile?OpenForm&QxxxDbName=" + doc.getElementsByName("fldQxxxDbName")[0].value + "&QXXXID=" + doc.getElementsByName("fldQXXXID")[0].value + "&tm=" + encodeURIComponent(doc.getElementsByName("fldTM")[0].value);
          } else {
            _url = "http://59.110.171.69:" + port + "/" + _web + "/MoaWebConfigSet.nsf/fomDownFile?OpenForm&QxxxDbName=" + doc.getElementsByName("fldQxxxDbName")[0].value + "&QXXXID=" + doc.getElementsByName("fldQXXXID")[0].value + "&tm=" + encodeURIComponent(doc.getElementsByName("fldTM")[0].value) + "&caseid=" + doc.getElementsByName("fldCaseDocUNID")[0].value;
          }
          $.ajax({
            url: _url,
            type: 'get',
            data: '',
            success: function(data) {
              //console.log(data)
              var _data = $(data).find("textarea")[0].innerHTML.split(/[\n]/);
              var _dataLength = $(data).find("textarea")[0].innerHTML.split(/[\n]/).length;
              if (_dataLength > 0) {
                var _list = doc.querySelectorAll("#down_table_list_text a");
                doc.getElementById('down_table_list_text').innerHTML = '';
                [].forEach.call(_data, function (item, idx) {
                  var addHTML = "<li><dl class='down_other_file'><dd><div class='file_name'><a style='cursor:pointer' target='browserFrame1'>" + _data[idx] + "</a></div></dd></dl></li>";
                  $(doc).find("#down_table_list_text").eq(0).append(addHTML);
                });
              }
            }
          });
        }
      }, 500);

      // if(topWin.EAPI.isIOS() && aWin.location.href == 'http://59.110.171.69:31003/'){
      // var userName = topWin.yspUser.getUserName();
      // var password = topWin.yspUser.getPassword();
      // $.ajax({
      // url: 'http://59.110.171.69:31003/names.nsf',
      // type: 'post',
      // data: {Login:'',Username:userName,Password:password},
      // success:function(){
      // aWin.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
      // }
      // })
      // }
    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function beforeTargetLoad(aWin, doc) {
      var port = aWin.location.port;
      // if(topWin.EAPI.isIOS()){//调用IOS的方法，让IOS调用getTitle()方法，返回九宫格中的标题
      //   topWin.EAPI.postMessageToNative('sendTitleToJS','');
      // }
      if (aWin.location.href == 'http://59.110.171.69:' + port + '/' || aWin.location.href == 'http://59.110.171.69:' + port + '/names.nsf?Login' || aWin.location.href == 'http://59.110.171.69:' +port+'/WebOfficeFrame/MoaWebMailAddress.nsf/fomLogin?OpenForm' || aWin.location.href == 'http://59.110.171.69:'+port+'/WebOffice/home4.nsf/fomlogin?OpenForm') {
        //获取用户名和密码，自动登录
        if (topWin.EAPI.isAndroid()) {
          var userName;
          var password;
          //var appTitle=huaneng.sendTitleToJS();//获取九宫格中的标题
          if (port == '31003') {
            if (localStorage && localStorage.password && localStorage.username) {
              password = localStorage.password;
              userName = localStorage.username;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31000') {
            if (localStorage && localStorage.caofeidianP && localStorage.caofeidianU) {
              password = localStorage.caofeidianP;
              userName = localStorage.caofeidianU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31044') {
            if (localStorage && localStorage.huabeiP && localStorage.huabeiU) {
              password = localStorage.huabeiP;
              userName = localStorage.huabeiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31021') {
            if (localStorage && localStorage.ningxiaP && localStorage.ningxiaU) {
              password = localStorage.ningxiaP;
              userName = localStorage.ningxiaU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31025') {
            if (localStorage && localStorage.gansuP && localStorage.gansuU) {
              password = localStorage.gansuP;
              userName = localStorage.gansuU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31015') {
            if (localStorage && localStorage.xinjiangP && localStorage.xinjiangU) {
              password = localStorage.xinjiangP;
              userName = localStorage.xinjiangU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31031') {
            if (localStorage && localStorage.fujianP && localStorage.fujianU) {
              password = localStorage.fujianP;
              userName = localStorage.fujianU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31035') {
            if (localStorage && localStorage.guangdongP && localStorage.guangdongU) {
              password = localStorage.guangdongP;
              userName = localStorage.guangdongU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31059') {
            if (localStorage && localStorage.xinnengyuanP && localStorage.xinnengyuanU) {
              password = localStorage.xinnengyuanP;
              userName = localStorage.xinnengyuanU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31060') {
            if (localStorage && localStorage.jiangsuP && localStorage.jiangsuU) {
              password = localStorage.jiangsuP;
              userName = localStorage.jiangsuU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31017') {
            if (localStorage && localStorage.zhaobiaoP && localStorage.zhaobiaoU) {
              password = localStorage.zhaobiaoP;
              userName = localStorage.zhaobiaoU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31067') {
            if (localStorage && localStorage.hebeiP && localStorage.hebeiU) {
              password = localStorage.hebeiP;
              userName = localStorage.hebeiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31042') {
            if (localStorage && localStorage.hunanP && localStorage.hunanU) {
              password = localStorage.hunanP;
              userName = localStorage.hunanU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31046') {
            if (localStorage && localStorage.shanxiP && localStorage.shanxiU) {
              password = localStorage.shanxiP;
              userName = localStorage.shanxiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31069') {
            if (localStorage && localStorage.guizhouP && localStorage.guizhouU) {
              password = localStorage.guizhouP;
              userName = localStorage.guizhouU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31020') {
            if (localStorage && localStorage.jilinP && localStorage.jilinU) {
              password = localStorage.jilinP;
              userName = localStorage.jilinU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31039') {
            if (localStorage && localStorage.qinghaiP && localStorage.qinghaiU) {
              password = localStorage.qinghaiP;
              userName = localStorage.qinghaiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31033') {
            if (localStorage && localStorage.hainanP && localStorage.hainanU) {
              password = localStorage.hainanP;
              userName = localStorage.hainanU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31051') {
            if (localStorage && localStorage.hubeiP && localStorage.hubeiU) {
              password = localStorage.hubeiP;
              userName = localStorage.hubeiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31029') {
            if (localStorage && localStorage.xionganP && localStorage.xionganU) {
              password = localStorage.xionganP;
              userName = localStorage.xionganU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31037') {
            if (localStorage && localStorage.yajiangP && localStorage.yajiangU) {
              password = localStorage.yajiangP;
              userName = localStorage.yajiangU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31040') {
            if (localStorage && localStorage.liaoningP && localStorage.liaoningU) {
              password = localStorage.liaoningP;
              userName = localStorage.liaoningU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31048') {
            if (localStorage && localStorage.henanP && localStorage.henanU) {
              password = localStorage.henanP;
              userName = localStorage.henanU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31063') {
            if (localStorage && localStorage.xianregongyuanP && localStorage.xianregongyuanU) {
              password = localStorage.xianregongyuanP;
              userName = localStorage.xianregongyuanU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31064') {
            if (localStorage && localStorage.ranliaoP && localStorage.ranliaoU) {
              password = localStorage.ranliaoP;
              userName = localStorage.ranliaoU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31056') {
            if (localStorage && localStorage.jiangxiP && localStorage.jiangxiU) {
              password = localStorage.jiangxiP;
              userName = localStorage.jiangxiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31071') {
            if (localStorage && localStorage.guangxiP && localStorage.guangxiU) {
              password = localStorage.guangxiP;
              userName = localStorage.guangxiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31095') {
            if (localStorage && localStorage.shandongP && localStorage.shandongU) {
              password = localStorage.shandongP;
              userName = localStorage.shandongU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31008') {
            if (localStorage && localStorage.xinxigongsiP && localStorage.xinxigongsiU) {
              password = localStorage.xinxigongsiP;
              userName = localStorage.xinxigongsiU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31058') {
            if (localStorage && localStorage.zhiyeP && localStorage.zhiyeU) {
              password = localStorage.zhiyeP;
              userName = localStorage.zhiyeU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31104') {
            if (localStorage && localStorage.nengjiaoP && localStorage.nengjiaoU) {
              password = localStorage.nengjiaoP;
              userName = localStorage.nengjiaoU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31007') {
            if (localStorage && localStorage.heilongjiangP && localStorage.heilongjiangU) {
              password = localStorage.heilongjiangP;
              userName = localStorage.heilongjiangU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31110') {
            if (localStorage && localStorage.chongqingP && localStorage.chongqingU) {
              password = localStorage.chongqingP;
              userName = localStorage.chongqingU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31112') {
            if (localStorage && localStorage.caiwuP && localStorage.caiwuU) {
              password = localStorage.caiwuP;
              userName = localStorage.caiwuU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          } else if (port == '31097') {
            if (localStorage && localStorage.zhejiangP && localStorage.zhejiangU) {
              password = localStorage.zhejiangP;
              userName = localStorage.zhejiangU;
            } else {
              userName = huaneng.getUserName();
          		password = huaneng.getPassword();
            }
          }
          if(password != '' && password != null && password != undefined && userName != '' && userName != null && userName != undefined){
              $.ajax({
              url: 'http://59.110.171.69:' + port + '/names.nsf?Login',
              type: 'post',
              data: {
                Username: userName,
                Password: password 
              },
              success: function(data) {
                if(data.indexOf('欢迎登录') == -1){
                  var dd = $(data);
                  var dom;
                  for (var i = 0; i < dd.length; i++) {
                    var tag = dd[i].tagName;
                    if (tag == 'FORM') {
                      dom = dd[i];
                    }
                  }

                  var _web = dom && dom.querySelector("input[name='fldWebOfficeList']") && dom.querySelector("input[name='fldWebOfficeList']").value;
                  if (_web == null && port == '31017') {
                    _web = dom && dom.textContent.split("/")[1];
                  }
                  localStorage.allWeb = _web;
                  localStorage.allPort = port;
                  localStorage.removeItem("inputCode");
                  aWin.location.href = 'http://59.110.171.69:' + port + '/' + _web + '/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else {
                  alert('登录失败！请重新登录！');
                	localStorage.inputCode = true;
                }
                // var _web = $(data)[7].querySelector("input[name='fldWebOfficeList']").value;
                // aWin.location.href = 'http://59.110.171.69:' + port + '/' + _web + '/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              },
              error:function(){
                alert('登录失败！请重新登录！');
                localStorage.inputCode = true;
              }
            });
          }
          
        } else if (topWin.EAPI.isIOS()) {
          // var userName = topWin.yspUser.getUserName();
          // var password = topWin.yspUser.getPassword();
          // $.ajax({
          //   url: 'http://59.110.171.69:31003/names.nsf',
          //   type: 'post',
          //   data: {Login:'',Username:userName,Password:password},
          //   success:function(){
          //     aWin.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
          //   }
          // })
        } else {
            // $.ajax({
            //   url: 'http://59.110.171.69:31003/names.nsf?Login',
            //   type: 'post',
            //   data: {Username:'66666668',Password:'Vmeet1234**'},
            //   success:function(){
            //     aWin.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
            //   }
            // })

          }
      }
    },

    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function needToLogin(doc) {
      return false;
    },

    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function isLoginSuccess(doc) {
      return false;
    }

    // function _getTitle(){
    //   return 'aa';
    // }
  });
  
  
})(window, ysp);