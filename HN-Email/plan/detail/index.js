(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_tnRl35: function (elem) {
      if (!elem) {
        return false;
      }var data = { shujuTitle: [], content: [], fujian: [],
        fujianlogo: [] };var elem = elem && elem.contentDocument && elem.contentDocument.documentElement;var topMess = $(elem).find('#cont').find('.mail_top');var obj = {};obj.title = $(topMess).find('h1').eq(0).text();var lis = $(topMess).find('li');obj.postMan = $(lis).eq(0) && $(lis).eq(0).text();obj.postTime = $(lis).eq(1) && $(lis).eq(1).text();obj.saveMan = $(lis).eq(2) && $(lis).eq(2).text();obj.postRecman = $(lis).eq(3) && $(lis).eq(3).text();obj.postAttachment = $(lis).eq(4) && $(lis).eq(4).text();data.shujuTitle.push(obj); //以上邮件人员信息
      //内容部分
      var content = $(elem).find('#mail_content') && $(elem).find('#mail_content');
      var text = content[0] && content[0].textContent;data.content.push(text); //附件开始
      var fujianList = $(elem) && $(elem).find('#fj_list') && $(elem).find('#fj_list').find('.text');if (fujianList[0] != undefined) {
        var textContent = fujianList[0].textContent.replace(/''/g, '').replace(/\t/g, '').replace(/  /g, '').replace(/打开/g, '').split('\n');var text = [];var logo = [];textContent.map(function (i, k) {
          if (i.length > 4) {
            text.push(i);if (i.indexOf('pdf') > 0) {
              logo.push('p');
            } else if (i.indexOf('doc') > 0) {
              logo.push('w');
            } else if (i.indexOf('xls') > 0) {
              logo.push('e');
            } else {
              logo.push('w');
            }
          }data.fujian = text;data.fujianlogo = logo;
        });
      }return data;
    },
    doAction_uiControl8_a0ktAM: function (data, elem) {
      if (data.eventType == 'back') {
        var back = elem.ownerDocument.querySelector('#ext-gen19');$(back).find('li').eq('1').find('a').click();
      }
    },
    getTemplate_uiControl8_a0ktAM: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  back:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'back\'\n      })\n    }\n  },\n  render: function() {\n    var data =this.props.customData,me=this;\n   // var scorllH =document.body.clientHeight-140+\'px\';\n     var scorllH =document.body.clientHeight-500+\'px\';\n    console.log(document.body.clientHeight)\n    if(data){\n    return (\n      <div className=\'d_detail\'>\n        <div className=\'d_detialBack\'>\n        <span onClick={me.back}>\u8FD4\u56DE</span>\n        <span>\u6B63\u6587</span>\n      </div>\n        {data&&data.shujuTitle&&data.shujuTitle.map(function(dt,dl){\n          return (<div className=\'d_detailTitle\'  style={{\'height\':scorllH}}>\n              <div>{dt.postMan}</div>\n              <div>{dt.postTime}</div>\n              <div>{dt.saveMan}</div>\n              <div>{dt.postRecman}</div>\n              <div>{dt.postAttachment}</div>\n              <h6>{dt.title}</h6>\n           </div>)\n        })}\n        <div>{data.content}</div>\n        <div  className=\'d_fujian\' style={{\'height\':\'120px\',\'position\':\'absolute\',\'bottom\':\'0px\'}}>\n          {data&&data.fujian&&data.fujian.map(function(j,q){\n            return (<div>\n                <div>\n                \t<span className={data.fujianlogo&&data.fujianlogo[q]==\'p\'?\'p\':(data.fujianlogo[q]==\'w\'?\'w\':\'e\')}></span>\n                <span>{j}</span>\n                </div>\n                <div>\n                \t<span></span>\n                  <span></span>\n                  <span></span>\n                </div>   \t \n            </div>)\n          })}\n        </div>\n      </div>\n    )\n      }else {\n        return <div>\u52A0\u8F7D\u4E2D...</div>\n      }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  back: function back(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        me = this;\n    // var scorllH =document.body.clientHeight-140+\'px\';\n    var scorllH = document.body.clientHeight - 500 + \'px\';\n    console.log(document.body.clientHeight);\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'d_detail\' },\n        React.createElement(\n          \'div\',\n          { className: \'d_detialBack\' },\n          React.createElement(\n            \'span\',\n            { onClick: me.back },\n            \'\\u8FD4\\u56DE\'\n          ),\n          React.createElement(\n            \'span\',\n            null,\n            \'\\u6B63\\u6587\'\n          )\n        ),\n        data && data.shujuTitle && data.shujuTitle.map(function (dt, dl) {\n          return React.createElement(\n            \'div\',\n            { className: \'d_detailTitle\', style: { \'height\': scorllH } },\n            React.createElement(\n              \'div\',\n              null,\n              dt.postMan\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.postTime\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.saveMan\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.postRecman\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              dt.postAttachment\n            ),\n            React.createElement(\n              \'h6\',\n              null,\n              dt.title\n            )\n          );\n        }),\n        React.createElement(\n          \'div\',\n          null,\n          data.content\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'d_fujian\', style: { \'height\': \'120px\', \'position\': \'absolute\', \'bottom\': \'0px\' } },\n          data && data.fujian && data.fujian.map(function (j, q) {\n            return React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\'span\', { className: data.fujianlogo && data.fujianlogo[q] == \'p\' ? \'p\' : data.fujianlogo[q] == \'w\' ? \'w\' : \'e\' }),\n                React.createElement(\n                  \'span\',\n                  null,\n                  j\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\'span\', null),\n                React.createElement(\'span\', null),\n                React.createElement(\'span\', null)\n              )\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\n        \'div\',\n        null,\n        \'\\u52A0\\u8F7D\\u4E2D...\'\n      );\n    }\n  }\n});';
    }
  }, "detail");
})(window, ysp);