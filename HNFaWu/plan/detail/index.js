(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control7_IImVC3: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl4_09AuTR: function (data, elem) {
      if (data.eventType == 'click') {
        debugger;elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl4_09AuTR: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div onClick={this.handlerClick.bind(this)}>\n        \u8FD4\u56DE\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.handlerClick.bind(this) },\n      '\\u8FD4\\u56DE'\n    );\n  }\n});";
    },
    getData_control8_7zTv0W: function (elem) {
      if (!elem) {
        return;
      } // var data = [];
      return elem.querySelector('td[class="urPgHTTxt"]').textContent;
    },
    doAction_uiControl6_mWC7LF: function (data, elem) {},
    getTemplate_uiControl6_mWC7LF: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"detail_head\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"detail_head\" },\n      data\n    );\n  }\n});";
    },
    getData_control9_O5wz6J: function (elem) {
      if (!elem) {
        return;
      }var data = [];var tbody = elem.ownerDocument.querySelector('tbody[id="FDOEEFPDBOMAACHH.HtAllView.Table_0_1-contentTBody"]');var trs = tbody.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var obj = {};if (trs[i].getAttribute('udat')) {
          obj.liucheng = trs[i].querySelectorAll('td') && trs[i].querySelectorAll('td')[1].textContent;obj.zhuangtai = trs[i].querySelectorAll('td') && trs[i].querySelectorAll('td')[2].textContent;obj.chuliren = trs[i].querySelectorAll('td') && trs[i].querySelectorAll('td')[3].textContent;obj.chulirengangwei = trs[i].querySelectorAll('td') && trs[i].querySelectorAll('td')[4].textContent;obj.chuliyijian = trs[i].querySelectorAll('td') && trs[i].querySelectorAll('td')[5].textContent;obj.chulijieguo = trs[i].querySelectorAll('td') && trs[i].querySelectorAll('td')[6].textContent;obj.chulishijian = trs[i].querySelectorAll('td') && trs[i].querySelectorAll('td')[7].textContent;data.push(obj);
        }
      }return data;
    },
    doAction_uiControl7_Kw2Tcg: function (data, elem) {},
    getTemplate_uiControl7_Kw2Tcg: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData || [];\n    return (\n      <div>\n        <div className=\"liuchenglishi\">\u5BA1\u6279\u5386\u53F2</div>\n        <div className=\"liuchenglishianniu\">\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\u6570\u636E</div>\n        <div>\n          {\n            data && data.map(function(d,i){\n              return(\n              \t<div className='liuchenglishishuju'>\n                  <div>{d.liucheng}</div>\n                  <div>{d.zhuangtai}</div>\n                  <div>{d.chuliren}</div>\n                  <div>{d.chulirengangwei}</div>\n                  <div>{d.chuliyijian}</div>\n                  <div>{d.chulijieguo}</div>\n                  <div>{d.chulishijian}</div>\n                </div>\n              )\n            })\n          }\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"liuchenglishi\" },\n        \"\\u5BA1\\u6279\\u5386\\u53F2\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"liuchenglishianniu\" },\n        \"\\u83B7\\u53D6\\u5BA1\\u6279\\u5386\\u53F2\\u6570\\u636E\"\n      ),\n      React.createElement(\n        \"div\",\n        null,\n        data && data.map(function (d, i) {\n          return React.createElement(\n            \"div\",\n            { className: \"liuchenglishishuju\" },\n            React.createElement(\n              \"div\",\n              null,\n              d.liucheng\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              d.zhuangtai\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              d.chuliren\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              d.chulirengangwei\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              d.chuliyijian\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              d.chulijieguo\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              d.chulishijian\n            )\n          );\n        })\n      )\n    );\n  }\n});";
    }
  }, "detail");
})(window, ysp);