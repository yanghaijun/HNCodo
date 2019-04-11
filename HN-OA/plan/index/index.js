(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_mN1KMs: function (elem) {
      if (!elem) {
        return;
      }var data = { title: [], flag: [] };
      var trs = elem.querySelectorAll("tr");for (var i = 1; i < trs.length; i++) {
        var a = [];var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[1].querySelector("a").textContent;var person = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[2].textContent;var time = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[3].textContent;if (title.indexOf("发文") > -1 || title.indexOf("收文") > -1 || title.indexOf("签报") > -1) {
          a.push(title);a.push(person);a.push(time);data.title.push(a);
        }
      }var trs = elem.querySelectorAll("tr");for (var i = 1; i < trs.length; i++) {
        var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[0].className;if ("" == title) {
          data.flag.push(false);
        } else {
          data.flag.push(true);
        }
      }return data;
    }, doAction_uiControl0_lFVvUR: function (data, elem) {
      if (data.eventType == "click") {
        var index = parseInt(data.customData);var a = [];var trs = elem.querySelectorAll("tr");for (var i = 1; i < trs.length; i++) {
          var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[1].querySelector("a") && trs[i].querySelectorAll("td")[1].querySelector("a").textContent;if (title.indexOf("发文") > -1 || title.indexOf("收文") > -1 || title.indexOf("签报") > -1) {
            a.push(trs[i]);
          }
        }a[index].querySelectorAll("td")[1].querySelector("a").click(); //elem.querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelector("a").click();
      }
    },
    getTemplate_uiControl0_lFVvUR: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle){\n      dom = e.target.parentElement.parentElement;\n    } else if(\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle){\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:title\n      })\n    }\n  },\n  render: function() {\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return (\n      <div className=\"ysp-index-db\">\n        {\n          dataTitle && dataTitle.map(function(value,key){\n            return(\n              <div className=\"ysp-index-db-content\" data-index = {key} \n                onClick={that.handlerClick.bind(that)}>\n                <div className=\"ysp-index-db-content-ping\">\n                  <span className={dataFlag[key] == true ? \"ysp-index-db-content-ping-red\"\n                    : \"ysp-index-db-content-ping-clue\"}></span>\n                \tOA\n                </div>\n                <div className=\"ysp-index-db-content-title\">\n                \t<div className=\"ysp-index-title\">\n                \t {dataTitle[key][0]}\n                  </div>\n                  <div className=\"ysp-index-time-person\">\n                    <span className=\"ysp-index-person\">{dataTitle[key][1]}</span>\n                    <span className=\"ysp-index-time\">{dataTitle[key][2]}</span>\n                  </div>\n                </div>\n                \n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick(e) {\n    var classTitle = e.target.className;\n    var dom;\n    if (\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle) {\n      dom = e.target.parentElement;\n    } else if (\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle) {\n      dom = e.target.parentElement.parentElement;\n    } else if (\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle) {\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: title\n      });\n    }\n  },\n\n  render: function render() {\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-index-db\" },\n      dataTitle && dataTitle.map(function (value, key) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-index-db-content\", \"data-index\": key,\n            onClick: that.handlerClick.bind(that) },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-ping\" },\n            React.createElement(\"span\", { className: dataFlag[key] == true ? \"ysp-index-db-content-ping-red\" : \"ysp-index-db-content-ping-clue\" }),\n            \"OA\"\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-title\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-title\" },\n              dataTitle[key][0]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-time-person\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-person\" },\n                dataTitle[key][1]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-time\" },\n                dataTitle[key][2]\n              )\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    },

    getData_control8_nKsKJd: function (elem) {},
    doAction_uiControl8_RNaMJ8: function (data, elem) {
      if (data.eventType == 'click') {
        //$(elem).find('.logout7_16') && $(elem).find('.logout7_16').find('a').click();
        elem.ownerDocument.querySelector(".logout7_16") && elem.ownerDocument.querySelector(".logout7_16").querySelector("a").click();
      }if (data.eventType == "clickSX") {
        elem.ownerDocument.querySelector("#tp") && elem.ownerDocument.querySelector("#tp").querySelector(".panel-tool") && elem.ownerDocument.querySelector("#tp").querySelector(".panel-tool").querySelectorAll("a")[1].click();
      }
    },
    getTemplate_uiControl8_RNaMJ8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  handlerSX(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"clickSX\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-header-index\" >\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>OA</div>\n        <div onClick={this.handlerSX.bind(this)}></div>\n       </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n  handlerSX: function handlerSX() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"clickSX\"\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-header-index\" },\n      React.createElement(\"div\", { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        \"div\",\n        null,\n        \"OA\"\n      ),\n      React.createElement(\"div\", { onClick: this.handlerSX.bind(this) })\n    );\n  }\n});";
    }
  }, "index");
})(window, ysp);