(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control49_n31ik2: function (elem) {
      'use strict';

      ;if (elem) {
        var data = {}; //报账单类型
        var bzd = {};var href = elem.ownerDocument.location.href;var tabPage = href.split("#")[1];data.tabPage = tabPage;var bzdSelect = elem.querySelector('#tempCode');bzd.value = bzdSelect.querySelectorAll('option')[bzdSelect.selectedIndex].textContent;bzd.option = [];for (var i = 0; i < bzdSelect.querySelectorAll('option').length; i++) {
          bzd.option.push(bzdSelect.querySelectorAll('option')[i].textContent);
        }data.bzd = bzd; //报账部门
        var bzbm = {};var bzbmValue = elem.querySelector('.combo-text');var bzbmSelect = elem.ownerDocument.querySelector('.combo-panel');bzbm.value = bzbmValue.value;bzbm.option = [];for (var i = 0; i < bzbmSelect.children.length; i++) {
          bzbm.option.push(bzbmSelect.children[i].textContent);
        }data.bzbm = bzbm; //开始时间
        var startDate = elem.querySelector('#startDate').value;data.startDate = startDate; //结束时间
        var endDate = elem.querySelector('#endDate').value;data.endDate = endDate; //金额
        var startAmount = elem.querySelector('#startAmount').value;var endAmount = elem.querySelector('#endAmount').value;var money = startAmount + '-' + endAmount;if (money == '-') {
          money = '';
        }data.money = money; //报销单编号
        var code = elem.querySelector('#code').value;data.code = code; //流程状态
        var process = {};var processValue = elem.querySelector('#processType');process.value = processValue.querySelectorAll('option')[processValue.selectedIndex].textContent;process.option = [];for (var i = 0; i < processValue.querySelectorAll('option').length; i++) {
          process.option.push(processValue.querySelectorAll('option')[i].textContent);
        }data.process = process; //展开收起
        var packUp = elem.querySelector('#packUp').value;data.packUp = packUp; //隐藏显示
        var show = elem.querySelector('#dataForm').style.display;data.show = show;return data;
      }
    },
    doAction_uiControl40_fKgedU: function (data, elem) {
      'use strict';

      var event = data.eventType;if (event == 'showHide') {
        //搜索框隐藏显示
        elem.querySelector('#packUp').click();
      } else if (event == 'chufa') {
        if (elem.querySelector('#packUp').value == '收起') {
          elem.querySelector('#packUp').click();
        }ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      } else if (event == 'bonSubmit') {
        //搜索提交按钮
        var datas = data.dataCustom;if (datas == '清除') {
          elem.querySelector('#clean').click();
        } else {
          elem.querySelector('#search').click();ysp.appMain.showLoading();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 2000);elem.querySelector('#packUp').click();
        }
      } else if (event == 'select') {
        //select
        var datas = data.dataCustom[0];var index = data.dataCustom[1];if (datas == '报账单类型') {
          elem.querySelector('#tempCode').value = elem.querySelector('#tempCode').querySelectorAll('option')[index].value;elem.querySelector('#tempCode').dispatchEvent(new Event('change'));
        } else if (datas == '流程状态') {
          elem.querySelector('#processType').value = elem.querySelector('#processType').querySelectorAll('option')[index].value;elem.querySelector('#processType').dispatchEvent(new Event('change'));
        } else if (datas == '报账部门') {
          elem.querySelector('.combo-text').value = elem.ownerDocument.querySelector('.combo-panel').children[index].textContent;
        }
      } else if (event == 'blur') {
        //input
        var datas = data.dataCustom[0];var value = data.dataCustom[1];if (datas == '开始日期') {
          elem.querySelector('#startDate').value = value;
        } else if (datas == '结束日期') {
          elem.querySelector('#endDate').value = value;
        } else if (datas == '金额') {
          var money = value.split('-');elem.querySelector('#startAmount').value = money[0];elem.querySelector('#endAmount').value = money[1];
        } else if (datas == '报账单编号') {
          elem.querySelector('#code').value = value;
        } else if (datas == '报账部门') {
          elem.querySelector('.combo-text').value = value;
        }
      }
    },
    getTemplate_uiControl40_fKgedU: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount() {\n  \tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"chufa\"\n      })\n    }\n  },\n  blur:function(e){\n    var target = e.target;\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"blur\",\n        data:[target.parentNode.querySelector('span').textContent,target.value]\n      })\n    }\n  },\n  select:function(e){\n    var target = e.target;\n    // if(target.parentNode.querySelector('span').textContent.indexOf('\u62A5\u8D26\u90E8\u95E8')>-1)\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"select\",\n        data:[target.parentNode.querySelector('span').textContent,target.selectedIndex]\n      })\n    }\n  },\n  showHide:function(e){\n    var target = e.target;\n    if(target.textContent.indexOf('\u5C55\u5F00')>-1){\n       target.parentNode.querySelector('.serch-content').style.display='block';\n    }else{\n       target.parentNode.querySelector('.serch-content').style.display='none';\n    }\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"showHide\"\n      })\n    }\n  },\n  bonSubmit:function(e){\n    var target = e.target;\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"bonSubmit\",\n        data:target.textContent\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n  \tvar data = this.props.customData;\n    if(data.tabPage=='bx'){\n      return('')\n    }else{\n      return (    \n        <div className = 'Todo-serch yuetop'>\n          <div className = 'serch-head-icon'>\n            <span className = 'icon-title'>\u67E5\u8BE2\u6761\u4EF6</span>\n            <span onClick={_this.showHide} className='serch-right'>{data.packUp}</span>\n            <div className=\"serch-content\" style={{'display':data.show}}>\n              <ul>\n                <li>\n                  <span>\u62A5\u8D26\u5355\u7C7B\u578B</span>\n                  <select onChange={_this.select}>\n                    {data.bzd.option.map(function(d,i){\n                      return(data.bzd.value==d?<option selected='selected'>{d}</option>:<option>{d}</option>)\n                    })}\n                  </select>\n                </li>\n                <li>\n                  <span>\u62A5\u8D26\u90E8\u95E8</span>\n                  <select onChange={_this.select}>\n                    {data.bzbm.option.map(function(d,i){\n                      return(data.bzbm.value==d?<option selected='selected'>{d}</option>:<option>{d}</option>)\n                    })}\n                  </select>\n                  <input onChange={_this.blur} style={{'width':'60%','margin-left': '-65%','border':'none'}} type=\"text\" value={data.bzbm.value}/>\n                </li>\n                <li>\n                  <span>\u5F00\u59CB\u65E5\u671F</span>\n                  <input type=\"date\" onChange={_this.blur} value={data.startDate}/>\n                </li>\n                <li>\n                  <span>\u7ED3\u675F\u65E5\u671F</span>\n                  <input type=\"date\" onChange={_this.blur} value={data.endDate}/>\n                </li>\n\n                <li>\n                  <span>\u6D41\u7A0B\u72B6\u6001</span>\n                  <select onChange={_this.select}>\n                    {data.process.option.map(function(d,i){\n                      return(data.process.value==d?<option selected='selected'>{d}</option>:<option>{d}</option>)\n                    })}\n                  </select>\n                </li>\n              </ul>\n              <div className='serch-bottom'>\n                <button className='clear' onClick={_this.bonSubmit}>\u6E05\u9664</button>\n                <button className='commit-serch' onClick={_this.bonSubmit}>\u641C\u7D22</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      )\n    }\n\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"chufa\"\n      });\n    }\n  },\n\n  blur: function blur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"blur\",\n        data: [target.parentNode.querySelector('span').textContent, target.value]\n      });\n    }\n  },\n  select: function select(e) {\n    var target = e.target;\n    // if(target.parentNode.querySelector('span').textContent.indexOf('\u62A5\u8D26\u90E8\u95E8')>-1)\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"select\",\n        data: [target.parentNode.querySelector('span').textContent, target.selectedIndex]\n      });\n    }\n  },\n  showHide: function showHide(e) {\n    var target = e.target;\n    if (target.textContent.indexOf('\u5C55\u5F00') > -1) {\n      target.parentNode.querySelector('.serch-content').style.display = 'block';\n    } else {\n      target.parentNode.querySelector('.serch-content').style.display = 'none';\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"showHide\"\n      });\n    }\n  },\n  bonSubmit: function bonSubmit(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"bonSubmit\",\n        data: target.textContent\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data.tabPage == 'bx') {\n      return '';\n    } else {\n      return React.createElement(\n        \"div\",\n        { className: \"Todo-serch yuetop\" },\n        React.createElement(\n          \"div\",\n          { className: \"serch-head-icon\" },\n          React.createElement(\n            \"span\",\n            { className: \"icon-title\" },\n            \"\\u67E5\\u8BE2\\u6761\\u4EF6\"\n          ),\n          React.createElement(\n            \"span\",\n            { onClick: _this.showHide, className: \"serch-right\" },\n            data.packUp\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"serch-content\", style: { 'display': data.show } },\n            React.createElement(\n              \"ul\",\n              null,\n              React.createElement(\n                \"li\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u62A5\\u8D26\\u5355\\u7C7B\\u578B\"\n                ),\n                React.createElement(\n                  \"select\",\n                  { onChange: _this.select },\n                  data.bzd.option.map(function (d, i) {\n                    return data.bzd.value == d ? React.createElement(\n                      \"option\",\n                      { selected: \"selected\" },\n                      d\n                    ) : React.createElement(\n                      \"option\",\n                      null,\n                      d\n                    );\n                  })\n                )\n              ),\n              React.createElement(\n                \"li\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u62A5\\u8D26\\u90E8\\u95E8\"\n                ),\n                React.createElement(\n                  \"select\",\n                  { onChange: _this.select },\n                  data.bzbm.option.map(function (d, i) {\n                    return data.bzbm.value == d ? React.createElement(\n                      \"option\",\n                      { selected: \"selected\" },\n                      d\n                    ) : React.createElement(\n                      \"option\",\n                      null,\n                      d\n                    );\n                  })\n                ),\n                React.createElement(\"input\", { onChange: _this.blur, style: { 'width': '60%', 'margin-left': '-65%', 'border': 'none' }, type: \"text\", value: data.bzbm.value })\n              ),\n              React.createElement(\n                \"li\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u5F00\\u59CB\\u65E5\\u671F\"\n                ),\n                React.createElement(\"input\", { type: \"date\", onChange: _this.blur, value: data.startDate })\n              ),\n              React.createElement(\n                \"li\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u7ED3\\u675F\\u65E5\\u671F\"\n                ),\n                React.createElement(\"input\", { type: \"date\", onChange: _this.blur, value: data.endDate })\n              ),\n              React.createElement(\n                \"li\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u6D41\\u7A0B\\u72B6\\u6001\"\n                ),\n                React.createElement(\n                  \"select\",\n                  { onChange: _this.select },\n                  data.process.option.map(function (d, i) {\n                    return data.process.value == d ? React.createElement(\n                      \"option\",\n                      { selected: \"selected\" },\n                      d\n                    ) : React.createElement(\n                      \"option\",\n                      null,\n                      d\n                    );\n                  })\n                )\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"serch-bottom\" },\n              React.createElement(\n                \"button\",\n                { className: \"clear\", onClick: _this.bonSubmit },\n                \"\\u6E05\\u9664\"\n              ),\n              React.createElement(\n                \"button\",\n                { className: \"commit-serch\", onClick: _this.bonSubmit },\n                \"\\u641C\\u7D22\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }\n});";
    },
    getData_control50_K78z7e: function (elem) {
      'use strict';

      ;if (!elem) {
        return false;
      }var data = {};var data_All = {};var titles = [];var contents = [];var conss = [];var TD = [];var list;var num = [];var num1 = [];if (elem.querySelector('.list_Table').querySelectorAll('tbody')[0].querySelectorAll('th').length > 0 && elem.querySelector('.list_Table').querySelectorAll('tbody').length > 0) {
        var headTitles = elem.querySelector('.list_Table').querySelectorAll('tbody')[0].querySelectorAll('th');headTitles && [].forEach.call(headTitles, function (item, index) {
          if (headTitles && item && index > 0 && index < headTitles.length) {
            titles.push(item.textContent);
          }
        });var tbodys = elem.querySelector('.list_Table').querySelectorAll('tbody');var cons = $(elem).find('.list_Table').children('tbody').filter('.tableOn');cons.forEach(function (items, indexs) {
          if ($(items).find('td').eq(7).find('input').length > 1) {
            // data.list = true;
            list = true;
          } else {
            // data.list = false;
            list = false;
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
        }var title = titles;data.content = contents;data.conss = conss; // return data;
        data_All.title = titles;var data_cg = []; //草稿
        var data_cx = []; //查询
        $(data.content).each(function (i, v) {
          if (v[5].indexOf("草稿") != -1) {
            data_cg.push(v);num1.push(i);
          } else {
            data_cx.push(v);num.push(i);
          }
        });var content;var href = elem.ownerDocument.location.href;var tabPage = href.split("#")[1];if (tabPage == "cx") {
          content = data_cx;
        } else if (tabPage == "bx") {
          content = data_cg;
        }return data_All = { tabPage: tabPage, href: href, title: title, list: list, content: content, num: num, num1: num1, // data_cg,//草稿
          // data_cx,//查询
          conss: conss };
      }
    },
    doAction_uiControl41_2PEF1E: function (data, elem) {
      'use strict';

      if (data.eventType == 'openClick') {
        elem.querySelectorAll('.tableOn')[data.dataCustom].querySelectorAll('a')[1].click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      } else if (data.eventType == "backs") {
        var index = data.dataCustom;var tbodys = $(elem).find('.list_Table').find('tbody').filter('.tableOn');tbodys[index].querySelector('tr').querySelectorAll('td')[7].querySelectorAll('input')[2].click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      } else if (data.eventType == "agree") {
        var index = data.dataCustom;var tbodys = $(elem).find('.list_Table').find('tbody').filter('.tableOn');tbodys[index].querySelector('tr').querySelectorAll('td')[7].querySelectorAll('input')[1].click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      } else if (data.eventType == "bottom") {
        var valueData = data.dataCustom[0];var index = parseInt(data.dataCustom[1]) + 1;var inputs = elem.querySelector('.list_Table').querySelectorAll('tbody')[index].querySelectorAll('td')[elem.querySelector('.list_Table').querySelectorAll('tbody')[index].querySelectorAll('td').length - 1].querySelectorAll('input');for (var i = 0; i < inputs.length; i++) {
          if (inputs[i].value == valueData) {
            inputs[i].click();if (inputs[i].value !== '删除') {
              ysp.appMain.showLoading();setTimeout(function () {
                ysp.appMain.hideLoading();
              }, 2000);
            }
          }
        }
      }
    },
    getTemplate_uiControl41_2PEF1E: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.index = 0;\n  }\n  clickqiehuan=(e)=>{\n   var listuls=this.refs[\"listuls\"+e.target.dataset.key];\n   var listbots=this.refs[\"listbots\"+e.target.dataset.key]; \n    if(listuls.className==\"list-content-ul\"){\n      listuls.className=\"list-content-ul weng_none\"\n    }else{\n      listuls.className=\"list-content-ul\"\n    }\n    if(listbots.className==\"list-bottom weng_none\"){\n      listbots.className=\"list-bottom\"       \n    }else{\n      listbots.className=\"list-bottom weng_none\"       \n    }\n  }\n  backs=(e)=>{\n    \n    var handler = this.props.customHandler;\n    var index=e.target.dataset.key\n    if(handler){\n      handler({\n        data:index,\n        eventType:'backs'\n      })\n    }\n    handler({\n\t   eventType:'section-trigger',\n\t   data:'control14_rapNLN'\n\t })\n\n    \n  }\n  agree=(e)=>{\n    debugger\n    var handler = this.props.customHandler;\n    var index=e.target.dataset.key\n    if(handler){\n      handler({\n        data:index,\n        eventType:'agree'\n      })\n    }\n    handler({\n\t   eventType:'section-trigger',\n\t   data:'control14_rapNLN'\n\t })\n  }\n  // onClick=(e)=>{\n  //   if(e.target.nodeName !== 'UL'){\n  //     if(e.target.nodeName == 'LI'){\n  //       e.target = e.target.parentElement;\n  //     }\n  //     if(e.target.nodeName == 'SPAN'){\n  //       e.target = e.target.parentElement.parentElement;\n  //     }\n  //   }\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       data:e.target.dataset.index,\n  //       eventType:'click'\n  //     })\n  //   }\n  // }\n  bottom=(e)=>{\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        data:[target.textContent,target.getAttribute('data-key')],\n        eventType:'bottom'\n      })\n    }\n  }\n  openClick=(e)=>{\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        data:target.getAttribute('data-key'),\n        eventType:'openClick'\n      })\n    }\n  }\n  render(){\n    var _this = this;\n    var data = this.props.customData;\n    if(data){\n      if(data&&data.content.length>0&&data.content[0].length>0){\n          return (\n          <div className={data.tabPage=='bx'?'Todo-list-content yuecon1':'Todo-list-content yuecon'} >\n            {data && data.content.map(function(item,index){\n                 if(item[0]!=\"\"){\n                                        return (\n        <div style={{marginBottom:'20px'}}>\n         <ul className='list-content-ul show-false' data-index={index} style={{position:'relative'}}>\n           {data.tabPage=='bx'?<li onClick={_this.openClick} data-key={data.num1[index]} className='title'>{item[1]}</li>:<li onClick={_this.openClick} data-key={data.num[index]} className='title'>{item[1]}</li>}\n\n                  {item&&item.map(function(c,i){\n                    if(i==0){\n                        return (\n                        <li><span className='content-title'>{data.title[i]}</span><span>{item[i]}</span></li>\n                      )\n                    }\n                  })}\n                  <i className='list-icon-done' onClick={_this.clickqiehuan} style={{position:'absolute',top:'42px',right:'16px'}} data-key={index}>\n              </i>\n                </ul>\n            <ul className=\"list-content-ul weng_none\" ref={\"listuls\"+index}>\n                {item.map(function(v,j){\n                    if(j!=0&&j!=1&&j!=7){\n                        return (\n                        <li><span className='content-title'>{data.title[j]}</span><span>{v}</span></li>\n                      )\n                    }\n                  })}   \n            </ul>\n            <div className=\"list-bottom weng_none\" ref={\"listbots\"+index}>\n            {item[7].map(function(d,i){\n              return(data.tabPage=='bx'?<li data-key={data.num1[index]} onClick={_this.bottom} className={'li'+item[7].length}>{d}</li>:<li data-key={data.num[index]} onClick={_this.bottom} className={'li'+item[7].length}>{d}</li>)  \n            })}\n          </div>                                \n        </div>\n\n              )\n                 } \n            })}\n          </div>\n        )\n      }\n      else if(data.title<0){\n        return (\n          <div className='Todo-list-content bg_none' style={{marginTop:'50px',color:'red',textAlign:'center'}}> * \u6682\u65E0\u5F85\u529E\u4E8B\u9879 * </div>\n        )\n      }\n      else{\n         return (\n          <div className='Todo-list-content bg_none' style={{marginTop:'50px',color:'red',textAlign:'center'}}> * \u6682\u65E0\u5F85\u529E\u4E8B\u9879 * </div>\n        )\n      }\n    }else{\n      return('');\n    }\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.clickqiehuan = function (e) {\n      var listuls = _this2.refs[\"listuls\" + e.target.dataset.key];\n      var listbots = _this2.refs[\"listbots\" + e.target.dataset.key];\n      if (listuls.className == \"list-content-ul\") {\n        listuls.className = \"list-content-ul weng_none\";\n      } else {\n        listuls.className = \"list-content-ul\";\n      }\n      if (listbots.className == \"list-bottom weng_none\") {\n        listbots.className = \"list-bottom\";\n      } else {\n        listbots.className = \"list-bottom weng_none\";\n      }\n    };\n\n    _this2.backs = function (e) {\n\n      var handler = _this2.props.customHandler;\n      var index = e.target.dataset.key;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: 'backs'\n        });\n      }\n      handler({\n        eventType: 'section-trigger',\n        data: 'control14_rapNLN'\n      });\n    };\n\n    _this2.agree = function (e) {\n      debugger;\n      var handler = _this2.props.customHandler;\n      var index = e.target.dataset.key;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: 'agree'\n        });\n      }\n      handler({\n        eventType: 'section-trigger',\n        data: 'control14_rapNLN'\n      });\n    };\n\n    _this2.bottom = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: [target.textContent, target.getAttribute('data-key')],\n          eventType: 'bottom'\n        });\n      }\n    };\n\n    _this2.openClick = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.getAttribute('data-key'),\n          eventType: 'openClick'\n        });\n      }\n    };\n\n    _this2.index = 0;\n    return _this2;\n  }\n  // onClick=(e)=>{\n  //   if(e.target.nodeName !== 'UL'){\n  //     if(e.target.nodeName == 'LI'){\n  //       e.target = e.target.parentElement;\n  //     }\n  //     if(e.target.nodeName == 'SPAN'){\n  //       e.target = e.target.parentElement.parentElement;\n  //     }\n  //   }\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       data:e.target.dataset.index,\n  //       eventType:'click'\n  //     })\n  //   }\n  // }\n\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      if (data) {\n        if (data && data.content.length > 0 && data.content[0].length > 0) {\n          return React.createElement(\n            \"div\",\n            { className: data.tabPage == 'bx' ? 'Todo-list-content yuecon1' : 'Todo-list-content yuecon' },\n            data && data.content.map(function (item, index) {\n              if (item[0] != \"\") {\n                return React.createElement(\n                  \"div\",\n                  { style: { marginBottom: '20px' } },\n                  React.createElement(\n                    \"ul\",\n                    { className: \"list-content-ul show-false\", \"data-index\": index, style: { position: 'relative' } },\n                    data.tabPage == 'bx' ? React.createElement(\n                      \"li\",\n                      { onClick: _this.openClick, \"data-key\": data.num1[index], className: \"title\" },\n                      item[1]\n                    ) : React.createElement(\n                      \"li\",\n                      { onClick: _this.openClick, \"data-key\": data.num[index], className: \"title\" },\n                      item[1]\n                    ),\n                    item && item.map(function (c, i) {\n                      if (i == 0) {\n                        return React.createElement(\n                          \"li\",\n                          null,\n                          React.createElement(\n                            \"span\",\n                            { className: \"content-title\" },\n                            data.title[i]\n                          ),\n                          React.createElement(\n                            \"span\",\n                            null,\n                            item[i]\n                          )\n                        );\n                      }\n                    }),\n                    React.createElement(\"i\", { className: \"list-icon-done\", onClick: _this.clickqiehuan, style: { position: 'absolute', top: '42px', right: '16px' }, \"data-key\": index })\n                  ),\n                  React.createElement(\n                    \"ul\",\n                    { className: \"list-content-ul weng_none\", ref: \"listuls\" + index },\n                    item.map(function (v, j) {\n                      if (j != 0 && j != 1 && j != 7) {\n                        return React.createElement(\n                          \"li\",\n                          null,\n                          React.createElement(\n                            \"span\",\n                            { className: \"content-title\" },\n                            data.title[j]\n                          ),\n                          React.createElement(\n                            \"span\",\n                            null,\n                            v\n                          )\n                        );\n                      }\n                    })\n                  ),\n                  React.createElement(\n                    \"div\",\n                    { className: \"list-bottom weng_none\", ref: \"listbots\" + index },\n                    item[7].map(function (d, i) {\n                      return data.tabPage == 'bx' ? React.createElement(\n                        \"li\",\n                        { \"data-key\": data.num1[index], onClick: _this.bottom, className: 'li' + item[7].length },\n                        d\n                      ) : React.createElement(\n                        \"li\",\n                        { \"data-key\": data.num[index], onClick: _this.bottom, className: 'li' + item[7].length },\n                        d\n                      );\n                    })\n                  )\n                );\n              }\n            })\n          );\n        } else if (data.title < 0) {\n          return React.createElement(\n            \"div\",\n            { className: \"Todo-list-content bg_none\", style: { marginTop: '50px', color: 'red', textAlign: 'center' } },\n            \" * \\u6682\\u65E0\\u5F85\\u529E\\u4E8B\\u9879 * \"\n          );\n        } else {\n          return React.createElement(\n            \"div\",\n            { className: \"Todo-list-content bg_none\", style: { marginTop: '50px', color: 'red', textAlign: 'center' } },\n            \" * \\u6682\\u65E0\\u5F85\\u529E\\u4E8B\\u9879 * \"\n          );\n        }\n      } else {\n        return '';\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_undefined: function (elem) {
      "use strict";

      ;
    },
    doAction_uiControl16_TvQrlB: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl16_TvQrlB: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
    },
    getData_control61_BTKyg4: function (elem) {
      "use strict";

      ;var href = elem.ownerDocument.location.href;var tabPage = href.split("#")[1];return tabPage;
    },
    doAction_uiControl47_IHaJvT: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl47_IHaJvT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentWillMount(){\n    // ysp.appMain.showLoading();\n    // setTimeout(function(){\n    //   ysp.appMain.hideLoading();\n    // },5000);\n  },\n  render: function() {\n    return (\n      <div className=\"loading\">\u6570\u636E\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E... ...</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentWillMount: function componentWillMount() {\n    // ysp.appMain.showLoading();\n    // setTimeout(function(){\n    //   ysp.appMain.hideLoading();\n    // },5000);\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"loading\" },\n      \"\\u6570\\u636E\\u52A0\\u8F7D\\u4E2D\\uFF0C\\u8BF7\\u7A0D\\u540E... ...\"\n    );\n  }\n});";
    },
    getData_control19_XadXO7: function (elem) {},
    doAction_uiControl16_OoecKz: function (data, elem) {
      if (data.eventType == 'back') {
        $(elem).find('ul').find('#_easyui_tree_7').click();
      }
    },
    getTemplate_uiControl16_OoecKz: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handle: function(data, eventType) {\n    var handler = this.props.customHandler;\n    handler && handler({\n      data,\n      eventType\n    });\n  },\n  render: function() {\n    var me = this;\n    return (\n      <div className=\'Darry_listTitle\'>\n        <span onClick={()=>{\n            me.handle("","back");\n          }}><font style={{\'top\':\'10px\'}}></font></span>\n        <span>\u67E5\u8BE2</span> \n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handle: function handle(data, eventType) {\n    var handler = this.props.customHandler;\n    handler && handler({\n      data: data,\n      eventType: eventType\n    });\n  },\n  render: function render() {\n    var me = this;\n    return React.createElement(\n      "div",\n      { className: "Darry_listTitle" },\n      React.createElement(\n        "span",\n        { onClick: function onClick() {\n            me.handle("", "back");\n          } },\n        React.createElement("font", { style: { \'top\': \'10px\' } })\n      ),\n      React.createElement(\n        "span",\n        null,\n        "\\u67E5\\u8BE2"\n      )\n    );\n  }\n});';
    }
  }, "checkList");
})(window, ysp);