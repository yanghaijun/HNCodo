(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_KcRRt1: function (elem) {},
    doAction_uiControl4_q5ws8Z: function (data, elem) {
      if (data.eventType == 'abc') {// ysp.appMain.back();
      }
    },
    getTemplate_uiControl4_q5ws8Z: function () {
      var selfTemplate = "module.exports = React.createClass({\n  abc: function(e){\n    \t\tvar target = e.target;\n    \t\tvar hanlder=this.props.customHandler;\n        if(hanlder){\n          hanlder({\n            eventType:\"abc\"\n          })\n        }\n  },\n  render: function() {\n    var me = this;\n    return (\n      <div onClick={me.abc}>\n       \u8FD4\u56DE\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  abc: function abc(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: \"abc\"\n      });\n    }\n  },\n  render: function render() {\n    var me = this;\n    return React.createElement(\n      \"div\",\n      { onClick: me.abc },\n      \"\\u8FD4\\u56DE\"\n    );\n  }\n});";
    }
  }, "reimburse");
})(window, ysp);