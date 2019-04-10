(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_mN1KMs: function (elem) {
      if (!elem) {
        return;
      }var data = [];var trs = elem.querySelectorAll("tr");for (var i = 1; i < trs.length; i++) {
        var a = [];var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[1].querySelector("a").textContent;var person = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[2].textContent;var time = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[3].textContent;if (title.indexOf("发文") > -1 || title.indexOf("收文") > -1 || title.indexOf("签报") > -1) {
          a.push(title);a.push(person);a.push(time);data.push(a);
        }
      }return data;
    },
    doAction_uiControl0_lFVvUR: function (data, elem) {
      if (data.eventType == "click") {
        var index = parseInt(data.customData);var a = [];var trs = elem.querySelectorAll("tr");for (var i = 1; i < trs.length; i++) {
          var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[1].querySelector("a") && trs[i].querySelectorAll("td")[1].querySelector("a").textContent;if (title.indexOf("发文") > -1 || title.indexOf("收文") > -1 || title.indexOf("签报") > -1) {
            a.push(trs[i]);
          }
        }a[index].querySelectorAll("td")[1].querySelector("a").click(); //elem.querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelector("a").click();
      }
    },
    getTemplate_uiControl0_lFVvUR: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle){\n      dom = e.target.parentElement.parentElement;\n    } else if(\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle){\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:title\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var that = this;\n    return (\n      <div className=\"ysp-index-db\">\n        {\n          data && data.map(function(value,key){\n            return(\n              <div className=\"ysp-index-db-content\" data-index = {key} \n                onClick={that.handlerClick.bind(that)}>\n                <div className=\"ysp-index-db-content-ping\">\n                \tOA\n                </div>\n                <div className=\"ysp-index-db-content-title\">\n                \t<div className=\"ysp-index-title\">\n                \t {data[key][0]}\n                  </div>\n                  <div className=\"ysp-index-time-person\">\n                    <span className=\"ysp-index-person\">{data[key][1]}</span>\n                    <span className=\"ysp-index-time\">{data[key][2]}</span>\n                  </div>\n                </div>\n                \n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick(e) {\n    var classTitle = e.target.className;\n    var dom;\n    if (\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle) {\n      dom = e.target.parentElement;\n    } else if (\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle) {\n      dom = e.target.parentElement.parentElement;\n    } else if (\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle) {\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: title\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var that = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-index-db\" },\n      data && data.map(function (value, key) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-index-db-content\", \"data-index\": key,\n            onClick: that.handlerClick.bind(that) },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-ping\" },\n            \"OA\"\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-title\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-title\" },\n              data[key][0]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-time-person\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-person\" },\n                data[key][1]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-time\" },\n                data[key][2]\n              )\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    },
    getData_control2_dyArdh: function (elem) {},
    doAction_uiControl2_nqvyV5: function (data, elem) {
      if (data.eventType == 'click') {
        $(elem).find('.logout7_16') && $(elem).find('.logout7_16').find('a').click();
      }
    },
    getTemplate_uiControl2_nqvyV5: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-header\" >\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>OA</div>\n       </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-header\" },\n      React.createElement(\"div\", { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        \"div\",\n        null,\n        \"OA\"\n      )\n    );\n  }\n});";
    }
  }, "index");
})(window, ysp);