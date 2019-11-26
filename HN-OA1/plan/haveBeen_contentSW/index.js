(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control63_dMcmCH: function (elem) {
      var data = [];var h1 = elem.querySelector("h1").textContent;data.push(h1);return data;
    },
    doAction_uiControl60_1qbAGI: function (data, elem) {
      elem.ownerDocument.defaultView.close();
    },
    getTemplate_uiControl60_1qbAGI: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount(){\n    var elem = this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    setTimeout(function(){\n      elem.scrollTop=0;\n    },500)\n  },\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    return (\n      <div className=\"ysp-header\" ref='toTop'>\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\n          {\n            data && data[0]\n          }\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentDidMount: function componentDidMount() {\n    var elem = this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    setTimeout(function () {\n      elem.scrollTop = 0;\n    }, 500);\n  },\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-header\", ref: \"toTop\" },\n      React.createElement(\"div\", { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        \"div\",\n        null,\n        data && data[0]\n      )\n    );\n  }\n});";
    },
    getData_control64_DqUJU9: function (elem) {
      var data = [];var title = elem.querySelector("input") ? elem.querySelector("input").value : elem.textContent;data.push(title);return data;
    },
    doAction_uiControl61_EeXDzR: function (data, elem) {},
    getTemplate_uiControl61_EeXDzR: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-content-top\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-content-top\" },\n      data\n    );\n  }\n});";
    },
    getData_control65_wVhOrl: function (elem) {
      ;if (!elem) {
        return;
      }var data = { content: [], fujian: [], liucheng: [], liuchengNUM: [], yijian: [], but: [], tuihuiTitle: [], tuihuiTitleFlag: [], commitLZ: [], treeBar: [], selectApar: [] }; //内容start
      var _qfr = elem.ownerDocument.querySelector("input[name='fldTM']");var qfr = "";if (_qfr) {
        qfr = _qfr.value;
      } else {
        qfr = elem.ownerDocument.querySelectorAll(".table_list_blk")[0].querySelector("dd").textContent;
      }var _zbbm = elem.ownerDocument.querySelectorAll(".table_list_blk")[1].querySelector("dd");var zbbm = "";if (_zbbm) {
        zbbm = _zbbm.textContent;
      }var _zsdwIndex = elem.ownerDocument.querySelectorAll(".table_list_blk")[2].querySelector("select");var zsdw = "";if (_zsdwIndex) {
        zsdw = elem.ownerDocument.querySelectorAll(".table_list_blk")[2].querySelector("select").options[_zsdwIndex.selectedIndex].text;
      } else {
        zsdw = elem.ownerDocument.querySelectorAll(".table_list_blk")[2].querySelector("dd").textContent.trim();
      }var _csdwIndex = elem.ownerDocument.querySelectorAll(".table_list_blk")[3].querySelector("select");var csdw = "";if (_csdwIndex) {
        csdw = elem.ownerDocument.querySelectorAll(".table_list_blk")[3].querySelector("select").options[_csdwIndex.selectedIndex].text;
      } else {
        csdw = elem.ownerDocument.querySelectorAll(".table_list_blk")[3].querySelector("dd").textContent.trim();
      }var _ngr = elem.ownerDocument.querySelectorAll(".table_list_blk")[4].querySelector("input");var ngr = "";if (_ngr) {
        ngr = _ngr.value;
      } else {
        ngr = elem.ownerDocument.querySelectorAll(".table_list_blk")[4].querySelector("dd").textContent;
      }var _rq = elem.ownerDocument.querySelectorAll(".table_list_blk")[5].querySelector("input");var rq = "";if (_rq) {
        rq = _rq.value;
      } else {
        rq = elem.ownerDocument.querySelectorAll(".table_list_blk")[5].querySelector("dd").textContent;
      }var _jdmcIndex = elem.ownerDocument.querySelectorAll(".table_list_blk")[6].querySelector("select");var jdmc = "";if (_jdmcIndex) {
        jdmc = elem.ownerDocument.querySelectorAll(".table_list_blk")[6].querySelector("select").options[_jdmcIndex.selectedIndex].text;
      } else {
        jdmc = elem.ownerDocument.querySelectorAll(".table_list_blk")[6].querySelector("dd").textContent;
      }var _dblx = elem.ownerDocument.querySelector("input[name='fldZBBMShow']");var dblx = "";if (_dblx) {
        dblx = _dblx.value;
      } else {
        dblx = elem.ownerDocument.querySelectorAll(".table_list_blk")[7].querySelector("dd").textContent.trim();
      }var _yj = elem.ownerDocument.querySelector("input[name='fldZRZ']");var yj = "";if (_yj) {
        yj = _yj.value;
      } else {
        yj = elem.ownerDocument.querySelectorAll(".table_list_blk")[8].querySelector("dd").textContent.trim();
      }var _ywh = elem.ownerDocument.querySelectorAll(".table_list_blk")[9].querySelector("dd");var ywh = "";if (_ywh) {
        ywh = _ywh.textContent;
      }var _ywrq = elem.ownerDocument.querySelector("input[name='fldYWRQ']");var ywrq = "";if (_ywrq) {
        ywrq = _ywrq.value;
      }var zysw = "";var fldZYSW1 = elem.ownerDocument.querySelector("input[name='fldZYSW']");if (fldZYSW1 && fldZYSW1.type == "radio") {
        fldZYSW1.checked ? zysw = "是" : zysw = "否";
      } else {
        zysw = fldZYSW1.value;
      }var sfgd = "";var fldZYSW2 = elem.ownerDocument.querySelector("input[name='fldSFGD']");if (fldZYSW2 && fldZYSW2.type == "radio") {
        fldZYSW2.checked ? sfgd = "是" : sfgd = "否";
      } else {
        sfgd = fldZYSW2.value;
      }data.content.push(qfr, zbbm, zsdw, csdw, ngr, rq, jdmc, dblx, yj, ywh, ywrq, zysw, sfgd); //内容end
      var liuchengTable = $(elem).find("#comment_table").find("tbody");if (liuchengTable.length == 0) {
        var obj = {};obj.text = '暂无流程';data.liucheng.push(obj);
      } else {
        liuchengTable.map(function (d, t) {
          if (d > 0) {
            var obj = {};obj.text = $(t).find("td").eq(0).text().replace(/\s/g, "");var str = $(t).find("td").eq(1).text();var arr = str.split(' ');obj.content = arr[1];obj.day = arr[2] + ' ' + arr[3];data.liucheng.push(obj);
          }
        });var obj2 = {};obj2.num = liuchengTable.length - 2;data.liuchengNUM.push(obj2);
      } //流程完
      return data;
    },
    doAction_uiControl62_TIcgxx: function (data, elem) {},
    getTemplate_uiControl62_TIcgxx: function () {
      var selfTemplate = "\nimport {Component} from 'react';\n\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag:true,//\u5185\u5BB9\n      flag1:false,//\u6D41\u7A0B\n      renderModal:true,\n    \n    }\n  }\n  handlerNR(e){\n    var that = this;\n    that.setState({\n      flag:true,\n      flag1:false,\n    })\n  }\n  \n  handlerLC(e){\n    var that = this;\n    that.setState({\n      flag:false,\n      flag1:true,\n    })\n  }\n  apiRender(){\n    var scorllH =document.body.clientHeight-200+'px';\n    var scorllY =document.body.clientHeight-100+'px';\n    var _this=this,data=this.props.customData\n    return(\n      <div>\n        <div style={{'height':scorllH,'overflow':'scroll'}}>\n          <div className=\"ysp-content-header\" style={{\"justify-content\": \"space-around\"}}>\n            <span className={this.state.flag == true ? \"ysp-content-header-button\" : \"\"} onClick={this.handlerNR.bind(this)}>\u5185\u5BB9</span>\n            <span className={this.state.flag1 == true ? \"ysp-content-header-button\" : \"\"}onClick={this.handlerLC.bind(this)}>\u6D41\u7A0B</span>\n          </div>\n          <div className=\"ysp-content-body\" >\n            {\n              this.state.flag == true ? \n                <div className=\"ysp-contentSW\">\n                  <div>\n                    <span>\u9898\u76EE</span>\n                    <span>{data && data.content[0]}</span>\n                  </div>\n                  <div>\n                    <span>\u6536\u6587\u6587\u53F7</span>\n                    <span>{data && data.content[1]}</span>\n                  </div>\n                  <div>\n                    <span>\u6587\u4EF6\u5BC6\u7EA7</span>\n                    <span>{data && data.content[2]}</span>\n                  </div>\n                  <div>\n                    <span>\u4FDD\u5BC6\u671F\u9650</span>\n                    <span>{data && data.content[3]}</span>\n                  </div>\n                  <div>\n                    <span>\u6536\u6587\u65E5\u671F</span>\n                    <span>{data && data.content[4]}</span>\n                  </div>\n                  <div>\n                    <span>\u9650\u529E\u65E5\u671F</span>\n                    <span>{data && data.content[5]}</span>\n                  </div>\n                  <div>\n                    <span>\u7D27\u6025\u7A0B\u5EA6</span>\n                    <span>{data && data.content[6]}</span>\n                  </div>\n                  <div>\n                    <span>\u6536\u6587\u5355\u4F4D</span>\n                    <span>{data && data.content[7]}</span>\n                  </div>\n                  <div>\n                    <span>\u6765\u6587\u5355\u4F4D</span>\n                    <span>{data && data.content[8]}</span>\n                  </div>\n                  <div>\n                    <span>\u539F\u6587\u53F7</span>\n                    <span>{data && data.content[9]}</span>\n                  </div>\n                  <div>\n                    <span>\u539F\u6587\u65E5\u671F</span>\n                    <span>{data && data.content[10]}</span>\n                  </div>\n                  <div>\n                    <span>\u91CD\u8981\u6536\u6587</span>\n                    <span>{data && data.content[11]}</span>\n                  </div>\n                  <div>\n                    <span>\u662F\u5426\u5F52\u6863</span>\n                    <span>{data && data.content[12]}</span>\n                  </div>\n\n                </div>\n                : this.state.flag1 == true ? \n                <div className='D_LC'>\n                  {data && data.liucheng.map(function(d,t){\n                    if(d.text=='\u6682\u65E0\u6D41\u7A0B') {\n                      return <div className='D_zanwuLC'>{d.text}</div>\n                    }else {\n                     return (<div className='D_liucheng'>\n                      <div>\n                        <span></span>\n                        <span className={data && data.liuchengNUM[0].num!=t?'d_xian':'abc'}></span>\n                      </div>\n                      <div>\n                        <div>{d.text}</div>\n                        <div>\n                          <p><span></span><span>{d.content}</span></p>\n                          <p><span></span><span>{d.day}</span></p>\n                        </div>\n                      </div>\n                    </div>)\n                    }\n                  })}\n                </div> : \"\"\n            }\n          </div>\n        </div>\n      </div>\n    )\n  }\n  render() {\n    var _this=this;\n    return <div ref=\"toTop\">{_this.state.renderModal?_this.apiRender():_this.commit()}</div>\n  }\n  \n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: true, //\u5185\u5BB9\n      flag1: false, //\u6D41\u7A0B\n      renderModal: true\n\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerNR',\n    value: function handlerNR(e) {\n      var that = this;\n      that.setState({\n        flag: true,\n        flag1: false\n      });\n    }\n  }, {\n    key: 'handlerLC',\n    value: function handlerLC(e) {\n      var that = this;\n      that.setState({\n        flag: false,\n        flag1: true\n      });\n    }\n  }, {\n    key: 'apiRender',\n    value: function apiRender() {\n      var scorllH = document.body.clientHeight - 200 + 'px';\n      var scorllY = document.body.clientHeight - 100 + 'px';\n      var _this = this,\n          data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { style: { 'height': scorllH, 'overflow': 'scroll' } },\n          React.createElement(\n            'div',\n            { className: 'ysp-content-header', style: { \"justify-content\": \"space-around\" } },\n            React.createElement(\n              'span',\n              { className: this.state.flag == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerNR.bind(this) },\n              '\\u5185\\u5BB9'\n            ),\n            React.createElement(\n              'span',\n              { className: this.state.flag1 == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerLC.bind(this) },\n              '\\u6D41\\u7A0B'\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-content-body' },\n            this.state.flag == true ? React.createElement(\n              'div',\n              { className: 'ysp-contentSW' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u9898\\u76EE'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[0]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6536\\u6587\\u6587\\u53F7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[1]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6587\\u4EF6\\u5BC6\\u7EA7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[2]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u4FDD\\u5BC6\\u671F\\u9650'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[3]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6536\\u6587\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[4]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u9650\\u529E\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[5]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u7D27\\u6025\\u7A0B\\u5EA6'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[6]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6536\\u6587\\u5355\\u4F4D'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[7]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6765\\u6587\\u5355\\u4F4D'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[8]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u539F\\u6587\\u53F7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[9]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u539F\\u6587\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[10]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u91CD\\u8981\\u6536\\u6587'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[11]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u662F\\u5426\\u5F52\\u6863'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[12]\n                )\n              )\n            ) : this.state.flag1 == true ? React.createElement(\n              'div',\n              { className: 'D_LC' },\n              data && data.liucheng.map(function (d, t) {\n                if (d.text == '\u6682\u65E0\u6D41\u7A0B') {\n                  return React.createElement(\n                    'div',\n                    { className: 'D_zanwuLC' },\n                    d.text\n                  );\n                } else {\n                  return React.createElement(\n                    'div',\n                    { className: 'D_liucheng' },\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement('span', null),\n                      React.createElement('span', { className: data && data.liuchengNUM[0].num != t ? 'd_xian' : 'abc' })\n                    ),\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'div',\n                        null,\n                        d.text\n                      ),\n                      React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                          'p',\n                          null,\n                          React.createElement('span', null),\n                          React.createElement(\n                            'span',\n                            null,\n                            d.content\n                          )\n                        ),\n                        React.createElement(\n                          'p',\n                          null,\n                          React.createElement('span', null),\n                          React.createElement(\n                            'span',\n                            null,\n                            d.day\n                          )\n                        )\n                      )\n                    )\n                  );\n                }\n              })\n            ) : \"\"\n          )\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { ref: 'toTop' },\n        _this.state.renderModal ? _this.apiRender() : _this.commit()\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "haveBeen_contentSW");
})(window, ysp);