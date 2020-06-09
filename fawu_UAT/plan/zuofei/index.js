(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control14_rX2tuW: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl12_kWtpO7: function (data, elem) {
      var type = data.eventType;var title = data.customData;var ass = elem.querySelectorAll('a');if (ass) {
        if (title == '确定') {
          ass[ass.length - 2].click();
        } else {
          ass[ass.length - 1].click();
        }
      }
    },
    getTemplate_uiControl12_kWtpO7: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.dataset.title\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className="ysp-liucheng-zuofei">\n        <div>\u786E\u8BA4\u4F5C\u5E9F\u5F53\u524D\u5408\u540C\uFF1F</div>\n        \n        <div className="ysp-liucheng-zuofei-button">\n          <span onClick={this.handlerClick.bind(this)} data-title = "\u786E\u5B9A">\u786E\u5B9A</span>\n          <span onClick={this.handlerClick.bind(this)} data-title = "\u53D6\u6D88">\u53D6\u6D88</span>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.dataset.title\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      { className: "ysp-liucheng-zuofei" },\n      React.createElement(\n        "div",\n        null,\n        "\\u786E\\u8BA4\\u4F5C\\u5E9F\\u5F53\\u524D\\u5408\\u540C\\uFF1F"\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp-liucheng-zuofei-button" },\n        React.createElement(\n          "span",\n          { onClick: this.handlerClick.bind(this), "data-title": "\\u786E\\u5B9A" },\n          "\\u786E\\u5B9A"\n        ),\n        React.createElement(\n          "span",\n          { onClick: this.handlerClick.bind(this), "data-title": "\\u53D6\\u6D88" },\n          "\\u53D6\\u6D88"\n        )\n      )\n    );\n  }\n});';
    }
  }, "zuofei");
})(window, ysp);