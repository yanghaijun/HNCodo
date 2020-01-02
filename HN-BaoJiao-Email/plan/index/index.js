(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2_6bpTNf: function (elem) {
      if (!elem) {
        return;
      } //ext-gen24
      var data = { list: [] };var titleLists = elem;$(titleLists).find('tr.x-grid3-hd-row').each(function (j) {
        var titlelist = $(this).find('.x-grid3-hd-inner');var obj = {};obj.name = titlelist[2].textContent;obj.title = titlelist[3].textContent;obj.date = titlelist[4].textContent;obj.time = titlelist[5].textContent;obj.cav = titlelist[6].textContent;obj.index = j;data.list.push(obj);
      }); //上面是获取title
      var lists = $(elem)[0].querySelector('#ext-gen39');$(lists).find('tbody').each(function (i) {
        var tds = $(this).find('td').find('.x-grid3-cell-inner');var obj = {};obj.imgs = tds.eq(1).find('img').length;obj.name = tds[2].textContent;obj.title = tds[3].textContent;obj.titleColor = tds.eq(3).find('span').length == 1 ? 'red' : '';obj.date = tds[4].textContent;obj.time = tds[5].textContent;obj.cav = tds[6].textContent;obj.index = i;data.list.push(obj);
      });return data;
    },
    doAction_uiControl1_ltHTbe: function (data, elem) {
      if (data.eventType == 'getValue') {
        var data = data.dataCustom;$(elem).find('#ext-gen39').find('tbody').eq(data).find('td').find('.x-grid3-cell-inner').eq(3).find('a').click();
      }
    },
    getTemplate_uiControl1_ltHTbe: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentWillMount(){\n    ysp.appMain.showLoading();\n  },\n  componentDidMount(){\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },2000)\n  },\n  getValue: function(e) {\n    var target = e.target;\n    var hanlder=this.props.customHandler;\n    if(hanlder){\n      hanlder({\n        eventType:"getValue",\n        data:target.parentElement.getAttribute(\'index\')&&target.parentElement.getAttribute(\'index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me =this;\n    return (\n      <div className=\'d_shoujian\'>\n        <div className=\'d_shoujianHeader\'>\u6536\u4EF6\u7BB1</div>\n        <div> \n          {data.list&&data.list.map(function(i,h){\n              if(h>0){\n                 return ( <div className=\'d_indexList\' index={i.index} onClick={me.getValue}>\n                    <span style={{\'display\':i.imgs==0?\'none\':\'block\'}}></span>\n                    <span>{i.name}</span>\n                    <span>{i.date}  {i.time}</span>\n                    <span className={i.titleColor}>{i.title}</span>\n                    <span>\u5927\u5C0F\uFF1A {i.cav}</span>\n                    <span style={{\'display\':i.imgs==2?\'block\':\'none\'}}></span>\n                    <span></span>\n                </div>)\n              }    \n            })}\n          </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  componentWillMount: function componentWillMount() {\n    ysp.appMain.showLoading();\n  },\n  componentDidMount: function componentDidMount() {\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 2000);\n  },\n\n  getValue: function getValue(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: "getValue",\n        data: target.parentElement.getAttribute(\'index\') && target.parentElement.getAttribute(\'index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      { className: \'d_shoujian\' },\n      React.createElement(\n        \'div\',\n        { className: \'d_shoujianHeader\' },\n        \'\\u6536\\u4EF6\\u7BB1\'\n      ),\n      React.createElement(\n        \'div\',\n        null,\n        data.list && data.list.map(function (i, h) {\n          if (h > 0) {\n            return React.createElement(\n              \'div\',\n              { className: \'d_indexList\', index: i.index, onClick: me.getValue },\n              React.createElement(\'span\', { style: { \'display\': i.imgs == 0 ? \'none\' : \'block\' } }),\n              React.createElement(\n                \'span\',\n                null,\n                i.name\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                i.date,\n                \'  \',\n                i.time\n              ),\n              React.createElement(\n                \'span\',\n                { className: i.titleColor },\n                i.title\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u5927\\u5C0F\\uFF1A \',\n                i.cav\n              ),\n              React.createElement(\'span\', { style: { \'display\': i.imgs == 2 ? \'block\' : \'none\' } }),\n              React.createElement(\'span\', null)\n            );\n          }\n        })\n      )\n    );\n  }\n});';
    },
    getData_control3_ur41nM: function (elem) {},
    doAction_uiControl2_lV5fea: function (data, elem) {},
    getTemplate_uiControl2_lV5fea: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", null);\n  }\n});';
    },
    getData_control4_v2GtC2: function (elem) {
      setTimeout(function () {
        var demoUrl = elem.ownerDocument.defaultView.location.href;var urlIP = demoUrl.split("afmail.nsf")[0]; // var el = elem.querySelectorAll('frame') && elem.querySelectorAll('frame')[1].contentDocument.documentElement.querySelector("#ext-gen3");
        var name = elem.querySelector('input[name="mailfilename"]').value;var numText = elem.querySelector("#ext-comp-1010").textContent;var nums = numText.split("共")[1];var num = parseInt(nums.split("条")[0]);var number = num <= 20 ? num : 20;var xmlhttp = null;if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //alert(JSON.parse(xmlhttp.responseText).ViewData);
            var viewData = JSON.parse(xmlhttp.responseText).ViewData; //console.log(viewData);
            var data = [];viewData.map(function (a, b) {
              data.push(urlIP + name + '/($Inbox)/' + a.SID + '?OpenDocument&TabID=' + a.SID + '&LinkTarget=NewTabWindow');
            });if (top.EAPI.isAndroid()) {
              top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'Email', cookie: document.cookie, fujianUrl: data.toString() }));
            } else if (top.EAPI.isIOS()) {
              top.EAPI.postMessageToNative('Email', data);
            }
          }
        };xmlhttp.open("post", urlIP + "afmail.nsf/agent_CustomViewGetData?openagent");xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");xmlhttp.withCredentials = true;xmlhttp.send("start&filterKey&viewName=($Inbox)&showUnread=true&reverse=true&dbName=" + name + '&limit=' + number);
      }, 4000);
    },
    doAction_uiControl3_CAPhBm: function (data, elem) {},
    getTemplate_uiControl3_CAPhBm: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", null);\n  }\n});';
    }
  }, "index");
})(window, ysp);