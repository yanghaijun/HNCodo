(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control6_xBCCPl: function (elem) {
      if (!elem) {
        return;
      }var data = { list: [] };var elem = $(elem) && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0].contentDocument.documentElement;var titleLists = $(elem)[0].querySelector('#ext-gen36');$(titleLists).find('tr.x-grid3-hd-row').each(function (j) {
        var titlelist = $(this).find('.x-grid3-hd-inner');var obj = {};obj.name = titlelist[2].textContent;obj.title = titlelist[3].textContent;obj.date = titlelist[4].textContent;obj.time = titlelist[5].textContent;obj.cav = titlelist[6].textContent;obj.index = j;data.list.push(obj);
      }); //上面是获取title
      var lists = $(elem)[0].querySelector('#ext-gen39');$(lists).find('tbody').each(function (i) {
        var tds = $(this).find('td').find('.x-grid3-cell-inner');var obj = {};
        obj.imgs = tds.eq(1).find('img').length;obj.name = tds[2].textContent;obj.title = tds[3].textContent;obj.titleColor = tds.eq(3).find('span').length == 1 ? 'red' : '';obj.date = tds[4].textContent;obj.time = tds[5].textContent;obj.cav = tds[6].textContent;obj.index = i;data.list.push(obj);
      });return data;
    }, doAction_uiControl5_U714Mi: function (data, elem) {
      if (data.eventType == 'getValue') {
        var data = data.dataCustom;var elem = $(elem) && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument.documentElement;$(elem).find('#ext-gen39').find('tbody').eq(data).find('td').find('.x-grid3-cell-inner').eq(3).find('a').click();
      }
    }, getTemplate_uiControl5_U714Mi: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  getValue: function(e) {\n    var target = e.target;\n    var hanlder=this.props.customHandler;\n    if(hanlder){\n      hanlder({\n        eventType:"getValue",\n        data:target.getAttribute(\'index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var me =this;\n    return (\n      <div className=\'d_shoujian\'>\n        <div className=\'d_shoujianHeader\'>\u6536\u4EF6\u7BB1</div>\n        <div  style={{\'height\':\'400px\',\'overflow\':\'scroll\'}}> \n          {data.list&&data.list.map(function(i,h){\n              if(h>0){\n                 return ( <div className=\'d_indexList\'>\n                    <span style={{\'display\':i.imgs==0?\'none\':\'block\'}}></span>\n                    <span>{i.name}</span>\n                    <span>{i.date}  {i.time}</span>\n                    <span className={i.titleColor}>{i.title}</span>\n                    <span>\u5927\u5C0F\uFF1A {i.cav}</span>\n                    <span style={{\'display\':i.imgs==2?\'block\':\'none\'}}></span>\n                    <span index={i.index} onClick={me.getValue}></span>\n                </div>)\n              }    \n            })}\n          </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  getValue: function getValue(e) {\n    var target = e.target;\n    var hanlder = this.props.customHandler;\n    if (hanlder) {\n      hanlder({\n        eventType: "getValue",\n        data: target.getAttribute(\'index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      { className: \'d_shoujian\' },\n      React.createElement(\n        \'div\',\n        { className: \'d_shoujianHeader\' },\n        \'\\u6536\\u4EF6\\u7BB1\'\n      ),\n      React.createElement(\n        \'div\',\n        { style: { \'height\': \'400px\', \'overflow\': \'scroll\' } },\n        data.list && data.list.map(function (i, h) {\n          if (h > 0) {\n            return React.createElement(\n              \'div\',\n              { className: \'d_indexList\' },\n              React.createElement(\'span\', { style: { \'display\': i.imgs == 0 ? \'none\' : \'block\' } }),\n              React.createElement(\n                \'span\',\n                null,\n                i.name\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                i.date,\n                \'  \',\n                i.time\n              ),\n              React.createElement(\n                \'span\',\n                { className: i.titleColor },\n                i.title\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u5927\\u5C0F\\uFF1A \',\n                i.cav\n              ),\n              React.createElement(\'span\', { style: { \'display\': i.imgs == 2 ? \'block\' : \'none\' } }),\n              React.createElement(\'span\', { index: i.index, onClick: me.getValue })\n            );\n          }\n        })\n      )\n    );\n  }\n});';
    }
  }, "index");
})(window, ysp);