(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control25_GHk9ii: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl23_gWeNVM: function (data, elem) {
      if (data.eventType == "click") {
        ysp.appMain.showLoading();elem.ownerDocument.defaultView.parent.close(); // elem.ownerDocument.defaultView.open('http://ihn.chng.com.cn:10008/webdynpro/resources/sap.com/pb/PageBuilder?PagePath=pcd%3Aportal_content%2Fcom.hnjt.HNJT%2Fcom.hnjt.XTGL%2Fcom.hnjt.Role%2FZHNJT_CLM_TY001%2FGRGZ1%2F____%2FNew_Page&sap-ext-sid=' + top.sap_sid);
      }
    },
    getTemplate_uiControl23_gWeNVM: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className = 'ysp-detail-header'>\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>{localStorage.fawuWorkFlowTitle}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-detail-header' },\n      React.createElement('div', { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        'div',\n        null,\n        localStorage.fawuWorkFlowTitle\n      )\n    );\n  }\n});";
    },
    getData_control26_ihRsKe: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl24_Cvo6nz: function (data, elem) {},
    getTemplate_uiControl24_Cvo6nz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"detail-title\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"detail-title\" },\n      data\n    );\n  }\n});";
    },
    getData_control27_p2zAUA: function (elem) {
      if (!elem) {
        return;
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaEnding: [], ideaPerson: [], button: [], huiqian: [], xiangqing: [], xiangqing1: [], xiangqingtitle: [], xiangqingtitleflag: [] // vv: [],
        // vv1: [],
        // vv2: [],
        // vv3: []
      }; //console.log(elem);
      // data.vv.push(elem.ownerDocument.querySelector('input[name="sap-wd-secure-id"]').value);
      // data.vv1.push(elem.ownerDocument.querySelector('input[name="sap-ext-sid"]').value);
      // data.vv2.push(elem.ownerDocument.querySelector('input[name="sap-wd-norefresh"]').value);
      // data.vv3.push(elem.ownerDocument.querySelector('input[name="sap-wd-cltwndid"]').value);
      var basics = elem.children; //标题标示
      // var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]') && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;
      var text = localStorage.fawuWorkFlowTitle;data.flagText.push(text);var YJ; //意见
      var AN; //提交按钮
      var SP; //审批历史
      var HQ; //建议会签部门
      var XQ; //合同详情
      if (text) {
        if (text == "合同审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.HtAllView._3"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];HQ = spanChilds && spanChilds[spanChilds.length - 6];XQ = spanChilds && spanChilds[spanChilds.length - 4];
        } else if (text == "技术文件审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.FwAllCompView._2"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];if (spanChilds) {
            if (spanChilds.length == 9) {
              HQ = spanChilds[spanChilds.length - 6];
            }
          }XQ = spanChilds && spanChilds[spanChilds.length - 4];
        }
      } /***审批意见****/var textareaValue = YJ && YJ.querySelector('textarea') && YJ.querySelector('textarea').value;data.idea.push(textareaValue);var personValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaPerson.push(personValue); //提交按钮组
      var spans = AN && AN.querySelectorAll("a");if (spans) {
        for (var k = 0; k < spans.length; k++) {
          data.button.push(spans[k].textContent);
        }
      } //审批历史
      var trs = SP && SP.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("udat")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }
            data.history.push(a);
          }
        }
      } //建议会签部门
      if (text == "合同审批") {
        var huiqian = HQ && HQ.querySelector('input');if (huiqian) {
          data.huiqian.push(huiqian.value);
        }
      } else if (text == "技术文件审批") {
        var huiqian = HQ && HQ.querySelectorAll('tr');if (huiqian) {
          for (var i = 0; i < huiqian.length; i++) {
            if (huiqian[i].getAttribute('udat')) {
              var d = { a: [], b: [], c: [] };var tds = huiqian[i].querySelectorAll("td");d.a.push(tds[1].textContent);d.b.push(tds[2].textContent);d.c.push(tds[3].textContent);data.huiqian.push(d);
            }
          }
        }
      } //////合同详情
      if (text == "合同审批") {
        var trs = XQ && XQ.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
          if (trs[i].getAttribute('class') == 'lsCLRow') {
            // if (trs[i].querySelector('table')) {
            //   continue;
            // }
            if (trs[i].querySelector('tr[class="lsCLRow"]')) {
              continue;
            }var tds = [];var aa = trs[i].querySelectorAll('td');for (var k = 0; k < aa.length; k++) {
              if (aa[k].getAttribute('sectionid')) {
                if (!aa[k].querySelector('table')) {
                  if (!aa[k].querySelector('img')) {
                    tds.push(aa[k]);
                  }if (aa[k].querySelector('img') && aa[k].querySelector('input')) {
                    tds.push(aa[k]);
                  }
                }
              }
            }for (var j = 0; j < tds.length; j++) {
              var a = [];var b = [];if (j % 2 == 0) {
                if (tds[j].querySelector('input')) {
                  if (tds[j].querySelector('input[type="checkbox"]')) {
                    b.push(tds[j].innerText.trim());
                  } else {
                    b.push(tds[j].querySelector('input').value);
                  }
                } else {
                  a.push(tds[j].innerText.trim());
                }data.xiangqing.push(a);
              }if (j % 2 == 1) {
                if (tds[j].querySelector('input')) {
                  if (tds[j].querySelector('input[type="checkbox"]')) {
                    b.push(tds[j].innerText.trim());
                  } else {
                    b.push(tds[j].innerText.trim() + '' + tds[j].querySelector('input').value);
                  }
                } else {
                  b.push(tds[j].innerText.trim());
                }data.xiangqing1.push(b);
              }
            }
          }
        } //详情tab切换
        var div = XQ && XQ.querySelector('div[id="FDOEEFPDBOMAACHH.HtAllView.TabStrip1-panel"]');var divs = div && div.querySelectorAll('div[ct="TSITM"]');for (var i = 0; i < divs.length; i++) {
          var a = [];var b = [];a.push(divs[i].innerText.trim());var flag = divs[i].querySelector('span[class="urNoUserSelect lsTbsLabel2Sel"]') ? true : false;b.push(flag);data.xiangqingtitle.push(a);data.xiangqingtitleflag.push(b);
        }
      } else if (text == '技术文件审批') {
        var tds = XQ && XQ.querySelectorAll('td');for (var i = 0; i < tds.length; i++) {
          if (tds[i].getAttribute('ct') == 'GLC') {
            if (tds[i].querySelector('table')) {
              continue;
            }var a = [];var b = [];if (i % 2 == 1) {
              a.push(tds[i].innerText.trim());data.xiangqing.push(a);
            }
            if (i % 2 == 0) {
              if (tds[i].querySelector('input')) {
                b.push(tds[i].querySelector('input').value);
              } else {
                b.push(tds[i].innerText.trim());
              }data.xiangqing1.push(b);
            }
          }
        }
      }return data;
    },
    doAction_uiControl25_TkIXbN: function (data, elem) {
      var basics = elem.children;var types = data.eventType;var name = data.customData.name;var text;if (types == "change" || types == "historyPage" || types == "clickIdea" || types == 'xiangqing') {
        text = data.customData.text;
      } else {
        text = data.customData;
      }var YJ;var AN; // 提交按钮组
      var SP;var XQ;if (text) {
        if (text == "合同审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.HtAllView._3"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];XQ = spanChilds && spanChilds[spanChilds.length - 4];
        } else if (text == "技术文件审批") {
          var bb = basics && basics[1];var spans = bb && bb.querySelector('span[id="FDOEEFPDBOMAACHH.FwAllCompView._2"]');var spanChilds = spans && spans.children;YJ = spanChilds && spanChilds[spanChilds.length - 3];AN = spanChilds && spanChilds[spanChilds.length - 2];SP = spanChilds && spanChilds[spanChilds.length - 1];
        }
      } //审批历史
      if ("history" == types) {
        ysp.appMain.showLoading();var tds = SP && SP.querySelector('td[id="FDOEEFPDBOMAACHH.HtAllView.ToolBar2-itms"]');tds && tds.querySelector("a") && tds.querySelector("a").click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1500);
      } //填写意见
      if ("change" == types) {
        var val = data.customData.value;if (YJ) {
          YJ.querySelector("textarea").value = val;
        }
      } //审批意见翻页
      if ('historyPage' == types) {
        if (name == "上翻") {
          SP && SP.querySelector('div[acf="Prev"]') && SP.querySelector('div[acf="Prev"]').click();
        } else {
          SP && SP.querySelector('div[acf="Nxt"]') && SP.querySelector('div[acf="Nxt"]').click();
        }
      } //提交按钮组
      if ('clickIdea' == types) {
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);var index = data.customData.index;var idea = data.customData.idea;var title = data.customData.title;var huiqian = data.customData.huiqian;var spans = AN && AN.querySelectorAll("a");if (title == " 退回") {
          if (idea == "") {
            alert('请填写退回意见！！');return;
          } else {
            spans && spans[index].click();
          }
        } else if (title == " 跳过会签") {
          if (idea == "") {
            alert('请填写意见！！');return;
          } else {
            spans && spans[index].click();
          }
        } else if (title == " 发起会签") {
          if (huiqian.length == 0) {
            alert('请配置"建议会签部门"');return;
          } else {
            spans && spans[index].click();
          }
        } else if (title == " 转出") {
          if (idea == "") {
            alert('请填写意见！！');return;
          } else {
            spans && spans[index].click();
          }
        } else {
          spans && spans[index].click();
        }
      } //详情tab切换
      if ('xiangqing' == types) {
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);var index = parseInt(data.dataCustom.index);var div = XQ && XQ.querySelector('div[id="FDOEEFPDBOMAACHH.HtAllView.TabStrip1-panel"]');var divs = div && div.querySelectorAll('div[ct="TSITM"]');divs && divs[index].click(); // for (var i = 0; i < divs.length; i++) {
        //   var a = [];
        //   a.push(divs[i].innerText.trim());
        //   data.xiangqingtitle.push(a);
        // }
      }
    },
    getTemplate_uiControl25_TkIXbN: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: false\n    }\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n  handlerChange(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          value:target.value,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var idea = target.dataset.idea;\n    var title = target.dataset.title;\n    var text = target.dataset.text;\n    var index = target.dataset.index;\n    var huiqian = target.dataset.huiqian;\n    target.className='ysp-deatil-idea-commit'\n    setTimeout(function(){\n      target.className = 'ysp-deatil-idea-commit-no'\n    },2000)\n    if(handler){\n      handler({\n        eventType:'clickIdea',\n        data:{\n          idea:idea,\n          title:title,\n          text:text,\n          index:index,\n          huiqian:huiqian\n        }\n      })\n    }\n  }\n  //\u70B9\u51FB\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\n  handlerHistory(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'history',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u5BA1\u6279\u5386\u53F2\u7FFB\u9875\n  handlerHistoryPage(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'historyPage',\n        data:{\n          text:e.target.dataset.text,\n          name:e.target.dataset.name\n        }\n      })\n    }\n  }\n  //\u8BE6\u60C5\u5207\u6362tab\u9875\u9762\n  handlerXiangqing(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'xiangqing',\n        data:{\n          index:target.dataset.index,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  //\u5BA1\u6279\u610F\u89C1\n  yijianFor(data,data1,data2,data3,data4,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-idea\">\n        <div>{title}</div>\n        <div>\n          <ATextarea value = {data} data-text = {data2} onChange={_this.handlerChange.bind(_this)}></ATextarea>\n        </div>\n        <div>\n          <div className=\"ysp-deatil-idea-end\">\n            <div>\n              <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n              <span>{data1}</span>\n            </div>\n          </div>\n          {\n\t\t\t\t\t\tdata3 && data3.map(function(d,i){\n              return(\n              \t<div data-idea = {data} data-text = {data2} data-huiqian = {data4} data-title = {d} data-index = {i} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit-no\">{d}</div>\n              )\n            })\n          }\n        </div>\n      </div>\n    )\n  }\n  //\u5BA1\u6279\u5386\u53F2\n  historyFor(data,data1,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-history\">\n        <div>{title}</div>\n        {\n          data1 == \"\u6280\u672F\u6587\u4EF6\u5BA1\u6279\" ? <div></div> : <div className=\"ysp-deatil-history-button\"onClick={_this.handlerHistory.bind(_this)} data-text = {data1}>\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\u6570\u636E</div>\n        }\n        \n        <div>\n        \t{\n            data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div> : \t\t\t\t\t\t\t\t<div className=\"ysp-detail-history-contents\">\n              {\n                data.map(function(d,i){\n                  return(\n                    <div className=\"ysp-detail-history-content\">\n                      <div>\n                        <span>{d[0]}</span>\n                        <span>{d[1]}</span>\n                      </div>\n                      {\n                        d[2] == \"\xA0\" && d[3] == \"\xA0\" ? <div></div> : <div>\n                          <span>{d[2]}</span>\n                          <span>{d[3]}</span>\n                        </div>\n                      }\n                      {\n                        d[4] == \"\xA0\" && d[5] == \"\xA0\" ? <div></div> : <div>\n                          <span>{d[4]}</span>\n                          <span>{d[5]}</span>\n                        </div>\n                      }\n                      {\n                        d[6] == \"\xA0\" ? <div></div> : <div>\n                          <span>{d[6]}</span>\n                        </div>\n                      }\n                    </div>\n                  )\n                })\n              }\n            </div>\n          }\n          {\n            data.length == 0 ? '' : <div className=\"ysp-detail-history-content-page\">\n              <span onClick={_this.handlerHistoryPage.bind(_this)} data-text = {data1} data-name=\"\u4E0A\u7FFB\">\u4E0A\u7FFB\u9875</span>\n              <span onClick={_this.handlerHistoryPage.bind(_this)} data-text = {data1} data-name=\"\u4E0B\u7FFB\">\u4E0B\u7FFB\u9875</span>\n            </div>\n          }\n        </div>\n      </div>\n    )\n  }\n  \n  //\u4F1A\u7B7E\u90E8\u95E8\n  huiqianFor(data,data1,data2){\n    return(\n    \t<div>\n        {\n          data1 == \"\u5408\u540C\u5BA1\u6279\" ? \n            <div className=\"ysp-huiqian-hetong\">\n            \t<span>{data2}</span>\n              <span>\n                <input value = {data} readonly='true'/>\n              </span>\n            </div>\n             : data1 == \"\u6280\u672F\u6587\u4EF6\u5BA1\u6279\" ? \n            <div className=\"ysp-huiqian-jishu\">\n              {\n                data.length >0 ? <div>{data2}</div> : ''\n              }\n              \n              {\n                data.map(function(d,i){\n                  return(\n                  \t<div className=\"ysp-huiqian-jishu-bumen\">\n                      <div>\n                      \t<span>{d.a}</span>\n                      \t<span>{d.c}</span>\n                      </div>\n                      <div>\n                      \t<span>{d.b}</span>\n                      </div>\n                    </div>\n                  )\n                })\n              }\n            </div> : ''\n        }\n        \n      </div>\n    )\n  }\n  //\u8BE6\u60C5\u4FE1\u606F\n  xiangqingFor(data,data1,data2,data3,data4,data5){\n    var _this = this;\n    return(\n    \t<div>\n      \t{\n          data4 == \"\u5408\u540C\u5BA1\u6279\" ? <div>\n              <div className=\"ysp-xiangqing-tab-all\">\n                {\n                  data2.map(function(d,i){\n                    return(\n                      <span onClick={_this.handlerXiangqing.bind(_this)} data-index={i}\n                        data-text = {data4} className={data3[i][0] ? 'ysp-xiangqing-tab' : 'ysp-xiangqing-tabs'}>{d}</span>\n                    )\n                  })\n                }\n                \n              </div>\n              <div className=\"ysp-xiangqing-all\">\n            \t{\n                data.map(function(d,i){\n                  return(\n                  \t<div className=\"ysp-xiangqing\">\n                      <span>\n                        {d}\n                      </span>\n                      <span>\n                        {data1[i]}\n                      </span>\n                      \n                    </div>\n                  )\n                })\n              }\n            \t</div>\n            </div> : data4 == '\u6280\u672F\u6587\u4EF6\u5BA1\u6279' ? \n            <div>\n              <div className=\"ysp-xiangqing-table-title\">\u6280\u672F\u6587\u4EF6\u5BA1\u6279\u5355</div>\n            \t<div className=\"ysp-xiangqing-all\">\n            \t{\n                data.map(function(d,i){\n                  return(\n                  \t<div className=\"ysp-xiangqing\">\n                      <span>\n                        {d}\n                      </span>\n                      <span>\n                        {data1[i]}\n                      </span>\n                      \n                    </div>\n                  )\n                })\n              }\n            \t</div>\n            </div> : ''\n        }\n      </div>\n    )\n  }\n  \n  render(){\n    var _this = this;\n    if(_this.props.customData){\n      var FlagText = localStorage.fawuWorkFlowTitle;\n      var Basic = this.props.customData && this.props.customData.bas;\n      var History = this.props.customData && this.props.customData.history;\n      var Idea = this.props.customData && this.props.customData.idea; \n      var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n      var Buttons = this.props.customData && this.props.customData.button;\n      var Huiqian = this.props.customData && this.props.customData.huiqian;\n      var XiangQing = this.props.customData && this.props.customData.xiangqing;\n      var XiangQing1 = this.props.customData && this.props.customData.xiangqing1;\n      var XiangQingTitle = this.props.customData && this.props.customData.xiangqingtitle;\n      var XiangQingTitleFlag = this.props.customData && this.props.customData.xiangqingtitleflag;\n      return (\n        <div>\n          {\n            (localStorage.fawuWorkFlowTitle).indexOf('\u5BA1\u6279') >-1 ? <div>\n              \t{\n                  FlagText == \"\u5408\u540C\u5BA1\u6279\" || FlagText == '\u6280\u672F\u6587\u4EF6\u5BA1\u6279' ? <div>\n                    {this.huiqianFor(Huiqian,FlagText,'\u4F1A\u7B7E\u90E8\u95E8\uFF1A')}  \n                    {this.xiangqingFor(XiangQing,XiangQing1,XiangQingTitle,XiangQingTitleFlag,FlagText,'\u8BE6\u60C5')}  \n                    {this.yijianFor(Idea,IdeaPerson,FlagText,Buttons,Huiqian,'\u5BA1\u6279\u610F\u89C1')}\n                    {this.historyFor(History,FlagText,\"\u5BA1\u6279\u5386\u53F2\")}\n                    </div> : <div style ={{'color':'red',\"text-align\":'center'}}>\n                  \t\t\u6B64\u5BA1\u6279\u7C7B\u578B\u6B63\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01\uFF01\n                  \t</div>\n                }\n              </div> : <div style={{'color':'red','text-align':'center'}}>\u56E0\u8BE5\u6D41\u7A0B\u4E0D\u662F\u5BA1\u6279\u7C7B\u578B\uFF0C\u6545\u8BF7\u60A8\u4ECEPC\u7AEF\u529E\u7406\uFF01\uFF01</div>\n          }\n          \n          \n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}>\n        </div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: false\n    };\n    return _this2;\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'change',\n          data: {\n            value: target.value,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      var idea = target.dataset.idea;\n      var title = target.dataset.title;\n      var text = target.dataset.text;\n      var index = target.dataset.index;\n      var huiqian = target.dataset.huiqian;\n      target.className = 'ysp-deatil-idea-commit';\n      setTimeout(function () {\n        target.className = 'ysp-deatil-idea-commit-no';\n      }, 2000);\n      if (handler) {\n        handler({\n          eventType: 'clickIdea',\n          data: {\n            idea: idea,\n            title: title,\n            text: text,\n            index: index,\n            huiqian: huiqian\n          }\n        });\n      }\n    }\n    //\u70B9\u51FB\u83B7\u53D6\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'handlerHistory',\n    value: function handlerHistory(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'history',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u5BA1\u6279\u5386\u53F2\u7FFB\u9875\n\n  }, {\n    key: 'handlerHistoryPage',\n    value: function handlerHistoryPage(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'historyPage',\n          data: {\n            text: e.target.dataset.text,\n            name: e.target.dataset.name\n          }\n        });\n      }\n    }\n    //\u8BE6\u60C5\u5207\u6362tab\u9875\u9762\n\n  }, {\n    key: 'handlerXiangqing',\n    value: function handlerXiangqing(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: 'xiangqing',\n          data: {\n            index: target.dataset.index,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n    //\u5BA1\u6279\u610F\u89C1\n\n  }, {\n    key: 'yijianFor',\n    value: function yijianFor(data, data1, data2, data3, data4, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-idea' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(ATextarea, { value: data, 'data-text': data2, onChange: _this.handlerChange.bind(_this) })\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-idea-end' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data1\n              )\n            )\n          ),\n          data3 && data3.map(function (d, i) {\n            return React.createElement(\n              'div',\n              { 'data-idea': data, 'data-text': data2, 'data-huiqian': data4, 'data-title': d, 'data-index': i, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit-no' },\n              d\n            );\n          })\n        )\n      );\n    }\n    //\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'historyFor',\n    value: function historyFor(data, data1, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-history' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        data1 == \"\u6280\u672F\u6587\u4EF6\u5BA1\u6279\" ? React.createElement('div', null) : React.createElement(\n          'div',\n          { className: 'ysp-deatil-history-button', onClick: _this.handlerHistory.bind(_this), 'data-text': data1 },\n          '\\u83B7\\u53D6\\u5BA1\\u6279\\u5386\\u53F2\\u6570\\u636E'\n        ),\n        React.createElement(\n          'div',\n          null,\n          data.length == 0 ? React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n          ) : React.createElement(\n            'div',\n            { className: 'ysp-detail-history-contents' },\n            data.map(function (d, i) {\n              return React.createElement(\n                'div',\n                { className: 'ysp-detail-history-content' },\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[0]\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d[1]\n                  )\n                ),\n                d[2] == \"\xA0\" && d[3] == \"\xA0\" ? React.createElement('div', null) : React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[2]\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d[3]\n                  )\n                ),\n                d[4] == \"\xA0\" && d[5] == \"\xA0\" ? React.createElement('div', null) : React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[4]\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d[5]\n                  )\n                ),\n                d[6] == \"\xA0\" ? React.createElement('div', null) : React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    d[6]\n                  )\n                )\n              );\n            })\n          ),\n          data.length == 0 ? '' : React.createElement(\n            'div',\n            { className: 'ysp-detail-history-content-page' },\n            React.createElement(\n              'span',\n              { onClick: _this.handlerHistoryPage.bind(_this), 'data-text': data1, 'data-name': '\\u4E0A\\u7FFB' },\n              '\\u4E0A\\u7FFB\\u9875'\n            ),\n            React.createElement(\n              'span',\n              { onClick: _this.handlerHistoryPage.bind(_this), 'data-text': data1, 'data-name': '\\u4E0B\\u7FFB' },\n              '\\u4E0B\\u7FFB\\u9875'\n            )\n          )\n        )\n      );\n    }\n\n    //\u4F1A\u7B7E\u90E8\u95E8\n\n  }, {\n    key: 'huiqianFor',\n    value: function huiqianFor(data, data1, data2) {\n      return React.createElement(\n        'div',\n        null,\n        data1 == \"\u5408\u540C\u5BA1\u6279\" ? React.createElement(\n          'div',\n          { className: 'ysp-huiqian-hetong' },\n          React.createElement(\n            'span',\n            null,\n            data2\n          ),\n          React.createElement(\n            'span',\n            null,\n            React.createElement('input', { value: data, readonly: 'true' })\n          )\n        ) : data1 == \"\u6280\u672F\u6587\u4EF6\u5BA1\u6279\" ? React.createElement(\n          'div',\n          { className: 'ysp-huiqian-jishu' },\n          data.length > 0 ? React.createElement(\n            'div',\n            null,\n            data2\n          ) : '',\n          data.map(function (d, i) {\n            return React.createElement(\n              'div',\n              { className: 'ysp-huiqian-jishu-bumen' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  d.a\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d.c\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  d.b\n                )\n              )\n            );\n          })\n        ) : ''\n      );\n    }\n    //\u8BE6\u60C5\u4FE1\u606F\n\n  }, {\n    key: 'xiangqingFor',\n    value: function xiangqingFor(data, data1, data2, data3, data4, data5) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        data4 == \"\u5408\u540C\u5BA1\u6279\" ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-xiangqing-tab-all' },\n            data2.map(function (d, i) {\n              return React.createElement(\n                'span',\n                { onClick: _this.handlerXiangqing.bind(_this), 'data-index': i,\n                  'data-text': data4, className: data3[i][0] ? 'ysp-xiangqing-tab' : 'ysp-xiangqing-tabs' },\n                d\n              );\n            })\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-xiangqing-all' },\n            data.map(function (d, i) {\n              return React.createElement(\n                'div',\n                { className: 'ysp-xiangqing' },\n                React.createElement(\n                  'span',\n                  null,\n                  d\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data1[i]\n                )\n              );\n            })\n          )\n        ) : data4 == '\u6280\u672F\u6587\u4EF6\u5BA1\u6279' ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-xiangqing-table-title' },\n            '\\u6280\\u672F\\u6587\\u4EF6\\u5BA1\\u6279\\u5355'\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-xiangqing-all' },\n            data.map(function (d, i) {\n              return React.createElement(\n                'div',\n                { className: 'ysp-xiangqing' },\n                React.createElement(\n                  'span',\n                  null,\n                  d\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data1[i]\n                )\n              );\n            })\n          )\n        ) : ''\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var FlagText = localStorage.fawuWorkFlowTitle;\n        var Basic = this.props.customData && this.props.customData.bas;\n        var History = this.props.customData && this.props.customData.history;\n        var Idea = this.props.customData && this.props.customData.idea;\n        var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n        var Buttons = this.props.customData && this.props.customData.button;\n        var Huiqian = this.props.customData && this.props.customData.huiqian;\n        var XiangQing = this.props.customData && this.props.customData.xiangqing;\n        var XiangQing1 = this.props.customData && this.props.customData.xiangqing1;\n        var XiangQingTitle = this.props.customData && this.props.customData.xiangqingtitle;\n        var XiangQingTitleFlag = this.props.customData && this.props.customData.xiangqingtitleflag;\n        return React.createElement(\n          'div',\n          null,\n          localStorage.fawuWorkFlowTitle.indexOf('\u5BA1\u6279') > -1 ? React.createElement(\n            'div',\n            null,\n            FlagText == \"\u5408\u540C\u5BA1\u6279\" || FlagText == '\u6280\u672F\u6587\u4EF6\u5BA1\u6279' ? React.createElement(\n              'div',\n              null,\n              this.huiqianFor(Huiqian, FlagText, '\u4F1A\u7B7E\u90E8\u95E8\uFF1A'),\n              this.xiangqingFor(XiangQing, XiangQing1, XiangQingTitle, XiangQingTitleFlag, FlagText, '\u8BE6\u60C5'),\n              this.yijianFor(Idea, IdeaPerson, FlagText, Buttons, Huiqian, '\u5BA1\u6279\u610F\u89C1'),\n              this.historyFor(History, FlagText, \"\u5BA1\u6279\u5386\u53F2\")\n            ) : React.createElement(\n              'div',\n              { style: { 'color': 'red', \"text-align\": 'center' } },\n              '\\u6B64\\u5BA1\\u6279\\u7C7B\\u578B\\u6B63\\u5728\\u5EFA\\u8BBE\\u4E2D\\uFF0C\\u656C\\u8BF7\\u671F\\u5F85\\uFF01\\uFF01'\n            )\n          ) : React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u56E0\\u8BE5\\u6D41\\u7A0B\\u4E0D\\u662F\\u5BA1\\u6279\\u7C7B\\u578B\\uFF0C\\u6545\\u8BF7\\u60A8\\u4ECEPC\\u7AEF\\u529E\\u7406\\uFF01\\uFF01'\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "testDetails");
})(window, ysp);