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
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaEnding: [], ideaPerson: [], vv: [], vv1: [], vv2: [], vv3: [] }; //console.log(elem);
      data.vv.push(elem.ownerDocument.querySelector('input[name="sap-wd-secure-id"]').value);data.vv1.push(elem.ownerDocument.querySelector('input[name="sap-ext-sid"]').value);data.vv2.push(elem.ownerDocument.querySelector('input[name="sap-wd-norefresh"]').value);data.vv3.push(elem.ownerDocument.querySelector('input[name="sap-wd-cltwndid"]').value);var basics = elem.children; //标题标示
      var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]') && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;data.flagText.push(text);var FJ; //附件
      var YJ; //意见
      var SP; //审批历史
      if (text) {
        if (text == "其它费用结算" || text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤临购计划" || text == "燃煤销售结算" || text == "服务验收审批单" || text == "询报价采购管理" || text == "供应商评估结果" || text == "燃煤年度采购计划维护") {
          if (text == "燃煤临购计划" || text == "燃煤年度采购计划维护") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
          } else if (text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤销售结算" || text == "供应商评估结果") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
          } else if (text == "其它费用结算") {
            FJ = basics && basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
          } else if (text == "服务验收审批单" || text == "询报价采购管理") {
            FJ = '';
          }YJ = basics && basics[2];SP = basics && basics[3];
        } else if (text == "燃料付款申请单") {
          FJ = basics && basics[3] && basics[3].children[0].lastElementChild.lastElementChild;YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "煤炭合同") {
          FJ = '';YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "供应商新增申请") {
          var tbodys = elem.parentElement && elem.parentElement.parentElement && elem.parentElement.parentElement.parentElement;var childrens = tbodys && tbodys.children;if (childrens) {
            FJ = childrens[childrens.length - 3];YJ = childrens[childrens.length - 2];SP = childrens[childrens.length - 1];
          }
        }
      } /****基本信息****/ //var a = basics[1].querySelectorAll("span.urLinStd")[2].textContent;
      //data.bas.push(a); 
      //////附件管理
      var trs = FJ && FJ.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var b = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              b.push(tds[j].textContent);
            }data.fujianContent.push(b);
          }
        }
      } //附件所选文件
      var files = FJ && FJ.querySelector("input[type='file']");var values = files && files.value;if (values) {
        var strArr = values && values.split("\\");data.fujianFile.push(strArr[strArr.length - 1]);
      } //判断附件是否可以上传
      var ass = FJ && FJ.querySelectorAll("a");var a = [];if (ass) {
        for (var i = 0; i < ass.length; i++) {
          if (ass[i].textContent == "添加 ") {
            a.push(ass[i]);
          }
        }
      }if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
        data.fujianFlag.push(true);
      } else {
        data.fujianFlag.push(false);
      } /***审批意见****/var textareaValue = YJ && YJ.querySelector('textarea') && YJ.querySelector('textarea').value;data.idea.push(textareaValue);if (text == "服务验收审批单" || text == "询报价采购管理") {
        var inputValue = "";data.ideaEnding.push(inputValue);var personValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaPerson.push(personValue);
      } else {
        var inputValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaEnding.push(inputValue);var personValue = YJ && YJ.querySelectorAll('input')[2] && YJ.querySelectorAll('input')[2].value;data.ideaPerson.push(personValue);
      } //审批历史
      var trs = SP && SP.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }data.history.push(a);
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
      var typs = data.eventType;var basics = elem.children;var text; //标题
      if (typs == 'clickIdea' || typs == 'fujianAdd' || typs == 'fujianFile') {
        text = data.customData;
      } else {
        text = data.customData.text;
      }var FJ; //附件
      var YJ; //意见
      var SP; //审批历史
      if (text) {
        if (text == "其它费用结算" || text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤临购计划" || text == "燃煤销售结算" || text == "服务验收审批单" || text == "询报价采购管理" || text == "供应商评估结果" || text == "燃煤年度采购计划维护") {
          if (text == "燃煤临购计划" || text == "燃煤年度采购计划维护") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
          } else if (text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤销售结算" || text == "供应商评估结果") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
          } else if (text == "其它费用结算") {
            FJ = basics && basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
          } else if (text == "服务验收审批单" || text == "询报价采购管理") {
            FJ = '';
          }YJ = basics && basics[2];SP = basics && basics[3];
        } else if (text == "燃料付款申请单") {
          FJ = basics && basics[3] && basics[3].children[0].lastElementChild.lastElementChild;YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "煤炭合同") {
          FJ = '';YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "供应商新增申请") {
          var tbodys = elem.parentElement && elem.parentElement.parentElement && elem.parentElement.parentElement.parentElement;var childrens = tbodys && tbodys.children;if (childrens) {
            FJ = childrens[childrens.length - 3];YJ = childrens[childrens.length - 2];SP = childrens[childrens.length - 1];
          }
        }
      } //意见填写
      if (data.eventType == 'change') {
        var val = data.customData.value;if (YJ) {
          YJ.querySelector('textarea').value = val;
        }
      } //意见提交
      if (data.eventType == 'clickIdea') {
        ysp.appMain.showLoading();if (YJ) {
          YJ.querySelector('a').click();
        }setTimeout(function () {
          ysp.appMain.hideLoading();alert('审批意见提交成功！！');ysp.appMain.back();
        }, 6000);
      } //附件删除
      if (data.eventType == 'fujianDelete') {
        ysp.appMain.showLoading();var index = parseInt(data.customData.index);if (FJ) {
          var trs = FJ && FJ.querySelectorAll("tr");var b = [];for (var i = 0; i < trs.length; i++) {
            if (trs[i].getAttribute("userdata")) {
              b.push(trs[i]);
            }
          }var c = [];var text = b && b[index].querySelectorAll("td");for (var j = 0; j < text.length; j++) {
            if (text[j].textContent == '删除') {
              c.push(text[j]);
            }
          }c && c[0].querySelector("a").click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 2000);
        }
      } //附件查看
      if (data.eventType == 'fujianLook') {
        ysp.appMain.showLoading();var title = data.customData.title;var index = parseInt(data.customData.index);var cookies = elem.ownerDocument.cookie;if (FJ) {
          var trs = FJ && FJ.querySelectorAll("tr");var b = [];for (var i = 0; i < trs.length; i++) {
            if (trs[i].getAttribute("userdata")) {
              b.push(trs[i]);
            }
          }var text = b && b[index].querySelectorAll("td");text && text[1].querySelector("a").click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 3000);setTimeout(function () {
            //debugger;
            var hrefs = elem.ownerDocument.defaultView.location.href;var url = hrefs.split(";")[0];var fileUrl = ysp.fileUrl;var urls = fileUrl.split('../')[2];var hostUrl = 'http://ihn.chng.com.cn:20002/webdynpro/dispatcher/' + urls;if (top.EAPI.isAndroid()) {
              huaneng.fujian("ERP", hostUrl, title, cookies, '');
            } else {
              top.EAPI.postMessageToNative("openDocument", { "dbname": hostUrl, "type": "ERP" });
            } // if (top.EAPI.isAndroid()) {

            //     huaneng.fujian("ERP", pname + "/" + url.match(/MoaWeb.*nsf/)[0], dbid, text, cookieValue);
            //   } else {
            //     top.EAPI.postMessageToNative("openDocument", { "dbname": pname + "/" + url.match(/MoaWeb.*nsf/)[0], "dbid": dbid, "text": text, "cookie": cookies.split("LtpaToken=")[1], "type": "OA" });
            //   }
          }, 1000);
        } // top.EAPI.openWindow(url + '?_ysp_filepreview=1'); //top.EAPI.postMessageToNative("openDocument", url);
      } //附件添加
      if (data.eventType == "fujianAdd") {
        ysp.appMain.showLoading();if (FJ) {
          var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
            if (ass[i].textContent == "添加 ") {
              a.push(ass[i]);
            }
          }a && a[0].click();
          setTimeout(function () {
            $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
              if (~$(this).text().indexOf('添加文件')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 4000);
        }
      } //选择文件
      if (data.eventType == "fujianFile") {
        if (FJ) {
          var files = FJ && FJ.querySelector("input[type='file']");files && files.click();
        }
      } //附件提交
      if (data.eventType == 'fujianCommit') {
        ysp.appMain.showLoading();var chose = data.customData.chose;if (!chose) {
          alert("请选择需要上传的文件！！");ysp.appMain.hideLoading();return;
        }if (FJ) {
          var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
            if (ass[i].textContent == "确认") {
              a.push(ass[i]);
            }
          }a && a[0].click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 3000);
        }
      }
      if (data.eventType == 'select') {
        ysp.appMain.showLoading();var index = data.customData.value;
        var text = data.customData.text;var keyIdOk;var keyIdNOk;if (YJ) {
          YJ.querySelectorAll('input')[0].click();
        }if (text == '煤炭合同') {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmcght_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmcght_wd.Result-key-1"]');
        }if (text == "其它费用结算") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-1"]');
        }if (text == "燃料付款申请单") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-1"]');
        }if (text == "燃煤结算") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmjs2_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmjs2_wd.Result-key-1"]');
        }if (text == "燃料合同作废申请") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_2566_-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_2566_-key-1"]');
        }if (text == "燃煤临购计划") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_3263_-key-1"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_3263_-key-0"]');
        }if (text == "燃煤销售结算") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlgs.rmxsjs_wd.wd.model.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlgs.rmxsjs_wd.wd.model.ResultType-key-1"]');
        }if (text == "供应商新增申请") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.gyssq_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.gyssq_wd.Result-key-1"]');
        }if (text == "供应商评估结果") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlht.rmgyspg_wd.wd.comp.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlht.rmgyspg_wd.wd.comp.ResultType-key-1"]');
        }if (text == "燃煤年度采购计划维护") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.rmndcgjh_wd.wd.comp.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.rmndcgjh_wd.wd.comp.ResultType-key-1"]');
        }if (index == "1") {
          setTimeout(function () {
            keyIdOk.each(function () {
              if (~$(this).text().indexOf('同意')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);
        } else if (index == "2") {
          setTimeout(function () {
            keyIdNOk.each(function () {
              if (~$(this).text().indexOf('不同意')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);
        }setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      }
    },
    getTemplate_uiControl5_Qqv3JO: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: false\n    }\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n  handlerChange(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          value:target.value,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickIdea',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  \n  //\u5220\u9664\u9644\u4EF6\n  handlerFujianDelete(e){\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianDelete',\n        data:{\n          index:target.dataset.index,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u67E5\u770B\n  handlerFujianLook(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianLook',\n        data:{\n          text:e.target.dataset.text,\n          title:e.target.dataset.title,\n          index:e.target.dataset.index\n        }\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u6DFB\u52A0\n  handlerFujianAdd(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianAdd',\n        data:e.target.dataset.text\n      })\n    }\n    setTimeout(function(){\n      _this.setState({\n        flag: true\n      })\n    },3000)\n  }\n  \n  //\u9009\u62E9\u6587\u4EF6\n  handlerFujianFile(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianFile',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u9644\u4EF6\u63D0\u4EA4\n  handlerFujianCommit(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianCommit',\n        data:{\n          text:e.target.dataset.text,\n          chose:e.target.dataset.chose\n        }\n      })\n    }\n  }\n  \n  //\u5BA1\u6279\u7ED3\u679C\n  handlerSelect(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'select',\n        data:{\n          value:e.target.value,\n          text:e.target.dataset.text\n        }\n      })\n    }\n  }\n  \n  \n  //\u57FA\u672C\u4FE1\u606F\n  listFor(data,title){\n    var _this = this;\n    return (\n    \t<div>\n      \t<div>{title}</div>\n        <div>{data}</div>\n      </div>\n    )\n  }\n  \n  \n  //\u9644\u4EF6\u7BA1\u7406\n  fujianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-fujian\">\n        <div>\u9644\u4EF6\u7BA1\u7406</div>\n        {\n          data2 && data2[0] ? <div className=\"ysp-deatil-fujian-add\" data-text = {data3} onClick={_this.handlerFujianAdd.bind(_this)}>\u70B9\u51FB\u6DFB\u52A0\u9644\u4EF6</div> : \"\"\n        }\n        \n        {\n          _this.state.flag ? <div>\n            \t<div className=\"ysp-deatil-fujian-file\" data-text = {data3} onClick={_this.handlerFujianFile.bind(_this)}>\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n              <div>\u5F53\u524D\u6240\u9009\u6587\u4EF6\uFF1A{data1}</div>\n        \t\t\t<div className=\"ysp-deatil-fujian-commit\" data-chose = {data1} data-text = {data3} onClick={_this.handlerFujianCommit.bind(_this)}>\u63D0\u4EA4\u9644\u4EF6</div>\n            </div> : \"\"\n        }\n        \n        \n        {\n          data && data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u9644\u4EF6\uFF01\uFF01</div> :\n          data.map(function(d,i){\n            return(\n            \t<div className=\"ysp-deatil-fujian-content\">\n                <div onClick={_this.handlerFujianLook.bind(_this)} data-text = {data3} data-title = {d[0]} data-index = {i}>{d[0]}</div>\n                <div>\n                \t<span>{d[5]}</span>\n                  <span>{d[6]}</span>\n                </div>\n                <div>\n                  <span>{d[7]}</span>\n                  <span onClick={_this.handlerFujianDelete.bind(_this)} data-index = {i} data-text={data3}>{d[8]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n  //\u5BA1\u6279\u610F\u89C1\n  yijianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div>\n        {\n          data2 && data2[0] == null ? '' : <div className=\"ysp-deatil-idea\">\n          \t<div>{title}</div>\n            <div>\n              <ATextarea value = {data} data-text = {data3} onChange={_this.handlerChange.bind(_this)}></ATextarea>\n            </div>\n            {\n              data3 == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? <div>\n                <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div>\n            \t</div> : data3 == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" ? <div>\n                <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div>\n                <div data-text = {data3} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">\n                  \u610F\u89C1\u63D0\u4EA4\n              \t</div>\n            \t</div> :\n            \t<div>\n                <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u7ED3\u679C\uFF1A</span>\n                    <span>\n                      <select data-text = {data3} onChange={_this.handlerSelect.bind(_this)}>\n                        <option value=\"1\">\u540C\u610F</option>\n                        <option value=\"2\">\u4E0D\u540C\u610F</option>\n                      </select>\n                    </span>\n                  </div>\n                  \n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div>\n                <div data-text = {data3} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">\n                  \u610F\u89C1\u63D0\u4EA4\n              \t</div>\n            \t</div>\n            }\n          </div>\n        }\n        \n        \n      </div>\n    )\n  }\n  //\u5BA1\u6279\u5386\u53F2\n  historyFor(data,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-history\">\n        <div>{title}</div>\n        {\n          data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div> : data.map(function(d,i){\n            return(\n              <div className=\"ysp-detail-history-content\">\n                <div>\n                \t<span>{d[0]}</span>\n                \t<span>{d[1]}</span>\n                </div>\n                <div>\n                \t<span>{d[2]}</span>\n                \t<span>{d[3]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n        \n      </div>\n    )\n  }\n  \n  render(){\n    var _this = this;\n    if(_this.props.customData){\n      var FlagText = this.props.customData && this.props.customData.flagText;\n      var Basic = this.props.customData && this.props.customData.bas;\n      var FujianContent = this.props.customData && this.props.customData.fujianContent;\n      var FujianFile = this.props.customData && this.props.customData.fujianFile;\n      var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n      var History = this.props.customData && this.props.customData.history;\n      var Idea = this.props.customData && this.props.customData.idea;\n      var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;  \n      var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n      return (\n        <div>\n          {\n            localStorage.setStyle == \"true\" ? <div>\n              \t{\n                  (FlagText == \"\u5176\u5B83\u8D39\u7528\u7ED3\u7B97\" || FlagText == \"\u71C3\u7164\u4E34\u8D2D\u8BA1\u5212\" || FlagText == \"\u71C3\u6599\u4ED8\u6B3E\u7533\u8BF7\u5355\" || FlagText == \"\u71C3\u7164\u7ED3\u7B97\" || FlagText == \"\u71C3\u6599\u5408\u540C\u4F5C\u5E9F\u7533\u8BF7\" || FlagText == \"\u71C3\u7164\u9500\u552E\u7ED3\u7B97\" || FlagText == \"\u4F9B\u5E94\u5546\u65B0\u589E\u7533\u8BF7\" || FlagText == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" || FlagText == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" || FlagText == \"\u4F9B\u5E94\u5546\u8BC4\u4F30\u7ED3\u679C\" || FlagText == \"\u71C3\u7164\u5E74\u5EA6\u91C7\u8D2D\u8BA1\u5212\u7EF4\u62A4\" || FlagText == '\u7164\u70AD\u5408\u540C') ? <div>\n                    {/*this.listFor(Basic,'\u57FA\u672C\u4FE1\u606F')*/}\n                    {this.fujianFor(FujianContent,FujianFile,FujianFlag,FlagText,\"\u9644\u4EF6\u7BA1\u7406\")}\n                    {this.yijianFor(Idea,IdeaEnding,IdeaPerson,FlagText,'\u5BA1\u6279\u610F\u89C1')}\n                    {this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")}\n                    </div> : <div style ={{'color':'red',\"text-align\":'center'}}>\n                  \t\t\u6B64\u5BA1\u6279\u7C7B\u578B\u6B63\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01\uFF01\n                  \t</div>\n                }\n              </div> : <div style={{'color':'red','text-align':'center'}}>\u56E0\u8BE5\u6D41\u7A0B\u4E0D\u662F\u5BA1\u6279\u7C7B\u578B\uFF0C\u6545\u8BF7\u60A8\u4ECEPC\u7AEF\u529E\u7406\uFF01\uFF01</div>\n          }\n          \n          \n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}>\n        </div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: false\n    };\n    return _this2;\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'change',\n          data: {\n            value: target.value,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickIdea',\n          data: e.target.dataset.text\n        });\n      }\n    }\n\n    //\u5220\u9664\u9644\u4EF6\n\n  }, {\n    key: 'handlerFujianDelete',\n    value: function handlerFujianDelete(e) {\n      var _this = this;\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianDelete',\n          data: {\n            index: target.dataset.index,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u67E5\u770B\n\n  }, {\n    key: 'handlerFujianLook',\n    value: function handlerFujianLook(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianLook',\n          data: {\n            text: e.target.dataset.text,\n            title: e.target.dataset.title,\n            index: e.target.dataset.index\n          }\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u6DFB\u52A0\n\n  }, {\n    key: 'handlerFujianAdd',\n    value: function handlerFujianAdd(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianAdd',\n          data: e.target.dataset.text\n        });\n      }\n      setTimeout(function () {\n        _this.setState({\n          flag: true\n        });\n      }, 3000);\n    }\n\n    //\u9009\u62E9\u6587\u4EF6\n\n  }, {\n    key: 'handlerFujianFile',\n    value: function handlerFujianFile(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianFile',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u9644\u4EF6\u63D0\u4EA4\n\n  }, {\n    key: 'handlerFujianCommit',\n    value: function handlerFujianCommit(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianCommit',\n          data: {\n            text: e.target.dataset.text,\n            chose: e.target.dataset.chose\n          }\n        });\n      }\n    }\n\n    //\u5BA1\u6279\u7ED3\u679C\n\n  }, {\n    key: 'handlerSelect',\n    value: function handlerSelect(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'select',\n          data: {\n            value: e.target.value,\n            text: e.target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u57FA\u672C\u4FE1\u606F\n\n  }, {\n    key: 'listFor',\n    value: function listFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          null,\n          data\n        )\n      );\n    }\n\n    //\u9644\u4EF6\u7BA1\u7406\n\n  }, {\n    key: 'fujianFor',\n    value: function fujianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-fujian' },\n        React.createElement(\n          'div',\n          null,\n          '\\u9644\\u4EF6\\u7BA1\\u7406'\n        ),\n        data2 && data2[0] ? React.createElement(\n          'div',\n          { className: 'ysp-deatil-fujian-add', 'data-text': data3, onClick: _this.handlerFujianAdd.bind(_this) },\n          '\\u70B9\\u51FB\\u6DFB\\u52A0\\u9644\\u4EF6'\n        ) : \"\",\n        _this.state.flag ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-file', 'data-text': data3, onClick: _this.handlerFujianFile.bind(_this) },\n            '\\u8BF7\\u9009\\u62E9\\u6587\\u4EF6'\n          ),\n          React.createElement(\n            'div',\n            null,\n            '\\u5F53\\u524D\\u6240\\u9009\\u6587\\u4EF6\\uFF1A',\n            data1\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-commit', 'data-chose': data1, 'data-text': data3, onClick: _this.handlerFujianCommit.bind(_this) },\n            '\\u63D0\\u4EA4\\u9644\\u4EF6'\n          )\n        ) : \"\",\n        data && data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u9644\\u4EF6\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-content' },\n            React.createElement(\n              'div',\n              { onClick: _this.handlerFujianLook.bind(_this), 'data-text': data3, 'data-title': d[0], 'data-index': i },\n              d[0]\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[6]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[7]\n              ),\n              React.createElement(\n                'span',\n                { onClick: _this.handlerFujianDelete.bind(_this), 'data-index': i, 'data-text': data3 },\n                d[8]\n              )\n            )\n          );\n        })\n      );\n    }\n    //\u5BA1\u6279\u610F\u89C1\n\n  }, {\n    key: 'yijianFor',\n    value: function yijianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        data2 && data2[0] == null ? '' : React.createElement(\n          'div',\n          { className: 'ysp-deatil-idea' },\n          React.createElement(\n            'div',\n            null,\n            title\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(ATextarea, { value: data, 'data-text': data3, onChange: _this.handlerChange.bind(_this) })\n          ),\n          data3 == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-deatil-idea-end' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data2\n                )\n              )\n            )\n          ) : data3 == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" ? React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-deatil-idea-end' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data2\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              { 'data-text': data3, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit' },\n              '\\u610F\\u89C1\\u63D0\\u4EA4'\n            )\n          ) : React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-deatil-idea-end' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u7ED3\\u679C\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  React.createElement(\n                    'select',\n                    { 'data-text': data3, onChange: _this.handlerSelect.bind(_this) },\n                    React.createElement(\n                      'option',\n                      { value: '1' },\n                      '\\u540C\\u610F'\n                    ),\n                    React.createElement(\n                      'option',\n                      { value: '2' },\n                      '\\u4E0D\\u540C\\u610F'\n                    )\n                  )\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data2\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              { 'data-text': data3, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit' },\n              '\\u610F\\u89C1\\u63D0\\u4EA4'\n            )\n          )\n        )\n      );\n    }\n    //\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'historyFor',\n    value: function historyFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-history' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-detail-history-content' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var FlagText = this.props.customData && this.props.customData.flagText;\n        var Basic = this.props.customData && this.props.customData.bas;\n        var FujianContent = this.props.customData && this.props.customData.fujianContent;\n        var FujianFile = this.props.customData && this.props.customData.fujianFile;\n        var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n        var History = this.props.customData && this.props.customData.history;\n        var Idea = this.props.customData && this.props.customData.idea;\n        var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;\n        var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n        return React.createElement(\n          'div',\n          null,\n          localStorage.setStyle == \"true\" ? React.createElement(\n            'div',\n            null,\n            FlagText == \"\u5176\u5B83\u8D39\u7528\u7ED3\u7B97\" || FlagText == \"\u71C3\u7164\u4E34\u8D2D\u8BA1\u5212\" || FlagText == \"\u71C3\u6599\u4ED8\u6B3E\u7533\u8BF7\u5355\" || FlagText == \"\u71C3\u7164\u7ED3\u7B97\" || FlagText == \"\u71C3\u6599\u5408\u540C\u4F5C\u5E9F\u7533\u8BF7\" || FlagText == \"\u71C3\u7164\u9500\u552E\u7ED3\u7B97\" || FlagText == \"\u4F9B\u5E94\u5546\u65B0\u589E\u7533\u8BF7\" || FlagText == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" || FlagText == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" || FlagText == \"\u4F9B\u5E94\u5546\u8BC4\u4F30\u7ED3\u679C\" || FlagText == \"\u71C3\u7164\u5E74\u5EA6\u91C7\u8D2D\u8BA1\u5212\u7EF4\u62A4\" || FlagText == '\u7164\u70AD\u5408\u540C' ? React.createElement(\n              'div',\n              null,\n              this.fujianFor(FujianContent, FujianFile, FujianFlag, FlagText, \"\u9644\u4EF6\u7BA1\u7406\"),\n              this.yijianFor(Idea, IdeaEnding, IdeaPerson, FlagText, '\u5BA1\u6279\u610F\u89C1'),\n              this.historyFor(History, \"\u5BA1\u6279\u5386\u53F2\")\n            ) : React.createElement(\n              'div',\n              { style: { 'color': 'red', \"text-align\": 'center' } },\n              '\\u6B64\\u5BA1\\u6279\\u7C7B\\u578B\\u6B63\\u5728\\u5EFA\\u8BBE\\u4E2D\\uFF0C\\u656C\\u8BF7\\u671F\\u5F85\\uFF01\\uFF01'\n            )\n          ) : React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u56E0\\u8BE5\\u6D41\\u7A0B\\u4E0D\\u662F\\u5BA1\\u6279\\u7C7B\\u578B\\uFF0C\\u6545\\u8BF7\\u60A8\\u4ECEPC\\u7AEF\\u529E\\u7406\\uFF01\\uFF01'\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
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
    getData_control3_IV7Qv7: function (elem) {
      if (!elem) {
        return false;
      }ysp.appMain.showLoading();setTimeout(function () {
        ysp.appMain.hideLoading();
      }, 6000);return "操作详情";
    },
    doAction_uiControl2_5vuwN4: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      } // if (data.eventType == 'loading') {
      //   setTimeout(function () {
      //     ysp.appMain.hideLoading();
      //   }, 4000);
      // }
    },
    getTemplate_uiControl2_5vuwN4: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n  }\n  // componentDidMount(){\n  //   ysp.appMain.showLoading();\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'loading'\n  //     })\n  //   }\n  // }\n  // componentDidUpdate(){\n  //   ysp.appMain.showLoading();\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'loading'\n  //     })\n  //   }\n  // }\n  render(){\n    return (\n    \t<div className = 'TodoList-head'>\n      \t<span onClick={(e)=>{\n            var handler  = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'click'\n              })\n            }\n          }}>\u8FD4\u56DE</span>\n        <span>\u64CD\u4F5C\u8BE6\u60C5</span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n  // componentDidMount(){\n  //   ysp.appMain.showLoading();\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'loading'\n  //     })\n  //   }\n  // }\n  // componentDidUpdate(){\n  //   ysp.appMain.showLoading();\n  //   var handler = this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'loading'\n  //     })\n  //   }\n  // }\n\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        'div',\n        { className: 'TodoList-head' },\n        React.createElement(\n          'span',\n          { onClick: function onClick(e) {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'click'\n                });\n              }\n            } },\n          '\\u8FD4\\u56DE'\n        ),\n        React.createElement(\n          'span',\n          null,\n          '\\u64CD\\u4F5C\\u8BE6\\u60C5'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control7_yw9WUw: function (elem) {
      if (!elem) {
        return;
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaEnding: [], ideaPerson: [], vv: [], vv1: [], vv2: [], vv3: [] }; //console.log(elem);
      data.vv.push(elem.ownerDocument.querySelector('input[name="sap-wd-secure-id"]').value);data.vv1.push(elem.ownerDocument.querySelector('input[name="sap-ext-sid"]').value);data.vv2.push(elem.ownerDocument.querySelector('input[name="sap-wd-norefresh"]').value);data.vv3.push(elem.ownerDocument.querySelector('input[name="sap-wd-cltwndid"]').value);var basics = elem.children; //标题标示
      var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]') && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;data.flagText.push(text);var FJ; //附件
      var YJ; //意见
      var SP; //审批历史
      if (text) {
        if (text == "其它费用结算" || text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤临购计划" || text == "燃煤销售结算" || text == "服务验收审批单" || text == "询报价采购管理" || text == "供应商评估结果" || text == "燃煤年度采购计划维护") {
          if (text == "燃煤临购计划" || text == "燃煤年度采购计划维护") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
          } else if (text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤销售结算" || text == "供应商评估结果") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
          } else if (text == "其它费用结算") {
            FJ = basics && basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
          } else if (text == "服务验收审批单" || text == "询报价采购管理") {
            FJ = '';
          }YJ = basics && basics[2];SP = basics && basics[3];
        } else if (text == "燃料付款申请单") {
          FJ = basics && basics[3] && basics[3].children[0].lastElementChild.lastElementChild;YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "煤炭合同") {
          FJ = '';YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "供应商新增申请") {
          var tbodys = elem.parentElement && elem.parentElement.parentElement && elem.parentElement.parentElement.parentElement;var childrens = tbodys && tbodys.children;if (childrens) {
            FJ = childrens[childrens.length - 3];YJ = childrens[childrens.length - 2];SP = childrens[childrens.length - 1];
          }
        }
      } /****基本信息****/ //var a = basics[1].querySelectorAll("span.urLinStd")[2].textContent;
      //data.bas.push(a); 
      //////附件管理
      var trs = FJ && FJ.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var b = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              b.push(tds[j].textContent);
            }data.fujianContent.push(b);
          }
        }
      } //附件所选文件
      var files = FJ && FJ.querySelector("input[type='file']");var values = files && files.value;if (values) {
        var strArr = values && values.split("\\");data.fujianFile.push(strArr[strArr.length - 1]);
      } //判断附件是否可以上传
      var ass = FJ && FJ.querySelectorAll("a");var a = [];if (ass) {
        for (var i = 0; i < ass.length; i++) {
          if (ass[i].textContent == "添加 ") {
            a.push(ass[i]);
          }
        }
      }if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
        data.fujianFlag.push(true);
      } else {
        data.fujianFlag.push(false);
      } /***审批意见****/var textareaValue = YJ && YJ.querySelector('textarea') && YJ.querySelector('textarea').value;data.idea.push(textareaValue);if (text == "服务验收审批单" || text == "询报价采购管理") {
        var inputValue = "";data.ideaEnding.push(inputValue);var personValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaPerson.push(personValue);
      } else {
        var inputValue = YJ && YJ.querySelectorAll('input')[0] && YJ.querySelectorAll('input')[0].value;data.ideaEnding.push(inputValue);var personValue = YJ && YJ.querySelectorAll('input')[2] && YJ.querySelectorAll('input')[2].value;data.ideaPerson.push(personValue);
      } //审批历史
      var trs = SP && SP.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }data.history.push(a);
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
      //     }
      //   }
      //   if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
      //     data.fujianFlag.push(true);
      //   } else {
      //     data.fujianFlag.push(false);
      //   } /***审批意见****/
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
      //       }
      //     }
      //   }
      return data;
    },
    doAction_uiControl4_hMp5c7: function (data, elem) {
      var typs = data.eventType;var basics = elem.children;var text; //标题
      if (typs == 'clickIdea' || typs == 'fujianAdd' || typs == 'fujianFile') {
        text = data.customData;
      } else {
        text = data.customData.text;
      }var FJ; //附件
      var YJ; //意见
      var SP; //审批历史
      if (text) {
        if (text == "其它费用结算" || text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤临购计划" || text == "燃煤销售结算" || text == "服务验收审批单" || text == "询报价采购管理" || text == "供应商评估结果" || text == "燃煤年度采购计划维护") {
          if (text == "燃煤临购计划" || text == "燃煤年度采购计划维护") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHGJLN.AttachCompView.Tray"]');
          } else if (text == '燃煤结算' || text == "燃料合同作废申请" || text == "燃煤销售结算" || text == "供应商评估结果") {
            FJ = basics[1] && basics[1].querySelector('table[id="FDOEEFPDBOMAACHHECKC.AttachCompView.Tray"]');
          } else if (text == "其它费用结算") {
            FJ = basics && basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
          } else if (text == "服务验收审批单" || text == "询报价采购管理") {
            FJ = '';
          }YJ = basics && basics[2];SP = basics && basics[3];
        } else if (text == "燃料付款申请单") {
          FJ = basics && basics[3] && basics[3].children[0].lastElementChild.lastElementChild;YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "煤炭合同") {
          FJ = '';YJ = basics && basics[4];SP = basics && basics[5];
        } else if (text == "供应商新增申请") {
          var tbodys = elem.parentElement && elem.parentElement.parentElement && elem.parentElement.parentElement.parentElement;var childrens = tbodys && tbodys.children;if (childrens) {
            FJ = childrens[childrens.length - 3];YJ = childrens[childrens.length - 2];SP = childrens[childrens.length - 1];
          }
        }
      } //意见填写
      if (data.eventType == 'change') {
        var val = data.customData.value;if (YJ) {
          YJ.querySelector('textarea').value = val;
        }
      } //意见提交
      if (data.eventType == 'clickIdea') {
        ysp.appMain.showLoading();if (YJ) {
          YJ.querySelector('a').click();
        }setTimeout(function () {
          ysp.appMain.hideLoading();alert('审批意见提交成功！！');ysp.appMain.back();
        }, 6000);
      } //附件删除
      if (data.eventType == 'fujianDelete') {
        ysp.appMain.showLoading();var index = parseInt(data.customData.index);if (FJ) {
          var trs = FJ && FJ.querySelectorAll("tr");var b = [];for (var i = 0; i < trs.length; i++) {
            if (trs[i].getAttribute("userdata")) {
              b.push(trs[i]);
            }
          }var c = [];var text = b && b[index].querySelectorAll("td");for (var j = 0; j < text.length; j++) {
            if (text[j].textContent == '删除') {
              c.push(text[j]);
            }
          }c && c[0].querySelector("a").click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 2000);
        }
      } //附件查看
      if (data.eventType == 'fujianLook') {
        ysp.appMain.showLoading();var title = data.customData.title;var index = parseInt(data.customData.index);var cookies = elem.ownerDocument.cookie;if (FJ) {
          var trs = FJ && FJ.querySelectorAll("tr");var b = [];for (var i = 0; i < trs.length; i++) {
            if (trs[i].getAttribute("userdata")) {
              b.push(trs[i]);
            }
          }var text = b && b[index].querySelectorAll("td");text && text[1].querySelector("a").click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 3000);setTimeout(function () {
            //debugger;
            var hrefs = elem.ownerDocument.defaultView.location.href;var url = hrefs.split(";")[0];var fileUrl = ysp.fileUrl;var urls = fileUrl.split('../')[2];var hostUrl = 'http://ihn.chng.com.cn:20002/webdynpro/dispatcher/' + urls;if (top.EAPI.isAndroid()) {
              huaneng.fujian("ERP", hostUrl, title, cookies, '');
            } else {
              top.EAPI.postMessageToNative("openDocument", { "dbname": hostUrl, "type": "ERP" });
            } // if (top.EAPI.isAndroid()) {
            //     huaneng.fujian("ERP", pname + "/" + url.match(/MoaWeb.*nsf/)[0], dbid, text, cookieValue);
            //   } else {
            //     top.EAPI.postMessageToNative("openDocument", { "dbname": pname + "/" + url.match(/MoaWeb.*nsf/)[0], "dbid": dbid, "text": text, "cookie": cookies.split("LtpaToken=")[1], "type": "OA" });
            //   }
          }, 1000);
        } // top.EAPI.openWindow(url + '?_ysp_filepreview=1'); //top.EAPI.postMessageToNative("openDocument", url);
      } //附件添加
      if (data.eventType == "fujianAdd") {
        ysp.appMain.showLoading();if (FJ) {
          var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
            if (ass[i].textContent == "添加 ") {
              a.push(ass[i]);
            }
          }a && a[0].click();setTimeout(function () {
            $(elem.ownerDocument).find('[ct="POMNI"]').each(function () {
              if (~$(this).text().indexOf('添加文件')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 4000);
        }
      } //选择文件
      if (data.eventType == "fujianFile") {
        if (FJ) {
          var files = FJ && FJ.querySelector("input[type='file']");files && files.click();
        }
      } //附件提交
      if (data.eventType == 'fujianCommit') {
        ysp.appMain.showLoading();var chose = data.customData.chose;if (!chose) {
          alert("请选择需要上传的文件！！");ysp.appMain.hideLoading();return;
        }if (FJ) {
          var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
            if (ass[i].textContent == "确认") {
              a.push(ass[i]);
            }
          }a && a[0].click();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 3000);
        }
      }if (data.eventType == 'select') {
        ysp.appMain.showLoading();var index = data.customData.value;var text = data.customData.text;var keyIdOk;var keyIdNOk;if (YJ) {
          YJ.querySelectorAll('input')[0].click();
        }if (text == '煤炭合同') {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmcght_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmcght_wd.Result-key-1"]');
        }if (text == "其它费用结算") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-1"]');
        }if (text == "燃料付款申请单") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-1"]');
        }if (text == "燃煤结算") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmjs2_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.rmjs2_wd.Result-key-1"]');
        }if (text == "燃料合同作废申请") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_2566_-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_2566_-key-1"]');
        }if (text == "燃煤临购计划") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_3263_-key-1"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.sap.dictionary.string_3263_-key-0"]');
        }if (text == "燃煤销售结算") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlgs.rmxsjs_wd.wd.model.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlgs.rmxsjs_wd.wd.model.ResultType-key-1"]');
        }if (text == "供应商新增申请") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.gyssq_wd.Result-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.gyssq_wd.Result-key-1"]');
        }if (text == "供应商评估结果") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlht.rmgyspg_wd.wd.comp.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rlht.rmgyspg_wd.wd.comp.ResultType-key-1"]');
        }if (text == "燃煤年度采购计划维护") {
          keyIdOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.rmndcgjh_wd.wd.comp.ResultType-key-0"]');keyIdNOk = $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.rmndcgjh_wd.wd.comp.ResultType-key-1"]');
        }if (index == "1") {
          setTimeout(function () {
            keyIdOk.each(function () {
              if (~$(this).text().indexOf('同意')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);
        } else if (index == "2") {
          setTimeout(function () {
            keyIdNOk.each(function () {
              if (~$(this).text().indexOf('不同意')) {
                var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
              }
            });
          }, 2000);
        }setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      }
    },
    getTemplate_uiControl4_hMp5c7: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: false\n    }\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n  handlerChange(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          value:target.value,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickIdea',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  \n  //\u5220\u9664\u9644\u4EF6\n  handlerFujianDelete(e){\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianDelete',\n        data:{\n          index:target.dataset.index,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u67E5\u770B\n  handlerFujianLook(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianLook',\n        data:{\n          text:e.target.dataset.text,\n          title:e.target.dataset.title,\n          index:e.target.dataset.index\n        }\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u6DFB\u52A0\n  handlerFujianAdd(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianAdd',\n        data:e.target.dataset.text\n      })\n    }\n    setTimeout(function(){\n      _this.setState({\n        flag: true\n      })\n    },3000)\n  }\n  \n  //\u9009\u62E9\u6587\u4EF6\n  handlerFujianFile(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianFile',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u9644\u4EF6\u63D0\u4EA4\n  handlerFujianCommit(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianCommit',\n        data:{\n          text:e.target.dataset.text,\n          chose:e.target.dataset.chose\n        }\n      })\n    }\n  }\n  \n  //\u5BA1\u6279\u7ED3\u679C\n  handlerSelect(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'select',\n        data:{\n          value:e.target.value,\n          text:e.target.dataset.text\n        }\n      })\n    }\n  }\n  \n  \n  //\u57FA\u672C\u4FE1\u606F\n  listFor(data,title){\n    var _this = this;\n    return (\n    \t<div>\n      \t<div>{title}</div>\n        <div>{data}</div>\n      </div>\n    )\n  }\n  \n  \n  //\u9644\u4EF6\u7BA1\u7406\n  fujianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-fujian\">\n        <div>\u9644\u4EF6\u7BA1\u7406</div>\n        {\n          data2 && data2[0] ? <div className=\"ysp-deatil-fujian-add\" data-text = {data3} onClick={_this.handlerFujianAdd.bind(_this)}>\u70B9\u51FB\u6DFB\u52A0\u9644\u4EF6</div> : \"\"\n        }\n        \n        {\n          _this.state.flag ? <div>\n            \t<div className=\"ysp-deatil-fujian-file\" data-text = {data3} onClick={_this.handlerFujianFile.bind(_this)}>\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n              <div>\u5F53\u524D\u6240\u9009\u6587\u4EF6\uFF1A{data1}</div>\n        \t\t\t<div className=\"ysp-deatil-fujian-commit\" data-chose = {data1} data-text = {data3} onClick={_this.handlerFujianCommit.bind(_this)}>\u63D0\u4EA4\u9644\u4EF6</div>\n            </div> : \"\"\n        }\n        \n        \n        {\n          data && data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u9644\u4EF6\uFF01\uFF01</div> :\n          data.map(function(d,i){\n            return(\n            \t<div className=\"ysp-deatil-fujian-content\">\n                <div onClick={_this.handlerFujianLook.bind(_this)} data-text = {data3} data-title = {d[0]} data-index = {i}>{d[0]}</div>\n                <div>\n                \t<span>{d[5]}</span>\n                  <span>{d[6]}</span>\n                </div>\n                <div>\n                  <span>{d[7]}</span>\n                  <span onClick={_this.handlerFujianDelete.bind(_this)} data-index = {i} data-text={data3}>{d[8]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n  //\u5BA1\u6279\u610F\u89C1\n  yijianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div>\n        {\n          data2 && data2[0] == null ? '' : <div className=\"ysp-deatil-idea\">\n          \t<div>{title}</div>\n            <div>\n              <ATextarea value = {data} data-text = {data3} onChange={_this.handlerChange.bind(_this)}></ATextarea>\n            </div>\n            {\n              data3 == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? <div>\n                <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div>\n            \t</div> : data3 == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" ? <div>\n                <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div>\n                <div data-text = {data3} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">\n                  \u610F\u89C1\u63D0\u4EA4\n              \t</div>\n            \t</div> :\n            \t<div>\n                <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u7ED3\u679C\uFF1A</span>\n                    <span>\n                      <select data-text = {data3} onChange={_this.handlerSelect.bind(_this)}>\n                        <option value=\"1\">\u540C\u610F</option>\n                        <option value=\"2\">\u4E0D\u540C\u610F</option>\n                      </select>\n                    </span>\n                  </div>\n                  \n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div>\n                <div data-text = {data3} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">\n                  \u610F\u89C1\u63D0\u4EA4\n              \t</div>\n            \t</div>\n            }\n          </div>\n        }\n        \n        \n      </div>\n    )\n  }\n  //\u5BA1\u6279\u5386\u53F2\n  historyFor(data,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-history\">\n        <div>{title}</div>\n        {\n          data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div> : data.map(function(d,i){\n            return(\n              <div className=\"ysp-detail-history-content\">\n                <div>\n                \t<span>{d[0]}</span>\n                \t<span>{d[1]}</span>\n                </div>\n                <div>\n                \t<span>{d[2]}</span>\n                \t<span>{d[3]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n        \n      </div>\n    )\n  }\n  \n  render(){\n    var _this = this;\n    if(_this.props.customData){\n      var FlagText = this.props.customData && this.props.customData.flagText;\n      var Basic = this.props.customData && this.props.customData.bas;\n      var FujianContent = this.props.customData && this.props.customData.fujianContent;\n      var FujianFile = this.props.customData && this.props.customData.fujianFile;\n      var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n      var History = this.props.customData && this.props.customData.history;\n      var Idea = this.props.customData && this.props.customData.idea;\n      var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;  \n      var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n      return (\n        <div>\n          {\n            localStorage.setStyle == \"true\" ? <div>\n              \t{\n                  (FlagText == \"\u5176\u5B83\u8D39\u7528\u7ED3\u7B97\" || FlagText == \"\u71C3\u7164\u4E34\u8D2D\u8BA1\u5212\" || FlagText == \"\u71C3\u6599\u4ED8\u6B3E\u7533\u8BF7\u5355\" || FlagText == \"\u71C3\u7164\u7ED3\u7B97\" || FlagText == \"\u71C3\u6599\u5408\u540C\u4F5C\u5E9F\u7533\u8BF7\" || FlagText == \"\u71C3\u7164\u9500\u552E\u7ED3\u7B97\" || FlagText == \"\u4F9B\u5E94\u5546\u65B0\u589E\u7533\u8BF7\" || FlagText == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" || FlagText == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" || FlagText == \"\u4F9B\u5E94\u5546\u8BC4\u4F30\u7ED3\u679C\" || FlagText == \"\u71C3\u7164\u5E74\u5EA6\u91C7\u8D2D\u8BA1\u5212\u7EF4\u62A4\" || FlagText == '\u7164\u70AD\u5408\u540C') ? <div>\n                    {/*this.listFor(Basic,'\u57FA\u672C\u4FE1\u606F')*/}\n                    {this.fujianFor(FujianContent,FujianFile,FujianFlag,FlagText,\"\u9644\u4EF6\u7BA1\u7406\")}\n                    {this.yijianFor(Idea,IdeaEnding,IdeaPerson,FlagText,'\u5BA1\u6279\u610F\u89C1')}\n                    {this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")}\n                    </div> : <div style ={{'color':'red',\"text-align\":'center'}}>\n                  \t\t\u6B64\u5BA1\u6279\u7C7B\u578B\u6B63\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01\uFF01\n                  \t</div>\n                }\n              </div> : <div style={{'color':'red','text-align':'center'}}>\u56E0\u8BE5\u6D41\u7A0B\u4E0D\u662F\u5BA1\u6279\u7C7B\u578B\uFF0C\u6545\u8BF7\u60A8\u4ECEPC\u7AEF\u529E\u7406\uFF01\uFF01</div>\n          }\n          \n          \n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}>\n        </div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: false\n    };\n    return _this2;\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'change',\n          data: {\n            value: target.value,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickIdea',\n          data: e.target.dataset.text\n        });\n      }\n    }\n\n    //\u5220\u9664\u9644\u4EF6\n\n  }, {\n    key: 'handlerFujianDelete',\n    value: function handlerFujianDelete(e) {\n      var _this = this;\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianDelete',\n          data: {\n            index: target.dataset.index,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u67E5\u770B\n\n  }, {\n    key: 'handlerFujianLook',\n    value: function handlerFujianLook(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianLook',\n          data: {\n            text: e.target.dataset.text,\n            title: e.target.dataset.title,\n            index: e.target.dataset.index\n          }\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u6DFB\u52A0\n\n  }, {\n    key: 'handlerFujianAdd',\n    value: function handlerFujianAdd(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianAdd',\n          data: e.target.dataset.text\n        });\n      }\n      setTimeout(function () {\n        _this.setState({\n          flag: true\n        });\n      }, 3000);\n    }\n\n    //\u9009\u62E9\u6587\u4EF6\n\n  }, {\n    key: 'handlerFujianFile',\n    value: function handlerFujianFile(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianFile',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u9644\u4EF6\u63D0\u4EA4\n\n  }, {\n    key: 'handlerFujianCommit',\n    value: function handlerFujianCommit(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianCommit',\n          data: {\n            text: e.target.dataset.text,\n            chose: e.target.dataset.chose\n          }\n        });\n      }\n    }\n\n    //\u5BA1\u6279\u7ED3\u679C\n\n  }, {\n    key: 'handlerSelect',\n    value: function handlerSelect(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'select',\n          data: {\n            value: e.target.value,\n            text: e.target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u57FA\u672C\u4FE1\u606F\n\n  }, {\n    key: 'listFor',\n    value: function listFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          null,\n          data\n        )\n      );\n    }\n\n    //\u9644\u4EF6\u7BA1\u7406\n\n  }, {\n    key: 'fujianFor',\n    value: function fujianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-fujian' },\n        React.createElement(\n          'div',\n          null,\n          '\\u9644\\u4EF6\\u7BA1\\u7406'\n        ),\n        data2 && data2[0] ? React.createElement(\n          'div',\n          { className: 'ysp-deatil-fujian-add', 'data-text': data3, onClick: _this.handlerFujianAdd.bind(_this) },\n          '\\u70B9\\u51FB\\u6DFB\\u52A0\\u9644\\u4EF6'\n        ) : \"\",\n        _this.state.flag ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-file', 'data-text': data3, onClick: _this.handlerFujianFile.bind(_this) },\n            '\\u8BF7\\u9009\\u62E9\\u6587\\u4EF6'\n          ),\n          React.createElement(\n            'div',\n            null,\n            '\\u5F53\\u524D\\u6240\\u9009\\u6587\\u4EF6\\uFF1A',\n            data1\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-commit', 'data-chose': data1, 'data-text': data3, onClick: _this.handlerFujianCommit.bind(_this) },\n            '\\u63D0\\u4EA4\\u9644\\u4EF6'\n          )\n        ) : \"\",\n        data && data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u9644\\u4EF6\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-content' },\n            React.createElement(\n              'div',\n              { onClick: _this.handlerFujianLook.bind(_this), 'data-text': data3, 'data-title': d[0], 'data-index': i },\n              d[0]\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[6]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[7]\n              ),\n              React.createElement(\n                'span',\n                { onClick: _this.handlerFujianDelete.bind(_this), 'data-index': i, 'data-text': data3 },\n                d[8]\n              )\n            )\n          );\n        })\n      );\n    }\n    //\u5BA1\u6279\u610F\u89C1\n\n  }, {\n    key: 'yijianFor',\n    value: function yijianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        data2 && data2[0] == null ? '' : React.createElement(\n          'div',\n          { className: 'ysp-deatil-idea' },\n          React.createElement(\n            'div',\n            null,\n            title\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(ATextarea, { value: data, 'data-text': data3, onChange: _this.handlerChange.bind(_this) })\n          ),\n          data3 == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-deatil-idea-end' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data2\n                )\n              )\n            )\n          ) : data3 == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" ? React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-deatil-idea-end' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data2\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              { 'data-text': data3, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit' },\n              '\\u610F\\u89C1\\u63D0\\u4EA4'\n            )\n          ) : React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-deatil-idea-end' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u7ED3\\u679C\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  React.createElement(\n                    'select',\n                    { 'data-text': data3, onChange: _this.handlerSelect.bind(_this) },\n                    React.createElement(\n                      'option',\n                      { value: '1' },\n                      '\\u540C\\u610F'\n                    ),\n                    React.createElement(\n                      'option',\n                      { value: '2' },\n                      '\\u4E0D\\u540C\\u610F'\n                    )\n                  )\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data2\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              { 'data-text': data3, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit' },\n              '\\u610F\\u89C1\\u63D0\\u4EA4'\n            )\n          )\n        )\n      );\n    }\n    //\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'historyFor',\n    value: function historyFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-history' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-detail-history-content' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var FlagText = this.props.customData && this.props.customData.flagText;\n        var Basic = this.props.customData && this.props.customData.bas;\n        var FujianContent = this.props.customData && this.props.customData.fujianContent;\n        var FujianFile = this.props.customData && this.props.customData.fujianFile;\n        var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n        var History = this.props.customData && this.props.customData.history;\n        var Idea = this.props.customData && this.props.customData.idea;\n        var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;\n        var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n        return React.createElement(\n          'div',\n          null,\n          localStorage.setStyle == \"true\" ? React.createElement(\n            'div',\n            null,\n            FlagText == \"\u5176\u5B83\u8D39\u7528\u7ED3\u7B97\" || FlagText == \"\u71C3\u7164\u4E34\u8D2D\u8BA1\u5212\" || FlagText == \"\u71C3\u6599\u4ED8\u6B3E\u7533\u8BF7\u5355\" || FlagText == \"\u71C3\u7164\u7ED3\u7B97\" || FlagText == \"\u71C3\u6599\u5408\u540C\u4F5C\u5E9F\u7533\u8BF7\" || FlagText == \"\u71C3\u7164\u9500\u552E\u7ED3\u7B97\" || FlagText == \"\u4F9B\u5E94\u5546\u65B0\u589E\u7533\u8BF7\" || FlagText == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" || FlagText == \"\u8BE2\u62A5\u4EF7\u91C7\u8D2D\u7BA1\u7406\" || FlagText == \"\u4F9B\u5E94\u5546\u8BC4\u4F30\u7ED3\u679C\" || FlagText == \"\u71C3\u7164\u5E74\u5EA6\u91C7\u8D2D\u8BA1\u5212\u7EF4\u62A4\" || FlagText == '\u7164\u70AD\u5408\u540C' ? React.createElement(\n              'div',\n              null,\n              this.fujianFor(FujianContent, FujianFile, FujianFlag, FlagText, \"\u9644\u4EF6\u7BA1\u7406\"),\n              this.yijianFor(Idea, IdeaEnding, IdeaPerson, FlagText, '\u5BA1\u6279\u610F\u89C1'),\n              this.historyFor(History, \"\u5BA1\u6279\u5386\u53F2\")\n            ) : React.createElement(\n              'div',\n              { style: { 'color': 'red', \"text-align\": 'center' } },\n              '\\u6B64\\u5BA1\\u6279\\u7C7B\\u578B\\u6B63\\u5728\\u5EFA\\u8BBE\\u4E2D\\uFF0C\\u656C\\u8BF7\\u671F\\u5F85\\uFF01\\uFF01'\n            )\n          ) : React.createElement(\n            'div',\n            { style: { 'color': 'red', 'text-align': 'center' } },\n            '\\u56E0\\u8BE5\\u6D41\\u7A0B\\u4E0D\\u662F\\u5BA1\\u6279\\u7C7B\\u578B\\uFF0C\\u6545\\u8BF7\\u60A8\\u4ECEPC\\u7AEF\\u529E\\u7406\\uFF01\\uFF01'\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "detail");
})(window, ysp);