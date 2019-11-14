'use strict';

// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {

    var utils = ysp.utils;
    var topWin = top;
    ysp.customHelper = {};
    utils.extend(ysp.customHelper, {
        USER: '',
        PWD: '',
        trim: _trim,
        loginStatus: function loginStatus(user, pwd) {
            if (topWin.EAPI) {
                if (topWin.EAPI && topWin.EAPI.localStorage) {
                    topWin.EAPI.localStorage.setItem('user', user, 'yunshipei').then(function () {

                        console.log('localStorage 存储成功');
                    }).catch(function () {
                        console.log('localStorage 存储失败');
                    });
                    topWin.EAPI.localStorage.setItem('pwd', pwd, 'yunshipei').then(function () {

                        console.log('localStorage 存储成功');
                    }).catch(function () {
                        console.log('localStorage 存储失败');
                    });
                    topWin.EAPI.localStorage.setItem('login', '成功', 'yunshipei').then(function () {

                        console.log('localStorage 存储成功');
                    }).catch(function () {
                        console.log('localStorage 存储失败');
                    });
                } else {
                    console.info('该方法暂时不支持PC端');
                }
            }
        },
        login: function login() {
            topWin.EAPI.localStorage.removeItem('login', 'yunshipei').then(function (loginValue) {
                console.log('删除成功');
            });
            topWin.EAPI.localStorage.removeItem('user', 'yunshipei').then(function (userValue) {
                console.log('删除成功');
            });
            topWin.EAPI.localStorage.removeItem('pwd', 'yunshipei').then(function (pwdValue) {
                console.log('删除成功');
            });
        },
        /* 适配中定制的公共代码放在这里 */

        /*
        // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
        foo: function(){
         }
        */

        // 以下两个方法用于修改原页面中的错误, 但执行时机不同
        // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
        onTargetLoad: function onTargetLoad(aWin, doc) {

            if (aWin.location.href == 'http://59.110.171.69:31099/ReimbursePlatform/index.jsp') {
                setInterval(function () {
                    if (topWin.frames[1] && topWin.frames[1].document.querySelectorAll('iframe[name="browserFrame2"]').length > 0 && topWin.frames[1].document.querySelector('iframe[name="browserFrame2"]').contentWindow.document.body.textContent == '') {
                        ysp.customHelper.login();
                        location.reload();
                    }
                }, 2000);
            }
          //http://59.110.171.69:31099/ReimbursePlatform/myReimburse/loadToDoList4Ajax.action
          $.ajax({
            url:'http://59.110.171.69:31099/ReimbursePlatform/myReimburse/loadToDoList4Ajax.action',
            type:'post',
            data:'',
            success:function(){}
          })
        },

        // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
        beforeTargetLoad: function beforeTargetLoad(aWin, doc) {
            aWin.addEventListener('DOMContentLoaded', function () {
                if (!topWin.EAPI.isStudio()) {
                    if (aWin.location.href == 'http://59.110.171.69:31099/ReimbursePlatform/index.jsp') {
                        //alert('1111')
                        topWin.EAPI.localStorage.getItem('login', 'yunshipei').then(function (loginValue) {
                            topWin.loginStatus = loginValue;
                        });
                        topWin.EAPI.localStorage.getItem('user', 'yunshipei').then(function (userValue) {
                            topWin.user = userValue;
                        });
                        topWin.EAPI.localStorage.getItem('pwd', 'yunshipei').then(function (pwdValue) {
                            topWin.pwd = pwdValue;
                            console.log(topWin.pwd);
                        });
                        var timer = setInterval(function () {
                            if (doc.querySelector('#userName') && topWin.loginStatus == '成功') {
                                doc.querySelector('#userName').value = topWin.user;
                                doc.querySelector('#psw').value = topWin.pwd;
                                setTimeout(function () {
                                    topWin.document.body.querySelector('.login').click();
                                }, 100);
                                clearInterval(timer);
                            }
                        }, 1000);
                    }
                }
            }, false);
            ysp.appMain.showLoading();
            setTimeout(function () {
                ysp.appMain.hideLoading();
            }, 2000);
            // if(aWin.alert){
            //   aWin._alert = aWin.alert;
            //   aWin.alert=function(e){
            //     console.log(e);
            //  }
            // setTimeout(function(){
            //   aWin.alert = aWin._alert;
            // },3000)
            // }
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
    function _trim(str) {
        return str ? str.replace(/^(\s+)|(\s+)|(\n+)|(\t+)$/g, '') : '';
    }
})(window, ysp);