(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control3_pfWerD: function (elem) {
      "use strict";

      ;
    },
    doAction_uiControl3_Ux5ohk: function (data, elem) {
      "use strict";

      if (data.eventType == "click") {
        //   var lis = elem.querySelectorAll("li");
        //   var index;
        //   for (var i = 0; i < lis.length; i++) {
        //     if (" 退出 " == lis[i].textContent) {
        //       index = i;
        //     }
        //   }
        //   elem.querySelectorAll("li") && elem.querySelectorAll("li")[index].querySelector("a").click();
        //   var elem = elem.ownerDocument;
        //   var dialog = $(elem).find('.ui_state_lock').find('table').find('.ui_buttons').find('input').eq(1);
        //   if (dialog.val() == '不保存') {
        //     dialog.click();
        //   }
        elem.ownerDocument.defaultView.close();
      }
    },
    getTemplate_uiControl3_Ux5ohk: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount(){\n    var elem = this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    setTimeout(function(){\n      elem.scrollTop=0;\n    },500)\n  },\n  handlerClick(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-header\" ref=\"toTop\">\n        <div onClick={this.handlerClick.bind(this)}></div>\n        <div>\u516C\u53F8\u6536\u6587\u6D41\u7A0B</div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n  componentDidMount: function componentDidMount() {\n    var elem = this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    setTimeout(function () {\n      elem.scrollTop = 0;\n    }, 500);\n  },\n  handlerClick: function handlerClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-header\", ref: \"toTop\" },\n      React.createElement(\"div\", { onClick: this.handlerClick.bind(this) }),\n      React.createElement(\n        \"div\",\n        null,\n        \"\\u516C\\u53F8\\u6536\\u6587\\u6D41\\u7A0B\"\n      )\n    );\n  }\n});";
    },
    getData_control6_uBXHGv: function (elem) {
      "use strict";

      ;var data = [];var title = "";if (title = elem.querySelector("input")) {
        title = elem.querySelector("input").value;
      } else {
        title = elem.textContent.trim();
      }data.push(title);return data;
    },
    doAction_uiControl6_7aXMK8: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl6_7aXMK8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-content-top\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-content-top\" },\n      data\n    );\n  }\n});";
    },
    getData_control7_9k4Pkb: function (elem) {
      ;if (!elem) {
        return;
      }var data = { content: [], fujian: [], liucheng: [], liuchengNUM: [], yijian: [], but: [], tuihuiTitle: [], tuihuiTitleFlag: [], commitLZ: [], treeBar: [], selectApar: [] }; // 签发人：
      // 主办部门：
      // 主送单位：
      // 拟稿人：
      // 日期：
      // 节点名称：
      // 代办类型：
      //意见：
      //内容start
      var _qfr = elem.querySelector("input[name='fldTM']");var qfr = "";if (_qfr) {
        qfr = _qfr.value;
      } else {
        qfr = elem.querySelectorAll(".table_list_blk")[0].querySelector("dd").textContent;
      }var _zbbm = elem.querySelectorAll(".table_list_blk")[1].querySelector("dd");var zbbm = "";if (_zbbm) {
        zbbm = _zbbm.textContent;
      }var _zsdwIndex = elem.querySelectorAll(".table_list_blk")[2].querySelector("select");var zsdw = "";if (_zsdwIndex) {
        // console.log("1");
        // console.log(elem.querySelectorAll(".table_list_blk")[2].querySelector("select").selectedIndex)
        zsdw = elem.querySelectorAll(".table_list_blk")[2].querySelector("select").options[_zsdwIndex.selectedIndex].text;
      } else {
        zsdw = elem.querySelectorAll(".table_list_blk")[2].querySelector("dd").textContent.trim();
      }var _csdwIndex = elem.querySelectorAll(".table_list_blk")[3].querySelector("select");var csdw = "";if (_csdwIndex) {
        csdw = elem.querySelectorAll(".table_list_blk")[3].querySelector("select").options[_csdwIndex.selectedIndex].text;
      } else {
        csdw = elem.querySelectorAll(".table_list_blk")[3].querySelector("dd").textContent.trim();
      }var _ngr = elem.querySelectorAll(".table_list_blk")[4].querySelector("input");var ngr = "";if (_ngr) {
        ngr = _ngr.value;
      } else {
        ngr = elem.querySelectorAll(".table_list_blk")[4].querySelector("dd").textContent;
      }var _rq = elem.querySelectorAll(".table_list_blk")[5].querySelector("input");var rq = "";if (_rq) {
        rq = _rq.value;
      } else {
        rq = elem.querySelectorAll(".table_list_blk")[5].querySelector("dd").textContent;
      }var _jdmcIndex = elem.querySelectorAll(".table_list_blk")[6].querySelector("select");var jdmc = "";if (_jdmcIndex) {
        jdmc = elem.querySelectorAll(".table_list_blk")[6].querySelector("select").options[_jdmcIndex.selectedIndex].text;
      } else {
        jdmc = elem.querySelectorAll(".table_list_blk")[6].querySelector("dd").textContent;
      }var _dblx = elem.querySelector("input[name='fldZBBMShow']");var dblx = "";if (_dblx) {
        dblx = _dblx.value;
      } else {
        dblx = elem.querySelectorAll(".table_list_blk")[7].querySelector("dd").textContent.trim();
      }var _yj = elem.querySelector("input[name='fldZRZ']");var yj = "";if (_yj) {
        yj = _yj.value;
      } else {
        yj = elem.querySelectorAll(".table_list_blk")[8].querySelector("dd").textContent.trim();
      }var _ywh = elem.querySelectorAll(".table_list_blk")[9].querySelector("dd"); // console.log(_ywh)
      var ywh = "";if (_ywh) {
        ywh = _ywh.textContent;
      }var _ywrq = elem.querySelector("input[name='fldYWRQ']");var ywrq = "";if (_ywrq) {
        ywrq = _ywrq.value;
      }var zysw = "";var fldZYSW1 = elem.querySelector("input[name='fldZYSW']");if (fldZYSW1 && fldZYSW1.type == "radio") {
        fldZYSW1.checked ? zysw = "是" : zysw = "否";
      } else {
        zysw = fldZYSW1.value;
      }var sfgd = "";var fldZYSW2 = elem.querySelector("input[name='fldSFGD']");if (fldZYSW2 && fldZYSW2.type == "radio") {
        fldZYSW2.checked ? sfgd = "是" : sfgd = "否";
      } else {
        sfgd = fldZYSW2.value;
      } // 节点名称
      var _txyj = elem.ownerDocument.querySelector('textarea[name="fldYijian"]');if (_txyj) {
        data.txyj = elem.ownerDocument.querySelector('textarea[name="fldYijian"]').value;
      } else {
        data.txyj = "";
      }data.content.push(qfr, zbbm, zsdw, csdw, ngr, rq, jdmc, dblx, yj, ywh, ywrq, zysw, sfgd); //内容end
      //附件开始
      var fujianDls = $(elem).find('.down_table_list').find('#down_table_list_text') && $(elem).find('.down_table_list').find('#down_table_list_text').find('dl');if (fujianDls.length != 0) {
        fujianDls && fujianDls.map(function (j, q) {
          // console.log(q);
          if ($(q).find('.file_name').find('a').text() != "") {
            var obj = {};var typePh = $(q).find('.file_name').find('a').text();var typeP = typePh.indexOf('xls') > -1 == true ? 'xls' : typePh.indexOf('ppt') > -1 == true ? 'ppt' : typePh.indexOf('docx') > -1 == true ? 'docx' : '';obj.typeP = typeP;obj.text = $(q).find('.file_name').find('a').text();obj.time = $(q).find('.file_num').find('span').text();var cwin = elem.ownerDocument;var port = cwin.defaultView.location.port;var _web = cwin.defaultView.location.href.split("/")[3];var attachUrl = '/' + _web + '/' + cwin.forms[0].fldQxxxDbName.value + '/($All)/' + cwin.forms[0].fldQXXXID.value + '/$FILE/' + $(q).find('.file_name').find('a').text();var url = "http://59.110.171.69:" + port + "/" + encodeURIComponent(attachUrl);obj.url = url;obj.cookies = cwin.cookie;obj.dbid = cwin.forms[0].fldQXXXID.value;data.fujian.push(obj);
          } else {
            var obj = {};obj.typeP = '';obj.text = '暂无附件';obj.time = '';data.fujian.push(obj);
          }
        });
      } else {
        var obj = {};obj.typeP = '';obj.text = '暂无附件';obj.time = '';data.fujian.push(obj);
      } //附件完
      var liuchengTable = $(elem).find("#comment_table").find("tbody");if (liuchengTable.length == 0) {
        var obj = {};obj.text = '暂无流程';data.liucheng.push(obj);
      } else {
        liuchengTable.map(function (d, t) {
          if (d > 0) {
            var obj = {};obj.text = $(t).find("td").eq(0).text().replace(/\s/g, "");var str = $(t).find("td").eq(1).text();
            var arr = str.split(' ');obj.content = arr[1];obj.day = arr[2] + ' ' + arr[3]; //       var date = new Date();
            //       var day = date.getDay();
            //       if (day == '1') {
            //         day = '一';
            //       } else if (day == '2') {
            //         day = '二';
            //       } else if (day == '3') {
            //         day = '三';
            //       } else if (day == '4') {
            //         day = '四';
            //       } else if (day == '5') {
            //         day = '五';
            //       } else if (day == '6') {
            //         day = '六';
            //       } else if (day == '0') {
            //         day = '天';
            //       }
            //       obj.day = '星期' + day;
            data.liucheng.push(obj);
          }
        });var obj2 = {};obj2.num = liuchengTable.length - 2;data.liuchengNUM.push(obj2);
      } //流程完
      //常用意见start
      var list = elem.ownerDocument.querySelector("#common_view_list");var lis = list && list.querySelectorAll("li");if (lis.length > 0) {
        for (var i = 0; i < lis.length; i++) {
          data.yijian.push(lis[i].querySelector("a").textContent);
        }
      } else {
        data.yijian.push('常用意见暂无数据');
      } //常用意见end
      //常用意见end
      //按钮数量（暂存、退回）start
      var release = elem.ownerDocument.querySelector(".Release");var lis = release && release.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
        if ("暂存" == lis[i].querySelector("span").textContent || "退回" == lis[i].querySelector("span").textContent) {
          data.but.push(lis[i]);
        }
      }data.enniu = [];var release = elem.ownerDocument.querySelector(".Release");var lis = release && release.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
        if ("阅毕" == lis[i].querySelector("span").textContent) {
          data.enniu.push(lis[i].textContent);
        } else {
          data.enniu.push("1");
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
      var commitLZS = $(elem).find('.path') && $(elem).find('.path').find('ul.path_btn') && $(elem).find('.path').find('ul.path_btn').find('span');commitLZS && commitLZS.map(function (d, t) {
        var obj = {};obj.textC = t.textContent;data.commitLZ.push(obj);
      }); //选择流向
      if ($(elem).find('.ui_border').find('.ui_content').find('.ui_loading').length != 0) {
        var iframes = $(elem).find('.ui_border').find('.ui_content').find('.ui_loading').next()[0] && $(elem).find('.ui_border').find('.ui_content').find('.ui_loading').next()[0].contentDocument.documentElement;var divs = $(iframes).find('#selectflowuser').children();var trees = $(iframes).find('#selectflowuser') && $(iframes).find('#selectflowuser').find('.t_root');divs.map(function (d, t) {
          if (d > 1 && t.style.display != 'none') {
            if ($(t).find('legend').next()[0] && $(t).find('legend').next()[0].tagName == 'P') {
              $(t).find('p').map(function (q, l) {
                var obj = {};obj.text = $(l).text().replace(/\√/g, "");obj.trueFalse = $(l).text().indexOf('√') > -1 ? 'true' : 'false'; // obj.trueFalse = $(l)[0].getAttribute("selected") == 'noSelected' || $(l)[0].getAttribute("selected") == null ? 'false' : 'true';
                obj.type = 'P';data.selectApar.push(obj);
              });
            } else {
              if ($(t).find('legend').next()[0] && $(t).find('legend').next()[0].tagName == 'SELECT') {
                $(t).find('option').map(function (q, l) {
                  var obj = {};obj.text = $(l).text().replace(/\√/g, "");obj.trueFalse = $(l).text().indexOf('√') > -1 ? 'true' : 'false'; // obj.trueFalse = $(l)[0].getAttribute("selected") == 'noSelected' || $(l)[0].getAttribute("selected") == null ? 'false' : 'true';
                  obj.type = 'OPTION';data.selectApar.push(obj);
                });
              }
            }
          } else if (d == 1) {
            //树结构
            var domtree = trees.find('.t_node');domtree.map(function (d, t) {
              var obj = {};obj.title = $(t).find('label').eq(0).text();obj.dis = 'block';obj.indx = d;obj.array = [];$(t).find('.t_leaf').map(function (q, l) {
                var obj2 = {};obj2.text = $(l).find('label').text();obj2.indx = q;obj2.dis = l.parentElement.parentElement.getAttribute('class').indexOf('expanded') > -1 ? 'block' : 'none';obj.array.push(obj2);
              });data.treeBar.push(obj);
            });
          }
        });
      } //选择办理人，需要跨iframe获取数据
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
        }a && a[0].querySelector("a").click();var port = elem.ownerDocument.defaultView.location.port;var _web = elem.ownerDocument.defaultView.location.href.split("/")[3];var url = "http://59.110.171.69:" + port + "/" + _web + "/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf";ysp.appMain.reloadPage(url);
      }if (type == "YB") {
        var a = [];var release = elem.ownerDocument.querySelector(".Release");var lis = release && release.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
          if ("阅毕" == lis[i].querySelector("span").textContent) {
            a.push(lis[i]);
          }
        }a && a[0].querySelector("a").click(); // var url = "http://59.110.171.69:31003/WebOffice/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf";
        // ysp.appMain.reloadPage(url);
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
          var trs = datagrid.querySelector('table[class="datagrid-btable"]').querySelector("tbody").querySelectorAll("tr");trs && trs[index].click();
        }var dialog = elem.ownerDocument.querySelector('table[class="ui_dialog"]') && elem.ownerDocument.querySelector('table[class="ui_dialog"]').querySelector(".ui_state_highlight");dialog && dialog.click();var port = elem.ownerDocument.defaultView.location.port;var _web = elem.ownerDocument.defaultView.location.href.split("/")[3];var url = "http://59.110.171.69:" + port + "/" + _web + "/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf";ysp.appMain.reloadPage(url);ysp.appMain.showLoading();
      }if (data.eventType == 'Liclick') {
        ysp.appMain.showLoading();var data = data.dataCustom;var commitLZS = $(elem).find('.path') && $(elem).find('.path').find('ul.path_btn') && $(elem).find('.path').find('ul.path_btn');commitLZS.find('a').eq(data).click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 500);
      } else if (data.eventType == 'closeChiosep') {
        var iframes = $(elem).find('.ui_border').find('.ui_title_buttons').find('.ui_close').click(); //关闭选人的弹框
      } else if (data.eventType == 'peopleChioseClick') {
        //选人的确定，手动关闭页面和手动添加select内容
        var loading = elem.ownerDocument.querySelector(".ui_loading");var iframe = loading && loading.nextElementSibling;var datagrid = iframe && iframe.contentDocument.querySelector("#selectflowuser");if (datagrid != null) {
          var selectsDiv = datagrid.querySelectorAll("div") && datagrid.querySelectorAll("div")[2];var options = selectsDiv.querySelector("select") && selectsDiv.querySelector("select").querySelectorAll("option");if (options != null) {
            var aa = [];for (var i = 0; i < options.length; i++) {
              var selected = options[i].getAttribute("selected");var selectedClass = options[i].getAttribute('class');if ("selected" == selected || "selected" == selectedClass) {
                aa.push(i);
              }
            }
          }
        }elem.ownerDocument.defaultView.localStorage.setItem("personNum", aa);var iframes = $(elem).find('.ui_border').find('.ui_content').find('.ui_loading').next()[0].contentDocument.documentElement;$(iframes).find('.ui_send').click();if ("" != aa && aa != "null" && aa != "undefined" && aa != undefined) {
          var port = elem.ownerDocument.defaultView.location.port;var _web = elem.ownerDocument.defaultView.location.href.split("/")[3];var url = "http://59.110.171.69:" + port + "/" + _web + "/MoaWebConfigSet.nsf/fomBoxList4?OpenForm&v=viwInBox&d=MoaWebOffice.nsf";ysp.appMain.reloadPage(url);
        } //   var lis = elem.querySelectorAll("li");
        //   var index;
        //   for (var i = 0; i < lis && lis.length; i++) {
        //       index = i;
        //     }
        //   var elem = elem.ownerDocument;
        //   var dialog = $(elem).find('.ui_state_lock').find('table').find('.ui_buttons').find('input').eq(1);
        //   if (dialog.val() == '不保存') {
        //     dialog.click();
        //   } 
        //选人后手动点击关闭
      } else if (data.eventType == 'radioClick') {
        var data = data.customData;var iframes = $(elem).find('.ui_border').find('.ui_content').find('.ui_loading').next()[0].contentDocument.documentElement;var selectflowuser = $(iframes).find('#selectflowuser').find('fieldset').eq(2);if (selectflowuser.children()[1].tagName == 'P') {
          var selects = selectflowuser.find('select') && selectflowuser.find('p');
        } else {
          var selects = selectflowuser.find('select') && selectflowuser.find('select').find('option')[data]; // $(selects).mousedown().click().mouseup(); 
          selects.selected = true;selects.setAttribute('class', 'selected');var evt = document.createEvent('MouseEvent');evt.initMouseEvent('change', true, true);
          selects.dispatchEvent(evt); //     if (selects.getAttribute('selected') != 'selected') {
          //       selects.setAttribute("selected", "selected");
          //     } else {
          //       selects.setAttribute("selected", "noSelected");
          //     }
        } //选人的多选
      }if (data.eventType == 'clickFJ') {
        var lis = elem.ownerDocument.querySelector('.btns') && elem.ownerDocument.querySelector('.btns').querySelectorAll('li');var a = [];for (var i = 0; i < lis.length; i++) {
          if (lis[i].textContent == " 文件下载 ") {
            a.push(lis[i]);
          }
        }if (a.length > 0) {
          a && a[0].querySelector("a") && a[0].querySelector("a").click();
        }
      } //点击附件方法
      if (data.eventType == 'fujian') {
        var url = data.dataCustom.url;var cookies = data.dataCustom.cookies;var text = data.customData.text;if (text.indexOf('草稿：') > -1) {
          text = 'caogao.doc';
        }if (text.indexOf('草稿2：') > -1) {
          text = 'caogao2.doc';
        }if (text.indexOf("签报正文：") > -1) {
          if (text.indexOf(".doc") > -1) {
            text = "QianBaoZW.doc";
          } else if (text.indexOf(".ceb") > -1) {
            text = "QianBaoZW.ceb";
          }
        }if (text.indexOf("正文：") > -1) {
          var uiloading = elem.ownerDocument.querySelector(".ui_loading") && elem.ownerDocument.querySelector(".ui_loading").nextElementSibling;var fldswflag = uiloading && uiloading.contentDocument.documentElement.querySelector('input[name="fldswflag"]').value;var fldmodule = uiloading && uiloading.contentDocument.documentElement.querySelector('input[name="fldmodule"]').value;if (text.indexOf(".doc") > -1) {
            if (fldmodule == "收文") {
              if (fldswflag == "1") {
                text = "zhengwen.doc";
              } else {
                text = text.substring(3, text.length);
              }
            } else {
              text = "zhengwen.doc";
            }
          } else {
            if (fldmodule == "收文") {
              if (fldswflag == "1") {
                if (text.indexOf(".pdf") > -1) {
                  text = "zhengwen.pdf";
                } else {
                  text = "zhengwen.ceb";
                }
              } else {
                text = text.substring(3, text.length);
              }
            } else {
              //判断是否是pdf正文
              if (text.indexOf(".pdf") > -1) {
                text = "zhengwen.pdf";
              } else {
                text = "zhengwen.ceb";
              }
            }
          }
        }if (text.indexOf('正文：') > -1) {
          if (text.indexOf('.pdf') > -1) {
            text = text.substring(3, text.length);
          } else {
            var fileType = text.split(".")[1];var a = fileType.length;text = 'zhengwen.' + fileType;
          }
        }if (text.indexOf("办理单2：") > -1) {
          text = "banlidan2.doc";
        }if (text.indexOf("办理单：") > -1) {
          if (text.indexOf(".doc") > -1) {
            text = "banlidan.doc";
          } else if (text.indexOf(".ceb") > -1) {
            text = "banlidan.ceb";
          }
        }if (text.indexOf("CEB病文：") > -1) {
          text = "errorceb.ceb";
        }if (text.indexOf("Word病文2：") > -1) {
          text = "bingwen.doc";
        }if (text.indexOf("Word病文：") > -1) {
          text = "bingwen.doc";
        }if (text.indexOf("签报单：") > -1) {
          text = "qianbaodan.doc";
        }var dbid = data.dataCustom.dbid;var cookieValue = cookies; //window.location.href = 'vmeet://download?url=' + url + '&cookie=' + cookie + '&filename=移动商业智能系统';
        //elem.ownerDocument.defaultView.huaneng.fujian(url, cookies, text); //elem.ownerDocument.defaultView.fujian(url, cookies, text);
        //EAPI.fujain(url, cookies, text);
        if (top.EAPI.isAndroid()) {
          huaneng.fujian("OA", url.match(/MoaWeb.*nsf/)[0], dbid, text, cookieValue);
        } else {
          //top.EAPI.openWindow(url + '?_ysp_filepreview=1');
          //top.EAPI.postMessageToNative("openDocument", url);
          top.EAPI.postMessageToNative("openDocument", { "dbname": url.match(/MoaWeb.*nsf/)[0], "dbid": dbid, "text": text, "cookie": cookies.split("LtpaToken=")[1], "type": "OA" });
        }
      }
    },
    getTemplate_uiControl7_IlizWN: function () {
      var selfTemplate = "\n\nimport {Component} from 'react';\n\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag:true,//\u5185\u5BB9\n      flag1:false,//\u9644\u4EF6\n      flag2:false,//\u6D41\u7A0B\n      flag3:false,//\u5E38\u7528\u610F\u89C1\n      flag4:false,//\u9000\u56DE\u4FE1\u606F\n      commitModal:false,\n      renderModal:true,\n      flowIndx:'a',\n      peopleFLOW:0//\u9009\u4EBA\u90E8\u5206\u7684\u663E\u793A\u9690\u85CF\n    }\n  }\n  handlerNR(e){\n    var that = this;\n    that.setState({\n      flag:true,\n      flag1:false,\n      flag2:false,\n    })\n  }\n  handlerFJ(e){\n    var that = this;\n    var handler = that.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickFJ'\n      })\n    }\n    that.setState({\n      flag:false,\n      flag1:true,\n      flag2:false,\n    })\n  }\n  handlerLC(e){\n    var that = this;\n    that.setState({\n      flag:false,\n      flag1:false,\n      flag2:true,\n    })\n  }\n  textareaChange(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"textareaChange\",\n        data:e.target.value\n      })\n    }\n  }\n  handlerPZ(){\n    var that = this;\n    that.setState({\n      flag3:true\n    })\n  }\n  handlerCY(){\n    var that = this;\n    that.setState({\n      flag3:false\n    })\n  }\n  handleryijian(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'yijian',\n        data:e.target.dataset.index\n      })\n    }\n    this.setState({\n      flag3:false\n    })\n  }\n  handlerZC(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'ZC'\n      })\n    }\n    yap.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500)\n  }\n  handlerYB(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'YB'\n      })\n    }\n  }\n  handlerTH(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'TH'\n      })\n    }\n    this.setState({\n      flag4:true\n    })\n    ysp.appMain.showLoading();\n    setTimeout(function(){\n      ysp.appMain.hideLoading();\n    },500)\n  }\n  handlerTHClose(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"THClose\"\n      })\n    }\n    this.setState({\n      flag4:false\n    })\n  }\n  handlerTHTitle(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"ysp-contentSW-thTitleFitst\" == classTitle || \"ysp-contentSW-thTitleSecond\" == classTitle){\n      dom = e.target.parentElement;\n    } else if(\"ysp-contentSW-thTitle\" == classTitle){\n      dom = e.target;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"THTitle\",\n        data:dom.dataset.index\n      })\n    }\n  }\n  handle(data,eventType) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({data,eventType});\n    }\n  }  \n  handlerPeople(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\"peopleChioseClick\"\n      })\n    }\n  }\n  handlerfujian(e){\n    var classTitle = e.target.className;\n    var dom;\n    if(\"classTypeP\" == classTitle || \"classTypeW\" == classTitle || \"classTypeX\" == classTitle || \"classTypeo\" == classTitle || \"classTypeText\" == classTitle){\n      dom = e.target.parentElement;\n    } else {\n      dom = e.target;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujian',\n        data:{\n          url:dom.dataset.url,\n          cookies: dom.dataset.cookies,\n          text: dom.dataset.text,\n          dbid: dom.dataset.dbid\n        }\n      })\n    }\n  }\n  commit(){\n    var me = this,data=this.props.customData;\n    return <div className='D_choiseFlow'>\n      <div className=\"ysp-header\" >\n        <div onClick={()=>{\n            this.setState({...this.state,commitModal:false,renderModal:true})\n          }}></div>\n        <div>\u8BF7\u9009\u62E9\u6D41\u5411</div>\n       </div>\n    \t<div className='D_flowList' style={{display:me.state.peopleFLOW==0?'block':'none'}}>\n      \t{data&&data.commitLZ&&data.commitLZ.map(function(d,t){\n          return (<li className={me.state.flowIndx==t?'changC':''} onClick={()=>{\n              me.handle(t,'Liclick')\n              me.setState({flowIndx:t,peopleFLOW:'a'})\n            }}><span>{d.textC}</span><span style={{display:me.state.flowIndx==t?'block':'none'}}>\u221A</span></li>)\n        })}\n      </div>\n      <div className='D_chiosePeople' style={{display:me.state.peopleFLOW==0?'none':'block'}}>  \n      \t<div className=\"ysp-header\" >\n        <div onClick={()=>{\n            this.setState({...this.state,peopleFLOW:0})\n            me.handle('','closeChiosep')\n          }}></div>\n        <div style={{textAlign:'center'}}>\u8BF7\u9009\u62E9\u529E\u7406\u4EBA</div>\n        <div style={{paddingRight:'15px'}} onClick = {me.handlerPeople.bind(me)}>\u786E\u5B9A</div>\n       </div>\n \t\t\t\t<div className='treeBody' style={{display:data.treeBar[0]?'block':'none'}}>\n          {data&&data.treeBar[0]&&data.treeBar.map(function(d,t){\n            return (<div><li onClick={()=>{\n                  me.handle(t,'flowTitle')\n                }} style={{display:d.dis}} indexs={d.indx}><span style={{color:'blue'}}>+</span> {d.title}</li>\n              <div>\n                {d.array&&d.array.map(function(q,l){\n                  return (<li className='nocolor' onClick={(e)=>{\n                        me.handle({data1:l,data2:d.indx},'flowTitleChild');\n                        var target = e.target;\n                        if(target.getAttribute('class')=='nocolor') {\n                          target.setAttribute('class','blueColor');\n                        }else {\n                          target.setAttribute('class','nocolor');\n                        }\n                      }} style={{display:q.dis}} indexs={q.indx}>{q.text}</li>)\n                })}\n                </div>\n              </div>)\n          })}\n        </div>\n        <div id=\"tres\" >\n          {data&&data.selectApar&&data.selectApar.map(function(d,t){\n            return <li className='pTre' onClick={(e)=>{\n                  me.handle(t,'radioClick')\n                }}><span style={{display:d.type=='P'?'none':'block'}} className={d.trueFalse=='true'?'changeRadioB':'changeRadio'}></span>{d.text}</li>\n          })}\n        </div>\n      </div>\n    </div>\n  }\n  apiRender(){\n    var scorllH =document.body.clientHeight-200+'px';\n    var scorllY =document.body.clientHeight-100+'px';\n    var _this=this,data=this.props.customData\n    return(\n    \t<div>\n        <div style={{'height':scorllH,'overflow':'scroll'}}>\n          <div className=\"ysp-content-header\">\n            <span className={this.state.flag == true ? \"ysp-content-header-button\" : \"\"} onClick={this.handlerNR.bind(this)}>\u5185\u5BB9</span>\n            <span className={this.state.flag1 == true ? \"ysp-content-header-button\" : \"\"} onClick={this.handlerFJ.bind(this)}>\u9644\u4EF6</span>\n            <span className={this.state.flag2 == true ? \"ysp-content-header-button\" : \"\"}onClick={this.handlerLC.bind(this)}>\u6D41\u7A0B</span>\n          </div>\n          <div className=\"ysp-content-body\" >\n            {\n              this.state.flag == true ? \n                <div className=\"ysp-contentSW\">\n                  <div>\n                    <span>\u9898\u76EE</span>\n                    <span>{data && data.content[0]}</span>\n                  </div>\n                  <div>\n                    <span>\u6536\u6587\u6587\u53F7</span>\n                    <span>{data && data.content[1]}</span>\n                  </div>\n                  <div>\n                    <span>\u6587\u4EF6\u5BC6\u7EA7</span>\n                    <span>{data && data.content[2]}</span>\n                  </div>\n                  <div>\n                    <span>\u4FDD\u5BC6\u671F\u9650</span>\n                    <span>{data && data.content[3]}</span>\n                  </div>\n                  <div>\n                    <span>\u6536\u6587\u65E5\u671F</span>\n                    <span>{data && data.content[4]}</span>\n                  </div>\n                  <div>\n                    <span>\u9650\u529E\u65E5\u671F</span>\n                    <span>{data && data.content[5]}</span>\n                  </div>\n                  <div>\n                    <span>\u7D27\u6025\u7A0B\u5EA6</span>\n                    <span>{data && data.content[6]}</span>\n                  </div>\n                  <div>\n                    <span>\u6536\u6587\u5355\u4F4D</span>\n                    <span>{data && data.content[7]}</span>\n                  </div>\n                  <div>\n                    <span>\u6765\u6587\u5355\u4F4D</span>\n                    <span>{data && data.content[8]}</span>\n                  </div>\n                  <div>\n                    <span>\u539F\u6587\u53F7</span>\n                    <span>{data && data.content[9]}</span>\n                  </div>\n                  <div>\n                    <span>\u539F\u6587\u65E5\u671F</span>\n                    <span>{data && data.content[10]}</span>\n                  </div>\n                  <div>\n                    <span>\u91CD\u8981\u6536\u6587</span>\n                    <span>{data && data.content[11]}</span>\n                  </div>\n                  <div>\n                    <span>\u662F\u5426\u5F52\u6863</span>\n                    <span>{data && data.content[12]}</span>\n                  </div>\n                  <div>\n                    <span>\u610F\u89C1</span>\n                    <span style={{\"border-bottom\": \"0px\"}}>\n                      <ATextarea onChange={this.textareaChange.bind(this)}\n                        value={data && data.txyj}></ATextarea>\n                    </span>\n                  </div>\n                  <div>\n                    <span></span>\n                    <span className=\"ysp-contentSW-button\" onClick={this.handlerPZ.bind(this)}>\n                      \u5178\u578B\u6279\u6CE8\n                    </span>\n                  </div>\n\n                </div>\n                : this.state.flag1 == true ? \n                 <div className='D_fujian'>\n                  {data && data.fujian.map(function(d,l){\n                    if(d.text=='\u6682\u65E0\u9644\u4EF6') {\n                      return <div className='D_zanwuFJ'>{d.text}</div>\n                    }else {\n                      var typeP,classType\n                      if(d.typeP=='docx') {\n                        typeP='W'\n                        classType='classTypeW'\n                      }else if(d.typeP=='ppt') {\n                        typeP='P'\n                        classType='classTypeP'\n                      }else if(d.typeP=='xls') {\n                        typeP='X'\n                        classType='classTypeX'\n                      }else {\n                        classType='classTypeo'\n                      }\n                      return (\n                        <div className='D_zanwuFJT' onClick={_this.handlerfujian.bind(_this)}\n                            data-url = {d.url} data-cookies = {d.cookies} data-text = {d.text} data-dbid={d.dbid}>\n                          <span className={classType}>\n                            {typeP}\n                          </span>\n                          <div className=\"classTypeText\">\n                            \u9644\u4EF6\uFF1A{d.text.replace(/zhengwen/,\"\u6B63\u6587\").replace(/caogao/,\"\u6B63\u6587\")}\n                          </div>\n                        </div>)\n                    }\n                  })}\n                 </div>\n                : this.state.flag2 == true ? \n                <div className='D_LC'>\n                  {data && data.liucheng.map(function(d,t){\n                    if(d.text=='\u6682\u65E0\u6D41\u7A0B') {\n                      return <div className='D_zanwuLC'>{d.text}</div>\n                    }else {\n                     return (<div className='D_liucheng'>\n                      <div>\n                        <span></span>\n                        <span className={data && data.liuchengNUM[0].num!=t?'d_xian':'abc'}></span>\n                      </div>\n                      <div>\n                        <div>{d.text}</div>\n                        <div>\n                          <p><span></span><span>{d.content}</span></p>\n                          <p><span></span><span>{d.day}</span></p>\n                        </div>\n                      </div>\n                    </div>)\n                    }\n                  })}\n                </div> : \"\"\n            }\n          </div>\n        </div>\n        <div>\n        {\n          data&&data.but.length == 2 ? \n            <div style={{'background':'#fff','padding':'5px'}}>\n              <div className=\"ysp-content-bottomWC\">\n                <span onClick={()=>{\n                 this.setState({...this.state,commitModal:true,renderModal:false})\n            }}>\u5B8C\u6210</span>\n              </div>\n              <div className=\"ysp-content-bottom\">\n              \t<span onClick={this.handlerZC.bind(this)}>\u6682\u5B58</span>\n              \t<span onClick={this.handlerTH.bind(this)}>\u9000\u56DE</span>\n              </div>\n              \n            </div> :\n             <div >\n            { data.enniu[1] == \" \u9605\u6BD5 \" || data.enniu[2] == \" \u9605\u6BD5 \" ? \n              <div className=\"ysp-content-bottom\">\n                <span onClick={this.handlerZC.bind(this)}>\u6682\u5B58</span>\n                <span onClick={\n                        this.handlerYB.bind(this)    \n                }>\u9605\u6BD5</span>\n          \t\t</div> \n              :\n            <div className=\"ysp-content-bottom\">\n                <span onClick={this.handlerZC.bind(this)}>\u6682\u5B58</span>\n            \t<span onClick={()=>{\n                if(data && data.txyj){\n                      this.setState({...this.state,commitModal:true,renderModal:false})\n                    }else {\n                      alert('\u8BF7\u586B\u5199\u529E\u7406\u610F\u89C1')\n                    }\n              }}>\u5B8C\u6210</span>\n          \t</div> }\n            </div>\n        }\n        </div>\n        <div>\n        {\n          this.state.flag3 == true ? \n            <div className=\"ysp-contentSW-yj\">\n              <div className=\"ysp-header\">\n                <div onClick={this.handlerCY.bind(this)}></div>\n                <div>\u5E38\u7528\u610F\u89C1</div>\n              </div>\n              <div style={{'height':scorllY,'overflow':'scroll'}}>\n              {\n                data && data.yijian.map(function(d,i){\n                  if(d=='\u5E38\u7528\u610F\u89C1\u6682\u65E0\u6570\u636E'){\n                    return(\n                  \t<div className=\"ysp-contentSW-yjtitle\">\n                      {d}\n                    </div>\n                  )\n                  }else {\n                    return(\n                  \t<div data-index = {i} onClick={_this.handleryijian.bind(_this)}\n                      className=\"ysp-contentSW-yjtitle\">\n                      {d}\n                    </div>\n                  )\n                  }\n                  \n                })\n              }\n              </div>\n            </div> : \"\"\n        }\n        </div>\n        <div>\n        {\n          this.state.flag4 == true ?\n            <div className=\"ysp-contentSW-th\">\n            \t<div className=\"ysp-header\">\n                <div onClick={_this.handlerTHClose.bind(_this)}></div>\n                <div>\u9000\u56DE\u4FE1\u606F</div>\n              </div>\n              <div style={{'height':scorllY,'overflow':'scroll'}}>\n              {\n                data && data.tuihuiTitle.map(function(d,i){\n                  return(\n                  \t<div className={data.tuihuiTitleFlag[i] ? \"ysp-contentSW-thTitle ysp-contentSW-thTitleColor\" : \"ysp-contentSW-thTitle\"} \n                      data-index={i} onClick={_this.handlerTHTitle.bind(_this)}>\n                      <span className=\"ysp-contentSW-thTitleFitst\">{d[0]}</span>\n                      <span className=\"ysp-contentSW-thTitleSecond\">({d[1]})</span>\n                    </div>\n                  )\n                })\n              }\n              </div>\n            </div> : \"\"\n        }\n      </div>\n      </div>\n    )\n  }\n  render() {\n    var _this=this;\n    return <div ref=\"toTop\">{_this.state.renderModal?_this.apiRender():_this.commit()}</div>\n  }\n  \n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: true, //\u5185\u5BB9\n      flag1: false, //\u9644\u4EF6\n      flag2: false, //\u6D41\u7A0B\n      flag3: false, //\u5E38\u7528\u610F\u89C1\n      flag4: false, //\u9000\u56DE\u4FE1\u606F\n      commitModal: false,\n      renderModal: true,\n      flowIndx: 'a',\n      peopleFLOW: 0 //\u9009\u4EBA\u90E8\u5206\u7684\u663E\u793A\u9690\u85CF\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerNR',\n    value: function handlerNR(e) {\n      var that = this;\n      that.setState({\n        flag: true,\n        flag1: false,\n        flag2: false\n      });\n    }\n  }, {\n    key: 'handlerFJ',\n    value: function handlerFJ(e) {\n      var that = this;\n      var handler = that.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickFJ'\n        });\n      }\n      that.setState({\n        flag: false,\n        flag1: true,\n        flag2: false\n      });\n    }\n  }, {\n    key: 'handlerLC',\n    value: function handlerLC(e) {\n      var that = this;\n      that.setState({\n        flag: false,\n        flag1: false,\n        flag2: true\n      });\n    }\n  }, {\n    key: 'textareaChange',\n    value: function textareaChange(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"textareaChange\",\n          data: e.target.value\n        });\n      }\n    }\n  }, {\n    key: 'handlerPZ',\n    value: function handlerPZ() {\n      var that = this;\n      that.setState({\n        flag3: true\n      });\n    }\n  }, {\n    key: 'handlerCY',\n    value: function handlerCY() {\n      var that = this;\n      that.setState({\n        flag3: false\n      });\n    }\n  }, {\n    key: 'handleryijian',\n    value: function handleryijian(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'yijian',\n          data: e.target.dataset.index\n        });\n      }\n      this.setState({\n        flag3: false\n      });\n    }\n  }, {\n    key: 'handlerZC',\n    value: function handlerZC() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'ZC'\n        });\n      }\n      yap.appMain.showLoading();\n      setTimeout(function () {\n        ysp.appMain.hideLoading();\n      }, 500);\n    }\n  }, {\n    key: 'handlerYB',\n    value: function handlerYB() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'YB'\n        });\n      }\n    }\n  }, {\n    key: 'handlerTH',\n    value: function handlerTH() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'TH'\n        });\n      }\n      this.setState({\n        flag4: true\n      });\n      ysp.appMain.showLoading();\n      setTimeout(function () {\n        ysp.appMain.hideLoading();\n      }, 500);\n    }\n  }, {\n    key: 'handlerTHClose',\n    value: function handlerTHClose() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"THClose\"\n        });\n      }\n      this.setState({\n        flag4: false\n      });\n    }\n  }, {\n    key: 'handlerTHTitle',\n    value: function handlerTHTitle(e) {\n      var classTitle = e.target.className;\n      var dom;\n      if (\"ysp-contentSW-thTitleFitst\" == classTitle || \"ysp-contentSW-thTitleSecond\" == classTitle) {\n        dom = e.target.parentElement;\n      } else if (\"ysp-contentSW-thTitle\" == classTitle) {\n        dom = e.target;\n      }\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"THTitle\",\n          data: dom.dataset.index\n        });\n      }\n    }\n  }, {\n    key: 'handle',\n    value: function handle(data, eventType) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({ data: data, eventType: eventType });\n      }\n    }\n  }, {\n    key: 'handlerPeople',\n    value: function handlerPeople(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: \"peopleChioseClick\"\n        });\n      }\n    }\n  }, {\n    key: 'handlerfujian',\n    value: function handlerfujian(e) {\n      var classTitle = e.target.className;\n      var dom;\n      if (\"classTypeP\" == classTitle || \"classTypeW\" == classTitle || \"classTypeX\" == classTitle || \"classTypeo\" == classTitle || \"classTypeText\" == classTitle) {\n        dom = e.target.parentElement;\n      } else {\n        dom = e.target;\n      }\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujian',\n          data: {\n            url: dom.dataset.url,\n            cookies: dom.dataset.cookies,\n            text: dom.dataset.text,\n            dbid: dom.dataset.dbid\n          }\n        });\n      }\n    }\n  }, {\n    key: 'commit',\n    value: function commit() {\n      var _this3 = this;\n\n      var me = this,\n          data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'D_choiseFlow' },\n        React.createElement(\n          'div',\n          { className: 'ysp-header' },\n          React.createElement('div', { onClick: function onClick() {\n              _this3.setState(_extends({}, _this3.state, { commitModal: false, renderModal: true }));\n            } }),\n          React.createElement(\n            'div',\n            null,\n            '\\u8BF7\\u9009\\u62E9\\u6D41\\u5411'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'D_flowList', style: { display: me.state.peopleFLOW == 0 ? 'block' : 'none' } },\n          data && data.commitLZ && data.commitLZ.map(function (d, t) {\n            return React.createElement(\n              'li',\n              { className: me.state.flowIndx == t ? 'changC' : '', onClick: function onClick() {\n                  me.handle(t, 'Liclick');\n                  me.setState({ flowIndx: t, peopleFLOW: 'a' });\n                } },\n              React.createElement(\n                'span',\n                null,\n                d.textC\n              ),\n              React.createElement(\n                'span',\n                { style: { display: me.state.flowIndx == t ? 'block' : 'none' } },\n                '\\u221A'\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'div',\n          { className: 'D_chiosePeople', style: { display: me.state.peopleFLOW == 0 ? 'none' : 'block' } },\n          React.createElement(\n            'div',\n            { className: 'ysp-header' },\n            React.createElement('div', { onClick: function onClick() {\n                _this3.setState(_extends({}, _this3.state, { peopleFLOW: 0 }));\n                me.handle('', 'closeChiosep');\n              } }),\n            React.createElement(\n              'div',\n              { style: { textAlign: 'center' } },\n              '\\u8BF7\\u9009\\u62E9\\u529E\\u7406\\u4EBA'\n            ),\n            React.createElement(\n              'div',\n              { style: { paddingRight: '15px' }, onClick: me.handlerPeople.bind(me) },\n              '\\u786E\\u5B9A'\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'treeBody', style: { display: data.treeBar[0] ? 'block' : 'none' } },\n            data && data.treeBar[0] && data.treeBar.map(function (d, t) {\n              return React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'li',\n                  { onClick: function onClick() {\n                      me.handle(t, 'flowTitle');\n                    }, style: { display: d.dis }, indexs: d.indx },\n                  React.createElement(\n                    'span',\n                    { style: { color: 'blue' } },\n                    '+'\n                  ),\n                  ' ',\n                  d.title\n                ),\n                React.createElement(\n                  'div',\n                  null,\n                  d.array && d.array.map(function (q, l) {\n                    return React.createElement(\n                      'li',\n                      { className: 'nocolor', onClick: function onClick(e) {\n                          me.handle({ data1: l, data2: d.indx }, 'flowTitleChild');\n                          var target = e.target;\n                          if (target.getAttribute('class') == 'nocolor') {\n                            target.setAttribute('class', 'blueColor');\n                          } else {\n                            target.setAttribute('class', 'nocolor');\n                          }\n                        }, style: { display: q.dis }, indexs: q.indx },\n                      q.text\n                    );\n                  })\n                )\n              );\n            })\n          ),\n          React.createElement(\n            'div',\n            { id: 'tres' },\n            data && data.selectApar && data.selectApar.map(function (d, t) {\n              return React.createElement(\n                'li',\n                { className: 'pTre', onClick: function onClick(e) {\n                    me.handle(t, 'radioClick');\n                  } },\n                React.createElement('span', { style: { display: d.type == 'P' ? 'none' : 'block' }, className: d.trueFalse == 'true' ? 'changeRadioB' : 'changeRadio' }),\n                d.text\n              );\n            })\n          )\n        )\n      );\n    }\n  }, {\n    key: 'apiRender',\n    value: function apiRender() {\n      var _this4 = this;\n\n      var scorllH = document.body.clientHeight - 200 + 'px';\n      var scorllY = document.body.clientHeight - 100 + 'px';\n      var _this = this,\n          data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { style: { 'height': scorllH, 'overflow': 'scroll' } },\n          React.createElement(\n            'div',\n            { className: 'ysp-content-header' },\n            React.createElement(\n              'span',\n              { className: this.state.flag == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerNR.bind(this) },\n              '\\u5185\\u5BB9'\n            ),\n            React.createElement(\n              'span',\n              { className: this.state.flag1 == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerFJ.bind(this) },\n              '\\u9644\\u4EF6'\n            ),\n            React.createElement(\n              'span',\n              { className: this.state.flag2 == true ? \"ysp-content-header-button\" : \"\", onClick: this.handlerLC.bind(this) },\n              '\\u6D41\\u7A0B'\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-content-body' },\n            this.state.flag == true ? React.createElement(\n              'div',\n              { className: 'ysp-contentSW' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u9898\\u76EE'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[0]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6536\\u6587\\u6587\\u53F7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[1]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6587\\u4EF6\\u5BC6\\u7EA7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[2]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u4FDD\\u5BC6\\u671F\\u9650'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[3]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6536\\u6587\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[4]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u9650\\u529E\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[5]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u7D27\\u6025\\u7A0B\\u5EA6'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[6]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6536\\u6587\\u5355\\u4F4D'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[7]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u6765\\u6587\\u5355\\u4F4D'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[8]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u539F\\u6587\\u53F7'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[9]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u539F\\u6587\\u65E5\\u671F'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[10]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u91CD\\u8981\\u6536\\u6587'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[11]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u662F\\u5426\\u5F52\\u6863'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data && data.content[12]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u610F\\u89C1'\n                ),\n                React.createElement(\n                  'span',\n                  { style: { \"border-bottom\": \"0px\" } },\n                  React.createElement(ATextarea, { onChange: this.textareaChange.bind(this),\n                    value: data && data.txyj })\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement('span', null),\n                React.createElement(\n                  'span',\n                  { className: 'ysp-contentSW-button', onClick: this.handlerPZ.bind(this) },\n                  '\\u5178\\u578B\\u6279\\u6CE8'\n                )\n              )\n            ) : this.state.flag1 == true ? React.createElement(\n              'div',\n              { className: 'D_fujian' },\n              data && data.fujian.map(function (d, l) {\n                if (d.text == '\u6682\u65E0\u9644\u4EF6') {\n                  return React.createElement(\n                    'div',\n                    { className: 'D_zanwuFJ' },\n                    d.text\n                  );\n                } else {\n                  var typeP, classType;\n                  if (d.typeP == 'docx') {\n                    typeP = 'W';\n                    classType = 'classTypeW';\n                  } else if (d.typeP == 'ppt') {\n                    typeP = 'P';\n                    classType = 'classTypeP';\n                  } else if (d.typeP == 'xls') {\n                    typeP = 'X';\n                    classType = 'classTypeX';\n                  } else {\n                    classType = 'classTypeo';\n                  }\n                  return React.createElement(\n                    'div',\n                    { className: 'D_zanwuFJT', onClick: _this.handlerfujian.bind(_this),\n                      'data-url': d.url, 'data-cookies': d.cookies, 'data-text': d.text, 'data-dbid': d.dbid },\n                    React.createElement(\n                      'span',\n                      { className: classType },\n                      typeP\n                    ),\n                    React.createElement(\n                      'div',\n                      { className: 'classTypeText' },\n                      '\\u9644\\u4EF6\\uFF1A',\n                      d.text.replace(/zhengwen/, \"\u6B63\u6587\").replace(/caogao/, \"\u6B63\u6587\")\n                    )\n                  );\n                }\n              })\n            ) : this.state.flag2 == true ? React.createElement(\n              'div',\n              { className: 'D_LC' },\n              data && data.liucheng.map(function (d, t) {\n                if (d.text == '\u6682\u65E0\u6D41\u7A0B') {\n                  return React.createElement(\n                    'div',\n                    { className: 'D_zanwuLC' },\n                    d.text\n                  );\n                } else {\n                  return React.createElement(\n                    'div',\n                    { className: 'D_liucheng' },\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement('span', null),\n                      React.createElement('span', { className: data && data.liuchengNUM[0].num != t ? 'd_xian' : 'abc' })\n                    ),\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'div',\n                        null,\n                        d.text\n                      ),\n                      React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                          'p',\n                          null,\n                          React.createElement('span', null),\n                          React.createElement(\n                            'span',\n                            null,\n                            d.content\n                          )\n                        ),\n                        React.createElement(\n                          'p',\n                          null,\n                          React.createElement('span', null),\n                          React.createElement(\n                            'span',\n                            null,\n                            d.day\n                          )\n                        )\n                      )\n                    )\n                  );\n                }\n              })\n            ) : \"\"\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          data && data.but.length == 2 ? React.createElement(\n            'div',\n            { style: { 'background': '#fff', 'padding': '5px' } },\n            React.createElement(\n              'div',\n              { className: 'ysp-content-bottomWC' },\n              React.createElement(\n                'span',\n                { onClick: function onClick() {\n                    _this4.setState(_extends({}, _this4.state, { commitModal: true, renderModal: false }));\n                  } },\n                '\\u5B8C\\u6210'\n              )\n            ),\n            React.createElement(\n              'div',\n              { className: 'ysp-content-bottom' },\n              React.createElement(\n                'span',\n                { onClick: this.handlerZC.bind(this) },\n                '\\u6682\\u5B58'\n              ),\n              React.createElement(\n                'span',\n                { onClick: this.handlerTH.bind(this) },\n                '\\u9000\\u56DE'\n              )\n            )\n          ) : React.createElement(\n            'div',\n            null,\n            data.enniu[1] == \" \u9605\u6BD5 \" || data.enniu[2] == \" \u9605\u6BD5 \" ? React.createElement(\n              'div',\n              { className: 'ysp-content-bottom' },\n              React.createElement(\n                'span',\n                { onClick: this.handlerZC.bind(this) },\n                '\\u6682\\u5B58'\n              ),\n              React.createElement(\n                'span',\n                { onClick: this.handlerYB.bind(this) },\n                '\\u9605\\u6BD5'\n              )\n            ) : React.createElement(\n              'div',\n              { className: 'ysp-content-bottom' },\n              React.createElement(\n                'span',\n                { onClick: this.handlerZC.bind(this) },\n                '\\u6682\\u5B58'\n              ),\n              React.createElement(\n                'span',\n                { onClick: function onClick() {\n                    if (data && data.txyj) {\n                      _this4.setState(_extends({}, _this4.state, { commitModal: true, renderModal: false }));\n                    } else {\n                      alert('\u8BF7\u586B\u5199\u529E\u7406\u610F\u89C1');\n                    }\n                  } },\n                '\\u5B8C\\u6210'\n              )\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          this.state.flag3 == true ? React.createElement(\n            'div',\n            { className: 'ysp-contentSW-yj' },\n            React.createElement(\n              'div',\n              { className: 'ysp-header' },\n              React.createElement('div', { onClick: this.handlerCY.bind(this) }),\n              React.createElement(\n                'div',\n                null,\n                '\\u5E38\\u7528\\u610F\\u89C1'\n              )\n            ),\n            React.createElement(\n              'div',\n              { style: { 'height': scorllY, 'overflow': 'scroll' } },\n              data && data.yijian.map(function (d, i) {\n                if (d == '\u5E38\u7528\u610F\u89C1\u6682\u65E0\u6570\u636E') {\n                  return React.createElement(\n                    'div',\n                    { className: 'ysp-contentSW-yjtitle' },\n                    d\n                  );\n                } else {\n                  return React.createElement(\n                    'div',\n                    { 'data-index': i, onClick: _this.handleryijian.bind(_this),\n                      className: 'ysp-contentSW-yjtitle' },\n                    d\n                  );\n                }\n              })\n            )\n          ) : \"\"\n        ),\n        React.createElement(\n          'div',\n          null,\n          this.state.flag4 == true ? React.createElement(\n            'div',\n            { className: 'ysp-contentSW-th' },\n            React.createElement(\n              'div',\n              { className: 'ysp-header' },\n              React.createElement('div', { onClick: _this.handlerTHClose.bind(_this) }),\n              React.createElement(\n                'div',\n                null,\n                '\\u9000\\u56DE\\u4FE1\\u606F'\n              )\n            ),\n            React.createElement(\n              'div',\n              { style: { 'height': scorllY, 'overflow': 'scroll' } },\n              data && data.tuihuiTitle.map(function (d, i) {\n                return React.createElement(\n                  'div',\n                  { className: data.tuihuiTitleFlag[i] ? \"ysp-contentSW-thTitle ysp-contentSW-thTitleColor\" : \"ysp-contentSW-thTitle\",\n                    'data-index': i, onClick: _this.handlerTHTitle.bind(_this) },\n                  React.createElement(\n                    'span',\n                    { className: 'ysp-contentSW-thTitleFitst' },\n                    d[0]\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: 'ysp-contentSW-thTitleSecond' },\n                    '(',\n                    d[1],\n                    ')'\n                  )\n                );\n              })\n            )\n          ) : \"\"\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { ref: 'toTop' },\n        _this.state.renderModal ? _this.apiRender() : _this.commit()\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "contentSW");
})(window, ysp);