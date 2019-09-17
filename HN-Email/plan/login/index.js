(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_hCU0e9: function (elem) {// if (!elem) {
      //   return false;
      // }
      // var data = [];
      // var elem = $(elem) && $(elem).find('table');
      // var trs = $(elem).find('tr');
      // var obj = {}; //obj.name = $(trs) && $(trs).eq(2).find('label').eq(0).text();
      // obj.value = $(trs) && $(trs).eq(2).find('input').eq(0).val();
      // data.push(obj);
      // var obj = {}; //obj.name = $(trs) && $(trs).eq(3).find('label').eq(0).text();
      // obj.value = $(trs) && $(trs).eq(3).find('input').eq(0).val();
      // data.push(obj);
      // return data;
    },
    doAction_uiControl0_UK1PTt: function (data, elem) {//   var data = data.dataCustom;
      //   var elem = $(elem) && $(elem).find('table');
      //   $(elem).find('tr').eq(2).find('input').eq(0).val(data);
      // } else if (data.eventType == 'password') {
      //   var data = data.dataCustom;
      //   var elem = $(elem) && $(elem).find('table');
      //   $(elem).find('tr').eq(3).find('input').eq(0).val(data);
      // } else if (data.eventType == 'button') {
      //   var elem = $(elem) && $(elem).find('table');
      //   $(elem).find('tr').eq(5).find('input').eq(0).click();
      // }
    },
    getTemplate_uiControl0_UK1PTt: function () {
      var selfTemplate = "\n// module.exports = React.createClass({\n//   nameValue:function(e){\n//     var handler=this.props.customHandler;\n//     if(handler){\n//       handler({\n//         eventType:'nameValue',\n//         data:e.target.value\n//       })\n//     }\n//   }, \n//   password:function(e){\n//     var handler=this.props.customHandler;\n//     if(handler){\n//       handler({\n//         eventType:'password',\n//         data:e.target.value\n//       })\n//     }\n//   },\n//   button:function(e){\n//     var handler =this.props.customHandler;\n//     if(handler){\n//       handler({\n//         eventType:'button',\n//         data:''\n//       })\n//     }\n//   },\n//   render: function() {\n//     var data =this.props.customData;\n//     var _this = this;\n//     return (\n//       <div className='d_denglu'>\n//         <div className='d_denglu2'>\n//           <div className='logo'></div>\n//           <div>\u90AE\u4EF6\u7CFB\u7EDF</div>\n//           <div className='userPassword'>\n//             <span className='user'></span>\n//             <AInput value={data[0].value} onChange={_this.nameValue} type='text'/>\n//           </div>\n//           <div className='userPassword'>\n//             <span className='password'></span>\n//             <AInput value={data[1].value} onChange={_this.password} type='password'/>\n//           </div>\n//           <div className='denglu' onClick={_this.button}>\u767B\u5F55</div>\n//         </div>\n//       </div>\n//     )\n//   }\n// });\n";
      return "\n// module.exports = React.createClass({\n//   nameValue:function(e){\n//     var handler=this.props.customHandler;\n//     if(handler){\n//       handler({\n//         eventType:'nameValue',\n//         data:e.target.value\n//       })\n//     }\n//   }, \n//   password:function(e){\n//     var handler=this.props.customHandler;\n//     if(handler){\n//       handler({\n//         eventType:'password',\n//         data:e.target.value\n//       })\n//     }\n//   },\n//   button:function(e){\n//     var handler =this.props.customHandler;\n//     if(handler){\n//       handler({\n//         eventType:'button',\n//         data:''\n//       })\n//     }\n//   },\n//   render: function() {\n//     var data =this.props.customData;\n//     var _this = this;\n//     return (\n//       <div className='d_denglu'>\n//         <div className='d_denglu2'>\n//           <div className='logo'></div>\n//           <div>\u90AE\u4EF6\u7CFB\u7EDF</div>\n//           <div className='userPassword'>\n//             <span className='user'></span>\n//             <AInput value={data[0].value} onChange={_this.nameValue} type='text'/>\n//           </div>\n//           <div className='userPassword'>\n//             <span className='password'></span>\n//             <AInput value={data[1].value} onChange={_this.password} type='password'/>\n//           </div>\n//           <div className='denglu' onClick={_this.button}>\u767B\u5F55</div>\n//         </div>\n//       </div>\n//     )\n//   }\n// });\n\"use strict\";";
    }
  }, "login");
})(window, ysp);