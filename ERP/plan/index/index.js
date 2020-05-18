(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2_5a64bK: function (elem) {
      if (!elem) {
        return false;
      }
    },
    doAction_uiControl1_MKsNb3: function (data, elem) {//   var a = elem.querySelector('a');
      //   var evt = new Event('click');
      //   a.dispatchEvent(evt);
      //   elem.ownerDocument.defaultView.SAPTreeNodeStatic_onclick.call(elem, evt);
      //   setTimeout(function () {
      //     if (elem.ownerDocument.defaultView.SAPTreeNodeStatic_onclick) {
      //       elem.ownerDocument.defaultView.SAPTreeNodeStatic_onclick.call(elem, evt);
      //     }
      //   }, 600);
      // }
    },
    getTemplate_uiControl1_MKsNb3: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n  }\n  componentDidMount(){\n    var _this = this\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  }\n  componentWillMount(){\n    var _this = this\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  }\n  render(){\n    return (\n    \t<div className = 'TodoList-head'>\n      \t<span></span>\n        <span>\u5F85\u529E\u5DE5\u4F5C</span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'TodoList-head' },\n        React.createElement('span', null),\n        React.createElement(\n          'span',\n          null,\n          '\\u5F85\\u529E\\u5DE5\\u4F5C'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control13_B5zPVh: function (elem) {
      if (!elem) {
        return;
      } //console.log(elem);
    },
    doAction_uiControl9_9tkt7T: function (data, elem) {
      if (data.eventType == 'click') {
        var all = elem && elem.querySelector("#DetailedNavigationTree").querySelectorAll("a");var a = [];for (var i = 0; i < all.length; i++) {
          if (all[i].textContent == '待办工作') {
            a.push(all[i]);
          }
        }var evt = document.createEvent("MouseEvents");evt.initMouseEvent("click", true, true);a && a[0].dispatchEvent(evt);setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 4000); //a && a[0].click();
      }
    },
    getTemplate_uiControl9_9tkt7T: function () {
      var selfTemplate = "module.exports = React.createClass({\n  hanlderClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  \n  componentDidMount(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  componentDidUpdate(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  hanlderClick: function hanlderClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  componentDidMount: function componentDidMount() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement('div', null);\n  }\n});";
    },

    getData_control14_HemzT1: function (elem) {
      if (!elem) {
        return;
      }return true;
    },
    doAction_uiControl10_MlEMZh: function (data, elem) {
      if (data.eventType == 'click') {
        var name = data.dataCustom;ysp.appMain.showLoading();if (name == "上翻") {
          elem && elem.querySelector('div[acf="Prev"]').click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 1000);
        } else {
          elem && elem.querySelector('div[acf="Nxt"]').click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 1000);
        }
      }
    },
    getTemplate_uiControl10_MlEMZh: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:e.target.dataset.name\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n      \t{\n          data ? <div className="ysp-index-page">\n            <span onClick={this.handlerClick.bind(this)} data-name="\u4E0A\u7FFB">\u4E0A\u7FFB\u9875</span>\n            <span onClick={this.handlerClick.bind(this)} data-name="\u4E0B\u7FFB">\u4E0B\u7FFB\u9875</span>\n          </div> : \'\'\n        }\n      </div>\n      \n    )\n  }\n});';
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.dataset.name\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      null,\n      data ? React.createElement(\n        \"div\",\n        { className: \"ysp-index-page\" },\n        React.createElement(\n          \"span\",\n          { onClick: this.handlerClick.bind(this), \"data-name\": \"\\u4E0A\\u7FFB\" },\n          \"\\u4E0A\\u7FFB\\u9875\"\n        ),\n        React.createElement(\n          \"span\",\n          { onClick: this.handlerClick.bind(this), \"data-name\": \"\\u4E0B\\u7FFB\" },\n          \"\\u4E0B\\u7FFB\\u9875\"\n        )\n      ) : ''\n    );\n  }\n});";
    },
    getData_control4_kZIJlO: function (elem) {
      if (!elem) {
        return false;
      }var data = []; //console.log(elem);
      var trs = elem.children;[].forEach.call(trs, function (item, index) {
        if (index > 0 && item.textContent.replace(/^(\s+)|(\t+)|(\n+)$/g, '') != '') {
          var tds = item.querySelectorAll('td');var item = [];for (var i = 1; i < tds.length; i++) {
            item.push(tds[i].textContent);
          }data.push(item);
        }
      });return data;
    },
    doAction_uiControl3_HTiF2s: function (data, elem) {
      if (data.eventType == 'click') {
        //localStorage.removeItem('setStyle');
        var index = data.dataCustom.index;var liucheng = data.dataCustom.lc;var index = parseInt(index) + 2; //index ++;
        localStorage.liuchengText = liucheng;elem.children[index].querySelectorAll('td')[3].querySelector('a').click();ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl3_HTiF2s: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.index = 0;\n  }\n  onClick=(e)=>{\n    if(e.target.nodeName !== 'UL'){\n      if(e.target.nodeName == 'LI'){\n        e.target = e.target.parentElement;\n      }\n      if(e.target.nodeName == 'SPAN'){\n        e.target = e.target.parentElement.parentElement;\n      }\n      if(e.target.nodeName == 'I'){\n        return;\n      }\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          index:e.target.dataset.index,\n          lc:e.target.dataset.liucheng,\n        }\n      })\n    }\n  }\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData;\n    if(data && data.length >0){\n        return (\n        \t<div className='Todo-list-content'>\n         \t\t{data && data.map((item,index)=>{\n              return (\n              \t<ul className='list-content-ul show-false' onClick={_this.onClick.bind(_this)} data-index={index} data-liucheng={data[index][3]}>\n                <li className='title'>{data[index][2]}</li>\n               \t<li><span className='content-title'>\u6D41\u7A0B\u53F7</span><span>{data[index][0]}</span></li>\n               \t<li><span className='content-title'>\u4F18\u5148\u7EA7</span><span>{data[index][1]}</span></li>\n               \t<li><span className='content-title'>\u4E1A\u52A1\u6D41\u7A0B</span><span>{data[index][3]}</span></li>\n               \t<li><span className='content-title'>\u7533\u8BF7\u4EBA</span><span>{data[index][4]}</span></li>\n               \t<li><span className='content-title'>\u53D1\u9001\u65E5\u671F</span><span>{data[index][5]}</span></li>\n               \t<li><span className='content-title'>\u516C\u53F8\u540D\u79F0</span><span>{data[index][6]}</span></li>\n               \t<li><span className='content-title'>\u6B65\u9AA4\u63CF\u8FF0</span><span>{data[index][7]}</span></li>\n                <li><span className='content-title'>\u6D41\u7A0B\u6765\u6E90</span><span>{data[index][8]}</span></li>\n               \t<li><span className='content-title'>\u516C\u53F8\u7F16\u7801</span><span>{data[index][9]}</span></li>\n                <i className='list-icon-done' onClick={(e)=>{\n                  var ul = e.target.parentElement;\n                  if(ul.classList.contains('show-false')){\n                    ul.className = 'list-content-ul show-true';\n                    ul.querySelector('i').className = 'list-icon-up';\n                  }else{\n                    ul.className = 'list-content-ul show-false';\n                    ul.querySelector('i').className = 'list-icon-done';\n                  }\n              }}>\n            </i>\n              </ul>\n              )\n            })}\n        </div>\n      )\n    }else{\n      return (\n      \t<div className='Todo-list-content' style={{color:'red',textAlign:'center','left':'0','right':'0'}}>\n          \n          {\n            /*\n            \tsetTimeout(function(){\n              <div>* \u6682\u65E0\u5F85\u529E\u4E8B\u9879 *</div>\n            },3000)\n            */\n          }\n        </div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.onClick = function (e) {\n      if (e.target.nodeName !== 'UL') {\n        if (e.target.nodeName == 'LI') {\n          e.target = e.target.parentElement;\n        }\n        if (e.target.nodeName == 'SPAN') {\n          e.target = e.target.parentElement.parentElement;\n        }\n        if (e.target.nodeName == 'I') {\n          return;\n        }\n      }\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click',\n          data: {\n            index: e.target.dataset.index,\n            lc: e.target.dataset.liucheng\n          }\n        });\n      }\n    };\n\n    _this2.index = 0;\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      if (data && data.length > 0) {\n        return React.createElement(\n          'div',\n          { className: 'Todo-list-content' },\n          data && data.map(function (item, index) {\n            return React.createElement(\n              'ul',\n              { className: 'list-content-ul show-false', onClick: _this.onClick.bind(_this), 'data-index': index, 'data-liucheng': data[index][3] },\n              React.createElement(\n                'li',\n                { className: 'title' },\n                data[index][2]\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u6D41\\u7A0B\\u53F7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][0]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u4F18\\u5148\\u7EA7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][1]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u4E1A\\u52A1\\u6D41\\u7A0B'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][3]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u7533\\u8BF7\\u4EBA'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][4]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u53D1\\u9001\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][5]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u516C\\u53F8\\u540D\\u79F0'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][6]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u6B65\\u9AA4\\u63CF\\u8FF0'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][7]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u6D41\\u7A0B\\u6765\\u6E90'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][8]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u516C\\u53F8\\u7F16\\u7801'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][9]\n                )\n              ),\n              React.createElement('i', { className: 'list-icon-done', onClick: function onClick(e) {\n                  var ul = e.target.parentElement;\n                  if (ul.classList.contains('show-false')) {\n                    ul.className = 'list-content-ul show-true';\n                    ul.querySelector('i').className = 'list-icon-up';\n                  } else {\n                    ul.className = 'list-content-ul show-false';\n                    ul.querySelector('i').className = 'list-icon-done';\n                  }\n                } })\n            );\n          })\n        );\n      } else {\n        return React.createElement('div', { className: 'Todo-list-content', style: { color: 'red', textAlign: 'center', 'left': '0', 'right': '0' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "index");
})(window, ysp);