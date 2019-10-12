(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control20_CwGHle: function (elem) {},
    doAction_uiControl7_ZUZ5vJ: function (data, elem) {},
    getTemplate_uiControl7_ZUZ5vJ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u56DB\u5DDD\u8BE6\u60C5\u9875\u9762\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u56DB\\u5DDD\\u8BE6\\u60C5\\u9875\\u9762\"\n    );\n  }\n});";
    },

    getData_control25_gElFrN: function (elem) {
      if (!elem) {
        return false;
      }var data = { shujuTitle: [], content: [], fujian: [], fujianlogo: [], fujianOpen: [], cookies: [] };var elem = elem && elem.contentDocument && elem.contentDocument.documentElement;var topMess = $(elem).find('#cont').find('.mail_top');var obj = {};obj.title = $(topMess).find('h1').eq(0).text();var lis = $(topMess).find('li');obj.postMan = $(lis).eq(0) && $(lis).eq(0).text();obj.postTime = $(lis).eq(1) && $(lis).eq(1).text();obj.saveMan = $(lis).eq(2) && $(lis).eq(2).text();obj.postRecman = $(lis).eq(3) && $(lis).eq(3).text();obj.postAttachment = $(lis).eq(4) && $(lis).eq(4).text();data.shujuTitle.push(obj); //以上邮件人员信息
      //内容部分
      var content = $(elem).find('#mail_content') && $(elem).find('#mail_content'); //var text = content[0] && content[0].innerHTML.replace(/&nbsp;/g, '').replace(/\n/g, '').split('<br>');
      var text = content[0] && content[0].textContent.replace(/\n/g, '').replace(/\t/g, '');data.content = text; //附件开始
      var fujianList = $(elem) && $(elem).find('#fj_list') && $(elem).find('#fj_list').find('.text'); //var url = "http://59.110.171.69:31003/" + encodeURIComponent(attachUrl);
      if (fujianList[0] != undefined) {
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
        }); //以上是附件标题和附件的logo，一下是附件url
        $(fujianList).find('a').each(function (d, p) {
          if (this.style.display) {
            var url = "http://59.110.171.69:31009" + this.pathname;data.fujianOpen.push(url);
          }
        });data.cookies.push(elem.ownerDocument.cookie);
      }return data;
    },
    doAction_uiControl10_5Bz3z1: function (data, elem) {
      if (data.eventType == 'back') {
        var back = elem.ownerDocument.querySelector('#ext-gen19');$(back).find('li').eq('1').find('a').click();
      } else if (data.eventType == 'fujian') {
        var url = data.dataCustom.url;var cookies = data.dataCustom.cookies;var text = data.customData.text;var cookieValue = cookies.split("LtpaToken=")[1];var dbNames = url.match(/mail\/.*nsf/)[0];var dbName = dbNames.split('mail/')[1];var dbs = url.split('/$file')[0];var dbss = dbs.split('.nsf/')[1];var dbid = dbss.split('/')[1];if (top.EAPI.isAndroid()) {
          //huaneng.fujianEmail(url, cookies, text);
          huaneng.fujian("Email", dbName, dbid, text, cookies);
        } else {
          //top.EAPI.openWindow(url + '?_ysp_filepreview=1');
          // top.EAPI.postMessageToNative("openDocument", {
          //   "url": url,
          //   "cookieName": "LtpaToken",
          //   "cookieValue": cookies.split("LtpaToken=")[1],
          //   "cookieDomain": "59.110.171.69"
          // });
          top.EAPI.postMessageToNative("openDocument", { "dbname": dbName, "dbid": dbid, "text": text, "cookie": cookies.split("LtpaToken=")[1], "type": "Email" });
        }
      }
    },
    getTemplate_uiControl10_5Bz3z1: function () {
      var selfTemplate = "module.exports = React.createClass({\n  back:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'back'\n      })\n    }\n  },\n  handlerfujian(e){\n    var classTitle = e.target.className;\n    var dom;\n    // if(\"p\" == classTitle || \"w\" == classTitle || \"e\" == classTitle){\n    //   dom = e.target.parentElement;\n    // } else {\n    //   dom = e.target;\n    // }\n     dom = e.target.parentElement;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujian',\n        data:{\n          url:dom.dataset.url,\n          cookies: dom.dataset.cookies,\n          text: dom.dataset.text\n        }\n      })\n    }\n  },\n  render: function() {\n    var data =this.props.customData,me=this;\n    var scorllH =document.body.clientHeight-120+'px';\n    if(data){\n    return (\n      <div className='d_detail'>\n        <div className='d_detialBack'style={{'position':'fixed','top':'0px'}}>\n        <span onClick={me.back}>\u8FD4\u56DE</span>\n        <span>\u6B63\u6587</span>\n      </div>\n        <div style={{'margin-top':'45px'}}>\n          {data&&data.shujuTitle&&data.shujuTitle.map(function(dt,dl){\n            return (<div className='d_detailTitle'>\n                <div>{dt.postMan}</div>\n                <div>{dt.postTime}</div>\n                <div>{dt.saveMan}</div>\n                <div>{dt.postRecman}</div>\n                <div>{dt.postAttachment}</div>\n                <h6>{dt.title}</h6>\n             </div>)\n          })}\n          {\n         //    <div>\n         //  {data.content&&data.content.map(function(di,l){\n         //     return (<div style={{padding:l>0?'0px 20px':'0px 8px'}}>{di}</div>)\n         //   })}\n         // </div>\n          }\n          <div style={{padding:'0px 8px'}}>{data.content&&data.content}</div>\n        </div>\n        <div  className='d_fujian'>\n          {data&&data.fujian&&data.fujian.map(function(j,q){\n            return (<div>\n                <div data-url={data.fujianOpen&&data.fujianOpen[q]} data-cookies={data.cookies&&data.cookies} data-text={j} onClick={me.handlerfujian}>\n                \t<span className={data.fujianlogo&&data.fujianlogo[q]=='p'?'p':(data.fujianlogo[q]=='w'?'w':'e')}></span>\n                <span>{j}</span>\n                </div>\t \n            </div>)\n          })}\n        </div>\n      </div>\n    )\n      }else {\n        return <div>\u52A0\u8F7D\u4E2D...</div>\n      }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  back: function back(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'back'\n      });\n    }\n  },\n  handlerfujian: function handlerfujian(e) {\n    var classTitle = e.target.className;\n    var dom;\n    // if(\"p\" == classTitle || \"w\" == classTitle || \"e\" == classTitle){\n    //   dom = e.target.parentElement;\n    // } else {\n    //   dom = e.target;\n    // }\n    dom = e.target.parentElement;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'fujian',\n        data: {\n          url: dom.dataset.url,\n          cookies: dom.dataset.cookies,\n          text: dom.dataset.text\n        }\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData,\n        me = this;\n    var scorllH = document.body.clientHeight - 120 + 'px';\n    if (data) {\n      return React.createElement(\n        'div',\n        { className: 'd_detail' },\n        React.createElement(\n          'div',\n          { className: 'd_detialBack', style: { 'position': 'fixed', 'top': '0px' } },\n          React.createElement(\n            'span',\n            { onClick: me.back },\n            '\\u8FD4\\u56DE'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u6B63\\u6587'\n          )\n        ),\n        React.createElement(\n          'div',\n          { style: { 'margin-top': '45px' } },\n          data && data.shujuTitle && data.shujuTitle.map(function (dt, dl) {\n            return React.createElement(\n              'div',\n              { className: 'd_detailTitle' },\n              React.createElement(\n                'div',\n                null,\n                dt.postMan\n              ),\n              React.createElement(\n                'div',\n                null,\n                dt.postTime\n              ),\n              React.createElement(\n                'div',\n                null,\n                dt.saveMan\n              ),\n              React.createElement(\n                'div',\n                null,\n                dt.postRecman\n              ),\n              React.createElement(\n                'div',\n                null,\n                dt.postAttachment\n              ),\n              React.createElement(\n                'h6',\n                null,\n                dt.title\n              )\n            );\n          }),\n          React.createElement(\n            'div',\n            { style: { padding: '0px 8px' } },\n            data.content && data.content\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'd_fujian' },\n          data && data.fujian && data.fujian.map(function (j, q) {\n            return React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'div',\n                { 'data-url': data.fujianOpen && data.fujianOpen[q], 'data-cookies': data.cookies && data.cookies, 'data-text': j, onClick: me.handlerfujian },\n                React.createElement('span', { className: data.fujianlogo && data.fujianlogo[q] == 'p' ? 'p' : data.fujianlogo[q] == 'w' ? 'w' : 'e' }),\n                React.createElement(\n                  'span',\n                  null,\n                  j\n                )\n              )\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\n        'div',\n        null,\n        '\\u52A0\\u8F7D\\u4E2D...'\n      );\n    }\n  }\n});";
    }
  }, "detailSC");
})(window, ysp);