(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control39_W4gLzy: function (elem) {
      ;if (!elem) {
        return;
      }var data = { title: [], flag: [] };var trs = elem.querySelectorAll("tr");var port = elem.ownerDocument.defaultView.location.port;for (var i = 0; i < trs.length; i++) {
        var a = [];var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[2].textContent;if (port == '31037') {
          var titles = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[4].textContent;
        } else {
          var titles = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[3].textContent;
        }var person = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[6].textContent;var time = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[7].textContent; // if (title == '测试收文流程' || title == '测试发文流程' || title == '测试签报' || title == '测试部门会议纪要' || title == '测试通知公告' || title == '测试部门发文' || title == '测试人员变动' || title == '测试公司会议纪要' || title == '测试考勤审批' || title == '测试请假审批' || title == '付款测试' || title == '测试工作联系单' || title == '测试会议通知' || title == '测试车辆管理' || title == '测试信息变更' || title == '内发测试' || title == '公司收文' || title == '公司签报' || title == '公司发文' || title == '部门发文' || title == '内发子流程' || title == '通知公告' || title == '公司会议纪要' || title == '部门会议纪要' || title == '信息变更管理' || title == '考勤审批' || title == '请假审批' || title == '付款申请' || title == '工作联系单' || title == '会议（培训）通知') 
        if (port == '31003') {
          if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1 || title.indexOf('会议') != -1 || title.indexOf('车辆') != -1 || title.indexOf('信息变更') != -1 || title.indexOf('考勤') != -1 || title.indexOf('请假') != -1 || title.indexOf('付款') != -1 || title.indexOf('工作联系单') != -1 || title.indexOf('内发') != -1 || title.indexOf('便函') != -1 || title.indexOf('通知公告') != -1 || title.indexOf('人员变动') != -1) {
            a.push(titles);a.push(person);a.push(time);data.title.push(a);
          }
        } else {
          if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1) {
            a.push(titles);a.push(person);a.push(time);data.title.push(a);
          }
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
    }, doAction_uiControl38_s9Q3kO: function (data, elem) {
      if (data.eventType == "click") {
        //ysp.appMain.showLoading();
        var index = parseInt(data.customData);var a = [];var trs = elem.querySelectorAll("tr");var port = elem.ownerDocument.defaultView.location.port;for (var i = 0; i < trs.length; i++) {
          var title = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[2].textContent; // if (title == '测试收文流程' || title == '测试发文流程' || title == '测试签报' || title == '测试部门会议纪要' || title == '测试通知公告' || title == '测试部门发文' || title == '测试人员变动' || title == '测试公司会议纪要' || title == '测试考勤审批' || title == '测试请假审批' || title == '付款测试' || title == '测试工作联系单' || title == '测试会议通知' || title == '测试车辆管理' || title == '测试信息变更' || title == '内发测试' || title == '公司收文' || title == '公司签报' || title == '公司发文' || title == '部门发文' || title == '内发子流程' || title == '通知公告' || title == '公司会议纪要' || title == '部门会议纪要' || title == '信息变更管理' || title == '考勤审批' || title == '请假审批' || title == '付款申请' || title == '工作联系单' || title == '会议（培训）通知' || title == '收文管理' || title == '签报管理' || title == '发文管理' || title == '测试发文' || title == '测试收文') 
          if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1 || title.indexOf('会议') != -1 || title.indexOf('车辆') != -1 || title.indexOf('信息变更') != -1 || title.indexOf('考勤') != -1 || title.indexOf('请假') != -1 || title.indexOf('付款') != -1 || title.indexOf('工作联系单') != -1 || title.indexOf('内发') != -1 || title.indexOf('便函') != -1 || title.indexOf('通知公告') != -1 || title.indexOf('人员变动') != -1) {
            a.push(trs[i]);
          }
        }if (port == '31037') {
          a[index].querySelectorAll("td")[4].querySelector("a").click();
        } else {
          a[index].querySelectorAll("td")[3].querySelector("a").click();
        } //elem.querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelector("a").click();
      }
    },
    getTemplate_uiControl38_s9Q3kO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentWillMount(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },1000);\n    var elem = this.refs.toTop&&this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidMount(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop&&this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidUpdate(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop&&this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  handlerClick(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle){\n      dom = e.target.parentElement.parentElement;\n    } else if(\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle){\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:title\n      })\n    }\n  },\n  render: function() {\n    var scorllH =document.body.clientHeight-50+'px';\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return (\n      <div className=\"ysp-index-db\" ref= \"toTop\" style={{'height':scorllH,'overflow':'scroll'}}>\n        {\n          dataTitle && dataTitle.map(function(value,key){\n            return(\n              <div className=\"ysp-index-db-content\" data-index = {key} \n                onClick={that.handlerClick.bind(that)}>\n                <div className=\"ysp-index-db-content-ping\">\n                  <span className={dataFlag[key] == true ? \"ysp-index-db-content-ping-red\"\n                    : \"ysp-index-db-content-ping-clue\"}></span>\n                \tOA\n                </div>\n                <div className=\"ysp-index-db-content-title\">\n                \t<div className=\"ysp-index-title\">\n                \t {dataTitle[key][0]}\n                  </div>\n                  <div className=\"ysp-index-time-person\">\n                    <span className=\"ysp-index-person\">{dataTitle[key][1]}</span>\n                    <span className=\"ysp-index-time\">{dataTitle[key][2]}</span>\n                  </div>\n                </div>\n                \n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});\n\n\n\n";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentWillMount: function componentWillMount() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 1000);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidMount: function componentDidMount() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var classTitle = e.target.className;\n    var dom;\n    if (\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle) {\n      dom = e.target.parentElement;\n    } else if (\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle) {\n      dom = e.target.parentElement.parentElement;\n    } else if (\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle) {\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: title\n      });\n    }\n  },\n\n  render: function render() {\n    var scorllH = document.body.clientHeight - 50 + 'px';\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-index-db\", ref: \"toTop\", style: { 'height': scorllH, 'overflow': 'scroll' } },\n      dataTitle && dataTitle.map(function (value, key) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-index-db-content\", \"data-index\": key,\n            onClick: that.handlerClick.bind(that) },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-ping\" },\n            React.createElement(\"span\", { className: dataFlag[key] == true ? \"ysp-index-db-content-ping-red\" : \"ysp-index-db-content-ping-clue\" }),\n            \"OA\"\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-title\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-title\" },\n              dataTitle[key][0]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-time-person\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-person\" },\n                dataTitle[key][1]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-time\" },\n                dataTitle[key][2]\n              )\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    },
    getData_control40_ZDve4w: function (elem) {
      "use strict";

      ;if (!elem) {
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
    doAction_uiControl39_vIO5hE: function (data, elem) {
      "use strict";

      var types = data.eventType;var tds = elem.querySelector("tr") && elem.querySelector("tr").querySelectorAll("td");if (types == 'one') {
        tds && tds[2].querySelector("a").click();var elem = elem.ownerDocument.querySelectorAll(".datagrid-body")[1].querySelector("tbody");;setTimeout(function () {
          var data = [];$(elem).children().each(function () {
            data.push('http://59.110.171.69:31003' + $(this).children('td').eq(3).find('a').attr('href').replace('javascript:$ct.open(\"', '').replace('\")', ''));
          });if (top.EAPI.isAndroid()) {
            top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'OA', cookie: document.cookie, fujianUrl: data.toString() }));
          } else if (top.EAPI.isIOS()) {
            top.EAPI.postMessageToNative('OA', data);
          }
        }, 4000);
      }if (types == 'two') {
        tds && tds[3].querySelector("a").click();var elem = elem.ownerDocument.querySelectorAll(".datagrid-body")[1].querySelector("tbody");setTimeout(function () {
          var data = [];$(elem).children().each(function () {
            data.push('http://59.110.171.69:31003' + $(this).children('td').eq(3).find('a').attr('href').replace('javascript:$ct.open(\"', '').replace('\")', ''));
          });if (top.EAPI.isAndroid()) {
            top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'OA', cookie: document.cookie, fujianUrl: data.toString() }));
          } else if (top.EAPI.isIOS()) {
            top.EAPI.postMessageToNative('OA', data);
          }
        }, 4000);
      }if (types == 'three') {
        tds && tds[7].querySelector("a").click();var elem = elem.ownerDocument.querySelectorAll(".datagrid-body")[1].querySelector("tbody");setTimeout(function () {
          var data = [];$(elem).children().each(function () {
            data.push('http://59.110.171.69:31003' + $(this).children('td').eq(3).find('a').attr('href').replace('javascript:$ct.open(\"', '').replace('\")', ''));
          });if (top.EAPI.isAndroid()) {
            top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'OA', cookie: document.cookie, fujianUrl: data.toString() }));
          } else if (top.EAPI.isIOS()) {
            top.EAPI.postMessageToNative('OA', data);
          }
        }, 4000);
      }if (types == 'four') {
        tds && tds[8].querySelector("a").click();var elem = elem.ownerDocument.querySelectorAll(".datagrid-body")[1].querySelector("tbody");setTimeout(function () {
          var data = [];$(elem).children().each(function () {
            data.push('http://59.110.171.69:31003' + $(this).children('td').eq(3).find('a').attr('href').replace('javascript:$ct.open(\"', '').replace('\")', ''));
          });if (top.EAPI.isAndroid()) {
            top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'OA', cookie: document.cookie, fujianUrl: data.toString() }));
          } else if (top.EAPI.isIOS()) {
            top.EAPI.postMessageToNative('OA', data);
          }
        }, 4000);
      }
    },
    getTemplate_uiControl39_vIO5hE: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerOne(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'one'\n      })\n    }\n  },\n  handlerTwo(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'two'\n      })\n    }\n  },\n  handlerThree(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'three'\n      })\n    }\n  },\n  handlerFour(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'four'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className = \"ysp-pages\">\n        <div>\n          <span className = {data && data.flag1[0] == true ? \"oneGo\" : \"onNoGo\"} \n            onClick={this.handlerOne.bind(this)}></span>\n          <span className = {data && data.flag2[0] == true ? \"twoGo\" : \"twoNoGo\"} \n            onClick={this.handlerTwo.bind(this)}></span>\n        </div>\n        <div>\n        \t<span className = {data && data.flag3[0] == true ? \"threeGo\" : \"threeNoGo\"} \n            onClick={this.handlerThree.bind(this)}></span>\n          <span className = {data && data.flag4[0] == true ? \"fourGo\" : \"fourNoGo\"} \n            onClick={this.handlerFour.bind(this)}></span>\n        </div>\n      </div>\n    )\n  }\n});\n\n\n\n\n\n\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerOne: function handlerOne() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'one'\n      });\n    }\n  },\n  handlerTwo: function handlerTwo() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'two'\n      });\n    }\n  },\n  handlerThree: function handlerThree() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'three'\n      });\n    }\n  },\n  handlerFour: function handlerFour() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'four'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'ysp-pages' },\n      React.createElement(\n        'div',\n        null,\n        React.createElement('span', { className: data && data.flag1[0] == true ? \"oneGo\" : \"onNoGo\",\n          onClick: this.handlerOne.bind(this) }),\n        React.createElement('span', { className: data && data.flag2[0] == true ? \"twoGo\" : \"twoNoGo\",\n          onClick: this.handlerTwo.bind(this) })\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement('span', { className: data && data.flag3[0] == true ? \"threeGo\" : \"threeNoGo\",\n          onClick: this.handlerThree.bind(this) }),\n        React.createElement('span', { className: data && data.flag4[0] == true ? \"fourGo\" : \"fourNoGo\",\n          onClick: this.handlerFour.bind(this) })\n      )\n    );\n  }\n});";
    },

    getData_control44_mPQHMB: function (elem) {
      ;setTimeout(function () {
        //console.log(elem);
        debugger;var port = elem.ownerDocument.defaultView.location.port;var data = [];$(elem).children().each(function () {
          data.push('http://59.110.171.69:' + port + $(this).children('td').eq(3).find('a').attr('href').replace('javascript:$ct.open(\"', '').replace('\")', ''));
        }); //console.log(data);
        if (top.EAPI.isAndroid()) {
          top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'OA', cookie: document.cookie, fujianUrl: data.toString() }));
        } else if (top.EAPI.isIOS()) {
          top.EAPI.postMessageToNative('OA', data);
        }
      }, 4000);
    },
    doAction_uiControl43_SBIoQH: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl43_SBIoQH: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", null);\n  }\n});";
    }
  }, "true_todoList");
})(window, ysp);