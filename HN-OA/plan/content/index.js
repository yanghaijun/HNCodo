(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4_yyTp9p: function (elem) {
      var data = [];var h1 = elem.querySelector("h1").textContent;data.push(h1);return data;
    },
    doAction_uiControl4_pPoU5D: function (data, elem) {
      if (data.eventType == "click") {
        var lis = elem.querySelectorAll("li");var index;for (var i = 0; i < lis.length; i++) {
          if (" 退出 " == lis[i].textContent) {
            index = i;
          }
        }elem.querySelectorAll("li") && elem.querySelectorAll("li")[index].querySelector("a").click();var elem = elem.ownerDocument;var dialog = $(elem).find('.ui_state_lock').find('table').find('.ui_buttons').find('input').eq(1);if (dialog.val() == '不保存') {
          dialog.click();
        }
      }
    },
    getTemplate_uiControl4_pPoU5D: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-header\" >\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\n          {data == \"\u516C\u53F8\u7B7E\u62A5\" ? \"\u516C\u53F8\u7B7E\u62A5\u6D41\u7A0B\" : \"\u516C\u53F8\u53D1\u6587\u6D41\u7A0B\"}\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-header\" },\n      React.createElement(\"div\", { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        \"div\",\n        null,\n        data == \"\u516C\u53F8\u7B7E\u62A5\" ? \"\u516C\u53F8\u7B7E\u62A5\u6D41\u7A0B\" : \"\u516C\u53F8\u53D1\u6587\u6D41\u7A0B\"\n      )\n    );\n  }\n});";
    },
    getData_control5_6FHMUS: function (elem) {
      var data = [];var title = elem.querySelector("input").value;data.push(title);return data;
    },
    doAction_uiControl5_2SEJrT: function (data, elem) {},
    getTemplate_uiControl5_2SEJrT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-content-top\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-content-top\" },\n      data\n    );\n  }\n});";
    },
    getData_control1_wc8USK: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [], fujian: [], liucheng: [], liuchengNUM: [], commitLZ: [], alert: [], selectApar: [] };var fujianDls = $(elem).find('.down_table_list').find('#down_table_list_text') && $(elem).find('.down_table_list').find('#down_table_list_text').find('dl');if (fujianDls.length != 0) {
        fujianDls.map(function (j, q) {
          var obj = {};var typePh = $(q).find('.file_name').find('a').text();var typeP = typePh.indexOf('xls') > -1 == true ? 'xls' : typePh.indexOf('ppt') > -1 == true ? 'ppt' : typePh.indexOf('exe') > -1 == true ? 'exe' : '';obj.typeP = typeP;obj.text = $(q).find('.file_name').find('a').text();obj.time = $(q).find('.file_num').find('span').text();data.fujian.push(obj);
        });
      } else {
        var obj = {};obj.typeP = '';obj.text = '暂无附件';obj.time = '';data.fujian.push(obj);
      } //附件完
      var liuchengTable = $(elem).find("#comment_table").find("tbody");if (liuchengTable.length == 0) {
        var obj = {};obj.text = '暂无流程';data.liucheng.push(obj);
      } else {
        liuchengTable.map(function (d, t) {
          if (d > 0) {
            var obj = {};obj.text = $(t).find("td").eq(0).text().replace(/\s/g, "");var str = $(t).find("td").eq(1).text();var arr = str.split(' ');obj.content = arr[1];var date = new Date();var day = date.getDay();if (day == '1') {
              day = '一';
            } else if (day == '2') {
              day = '二';
            } else if (day == '3') {
              day = '三';
            } else if (day == '4') {
              day = '四';
            } else if (day == '5') {
              day = '五';
            } else if (day == '6') {
              day = '六';
            } else if (day == '7') {
              day = '天';
            }obj.day = '星期' + day;data.liucheng.push(obj);
          }
        });var obj2 = {};obj2.num = liuchengTable.length - 2;data.liuchengNUM.push(obj2);
      } //流程完
      var commitLZS = $(elem).find('.path') && $(elem).find('.path').find('ul.path_btn') && $(elem).find('.path').find('ul.path_btn').find('span');commitLZS.map(function (d, t) {
        var obj = {};obj.textC = t.textContent;data.commitLZ.push(obj);
      }); //选择流向
      var alertw = $(elem).find('.qtip-content') && $(elem).find('.qtip-content');alertw.map(function (d, t) {
        if (t.textContent == '请填写办理意见。') {
          var obj = {};obj.text = t.textContent;obj.styles = t.parentElement.style.display == '' ? 'none' : 'block';data.alert.push(obj);
        }
      }); //选择流程时如果未填写意见需要返回填写意见
      var iframes = $(elem).find('.ui_border').find('.ui_loading').next()[0].contentDocument.documentElement;var selectflowuser = $(iframes).find('#selectflowuser').find('fieldset').eq(2);if (selectflowuser.children()[1].tagName == 'P') {
        var selects = selectflowuser.find('select') && selectflowuser.find('p');selects.map(function (d, t) {
          var obj = {};obj.text = t.textContent;obj.type = 'P';data.selectApar.push(obj);
        });
      } else {
        var selects = selectflowuser.find('select') && selectflowuser.find('select').find('option');selects.map(function (d, t) {
          var obj = {};obj.text = t.textContent;obj.type = 'SELECT';data.selectApar.push(obj);
        });
      } //选择办理人，需要跨iframe获取数据
      return data;
    },
    doAction_uiControl1_rKnnex: function (data, elem) {
      if (data.eventType == 'Liclick') {
        var data = data.dataCustom;var commitLZS = $(elem).find('.path') && $(elem).find('.path').find('ul.path_btn') && $(elem).find('.path').find('ul.path_btn');commitLZS.find('a').eq(data).click();
      } else if (data.eventType == 'closeChiosep') {}
    },
    getTemplate_uiControl1_rKnnex: function () {
      var selfTemplate = "import {Component} from 'react';\n\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag:true,\n      flag1:false,\n      flag2:false,\n      commitModal:false,\n      renderModal:true,\n      flowIndx:''\n    }\n  }\n  handlerNR(e){\n    var that = this;\n    that.setState({\n      flag:true,\n      flag1:false,\n      flag2:false,\n    })\n  }\n  handlerFJ(e){\n    var that = this;\n    that.setState({\n      flag:false,\n      flag1:true,\n      flag2:false,\n    })\n  }\n  handlerLC(e){\n    var that = this;\n    that.setState({\n      flag:false,\n      flag1:false,\n      flag2:true,\n    })\n  }\n\thandle(data,eventType) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({data,eventType});\n    }\n  }\n  commit(){\n    var me = this,data=this.props.customData;\n    return <div className='D_choiseFlow'>\n      <div className=\"ysp-header\" >\n        <div onClick={()=>{\n            this.setState({...this.state,commitModal:false,renderModal:true})\n          }}></div>\n        <div>\u8BF7\u9009\u62E9\u6D41\u5411</div>\n       </div>\n    \t<div className='D_flowList'>\n      \t{data.commitLZ.map(function(d,t){\n          return <li className={me.state.flowIndx==t?'changC':''} onClick={()=>{\n              me.handle(t,'Liclick')\n              me.setState({flowIndx:t})\n            }}><span>{d.textC}</span><span style={{display:me.state.flowIndx==t?'block':'none'}}>\u221A</span></li>\n        })}\n      </div>\n      <div style={{display:data.alert[0]&&data.alert[0].styles?data.alert[0].styles:'none'}} className='reBack'>{data.alert[0]&&data.alert[0].text}</div>\n      \n      <div style={{display:data.alert[0].styles=='none'?'block':'none'}} className='D_chiosePeople'>  \n      \t<div className=\"ysp-header\" >\n        <div onClick={()=>{\n            this.setState({...this.state,commitModal:false,renderModal:true})\n            me.handle('','closeChiosep')\n          }}></div>\n        <div>\u8BF7\u9009\u62E9\u529E\u7406\u4EBA</div>\n       </div>\n        {data.selectApar.map(function(d,t){\n           console.log(d.type)\n          return <li><span style={{display:d.type=='P'?'none':'block'}}></span>{d.text}</li>\n         \n        })}\n      </div> \n    </div>\n  }\n  apiRender(){\n    var _this=this,data=this.props.customData\n    return(\n    \t<div>\n        <div className=\"ysp-content-header\">\n          <span className={this.state.flag == true ? \"ysp-content-header-button\" : \"\"} onClick={this.handlerNR.bind(this)}>\u5185\u5BB9</span>\n          <span className={this.state.flag1 == true ? \"ysp-content-header-button\" : \"\"} onClick={this.handlerFJ.bind(this)}>\u9644\u4EF6</span>\n          <span className={this.state.flag2 == true ? \"ysp-content-header-button\" : \"\"}onClick={this.handlerLC.bind(this)}>\u6D41\u7A0B</span>\n        </div>\n        <div className=\"ysp-content-body\">\n        \t{\n            this.state.flag == true ? \n              <div>\u5185\u5BB9111</div>\n              : this.state.flag1 == true ? \n              <div className='D_fujian'>\n              \t{data.fujian.map(function(d,l){\n                  if(d.text=='\u6682\u65E0\u9644\u4EF6') {\n                    return <div className='D_zanwuFJ'>{d.text}</div>\n                  }else {\n                    var typeP,classType\n                    if(d.typeP=='exe') {\n                      typeP='W'\n                      classType='classTypeW'\n                    }else if(d.typeP=='ppt') {\n                      typeP='P'\n                      classType='classTypeP'\n                    }else if(d.typeP=='xls') {\n                      typeP='X'\n                      classType='classTypeX'\n                    }else {\n                      classType='classTypeo'\n                    }\n                    return (<div className='D_zanwuFJT'><span className={classType}>{typeP}</span><p>\u9644\u4EF6\uFF1A{d.text}</p></div>)\n                  }\n                })}\n               </div>\n              : this.state.flag2 == true ? \n              <div className='D_LC'>\n                {data.liucheng.map(function(d,t){\n                  if(d.text=='\u6682\u65E0\u6D41\u7A0B') {\n                    return <div className='D_zanwuLC'>{d.text}</div>\n                  }else {\n                   return (<div className='D_liucheng'>\n                    <div>\n                      <span></span>\n                      <span className={data.liuchengNUM[0].num!=t?'d_xian':'abc'}></span>\n                    </div>\n                    <div>\n                      <div>{d.text}</div>\n                      <div>\n                        <p><span></span><span>{d.content}</span></p>\n                        <p><span></span><span>{d.day}</span></p>\n                      </div>\n                    </div>\n                  </div>)\n                  }\n                })}\n              </div> : ''\n          }\n        </div>\n        <div className=\"ysp-content-bottom\">\n          <span>\u6682\u5B58</span>\n          <span onClick={()=>{\n              this.setState({...this.state,commitModal:true,renderModal:false})\n            }}>\u5B8C\u6210</span>\n        </div>\n      </div>\n    )\n  }\n  render() {\n    var _this=this;\n    return <div>{_this.state.renderModal?_this.apiRender():_this.commit()}</div>\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: true,\n      flag1: false,\n      flag2: false,\n      commitModal: false,\n      renderModal: true,\n      flowIndx: ''\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerNR',\n    value: function handlerNR(e) {\n      var that = this;\n      that.setState({\n        flag: true,\n        flag1: false,\n        flag2: false\n      });\n    }\n  }, {\n    key: 'handlerFJ',\n    value: function handlerFJ(e) {\n      var that = this;\n      that.setState({\n        flag: false,\n        flag1: true,\n        flag2: false\n      });\n    }\n  }, {\n    key: 'handlerLC',\n    value: function handlerLC(e) {\n      var that = this;\n      that.setState({\n        flag: false,\n        flag1: false,\n        flag2: true\n      });\n    }\n  }, {\n    key: 'handle',\n    value: function handle(data, eventType) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({ data: data, eventType: eventType });\n      }\n    }\n  }, {\n    key: 'commit',\n    value: function commit() {\n      var _this3 = this;\n\n      var me = this,\n          data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'D_choiseFlow' },\n        React.createElement(\n          'div',\n          { className: 'ysp-header' },\n          React.createElement('div', { onClick: function onClick() {\n              _this3.setState(_extends({}, _this3.state, { commitModal: false, renderModal: true }));\n            } }),\n          React.createElement(\n            'div',\n            null,\n            '\\u8BF7\\u9009\\u62E9\\u6D41\\u5411'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'D_flowList' },\n          data.commitLZ.map(function (d, t) {\n            return React.createElement(\n              'li',\n              { className: me.state.flowIndx == t ? 'changC' : '', onClick: function onClick() {\n                  me.handle(t, 'Liclick');\n                  me.setState({ flowIndx: t });\n                } },\n              React.createElement(\n                'span',\n                null,\n                d.textC\n              ),\n              React.createElement(\n                'span',\n                { style: { display: me.state.flowIndx == t ? 'block' : 'none' } },\n                '\\u221A'\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'div',\n          { style: { display: data.alert[0] && data.alert[0].styles ? data.alert[0].styles : 'none' }, className: 'reBack' },\n          data.alert[0] && data.alert[0].text\n        ),\n        React.createElement(\n          'div',\n          { style: { display: data.alert[0].styles == 'none' ? 'block' : 'none' }, className: 'D_chiosePeople' },\n          React.createElement(\n            'div',\n            { className: 'ysp-header' },\n            React.createElement('div', { onClick: function onClick() {\n                _this3.setState(_extends({}, _this3.state, { commitModal: false, renderModal: true }));\n                me.handle('', 'closeChiosep');\n              } }),\n            React.createElement(\n              'div',\n              null,\n              '\\u8BF7\\u9009\\u62E9\\u529E\\u7406\\u4EBA'\n            )\n          ),\n          data.selectApar.map(function (d, t) {\n            console.log(d.type);\n            return React.createElement(\n              'li',\n              null,\n              React.createElement('span', { style: { display: d.type == 'P' ? 'none' : 'block' } }),\n              d.text\n            );\n          })\n        )\n      );\n    }\n  }, {\n    key: 'apiRender',\n    value: function apiRender() {\n      var _this4 = this;\n\n      var _this = this,\n          data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'ysp-content-header' },\n          React.createElement(\n            'span',\n            { className: this.state.flag == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerNR.bind(this) },\n            '\\u5185\\u5BB9'\n          ),\n          React.createElement(\n            'span',\n            { className: this.state.flag1 == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerFJ.bind(this) },\n            '\\u9644\\u4EF6'\n          ),\n          React.createElement(\n            'span',\n            { className: this.state.flag2 == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerLC.bind(this) },\n            '\\u6D41\\u7A0B'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-content-body' },\n          this.state.flag == true ? React.createElement(\n            'div',\n            null,\n            '\\u5185\\u5BB9111'\n          ) : this.state.flag1 == true ? React.createElement(\n            'div',\n            { className: 'D_fujian' },\n            data.fujian.map(function (d, l) {\n              if (d.text == '\u6682\u65E0\u9644\u4EF6') {\n                return React.createElement(\n                  'div',\n                  { className: 'D_zanwuFJ' },\n                  d.text\n                );\n              } else {\n                var typeP, classType;\n                if (d.typeP == 'exe') {\n                  typeP = 'W';\n                  classType = 'classTypeW';\n                } else if (d.typeP == 'ppt') {\n                  typeP = 'P';\n                  classType = 'classTypeP';\n                } else if (d.typeP == 'xls') {\n                  typeP = 'X';\n                  classType = 'classTypeX';\n                } else {\n                  classType = 'classTypeo';\n                }\n                return React.createElement(\n                  'div',\n                  { className: 'D_zanwuFJT' },\n                  React.createElement(\n                    'span',\n                    { className: classType },\n                    typeP\n                  ),\n                  React.createElement(\n                    'p',\n                    null,\n                    '\\u9644\\u4EF6\\uFF1A',\n                    d.text\n                  )\n                );\n              }\n            })\n          ) : this.state.flag2 == true ? React.createElement(\n            'div',\n            { className: 'D_LC' },\n            data.liucheng.map(function (d, t) {\n              if (d.text == '\u6682\u65E0\u6D41\u7A0B') {\n                return React.createElement(\n                  'div',\n                  { className: 'D_zanwuLC' },\n                  d.text\n                );\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'D_liucheng' },\n                  React.createElement(\n                    'div',\n                    null,\n                    React.createElement('span', null),\n                    React.createElement('span', { className: data.liuchengNUM[0].num != t ? 'd_xian' : 'abc' })\n                  ),\n                  React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                      'div',\n                      null,\n                      d.text\n                    ),\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'p',\n                        null,\n                        React.createElement('span', null),\n                        React.createElement(\n                          'span',\n                          null,\n                          d.content\n                        )\n                      ),\n                      React.createElement(\n                        'p',\n                        null,\n                        React.createElement('span', null),\n                        React.createElement(\n                          'span',\n                          null,\n                          d.day\n                        )\n                      )\n                    )\n                  )\n                );\n              }\n            })\n          ) : ''\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-content-bottom' },\n          React.createElement(\n            'span',\n            null,\n            '\\u6682\\u5B58'\n          ),\n          React.createElement(\n            'span',\n            { onClick: function onClick() {\n                _this4.setState(_extends({}, _this4.state, { commitModal: true, renderModal: false }));\n              } },\n            '\\u5B8C\\u6210'\n          )\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        _this.state.renderModal ? _this.apiRender() : _this.commit()\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "content");
})(window, ysp);