(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_smV5Jh: function (elem) {
      if (!elem) {
        return;
      }var data = [],
          user = $(elem).find('.login_form_text');var obj = {};obj.userName = $(user).eq(0).find('input').val();obj.type = $(user).eq(0).find('input')[0].getAttribute('type');var obj2 = {};obj2.passWorld = $(user).eq(1).find('input').val();obj2.type = $(user).eq(1).find('input')[0].getAttribute('type');data.push(obj);data.push(obj2);return data;
    },
    doAction_uiControl0_acry19: function (data, elem) {
      if (data.eventType == 'userName') {
        var data = data.dataCustom;var user = $(elem).find('.login_form_text').eq(0).find('input').val(data);
      } else if (data.eventType == 'passWorld') {
        var data = data.dataCustom;var user = $(elem).find('.login_form_text').eq(1).find('input').val(data);
      } else if (data.eventType == 'ButtonN') {
        ysp.appMain.showLoading();$(elem).find('.enter_system').find('input').click();
      }
    },
    getTemplate_uiControl0_acry19: function () {
      var selfTemplate = "module.exports = React.createClass({\n  userName:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'userName',\n        data:target.value\n      })\n    }\n  },\n  passWorld:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'passWorld',\n        data:target.value\n      })\n    }\n  },\n  ButtonN:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'ButtonN'\n      })\n    }\n  },\n  render: function() {\n    var me = this,data = this.props.customData\n    return (\n      <div className='D_login'>\n        <div className='loginTitle'>\n        \t<div>\n          \t\n          </div>\n          <div>\u529E\u516C\u81EA\u52A8\u5316\u7BA1\u7406\u7CFB\u7EDF</div>\n        </div>\n        <div className='loginText'><span></span><AInput  type={data[0].type} onChange={me.userName} value={data[0].userName}/></div>\n        <div className='loginTextp'><span></span><AInput  type={data[1].type} onChange={me.passWorld} value={data[1].password}/></div>\n        <div className='loginButton'><button onClick={me.ButtonN}>\u767B\u5F55</button></div>\n      </div>\n    )\n  }\n});\n";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  userName: function userName(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'userName\',\n        data: target.value\n      });\n    }\n  },\n  passWorld: function passWorld(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'passWorld\',\n        data: target.value\n      });\n    }\n  },\n  ButtonN: function ButtonN(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'ButtonN\'\n      });\n    }\n  },\n  render: function render() {\n    var me = this,\n        data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'D_login\' },\n      React.createElement(\n        \'div\',\n        { className: \'loginTitle\' },\n        React.createElement(\'div\', null),\n        React.createElement(\n          \'div\',\n          null,\n          \'\\u529E\\u516C\\u81EA\\u52A8\\u5316\\u7BA1\\u7406\\u7CFB\\u7EDF\'\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'loginText\' },\n        React.createElement(\'span\', null),\n        React.createElement(AInput, { type: data[0].type, onChange: me.userName, value: data[0].userName })\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'loginTextp\' },\n        React.createElement(\'span\', null),\n        React.createElement(AInput, { type: data[1].type, onChange: me.passWorld, value: data[1].password })\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'loginButton\' },\n        React.createElement(\n          \'button\',\n          { onClick: me.ButtonN },\n          \'\\u767B\\u5F55\'\n        )\n      )\n    );\n  }\n});';
    }
  }, "loginOA");
})(window, ysp);