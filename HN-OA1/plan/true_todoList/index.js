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
        } else if (port == '31059') {
          if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1 || title.indexOf('内发') != -1 || title.indexOf('车辆管理') != -1 || title.indexOf('新闻管理') != -1 || title.indexOf('用印审批') != -1) {
            a.push(titles);a.push(person);a.push(time);data.title.push(a);
          }
        } else {
          if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1 || title.indexOf('内发') != -1) {
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
          if (port == '31003') {
            if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1 || title.indexOf('会议') != -1 || title.indexOf('车辆') != -1 || title.indexOf('信息变更') != -1 || title.indexOf('考勤') != -1 || title.indexOf('请假') != -1 || title.indexOf('付款') != -1 || title.indexOf('工作联系单') != -1 || title.indexOf('内发') != -1 || title.indexOf('便函') != -1 || title.indexOf('通知公告') != -1 || title.indexOf('人员变动') != -1) {
              a.push(trs[i]);
            }
          } else if (port == '31059') {
            if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1 || title.indexOf('内发') != -1 || title.indexOf('车辆管理') != -1 || title.indexOf('新闻管理') != -1 || title.indexOf('用印审批') != -1) {
              a.push(trs[i]);
            }
          } else {
            if (title.indexOf('收文') != -1 || title.indexOf('发文') != -1 || title.indexOf('签报') != -1 || title.indexOf('内发') != -1) {
              a.push(trs[i]);
            }
          }
        }if (port == '31037') {
          a[index].querySelectorAll("td")[4].querySelector("a").click();
        } else {
          a[index].querySelectorAll("td")[3].querySelector("a").click();
        } //elem.querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelector("a").click();
      }
    },
    getTemplate_uiControl38_s9Q3kO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentWillMount(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },1000);\n    var elem = this.refs.toTop&&this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidMount(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop&&this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidUpdate(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop&&this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  handlerClick(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle){\n      dom = e.target.parentElement.parentElement;\n    } else if(\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle){\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:title\n      })\n    }\n  },\n  render: function() {\n    var scorllH =document.body.clientHeight-50+'px';\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return (\n      <div className=\"ysp-index-db\" ref= \"toTop\" style={{'height':scorllH,'overflow':'scroll'}}>\n        {dataTitle.length > 0 ? <div>\n          {\n            dataTitle && dataTitle.map(function(value,key){\n              return(\n                <div className=\"ysp-index-db-content\" data-index = {key} \n                  onClick={that.handlerClick.bind(that)}>\n                  <div className=\"ysp-index-db-content-ping\">\n                    <span className={dataFlag[key] == true ? \"ysp-index-db-content-ping-red\"\n                      : \"ysp-index-db-content-ping-clue\"}></span>\n                    OA\n                  </div>\n                  <div className=\"ysp-index-db-content-title\">\n                    <div className=\"ysp-index-title\">\n                     {dataTitle[key][0]}\n                    </div>\n                    <div className=\"ysp-index-time-person\">\n                      <span className=\"ysp-index-person\">{dataTitle[key][1]}</span>\n                      <span className=\"ysp-index-time\">{dataTitle[key][2]}</span>\n                    </div>\n                  </div>\n                </div>\n              \t)\n            \t})\n          \t}\n          </div> : <div style={{'display':'flex','color':'red','justify-content':'center','align-items':'center','height':'100%','font-size':'20px'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01\uFF01</div>}\n        \n      </div>\n    )\n  }\n});\n\n\n\n";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentWillMount: function componentWillMount() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 1000);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidMount: function componentDidMount() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var classTitle = e.target.className;\n    var dom;\n    if (\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle) {\n      dom = e.target.parentElement;\n    } else if (\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle) {\n      dom = e.target.parentElement.parentElement;\n    } else if (\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle) {\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: title\n      });\n    }\n  },\n\n  render: function render() {\n    var scorllH = document.body.clientHeight - 50 + 'px';\n    var dataTitle = this.props.customData && this.props.customData.title;\n    var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-index-db\", ref: \"toTop\", style: { 'height': scorllH, 'overflow': 'scroll' } },\n      dataTitle.length > 0 ? React.createElement(\n        \"div\",\n        null,\n        dataTitle && dataTitle.map(function (value, key) {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content\", \"data-index\": key,\n              onClick: that.handlerClick.bind(that) },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-db-content-ping\" },\n              React.createElement(\"span\", { className: dataFlag[key] == true ? \"ysp-index-db-content-ping-red\" : \"ysp-index-db-content-ping-clue\" }),\n              \"OA\"\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-db-content-title\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp-index-title\" },\n                dataTitle[key][0]\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"ysp-index-time-person\" },\n                React.createElement(\n                  \"span\",\n                  { className: \"ysp-index-person\" },\n                  dataTitle[key][1]\n                ),\n                React.createElement(\n                  \"span\",\n                  { className: \"ysp-index-time\" },\n                  dataTitle[key][2]\n                )\n              )\n            )\n          );\n        })\n      ) : React.createElement(\n        \"div\",\n        { style: { 'display': 'flex', 'color': 'red', 'justify-content': 'center', 'align-items': 'center', 'height': '100%', 'font-size': '20px' } },\n        \"\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01\\uFF01\"\n      )\n    );\n  }\n});";
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
        var port = elem.ownerDocument.defaultView.location.port;var pn = elem.ownerDocument.defaultView.location.pathname;var pname = pn.split('/')[1];var data = [];$(elem).children().each(function () {
          data.push('http://59.110.171.69:' + port + $(this).children('td').eq(3).find('a').attr('href').replace('javascript:$ct.open(\"', '').replace('\")', ''));
        }); //console.log(data);
        if (top.EAPI.isAndroid()) {
          top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'OA', cookie: document.cookie, fujianUrl: data.toString(), weboffice: pname }));
        } else if (top.EAPI.isIOS()) {
          top.EAPI.postMessageToNative('OA,' + pname, data);
        }
      }, 4000);
    },
    doAction_uiControl43_SBIoQH: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl43_SBIoQH: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", null);\n  }\n});";
    },
    getData_control55_f2IBJ3: function (elem) {
      if (!elem) {
        return;
      }var data = elem.ownerDocument.defaultView.location.port;return data;
    },
    doAction_uiControl52_cRxtug: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        var locations = elem.ownerDocument.defaultView.location;var port = locations.port;var pathNames = locations.pathname;var pathName = pathNames.split("/")[1];if (port == '31044' || port == '31025' || port == '31067' || port == '31056' || port == '31058' || port == '31000' || port == '31051' || port == '31042' || port == '31039' || port == '31031' || port == '31015' || port == '31000') {
          //华北、甘肃、河北、江西、置业、燃料公司、湖北、湖南、青海、福建、新疆、曹妃甸
          elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + pathName + '/MoaWebConfigSet.nsf/openView2.xsp?d=MoaWebOffice.nsf&v=viwOutBox&expandLevel=1&dc=1&rc=refreshLeftExpandedPanel';
        } else if (port == '31060' || port == '31040' || port == '31071' || port == '31029' || port == '31069' || port == '31035' || port == '31033') {
          //江苏、辽宁、广西、雄安、贵州、广东、海南
          elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + pathName + '/MoaWebConfigSet.nsf/list_view2.xsp?d=MoaWebOffice.nsf&v=viwOutBox&expandLevel=1&dc=1';
        } else if (port == '31021' || port == '31104' || port == '31020') {
          //宁夏、能交、吉林
          elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + pathName + '/MoaWebConfigSet.nsf/fomOpenView2?Open&d=MoaWebOffice.nsf&v=viwOutBox&expandLevel=1&dc=1';
        } else if (port == '31095') {
          //山东
          elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + pathName + '/MoaWebConfigSet.nsf/fomOpenView2?Open&d=MoaWebOffice.nsf&v=viwOutBox&expandLevel=1&dc=1&rc=refreshLeftExpandedPanel';
        } else {
          elem.ownerDocument.location.href = 'http://59.110.171.69:' + port + '/' + pathName + '/MoaWebConfigSet.nsf/dgview2.xsp?d=MoaWebOffice.nsf&v=viwOutBox&expandLevel=1&dc=1&rc=refreshLeftExpandedPanel';
        }
      }if (type == 'email') {
        var port = elem.ownerDocument.defaultView.location.port;var value = data.customData;if (top.EAPI.isIOS()) {
          if (port == '31003') {
            //四川
            ysp.appMain.openWindow('http://59.110.171.69:31016/afmail.nsf');
          } else if (port == '31000') {
            //曹妃甸
            ysp.appMain.openWindow('http://59.110.171.69:31014/afmail.nsf');
          } else if (port == '31044') {
            //华北分公司
            ysp.appMain.openWindow('http://59.110.171.69:31045/afmail.nsf');
          } else if (port == '31021') {
            //宁夏
            ysp.appMain.openWindow('http://59.110.171.69:31022/afmail.nsf');
          } else if (port == '31025') {
            //甘肃
            ysp.appMain.openWindow('http://59.110.171.69:31050/afmail.nsf');
          } else if (port == '31015') {
            //新疆
            ysp.appMain.openWindow('http://59.110.171.69:31026/afmail.nsf');
          } else if (port == '31031') {
            //福建
            ysp.appMain.openWindow('http://59.110.171.69:31032/afmail.nsf');
          } else if (port == '31035') {
            //广东
            ysp.appMain.openWindow('http://59.110.171.69:31036/afmail.nsf');
          } else if (port == '31059') {
            ysp.appMain.openWindow('http://59.110.171.69:31062/afmail.nsf');
          } else if (port == '31060') {
            ysp.appMain.openWindow('http://59.110.171.69:31061/afmail.nsf');
          } else if (port == '31017') {
            //招标公司
            ysp.appMain.openWindow('http://59.110.171.69:31017/afmail.nsf');
          } else if (port == '31067') {
            //河北公司
            ysp.appMain.openWindow('http://59.110.171.69:31068/afmail.nsf');
          } else if (port == '31042') {
            //湖南
            ysp.appMain.openWindow('http://59.110.171.69:31043/afmail.nsf');
          } else if (port == '31046') {
            //山西
            ysp.appMain.openWindow('http://59.110.171.69:31047/afmail.nsf');
          } else if (port == '31069') {
            //贵州
            ysp.appMain.openWindow('http://59.110.171.69:31070/afmail.nsf');
          } else if (port == '31020') {
            //吉林
            ysp.appMain.openWindow('http://59.110.171.69:31023/afmail.nsf');
          } else if (port == '31039') {
            //青海
            ysp.appMain.openWindow('http://59.110.171.69:31039/afmail.nsf');
          } else if (port == '31033') {
            //海南
            ysp.appMain.openWindow('http://59.110.171.69:31034/afmail.nsf');
          } else if (port == '31051') {
            //湖北
            ysp.appMain.openWindow('http://59.110.171.69:31052/afmail.nsf');
          } else if (port == '31029') {//雄安
            //elem.ownerDocument.location.href ='http://59.110.171.69:31052/afmail.nsf';
          } else if (port == '31037') {
            //雅江
            ysp.appMain.openWindow('http://59.110.171.69:31038/afmail.nsf');
          } else if (port == '31040') {
            //辽宁
            ysp.appMain.openWindow('http://59.110.171.69:31041/afmail.nsf');
          } else if (port == '31048') {
            //河南
            ysp.appMain.openWindow('http://59.110.171.69:31049/afmail.nsf');
          } else if (port == '31063') {
            //西安热工院
            ysp.appMain.openWindow('http://59.110.171.69:31063/afmail.nsf');
          } else if (port == '31064') {
            //燃料公司
            ysp.appMain.openWindow('http://59.110.171.69:31065/afmail.nsf');
          } else if (port == '31056') {
            //江西
            ysp.appMain.openWindow('http://59.110.171.69:31057/afmail.nsf');
          } else if (port == '31071') {
            //广西
            ysp.appMain.openWindow('http://59.110.171.69:31072/afmail.nsf');
          } else if (port == '31008') {
            //信息公司
            ysp.appMain.openWindow('http://59.110.171.69:31009/afmail.nsf');
          } else if (port == '31095') {
            //山东
            ysp.appMain.openWindow(value);
          }
        } else {
          if (port == '31003') {
            //四川
            elem.ownerDocument.location.href = 'http://59.110.171.69:31016/afmail.nsf';
          } else if (port == '31000') {
            //曹妃甸
            elem.ownerDocument.location.href = 'http://59.110.171.69:31014/afmail.nsf';
          } else if (port == '31044') {
            //华北分公司
            elem.ownerDocument.location.href = 'http://59.110.171.69:31045/afmail.nsf';
          } else if (port == '31021') {
            //宁夏
            elem.ownerDocument.location.href = 'http://59.110.171.69:31022/afmail.nsf';
          } else if (port == '31025') {
            //甘肃
            elem.ownerDocument.location.href = 'http://59.110.171.69:31050/afmail.nsf';
          } else if (port == '31015') {
            //新疆
            elem.ownerDocument.location.href = 'http://59.110.171.69:31026/afmail.nsf';
          } else if (port == '31031') {
            //福建
            elem.ownerDocument.location.href = 'http://59.110.171.69:31032/afmail.nsf';
          } else if (port == '31035') {
            //广东
            elem.ownerDocument.location.href = 'http://59.110.171.69:31036/afmail.nsf';
          } else if (port == '31059') {
            //新能源
            elem.ownerDocument.location.href = 'http://59.110.171.69:31062/afmail.nsf';
          } else if (port == '31060') {
            //江苏
            elem.ownerDocument.location.href = 'http://59.110.171.69:31061/afmail.nsf';
          } else if (port == '31017') {
            //招标公司
            elem.ownerDocument.location.href = 'http://59.110.171.69:31017/afmail.nsf';
          } else if (port == '31067') {
            //河北公司
            elem.ownerDocument.location.href = 'http://59.110.171.69:31068/afmail.nsf';
          } else if (port == '31042') {
            //湖南
            elem.ownerDocument.location.href = 'http://59.110.171.69:31043/afmail.nsf';
          } else if (port == '31046') {
            //山西
            elem.ownerDocument.location.href = 'http://59.110.171.69:31047/afmail.nsf';
          } else if (port == '31069') {
            //贵州
            elem.ownerDocument.location.href = 'http://59.110.171.69:31070/afmail.nsf';
          } else if (port == '31020') {
            //吉林
            elem.ownerDocument.location.href = 'http://59.110.171.69:31023/afmail.nsf';
          } else if (port == '31039') {
            //青海
            elem.ownerDocument.location.href = 'http://59.110.171.69:31039/afmail.nsf';
          } else if (port == '31033') {
            //海南
            elem.ownerDocument.location.href = 'http://59.110.171.69:31034/afmail.nsf';
          } else if (port == '31051') {
            //湖北
            elem.ownerDocument.location.href = 'http://59.110.171.69:31052/afmail.nsf';
          } else if (port == '31029') {//雄安
            //elem.ownerDocument.location.href ='http://59.110.171.69:31052/afmail.nsf';
          } else if (port == '31037') {
            //雅江
            elem.ownerDocument.location.href = 'http://59.110.171.69:31038/afmail.nsf';
          } else if (port == '31040') {
            //辽宁
            elem.ownerDocument.location.href = 'http://59.110.171.69:31041/afmail.nsf';
          } else if (port == '31048') {
            //河南
            elem.ownerDocument.location.href = 'http://59.110.171.69:31049/afmail.nsf';
          } else if (port == '31063') {
            //西安热工院
            elem.ownerDocument.location.href = 'http://59.110.171.69:31063/afmail.nsf';
          } else if (port == '31064') {
            //燃料公司
            elem.ownerDocument.location.href = 'http://59.110.171.69:31065/afmail.nsf';
          } else if (port == '31056') {
            //江西
            elem.ownerDocument.location.href = 'http://59.110.171.69:31057/afmail.nsf';
          } else if (port == '31071') {
            //广西
            elem.ownerDocument.location.href = 'http://59.110.171.69:31072/afmail.nsf';
          } else if (port == '31008') {
            //信息公司
            elem.ownerDocument.location.href = 'http://59.110.171.69:31009/afmail.nsf';
          } else if (port == '31095') {
            //山东
            elem.ownerDocument.location.href = value;
          }
        }
      }
    },
    getTemplate_uiControl52_cRxtug: function () {
      var selfTemplate = "\nimport {Component} from 'react'; \nexport default class extends Component{\n  constructor(){\n    super();\n  \tthis.state={\n      flag:false\n    }\n  }\n  handlerClick(){\n    this.setState({\n      flag: false\n    })\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  }\n  handlerClickEmail(e){\n    var target = e.target;\n    var port = target.dataset.port;\n    if(port == '31095'){\n      this.setState({\n        flag:!this.state.flag\n      })\n    } else {\n      var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:'email'\n        })\n      }\n    }\n  }\n  clickEmail(e){\n    var value = '';\n    var elem = e.target.nextElementSibling;\n    var inputs = elem && elem.querySelectorAll('input');\n    for(var i=0;i<inputs.length;i++){\n      if(inputs[i].checked){\n        value = inputs[i].value;\n      }\n    }\n    if(value == ''){\n      alert('\u8BF7\u9009\u62E9\u7535\u5382\uFF01');\n      return;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'email',\n        data:value\n      })\n    }\n    this.setState({\n      flag: false\n    })\n  }\n  render() {\n    var data = this.props.customData;\n    return (\n      <div>\n      \t{\n         /* \n          \t<div className=\"havebeen-title\">\n              <span onClick={this.handlerClick.bind(this)}>\n                {\n                  data && data == '31037' ? '' : '\u5DF2\u529E\u5F85\u6536'\n                }\n              </span>\n              <span onClick={this.handlerClickEmail.bind(this)} data-port = {data}>\u90AE\u4EF6</span>\n            </div>\n          \n          */\n        \n      \t}\n        \n        {\n          this.state.flag ? \n            <div className=\"havebeen-email\">\n              <div onClick={this.clickEmail.bind(this)} className=\"havebeen-email-button\">\u786E\u5B9A</div>\n              <div>\n              \t<div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31073/afmail.nsf\" />\u6D4E\u5B81\u70ED\u7535\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31074/afmail.nsf\" />\u83B1\u829C\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31075/afmail.nsf\" />\u9752\u5C9B\u70ED\u7535\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31076/afmail.nsf\" />\u4E34\u6C82\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31077/afmail.nsf\" />\u5DF4\u57FA\u65AF\u5766\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31078/afmail.nsf\" />\u5609\u7965\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31079/afmail.nsf\" />\u65E5\u7167\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31080/afmail.nsf\" />\u9752\u5C9B\u6E2F\u52A1\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31081/afmail.nsf\" />\u6D4E\u5B81\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31082/afmail.nsf\" />\u6CBE\u5316\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31083/afmail.nsf\" />\u804A\u57CE\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31084/afmail.nsf\" />\u8F9B\u5E97\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31085/afmail.nsf\" />\u9EC4\u53F0\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31086/afmail.nsf\" />\u5A01\u6D77\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31087/afmail.nsf\" />\u70DF\u53F0\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31088/afmail.nsf\" />\u66F2\u961C\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31089/afmail.nsf\" />\u8FD0\u6CB3\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31090/afmail.nsf\" />\u4F17\u6CF0\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31091/afmail.nsf\" />&nbsp;\u767D&nbsp;\u6768&nbsp;\u6CB3&nbsp;\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31092/afmail.nsf\" />\u5FB7\u5DDE\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31093/afmail.nsf\" />\u516B\u89D2\u7535\u5382\u90AE\u4EF6\n                </div>\n                <div>\n                  <AInput type=\"radio\" name=\"email\" value=\"http://59.110.171.69:31094/afmail.nsf\" />\u5C71\u4E1C\u672C\u90E8\u90AE\u4EF6\n                </div>\n              </div>\n              \n            </div> : ''\n        }\n      </div>\n      \n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this.state = {\n      flag: false\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick() {\n      this.setState({\n        flag: false\n      });\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'handlerClickEmail',\n    value: function handlerClickEmail(e) {\n      var target = e.target;\n      var port = target.dataset.port;\n      if (port == '31095') {\n        this.setState({\n          flag: !this.state.flag\n        });\n      } else {\n        var handler = this.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: 'email'\n          });\n        }\n      }\n    }\n  }, {\n    key: 'clickEmail',\n    value: function clickEmail(e) {\n      var value = '';\n      var elem = e.target.nextElementSibling;\n      var inputs = elem && elem.querySelectorAll('input');\n      for (var i = 0; i < inputs.length; i++) {\n        if (inputs[i].checked) {\n          value = inputs[i].value;\n        }\n      }\n      if (value == '') {\n        alert('\u8BF7\u9009\u62E9\u7535\u5382\uFF01');\n        return;\n      }\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'email',\n          data: value\n        });\n      }\n      this.setState({\n        flag: false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        this.state.flag ? React.createElement(\n          'div',\n          { className: 'havebeen-email' },\n          React.createElement(\n            'div',\n            { onClick: this.clickEmail.bind(this), className: 'havebeen-email-button' },\n            '\\u786E\\u5B9A'\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31073/afmail.nsf' }),\n              '\\u6D4E\\u5B81\\u70ED\\u7535\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31074/afmail.nsf' }),\n              '\\u83B1\\u829C\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31075/afmail.nsf' }),\n              '\\u9752\\u5C9B\\u70ED\\u7535\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31076/afmail.nsf' }),\n              '\\u4E34\\u6C82\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31077/afmail.nsf' }),\n              '\\u5DF4\\u57FA\\u65AF\\u5766\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31078/afmail.nsf' }),\n              '\\u5609\\u7965\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31079/afmail.nsf' }),\n              '\\u65E5\\u7167\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31080/afmail.nsf' }),\n              '\\u9752\\u5C9B\\u6E2F\\u52A1\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31081/afmail.nsf' }),\n              '\\u6D4E\\u5B81\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31082/afmail.nsf' }),\n              '\\u6CBE\\u5316\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31083/afmail.nsf' }),\n              '\\u804A\\u57CE\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31084/afmail.nsf' }),\n              '\\u8F9B\\u5E97\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31085/afmail.nsf' }),\n              '\\u9EC4\\u53F0\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31086/afmail.nsf' }),\n              '\\u5A01\\u6D77\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31087/afmail.nsf' }),\n              '\\u70DF\\u53F0\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31088/afmail.nsf' }),\n              '\\u66F2\\u961C\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31089/afmail.nsf' }),\n              '\\u8FD0\\u6CB3\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31090/afmail.nsf' }),\n              '\\u4F17\\u6CF0\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31091/afmail.nsf' }),\n              '\\xA0\\u767D\\xA0\\u6768\\xA0\\u6CB3\\xA0\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31092/afmail.nsf' }),\n              '\\u5FB7\\u5DDE\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31093/afmail.nsf' }),\n              '\\u516B\\u89D2\\u7535\\u5382\\u90AE\\u4EF6'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'radio', name: 'email', value: 'http://59.110.171.69:31094/afmail.nsf' }),\n              '\\u5C71\\u4E1C\\u672C\\u90E8\\u90AE\\u4EF6'\n            )\n          )\n        ) : ''\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "true_todoList");
})(window, ysp);