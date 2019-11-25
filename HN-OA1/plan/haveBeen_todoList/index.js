(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control56_Vx3fHk: function (elem) {
      if (!elem) {
        return;
      }var data = [];var datagrid = elem.querySelector('div[class="datagrid-body"]');var trs = datagrid && datagrid.querySelector('tbody') && datagrid.querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var flags = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[0].getAttribute("class");var obj = {};if (flags == "datagrid-td-merged") {
          obj.text = trs[i].querySelectorAll("td")[0].textContent;obj.person = "";obj.time = "";obj.flag = "merged";data.push(obj);
        } else {
          obj.text = trs[i].querySelectorAll("td")[1].textContent;obj.person = trs[i].querySelectorAll("td")[3].textContent;obj.time = trs[i].querySelectorAll("td")[4].textContent;obj.flag = "";data.push(obj);
        }
      }return data;
    },
    doAction_uiControl53_22ElXs: function (data, elem) {
      debugger;var type = data.eventType;var flag = data.dataCustom.flag;var index = parseInt(data.dataCustom.index);if (type == 'click') {
        var datagrid = elem.querySelector('div[class="datagrid-body"]');var trs = datagrid && datagrid.querySelector('tbody') && datagrid.querySelector('tbody').querySelectorAll('tr');if (flag == "merged") {
          trs[index] && trs[index].querySelectorAll("td")[0] && trs[index].querySelectorAll("td")[0].querySelector("a").click();
        } else {
          trs[index] && trs[index].querySelectorAll("td")[1] && trs[index].querySelectorAll("td")[1].querySelector("a").click();
        }
      }
    },
    getTemplate_uiControl53_22ElXs: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:{\n          flag:target.dataset.flag,\n          index:target.dataset.index\n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    return (\n      <div>\n        {\n          data && data.map(function(d,i){\n            return (\n               <div className = "havebeen" data-index = {i} data-flag = {d.flag} onClick={_this.handlerClick.bind(_this)}>\n                <div className="havebeen-text">\n                  {d.text}\n                </div>\n                {\n                  d.flag == \'merged\' ? <div className="havebeen-null"></div> : \n                    <div className="havebeen-other">\n                      <span className="havebeen-person">{d.person}</span>\n                      <span className="havebeen-time">{d.time}</span>\n                    </div>\n                }\n                \n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n  handlerClick: function handlerClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: {\n          flag: target.dataset.flag,\n          index: target.dataset.index\n        }\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    return React.createElement(\n      "div",\n      null,\n      data && data.map(function (d, i) {\n        return React.createElement(\n          "div",\n          { className: "havebeen", "data-index": i, "data-flag": d.flag, onClick: _this.handlerClick.bind(_this) },\n          React.createElement(\n            "div",\n            { className: "havebeen-text" },\n            d.text\n          ),\n          d.flag == \'merged\' ? React.createElement("div", { className: "havebeen-null" }) : React.createElement(\n            "div",\n            { className: "havebeen-other" },\n            React.createElement(\n              "span",\n              { className: "havebeen-person" },\n              d.person\n            ),\n            React.createElement(\n              "span",\n              { className: "havebeen-time" },\n              d.time\n            )\n          )\n        );\n      })\n    );\n  }\n});';
    }
  });
})(window, ysp);