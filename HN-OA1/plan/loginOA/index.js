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
      if (top.EAPI.isIOS()) {
        var password = top.yspUser.getPassword();if (password == "" || password == undefined || password == null) {
          if (port == '31003') {
            if (localStorage.password == undefined || localStorage.username == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31000') {
            if (localStorage.caofeidianP == undefined || localStorage.caofeidianU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31044') {
            if (localStorage.huabeiP == undefined || localStorage.huabeiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31021') {
            if (localStorage.ningxiaP == undefined || localStorage.ningxiaU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31025') {
            if (localStorage.gansuP == undefined || localStorage.gansuU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31015') {
            if (localStorage.xinjiangP == undefined || localStorage.xinjiangU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31031') {
            if (localStorage.fujianP == undefined || localStorage.fujianU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31035') {
            if (localStorage.guangdongP == undefined || localStorage.guangdongU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31059') {
            if (localStorage.xinnengyuanP == undefined || localStorage.xinnengyuanU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31060') {
            if (localStorage.jiangsuP == undefined || localStorage.jiangsuU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31017') {
            if (localStorage.zhaobiaoP == undefined || localStorage.zhaobiaoU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31067') {
            if (localStorage.hebeiP == undefined || localStorage.hebeiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31042') {
            if (localStorage.hunanP == undefined || localStorage.hunanU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31046') {
            if (localStorage.shanxiP == undefined || localStorage.shanxiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31069') {
            if (localStorage.guizhouP == undefined || localStorage.guizhouU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31020') {
            if (localStorage.jilinP == undefined || localStorage.jilinU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31039') {
            if (localStorage.qinghaiP == undefined || localStorage.qinghaiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31033') {
            if (localStorage.hainanP == undefined || localStorage.hainanU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31051') {
            if (localStorage.hubeiP == undefined || localStorage.hubeiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31029') {
            if (localStorage.xionganP == undefined || localStorage.xionganU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31037') {
            if (localStorage.yajiangP == undefined || localStorage.yajiangU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          }
        } else {
          obj4.display = "none";
        }
      } else if (top.EAPI.isAndroid()) {
        var password = huaneng.getPassword();if (password == "" || password == undefined || password == null) {
          if (port == '31003') {
            if (localStorage.password == undefined || localStorage.username == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31000') {
            if (localStorage.caofeidianP == undefined || localStorage.caofeidianU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31044') {
            if (localStorage.huabeiP == undefined || localStorage.huabeiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31021') {
            if (localStorage.ningxiaP == undefined || localStorage.ningxiaU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31025') {
            if (localStorage.gansuP == undefined || localStorage.gansuU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31015') {
            if (localStorage.xinjiangP == undefined || localStorage.xinjiangU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31031') {
            if (localStorage.fujianP == undefined || localStorage.fujianU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31035') {
            if (localStorage.guangdongP == undefined || localStorage.guangdongU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31059') {
            if (localStorage.xinnengyuanP == undefined || localStorage.xinnengyuanU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31060') {
            if (localStorage.jiangsuP == undefined || localStorage.jiangsuU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31017') {
            if (localStorage.zhaobiaoP == undefined || localStorage.zhaobiaoU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31067') {
            if (localStorage.hebeiP == undefined || localStorage.hebeiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31042') {
            if (localStorage.hunanP == undefined || localStorage.hunanU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31046') {
            if (localStorage.shanxiP == undefined || localStorage.shanxiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31069') {
            if (localStorage.guizhouP == undefined || localStorage.guizhouU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31020') {
            if (localStorage.jilinP == undefined || localStorage.jilinU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31039') {
            if (localStorage.qinghaiP == undefined || localStorage.qinghaiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31033') {
            if (localStorage.hainanP == undefined || localStorage.hainanU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31051') {
            if (localStorage.hubeiP == undefined || localStorage.hubeiU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31029') {
            if (localStorage.xionganP == undefined || localStorage.xionganU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          } else if (port == '31037') {
            if (localStorage.yajiangP == undefined || localStorage.yajiangU == undefined) {
              obj4.display = "block";
            } else {
              obj4.display = "none";
            }
          }
        } else {
          obj4.display = "none";
        }
      } else {// if(localStorage.password){
        // obj4.display = "none";
        // console.log(localStorage.password)
        // }else if(!localStorage.password){
        // obj4.display = "block"; 
        // }
        // obj4.display = "block";
      }data.push(obj4);return data;
    }, doAction_uiControl0_acry19: function (data, elem) {
      if (data.eventType == "userName") {
        var data = data.dataCustom;var user = $(elem).find('.login_form_text').eq(0).find('input').val(data);
      } else if (data.eventType == 'passWorld') {
        var data = data.dataCustom;var user = $(elem).find('.login_form_text').eq(1).find('input').val(data);
      } else if (data.eventType == 'ButtonN') {
        ysp.appMain.showLoading();var port = elem.ownerDocument.defaultView.location.port;$.ajax({ url: 'http://59.110.171.69:' + port + '/names.nsf?Login', type: 'post', data: { Username: $(elem).find('.login_form_text').eq(0).find('input').val(), Password: $(elem).find('.login_form_text').eq(1).find('input').val() }, success: function success(data) {
            debugger; // if ($(data)[7].querySelector("input[name='fldWebOfficeList']")) {
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
                localStorage.fujianP = $(elem).find('.login_form_text').eq(1).find('input').val();
                localStorage.fujianU = $(elem).find('.login_form_text').eq(0).find('input').val();
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
                localStorage.guizhouP = $(elem).find('.login_form_text').eq(1).find('input').val();
                localStorage.guizhouU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31020') {
                //吉林
                localStorage.jilinP = $(elem).find('.login_form_text').eq(1).find('input').val();localStorage.jilinU = $(elem).find('.login_form_text').eq(0).find('input').val();
              } else if (port == '31039') {
                //青海
                localStorage.qinghaiP = $(elem).find('.login_form_text').eq(1).find('input').val();
                localStorage.qinghaiU = $(elem).find('.login_form_text').eq(0).find('input').val();
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
              }if (port == '31000') {
                elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/WebOfficehncfd/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              } else if (port == '31039') {
                elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/WebOfficexny/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              } else {
                elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              }
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
        var password;var userName;if (port == '31003') {
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
        }$.ajax({ url: 'http://59.110.171.69:' + port + '/names.nsf?Login', type: 'post', data: { Username: userName, Password: password // Username: 80111719,
            // Password: "Abcd  4321"
          }, success: function (data) {
            if (data.indexOf('欢迎登录') == -1) {
              if (port == '31000') {
                //曹妃甸
                elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/WebOfficehncfd/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              } else if (port == '31039') {
                //青海
                elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/WebOfficexny/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              } else {
                elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
              }
            } // var _web = $(data)[7].querySelector("input[name='fldWebOfficeList']").value;
            // elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + _web + '/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
          } });
      } else if (top.EAPI.isAndroid()) {// var userName = topWin.yspUser.getUserName();
        // var password = topWin.yspUser.getPassword();
        // $.ajax({
        // 	url: 'http://59.110.171.69:31003/names.nsf',
        // 	type: 'post',
        // 	data: {Login:'',Username:userName,Password:password},
        // 	success:function(){
        // 	aWin.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
        // 	}
        // })
      } else {//   console.log('1');
          //   $.ajax({
          //     url: 'http://59.110.171.69:'+port+'/names.nsf?Login',
          //     type: 'post',
          //     data: {
          //       Username: "66666668", //'80111719',//"80112499",
          //       Password:  "Vmeet1234**"// 'Abcd  4321'//"Test123456!"//
          //     },
          //     success: function () {
          //     }
          //   });
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