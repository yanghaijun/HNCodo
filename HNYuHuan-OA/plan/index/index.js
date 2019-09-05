(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2_SwOSql: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl2_cTk4Do: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector(".icon-more") && elem.querySelector(".icon-more").click();
      }
    },
    getTemplate_uiControl2_cTk4Do: function () {
      var selfTemplate = "module.exports = React.createClass({\n\tcomponentDidMount(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n      eventType:'click'\n      })\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },3000);\n\t},\n\tcomponentDidUpdate(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n      eventType:'click'\n      })\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },3000);\n\t},\n  // handlerClick(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 3000);\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 3000);\n  },\n\n  // handlerClick(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  render: function render() {\n    return React.createElement('div', null);\n  }\n});";
    },

    getData_control35_R001Km: function (elem) {},
    doAction_uiControl34_P6UTyD: function (data, elem) {
      if (data.eventType == "close") {
        elem.ownerDocument.querySelector(".ui_border").querySelector(".ui_close").click();
      }
    },
    getTemplate_uiControl34_P6UTyD: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"close\"\n      })\n    }\n  },\n  componentDidUpdate(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"close\"\n      })\n    }\n  },\n  componentWillReceiveProps(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"close\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"close\"\n      });\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"close\"\n      });\n    }\n  },\n  componentWillReceiveProps: function componentWillReceiveProps() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"close\"\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\"div\", null);\n  }\n});";
    },
    getData_control14_78889h: function (elem) {
      if (!elem) {
        return;
      }var data = { title: [], flag: [] };var trs = elem.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
        var a = [];var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[2].textContent;var titles = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[3].textContent;var person = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[6].textContent;var time = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[7].textContent;if (title == '收文管理' || title == '发文管理' || title == '签报管理') {
          a.push(titles);a.push(person);a.push(time);data.title.push(a);
        }
      }var trs = elem.querySelectorAll("tr");for (var i = 1; i < trs.length; i++) {
        //   var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[0].className;
        //   if ("" == title) {
        //     data.flag.push(false);
        //   } else {
        //     data.flag.push(true);
        //   }
        data.flag.push(false);
      }return data;
    },
    doAction_uiControl13_GIn8G9: function (data, elem) {
      if (data.eventType == "click") {
        //ysp.appMain.showLoading();
        var index = parseInt(data.customData);var a = [];var trs = elem.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[2].textContent;if (title == '收文管理' || title == '发文管理' || title == '签报管理') {
            a.push(trs[i]);
          }
        }a[index].querySelectorAll("td")[3].querySelector("a").click(); //elem.querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelector("a").click();
      }
    },
    getTemplate_uiControl13_GIn8G9: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentWillMount(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },1000);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidMount(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidUpdate(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  handlerClick(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle){\n      dom = e.target.parentElement.parentElement;\n    } else if(\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle){\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:title\n      })\n    }\n  },\n  render: function() {\n    var scorllH =document.body.clientHeight-50+'px';\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return (\n      <div className=\"ysp-index-db\" ref= \"toTop\" style={{'height':scorllH,'overflow':'scroll'}}>\n        {\n          dataTitle && dataTitle.map(function(value,key){\n            return(\n              <div className=\"ysp-index-db-content\" data-index = {key} \n                onClick={that.handlerClick.bind(that)}>\n                <div className=\"ysp-index-db-content-ping\">\n                  <span className={dataFlag[key] == true ? \"ysp-index-db-content-ping-red\"\n                    : \"ysp-index-db-content-ping-clue\"}></span>\n                \tOA\n                </div>\n                <div className=\"ysp-index-db-content-title\">\n                \t<div className=\"ysp-index-title\">\n                \t {dataTitle[key][0]}\n                  </div>\n                  <div className=\"ysp-index-time-person\">\n                    <span className=\"ysp-index-person\">{dataTitle[key][1]}</span>\n                    <span className=\"ysp-index-time\">{dataTitle[key][2]}</span>\n                  </div>\n                </div>\n                \n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentWillMount: function componentWillMount() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 1000);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidMount: function componentDidMount() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var classTitle = e.target.className;\n    var dom;\n    if (\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle) {\n      dom = e.target.parentElement;\n    } else if (\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle) {\n      dom = e.target.parentElement.parentElement;\n    } else if (\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle) {\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: title\n      });\n    }\n  },\n\n  render: function render() {\n    var scorllH = document.body.clientHeight - 50 + 'px';\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-index-db\", ref: \"toTop\", style: { 'height': scorllH, 'overflow': 'scroll' } },\n      dataTitle && dataTitle.map(function (value, key) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-index-db-content\", \"data-index\": key,\n            onClick: that.handlerClick.bind(that) },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-ping\" },\n            React.createElement(\"span\", { className: dataFlag[key] == true ? \"ysp-index-db-content-ping-red\" : \"ysp-index-db-content-ping-clue\" }),\n            \"OA\"\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-title\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-title\" },\n              dataTitle[key][0]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-time-person\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-person\" },\n                dataTitle[key][1]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-time\" },\n                dataTitle[key][2]\n              )\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    },
    getData_control15_J86Up9: function (elem) {
      if (!elem) {
        return;
      }var data = { flag1: [], flag2: [], flag3: [], flag4: [] };var tds = elem.querySelector("tr") && elem.querySelector("tr").querySelectorAll("td");var oneClassName = tds[2].querySelector("a").className;var twoClassName = tds[3].querySelector("a").className;var threeClassName = tds[7].querySelector("a").className;var fourClassName = tds[8].querySelector("a").className;if (oneClassName.indexOf("l-btn-plain-disabled") > -1) {
        data.flag1.push(false);
      } else {
        data.flag1.push(true);
      }if (twoClassName.indexOf("l-btn-plain-disabled") > -1) {
        data.flag2.push(false);
      } else {
        data.flag2.push(true);
      }if (threeClassName.indexOf("l-btn-plain-disabled") > -1) {
        data.flag3.push(false);
      } else {
        data.flag3.push(true);
      }if (fourClassName.indexOf("l-btn-plain-disabled") > -1) {
        data.flag4.push(false);
      } else {
        data.flag4.push(true);
      }return data;
    },
    doAction_uiControl14_ZHdEzT: function (data, elem) {
      var types = data.eventType;var tds = elem.querySelector("tr") && elem.querySelector("tr").querySelectorAll("td");if (types == 'one') {
        tds && tds[2].querySelector("a").click();
      }if (types == 'two') {
        tds && tds[3].querySelector("a").click();
      }if (types == 'three') {
        tds && tds[7].querySelector("a").click();
      }if (types == 'four') {
        tds && tds[8].querySelector("a").click();
      }
    },
    getTemplate_uiControl14_ZHdEzT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerOne(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'one'\n      })\n    }\n  },\n  handlerTwo(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'two'\n      })\n    }\n  },\n  handlerThree(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'three'\n      })\n    }\n  },\n  handlerFour(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'four'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className = \"ysp-pages\">\n        <div>\n          <span className = {data && data.flag1 && data.flag1[0] == true ? \"oneGo\" : \"onNoGo\"} \n            onClick={this.handlerOne.bind(this)}></span>\n          <span className = {data && data.flag2 && data.flag2[0] == true ? \"twoGo\" : \"twoNoGo\"} \n            onClick={this.handlerTwo.bind(this)}></span>\n        </div>\n        <div>\n        \t<span className = {data && data.flag3 && data.flag3[0] == true ? \"threeGo\" : \"threeNoGo\"} \n            onClick={this.handlerThree.bind(this)}></span>\n          <span className = {data && data.flag4 && data.flag4[0] == true ? \"fourGo\" : \"fourNoGo\"} \n            onClick={this.handlerFour.bind(this)}></span>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerOne: function handlerOne() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'one'\n      });\n    }\n  },\n  handlerTwo: function handlerTwo() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'two'\n      });\n    }\n  },\n  handlerThree: function handlerThree() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'three'\n      });\n    }\n  },\n  handlerFour: function handlerFour() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'four'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'ysp-pages' },\n      React.createElement(\n        'div',\n        null,\n        React.createElement('span', { className: data && data.flag1 && data.flag1[0] == true ? \"oneGo\" : \"onNoGo\",\n          onClick: this.handlerOne.bind(this) }),\n        React.createElement('span', { className: data && data.flag2 && data.flag2[0] == true ? \"twoGo\" : \"twoNoGo\",\n          onClick: this.handlerTwo.bind(this) })\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement('span', { className: data && data.flag3 && data.flag3[0] == true ? \"threeGo\" : \"threeNoGo\",\n          onClick: this.handlerThree.bind(this) }),\n        React.createElement('span', { className: data && data.flag4 && data.flag4[0] == true ? \"fourGo\" : \"fourNoGo\",\n          onClick: this.handlerFour.bind(this) })\n      )\n    );\n  }\n});";
    }
  }, "index");
})(window, ysp);