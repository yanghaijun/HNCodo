(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control37_rmXs5r: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl35_5xnX50: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.showLoading();var data = data.customData;var trs = elem.querySelectorAll('tr[class="lsCLRow"]');var aas = trs && trs[0].querySelectorAll("a");if (data == '返回') {
          aas && aas[0].click();
        } else {
          aas && aas[1].click();
        }
      }
    },
    getTemplate_uiControl35_5xnX50: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.dataset.title\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className="ysp-shouquan-tijiao">\n      \t<span onClick={this.handlerClick.bind(this)} data-title=\'\u8FD4\u56DE\'>\u8FD4\u56DE</span>\n        <span onClick={this.handlerClick.bind(this)} data-title=\'\u786E\u8BA4\'>\u786E\u8BA4\u63D0\u4EA4</span>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.dataset.title\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { className: \'ysp-shouquan-tijiao\' },\n      React.createElement(\n        \'span\',\n        { onClick: this.handlerClick.bind(this), \'data-title\': \'\\u8FD4\\u56DE\' },\n        \'\\u8FD4\\u56DE\'\n      ),\n      React.createElement(\n        \'span\',\n        { onClick: this.handlerClick.bind(this), \'data-title\': \'\\u786E\\u8BA4\' },\n        \'\\u786E\\u8BA4\\u63D0\\u4EA4\'\n      )\n    );\n  }\n});';
    },
    getData_control38_XKOewR: function (elem) {
      if (!elem) {
        return;
      }var data = { text: [] };var trs = elem.querySelectorAll('tr[class="lsCLRow"]'); //var a = [];
      for (var i = 2; i < trs.length; i++) {
        if (trs[i].firstElementChild == null) {
          continue;
        }var a = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector('p')) {
            a.push(tds[j].querySelector('p').innerText);
          }
        }data.text.push(a);
      }return data;
    },
    doAction_uiControl36_17h5Js: function (data, elem) {},
    getTemplate_uiControl36_17h5Js: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData && this.props.customData.text;\n    return (\n      <div style={{\'text-align\':\'center\',\'padding\':\'10px\'}}>\n        {\n          data.map(function(d,i){\n            return(\n            \t<div>\n              \t<div dangerouslySetInnerHTML = {{__html:d}}/>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData && this.props.customData.text;\n    return React.createElement(\n      'div',\n      { style: { 'text-align': 'center', 'padding': '10px' } },\n      data.map(function (d, i) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement('div', { dangerouslySetInnerHTML: { __html: d } })\n        );\n      })\n    );\n  }\n});";
    }
  }, "shouquanTiJiao");
})(window, ysp);