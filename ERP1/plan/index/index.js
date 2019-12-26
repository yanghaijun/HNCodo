(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4_PAmTZG: function (elem) {
      if (!elem) {
        return;
      } //ysp.appMain.showLoading(); // debugger;
      // var divs = elem.ownerDocument.querySelector("#DetailedNavigationTree") && elem.ownerDocument.querySelector("#DetailedNavigationTree").querySelectorAll('div');
      // for (var i = 0; i < divs.length; i++) {
      //   if (divs[i].textContent == '新待办工作') {
      //     var evt = document.createEvent('MouseEvent');
      //     evt.initMouseEvent('click', true, true);
      //     divs[i].querySelector('a').dispatchEvent(evt); //divs[i].querySelector('a').click();
      //   }
      // }
    }, doAction_uiControl3_vTJhaf: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);setTimeout(function () {
          var divs = elem.ownerDocument.querySelector("#DetailedNavigationTree") && elem.ownerDocument.querySelector("#DetailedNavigationTree").querySelectorAll('div');for (var i = 0; i < divs.length; i++) {
            if (divs[i].textContent == '新待办工作') {
              var evt = document.createEvent('MouseEvent');evt.initMouseEvent('click', true, true);divs[i].querySelector('a').dispatchEvent(evt); //divs[i].querySelector('a').click();
            }
          }
        }, 2000);
      }
    },
    getTemplate_uiControl3_vTJhaf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  // componentDidUpdate(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div onClick={this.handlerClick.bind(this)} style={{'margin-top':'20px'}}>\n        \u5F85\u529E\u5DE5\u4F5C\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  // componentDidUpdate(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.handlerClick.bind(this), style: { 'margin-top': '20px' } },\n      '\\u5F85\\u529E\\u5DE5\\u4F5C'\n    );\n  }\n});";
    },
    getData_control5_T8HU3v: function (elem) {
      if (!elem) {
        return;
      } // setTimeout(function () {
      //   ysp.appMain.hideLoading();
      // }, 2000);
      ysp.appMain.hideLoading();var data = [];var td = elem.ownerDocument.querySelector('td[id="aaaa.MyUWLCompView.Table_0-content"]');var tbody = td && td.querySelector('table') && td.querySelector('table').querySelector('tbody');var trs = tbody && tbody.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var obj = {};if (trs[i].getAttribute("userdata")) {
          obj.liuchenghao = trs[i].querySelectorAll('td')[1].textContent;obj.youxianji = trs[i].querySelectorAll('td')[2].textContent;obj.yewumiaoshu = trs[i].querySelectorAll('td')[3].textContent;obj.yewuliucheng = trs[i].querySelectorAll('td')[4].textContent;obj.shengqingren = trs[i].querySelectorAll('td')[5].textContent;obj.fasongriqi = trs[i].querySelectorAll('td')[6].textContent;obj.gongsimingcheng = trs[i].querySelectorAll('td')[7].textContent;obj.buzhoumiaoshu = trs[i].querySelectorAll('td')[8].textContent;obj.liuchenglaiyuan = trs[i].querySelectorAll('td')[9].textContent;obj.gongsibianma = trs[i].querySelectorAll('td')[10].textContent;obj.index = i;data.push(obj);
        }
      }return data;
    },
    doAction_uiControl4_AnNOzG: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.showLoading();var index = parseInt(data.customData);var td = elem.ownerDocument.querySelector('td[id="aaaa.MyUWLCompView.Table_0-content"]');var tbody = td && td.querySelector('table') && td.querySelector('table').querySelector('tbody');var trs = tbody && tbody.querySelectorAll('tr');trs[index].querySelectorAll('td')[3].querySelector('a').click();
      }
    },
    getTemplate_uiControl4_AnNOzG: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var dom;\n    var cname = e.target.className;\n    if(cname == \"\"){\n     dom = e.target.parentElement; \n    } else {\n      dom = e.target;\n    }\n    if(handler){\n      handler({\n        eventType:'click',\n        data:dom.dataset.index\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var that = this;\n    return (\n      <div>\n        {\n          data && data.map(function(d,i){\n            return(\n            \t<div className=\"erp_index\" data-index = {d.index} onClick={that.handlerClick.bind(that)}>\n                <div>{d.liuchenghao}</div>\n                <div>{d.youxianji}</div>\n                <div>{d.yewumiaoshu}</div>\n                <div>{d.yewuliucheng}</div>\n                <div>{d.shengqingren}</div>\n                <div>{d.fasongriqi}</div>\n                <div>{d.gongsimingcheng}</div>\n                <div>{d.buzhoumiaoshu}</div>\n                <div>{d.liuchenglaiyuan}</div>\n                <div>{d.gongsibianma}</div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var dom;\n    var cname = e.target.className;\n    if (cname == \"\") {\n      dom = e.target.parentElement;\n    } else {\n      dom = e.target;\n    }\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: dom.dataset.index\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var that = this;\n    return React.createElement(\n      \"div\",\n      null,\n      data && data.map(function (d, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"erp_index\", \"data-index\": d.index, onClick: that.handlerClick.bind(that) },\n          React.createElement(\n            \"div\",\n            null,\n            d.liuchenghao\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.youxianji\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.yewumiaoshu\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.yewuliucheng\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.shengqingren\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.fasongriqi\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.gongsimingcheng\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.buzhoumiaoshu\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.liuchenglaiyuan\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.gongsibianma\n          )\n        );\n      })\n    );\n  }\n});";
    }
  }, "index");
})(window, ysp);