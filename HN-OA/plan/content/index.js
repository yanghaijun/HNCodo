(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2_E8nnZq: function (elem) {},
    doAction_uiControl2_fvJFUf: function (data, elem) {
      if (data.eventType == "click") {
        var lis = elem.querySelectorAll("li");var index;for (var i = 0; i < lis.length; i++) {
          if (" 退出 " == lis[i].textContent) {
            index = i;
          }
        }elem.querySelectorAll("li") && elem.querySelectorAll("li")[index].querySelector("a").click();
      }
    },
    getTemplate_uiControl2_fvJFUf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-header\" >\n        <div onClick={this.handlerClick.bind(this)}>\n        \t\u8FD4\u56DE\n        </div>\n        <div>\n        \t\u516C\u53F8\u53D1\u6587\u6D41\u7A0B\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-header\" },\n      React.createElement(\n        \"div\",\n        { onClick: this.handlerClick.bind(this) },\n        \"\\u8FD4\\u56DE\"\n      ),\n      React.createElement(\n        \"div\",\n        null,\n        \"\\u516C\\u53F8\\u53D1\\u6587\\u6D41\\u7A0B\"\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);