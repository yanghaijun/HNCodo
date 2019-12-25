(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4_PAmTZG: function (elem) {
      if (!elem) {
        return;
      }ysp.appMain.showLoading(); // debugger;
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
        debugger;setTimeout(function () {
          var divs = elem.ownerDocument.querySelector("#DetailedNavigationTree") && elem.ownerDocument.querySelector("#DetailedNavigationTree").querySelectorAll('div');for (var i = 0; i < divs.length; i++) {
            if (divs[i].textContent == '新待办工作') {
              var evt = document.createEvent('MouseEvent');evt.initMouseEvent('click', true, true);divs[i].querySelector('a').dispatchEvent(evt); //divs[i].querySelector('a').click();
            }
          }
        }, 2000);
      }
    },
    getTemplate_uiControl3_vTJhaf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  componentDidUpdate(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  // componentDidMount(){\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  componentDidUpdate: function componentDidUpdate() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement('div', null);\n  }\n});";
    },
    getData_control5_T8HU3v: function (elem) {
      if (!elem) {
        return;
      }setTimeout(function () {
        ysp.appMain.hideLoading();
      }, 2000);var data = [];var td = elem.ownerDocument.querySelector('td[id="aaaa.MyUWLCompView.Table_0-content"]');var tbody = td && td.querySelector('table') && td.querySelector('table').querySelector('tbody');var trs = tbody && tbody.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var obj = {};if (trs[i].getAttribute("userdata")) {
          obj.liuchenghao = trs[i].querySelectorAll('td')[1].textContent;obj.youxianji = trs[i].querySelectorAll('td')[2].textContent;obj.yewumiaoshu = trs[i].querySelectorAll('td')[3].textContent;obj.yewuliucheng = trs[i].querySelectorAll('td')[4].textContent;obj.shengqingren = trs[i].querySelectorAll('td')[5].textContent;obj.fasongriqi = trs[i].querySelectorAll('td')[6].textContent;obj.gongsimingcheng = trs[i].querySelectorAll('td')[7].textContent;obj.buzhoumiaoshu = trs[i].querySelectorAll('td')[8].textContent;obj.liuchenglaiyuan = trs[i].querySelectorAll('td')[9].textContent;obj.gongsibianma = trs[i].querySelectorAll('td')[10].textContent;data.push(obj);
        }
      }return data;
    },
    doAction_uiControl4_AnNOzG: function (data, elem) {},
    getTemplate_uiControl4_AnNOzG: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData || [];\n    return (\n      <div>\n        {\n          data && data.map(function(d,i){\n            return(\n            \t<div className=\"erp_index\">\n                <div>{d.liuchenghao}</div>\n                <div>{d.youxianji}</div>\n                <div>{d.yewumiaoshu}</div>\n                <div>{d.yewuliucheng}</div>\n                <div>{d.shengqingren}</div>\n                <div>{d.fasongriqi}</div>\n                <div>{d.gongsimingcheng}</div>\n                <div>{d.buzhoumiaoshu}</div>\n                <div>{d.liuchenglaiyuan}</div>\n                <div>{d.gongsibianma}</div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      \"div\",\n      null,\n      data && data.map(function (d, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"erp_index\" },\n          React.createElement(\n            \"div\",\n            null,\n            d.liuchenghao\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.youxianji\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.yewumiaoshu\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.yewuliucheng\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.shengqingren\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.fasongriqi\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.gongsimingcheng\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.buzhoumiaoshu\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.liuchenglaiyuan\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            d.gongsibianma\n          )\n        );\n      })\n    );\n  }\n});";
    }
  }, "index");
})(window, ysp);