(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_hCU0e9: function (elem) {
      if (!elem) {
        return false;
      }var data = [];var elem = $(elem) && $(elem).find('table');var trs = $(elem).find('tr');var obj = {};obj.value = $(trs) && $(trs).eq(2).find('input').eq(0).val();data.push(obj);var obj = {};obj.value = $(trs) && $(trs).eq(3).find('input').eq(0).val();data.push(obj);var obj = {};obj.value = $(trs) && $(trs).eq(0).find('font').eq(0).text();data.push(obj);return data;
    },
    doAction_uiControl0_UK1PTt: function (data, elem) {
      if (data.eventType == 'nameValue') {
        var data = data.dataCustom;var elem = $(elem) && $(elem).find('table');$(elem).find('tr').eq(2).find('input').eq(0).val(data);
      } else if (data.eventType == 'password') {
        var data = data.dataCustom;var elem = $(elem) && $(elem).find('table');$(elem).find('tr').eq(3).find('input').eq(0).val(data);
      } else if (data.eventType == 'button') {
        ysp.appMain.showLoading();setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 10000); //这是点击PC端登录按钮方法
        //   var elem = $(elem) && $(elem).find('table');
        //   $(elem).find('tr').eq(5).find('input').eq(0).click();
        //   ysp.appMain.showLoading();
        //   setTimeout(function () {
        //     ysp.appMain.hideLoading();
        //   }, 3000); //计时器处理:如果用户名或者密码输入错误，组件模板不会随pc同步需要重新点击一次
        //   var times = setTimeout(function () {
        //     $(elem).find('tr').eq(5).find('input').eq(0).click();
        //   }, 1000);
        //这是用接口登录的方法
        setTimeout(function () {
          var el = $(elem) && $(elem).find('table');var trs = $(el).find('tr');var name = $(trs) && $(trs).eq(2).find('input').eq(0).val();var password = $(trs) && $(trs).eq(3).find('input').eq(0).val();var xmlhttp = null;if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
          } else if (window.ActiveXObject) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              //console.log(xmlhttp.responseText);
              var aa = xmlhttp.responseText;var bb = aa.split('id="main_center_frame"')[1];var cc = bb.split('width="100%"')[0];var dd = cc.split("src=")[1];var ee = dd.replace("\"", "");elem.ownerDocument.location.href = 'http://59.110.171.69:31009' + ee;
            }
          };xmlhttp.open("post", "http://59.110.171.69:31009/names.nsf?Login");xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");xmlhttp.send("username=" + name + "&password=" + password + "&redirectto=/afmail.nsf/frmWebMailExt_HNMail?OpenForm&PostCharset=GB2312");
          //xmlhttp.send("username=80086350&password=Chng1234&redirectto=/afmail.nsf/frmWebMailExt_HNMail?OpenForm&PostCharset=GB2312");
        }, 1000);
      }
    },
    getTemplate_uiControl0_UK1PTt: function () {
      var selfTemplate = '\nmodule.exports = React.createClass({\n  handle: function(data,eventType) {  \n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({data,eventType});\n    }\n  },\n  render: function() {\n    var data =this.props.customData;\n    var _this = this;\n    if(data&&data[0]&&data[1]){\n     return (\n      <div className=\'d_denglu\'>\n        <div className=\'d_denglu2\'>\n          <div className=\'logo\'></div>\n          <div>\u90AE\u4EF6\u7CFB\u7EDF</div>\n          <div className=\'userPassword\'>\n            <span className=\'user\'></span>\n            <AInput value={data[0].value} onChange={(e)=>{_this.handle(e.target.value,\'nameValue\')}} type=\'text\'/>\n          </div>\n          <div className=\'userPassword\'>\n            <span className=\'password\'></span>\n            <AInput value={data[1].value} onChange={(e)=>{_this.handle(e.target.value,\'password\')}} type=\'password\'/>\n          </div>\n          <div className=\'login_alert\'>{data[2].value}</div>\n         \n          <div className=\'denglu\' onClick={()=>{_this.handle(\'\',\'button\')}}>\u767B\u5F55</div>\n        </div>\n      </div>\n    )\n    }else {\n      return <div></div>\n    }\n\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handle: function handle(data, eventType) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({ data: data, eventType: eventType });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data[0] && data[1]) {\n      return React.createElement(\n        \'div\',\n        { className: \'d_denglu\' },\n        React.createElement(\n          \'div\',\n          { className: \'d_denglu2\' },\n          React.createElement(\'div\', { className: \'logo\' }),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u90AE\\u4EF6\\u7CFB\\u7EDF\'\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'userPassword\' },\n            React.createElement(\'span\', { className: \'user\' }),\n            React.createElement(AInput, { value: data[0].value, onChange: function onChange(e) {\n                _this.handle(e.target.value, \'nameValue\');\n              }, type: \'text\' })\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'userPassword\' },\n            React.createElement(\'span\', { className: \'password\' }),\n            React.createElement(AInput, { value: data[1].value, onChange: function onChange(e) {\n                _this.handle(e.target.value, \'password\');\n              }, type: \'password\' })\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'login_alert\' },\n            data[2].value\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'denglu\', onClick: function onClick() {\n                _this.handle(\'\', \'button\');\n              } },\n            \'\\u767B\\u5F55\'\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    }
  }, "login");
})(window, ysp);