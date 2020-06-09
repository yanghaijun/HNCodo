(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16_ZGzmPn: function (elem) {
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
    doAction_uiControl14_GuT1ou: function (data, elem) {
      var type = data.eventType; //选择人员方法
      if (type == 'click') {
        var index = parseInt(data.customData);var trs = elem.querySelectorAll("tr");var a = [];for (var i = 0; i < trs.length; i++) {
          if (trs[i].getAttribute('udat')) {
            a.push(trs[i]);
          }
        }a[index] && a[index].querySelector('input').click();
      } //按钮方法
      if (type == 'button') {
        var title = data.customData.title;var ass = elem.querySelectorAll('a');if (title == '确认') {
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
    }, getTemplate_uiControl14_GuT1ou: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.dataset.index\n      })\n    }\n  },\n  handlerClickButton(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'button\',\n        data:{\n          title:target.dataset.title,\n          flags:target.dataset.flags\n        }\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var dataPerson = this.props.customData && this.props.customData.person;\n    var dataPost = this.props.customData && this.props.customData.post;\n    var flags = this.props.customData && this.props.customData.flags;\n    return (\n      <div className="ysp-choose-person">\n        <div>\n          <span>\u4EBA\u5458\u540D\u79F0</span>\n          <span>\u5C97\u4F4D</span>\n        </div>\n        {\n          dataPerson.map(function(d,i){\n            return(\n            \t<div onClick={_this.handlerClick.bind(_this)} data-index={i} className={flags[i][0] ? "ysp-choose-persons" : "ysp-choose-no-persons"}>\n                <span data-index={i}>{d}</span>\n                <span data-index={i}>{dataPost[i]}</span>\n              </div>\n            )\n          })\n        }\n        \n        <div className="ysp-choose-person-button">\n          <span onClick={this.handlerClickButton.bind(this)} data-title="\u786E\u8BA4" data-flags={flags}>\u786E\u8BA4</span>\n          <span onClick={this.handlerClickButton.bind(this)} data-title="\u5173\u95ED">\u5173\u95ED</span>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.dataset.index\n      });\n    }\n  },\n  handlerClickButton: function handlerClickButton(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'button\',\n        data: {\n          title: target.dataset.title,\n          flags: target.dataset.flags\n        }\n      });\n    }\n  },\n\n  render: function render() {\n    var _this = this;\n    var dataPerson = this.props.customData && this.props.customData.person;\n    var dataPost = this.props.customData && this.props.customData.post;\n    var flags = this.props.customData && this.props.customData.flags;\n    return React.createElement(\n      \'div\',\n      { className: \'ysp-choose-person\' },\n      React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u4EBA\\u5458\\u540D\\u79F0\'\n        ),\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u5C97\\u4F4D\'\n        )\n      ),\n      dataPerson.map(function (d, i) {\n        return React.createElement(\n          \'div\',\n          { onClick: _this.handlerClick.bind(_this), \'data-index\': i, className: flags[i][0] ? "ysp-choose-persons" : "ysp-choose-no-persons" },\n          React.createElement(\n            \'span\',\n            { \'data-index\': i },\n            d\n          ),\n          React.createElement(\n            \'span\',\n            { \'data-index\': i },\n            dataPost[i]\n          )\n        );\n      }),\n      React.createElement(\n        \'div\',\n        { className: \'ysp-choose-person-button\' },\n        React.createElement(\n          \'span\',\n          { onClick: this.handlerClickButton.bind(this), \'data-title\': \'\\u786E\\u8BA4\', \'data-flags\': flags },\n          \'\\u786E\\u8BA4\'\n        ),\n        React.createElement(\n          \'span\',\n          { onClick: this.handlerClickButton.bind(this), \'data-title\': \'\\u5173\\u95ED\' },\n          \'\\u5173\\u95ED\'\n        )\n      )\n    );\n  }\n});';
    }
  }, "tijiao");
})(window, ysp);