(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_qttZ77: function (elem) {
      if (!elem) {
        return false;
      }var root = {};root.userName = elem.querySelector('#logonuidfield').value ? elem.querySelector('#logonuidfield').value : elem.querySelector(".urMsgBarErr") ? '' : localStorage.ERPUserName;root.pwd = elem.querySelector('#logonpassfield').value ? elem.querySelector('#logonpassfield').value : elem.querySelector(".urMsgBarErr") ? '' : localStorage.ERPPassWord;root.flag = elem.querySelector(".urMsgBarErr") ? true : false;return root;
    },
    doAction_uiControl0_kJwtTI: function (data, elem) {
      if (data.eventType == 'change') {
        if (data.dataCustom.name == '用户名') {
          elem.querySelector('#logonuidfield').value = data.dataCustom.value;
        } else if (data.dataCustom.name == '密码') {
          elem.querySelector('#logonpassfield').value = data.dataCustom.value;
        }
      }if (data.eventType == 'click') {
        if (data.dataCustom == '重置') {
          elem.querySelector('#logonuidfield').value = '';elem.querySelector('#logonpassfield').value = '';
        } else if (data.dataCustom == '登录') {
          elem.querySelector('.urBtnStdNew').click();localStorage.ERPUserName = elem.querySelector('#logonuidfield').value;localStorage.ERPPassWord = elem.querySelector('#logonpassfield').value;
          ysp.appMain.showLoading();
        }
      }if (data.eventType == 'didMount') {
        elem.querySelector('#logonuidfield').value = localStorage.ERPUserName ? localStorage.ERPUserName : '';elem.querySelector('#logonpassfield').value = localStorage.ERPPassWord ? localStorage.ERPPassWord : '';
      } // if (data.eventType == 'System') {
      //   // elem.ownerDocument.defaultView.open('http://10.1.128.155:85/ReimbursePlatform/', 'ERP');
      //   elem.ownerDocument.defaultView.location.href = 'http://10.1.128.155:85/ReimbursePlatform/';
      // }
    },
    getTemplate_uiControl0_kJwtTI: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  componentDidMount(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"didMount\"\n      })\n    }\n  }\n  // componentDidUpdate(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:\"didMount\"\n  //     })\n  //   }\n  // }\n  onChange(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{value:e.target.value,name:e.target.dataset.name},\n        eventType:'change'\n      })\n    }\n  }\n  onClick(e){\n    var handler = this.props.customHandler;\n    var prevSibling = e.target.parentElement.previousSibling;\n    prevSibling.querySelector('.userName').querySelector('input').value = '';\n    prevSibling.querySelector('.pwdName').querySelector('input').value = '';\n    if(handler){\n      handler({\n        data:e.target.dataset.name,\n        eventType:'click'\n      })\n    }\n  }\n  render(){\n    var data = this.props.customData;\n    return (\n    \t<div className = 'ysp-login'>\n      \t<div className = 'login-head'>\n        \t<span>SAP NetWearve Portal</span>\n          <div className = 'selected'><span onClick={(e)=>{\n                var handler = this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:'System'\n                  })\n                }\n              }}>System</span><span>|</span><span >ERP</span></div>\n        </div>\n        <div>\n        \t{\n            data && data.flag == true ? <div style={{'color':'red','text-align':'center','padding-bottom':'20px'}}>\n                  \u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF01\uFF01\n              </div> : ''\n          }\n        </div>\n        <div className = 'login-center'>\n        \t<div className =' userName'><i className='user-icon'></i><AInput type='text' data-name='\u7528\u6237\u540D'  onChange={this.onChange.bind(this)} value={data && data.userName} /></div>\n          <div className ='user pwdName'><i className='pwd-icon'></i><AInput type='password' data-name='\u5BC6\u7801' onChange={this.onChange.bind(this)} value = {data && data.pwd}/></div>\n        </div>\n        <div className = 'bth'>\n        \t<button className='reset' data-name = '\u91CD\u7F6E' onClick={this.onClick.bind(this)}>\u91CD\u7F6E</button><button className='login' data-name = '\u767B\u5F55' onClick={this.onClick.bind(this)}>\u767B\u5F55</button>\n        </div>\n      </div>\n    )\n  }\n}\n";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: "didMount"\n        });\n      }\n    }\n    // componentDidUpdate(){\n    //   var handler = this.props.customHandler;\n    //   if(handler){\n    //     handler({\n    //       eventType:"didMount"\n    //     })\n    //   }\n    // }\n\n  }, {\n    key: \'onChange\',\n    value: function onChange(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { value: e.target.value, name: e.target.dataset.name },\n          eventType: \'change\'\n        });\n      }\n    }\n  }, {\n    key: \'onClick\',\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var prevSibling = e.target.parentElement.previousSibling;\n      prevSibling.querySelector(\'.userName\').querySelector(\'input\').value = \'\';\n      prevSibling.querySelector(\'.pwdName\').querySelector(\'input\').value = \'\';\n      if (handler) {\n        handler({\n          data: e.target.dataset.name,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-login\' },\n        React.createElement(\n          \'div\',\n          { className: \'login-head\' },\n          React.createElement(\n            \'span\',\n            null,\n            \'SAP NetWearve Portal\'\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'selected\' },\n            React.createElement(\n              \'span\',\n              { onClick: function onClick(e) {\n                  var handler = _this2.props.customHandler;\n                  if (handler) {\n                    handler({\n                      eventType: \'System\'\n                    });\n                  }\n                } },\n              \'System\'\n            ),\n            React.createElement(\n              \'span\',\n              null,\n              \'|\'\n            ),\n            React.createElement(\n              \'span\',\n              null,\n              \'ERP\'\n            )\n          )\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          data && data.flag == true ? React.createElement(\n            \'div\',\n            { style: { \'color\': \'red\', \'text-align\': \'center\', \'padding-bottom\': \'20px\' } },\n            \'\\u767B\\u5F55\\u5931\\u8D25\\uFF0C\\u8BF7\\u68C0\\u67E5\\u7528\\u6237\\u540D\\u548C\\u5BC6\\u7801\\uFF01\\uFF01\'\n          ) : \'\'\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'login-center\' },\n          React.createElement(\n            \'div\',\n            { className: \' userName\' },\n            React.createElement(\'i\', { className: \'user-icon\' }),\n            React.createElement(AInput, { type: \'text\', \'data-name\': \'\\u7528\\u6237\\u540D\', onChange: this.onChange.bind(this), value: data && data.userName })\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'user pwdName\' },\n            React.createElement(\'i\', { className: \'pwd-icon\' }),\n            React.createElement(AInput, { type: \'password\', \'data-name\': \'\\u5BC6\\u7801\', onChange: this.onChange.bind(this), value: data && data.pwd })\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'bth\' },\n          React.createElement(\n            \'button\',\n            { className: \'reset\', \'data-name\': \'\\u91CD\\u7F6E\', onClick: this.onClick.bind(this) },\n            \'\\u91CD\\u7F6E\'\n          ),\n          React.createElement(\n            \'button\',\n            { className: \'login\', \'data-name\': \'\\u767B\\u5F55\', onClick: this.onClick.bind(this) },\n            \'\\u767B\\u5F55\'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "login");
})(window, ysp);