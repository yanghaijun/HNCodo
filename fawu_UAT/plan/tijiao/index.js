(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16_ZGzmPn: function (elem) {
      if (!elem) {
        return;
      } //console.log(elem);
      var data = { person: [], post: [] };var trs = elem.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
        var a = [];var b = [];if (trs[i].getAttribute('udat')) {
          var tds = trs[i].querySelectorAll('td');a.push(tds[tds.length - 2].textContent);b.push(tds[tds.length - 1].textContent);data.person.push(a);data.post.push(b);
        }
      }return data;
    },
    doAction_uiControl14_GuT1ou: function (data, elem) {
      var type = data.eventType;var index = parseInt(data.customData);
      if (type == 'click') {
        var trs = elem.querySelectorAll("tr");var a = [];for (var i = 0; i < trs.length; i++) {
          if (trs[i].getAttribute('udat')) {
            a.push(trs[i]);
          }
        }a[index] && a[index].querySelector('input').click();
      }
    }, getTemplate_uiControl14_GuT1ou: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.dataset.index\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var dataPerson = this.props.customData && this.props.customData.person;\n    var dataPost = this.props.customData && this.props.customData.post;\n    return (\n      <div className="ysp-choose-person">\n        <div>\n          <span>\u4EBA\u5458\u540D\u79F0</span>\n          <span>\u5C97\u4F4D</span>\n        </div>\n        {\n          dataPerson.map(function(d,i){\n            return(\n            \t<div onClick={_this.handlerClick.bind(_this)} data-index={i} className="ysp-choose-persons">\n                <span data-index={i}>{d}</span>\n                <span data-index={i}>{dataPost[i]}</span>\n              </div>\n            )\n          })\n        }\n        \n        <div className="ysp-choose-person-button">\n          <span>\u786E\u8BA4</span>\n          <span>\u5173\u95ED</span>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.dataset.index\n      });\n    }\n  },\n\n  render: function render() {\n    var _this = this;\n    var dataPerson = this.props.customData && this.props.customData.person;\n    var dataPost = this.props.customData && this.props.customData.post;\n    return React.createElement(\n      "div",\n      { className: "ysp-choose-person" },\n      React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "span",\n          null,\n          "\\u4EBA\\u5458\\u540D\\u79F0"\n        ),\n        React.createElement(\n          "span",\n          null,\n          "\\u5C97\\u4F4D"\n        )\n      ),\n      dataPerson.map(function (d, i) {\n        return React.createElement(\n          "div",\n          { onClick: _this.handlerClick.bind(_this), "data-index": i, className: "ysp-choose-persons" },\n          React.createElement(\n            "span",\n            { "data-index": i },\n            d\n          ),\n          React.createElement(\n            "span",\n            { "data-index": i },\n            dataPost[i]\n          )\n        );\n      }),\n      React.createElement(\n        "div",\n        { className: "ysp-choose-person-button" },\n        React.createElement(\n          "span",\n          null,\n          "\\u786E\\u8BA4"\n        ),\n        React.createElement(\n          "span",\n          null,\n          "\\u5173\\u95ED"\n        )\n      )\n    );\n  }\n});';
    }
  }, "tijiao");
})(window, ysp);