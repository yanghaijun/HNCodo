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
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div className=\"detail-submit\">\u63D0\u4EA4</div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"detail-submit\" },\n        \"\\u63D0\\u4EA4\"\n      )\n    );\n  }\n});";
    },
    getData_control2_ngkDAf: function (elem) {
      if (!elem) {
        return;
      }console.log(elem);
    },
    doAction_uiControl1_rZkUNm: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        elem.children[0].querySelector("a").click();
      }
    },
    getTemplate_uiControl1_rZkUNm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"detail-history\">\n        <div className=\"detail-history-title\">\u5BA1\u6279\u5386\u53F2</div>\n        <div onClick={this.handlerClick.bind(this)} className=\"detail-history-sj\">\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\u6570\u636E</div>\n        <div></div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"detail-history\" },\n      React.createElement(\n        \"div\",\n        { className: \"detail-history-title\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { onClick: this.handlerClick.bind(this), className: \"detail-history-sj\" },\n        \"\\u83B7\\u53D6\\u5BA1\\u6279\\u5386\\u53F2\\u6570\\u636E\"\n      ),\n      React.createElement(\"div\", null)\n    );\n  }\n});";
    }
  }, "detail");
})(window, ysp);