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
    }
  }, "detail");
})(window, ysp);