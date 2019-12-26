(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control6_MvVgWV: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl5_WMMBwy: function (data, elem) {
      if (data.eventType == 'click') {
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl5_WMMBwy: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"erp_detail\">\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u5BA1\u6279\u6D41\u7A0B</div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"erp_detail\" },\n      React.createElement(\"div\", { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        \"div\",\n        null,\n        \"\\u5BA1\\u6279\\u6D41\\u7A0B\"\n      )\n    );\n  }\n});";
    },
    getData_control7_rXmR4e: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push(elem && elem.querySelector('td[class="urPgHTTxt"]').textContent);return data;
    },
    doAction_uiControl6_Seg8lP: function (data, elem) {},
    getTemplate_uiControl6_Seg8lP: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData || [];\n    return (\n      <div className=\"erp-detail-header\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      \"div\",\n      { className: \"erp-detail-header\" },\n      data\n    );\n  }\n});";
    }
  });
})(window, ysp);