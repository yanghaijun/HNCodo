(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control10_TTenKO: function (elem) {
      if (!elem) {
        return false;
      }var data = [];var trs = elem.children;[].forEach.call(trs, function (item, index) {
        if (index > 0 && item.textContent.replace(/^(\s+)|(\t+)|(\n+)$/g, '') != '') {
          var tds = item.querySelectorAll('td');var item = [];for (var i = 1; i < tds.length; i++) {
            item.push(tds[i].textContent);
          }data.push(item);
        }
      });return data;
    },
    doAction_uiControl6_deEmKd: function (data, elem) {
      if (data.eventType == 'click') {
        localStorage.removeItem('setStyle');var index = parseInt(data.dataCustom);index++;elem.children[index].querySelectorAll('td')[1].querySelector('a').click();ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl6_deEmKd: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.index = 0;\n  }\n  onClick=(e)=>{\n    if(e.target.nodeName !== \'UL\'){\n      if(e.target.nodeName == \'LI\'){\n        e.target = e.target.parentElement;\n      }\n      if(e.target.nodeName == \'SPAN\'){\n        e.target = e.target.parentElement.parentElement;\n      }\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.dataset.index,\n        eventType:\'click\'\n      })\n    }\n  }\n  render(){\n    var _this = this;\n    var data = this.props.customData;\n    if(data && data && data.length >0){\n        return (\n        <div className=\'Todo-list-content\'>\n         {data && data.map((item,index)=>{\n              return (\n              \t<ul className=\'list-content-ul show-false\' onClick={_this.onClick.bind(_this)} data-index={index}>\n            <li className=\'title\'>{data[index][0]}</li>\n           <li><span className=\'content-title\'>\u5DF2\u5347\u683C</span><span>{data[index][1]}</span></li>\n           <li><span className=\'content-title\'>\u6765\u81EA</span><span>{data[index][2]}</span></li>\n           <li><span className=\'content-title\'>\u53D1\u9001\u65E5\u671F</span><span>{data[index][3]}</span></li>\n           <li><span className=\'content-title\'>\u4F18\u5148\u7EA7</span><span>{data[index][4]}</span></li>\n           <li><span className=\'content-title\'>\u9644\u4EF6</span><span>{data[index][5]}</span></li>\n           <li><span className=\'content-title\'>\u5230\u671F\u65E5</span><span>{data[index][6]}</span></li>\n           <li><span className=\'content-title\'>\u72B6\u6001</span>{data[index][7]}<span></span></li>\n                <i className=\'list-icon-done\' onClick={(e)=>{\n                  var ul = e.target.parentElement;\n                  if(ul.classList.contains(\'show-false\')){\n                    ul.className = \'list-content-ul show-true\';\n                    ul.querySelector(\'i\').className = \'list-icon-up\';\n                  }else{\n                    ul.className = \'list-content-ul show-false\';\n                    ul.querySelector(\'i\').className = \'list-icon-done\';\n                  }\n              }}>\n            </i>\n              </ul>\n              )\n            })}\n        </div>\n      )\n    }else{\n      return (\n      \t<div className=\'Todo-list-content\' style={{margin:\'20px\',color:\'red\',textAlign:\'center\'}}> * \u6682\u65E0\u5F85\u529E\u4E8B\u9879 * </div>\n      )\n    }\n    \n  }\n}';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.onClick = function (e) {\n      if (e.target.nodeName !== 'UL') {\n        if (e.target.nodeName == 'LI') {\n          e.target = e.target.parentElement;\n        }\n        if (e.target.nodeName == 'SPAN') {\n          e.target = e.target.parentElement.parentElement;\n        }\n      }\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.dataset.index,\n          eventType: 'click'\n        });\n      }\n    };\n\n    _this2.index = 0;\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      if (data && data && data.length > 0) {\n        return React.createElement(\n          'div',\n          { className: 'Todo-list-content' },\n          data && data.map(function (item, index) {\n            return React.createElement(\n              'ul',\n              { className: 'list-content-ul show-false', onClick: _this.onClick.bind(_this), 'data-index': index },\n              React.createElement(\n                'li',\n                { className: 'title' },\n                data[index][0]\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u5DF2\\u5347\\u683C'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][1]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u6765\\u81EA'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][2]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u53D1\\u9001\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][3]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u4F18\\u5148\\u7EA7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][4]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u9644\\u4EF6'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][5]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u5230\\u671F\\u65E5'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data[index][6]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  { className: 'content-title' },\n                  '\\u72B6\\u6001'\n                ),\n                data[index][7],\n                React.createElement('span', null)\n              ),\n              React.createElement('i', { className: 'list-icon-done', onClick: function onClick(e) {\n                  var ul = e.target.parentElement;\n                  if (ul.classList.contains('show-false')) {\n                    ul.className = 'list-content-ul show-true';\n                    ul.querySelector('i').className = 'list-icon-up';\n                  } else {\n                    ul.className = 'list-content-ul show-false';\n                    ul.querySelector('i').className = 'list-icon-done';\n                  }\n                } })\n            );\n          })\n        );\n      } else {\n        return React.createElement(\n          'div',\n          { className: 'Todo-list-content', style: { margin: '20px', color: 'red', textAlign: 'center' } },\n          ' * \\u6682\\u65E0\\u5F85\\u529E\\u4E8B\\u9879 * '\n        );\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control2_5a64bK: function (elem) {
      if (!elem) {
        return false;
      }
    },
    doAction_uiControl1_MKsNb3: function (data, elem) {// if (data.eventType == 'click') {
      //   var a = elem.querySelector('a');
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
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  constructor(){\n    super();\n  }\n  componentDidMount(){\n    var _this = this\n    console.log(\'\u5F85\u529E\u5DE5\u4F5C\');\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  }\n  componentWillMount(){\n    var _this = this\n    console.log(\'\u5F85\u529E\u5DE5\u4F5C\');\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  }\n  render(){\n    return (\n    \t<div className = \'TodoList-head\'>\n      \t<span></span>\n        <span>SAP\u5F85\u529E\u5DE5\u4F5C</span>\n      </div>\n    )\n  }\n}';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      console.log('\u5F85\u529E\u5DE5\u4F5C');\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var _this = this;\n      console.log('\u5F85\u529E\u5DE5\u4F5C');\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'TodoList-head' },\n        React.createElement('span', null),\n        React.createElement(\n          'span',\n          null,\n          'SAP\\u5F85\\u529E\\u5DE5\\u4F5C'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
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
    getData_control3_lOS4Sp: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl2_sSDL4v: function (data, elem) {
      if (data.eventType == 'click') {
        var evt = document.createEvent("MouseEvents");evt.initMouseEvent("mousewheel", true, true);elem.dispatchEvent(evt); //   var scrollFunc = function (e) {
        //     var direct = 0;
        //     e = e || window.event;
        //     if (e.wheelDelta) {
        //       //判断浏览器IE，谷歌滑轮事件             
        //       if (e.wheelDelta > 0) {
        //         //当滑轮向上滚动时
        //         alert("滑轮向上滚动");
        //       }
        //       if (e.wheelDelta < 0) {
        //         //当滑轮向下滚动时
        //         alert("滑轮向下滚动");
        //       }
        //     } else if (e.detail) {
        //       //Firefox滑轮事件
        //       if (e.detail > 0) {
        //         //当滑轮向上滚动时
        //         alert("滑轮向上滚动");
        //       }
        //       if (e.detail < 0) {
        //         //当滑轮向下滚动时
        //         alert("滑轮向下滚动");
        //       }
        //     } //ScrollText(direct);
        //   }; //给页面绑定滑轮滚动事件
        //   if (document.addEventListener) {
        //     document.addEventListener('DOMMouseScroll', scrollFunc, false);
        //   } //滚动滑轮触发scrollFunc方法
        //   window.onmousewheel = document.onmousewheel = scrollFunc;
      }
    },
    getTemplate_uiControl2_sSDL4v: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n        <button onClick={this.handlerClick.bind(this)}>\u70B9\u51FB\u4E0B\u7FFB</button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'button\',\n        { onClick: this.handlerClick.bind(this) },\n        \'\\u70B9\\u51FB\\u4E0B\\u7FFB\'\n      )\n    );\n  }\n});';
    }
  }, "index");
})(window, ysp);