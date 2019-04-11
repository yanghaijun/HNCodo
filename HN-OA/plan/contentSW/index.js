(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control3_pfWerD: function (elem) {},
    doAction_uiControl3_Ux5ohk: function (data, elem) {
      if (data.eventType == "click") {
        var lis = elem.querySelectorAll("li");var index;for (var i = 0; i < lis.length; i++) {
          if (" 退出 " == lis[i].textContent) {
            index = i;
          }
        }elem.querySelectorAll("li") && elem.querySelectorAll("li")[index].querySelector("a").click();var elem = elem.ownerDocument;var dialog = $(elem).find('.ui_state_lock').find('table').find('.ui_buttons').find('input').eq(1);if (dialog.val() == '不保存') {
          dialog.click();
        }
      }
    },
    getTemplate_uiControl3_Ux5ohk: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-header\">\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u516C\u53F8\u6536\u6587\u6D41\u7A0B</div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-header\" },\n      React.createElement(\"div\", { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        \"div\",\n        null,\n        \"\\u516C\\u53F8\\u6536\\u6587\\u6D41\\u7A0B\"\n      )\n    );\n  }\n});";
    },
    getData_control6_uBXHGv: function (elem) {
      var data = [];var title = elem.querySelector("input").value;data.push(title);return data;
    },
    doAction_uiControl6_7aXMK8: function (data, elem) {},
    getTemplate_uiControl6_7aXMK8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-content-top\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-content-top\" },\n      data\n    );\n  }\n});";
    },
    getData_control7_9k4Pkb: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [], fujian: [], liucheng: [], liuchengNUM: [], yijian: [], but: [], tuihuiTitle: [], tuihuiTitleFlag: [] }; // 签发人：
      // 主办部门：
      // 主送单位：
      // 抄送单位：
      // 拟稿人：
      // 日期：
      // 节点名称：
      // 代办类型：
      //意见：
      //内容start
      var qfr = "";var zbbm = "";var zsdw = "";var csdw = "";var ngr = "";var rq = "";var jdmc = "";var dblx = "";var yj = "";var a = [];var b = [];var dts = elem.ownerDocument.querySelectorAll("dt");for (var i = 0; i < dts.length; i++) {
        if ("收文日期:" == dts[i].textContent) {
          a.push(dts[i]);
        }if ("主办部门:" == dts[i].textContent) {
          b.push(dts[i]);
        }
      } //日期
      var rqs = a && a[0].nextElementSibling.firstElementChild;if (null == rqs) {
        var rq = a && a[0].nextElementSibling.textContent;
      } else {
        var rq = rqs.value;
      } //主办部门
      var zbbms = b && b[0].nextElementSibling.firstElementChild;if (null == zbbms) {
        var zbbm = b && b[0].nextElementSibling.textContent;
      } else {
        var abbm = zbbms.value;
      }var comment_table = elem.ownerDocument.querySelector("#comment_table");var tbodys = comment_table && comment_table.querySelector("tbody");if (tbodys == null) {
        var jdmc = "";
      } else {
        var trs = tbodys.querySelectorAll("tr");var jdmc = trs && trs[0].querySelectorAll("td")[0].textContent;
      } // 节点名称
      var yj = elem.ownerDocument.querySelector('textarea[name="fldYijian"]').value;data.content.push(qfr, zbbm, zsdw, csdw, ngr, rq, jdmc, dblx, yj); //内容end
      var fujianDls = $(elem).find('.down_table_list').find('#down_table_list_text') && $(elem).find('.down_table_list').find('#down_table_list_text').find('dl');if (fujianDls.length != 0) {
        fujianDls.map(function (j, q) {
          var obj = {};var typePh = $(q).find('.file_name').find('a').text();var typeP = typePh.indexOf('xls') > -1 == true ? 'xls' : typePh.indexOf('ppt') > -1 == true ? 'ppt' : typePh.indexOf('exe') > -1 == true ? 'exe' : '';obj.typeP = typeP;obj.text = $(q).find('.file_name').find('a').text();obj.time = $(q).find('.file_num').find('span').text();data.fujian.push(obj);
        });
      } else {
        var obj = {};obj.typeP = '';obj.text = '暂无附件';obj.time = '';data.fujian.push(obj);
      } //附件完
      var liuchengTable = $(elem).find("#comment_table").find("tbody");if (liuchengTable.length == 0) {
        var obj = {};obj.text = '暂无流程';data.liucheng.push(obj);
      } else {
        liuchengTable.map(function (d, t) {
          if (d > 0) {
            var obj = {};obj.text = $(t).find("td").eq(0).text().replace(/\s/g, "");var str = $(t).find("td").eq(1).text();var arr = str.split(' ');obj.content = arr[1];var date = new Date();var day = date.getDay();if (day == '1') {
              day = '一';
            } else if (day == '2') {
              day = '二';
            } else if (day == '3') {
              day = '三';
            } else if (day == '4') {
              day = '四';
            } else if (day == '5') {
              day = '五';
            } else if (day == '6') {
              day = '六';
            } else if (day == '7') {
              day = '天';
            }obj.day = '星期' + day;data.liucheng.push(obj);
          }
        });var obj2 = {};obj2.num = liuchengTable.length - 2;data.liuchengNUM.push(obj2);
      } //流程完
      //常用意见start
      var list = elem.ownerDocument.querySelector("#common_view_list");var lis = list && list.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
        data.yijian.push(lis[i].querySelector("a").textContent);
      } //常用意见end
      //按钮数量（暂存、退回）start
      var release = elem.ownerDocument.querySelector(".Release");var lis = release && release.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
        if ("暂存" == lis[i].querySelector("span").textContent || "退回" == lis[i].querySelector("span").textContent) {
          data.but.push(lis[i]);
        }
      } //按钮数量（暂存、退回）end
      //退回数据start
      var loading = elem.ownerDocument.querySelector(".ui_loading");var iframe = loading && loading.nextElementSibling;var datagrid = iframe && iframe.contentDocument.querySelector(".datagrid-view2");if (datagrid != null) {
        var trs = datagrid.querySelector('table[class="datagrid-btable"]').querySelector("tbody").querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var c = [];var tds = trs[i].querySelectorAll("td");for (var j = 0; j < tds.length; j++) {
            c.push(tds[j].textContent);
          }data.tuihuiTitle.push(c);
        }for (var j = 0; j < trs.length; j++) {
          if (trs[j].className.indexOf("datagrid-row-selected") > -1) {
            data.tuihuiTitleFlag.push(true);
          } else {
            data.tuihuiTitleFlag.push(false);
          }
        }
      } //退回数据end
      return data;
    },
    doAction_uiControl7_IlizWN: function (data, elem) {
      var type = data.eventType;if (type == "textareaChange") {
        var text = data.customData;elem.ownerDocument.querySelector('textarea[name="fldYijian"]').value = text;
      }if (type == "yijian") {
        var index = parseInt(data.customData);var list = elem.ownerDocument.querySelector("#common_view_list");var lis = list && list.querySelectorAll("li");lis && lis[index].querySelector("a").click();
      }if (type == "ZC") {
        var a = [];var release = elem.ownerDocument.querySelector(".Release");var lis = release && release.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
          if ("暂存" == lis[i].querySelector("span").textContent) {
            a.push(lis[i]);
          }
        }a && a[0].querySelector("a").click();
      }if (type == "TH") {
        var a = [];var release = elem.ownerDocument.querySelector(".Release");var lis = release && release.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
          if ("退回" == lis[i].querySelector("span").textContent) {
            a.push(lis[i]);
          }
        }a && a[0].querySelector("a").click();
      }if (type == "THClose") {
        var ss = [];var ass = elem.ownerDocument.querySelector(".ui_title_buttons") && elem.ownerDocument.querySelector(".ui_title_buttons").querySelectorAll("a");for (var i = 0; i < ass.length; i++) {
          if ("关闭(esc键)" == ass[i].getAttribute("title")) {
            ss.push(ass[i]);
          }
        }ss && ss[0].click();
      }if (type == "THTitle") {
        var index = data.dataCustom;var loading = elem.ownerDocument.querySelector(".ui_loading");var iframe = loading && loading.nextElementSibling;var datagrid = iframe && iframe.contentDocument.querySelector(".datagrid-view2");if (datagrid != null) {
          var trs = datagrid.querySelector('table[class="datagrid-btable"]').querySelector("tbody").querySelectorAll("tr");trs && trs[index].click(); //     for (var i = 0; i < trs.length; i++) {
          //       trs[]
          // //       var c = [];
          // //       var tds = trs[i].querySelectorAll("td");
          // //       for (var j = 0; j < tds.length; j++) {
          // //         c.push(tds[j].textContent);
          // //       }
          // //       data.tuihuiTitle.push(c);
          //     }
        }
      }
    },
    getTemplate_uiControl7_IlizWN: function () {
      var selfTemplate = "\n\nimport {Component} from 'react';\n\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag:true,\n      flag1:false,\n      flag2:false,\n      flag3:false,\n      flag4:false\n    }\n  }\n  handlerNR(e){\n    var that = this;\n    that.setState({\n      flag:true,\n      flag1:false,\n      flag2:false,\n    })\n  }\n  handlerFJ(e){\n    var that = this;\n    that.setState({\n      flag:false,\n      flag1:true,\n      flag2:false,\n    })\n  }\n  handlerLC(e){\n    var that = this;\n    that.setState({\n      flag:false,\n      flag1:false,\n      flag2:true,\n    })\n  }\n  textareaChange(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"textareaChange\",\n        data:e.target.value\n      })\n    }\n  }\n  handlerPZ(){\n    var that = this;\n    that.setState({\n      flag3:true\n    })\n  }\n  handlerCY(){\n    var that = this;\n    that.setState({\n      flag3:false\n    })\n  }\n  handleryijian(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'yijian',\n        data:e.target.dataset.index\n      })\n    }\n    this.setState({\n      flag3:false\n    })\n  }\n  handlerZC(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'ZC'\n      })\n    }\n  }\n  handlerTH(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'TH'\n      })\n    }\n    this.setState({\n      flag4:true\n    })\n  }\n  handlerTHClose(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"THClose\"\n      })\n    }\n    this.setState({\n      flag4:false\n    })\n  }\n  handlerTHTitle(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-contentSW-thTitleFitst\" == classTitle || \"ysp-contentSW-thTitleSecond\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-contentSW-thTitle\" == classTitle){\n      dom = e.target;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"THTitle\",\n        data:dom.dataset.index\n      })\n    }\n  }\n  render(){\n    var _this=this,data=this.props.customData;\n    return(\n    \t<div>\n        <div className=\"ysp-content-header\">\n          <span className={this.state.flag == true ? \"ysp-content-header-button\" : \"\"} onClick={this.handlerNR.bind(this)}>\u5185\u5BB9</span>\n          <span className={this.state.flag1 == true ? \"ysp-content-header-button\" : \"\"} onClick={this.handlerFJ.bind(this)}>\u9644\u4EF6</span>\n          <span className={this.state.flag2 == true ? \"ysp-content-header-button\" : \"\"}onClick={this.handlerLC.bind(this)}>\u6D41\u7A0B</span>\n        </div>\n        <div className=\"ysp-content-body\">\n        \t{\n            this.state.flag == true ? \n              <div className=\"ysp-contentSW\">\n                <div>\n                  <span>\u7B7E\u53D1\u4EBA</span>\n                  <span>{data.content[0]}</span>\n                </div>\n                <div>\n                  <span>\u4E3B\u529E\u90E8\u95E8</span>\n                  <span>{data.content[1]}</span>\n                </div>\n                <div>\n                  <span>\u4E3B\u9001\u5355\u4F4D</span>\n                  <span>{data.content[2]}</span>\n                </div>\n                <div>\n                  <span>\u6284\u9001\u5355\u4F4D</span>\n                  <span>{data.content[3]}</span>\n                </div>\n                <div>\n                  <span>\u62DF\u7A3F\u4EBA</span>\n                  <span>{data.content[4]}</span>\n                </div>\n                <div>\n                  <span>\u65E5\u671F</span>\n                  <span>{data.content[5]}</span>\n                </div>\n                <div>\n                  <span>\u8282\u70B9\u540D\u79F0</span>\n                  <span>{data.content[6]}</span>\n                </div>\n                <div>\n                  <span>\u4EE3\u529E\u7C7B\u578B</span>\n                  <span>{data.content[7]}</span>\n                </div>\n                <div>\n                  <span>\u610F\u89C1</span>\n                  <span style={{\"border-bottom\": \"0px\"}}>\n                    <textarea onChange={this.textareaChange.bind(this)}\n                      value={data.content[8]}></textarea>\n                  </span>\n                </div>\n                <div>\n                  <span></span>\n                  <span className=\"ysp-contentSW-button\" onClick={this.handlerPZ.bind(this)}>\n                    \u5178\u578B\u6279\u6CE8\n                  </span>\n                </div>\n              \n              </div>\n              : this.state.flag1 == true ? \n               <div className='D_fujian'>\n              \t{data.fujian.map(function(d,l){\n                  if(d.text=='\u6682\u65E0\u9644\u4EF6') {\n                    return <div className='D_zanwuFJ'>{d.text}</div>\n                  }else {\n                    var typeP,classType\n                    if(d.typeP=='exe') {\n                      typeP='W'\n                      classType='classTypeW'\n                    }else if(d.typeP=='ppt') {\n                      typeP='P'\n                      classType='classTypeP'\n                    }else if(d.typeP=='xls') {\n                      typeP='X'\n                      classType='classTypeX'\n                    }else {\n                      classType='classTypeo'\n                    }\n                    return (<div className='D_zanwuFJT'><span className={classType}>{typeP}</span><p>\u9644\u4EF6\uFF1A{d.text}</p></div>)\n                  }\n                })}\n               </div>\n              : this.state.flag2 == true ? \n              <div className='D_LC'>\n                {data.liucheng.map(function(d,t){\n                  if(d.text=='\u6682\u65E0\u6D41\u7A0B') {\n                    return <div className='D_zanwuLC'>{d.text}</div>\n                  }else {\n                   return (<div className='D_liucheng'>\n                    <div>\n                      <span></span>\n                      <span className={data.liuchengNUM[0].num!=t?'d_xian':'abc'}></span>\n                    </div>\n                    <div>\n                      <div>{d.text}</div>\n                      <div>\n                        <p><span></span><span>{d.content}</span></p>\n                        <p><span></span><span>{d.day}</span></p>\n                      </div>\n                    </div>\n                  </div>)\n                  }\n                })}\n              </div> : \"\"\n          }\n        </div>\n        {\n          data.but.length == 2 ? \n            <div className=\"ysp-content-bottom\">\n              <span onClick={this.handlerZC.bind(this)}>\u6682\u5B58</span>\n              <span onClick={this.handlerTH.bind(this)}>\u9000\u56DE</span>\n            </div> :\n            <div>\n            \t<span>\u6682\u5B58</span>\n          \t</div>\n        }\n        \n        \n        {\n          this.state.flag3 == true ? \n            <div className=\"ysp-contentSW-yj\">\n              <div className=\"ysp-header\">\n                <div onClick={this.handlerCY.bind(this)}></div>\n                <div>\u5E38\u7528\u610F\u89C1</div>\n              </div>\n              {\n                data && data.yijian.map(function(d,i){\n                  return(\n                  \t<div data-index = {i} onClick={_this.handleryijian.bind(_this)}\n                      className=\"ysp-contentSW-yjtitle\">\n                      {d}\n                    </div>\n                  )\n                })\n              }\n            </div> : \"\"\n        }\n        \n        {\n          this.state.flag4 == true ?\n            <div className=\"ysp-contentSW-th\">\n            \t<div className=\"ysp-header\">\n                <div onClick={_this.handlerTHClose.bind(_this)}></div>\n                <div>\u9000\u56DE\u4FE1\u606F</div>\n              </div>\n              {\n                data && data.tuihuiTitle.map(function(d,i){\n                  return(\n                  \t<div className={data.tuihuiTitleFlag[i] ? \"ysp-contentSW-thTitle ysp-contentSW-thTitleColor\" : \"ysp-contentSW-thTitle\"} \n                      data-index={i} onClick={_this.handlerTHTitle.bind(_this)}>\n                      <span className=\"ysp-contentSW-thTitleFitst\">{d[0]}</span>\n                      <span className=\"ysp-contentSW-thTitleSecond\">({d[1]})</span>\n                    </div>\n                  )\n                })\n              }\n            </div> : \"\"\n        }\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: true,\n      flag1: false,\n      flag2: false,\n      flag3: false,\n      flag4: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerNR',\n    value: function handlerNR(e) {\n      var that = this;\n      that.setState({\n        flag: true,\n        flag1: false,\n        flag2: false\n      });\n    }\n  }, {\n    key: 'handlerFJ',\n    value: function handlerFJ(e) {\n      var that = this;\n      that.setState({\n        flag: false,\n        flag1: true,\n        flag2: false\n      });\n    }\n  }, {\n    key: 'handlerLC',\n    value: function handlerLC(e) {\n      var that = this;\n      that.setState({\n        flag: false,\n        flag1: false,\n        flag2: true\n      });\n    }\n  }, {\n    key: 'textareaChange',\n    value: function textareaChange(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"textareaChange\",\n          data: e.target.value\n        });\n      }\n    }\n  }, {\n    key: 'handlerPZ',\n    value: function handlerPZ() {\n      var that = this;\n      that.setState({\n        flag3: true\n      });\n    }\n  }, {\n    key: 'handlerCY',\n    value: function handlerCY() {\n      var that = this;\n      that.setState({\n        flag3: false\n      });\n    }\n  }, {\n    key: 'handleryijian',\n    value: function handleryijian(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'yijian',\n          data: e.target.dataset.index\n        });\n      }\n      this.setState({\n        flag3: false\n      });\n    }\n  }, {\n    key: 'handlerZC',\n    value: function handlerZC() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'ZC'\n        });\n      }\n    }\n  }, {\n    key: 'handlerTH',\n    value: function handlerTH() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'TH'\n        });\n      }\n      this.setState({\n        flag4: true\n      });\n    }\n  }, {\n    key: 'handlerTHClose',\n    value: function handlerTHClose() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"THClose\"\n        });\n      }\n      this.setState({\n        flag4: false\n      });\n    }\n  }, {\n    key: 'handlerTHTitle',\n    value: function handlerTHTitle(e) {\n      var classTitle = e.target.className;\n      var dom;\n      if (\"ysp-contentSW-thTitleFitst\" == classTitle || \"ysp-contentSW-thTitleSecond\" == classTitle) {\n        dom = e.target.parentElement;\n      } else if (\"ysp-contentSW-thTitle\" == classTitle) {\n        dom = e.target;\n      }\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"THTitle\",\n          data: dom.dataset.index\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this,\n          data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'ysp-content-header' },\n          React.createElement(\n            'span',\n            { className: this.state.flag == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerNR.bind(this) },\n            '\\u5185\\u5BB9'\n          ),\n          React.createElement(\n            'span',\n            { className: this.state.flag1 == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerFJ.bind(this) },\n            '\\u9644\\u4EF6'\n          ),\n          React.createElement(\n            'span',\n            { className: this.state.flag2 == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerLC.bind(this) },\n            '\\u6D41\\u7A0B'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-content-body' },\n          this.state.flag == true ? React.createElement(\n            'div',\n            { className: 'ysp-contentSW' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u7B7E\\u53D1\\u4EBA'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[0]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u4E3B\\u529E\\u90E8\\u95E8'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u4E3B\\u9001\\u5355\\u4F4D'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[2]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u6284\\u9001\\u5355\\u4F4D'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[3]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u62DF\\u7A3F\\u4EBA'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[4]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u65E5\\u671F'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[5]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u8282\\u70B9\\u540D\\u79F0'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[6]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u4EE3\\u529E\\u7C7B\\u578B'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data.content[7]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u610F\\u89C1'\n              ),\n              React.createElement(\n                'span',\n                { style: { \"border-bottom\": \"0px\" } },\n                React.createElement('textarea', { onChange: this.textareaChange.bind(this),\n                  value: data.content[8] })\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement('span', null),\n              React.createElement(\n                'span',\n                { className: 'ysp-contentSW-button', onClick: this.handlerPZ.bind(this) },\n                '\\u5178\\u578B\\u6279\\u6CE8'\n              )\n            )\n          ) : this.state.flag1 == true ? React.createElement(\n            'div',\n            { className: 'D_fujian' },\n            data.fujian.map(function (d, l) {\n              if (d.text == '\u6682\u65E0\u9644\u4EF6') {\n                return React.createElement(\n                  'div',\n                  { className: 'D_zanwuFJ' },\n                  d.text\n                );\n              } else {\n                var typeP, classType;\n                if (d.typeP == 'exe') {\n                  typeP = 'W';\n                  classType = 'classTypeW';\n                } else if (d.typeP == 'ppt') {\n                  typeP = 'P';\n                  classType = 'classTypeP';\n                } else if (d.typeP == 'xls') {\n                  typeP = 'X';\n                  classType = 'classTypeX';\n                } else {\n                  classType = 'classTypeo';\n                }\n                return React.createElement(\n                  'div',\n                  { className: 'D_zanwuFJT' },\n                  React.createElement(\n                    'span',\n                    { className: classType },\n                    typeP\n                  ),\n                  React.createElement(\n                    'p',\n                    null,\n                    '\\u9644\\u4EF6\\uFF1A',\n                    d.text\n                  )\n                );\n              }\n            })\n          ) : this.state.flag2 == true ? React.createElement(\n            'div',\n            { className: 'D_LC' },\n            data.liucheng.map(function (d, t) {\n              if (d.text == '\u6682\u65E0\u6D41\u7A0B') {\n                return React.createElement(\n                  'div',\n                  { className: 'D_zanwuLC' },\n                  d.text\n                );\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'D_liucheng' },\n                  React.createElement(\n                    'div',\n                    null,\n                    React.createElement('span', null),\n                    React.createElement('span', { className: data.liuchengNUM[0].num != t ? 'd_xian' : 'abc' })\n                  ),\n                  React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                      'div',\n                      null,\n                      d.text\n                    ),\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'p',\n                        null,\n                        React.createElement('span', null),\n                        React.createElement(\n                          'span',\n                          null,\n                          d.content\n                        )\n                      ),\n                      React.createElement(\n                        'p',\n                        null,\n                        React.createElement('span', null),\n                        React.createElement(\n                          'span',\n                          null,\n                          d.day\n                        )\n                      )\n                    )\n                  )\n                );\n              }\n            })\n          ) : \"\"\n        ),\n        data.but.length == 2 ? React.createElement(\n          'div',\n          { className: 'ysp-content-bottom' },\n          React.createElement(\n            'span',\n            { onClick: this.handlerZC.bind(this) },\n            '\\u6682\\u5B58'\n          ),\n          React.createElement(\n            'span',\n            { onClick: this.handlerTH.bind(this) },\n            '\\u9000\\u56DE'\n          )\n        ) : React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u6682\\u5B58'\n          )\n        ),\n        this.state.flag3 == true ? React.createElement(\n          'div',\n          { className: 'ysp-contentSW-yj' },\n          React.createElement(\n            'div',\n            { className: 'ysp-header' },\n            React.createElement('div', { onClick: this.handlerCY.bind(this) }),\n            React.createElement(\n              'div',\n              null,\n              '\\u5E38\\u7528\\u610F\\u89C1'\n            )\n          ),\n          data && data.yijian.map(function (d, i) {\n            return React.createElement(\n              'div',\n              { 'data-index': i, onClick: _this.handleryijian.bind(_this),\n                className: 'ysp-contentSW-yjtitle' },\n              d\n            );\n          })\n        ) : \"\",\n        this.state.flag4 == true ? React.createElement(\n          'div',\n          { className: 'ysp-contentSW-th' },\n          React.createElement(\n            'div',\n            { className: 'ysp-header' },\n            React.createElement('div', { onClick: _this.handlerTHClose.bind(_this) }),\n            React.createElement(\n              'div',\n              null,\n              '\\u9000\\u56DE\\u4FE1\\u606F'\n            )\n          ),\n          data && data.tuihuiTitle.map(function (d, i) {\n            return React.createElement(\n              'div',\n              { className: data.tuihuiTitleFlag[i] ? \"ysp-contentSW-thTitle ysp-contentSW-thTitleColor\" : \"ysp-contentSW-thTitle\",\n                'data-index': i, onClick: _this.handlerTHTitle.bind(_this) },\n              React.createElement(\n                'span',\n                { className: 'ysp-contentSW-thTitleFitst' },\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                { className: 'ysp-contentSW-thTitleSecond' },\n                '(',\n                d[1],\n                ')'\n              )\n            );\n          })\n        ) : \"\"\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "contentSW");
})(window, ysp);