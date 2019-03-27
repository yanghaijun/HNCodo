(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_MNFEsK: function (elem) {
      if (!elem) {
        return;
      }var arr = [];var userName = $(elem).find('#userName').val(),
          psw = $(elem).find('#psw').val();var obj = { userName: '' },
          obj2 = { psw: '' };obj.userName = userName;obj2.psw = psw;arr.push(obj);arr.push(obj2);return arr;
    },
    doAction_uiControl0_HCHJWN: function (data, elem) {
      var _d = data.customData;if (data.eventType == 'userName') {
        $(elem).find('#userName').val(_d);
      } else if (data.eventType == 'psw') {
        $(elem).find('#psw').val(_d);
      } else if (data.eventType == 'login') {
        $(elem).find('#tiJiaoForDengLu').click();
      } else if (data.eventType == 'reset') {
        $(elem).find('#userName')[0].value = '';$(elem).find('#psw')[0].value = '';
      }
    },
    getTemplate_uiControl0_HCHJWN: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  userName:function(e){  \n    \t\tvar target = e.target;\n    \t\tvar hanlder=this.props.customHandler;\n        if(hanlder){\n          hanlder({\n            eventType:"userName",\n            data:e.target.value\n          })\n        }\n  },\n  psw:function(e){  \n    \t\tvar target = e.target;\n    \t\tvar hanlder=this.props.customHandler;\n        if(hanlder){\n          hanlder({\n            eventType:"psw",\n            data:e.target.value\n          })\n        }\n  },\n  login:function(e){  \n    \t\tvar target = e.target;\n    \t\tvar hanlder=this.props.customHandler;\n        if(hanlder){\n              hanlder({\n                eventType:"login"\n              })\n            }\n  },\n  reset:function(e){  \n      var target = e.target;\n      var hanlder=this.props.customHandler;\n      if(hanlder){\n            hanlder({\n              eventType:"reset"\n            })\n          }\n  },\n  render: function() {\n    var data = this.props.customData,me = this;\n    return (\n      <div className=\'login\'>\n        <div>\u534E\u80FD\u96C6\u56E2\u7F51\u4E0A\u62A5\u9500\u7CFB\u7EDF</div>\n        <div>\n        \t<AInput placeholder=\'\u7528\u6237\u540D\' value={data[0].userName} onBlur={me.userName} />\n          <AInput placeholder=\'\u5BC6\u7801\' value={data[1].psw} onBlur={me.psw} />\n        </div>\n        <div>\n        \t<button onClick={me.reset}>\u91CD\u7F6E</button>\n          <button onClick={me.login}>\u767B\u5F55</button>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  userName: function userName(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: "userName",\n        data: e.target.value\n      });\n    }\n  },\n  psw: function psw(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: "psw",\n        data: e.target.value\n      });\n    }\n  },\n  login: function login(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: "login"\n      });\n    }\n  },\n  reset: function reset(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: "reset"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        me = this;\n    return React.createElement(\n      "div",\n      { className: "login" },\n      React.createElement(\n        "div",\n        null,\n        "\\u534E\\u80FD\\u96C6\\u56E2\\u7F51\\u4E0A\\u62A5\\u9500\\u7CFB\\u7EDF"\n      ),\n      React.createElement(\n        "div",\n        null,\n        React.createElement(AInput, { placeholder: "\\u7528\\u6237\\u540D", value: data[0].userName, onBlur: me.userName }),\n        React.createElement(AInput, { placeholder: "\\u5BC6\\u7801", value: data[1].psw, onBlur: me.psw })\n      ),\n      React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "button",\n          { onClick: me.reset },\n          "\\u91CD\\u7F6E"\n        ),\n        React.createElement(\n          "button",\n          { onClick: me.login },\n          "\\u767B\\u5F55"\n        )\n      )\n    );\n  }\n});';
    }
  }, "login");
})(window, ysp);