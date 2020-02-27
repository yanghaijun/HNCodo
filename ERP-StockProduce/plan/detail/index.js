(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control10_NoUEPy: function (elem) {
      if (!elem) {
        return false;
      } //基本信息
      return elem.querySelector('#FDOEEFPDBOMAACHH\\.FundsView\\.BUKRS').value;
    },
    doAction_uiControl6_fUHWwq: function (data, elem) {},
    getTemplate_uiControl6_fUHWwq: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
    },

    getData_control8_81xko5: function (elem) {
      if (!elem) {
        return;
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaPerson: [] }; //console.log(elem);
      var basics = elem.children; //标题标示
      var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]') && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;data.flagText.push(text);if (localStorage.workflows == "信息项目结转") {
        /***审批意见****/var textareaValue = basics[2] && basics[2].querySelector('textarea') && basics[2].querySelector('textarea').value;data.idea.push(textareaValue);var personValue = basics[2] && basics[2].querySelectorAll('input')[0] && basics[2].querySelectorAll('input')[0].value;data.ideaPerson.push(personValue); //审批历史
        var trs = basics[3] && basics[3].querySelectorAll("tr");if (trs) {
          for (var i = 0; i < trs.length; i++) {
            var a = [];if (trs[i].getAttribute("userdata")) {
              var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
                a.push(tds[j].textContent);
              }data.history.push(a);
            }
          }
        }
      } // if (text && text == "其它费用结算") {
      //   /****基本信息****/var a = basics[1].querySelectorAll("span.urLinStd")[2].textContent;
      //   data.bas.push(a); //////附件管理
      //   var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   var trs = FJ && FJ.querySelectorAll("tr");
      //   for (var i = 0; i < trs.length; i++) {
      //     var b = [];
      //     if (trs[i].getAttribute("userdata")) {
      //       var tds = trs[i].querySelectorAll("td");
      //       for (var j = 1; j < tds.length; j++) {
      //         b.push(tds[j].textContent);
      //       }
      //       data.fujianContent.push(b);
      //     }
      //   } //附件所选文件
      //   var files = FJ && FJ.querySelector("input[type='file']");
      //   var values = files && files.value;
      //   if (values) {
      //     var strArr = values && values.split("\\");
      //     data.fujianFile.push(strArr[strArr.length - 1]);
      //   } //判断附件是否可以上传
      //   var ass = FJ && FJ.querySelectorAll("a");
      //   var a = [];
      //   for (var i = 0; i < ass.length; i++) {
      //     if (ass[i].textContent == "添加 ") {
      //       a.push(ass[i]);
      //     }
      //   }
      //   if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
      //     data.fujianFlag.push(true);
      //   } else {
      //     data.fujianFlag.push(false);
      //   } /***审批意见****/
      //   var textareaValue = basics[2] && basics[2].querySelector('textarea') && basics[2].querySelector('textarea').value;
      //   data.idea.push(textareaValue);
      //   var inputValue = basics[2] && basics[2].querySelectorAll('input')[0] && basics[2].querySelectorAll('input')[0].value;
      //   data.ideaEnding.push(inputValue);
      //   var personValue = basics[2] && basics[2].querySelectorAll('input')[2] && basics[2].querySelectorAll('input')[2].value;
      //   data.ideaPerson.push(personValue);
      //   var trs = basics[3] && basics[3].querySelectorAll("tr");
      //   if (trs) {
      //     for (var i = 0; i < trs.length; i++) {
      //       var a = [];
      //       if (trs[i].getAttribute("userdata")) {
      //         var tds = trs[i].querySelectorAll("td");
      //         for (var j = 1; j < tds.length; j++) {
      //           a.push(tds[j].textContent);
      //         }
      //         data.history.push(a);
      //       }
      //     }
      //   }
      // } else if (text && text == "燃料付款申请单") {
      //   //////附件管理
      //   var FJ = basics[3] && basics[3].children[0].lastElementChild.lastElementChild;
      //   var trs = FJ && FJ.querySelectorAll("tr");
      //   for (var i = 0; i < trs.length; i++) {
      //     var b = [];
      //     if (trs[i].getAttribute("userdata")) {
      //       var tds = trs[i].querySelectorAll("td");
      //       for (var j = 1; j < tds.length; j++) {
      //         b.push(tds[j].textContent);
      //       }
      //       data.fujianContent.push(b);
      //     }
      //   } //附件所选文件
      //   var files = FJ && FJ.querySelector("input[type='file']");
      //   var values = files && files.value;
      //   if (values) {
      //     var strArr = values && values.split("\\");
      //     data.fujianFile.push(strArr[strArr.length - 1]);
      //   } //判断附件是否可以上传
      //   var ass = FJ && FJ.querySelectorAll("a");
      //   var a = [];
      //   for (var i = 0; i < ass.length; i++) {
      //     if (ass[i].textContent == "添加 ") {
      //       a.push(ass[i]);
      //     }
      //   }
      //   if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
      //     data.fujianFlag.push(true);
      //   } else {
      //     data.fujianFlag.push(false);
      //   } /***审批意见****/
      //   var textareaValue = basics[4] && basics[4].querySelector('textarea') && basics[4].querySelector('textarea').value;
      //   data.idea.push(textareaValue);
      //   var inputValue = basics[4] && basics[4].querySelectorAll('input')[0] && basics[4].querySelectorAll('input')[0].value;
      //   data.ideaEnding.push(inputValue);
      //   var personValue = basics[4] && basics[4].querySelectorAll('input')[2] && basics[4].querySelectorAll('input')[2].value;
      //   data.ideaPerson.push(personValue); //审批历史
      //   var trs = basics[5] && basics[5].querySelectorAll("tr");
      //   if (trs) {
      //     for (var i = 0; i < trs.length; i++) {
      //       var a = [];
      //       if (trs[i].getAttribute("userdata")) {
      //         var tds = trs[i].querySelectorAll("td");
      //         for (var j = 1; j < tds.length; j++) {
      //           a.push(tds[j].textContent);
      //         }
      //         data.history.push(a);
      //       }
      //     }
      //   }
      // } else if (text && text == "煤炭合同") {
      //   /***审批意见****/var textareaValue = basics[4] && basics[4].querySelector('textarea') && basics[4].querySelector('textarea').value;
      //   data.idea.push(textareaValue);
      //   var inputValue = basics[4] && basics[4].querySelectorAll('input')[0] && basics[4].querySelectorAll('input')[0].value;
      //   data.ideaEnding.push(inputValue);
      //   var personValue = basics[4] && basics[4].querySelectorAll('input')[2] && basics[4].querySelectorAll('input')[2].value;
      //   data.ideaPerson.push(personValue); //审批历史
      //   var trs = basics[5] && basics[5].querySelectorAll("tr");
      //   for (var i = 0; i < trs.length; i++) {

      //     var a = [];
      //     if (trs[i].getAttribute("userdata")) {
      //       var tds = trs[i].querySelectorAll("td");
      //       for (var j = 1; j < tds.length; j++) {
      //         a.push(tds[j].textContent);
      //       }
      //       data.history.push(a);
      //     }
      //   }
      // } else if (text && (text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤临购计划")) {
      //   //////附件管理
      //   //var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   if (text == "燃煤临购计划") {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
      //   } else {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
      //   }
      //   var trs = FJ && FJ.querySelectorAll("tr");
      //   if (trs) {
      //     for (var i = 0; i < trs.length; i++) {
      //       var b = [];
      //       if (trs[i].getAttribute("userdata")) {
      //         var tds = trs[i].querySelectorAll("td");
      //         for (var j = 1; j < tds.length; j++) {
      //           b.push(tds[j].textContent);
      //         }
      //         data.fujianContent.push(b);
      //       }
      //     }
      //   } //附件所选文件
      //   var files = FJ && FJ.querySelector("input[type='file']");
      //   var values = files && files.value;
      //   if (values) {
      //     var strArr = values && values.split("\\");
      //     data.fujianFile.push(strArr[strArr.length - 1]);
      //   } //判断附件是否可以上传
      //   var ass = FJ && FJ.querySelectorAll("a");
      //   var a = [];
      //   for (var i = 0; i < ass.length; i++) {
      //     if (ass[i].textContent == "添加 ") {
      //       a.push(ass[i]);
      //     }
      //   }
      //   if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
      //     data.fujianFlag.push(true);
      //   } else {
      //     data.fujianFlag.push(false);
      //   } /***审批意见****/
      //   var textareaValue = basics[2] && basics[2].querySelector('textarea') && basics[2].querySelector('textarea').value;
      //   data.idea.push(textareaValue);
      //   var inputValue = basics[2] && basics[2].querySelectorAll('input')[0] && basics[2].querySelectorAll('input')[0].value;
      //   data.ideaEnding.push(inputValue);
      //   var personValue = basics[2] && basics[2].querySelectorAll('input')[2] && basics[2].querySelectorAll('input')[2].value;
      //   data.ideaPerson.push(personValue);
      //   var trs = basics[3] && basics[3].querySelectorAll("tr");
      //   if (trs) {
      //     for (var i = 0; i < trs.length; i++) {
      //       var a = [];
      //       if (trs[i].getAttribute("userdata")) {
      //         var tds = trs[i].querySelectorAll("td");
      //         for (var j = 1; j < tds.length; j++) {
      //           a.push(tds[j].textContent);
      //         }
      //         data.history.push(a);
      //       }
      //     }
      //   }
      // }
      return data;
    },
    doAction_uiControl5_Qqv3JO: function (data, elem) {
      //意见填写
      if (data.eventType == 'change') {
        var val = data.customData.value;var text = data.customData.text;var basics = elem.children;if (text == '信息项目结转') {
          if (basics[2]) {
            basics[2].querySelector('textarea').value = val;
          }
        }
      } //意见提交
      if (data.eventType == 'clickIdea') {
        ysp.appMain.showLoading();debugger;var text = data.customData.text;var name = data.customData.name;var basics = elem.children;if (text == "信息项目结转") {
          if (name == "提交") {
            if (basics[2]) {
              var spans = basics[2].querySelector('span[id="FDOEEFPDBOMAACHH.XMJZCompView.ToolBarButton1-r"]'); //spans && spans.querySelector("a").click();
            }alert('提交成功');
          }if (name == "驳回") {
            if (basics[2]) {
              var spans = basics[2].querySelector('span[id="FDOEEFPDBOMAACHH.XMJZCompView.ToolBarButton3-r"]'); //spans && spans.querySelector("a").click();
            }alert('驳回成功');
          }if (name == "流程作废") {
            if (basics[2]) {
              var spans = basics[2].querySelector('span[id="FDOEEFPDBOMAACHH.XMJZCompView.ToolBarButton2-r"]'); //spans && spans.querySelector("a").click();
            }alert('流程作废成功');
          }
        }setTimeout(function () {
          ysp.appMain.hideLoading();ysp.appMain.back();
        }, 5000);
      } //附件删除
      // if (data.eventType == 'fujianDelete') {
      //   ysp.appMain.showLoading();
      //   var index = parseInt(data.customData.index);
      //   var text = data.customData.text;
      //   var basics = elem.children;
      //     var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   } else if (text == "燃料付款申请单") {
      //     var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   } else if (text == "燃煤结算" || text == '燃料合同作废申请') {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
      //   } else if (text == "燃煤临购计划") {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
      //   }
      //   var trs = FJ && FJ.querySelectorAll("tr");
      //   var b = [];
      //   for (var i = 0; i < trs.length; i++) {
      //     if (trs[i].getAttribute("userdata")) {
      //       b.push(trs[i]);
      //     }
      //   }
      //   var c = [];
      //   var text = b && b[index].querySelectorAll("td");
      //   for (var j = 0; j < text.length; j++) {
      //     if (text[j].textContent == '删除') {
      //       c.push(text[j]);
      //     }
      //   }
      //   c && c[0].querySelector("a").click();
      //   setTimeout(function () {
      //     ysp.appMain.hideLoading();
      //   }, 2000);
      // } //附件查看
      // if (data.eventType == 'fujianLook') {
      //   alert("look");
      // } //附件添加
      // if (data.eventType == "fujianAdd") {
      //   ysp.appMain.showLoading();
      //   var text = data.customData;
      //   var basics = elem.children;
      //   if (text == "其它费用结算") {
      //     var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   } else if (text == "燃料付款申请单") {
      //     var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   } else if (text == "燃煤结算" || text == '燃料合同作废申请') {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
      //   } else if (text == "燃煤临购计划") {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
      //   }
      //   var ass = FJ && FJ.querySelectorAll("a");
      //   var a = [];
      //   for (var i = 0; i < ass.length; i++) {
      //     if (ass[i].textContent == "添加 ") {
      //     }
      //   }
      //   a && a[0].click();
      //   setTimeout(function () {
      //     $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
      //       if (~$(this).text().indexOf('添加文件')) {
      //         var evt = target.ownerDocument.createEvent('MouseEvents');
      //         evt.initMouseEvent("mousemove", true, true);
      //         target.dispatchEvent(evt);
      //         target.click();
      //       }
      //     });
      //   }, 2000);
      //   setTimeout(function () {
      //     ysp.appMain.hideLoading();
      //   }, 4000);
      // } //选择文件
      // if (data.eventType == "fujianFile") {
      //   var text = data.customData;
      //   var basics = elem.children;
      //   if (text == '其它费用结算') {
      //     var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   } else if (text == "燃料付款申请单") {
      //     var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   } else if (text == "燃煤结算" || text == '燃料合同作废申请') {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
      //   } else if (text == "燃煤临购计划") {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
      //   }
      //   var files = FJ && FJ.querySelector("input[type='file']");
      //   files && files.click();
      // } //附件提交
      //   ysp.appMain.showLoading();
      //   var text = data.customData;
      //   var basics = elem.children;
      //   if (text == '其它费用结算') {
      //   } else if (text == "") {
      //     var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
      //   } else if (text == "燃煤结算" || text == '燃料合同作废申请') {
      //   } else if (text == "燃煤临购计划") {
      //     var FJ = basics[1] && basics[1].querySelector('[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
      //   }
      //   var ass = FJ && FJ.querySelectorAll("a");
      //   var a = [];
      //   for (var i = 0; i < ass.length; i++) {
      //     if (ass[i].textContent == "确认") {
      //       a.push(ass[i]);
      //     }
      //   }
      //   a && a[0].click();
      //   setTimeout(function () {
      //     ysp.appMain.hideLoading();
      //   }, 3000);
      // }
      // if (data.eventType == 'select') {
      //   var index = data.customData.value;
      //   var basics = elem.children;
      //   var keyIdOk;
      //   var keyIdNOk;
      //     if (basics[4]) {
      //       basics[4].querySelectorAll('input')[0].click();
      //     }
      //     keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmcght_wd.Result-key-0"]');
      //     keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmcght_wd.Result-key-1"]');
      //   }
      //   if (text == "其它费用结算") {
      //     if (basics[2]) {
      //       basics[2].querySelectorAll('input')[0].click();
      //     }
      //     keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-0"]');
      //     keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-1"]');
      //   }
      //   if (text == "燃料付款申请单") {
      //     if (basics[4]) {
      //       basics[4].querySelectorAll('input')[0].click();
      //     }

      //     keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-0"]');
      //     keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-1"]');
      //   }
      //   if (text == "燃煤结算") {
      //     if (basics[2]) {

      //       basics[2].querySelectorAll('input')[0].click();
      //     }
      //     keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmjs2_wd.Result-key-0"]');
      //     keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmjs2_wd.Result-key-1"]');
      //   }
      //   if (text == "燃料合同作废申请") {
      //     if (basics[2]) {
      //       basics[2].querySelectorAll('input')[0].click();
      //     }
      //     keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_2566_-key-0"]');
      //     keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_2566_-key-1"]');
      //   }
      //   if (text == "燃煤临购计划") {
      //     if (basics[2]) {
      //       basics[2].querySelectorAll('input')[0].click();
      //     }
      //     keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_3263_-key-1"]');
      //     keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_3263_-key-0"]');
      //   }
      //   if (index == "1") {

      //     setTimeout(function () {
      //       keyIdOk.each(function () {
      //         if (~$(this).text().indexOf('同意')) {
      //           var target = $(this)[0];
      //           var evt = target.ownerDocument.createEvent('MouseEvents');
      //           evt.initMouseEvent("mousemove", true, true);
      //           target.dispatchEvent(evt);
      //           target.click();
      //         }
      //       });
      //     }, 2000);
      //   } else if (index == "2") {
      //     setTimeout(function () {
      //         if (~$(this).text().indexOf('不同意')) {
      //           var target = $(this)[0];
      //           var evt = target.ownerDocument.createEvent('MouseEvents');
      //           evt.initMouseEvent("mousemove", true, true);
      //           target.dispatchEvent(evt);
      //           target.click();
      //         }
      //       });
      //     }, 2000);
      //   }
      // }
    },
    getTemplate_uiControl5_Qqv3JO: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: false\n    }\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n  handlerChange(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          value:target.value,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickIdea',\n        data:{\n          text:e.target.dataset.text,\n          name:e.target.dataset.name\n        }\n      })\n    }\n  }\n  \n  //\u5220\u9664\u9644\u4EF6\n  handlerFujianDelete(e){\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianDelete',\n        data:{\n          index:target.dataset.index,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u67E5\u770B\n  handlerFujianLook(){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianLook'\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u6DFB\u52A0\n  handlerFujianAdd(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianAdd',\n        data:e.target.dataset.text\n      })\n    }\n    _this.setState({\n      flag: true\n    })\n  }\n  \n  //\u9009\u62E9\u6587\u4EF6\n  handlerFujianFile(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianFile',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u9644\u4EF6\u63D0\u4EA4\n  handlerFujianCommit(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianCommit',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  \n  //\u5BA1\u6279\u7ED3\u679C\n  handlerSelect(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'select',\n        data:{\n          value:e.target.value,\n          text:e.target.dataset.text\n        }\n      })\n    }\n  }\n  \n  \n  //\u57FA\u672C\u4FE1\u606F\n  listFor(data,title){\n    var _this = this;\n    return (\n    \t<div>\n      \t<div>{title}</div>\n        <div>{data}</div>\n      </div>\n    )\n  }\n  \n  \n  //\u9644\u4EF6\u7BA1\u7406\n  fujianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-fujian\">\n        <div>\u9644\u4EF6\u7BA1\u7406</div>\n        {\n          data2 && data2[0] ? <div className=\"ysp-deatil-fujian-add\" data-text = {data3} onClick={_this.handlerFujianAdd.bind(_this)}>\u70B9\u51FB\u6DFB\u52A0\u9644\u4EF6</div> : \"\"\n        }\n        \n        {\n          _this.state.flag ? <div>\n            \t<div className=\"ysp-deatil-fujian-file\" data-text = {data3} onClick={_this.handlerFujianFile.bind(_this)}>\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n              <div>\u5F53\u524D\u6240\u9009\u6587\u4EF6\uFF1A{data1}</div>\n        \t\t\t<div className=\"ysp-deatil-fujian-commit\" data-text = {data3} onClick={_this.handlerFujianCommit.bind(_this)}>\u63D0\u4EA4\u9644\u4EF6</div>\n            </div> : \"\"\n        }\n        \n        \n        {\n          data && data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u9644\u4EF6\uFF01\uFF01</div> :\n          data.map(function(d,i){\n            return(\n            \t<div className=\"ysp-deatil-fujian-content\">\n                <div onClick={_this.handlerFujianLook.bind(_this)}>{d[0]}</div>\n                <div>\n                \t<span>{d[5]}</span>\n                  <span>{d[6]}</span>\n                </div>\n                <div>\n                  <span>{d[7]}</span>\n                  <span onClick={_this.handlerFujianDelete.bind(_this)} data-index = {i} data-text={data3}>{d[8]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n  //\u5BA1\u6279\u610F\u89C1\n  yijianFor(data,data1,data2,title){\n    var _this = this;\n    return(\n    \t<div>\n        {\n          data1 && data1[0] == null ? '' : <div className=\"ysp-deatil-idea\">\n          \t<div>{title}</div>\n            <div>\n              <ATextarea value = {data} data-text = {data2} onChange={_this.handlerChange.bind(_this)}></ATextarea>\n            </div>\n            \n            <div>\n              <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n              <span>{data1}</span>\n            </div>\n            <div className=\"ysp-deatil-idea-commit\">\n              <span data-text = {data2} data-name = \"\u63D0\u4EA4\" onClick={_this.handlerClick.bind(_this)}>\u63D0\u4EA4</span>\n              <span data-text = {data2} data-name=\"\u9A73\u56DE\" onClick={_this.handlerClick.bind(_this)}>\u9A73\u56DE</span>\n              <span data-text = {data2} data-name=\"\u6D41\u7A0B\u4F5C\u5E9F\" onClick={_this.handlerClick.bind(_this)}>\u6D41\u7A0B\u4F5C\u5E9F</span>\n            </div>\n            {/*\n            \t<div>\n                <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u7ED3\u679C\uFF1A</span>\n                    <span>\n                      <select data-text = {data3} onChange={_this.handlerSelect.bind(_this)}>\n                        <option value=\"1\">\u540C\u610F</option>\n                        <option value=\"2\">\u4E0D\u540C\u610F</option>\n                      </select>\n                    </span>\n                  </div>\n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div>\n                <div data-text = {data3} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">\n                  \u610F\u89C1\u63D0\u4EA4\n              \t</div>\n            \t</div>\n              */\n            }\n          </div>\n        }\n        \n        \n      </div>\n    )\n  }\n  //\u5BA1\u6279\u5386\u53F2\n  historyFor(data,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-history\">\n        <div>{title}</div>\n        {\n          data && data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div> : data && data.map(function(d,i){\n            return(\n              <div className=\"ysp-detail-history-content\">\n                <div>\n                \t<span>{d[0]}</span>\n                \t<span>{d[1]}</span>\n                </div>\n                <div>\n                \t<span>{d[2]}</span>\n                \t<span>{d[3]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n        \n      </div>\n    )\n  }\n  \n  render(){\n    var _this = this;\n    if(_this.props.customData){\n      var FlagText = this.props.customData && this.props.customData.flagText;\n      var Basic = this.props.customData && this.props.customData.bas;\n      var FujianContent = this.props.customData && this.props.customData.fujianContent;\n      var FujianFile = this.props.customData && this.props.customData.fujianFile;\n      var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n      var History = this.props.customData && this.props.customData.history;\n      var Idea = this.props.customData && this.props.customData.idea;\n      var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;  \n      var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n      return (\n        <div>\n          {\n            localStorage.setStyle == \"true\" ? <div>\n              \t{ \n                  localStorage.workflows == \"\u4FE1\u606F\u9879\u76EE\u7ED3\u8F6C\" ? <div>\n                      {this.yijianFor(Idea,IdeaPerson,localStorage.workflows,'\u5BA1\u6279\u610F\u89C1')}\n                    \t{this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")}\n                    </div> : <div style ={{'color':'red',\"text-align\":'center'}}>\n                  \t\t\u6B64\u5BA1\u6279\u7C7B\u578B\u6B63\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01\uFF01\n                  \t</div>\n                }\n              </div> : <div style={{'color':'red','text-align':'center'}}>\u56E0\u8BE5\u6D41\u7A0B\u4E0D\u662F\u5BA1\u6279\u7C7B\u578B\uFF0C\u6545\u8BF7\u60A8\u4ECEPC\u7AEF\u529E\u7406\uFF01\uFF01</div>\n          }\n          \n          \n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}></div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: false\n    };\n    return _this2;\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'change',\n          data: {\n            value: target.value,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickIdea',\n          data: {\n            text: e.target.dataset.text,\n            name: e.target.dataset.name\n          }\n        });\n      }\n    }\n\n    //\u5220\u9664\u9644\u4EF6\n\n  }, {\n    key: 'handlerFujianDelete',\n    value: function handlerFujianDelete(e) {\n      var _this = this;\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianDelete',\n          data: {\n            index: target.dataset.index,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u67E5\u770B\n\n  }, {\n    key: 'handlerFujianLook',\n    value: function handlerFujianLook() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianLook'\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u6DFB\u52A0\n\n  }, {\n    key: 'handlerFujianAdd',\n    value: function handlerFujianAdd(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianAdd',\n          data: e.target.dataset.text\n        });\n      }\n      _this.setState({\n        flag: true\n      });\n    }\n\n    //\u9009\u62E9\u6587\u4EF6\n\n  }, {\n    key: 'handlerFujianFile',\n    value: function handlerFujianFile(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianFile',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u9644\u4EF6\u63D0\u4EA4\n\n  }, {\n    key: 'handlerFujianCommit',\n    value: function handlerFujianCommit(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianCommit',\n          data: e.target.dataset.text\n        });\n      }\n    }\n\n    //\u5BA1\u6279\u7ED3\u679C\n\n  }, {\n    key: 'handlerSelect',\n    value: function handlerSelect(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'select',\n          data: {\n            value: e.target.value,\n            text: e.target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u57FA\u672C\u4FE1\u606F\n\n  }, {\n    key: 'listFor',\n    value: function listFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          null,\n          data\n        )\n      );\n    }\n\n    //\u9644\u4EF6\u7BA1\u7406\n\n  }, {\n    key: 'fujianFor',\n    value: function fujianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-fujian' },\n        React.createElement(\n          'div',\n          null,\n          '\\u9644\\u4EF6\\u7BA1\\u7406'\n        ),\n        data2 && data2[0] ? React.createElement(\n          'div',\n          { className: 'ysp-deatil-fujian-add', 'data-text': data3, onClick: _this.handlerFujianAdd.bind(_this) },\n          '\\u70B9\\u51FB\\u6DFB\\u52A0\\u9644\\u4EF6'\n        ) : \"\",\n        _this.state.flag ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-file', 'data-text': data3, onClick: _this.handlerFujianFile.bind(_this) },\n            '\\u8BF7\\u9009\\u62E9\\u6587\\u4EF6'\n          ),\n          React.createElement(\n            'div',\n            null,\n            '\\u5F53\\u524D\\u6240\\u9009\\u6587\\u4EF6\\uFF1A',\n            data1\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-commit', 'data-text': data3, onClick: _this.handlerFujianCommit.bind(_this) },\n            '\\u63D0\\u4EA4\\u9644\\u4EF6'\n          )\n        ) : \"\",\n        data && data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u9644\\u4EF6\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-content' },\n            React.createElement(\n              'div',\n              { onClick: _this.handlerFujianLook.bind(_this) },\n              d[0]\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[6]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[7]\n              ),\n              React.createElement(\n                'span',\n                { onClick: _this.handlerFujianDelete.bind(_this), 'data-index': i, 'data-text': data3 },\n                d[8]\n              )\n            )\n          );\n        })\n      );\n    }\n    //\u5BA1\u6279\u610F\u89C1\n\n  }, {\n    key: 'yijianFor',\n    value: function yijianFor(data, data1, data2, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        data1 && data1[0] == null ? '' : React.createElement(\n          'div',\n          { className: 'ysp-deatil-idea' },\n          React.createElement(\n            'div',\n            null,\n            title\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(ATextarea, { value: data, 'data-text': data2, onChange: _this.handlerChange.bind(_this) })\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              null,\n              data1\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-idea-commit' },\n            React.createElement(\n              'span',\n              { 'data-text': data2, 'data-name': '\\u63D0\\u4EA4', onClick: _this.handlerClick.bind(_this) },\n              '\\u63D0\\u4EA4'\n            ),\n            React.createElement(\n              'span',\n              { 'data-text': data2, 'data-name': '\\u9A73\\u56DE', onClick: _this.handlerClick.bind(_this) },\n              '\\u9A73\\u56DE'\n            ),\n            React.createElement(\n              'span',\n              { 'data-text': data2, 'data-name': '\\u6D41\\u7A0B\\u4F5C\\u5E9F', onClick: _this.handlerClick.bind(_this) },\n              '\\u6D41\\u7A0B\\u4F5C\\u5E9F'\n            )\n          )\n        )\n      );\n    }\n    //\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'historyFor',\n    value: function historyFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-history' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        data && data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n        ) : data && data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-detail-history-content' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var FlagText = this.props.customData && this.props.customData.flagText;\n        var Basic = this.props.customData && this.props.customData.bas;\n        var FujianContent = this.props.customData && this.props.customData.fujianContent;\n        var FujianFile = this.props.customData && this.props.customData.fujianFile;\n        var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n        var History = this.props.customData && this.props.customData.history;\n        var Idea = this.props.customData && this.props.customData.idea;\n        var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;\n        var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n        return React.createElement(\n          'div',\n          null,\n          localStorage.setStyle == \"true\" ? React.createElement(\n            'div',\n            null,\n            localStorage.workflows == \"\u4FE1\u606F\u9879\u76EE\u7ED3\u8F6C\" ? React.createElement(\n              'div',\n              null,\n              this.yijianFor(Idea, IdeaPerson, localStorage.workflows, '\u5BA1\u6279\u610F\u89C1'),\n              this.historyFor(History, \"\u5BA1\u6279\u5386\u53F2\")\n            ) : React.createElement(\n              'div',\n              { style: { 'color': 'red', \"text-align\": 'center' } },\n              '\\u6B64\\u5BA1\\u6279\\u7C7B\\u578B\\u6B63\\u5728\\u5EFA\\u8BBE\\u4E2D\\uFF0C\\u656C\\u8BF7\\u671F\\u5F85\\uFF01\\uFF01'\n            )\n          ) : React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u56E0\\u8BE5\\u6D41\\u7A0B\\u4E0D\\u662F\\u5BA1\\u6279\\u7C7B\\u578B\\uFF0C\\u6545\\u8BF7\\u60A8\\u4ECEPC\\u7AEF\\u529E\\u7406\\uFF01\\uFF01'\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control15_hcs1LK: function (elem) {
      if (!elem) {
        return;
      }var data = { text: [], flag: [] };var text = elem && elem.textContent;data.text.push(text);var aa = text.split("[");var bb = aa[aa.length - 2];if (bb.indexOf('审批') > -1 || bb.indexOf('复核') > -1 || bb.indexOf('审核') > -1) {
        //data.flag.push(true);
        localStorage.setStyle = true;
      } else {
        localStorage.setStyle = false;
      }return data;
    },
    doAction_uiControl11_bMkppO: function (data, elem) {
      if (data.eventType == 'click') {
        setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      }
    },
    getTemplate_uiControl11_bMkppO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  componentDidUpdate(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-detail-title\">\n        {data && data.text}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  componentDidMount: function componentDidMount() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  componentDidUpdate: function componentDidUpdate() {\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'ysp-detail-title' },\n      data && data.text\n    );\n  }\n});";
    },
    getData_control3_Vv9XLr: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl2_7R9TUx: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.showLoading();elem && elem.click();setTimeout(function () {
          $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
            if (~$(this).text().indexOf('附件')) {
              var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
            }
          });
        }, 2000);setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      }
    },
    getTemplate_uiControl2_7R9TUx: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: true\n    }\n  }\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n    this.setState({\n      flag: !this.state.flag\n    })\n  }\n  render(){\n    return (\n      <div>\n      \t{\n          (localStorage.setStyle == \"true\" && localStorage.workflows == \"\u4FE1\u606F\u9879\u76EE\u7ED3\u8F6C\") ? <div onClick={this.handlerClick.bind(this)} className=\"ysp-detail-fujian\">\n            \u70B9\u51FB{this.state.flag ? '\u663E\u793A' : '\u9690\u85CF'}\u9644\u4EF6\n          </div> : ''\n        }\n      </div>\n      \n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this.state = {\n      flag: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n      this.setState({\n        flag: !this.state.flag\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        localStorage.setStyle == \"true\" && localStorage.workflows == \"\u4FE1\u606F\u9879\u76EE\u7ED3\u8F6C\" ? React.createElement(\n          'div',\n          { onClick: this.handlerClick.bind(this), className: 'ysp-detail-fujian' },\n          '\\u70B9\\u51FB',\n          this.state.flag ? '\u663E\u793A' : '\u9690\u85CF',\n          '\\u9644\\u4EF6'\n        ) : ''\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control10_GMvaHF: function (elem) {
      if (!elem) {
        return;
      } //console.log(elem);
      var data = { flag: [], addfileflag: [], chosefile: [], fujianContent: [] };var ids = elem && elem.getAttribute("id");var flag = ids && ids == "FDOE.TaskExecutionView.AttachmentsTray" ? true : false;data.flag.push(flag);var childrens = elem && elem.children;var addfileflag = childrens && childrens[1] && childrens[1].querySelector('table[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment"]');data.addfileflag.push(addfileflag ? true : false); //显示选择的文件
      var divs = childrens && childrens[1] && childrens[1].querySelector('div[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment_Content"]');var val = divs && divs.querySelectorAll("input")[0].value;var str = val && val.split("\\");var strTitle = str && str[str.length - 1];data.chosefile.push(strTitle); //显示附件
      var FJ = childrens && childrens[1] && childrens[1].querySelector('td[id="FDOEEEMN.AttachmentListView.AttachmentsTable-content"]');var trs = FJ && FJ.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var b = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              b.push(tds[j].textContent);
            }data.fujianContent.push(b);
          }
        }
      }return data;
    },
    doAction_uiControl6_yrBfrq: function (data, elem) {
      if (data.eventType == 'click') {
        var name = data.customData;var childrens = elem && elem.children;ysp.appMain.showLoading();if (name == "添加附件") {
          var divs = childrens && childrens[1] && childrens[1].querySelector('td[id="FDOEEEMN.AttachmentListView.ToolBar-itms"]');divs && divs.querySelector("a").click();setTimeout(function () {
            $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
              if (~$(this).text().indexOf('添加文件')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 2000);
        } else if (name == "选择文件") {
          var divs = childrens && childrens[1] && childrens[1].querySelector('div[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment_Content"]');divs && divs.querySelectorAll("input")[0].click();ysp.appMain.hideLoading();
        } else {
          var divs = childrens && childrens[1] && childrens[1].querySelector('div[id="FDOEEEMN.AttachmentListView.ToolBarPopinAddAttachment_Content"]');divs && divs.querySelector('a[id="FDOEEEMN.AddAttachmentView.ButtonUpload"]').click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 4000);
        }
      }if (data.eventType == 'look') {
        alert('附件查看');
      }
    },
    getTemplate_uiControl6_yrBfrq: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:e.target.dataset.name\n      })\n    }\n  },\n  handlerLook(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'look'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    return (\n      <div>\n        {\n          data && data.flag && data.flag[0] ? <div>\n            \t<div onClick={this.handlerClick.bind(this)} data-name=\"\u6DFB\u52A0\u9644\u4EF6\" className=\"ysp-detail-fujian\">\u6DFB\u52A0\u9644\u4EF6</div>\n              {\n                data && data.addfileflag && data.addfileflag[0] ? <div>\n                  \t<div onClick={this.handlerClick.bind(this)} data-name=\"\u9009\u62E9\u6587\u4EF6\" className=\"ysp-detail-fujian\">\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n                    <div className=\"ysp-detail-fujianChoseTitle\">\n                      <span>\u6240\u9009\u6587\u4EF6\uFF1A</span>\n                      <span>{data && data.chosefile}</span>\n                    </div>\n                    <div onClick={this.handlerClick.bind(this)} data-name=\"\u786E\u5B9A\" className=\"ysp-detail-fujian\">\u786E\u5B9A</div>\n                  </div> : ''\n              }\n              {\n                data && data.fujianContent && data.fujianContent.length == 0 ? <div style={{'color':'red','text-align':'center','padding':'10px'}}>\u6682\u65E0\u9644\u4EF6\uFF01\uFF01</div> :\n                  data && data.fujianContent.map(function(d,i){\n                    return(\n                      <div className=\"ysp-deatil-fujian-content\">\n                        <div onClick={this.handlerLook.bind(this)}>{d[0]}</div>\n                        <div>\n                          <span>{d[1]}</span>\n                          <span>{d[2]}</span>\n                        </div>\n                        <div>\n                          <span>{d[3]}</span>\n                          <span>{d[5]}</span>\n                        </div>\n                      </div>\n                    )\n                  })\n                }\n            </div> : ''\n        }\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.dataset.name\n      });\n    }\n  },\n  handlerLook: function handlerLook() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'look'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      'div',\n      null,\n      data && data.flag && data.flag[0] ? React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { onClick: this.handlerClick.bind(this), 'data-name': '\\u6DFB\\u52A0\\u9644\\u4EF6', className: 'ysp-detail-fujian' },\n          '\\u6DFB\\u52A0\\u9644\\u4EF6'\n        ),\n        data && data.addfileflag && data.addfileflag[0] ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { onClick: this.handlerClick.bind(this), 'data-name': '\\u9009\\u62E9\\u6587\\u4EF6', className: 'ysp-detail-fujian' },\n            '\\u8BF7\\u9009\\u62E9\\u6587\\u4EF6'\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-detail-fujianChoseTitle' },\n            React.createElement(\n              'span',\n              null,\n              '\\u6240\\u9009\\u6587\\u4EF6\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              null,\n              data && data.chosefile\n            )\n          ),\n          React.createElement(\n            'div',\n            { onClick: this.handlerClick.bind(this), 'data-name': '\\u786E\\u5B9A', className: 'ysp-detail-fujian' },\n            '\\u786E\\u5B9A'\n          )\n        ) : '',\n        data && data.fujianContent && data.fujianContent.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center', 'padding': '10px' } },\n          '\\u6682\\u65E0\\u9644\\u4EF6\\uFF01\\uFF01'\n        ) : data && data.fujianContent.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-content' },\n            React.createElement(\n              'div',\n              { onClick: this.handlerLook.bind(this) },\n              d[0]\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              )\n            )\n          );\n        })\n      ) : ''\n    );\n  }\n});";
    },
    getData_control11_sbwirA: function (elem) {
      if (!elem) {
        return false;
      } //ysp.appMain.showLoading();
      return "操作详情";
    },
    doAction_uiControl7_mL29PR: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      }if (data.eventType == 'loading') {
        setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 4000);
      }
    },
    getTemplate_uiControl7_mL29PR: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n  }\n  componentDidMount(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'loading'\n      })\n    }\n  }\n  componentDidUpdate(){\n    ysp.appMain.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'loading'\n      })\n    }\n  }\n  render(){\n    return (\n    \t<div className = 'TodoList-head'>\n      \t<span onClick={(e)=>{\n            var handler  = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'click'\n              })\n            }\n          }}>\u8FD4\u56DE</span>\n        <span>\u64CD\u4F5C\u8BE6\u60C5</span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      ysp.appMain.showLoading();\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'loading'\n        });\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      ysp.appMain.showLoading();\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'loading'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        'div',\n        { className: 'TodoList-head' },\n        React.createElement(\n          'span',\n          { onClick: function onClick(e) {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'click'\n                });\n              }\n            } },\n          '\\u8FD4\\u56DE'\n        ),\n        React.createElement(\n          'span',\n          null,\n          '\\u64CD\\u4F5C\\u8BE6\\u60C5'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "detail");
})(window, ysp);