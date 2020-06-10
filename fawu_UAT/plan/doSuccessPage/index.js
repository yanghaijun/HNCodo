(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control20_AEvQKM: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl18_XWdRQw: function (data, elem) {},
    getTemplate_uiControl18_XWdRQw: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"detail-title\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"detail-title\" },\n      data\n    );\n  }\n});";
    },
    getData_control19_9O1bxr: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl17_3xNTnD: function (data, elem) {
      if (data.eventType == "click") {
        elem.ownerDocument.defaultView.parent.close();elem.ownerDocument.defaultView.open('http://ihn.chng.com.cn:10008/webdynpro/resources/sap.com/pb/PageBuilder?PagePath=pcd%3Aportal_content%2Fcom.hnjt.HNJT%2Fcom.hnjt.XTGL%2Fcom.hnjt.Role%2FZHNJT_CLM_TY001%2FGRGZ1%2F____%2FNew_Page&sap-ext-sid=' + top.sap_sid);
      }
    },
    getTemplate_uiControl17_3xNTnD: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className = 'ysp-detail-header'>\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u5BA1\u6279\u6210\u529F</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-detail-header' },\n      React.createElement('div', { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        'div',\n        null,\n        '\\u5BA1\\u6279\\u6210\\u529F'\n      )\n    );\n  }\n});";
    },
    getData_control21_9q5GCT: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl19_JE9dAg: function (data, elem) {},
    getTemplate_uiControl19_JE9dAg: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      null,\n      data\n    );\n  }\n});";
    }
  });
})(window, ysp);