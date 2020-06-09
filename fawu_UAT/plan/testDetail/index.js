(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2_4aOJG1: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl1_iPEEFz: function (data, elem) {
      if (data.eventType == "click") {
        elem.ownerDocument.defaultView.parent.close();elem.ownerDocument.defaultView.open('http://ihn.chng.com.cn:10008/webdynpro/resources/sap.com/pb/PageBuilder?PagePath=pcd%3Aportal_content%2Fcom.hnjt.HNJT%2Fcom.hnjt.XTGL%2Fcom.hnjt.Role%2FZHNJT_CLM_TY001%2FGRGZ1%2F____%2FNew_Page&sap-ext-sid=' + top.sap_sid);
      }
    },
    getTemplate_uiControl1_iPEEFz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className = 'ysp-detail-header'>\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u5408\u540C\u5BA1\u6279</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-detail-header' },\n      React.createElement('div', { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        'div',\n        null,\n        '\\u5408\\u540C\\u5BA1\\u6279'\n      )\n    );\n  }\n});";
    },
    getData_control8_sVCKxt: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl7_p0CfZg: function (data, elem) {},
    getTemplate_uiControl7_p0CfZg: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"detail-title\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"detail-title\" },\n      data\n    );\n  }\n});";
    },

    getData_control13_AmHrTH: function (elem) {
      if (!elem) {
        return;
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaEnding: [], ideaPerson: [], button: [], vv: [], vv1: [], vv2: [], vv3: [] }; //console.log(elem);
      // data.vv.push(elem.ownerDocument.querySelector('input[name="sap-wd-secure-id"]').value);
      // data.vv1.push(elem.ownerDocument.querySelector('input[name="sap-ext-sid"]').value);
      // data.vv2.push(elem.ownerDocument.querySelector('input[name="sap-wd-norefresh"]').value);
      // data.vv3.push(elem.ownerDocument.querySelector('input[name="sap-wd-cltwndid"]').value);
      var basics = elem.children; //标题标示
      // var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]') && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;
      var text = localStorage.fawuWorkFlowTitle;data.flagText.push(text);var YJ; //意见
      var AN; //提交按钮
      var SP; //审批历史
      if (text) {
        if (text == "合同审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.HtAllView._3"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];
        } else if (text == "技术文件审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.FwAllCompView._2"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];
        }
      } /***审批意见****/var textareaValue = YJ && YJ.querySelector('textarea') && YJ.querySelector('textarea').value;data.idea.push(textareaValue);var personValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaPerson.push(personValue); //提交按钮组
      var spans = AN && AN.querySelectorAll("a");if (spans) {
        for (var k = 0; k < spans.length; k++) {
          data.button.push(spans[k].textContent);
        }
      } //审批历史
      var trs = SP && SP.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("udat")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }data.history.push(a);
          }
        }
      }return data;
    },
    doAction_uiControl11_T2tGPA: function (data, elem) {
      var basics = elem.children;var types = data.eventType;var name = data.customData.name;var text;if (types == "change" || types == "historyPage" || types == "clickIdea") {
        text = data.customData.text;
      } else {
        text = data.customData;
      }var YJ; //意见
      var AN; // 提交按钮组
      var SP; //审批历史
      if (text) {
        if (text == "合同审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.HtAllView._3"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];
        } else if (text == "技术文件审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.FwAllCompView._2"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];
        }
      } //审批历史
      if ("history" == types) {
        ysp.appMain.showLoading();var tds = SP && SP.querySelector('td[id="FDOEEFPDBOMAACHH.HtAllView.ToolBar2-itms"]');tds && tds.querySelector("a") && tds.querySelector("a").click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1500);
      } //填写意见
      if ("change" == types) {
        var val = data.customData.value;if (YJ) {
          YJ.querySelector("textarea").value = val;
        }
      } //审批意见翻页
      if ('historyPage' == types) {
        if (name == "上翻") {
          SP && SP.querySelector('div[acf="Prev"]') && SP.querySelector('div[acf="Prev"]').click();
        } else {
          SP && SP.querySelector('div[acf="Nxt"]') && SP.querySelector('div[acf="Nxt"]').click();
        }
      } //提交按钮组
      if ('clickIdea' == types) {
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);var index = data.customData.index;var idea = data.customData.idea;var title = data.customData.title;var spans = AN && AN.querySelectorAll("a");if (title == " 退回") {
          if (idea == "") {
            alert('请填写退回意见！！');return;
          } else {
            spans && spans[index].click();
          }
        } else if (title == " 跳过会签") {
          if (idea == "") {
            alert('请填写意见！！');return;
          } else {
            spans && spans[index].click();
          }
        } else {
          spans && spans[index].click();
        }
      }
    },
    getTemplate_uiControl11_T2tGPA: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: false\n    }\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n  handlerChange(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          value:target.value,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var idea = target.dataset.idea;\n    var title = target.dataset.title;\n    var text = target.dataset.text;\n    var index = target.dataset.index;\n    if(handler){\n      handler({\n        eventType:'clickIdea',\n        data:{\n          idea:idea,\n          title:title,\n          text:text,\n          index:index\n        }\n      })\n    }\n  }\n  //\u70B9\u51FB\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\n  handlerHistory(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'history',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u5BA1\u6279\u5386\u53F2\u7FFB\u9875\n  handlerHistoryPage(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'historyPage',\n        data:{\n          text:e.target.dataset.text,\n          name:e.target.dataset.name\n        }\n      })\n    }\n  }\n  //\u5BA1\u6279\u610F\u89C1\n  yijianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-idea\">\n        <div>{title}</div>\n        <div>\n          <ATextarea value = {data} data-text = {data2} onChange={_this.handlerChange.bind(_this)}></ATextarea>\n        </div>\n        <div>\n          <div className=\"ysp-deatil-idea-end\">\n            <div>\n              <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n              <span>{data1}</span>\n            </div>\n          </div>\n          {\n\t\t\t\t\t\tdata3 && data3.map(function(d,i){\n              return(\n              \t<div data-idea = {data} data-title = {d} data-text = {data2} data-index = {i} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">{d}</div>\n              )\n            })\n          }\n        </div>\n      </div>\n    )\n  }\n  //\u5BA1\u6279\u5386\u53F2\n  historyFor(data,data1,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-history\">\n        <div>{title}</div>\n        {\n          data1 == \"\u6280\u672F\u6587\u4EF6\u5BA1\u6279\" ? <div></div> : <div className=\"ysp-deatil-history-button\"onClick={_this.handlerHistory.bind(_this)} data-text = {data1}>\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\u6570\u636E</div>\n        }\n        \n        <div>\n        \t{\n            data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div> : \t\t\t\t\t\t\t\t<div className=\"ysp-detail-history-contents\">\n              {\n                data.map(function(d,i){\n                  return(\n                    <div className=\"ysp-detail-history-content\">\n                      <div>\n                        <span>{d[0]}</span>\n                        <span>{d[1]}</span>\n                      </div>\n                      {\n                        d[2] == \"\xA0\" && d[3] == \"\xA0\" ? <div></div> : <div>\n                          <span>{d[2]}</span>\n                          <span>{d[3]}</span>\n                        </div>\n                      }\n                      {\n                        d[4] == \"\xA0\" && d[5] == \"\xA0\" ? <div></div> : <div>\n                          <span>{d[4]}</span>\n                          <span>{d[5]}</span>\n                        </div>\n                      }\n                      {\n                        d[6] == \"\xA0\" ? <div></div> : <div>\n                          <span>{d[6]}</span>\n                        </div>\n                      }\n                    </div>\n                  )\n                })\n              }\n            </div>\n          }\n          {\n            data.length == 0 ? '' : <div className=\"ysp-detail-history-content-page\">\n              <span onClick={_this.handlerHistoryPage.bind(_this)} data-text = {data1} data-name=\"\u4E0A\u7FFB\">\u4E0A\u7FFB\u9875</span>\n              <span onClick={_this.handlerHistoryPage.bind(_this)} data-text = {data1} data-name=\"\u4E0B\u7FFB\">\u4E0B\u7FFB\u9875</span>\n            </div>\n          }\n        </div>\n      </div>\n    )\n  }\n  \n  render(){\n    var _this = this;\n    if(_this.props.customData){\n      var FlagText = localStorage.fawuWorkFlowTitle;\n      var Basic = this.props.customData && this.props.customData.bas;\n      var History = this.props.customData && this.props.customData.history;\n      var Idea = this.props.customData && this.props.customData.idea; \n      var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n      var Buttons = this.props.customData && this.props.customData.button;\n      return (\n        <div>\n          {\n            (localStorage.fawuWorkFlowTitle).indexOf('\u5BA1\u6279') >-1 ? <div>\n              \t{\n                  FlagText == \"\u5408\u540C\u5BA1\u6279\" || FlagText == '\u6280\u672F\u6587\u4EF6\u5BA1\u6279' ? <div>\n                    {this.yijianFor(Idea,IdeaPerson,FlagText,Buttons,'\u5BA1\u6279\u610F\u89C1')}\n                    {this.historyFor(History,FlagText,\"\u5BA1\u6279\u5386\u53F2\")}\n                    </div> : <div style ={{'color':'red',\"text-align\":'center'}}>\n                  \t\t\u6B64\u5BA1\u6279\u7C7B\u578B\u6B63\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01\uFF01\n                  \t</div>\n                }\n              </div> : <div style={{'color':'red','text-align':'center'}}>\u56E0\u8BE5\u6D41\u7A0B\u4E0D\u662F\u5BA1\u6279\u7C7B\u578B\uFF0C\u6545\u8BF7\u60A8\u4ECEPC\u7AEF\u529E\u7406\uFF01\uFF01</div>\n          }\n          \n          \n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}>\n        </div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: false\n    };\n    return _this2;\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'change',\n          data: {\n            value: target.value,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      var idea = target.dataset.idea;\n      var title = target.dataset.title;\n      var text = target.dataset.text;\n      var index = target.dataset.index;\n      if (handler) {\n        handler({\n          eventType: 'clickIdea',\n          data: {\n            idea: idea,\n            title: title,\n            text: text,\n            index: index\n          }\n        });\n      }\n    }\n    //\u70B9\u51FB\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'handlerHistory',\n    value: function handlerHistory(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'history',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u5BA1\u6279\u5386\u53F2\u7FFB\u9875\n\n  }, {\n    key: 'handlerHistoryPage',\n    value: function handlerHistoryPage(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'historyPage',\n          data: {\n            text: e.target.dataset.text,\n            name: e.target.dataset.name\n          }\n        });\n      }\n    }\n    //\u5BA1\u6279\u610F\u89C1\n\n  }, {\n    key: 'yijianFor',\n    value: function yijianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-idea' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(ATextarea, { value: data, 'data-text': data2, onChange: _this.handlerChange.bind(_this) })\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-idea-end' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data1\n              )\n            )\n          ),\n          data3 && data3.map(function (d, i) {\n            return React.createElement(\n              'div',\n              { 'data-idea': data, 'data-title': d, 'data-text': data2, 'data-index': i, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit' },\n              d\n            );\n          })\n        )\n      );\n    }\n    //\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'historyFor',\n    value: function historyFor(data, data1, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-history' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        data1 == \"\u6280\u672F\u6587\u4EF6\u5BA1\u6279\" ? React.createElement('div', null) : React.createElement(\n          'div',\n          { className: 'ysp-deatil-history-button', onClick: _this.handlerHistory.bind(_this), 'data-text': data1 },\n          '\\u83B7\\u53D6\\u5BA1\\u6279\\u5386\\u53F2\\u6570\\u636E'\n        ),\n        React.createElement(\n          'div',\n          null,\n          data.length == 0 ? React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n          ) : React.createElement(\n            'div',\n            { className: 'ysp-detail-history-contents' },\n            data.map(function (d, i) {\n              return React.createElement(\n                'div',\n                { className: 'ysp-detail-history-content' },\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[0]\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d[1]\n                  )\n                ),\n                d[2] == \"\xA0\" && d[3] == \"\xA0\" ? React.createElement('div', null) : React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[2]\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d[3]\n                  )\n                ),\n                d[4] == \"\xA0\" && d[5] == \"\xA0\" ? React.createElement('div', null) : React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[4]\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d[5]\n                  )\n                ),\n                d[6] == \"\xA0\" ? React.createElement('div', null) : React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[6]\n                  )\n                )\n              );\n            })\n          ),\n          data.length == 0 ? '' : React.createElement(\n            'div',\n            { className: 'ysp-detail-history-content-page' },\n            React.createElement(\n              'span',\n              { onClick: _this.handlerHistoryPage.bind(_this), 'data-text': data1, 'data-name': '\\u4E0A\\u7FFB' },\n              '\\u4E0A\\u7FFB\\u9875'\n            ),\n            React.createElement(\n              'span',\n              { onClick: _this.handlerHistoryPage.bind(_this), 'data-text': data1, 'data-name': '\\u4E0B\\u7FFB' },\n              '\\u4E0B\\u7FFB\\u9875'\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var FlagText = localStorage.fawuWorkFlowTitle;\n        var Basic = this.props.customData && this.props.customData.bas;\n        var History = this.props.customData && this.props.customData.history;\n        var Idea = this.props.customData && this.props.customData.idea;\n        var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n        var Buttons = this.props.customData && this.props.customData.button;\n        return React.createElement(\n          'div',\n          null,\n          localStorage.fawuWorkFlowTitle.indexOf('\u5BA1\u6279') > -1 ? React.createElement(\n            'div',\n            null,\n            FlagText == \"\u5408\u540C\u5BA1\u6279\" || FlagText == '\u6280\u672F\u6587\u4EF6\u5BA1\u6279' ? React.createElement(\n              'div',\n              null,\n              this.yijianFor(Idea, IdeaPerson, FlagText, Buttons, '\u5BA1\u6279\u610F\u89C1'),\n              this.historyFor(History, FlagText, \"\u5BA1\u6279\u5386\u53F2\")\n            ) : React.createElement(\n              'div',\n              { style: { 'color': 'red', \"text-align\": 'center' } },\n              '\\u6B64\\u5BA1\\u6279\\u7C7B\\u578B\\u6B63\\u5728\\u5EFA\\u8BBE\\u4E2D\\uFF0C\\u656C\\u8BF7\\u671F\\u5F85\\uFF01\\uFF01'\n            )\n          ) : React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u56E0\\u8BE5\\u6D41\\u7A0B\\u4E0D\\u662F\\u5BA1\\u6279\\u7C7B\\u578B\\uFF0C\\u6545\\u8BF7\\u60A8\\u4ECEPC\\u7AEF\\u529E\\u7406\\uFF01\\uFF01'\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control17_2VRWPP: function (elem) {
      if (!elem) {
        return;
      }return true;
    },
    doAction_uiControl15_mgpdmD: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        ysp.appMain.showLoading();elem.click();setTimeout(function () {
          $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
            if (~$(this).text().indexOf('附件')) {
              var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
            }
          });
        }, 2000);setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 4000);
      }
    },
    getTemplate_uiControl15_mgpdmD: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: true\n    }\n  }\n  handlerClick(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n    this.setState({\n      flag: !this.state.flag\n    })\n  }\n  render(){\n    var data = this.props.customData;\n    return (\n      <div>\n      \t{\n          (data && data == true && (localStorage.workFlowTitle).indexOf('\u5BA1\u6279') > -1 && localStorage.workFlowTitle == \"\u5408\u540C\u5BA1\u6279\") ? <div onClick={this.handlerClick.bind(this)} className=\"ysp-detail-fujian\">\n            \u70B9\u51FB{this.state.flag ? '\u663E\u793A' : '\u9690\u85CF'}\u9644\u4EF6\n          </div> : ''\n        }\n      </div>\n      \n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this.state = {\n      flag: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick() {\n      ysp.appMain.showLoading();\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n      this.setState({\n        flag: !this.state.flag\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data && data == true && localStorage.workFlowTitle.indexOf('\u5BA1\u6279') > -1 && localStorage.workFlowTitle == \"\u5408\u540C\u5BA1\u6279\" ? React.createElement(\n          'div',\n          { onClick: this.handlerClick.bind(this), className: 'ysp-detail-fujian' },\n          '\\u70B9\\u51FB',\n          this.state.flag ? '\u663E\u793A' : '\u9690\u85CF',\n          '\\u9644\\u4EF6'\n        ) : ''\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control6_JOqGD2: function (elem) {
      if (!elem) {
        return;
      } //console.log(elem);
      var data = { flag: [], addfileflag: [], chosefile: [], fujianContent: [] };var ids = elem && elem.getAttribute("id");var flag = ids && ids == "FDOE.TaskExecutionView.AttachmentsTray" ? true : false;data.flag.push(flag);var childrens = elem && elem.children;var addfileflag = childrens && childrens[1] && childrens[1].querySelector('table[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment"]');data.addfileflag.push(addfileflag ? true : false); //显示选择的文件
      var divs = childrens && childrens[1] && childrens[1].querySelector('div[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment_Content"]');var val = divs && divs.querySelectorAll("input")[0].value;var str = val && val.split("\\");var strTitle = str && str[str.length - 1];data.chosefile.push(strTitle); //显示附件
      var FJ = childrens && childrens[1] && childrens[1].querySelector('td[id="FDOEEEMN.AttachmentListView.AttachmentsTable-content"]');var trs = FJ && FJ.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var b = [];if (trs[i].getAttribute("udat")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              b.push(tds[j].textContent);
            }data.fujianContent.push(b);
          }
        }
      }return data;
    },
    doAction_uiControl5_MICnHH: function (data, elem) {
      if (data.eventType == 'click') {
        var name = data.customData.name;var chosefile = data.customData.chosefile;var index = parseInt(data.customData.index);var childrens = elem && elem.children;ysp.appMain.showLoading();if (name == "添加附件") {
          var divs = childrens && childrens[1] && childrens[1].querySelector('td[id="FDOEEEMN.AttachmentListView.ToolBar-itms"]');divs && divs.querySelector("a").click();setTimeout(function () {
            $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
              if (~$(this).text().indexOf('添加文件')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 2000);
        } else if (name == "选择文件") {
          var divs = childrens && childrens[1] && childrens[1].querySelector('div[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment_Content"]');divs && divs.querySelectorAll("input")[0].click();ysp.appMain.hideLoading();
        } else if (name == "确定") {
          if (!chosefile) {
            alert("请选择上传的文件！！");ysp.appMain.hideLoading();return;
          }var divs = childrens && childrens[1] && childrens[1].querySelector('div[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment_Content"]');divs && divs.querySelector('a[id="FDOEEEMN.AddAttachmentView.ButtonUpload"]').click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 4000);
        } else {
          debugger;var childrens = elem && elem.children;var FJ = childrens && childrens[1] && childrens[1].querySelector('td[id="FDOEEEMN.AttachmentListView.AttachmentsTable-content"]');var trs = FJ && FJ.querySelectorAll("tr");if (trs) {
            var b = [];for (var i = 0; i < trs.length; i++) {
              if (trs[i].getAttribute("udat")) {
                b.push(trs[i]);
              }
            }var tds = b && b[index].querySelectorAll('td')[1];var buttons = tds.querySelector('button'); //var buttons = tds.querySelector('button[id="FDOEEEMN.AttachmentListView.LinkToActionOpenAttachment.0.trigger-btn"]');
            buttons && buttons.click();setTimeout(function () {
              $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
                if (~$(this).text().indexOf('删除')) {
                  var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
                }
              });
            }, 2000);setTimeout(function () {
              ysp.appMain.hideLoading();
            }, 3000);
          } //ysp.appMain.hideLoading();
        }
      }if (data.eventType == 'look') {
        alert('附件查看');
      }
    },
    getTemplate_uiControl5_MICnHH: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          name:e.target.dataset.name,\n          chosefile:e.target.dataset.chose,\n          index:e.target.dataset.index\n        }\n      })\n    }\n  },\n  handlerLook(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'look'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this = this;\n    return (\n      <div>\n        {\n          data && data.flag && data.flag[0] ? <div style={{'margin-bottom':'20px'}}>\n            \t<div onClick={this.handlerClick.bind(this)} data-name=\"\u6DFB\u52A0\u9644\u4EF6\" className=\"ysp-detail-fujian\">\u6DFB\u52A0\u9644\u4EF6</div>\n              {\n                data && data.addfileflag && data.addfileflag[0] ? <div>\n                  \t<div onClick={this.handlerClick.bind(this)} data-name=\"\u9009\u62E9\u6587\u4EF6\" className=\"ysp-detail-fujian\">\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n                    <div className=\"ysp-detail-fujianChoseTitle\">\n                      <span>\u6240\u9009\u6587\u4EF6\uFF1A</span>\n                      <span>{data && data.chosefile}</span>\n                    </div>\n                    <div onClick={this.handlerClick.bind(this)} data-chose = {data && data.chosefile} data-name=\"\u786E\u5B9A\" className=\"ysp-detail-fujian\">\u786E\u5B9A</div>\n                  </div> : ''\n              }\n              {\n                data && data.fujianContent && data.fujianContent.length == 0 ? <div style={{'color':'red','text-align':'center','padding':'10px'}}>\u6682\u65E0\u9644\u4EF6\uFF01\uFF01</div> :\n                  data && data.fujianContent.map(function(d,i){\n                    return(\n                      <div className=\"ysp-deatil-fujian-content\">\n                        <div>\n                          <span onClick={_this.handlerLook.bind(_this)}>{d[0]}</span>\n                        \t<span onClick={_this.handlerClick.bind(_this)} data-name=\"\u5220\u9664\" data-index={i}>\u5220\u9664</span>\n                        </div>\n                        <div>\n                          <span>{d[1]}</span>\n                        </div>\n                        <div>\n                          <span>{d[2]}</span>\n                          <span>{d[3]}</span>\n                        </div>\n                        <div>\n                          <span>{d[4]}</span>\n                          <span>{d[5]}</span>\n                        </div>\n                      </div>\n                    )\n                  })\n                }\n            </div> : ''\n        }\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: {\n          name: e.target.dataset.name,\n          chosefile: e.target.dataset.chose,\n          index: e.target.dataset.index\n        }\n      });\n    }\n  },\n  handlerLook: function handlerLook() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'look'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    return React.createElement(\n      'div',\n      null,\n      data && data.flag && data.flag[0] ? React.createElement(\n        'div',\n        { style: { 'margin-bottom': '20px' } },\n        React.createElement(\n          'div',\n          { onClick: this.handlerClick.bind(this), 'data-name': '\\u6DFB\\u52A0\\u9644\\u4EF6', className: 'ysp-detail-fujian' },\n          '\\u6DFB\\u52A0\\u9644\\u4EF6'\n        ),\n        data && data.addfileflag && data.addfileflag[0] ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { onClick: this.handlerClick.bind(this), 'data-name': '\\u9009\\u62E9\\u6587\\u4EF6', className: 'ysp-detail-fujian' },\n            '\\u8BF7\\u9009\\u62E9\\u6587\\u4EF6'\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-detail-fujianChoseTitle' },\n            React.createElement(\n              'span',\n              null,\n              '\\u6240\\u9009\\u6587\\u4EF6\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              null,\n              data && data.chosefile\n            )\n          ),\n          React.createElement(\n            'div',\n            { onClick: this.handlerClick.bind(this), 'data-chose': data && data.chosefile, 'data-name': '\\u786E\\u5B9A', className: 'ysp-detail-fujian' },\n            '\\u786E\\u5B9A'\n          )\n        ) : '',\n        data && data.fujianContent && data.fujianContent.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center', 'padding': '10px' } },\n          '\\u6682\\u65E0\\u9644\\u4EF6\\uFF01\\uFF01'\n        ) : data && data.fujianContent.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-content' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                { onClick: _this.handlerLook.bind(_this) },\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                { onClick: _this.handlerClick.bind(_this), 'data-name': '\\u5220\\u9664', 'data-index': i },\n                '\\u5220\\u9664'\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[4]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              )\n            )\n          );\n        })\n      ) : ''\n    );\n  }\n});";
    },
    getData_control18_VARg9u: function (elem) {
      if (!elem) {
        return;
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaEnding: [], ideaPerson: [], button: [], vv: [], vv1: [], vv2: [], vv3: [] }; //console.log(elem);
      // data.vv.push(elem.ownerDocument.querySelector('input[name="sap-wd-secure-id"]').value);
      // data.vv1.push(elem.ownerDocument.querySelector('input[name="sap-ext-sid"]').value);
      // data.vv2.push(elem.ownerDocument.querySelector('input[name="sap-wd-norefresh"]').value);
      // data.vv3.push(elem.ownerDocument.querySelector('input[name="sap-wd-cltwndid"]').value);
      var basics = elem.children; //标题标示
      // var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]') && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;
      var text = localStorage.fawuWorkFlowTitle;data.flagText.push(text);var YJ; //意见
      var AN; //提交按钮
      var SP; //审批历史
      if (text) {
        if (text == "合同审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.HtAllView._3"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];
        } else if (text == "技术文件审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.FwAllCompView._2"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];
        }
      } /***审批意见****/var textareaValue = YJ && YJ.querySelector('textarea') && YJ.querySelector('textarea').value;data.idea.push(textareaValue);var personValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaPerson.push(personValue); //提交按钮组
      var spans = AN && AN.querySelectorAll("a");if (spans) {
        for (var k = 0; k < spans.length; k++) {
          data.button.push(spans[k].textContent);
        }
      } //审批历史
      var trs = SP && SP.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("udat")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }data.history.push(a);
          }
        }
      }return data;
    },
    doAction_uiControl16_TWprno: function (data, elem) {},
    getTemplate_uiControl16_TWprno: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6388\u6743\u5BA1\u6279\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u6388\\u6743\\u5BA1\\u6279\"\n    );\n  }\n});";
    }
  }, "testDetail");
})(window, ysp);