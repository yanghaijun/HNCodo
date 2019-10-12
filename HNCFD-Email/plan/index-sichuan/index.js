(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control22_f1TLsI: function (elem) {
      if (!elem) {
        return;
      }var data = { list: [] }; // var elem = $(elem) && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0].contentDocument.documentElement;
      // var titleLists = $(elem)[0].querySelector('#ext-gen36');
      var titleLists = elem;$(titleLists).find('tr.x-grid3-hd-row').each(function (j) {
        var titlelist = $(this).find('.x-grid3-hd-inner');var obj = {};obj.name = titlelist[2].textContent;obj.title = titlelist[3].textContent;obj.date = titlelist[4].textContent;obj.time = titlelist[5].textContent;obj.cav = titlelist[6].textContent;obj.index = j;data.list.push(obj);
      }); //上面是获取title
      var lists = $(elem)[0].querySelector('#ext-gen39');$(lists).find('tbody').each(function (i) {
        var tds = $(this).find('td').find('.x-grid3-cell-inner');var obj = {};obj.imgs = tds.eq(1).find('img').length;obj.name = tds[2].textContent;obj.title = tds[3].textContent;obj.titleColor = tds.eq(3).find('span').length == 1 ? 'red' : '';obj.date = tds[4].textContent;obj.time = tds[5].textContent;obj.cav = tds[6].textContent;obj.index = i;data.list.push(obj);
      });return data;
    },
    doAction_uiControl8_kPhoOC: function (data, elem) {
      if (data.eventType == 'getValue') {
        var data = data.dataCustom;
        // var elem = $(elem) && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument.documentElement;
        $(elem).find('#ext-gen39').find('tbody').eq(data).find('td').find('.x-grid3-cell-inner').eq(3).find('a').click();
      }
    },
    getTemplate_uiControl8_kPhoOC: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentWillMount(){\n    ysp.appMain.showLoading();\n  },\n  componentDidMount(){\n    ysp.appMain.hideLoading();\n  },\n  getValue: function(e) {\n    var target = e.target;\n    var hanlder=this.props.customHandler;\n    if(hanlder){\n      hanlder({\n        eventType:"getValue",\n        data:target.parentElement.getAttribute(\'index\')&&target.parentElement.getAttribute(\'index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me =this;\n    return (\n      <div className=\'d_shoujian\'>\n        <div className=\'d_shoujianHeader\'>\u6536\u4EF6\u7BB1</div>\n        <div> \n          {data.list&&data.list.map(function(i,h){\n              if(h>0){\n                 return ( <div className=\'d_indexList\' index={i.index} onClick={me.getValue}>\n                    <span style={{\'display\':i.imgs==0?\'none\':\'block\'}}></span>\n                    <span>{i.name}</span>\n                    <span>{i.date}  {i.time}</span>\n                    <span className={i.titleColor}>{i.title}</span>\n                    <span>\u5927\u5C0F\uFF1A {i.cav}</span>\n                    <span style={{\'display\':i.imgs==2?\'block\':\'none\'}}></span>\n                    <span></span>\n                </div>)\n              }    \n            })}\n          </div>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  componentWillMount: function componentWillMount() {\n    ysp.appMain.showLoading();\n  },\n  componentDidMount: function componentDidMount() {\n    ysp.appMain.hideLoading();\n  },\n\n  getValue: function getValue(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: \"getValue\",\n        data: target.parentElement.getAttribute('index') && target.parentElement.getAttribute('index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      'div',\n      { className: 'd_shoujian' },\n      React.createElement(\n        'div',\n        { className: 'd_shoujianHeader' },\n        '\\u6536\\u4EF6\\u7BB1'\n      ),\n      React.createElement(\n        'div',\n        null,\n        data.list && data.list.map(function (i, h) {\n          if (h > 0) {\n            return React.createElement(\n              'div',\n              { className: 'd_indexList', index: i.index, onClick: me.getValue },\n              React.createElement('span', { style: { 'display': i.imgs == 0 ? 'none' : 'block' } }),\n              React.createElement(\n                'span',\n                null,\n                i.name\n              ),\n              React.createElement(\n                'span',\n                null,\n                i.date,\n                '  ',\n                i.time\n              ),\n              React.createElement(\n                'span',\n                { className: i.titleColor },\n                i.title\n              ),\n              React.createElement(\n                'span',\n                null,\n                '\\u5927\\u5C0F\\uFF1A ',\n                i.cav\n              ),\n              React.createElement('span', { style: { 'display': i.imgs == 2 ? 'block' : 'none' } }),\n              React.createElement('span', null)\n            );\n          }\n        })\n      )\n    );\n  }\n});";
    },
    getData_control24_MwRzzs: function (elem) {
      if (!elem) {
        return;
      }var data = { flag1: [], flag2: [], flag3: [], flag4: [] };var tds = elem.querySelector("tr") && elem.querySelector("tr").querySelectorAll('td[class="x-toolbar-cell"]');var oneClassName = tds[0].querySelector("table").className;var twoClassName = tds[1].querySelector("table").className;var threeClassName = tds[7].querySelector("table").className;var fourClassName = tds[8].querySelector("table").className;if (oneClassName.indexOf("x-item-disabled") > -1) {
        data.flag1.push(false);
      } else {
        data.flag1.push(true);
      }if (twoClassName.indexOf("x-item-disabled") > -1) {
        data.flag2.push(false);
      } else {
        data.flag2.push(true);
      }if (threeClassName.indexOf("x-item-disabled") > -1) {
        data.flag3.push(false);
      } else {
        data.flag3.push(true);
      }if (fourClassName.indexOf("x-item-disabled") > -1) {
        data.flag4.push(false);
      } else {
        data.flag4.push(true);
      }return data;
    },
    doAction_uiControl9_aQkm0T: function (data, elem) {
      var types = data.eventType;var tds = elem.querySelector("tr") && elem.querySelector("tr").querySelectorAll('td[class="x-toolbar-cell"]');if (types == 'one') {
        tds && tds[0].querySelector("em").click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);
      }if (types == 'two') {
        tds && tds[1].querySelector("em").click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);
      }if (types == 'three') {
        tds && tds[7].querySelector("em").click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);
      }if (types == 'four') {
        tds && tds[8].querySelector("em").click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);
      }
    },
    getTemplate_uiControl9_aQkm0T: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerOne(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'one\'\n      })\n    }\n  },\n  handlerTwo(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'two\'\n      })\n    }\n  },\n  handlerThree(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'three\'\n      })\n    }\n  },\n  handlerFour(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'four\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className = "ysp-pages">\n        <div>\n          <span className = {data && data.flag1[0] == true ? "oneGo" : "onNoGo"} \n            onClick={this.handlerOne.bind(this)}></span>\n          <span className = {data && data.flag2[0] == true ? "twoGo" : "twoNoGo"} \n            onClick={this.handlerTwo.bind(this)}></span>\n        </div>\n        <div>\n        \t<span className = {data && data.flag3[0] == true ? "threeGo" : "threeNoGo"} \n            onClick={this.handlerThree.bind(this)}></span>\n          <span className = {data && data.flag4[0] == true ? "fourGo" : "fourNoGo"} \n            onClick={this.handlerFour.bind(this)}></span>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  handlerOne: function handlerOne() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'one\'\n      });\n    }\n  },\n  handlerTwo: function handlerTwo() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'two\'\n      });\n    }\n  },\n  handlerThree: function handlerThree() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'three\'\n      });\n    }\n  },\n  handlerFour: function handlerFour() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'four\'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'ysp-pages\' },\n      React.createElement(\n        \'div\',\n        null,\n        React.createElement(\'span\', { className: data && data.flag1[0] == true ? "oneGo" : "onNoGo",\n          onClick: this.handlerOne.bind(this) }),\n        React.createElement(\'span\', { className: data && data.flag2[0] == true ? "twoGo" : "twoNoGo",\n          onClick: this.handlerTwo.bind(this) })\n      ),\n      React.createElement(\n        \'div\',\n        null,\n        React.createElement(\'span\', { className: data && data.flag3[0] == true ? "threeGo" : "threeNoGo",\n          onClick: this.handlerThree.bind(this) }),\n        React.createElement(\'span\', { className: data && data.flag4[0] == true ? "fourGo" : "fourNoGo",\n          onClick: this.handlerFour.bind(this) })\n      )\n    );\n  }\n});';
    },
    getData_control27_7v3rGB: function (elem) {
      setTimeout(function () {
        // var el = elem.querySelectorAll('frame') && elem.querySelectorAll('frame')[1].contentDocument.documentElement.querySelector("#ext-gen3");
        var el = elem.parentElement;var name = el.querySelector('input[name="mailfilename"]').value;var numText = el.querySelector("#ext-comp-1010").textContent;var nums = numText.split("共")[1];var num = nums.split("条")[0];var xmlhttp = null;if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //alert(JSON.parse(xmlhttp.responseText).ViewData);
            var viewData = JSON.parse(xmlhttp.responseText).ViewData;var data = [];viewData.map(function (a, b) {
              data.push('http://59.110.171.69:31016/' + name + '/($Inbox)/' + a.SID + '?OpenDocument&TabID=' + a.SID + '&LinkTarget=NewTabWindow');
            });if (top.EAPI.isAndroid()) {
              top.huaneng.fujianCacheUrl(JSON.stringify({ type: 'Email', cookie: document.cookie, fujianUrl: data.toString() }));
            } else if (top.EAPI.isIOS()) {
              top.EAPI.postMessageToNative('Email', data);
            }
          }
        };xmlhttp.open("post", "http://59.110.171.69:31016/afmail.nsf/agent_CustomViewGetData?openagent");xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");xmlhttp.send("start&filterKey&viewName=($Inbox)&showUnread=true&reverse=true&dbName=" + name + '&limit=' + num);
      }, 4000);
    },
    doAction_uiControl12_4ZTpb5: function (data, elem) {},
    getTemplate_uiControl12_4ZTpb5: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", null);\n  }\n});';
    },
    getData_control26_6UTy3O: function (elem) {},
    doAction_uiControl11_Bko6mH: function (data, elem) {},
    getTemplate_uiControl11_Bko6mH: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", null);\n  }\n});';
    }
  });
})(window, ysp);