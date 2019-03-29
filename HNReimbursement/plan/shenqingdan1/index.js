'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control17_xnr3cw: function (elem) {
      "use strict";

      ;if (!elem) {
        return;
      }var data = { d1: [], d2: [] };var elem1 = $(elem).children('.basebox')[0];$(elem1).find("tr").each(function () {
        var arr = [];$(this).find("th").each(function () {
          if ($(this).find('span').length == 0) {
            if ($(this).next().find('select').length > 0) {
              var arrs = [];$(this).next().find('select').find('option').each(function () {
                arrs.push($(this).text());
              });arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: '0', content: arrs, type: 'select' });
            } else {
              arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: '0', content: $(this).next().text().trim(), type: 'txt' });
            }
          } else {
            if ($(this).next().find('select').length > 0) {
              var arrs = [];$(this).next().find('select').find('option').each(function () {
                arrs.push($(this).text());
              });arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: '1', content: arrs, type: 'select' });
            } else {
              arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: '1', content: $(this).next().text().trim(), type: 'txt' });
            }
          }
        });data.d1.push(arr);
      });var elem2 = $(elem).children('.myAccount_con').find('table').eq(0)[0];$(elem2).find("tr").each(function (i) {
        if (i > 0) {
          var arr = [];$(this).find(".nowarp").each(function (i1) {
            if ($(this).find('span').length == 0) {
              if ($(this).next().find('select').length > 0) {
                var arrs = [];$(this).next().find('select').find('option').each(function () {
                  arrs.push($(this).text());
                });arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "0", content: arrs, type: 'select' });
              } else if ($(this).next().find('textarea').length > 0) {
                arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "0", content: $(this).next().find('textarea').prop('value').trim(), type: 'textarea' });
              } else if ($(this).next().find('input').length == 1) {
                arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "0", content: $(this).next().find('input').prop('value').trim(), type: 'input' });
              } else {
                arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "0", content: $(this).next().text().trim(), type: 'txt' });
              }
            } else {
              if ($(this).next().find('select').length > 0) {
                var arrs = [];$(this).next().find('select').find('option').each(function () {
                  arrs.push($(this).text());
                });arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "1", content: arrs, type: 'select' });
              } else if ($(this).next().find('textarea').length > 0) {
                arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "1", content: $(this).next().find('textarea').prop('value').trim(), type: 'textarea' });
              } else if ($(this).next().find('input').length == 1) {
                arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "1", content: $(this).next().find('input').prop('value').trim(), type: 'input' });
              } else {
                arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "1", content: $(this).next().text().trim(), type: 'txt' });
              }
            }
          });data.d2.push(arr);
        }
      });return data;
    },
    doAction_uiControl14_EUVHLO: function (data, elem) {
      'use strict';

      var event = data.eventType;if (event == 'change1') {
        //debugger;
        var no1 = parseInt(data.dataCustom.no1);var no2 = parseInt(data.dataCustom.no2);var index = data.dataCustom.index;var elem1 = $(elem).children('.basebox')[0];var elem2 = $(elem).children('.myAccount_con').find('table').eq(0)[0];$(elem1).find('tr').eq(no1).find('select').eq(no1)[0].selected = true;
      }if (event == 'change2') {
        //debugger;
        var no1 = parseInt(data.dataCustom.no1) + 1;var no2 = data.dataCustom.no2;var index = data.dataCustom.index;var elem1 = $(elem).children('.basebox')[0];var elem2 = $(elem).children('.myAccount_con').find('table').eq(0)[0];$(elem2).find('tr').eq(no1).find('select').eq(0).find('option').eq(index)[0].selected = true;
      }if (event == 'textarea') {
        var val = data.dataCustom;var elem2 = $(elem).children('.myAccount_con').find('table').eq(0)[0];$(elem2).find('textarea').prop('value', val);
      }if (event == 'input') {
        //debugger;
        var no1 = parseInt(data.dataCustom.no1) + 1;var val = data.dataCustom.value;var elem1 = $(elem).children('.basebox')[0];var elem2 = $(elem).children('.myAccount_con').find('table').eq(0)[0];$(elem2).find('tr').eq(no1).find('input').eq(0).prop('value', val);
      }
    },
    getTemplate_uiControl14_EUVHLO: function getTemplate_uiControl14_EUVHLO() {
      var selfTemplate = 'module.exports = React.createClass({\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:\'textarea\' \n      })\n    }\n  },\n  input:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          value:e.target.value,\n          no1:e.target.getAttribute(\'data-index1\'),\n        },\n        eventType:\'input\' \n      })\n    }\n  },\n  change1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          index:e.target.selectedIndex,\n          no1:e.target.getAttribute(\'data-index1\'),\n          no2:e.target.getAttribute(\'data-index2\'),\n        },\n        eventType:\'change1\' \n      })\n    }\n  },\n   change2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          index:e.target.selectedIndex,\n          no1:e.target.getAttribute(\'data-index1\'),\n          no2:e.target.getAttribute(\'data-index2\'),\n        },\n        eventType:\'change2\' \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n  var item = data && data.d1.map(function(d,i){\n    return(<li>\n      \n      {\n          d.map(function(d2,i2){\n      if(d2.type==\'txt\'){\n         return (<div>\n             {d2.mark==\'0\' ?\n               <div className=\'title\'>{d2.title}</div>\n               :\n               <div className=\'title\'><span style={{color:\'red\'}}>*</span>{d2.title}</div>\n             }\n             <div className=\'content\'>{d2.content}</div>\n           \n           </div>)\n       }\n      else if(d2.type==\'select\'){\n        var select = d2.content.map(function(d1,i1){\n          return (<option>{d1}</option>)\n        })\n         return (<div>{d2.mark==\'0\' ?\n               <div className=\'title\'>{d2.title}</div>\n               :\n               <div className=\'title\'><span style={{color:\'red\'}}>*</span>{d2.title}</div>\n             }<div className=\'content\'><select data-index1={i} data-index2={i2} onChange={_this.change1}>{select}</select></div></div>)\n      }\n    })\n        }\n      </li>)\n    \n   })\n  \n   var item2 = data && data.d2.map(function(d,i){\n    return(<li>\n      \n      {\n          d.map(function(d2,i2){\n      if(d2.type==\'txt\'){\n         return (<div> {d2.mark==\'0\' ?\n               <div className=\'title\'>{d2.title}</div>\n               :\n               <div className=\'title\'><span style={{color:\'red\'}}>*</span>{d2.title}</div>\n             }<div className=\'content\'>{d2.content}</div></div>)\n       }\n     else if(d2.type==\'input\'){\n         return (<div> {d2.mark==\'0\' ?\n               <div className=\'title\'>{d2.title}</div>\n               :\n               <div className=\'title\'><span style={{color:\'red\'}}>*</span>{d2.title}</div>\n             }\n             <div className=\'content\'><AInput onBlur={_this.input} data-index1={i} value={d2.content} /></div></div>)\n       }\n     else if(d2.type==\'textarea\'){\n         return (<div> {d2.mark==\'0\' ?\n               <div className=\'title\'>{d2.title}</div>\n               :\n               <div className=\'title\'><span style={{color:\'red\'}}>*</span>{d2.title}</div>\n             }<div className=\'content\'><ATextarea onBlur={_this.textarea} value={d2.content} /></div></div>)\n       }\n      else if(d2.type==\'select\'){\n        var select = d2.content.map(function(d1,i1){\n          return (<option>{d1}</option>)\n        })\n         return (<div> {d2.mark==\'0\' ?\n               <div className=\'title\'>{d2.title}</div>\n               :\n               <div className=\'title\'><span style={{color:\'red\'}}>*</span>{d2.title}</div>\n             }<div className=\'content\'><select data-index1={i} data-index2={i2} onChange={_this.change2}>{select}</select></div></div>)\n      }\n    })\n        }\n      </li>)\n    \n   })\n  \n  \n    return (\n      <div className=\'faqiBox_lfj\'>\n       <ul className=\'Basic\'><span className=\'icon-title\'>\u5458\u5DE5\u501F\u6B3E\u5355</span>{item}</ul>\n        <ul className=\'Basic\'><span className=\'icon-title\'>\u501F\u6B3E\u4FE1\u606F</span>{item2}</ul>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'textarea'\n      });\n    }\n  },\n  input: function input(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          value: e.target.value,\n          no1: e.target.getAttribute('data-index1')\n        },\n        eventType: 'input'\n      });\n    }\n  },\n  change1: function change1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          index: e.target.selectedIndex,\n          no1: e.target.getAttribute('data-index1'),\n          no2: e.target.getAttribute('data-index2')\n        },\n        eventType: 'change1'\n      });\n    }\n  },\n  change2: function change2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          index: e.target.selectedIndex,\n          no1: e.target.getAttribute('data-index1'),\n          no2: e.target.getAttribute('data-index2')\n        },\n        eventType: 'change2'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data && data.d1.map(function (d, i) {\n      return React.createElement(\n        'li',\n        null,\n        d.map(function (d2, i2) {\n          if (d2.type == 'txt') {\n            return React.createElement(\n              'div',\n              null,\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                d2.content\n              )\n            );\n          } else if (d2.type == 'select') {\n            var select = d2.content.map(function (d1, i1) {\n              return React.createElement(\n                'option',\n                null,\n                d1\n              );\n            });\n            return React.createElement(\n              'div',\n              null,\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(\n                  'select',\n                  { 'data-index1': i, 'data-index2': i2, onChange: _this.change1 },\n                  select\n                )\n              )\n            );\n          }\n        })\n      );\n    });\n\n    var item2 = data && data.d2.map(function (d, i) {\n      return React.createElement(\n        'li',\n        null,\n        d.map(function (d2, i2) {\n          if (d2.type == 'txt') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                d2.content\n              )\n            );\n          } else if (d2.type == 'input') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(AInput, { onBlur: _this.input, 'data-index1': i, value: d2.content })\n              )\n            );\n          } else if (d2.type == 'textarea') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(ATextarea, { onBlur: _this.textarea, value: d2.content })\n              )\n            );\n          } else if (d2.type == 'select') {\n            var select = d2.content.map(function (d1, i1) {\n              return React.createElement(\n                'option',\n                null,\n                d1\n              );\n            });\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(\n                  'select',\n                  { 'data-index1': i, 'data-index2': i2, onChange: _this.change2 },\n                  select\n                )\n              )\n            );\n          }\n        })\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'faqiBox_lfj' },\n      React.createElement(\n        'ul',\n        { className: 'Basic' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          '\\u5458\\u5DE5\\u501F\\u6B3E\\u5355'\n        ),\n        item\n      ),\n      React.createElement(\n        'ul',\n        { className: 'Basic' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          '\\u501F\\u6B3E\\u4FE1\\u606F'\n        ),\n        item2\n      )\n    );\n  }\n});";
    },
    getData_control17_eQ8WpK: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = [];return data;
    },
    doAction_uiControl14_pq9TAM: function (data, elem) {
      'use strict';

      var event = data.eventType;if (event == 'click1') {
        // debugger;
        $(elem).find('input').eq(0).click();
      }if (event == 'click2') {
        $(elem).find('input').eq(1).click();
      }
    },
    getTemplate_uiControl14_pq9TAM: function getTemplate_uiControl14_pq9TAM() {
      var selfTemplate = 'module.exports = React.createClass({\n  click1:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click1\'\n      })\n    }\n  },\n   click2:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click2\'\n      })\n    }\n  },\n  render: function() {\n    var _this= this;\n    return (\n      <div className=\'bar2_lfj\'>\n        <div onClick={_this.click1}>\n        \t<span>\n          \t\u4FDD\u5B58\n          </span>\n        </div>\n         <div onClick={_this.click2}>\n        \t<span>\n          \t\u53D6\u6D88\n          </span>\n        </div>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click1: function click1() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click1'\n      });\n    }\n  },\n  click2: function click2() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click2'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { className: 'bar2_lfj' },\n      React.createElement(\n        'div',\n        { onClick: _this.click1 },\n        React.createElement(\n          'span',\n          null,\n          '\\u4FDD\\u5B58'\n        )\n      ),\n      React.createElement(\n        'div',\n        { onClick: _this.click2 },\n        React.createElement(\n          'span',\n          null,\n          '\\u53D6\\u6D88'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control31_oMGsCm: function (elem) {
      'use strict';

      if (!elem) {
        return;
      }var data = [];if (elem.querySelector('iframe') && elem.querySelector('iframe').contentDocument.querySelector('table')) {
        var elem = elem.querySelector('iframe').contentDocument.querySelector('table');data.push({ content: $(elem).find('td').eq(0).text().trim(), btn: $(elem).find('td').eq(1).text().trim() });
      }return data;
    },
    doAction_uiControl25_fTIQ2M: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        //debugger;
        if (elem.querySelector('iframe') && elem.querySelector('iframe').contentDocument.querySelector('table')) {
          var elem = elem.querySelector('iframe').contentDocument.querySelector('table');$(elem).find('td').eq(1).find('button').click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 3000);
        }
      }
    },
    getTemplate_uiControl25_fTIQ2M: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    return (\n      <div className=\'weng_sucessMesbx2\'>\n        <h5>\u63D0\u793A</h5>\n        <p>{data[0].content}</p>\n        <p onClick={_this.click}><button>{data[0].btn}</button></p>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'weng_sucessMesbx2' },\n      React.createElement(\n        'h5',\n        null,\n        '\\u63D0\\u793A'\n      ),\n      React.createElement(\n        'p',\n        null,\n        data[0].content\n      ),\n      React.createElement(\n        'p',\n        { onClick: _this.click },\n        React.createElement(\n          'button',\n          null,\n          data[0].btn\n        )\n      )\n    );\n  }\n});";
    },
    getData_control47_9FiOrB: function (elem) {},
    doAction_uiControl39_rWEQHD: function (data, elem) {
      if (data.eventType == 'back') {
        $(elem).find('ul').find('#_easyui_tree_7').click();
      }
    },
    getTemplate_uiControl39_rWEQHD: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handle: function(data, eventType) {\n    var handler = this.props.customHandler;\n    handler && handler({\n      data,\n      eventType\n    });\n  },\n  render: function() {\n    var me = this;\n    return (\n      <div className=\'Darry_listTitle\'>\n          <span style={{\'position\':\'relative\'}} onClick={()=>{\n            me.handle("","back");\n          }}><font></font> </span>\n          <span style={{\'color\':\'#fff\'}}>\u5458\u5DE5\u501F\u6B3E\u5355</span> \n        </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handle: function handle(data, eventType) {\n    var handler = this.props.customHandler;\n    handler && handler({\n      data: data,\n      eventType: eventType\n    });\n  },\n  render: function render() {\n    var me = this;\n    return React.createElement(\n      \'div\',\n      { className: \'Darry_listTitle\' },\n      React.createElement(\n        \'span\',\n        { style: { \'position\': \'relative\' }, onClick: function onClick() {\n            me.handle("", "back");\n          } },\n        React.createElement(\'font\', null),\n        \' \'\n      ),\n      React.createElement(\n        \'span\',\n        { style: { \'color\': \'#fff\' } },\n        \'\\u5458\\u5DE5\\u501F\\u6B3E\\u5355\'\n      )\n    );\n  }\n});';
    }
  }, "shenqingdan1");
})(window, ysp);