(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control37_AhpRTp: function (elem) {
      'use strict';
      if (!elem) {
        return;
      }var data = [];if (elem.querySelector('iframe') && elem.querySelector('iframe').contentDocument.querySelector('table')) {
        var elem = elem.querySelector('iframe').contentDocument.querySelector('table');data.push({ content: $(elem).find('td').eq(0).text().trim(), btn: $(elem).find('td').eq(1).text().trim() });
      }return data;
    },
    doAction_uiControl31_cEE9BN: function (data, elem) {
      'use strict';
      if (data.eventType == 'click') {
        if (elem.querySelector('iframe') && elem.querySelector('iframe').contentDocument.querySelector('table')) {
          var elem = elem.querySelector('iframe').contentDocument.querySelector('table');$(elem).find('td').eq(1).find('button').click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 1000);
        }
      }
    },
    getTemplate_uiControl31_cEE9BN: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    return (\n      <div className='weng_sucessMesbx2'>\n        <h5>\u63D0\u793A</h5>\n        <p>{data[0].content}</p>\n        <p onClick={_this.click}><button>{data[0].btn}</button></p>\n      </div>\n    )\n  }\n});\n";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'weng_sucessMesbx2\' },\n      React.createElement(\n        \'h5\',\n        null,\n        \'\\u63D0\\u793A\'\n      ),\n      React.createElement(\n        \'p\',\n        null,\n        data[0].content\n      ),\n      React.createElement(\n        \'p\',\n        { onClick: _this.click },\n        React.createElement(\n          \'button\',\n          null,\n          data[0].btn\n        )\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);