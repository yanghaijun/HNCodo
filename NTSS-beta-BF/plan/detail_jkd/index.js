(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control23_LTheOI: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = { d1: [], d2: [], d3: [] };var elem1 = $(elem).find('.myAccount_con')[0];$(elem1).find("tr").each(function () {
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
              arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: '1', content: $(this).next().text().trim(),
                type: 'txt' });
            }
          }
        });data.d1.push(arr);
      });var elem2 = $(elem).find('.myAccount_con').eq(1)[0];$(elem2).find("tr").each(function (i) {
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
      });var elem3 = $(elem).children('form').find(".input_table")[0]; //console.log(elem3)
      $(elem3).find("tr").each(function (i) {
        if (i > 0) {
          var arr = [];$(this).find(".nowarp").each(function (i1) {
            if ($(this).find('span').length == 0) {
              if ($(this).next().find('select').length > 0) {
                var arrs = [];$(this).next().find('select').find('option').each(function () {
                  arrs.push($(this).text());
                });arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "0", content: arrs, type: 'select' });
              } else if ($(this).next().find('textarea').length > 0) {
                arr.push({ title: $(this).text().trim().replace(/\*/, ''), mark: "0", content: $(this).next().find('textarea').prop('value').trim(), type: 'textarea' });
              } else if ($(this).next().find('input').length == 1 && $(this).next().find('input')[0].type !== 'hidden') {
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
          });data.d3.push(arr);
        }
      });return data;
    },
    doAction_uiControl18_MFLVHe: function (data, elem) {
      'use strict';

      var event = data.eventType;if (event == 'change1') {
        //debugger;
        var no1 = parseInt(data.dataCustom.no1);var no2 = parseInt(data.dataCustom.no2);var index = data.dataCustom.index;var elem1 = $(elem).find('.myAccount_con')[0];var elem2 = $(elem).find('.myAccount_con').eq(1)[0];$(elem1).find('tr').eq(no1).find('select').eq(no1)[0].selected = true;
      }if (event == 'change2') {
        //debugger;
        var no1 = parseInt(data.dataCustom.no1) + 1;var no2 = data.dataCustom.no2;var index = data.dataCustom.index;
        var elem1 = $(elem).find('.myAccount_con')[0];var elem2 = $(elem).find('.myAccount_con').eq(1)[0];$(elem2).find('tr').eq(no1).find('select').eq(0).find('option').eq(index)[0].selected = true;
      }if (event == 'textarea') {
        var val = data.dataCustom;var elem1 = $(elem).find('.myAccount_con')[0];var elem2 = $(elem).find('.myAccount_con').eq(1)[0];
        $(elem2).find('textarea').prop('value', val);
      }if (event == 'input') {
        //debugger;
        var no1 = parseInt(data.dataCustom.no1) + 1;
        var val = data.dataCustom.value;var elem1 = $(elem).find('.myAccount_con')[0];var elem2 = $(elem).find('.myAccount_con').eq(1)[0];$(elem2).find('tr').eq(no1).find('input').eq(0).prop('value', val);
      }if (event == 'input3') {
        //debugger;
        var no1 = parseInt(data.dataCustom.no1) + 1;
        var val = data.dataCustom.value;var elem3 = $(elem).children('form').find(".input_table")[0];$(elem3).find('tr').eq(no1).find('input').eq(0).prop('value', val);
      }
    },
    getTemplate_uiControl18_MFLVHe: function () {
      var selfTemplate = "module.exports = React.createClass({\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:'textarea' \n      })\n    }\n  },\n  input:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          value:e.target.value,\n          no1:e.target.getAttribute('data-index1'),\n        },\n        eventType:'input' \n      })\n    }\n  },\n  input3:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          value:e.target.value,\n          no1:e.target.getAttribute('data-index1'),\n        },\n        eventType:'input3' \n      })\n    }\n  },\n  change1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          index:e.target.selectedIndex,\n          no1:e.target.getAttribute('data-index1'),\n          no2:e.target.getAttribute('data-index2'),\n        },\n        eventType:'change1' \n      })\n    }\n  },\n   change2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          index:e.target.selectedIndex,\n          no1:e.target.getAttribute('data-index1'),\n          no2:e.target.getAttribute('data-index2'),\n        },\n        eventType:'change2' \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n  var item = data && data.d1.map(function(d,i){\n    return(<li>\n      \n      {\n          d.map(function(d2,i2){\n      if(d2.type=='txt'){\n         return (<div>\n             {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }\n             <div className='content'>{d2.content}</div>\n           \n           </div>)\n       }\n      else if(d2.type=='select'){\n        var select = d2.content.map(function(d1,i1){\n          return (<option>{d1}</option>)\n        })\n         return (<div>{d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }<div className='content'><select data-index1={i} data-index2={i2} onChange={_this.change1}>{select}</select></div></div>)\n      }\n    })\n        }\n      </li>)\n    \n   })\n  \n   var item2 = data && data.d2.map(function(d,i){\n    return(<li>\n      \n      {\n          d.map(function(d2,i2){\n      if(d2.type=='txt'){\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }<div className='content'>{d2.content}</div></div>)\n       }\n     else if(d2.type=='input'){\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }\n             <div className='content'><AInput onBlur={_this.input} data-index1={i} value={d2.content} /></div></div>)\n       }\n     else if(d2.type=='textarea'){\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }<div className='content'><ATextarea onBlur={_this.textarea} value={d2.content} /></div></div>)\n       }\n      else if(d2.type=='select'){\n        var select = d2.content.map(function(d1,i1){\n          return (<option>{d1}</option>)\n        })\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }<div className='content'><select data-index1={i} data-index2={i2} onChange={_this.change2}>{select}</select></div></div>)\n      }\n    })\n        }\n      </li>)\n    \n   })\n  var item3 = data && data.d3.map(function(d,i){\n    return(<li>\n      \n      {\n          d.map(function(d2,i2){\n      if(d2.type=='txt'){\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }<div className='content'>{d2.content}</div></div>)\n       }\n     else if(d2.type=='input'){\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }\n             <div className='content'><AInput onBlur={_this.input3} data-index1={i} value={d2.content} /></div></div>)\n       }\n     else if(d2.type=='textarea'){\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }<div className='content'><ATextarea onBlur={_this.textarea} value={d2.content} /></div></div>)\n       }\n      else if(d2.type=='select'){\n        var select = d2.content.map(function(d1,i1){\n          return (<option>{d1}</option>)\n        })\n         return (<div> {d2.mark=='0' ?\n               <div className='title'>{d2.title}</div>\n               :\n               <div className='title'><span style={{color:'red'}}>*</span>{d2.title}</div>\n             }<div className='content'><select data-index1={i} data-index2={i2} onChange={_this.change2}>{select}</select></div></div>)\n      }\n    })\n        }\n      </li>)\n    \n   })\n  \n    return (\n      <div className='faqiBox_lfj'>\n       <ul className='Basic'><span className='icon-title'>\u5458\u5DE5\u501F\u6B3E\u5355</span>{item}</ul>\n        <ul className='Basic'><span className='icon-title'>\u501F\u6B3E\u4FE1\u606F</span>{item2}</ul>\n        <ul className='Basic'><span className='icon-title'>\u6536\u6B3E\u4FE1\u606F</span>\n          <h4 style={{marginLeft:'10px'}}>\u5458\u5DE5\u4E2A\u4EBA\u6536\u6B3E\u4FE1\u606F</h4>\n          {item3}</ul>\n      </div>\n    )\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'textarea'\n      });\n    }\n  },\n  input: function input(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          value: e.target.value,\n          no1: e.target.getAttribute('data-index1')\n        },\n        eventType: 'input'\n      });\n    }\n  },\n  input3: function input3(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          value: e.target.value,\n          no1: e.target.getAttribute('data-index1')\n        },\n        eventType: 'input3'\n      });\n    }\n  },\n  change1: function change1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          index: e.target.selectedIndex,\n          no1: e.target.getAttribute('data-index1'),\n          no2: e.target.getAttribute('data-index2')\n        },\n        eventType: 'change1'\n      });\n    }\n  },\n  change2: function change2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          index: e.target.selectedIndex,\n          no1: e.target.getAttribute('data-index1'),\n          no2: e.target.getAttribute('data-index2')\n        },\n        eventType: 'change2'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data && data.d1.map(function (d, i) {\n      return React.createElement(\n        'li',\n        null,\n        d.map(function (d2, i2) {\n          if (d2.type == 'txt') {\n            return React.createElement(\n              'div',\n              null,\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                d2.content\n              )\n            );\n          } else if (d2.type == 'select') {\n            var select = d2.content.map(function (d1, i1) {\n              return React.createElement(\n                'option',\n                null,\n                d1\n              );\n            });\n            return React.createElement(\n              'div',\n              null,\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(\n                  'select',\n                  { 'data-index1': i, 'data-index2': i2, onChange: _this.change1 },\n                  select\n                )\n              )\n            );\n          }\n        })\n      );\n    });\n\n    var item2 = data && data.d2.map(function (d, i) {\n      return React.createElement(\n        'li',\n        null,\n        d.map(function (d2, i2) {\n          if (d2.type == 'txt') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                d2.content\n              )\n            );\n          } else if (d2.type == 'input') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(AInput, { onBlur: _this.input, 'data-index1': i, value: d2.content })\n              )\n            );\n          } else if (d2.type == 'textarea') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(ATextarea, { onBlur: _this.textarea, value: d2.content })\n              )\n            );\n          } else if (d2.type == 'select') {\n            var select = d2.content.map(function (d1, i1) {\n              return React.createElement(\n                'option',\n                null,\n                d1\n              );\n            });\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(\n                  'select',\n                  { 'data-index1': i, 'data-index2': i2, onChange: _this.change2 },\n                  select\n                )\n              )\n            );\n          }\n        })\n      );\n    });\n    var item3 = data && data.d3.map(function (d, i) {\n      return React.createElement(\n        'li',\n        null,\n        d.map(function (d2, i2) {\n          if (d2.type == 'txt') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                d2.content\n              )\n            );\n          } else if (d2.type == 'input') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(AInput, { onBlur: _this.input3, 'data-index1': i, value: d2.content })\n              )\n            );\n          } else if (d2.type == 'textarea') {\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(ATextarea, { onBlur: _this.textarea, value: d2.content })\n              )\n            );\n          } else if (d2.type == 'select') {\n            var select = d2.content.map(function (d1, i1) {\n              return React.createElement(\n                'option',\n                null,\n                d1\n              );\n            });\n            return React.createElement(\n              'div',\n              null,\n              ' ',\n              d2.mark == '0' ? React.createElement(\n                'div',\n                { className: 'title' },\n                d2.title\n              ) : React.createElement(\n                'div',\n                { className: 'title' },\n                React.createElement(\n                  'span',\n                  { style: { color: 'red' } },\n                  '*'\n                ),\n                d2.title\n              ),\n              React.createElement(\n                'div',\n                { className: 'content' },\n                React.createElement(\n                  'select',\n                  { 'data-index1': i, 'data-index2': i2, onChange: _this.change2 },\n                  select\n                )\n              )\n            );\n          }\n        })\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'faqiBox_lfj' },\n      React.createElement(\n        'ul',\n        { className: 'Basic' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          '\\u5458\\u5DE5\\u501F\\u6B3E\\u5355'\n        ),\n        item\n      ),\n      React.createElement(\n        'ul',\n        { className: 'Basic' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          '\\u501F\\u6B3E\\u4FE1\\u606F'\n        ),\n        item2\n      ),\n      React.createElement(\n        'ul',\n        { className: 'Basic' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          '\\u6536\\u6B3E\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'h4',\n          { style: { marginLeft: '10px' } },\n          '\\u5458\\u5DE5\\u4E2A\\u4EBA\\u6536\\u6B3E\\u4FE1\\u606F'\n        ),\n        item3\n      )\n    );\n  }\n});";
    },
    getData_control28_mZJdMl: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = [];var elem = $(elem).children('tbody').eq(1)[0];if ($(elem).children("tr").length > 0) {
        $(elem).children("tr").each(function () {
          var arr = [];if ($(this).children("td").eq(2).text().indexOf('txt') !== -1) {
            arr.push({ type: 'txt', content: $(this).children('td').eq(2).text(), time: $(this).children('td').eq(3).text(), leixing: $(this).children('td').eq(1).text() });
          } else if ($(this).children("td").eq(2).text().indexOf('png') !== -1) {
            arr.push({ type: 'png', content: $(this).children('td').eq(2).text(), time: $(this).children('td').eq(3).text(), leixing: $(this).children('td').eq(1).text() });
          } else if ($(this).children("td").eq(2).text().indexOf('jpg') !== -1) {
            arr.push({ type: 'png', content: $(this).children('td').eq(2).text(), time: $(this).children('td').eq(3).text(), leixing: $(this).children('td').eq(1).text() });
          } else if ($(this).children("td").eq(2).text().indexOf('gif') !== -1) {
            arr.push({ type: 'gif', content: $(this).children('td').eq(2).text(), time: $(this).children('td').eq(3).text(), leixing: $(this).children('td').eq(1).text() });
          } else {
            arr.push({ type: 'known', content: $(this).children('td').eq(2).text(), time: $(this).children('td').eq(3).text(), leixing: $(this).children('td').eq(1).text() });
          }data.push(arr);
        });
      }return data;
    },
    doAction_uiControl22_svg3yy: function (data, elem) {
      'use strict'; //附件类型:{d[0].leixing}

      if (data.eventType == 'click') {
        debugger;var idx = data.dataCustom;var elem = $(elem).children('tbody').eq(1)[0];$(elem).children('tr').eq(idx).children('td').eq(0).find('a').click();
      }
    },
    getTemplate_uiControl22_svg3yy: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:e.target.getAttribute('data-index')\n      })\n    }\n     // handler({\n     //   eventType:'section-trigger',\n     //   data:'control36_9TGmS7'\n     // })\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data && data.map(function(d,i){\n\t\t\t\treturn (\n         <div data-index={i} class=\"file\">\n            <i class=\"icon\"></i>\n            <div class=\"center\">\n              <div>{d[0].content}</div>\n              <div>{d[0].time}</div>\n            </div>\n            <div data-index={i} onClick={_this.click} class=\"right\">\n              <span data-index={i}>X</span>\n            </div>\n          </div>\n        )\n    })\n    if(data && data.length){\n       return (\n        <div className='ysp-file2'>\n          {item}\n        </div>\n      )\n    }\n   \telse{\n       return (\n        <div>\n        </div>\n      )\n    }\n  }\n});\n\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n    // handler({\n    //   eventType:'section-trigger',\n    //   data:'control36_9TGmS7'\n    // })\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var item = data && data.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { 'data-index': i, 'class': 'file' },\n        React.createElement('i', { 'class': 'icon' }),\n        React.createElement(\n          'div',\n          { 'class': 'center' },\n          React.createElement(\n            'div',\n            null,\n            d[0].content\n          ),\n          React.createElement(\n            'div',\n            null,\n            d[0].time\n          )\n        ),\n        React.createElement(\n          'div',\n          { 'data-index': i, onClick: _this.click, 'class': 'right' },\n          React.createElement(\n            'span',\n            { 'data-index': i },\n            'X'\n          )\n        )\n      );\n    });\n    if (data && data.length) {\n      return React.createElement(\n        'div',\n        { className: 'ysp-file2' },\n        item\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control32_0wrqn3: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }if (elem.files[0] && elem.files[0].size) {
        return { text: elem.value, size: elem.files[0].size };
      } else {
        return { text: elem.value };
      }
    },
    doAction_uiControl26_rxiDqc: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl26_rxiDqc: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    return (\n      <div>\n        <div onClick={_this.click} className='fjsc_lfj'>\n          \u4E0A\u4F20\u9644\u4EF6\n        </div>\n        <div className='fjscwj_lfj'>\n       \t {data && data.size && data.size < 800*1024 ? data.text : ''}\n     \t\t </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        { onClick: _this.click, className: 'fjsc_lfj' },\n        '\\u4E0A\\u4F20\\u9644\\u4EF6'\n      ),\n      React.createElement(\n        'div',\n        { className: 'fjscwj_lfj' },\n        data && data.size && data.size < 800 * 1024 ? data.text : ''\n      )\n    );\n  }\n});";
    },
    getData_control20_PvWO7F: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = [];return data;
    },
    doAction_uiControl17_SHx7VQ: function (data, elem) {
      'use strict';

      var event = data.eventType;if (event == 'click1') {
        // debugger;
        $(elem).find('input').eq(0).click();
      }if (event == 'click2') {
        $(elem).find('input').eq(1).click();
      }
    },
    getTemplate_uiControl17_SHx7VQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click1:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n     handler({\n       eventType:'section-trigger',\n       data:'control36_9TGmS7'\n     })\n  },\n   click2:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click2'\n      })\n    }\n      handler({\n       eventType:'section-trigger',\n       data:'control34_ZwRZrX'\n     })\n  },\n  render: function() {\n    var _this= this;\n    return (\n      <div className='bar2_lfj'>\n        <div onClick={_this.click1}>\n        \t<span>\n          \t\u4FDD\u5B58\n          </span>\n        </div>\n         <div onClick={_this.click2}>\n        \t<span>\n          \t\u63D0\u4EA4\n          </span>\n        </div>\n      </div>\n    )\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click1: function click1() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click1'\n      });\n    }\n    handler({\n      eventType: 'section-trigger',\n      data: 'control36_9TGmS7'\n    });\n  },\n  click2: function click2() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click2'\n      });\n    }\n    handler({\n      eventType: 'section-trigger',\n      data: 'control34_ZwRZrX'\n    });\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { className: 'bar2_lfj' },\n      React.createElement(\n        'div',\n        { onClick: _this.click1 },\n        React.createElement(\n          'span',\n          null,\n          '\\u4FDD\\u5B58'\n        )\n      ),\n      React.createElement(\n        'div',\n        { onClick: _this.click2 },\n        React.createElement(\n          'span',\n          null,\n          '\\u63D0\\u4EA4'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control29_kQUHiF: function (elem) {
      'use strict';

      if (!elem) {
        return false;
      } //console.log(elem)
      return elem.ownerDocument.querySelector('span.path').textContent;
    },
    doAction_uiControl23_Vewx3L: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        elem.ownerDocument.querySelector('#_easyui_tree_3').click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      }
    },
    getTemplate_uiControl23_Vewx3L: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  render(){\n    return (\n    \t<div className = 'TodoList-head'>\n      \t<span onClick={()=>{\n            var handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'click'\n              })\n            }\n          }}>\u8FD4\u56DE</span>\n        <span>{this.props.customData}</span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        'div',\n        { className: 'TodoList-head' },\n        React.createElement(\n          'span',\n          { onClick: function onClick() {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'click'\n                });\n              }\n            } },\n          '\\u8FD4\\u56DE'\n        ),\n        React.createElement(\n          'span',\n          null,\n          this.props.customData\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control26_lfpuE6: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }return [];
    },
    doAction_uiControl32_ETX8Ck: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        elem.click(); //alert(elem.textContent)
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);
      }
    },
    getTemplate_uiControl32_ETX8Ck: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n     handler({\n       eventType:'section-trigger',\n       data:'control36_9TGmS7'\n     })\n  },\n  render: function() {\n    var _this = this;\n    return (\n      <div onClick={_this.click} style={{margin:'10px'}}>\n       <button style={{heigth:'35px',lineHeight:'35px'}} className='bcfj_lfj'>\u4FDD\u5B58\u9644\u4EF6</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n    handler({\n      eventType: 'section-trigger',\n      data: 'control36_9TGmS7'\n    });\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { onClick: _this.click, style: { margin: '10px' } },\n      React.createElement(\n        'button',\n        { style: { heigth: '35px', lineHeight: '35px' }, className: 'bcfj_lfj' },\n        '\\u4FDD\\u5B58\\u9644\\u4EF6'\n      )\n    );\n  }\n});";
    },
    getData_control38_WrOWdG: function (elem) {
      "use strict";
      if (!elem.files) {
        return;
      }if (elem.files && elem.files[0]) {
        return elem.files[0].size;
      }
    },
    doAction_uiControl33_hZRi9T: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl33_hZRi9T: function () {
      var selfTemplate = "module.exports = React.createClass({\n  // getInitialState: function () {\n  //   return {\n  //     size: this.props.customData\n  //   };\n  // },\n  componentDidUpdate(){\n    debugger;\n    var size = this.props.customData;\n      if(size>800*1024){\n         alert('\u6587\u4EF6\u8D85\u8FC7\u9650\u5236\u5927\u5C0F(800KB)'); top.document.querySelector('.bcfj_lfj').disabled=true;\n        //console.log(document)\n      }\n    else{\n     top.document.querySelector('.bcfj_lfj').disabled=false;\n    }\n  },\n  render: function() {\n    return (\n      <div style={{display:\"none\"}}>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  // getInitialState: function () {\n  //   return {\n  //     size: this.props.customData\n  //   };\n  // },\n  componentDidUpdate: function componentDidUpdate() {\n    debugger;\n    var size = this.props.customData;\n    if (size > 800 * 1024) {\n      alert('\u6587\u4EF6\u8D85\u8FC7\u9650\u5236\u5927\u5C0F(800KB)');top.document.querySelector('.bcfj_lfj').disabled = true;\n      //console.log(document)\n    } else {\n      top.document.querySelector('.bcfj_lfj').disabled = false;\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { style: { display: \"none\" } },\n      '\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91'\n    );\n  }\n});";
    }
  }, "detail_jkd");
})(window, ysp);