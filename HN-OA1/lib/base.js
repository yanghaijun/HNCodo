"use strict";

// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {
  var utils = ysp.utils;
  var topWin = top;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

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
          var _url = "http://59.110.171.69:" + port + "/" + _web + "/MoaWebConfigSet.nsf/fomDownFile?OpenForm&QxxxDbName=" + doc.getElementsByName("fldQxxxDbName")[0].value + "&QXXXID=" + doc.getElementsByName("fldQXXXID")[0].value;
          $.ajax({
            url: _url,
            type: 'get',
            data: '',
            success: function success(data) {

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
      if (aWin.location.href == 'http://59.110.171.69:' + port + '/' || aWin.location.href == 'http://59.110.171.69:' + port + '/names.nsf?Login') {
        //获取用户名和密码，自动登录
        if (topWin.EAPI.isAndroid()) {
          var userName;
          var password;
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
              userName = localStorage.ningixaU;
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
          }

          $.ajax({
            url: 'http://59.110.171.69:' + port + '/names.nsf?Login',
            type: 'post',
            data: {
              Username: userName, 
              Password: password 
            },
            success: function(data) {
              if(data.indexOf('欢迎登录') == -1){
                if (port == '31003') {
                  //四川
                  aWin.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else if (port == '31000') {
                  //曹妃甸
                  aWin.location.href = 'http://59.110.171.69:'+port+'/WebOfficehncfd/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else if (port == '31044') {
                  //华北分公司
                  aWin.location.href = 'http://59.110.171.69:'+port+'/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else if (port == '31021') {
                  //宁夏
                  aWin.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else if (port == '31025') {
                  //甘肃
                  aWin.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else if (port == '31015') {
                  //新疆
                  aWin.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else if (port == '31031') {
                  //福建
                  aWin.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                } else if (port == '31035') {
                  //广东
                  aWin.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
                }
      				}
              // var _web = $(data)[7].querySelector("input[name='fldWebOfficeList']").value;
              // aWin.location.href = 'http://59.110.171.69:' + port + '/' + _web + '/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
            }
          });
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

  });
})(window, ysp);