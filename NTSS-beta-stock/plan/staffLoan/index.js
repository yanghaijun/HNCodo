(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control54_KFEPqw: function (elem) {
      'use strict';

      ;if (!elem) {
        return false;
      } //console.log(elem)
      return elem.ownerDocument.querySelector('.breadcrumb').querySelector('span').textContent;
    },
    doAction_uiControl42_JZiqkn: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        elem.ownerDocument.querySelector('#_easyui_tree_8').click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 4000);
      }
    },
    getTemplate_uiControl42_JZiqkn: function () {
      var selfTemplate = "import { back } from 'appRenderer';\nvar HeaderCustom = React.createClass({\n  click:function(){                                \n    var callBack = this.props.customHandler;          \n    if(callBack) {                                    \n      callBack({\n        eventType:'click'                         \n      })\n    }\n  },\n\trender(){\n    var _this=this;\n  \treturn(\n    \t<header className=\"navbar navbar-primary header\" style={{background:\"#0a73cc\"}}>\n        <h2 className=\"navbar-title navbar-center\">{this.props.customData}</h2>\n        <div className=\"navbar-nav navbar-left\">\n          <a onClick={_this.click}className=\"navbar-nav-item\">\n            <span className=\"navbar-nav-title\"></span>\n            <span className=\"icon icon-left-nav navbar-icon\"></span>\n          </a>\n        </div>\n      </header>\n    )\n  }\n})\n\nmodule.exports = HeaderCustom;\n";
      return "'use strict';\n\nvar _appRenderer = require('appRenderer');\n\nvar HeaderCustom = React.createClass({\n  displayName: 'HeaderCustom',\n\n  click: function click() {\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'header',\n      { className: 'navbar navbar-primary header', style: { background: \"#0a73cc\" } },\n      React.createElement(\n        'h2',\n        { className: 'navbar-title navbar-center' },\n        this.props.customData\n      ),\n      React.createElement(\n        'div',\n        { className: 'navbar-nav navbar-left' },\n        React.createElement(\n          'a',\n          { onClick: _this.click, className: 'navbar-nav-item' },\n          React.createElement('span', { className: 'navbar-nav-title' }),\n          React.createElement('span', { className: 'icon icon-left-nav navbar-icon' })\n        )\n      )\n    );\n  }\n});\n\nmodule.exports = HeaderCustom;";
    },

    getData_control2_nMD6MN: function (elem) {
      ;if (elem) {
        var data = {};data.data = [];data.file = [];data.approval = [];var basic1 = elem.ownerDocument.querySelectorAll('.input_table')[3];var basic2 = elem.ownerDocument.querySelectorAll('.input_table')[5]; // var basic3 = elem.querySelector('#detailTable');
        // var basicTr3 = basic3.querySelectorAll('tr');
        var basic4 = elem.querySelector('#attachmentListTbody');var approval = elem.querySelector('#approvalLink').querySelector('table');data.data[0] = ['借款人', basic1.querySelectorAll('tr')[1].children[3].textContent.replace(/\s+/g, '') + '-' + basic1.querySelectorAll('tr')[3].children[1].textContent.replace(/\s+/g, '')];data.data[1] = ['创建日期', basic1.querySelectorAll('tr')[2].children[3].textContent.replace(/\s+/g, '')]; // data.data[2] = ['报销类型',basic2.querySelectorAll('tr')[2].querySelectorAll('td')[1].textContent.replace(/\s+/g, '')+'-差旅费'];
        //data.data[2] = ['借款类型', '部门费用-差旅费'];
        data.data[2] = ['借款类型', basic2.querySelectorAll('tr')[2] && basic2.querySelectorAll('tr')[2].querySelectorAll('td')[3] && basic2.querySelectorAll('tr')[2].querySelectorAll('td')[3].textContent.trim()];data.data[3] = ['单据号', basic1.querySelectorAll('tr')[2].children[1].textContent.replace(/\s+/g, '')];if (basic2.querySelectorAll('tr')[1].querySelectorAll('td')[1].querySelectorAll('input').length > 0) {
          data.data[4] = ['说明', basic2.querySelectorAll('tr')[0].querySelectorAll('td')[1].querySelectorAll('input')[0].value.replace(/\s+/g, '')];
        } else {
          data.data[4] = ['说明', basic2.querySelectorAll('tr')[0].querySelectorAll('td')[1].textContent.replace(/\s+/g, '')];
        } //data.data[5] = ['借款金额', basic2.querySelectorAll('tr')[2].querySelectorAll('td')[1].textContent.replace(/\s+/g, '') + '元'];
        data.data[5] = ['借款金额', basic2.querySelector('td[id="baseBorrowMoney"]').textContent.trim() + '元'];data.data[6] = ['借款凭证', basic4.querySelectorAll('tr').length + '张'];for (var i = 0; i < basic4.querySelectorAll('tr').length; i++) {
          if (basic4.querySelectorAll('tr')[i].querySelectorAll('a').length > 1) {
            if (basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('jpg') > -1 || basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('png') > -1 || basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('jpeg') > -1) {
              data.file[i] = ['jpg', basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            } else if (basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('pdf') > -1) {
              data.file[i] = ['pdf', basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            } else if (basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.indexOf('doc') > -1) {
              data.file[i] = ['word', basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            } else {
              data.file[i] = ['jpg', basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '')];
            }data.file[i][2] = basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].textContent.replace(/\s+/g, '').match(/\..*/);data.file[i][3] = basic4.querySelectorAll('tr')[i].querySelectorAll('a')[1].href;
          } else {
            if (basic4.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('jpg') > -1 || basic4.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('png') > -1 || basic4.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('jpeg') > -1) {
              data.file[i] = ['jpg', basic4.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            } else if (basic4.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('pdf') > -1) {
              data.file[i] = ['pdf', basic4.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            } else if (basic4.querySelectorAll('tr')[i].querySelector('a').textContent.indexOf('do') > -1) {
              data.file[i] = ['word', basic4.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            } else {
              data.file[i] = ['jpg', basic4.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '')];
            }data.file[i][2] = basic4.querySelectorAll('tr')[i].querySelector('a').textContent.replace(/\s+/g, '').match(/\..*/);data.file[i][3] = basic4.querySelectorAll('tr')[i].querySelector('a').href;
          }
        }if (elem.querySelector('#commonAttachmentFileDoc')) {
          data.upload = true;
        } else {
          data.upload = false;
        } // for(var i=0;i<approval.querySelectorAll('tr').length;i++){
        //   if(i==0){
        //     var ths = [];
        //     for(var j=0;j<approval.querySelectorAll('tr')[i].querySelectorAll('th').length;j++){
        //       ths.push(approval.querySelectorAll('tr')[i].querySelectorAll('th')[j].textContent.replace(/\s+/g, ''));  
        //     }
        //     data.approval.push(ths);
        //   }else{
        //     var tds = [];
        //     for(var j=0;j<approval.querySelectorAll('tr')[i].querySelectorAll('td').length;j++){
        //       if(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('input').length>0&&j!=0){
        //         tds.push(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('input')[0].value);
        //       }else if(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('select').length>0){
        //         tds.push(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('select')[0].querySelectorAll('option')[approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].querySelectorAll('select')[0].selectedIndex].textContent);
        //       }else{
        //         tds.push(approval.querySelectorAll('tr')[i].querySelectorAll('td')[j].textContent);
        //       }
        //     }
        //     data.approval.push(tds);
        //   }
        // }
        return data;
      }
    },
    doAction_uiControl2_li6doq: function (data, elem) {
      if (data.eventType == 'arrow') {
        elem.querySelector('#detailTable').querySelectorAll('tr')[1].querySelector('.searchLine').click();ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 2000);
      } else if (data.eventType == 'upload') {
        elem.querySelector('#commonAttachmentFileDoc').click();var uploadTimer = setInterval(function () {
          if (elem.querySelector('#commonAttachmentFileDoc').value.length > 0) {
            elem.querySelector('#attSubmit').click();clearInterval(uploadTimer);
          }
        }, 1000);
      } else if (data.eventType == 'preview') {
        var _url = data.dataCustom[0];var type = '.' + data.dataCustom[1].replace(/\./, "");var options = { docName: '文档', docType: type, downloadUrl: _url };if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(_url + '?_ysp_filepreview=1'); // var jsonStr = {
          //   "type" : "document",
          //   "downloadUrl" : _url,
          //   "downloadHttpHeaders" : {},
          //   "downloadHttpParams" : [],
          //   "downloadType" : "get",
          //   "docName" : "image.jpeg",
          //   "docType" : type 
          // };
          // alert(jsonStr);
          // alert(1);
          // top.EAPI.openDocument(JSON.stringify(jsonStr));
          // alert(2);
        } else {
          console.log(JSON.stringify(options));top.yspUser.openDocument(JSON.stringify(options));
        }
      }
    },
    getTemplate_uiControl2_li6doq: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  upload: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'upload\'\n      })\n    }\n  },\n  arrow: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'arrow\'\n      })\n    }\n  },\n  arrowFile: function(e) {\n    var target = e.target;\n    if(target.getAttribute(\'class\')==\'spanArrow\'){\n      target.setAttribute(\'class\',\'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'block\';\n    }else{\n      target.setAttribute(\'class\',\'spanArrow\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'none\';\n    }\n  },\n  arrowApproval: function(e) {\n    var target = e.target;\n    if(target.getAttribute(\'class\')==\'spanArrow\'){\n      target.setAttribute(\'class\',\'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'block\';\n    }else{\n      target.setAttribute(\'class\',\'spanArrow\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'none\';\n    }\n  },\n  preview: function(e) {\n    var target = e.currentTarget;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'preview\',\n        data:[\n          target.getAttribute(\'data-href\'),\n          target.getAttribute(\'data-type\')\n        ]\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    return (\n      <div className="details">\n       \t<div className="detailsHead">\u57FA\u672C\u4FE1\u606F</div>\n        <ul className="detailsContent">\n          {data.data.map(function(d,i){\n            return(i<5?<li><span className="spanTitle">{d[0]}</span><span className="spanContent">{d[1]}</span></li>:\'\')\n          })}\n          <li><span className="spanTitle">{data.data[5][0]}</span><span className="spanContent">{data.data[5][1]}</span></li>\n          <li><span className="spanTitle">{data.data[6][0]}</span><span className="spanContent">{data.data[6][1]}</span><span onClick={_this.arrowFile} className="spanArrow"></span></li>\n          <div className="fileBox" style={{\'display\':\'none\'}}>\n            {data.file.map(function(d,i){\n              return(<li onClick={_this.preview} data-href={d[3]} data-type={d[2]}><span className={"spanBg"+\' \'+d[0]}></span><span className="spanName">{d[1]}</span></li>)\n            })}\n            {data.upload?<div onClick={_this.upload} className=\'uploadButton\'>\u589E\u52A0\u9644\u4EF6</div>:\'\'}\n          </div>\n            \n        </ul>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  upload: function upload(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'upload\'\n      });\n    }\n  },\n  arrow: function arrow(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'arrow\'\n      });\n    }\n  },\n  arrowFile: function arrowFile(e) {\n    var target = e.target;\n    if (target.getAttribute(\'class\') == \'spanArrow\') {\n      target.setAttribute(\'class\', \'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'block\';\n    } else {\n      target.setAttribute(\'class\', \'spanArrow\');\n      target.ownerDocument.querySelector(\'.fileBox\').style.display = \'none\';\n    }\n  },\n  arrowApproval: function arrowApproval(e) {\n    var target = e.target;\n    if (target.getAttribute(\'class\') == \'spanArrow\') {\n      target.setAttribute(\'class\', \'spanArrow arr\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'block\';\n    } else {\n      target.setAttribute(\'class\', \'spanArrow\');\n      target.ownerDocument.querySelector(\'.dropBox\').style.display = \'none\';\n    }\n  },\n  preview: function preview(e) {\n    var target = e.currentTarget;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'preview\',\n        data: [target.getAttribute(\'data-href\'), target.getAttribute(\'data-type\')]\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'details\' },\n      React.createElement(\n        \'div\',\n        { className: \'detailsHead\' },\n        \'\\u57FA\\u672C\\u4FE1\\u606F\'\n      ),\n      React.createElement(\n        \'ul\',\n        { className: \'detailsContent\' },\n        data.data.map(function (d, i) {\n          return i < 5 ? React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'span\',\n              { className: \'spanTitle\' },\n              d[0]\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'spanContent\' },\n              d[1]\n            )\n          ) : \'\';\n        }),\n        React.createElement(\n          \'li\',\n          null,\n          React.createElement(\n            \'span\',\n            { className: \'spanTitle\' },\n            data.data[5][0]\n          ),\n          React.createElement(\n            \'span\',\n            { className: \'spanContent\' },\n            data.data[5][1]\n          )\n        ),\n        React.createElement(\n          \'li\',\n          null,\n          React.createElement(\n            \'span\',\n            { className: \'spanTitle\' },\n            data.data[6][0]\n          ),\n          React.createElement(\n            \'span\',\n            { className: \'spanContent\' },\n            data.data[6][1]\n          ),\n          React.createElement(\'span\', { onClick: _this.arrowFile, className: \'spanArrow\' })\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'fileBox\', style: { \'display\': \'none\' } },\n          data.file.map(function (d, i) {\n            return React.createElement(\n              \'li\',\n              { onClick: _this.preview, \'data-href\': d[3], \'data-type\': d[2] },\n              React.createElement(\'span\', { className: "spanBg" + \' \' + d[0] }),\n              React.createElement(\n                \'span\',\n                { className: \'spanName\' },\n                d[1]\n              )\n            );\n          }),\n          data.upload ? React.createElement(\n            \'div\',\n            { onClick: _this.upload, className: \'uploadButton\' },\n            \'\\u589E\\u52A0\\u9644\\u4EF6\'\n          ) : \'\'\n        )\n      )\n    );\n  }\n});';
    },
    getData_control60_sai2SN: function (elem) {
      'use strict';

      ;var data = [];if (elem) {
        if (elem.querySelectorAll('input')[0].parentNode.style.display != 'none') {
          data.push(elem.querySelectorAll('input')[0].value.replace(/\s+/g, ''));data.push(elem.querySelectorAll('input')[1].value.replace(/\s+/g, ''));
        }
      }return data;
    },
    doAction_uiControl48_17cXto: function (data, elem) {
      'use strict';

      if (data.eventType == 'save') {
        elem.querySelectorAll('input')[0].click();
      } else if (data.eventType == 'submit') {
        elem.querySelectorAll('input')[1].click();
      }
    },
    getTemplate_uiControl48_17cXto: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  save: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'save\'\n      })\n    }\n  },\n  submit: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'submit\'\n      })\n      handler({\n       eventType:\'section-trigger\',\n       data:\'control62_QLABMD\'\n     })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData||[];\n    return (\n      data.length>0?\n      <div className="bottomButton">\n        <li onClick={_this.save}>{data[0]}</li>\n        <li onClick={_this.submit}>{data[1]}</li>\n      </div>\n      :\'\'\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  save: function save(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'save\'\n      });\n    }\n  },\n  submit: function submit(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'submit\'\n      });\n      handler({\n        eventType: \'section-trigger\',\n        data: \'control62_QLABMD\'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData || [];\n    return data.length > 0 ? React.createElement(\n      \'div\',\n      { className: \'bottomButton\' },\n      React.createElement(\n        \'li\',\n        { onClick: _this.save },\n        data[0]\n      ),\n      React.createElement(\n        \'li\',\n        { onClick: _this.submit },\n        data[1]\n      )\n    ) : \'\';\n  }\n});';
    }
  }, "staffLoan");
})(window, ysp);