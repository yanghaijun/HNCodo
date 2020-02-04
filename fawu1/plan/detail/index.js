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
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n        <div onClick={this.handlerClick.bind(this)}>\u8FD4\u56DE</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        { onClick: this.handlerClick.bind(this) },\n        '\\u8FD4\\u56DE'\n      )\n    );\n  }\n});";
    }
  }, "detail");
})(window, ysp);