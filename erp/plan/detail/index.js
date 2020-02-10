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
    getData_control11_WI26V4: function (elem) {
      if (!elem) {
        return false;
      } // var data = {};
      // var Basic = elem.children[1]; //基本信息采集
      // var trs = Basic && Basic.querySelector('span.urLinStd').children;
      // var BasicArr = [];
      // for (var i = 0; i < trs.length; i++) {
      //   if (trs.textContent !== '') {
      //     var item = {};
      //     if (trs[i].children.length == 3) {
      //       item.title = [trs[i].querySelectorAll('td')[0].textContent];
      //       item.content = [trs[i].querySelectorAll('td')[1].querySelector('input') && trs[i].querySelectorAll('td')[1].querySelector('input').value || ''];
      //     }
      //     if (trs[i].children.length == 4) {
      //       item.title = [trs[i].querySelectorAll('td')[0].textContent];
      //       item.content = [trs[i].querySelectorAll('td')[1].querySelector('input') && trs[i].querySelectorAll('td')[1].querySelector('input').value || ''];
      //       item.duo = trs[i].children[2].querySelector('input') && trs[i].children[2].querySelector('input').value || '';
      //     }
      //     if (trs[i].children.length == 8) {
      //       item.title = [trs[i].children[0].textContent, trs[i].children[3].textContent];
      //       item.content = [trs[i].children[1].querySelector('input') && trs[i].children[1].querySelector('input').value || '', trs[i].children[4].querySelector('input') && trs[i].children[4].querySelector('input').value || ''];
      //     }
      //     if (trs[i].children.length == 6) {
      //       item.title = [trs[i].children[0].textContent, trs[i].children[3].textContent];
      //       item.content = [trs[i].children[1].querySelector('input') && trs[i].children[1].querySelector('input').value || '', trs[i].children[4].querySelector('input') && trs[i].children[4].querySelector('input').value || ''];
      //     }
      //     if (trs[i].children.length == 8) {
      //       item.title = [trs[i].children[0].textContent, trs[i].children[3].textContent, trs[i].children[6].textContent];
      //       item.content = [trs[i].children[1].querySelector('input') && trs[i].children[1].querySelector('input').value || '', trs[i].children[4].querySelector('input') && trs[i].children[4].querySelector('input').value || '', trs[i].children[7].querySelector('input') && trs[i].children[7].querySelector('input').value || ''];
      //     }
      //     BasicArr.push(item);
      //   }
      // } // 银行基本信息；
      // var Bank = elem.children[1].children[0].children[0].children[2];
      // var BankTrs = Bank && Bank.querySelector('span.urLinStd').querySelector('table.urFontStd tbody').querySelector('table.urFontStd tbody').children;
      // var BankArr = [];
      // for (var i = 0; i < BankTrs.length; i++) {
      //   if (BankTrs.textContent !== '') {
      //     var item = {};
      //     if (BankTrs[i].children.length == 3) {
      //       item.title = [BankTrs[i].querySelectorAll('td')[0].textContent];
      //       item.content = [BankTrs[i].querySelectorAll('td')[1].querySelector('input') && BankTrs[i].querySelectorAll('td')[1].querySelector('input').value || ''];
      //     }
      //     if (BankTrs[i].children.length == 8) {
      //       if (BankTrs[i].children[6].textContent != '') {
      //         item.title = [BankTrs[i].children[0].textContent, BankTrs[i].children[3].textContent, BankTrs[i].children[6].textContent];
      //         item.content = [BankTrs[i].children[1].querySelector('input') && BankTrs[i].children[1].querySelector('input').value || '', BankTrs[i].children[4].querySelector('input') && BankTrs[i].children[4].querySelector('input').value || '', BankTrs[i].children[7].querySelector('input') && BankTrs[i].children[7].querySelector('input').value || ''];
      //       } else if (BankTrs[i].children[6].textContent == '') {
      //         item.title = [BankTrs[i].children[0].textContent, BankTrs[i].children[3].textContent];
      //         item.content = [BankTrs[i].children[1].querySelector('input') && BankTrs[i].children[1].querySelector('input').value || '', BankTrs[i].children[4].querySelector('input') && BankTrs[i].children[4].querySelector('input').value || ''];
      //       }
      //     }
      //     BankArr.push(item);
      //   }
      // } //合同资料
      // var Contract = elem.children[1].children[0].children[0].children[3];
      // var ContractTrs = Contract && Contract.querySelector('div.urTrcBodyHdrPd').children[2].children[1].children;
      // var ContractArr = [];
      // for (var i = 1; i < ContractTrs.length; i++) {
      //   if (ContractTrs.textContent !== '') {
      //     var item = {};
      //     if (i == 1) {
      //       var arr = ContractTrs[i].querySelector('div tbody ').children[0].textContent;
      //       arr = arr.split(':');
      //       arr.length = arr.length - 1;
      //       item.title = arr;
      //       var ipt = ContractTrs[i].children[0].children[1].querySelector('div').children[0].children[0].children[0];
      //       item.content = [ipt.children[1].querySelectorAll('input')[0].value, ipt.children[4].querySelectorAll('input')[0].value, ipt.children[7].querySelectorAll('input')[0].value, ipt.children[10].querySelectorAll('input')[0].value];
      //     }
      //     if (i == 2) {
      //       var arr = ContractTrs[i].children[0].children[1].querySelector('div').children[0].children[0].children[0].textContent;
      //       arr = arr.split(':');
      //       arr.length = arr.length - 1;
      //       item.title = arr;
      //       var ipt = ContractTrs[i].children[0].children[1].querySelector('div').children[0].children[0].children[0];
      //       item.content = [ipt.children[1].querySelectorAll('input')[0].value, ipt.children[4].querySelectorAll('input')[0].value, ipt.children[7].querySelectorAll('input')[0].value, ipt.children[10].querySelectorAll('input')[0].value];
      //     }
      //     ContractArr.push(item);
      //   }
      // } //付款资料
      // var Pay = elem.children[1].children[0].children[0].children[4];
      // var PayTrs = Pay && Pay.querySelector('span.urLinStd').querySelector('table.urFontStd tbody').querySelector('table.urFontStd tbody').children;
      // var PayArr = [];
      // for (var i = 0; i < PayTrs.length; i++) {
      //   if (PayTrs.textContent !== '') {
      //     if (i == 0) {
      //       var tr1 = PayTrs[i].querySelectorAll('table.urFontStd')[0].children[0].children;
      //       for (var k = 0; k < tr1.length; k++) {
      //         var item = {};
      //         if (k == 0) {
      //           if (tr1[k].children.length == 7) {
      //             item.title = [tr1[k].children[0].textContent, tr1[k].children[4].textContent];
      //             item.content = [tr1[k].children[1].querySelector('input') && tr1[k].children[1].querySelector('input').value || '', tr1[k].children[5].querySelector('input') && tr1[k].children[5].querySelector('input').value || ''];
      //             item.duo = trs[i].children[2].querySelector('input') && trs[i].children[2].querySelector('input').value || '';
      //           }
      //         } else if (k == 1) {
      //           item.title = [tr1[k].children[0].textContent];
      //           item.content = [tr1[k].children[1].querySelector('input') && tr1[k].children[1].querySelector('input').value || ''];
      //         } else if (k == 2) {
      //           item.title = [tr1[k].children[0].textContent];
      //           item.content = [tr1[k].children[1].querySelector('input') && tr1[k].children[1].querySelector('input').value || ''];
      //         }
      //         PayArr.push(item);
      //       }
      //     } else if (i == 2) {
      //       var tr1 = PayTrs[i].querySelector('table.urFontStd').children[0].children;
      //       for (var k = 0; k < tr1.length; k++) {
      //         var item = {};
      //         if (k == 0) {
      //           if (tr1[k].children.length == 9) {
      //             item.title = [tr1[k].children[0].textContent, tr1[k].children[3].textContent, tr1[k].children[6].textContent];
      //             item.content = [tr1[k].children[1].querySelector('input') && tr1[k].children[1].querySelector('input').value || '', tr1[k].children[4].querySelector('input') && tr1[k].children[4].querySelector('input').value || '', tr1[k].children[7].querySelector('input') && tr1[k].children[7].querySelector('input').value || ''];
      //           }
      //         }
      //         if (k == 1) {
      //           if (tr1[k].children.length == 8) {
      //             item.title = [tr1[k].children[0].textContent, tr1[k].children[3].textContent, tr1[k].children[6].textContent];
      //             item.content = [tr1[k].children[1].querySelector('input') && tr1[k].children[1].querySelector('input').value || '', tr1[k].children[4].querySelector('input') && tr1[k].children[4].querySelector('input').value || '', tr1[k].children[7].querySelector('input') && tr1[k].children[7].querySelector('input').value || ''];
      //           }
      //         }
      //         PayArr.push(item);
      //       }
      //     }
      //   }
      // } //附件预览
      // var File = elem.children[1].children[0].children[0].children[5];
      // var FileTrs = File && File.querySelector('span.urLinStd').querySelector('table.urFontStd tbody').querySelector('table.urFontStd tbody').children;
      // var FileArr = [];
      // for (var i = 1; i < FileTrs.length; i++) {
      //   if (FileTrs.textContent !== '') {

      //     var item = {};
      //     item.title = FileTrs[i].children[1].querySelector('span').textContent; // 属性值为文件预览地址 - 暂为空 
      //     item.href = '';
      //     item.type = '';
      //   }
      //   FileArr.push(item);
      // } //跟单预览
      // var Attached = elem.children[1].children[0].children[0].children[6];
      // var AttachedTrs = File && File.querySelector('span.urLinStd').querySelector('table.urFontStd tbody').querySelector('table.urFontStd tbody').children;
      // var AttachedArr = [];
      // for (var i = 1; i < AttachedTrs.length; i++) {
      //   if (AttachedTrs.textContent !== '') {
      //     var item = {};
      //     item.title = AttachedTrs[i].children[1].querySelector('span').textContent; // 属性值为文件预览地址 - 暂为空 
      //     item.type = '';
      //     item.time = '';
      //   }
      //   AttachedArr.push(item);
      // }
      // var Approve = elem.children[4].children[0].children[0].children[0];
      // var ApproveTrs = Approve && Approve.querySelectorAll('span.urLinStd')[0].querySelector('table.urFontStd tbody').children;
      // var ApproveArr = [];
      // for (var i = 0; i < ApproveTrs.length; i++) {
      //   var item = {};
      //   if (i == 0) {
      //     item.title = ApproveTrs[i].querySelectorAll('td')[0].textContent;
      //     item.content = ApproveTrs[i].querySelectorAll('td')[1].querySelector('textarea').value;
      //   }
      //   if (i == 1) {
      //     item.title = [ApproveTrs[i].querySelectorAll('td')[0].textContent, ApproveTrs[i].querySelectorAll('td')[2].textContent];
      //     item.content = [ApproveTrs[i].querySelectorAll('td')[1].querySelector('input') && ApproveTrs[i].querySelectorAll('td')[1].querySelector('input').value || '', ApproveTrs[i].querySelectorAll('td')[3].querySelector('input') && ApproveTrs[i].querySelectorAll('td')[3].querySelector('input').value || ''];
      //   }
      //   ApproveArr.push(item);
      // } //审批历史
      // var History = elem.children[3].children[0].children[0].children[0];
      // var HistoryTrs = History && History.querySelectorAll('span.urLinStd')[0].querySelector('table.urFontStd tbody').children[2].querySelectorAll('span.urLinStd')[0].querySelector('table.urFontStd tbody').querySelector('tbody').children;
      // if (History) {
      //   var HistoryArr = [];
      //   var HistoryArr1 = [];
      //   if (HistoryTrs[i].children.length > 5) {
      //     for (var i = 1; i < HistoryTrs.length; i++) {
      //       if (HistoryTrs.textContent !== '') {
      //         var item = {};
      //         item.title = HistoryTrs[i].children[1].querySelector('span').textContent; // 属性值为文件预览地址 - 暂为空 
      //         item.state = HistoryTrs[i].children[2].querySelector('span').textContent;
      //         item.shenpiren = HistoryTrs[i].children[3].querySelector('span').textContent;
      //         item.time = HistoryTrs[i].children[4].querySelector('span').textContent;
      //         item.end = HistoryTrs[i].children[5].querySelector('span').textContent;
      //         item.idea = HistoryTrs[i].children[6].querySelector('span').textContent;
      //       }
      //       HistoryArr.push(item);
      //     }
      //   }
      // }
      //data.Basic = BasicArr; // data.Bank = BankArr;
      // data.ContractArr = ContractArr;
      // data.PayArr = PayArr;
      // data.FileArr = FileArr;
      // data.AttachedArr = AttachedArr;
      // data.ApproveArr = ApproveArr;
      // data.HistoryArr = HistoryArr; //data.HistoryArr1 = HistoryArr1 || false;
      // data.bohui = elem.ownerDocument.querySelector('#FDOE\\.TaskExecutionView\\.MessageArea1-txt') ? true : false;
      //return data;
    },
    doAction_uiControl7_EPaEQJ: function (data, elem) {
      //FDOEEFPDBOMAACHH.FundsView.APPR_COMMENTS
      //FDOEEFPDBOMAACHH.FundsView.tbtnDisagree1
      if (data.eventType == 'change') {
        elem.querySelector('#FDOEEFPDBOMAACHH\\.FundsView\\.APPR_COMMENTS').value = data.dataCustom;
      }if (data.eventType == 'select') {
        elem.querySelector('#FDOEEFPDBOMAACHH\\.FundsView\\.NEXT_PROCESSDEFID').value = data.dataCustom;
      }if (data.eventType == 'back') {
        debugger;elem.querySelector('#FDOEEFPDBOMAACHH\\.FundsView\\.tbtnDisagree1').click();
      }if (data.eventType == 'commit') {
        debugger;elem.ownerDocument.querySelector('#FDOEEFPDBOMAACHH\\.FundsView\\.tbtnAgree1').click();
      }
    },
    getTemplate_uiControl7_EPaEQJ: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      one:true,\n      two:false,\n      select:false\n    }\n  }\n  listFor(data,title){\n    var _this = this;\n    //var Basic = this.props.customData.Basic;\n    return (\n    \t<div className ='ysp-Basic show-false' >\n        <span className = 'icon-title'> {title}</span>\n      \t<ul className='Basic'>\n        \t{data && data.map((item,index)=>{\n            return (\n            \t<li>\n                  {item.title && item.title.map((d,i)=>{\n                  return (\n                  \t<div>\n                    <div className='title'>{d}</div><div className='content'>{item.content[i]}</div>\n                    </div>\n                  )\n                })}\n              </li>\n            )\n          })}\n        </ul>\n        <div className='show-btn-common' onClick={(e)=>{\n            if(e.target.className != 'show-btn-common'){\n              e.target = e.target.parentElement;\n            }\n            if(e.target.parentElement.classList.contains('show-true')){\n              e.target.parentElement.className = 'ysp-Basic show-false';\n              e.target.querySelector('.text').textContent = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n              e.target.querySelector('i').className = 'icon-true';\n            }else{\n          e.target.parentElement.className = 'ysp-Basic show-true';\n              e.target.querySelector('.text').textContent = '\u6536\u8D77\u5168\u90E8\u5185\u5BB9';\n               e.target.querySelector('i').className = 'icon-false';\n            }\n            }}><i className='icon-true'></i><div className = 'text'>\u663E\u793A\u66F4\u591A\u5185\u5BB9</div></div>\n      </div>\n    )\n  }\n  ContractArr(data,title){\n    var _this = this;\n    //var Basic = this.props.customData.Basic;\n    return (\n    \t<div className ='ysp-Basic show-false one' >\n        <span className = 'icon-title'> {title}</span>\n      \t<ul className='Basic'>\n        \t{data && data.map((item,index)=>{\n            return (\n            \t<li>\n                  {item.title && item.title.map((d,i)=>{\n                  return (\n                  \t<div>\n                    <div className='title'>{d}</div><div className='content'>{item.content[1]}</div>\n                    </div>\n                  )\n                })}\n              </li>\n            )\n          })}\n        </ul>\n        <div className='show-btn-common' onClick={(e)=>{\n            if(e.target.className != 'show-btn-common'){\n              e.target = e.target.parentElement;\n            }\n            if(e.target.parentElement.classList.contains('show-true')){\n              e.target.parentElement.className = 'ysp-Basic show-false one';\n              e.target.querySelector('.text').textContent = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n              e.target.querySelector('i').className = 'icon-true';\n            }else{\n          e.target.parentElement.className = 'ysp-Basic show-true two';\n              e.target.querySelector('.text').textContent = '\u6536\u8D77\u5168\u90E8\u5185\u5BB9';\n               e.target.querySelector('i').className = 'icon-false';\n            }\n            }}><i className='icon-true'></i><div className = 'text'>\u663E\u793A\u66F4\u591A\u5185\u5BB9</div></div>\n      </div>\n    )\n  }\n  ApproveArr(){\n    var _this = this;\n    var ApproveArr = this.props.customData.ApproveArr;\n    return(\n    \t<div className='ysp-Basic'>\n      \t<span className = 'icon-title'> \u5BA1\u6279\u64CD\u4F5C</span>\n      \t<ul className='Basic'>\n        \t<li>\n                      <div>\n                      <div className='title'>\u5BA1\u6279\u610F\u89C1\uFF1A</div><textarea onChange={(e)=>{\n                            var handler = _this.props.customHandler;\n                            if(handler){\n                              handler({\n                                data:e.target.value,\n                                eventType:'change'\n                              })\n                            }\n                          }}></textarea>\n                      </div>\n                </li>\n        \t{ApproveArr && ApproveArr.map((item,index)=>{\n            if(index>0){\n              return (\n                <div>\n                <li>\n                      <div>\n                      <div className='title'>\u5BA1\u6279\u4EBA\uFF1A</div><div className='content'>{item.content[0]}</div>\n                      </div>\n                </li>\n                <li>\n                      <div>\n                      <div className='title'>\u4E0B\u6B65\u4EFB\u52A1\uFF1A</div><div className='content' onClick={(e)=>{\n                        _this.setState({\n                          select:true\n                        })\n                          console.log(item.content[1])}}>{item.content[1]}</div>\n                      </div>\n                  {this.state.select && <div className = 'fixed-btn'>\n            <div>\n            \t<ul onClick={(e)=>{\n                  if(e.target.nodeName !== 'LI'){\n                    e.target = e.target.children;\n                  }\n                   var handler = _this.props.customHandler;\n                            if(handler){\n                              handler({\n                                data:e.target.textContent,\n                                eventType:'select'\n                              })\n                            }\n                  _this.setState({\n                    select:false\n                  })\n                }}>\n              \t<li>\u8BF7\u9009\u62E9</li>\n                <li>FY\u8D22\u52A1\u4E3B\u7BA1</li>\n                <li>\u7ED3\u675F\u6D41\u7A0B</li>\n            </ul>\n            <ul className='two-ul'>\n            \t<li onClick={(e)=>{\n                  _this.setState({\n                    select:false\n                  })\n                }}>\u53D6\u6D88</li>\n            </ul>\n            </div>\n          </div>}\n                </li>\n                </div>\n              )\n            }\n          })}\n        </ul>\n      </div>\n    )\n  }\n  FileList(){\n    var _this = this;\n    var file = this.props.customData.FileArr;\n    return(\n    \t<div className='ysp-file'>\n        <span className = 'icon-title'> \u9644\u4EF6</span>{\n          file && file.map((item,index)=>{\n            return(\n            \t<div data-src={item.href} data-index={index} className = 'file'>\n                <i className='icon'></i>\n                <div className='center'><div>{item.title}</div><div>\u9644\u4EF6\u7C7B\u578B:{item.type}</div></div>\n                <div className='right'><div>\u4E0A\u4F20\u65F6\u95F4</div><div></div></div>\n              </div>\n            )\n          })\n        }</div>\n    )\n  }\n  AttachedArr(){\n    var _this = this;\n    var AttachedArr = this.props.customData.AttachedArr;\n    return(\n    \t<div className='ysp-file ysp-AttachedArr'>\n        <span className = 'icon-title'> \u8DDF\u5355</span>{\n          AttachedArr && AttachedArr.map((item,index)=>{\n            return(\n            \t<div data-src={item.href} data-index={index} className = 'file'>\n                \n                <div className='center'><div>\u6D41\u7A0B\u53F7/\u5355\u636E\u53F7:{item.title}</div><div>\u8DDF\u5355\u7C7B\u578B:{item.type}</div></div>\n                <div className='right'><div>\u5B8C\u6210\u65F6\u95F4</div><div>{item.time}</div></div>\n              </div>\n            )\n          })\n        }</div>\n    )\n  }\n  Tab(){\n    var _this = this;\n    var Tab = _this.props.customData.HistoryArr\n    return(\n    \t<div className = 'ysp-file'>\n      \t<div>\n        \t<span className = 'icon-title'>\u5BA1\u6279\u5386\u53F2</span>\n        </div>\n        {this.state.one && Tab.map((item,index)=>{\n          return (\n          \t<div data-src={item.href} data-index={index} className = 'file'>\n                \n                <div className='center'><div>{item.title}</div><div>{item.state}</div></div>\n                <div className='right'><div>{item.shenpiren}</div><div>{item.end}</div></div>\n              </div>\n          )\n        })}\n      </div>\n    )\n  }\n  render(){\n    var _this = this;\n    if(_this.props.customData){\n        var Basic = this.props.customData.Basic;\n      var Bank = this.props.customData.Bank;\n      var ContractArr = this.props.customData.ContractArr;\n      var PayArr = this.props.customData.PayArr;\n      return (\n        <div className = 'ysp-Detail'>\n          {this.listFor(Basic,'\u57FA\u672C\u4FE1\u606F')}\n          {this.listFor(Bank,'\u94F6\u884C\u8D44\u6599')}\n          {this.ContractArr(ContractArr,'\u5408\u540C\u8D44\u6599')}\n          {this.listFor(PayArr,'\u4ED8\u6B3E\u8D44\u6599')}\n          {this.ApproveArr()}\n          {this.FileList()}\n          {this.AttachedArr()}\n          {this.Tab()}\n          {_this.props.customData.bohui && <div style={{textAlign:'center',margin:'20px',color:'red'}}>* \u9A73\u56DE\u65F6\u5BA1\u6279\u610F\u89C1\u4E0D\u80FD\u4E3A\u7A7A *</div>}\n          <div className='commit'>\n            <button  onClick={(e)=>{\n                var handler = _this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:'back'\n                  })\n                }\n              }}>\u9A73\u56DE</button><button onClick={(e)=>{\n                var handler = _this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:'commit'\n                  })\n                }\n                window.dispatchEvent( new Event('ysp-show'))\n              }}>\u540C\u610F</button></div>\n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}>{/** \u6570\u636E\u672A\u52A0\u8F7D\u5B8C\u6216\u6D41\u7A0B\u63D0\u4EA4\u6210\u529F **/}</div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      one: true,\n      two: false,\n      select: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'listFor',\n    value: function listFor(data, title) {\n      var _this = this;\n      //var Basic = this.props.customData.Basic;\n      return React.createElement(\n        'div',\n        { className: 'ysp-Basic show-false' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          ' ',\n          title\n        ),\n        React.createElement(\n          'ul',\n          { className: 'Basic' },\n          data && data.map(function (item, index) {\n            return React.createElement(\n              'li',\n              null,\n              item.title && item.title.map(function (d, i) {\n                return React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'div',\n                    { className: 'title' },\n                    d\n                  ),\n                  React.createElement(\n                    'div',\n                    { className: 'content' },\n                    item.content[i]\n                  )\n                );\n              })\n            );\n          })\n        ),\n        React.createElement(\n          'div',\n          { className: 'show-btn-common', onClick: function onClick(e) {\n              if (e.target.className != 'show-btn-common') {\n                e.target = e.target.parentElement;\n              }\n              if (e.target.parentElement.classList.contains('show-true')) {\n                e.target.parentElement.className = 'ysp-Basic show-false';\n                e.target.querySelector('.text').textContent = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n                e.target.querySelector('i').className = 'icon-true';\n              } else {\n                e.target.parentElement.className = 'ysp-Basic show-true';\n                e.target.querySelector('.text').textContent = '\u6536\u8D77\u5168\u90E8\u5185\u5BB9';\n                e.target.querySelector('i').className = 'icon-false';\n              }\n            } },\n          React.createElement('i', { className: 'icon-true' }),\n          React.createElement(\n            'div',\n            { className: 'text' },\n            '\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9'\n          )\n        )\n      );\n    }\n  }, {\n    key: 'ContractArr',\n    value: function ContractArr(data, title) {\n      var _this = this;\n      //var Basic = this.props.customData.Basic;\n      return React.createElement(\n        'div',\n        { className: 'ysp-Basic show-false one' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          ' ',\n          title\n        ),\n        React.createElement(\n          'ul',\n          { className: 'Basic' },\n          data && data.map(function (item, index) {\n            return React.createElement(\n              'li',\n              null,\n              item.title && item.title.map(function (d, i) {\n                return React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'div',\n                    { className: 'title' },\n                    d\n                  ),\n                  React.createElement(\n                    'div',\n                    { className: 'content' },\n                    item.content[1]\n                  )\n                );\n              })\n            );\n          })\n        ),\n        React.createElement(\n          'div',\n          { className: 'show-btn-common', onClick: function onClick(e) {\n              if (e.target.className != 'show-btn-common') {\n                e.target = e.target.parentElement;\n              }\n              if (e.target.parentElement.classList.contains('show-true')) {\n                e.target.parentElement.className = 'ysp-Basic show-false one';\n                e.target.querySelector('.text').textContent = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n                e.target.querySelector('i').className = 'icon-true';\n              } else {\n                e.target.parentElement.className = 'ysp-Basic show-true two';\n                e.target.querySelector('.text').textContent = '\u6536\u8D77\u5168\u90E8\u5185\u5BB9';\n                e.target.querySelector('i').className = 'icon-false';\n              }\n            } },\n          React.createElement('i', { className: 'icon-true' }),\n          React.createElement(\n            'div',\n            { className: 'text' },\n            '\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9'\n          )\n        )\n      );\n    }\n  }, {\n    key: 'ApproveArr',\n    value: function ApproveArr() {\n      var _this3 = this;\n\n      var _this = this;\n      var ApproveArr = this.props.customData.ApproveArr;\n      return React.createElement(\n        'div',\n        { className: 'ysp-Basic' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          ' \\u5BA1\\u6279\\u64CD\\u4F5C'\n        ),\n        React.createElement(\n          'ul',\n          { className: 'Basic' },\n          React.createElement(\n            'li',\n            null,\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'div',\n                { className: 'title' },\n                '\\u5BA1\\u6279\\u610F\\u89C1\\uFF1A'\n              ),\n              React.createElement('textarea', { onChange: function onChange(e) {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: e.target.value,\n                      eventType: 'change'\n                    });\n                  }\n                } })\n            )\n          ),\n          ApproveArr && ApproveArr.map(function (item, index) {\n            if (index > 0) {\n              return React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'li',\n                  null,\n                  React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                      'div',\n                      { className: 'title' },\n                      '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                    ),\n                    React.createElement(\n                      'div',\n                      { className: 'content' },\n                      item.content[0]\n                    )\n                  )\n                ),\n                React.createElement(\n                  'li',\n                  null,\n                  React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                      'div',\n                      { className: 'title' },\n                      '\\u4E0B\\u6B65\\u4EFB\\u52A1\\uFF1A'\n                    ),\n                    React.createElement(\n                      'div',\n                      { className: 'content', onClick: function onClick(e) {\n                          _this.setState({\n                            select: true\n                          });\n                          console.log(item.content[1]);\n                        } },\n                      item.content[1]\n                    )\n                  ),\n                  _this3.state.select && React.createElement(\n                    'div',\n                    { className: 'fixed-btn' },\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'ul',\n                        { onClick: function onClick(e) {\n                            if (e.target.nodeName !== 'LI') {\n                              e.target = e.target.children;\n                            }\n                            var handler = _this.props.customHandler;\n                            if (handler) {\n                              handler({\n                                data: e.target.textContent,\n                                eventType: 'select'\n                              });\n                            }\n                            _this.setState({\n                              select: false\n                            });\n                          } },\n                        React.createElement(\n                          'li',\n                          null,\n                          '\\u8BF7\\u9009\\u62E9'\n                        ),\n                        React.createElement(\n                          'li',\n                          null,\n                          'FY\\u8D22\\u52A1\\u4E3B\\u7BA1'\n                        ),\n                        React.createElement(\n                          'li',\n                          null,\n                          '\\u7ED3\\u675F\\u6D41\\u7A0B'\n                        )\n                      ),\n                      React.createElement(\n                        'ul',\n                        { className: 'two-ul' },\n                        React.createElement(\n                          'li',\n                          { onClick: function onClick(e) {\n                              _this.setState({\n                                select: false\n                              });\n                            } },\n                          '\\u53D6\\u6D88'\n                        )\n                      )\n                    )\n                  )\n                )\n              );\n            }\n          })\n        )\n      );\n    }\n  }, {\n    key: 'FileList',\n    value: function FileList() {\n      var _this = this;\n      var file = this.props.customData.FileArr;\n      return React.createElement(\n        'div',\n        { className: 'ysp-file' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          ' \\u9644\\u4EF6'\n        ),\n        file && file.map(function (item, index) {\n          return React.createElement(\n            'div',\n            { 'data-src': item.href, 'data-index': index, className: 'file' },\n            React.createElement('i', { className: 'icon' }),\n            React.createElement(\n              'div',\n              { className: 'center' },\n              React.createElement(\n                'div',\n                null,\n                item.title\n              ),\n              React.createElement(\n                'div',\n                null,\n                '\\u9644\\u4EF6\\u7C7B\\u578B:',\n                item.type\n              )\n            ),\n            React.createElement(\n              'div',\n              { className: 'right' },\n              React.createElement(\n                'div',\n                null,\n                '\\u4E0A\\u4F20\\u65F6\\u95F4'\n              ),\n              React.createElement('div', null)\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'AttachedArr',\n    value: function AttachedArr() {\n      var _this = this;\n      var AttachedArr = this.props.customData.AttachedArr;\n      return React.createElement(\n        'div',\n        { className: 'ysp-file ysp-AttachedArr' },\n        React.createElement(\n          'span',\n          { className: 'icon-title' },\n          ' \\u8DDF\\u5355'\n        ),\n        AttachedArr && AttachedArr.map(function (item, index) {\n          return React.createElement(\n            'div',\n            { 'data-src': item.href, 'data-index': index, className: 'file' },\n            React.createElement(\n              'div',\n              { className: 'center' },\n              React.createElement(\n                'div',\n                null,\n                '\\u6D41\\u7A0B\\u53F7/\\u5355\\u636E\\u53F7:',\n                item.title\n              ),\n              React.createElement(\n                'div',\n                null,\n                '\\u8DDF\\u5355\\u7C7B\\u578B:',\n                item.type\n              )\n            ),\n            React.createElement(\n              'div',\n              { className: 'right' },\n              React.createElement(\n                'div',\n                null,\n                '\\u5B8C\\u6210\\u65F6\\u95F4'\n              ),\n              React.createElement(\n                'div',\n                null,\n                item.time\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'Tab',\n    value: function Tab() {\n      var _this = this;\n      var Tab = _this.props.customData.HistoryArr;\n      return React.createElement(\n        'div',\n        { className: 'ysp-file' },\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            { className: 'icon-title' },\n            '\\u5BA1\\u6279\\u5386\\u53F2'\n          )\n        ),\n        this.state.one && Tab.map(function (item, index) {\n          return React.createElement(\n            'div',\n            { 'data-src': item.href, 'data-index': index, className: 'file' },\n            React.createElement(\n              'div',\n              { className: 'center' },\n              React.createElement(\n                'div',\n                null,\n                item.title\n              ),\n              React.createElement(\n                'div',\n                null,\n                item.state\n              )\n            ),\n            React.createElement(\n              'div',\n              { className: 'right' },\n              React.createElement(\n                'div',\n                null,\n                item.shenpiren\n              ),\n              React.createElement(\n                'div',\n                null,\n                item.end\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var Basic = this.props.customData.Basic;\n        var Bank = this.props.customData.Bank;\n        var ContractArr = this.props.customData.ContractArr;\n        var PayArr = this.props.customData.PayArr;\n        return React.createElement(\n          'div',\n          { className: 'ysp-Detail' },\n          this.listFor(Basic, '\u57FA\u672C\u4FE1\u606F'),\n          this.listFor(Bank, '\u94F6\u884C\u8D44\u6599'),\n          this.ContractArr(ContractArr, '\u5408\u540C\u8D44\u6599'),\n          this.listFor(PayArr, '\u4ED8\u6B3E\u8D44\u6599'),\n          this.ApproveArr(),\n          this.FileList(),\n          this.AttachedArr(),\n          this.Tab(),\n          _this.props.customData.bohui && React.createElement(\n            'div',\n            { style: { textAlign: 'center', margin: '20px', color: 'red' } },\n            '* \\u9A73\\u56DE\\u65F6\\u5BA1\\u6279\\u610F\\u89C1\\u4E0D\\u80FD\\u4E3A\\u7A7A *'\n          ),\n          React.createElement(\n            'div',\n            { className: 'commit' },\n            React.createElement(\n              'button',\n              { onClick: function onClick(e) {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              '\\u9A73\\u56DE'\n            ),\n            React.createElement(\n              'button',\n              { onClick: function onClick(e) {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      eventType: 'commit'\n                    });\n                  }\n                  window.dispatchEvent(new Event('ysp-show'));\n                } },\n              '\\u540C\\u610F'\n            )\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control4_4NDmh0: function (elem) {
      if (!elem) {
        return false;
      }return "操作详情";
    },
    doAction_uiControl3_yRrsbZ: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl3_yRrsbZ: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n  }\n  render(){\n    return (\n    \t<div className = 'TodoList-head'>\n      \t<span onClick={(e)=>{\n            var handler  = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'click'\n              })\n            }\n          }}>\u8FD4\u56DE</span>\n        <span>{this.props.customData}</span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        'div',\n        { className: 'TodoList-head' },\n        React.createElement(\n          'span',\n          { onClick: function onClick(e) {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'click'\n                });\n              }\n            } },\n          '\\u8FD4\\u56DE'\n        ),\n        React.createElement(\n          'span',\n          null,\n          this.props.customData\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control3_qGKUJ1: function (elem) {
      if (!elem) {
        return false;
      }var data = [];var tds = elem.querySelector('#FDOEEFPDBOMAACHH\\.SelectApproversView\\.Table-content').children[0].children[0].children[1].children;for (var i = 2; i < tds.length; i++) {
        var item = {};item.title = tds[i].children[2].querySelector('span').textContent || '';item.name = tds[i].children[3].querySelector('span').textContent || '';item.gangwei = tds[i].children[4].querySelector('span').textContent || '';item.mingcheng = tds[i].children[5].querySelector('span').textContent || '';data.push(item);
      }return data;
    },
    doAction_uiControl2_nblQRS: function (data, elem) {
      if (data.eventType == 'back') {
        elem.querySelector('#FDOEEFPDBOMAACHH\\.SelectApproversView\\.Button1').click();
      }if (data.eventType == 'commit') {
        elem.querySelector('#FDOEEFPDBOMAACHH\\.SelectApproversView\\.Button').click();
      }if (data.eventType == 'click') {
        var td_index = parseInt(data.dataCustom) + 2;elem.querySelector('#FDOEEFPDBOMAACHH\\.SelectApproversView\\.Table-content').children[0].children[0].children[1].children[td_index].children[1].querySelector('input').click();
      }
    },
    getTemplate_uiControl2_nblQRS: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      show:false\n    }\n   \n  }\n  componentDidMount(){\n    var _this = this;\n     window.addEventListener('ysp-show',function(){\n      _this.setState({\n        show:true\n      })\n    },false)\n  }\n  render(){\n    var data = this.props.customData;\n    return (\n      <div>{this.state.show &&\n          <div className = 'ysp-commit-fixed'>\n            <div className=' ysp-commit-tongyi'>\n            \t<ul>\n              \t{data && data.map((item,index)=>{\n                  return(\n                  \t<li data-index = {index}>\n                    \t<div data-src={item.href} data-index={index} className = 'file'>\n                        <input type='checkbox' data-index={index} onClick={(e)=>{\n                    \t\t\tvar _this = this;\n                          var handler = _this.props.customHandler;\n                            if(handler){\n                              handler({\n                                data:e.target.dataset.index,\n                                eventType:'click'\n                              })\n                            }\n                          }}/>\n                        <div className='center'><div>{item.name}</div><div>{item.title}</div></div>\n                        <div className='right'><div>{item.mingcheng}</div><div>{item.gangwei}</div></div>\n                      </div>\n                    </li>\n                  )\n                })}\n            </ul>\n          </div>\n            <ul className='two-ul'>\n            \t<button  onClick={(e)=>{\n                var handler = this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:'back'\n                  })\n                }\n                  this.setState({\n                    show:false\n                  })\n              }}>\u53D6\u6D88</button><button onClick={(e)=>{\n                var handler = this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:'commit'\n                  })\n                }\n              }}>\u786E\u8BA4</button>\n            </ul>\n            </div>\n      }</div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      show: false\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      window.addEventListener('ysp-show', function () {\n        _this.setState({\n          show: true\n        });\n      }, false);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        this.state.show && React.createElement(\n          'div',\n          { className: 'ysp-commit-fixed' },\n          React.createElement(\n            'div',\n            { className: ' ysp-commit-tongyi' },\n            React.createElement(\n              'ul',\n              null,\n              data && data.map(function (item, index) {\n                return React.createElement(\n                  'li',\n                  { 'data-index': index },\n                  React.createElement(\n                    'div',\n                    { 'data-src': item.href, 'data-index': index, className: 'file' },\n                    React.createElement('input', { type: 'checkbox', 'data-index': index, onClick: function onClick(e) {\n                        var _this = _this3;\n                        var handler = _this.props.customHandler;\n                        if (handler) {\n                          handler({\n                            data: e.target.dataset.index,\n                            eventType: 'click'\n                          });\n                        }\n                      } }),\n                    React.createElement(\n                      'div',\n                      { className: 'center' },\n                      React.createElement(\n                        'div',\n                        null,\n                        item.name\n                      ),\n                      React.createElement(\n                        'div',\n                        null,\n                        item.title\n                      )\n                    ),\n                    React.createElement(\n                      'div',\n                      { className: 'right' },\n                      React.createElement(\n                        'div',\n                        null,\n                        item.mingcheng\n                      ),\n                      React.createElement(\n                        'div',\n                        null,\n                        item.gangwei\n                      )\n                    )\n                  )\n                );\n              })\n            )\n          ),\n          React.createElement(\n            'ul',\n            { className: 'two-ul' },\n            React.createElement(\n              'button',\n              { onClick: function onClick(e) {\n                  var handler = _this3.props.customHandler;\n                  if (handler) {\n                    handler({\n                      eventType: 'back'\n                    });\n                  }\n                  _this3.setState({\n                    show: false\n                  });\n                } },\n              '\\u53D6\\u6D88'\n            ),\n            React.createElement(\n              'button',\n              { onClick: function onClick(e) {\n                  var handler = _this3.props.customHandler;\n                  if (handler) {\n                    handler({\n                      eventType: 'commit'\n                    });\n                  }\n                } },\n              '\\u786E\\u8BA4'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control8_81xko5: function (elem) {
      if (!elem) {
        return;
      }var data = { flagText: [], bas: [], fujianContent: [], fujianFile: [], fujianFlag: [], history: [], idea: [], ideaEnding: [], ideaPerson: [] }; //console.log(elem);
      var basics = elem.children; //标题标示
      var text = basics[0] && basics[0].querySelector('td[class="urPgHTTxt"]').textContent;data.flagText.push(text);if (text && (text == "其它费用结算" || text == "陆运费结算")) {
        /****基本信息****/var a = basics[1].querySelectorAll("span.urLinStd")[2].textContent;data.bas.push(a); //////附件管理
        var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;var trs = FJ && FJ.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var b = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              b.push(tds[j].textContent);
            }data.fujianContent.push(b);
          }
        } //附件所选文件
        var files = FJ && FJ.querySelector("input[type='file']");var values = files && files.value;if (values) {
          var strArr = values && values.split("\\");data.fujianFile.push(strArr[strArr.length - 1]);
        } //判断附件是否可以上传
        var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
          if (ass[i].textContent == "添加 ") {
            a.push(ass[i]);
          }
        }if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
          data.fujianFlag.push(true);
        } else {
          data.fujianFlag.push(false);
        } /***审批意见****/var textareaValue = basics[2] && basics[2].querySelector('textarea') && basics[2].querySelector('textarea').value;data.idea.push(textareaValue);var inputValue = basics[2] && basics[2].querySelectorAll('input')[0] && basics[2].querySelectorAll('input')[0].value;data.ideaEnding.push(inputValue);var personValue = basics[2] && basics[2].querySelectorAll('input')[2] && basics[2].querySelectorAll('input')[2].value;data.ideaPerson.push(personValue);var trs = basics[3] && basics[3].querySelectorAll("tr");if (trs) {
          for (var i = 0; i < trs.length; i++) {
            var a = [];if (trs[i].getAttribute("userdata")) {
              var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
                a.push(tds[j].textContent);
              }data.history.push(a);
            }
          }
        }
      } else if (text == "燃料付款申请单") {
        //////附件管理
        var FJ = basics[3] && basics[3].children[0].lastElementChild.lastElementChild;var trs = FJ && FJ.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var b = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              b.push(tds[j].textContent);
            }data.fujianContent.push(b);
          }
        } //附件所选文件
        var files = FJ && FJ.querySelector("input[type='file']");var values = files && files.value;if (values) {
          var strArr = values && values.split("\\");data.fujianFile.push(strArr[strArr.length - 1]);
        } //判断附件是否可以上传
        var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
          if (ass[i].textContent == "添加 ") {
            a.push(ass[i]);
          }
        }if (a && a[0] && a[0].getAttribute("class") == "urBtnStd") {
          data.fujianFlag.push(true);
        } else {
          data.fujianFlag.push(false);
        } /***审批意见****/var textareaValue = basics[4] && basics[4].querySelector('textarea') && basics[4].querySelector('textarea').value;data.idea.push(textareaValue);var inputValue = basics[4] && basics[4].querySelectorAll('input')[0] && basics[4].querySelectorAll('input')[0].value;data.ideaEnding.push(inputValue);var personValue = basics[4] && basics[4].querySelectorAll('input')[2] && basics[4].querySelectorAll('input')[2].value;data.ideaPerson.push(personValue);var trs = basics[5] && basics[5].querySelectorAll("tr");if (trs) {
          for (var i = 0; i < trs.length; i++) {
            var a = [];if (trs[i].getAttribute("userdata")) {
              var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
                a.push(tds[j].textContent);
              }data.history.push(a);
            }
          }
        }
      } else if (text == "煤炭合同") {
        //审批历史
        var trs = basics[4] && basics[4].querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }data.history.push(a);
          }
        }
      } else if (text == "ERP系统变更传输请求表") {
        var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;var trs = FJ && FJ.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var b = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              b.push(tds[j].textContent);
            }data.fujianContent.push(b);
          }
        } //审批历史
        var trs = basics[4] && basics[4].querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }data.history.push(a);
          }
        }
      } else if (text == "服务验收审批单") {
        /***审批意见****/var textareaValue = basics[2] && basics[2].querySelector('textarea').value;data.idea.push(textareaValue);data.ideaEnding.push("服务验收审批单");var personValue = basics[2] && basics[2].querySelectorAll('input')[0].value;data.ideaPerson.push(personValue); //审批历史
        var trs = basics[3] && basics[3].querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
          var a = [];if (trs[i].getAttribute("userdata")) {
            var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
              a.push(tds[j].textContent);
            }data.history.push(a);
          }
        }
      }return data;
    },
    doAction_uiControl5_Qqv3JO: function (data, elem) {
      //意见填写
      if (data.eventType == 'change') {
        var val = data.customData.value;var text = data.customData.text;var basics = elem.children;if (text == '燃料付款申请单') {
          if (basics[4]) {
            basics[4].querySelector('textarea').value = val;
          }
        } else if (text == '其它费用结算') {
          if (basics[2]) {
            basics[2].querySelector('textarea').value = val;
          }
        }
      } //意见提交
      if (data.eventType == 'clickIdea') {
        ysp.appMain.showLoading();var text = data.customData;var basics = elem.children;if (text == '燃料付款申请单') {
          if (basics[4]) {
            basics[4].querySelector('a').click();
          }
        } else if (text == '其它费用结算') {
          if (basics[2]) {
            basics[2].querySelector('a').click();
          }
        }setTimeout(function () {
          ysp.appMain.hideLoading();ysp.appMain.back();
        }, 6000);
      } //附件删除
      if (data.eventType == 'fujianDelete') {
        ysp.appMain.showLoading();var index = parseInt(data.customData.index);var text = data.customData.text;var basics = elem.children;if (text == "其它费用结算") {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        } else if (text == "燃料付款申请单") {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        }var trs = FJ && FJ.querySelectorAll("tr");var b = [];for (var i = 0; i < trs.length; i++) {
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
      } //附件查看
      if (data.eventType == 'fujianLook') {
        alert("look");
      } //附件添加
      if (data.eventType == "fujianAdd") {
        ysp.appMain.showLoading();var text = data.customData;var basics = elem.children;if (text == "其它费用结算") {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        } else if (text == "燃料付款申请单") {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        }var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
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
      } //选择文件
      if (data.eventType == "fujianFile") {
        var text = data.customData;var basics = elem.children;if (text == '其它费用结算') {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        } else if (text == "燃料付款申请单") {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        }var files = FJ && FJ.querySelector("input[type='file']");files && files.click();
      } //附件提交
      if (data.eventType == 'fujianCommit') {
        ysp.appMain.showLoading();var text = data.customData;var basics = elem.children;if (text == '其它费用结算') {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        } else if (text == "") {
          var FJ = basics[1] && basics[1].children[0].lastElementChild.lastElementChild;
        }var ass = FJ && FJ.querySelectorAll("a");var a = [];for (var i = 0; i < ass.length; i++) {
          if (ass[i].textContent == "确认") {
            a.push(ass[i]);
          }
        }a && a[0].click();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 3000);
      } //审批意见
      if (data.eventType == 'select') {
        var index = data.customData.value;var text = data.customData.text;var basics = elem.children;if (text == "其它费用结算") {
          if (basics[2]) {
            basics[2].querySelectorAll('input')[0].click();
          }if (index == "1") {
            setTimeout(function () {
              $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-0"]').each(function () {
                if (~$(this).text().indexOf('同意')) {
                  var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
                }
              });
            }, 2000);
          } else if (index == "2") {
            setTimeout(function () {
              $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.www.hnjt.rl.qtfyjs_wd.Result-key-1"]').each(function () {
                if (~$(this).text().indexOf('不同意')) {
                  var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
                }
              });
            }, 2000);
          }
        } else if (text == "燃料付款申请单") {
          if (basics[4]) {
            basics[4].querySelectorAll('input')[0].click();
          }if (index == "1") {
            setTimeout(function () {
              $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-0"]').each(function () {
                if (~$(this).text().indexOf('同意')) {
                  var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
                }
              });
            }, 2000);
          } else if (index == "2") {
            setTimeout(function () {
              $(elem.ownerDocument).find('[id="SVSDK.com.hnjt.rl.fksqd_wd.ResultType-key-1"]').each(function () {
                if (~$(this).text().indexOf('不同意')) {
                  var target = $(this)[0];var evt = target.ownerDocument.createEvent('MouseEvents');evt.initMouseEvent("mousemove", true, true);target.dispatchEvent(evt);target.click();
                }
              });
            }, 2000);
          }
        }
      }
    },
    getTemplate_uiControl5_Qqv3JO: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      flag: false\n    }\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n  handlerChange(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'change',\n        data:{\n          value:target.value,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n  handlerClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickIdea',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  \n  //\u5220\u9664\u9644\u4EF6\n  handlerFujianDelete(e){\n    var _this = this;\n    var target = e.target;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianDelete',\n        data:{\n          index:target.dataset.index,\n          text:target.dataset.text\n        }\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u67E5\u770B\n  handlerFujianLook(){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianLook'\n      })\n    }\n  }\n  \n  //\u9644\u4EF6\u6DFB\u52A0\n  handlerFujianAdd(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianAdd',\n        data:e.target.dataset.text\n      })\n    }\n    _this.setState({\n      flag: true\n    })\n  }\n  \n  //\u9009\u62E9\u6587\u4EF6\n  handlerFujianFile(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianFile',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  //\u9644\u4EF6\u63D0\u4EA4\n  handlerFujianCommit(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'fujianCommit',\n        data:e.target.dataset.text\n      })\n    }\n  }\n  \n  //\u5BA1\u6279\u7ED3\u679C\n  handlerSelect(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'select',\n        data:{\n          value:e.target.value,\n          text:e.target.dataset.text\n        }\n      })\n    }\n  }\n  \n  \n  //\u57FA\u672C\u4FE1\u606F\n  listFor(data,title){\n    var _this = this;\n    return (\n    \t<div>\n      \t<div>{title}</div>\n        <div>{data}</div>\n      </div>\n    )\n  }\n  \n  \n  //\u9644\u4EF6\u7BA1\u7406\n  fujianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-fujian\">\n        <div>\u9644\u4EF6\u7BA1\u7406</div>\n        {\n          data2 && data2[0] ? <div className=\"ysp-deatil-fujian-add\" data-text = {data3} onClick={_this.handlerFujianAdd.bind(_this)}>\u70B9\u51FB\u6DFB\u52A0\u9644\u4EF6</div> : \"\"\n        }\n        \n        {\n          _this.state.flag ? <div>\n            \t<div className=\"ysp-deatil-fujian-file\" data-text = {data3} onClick={_this.handlerFujianFile.bind(_this)}>\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n              <div>\u5F53\u524D\u6240\u9009\u6587\u4EF6\uFF1A{data1}</div>\n        \t\t\t<div className=\"ysp-deatil-fujian-commit\" data-text = {data3} onClick={_this.handlerFujianCommit.bind(_this)}>\u63D0\u4EA4\u9644\u4EF6</div>\n            </div> : \"\"\n        }\n        \n        \n        {\n          data && data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u9644\u4EF6\uFF01\uFF01</div> :\n          data.map(function(d,i){\n            return(\n            \t<div className=\"ysp-deatil-fujian-content\">\n                <div onClick={_this.handlerFujianLook.bind(_this)}>{d[0]}</div>\n                <div>\n                \t<span>{d[5]}</span>\n                  <span>{d[6]}</span>\n                </div>\n                <div>\n                  <span>{d[7]}</span>\n                  <span onClick={_this.handlerFujianDelete.bind(_this)} data-index = {i} data-text={data2}>{d[8]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n  //\u5BA1\u6279\u610F\u89C1\n  yijianFor(data,data1,data2,data3,title){\n    var _this = this;\n    return(\n    \t<div>\n        {\n          data2 && data2[0] == null ? '' : <div className=\"ysp-deatil-idea\">\n          \t<div>{title}</div>\n            <div>\n              <ATextarea value = {data} data-text = {data3} onChange={_this.handlerChange.bind(_this)}></ATextarea>\n            </div>\n            {\n              data1 == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? <div className=\"ysp-deatil-idea-end\">\n                  <div>\n                    <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                    <span>{data2}</span>\n                  </div>\n                </div> : <div>\n                  <div className=\"ysp-deatil-idea-end\">\n                    <div>\n                      <span>\u5BA1\u6279\u7ED3\u679C\uFF1A</span>\n                      <span>\n                        <select data-text = {data3} onChange={_this.handlerSelect.bind(_this)}>\n                          <option value=\"1\">\u540C\u610F</option>\n                          <option value=\"2\">\u4E0D\u540C\u610F</option>\n                        </select>\n                      </span>\n                    </div>\n                    <div>\n                      <span>\u5BA1\u6279\u4EBA\uFF1A</span>\n                      <span>{data2}</span>\n                    </div>\n                  </div>\n                  <div data-text = {data3} onClick={_this.handlerClick.bind(_this)} className=\"ysp-deatil-idea-commit\">\u610F\u89C1\u63D0\u4EA4</div>\n              </div>\n            }\n          </div>\n        }\n        \n        \n      </div>\n    )\n  }\n  //\u5BA1\u6279\u5386\u53F2\n  historyFor(data,title){\n    var _this = this;\n    return(\n    \t<div className=\"ysp-deatil-history\">\n        <div>{title}</div>\n        {\n          data.length == 0 ? <div style={{'color':'red','text-align':'center'}}>\u6682\u65E0\u6570\u636E\uFF01\uFF01</div> : data.map(function(d,i){\n            return(\n              <div className=\"ysp-detail-history-content\">\n                <div>\n                \t<span>{d[0]}</span>\n                \t<span>{d[1]}</span>\n                </div>\n                <div>\n                \t<span>{d[2]}</span>\n                \t<span>{d[3]}</span>\n                </div>\n              </div>\n            )\n          })\n        }\n        \n      </div>\n    )\n  }\n  \n  render(){\n    var _this = this;\n    if(_this.props.customData){\n      var FlagText = this.props.customData.flagText;\n      var Basic = this.props.customData && this.props.customData.bas;\n      var FujianContent = this.props.customData && this.props.customData.fujianContent;\n      var FujianFile = this.props.customData && this.props.customData.fujianFile;\n      var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n      var History = this.props.customData && this.props.customData.history;\n      var Idea = this.props.customData && this.props.customData.idea;\n      var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;  \n      var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n      return (\n        <div>\n          {\n            FlagText == \"\u5176\u5B83\u8D39\u7528\u7ED3\u7B97\" ? <div>\n              {/*this.listFor(Basic,'\u57FA\u672C\u4FE1\u606F')*/}\n              {this.fujianFor(FujianContent,FujianFile,FujianFlag,FlagText,\"\u9644\u4EF6\u7BA1\u7406\")}\n              {this.yijianFor(Idea,IdeaEnding,IdeaPerson,FlagText,'\u5BA1\u6279\u610F\u89C1')}\n              {this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")}\n              </div> : FlagText == '\u71C3\u6599\u4ED8\u6B3E\u7533\u8BF7\u5355' ? <div>\n              {this.fujianFor(FujianContent,FujianFile,FujianFlag,FlagText,\"\u9644\u4EF6\u7BA1\u7406\")}\n              {this.yijianFor(Idea,IdeaEnding,IdeaPerson,FlagText,'\u5BA1\u6279\u610F\u89C1')}\n              {this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")}\n              </div> : FlagText == '\u7164\u70AD\u5408\u540C' ? <div>\n              \t{/*this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")*/}\n              </div>: FlagText == \"ERP\u7CFB\u7EDF\u53D8\u66F4\u4F20\u8F93\u8BF7\u6C42\u8868\" ? <div>\n              \t{/*this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")*/}\n                {/*this.fujianFor(FujianContent,FujianFile,\"\u9644\u4EF6\u7BA1\u7406\")*/}\n              </div> : FlagText == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? <div>\n                {/*this.yijianFor(Idea,IdeaEnding,IdeaPerson,'\u5BA1\u6279\u610F\u89C1')*/}\n              \t{/*this.historyFor(History,\"\u5BA1\u6279\u5386\u53F2\")*/}\n              </div> : \"\"\n          }\n          \n        </div>\n      )\n    }else{\n      return(\n      \t<div style={{textAlign:'center',margin:'20px',color:'red'}}></div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      flag: false\n    };\n    return _this2;\n  }\n  //\u6DFB\u52A0\u610F\u89C1\n\n\n  _createClass(_class, [{\n    key: 'handlerChange',\n    value: function handlerChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'change',\n          data: {\n            value: target.value,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u70B9\u51FB\u63D0\u4EA4\u610F\u89C1\n\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickIdea',\n          data: e.target.dataset.text\n        });\n      }\n    }\n\n    //\u5220\u9664\u9644\u4EF6\n\n  }, {\n    key: 'handlerFujianDelete',\n    value: function handlerFujianDelete(e) {\n      var _this = this;\n      var target = e.target;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianDelete',\n          data: {\n            index: target.dataset.index,\n            text: target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u67E5\u770B\n\n  }, {\n    key: 'handlerFujianLook',\n    value: function handlerFujianLook() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianLook'\n        });\n      }\n    }\n\n    //\u9644\u4EF6\u6DFB\u52A0\n\n  }, {\n    key: 'handlerFujianAdd',\n    value: function handlerFujianAdd(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianAdd',\n          data: e.target.dataset.text\n        });\n      }\n      _this.setState({\n        flag: true\n      });\n    }\n\n    //\u9009\u62E9\u6587\u4EF6\n\n  }, {\n    key: 'handlerFujianFile',\n    value: function handlerFujianFile(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianFile',\n          data: e.target.dataset.text\n        });\n      }\n    }\n    //\u9644\u4EF6\u63D0\u4EA4\n\n  }, {\n    key: 'handlerFujianCommit',\n    value: function handlerFujianCommit(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'fujianCommit',\n          data: e.target.dataset.text\n        });\n      }\n    }\n\n    //\u5BA1\u6279\u7ED3\u679C\n\n  }, {\n    key: 'handlerSelect',\n    value: function handlerSelect(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'select',\n          data: {\n            value: e.target.value,\n            text: e.target.dataset.text\n          }\n        });\n      }\n    }\n\n    //\u57FA\u672C\u4FE1\u606F\n\n  }, {\n    key: 'listFor',\n    value: function listFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        React.createElement(\n          'div',\n          null,\n          data\n        )\n      );\n    }\n\n    //\u9644\u4EF6\u7BA1\u7406\n\n  }, {\n    key: 'fujianFor',\n    value: function fujianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-fujian' },\n        React.createElement(\n          'div',\n          null,\n          '\\u9644\\u4EF6\\u7BA1\\u7406'\n        ),\n        data2 && data2[0] ? React.createElement(\n          'div',\n          { className: 'ysp-deatil-fujian-add', 'data-text': data3, onClick: _this.handlerFujianAdd.bind(_this) },\n          '\\u70B9\\u51FB\\u6DFB\\u52A0\\u9644\\u4EF6'\n        ) : \"\",\n        _this.state.flag ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-file', 'data-text': data3, onClick: _this.handlerFujianFile.bind(_this) },\n            '\\u8BF7\\u9009\\u62E9\\u6587\\u4EF6'\n          ),\n          React.createElement(\n            'div',\n            null,\n            '\\u5F53\\u524D\\u6240\\u9009\\u6587\\u4EF6\\uFF1A',\n            data1\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-commit', 'data-text': data3, onClick: _this.handlerFujianCommit.bind(_this) },\n            '\\u63D0\\u4EA4\\u9644\\u4EF6'\n          )\n        ) : \"\",\n        data && data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u9644\\u4EF6\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-deatil-fujian-content' },\n            React.createElement(\n              'div',\n              { onClick: _this.handlerFujianLook.bind(_this) },\n              d[0]\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[6]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[7]\n              ),\n              React.createElement(\n                'span',\n                { onClick: _this.handlerFujianDelete.bind(_this), 'data-index': i, 'data-text': data2 },\n                d[8]\n              )\n            )\n          );\n        })\n      );\n    }\n    //\u5BA1\u6279\u610F\u89C1\n\n  }, {\n    key: 'yijianFor',\n    value: function yijianFor(data, data1, data2, data3, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        data2 && data2[0] == null ? '' : React.createElement(\n          'div',\n          { className: 'ysp-deatil-idea' },\n          React.createElement(\n            'div',\n            null,\n            title\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(ATextarea, { value: data, 'data-text': data3, onChange: _this.handlerChange.bind(_this) })\n          ),\n          data1 == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? React.createElement(\n            'div',\n            { className: 'ysp-deatil-idea-end' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n              ),\n              React.createElement(\n                'span',\n                null,\n                data2\n              )\n            )\n          ) : React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-deatil-idea-end' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u7ED3\\u679C\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  React.createElement(\n                    'select',\n                    { 'data-text': data3, onChange: _this.handlerSelect.bind(_this) },\n                    React.createElement(\n                      'option',\n                      { value: '1' },\n                      '\\u540C\\u610F'\n                    ),\n                    React.createElement(\n                      'option',\n                      { value: '2' },\n                      '\\u4E0D\\u540C\\u610F'\n                    )\n                  )\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  data2\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              { 'data-text': data3, onClick: _this.handlerClick.bind(_this), className: 'ysp-deatil-idea-commit' },\n              '\\u610F\\u89C1\\u63D0\\u4EA4'\n            )\n          )\n        )\n      );\n    }\n    //\u5BA1\u6279\u5386\u53F2\n\n  }, {\n    key: 'historyFor',\n    value: function historyFor(data, title) {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-deatil-history' },\n        React.createElement(\n          'div',\n          null,\n          title\n        ),\n        data.length == 0 ? React.createElement(\n          'div',\n          { style: { 'color': 'red', 'text-align': 'center' } },\n          '\\u6682\\u65E0\\u6570\\u636E\\uFF01\\uFF01'\n        ) : data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-detail-history-content' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      if (_this.props.customData) {\n        var FlagText = this.props.customData.flagText;\n        var Basic = this.props.customData && this.props.customData.bas;\n        var FujianContent = this.props.customData && this.props.customData.fujianContent;\n        var FujianFile = this.props.customData && this.props.customData.fujianFile;\n        var FujianFlag = this.props.customData && this.props.customData.fujianFlag;\n        var History = this.props.customData && this.props.customData.history;\n        var Idea = this.props.customData && this.props.customData.idea;\n        var IdeaEnding = this.props.customData && this.props.customData.ideaEnding;\n        var IdeaPerson = this.props.customData && this.props.customData.ideaPerson;\n        return React.createElement(\n          'div',\n          null,\n          FlagText == \"\u5176\u5B83\u8D39\u7528\u7ED3\u7B97\" ? React.createElement(\n            'div',\n            null,\n            this.fujianFor(FujianContent, FujianFile, FujianFlag, FlagText, \"\u9644\u4EF6\u7BA1\u7406\"),\n            this.yijianFor(Idea, IdeaEnding, IdeaPerson, FlagText, '\u5BA1\u6279\u610F\u89C1'),\n            this.historyFor(History, \"\u5BA1\u6279\u5386\u53F2\")\n          ) : FlagText == '\u71C3\u6599\u4ED8\u6B3E\u7533\u8BF7\u5355' ? React.createElement(\n            'div',\n            null,\n            this.fujianFor(FujianContent, FujianFile, FujianFlag, FlagText, \"\u9644\u4EF6\u7BA1\u7406\"),\n            this.yijianFor(Idea, IdeaEnding, IdeaPerson, FlagText, '\u5BA1\u6279\u610F\u89C1'),\n            this.historyFor(History, \"\u5BA1\u6279\u5386\u53F2\")\n          ) : FlagText == '\u7164\u70AD\u5408\u540C' ? React.createElement('div', null) : FlagText == \"ERP\u7CFB\u7EDF\u53D8\u66F4\u4F20\u8F93\u8BF7\u6C42\u8868\" ? React.createElement('div', null) : FlagText == \"\u670D\u52A1\u9A8C\u6536\u5BA1\u6279\u5355\" ? React.createElement('div', null) : \"\"\n        );\n      } else {\n        return React.createElement('div', { style: { textAlign: 'center', margin: '20px', color: 'red' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control15_hcs1LK: function (elem) {
      if (!elem) {
        return;
      }return elem && elem.textContent;
    },
    doAction_uiControl11_bMkppO: function (data, elem) {},
    getTemplate_uiControl11_bMkppO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-detail-title\">\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-detail-title\" },\n      data\n    );\n  }\n});";
    }
  }, "detail");
})(window, ysp);