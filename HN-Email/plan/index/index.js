(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control6_xBCCPl: function (elem) {// if (!elem) {
      //   return;
      // }
      // var data = {
      //   list: []
      // };
      // var elem = $(elem) && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0].contentDocument.documentElement;
      // var titleLists = $(elem)[0].querySelector('#ext-gen36');
      // $(titleLists).find('tr.x-grid3-hd-row').each(function (j) {
      //   var titlelist = $(this).find('.x-grid3-hd-inner');
      //   var obj = {};
      //   obj.name = titlelist[2].textContent;
      //   obj.title = titlelist[3].textContent;
      //   obj.date = titlelist[4].textContent;
      //   obj.time = titlelist[5].textContent;
      //   obj.cav = titlelist[6].textContent;
      //   obj.index = j;
      //   data.list.push(obj);
      // });
      // var lists = $(elem)[0].querySelector('#ext-gen39');
      // $(lists).find('tbody').each(function (i) {
      //   var tbody = $(this).find('td').find('.x-grid3-cell-inner');
      //   var obj = {};
      //   obj.name = tbody[2].textContent;
      //   obj.title = tbody[3].textContent;
      //   obj.date = tbody[4].textContent;
      //   obj.time = tbody[5].textContent;
      //   obj.cav = tbody[6].textContent;
      //   obj.index = i;
      //   data.list.push(obj);
      // });
      // return data;
    }, doAction_uiControl5_U714Mi: function (data, elem) {//   var data = data.dataCustom;
      //   var elem = $(elem) && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0].contentDocument && $(elem).find('#main_center_frame')[0] && $(elem).find('#main_center_frame')[0].contentDocument.documentElement;
      //   $(elem).find('#ext-gen39').find('tbody').eq(data).find('td').find('.x-grid3-cell-inner').eq(3).find('a').click();
      // }
    }, getTemplate_uiControl5_U714Mi: function () {
      var selfTemplate = "// module.exports = React.createClass({\n//   getValue: function(e) {\n//     var target = e.target;\n//     var hanlder=this.props.customHandler;\n//     if(hanlder){\n//       hanlder({\n//         eventType:\"getValue\",\n//         data:target.getAttribute('index')\n//       })\n//     }\n//   },\n//   render: function() {\n//     var data = this.props.customData;\n//     var me =this;\n//     return (\n//       <div>\n//       {data.list&&data.list.map(function(i,h){\n//           if(h>0){\n//              return (<div className='d_indexList'>\n//                 <div><span>\u53D1\u4EF6\u4EBA:</span><span>{i.name}</span></div>\n//                 <div><span>\u4E3B\u9898:</span><span index={i.index} onClick={me.getValue} style={{'font-weight':'bold'}}>{i.title}</span></div>\n//                 <div><span>\u65E5\u671F:</span><span>{i.date}</span></div>\n//                 <div><span>\u65F6\u95F4:</span><span>{i.time}</span></div>\n//                 <div><span>\u5927\u5C0F:</span><span>{i.cav}</span></div>\n                \n//             </div>)\n//           }\n           \n          \n//         })}\n//       </div>\n//     )\n//   }\n// });";
      return "// module.exports = React.createClass({\n//   getValue: function(e) {\n//     var target = e.target;\n//     var hanlder=this.props.customHandler;\n//     if(hanlder){\n//       hanlder({\n//         eventType:\"getValue\",\n//         data:target.getAttribute('index')\n//       })\n//     }\n//   },\n//   render: function() {\n//     var data = this.props.customData;\n//     var me =this;\n//     return (\n//       <div>\n//       {data.list&&data.list.map(function(i,h){\n//           if(h>0){\n//              return (<div className='d_indexList'>\n//                 <div><span>\u53D1\u4EF6\u4EBA:</span><span>{i.name}</span></div>\n//                 <div><span>\u4E3B\u9898:</span><span index={i.index} onClick={me.getValue} style={{'font-weight':'bold'}}>{i.title}</span></div>\n//                 <div><span>\u65E5\u671F:</span><span>{i.date}</span></div>\n//                 <div><span>\u65F6\u95F4:</span><span>{i.time}</span></div>\n//                 <div><span>\u5927\u5C0F:</span><span>{i.cav}</span></div>\n\n//             </div>)\n//           }\n\n\n//         })}\n//       </div>\n//     )\n//   }\n// });\n\"use strict\";";
    }
  }, "index");
})(window, ysp);