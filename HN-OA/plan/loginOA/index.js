(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_smV5Jh: function (elem) {
      if (!elem) {
        return;
      }var data = [],
          user = $(elem).find('.login_form_text');var obj = {};obj.userName = $(user).eq(0).find('input').val();obj.type = $(user).eq(0).find('input')[0].getAttribute('type');var obj2 = {};obj2.passWorld = $(user).eq(1).find('input').val();obj2.type = $(user).eq(1).find('input')[0].getAttribute('type');data.push(obj);data.push(obj2);var obj3 = { text: '' };var freeowbr = $(elem).parent().parent().parent().find('#freeow-br').find('.smokey');freeowbr && freeowbr.find('p').map(function (d, t) {
        //var obj3 = {};
        obj3.text = t.textContent;
      });data.push(obj3);return data;
    },
    doAction_uiControl0_acry19: function (data, elem) {// if (data.eventType == 'userName') {
      //   var data = data.dataCustom;
      //   var user = $(elem).find('.login_form_text').eq(0).find('input').val(data);
      // } else if (data.eventType == 'passWorld') {
      //   var data = data.dataCustom;
      //   var user = $(elem).find('.login_form_text').eq(1).find('input').val(data);
      // } else if (data.eventType == 'ButtonN') {
      //   ysp.appMain.showLoading();
      //   $(elem).find('.enter_system').find('input').click();
      //   setTimeout(function () {
      //     ysp.appMain.hideLoading();
      //   }, 500);
      // }
      // if (data.eventType == 'login') {
      //   //获取用户名和密码，自动登录
      //   if (top.EAPI.isAndroid()) {
      //     var userName = huaneng.getUserName();
      //     var password = huaneng.getPassword();
      //     $(elem).find('.login_form_text').eq(0).find('input').val(userName);
      //     $(elem).find('.login_form_text').eq(1).find('input').val(password);
      //     $(elem).find('.enter_system').find('input').click();
      //   } else if (top.EAPI.isIOS()) {
      //     var userName = top.yspUser.getUserName();
      //     var password = top.yspUser.getPassword();
      //     $(elem).find('.login_form_text').eq(0).find('input').val(userName);
      //     $(elem).find('.login_form_text').eq(1).find('input').val(password);
      //     $(elem).find('.enter_system').find('input').click();
      //   } else {}
      // }
      // if (data.eventType == "loginButton") {
      //   //密码错误时调用
      //   var text = data.dataCustom;
      //   if (text && text != "" && (text.indexOf("账号或密码填写错误") > -1 || text.indexOf("密码不能为空") > -1)) {
      //     if (top.EAPI.isAndroid()) {
      //       huaneng.showPasswordError();
      //     } else if (top.EAPI.isIOS()) {
      //       top.EAPI.postMessageToNative("OAPasswordIsError");
      //     }
      //   }
      // }
    },
    getTemplate_uiControl0_acry19: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  \n  componentWillMount(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"login"\n      })\n    }\n  },\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:"login"\n  //     })\n  //   }\n  // },\n  componentDidUpdate(){\n    var handler = this.props.customHandler;\n    var text = this.props.customData && this.props.customData[2].text;\n    if(handler){\n      handler({\n        eventType:"loginButton",\n        data:text\n      })\n    }\n  },\n  userName:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'userName\',\n        data:target.value\n      })\n    }\n  },\n  passWorld:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'passWorld\',\n        data:target.value\n      })\n    }\n  },\n  ButtonN:function(e){\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if(handler){\n        handler({\n          eventType:\'ButtonN\'\n        })\n    \t}\n  },\n  componentDidMount: function(){\n    this.props.customHandler({\n      eventType:\'123\'\n    })\n  },\n  render: function() {\n    var me = this,data = this.props.customData\n    return (\n      <div className=\'D_login\'>\n        <div className=\'loginTitle\'>\n        \t<div>\n          \t\n          </div>\n          <div>\u529E\u516C\u81EA\u52A8\u5316\u7BA1\u7406\u7CFB\u7EDF</div>\n        </div>\n        \n        {\n          /*\n          <div className=\'loginText\'><span></span><AInput  type={data[0].type} onChange={me.userName} value={data[0].userName}/></div>\n        <div className=\'loginTextp\'><span></span><AInput  type={data[1].type} onChange={me.passWorld} value={data[1].password}/></div>\n        <div className=\'freeow-br\'>\n        \t{data.map(function(q,l){\n           if(l>1){\n             return <p>{q.text}</p>\n           }\n          })}\n        </div>\n        <div className=\'loginButton\'><button onClick={me.ButtonN}>\u767B\u5F55</button></div>\n          */\n        }\n        \n      </div>\n    )\n  }\n});\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n  componentWillMount: function componentWillMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: "login"\n      });\n    }\n  },\n\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:"login"\n  //     })\n  //   }\n  // },\n  componentDidUpdate: function componentDidUpdate() {\n    var handler = this.props.customHandler;\n    var text = this.props.customData && this.props.customData[2].text;\n    if (handler) {\n      handler({\n        eventType: "loginButton",\n        data: text\n      });\n    }\n  },\n\n  userName: function userName(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'userName\',\n        data: target.value\n      });\n    }\n  },\n  passWorld: function passWorld(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'passWorld\',\n        data: target.value\n      });\n    }\n  },\n  ButtonN: function ButtonN(e) {\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'ButtonN\'\n      });\n    }\n  },\n  componentDidMount: function componentDidMount() {\n    this.props.customHandler({\n      eventType: \'123\'\n    });\n  },\n  render: function render() {\n    var me = this,\n        data = this.props.customData;\n    return React.createElement(\n      "div",\n      { className: "D_login" },\n      React.createElement(\n        "div",\n        { className: "loginTitle" },\n        React.createElement("div", null),\n        React.createElement(\n          "div",\n          null,\n          "\\u529E\\u516C\\u81EA\\u52A8\\u5316\\u7BA1\\u7406\\u7CFB\\u7EDF"\n        )\n      )\n    );\n  }\n});';
    },
    getData_control38_UpuyAZ: function (elem) {
      if (top.EAPI.isIOS()) {
        var userName = top.yspUser.getUserName();var password = top.yspUser.getPassword();$.ajax({ url: 'http://59.110.171.69:31003/names.nsf?Login', type: 'post', data: { Username: userName, Password: password }, success: function () {
            elem.ownerDocument.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
          } });
      } else if (top.EAPI.isAndroid()) {// var userName = top.huaneng.getUserName();
        // var password = top.huaneng.getPassword();
        // $.ajax({
        //   url: 'http://59.110.171.69:31003/names.nsf?Login',
        //   type: 'post',
        //   data: {
        //     Username: userName,
        //     Password: password
        //   },
        //   success: function () {
        //     elem.ownerDocument.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
        //   }
        // });
      } else {
        $.ajax({ url: 'http://59.110.171.69:31003/names.nsf?Login', type: 'post', data: { Username: '80112499', Password: 'Test123456!' }, success: function () {//elem.ownerDocument.location.href = 'http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf';
          } });
      }
    },
    doAction_uiControl37_8R9wFI: function (data, elem) {},
    getTemplate_uiControl37_8R9wFI: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});';
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", null);\n  }\n});";
    }
  }, "loginOA");
})(window, ysp);