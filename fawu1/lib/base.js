// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function(win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc) {


//       var _leafElems = ["IMG", "HR", "BR", "INPUT"];
//       var leafElems = {};
//       var _leafElemsLength = _leafElems.length;
//       for (var i = 0; i < _leafElemsLength; i++)
//         leafElems[_leafElems[i]] = true;
//       // if(aWin.UCF_PageUpdater && aWin.UCF_PageUpdater.prototype){
//       //   aWin.UCF_PageUpdater.prototype.initializedIds = function(oUpdateRef) {
//       //       var sHTML = aWin.UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
//       //         , oRootRef = this.oLS.oGetRootRef()
//       //         , oSpanRef = doc.createElement("span");
//       //       oSpanRef.innerHTML = sHTML;
//       //        oSpanRef.lastChild && oRootRef.appendChild(oSpanRef.lastChild);
//       //     console.info(oRootRef+"为空，不存在子元素节点");
//       //   }
//       // }

//       if (aWin.setFocusOnHeader) {
//         aWin.setFocusOnHeader = function() {
//           var melcomeMessage = doc.getElementById("welcome_message");
//           var headerNotch = doc.getElementById("header_notch");
//           if (aWin.EPCM.getUAType() == aWin.EPCM.MOZILLA) {
//             // No focus
//           } else {
//             if (melcomeMessage != null && win.getComputedStyle(melcomeMessage).display != "none") {
//               melcomeMessage.focus();
//             } else if (headerNotch != null && win.getComputedStyle(headerNotch).display != "none") {
//               headerNotch.focus();
//             }
//           }
//         }
//         aWin.setFocusOnHeader();
//       }
//       if (aWin.HTMLElement && aWin.HTMLElement.prototype) {
//         aWin.HTMLElement.prototype.__defineSetter__('innerHTML', function(str) {
//           var r = this.ownerDocument.createRange();
//           var df = r.createContextualFragment(str);
//           if (this.parentNode) {
//             r.setStartBefore(this);
//             this.parentNode.replaceChild(df, this);
//           } else {
//             this.appendChild(df);
//           }

//           return str;
//         })
//       }
//       if (aWin.HTMLElement && aWin.HTMLElement.prototype) {
//         aWin.HTMLElement.prototype.__defineGetter__('innerHTML', function() {
//           return aWin.getInnerHTML(this)
//         });
//       }
//       aWin.getInnerHTML = function(node) {
//         var str = "";
//         var nodeChildNodes = node.childNodes;
//         var nodeChildNodesLength = nodeChildNodes.length || 0;
//         for (var i = 0; i < nodeChildNodesLength; i++)
//           str += aWin.getOuterHTML(nodeChildNodes.item(i));
//         return str;
//       }
//       aWin.getOuterHTML = function(node) {
//         var str = "";

//         switch (node.nodeType) {
//           case 1: // ELEMENT_NODE
//             str += "<" + node.nodeName;
//             var nodeAttributes = node.attributes;
//             var nodeAttributesLength = nodeAttributes.length;
//             for (var i = 0; i < nodeAttributesLength; i++) {
//               if (nodeAttributes.item(i).nodeValue != null) {
//                 str += " "
//                 str += nodeAttributes.item(i).nodeName;
//                 str += "=\"";
//                 str += nodeAttributes.item(i).nodeValue;
//                 str += "\"";
//               }
//             }

//             if (node.childNodes.length == 0 && leafElems[node.nodeName])
//               str += ">";
//             else {
//               str += ">";
//               str += aWin.getInnerHTML(node);
//               str += "</" + node.nodeName + ">"
//             }
//             break;

//           case 3: //TEXT_NODE
//             str += node.nodeValue;
//             break;

//           case 4: // CDATA_SECTION_NODE
//             str += "<![CDATA[" + node.nodeValue + "]]>";
//             break;

//           case 5: // ENTITY_REFERENCE_NODE
//             str += "&" + node.nodeName + ";"
//             break;

//           case 8: // COMMENT_NODE
//             str += "<!--" + node.nodeValue + "-->"
//             break;
//         }

//         return str;
//       }
//       if (aWin.UCF_DomUtil) {
//         aWin.UCF_DomUtil.attachEvent(aWin, "load", function() {
//           aWin.UCF_ls = new aWin.UCF_LS();
//         });
//         aWin.UCF_DomUtil.attachEvent(aWin, "unload", function() {
//           aWin.UCF_ls.destroy();
//         })
//       }
//       //       if(aWin.UCF_LS){
//       //          aWin.UCF_LS.prototype.destroy = function(sErrorHTML) {
//       //               if (this.bIsDestroyed)
//       //                   return;
//       //               this.bIsDestroyed = true;
//       //               if (this.oApplicationExitHandlerObject) {
//       //                   this.oApplicationExitHandlerObject[this.sApplicationExitHandlerFunction]()
//       //               }
//       //               if (this.oSystem && this.oSystem.bIsUCF) {
//       //                   this.detachMainLSEvents();
//       //                   this.oEventHandler.destroy();
//       //                   this.oPageUpdater.destroy();
//       //               }
//       //               this.oControlFactory.destroy();
//       //               this.oBrowserWindow.destroy();
//       //               this.oSystem.destroy();
//       //               if (this.oPopupManager) {
//       //                   if (this.bIsMainLS()) {
//       //                       this.oPopupManager.closeAllPopups();
//       //                   }
//       //                   this.oPopupManager.destroy();
//       //               }
//       //               if (this.oMessageBundle)
//       //                   this.oMessageBundle.destroy();
//       //               if (this.oBlockLayer)
//       //                   this.oBlockLayer.destroy();
//       //               this.oMainLS = null ;
//       //               this.oRootRef = null ;
//       //               if (sErrorHTML || sErrorHTML == "") {
//       //                   doc.body.className = "";
//       //                   doc.body.innerHTML = "<input type='hidden'>" + sErrorHTML;
//       //               }
//       //           }
//       //          }
//       if (aWin.UCF_ControlFactory) {
//         aWin.UCF_ControlFactory.prototype.oCreateControlById = function(sId) {
//           var oDomRef = null,
//             oControl = null,
//             iRootIndex = sId && sId.indexOf("-r");
//           if (iRootIndex > 0) {
//             sId = sId.substring(0, sId.length - iRootIndex);
//           }
//           oDomRef = this.oGetControlDomRef(sId);
//           if (oDomRef) {
//             oControl = this.oCreateControlByDomRef(oDomRef);
//           }
//           return oControl;
//         }
//       }
//       if (aWin.UCF_PageUpdater) {
//         aWin.UCF_PageUpdater.sGetCDATAContent = function(oUpdateRef) {
//           var sContent = "",
//             oCData = oUpdateRef.lastChild;
//           while (oCData != null) {
//             if (oCData.nodeType == 4) {
//               sContent += oCData.nodeValue;
//             }
//             oCData = oCData.nextSibling;
//           }
//           return sContent;
//         }
//       }
      // 同意弹框方法重写
      // if(aWin.UCF_PageUpdater){
      // 	aWin.UCF_PageUpdater.prototype.callScript = function(oUpdateRef) {
      //     var _this =this;
      //     debugger;
      //       var sScript = aWin.UCF_PageUpdater.sGetCDATAContent(oUpdateRef);
      //       var fScriptCall = new Function("oLS",sScript);
      //       fScriptCall.call(aWin, _this.oLS.oGetInterface());
      //   }
      // }
    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
      Object.defineProperty(doc, "domain", {
        get: function() {
          return "cns.cosco.cos";
        },
        set: function(newValue) {
          domain = newValue;
        },
        enumerable: true,
        configurable: true
      });
      aWin.String.prototype.search = function() {
        return 1
      }
      aWin.String.prototype.substr = function(start, length) {
        if (this.toString() == "sapbpmprd.cns.cosco.cos") {
          return doc.domain;
        }
        if (length) {
          return this.substring(start, start + length);
        } else {
          return this.substring(start, this.length);
        }
      }
      var MutationObserver = aWin.MutationObserver ||
        aWin.WebKitMutationObserver ||
        aWin.MozMutationObserver;
      var mutationObserverSupport = !!MutationObserver;
      var callback = function(records) {
        records.map(function(record) {
          if (record.type == "attributes") {
            console.log('Mutation type: ' + record.type, ', target: ', record.target.nodeName);
          }
        });
      };
      var mo = new MutationObserver(callback);


    },

    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },

    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    }


  });

})(window, ysp);