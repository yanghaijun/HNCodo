(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control1_TQ9daV: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl1_dNudaB: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector(".icon-more") && elem.querySelector(".icon-more").click();
      }
    },
    getTemplate_uiControl1_dNudaB: function () {
      var selfTemplate = "module.exports = React.createClass({\n\tcomponentDidMount(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n      eventType:'click'\n      })\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },3000);\n\t},\n\tcomponentDidUpdate(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n      eventType:'click'\n      })\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },3000);\n\t},\n  // handlerClick(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 3000);\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    };\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 3000);\n  },\n\n  // handlerClick(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  render: function render() {\n    return React.createElement('div', null);\n  }\n});";
    },
    getData_control2_He1afQ: function (elem) {
      if (!elem) {
        return false;
      }var data = { shuju: [] };var elem = $(elem).find('.datagrid-btable');$(elem).find('tr').each(function (i) {
        if ($(this).find('td').eq(0).find('div').find('span').text().indexOf('收文管理') > -1) {
          ysp.receiveIndex = i;
        } //目前不需要收文管理判断收文的index
        if ($(this).find('td')[1].style.display != 'none' && i < ysp.receiveIndex) {
          var obj = {};obj.name = $(this).find('td').eq(2).find('a').text();obj.people = $(this).find('td').eq(5).find('span').text();obj.date = $(this).find('td').eq(6).find('span').text();obj.index = i;data.shuju.push(obj);
        } else {
          if (i == 0) {
            var obj = {};obj.name = '暂无内容';data.shuju.push(obj);
          }
        }
      });return data;
    },
    doAction_uiControl2_i4VUWK: function (data, elem) {
      if (data.eventType == "click") {
        //ysp.appMain.showLoading();
        var index = parseInt(data.customData);var a = [];var elem = $(elem).find('.datagrid-btable');$(elem).find('tr').eq(index).find('td').eq(2).find('a').click();
      }
    },
    getTemplate_uiControl2_i4VUWK: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentWillMount(){\n   // ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },1000);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidMount(){\n    //ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  componentDidUpdate(){\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if(elem){\n      setTimeout(function(){\n        elem.scrollTop=0;\n      },500)\n    }\n  },\n  handlerClick(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle){\n      dom = e.target.parentElement.parentElement;\n    } else if(\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle){\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:title\n      })\n    }\n  },\n    render: function() {\n    var scorllH =document.body.clientHeight-50+'px';\n    var data = this.props.customData;\n    //var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return (\n      <div className=\"ysp-index-db\" ref= \"toTop\" style={{'height':scorllH,'overflow':'scroll'}}>\n        {data&&data.shuju&&data.shuju.map(function(value,key){\n          return(\n           <div className=\"ysp-index-db-content\" data-index = {value.index} \n                onClick={that.handlerClick.bind(that)}>\n                <div className=\"ysp-index-db-content-ping\">\n                  <span className= \"ysp-index-db-content-ping-clue\"></span>\n                \tOA\n                </div>\n          \t\t\t<div className=\"ysp-index-db-content-title\">\n                \t<div className=\"ysp-index-title\">\n                \t {value.name}\n                  </div>\n                  <div className=\"ysp-index-time-person\">\n                    <span className=\"ysp-index-person\">{value.people}</span>\n                    <span className=\"ysp-index-time\">{value.date}</span>\n                  </div>\n                </div>\n           </div>      \n          )\n        })}\n      </div>\n    )\n  }\n});\n \n\n  ";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentWillMount: function componentWillMount() {\n    // ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 1000);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidMount: function componentDidMount() {\n    //ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 500);\n    var elem = this.refs.toTop && this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    if (elem) {\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var classTitle = e.target.className;\n    var dom;\n    if (\"ysp-index-db-content-title\" == classTitle || \"ysp-index-db-content-ping\" == classTitle) {\n      dom = e.target.parentElement;\n    } else if (\"ysp-index-title\" == classTitle || \"ysp-index-time-person\" == classTitle || \"ysp-index-db-content-ping-red\" == classTitle || \"ysp-index-db-content-ping-clue\" == classTitle) {\n      dom = e.target.parentElement.parentElement;\n    } else if (\"ysp-index-person\" == classTitle || \"ysp-index-time\" == classTitle) {\n      dom = e.target.parentElement.parentElement.parentElement;\n    }\n    var title = dom.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: title\n      });\n    }\n  },\n\n  render: function render() {\n    var scorllH = document.body.clientHeight - 50 + 'px';\n    var data = this.props.customData;\n    //var dataFlag = this.props.customData && this.props.customData.flag;\n    var that = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-index-db\", ref: \"toTop\", style: { 'height': scorllH, 'overflow': 'scroll' } },\n      data && data.shuju && data.shuju.map(function (value, key) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-index-db-content\", \"data-index\": value.index,\n            onClick: that.handlerClick.bind(that) },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-ping\" },\n            React.createElement(\"span\", { className: \"ysp-index-db-content-ping-clue\" }),\n            \"OA\"\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-index-db-content-title\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-title\" },\n              value.name\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-index-time-person\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-person\" },\n                value.people\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp-index-time\" },\n                value.date\n              )\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    },
    getData_control3_dhWnFP: function (elem) {
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
    doAction_uiControl3_6tBdrJ: function (data, elem) {
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
    getTemplate_uiControl3_6tBdrJ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerOne(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'one'\n      })\n    }\n  },\n  handlerTwo(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'two'\n      })\n    }\n  },\n  handlerThree(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'three'\n      })\n    }\n  },\n  handlerFour(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'four'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className = \"ysp-pages\">\n        <div>\n          <span className = {data && data.flag1 && data.flag1[0] == true ? \"oneGo\" : \"onNoGo\"} \n            onClick={this.handlerOne.bind(this)}></span>\n          <span className = {data && data.flag2 && data.flag2[0] == true ? \"twoGo\" : \"twoNoGo\"} \n            onClick={this.handlerTwo.bind(this)}></span>\n        </div>\n        <div>\n        \t<span className = {data && data.flag3 && data.flag3[0] == true ? \"threeGo\" : \"threeNoGo\"} \n            onClick={this.handlerThree.bind(this)}></span>\n          <span className = {data && data.flag4 && data.flag4[0] == true ? \"fourGo\" : \"fourNoGo\"} \n            onClick={this.handlerFour.bind(this)}></span>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerOne: function handlerOne() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'one'\n      });\n    }\n  },\n  handlerTwo: function handlerTwo() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'two'\n      });\n    }\n  },\n  handlerThree: function handlerThree() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'three'\n      });\n    }\n  },\n  handlerFour: function handlerFour() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'four'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'ysp-pages' },\n      React.createElement(\n        'div',\n        null,\n        React.createElement('span', { className: data && data.flag1 && data.flag1[0] == true ? \"oneGo\" : \"onNoGo\",\n          onClick: this.handlerOne.bind(this) }),\n        React.createElement('span', { className: data && data.flag2 && data.flag2[0] == true ? \"twoGo\" : \"twoNoGo\",\n          onClick: this.handlerTwo.bind(this) })\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement('span', { className: data && data.flag3 && data.flag3[0] == true ? \"threeGo\" : \"threeNoGo\",\n          onClick: this.handlerThree.bind(this) }),\n        React.createElement('span', { className: data && data.flag4 && data.flag4[0] == true ? \"fourGo\" : \"fourNoGo\",\n          onClick: this.handlerFour.bind(this) })\n      )\n    );\n  }\n});";
    }
  }, "index");
})(window, ysp);