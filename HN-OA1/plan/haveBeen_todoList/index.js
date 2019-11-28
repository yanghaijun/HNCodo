(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control57_q3EPeZ: function (elem) {
      if (!elem) {
        return;
      }var data = [];var datagrid = elem.querySelector('div[class="datagrid-view2"]') && elem.querySelector('div[class="datagrid-view2"]').querySelector('div[class="datagrid-body"]');var trs = datagrid && datagrid.querySelector('tbody') && datagrid.querySelector('tbody').querySelectorAll('tr');var port = elem.ownerDocument.defaultView.location.port;for (var i = 0; i < trs.length; i++) {
        var flags = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[0].getAttribute("class");var obj = {};if (flags == "datagrid-td-merged") {
          var text = trs[i].querySelectorAll("td")[0].textContent;if (port == '31003') {
            if (text.indexOf('收文') != -1 || text.indexOf('发文') != -1 || text.indexOf('签报') != -1 || text.indexOf('会议') != -1 || text.indexOf('车辆') != -1 || text.indexOf('信息变更') != -1 || text.indexOf('考勤') != -1 || text.indexOf('请假') != -1 || text.indexOf('付款') != -1 || text.indexOf('工作联系单') != -1 || text.indexOf('内发') != -1 || text.indexOf('便函') != -1 || text.indexOf('通知公告') != -1 || text.indexOf('人员变动') != -1) {
              obj.text = trs[i].querySelectorAll("td")[0].textContent;obj.person = "";obj.time = "";obj.flag = "merged";obj.index = i;data.push(obj);
            }
          } else if (port == '31059') {
            if (text.indexOf('收文') > -1 || text.indexOf('发文') > -1 || text.indexOf('签报') > -1 || text.indexOf('车辆管理') > -1 || text.indexOf('新闻管理') > -1 || text.indexOf('用印审批') > -1 || text.indexOf('内发') > -1) {
              obj.text = trs[i].querySelectorAll("td")[0].textContent;obj.person = "";obj.time = "";obj.flag = "merged";obj.index = i;data.push(obj);
            }
          } else {
            if (text.indexOf('收文') > -1 || text.indexOf('发文') > -1 || text.indexOf('签报') > -1 || text.indexOf('内发') > -1) {
              obj.text = trs[i].querySelectorAll("td")[0].textContent;obj.person = "";obj.time = "";obj.flag = "merged";obj.index = i;data.push(obj);
            }
          }
        } else {
          obj.text = trs[i].querySelectorAll("td")[1].textContent;obj.person = trs[i].querySelectorAll("td")[3].textContent;obj.time = trs[i].querySelectorAll("td")[4].textContent;obj.flag = "";obj.index = i;data.push(obj);
        }
      }return data;
    },
    doAction_uiControl54_z42RSP: function (data, elem) {
      var type = data.eventType;var flag = data.dataCustom.flag;
      var index = parseInt(data.dataCustom.index);if (type == 'click') {
        var datagrid = elem.querySelector('div[class="datagrid-view2"]') && elem.querySelector('div[class="datagrid-view2"]').querySelector('div[class="datagrid-body"]');var trs = datagrid && datagrid.querySelector('tbody') && datagrid.querySelector('tbody').querySelectorAll('tr');if (flag == "merged") {
          trs[index] && trs[index].querySelectorAll("td")[0] && trs[index].querySelectorAll("td")[0].querySelector("a").click();
        } else {
          trs[index] && trs[index].querySelectorAll("td")[1] && trs[index].querySelectorAll("td")[1].querySelector("a").click();
        }
      }
    },
    getTemplate_uiControl54_z42RSP: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var cName = e.target.className;\n    var handler = this.props.customHandler;\n    var dom;\n    if(cName == \'havebeen-null\' || cName == \'havebeen-text\' || cName == \'havebeen-text havebeen-text-color\' || cName == \'havebeen-other\'){\n      dom = e.target.parentElement;\n    }\n    if(cName == \'havebeen-person\' || cName == \'havebeen-time\'){\n      dom = e.target.parentElement.parentElement;\n    }\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:{\n          flag:dom.dataset.flag,\n          index:dom.dataset.index\n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    return (\n      <div>\n        {\n          data && data.map(function(d,i){\n            return (\n               <div className = "havebeen" data-index = {d.index} data-flag = {d.flag} onClick={_this.handlerClick.bind(_this)}>\n                <div className={d.flag == \'merged\' ? "havebeen-text havebeen-text-color" \n                  : "havebeen-text"} >\n                  {d.text}\n                </div>\n                {\n                  d.flag == \'merged\' ? <div className="havebeen-null"></div> : \n                    <div className="havebeen-other">\n                      <span className="havebeen-person">{d.person}</span>\n                      <span className="havebeen-time">{d.time}</span>\n                    </div>\n                }\n                \n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerClick: function handlerClick(e) {\n    var cName = e.target.className;\n    var handler = this.props.customHandler;\n    var dom;\n    if (cName == \'havebeen-null\' || cName == \'havebeen-text\' || cName == \'havebeen-text havebeen-text-color\' || cName == \'havebeen-other\') {\n      dom = e.target.parentElement;\n    }\n    if (cName == \'havebeen-person\' || cName == \'havebeen-time\') {\n      dom = e.target.parentElement.parentElement;\n    }\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: {\n          flag: dom.dataset.flag,\n          index: dom.dataset.index\n        }\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    return React.createElement(\n      \'div\',\n      null,\n      data && data.map(function (d, i) {\n        return React.createElement(\n          \'div\',\n          { className: \'havebeen\', \'data-index\': d.index, \'data-flag\': d.flag, onClick: _this.handlerClick.bind(_this) },\n          React.createElement(\n            \'div\',\n            { className: d.flag == \'merged\' ? "havebeen-text havebeen-text-color" : "havebeen-text" },\n            d.text\n          ),\n          d.flag == \'merged\' ? React.createElement(\'div\', { className: \'havebeen-null\' }) : React.createElement(\n            \'div\',\n            { className: \'havebeen-other\' },\n            React.createElement(\n              \'span\',\n              { className: \'havebeen-person\' },\n              d.person\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'havebeen-time\' },\n              d.time\n            )\n          )\n        );\n      })\n    );\n  }\n});';
    }
  }, "haveBeen_todoList");
})(window, ysp);