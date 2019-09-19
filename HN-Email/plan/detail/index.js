(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control10_nkbIT5: function (elem) {},
    doAction_uiControl7_KK4W7A: function (data, elem) {
      if (data.eventType == 'back') {
        $(elem).find('li').eq('1').find('a').click();
      }
    },
    getTemplate_uiControl7_KK4W7A: function () {
      var selfTemplate = 'module.exports = React.createClass({\n     back:function(e){\n     var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'back\'\n      })\n    }\n  },\n  render: function() {\n    var me = this;\n    return (\n      <div className=\'d_detialBack\'>\n        <span onClick={me.back}>\u8FD4\u56DE</span>\n        <span></span>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  back: function back(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function render() {\n    var me = this;\n    return React.createElement(\n      \'div\',\n      { className: \'d_detialBack\' },\n      React.createElement(\n        \'span\',\n        { onClick: me.back },\n        \'\\u8FD4\\u56DE\'\n      ),\n      React.createElement(\'span\', null)\n    );\n  }\n});';
    },
    getData_control11_tnRl35: function (elem) {
      if (!elem) {
        return false;
      }var data = { shujuTitle: [], fujian: [] };var elem = elem && elem.contentDocument && elem.contentDocument.documentElement;var topMess = $(elem).find('#cont').find('.mail_top');var obj = {};obj.title = $(topMess).find('h1').eq(0).text();var lis = $(topMess).find('li');obj.postMan = $(lis).eq(0).text();obj.postTime = $(lis).eq(1).text();obj.saveMan = $(lis).eq(2).text();obj.postRecman = $(lis).eq(3).text();obj.postAttachment = $(lis).eq(4).text();data.shujuTitle.push(obj); //以上邮件人员信息
      var fujianList = $(elem) && $(elem).find('#fj_list') && $(elem).find('#fj_list').find('.text');if (fujianList[0] != undefined) {
        var textContent = fujianList[0].textContent.replace(/''/g, '').replace(/\t/g, '').replace(/  /g, '').replace(/打开/g, '').split('\n');var text = [];textContent.map(function (i, k) {
          if (i.length > 4) {
            text.push(i);
          }data.fujian = text;
        });
      }return data;
    },
    doAction_uiControl8_a0ktAM: function (data, elem) {},
    getTemplate_uiControl8_a0ktAM: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data =this.props.customData;\n    if(data){\n    return (\n      <div className=\'d_detail\'>\n        {data&&data.shujuTitle&&data.shujuTitle.map(function(dt,dl){\n          return (<div className=\'d_detailTitle\'>\n                      <h6>{dt.title}</h6>\n                      <div>{dt.postMan}</div>\n                      <div>{dt.postTime}</div>\n                      <div>{dt.saveMan}</div>\n                      <div>{dt.postRecman}</div>\n                      <div>{dt.postAttachment}</div>\n                    </div>)\n        })}\n        <div  className=\'d_fujian\'>\n          {data&&data.fujian&&data.fujian.map(function(j,q){\n            return (<div>\n              <span></span>\n              <span>{j}</span>\n            </div>)\n          })}\n        </div>\n      </div>\n    )\n      }else {\n        return <div>\u52A0\u8F7D\u4E2D...</div>\n      }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'d_detail\' },\n        data && data.shujuTitle && data.shujuTitle.map(function (dt, dl) {\n          return React.createElement(\n            \'div\',\n            { className: \'d_detailTitle\' },\n            React.createElement(\n              \'h6\',\n              null,\n              dt.title\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.postMan\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.postTime\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.saveMan\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.postRecman\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.postAttachment\n            )\n          );\n        }),\n        React.createElement(\n          \'div\',\n          { className: \'d_fujian\' },\n          data && data.fujian && data.fujian.map(function (j, q) {\n            return React.createElement(\n              \'div\',\n              null,\n              React.createElement(\'span\', null),\n              React.createElement(\n                \'span\',\n                null,\n                j\n              )\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\n        \'div\',\n        null,\n        \'\\u52A0\\u8F7D\\u4E2D...\'\n      );\n    }\n  }\n});';
    }
  }, "detail");
})(window, ysp);