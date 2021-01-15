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
        var basic2 = basic0 && basic0.querySelector('#goTravel'); //出差行程    去程
        var basic3 = basic0 && basic0.querySelector('#backTravel'); //出差行程  返程
        var basic4 = basic0 && basic0.querySelectorAll('.input_table')[1]; // 出差方式
        var checks = basic4 && basic4.querySelectorAll('input[type="checkbox"]'); //判断出差方式
        var aa = [];for (var i = 0; i < checks.length; i++) {
          if (checks[i].checked) {
            aa.push(checks[i].id);
          }
        }var fujians = elem.ownerDocument.querySelector('#attachmentListTbody'); //附件
        var approval = elem.ownerDocument.querySelector('#approvalLink').querySelector('table'); //审批记录
        data.data[0] = ['公司代码', basic1 && basic1.querySelector('#compny') && basic1.querySelector('#compny').textContent.trim()];data.data[1] = ['出差人', basic1 && basic1.querySelector('#dept') && basic1.querySelector('#dept').textContent.trim() + '-' + basic1.querySelectorAll('tr')[1].children[1].textContent];data.data[2] = ['出差类型', basic1 && basic1.querySelector('#travelType') && basic1.querySelector('#travelType').value == "0" ? "出差" : "培训"];data.data[3] = ['单据号', basic1.querySelectorAll('tr')[2].children[1].textContent.trim()];data.data[4] = ['单据状态', basic1.querySelectorAll('tr')[2].children[5].textContent.trim()];data.data[5] = ['出发日期', basic1.querySelector('#departureDate').value.trim()];data.data[6] = ['返回日期', basic1.querySelector('#returnDate').value.trim()];data.data[7] = ['出差天数', basic1.querySelector('#travelDays').value.trim()];data.data[8] = ['出差地点', basic1.querySelector('#travelPlace').value.trim()];data.data[9] = ['出差事由', basic1.querySelector('#travelReasons').value.trim()];data.data[10] = ['去程出发城市', basic2.querySelector('#goTravel_departure_0').value.trim()];data.data[11] = ['去程到达城市', basic2.querySelector('#goTravel_arriva_0').value.trim()];data.data[12] = ['返程出发城市', basic3.querySelector('#backTravel_departure_1').value.trim()];data.data[13] = ['返程到达城市', basic3.querySelector('#backTravel_arriva_1').value.trim()];data.data[14] = ['出差方式', aa[0] == "train" ? "火车" : aa[0] == "plane" ? "飞机" : aa[0] == "carShip" ? "汽车轮船" : aa[0] == "ComCar" ? "公司派车" : "其它"]; //以下为附件
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
            var tds = [];
            for (var j = 0; j < approval.querySelectorAll('tr')[i].querySelectorAll('td').length; j++) {
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
    }
  }, "businessCharDetail");
})(window, ysp);