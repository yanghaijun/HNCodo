(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4_PAmTZG: function (elem) {
      if (!elem) {
        return;
      }var divs = elem.ownerDocument.querySelector("#DetailedNavigationTree") && elem.ownerDocument.querySelector("#DetailedNavigationTree").querySelectorAll('div');for (var i = 0; i < divs.length; i++) {
        if (divs[i].textContent == '待办工作') {
          var evt = document.createEvent('MouseEvent');evt.initMouseEvent('click', true, true);divs[i].querySelector('a').dispatchEvent(evt); //divs[i].querySelector('a').click();
        }
      }
    }, doAction_uiControl3_vTJhaf: function (data, elem) {},
    getTemplate_uiControl3_vTJhaf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
    }
  }, "index");
})(window, ysp);