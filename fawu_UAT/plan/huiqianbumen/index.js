(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control31_OMFF2l: function (elem) {
      if (!elem) {
        return;
      }var data = { flags: [], text: [] };var trs = elem.querySelectorAll('tr');if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var a = [];var b = [];if (trs[i].getAttribute('udat')) {
            //获取部门名称
            a.push(trs[i].textContent); //获取是否选择
            var tds = trs[i].querySelectorAll('td');if (tds) {
              var inputs = tds[tds.length - 2].querySelector('input');var flag = inputs.getAttribute('value') == "true" ? true : false;b.push(flag);
            }data.text.push(a);data.flags.push(b);
          }
        }
      }return data;
    },
    doAction_uiControl29_viGJ9H: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        ysp.appMain.showLoading();
        setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1500);var index = data.customData;var trs = elem.querySelectorAll('tr');var a = [];if (trs) {
          for (var i = 0; i < trs.length; i++) {
            if (trs[i].getAttribute('udat')) {
              //获取是否选择
              var tds = trs[i].querySelectorAll('td');if (tds) {
                var inputs = tds[tds.length - 2].querySelector('input');a.push(inputs);
              }
            }
          }
        }a[index].click();
      }if (type == 'query') {
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();alert("建议会签部门选择成功!");elem.ownerDocument.defaultView.parent.close();
        }, 3000);var ass = elem.querySelector('a');
        if (ass) {
          ass.click();
        }
      }
    },
    getTemplate_uiControl29_viGJ9H: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.dataset.index\n      })\n    }\n  },\n  handlerQuery(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'query\'\n      })\n    }\n  },\n  render: function() {\n    var text = this.props.customData && this.props.customData.text;\n    var flags = this.props.customData && this.props.customData.flags;\n    var _this = this;\n    return (\n      <div className="ysp-huiqian-bumen-all">\n        <div>\u9009\u62E9\u5EFA\u8BAE\u4F1A\u7B7E\u90E8\u95E8</div>\n        \n        <div className="ysp-huiqian-bumen">\n        \t{\n            text.map(function(d,i){\n              return(\n              \t<div className={flags[i][0] ? \'ysp-huiqian-bumen-yes\' : \'\' } onClick={_this.handlerClick.bind(_this)} data-index={i} >{d}</div>\n              )\n            })\n          }\n        </div>\n        <div onClick={_this.handlerQuery.bind(_this)} className="ysp-huiqian-bumen-query">\u786E\u5B9A</div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.dataset.index\n      });\n    }\n  },\n  handlerQuery: function handlerQuery() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'query\'\n      });\n    }\n  },\n\n  render: function render() {\n    var text = this.props.customData && this.props.customData.text;\n    var flags = this.props.customData && this.props.customData.flags;\n    var _this = this;\n    return React.createElement(\n      \'div\',\n      { className: \'ysp-huiqian-bumen-all\' },\n      React.createElement(\n        \'div\',\n        null,\n        \'\\u9009\\u62E9\\u5EFA\\u8BAE\\u4F1A\\u7B7E\\u90E8\\u95E8\'\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'ysp-huiqian-bumen\' },\n        text.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            { className: flags[i][0] ? \'ysp-huiqian-bumen-yes\' : \'\', onClick: _this.handlerClick.bind(_this), \'data-index\': i },\n            d\n          );\n        })\n      ),\n      React.createElement(\n        \'div\',\n        { onClick: _this.handlerQuery.bind(_this), className: \'ysp-huiqian-bumen-query\' },\n        \'\\u786E\\u5B9A\'\n      )\n    );\n  }\n});';
    }
  }, "huiqianbumen");
})(window, ysp);