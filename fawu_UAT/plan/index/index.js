(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_mqRXxb: function (elem) {
      $.ajax({ url: 'http://ihn.chng.com.cn:10008/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fevery_user!2fgeneral!2fdefaultAjaxframeworkContent!2fcom.sap.portal.afpDesktop!2fframeworkPages!2fframeworkpage!2fcom.sap.portal.innerpage?windowId=' + elem.ownerDocument.defaultView.EPCM.getUniqueWindowId(), type: 'get', success: function (data) {
          top.sap_sid = $(data).find('input[name="sap-ext-sid"]').val();
        } });
    },
    doAction_uiControl4_HyFuEX: function (data, elem) {
      if (top.sap_sid) {
        elem.ownerDocument.defaultView.open('http://ihn.chng.com.cn:10008/webdynpro/resources/sap.com/pb/PageBuilder?PagePath=pcd%3Aportal_content%2Fcom.hnjt.HNJT%2Fcom.hnjt.XTGL%2Fcom.hnjt.Role%2FZHNJT_CLM_TY001%2FGRGZ1%2F____%2FNew_Page&sap-ext-sid=' + top.sap_sid);
      } else {
        $.ajax({ url: 'http://ihn.chng.com.cn:10008/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fevery_user!2fgeneral!2fdefaultAjaxframeworkContent!2fcom.sap.portal.afpDesktop!2fframeworkPages!2fframeworkpage!2fcom.sap.portal.innerpage?windowId=' + elem.ownerDocument.defaultView.EPCM.getUniqueWindowId(), type: 'get', success: function (data) {
            top.sap_sid = $(data).find('input[name="sap-ext-sid"]').val();elem.ownerDocument.defaultView.open('http://ihn.chng.com.cn:10008/webdynpro/resources/sap.com/pb/PageBuilder?PagePath=pcd%3Aportal_content%2Fcom.hnjt.HNJT%2Fcom.hnjt.XTGL%2Fcom.hnjt.Role%2FZHNJT_CLM_TY001%2FGRGZ1%2F____%2FNew_Page&sap-ext-sid=' + top.sap_sid);
          } });
      }
    },
    getTemplate_uiControl4_HyFuEX: function () {
      var selfTemplate = "module.exports = React.createClass({\n  \n  componentDidMount(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  // onclick: function() {\n  //   this.props.customHandler({\n  //     data: 'dianwo'\n  //   });\n  // },\n  render: function() {\n    return (\n      <div></div>\n      /*\n      \t<button onClick={this.onclick}>\n        \t\u70B9\u6211\u8FDB\u5165\u5F85\u529E\u5217\u8868\n      \t</button>\n      */\n      \n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  componentDidMount: function componentDidMount() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n\n  // onclick: function() {\n  //   this.props.customHandler({\n  //     data: \'dianwo\'\n  //   });\n  // },\n  render: function render() {\n    return React.createElement(\'div\', null)\n    /*\n    \t<button onClick={this.onclick}>\n      \t\u70B9\u6211\u8FDB\u5165\u5F85\u529E\u5217\u8868\n    \t</button>\n    */\n\n    ;\n  }\n});';
    }
  }, "index");
})(window, ysp);