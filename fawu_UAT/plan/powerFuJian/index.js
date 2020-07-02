(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control35_Xzn7tr: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl33_zN4e68: function (data, elem) {
      if (data.eventType == 'click') {
        elem.ownerDocument.defaultView.parent.close();
      }
    },
    getTemplate_uiControl33_zN4e68: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className = 'ysp-detail-header'>\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u9644\u4EF6</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-detail-header' },\n      React.createElement('div', { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        'div',\n        null,\n        '\\u9644\\u4EF6'\n      )\n    );\n  }\n});";
    },
    getData_control36_IUfhOp: function (elem) {
      if (!elem) {
        return;
      }var data = { fujian: [] };var trs = elem && elem.querySelectorAll('tr');for (var a = 0; a < trs.length; a++) {
        if (trs[a].getAttribute('udat')) {
          var tdss = trs[a].querySelectorAll('td');var c = [];c.push(tdss[1].textContent);data.fujian.push(c);
        }
      }return data;
    },
    doAction_uiControl34_oc9BxV: function (data, elem) {},
    getTemplate_uiControl34_oc9BxV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  \n  render: function() {\n    var data = this.props.customData && this.props.customData.fujian;\n    return (\n      <div>\n        {\n          data && data.length > 0 ? <div className=\"ysp-shouquan-fujian\">\n            {\n                data.map(function(d,i){\n                  return(\n                  \t<div>{d}</div>\n                  )\n                })\n              }\n            </div> : <div style={{'background':'#ececec','text-align':'center','height':'40px','line-height':'40px'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div>\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n\n  render: function render() {\n    var data = this.props.customData && this.props.customData.fujian;\n    return React.createElement(\n      'div',\n      null,\n      data && data.length > 0 ? React.createElement(\n        'div',\n        { className: 'ysp-shouquan-fujian' },\n        data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            null,\n            d\n          );\n        })\n      ) : React.createElement(\n        'div',\n        { style: { 'background': '#ececec', 'text-align': 'center', 'height': '40px', 'line-height': '40px' } },\n        '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n      )\n    );\n  }\n});";
    }
  }, "powerFuJian");
})(window, ysp);