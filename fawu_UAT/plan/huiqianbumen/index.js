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
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.dataset.index\n      })\n    }\n  },\n  handlerQuery(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'query\'\n      })\n    }\n  },\n  render: function() {\n    var text = this.props.customData && this.props.customData.text;\n    var flags = this.props.customData && this.props.customData.flags;\n    var _this = this;\n    return (\n      <div>\n      \t{\n          text ? <div className="ysp-huiqian-bumen-all">\n        <div>\u9009\u62E9\u5EFA\u8BAE\u4F1A\u7B7E\u90E8\u95E8</div>\n        \n        <div className="ysp-huiqian-bumen">\n        \t{\n            text && text.map(function(d,i){\n              return(\n              \t<div className={flags[i][0] ? \'ysp-huiqian-bumen-yes\' : \'\' } onClick={_this.handlerClick.bind(_this)} data-index={i} >{d}</div>\n              )\n            })\n          }\n        </div>\n        <div onClick={_this.handlerQuery.bind(_this)} className="ysp-huiqian-bumen-query">\u786E\u5B9A</div>\n      </div> : \'\'\n        }\n      </div>\n      \n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.dataset.index\n      });\n    }\n  },\n  handlerQuery: function handlerQuery() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'query\'\n      });\n    }\n  },\n\n  render: function render() {\n    var text = this.props.customData && this.props.customData.text;\n    var flags = this.props.customData && this.props.customData.flags;\n    var _this = this;\n    return React.createElement(\n      \'div\',\n      null,\n      text ? React.createElement(\n        \'div\',\n        { className: \'ysp-huiqian-bumen-all\' },\n        React.createElement(\n          \'div\',\n          null,\n          \'\\u9009\\u62E9\\u5EFA\\u8BAE\\u4F1A\\u7B7E\\u90E8\\u95E8\'\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-huiqian-bumen\' },\n          text && text.map(function (d, i) {\n            return React.createElement(\n              \'div\',\n              { className: flags[i][0] ? \'ysp-huiqian-bumen-yes\' : \'\', onClick: _this.handlerClick.bind(_this), \'data-index\': i },\n              d\n            );\n          })\n        ),\n        React.createElement(\n          \'div\',\n          { onClick: _this.handlerQuery.bind(_this), className: \'ysp-huiqian-bumen-query\' },\n          \'\\u786E\\u5B9A\'\n        )\n      ) : \'\'\n    );\n  }\n});';
    },
    getData_control32_LWmgzt: function (elem) {
      if (!elem) {
        return;
      } //console.log(elem);
      var data = { person: [], post: [], flags: [] };var trs = elem.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
        var a = [];var b = [];var c = [];if (trs[i].getAttribute('udat')) {
          var tds = trs[i].querySelectorAll('td');a.push(tds[tds.length - 2].textContent);b.push(tds[tds.length - 1].textContent);data.person.push(a);data.post.push(b);var tdImag = tds[tds.length - 3];if (tdImag) {
            var img = tdImag.querySelector('img');if (img) {
              var imgFlag = img.getAttribute('class').indexOf('urRImgOn') > -1 ? true : false;c.push(imgFlag);data.flags.push(c);
            }
          }
        }
      }return data;
    },
    doAction_uiControl30_xBhWEK: function (data, elem) {
      var type = data.eventType; //选择人员方法
      if (type == 'click') {
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);var index = parseInt(data.customData);var trs = elem.querySelectorAll("tr");var a = [];for (var i = 0; i < trs.length; i++) {
          if (trs[i].getAttribute('udat')) {
            a.push(trs[i]);
          }
        }a[index] && a[index].querySelector('input').click();
      } //按钮方法
      if (type == 'button') {
        var title = data.customData.title;var ass = elem.querySelectorAll('a');ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);if (title == '确认') {
          var flags = data.customData.flags.split(',');var a = [];for (var i = 0; i < flags.length; i++) {
            if (flags[i] == 'true') {
              a.push(true);
            }
          }var cc = a.length;if (cc == 0) {
            alert("请指定一位审批人！！");return true;
          } else {
            ass && ass[0].click();
          }
        }if (title == '关闭') {
          ass && ass[1].click();
        } //   if (title == '确认') {
        //     ass && ass[0].click();
        //   }
        //   if (title == '关闭') {
        //     ass && ass[1].click();
        //   }
      }
    },
    getTemplate_uiControl30_xBhWEK: function () {
      var selfTemplate = '\nmodule.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.dataset.index\n      })\n    }\n  },\n  handlerClickButton(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'button\',\n        data:{\n          title:target.dataset.title,\n          flags:target.dataset.flags\n        }\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var dataPerson = this.props.customData && this.props.customData.person;\n    var dataPost = this.props.customData && this.props.customData.post;\n    var flags = this.props.customData && this.props.customData.flags;\n    return (\n      <div>\n        {\n          dataPerson ? <div className="ysp-choose-person">\n            \t<div>\n                <span>\u4EBA\u5458\u540D\u79F0</span>\n                <span>\u5C97\u4F4D</span>\n              </div>\n              {\n                dataPerson && dataPerson.map(function(d,i){\n                  return(\n                    <div onClick={_this.handlerClick.bind(_this)} data-index={i} className={flags[i][0] ? "ysp-choose-persons" : "ysp-choose-no-persons"}>\n                      <span data-index={i}>{d}</span>\n                      <span data-index={i}>{dataPost[i]}</span>\n                    </div>\n                  )\n                })\n              }\n\n              <div className="ysp-choose-person-button">\n                <span onClick={this.handlerClickButton.bind(this)} data-title="\u786E\u8BA4" data-flags={flags}>\u786E\u8BA4</span>\n                <span onClick={this.handlerClickButton.bind(this)} data-title="\u5173\u95ED">\u5173\u95ED</span>\n              </div>\n            </div> : \'\'\n        }\n        \n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.dataset.index\n      });\n    }\n  },\n  handlerClickButton: function handlerClickButton(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'button\',\n        data: {\n          title: target.dataset.title,\n          flags: target.dataset.flags\n        }\n      });\n    }\n  },\n\n  render: function render() {\n    var _this = this;\n    var dataPerson = this.props.customData && this.props.customData.person;\n    var dataPost = this.props.customData && this.props.customData.post;\n    var flags = this.props.customData && this.props.customData.flags;\n    return React.createElement(\n      \'div\',\n      null,\n      dataPerson ? React.createElement(\n        \'div\',\n        { className: \'ysp-choose-person\' },\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            \'\\u4EBA\\u5458\\u540D\\u79F0\'\n          ),\n          React.createElement(\n            \'span\',\n            null,\n            \'\\u5C97\\u4F4D\'\n          )\n        ),\n        dataPerson && dataPerson.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            { onClick: _this.handlerClick.bind(_this), \'data-index\': i, className: flags[i][0] ? "ysp-choose-persons" : "ysp-choose-no-persons" },\n            React.createElement(\n              \'span\',\n              { \'data-index\': i },\n              d\n            ),\n            React.createElement(\n              \'span\',\n              { \'data-index\': i },\n              dataPost[i]\n            )\n          );\n        }),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-choose-person-button\' },\n          React.createElement(\n            \'span\',\n            { onClick: this.handlerClickButton.bind(this), \'data-title\': \'\\u786E\\u8BA4\', \'data-flags\': flags },\n            \'\\u786E\\u8BA4\'\n          ),\n          React.createElement(\n            \'span\',\n            { onClick: this.handlerClickButton.bind(this), \'data-title\': \'\\u5173\\u95ED\' },\n            \'\\u5173\\u95ED\'\n          )\n        )\n      ) : \'\'\n    );\n  }\n});';
    }
  }, "huiqianbumen");
})(window, ysp);