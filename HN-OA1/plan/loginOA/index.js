(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_smV5Jh: function (elem) {
      ;if (!elem) {
        return;
      }var data = [],
          user = $(elem).find('.login_form_text');var obj = {};
      obj.userName = $(user).eq(0).find('input').val();obj.type = $(user).eq(0).find('input')[0].getAttribute('type');var obj2 = {};obj2.passWorld = $(user).eq(1).find('input').val();obj2.type = $(user).eq(1).find('input')[0].getAttribute('type');data.push(obj);data.push(obj2);var obj3 = { text: '' };var freeowbr = $(elem).parent().parent().parent().find('#freeow-br').find('.smokey');freeowbr && freeowbr.find('p').map(function (d, t) {
        //var obj3 = {};
        obj3.text = t.textContent;
      });data.push(obj3);var obj4 = {};var port = elem.ownerDocument.defaultView.location.port;
      var password;if (top.EAPI.isIOS()) {
        password = top.yspUser.getPassword();
      }if (top.EAPI.isAndroid()) {
        password = huaneng.getPassword();
      }if (top.EAPI.isIOS() || top.EAPI.isAndroid()) {
        if (password == "" || password == undefined || password == null) {
          if (port == '31003') {
            if (localStorage.password == undefined || localStorage.username == undefined) {
              obj4.display = "block";
            } else if ((localStorage.password || localStorage.username) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31000') {
            if (localStorage.caofeidianP == undefined || localStorage.caofeidianU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.caofeidianP || localStorage.caofeidianU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31044') {
            if (localStorage.huabeiP == undefined || localStorage.huabeiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.huabeiP || localStorage.huabeiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31021') {
            if (localStorage.ningxiaP == undefined || localStorage.ningxiaU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.ningxiaP || localStorage.ningxiaU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31025') {
            if (localStorage.gansuP == undefined || localStorage.gansuU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.gansuP || localStorage.gansuU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31015') {
            if (localStorage.xinjiangP == undefined || localStorage.xinjiangU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.xinjiangP || localStorage.xinjiangU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31031') {
            if (localStorage.fujianP == undefined || localStorage.fujianU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.fujianP || localStorage.fujianU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31035') {
            if (localStorage.guangdongP == undefined || localStorage.guangdongU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.guangdongP || localStorage.guangdongU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31059') {
            if (localStorage.xinnengyuanP == undefined || localStorage.xinnengyuanU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.xinnengyuanP || localStorage.xinnengyuanU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31060') {
            if (localStorage.jiangsuP == undefined || localStorage.jiangsuU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.jiangsuP || localStorage.jiangsuU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31017') {
            if (localStorage.zhaobiaoP == undefined || localStorage.zhaobiaoU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.zhaobiaoP || localStorage.zhaobiaoU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31067') {
            if (localStorage.hebeiP == undefined || localStorage.hebeiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.hebeiP || localStorage.hebeiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31042') {
            if (localStorage.hunanP == undefined || localStorage.hunanU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.hunanP || localStorage.hunanU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31046') {
            if (localStorage.shanxiP == undefined || localStorage.shanxiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.shanxiP || localStorage.shanxiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31069') {
            if (localStorage.guizhouP == undefined || localStorage.guizhouU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.guizhouP || localStorage.guizhouU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31020') {
            if (localStorage.jilinP == undefined || localStorage.jilinU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.jilinP || localStorage.jilinU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31039') {
            if (localStorage.qinghaiP == undefined || localStorage.qinghaiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.qinghaiP || localStorage.qinghaiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31033') {
            if (localStorage.hainanP == undefined || localStorage.hainanU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.hainanP || localStorage.hainanU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31051') {
            if (localStorage.hubeiP == undefined || localStorage.hubeiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.hubeiP || localStorage.hubeiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31029') {
            if (localStorage.xionganP == undefined || localStorage.xionganU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.xionganP || localStorage.xionganU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31037') {
            if (localStorage.yajiangP == undefined || localStorage.yajiangU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.yajiangP || localStorage.yajiangU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31040') {
            if (localStorage.liaoningP == undefined || localStorage.liaoningU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.liaoningP || localStorage.liaoningU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31048') {
            if (localStorage.henanP == undefined || localStorage.henanU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.henanP || localStorage.henanU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31063') {
            if (localStorage.xianregongyuanP == undefined || localStorage.xianregongyuanU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.xianregongyuanP || localStorage.xianregongyuanU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31064') {
            if (localStorage.ranliaoP == undefined || localStorage.ranliaoU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.ranliaoP || localStorage.ranliaoU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31056') {
            if (localStorage.jiangxiP == undefined || localStorage.jiangxiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.jiangxiP || localStorage.jiangxiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31071') {
            if (localStorage.guangxiP == undefined || localStorage.guangxiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.guangxiP || localStorage.guangxiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31095') {
            if (localStorage.shandongP == undefined || localStorage.shandongU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.shandongP || localStorage.shandongU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31008') {
            if (localStorage.xinxigongsiP == undefined || localStorage.xinxigongsiU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.xinxigongsiP || localStorage.xinxigongsiU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31058') {
            if (localStorage.zhiyeP == undefined || localStorage.zhiyeU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.zhiyeP || localStorage.zhiyeU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31104') {
            if (localStorage.nengjiaoP == undefined || localStorage.nengjiaoU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.nengjiaoP || localStorage.nengjiaoU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31007') {
            if (localStorage.heilongjiangP == undefined || localStorage.heilongjiangU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.heilongjiangP || localStorage.heilongjiangU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31110') {
            if (localStorage.chongqingP == undefined || localStorage.chongqingU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.chongqingP || localStorage.chongqingU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31112') {
            if (localStorage.caiwuP == undefined || localStorage.caiwuU == undefined) {
              obj4.display = "block";
            } else if ((localStorage.caiwuP || localStorage.caiwuU) && localStorage.inputCode) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          }
        } else if (password && localStorage.inputCode) {
          obj4.display = "block"; // if (localStorage.inputCode) {
          //   obj4.display = "block";
          // } else {
          //   obj4.display = "none";
          // }
        }
      }data.push(obj4);return data;
    }, doAction_uiControl0_acry19: function (data, elem) {
      if (data.eventType == "userName") {
        var data = data.dataCustom;var user = $(elem).find('.login_form_text').eq(0).find('input').val(data);
      } else if (data.eventType == 'passWorld') {
        var data = data.dataCustom;var user = $(elem).find('.login_form_text').eq(1).find('input').val(data);
      } else if (data.eventType == 'ButtonN') {
        ysp.appMain.showLoading();var port = elem.ownerDocument.defaultView.location.port; //var port = '31095'; //var appTitle; //获取九宫格中的标题
        //   if (top.EAPI.isIOS()) {
        //     appTitle = localStorage.getItem('appTitle');
        //   }
        //   if (top.EAPI.isAndroid()) {
        //     appTitle = huaneng.sendTitleToJS();
        //   }
        $.ajax({ url: 'http://59.110.171.69:' + port + '/names.nsf?Login', type: 'post', data: { Username: $(elem).find('.login_form_text').eq(0).find('input').val(), Password: $(elem).find('.login_form_text').eq(1).find('input').val() }, success: function (data) {
            //console.log(data);
            //debugger; // if ($(data)[7].querySelector("input[name='fldWebOfficeList']")) {
            //   localStorage.password = $(elem).find('.login_form_text').eq(1).find('input').val();
            //   localStorage.username = $(elem).find('.login_form_text').eq(0).find('input').val();
            //   elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
            // }
            if (data.indexOf('欢迎登录') == -1) {
              if (port == '31003') {
                //四川
                localStorage.password = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.username = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31000') {
                //曹妃甸
                localStorage.caofeidianP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.caofeidianU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31044') {
                //华北分公司
                localStorage.huabeiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.huabeiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31021') {
                //宁夏
                localStorage.ningxiaP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.ningxiaU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31025') {
                //甘肃
                localStorage.gansuP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.gansuU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31015') {
                //新疆
                localStorage.xinjiangP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.xinjiangU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31031') {
                //福建
                localStorage.fujianP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.fujianU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31035') {
                //广东
                localStorage.guangdongP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.guangdongU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31059') {
                //新能源
                localStorage.xinnengyuanP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.xinnengyuanU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31060') {
                //江苏
                localStorage.jiangsuP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.jiangsuU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31017') {
                //招标公司
                localStorage.zhaobiaoP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.zhaobiaoU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31067') {
                //河北公司
                localStorage.hebeiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.hebeiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31042') {
                //湖南
                localStorage.hunanP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.hunanU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31046') {
                //山西
                localStorage.shanxiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.shanxiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31069') {
                //贵州
                localStorage.guizhouP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.guizhouU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31020') {
                //吉林
                localStorage.jilinP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.jilinU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31039') {
                //青海
                localStorage.qinghaiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.qinghaiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31033') {
                //海南
                localStorage.hainanP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.hainanU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31051') {
                //湖北
                localStorage.hubeiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.hubeiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31029') {
                //雄安
                localStorage.xionganP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.xionganU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31037') {
                //雅江
                localStorage.yajiangP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.yajiangU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31040') {
                //辽宁
                localStorage.liaoningP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.liaoningU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31048') {
                //河南
                localStorage.henanP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.henanU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31063') {
                //西安热工院
                localStorage.xianregongyuanP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.xianregongyuanU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31064') {
                //燃料公司
                localStorage.ranliaoP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.ranliaoU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31056') {
                //江西
                localStorage.jiangxiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.jiangxiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31071') {
                //广西
                localStorage.guangxiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.guangxiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31095') {
                //山东
                localStorage.shandongP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.shandongU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31008') {
                //信息公司
                localStorage.xinxigongsiP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.xinxigongsiU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31058') {
                //置业
                localStorage.zhiyeP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.zhiyeU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31104') {
                //能交公司
                localStorage.nengjiaoP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.nengjiaoU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31007') {
                //黑龙江
                localStorage.heilongjiangP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.heilongjiangU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31110') {
                //重庆
                localStorage.chongqingP = $(elem).find('.login_form_text').eq(1).find('input').val();
                localStorage.chongqingU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31112') {
                //财务
                localStorage.caiwuP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.caiwuU = $(elem).find('.login_form_text').eq(0).find('input').val();
              }var dd = $(data);var dom;for (var i = 0; i < dd.length; i++) {
                var tag = dd[i].tagName;if (tag == 'FORM') {
                  dom = dd[i];
                }
              }var _web = dom && dom.querySelector("input[name='fldWebOfficeList']") && dom.querySelector("input[name='fldWebOfficeList']").value;localStorage.allWeb = _web;localStorage.allPort = port;localStorage.removeItem("inputCode");
              elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + _web + '/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';ysp.appMain.hideLoading();
            } else {
              ysp.appMain.hideLoading();alert('登录失败，请重新登录！');
            }
          }, error: function () {
            ysp.appMain.hideLoading();alert('登录失败，请重新登录！');
          } }); // $(elem).find('.enter_system').find('input').click();
        // setTimeout(function () {
        //   ysp.appMain.hideLoading();
        // }, 500);
      }if (data.eventType == 'login') {//获取用户名和密码，自动登录
        // if (top.EAPI.isAndroid()) {
        //   var userName = huaneng.getUserName();
        //   var password = huaneng.getPassword();
        //   $(elem).find('.login_form_text').eq(0).find('input').val(userName);
        //   $(elem).find('.login_form_text').eq(1).find('input').val(password);
        //   $(elem).find('.enter_system').find('input').click();
        // } else if (top.EAPI.isIOS()) {
        //   var userName = top.yspUser.getUserName();
        //   var password = top.yspUser.getPassword();
        //   $(elem).find('.login_form_text').eq(1).find('input').val(password);
        //   $(elem).find('.enter_system').find('input').click();
        // } else {}
      }if (data.eventType == "loginButton") {//密码错误时调用
        // var text = data.dataCustom;
        // if (text && text != "" && (text.indexOf("账号或密码填写错误") > -1 || text.indexOf("密码不能为空") > -1)) {
        //   if (top.EAPI.isAndroid()) {
        //     huaneng.showPasswordError();
        //   } else if (top.EAPI.isIOS()) {
        //     top.EAPI.postMessageToNative("OAPasswordIsError");
        //   }
        // }
      }
    },
    getTemplate_uiControl0_acry19: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  \n  componentWillMount(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"login"\n      })\n    }\n  },\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:"login"\n  //     })\n  //   }\n  // },\n  componentDidUpdate(){\n    var handler = this.props.customHandler;\n    var text = this.props.customData && this.props.customData[2].text;\n    if(handler){\n      handler({\n        eventType:"loginButton",\n        data:text\n      })\n    }\n  },\n  userName:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'userName\',\n        data:target.value\n      })\n    }\n  },\n  passWorld:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'passWorld\',\n        data:target.value\n      })\n    }\n  },\n  ButtonN:function(e){\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if(handler){\n        handler({\n          eventType:\'ButtonN\'\n        })\n    \t}\n  },\n  componentDidMount: function(){\n    this.props.customHandler({\n      eventType:\'123\'\n    })\n  },\n  render: function() {\n    var me = this,data = this.props.customData\n    return (\n      <div className=\'D_login\'>\n        <div className=\'loginTitle\'>\n        \t<div>\n          \t\n          </div>\n          <div>\u529E\u516C\u81EA\u52A8\u5316\u7BA1\u7406\u7CFB\u7EDF</div>\n        </div>\n        \n        <div style={{display:data[3].display}} ref="myInput">\n          <div className=\'loginText\'><span></span><AInput  type={data[0].type} onChange={me.userName} value={data[0].userName}/></div>\n        <div className=\'loginTextp\'><span></span><AInput  type={data[1].type} onChange={me.passWorld} value={data[1].password}/></div>\n        <div className=\'freeow-br\'>\n        \t{data.map(function(q,l){\n           if(l>1){\n             return <p>{q.text}</p>\n           }\n          })}\n        </div>\n        <div className=\'loginButton\'><button onClick={me.ButtonN}>\u767B\u5F55</button></div>\n        </div>\n        \n         \n      </div>\n    )\n  }\n});\n';
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentWillMount: function componentWillMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"login\"\n      });\n    }\n  },\n\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:\"login\"\n  //     })\n  //   }\n  // },\n  componentDidUpdate: function componentDidUpdate() {\n    var handler = this.props.customHandler;\n    var text = this.props.customData && this.props.customData[2].text;\n    if (handler) {\n      handler({\n        eventType: \"loginButton\",\n        data: text\n      });\n    }\n  },\n\n  userName: function userName(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'userName',\n        data: target.value\n      });\n    }\n  },\n  passWorld: function passWorld(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'passWorld',\n        data: target.value\n      });\n    }\n  },\n  ButtonN: function ButtonN(e) {\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'ButtonN'\n      });\n    }\n  },\n  componentDidMount: function componentDidMount() {\n    this.props.customHandler({\n      eventType: '123'\n    });\n  },\n  render: function render() {\n    var me = this,\n        data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"D_login\" },\n      React.createElement(\n        \"div\",\n        { className: \"loginTitle\" },\n        React.createElement(\"div\", null),\n        React.createElement(\n          \"div\",\n          null,\n          \"\\u529E\\u516C\\u81EA\\u52A8\\u5316\\u7BA1\\u7406\\u7CFB\\u7EDF\"\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { style: { display: data[3].display }, ref: \"myInput\" },\n        React.createElement(\n          \"div\",\n          { className: \"loginText\" },\n          React.createElement(\"span\", null),\n          React.createElement(AInput, { type: data[0].type, onChange: me.userName, value: data[0].userName })\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"loginTextp\" },\n          React.createElement(\"span\", null),\n          React.createElement(AInput, { type: data[1].type, onChange: me.passWorld, value: data[1].password })\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"freeow-br\" },\n          data.map(function (q, l) {\n            if (l > 1) {\n              return React.createElement(\n                \"p\",\n                null,\n                q.text\n              );\n            }\n          })\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"loginButton\" },\n          React.createElement(\n            \"button\",\n            { onClick: me.ButtonN },\n            \"\\u767B\\u5F55\"\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control38_UpuyAZ: function (elem) {
      ;var port = elem.ownerDocument.defaultView.location.port;;if (top.EAPI.isIOS()) {
        var password;var userName; //var appTitle = localStorage.getItem('appTitle'); //获取九宫格中的标题
        if (port == '31003') {
          if (localStorage && localStorage.password) {
            password = localStorage.password;userName = localStorage.username;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31000') {
          if (localStorage && localStorage.caofeidianP && localStorage.caofeidianU) {
            password = localStorage.caofeidianP;userName = localStorage.caofeidianU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31044') {
          if (localStorage && localStorage.huabeiP && localStorage.huabeiU) {
            password = localStorage.huabeiP;userName = localStorage.huabeiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31021') {
          if (localStorage && localStorage.ningxiaP && localStorage.ningxiaU) {
            password = localStorage.ningxiaP;userName = localStorage.ningxiaU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31025') {
          if (localStorage && localStorage.gansuP && localStorage.gansuU) {
            password = localStorage.gansuP;userName = localStorage.gansuU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31015') {
          if (localStorage && localStorage.xinjiangP && localStorage.xinjiangU) {
            password = localStorage.xinjiangP;userName = localStorage.xinjiangU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31031') {
          if (localStorage && localStorage.fujianP && localStorage.fujianU) {
            password = localStorage.fujianP;userName = localStorage.fujianU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31035') {
          if (localStorage && localStorage.guangdongP && localStorage.guangdongU) {
            password = localStorage.guangdongP;userName = localStorage.guangdongU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31059') {
          if (localStorage && localStorage.xinnengyuanP && localStorage.xinnengyuanU) {
            password = localStorage.xinnengyuanP;userName = localStorage.xinnengyuanU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31060') {
          if (localStorage && localStorage.jiangsuP && localStorage.jiangsuU) {
            password = localStorage.jiangsuP;userName = localStorage.jiangsuU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31017') {
          if (localStorage && localStorage.zhaobiaoP && localStorage.zhaobiaoU) {
            password = localStorage.zhaobiaoP;userName = localStorage.zhaobiaoU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31067') {
          if (localStorage && localStorage.hebeiP && localStorage.hebeiU) {
            password = localStorage.hebeiP;userName = localStorage.hebeiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31042') {
          if (localStorage && localStorage.hunanP && localStorage.hunanU) {
            password = localStorage.hunanP;userName = localStorage.hunanU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31046') {
          if (localStorage && localStorage.shanxiP && localStorage.shanxiU) {
            password = localStorage.shanxiP;userName = localStorage.shanxiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31069') {
          if (localStorage && localStorage.guizhouP && localStorage.guizhouU) {
            password = localStorage.guizhouP;userName = localStorage.guizhouU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31020') {
          if (localStorage && localStorage.jilinP && localStorage.jilinU) {
            password = localStorage.jilinP;userName = localStorage.jilinU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31039') {
          if (localStorage && localStorage.qinghaiP && localStorage.qinghaiU) {
            password = localStorage.qinghaiP;userName = localStorage.qinghaiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31033') {
          if (localStorage && localStorage.hainanP && localStorage.hainanU) {
            password = localStorage.hainanP;userName = localStorage.hainanU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31051') {
          if (localStorage && localStorage.hubeiP && localStorage.hubeiU) {
            password = localStorage.hubeiP;userName = localStorage.hubeiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31029') {
          if (localStorage && localStorage.xionganP && localStorage.xionganU) {
            password = localStorage.xionganP;userName = localStorage.xionganU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31037') {
          if (localStorage && localStorage.yajiangP && localStorage.yajiangU) {
            password = localStorage.yajiangP;userName = localStorage.yajiangU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31040') {
          if (localStorage && localStorage.liaoningP && localStorage.liaoningU) {
            password = localStorage.liaoningP;userName = localStorage.liaoningU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31048') {
          if (localStorage && localStorage.henanP && localStorage.henanU) {
            password = localStorage.henanP;userName = localStorage.henanU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31063') {
          if (localStorage && localStorage.xianregongyuanP && localStorage.xianregongyuanU) {
            password = localStorage.xianregongyuanP;userName = localStorage.xianregongyuanU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31064') {
          if (localStorage && localStorage.ranliaoP && localStorage.ranliaoU) {
            password = localStorage.ranliaoP;userName = localStorage.ranliaoU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31056') {
          if (localStorage && localStorage.jiangxiP && localStorage.jiangxiU) {
            password = localStorage.jiangxiP;userName = localStorage.jiangxiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31071') {
          if (localStorage && localStorage.guangxiP && localStorage.guangxiU) {
            password = localStorage.guangxiP;userName = localStorage.guangxiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31095') {
          if (localStorage && localStorage.shandongP && localStorage.shandongU) {
            password = localStorage.shandongP;userName = localStorage.shandongU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31008') {
          if (localStorage && localStorage.xinxigongsiP && localStorage.xinxigongsiU) {
            password = localStorage.xinxigongsiP;userName = localStorage.xinxigongsiU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31058') {
          if (localStorage && localStorage.zhiyeP && localStorage.zhiyeU) {
            password = localStorage.zhiyeP;userName = localStorage.zhiyeU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31104') {
          if (localStorage && localStorage.nengjiaoP && localStorage.nengjiaoU) {
            password = localStorage.nengjiaoP;userName = localStorage.nengjiaoU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31007') {
          if (localStorage && localStorage.heilongjiangP && localStorage.heilongjiangU) {
            password = localStorage.heilongjiangP;userName = localStorage.heilongjiangU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31110') {
          if (localStorage && localStorage.chongqingP && localStorage.chongqingU) {
            password = localStorage.chongqingP;userName = localStorage.chongqingU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        } else if (port == '31112') {
          if (localStorage && localStorage.caiwuP && localStorage.caiwuU) {
            password = localStorage.caiwuP;userName = localStorage.caiwuU;
          } else {
            password = top.yspUser.getPassword();userName = top.yspUser.getUserName();
          }
        }if (password != '' && password != null && password != undefined && userName != '' && userName != null && userName != undefined) {
          $.ajax({ url: 'http://59.110.171.69:' + port + '/names.nsf?Login', type: 'post', data: { Username: userName, Password: password }, success: function (data) {
              if (data.indexOf('欢迎登录') == -1) {
                var dd = $(data);var dom;for (var i = 0; i < dd.length; i++) {
                  var tag = dd[i].tagName;if (tag == 'FORM') {
                    dom = dd[i];
                  }
                }var _web = dom && dom.querySelector("input[name='fldWebOfficeList']") && dom.querySelector("input[name='fldWebOfficeList']").value;localStorage.allWeb = _web;localStorage.allPort = port;localStorage.removeItem("inputCode");elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + _web + '/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              } else {
                alert('登录失败！请重新登录！');localStorage.inputCode = true;
              } // var _web = $(data)[7].querySelector("input[name='fldWebOfficeList']").value;
              // elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + _web + '/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
            }, error: function () {
              alert('登录失败！请重新登录！');localStorage.inputCode = true;
            } });
        }
      } else if (top.EAPI.isAndroid()) {// var password = topWin.yspUser.getPassword();
        // $.ajax({
        // 	url: 'http://59.110.171.69:31003/names.nsf',
        // 	type: 'post',
        // 	data: {Login:'',Username:userName,Password:password},
        // 	success:function(){
        // 	aWin.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
        // })
      } else {//   console.log('1');
          //   $.ajax({
          //     url: 'http://59.110.171.69:'+port+'/names.nsf?Login',
          //     type: 'post',
          //       Username: "66666668", //'80111719',//"80112499",
          //       Password:  "Vmeet1234**"// 'Abcd  4321'//"Test123456!"//
          //     },
          //     success: function () {
          //     }
        }
    },
    doAction_uiControl37_8R9wFI: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl37_8R9wFI: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", null);\n  }\n});';
    }
  }, "loginOA");
})(window, ysp);