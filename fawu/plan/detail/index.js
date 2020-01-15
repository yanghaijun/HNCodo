(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4_I0E7DH: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl3_7yB4gi: function (data, elem) {
      if (data.eventType == 'click') {
        debugger; //elem.ownerDocument.defaultView.close();
        elem.querySelector('a[id="FDOE.TaskExecutionView.LinkToAction1"]').click();
      }
    },
    getTemplate_uiControl3_7yB4gi: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className = 'ysp-detail-header'>\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u5408\u540C\u5BA1\u6279</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-detail-header' },\n      React.createElement('div', { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        'div',\n        null,\n        '\\u5408\\u540C\\u5BA1\\u6279'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);