"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control1_r4sf2l: function getData_control1_r4sf2l(elem) {
      ;if (!elem) {
        return false;
      }
    },
    doAction_uiControl1_JCliUv: function doAction_uiControl1_JCliUv(data, elem) {
      "use strict";
    },
    getTemplate_uiControl1_JCliUv: function getTemplate_uiControl1_JCliUv() {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  render(){\n    return (\n    \t<div style={{display:'none'}} className = 'TodoList-head'>\n      \t<span></span>\n        <span>\u6211\u8981\u5BA1\u5355</span>\n        <span className='reset' onClick={(e)=>{\n            if(confirm('\u662F\u5426\u6E05\u7A7A\u7528\u6237\u4FE1\u606F,\u4E0B\u6B21\u91CD\u65B0\u767B\u5F55')){\n              ysp.customHelper.login();\n            }\n            \n          }}>\u91CD\u7F6E</span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { style: { display: 'none' }, className: 'TodoList-head' },\n        React.createElement('span', null),\n        React.createElement(\n          'span',\n          null,\n          '\\u6211\\u8981\\u5BA1\\u5355'\n        ),\n        React.createElement(\n          'span',\n          { className: 'reset', onClick: function onClick(e) {\n              if (confirm('\u662F\u5426\u6E05\u7A7A\u7528\u6237\u4FE1\u606F,\u4E0B\u6B21\u91CD\u65B0\u767B\u5F55')) {\n                ysp.customHelper.login();\n              }\n            } },\n          '\\u91CD\\u7F6E'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control3_y5w8qx: function (elem) {
      ;if (!elem) {
        return false;
      }var data = {};var titles = [];var contents = [];var conss = [];var TD = [];if (elem.querySelector('.list_Table').querySelectorAll('tbody')[0].querySelectorAll('th').length > 0 && elem.querySelector('.list_Table').querySelectorAll('tbody').length > 0) {
        var headTitles = elem.querySelector('.list_Table').querySelectorAll('tbody')[0].querySelectorAll('th');headTitles && [].forEach.call(headTitles, function (item, index) {
          if (headTitles && item && index > 0 && index < headTitles.length) {
            titles.push(item.textContent);
          }
        });var tbodys = elem.querySelector('.list_Table').querySelectorAll('tbody');var cons = $(elem).find('.list_Table').children('tbody').filter('.tableOn');cons.forEach(function (items, indexs) {
          if ($(items).find('td').eq(7).find('input').length > 1) {
            data.list = true;
          } else {
            data.list = false;
          }
        });for (var i = 1; i < tbodys.length - 1; i++) {
          var TD = [];var tds = tbodys && tbodys[i].querySelectorAll('td');for (var k = 1; k < tds.length; k++) {
            if (k == tds.length - 1) {
              var opts = [];var inputs = tbodys[i].querySelectorAll('td')[k].querySelectorAll('input');for (var j = 0; j < inputs.length; j++) {
                opts.push(inputs[j].value);
              }TD.push(opts);
            } else {
              TD.push(tbodys[i].querySelectorAll('td')[k].textContent.replace(/^(\s+)|(\s+)$|(\n+)|(\t+)/g, ''));
            }
          }contents.push(TD);
        }data.title = titles;data.content = contents;data.conss = conss;return data;
      }
    },
    doAction_uiControl3_nTyfES: function (data, elem) {
      if (data.eventType == "bottom") {
        var valueData = data.dataCustom[0];var index = parseInt(data.dataCustom[1]) + 1;var inputs = elem.querySelector('.list_Table').querySelectorAll('tbody')[index].querySelectorAll('td')[elem.querySelector('.list_Table').querySelectorAll('tbody')[index].querySelectorAll('td').length - 1].querySelectorAll('input');for (var i = 0; i < inputs.length; i++) {
          if (inputs[i].value == valueData) {
            inputs[i].click();ysp.appMain.showLoading();setTimeout(function () {
              ysp.appMain.hideLoading();
            }, 2000);
          }
        }
      } else if (data.eventType == 'openClick') {
        elem.querySelectorAll('.tableOn')[data.dataCustom].querySelectorAll('a')[1].click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      }
    },
    getTemplate_uiControl3_nTyfES: function getTemplate_uiControl3_nTyfES() {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.index = 0;\n  }\n  clickqiehuan=(e)=>{\n   var listuls=this.refs[\"listuls\"+e.target.dataset.key];\n   var listbots=this.refs[\"listbots\"+e.target.dataset.key];\n    \n   var iChange = listuls.previousSibling.querySelector('i').className\n    if(iChange=='list-icon-done') {\n      listuls.previousSibling.querySelector('i').setAttribute('class','list-icon-done D-list-icon-up');\n    } else {\n      listuls.previousSibling.querySelector('i').setAttribute('class','list-icon-done');\n    }\n    //\u5217\u8868\u9875\u7684\u4E0A\u4E0B\u7BAD\u5934\u5207\u6362UI\u6539\u53D820190329\n    if(listuls.className==\"list-content-ul\"){\n      listuls.className=\"list-content-ul weng_none\"\n    }else{\n      listuls.className=\"list-content-ul\"\n    }\n    if(listbots.className==\"list-bottom weng_none\"){\n      listbots.className=\"list-bottom\"       \n    }else{\n      listbots.className=\"list-bottom weng_none\"       \n    }\n  }\n  backs=(e)=>{\n    \n    var handler = this.props.customHandler;\n    var index=e.target.dataset.key\n    if(handler){\n      handler({\n        data:index,\n        eventType:'backs'\n      })\n    }\n    handler({\n\t   eventType:'section-trigger',\n\t   data:'control14_rapNLN'\n\t })\n\n    \n  }\n  agree=(e)=>{\n    debugger\n    var handler = this.props.customHandler;\n    var index=e.target.dataset.key\n    if(handler){\n      handler({\n        data:index,\n        eventType:'agree'\n      })\n    }\n    handler({\n\t   eventType:'section-trigger',\n\t   data:'control14_rapNLN'\n\t })\n  }\n  // onClick=(e)=>{\n  //   if(e.target.nodeName !== 'UL'){\n  //     if(e.target.nodeName == 'LI'){\n  //       e.target = e.target.parentElement;\n  //     }\n  //     if(e.target.nodeName == 'SPAN'){\n  //       e.target = e.target.parentElement.parentElement;\n  //     }\n  //   }\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       data:e.target.dataset.index,\n  //       eventType:'click'\n  //     })\n  //   }\n  // }\n  bottom=(e)=>{\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(target.textContent.indexOf('\u540C\u610F')>-1||target.textContent.indexOf('\u9000\u56DE')>-1){\n      if(handler){\n        handler({\n          data:[target.textContent,target.getAttribute('data-key')],\n          eventType:'bottom'\n        })\n        handler({\n          eventType:'section-trigger',\n          data:'control14_rapNLN'\n        })\n      }\n    }else{\n      if(handler){\n        handler({\n          data:[target.textContent,target.getAttribute('data-key')],\n          eventType:'bottom'\n        })\n      }\n    }\n  }\n  openClick=(e)=>{\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        data:target.getAttribute('data-key'),\n        eventType:'openClick'\n      })\n    }\n  }\n  render(){\n    var _this = this;\n    var data = this.props.customData;\n    if(data){\n      if(data&&data.content.length>0&&data.content[0].length>0){\n          return (\n          <div className='Todo-list-content' >\n            {data && data.content.map(function(item,index){\n                 if(item[0]!=\"\"){\n                  return (\n        <div style={{marginBottom:'20px'}}>\n         <ul className='list-content-ul show-false' style={{position:'relative'}}>\n            <li onClick={_this.openClick} data-key={index} className='title'>{item[1]}</li>      \n            {item&&item.map(function(c,i){\n              if(i==0){\n                  return (\n                  <li><span className='content-title'>{data.title[i]}</span><span>{item[i]}</span></li>\n                )\n              }\n            })}\n            <i className='list-icon-done' onClick={_this.clickqiehuan} style={{position:'absolute',top:'42px',right:'16px'}} data-key={index}></i>\n        </ul>\n         <ul className=\"list-content-ul weng_none\" ref={\"listuls\"+index}>\n            {item.map(function(v,j){\n                if(j!=0&&j!=1&&j!=6){\n                    return (\n                    <li><span className='content-title'>{data.title[j]}</span><span>{v}</span></li>\n                  )\n                }\n              })}   \n        </ul>\n        <div className=\"list-bottom weng_none\" ref={\"listbots\"+index}>\n          {item[item.length-1].map(function(d,i){\n            return(<li data-key={index} onClick={_this.bottom} className={'li'+item[item.length-1].length}>{d}</li>)  \n          })}\n        </div>    \n\n\n\n\n\n        </div>\n\n              )\n            } \n            })}\n          </div>\n        )\n      }\n      else if(data.title<0){\n        return (\n          <div className='Todo-list-content' style={{marginTop:'50px',color:'red',textAlign:'center'}}> * \u6682\u65E0\u5F85\u529E\u4E8B\u9879 * </div>\n        )\n      }\n      else{\n         return (\n          <div className='Todo-list-content' style={{marginTop:'50px',color:'red',textAlign:'center'}}> * \u6682\u65E0\u5F85\u529E\u4E8B\u9879 * </div>\n        )\n      }\n    }else{\n      return(<div className=\"loading\">\u6570\u636E\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u7B49 ... ...</div>)\n    }\n  }\n}\n";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.clickqiehuan = function (e) {\n      var listuls = _this2.refs[\"listuls\" + e.target.dataset.key];\n      var listbots = _this2.refs[\"listbots\" + e.target.dataset.key];\n\n      var iChange = listuls.previousSibling.querySelector('i').className;\n      if (iChange == 'list-icon-done') {\n        listuls.previousSibling.querySelector('i').setAttribute('class', 'list-icon-done D-list-icon-up');\n      } else {\n        listuls.previousSibling.querySelector('i').setAttribute('class', 'list-icon-done');\n      }\n      //\u5217\u8868\u9875\u7684\u4E0A\u4E0B\u7BAD\u5934\u5207\u6362UI\u6539\u53D820190329\n      if (listuls.className == \"list-content-ul\") {\n        listuls.className = \"list-content-ul weng_none\";\n      } else {\n        listuls.className = \"list-content-ul\";\n      }\n      if (listbots.className == \"list-bottom weng_none\") {\n        listbots.className = \"list-bottom\";\n      } else {\n        listbots.className = \"list-bottom weng_none\";\n      }\n    };\n\n    _this2.backs = function (e) {\n\n      var handler = _this2.props.customHandler;\n      var index = e.target.dataset.key;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: 'backs'\n        });\n      }\n      handler({\n        eventType: 'section-trigger',\n        data: 'control14_rapNLN'\n      });\n    };\n\n    _this2.agree = function (e) {\n      debugger;\n      var handler = _this2.props.customHandler;\n      var index = e.target.dataset.key;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: 'agree'\n        });\n      }\n      handler({\n        eventType: 'section-trigger',\n        data: 'control14_rapNLN'\n      });\n    };\n\n    _this2.bottom = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n      if (target.textContent.indexOf('\u540C\u610F') > -1 || target.textContent.indexOf('\u9000\u56DE') > -1) {\n        if (handler) {\n          handler({\n            data: [target.textContent, target.getAttribute('data-key')],\n            eventType: 'bottom'\n          });\n          handler({\n            eventType: 'section-trigger',\n            data: 'control14_rapNLN'\n          });\n        }\n      } else {\n        if (handler) {\n          handler({\n            data: [target.textContent, target.getAttribute('data-key')],\n            eventType: 'bottom'\n          });\n        }\n      }\n    };\n\n    _this2.openClick = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.getAttribute('data-key'),\n          eventType: 'openClick'\n        });\n      }\n    };\n\n    _this2.index = 0;\n    return _this2;\n  }\n  // onClick=(e)=>{\n  //   if(e.target.nodeName !== 'UL'){\n  //     if(e.target.nodeName == 'LI'){\n  //       e.target = e.target.parentElement;\n  //     }\n  //     if(e.target.nodeName == 'SPAN'){\n  //       e.target = e.target.parentElement.parentElement;\n  //     }\n  //   }\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       data:e.target.dataset.index,\n  //       eventType:'click'\n  //     })\n  //   }\n  // }\n\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      if (data) {\n        if (data && data.content.length > 0 && data.content[0].length > 0) {\n          return React.createElement(\n            \"div\",\n            { className: \"Todo-list-content\" },\n            data && data.content.map(function (item, index) {\n              if (item[0] != \"\") {\n                return React.createElement(\n                  \"div\",\n                  { style: { marginBottom: '20px' } },\n                  React.createElement(\n                    \"ul\",\n                    { className: \"list-content-ul show-false\", style: { position: 'relative' } },\n                    React.createElement(\n                      \"li\",\n                      { onClick: _this.openClick, \"data-key\": index, className: \"title\" },\n                      item[1]\n                    ),\n                    item && item.map(function (c, i) {\n                      if (i == 0) {\n                        return React.createElement(\n                          \"li\",\n                          null,\n                          React.createElement(\n                            \"span\",\n                            { className: \"content-title\" },\n                            data.title[i]\n                          ),\n                          React.createElement(\n                            \"span\",\n                            null,\n                            item[i]\n                          )\n                        );\n                      }\n                    }),\n                    React.createElement(\"i\", { className: \"list-icon-done\", onClick: _this.clickqiehuan, style: { position: 'absolute', top: '42px', right: '16px' }, \"data-key\": index })\n                  ),\n                  React.createElement(\n                    \"ul\",\n                    { className: \"list-content-ul weng_none\", ref: \"listuls\" + index },\n                    item.map(function (v, j) {\n                      if (j != 0 && j != 1 && j != 6) {\n                        return React.createElement(\n                          \"li\",\n                          null,\n                          React.createElement(\n                            \"span\",\n                            { className: \"content-title\" },\n                            data.title[j]\n                          ),\n                          React.createElement(\n                            \"span\",\n                            null,\n                            v\n                          )\n                        );\n                      }\n                    })\n                  ),\n                  React.createElement(\n                    \"div\",\n                    { className: \"list-bottom weng_none\", ref: \"listbots\" + index },\n                    item[item.length - 1].map(function (d, i) {\n                      return React.createElement(\n                        \"li\",\n                        { \"data-key\": index, onClick: _this.bottom, className: 'li' + item[item.length - 1].length },\n                        d\n                      );\n                    })\n                  )\n                );\n              }\n            })\n          );\n        } else if (data.title < 0) {\n          return React.createElement(\n            \"div\",\n            { className: \"Todo-list-content\", style: { marginTop: '50px', color: 'red', textAlign: 'center' } },\n            \" * \\u6682\\u65E0\\u5F85\\u529E\\u4E8B\\u9879 * \"\n          );\n        } else {\n          return React.createElement(\n            \"div\",\n            { className: \"Todo-list-content\", style: { marginTop: '50px', color: 'red', textAlign: 'center' } },\n            \" * \\u6682\\u65E0\\u5F85\\u529E\\u4E8B\\u9879 * \"\n          );\n        }\n      } else {\n        return React.createElement(\n          \"div\",\n          { className: \"loading\" },\n          \"\\u6570\\u636E\\u52A0\\u8F7D\\u4E2D\\uFF0C\\u8BF7\\u7A0D\\u7B49 ... ...\"\n        );\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control12_zaMcnV: function getData_control12_zaMcnV(elem) {
      if (!elem) {
        return false;
      }if (elem && elem.style.display == "block") {
        var data = {};var title = $(elem).children('#TB_title').eq(1).children('div').eq(0).text();data.title = title;var contetns = $(elem).find('iframe')[0].contentDocument.querySelector('body');var liss = $(contetns).find('#approveForm').find('.setTb').children('tbody');if ($(contetns).find('#approveForm').length > 0 && $(contetns).find('#approveForm').find('.setTb').length > 0 && $(contetns).find('#approveForm').find('.setTb').children('tbody').length > 0) {
          var lits = liss.children('tr').eq(0).find('div').text().trim();
        }var titless = liss.children('tr').eq(0).find('th').text();var chilis = liss.children('tr').eq(1).find('th').text();var options = liss.children('tr').eq(1).find('select').find('option');var opt = [];options.forEach(function (items, index) {
          opt.push({ value: items.textContent, val: items.value });
        });data.contents = [];data.contents.push({ titles: titless, con: lits });data.tits = chilis;data.cons = opt;data.isShow = true;return data;
      }
    },
    doAction_uiControl9_y1NyIS: function doAction_uiControl9_y1NyIS(data, elem) {
      var contetns = $(elem).find('iframe')[0].contentDocument.querySelector('body');if (data.eventType == "submits") {
        if ($(contetns).find('.p5').length > 0) {
          $(contetns).find('.p5').children('.fr').eq(1).find('a').click();
        } else {
          $(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(2).find('a').eq(0).click();
        }
      } else if (data.eventType == "backs") {
        debugger;if ($(contetns).find('.p5').length > 0) {
          $(contetns).find('.p5').children('.fr').eq(0).find('a').click();
        } else {
          $(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(2).find('a').eq(1).click();
        }
      }
    },
    getTemplate_uiControl9_y1NyIS: function getTemplate_uiControl9_y1NyIS() {
      var selfTemplate = "module.exports = React.createClass({\n  // constructor:function(){\n  //   super();\n  //   this.state={\n  //     open:false\n  //   }\n  // },\n  // componentDidUpdate:function(props){\n  //   var isShow=props.customData.isShow;\n  //   if(isShow){\n  //     this.setState({\n  //       open:true\n  //     })\n  //   }\n  // },\n  handleClick:function(e){\n   \n    var handle = this.props.customHandler;\n    var index=e.target.dataset.key\n    if(handle){\n      handle({\n        data:index,\n        eventType:'click'\n      })\n    }\n  },\n  submits:function(e){\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:'submits'\n      })\n    }\n    \n  },\n   backs:function(e){\n//      var backs=this.refs.backs;\n     \n//      backs.style.display='none'\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:'backs'\n      })\n    }\n    \n  },\n  render: function() {\n    var data = this.props.customData;\n    \n      \n    \n    if(data&&data.cons.length>0){\n    var options=[];\n      options.push(\n    data.cons.map(function(items,index){\n      return(\n      <option>{items.value}</option>\n      )\n    })\n      )\n     return (\n      \n      <div ref=\"backs\">\n          <div className='sucessMesbx'>\n        <div>\n        <h5>{data.title}</h5>\n        <p><ul><li style={{height:'44px',borderBottom:'1px solid #ddd'}}><span style={{width:\"30%\",display:'inline-block'}}>{data.contents[0].titles}</span><span>{data.contents[0].con}</span></li>\n       <li><span style={{width:'44%'}}>{data.tits}</span><select className=\"selecs\">{options}</select></li>   \n          \n         </ul></p>\n        <p style={{marginTop:\"100px\",marginLeft:'30px'}}><button onClick={this.submits} className=\"btn\" style={{marginRight:'15px'}}>\u63D0\u4EA4</button> <button onClick={this.backs} className=\"btn\">\u8FD4\u56DE</button></p>\n        </div>\n            </div>\n      \n      </div>\n      \n    )\n    }else{\n      return(\n      <div></div>\n      )\n    }\n\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  // constructor:function(){\n  //   super();\n  //   this.state={\n  //     open:false\n  //   }\n  // },\n  // componentDidUpdate:function(props){\n  //   var isShow=props.customData.isShow;\n  //   if(isShow){\n  //     this.setState({\n  //       open:true\n  //     })\n  //   }\n  // },\n  handleClick: function handleClick(e) {\n\n    var handle = this.props.customHandler;\n    var index = e.target.dataset.key;\n    if (handle) {\n      handle({\n        data: index,\n        eventType: 'click'\n      });\n    }\n  },\n  submits: function submits(e) {\n    var handle = this.props.customHandler;\n    if (handle) {\n      handle({\n        eventType: 'submits'\n      });\n    }\n  },\n  backs: function backs(e) {\n    //      var backs=this.refs.backs;\n\n    //      backs.style.display='none'\n    var handle = this.props.customHandler;\n    if (handle) {\n      handle({\n        eventType: 'backs'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n\n    if (data && data.cons.length > 0) {\n      var options = [];\n      options.push(data.cons.map(function (items, index) {\n        return React.createElement(\n          'option',\n          null,\n          items.value\n        );\n      }));\n      return React.createElement(\n        'div',\n        { ref: 'backs' },\n        React.createElement(\n          'div',\n          { className: 'sucessMesbx' },\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'h5',\n              null,\n              data.title\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'ul',\n                null,\n                React.createElement(\n                  'li',\n                  { style: { height: '44px', borderBottom: '1px solid #ddd' } },\n                  React.createElement(\n                    'span',\n                    { style: { width: \"30%\", display: 'inline-block' } },\n                    data.contents[0].titles\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    data.contents[0].con\n                  )\n                ),\n                React.createElement(\n                  'li',\n                  null,\n                  React.createElement(\n                    'span',\n                    { style: { width: '44%' } },\n                    data.tits\n                  ),\n                  React.createElement(\n                    'select',\n                    { className: 'selecs' },\n                    options\n                  )\n                )\n              )\n            ),\n            React.createElement(\n              'p',\n              { style: { marginTop: \"100px\", marginLeft: '30px' } },\n              React.createElement(\n                'button',\n                { onClick: this.submits, className: 'btn', style: { marginRight: '15px' } },\n                '\\u63D0\\u4EA4'\n              ),\n              ' ',\n              React.createElement(\n                'button',\n                { onClick: this.backs, className: 'btn' },\n                '\\u8FD4\\u56DE'\n              )\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control13_t52bRC: function getData_control13_t52bRC(elem) {
      if (elem) {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl10_MUQcsp: function doAction_uiControl10_MUQcsp(data, elem) {
      if (data.eventType == "click") {
        console.log("触发了");
      }
    },
    getTemplate_uiControl10_MUQcsp: function getTemplate_uiControl10_MUQcsp() {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n\n   componentDidMount(){   \n     var _this = this;  \n       var handler=_this.props.customHandler;\n        if(handler){\n          handler({\n            eventType:\"click\"\n          })\n        }  \n   }\n   render() {\n    return (\n      <span ref=\"click\"></span>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"span\", { ref: \"click\" });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control19_MdNPFF: function (elem) {
      'use strict';

      ;if (!elem) {
        return;
      } // console.log(elem)
      var data = [];if ($(elem).children('li').eq(2).children('div').attr('class').indexOf('selected') !== -1) {
        data.push('1');
      } else {
        data.push('2');
      }return data;
    },
    doAction_uiControl16_TvQrlB: function (data, elem) {
      'use strict';

      var event = data.eventType;if (event == 'jk') {
        $(elem).children('li').eq(0).find("ul").eq(0).find('div').eq(0).click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      } else if (event == 'sd') {
        $(elem).children('li').eq(1).find('div').eq(0).click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      } else if (event == 'cd') {
        $(elem).children('li').eq(2).find('div').eq(0).click();elem.ownerDocument.location.href = "http://59.110.171.69:30002/ReimbursePlatform/reimburse/loginAction.action#cx";ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 5000);
      } else if (event == 'bx') {
        $(elem).children('li').eq(2).find('div').eq(0).click();elem.ownerDocument.location.href = "http://59.110.171.69:30002/ReimbursePlatform/reimburse/loginAction.action#bx";ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 4000);
      }
    },
    getTemplate_uiControl16_TvQrlB: function getTemplate_uiControl16_TvQrlB() {
      var selfTemplate = "module.exports = React.createClass({\n  jk:function(e){\n    e.target.ownerDocument.querySelector('.active').className='';\n    e.target.className='active';\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"jk\"\n      })\n    }\n  },\n  sd:function(e){\n    e.target.ownerDocument.querySelector('.active').className='';\n    e.target.className='active';\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"sd\"\n      })\n    }\n  },\n  bx:function(e){\n    e.target.ownerDocument.querySelector('.active').className='';\n    e.target.className='active';\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"bx\"\n      })\n    }\n  },\n  cd:function(e){\n    e.target.ownerDocument.querySelector('.active').className='';\n    e.target.className='active';\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"cd\"\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n     return (\n    \t<div className = 'TodoList-head2'>\n          <div className='div_lfj'>\n              <span className='active' onClick={_this.sd}>\u5F85\u529E</span>\n         \t    <span onClick={_this.jk}>\u501F\u6B3E</span>\n              <span onClick={_this.bx}>\u62A5\u9500</span>\n              <span onClick={_this.cd}>\u67E5\u8BE2</span>\n         </div>\n      </div>\n    )\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  jk: function jk(e) {\n    e.target.ownerDocument.querySelector('.active').className = '';\n    e.target.className = 'active';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"jk\"\n      });\n    }\n  },\n  sd: function sd(e) {\n    e.target.ownerDocument.querySelector('.active').className = '';\n    e.target.className = 'active';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"sd\"\n      });\n    }\n  },\n  bx: function bx(e) {\n    e.target.ownerDocument.querySelector('.active').className = '';\n    e.target.className = 'active';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"bx\"\n      });\n    }\n  },\n  cd: function cd(e) {\n    e.target.ownerDocument.querySelector('.active').className = '';\n    e.target.className = 'active';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"cd\"\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'TodoList-head2' },\n      React.createElement(\n        'div',\n        { className: 'div_lfj' },\n        React.createElement(\n          'span',\n          { className: 'active', onClick: _this.sd },\n          '\\u5F85\\u529E'\n        ),\n        React.createElement(\n          'span',\n          { onClick: _this.jk },\n          '\\u501F\\u6B3E'\n        ),\n        React.createElement(\n          'span',\n          { onClick: _this.bx },\n          '\\u62A5\\u9500'\n        ),\n        React.createElement(\n          'span',\n          { onClick: _this.cd },\n          '\\u67E5\\u8BE2'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control45_L3SP1I: function (elem) {
      "use strict";

      ;
    },
    doAction_uiControl38_keMeUn: function (data, elem) {
      'use strict';

      if (data.eventType == 'saveU') {
        ysp.customHelper.loginStatus(ysp.customHelper.USER, ysp.customHelper.PWD);
      }
    },
    getTemplate_uiControl38_keMeUn: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount:function(){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'saveU'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div></div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'saveU'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement('div', null);\n  }\n});";
    },
    getData_control79_pQpCQE: function (elem) {
      "use strict";

      ;
    },
    doAction_uiControl68_4FroBi: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl68_4FroBi: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentWillMount() {\n       ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },2000)\n  },\n  render: function() {\n    return (\n      ''\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  componentWillMount: function componentWillMount() {\n        ysp.appMain.showLoading();\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 2000);\n  },\n\n  render: function render() {\n    return '';\n  }\n});";
    }
  }, "TodoList");
})(window, ysp);