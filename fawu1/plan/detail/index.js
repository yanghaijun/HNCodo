(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control6_yuU9VP: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl5_en6eIm: function (data, elem) {
      if (data.eventType == "click") {
        elem.ownerDocument.defaultView.parent.close();
      }
    },
    getTemplate_uiControl5_en6eIm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className = 'ysp-detail-header'>\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u5408\u540C\u5BA1\u6279</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-detail-header' },\n      React.createElement('div', { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        'div',\n        null,\n        '\\u5408\\u540C\\u5BA1\\u6279'\n      )\n    );\n  }\n});";
    },
    getData_control8_3UDiar: function (elem) {},
    doAction_uiControl7_2cm8iQ: function (data, elem) {
      var type = data.eventType;var vdata = data.customData;if (type == 'change') {
        elem.querySelector('textarea').value = vdata;
      }
    },
    getTemplate_uiControl7_2cm8iQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerChange(e){\n    debugger;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:e.target.value\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n        <div className=\"detail-yijian\">\n        \t<div>\u5BA1\u6279\u610F\u89C1\uFF1A</div>\n        \t<ATextarea onChange={this.handlerChange.bind(this)}></ATextarea>\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerChange: function handlerChange(e) {\n    debugger;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'change',\n        data: e.target.value\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"detail-yijian\" },\n        React.createElement(\n          \"div\",\n          null,\n          \"\\u5BA1\\u6279\\u610F\\u89C1\\uFF1A\"\n        ),\n        React.createElement(ATextarea, { onChange: this.handlerChange.bind(this) })\n      )\n    );\n  }\n});";
    },
    getData_control10_d9Rpf1: function (elem) {},
    doAction_uiControl8_K9lTZ3: function (data, elem) {},
    getTemplate_uiControl8_K9lTZ3: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className=\"detail-submit\">\n        <button className=\"detail-submit-button\">\u63D0\u4EA4</button>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"detail-submit\" },\n      React.createElement(\n        \"button\",\n        { className: \"detail-submit-button\" },\n        \"\\u63D0\\u4EA4\"\n      )\n    );\n  }\n});";
    },
    getData_control2_ngkDAf: function (elem) {
      if (!elem) {
        return;
      } //console.log(elem);
      var data = { title: [] };var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var a = [];if (trs[i].getAttribute("udat")) {
          var tds = trs[i].querySelectorAll('td');for (var j = 1; j < tds.length; j++) {
            a.push(tds[j].textContent);
          }data.title.push(a);
        }
      }return data;
    },
    doAction_uiControl1_rZkUNm: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        ysp.appMain.showLoading();elem.children[0].querySelector("a").click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 4000);
      }
    },
    getTemplate_uiControl1_rZkUNm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData && this.props.customData.title;\n    return (\n      <div className=\"detail-history\">\n        <div className=\"detail-history-title\">\u5BA1\u6279\u5386\u53F2</div>\n        <button onClick={this.handlerClick.bind(this)} className=\"detail-history-sj\">\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\u6570\u636E</button>\n        <div>\n        \t{\n            data && data.length == 0 ? <div style={{\"color\":'red',\"text-align\":'center'}}>\u6682\u65E0\u5BA1\u6279\u6570\u636E!!</div> : data && data.map(function(d,i){\n              return(\n              \t<div className=\"detail-history-sjs\">\n                  <div>{d[0]}</div>\n                  <div>\n                    <span>{d[1]}</span>\n                    <span>{d[2]}</span>\n                  </div>\n                  <div>\n                    <span>{d[3]}</span>\n                    <span>{d[4]}</span>\n                  </div>\n                  <div>\n                    <span>{d[5]}</span>\n                    <span>{d[6]}</span>\n                  </div>\n                </div>\n              )\n            })\n          }\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData && this.props.customData.title;\n    return React.createElement(\n      \"div\",\n      { className: \"detail-history\" },\n      React.createElement(\n        \"div\",\n        { className: \"detail-history-title\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"button\",\n        { onClick: this.handlerClick.bind(this), className: \"detail-history-sj\" },\n        \"\\u83B7\\u53D6\\u5BA1\\u6279\\u5386\\u53F2\\u6570\\u636E\"\n      ),\n      React.createElement(\n        \"div\",\n        null,\n        data && data.length == 0 ? React.createElement(\n          \"div\",\n          { style: { \"color\": 'red', \"text-align\": 'center' } },\n          \"\\u6682\\u65E0\\u5BA1\\u6279\\u6570\\u636E!!\"\n        ) : data && data.map(function (d, i) {\n          return React.createElement(\n            \"div\",\n            { className: \"detail-history-sjs\" },\n            React.createElement(\n              \"div\",\n              null,\n              d[0]\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                d[1]\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                d[2]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                d[3]\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                d[4]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                d[5]\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                d[6]\n              )\n            )\n          );\n        })\n      )\n    );\n  }\n});";
    },

    getData_control12_om57w9: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl10_00fUxm: function (data, elem) {
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
    getTemplate_uiControl10_00fUxm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"detail-fujian-parent-button\">\n        <button onClick={this.handlerClick.bind(this)} className=\"detail-fujian-do-button\">\u70B9\u51FB\u83B7\u53D6\u9644\u4EF6</button>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"detail-fujian-parent-button\" },\n      React.createElement(\n        \"button\",\n        { onClick: this.handlerClick.bind(this), className: \"detail-fujian-do-button\" },\n        \"\\u70B9\\u51FB\\u83B7\\u53D6\\u9644\\u4EF6\"\n      )\n    );\n  }\n});";
    },
    getData_control13_xuZTaR: function (elem) {
      if (!elem) {
        return false;
      } // var data = {
      //   flag: []
      // };
      // data.flag.push(true);
      return true;
    },
    doAction_uiControl11_6qUxMo: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        ysp.appMain.showLoading();elem.click();setTimeout(function () {
          $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
            if (~$(this).text().indexOf('添加文件')) {
              var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
            }
          });
        }, 2000);setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 4000);
      }
    },
    getTemplate_uiControl11_6qUxMo: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"detail-fujian-parent-button\">\n        {\n          data ? <button onClick={this.handlerClick.bind(this)} className=\"detail-fujian-add-button\">\u6DFB\u52A0\u9644\u4EF6</button> : \"\"\n        }\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"detail-fujian-parent-button\" },\n      data ? React.createElement(\n        \"button\",\n        { onClick: this.handlerClick.bind(this), className: \"detail-fujian-add-button\" },\n        \"\\u6DFB\\u52A0\\u9644\\u4EF6\"\n      ) : \"\"\n    );\n  }\n});";
    },

    getData_control18_QVRZTH: function (elem) {
      if (!elem) {
        return;
      }var data = { fujian: [] };var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var a = [];if (trs[i].getAttribute("udat")) {
          var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
            a.push(tds[j].textContent);
          }data.fujian.push(a);
        }
      }return data;
    },
    doAction_uiControl16_v1yBm7: function (data, elem) {},
    getTemplate_uiControl16_v1yBm7: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData && this.props.customData.fujian;\n    if(data && data.length == 0){\n      return(\n      \t<div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u9644\u4EF6\uFF01\uFF01</div>\n      )\n    }\n    return (\n      <div>\n        {\n          data && data.map(function(d,i){\n            return(\n            \t<div className=\"detail-fujain-table\">\n                <div>{d[0]}</div>\n                <div>{d[1]}</div>\n                <div>\n                  <span>{d[2]}</span>\n                  <span>{d[3]}</span>\n                </div>\n                <div>\n                \t<span>{d[4]}</span>\n                  <span>{d[5]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData && this.props.customData.fujian;\n    if (data && data.length == 0) {\n      return React.createElement(\n        'div',\n        { style: { 'color': 'red', 'text-align': 'center' } },\n        '\\u6682\\u65E0\\u9644\\u4EF6\\uFF01\\uFF01'\n      );\n    }\n    return React.createElement(\n      'div',\n      null,\n      data && data.map(function (d, i) {\n        return React.createElement(\n          'div',\n          { className: 'detail-fujain-table' },\n          React.createElement(\n            'div',\n            null,\n            d[0]\n          ),\n          React.createElement(\n            'div',\n            null,\n            d[1]\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              d[2]\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[3]\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              d[4]\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[5]\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    },

    getData_control17_O8QvCk: function (elem) {
      if (!elem) {
        return;
      }var data = { flag: [], textName: [] };data.flag.push(true);var text = elem && elem.value;var strArr = text && text.split("\\");data.textName.push(strArr[strArr.length - 1]);return data;
    },
    doAction_uiControl15_kiEk7c: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl15_kiEk7c: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n        <div>\n          {\n            data && data.flag ? <div className=\"detail-fujian-chose-file\">\n              \t<button onClick={this.handlerClick.bind(this)}>\u8BF7\u9009\u62E9\u6587\u4EF6</button>\n          \t\t\t<span>{data && data.textName}</span>\n              </div> : \"\"\n          }\n        \t\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        null,\n        data && data.flag ? React.createElement(\n          \"div\",\n          { className: \"detail-fujian-chose-file\" },\n          React.createElement(\n            \"button\",\n            { onClick: this.handlerClick.bind(this) },\n            \"\\u8BF7\\u9009\\u62E9\\u6587\\u4EF6\"\n          ),\n          React.createElement(\n            \"span\",\n            null,\n            data && data.textName\n          )\n        ) : \"\"\n      )\n    );\n  }\n});";
    },
    getData_control11_8SUgQf: function (elem) {
      if (!elem) {
        return;
      }return true;
    },
    doAction_uiControl9_xK5XvX: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        ysp.appMain.showLoading();elem.click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      }
    },
    getTemplate_uiControl9_xK5XvX: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"detail-fujain-chose-submit\">\n        {\n          data ? <button onClick={this.handlerClick.bind(this)}>\u786E\u5B9A</button> : \"\"\n        }\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"detail-fujain-chose-submit\" },\n      data ? React.createElement(\n        \"button\",\n        { onClick: this.handlerClick.bind(this) },\n        \"\\u786E\\u5B9A\"\n      ) : \"\"\n    );\n  }\n});";
    },
    getData_control14_fr8i1z: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl12_aiUw8Z: function (data, elem) {},
    getTemplate_uiControl12_aiUw8Z: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"detail-title\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"detail-title\" },\n      data\n    );\n  }\n});";
    },
    getData_control16_Ol1wTV: function (elem) {
      if (!elem) {
        return;
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaEnding: [], ideaPerson: [], vv: [], vv1: [], vv2: [], vv3: [] }; //console.log(elem);
      data.vv.push(elem.ownerDocument.querySelector('input[name="sap-wd-secure-id"]').value);data.vv1.push(elem.ownerDocument.querySelector('input[name="sap-ext-sid"]').value);data.vv2.push(elem.ownerDocument.querySelector('input[name="sap-wd-norefresh"]').value);data.vv3.push(elem.ownerDocument.querySelector('input[name="sap-wd-cltwndid"]').value);var basics = elem.children; //标题标示
      var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]') && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;data.flagText.push(text);var YJ; //意见
      var SP; //审批历史
      if (text) {
        if (text == "合同审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.HtAllView._3"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];SP = spanChilds && spanChilds[spanChilds.length - 1];
        }
      } /***审批意见****/var textareaValue = YJ && YJ.querySelector('textarea') && YJ.querySelector('textarea').value;data.idea.push(textareaValue);var personValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaPerson.push(personValue); //审批历史
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
    doAction_uiControl14_Q9gaBc: function (data, elem) {
      var basics = elem.children;var types = data.eventType;var text;if (types == "change") {
        text = data.customData.text;
      } else {
        text = data.customData;
      }var YJ; //意见
      var SP; //审批历史
      if (text) {
        if (text == "合同审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.HtAllView._3"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];SP = spanChilds && spanChilds[spanChilds.length - 1];
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
      }
    },
    getTemplate_uiControl14_Q9gaBc: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: false\n    }\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n  handlerChange(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          value:target.value,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickIdea',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u70B9\u51FB\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\n  handlerHistory(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'history',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u5BA1\u6279\u610F\u89C1\n  yijianFor(data,data1,data2,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-idea\">\n        <div>{title}</div>\n        <div>\n          <ATextarea value = {data} data-text = {data2} onChange={_this.handlerChange.bind(_this)}></ATextarea>\n        </div>\n        <div>\n          <div className=\"ysp-deatil-idea-end\">\n            <div>\n              <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n              <span>{data1}</span>\n            </div>\n          </div>\n          <div data-text = {data2} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">\n            \u610F\u89C1\u63D0\u4EA4\n          </div>\n        </div>\n      </div>\n    )\n  }\n  //\u5BA1\u6279\u5386\u53F2\n  historyFor(data,data1,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-history\">\n        <div>{title}</div>\n        <div onClick={_this.handlerHistory.bind(_this)} data-text = {data1}>\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\u6570\u636E</div>\n        {\n          data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div> : data.map(function(d,i){\n            return(\n              <div className=\"ysp-detail-history-content\">\n                <div>\n                \t<span>{d[0]}</span>\n                \t<span>{d[1]}</span>\n                </div>\n                <div>\n                \t<span>{d[2]}</span>\n                \t<span>{d[3]}</span>\n                </div>\n                <div>\n                \t<span>{d[4]}</span>\n                \t<span>{d[5]}</span>\n                </div>\n                <div>\n                \t<span>{d[6]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n        \n      </div>\n    )\n  }\n  \n  render(){\n    var _this = this;\n    if(_this.props.customData){\n      var FlagText = this.props.customData && this.props.customData.flagText;\n      var Basic = this.props.customData && this.props.customData.bas;\n      var History = this.props.customData && this.props.customData.history;\n      var Idea = this.props.customData && this.props.customData.idea; \n      var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n      return (\n        <div>\n          {\n            localStorage.setStyle == \"true\" ? <div>\n              \t{\n                  FlagText == \"\u5408\u540C\u5BA1\u6279\" ? <div>\n                    {this.yijianFor(Idea,IdeaPerson,FlagText,'\u5BA1\u6279\u610F\u89C1')}\n                    {this.historyFor(History,FlagText,\"\u5BA1\u6279\u5386\u53F2\")}\n                    </div> : <div style ={{'color':'red',\"text-align\":'center'}}>\n                  \t\t\u6B64\u5BA1\u6279\u7C7B\u578B\u6B63\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01\uFF01\n                  \t</div>\n                }\n              </div> : <div style={{'color':'red','text-align':'center'}}>\u56E0\u8BE5\u6D41\u7A0B\u4E0D\u662F\u5BA1\u6279\u7C7B\u578B\uFF0C\u6545\u8BF7\u60A8\u4ECEPC\u7AEF\u529E\u7406\uFF01\uFF01</div>\n          }\n          \n          \n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}>\n        </div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: false\n    };\n    return _this2;\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'change',\n          data: {\n            value: target.value,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickIdea',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u70B9\u51FB\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'handlerHistory',\n    value: function handlerHistory(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'history',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u5BA1\u6279\u610F\u89C1\n\n  }, {\n    key: 'yijianFor',\n    value: function yijianFor(data, data1, data2, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-idea' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(ATextarea, { value: data, 'data-text': data2, onChange: _this.handlerChange.bind(_this) })\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-idea-end' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data1\n              )\n            )\n          ),\n          React.createElement(\n            'div',\n            { 'data-text': data2, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit' },\n            '\\u610F\\u89C1\\u63D0\\u4EA4'\n          )\n        )\n      );\n    }\n    //\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'historyFor',\n    value: function historyFor(data, data1, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-history' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          { onClick: _this.handlerHistory.bind(_this), 'data-text': data1 },\n          '\\u83B7\\u53D6\\u5BA1\\u6279\\u5386\\u53F2\\u6570\\u636E'\n        ),\n        data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-detail-history-content' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[4]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[6]\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var FlagText = this.props.customData && this.props.customData.flagText;\n        var Basic = this.props.customData && this.props.customData.bas;\n        var History = this.props.customData && this.props.customData.history;\n        var Idea = this.props.customData && this.props.customData.idea;\n        var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n        return React.createElement(\n          'div',\n          null,\n          localStorage.setStyle == \"true\" ? React.createElement(\n            'div',\n            null,\n            FlagText == \"\u5408\u540C\u5BA1\u6279\" ? React.createElement(\n              'div',\n              null,\n              this.yijianFor(Idea, IdeaPerson, FlagText, '\u5BA1\u6279\u610F\u89C1'),\n              this.historyFor(History, FlagText, \"\u5BA1\u6279\u5386\u53F2\")\n            ) : React.createElement(\n              'div',\n              { style: { 'color': 'red', \"text-align\": 'center' } },\n              '\\u6B64\\u5BA1\\u6279\\u7C7B\\u578B\\u6B63\\u5728\\u5EFA\\u8BBE\\u4E2D\\uFF0C\\u656C\\u8BF7\\u671F\\u5F85\\uFF01\\uFF01'\n            )\n          ) : React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u56E0\\u8BE5\\u6D41\\u7A0B\\u4E0D\\u662F\\u5BA1\\u6279\\u7C7B\\u578B\\uFF0C\\u6545\\u8BF7\\u60A8\\u4ECEPC\\u7AEF\\u529E\\u7406\\uFF01\\uFF01'\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "detail");
})(window, ysp);