'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control15_huSAVV: function (elem) {
      ;if (!elem) {
        return false;
      }if (elem && elem.style.display == "block") {
        var data = {};var title = $(elem).children('#TB_title').eq(0).children('div').eq(0).text();
        data.title = title;var contetns = $(elem).find('iframe')[0].contentDocument.querySelector('body');var liss = $(contetns).find('#approveForm').find('.setTb').children('tbody');if ($(contetns).find('#approveForm').length > 0 && $(contetns).find('#approveForm').find('.setTb').length > 0 && $(contetns).find('#approveForm').find('.setTb').children('tbody').length > 0) {
          var lits = liss.children('tr').eq(0).find('div').text().trim();
        }var titless = liss.children('tr').eq(0).find('th').text();var chilis = liss.children('tr').eq(1).find('th').text();var options = liss.children('tr').eq(1).find('select').find('option');var opt = [];options.forEach(function (items, index) {
          opt.push({ value: items.textContent, val: items.value });
        });data.contents = [];data.contents.push({ titles: titless, con: lits });data.tits = chilis;data.cons = opt;data.isShow = true;return data;
      }
    },
    doAction_uiControl12_isZLyO: function (data, elem) {
      var contetns = $(elem).find('iframe')[0].contentDocument.querySelector('body');if (data.eventType == "submits") {
        if ($(contetns).find('.p5').length > 0) {
          $(contetns).find('.p5').children('.fr').eq(1).find('a').click();
        } else {
          $(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(2).find('a').eq(0).click();
        }
      } else if (data.eventType == "backs") {
        if ($(contetns).find('.p5').length > 0) {
          $(contetns).find('.p5').children('.fr').eq(0).find('a').click();ysp.appMain.showLoading();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 2000);
        } else {
          $(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(2).find('a').eq(1).click();ysp.appMain.showLoading();setTimeout(function () {
            ysp.appMain.hideLoading();
          }, 2000);
        }
      } else if (data.eventType == "change") {
        var index = data.dataCustom;$(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(1).find('select')[0].value = $(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(1).find('select')[0].querySelectorAll('option')[index].value;$(contetns).find('#approveForm').find('.setTb').children('tbody').children('tr').eq(1).find('select')[0].dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl12_isZLyO: function getTemplate_uiControl12_isZLyO() {
      var selfTemplate = '\nmodule.exports = React.createClass({\n  handleClick:function(e){\n   \n    var handle = this.props.customHandler;\n    var index=e.target.dataset.key\n    if(handle){\n      handle({\n        data:index,\n        eventType:\'click\'\n      })\n    }\n  },\n  submits:function(e){\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'submits\'\n      })\n    }\n    \n  },\n   backs:function(e){\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'backs\'\n      })\n    }\n  },\n  change:function(e){\n    alert(1);\n    var handle = this.props.customHandler;\n    if(handle){\n      handle({    \n        eventType:\'change\',\n        data:e.target.selectedIndex\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data&&data.cons.length>0){\n    var options=[];\n      options.push(data.cons.map(function(items,index){\n      return(<option>{items.value}</option>)\n    }) )\n     return (<div>\n        <div className=\'weng_sucessMesbx\'>\n          <div>\n            <h5>{data.title}</h5>\n            <p>\n              <ul className=\'D-backlist\'>\n                <li ><span>{data.contents[0].titles}</span><span>{data.contents[0].con}</span></li>\n               <li><span style={{width:\'44%\'}}>{data.tits}</span><select onChange={this.change} className="selecs">{options}</select></li>\n             </ul>\n            </p>\n            <p className=\'D-backP\'><button onClick={this.submits} className="btn">\u63D0\u4EA4</button> <button onClick={this.backs} className="btn">\u8FD4\u56DE</button></p>\n          </div>\n        </div>\n        :\n      </div>)\n    }else{\n      return(<div></div>)\n    }\n}, \n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick(e) {\n\n    var handle = this.props.customHandler;\n    var index = e.target.dataset.key;\n    if (handle) {\n      handle({\n        data: index,\n        eventType: \'click\'\n      });\n    }\n  },\n  submits: function submits(e) {\n    var handle = this.props.customHandler;\n    if (handle) {\n      handle({\n        eventType: \'submits\'\n      });\n    }\n  },\n  backs: function backs(e) {\n    var handle = this.props.customHandler;\n    if (handle) {\n      handle({\n        eventType: \'backs\'\n      });\n    }\n  },\n  change: function change(e) {\n    alert(1);\n    var handle = this.props.customHandler;\n    if (handle) {\n      handle({\n        eventType: \'change\',\n        data: e.target.selectedIndex\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.cons.length > 0) {\n      var options = [];\n      options.push(data.cons.map(function (items, index) {\n        return React.createElement(\n          \'option\',\n          null,\n          items.value\n        );\n      }));\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'div\',\n          { className: \'weng_sucessMesbx\' },\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'h5\',\n              null,\n              data.title\n            ),\n            React.createElement(\n              \'p\',\n              null,\n              React.createElement(\n                \'ul\',\n                { className: \'D-backlist\' },\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    data.contents[0].titles\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    data.contents[0].con\n                  )\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    { style: { width: \'44%\' } },\n                    data.tits\n                  ),\n                  React.createElement(\n                    \'select\',\n                    { onChange: this.change, className: \'selecs\' },\n                    options\n                  )\n                )\n              )\n            ),\n            React.createElement(\n              \'p\',\n              { className: \'D-backP\' },\n              React.createElement(\n                \'button\',\n                { onClick: this.submits, className: \'btn\' },\n                \'\\u63D0\\u4EA4\'\n              ),\n              \' \',\n              React.createElement(\n                \'button\',\n                { onClick: this.backs, className: \'btn\' },\n                \'\\u8FD4\\u56DE\'\n              )\n            )\n          )\n        ),\n        \':\'\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  }, "backs");
})(window, ysp);