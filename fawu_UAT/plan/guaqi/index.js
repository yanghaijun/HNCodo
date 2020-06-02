(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_nmdcG4: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector('textarea') && elem.querySelector('textarea').value;
    }, doAction_uiControl9_bDQU3o: function (data, elem) {
      var type = data.eventType;var value = data.customData.value;var title = data.customData.title;if (type == 'change') {
        if (elem.querySelector('textarea')) {
          elem.querySelector('textarea').value = value;
        }
      }if (type == 'click') {
        var ass = elem.querySelectorAll('a');if (title == '确认') {
          ass && ass[0].click();
        }if (title == '关闭') {
          ass && ass[1].click();
        }
      }
    },
    getTemplate_uiControl9_bDQU3o: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  \n  handlerChange(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'change\',\n        data:{\n          value:target.value\n        }\n      })\n    }\n  },\n  \n  handlerClick(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:{\n          title:target.dataset.title\n        }\n      })\n    }\n  },\n  \n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n        <span>\u6D41\u7A0B\u6302\u8D77\u610F\u89C1\uFF1A</span>\n        <ATextarea onChange={this.handlerChange.bind(this)} value = {data}></ATextarea>\n        \n        <div>\n          <span onClick={this.handlerClick.bind(this)} data-title = \'\u786E\u8BA4\'>\u786E\u8BA4</span>\n          <span onClick={this.handlerClick.bind(this)} data-title = \'\u5173\u95ED\'>\u5173\u95ED</span>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerChange: function handlerChange(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'change\',\n        data: {\n          value: target.value\n        }\n      });\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: {\n          title: target.dataset.title\n        }\n      });\n    }\n  },\n\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'span\',\n        null,\n        \'\\u6D41\\u7A0B\\u6302\\u8D77\\u610F\\u89C1\\uFF1A\'\n      ),\n      React.createElement(ATextarea, { onChange: this.handlerChange.bind(this), value: data }),\n      React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'span\',\n          { onClick: this.handlerClick.bind(this), \'data-title\': \'\\u786E\\u8BA4\' },\n          \'\\u786E\\u8BA4\'\n        ),\n        React.createElement(\n          \'span\',\n          { onClick: this.handlerClick.bind(this), \'data-title\': \'\\u5173\\u95ED\' },\n          \'\\u5173\\u95ED\'\n        )\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);