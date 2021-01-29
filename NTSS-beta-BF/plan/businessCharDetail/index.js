(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control92_dvfUdH: function (elem) {
      ;if (!elem) {
        return false;
      } //console.log(elem)
      return elem.ownerDocument.querySelector('.breadcrumb').querySelector('span').textContent;
    },
    doAction_uiControl76_UUodwU: function (data, elem) {
      if (data.eventType == 'click') {
        elem.ownerDocument.querySelector('#_easyui_tree_11').click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      }
    },
    getTemplate_uiControl76_UUodwU: function () {
      var selfTemplate = 'import { back } from \'appRenderer\';\nvar HeaderCustom = React.createClass({\n  click:function(){                                \n    var callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        eventType:\'click\'                         \n      })\n    }\n  },\n\trender(){\n    var _this=this;\n  \treturn(\n    \t<header className="navbar navbar-primary header" style={{background:"#0a73cc"}}>\n        <h2 className="navbar-title navbar-center">{this.props.customData}</h2>\n        <div className="navbar-nav navbar-left">\n          <a onClick={_this.click}className="navbar-nav-item">\n            <span className="navbar-nav-title"></span>\n            <span className="icon icon-left-nav navbar-icon"></span>\n          </a>\n        </div>\n      </header>\n    )\n  }\n})\n\nmodule.exports = HeaderCustom;\n';
      return '\'use strict\';\n\nvar _appRenderer = require(\'appRenderer\');\n\nvar HeaderCustom = React.createClass({\n  displayName: \'HeaderCustom\',\n\n  click: function click() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      \'header\',\n      { className: \'navbar navbar-primary header\', style: { background: "#0a73cc" } },\n      React.createElement(\n        \'h2\',\n        { className: \'navbar-title navbar-center\' },\n        this.props.customData\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'navbar-nav navbar-left\' },\n        React.createElement(\n          \'a\',\n          { onClick: _this.click, className: \'navbar-nav-item\' },\n          React.createElement(\'span\', { className: \'navbar-nav-title\' }),\n          React.createElement(\'span\', { className: \'icon icon-left-nav navbar-icon\' })\n        )\n      )\n    );\n  }\n});\n\nmodule.exports = HeaderCustom;';
    },
    getData_control93_Q2ctcE: function (elem) {
      ;if (elem) {
        var data = {};data.data = [];data.file = [];data.approval = [];var basic = elem.ownerDocument.querySelector('.myAccount');var basic0 = basic && elem.ownerDocument.querySelector('.myAccount_con'); //出差行程 出差方式
        var basic1 = basic && basic.querySelectorAll('.input_table')[0]; //出差信息
        // var tables = basic0 && basic0.querySelector("#goTravel_table");
        // var basic2 = tables && tables.querySelectorAll("tr")[2]; 
        var basic2 = basic0 && basic0.querySelector('#goTravel'); //出差行程    去程
        var basic3 = basic0 && basic0.querySelector('#backTravel'); //出差行程  返程
        var basic4 = basic0 && basic0.querySelectorAll('.input_table')[1]; // 出差方式
        var checks = basic4 && basic4.querySelectorAll('input[type="checkbox"]'); //判断出差方式
        var aaStyle = [];for (var i = 0; i < checks.length; i++) {
          if (checks[i].checked) {
            aaStyle.push(checks[i].id);
          }
        }var fujians = elem.ownerDocument.querySelector('#attachmentListTbody'); //附件
        var approval = elem.ownerDocument.querySelector('#approvalLink').querySelector('table'); //审批记录
        data.data[0] = ['公司代码', basic1 && basic1.querySelector('#compny') && basic1.querySelector('#compny').textContent.trim()];data.data[1] = ['出差人', basic1 && basic1.querySelector('#dept') && basic1.querySelector('#dept').textContent.trim() + '-' + basic1.querySelectorAll('tr')[1].children[1].textContent];data.data[2] = ['出差类型', basic1 && basic1.querySelector('#travelType') && basic1.querySelector('#travelType').value == "0" ? "出差" : "培训"];data.data[3] = ['单据号', basic1.querySelectorAll('tr')[2].children[1].textContent.trim()];data.data[4] = ['单据状态', basic1.querySelectorAll('tr')[2].children[5].textContent.trim()];data.data[5] = ['出发日期', basic1.querySelector('#departureDate') && basic1.querySelector('#departureDate').value.trim()];data.data[6] = ['返回日期', basic1.querySelector('#returnDate') && basic1.querySelector('#returnDate').value.trim()];data.data[7] = ['出差天数', basic1.querySelector('#travelDays') && basic1.querySelector('#travelDays').value.trim()];var place = basic1.querySelector('#travelPlace');if (place != null) {
          data.data[8] = ['出差地点', basic1.querySelector('#travelPlace') && basic1.querySelector('#travelPlace').value.trim()];
        } else {
          data.data[8] = ['出差地点', basic1.querySelectorAll("tr")[4].querySelectorAll("td")[0].textContent];
        }var reasons = basic1.querySelector('#travelReasons');if (reasons != null) {
          data.data[9] = ['出差事由', basic1.querySelector('#travelReasons') && basic1.querySelector('#travelReasons').value.trim()];
        } else {
          data.data[9] = ['出差事由', basic1.querySelectorAll("tr")[4].querySelectorAll("td")[1].textContent];
        } //去程
        var trs = basic2.querySelector("#goTravel_table") && basic2.querySelector("#goTravel_table").querySelectorAll("tr");var aa = [];for (var i = 0; i < trs.length; i++) {
          if (trs[i].getAttribute("id")) {
            aa.push(trs[i]);
          }
        }var goTraOne = [];var goTraTwo = [];for (var j = 0; j < aa.length; j++) {
          if (aa.length - j == 1) {
            if (aa[j].querySelectorAll("td")[0].querySelector("input")) {
              goTraOne.push(aa[j].querySelectorAll("td")[0].querySelector("input").value.trim());
            } else {
              goTraOne.push(aa[j].querySelectorAll("td")[0].textContent.trim());
            }if (aa[j].querySelectorAll("td")[2].querySelector("input")) {
              goTraTwo.push(aa[j].querySelectorAll("td")[2].querySelector("input").value.trim());
            } else {
              goTraTwo.push(aa[j].querySelectorAll("td")[2].textContent.trim());
            }
          } else {
            if (aa[j].querySelectorAll("td")[0].querySelector("input")) {
              goTraOne.push(aa[j].querySelectorAll("td")[0].querySelector("input").value.trim() + "、");
            } else {
              goTraOne.push(aa[j].querySelectorAll("td")[0].textContent.trim() + "、");
            }if (aa[j].querySelectorAll("td")[2].querySelector("input")) {
              goTraTwo.push(aa[j].querySelectorAll("td")[2].querySelector("input").value.trim() + "、");
            } else {
              goTraTwo.push(aa[j].querySelectorAll("td")[2].textContent.trim() + "、");
            }
          }
        }data.data[10] = ['去程出发城市', goTraOne];data.data[11] = ['去程到达城市', goTraTwo]; //返程
        var trss = basic3.querySelector("#backTravel_table") && basic3.querySelector("#backTravel_table").querySelectorAll("tr");var aaa = [];for (var k = 0; k < trss.length; k++) {
          if (trss[k].getAttribute("id")) {
            aaa.push(trss[k]);
          }
        }var backTraOne = [];var backTraTwo = [];for (var f = 0; f < aaa.length; f++) {
          if (aaa.length - f == 1) {
            if (aaa[f].querySelectorAll("td")[0].querySelector("input")) {
              backTraOne.push(aaa[f].querySelectorAll("td")[0].querySelector("input").value.trim());
            } else {
              backTraOne.push(aaa[f].querySelectorAll("td")[0].textContent.trim());
            }if (aaa[f].querySelectorAll("td")[2].querySelector("input")) {
              backTraTwo.push(aaa[f].querySelectorAll("td")[2].querySelector("input").value.trim());
            } else {
              backTraTwo.push(aaa[f].querySelectorAll("td")[2].textContent.trim());
            }
          } else {
            if (aaa[f].querySelectorAll("td")[0].querySelector("input")) {
              backTraOne.push(aaa[f].querySelectorAll("td")[0].querySelector("input").value.trim() + '、');
            } else {
              backTraOne.push(aaa[f].querySelectorAll("td")[0].textContent.trim() + '、');
            }
            if (aaa[f].querySelectorAll("td")[2].querySelector("input")) {
              backTraTwo.push(aaa[f].querySelectorAll("td")[2].querySelector("input").value.trim() + '、');
            } else {
              backTraTwo.push(aaa[f].querySelectorAll("td")[2].textContent.trim() + '、');
            }
          }
        }data.data[12] = ['返程出发城市', backTraOne];data.data[13] = ['返程到达城市', backTraTwo];data.data[14] = ['出差方式', aaStyle[0] == "train" ? "火车" : aaStyle[0] == "plane" ? "飞机" : aaStyle[0] == "carShip" ? "汽车轮船" : aaStyle[0] == "ComCar" ? "公司派车" : "其它"]; //以下为附件
        for (var i = 0; i < fujians.querySelectorAll('tr').length; i++) {
          if (fujians.querySelectorAll('tr')[i].querySelectorAll('a').length > 1) {
            if (fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('jpg') > -1 || fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('png') > -1 || fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('jpeg') > -1) {
              data.file[i] = ['jpg', fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            } else if (fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('pdf') > -1) {
              data.file[i] = ['pdf', fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            } else if (fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('doc') > -1) {
              data.file[i] = ['word', fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            } else {
              data.file[i] = ['jpg', fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            }data.file[i][2] = fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '').match(/\..*/);data.file[i][3] = fujians.querySelectorAll('tr')[i].querySelectorAll('a')[1].href;
          } else {
            if (fujians.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('jpg') > -1 || fujians.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('png') > -1 || fujians.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('jpeg') > -1) {
              data.file[i] = ['jpg', fujians.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            } else if (fujians.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('pdf') > -1) {
              data.file[i] = ['pdf', fujians.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            } else if (fujians.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('do') > -1) {
              data.file[i] = ['word', fujians.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            } else {
              data.file[i] = ['jpg', fujians.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            }data.file[i][2] = fujians.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '').match(/\..*/);data.file[i][3] = fujians.querySelectorAll('tr')[i].querySelector('a').href;
          }
        }if (elem.querySelector('#commonAttachmentFileDoc')) {
          data.upload = true;
        } else {
          data.upload = false;
        } //以下为审批记录
        for (var i = 0; i < approval.querySelectorAll('tr').length - 1; i++) {
          if (i == 0) {
            var ths = [];for (var j = 0; j < approval.querySelectorAll('tr')[i].querySelectorAll('th').length; j++) {
              ths.push(approval.querySelectorAll('tr')[i].querySelectorAll('th')[j].textContent.replace(/\s+/g, ''));
            }data.approval.push(ths);
          } else {
            var tds = [];for (var j = 0; j < approval.querySelectorAll('tr')[i].querySelectorAll('td').length; j++) {
              if (approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('input').length > 0 && j != 0) {
                tds.push(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('input')[0].value);
              } else if (approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('select').length > 0) {
                tds.push(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('select')[0].querySelectorAll('option')[approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('select')[0].selectedIndex].textContent);
              } else {
                tds.push(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].textContent);
              }
            }data.approval.push(tds);
          }
        }return data;
      }
    },
    doAction_uiControl77_AypmT4: function (data, elem) {
      if (data.eventType == 'preview') {
        var _url = data.dataCustom[0];var type = '.' + data.dataCustom[1].replace(/\./, "");var _name = data.dataCustom[2];var cookies = elem.ownerDocument.cookie;var options = { docName: '文档', docType: type, downloadUrl: _url };if (ysp.appMain.isIOS()) {
          top.EAPI.postMessageToNative("openDocument", { "url": _url, "type": "baoxiao" });
        } else {
          huaneng.fujian("baoxiao", _url, _name, '', cookies);
        }
      }
    },
    getTemplate_uiControl77_AypmT4: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  upload: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'upload\'\n      })\n    }\n  },\n  arrow: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'arrow\'\n      })\n    }\n  },\n  arrowFile: function(e) {\n    var target = e.target;\n    if(target.getAttribute(\'class\')==\'spanArrow\'){\n      target.setAttribute(\'class\',\'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'block\';\n    }else{\n      target.setAttribute(\'class\',\'spanArrow\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'none\';\n    }\n  },\n  arrowApproval: function(e) {\n    var target = e.target;\n    if(target.getAttribute(\'class\')==\'spanArrow\'){\n      target.setAttribute(\'class\',\'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'block\';\n    }else{\n      target.setAttribute(\'class\',\'spanArrow\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'none\';\n    }\n  },\n  preview: function(e) {\n    var target = e.currentTarget;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'preview\',\n        data:[\n          target.getAttribute(\'data-href\'),\n          target.getAttribute(\'data-type\'),\n          target.getAttribute(\'data-name\')\n        ]\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    if(data){\n      return (\n        <div className="details">\n          <div className="detailsHead">\u57FA\u672C\u4FE1\u606F</div>\n          <ul className="detailsContent">\n            {data.data.map(function(d,i){\n              return(\n                <li>\n                  <span className="spanTitle">{d[0]}</span>\n                  <span className="spanContent">{d[1]}</span>\n                </li>)\n            })}\n            <li>\n              <span className="spanTitle">\u9644\u4EF6</span>\n              <span className="spanContent"></span>\n              <span onClick={_this.arrowFile} className="spanArrow"></span>\n            </li>\n            <div className="fileBox" style={{\'display\':\'none\'}}>\n              {data.file.map(function(d,i){\n                return(\n                  <li onClick={_this.preview} data-name={d[1]} data-href={d[3]} data-type={d[2]}>\n                    <span className={"spanBg"+\' \'+d[0]}></span>\n                    <span className="spanName">{d[1]}</span>\n                  </li>)\n              })}\n            </div>\n            <li>\n              <span className="spanTitle">\u5BA1\u6279\u8BB0\u5F55</span>\n              <span className="spanContent"></span>\n              <span onClick={_this.arrowApproval} className="spanArrow"></span>\n            </li>\n            <div className="dropBox" style={{\'display\':\'none\'}}>\n              <div className="contentTable1">\n                <div className="detailsTable1">\n                  {data.approval.map(function(d,i){\n                      return(<tr>\n                        <td>{d[1]}</td>\n                        <td>{d[2]}</td>\n                        <td>{d[3]}</td>  \n                      </tr>)  \n                  })}\n                </div>\n              </div>\n            </div>\n          </ul>\n        </div>\n      )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  upload: function upload(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'upload\'\n      });\n    }\n  },\n  arrow: function arrow(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'arrow\'\n      });\n    }\n  },\n  arrowFile: function arrowFile(e) {\n    var target = e.target;\n    if (target.getAttribute(\'class\') == \'spanArrow\') {\n      target.setAttribute(\'class\', \'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'block\';\n    } else {\n      target.setAttribute(\'class\', \'spanArrow\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'none\';\n    }\n  },\n  arrowApproval: function arrowApproval(e) {\n    var target = e.target;\n    if (target.getAttribute(\'class\') == \'spanArrow\') {\n      target.setAttribute(\'class\', \'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'block\';\n    } else {\n      target.setAttribute(\'class\', \'spanArrow\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'none\';\n    }\n  },\n  preview: function preview(e) {\n    var target = e.currentTarget;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'preview\',\n        data: [target.getAttribute(\'data-href\'), target.getAttribute(\'data-type\'), target.getAttribute(\'data-name\')]\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'details\' },\n        React.createElement(\n          \'div\',\n          { className: \'detailsHead\' },\n          \'\\u57FA\\u672C\\u4FE1\\u606F\'\n        ),\n        React.createElement(\n          \'ul\',\n          { className: \'detailsContent\' },\n          data.data.map(function (d, i) {\n            return React.createElement(\n              \'li\',\n              null,\n              React.createElement(\n                \'span\',\n                { className: \'spanTitle\' },\n                d[0]\n              ),\n              React.createElement(\n                \'span\',\n                { className: \'spanContent\' },\n                d[1]\n              )\n            );\n          }),\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'span\',\n              { className: \'spanTitle\' },\n              \'\\u9644\\u4EF6\'\n            ),\n            React.createElement(\'span\', { className: \'spanContent\' }),\n            React.createElement(\'span\', { onClick: _this.arrowFile, className: \'spanArrow\' })\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'fileBox\', style: { \'display\': \'none\' } },\n            data.file.map(function (d, i) {\n              return React.createElement(\n                \'li\',\n                { onClick: _this.preview, \'data-name\': d[1], \'data-href\': d[3], \'data-type\': d[2] },\n                React.createElement(\'span\', { className: "spanBg" + \' \' + d[0] }),\n                React.createElement(\n                  \'span\',\n                  { className: \'spanName\' },\n                  d[1]\n                )\n              );\n            })\n          ),\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'span\',\n              { className: \'spanTitle\' },\n              \'\\u5BA1\\u6279\\u8BB0\\u5F55\'\n            ),\n            React.createElement(\'span\', { className: \'spanContent\' }),\n            React.createElement(\'span\', { onClick: _this.arrowApproval, className: \'spanArrow\' })\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'dropBox\', style: { \'display\': \'none\' } },\n            React.createElement(\n              \'div\',\n              { className: \'contentTable1\' },\n              React.createElement(\n                \'div\',\n                { className: \'detailsTable1\' },\n                data.approval.map(function (d, i) {\n                  return React.createElement(\n                    \'tr\',\n                    null,\n                    React.createElement(\n                      \'td\',\n                      null,\n                      d[1]\n                    ),\n                    React.createElement(\n                      \'td\',\n                      null,\n                      d[2]\n                    ),\n                    React.createElement(\n                      \'td\',\n                      null,\n                      d[3]\n                    )\n                  );\n                })\n              )\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control99_Z31zgP: function (elem) {
      ;if (elem) {
        var data = {};var buttons = elem.ownerDocument.querySelectorAll('.input_table')[0].querySelectorAll('button');for (var i = 0; i < buttons.length; i++) {
          if (buttons[i].getAttribute("style") != "display:none;") {
            if (buttons[i].textContent == "提 交") {
              data.oneFlag = true;
            } else if (buttons[i].textContent == "退 回") {
              data.twoFlag = true;
            }
          }
        }return data;
      }
    },
    doAction_uiControl82_HodyQm: function (data, elem) {
      //提交
      if (data.eventType == 'submit') {
        for (var i = 0; i < elem.ownerDocument.querySelectorAll('.input_table')[0].querySelectorAll('button').length; i++) {
          if (elem.ownerDocument.querySelectorAll('.input_table')[0].querySelectorAll('button')[i].textContent == "提 交") {
            elem.ownerDocument.querySelectorAll('.input_table')[0].querySelectorAll('button')[i].click();
          }
        }
      } //退回
      if (data.eventType == 'back') {
        for (var i = 0; i < elem.ownerDocument.querySelectorAll('.input_table')[0].querySelectorAll('button').length; i++) {
          if (elem.ownerDocument.querySelectorAll('.input_table')[0].querySelectorAll('button')[i].textContent == "退 回") {
            elem.ownerDocument.querySelectorAll('.input_table')[0].querySelectorAll('button')[i].click();
          }
        }
      }
    },
    getTemplate_uiControl82_HodyQm: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  // save: function(e) {\n  //   var handler = _this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:\'save\'\n  //     })\n  //   }\n  // },\n  submit: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'submit\'\n      })\n      handler({\n      \teventType:\'section-trigger\',\n      \tdata:\'control99_Qo9c9A\'\n      })\n    }\n  },\n  back(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'back\'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    if(data){\n    return (\n      <div>\n        {\n          data.oneFlag == true ? <div className="bottomButton">\n            \t<li className="alone" onClick={_this.submit}>\u63D0\u4EA4</li>\n            </div> : ""\n        }\n        {\n          data.twoFlag == true ? <div className="bottomButton">\n            \t<li className="alone" onClick={_this.back}>\u9000\u56DE</li>\n            </div> : ""\n        }\n      </div>\n    )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  // save: function(e) {\n  //   var handler = _this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:\'save\'\n  //     })\n  //   }\n  // },\n  submit: function submit(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'submit\'\n      });\n      handler({\n        eventType: \'section-trigger\',\n        data: \'control99_Qo9c9A\'\n      });\n    }\n  },\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        null,\n        data.oneFlag == true ? React.createElement(\n          \'div\',\n          { className: \'bottomButton\' },\n          React.createElement(\n            \'li\',\n            { className: \'alone\', onClick: _this.submit },\n            \'\\u63D0\\u4EA4\'\n          )\n        ) : "",\n        data.twoFlag == true ? React.createElement(\n          \'div\',\n          { className: \'bottomButton\' },\n          React.createElement(\n            \'li\',\n            { className: \'alone\', onClick: _this.back },\n            \'\\u9000\\u56DE\'\n          )\n        ) : ""\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control100_Z9FcHT: function (elem) {
      ;if (!elem) {
        return false;
      }var data = {};var tb = elem && elem.querySelector("#TB_window");if (tb && tb.style.display == "block") {
        var title = $(tb).children('#TB_title').eq(0).children('div').eq(0).text();var contetns = $(tb).find('iframe')[0].contentDocument.querySelector('body');if (title == "提示") {
          data.title = title;var liss = $(contetns).find('tr').eq(1).text().trim();data.contents = liss;
        } else {
          data.title = title;var liss = $(contetns).find('#approveForm').find('.setTb').children('tbody');if ($(contetns).find('#approveForm').length > 0 && $(contetns).find('#approveForm').find('.setTb').length > 0 && $(contetns).find('#approveForm').find('.setTb').children('tbody').length > 0) {
            var lits = liss.children('tr').eq(0).find('td').text().trim();
          }var titless = liss.children('tr').eq(0).find('th').text();var chilis = liss.children('tr').eq(1).find('th').text();var options = liss.children('tr').eq(1).find('select').find('option');var opt = [];options.forEach(function (items, index) {
            opt.push({ value: items.textContent, val: items.value });
          });data.contents = [];data.contents.push({ titles: titless, con: lits });data.tits = chilis;data.cons = opt;data.flag = true;
        }return data;
      } else {
        return false;
      }
    },
    doAction_uiControl83_WleikJ: function (data, elem) {
      var tb = elem && elem.querySelector("#TB_window");var contetns = $(tb).find('iframe')[0].contentDocument.querySelector('body');if (data.eventType == "backguanbi") {
        $(contetns).find('tr').eq(3).find("button").click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      } else if (data.eventType == "backs") {
        //debugger;
        var contetns = $(tb).find('iframe')[0].contentDocument.querySelector('body');$(contetns).find('#approveForm').children('.setTb').eq(0).find('tr').eq(2).find('a').eq(1).click(); //ysp.appMain.showLoading();
        setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      } else if (data.eventType == "submits") {
        var contetns = $(tb).find('iframe')[0].contentDocument.querySelector('body');$(contetns).find('#approveForm').children('.setTb').eq(0).find('tr').eq(2).find('a').eq(0).click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      } else if (data.eventType == "backs2") {
        debugger;var contetns = $(tb).find('iframe')[0].contentDocument.querySelector('body');$(contetns).find('.p5').find('a').eq(0).click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading(); //ysp.appMain.back();
        }, 3000);
      } else if (data.eventType == "submits2") {
        var contetns = $(tb).find('iframe')[0].contentDocument.querySelector('body');$(contetns).find('.p5').find('a').eq(1).click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading(); //ysp.appMain.back();
        }, 3000);
      } else if (data.eventType == "change") {
        var index = data.dataCustom;$(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(1).find('select')[0].value = $(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(1).find('select')[0].querySelectorAll('option')[index].value;$(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(1).find('select')[0].dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl83_WleikJ: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: true\n    }\n  }\n  componentDidMount(){\n    // this.setState({\n    //   flag : !this.state.flag\n    // })\n    // var backs=this.refs.backs;\n    // backs.style.display=\'block\';\n  }\n  componentWillMount(){\n    // this.setState({\n    //   flag: true\n    // })\n  }\n  \n  handleClick=(e)=>{\n    var handle = this.props.customHandler;\n    var index=e.target.dataset.key\n    if(handle){\n      handle({\n        data:index,\n        eventType:\'click\'\n      })\n    }\n  }\n\n  backguanbi=(e)=>{\n   var handle = this.props.customHandler;\n   \n    if(handle){\n      handle({\n        eventType:\'backguanbi\'\n      })\n    }\n  }\n\n  submits=(e)=>{\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'submits\'\n      })\n    }\n    \n  }\n\n   backs=(e)=>{\n     // var backs=this.refs.backs;\n     // backs.style.display=\'none\'\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'backs\'\n      })\n    }\n     this.setState({\n       flag: false\n     })\n    \n  }\n\n  submits2=(e)=>{\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'submits2\'\n      })\n    }\n    \n  }\n\n   backs2=(e)=>{\n//      var backs=this.refs.backs;\n     \n//      backs.style.display=\'none\'\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'backs2\'\n      })\n    }\n     // this.setState({\n     //   flag: !this.state.flag\n     // })\n    \n  }\n\n  change=(e)=>{\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'change\',\n        data:e.target.selectedIndex\n      })\n    }\n  }\n\n  render() {\n    var _this = this;\n    var data = _this.props.customData;\n    var dataFlag = data && data.flag;\n    if(data){\n    var options=[];\n      options.push(\n    data.cons.map(function(items,index){\n      return(\n      <option>{items.value}</option>\n      )\n    })\n      )\n     return (\n      \n      <div ref="backs">\n          <div className= "weng_sucessMesbx">\n        <div>\n        <h5>{data.title}</h5>\n        <p><ul><li style={{height:\'44px\',borderBottom:\'1px solid #ddd\'}}><span style={{width:\'auto\',display:\'inline-block\'}}>{data.contents[0].titles}</span><span>{data.contents[0].con}</span></li>\n       <li><span style={{width:\'44%\'}}>{data.tits}</span><select onChange={this.change} className="selecs">{options}</select></li>   \n          \n         </ul></p>\n        <p style={{marginTop:"100px",marginLeft:\'30px\'}}><button onClick={this.submits} className="btn" style={{marginRight:\'15px\'}}>\u63D0\u4EA4</button> <button onClick={this.backs} className="btn">\u8FD4\u56DE</button></p>\n        </div>\n            </div>\n      \n      \n      </div>\n      \n    )\n    }else if(data&&data.title=="\u63D0\u793A"){\n      return(\n       <div>\n          \n          \t\n       \n          <div className=\'sucessMesbx\'>\n        <div>\n        <h5>{data.title}</h5>\n        <p style={{paddingTop:\'30px\'}}>{data.contents}</p>\n        <p style={{marginTop:"7px"}}><button onClick={this.backguanbi} >\u5173\u95ED</button></p>\n        </div>\n            </div>\n          :\n      \n      </div>\n      \n      )\n    } else if(data&&data.cons&&data.cons.length>0&&data.title=="\u786E\u8BA4\u9000\u56DE"){\n    var options=[];\n      options.push(\n    data.cons.map(function(items,index){\n      return(\n      <option>{items.value}</option>\n      )\n    })\n      )\n     return (\n      \n      <div ref="backs">\n         \t<div className = \'TodoList-head\'>\n      \n        \t\t\t<span>{data.title}</span>\n     \t\t\t </div>\n          <div className = "weng_sucessMesbx" >\n        \t<div>\n          \n        \t<h5>{data.title}</h5>\n          \n        <p><ul><li style={{height:\'44px\',borderBottom:\'1px solid #ddd\'}}><span style={{width:"30%",display:\'inline-block\'}}>{data.contents[0].titles}</span><span>{data.contents[0].con}</span></li>\n       <li><span style={{width:\'44%\'}}>{data.tits}</span><select onChange={_this.change} className="selecs">{options}</select></li>   \n          \n         </ul></p>\n        <p style={{marginTop:"100px",marginLeft:\'30px\'}}><button onClick={this.submits2} className="btn" style={{marginRight:\'15px\'}}>\u63D0\u4EA4</button> <button onClick={this.backs2} className="btn">\u8FD4\u56DE</button></p>\n        </div>\n            </div>\n      \n      \n      </div>\n      \n    )\n    } else{\n      return(\n      <div className="displayNone"></div>\n      )\n    }\n  }\n  \n}\n\n';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.handleClick = function (e) {\n      var handle = _this2.props.customHandler;\n      var index = e.target.dataset.key;\n      if (handle) {\n        handle({\n          data: index,\n          eventType: 'click'\n        });\n      }\n    };\n\n    _this2.backguanbi = function (e) {\n      var handle = _this2.props.customHandler;\n\n      if (handle) {\n        handle({\n          eventType: 'backguanbi'\n        });\n      }\n    };\n\n    _this2.submits = function (e) {\n      var handle = _this2.props.customHandler;\n      if (handle) {\n        handle({\n          eventType: 'submits'\n        });\n      }\n    };\n\n    _this2.backs = function (e) {\n      // var backs=this.refs.backs;\n      // backs.style.display='none'\n      var handle = _this2.props.customHandler;\n      if (handle) {\n        handle({\n          eventType: 'backs'\n        });\n      }\n      _this2.setState({\n        flag: false\n      });\n    };\n\n    _this2.submits2 = function (e) {\n      var handle = _this2.props.customHandler;\n      if (handle) {\n        handle({\n          eventType: 'submits2'\n        });\n      }\n    };\n\n    _this2.backs2 = function (e) {\n      //      var backs=this.refs.backs;\n\n      //      backs.style.display='none'\n      var handle = _this2.props.customHandler;\n      if (handle) {\n        handle({\n          eventType: 'backs2'\n        });\n      }\n      // this.setState({\n      //   flag: !this.state.flag\n      // })\n    };\n\n    _this2.change = function (e) {\n      var handle = _this2.props.customHandler;\n      if (handle) {\n        handle({\n          eventType: 'change',\n          data: e.target.selectedIndex\n        });\n      }\n    };\n\n    _this2.state = {\n      flag: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // this.setState({\n      //   flag : !this.state.flag\n      // })\n      // var backs=this.refs.backs;\n      // backs.style.display='block';\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      // this.setState({\n      //   flag: true\n      // })\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = _this.props.customData;\n      var dataFlag = data && data.flag;\n      if (data) {\n        var options = [];\n        options.push(data.cons.map(function (items, index) {\n          return React.createElement(\n            'option',\n            null,\n            items.value\n          );\n        }));\n        return React.createElement(\n          'div',\n          { ref: 'backs' },\n          React.createElement(\n            'div',\n            { className: 'weng_sucessMesbx' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'h5',\n                null,\n                data.title\n              ),\n              React.createElement(\n                'p',\n                null,\n                React.createElement(\n                  'ul',\n                  null,\n                  React.createElement(\n                    'li',\n                    { style: { height: '44px', borderBottom: '1px solid #ddd' } },\n                    React.createElement(\n                      'span',\n                      { style: { width: 'auto', display: 'inline-block' } },\n                      data.contents[0].titles\n                    ),\n                    React.createElement(\n                      'span',\n                      null,\n                      data.contents[0].con\n                    )\n                  ),\n                  React.createElement(\n                    'li',\n                    null,\n                    React.createElement(\n                      'span',\n                      { style: { width: '44%' } },\n                      data.tits\n                    ),\n                    React.createElement(\n                      'select',\n                      { onChange: this.change, className: 'selecs' },\n                      options\n                    )\n                  )\n                )\n              ),\n              React.createElement(\n                'p',\n                { style: { marginTop: \"100px\", marginLeft: '30px' } },\n                React.createElement(\n                  'button',\n                  { onClick: this.submits, className: 'btn', style: { marginRight: '15px' } },\n                  '\\u63D0\\u4EA4'\n                ),\n                ' ',\n                React.createElement(\n                  'button',\n                  { onClick: this.backs, className: 'btn' },\n                  '\\u8FD4\\u56DE'\n                )\n              )\n            )\n          )\n        );\n      } else if (data && data.title == \"\u63D0\u793A\") {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'sucessMesbx' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'h5',\n                null,\n                data.title\n              ),\n              React.createElement(\n                'p',\n                { style: { paddingTop: '30px' } },\n                data.contents\n              ),\n              React.createElement(\n                'p',\n                { style: { marginTop: \"7px\" } },\n                React.createElement(\n                  'button',\n                  { onClick: this.backguanbi },\n                  '\\u5173\\u95ED'\n                )\n              )\n            )\n          ),\n          ':'\n        );\n      } else if (data && data.cons && data.cons.length > 0 && data.title == \"\u786E\u8BA4\u9000\u56DE\") {\n        var options = [];\n        options.push(data.cons.map(function (items, index) {\n          return React.createElement(\n            'option',\n            null,\n            items.value\n          );\n        }));\n        return React.createElement(\n          'div',\n          { ref: 'backs' },\n          React.createElement(\n            'div',\n            { className: 'TodoList-head' },\n            React.createElement(\n              'span',\n              null,\n              data.title\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'weng_sucessMesbx' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'h5',\n                null,\n                data.title\n              ),\n              React.createElement(\n                'p',\n                null,\n                React.createElement(\n                  'ul',\n                  null,\n                  React.createElement(\n                    'li',\n                    { style: { height: '44px', borderBottom: '1px solid #ddd' } },\n                    React.createElement(\n                      'span',\n                      { style: { width: \"30%\", display: 'inline-block' } },\n                      data.contents[0].titles\n                    ),\n                    React.createElement(\n                      'span',\n                      null,\n                      data.contents[0].con\n                    )\n                  ),\n                  React.createElement(\n                    'li',\n                    null,\n                    React.createElement(\n                      'span',\n                      { style: { width: '44%' } },\n                      data.tits\n                    ),\n                    React.createElement(\n                      'select',\n                      { onChange: _this.change, className: 'selecs' },\n                      options\n                    )\n                  )\n                )\n              ),\n              React.createElement(\n                'p',\n                { style: { marginTop: \"100px\", marginLeft: '30px' } },\n                React.createElement(\n                  'button',\n                  { onClick: this.submits2, className: 'btn', style: { marginRight: '15px' } },\n                  '\\u63D0\\u4EA4'\n                ),\n                ' ',\n                React.createElement(\n                  'button',\n                  { onClick: this.backs2, className: 'btn' },\n                  '\\u8FD4\\u56DE'\n                )\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement('div', { className: 'displayNone' });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "businessCharDetail");
})(window, ysp);