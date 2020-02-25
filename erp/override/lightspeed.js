var UCF_classes = [];
function UCF_Global() {}
function _trace() {}
;function _assert() {}
;function _fatal() {}
;function _measure() {}
;
function UCF_ClassLoader() {}
;UCF_ClassLoader.sBaseUrl = null ;
UCF_ClassLoader.sVersion = null ;
UCF_ClassLoader.bDebugLibs = false;
UCF_ClassLoader.createBaseUrl = function() {
    var aScriptTags = document.getElementsByTagName("script"), sScriptUrl, iFilePos, iQueryPos;
    for (var i = 0; i < aScriptTags.length; i++) {
        sScriptUrl = aScriptTags[i].getAttribute("src");
        if (!sScriptUrl)
            continue;iFilePos = sScriptUrl.indexOf("/lightspeed.js");
        iQueryPos = sScriptUrl.lastIndexOf("?");
        if (iFilePos >= 0)
            break;
    }
    this.sBaseUrl = sScriptUrl.substr(0, iFilePos) + "/classes";
    if (iQueryPos > 0) {
        this.sVersion = sScriptUrl.substr(iQueryPos + 1);
    }
    this.bDebugLibs = this.sBaseUrl.indexOf("/js/dbg") > 0;
}
;
UCF_ClassLoader.loadClass = function(sClassName) {
    if (!this.sBaseUrl)
        this.createBaseUrl();
    if (sClassName.indexOf('.') > -1) {
        var iClassStart = sClassName.lastIndexOf('.')
          , sPackage = sClassName.substr(0, iClassStart + 1)
          , sFolder = sPackage.replace(/\./g, '/')
          , sFileName = sFolder + sClassName.substr(iClassStart + 1) + ".js";
    } else {
        var sFileName = sClassName.substr(4) + ".js";
    }
    var sUrl = this.sBaseUrl + "/" + sFileName;
    if (this.bDebugLibs) {
        sUrl += "?" + UCF_JsUtil.iGetTimeStamp();
    } else if (this.sVersion) {
        sUrl += "?" + this.sVersion;
    }
    var oResponse = UCF_RequestUtil.sendSyncRequest(sUrl);
    if (!oResponse.bSuccess) {
        UCF_ErrorMessage.show(1);
        return;
    }
    if (window.execScript) {
        window.execScript(oResponse.sText);
    } else {
        window.eval(oResponse.sText);
    }
    if (sClassName.indexOf('.') > -1) {
        sClassName = "UCF_" + sClassName.substr(iClassStart + 1);
    }
    if (!window[sClassName]) {
        window[sClassName] = eval(sClassName);
    }
}
;
UCF_ClassLoader.oGetClass = function(sClassName) {
    try {
        window
    } catch (e) {
        return Object;
    }
    var oClass = window[sClassName];
    if (!oClass || typeof (oClass) != "function") {
        this.loadClass(sClassName);
        if (sClassName.indexOf(".") > -1) {
            var iClassStart = sClassName.lastIndexOf('.')
              , sClassName = "UCF_" + sClassName.substr(iClassStart + 1);
        }
        oClass = window[sClassName];
    }
    return oClass;
}
;
function UCF_Object() {}
;UCF_Object.prototype.destroy = function() {}
;
UCF_Object.prototype.oGetInterface = function() {
    return new UCF_Interface(this,this.aPublicMethods);
}
;
function UCF_SemanticEvent(sControl, sName, mParameters, oEventInfoParameters) {
    UCF_Object.apply(this);
    this.sControl = sControl;
    this.sName = sName;
    this.mParameters = mParameters;
    this.bCanceled = false;
    if (oEventInfoParameters instanceof Array) {
        this.mUcfParameters = oEventInfoParameters[0];
        this.mCustomParameters = oEventInfoParameters[1];
    } else if (oEventInfoParameters instanceof Object) {
        this.mUcfParameters = {};
        this.mCustomParameters = oEventInfoParameters;
    } else {
        this.mUcfParameters = {};
        this.mCustomParameters = {};
    }
}
;UCF_SemanticEvent.prototype = new UCF_Object();
UCF_SemanticEvent.prototype.sGetControl = function() {
    return this.sControl;
}
;
UCF_SemanticEvent.prototype.sGetName = function() {
    return this.sName;
}
;
UCF_SemanticEvent.prototype.mGetParameters = function() {
    return this.mParameters;
}
;
UCF_SemanticEvent.prototype.mGetCustomParameters = function() {
    return this.mCustomParameters;
}
;
UCF_SemanticEvent.prototype.mGetUcfParameters = function() {
    return this.mUcfParameters;
}
;
UCF_SemanticEvent.prototype.bIsCompositeEvent = function() {
    return (this.mUcfParameters["Composite"]) ? true : false;
}
;
UCF_SemanticEvent.prototype.cancel = function() {
    this.bCanceled = true;
}
;
UCF_SemanticEvent.prototype.bIsCanceled = function() {
    return this.bCanceled;
}
;
UCF_SemanticEvent.prototype.setForm = function(oForm) {
    this.oForm = oForm;
}
;
UCF_SemanticEvent.prototype.oGetForm = function() {
    return this.oForm;
}
;
UCF_SemanticEvent.prototype.setCustomParameter = function(name, value) {
    this.mCustomParameters[name] = value;
}
;
UCF_SemanticEvent.prototype.setClientAction = function(sClientAction) {
    this.mUcfParameters.ClientAction = sClientAction;
}
;
UCF_SemanticEvent.prototype.setEnqueueCardinality = function(sEnqueueCardinality) {
    this.mUcfParameters.EnqueueCardinality = sEnqueueCardinality;
}
;
UCF_SemanticEvent.prototype.setResponseData = function(sResponseData) {
    this.mUcfParameters.ResponseData = sResponseData;
}
;
UCF_SemanticEvent.prototype.setTransportMethod = function(sTransportMethod) {
    this.mUcfParameters.TransportMethod = sTransportMethod;
}
;
UCF_SemanticEvent.prototype.setDelay = function(bDelay) {
    if (bDelay)
        this.mUcfParameters.Delay = "full";
    else
        this.mUcfParameters.Delay = "none";
}
;
UCF_SemanticEvent.prototype.setSyncExecution = function(bSyncExecution) {
    this.mUcfParameters.SyncExecution = bSyncExecution;
}
;
UCF_SemanticEvent.prototype.aPublicMethods = ["sGetControl", "sGetName", "mGetParameters", "mGetCustomParameters", "cancel", "setCustomParameter", "setClientAction", "setEnqueueCardinality", "setResponseData", "setTransportMethod", "setDelay", "setSyncExecution"];
function UCF_ErrorMessage() {}
;UCF_ErrorMessage[0] = {
    sTitle: "Fatal Error",
    aItems: ["The browser failed to download files.", "The server is not responding", "The server was temporary not available."],
    aIssues: ["Internet connectivity has been lost.", "The website is temporarily unavailable.", "The Domain Name Server (DNS) is not reachable.", "The Domain Name Server (DNS) does not have a listing for the website's domain.", "If this is an HTTPS (secure) address, click tools, click Internet Options, click Advanced, and check to be sure the SSL and TLS protocols are enabled under the security section."],
    aTryTo: ["Retype the address.", "Try visiting another website to make sure you are connected."],
    bDestroy: true,
    sInternalMessage: "SAP HTML Rendering: Error 0"
};
UCF_ErrorMessage[1] = {
    sTitle: "Server connection not available",
    aItems: ["You are not connected to the Internet.", "The server is not responding", "The server was temporary not available."],
    aIssues: ["Internet connectivity has been lost.", "The website is temporarily unavailable.", "The Domain Name Server (DNS) is not reachable.", "The Domain Name Server (DNS) does not have a listing for the website's domain.", "If this is an HTTPS (secure) address, click tools, click Internet Options, click Advanced, and check to be sure the SSL and TLS protocols are enabled under the security section."],
    aTryTo: ["Reconnect to the server.", "Retype the address.", "Try visiting another website to make sure you are connected."],
    bDestroy: true,
    sInternalMessage: "SAP HTML Rendering: Error 1"
};
UCF_ErrorMessage.aDestroyObjects = [];
UCF_ErrorMessage.attachDestroyHandler = function(oObject, sFunction) {
    var bAttachedAlready = false;
    for (var i = 0; i < UCF_ErrorMessage.aDestroyObjects.length; i++) {
        var oDestroyObject = UCF_ErrorMessage.aDestroyObjects[i];
        if (oDestroyObject.oObject == oObject) {
            bAttachedAlready = true;
        }
    }
    if (!bAttachedAlready) {
        UCF_ErrorMessage.aDestroyObjects.push({
            oObject: oObject,
            sFunction: sFunction
        });
    }
}
;
UCF_ErrorMessage.detachDestroyHandler = function(oObject, sFunction) {
    for (var i = 0; i < UCF_ErrorMessage.aDestroyObjects.length; i++) {
        var oDestroyObject = UCF_ErrorMessage.aDestroyObjects[i];
        if (oDestroyObject.oObject == oObject && oDestroyObject.sFunction == sFunction) {
            UCF_ErrorMessage.aDestroyObjects[i] = null ;
        }
    }
}
;
UCF_ErrorMessage.show = function(iErrorNumber) {
    if (UCF_ErrorMessage.IsOpen)
        return;
    UCF_ErrorMessage.IsOpen = true;
    if (!iErrorNumber)
        iErrorNumber = 0;
    var oError = UCF_ErrorMessage[iErrorNumber];
    if (oError.bDestroy) {
        for (var i = 0; i < UCF_ErrorMessage.aDestroyObjects.length; i++) {
            var oDestroyObject = UCF_ErrorMessage.aDestroyObjects[i];
            if (oDestroyObject) {
                oDestroyObject.oObject[oDestroyObject.sFunction]();
            }
        }
    }
    document.body.style.overflow = "hidden";
    var sHTML = [];
    sHTML.push("<div style=\"border-style:solid;border-width:1px;border-bottom-color:#1D4971;border-left-color:#77A4D8;border-right-color:#1D4971;border-top-color:#77A4D8;cursor:default\"><div style=\"border-style:solid;border-width:1px;border-bottom-color:#77A4D8;border-left-color:#1D4971;border-right-color:#77A4D8;border-top-color:#1D4971;background-color:#2e6695\"><div style=\"padding:3px 0 3px 6px;font-family:Arial;font-size:11px;font-weight:bold;color:#FFF;text-overflow:ellipsis;overflow:hidden\">" + oError.sTitle + "&nbsp;&nbsp;-&nbsp;&nbsp;<span onclick=\"UCF_ErrorMessage.hide()\">(Click here to close)</span></div></div><div style=\"width:100%;height:" + Math.floor(document.body.offsetHeight / 2) + ";overflow:auto\" class=\"urBdyStd\"><table width=\"100%\" cellpadding=\"2\" cellspacing=\"4\" border=\"0\" style=\"font-size:8pt\"><tr><td align=\"left\"><b style=\"font-size:8pt\">Most likely causes:</b><br><ul>");
    for (var i = 0; i < oError.aItems.length; i++)
        sHTML.push("<li style=\"font-size:8pt\">" + oError.aItems[i] + "</li>");
    sHTML.push("</ul></td></tr><tr><td align=\"left\"><b style=\"font-size:8pt\">What you can try:</b><br><ul>");
    for (var i = 0; i < oError.aTryTo.length; i++)
        sHTML.push("<li >" + oError.aTryTo[i] + "</li>");
    sHTML.push("</ul></td></tr><tr><td align=\"left\"><b style=\"font-size:8pt\">This problem can be caused by a variety of issues, including:</b><br><ul>");
    for (var i = 0; i < oError.aIssues.length; i++)
        sHTML.push("<li style=\"font-size:8pt\">" + oError.aIssues[i] + "</li>");
    sHTML.push("</ul></td></tr></table></div></div>");
    var oFrame = document.createElement("IFRAME");
    oFrame.setAttribute("id", "ls-error-frame");
    with (oFrame.style) {
        position = "absolute";
        top = "-2px";
        left = "-2px";
        width = "150%";
        height = "150%";
        filter = "alpha(opacity:50)";
        border = "none";
    }
    document.body.appendChild(oFrame);
    oFrame.src = "javascript:void(0)";
    oFrame.setAttribute("allowTransparency", "true");
    oFrame.setAttribute("frameBorder", "no");
    oFrame.border = "0";
    var oDiv = document.createElement("DIV");
    with (oDiv.style) {
        position = "absolute";
        left = "25%";
        top = "25%";
        width = "50%";
        height = "50%";
    }
    oDiv.innerHTML = sHTML.join("");
    oDiv.setAttribute("id", "ls-error-window");
    if (document.body) {
        document.body.appendChild(oDiv);
    }
    window.onerror = UCF_ErrorMessage.handleError;
}
;
UCF_ErrorMessage.handleError = function(sMsg, sUrl, iLineNumber) {
    return true;
}
;
UCF_ErrorMessage.hide = function() {
    UCF_ErrorMessage.IsOpen = false;
    var oFrame = document.getElementById("ls-error-frame")
      , oDiv = document.getElementById("ls-error-window");
    if (oFrame)
        oFrame.parentNode.removeChild(oFrame);
    if (oDiv)
        oDiv.parentNode.removeChild(oDiv);
}
;
function UCF_BrowserEvent(oDomEvent) {
    UCF_Object.apply(this);
    if (arguments.length > 0) {
        this.init(oDomEvent);
    }
}
;UCF_BrowserEvent.prototype = new UCF_Object();
UCF_BrowserEvent.prototype.MOUSE_BUTTON_STATE = {
    None: 0,
    Left: 1,
    Right: 2,
    Left_Right: 3,
    Middle: 4,
    Left_Middle: 5,
    Right_Middle: 6,
    Left_Right_Middle: 7
};
UCF_BrowserEvent.prototype.init = function(oDomEvent) {
    this.oDomEvent = oDomEvent;
    this.sName = oDomEvent.type;
    this.bCancelBubble = false;
    this.bLocked = false;
    this.bHandled = false;
    this.oSource = this.oDomEvent.srcElement || this.oDomEvent.target || this.oDomEvent.currentTarget;
    this.oFromElement = null ;
    this.oSourceControl = null ;
    this._bShift = oDomEvent.shiftKey;
    this._bAlt = oDomEvent.altKey;
    this._bCtrl = UCF_UserAgent.bIsMacOs() ? oDomEvent.metaKey : oDomEvent.ctrlKey;
    this._bRepeat = oDomEvent.repeat;
    this._iKeyCode = oDomEvent.keyCode;
    this._iClientX = oDomEvent.clientX;
    this._iClientY = oDomEvent.clientY;
    this._iScreenX = oDomEvent.screenX;
    this._iScreenY = oDomEvent.screenY;
    this._iParentX = UCF_System.sDevice == "ff1" ? this.oDomEvent.layerX : this.oDomEvent.x;
    this._iParentY = UCF_System.sDevice == "ff1" ? this.oDomEvent.layerY : this.oDomEvent.y;
    this._iPageX = 0;
    this._iPageY = 0;
    this.oData = null ;
}
;
UCF_BrowserEvent.prototype.serializeDomRef = function(oDomRef) {
    var sSerialized = ""
      , iChildCount = 0;
    while (oDomRef) {
        if (oDomRef.getAttribute && oDomRef.getAttribute("id") && iChildCount == 0) {
            sSerialized = "UCF_DomUtil.$('" + oDomRef.getAttribute("id") + "')" + sSerialized;
            oDomRef = null ;
        } else if (oDomRef.tagName && oDomRef.tagName == "BODY") {
            sSerialized = "document.body" + sSerialized;
            oDomRef = null ;
        } else if (oDomRef == document) {
            sSerialized = "document" + sSerialized;
            oDomRef = null ;
        } else if (oDomRef == window) {
            sSerialized = "window" + sSerialized;
            oDomRef = null ;
        } else if (oDomRef.previousSibling) {
            iChildCount++;
            oDomRef = oDomRef.previousSibling;
        } else if (oDomRef.parentNode) {
            sSerialized = ".childNodes[" + iChildCount + "]" + sSerialized;
            iChildCount = 0;
            oDomRef = oDomRef.parentNode;
        }
    }
    if (sSerialized == "")
        return "null";
    return sSerialized;
}
;
UCF_BrowserEvent.prototype.deserialize = function(sBrowserEvent) {
    var oBrowserEvent = UCF_JsUtil.oDeserialize(sBrowserEvent);
    eval("oBrowserEvent.oSource = " + oBrowserEvent.sSource);
    eval("oBrowserEvent.oFromSource = " + oBrowserEvent.sFromElement);
    this.sName = oBrowserEvent.sName;
    this.oSource = oBrowserEvent.oSource;
    this.oDomEvent = {
        cancelBubble: false,
        returnValue: false
    };
    this.bCancelBubble = oBrowserEvent.bCancelBubble;
    this.bHandled = oBrowserEvent.bHandled;
    this.oFromElement = oBrowserEvent.oFromSource;
    this._bShift = oBrowserEvent.bShift;
    this._bAlt = oBrowserEvent.bAlt;
    this._bCtrl = oBrowserEvent.bCtrl;
    this._bRepeat = oBrowserEvent.bRepeat;
    this._iKeyCode = oBrowserEvent.iKeyCode;
    this._iClientX = oBrowserEvent.iClientX;
    this._iClientY = oBrowserEvent.iClientY;
    this._iScreenX = oBrowserEvent.iScreenX;
    this._iScreenY = oBrowserEvent.iScreenY;
    this._iParentX = oBrowserEvent.iParentX;
    this._iParentY = oBrowserEvent.iParentY;
    this._iPageX = oBrowserEvent.iPageX;
    this._iPageY = oBrowserEvent.iPageY;
}
;
UCF_BrowserEvent.prototype.serialize = function() {
    var oSerialize = {
        sName: this.sName,
        sSource: this.serializeDomRef(this.oSource),
        bCancelBubble: this.bCancelBubble,
        bHandled: this.bHandled,
        sFromElement: this.serializeDomRef(this.oFromElement),
        bShift: this._bShift,
        bAlt: this._bAlt,
        bCtrl: this._bCtrl,
        bRepeat: this._bRepeat,
        iKeyCode: this._iKeyCode,
        iClientX: this._iClientX,
        iClientY: this._iClientY,
        iScreenX: this._iScreenX,
        iScreenY: this._iScreenY,
        iParentX: this._iParentX,
        iParentY: this._iParentY,
        iPageX: this.iPageX(),
        iPageY: this.iPageY()
    };
    var aBuffer = [];
    return UCF_JsUtil.sSerialize(oSerialize);
}
;
UCF_BrowserEvent.prototype.reset = function() {
    this.oDomEvent = null ;
    this.sName = null ;
    this.bCancelBubble = false;
    this.bHandled = false;
    this.oSource = null ;
    this.oFromElement = null ;
    this.oSourceControl = null ;
    this._bShift = false;
    this._bAlt = false;
    this._bCtrl = false;
    this._bRepeat = false;
    this._iKeyCode = 0;
    this._iClientX = -1;
    this._iClientY = -1;
    this._iScreenX = -1;
    this._iScreenY = -1;
    this._iParentX = -1;
    this._iParentY = -1;
}
;
UCF_BrowserEvent.prototype.sGetName = function() {
    return this.sName;
}
;
UCF_BrowserEvent.prototype.setName = function(sName) {
    this.sName = sName;
}
;
UCF_BrowserEvent.prototype.oGetSource = function() {
    return this.oSource;
}
;
UCF_BrowserEvent.prototype.oGetSourceControl = function() {
    return this.oSourceControl;
}
;
UCF_BrowserEvent.prototype.setSource = function(oSource) {
    this.oSource = oSource;
}
;
UCF_BrowserEvent.prototype.oGetSourceRoot = function() {
    var oSourceRoot = this.oGetSource(), oRealRoot, sId;
    if (!oSourceRoot || oSourceRoot == window || oSourceRoot == document) {
        return null ;
    }
    if ((oSourceRoot.document && oSourceRoot.document != document) || oSourceRoot.parentNode == null ) {
        return null ;
    }
    while (oSourceRoot != document) {
        sId = oSourceRoot.id;
        if (sId) {
            if (oSourceRoot.getAttribute("ct"))
                return oSourceRoot;
            if (UCF_StringUtil.bEndsWith(sId, "-r") || UCF_StringUtil.bEndsWith(sId, "-o") || UCF_StringUtil.bEndsWith(sId, "-map")) {
                oRealRoot = UCF_DomUtil.$(sId.substr(0, sId.lastIndexOf("-")));
                if (oRealRoot && oRealRoot.getAttribute("ct")) {
                    return oRealRoot;
                }
            }
        }
        oSourceRoot = oSourceRoot.parentNode;
    }
    return null ;
}
;
UCF_BrowserEvent.prototype.bCtrl = function() {
    return this._bCtrl;
}
;
UCF_BrowserEvent.prototype.bAlt = function() {
    return this._bAlt;
}
;
UCF_BrowserEvent.prototype.bShift = function() {
    return this._bShift;
}
;
UCF_BrowserEvent.prototype.bRepeat = function() {
    return this._bRepeat;
}
;
UCF_BrowserEvent.prototype.iKeyCode = function() {
    return this._iKeyCode;
}
;
UCF_BrowserEvent.prototype.iClientX = function() {
    return this._iClientX;
}
;
UCF_BrowserEvent.prototype.iClientY = function() {
    return this._iClientY;
}
;
UCF_BrowserEvent.prototype.iPageX = function() {
    if (this._iPageX)
        return this._iPageX;
    if (this.oDomEvent.pageX) {
        this._iPageX = this.oDomEvent.pageX;
    } else {
        this._iPageX = this.oDomEvent.clientX + document.body.scrollLeft;
    }
    if (UCF_System.bIsRTL)
        this._iPageX = this._iPageX - UCF_DomUtil.iGetVerticalScollbarOffset(document.body) - (document.body.scrollWidth - document.body.clientWidth);
    return this._iPageX;
}
;
UCF_BrowserEvent.prototype.iPageY = function() {
    if (this._iPageY)
        return this._iPageY;
    if (this.oDomEvent.pageY) {
        this._iPageY = this.oDomEvent.pageY;
    } else {
        this._iPageY = this.oDomEvent.clientY + document.body.scrollTop;
    }
    return this._iPageY;
}
;
UCF_BrowserEvent.prototype.iScreenX = function() {
    return this._iScreenX;
}
;
UCF_BrowserEvent.prototype.iScreenY = function() {
    return this._iScreenY;
}
;
UCF_BrowserEvent.prototype.cancel = function() {
    this.oDomEvent.cancelBubble = true;
    this.bCancel = true;
    if (this.oDomEvent.keyCode != 0) {
        try {
            this._iKeyCode = 0;
            this.oDomEvent.keyCode = 0;
        } catch (e) {}
    }
    this.oDomEvent.returnValue = false;
    if (this.oDomEvent.preventDefault)
        this.oDomEvent.preventDefault();
}
;
UCF_BrowserEvent.prototype.cancelBubble = function() {
    this.bCancelBubble = true;
}
;
UCF_BrowserEvent.prototype.bGetCancelBubble = function() {
    return this.bCancelBubble;
}
;
UCF_BrowserEvent.prototype.bIsDomEventCanceled = function() {
    return this.oDomEvent.cancelBubble;
}
;
UCF_BrowserEvent.prototype.eGetMouseButtonState = function() {
    var iButton = this.oDomEvent.which;
    if (iButton) {
        switch (iButton) {
        case 1:
            return this.MOUSE_BUTTON_STATE.Left;
        case 2:
            return this.MOUSE_BUTTON_STATE.Middle;
        case 3:
            return this.MOUSE_BUTTON_STATE.Right;
        }
    }
    return this.oDomEvent.button;
}
;
UCF_BrowserEvent.prototype.oGetFromElement = function() {
    if (this.oFromElement) {
        if (this.oFromElement.document == window.document) {
            return this.oFromElement;
        } else {
            var sId = this.oFromElement.id;
            if (sId)
                return UCF_DomUtil.$(sId);
        }
    }
    return null ;
}
;
UCF_BrowserEvent.prototype.iParentX = function() {
    return this._iParentX;
}
;
UCF_BrowserEvent.prototype.iParentY = function() {
    return this._iParentY;
}
;
UCF_BrowserEvent.prototype.bIsUserTriggered = function() {
    switch (this.sName) {
    case "load":
    case "unload":
    case "resize":
        return false;
    default:
        return true;
    }
}
;
UCF_BrowserEvent.prototype.oGetData = function() {
    if (!this.oData)
        this.oData = {};
    return this.oData;
}
;
function UCF_ObjectPool(oObjectClass) {
    UCF_Object.apply(this);
    this.oObjectClass = oObjectClass;
    this.aFreeObjects = [];
    this.aUsedObjects = [];
}
UCF_ObjectPool.prototype = new UCF_Object();
UCF_ObjectPool.prototype.oBorrowObject = function() {
    if (this.aFreeObjects.length == 0)
        this.createObject();
    var oObject = this.aFreeObjects.pop();
    oObject.init.apply(oObject, arguments);
    this.aUsedObjects.push(oObject);
    return oObject;
}
;
UCF_ObjectPool.prototype.returnObject = function(oObject) {
    oObject.reset();
    this.aUsedObjects.pop();
    this.aFreeObjects.push(oObject);
}
;
UCF_ObjectPool.prototype.createObject = function() {
    var oObject = new this.oObjectClass();
    this.aFreeObjects.push(oObject);
}
;
function UCF_Event(iId, mParameters) {
    UCF_Object.apply(this);
    if (arguments.length > 0) {
        this.init(iId, mParameters);
    }
}
;UCF_Event.prototype = new UCF_Object();
UCF_Event.prototype.init = function(iId, mParameters) {
    this.iId = iId;
    this.mParameters = mParameters;
    if (!mParameters)
        mParameters = {};
}
;
UCF_Event.prototype.reset = function() {
    this.iId = 0;
    this.mParameters = null ;
}
;
UCF_Event.prototype.iGetId = function() {
    return this.iId;
}
;
UCF_Event.prototype.mGetParameters = function() {
    return this.mParameters;
}
;
UCF_Event.prototype.oGetParam = function(sName) {
    return this.mParameters[sName];
}
;
function UCF_EventProvider() {
    UCF_Object.apply(this);
    this.mEventRegistry = [];
    this.iCounter = 0;
}
;UCF_EventProvider.prototype = new UCF_Object();
UCF_EventProvider.prototype.M_EVENTS = {};
UCF_EventProvider.prototype.oEventPool = new UCF_ObjectPool(UCF_Event);
UCF_EventProvider.prototype.attachEvent = function(iEventId, oListener, sFunction) {
    if (!this.mEventRegistry[iEventId])
        this.mEventRegistry[iEventId] = {};
    this.mEventRegistry[iEventId][this.iCounter++] = {
        "oListener": oListener,
        "sFunction": sFunction
    };
}
;
UCF_EventProvider.prototype.detachEvent = function(iEventId, oListener) {
    var mEventListeners = this.mEventRegistry[iEventId];
    if (!mEventListeners)
        return;
    for (oEntry in mEventListeners) {
        if (mEventListeners[oEntry].oListener == oListener) {
            delete mEventListeners[oEntry];
        }
    }
}
;
UCF_EventProvider.prototype.fireEvent = function(iEventId, mParameters) {
    var mEventListeners = this.mEventRegistry[iEventId];
    if (!mEventListeners)
        return;
    var oEvent = this.oEventPool.oBorrowObject(iEventId, mParameters);
    for (oEntry in mEventListeners) {
        with (mEventListeners[oEntry]) {
            oListener[sFunction](oEvent);
        }
    }
    this.oEventPool.returnObject(oEvent);
}
;
function UCF_BrowserHistory() {
    UCF_EventProvider.apply(this);
    this.aHistoryPoints = [];
    this.bActivated = false;
}
;UCF_BrowserHistory.prototype = new UCF_EventProvider();
UCF_BrowserHistory.prototype.E_EVENTS = {
    Back: 0
};
UCF_BrowserHistory.prototype.activate = function() {
    if (this.bActivated)
        return;
    if (!this.oIframe) {
        var oIframe = document.createElement("IFRAME");
        oIframe.setAttribute("id", "sap-ui-BrowserHistory");
        oIframe.tabIndex = "-1";
        oIframe.style.height = "1px";
        oIframe.style.width = "1px";
        oIframe.style.position = "absolute";
        oIframe.style.top = "-10";
        oIframe.src = UCF_System.sResourceRoot + "/js/html/browserhistory.html";
        document.body.appendChild(oIframe);
        this.oIframe = oIframe;
        UCF_JsUtil.delayedCall(1, this, "attachCallback");
    } else {
        try {
            this.oIframe.contentWindow.attachScroll();
        } catch (oException) {
            UCF_JsUtil.delayedCall(1, this, "setEnabled", [false]);
            return;
        }
    }
}
;
UCF_BrowserHistory.prototype.reactivate = function() {
    if (this.bActivated && this.oIframe) {
        if (UCF_UserAgent.bIsIE()) {
            this.oIframe.contentWindow.document.location.hash = "#next";
        }
    }
}
;
UCF_BrowserHistory.prototype.deactivate = function() {
    if (this.bActivated && this.oIframe) {
        this.oIframe.parentNode.removeChild(this.oIframe);
        this.oIframe = null ;
        this.aHistoryPoints = [];
        this.bActivated = false;
    }
}
;
UCF_BrowserHistory.prototype.attachCallback = function() {
    try {
        this.oIframe.contentWindow.setOnBack(this, "onback");
    } catch (oException) {
        UCF_JsUtil.delayedCall(1, this, "attachCallback");
        return;
    }
    this.bActivated = true;
}
;
UCF_BrowserHistory.prototype.onback = function() {
    if (!this.bActivated)
        return;
    var sHash = "";
    if (this.aHistoryPoints.length > 0) {
        sHash = this.aHistoryPoints[this.aHistoryPoints.length - 1];
        this.aHistoryPoints.pop();
    }
    sHash != "" ? sHash = sHash.substring(1) : "";
    this.fireEvent(this.E_EVENTS.Back, {
        sName: "Back",
        sHistoryPoint: sHash
    });
}
;
UCF_BrowserHistory.prototype.addHistoryPoint = function(sHistoryPoint) {
    if (!this.bActivated)
        return;
    this.aHistoryPoints.push("#" + sHistoryPoint);
}
;
UCF_BrowserHistory.prototype.removeHistoryPoint = function() {
    if (this.aHistoryPoints.length == 0)
        return;
    var aHistoryPoints = this.aHistoryPoints;
    var s = aHistoryPoints[aHistoryPoints.length - 1];
    this.aHistoryPoints.pop();
}
;
UCF_BrowserHistory.prototype.removeAllHistoryPoints = function() {
    if (this.aHistoryPoints.length == 0)
        return;
    this.aHistoryPoints = [];
}
;
UCF_BrowserHistory.prototype.back = function(sHistoryPoint) {
    if (!this.bActivated)
        return;
    if (!sHistoryPoint) {
        this.oIframe.contentWindow.back();
    } else {
        var aHistoryPoints = this.aHistoryPoints
          , s = "#" + sHistoryPoint
          , bContained = false;
        for (var i = 0; i < aHistoryPoints.length; i++) {
            bContained = aHistoryPoints[i] == s;
            if (bContained)
                break;
        }
        if (bContained) {
            while (aHistoryPoints.length > 0) {
                if (aHistoryPoints[aHistoryPoints.length - 1] == s) {
                    this.bIgnoreBackEvent = true;
                    this.oIframe.contentWindow.back();
                    break;
                }
                aHistoryPoints.pop();
            }
        } else {
            this.oIframe.contentWindow.back();
        }
    }
}
;
UCF_BrowserHistory.prototype.aPublicMethods = ["activate", "deactivate", "addHistoryPoint", "removeHistoryPoint", "removeAllHistoryPoints", "back"];
function UCF_ControlInfo(oDomRef) {
    if (arguments.length == 0)
        return;
    if (oDomRef) {
        this.oDomRef = oDomRef;
        this.updateAttributes();
    }
}
;UCF_ControlInfo.prototype = new UCF_Object();
UCF_ControlInfo.prototype.updateAttributes = function() {
    var sAttributes = this.oDomRef.getAttribute("lsdata"), sName;
    if (sAttributes == null  || sAttributes == "")
        return;
    eval("var mAttributes = " + sAttributes);
    for (var i in mAttributes) {
        sName = this.aAttributeNames[i];
        this[sName] = mAttributes[i];
    }
}
;
function UCF_KeyCodes() {}
;UCF_KeyCodes = {
    BACKSPACE: 8,
    TAB: 9,
    NUMPAD_5: 12,
    ENTER: 13,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    BREAK: 19,
    CAPS_LOCK: 20,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    PRINT: 44,
    INSERT: 45,
    DELETE: 46,
    _0: 48,
    _1: 49,
    _2: 50,
    _3: 51,
    _4: 52,
    _5: 53,
    _6: 54,
    _7: 55,
    _8: 56,
    _9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    WINDOWS: 91,
    CONTEXT_MENU: 93,
    TURN_OFF: 94,
    SLEEP: 95,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    NUMPAD_ASTERISK: 106,
    NUMPAD_PLUS: 107,
    NUMPAD_MINUS: 109,
    NUMPAD_COMMA: 110,
    NUMPAD_SLASH: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    OPEN_BRACKET: 186,
    PLUS: 187,
    COMMA: 188,
    SLASH: 189,
    DOT: 190,
    PIPE: 191,
    SEMICOLON: 192,
    MINUS: 219,
    GREAT_ACCENT: 220,
    EQUALS: 221,
    SINGLE_QUOTE: 222,
    BACKSLASH: 226
};
function UCF_UserAgent() {}
;UCF_UserAgent.MSIE = "MSIE";
UCF_UserAgent.GECKO = "Gecko";
UCF_UserAgent.WEBKIT = "WebKit";
UCF_UserAgent.FIREFOX = "Firefox";
UCF_UserAgent.SAFARI = "Safari";
UCF_UserAgent.CHROME = "Chrome";
UCF_UserAgent.OPERA = "Opera";
UCF_UserAgent.WINDOWS = "Windows";
UCF_UserAgent.MACOS = "MacOs";
UCF_UserAgent.LINUX = "Linux";
UCF_UserAgent.init = function() {
    var sUserAgent = window.navigator.userAgent
      , sSearchUA = /MSIE (\d+\.\d+)/
      , sSearchB = [/MSIE (\d+\.\d+)/];
    this.sUA = UCF_UserAgent.MSIE;
    this.sB = UCF_UserAgent.MSIE;
    this.fUAVersion = 0;
    this.fBVersion = 0;
    if (sUserAgent.indexOf("Gecko/") > -1) {
        this.sUA = UCF_UserAgent.GECKO;
        sSearchUA = /rv:(\d+\.\d+)/;
        if (sUserAgent.indexOf("Firefox/") > -1) {
            this.sB = this.FIREFOX;
            sSearchB.push(/Firefox\/(\d+\.\d+)/);
        }
    } else if (sUserAgent.indexOf("WebKit/") > -1) {
        this.sUA = this.WEBKIT;
        sSearchUA = /WebKit\/(\d+).(\d+)/;
        if (sUserAgent.indexOf("Chrome/") > -1) {
            this.sB = this.CHROME;
            sSearchB.push(/Chrome\/(\d+\.\d+)/);
        } else if (sUserAgent.indexOf("Safari/") > -1) {
            this.sB = this.SAFARI;
            sSearchB.push(/Version\/(\d+\.\d+)/);
        }
    } else if (sUserAgent.indexOf("Opera/") > -1) {
        this.sUA = this.OPERA;
        this.sB = this.OPERA;
        sSearchUA = /Opera\/(\d+\.\d+)/;
        sSearchB.push(/Opera\/(\d+\.\d+)/);
    }
    if (sSearchUA.test(sUserAgent)) {
        this.fUAVersion = parseFloat(RegExp.$1);
    }
    for (i = 0; i < sSearchB.length; i++) {
        if (sSearchB[i].test(sUserAgent)) {
            this.fBVersion = parseFloat(RegExp.$1);
        }
    }
    if (sUserAgent.indexOf("Windows ") > -1)
        this.sOs = this.WINDOWS;
    else if (sUserAgent.indexOf("Linux") > -1)
        this.sOs = this.LINUX;
    else if (sUserAgent.indexOf("Mac OS") > -1)
        this.sOs = this.MACOS;
    this.bIECompatibilityMode = false;
    if (this.sB == this.MSIE && this.fBVersion < 8.0) {
        if (sUserAgent.indexOf("Trident") > -1) {
            this.bIECompatibilityMode = true;
        }
    }
}
;
UCF_UserAgent.init();
UCF_UserAgent.bVersionCheck = function(fVersion, fCheckVersion) {
    if (typeof (fVersion) == "number") {
        return fVersion <= fCheckVersion;
    }
    return false;
}
;
UCF_UserAgent.bIsUserAgent = function(sUserAgent, fVersion) {
    if (this.sUA == sUserAgent && typeof (fVersion) != "number")
        return true;
    return this.sUA == sUserAgent && this.bVersionCheck(fVersion, this.fUAVersion);
}
;
UCF_UserAgent.bIsBrowser = function(sBrowser, fVersion) {
    if (this.sB == sBrowser && typeof (fVersion) != "number")
        return true;
    return this.sB == sBrowser && this.bVersionCheck(fVersion, this.fBVersion);
}
;
UCF_UserAgent.bIsIE = function(fVersion) {
    return this.bIsUserAgent(this.MSIE, fVersion);
}
;
UCF_UserAgent.bIsGecko = function(fVersion) {
    return this.bIsUserAgent(this.GECKO, fVersion);
}
;
UCF_UserAgent.bIsWebKit = function(fVersion) {
    return this.bIsUserAgent(this.WEBKIT, fVersion);
}
;
UCF_UserAgent.bIsFirefox = function(fVersion) {
    return this.bIsBrowser(this.FIREFOX, fVersion);
}
;
UCF_UserAgent.bIsSafari = function(fVersion) {
    return UCF_UserAgent.bIsBrowser(this.SAFARI, fVersion);
}
;
UCF_UserAgent.bIsChrome = function(fVersion) {
    return this.bIsBrowser(this.CHROME, fVersion);
}
;
UCF_UserAgent.bIsWindows = function() {
    return this.sOs == this.WINDOWS;
}
;
UCF_UserAgent.bIsLinux = function() {
    return this.sOs == this.LINUX;
}
;
UCF_UserAgent.bIsMacOs = function() {
    return this.sOs == this.MACOS;
}
;
UCF_UserAgent.bIsIECompatibilityMode = function() {
    return this.bIsIE() && this.bIECompatibilityMode;
}
;
function UCF_PendingRequest(oQueue) {
    UCF_EventProvider.apply(this);
    this.oQueue = oQueue;
    this.iType = UCF_PendingRequest.XMLHTTP;
    this.oForm = null ;
    this.sActionUrl = "";
    this.iSuspendCounter = 0;
    this.mIdMap = {};
}
;UCF_PendingRequest.prototype = new UCF_EventProvider();
UCF_PendingRequest.prototype.M_EVENTS = {
    Send: 0
};
UCF_PendingRequest.FORM = 0;
UCF_PendingRequest.XMLHTTP = 1;
UCF_PendingRequest.XMLHTTP_SYNC = 2;
UCF_PendingRequest.prototype.setForm = function(oForm) {
    this.oForm = oForm;
    this.iType = UCF_PendingRequest.FORM;
}
;
UCF_PendingRequest.prototype.setSyncExecution = function(bSyncExecution) {
    if (this.iType == UCF_PendingRequest.XMLHTTP || this.iType == UCF_PendingRequest.XMLHTTP_SYNC) {
        this.iType = bSyncExecution ? UCF_PendingRequest.XMLHTTP_SYNC : UCF_PendingRequest.XMLHTTP;
    } else {}
}
;
UCF_PendingRequest.prototype.oGetForm = function() {
    return this.oForm;
}
;
UCF_PendingRequest.prototype.setActionUrl = function(sActionUrl) {
    this.sActionUrl = sActionUrl;
    this.iType = UCF_PendingRequest.XMLHTTP;
}
;
UCF_PendingRequest.prototype.sGetActionUrl = function() {
    return this.sActionUrl;
}
;
UCF_PendingRequest.prototype.oGetQueue = function() {
    return this.oQueue;
}
;
UCF_PendingRequest.prototype.iGetType = function() {
    return this.iType;
}
;
UCF_PendingRequest.prototype.suspend = function(sId) {
    if (this.mIdMap[sId]) {}
    this.mIdMap[sId] = true;
    this.iSuspendCounter++;
}
;
UCF_PendingRequest.prototype.resume = function(sId) {
    if (!this.mIdMap[sId]) {}
    this.mIdMap[sId] = false;
    this.iSuspendCounter--;
    if (this.iSuspendCounter == 0) {
        this.mIdMap = {};
        this.fireEvent(this.M_EVENTS.Send, {
            oPendingRequest: this
        });
    }
}
;
UCF_PendingRequest.prototype.send = function() {}
;
UCF_PendingRequest.prototype.bIsSuspended = function() {
    return this.iSuspendCounter > 0;
}
;
UCF_PendingRequest.prototype.addSemanticEvent = function(oSemanticEvent) {
    var oQueueItem = new (UCF_ClassLoader.oGetClass("UCF_EventQueueItem"))(oSemanticEvent);
    this.oQueue.addItem(oQueueItem);
}
;
UCF_PendingRequest.prototype.aPublicMethods = ["suspend", "resume", "send", "addSemanticEvent"];
function UCF_EventQueue(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.mQueue = [];
    this.bDebugMarker = false;
    this.sDebugLabel = "";
}
UCF_EventQueue.prototype = new UCF_Object();
UCF_EventQueue.prototype.addItem = function(oItem) {
    this.mQueue.push(oItem);
}
;
UCF_EventQueue.prototype.reset = function() {
    this.mQueue = [];
}
;
UCF_EventQueue.prototype.purgeByItem = function(oItemTemplate) {
    var mTemp = [];
    var sItemName = oItemTemplate.sGetItemName();
    for (var idx = 0; idx < this.mQueue.length; idx++) {
        var oItem = this.mQueue[idx];
        if (oItem && oItem.sGetItemName() != sItemName) {
            mTemp.push(oItem);
        }
    }
    this.mQueue = mTemp;
}
;
UCF_EventQueue.prototype.REQUEST_PARAM_NAME = "SAPEVENTQUEUE";
UCF_EventQueue.prototype.mGetTransportMap = function() {
    var mDataBuffer = [], bAnyData = false, sSepar = "", oItem;
    for (var idx = 0; idx < this.mQueue.length; idx++) {
        oItem = this.mQueue[idx];
        if (oItem == null )
            continue;sSepar = (bAnyData) ? oItem.E_SEPARATORS.EVENT : "";
        mDataBuffer.push(sSepar);
        mDataBuffer.push(oItem.sGetSerializedData());
        bAnyData = true;
    }
    var resultData = mDataBuffer.join("")
      , resultMap = {};
    if (this.oLS.oSystem.bUseSafeTransportEncoding) {
        resultMap[this.REQUEST_PARAM_NAME] = this.sSafeTransportEncode(resultData);
    } else {
        resultMap[this.REQUEST_PARAM_NAME] = resultData;
    }
    return resultMap;
}
;
UCF_EventQueue.prototype.ENC_PLAIN = "0123456789abcdefghijklmnopqrstuvwxyzABCDEDFGHIJKLMNOPQRSTUVWXYZ-_.";
UCF_EventQueue.prototype.ENC_HPREFIX = "~";
UCF_EventQueue.prototype.ENC_HDIGITS = "0123456789ABCDEF";
UCF_EventQueue.prototype.sSafeTransportEncode = function(s) {
    var sBuff = [];
    var code;
    var c;
    for (var i = 0; i < s.length; i++) {
        c = s.charAt(i);
        cc = s.charCodeAt(i);
        if (this.ENC_PLAIN.indexOf(c) >= 0) {
            sBuff.push(c);
        } else {
            sBuff.push(this.ENC_HPREFIX);
            code = s.charCodeAt(i);
            if (code < 256) {
                sBuff.push("00");
            } else {
                sBuff.push(this.ENC_HDIGITS.charAt((code & 0xF000) >>> 12));
                sBuff.push(this.ENC_HDIGITS.charAt((code & 0x0F00) >>> 8));
            }
            sBuff.push(this.ENC_HDIGITS.charAt((code & 0x00F0) >>> 4));
            sBuff.push(this.ENC_HDIGITS.charAt((code & 0x000F)));
        }
    }
    return sBuff.join("");
}
;
UCF_EventQueue.prototype.setDebugSupplements = function(bMarker, sLabel) {
    this.bDebugMarker = bMarker;
    this.sDebugLabel = sLabel;
}
;
function UCF_FocusInfo(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.sFocussedId = "";
    this.sApplyControlId = "";
    this.sPopupWindowId = "";
    this.mParameters = {};
    this.oDomRefOrgFocussedElement = null ;
}
;UCF_FocusInfo.prototype = new UCF_Object();
UCF_FocusInfo.prototype.E_PARAMS_TO_SERIALIZE = {
    sFocussedId: "sFocussedId",
    sApplyControlId: "sApplyControlId",
    sPopupWindowId: "sPopupWindowId"
};
UCF_FocusInfo.prototype.ID_MARKER = "@";
UCF_FocusInfo.prototype.cleanUp = function() {
    this.oLS = null ;
    this.sFocussedId = "";
    this.sApplyControlId = "";
    this.sPopupWindowId = "";
    this.mParameters = null ;
    this.oDomRefOrgFocussedElement = null ;
}
;
UCF_FocusInfo.prototype.init = function(oDomRefOrgFocussedElement) {
    var sFocussedElementId = ""
      , oControl = null 
      , oPopupManager = this.oLS.oGetPopupManagerInternal()
      , sPopupWindowId = oPopupManager.sGetPopupIdByWindow(window);
    if (oDomRefOrgFocussedElement && oDomRefOrgFocussedElement.getAttribute) {
        this.oDomRefOrgFocussedElement = oDomRefOrgFocussedElement;
        oControl = this.oLS.oGetControlByDomRef(oDomRefOrgFocussedElement);
        sFocussedElementId = this.oDomRefOrgFocussedElement.getAttribute("id");
    }
    if (oControl && !sFocussedElementId) {
        if (oControl.oFocusDomRef)
            sFocussedElementId = oControl.oFocusDomRef.getAttribute("id");
        else if (oControl.oDomRef)
            sFocussedElementId = oControl.oDomRef.getAttribute("id");
    }
    if (sFocussedElementId) {
        this.setFocussedId(sFocussedElementId);
    }
    if (sPopupWindowId) {
        this.sPopupWindowId = sPopupWindowId;
    }
    if (oControl) {
        var oCurrControl = oControl;
        while (oCurrControl != null  && oCurrControl.bIsValid()) {
            oCurrControl.collectFocusInfo(this);
            oCurrControl = oCurrControl.oGetParent();
        }
    }
}
;
UCF_FocusInfo.prototype.setFocussedId = function(sFocussedId) {
    this.sFocussedId = sFocussedId;
}
;
UCF_FocusInfo.prototype.sGetFocussedId = function() {
    return this.sFocussedId;
}
;
UCF_FocusInfo.prototype.setApplyControl = function(oApplyControl) {
    this.sApplyControlId = oApplyControl.sId;
}
;
UCF_FocusInfo.prototype.sGetPopupWindowId = function() {
    return this.sPopupWindowId;
}
;
UCF_FocusInfo.prototype.oGetOrgFocussedElement = function() {
    return this.oDomRefOrgFocussedElement
}
;
UCF_FocusInfo.prototype.addParam = function(sKey, oValue) {
    this.mParameters[sKey] = oValue;
}
;
UCF_FocusInfo.prototype.oGetParam = function(sKey) {
    return this.mParameters[sKey];
}
;
UCF_FocusInfo.prototype.deleteParam = function(sKey) {
    delete this.mParameters[sKey];
}
;
UCF_FocusInfo.prototype.apply = function() {
    if (this.sApplyControlId) {
        var oApplyControl = this.oLS.oControlFactory.oGetControlById(this.sApplyControlId);
        if (oApplyControl && oApplyControl.bIsVisible())
            oApplyControl.applyFocusInfo(this);
    } else if (this.sFocussedId) {
        var oDomRef = UCF_DomUtil.$(this.sFocussedId)
          , oControl = this.oLS.oControlFactory.oGetControlById(this.sFocussedId);
        if (oControl && UCF_JsUtil.bInstanceOf(oControl, "UCF_PopupWindow")) {
            oControl.focus();
        } else if (oControl && oControl.bIsVisible()) {
            oControl.moveFocus();
        } else {
            if (UCF_DomUtil.bIsVisible(oDomRef, true))
                UCF_JsUtil.delayedCall(0, UCF_DomUtil, "focusDomElement", [oDomRef]);
        }
    }
}
;
UCF_FocusInfo.prototype.sSerialize = function() {
    var curParam;
    for (var i in this.E_PARAMS_TO_SERIALIZE) {
        if (this[i])
            this.addParam(this.E_PARAMS_TO_SERIALIZE[i], this[i]);
    }
    return this.ID_MARKER + UCF_JsUtil.sSerialize(this.mParameters);
}
;
UCF_FocusInfo.prototype.deserialize = function(sInfo) {
    if (!sInfo)
        return;
    if (sInfo.indexOf(this.ID_MARKER) == 0) {
        var oCurrValue, oResult = UCF_JsUtil.oDeserialize(sInfo.substring(this.ID_MARKER.length, sInfo.length));
        this.mParameters = oResult;
        for (var i in this.E_PARAMS_TO_SERIALIZE) {
            oCurrValue = this.oGetParam(this.E_PARAMS_TO_SERIALIZE[i]);
            if (oCurrValue) {
                this[i] = oCurrValue;
                this.deleteParam(this.E_PARAMS_TO_SERIALIZE[i]);
            }
        }
    } else {
        this.setFocussedId(sInfo);
    }
}
;
function UCF_StringUtil() {}
;UCF_StringUtil.fillChars = function(sBaseString, sFillChar, iTotalLength, bAddInFront) {
    var sNewString = sBaseString;
    while (sNewString.length < iTotalLength) {
        if (bAddInFront) {
            sNewString = sFillChar + sNewString;
        } else {
            sNewString += sFillChar;
        }
    }
    return sNewString;
}
;
UCF_StringUtil.sGetCSSNotation = function(sJSNotation) {
    UCF_JsUtil.clearRegExpBackReferences();
    return sJSNotation.replace(/([A-Z])/g, "-$1").toLowerCase();
}
;
UCF_StringUtil.bStartsWith = function(sString, sSubString, bIgnoreCase) {
    if (bIgnoreCase) {
        sString = sString.toUpperCase();
        sSubString = sSubString.toUpperCase();
    }
    return sString.indexOf(sSubString) == 0;
}
;
UCF_StringUtil.bEndsWith = function(sString, sSubString, bIgnoreCase) {
    if (bIgnoreCase) {
        sString = sString.toUpperCase();
        sSubString = sSubString.toUpperCase();
    }
    var iPos = sString.indexOf(sSubString);
    return iPos >= 0 && iPos == sString.length - sSubString.length;
}
;
UCF_StringUtil.bContains = function(sString, sSubString, bIgnoreCase) {
    if (bIgnoreCase) {
        sString = sString.toUpperCase();
        sSubString = sSubString.toUpperCase();
    }
    return sString.indexOf(sSubString) >= 0;
}
;
UCF_StringUtil.sStripWhiteSpace = function(sValue) {
    return sValue.replace(/\s/g, "");
}
;
UCF_StringUtil.bIsEmpty = function(sValue) {
    return /^\s*$/.test(sValue);
}
;
UCF_StringUtil.iParseInt = function(oObj) {
    var i = parseInt(oObj);
    return isNaN(i) ? 0 : i;
}
;
function UCF_Rectangle(iTop, iLeft, iWidth, iHeight) {
    this.iTop = iTop;
    this.iLeft = iLeft;
    this.iWidth = iWidth;
    this.iHeight = iHeight;
}
UCF_Rectangle.prototype = new UCF_Object();
function UCF_IFrameRequestObject() {
    UCF_Object.apply(this);
    this.initialize();
    var oIRO = this;
    this.forwardLoad = function() {
        oIRO.onLoad();
    }
    ;
}
;UCF_IFrameRequestObject.prototype = new UCF_Object();
UCF_IFrameRequestObject.prototype.onreadystatechange = null ;
UCF_IFrameRequestObject.prototype.status = "";
UCF_IFrameRequestObject.prototype.responseText = null ;
UCF_IFrameRequestObject.prototype.responseXML = null ;
UCF_IFrameRequestObject.prototype.readyState = 0;
UCF_IFrameRequestObject.prototype.initialize = function() {
    var sName = UCF_JsUtil.sGetUID();
    this.oIFrame = document.createElement("iframe");
    this.oIFrame.src = "javascript:''";
    this.oIFrame.style.display = "none";
    document.body.appendChild(this.oIFrame);
    this.oIFrame.contentWindow.name = sName;
    this.oForm = document.createElement("form");
    this.oForm.target = sName;
    document.body.appendChild(this.oForm);
}
;
UCF_IFrameRequestObject.prototype.open = function(sMethod, sUrl, bAsync) {
    if (!bAsync) {
        _fatal("Synchronous requests are not supported: " + sUrl);
    }
    this.oForm.method = sMethod;
    this.oForm.action = sUrl;
}
;
UCF_IFrameRequestObject.prototype.send = function(sPostBody) {
    if (sPostBody) {
        var oParams = this.oDecodeParameters(sPostBody);
        this.prepareForm(oParams);
    }
    this.readyState = 0;
    this.oForm.submit();
    UCF_DomUtil.attachEvent(this.oIFrame, "load", this.forwardLoad);
}
;
UCF_IFrameRequestObject.prototype.prepareForm = function(oParams) {
    var aFields = this.oForm.childNodes, oField;
    while (aFields.length > 0) {
        this.oForm.removeChild(this.oForm.firstChild);
    }
    for (var i in oParams) {
        oField = document.createElement("input");
        oField.type = "hidden";
        oField.name = i;
        oField.value = oParams[i];
        this.oForm.appendChild(oField);
    }
}
;
UCF_IFrameRequestObject.prototype.oDecodeParameters = function(sEncodedParameters) {
    var aParams = sEncodedParameters.split("&"), aParam, oParams = {};
    for (var i = 0; i < aParams.length; i++) {
        aParam = aParams[i].split("=");
        oParams[decodeURIComponent(aParam[0])] = decodeURIComponent(aParam[1]);
    }
    return oParams;
}
;
UCF_IFrameRequestObject.prototype.setRequestHeader = function() {}
;
UCF_IFrameRequestObject.prototype.onLoad = function() {
    var bSuccess = true
      , oXml = null 
      , oWindow = this.oIFrame.contentWindow;
    UCF_DomUtil.detachEvent(this.oIFrame, "load", this.forwardLoad);
    this.status = "500";
    this.responseText = "";
    this.responseXML = null ;
    this.readyState = 4;
    try {
        oXml = oWindow.document.getElementsByTagName("xml")[0];
        bSuccess = (oXml != null );
    } catch (e) {
        bSuccess = false;
    }
    if (bSuccess) {
        this.status = "200";
        if (UCF_UserAgent.bIsIE()) {
            this.responseText = oXml.innerHTML;
            this.responseXML = oXml.XMLDocument;
        } else {
            var oDocument = document.implementation.createDocument("", "", null )
              , oDocumentElement = oDocument.importNode(oXml.firstChild, true);
            oDocument.appendChild(oDocumentElement);
            this.responseText = oXml.textContent;
            this.responseXML = oDocument;
        }
    } else {
        try {
            this.responseText = oWindow.document.documentElement.outerHTML;
        } catch (e) {}
    }
    if (this.onreadystatechange) {
        this.onreadystatechange();
    }
}
;
function UCF_Control(oDomRef, oLS, sId) {
    if (arguments.length == 0)
        return;
    UCF_EventProvider.apply(this);
    this.sId = sId;
    this.oLS = oLS;
    this.aDelegates = null ;
    this.mEvents = {};
    this.bKeepAlive = false;
    this.bIgnoreDefaultButton = false;
    this.bAllowTextSelection = false;
    this.oPendingRequest = null ;
    this.oParentControl = null ;
    this.oFocusDomRef = null ;
    if (oDomRef)
        this.connectToDom(oDomRef);
}
;UCF_Control.prototype = new UCF_EventProvider();
UCF_Control.prototype.oGetInterface = function() {
    return new UCF_Interface(this,this.aMethodNames);
}
;
UCF_Control.prototype.connectToDom = function(oDomRef) {
    this.sId = oDomRef.getAttribute("id");
    this.oDomRef = oDomRef;
    this.oRootRef = UCF_DomUtil.$(this.sId + "-r");
    if (!this.oRootRef)
        this.oRootRef = oDomRef;
    this.oFocusDomRef = this.oGetFocusDomRef();
    this.updateAttributes();
    this.updateEvents();
    this.initializeDataTip();
}
;
UCF_Control.prototype.destroy = function() {
    this.oFocusDomRef = null ;
    this.removeDataTip();
}
;
UCF_Control.prototype.reconnectToDom = function() {
    var oDomRef = UCF_DomUtil.$(this.sId);
    this.oParentControl = null ;
    this.setDefaultValues();
    this.connectToDom(oDomRef);
}
;
UCF_Control.prototype.bDoKeepAlive = function() {
    var oNewDomRef = UCF_DomUtil.$(this.sId);
    return this.bKeepAlive && oNewDomRef;
}
;
UCF_Control.prototype.updateAttributes = function() {
    var sAttributes = this.oDomRef.getAttribute("lsdata"), sName;
    if (sAttributes == null  || sAttributes == "")
        return;
    eval("var mAttributes = " + sAttributes);
    for (var i in mAttributes) {
        sName = this.aAttributeNames[i];
        this[sName] = mAttributes[i];
    }
}
;
UCF_Control.prototype.updateEvents = function() {
    var sEvents = this.oDomRef.getAttribute("lsevents");
    if (sEvents == null )
        return;
    eval("this.mEvents = " + sEvents);
}
;
UCF_Control.prototype.addDelegate = function(oDelegate) {
    if (this.aDelegates == null )
        this.aDelegates = [];
    this.aDelegates.push(oDelegate);
}
;
UCF_Control.prototype.removeDelegate = function(oDelegate) {
    if (!this.aDelegates)
        return;
    for (var i = 0; i < this.aDelegates.length; i++) {
        if (this.aDelegates[i] == oDelegate) {
            this.aDelegates.splice(i, 1);
            return;
        }
    }
}
;
UCF_Control.prototype.aGetDelegates = function() {
    return this.aDelegates;
}
;
UCF_Control.prototype.initializeDataTip = function() {
    this.oDataTip = this.oGetDataTipById(this.sId);
    if (this.oDataTip) {
        this.oDataTip.setOpenerRef(this.oDomRef);
        this.addDelegate(this.oDataTip);
    }
}
;
UCF_Control.prototype.createDataTip = function() {
    var oDataTip = this.oLS.oControlFactory.oCreateControl("UCF_DataTip", this.sId + "-dtip");
    oDataTip.render(this.sId, this.oLS);
    this.initializeDataTip(this.sId);
    return this.oDataTip;
}
;
UCF_Control.prototype.removeDataTip = function() {
    if (this.oDataTip) {
        this.oDataTip.remove();
        this.oDataTip = null ;
    }
}
;
UCF_Control.prototype.oGetDataTipById = function(sId) {
    var oDataTipRef = UCF_DomUtil.$(sId + "-dtip");
    return (oDataTipRef == null ) ? null  : this.oLS.oControlFactory.oGetControlByDomRef(oDataTipRef, true);
}
;
UCF_Control.prototype.attachBrowserEvent = function(sName, oDomRef) {
    this.oLS.oBrowserWindow.attachBrowserEvent(sName, oDomRef);
}
;
UCF_Control.prototype.detachBrowserEvent = function(sName, oDomRef) {
    this.oLS.oBrowserWindow.detachBrowserEvent(sName, oDomRef);
}
;
UCF_Control.prototype.attachLSEvent = function(iEvent, sFunction) {
    this.oLS.attachEvent(iEvent, this, sFunction);
}
;
UCF_Control.prototype.detachLSEvent = function(iEvent) {
    this.oLS.detachEvent(iEvent, this);
}
;
UCF_Control.prototype.fireSemanticEvent = function(sControl, sName, mParameters, bDelay, bMarkDirty, bSyncExecution) {
    if (this.mEvents[sName]) {
        var oSemanticEvent = new (UCF_ClassLoader.oGetClass("UCF_SemanticEvent"))(sControl,sName,mParameters,this.mEvents[sName]);
        if (bDelay)
            oSemanticEvent.setDelay(bDelay);
        if (bSyncExecution)
            oSemanticEvent.setSyncExecution(bSyncExecution);
        if (bMarkDirty)
            this.oLS.markDirty(true);
        if (oSemanticEvent.bIsCompositeEvent()) {
            for (var oControl = this.oGetParent(); oControl; oControl = oControl.oGetParent()) {
                if (oControl.handleCompositeEvent) {
                    oControl.handleCompositeEvent(this, oSemanticEvent);
                    return;
                }
            }
        }
        oSemanticEvent.setForm(this.oGetQueueForm());
        if (this.mEvents[sName][0] && this.mEvents[sName][0].ClientListener && typeof (this.mEvents[sName][0].ClientListener) == "string") {
            var sClientListener = this.mEvents[sName][0].ClientListener;
            this.mEvents[sName][0].ClientListener = eval("result=this.oLS.oGetRenderManager().fGetHandlerFunction('" + sClientListener + "');");
        }
        if (this.oPendingRequest) {
            this.oPendingRequest.addSemanticEvent(oSemanticEvent);
        } else {
            this.oLS.processSemanticEvent(oSemanticEvent);
        }
    } else {}
}
;
UCF_Control.prototype.oGetControlById = function(sId) {
    return this.oLS.oControlFactory.oGetControlById(sId);
}
;
UCF_Control.prototype.oGetControlByDomRef = function(oDomRef, bCreate) {
    return this.oLS.oControlFactory.oGetControlByDomRef(oDomRef, bCreate);
}
;
UCF_Control.prototype.sGetId = function(oDomRef) {
    return this.sId;
}
;
UCF_Control.prototype.oGetParent = function() {
    if (!this.oParentControl) {
        this.oParentControl = this.oFindParent(this.oRootRef);
    }
    return this.oParentControl;
}
;
UCF_Control.prototype.oGetFocusDomRef = function() {
    if (this.oDomRef.getAttribute("ti") == "0") {
        return this.oDomRef;
    } else {
        if (this.oRootRef.getAttribute("ti") == "0") {
            return this.oRootRef;
        }
    }
    return null ;
}
;
UCF_Control.prototype.oFindParent = function(oDomRef) {
    var oParentRef = oDomRef.parentNode, oParentControl;
    while (oParentRef && oParentRef.getAttribute && oParentRef != document.body) {
        if (oParentRef.getAttribute("ct")) {
            oParentControl = this.oLS.oControlFactory.oGetControlByDomRef(oParentRef, true);
            if (oParentControl != null ) {
                return oParentControl;
            }
        }
        oParentRef = oParentRef.parentNode;
    }
    return null ;
}
;
UCF_Control.prototype.oGetObjectRect = function(oDomRef) {
    return UCF_DomUtil.oGetObjectRect(oDomRef);
}
;
UCF_Control.prototype.oGetFirstFocusableChild = function() {
    var oDomRef = this.oRootRef;
    var oControl = this.oGetFirstFocusableChildRecursive(oDomRef);
    return oControl;
}
;
UCF_Control.prototype.oGetFirstFocusableChildRecursive = function(oDomRef) {
    if (!oDomRef || !UCF_DomUtil.bIsVisible(oDomRef))
        return null ;
    var aChildren = oDomRef.childNodes;
    if (!aChildren)
        return null ;
    for (var i = 0; i < aChildren.length; i++) {
        var oTmp = aChildren.item(i);
        if (oTmp.nodeType == 1 && UCF_DomUtil.bIsVisible(oTmp)) {
            if (oTmp.getAttribute("ct")) {
                var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oTmp, true);
                if (oControl && oControl.bIsFocusable()) {
                    return oControl;
                }
            }
            var oControl = this.oGetFirstFocusableChildRecursive(oTmp);
            if (oControl) {
                return oControl;
            }
        }
    }
    return null ;
}
;
UCF_Control.prototype.oGetLastFocusableChild = function() {
    var oDomRef = this.oRootRef;
    var oControl = this.oGetLastFocusableChildRecursive(oDomRef);
    return oControl;
}
;
UCF_Control.prototype.oGetLastFocusableChildRecursive = function(oDomRef) {
    if (!oDomRef || !UCF_DomUtil.bIsVisible(oDomRef))
        return null ;
    var aChildren = oDomRef.childNodes;
    if (!aChildren)
        return null ;
    for (var i = aChildren.length - 1; i >= 0; i--) {
        var oTmp = aChildren.item(i);
        if (oTmp.nodeType == 1 && UCF_DomUtil.bIsVisible(oTmp)) {
            if (oTmp.getAttribute("ct")) {
                var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oTmp, true);
                if (oControl && oControl.bIsFocusable()) {
                    return oControl;
                }
            }
            var oTmp = this.oGetLastFocusableChildRecursive(oTmp);
            if (oTmp != null ) {
                return oTmp;
            }
        }
    }
    return null ;
}
;
UCF_Control.prototype.oGetNextFocusableControl = function() {
    var oControl = this.oGetNextFocusableControlRecursive(this.oRootRef);
    if (!oControl)
        this.bIsLastControl = true;
    return oControl;
}
;
UCF_Control.prototype.oGetNextFocusableControlRecursive = function(oDomRef) {
    if (!oDomRef || oDomRef == this.oLS.oGetRootRef())
        return null ;
    while (oDomRef.nextSibling) {
        oDomRef = oDomRef.nextSibling;
        if (oDomRef.nodeType != 1 || !UCF_DomUtil.bIsVisible(oDomRef))
            continue;if (oDomRef.getAttribute("ct")) {
            var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oDomRef, true);
            if (oControl && oControl.bIsFocusable()) {
                return oControl;
            }
        }
        var oControl = this.oGetFirstFocusableChildRecursive(oDomRef);
        if (oControl)
            return oControl;
    }
    if (oDomRef.parentNode != null ) {
        var oControl = this.oGetNextFocusableControlRecursive(oDomRef.parentNode);
        if (oControl)
            return oControl;
    }
    return null ;
}
;
UCF_Control.prototype.oGetPreviousFocusableControl = function() {
    var oControl = this.oGetPreviousFocusableControlRecursive(this.oRootRef);
    if (!oControl)
        this.bIsFirstControl = true;
    return oControl;
}
;
UCF_Control.prototype.oGetPreviousFocusableControlRecursive = function(oDomRef) {
    if (!oDomRef || oDomRef == this.oLS.oGetRootRef())
        return null ;
    while (oDomRef.previousSibling) {
        oDomRef = oDomRef.previousSibling;
        if (oDomRef.nodeType != 1 || !UCF_DomUtil.bIsVisible(oDomRef))
            continue;if (oDomRef.getAttribute("ct")) {
            var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oDomRef, true);
            if (oControl && oControl.bIsFocusable()) {
                return oControl;
            }
        }
        var oControl = this.oGetLastFocusableChildRecursive(oDomRef);
        if (oControl)
            return oControl;
    }
    if (oDomRef.parentNode != null ) {
        if (oDomRef.parentNode.getAttribute("ct")) {
            var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oDomRef.parentNode, true);
            if (oControl && oControl.bIsFocusable()) {
                return oControl;
            }
        }
        var oControl = this.oGetPreviousFocusableControlRecursive(oDomRef.parentNode);
        if (oControl)
            return oControl;
    }
    return null ;
}
;
UCF_Control.prototype.oGetQueueForm = function() {
    var oControl = this;
    while (oControl != null ) {
        if (UCF_JsUtil.bInstanceOf(oControl, "UCF_Form") && oControl.bHasEventQueue) {
            break;
        }
        oControl = oControl.oGetParent();
    }
    return oControl;
}
;
UCF_Control.prototype.focusFirstChildControl = function() {
    var oFirstControl = this.oGetFirstFocusableChild();
    if (oFirstControl) {
        oFirstControl.focus();
        return true;
    }
    return false;
}
;
UCF_Control.prototype.focusLastChildControl = function() {
    var oLastControl = this.oGetLastFocusableChild();
    if (oLastControl) {
        oLastControl.focus();
        return true;
    }
    return false;
}
;
UCF_Control.prototype.focusNextControl = function() {
    var oNextControl = this.oGetNextFocusableControl();
    if (oNextControl) {
        oNextControl.moveFocus();
        return true;
    }
    return false;
}
;
UCF_Control.prototype.focusPreviousControl = function() {
    var oPreviousControl = this.oGetPreviousFocusableControl();
    if (oPreviousControl) {
        oPreviousControl.moveFocus();
        return true;
    }
    return false;
}
;
UCF_Control.prototype.bIsFocusable = function() {
    return ( this.oFocusDomRef != null ) ;
}
;
UCF_Control.prototype.bIsValid = function() {
    var oDomRef = UCF_DomUtil.$(this.sId);
    return ( oDomRef == this.oDomRef) ;
}
;
UCF_Control.prototype.bIsVisible = function() {
    if (!this.bIsValid())
        return false;
    return UCF_DomUtil.bIsVisible(this.oRootRef, true);
}
;
UCF_Control.prototype.focus = function() {
    if (!this.bIsVisible())
        return;
    var oDomRef = this.oFocusDomRef;
    if (!oDomRef)
        oDomRef = this.oDomRef;
    if (oDomRef && UCF_DomUtil.bIsVisible(this.oRootRef, true)) {
        var iTabIndex = UCF_DomUtil.iGetTabIndex(oDomRef);
        if (!UCF_DomUtil.bHasTabIndex(oDomRef)) {
            this.addForcedFocus(oDomRef);
        }
        UCF_DomUtil.focusDomElement(oDomRef);
    }
}
;
UCF_Control.prototype.addForcedFocus = function(oDomRef) {
    this.bTabIndexSet = true;
    UCF_DomUtil.setTabIndex(oDomRef, 0);
    var oControl = this;
    this._forwardBlur = function(oDomEvent) {
        oControl.removeForcedFocus(oDomEvent.srcElement || oDomEvent.target)
    }
    ;
    UCF_DomUtil.attachEvent(oDomRef, "blur", this._forwardBlur)
}
;
UCF_Control.prototype.removeForcedFocus = function(oDomRef) {
    UCF_DomUtil.resetTabIndex(oDomRef);
    UCF_DomUtil.detachEvent(oDomRef, "blur", this._forwardBlur)
}
;
UCF_Control.prototype.moveFocus = function() {
    UCF_JsUtil.delayedCall(0, this, "focus");
}
;
UCF_Control.prototype.refocus = function(oDomRef) {
    if (this.oLS.oSystem.bIs508) {
        var oSpan = UCF_DomUtil.$("ur-accfocus");
        if (oSpan == null ) {
            oSpan = document.createElement("span");
            oSpan.setAttribute("id", "ur-accfocus");
            oSpan.style.position = "absolute";
            document.getElementsByTagName("BODY").item(0).appendChild(oSpan);
            oSpan = UCF_DomUtil.$("ur-accfocus");
        }
        oSpan.tabIndex = "2";
        oSpan.focus();
        if (oDomRef)
            oDomRef.focus();
        else
            this.focus();
        oSpan.tabIndex = "-1";
    }
}
;
UCF_Control.prototype.onlsblur = function(oBrowserEvent) {}
;
UCF_Control.prototype.collectFocusInfo = function(oFocusInfo) {}
;
UCF_Control.prototype.applyFocusInfo = function(oFocusInfo) {}
;
UCF_Control.prototype.handleSkipForward = function(oBrowserEvent) {
    var oDomRef = UCF_DomUtil.oGetNextSibling(this.oRootRef, true)
      , oResult = null 
      , oParent = this.oGetParent();
    if (oParent && oParent.focusNextCellControl) {
        oParent.focusNextCellControl(oBrowserEvent);
        return;
    }
    while (oDomRef != null ) {
        oResult = UCF_DomUtil.oGetTabbableElementForward(oDomRef, true);
        if (!this.bIsEndContainerDomRef(oResult)) {
            if (oResult && UCF_DomUtil.bDomElementFocused(oResult)) {
                oBrowserEvent.cancelBubble();
                oBrowserEvent.cancel();
                break;
            }
        }
        oDomRef = UCF_DomUtil.oGetNextSibling(oResult, true);
    }
}
;
UCF_Control.prototype.handleSkipBack = function(oBrowserEvent) {
    var oDomRef = UCF_DomUtil.oGetPreviousSibling(this.oRootRef, true)
      , oResult = null 
      , oParent = this.oGetParent();
    if (oParent && oParent.focusPreviousCellControl) {
        oParent.focusPreviousCellControl(oBrowserEvent);
        return;
    }
    while (oDomRef != null ) {
        oResult = UCF_DomUtil.oGetTabbableElementBackward(oDomRef, true);
        if (!this.bIsEndContainerDomRef(oResult)) {
            if (oResult && UCF_DomUtil.bDomElementFocused(oResult)) {
                oBrowserEvent.cancelBubble();
                oBrowserEvent.cancel();
                break;
            }
        }
        oDomRef = UCF_DomUtil.oGetPreviousSibling(oResult, true);
    }
}
;
UCF_Control.prototype.bIsEndContainerDomRef = function(oDomRef) {
    return this.oLS.oSystem.bIs508 && oDomRef && oDomRef.getAttribute && ((oDomRef.getAttribute("id") && oDomRef.getAttribute("id").indexOf("-end") == oDomRef.getAttribute("id").length - 4) || (oDomRef.getAttribute("tp") && oDomRef.getAttribute("tp") == "END"));
}
;
UCF_Control.prototype.setDefaultButtonId = function(sDefaultButtonId) {
    if (!sDefaultButtonId) {
        this.oDefaultButton = null ;
        return;
    }
    var oDefaultButton = this.oLS.oControlFactory.oGetControlById(sDefaultButtonId);
    if (UCF_JsUtil.bInstanceOf(oDefaultButton, "UCF_Button")) {
        this.oDefaultButton = oDefaultButton;
    }
}
;
UCF_Control.prototype.bHasEnterHotkey = function() {
    if (this.sHotkeysId == null  || this.sHotkeysId == '')
        return false;
    var oHotkeys = this.oGetControlById(this.sHotkeysId);
    if (oHotkeys != null  && oHotkeys.getHotkey(UCF_KeyCodes.ENTER, false, false, false))
        return true;
    else
        return false;
}
;
UCF_Control.prototype.markDirty = function() {
    this.oLS.markDirty();
}
;
UCF_Control.prototype.onlscontainerfocus = function(oBrowserEvent) {
    if (oBrowserEvent.oGetData().bSkipDefaultButtonHandling)
        return;
    this.oLS.highlightDefaultButton(null );
    if (this.bHasEnterHotkey()) {
        oBrowserEvent.oGetData().bSkipDefaultButtonHandling = true;
    }
    if (this.bIgnoreDefaultButton) {
        oBrowserEvent.oGetData().bSkipDefaultButtonHandling = true;
    } else if (this.oDefaultButton) {
        this.oLS.highlightDefaultButton(this.oDefaultButton);
        oBrowserEvent.oGetData().bSkipDefaultButtonHandling = true;
    }
}
;
UCF_Control.prototype.getAccControlName = function() {
    var oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_AccessibilityHelper"))(this.oLS)
      , sText = "";
    oAccessibilityHelper.setControlType(this.oDomRef.getAttribute("ct"));
    sText = oAccessibilityHelper.sGetControlTypeShortText();
    return sText ? sText : this.oLS.sGetText("SAPUR_TYPE_UNKNOWN");
}
;
UCF_Control.prototype.onlsacchierarchy = function(oBrowserEvent) {
    var iKey = oBrowserEvent.iKeyCode()
      , sText = "";
    oBrowserEvent.cancelBubble();
    oBrowserEvent.cancel();
    if (iKey == UCF_KeyCodes.V) {
        oParent = this.oGetParent();
        while (oParent && !oParent.onlsaccessibility) {
            oParent = oParent.oGetParent();
        }
        if (oParent)
            sText = this.oLS.sGetText("SAPUR_PARENT") + " " + oParent.getAccControlName();
        else
            sText = this.oLS.sGetText("SAPUR_NO_PARENT");
    } else {
        sText = this.sGetAccChildren(oBrowserEvent);
    }
    if (sText != "")
        alert(sText);
}
;
UCF_Control.prototype.sGetAccChildren = function() {
    var aAccChildren = this.aGetAccChildrenRecursive(this.oDomRef, new Array())
      , sText = this.getAccControlName();
    if (sText != "")
        sText += ": ";
    return sText + this.sGetAccChildrenText(aAccChildren);
}
;
UCF_Control.prototype.sGetAccChildrenText = function(aAccChildren) {
    var aSumChildren = new Array()
      , sText = this.oLS.sGetText("SAPUR_CHILDREN") + "\n\n";
    if (aAccChildren == null  || aAccChildren.length == 0)
        return this.oLS.sGetText("SAPUR_NO_CHILDREN");
    for (var i = 0; i < aAccChildren.length; i++) {
        var sControlName = aAccChildren[i].getAccControlName();
        if (sControlName) {
            if (aSumChildren[sControlName] != undefined) {
                aSumChildren[sControlName] = aSumChildren[sControlName] + 1;
            } else {
                aSumChildren[sControlName] = 1;
            }
        }
    }
    for (var i in aSumChildren) {
        sText += aSumChildren[i] + " " + i + "\n";
    }
    return sText;
}
;
UCF_Control.prototype.aGetAccChildrenRecursive = function(oDomRef, aAccChildren) {
    if (!oDomRef || oDomRef.childNodes == null  || !UCF_DomUtil.bIsVisible(oDomRef))
        return null ;
    var aChildren = oDomRef.childNodes;
    for (var i = 0; i < aChildren.length; i++) {
        var oTmp = aChildren[i];
        if (oTmp.nodeType == 1 && UCF_DomUtil.bIsVisible(oTmp)) {
            if (oTmp.getAttribute("ct")) {
                var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oTmp, true);
                if (oControl.onlsaccessibility) {
                    aAccChildren.push(oControl);
                    continue;
                }
            }
            aAccChildren.concat(this.aGetAccChildrenRecursive(oTmp, aAccChildren));
        }
    }
    return aAccChildren;
}
;
UCF_Control.prototype.onlsenter = function(oBrowserEvent) {
    if (this.bIgnoreDefaultButton || (this.bHasEnterHotkey() && !this.oDefaultButton)) {
        oBrowserEvent.cancelBubble();
        return;
    }
    if (this.oDefaultButton) {
        this.oDefaultButton.onclick(oBrowserEvent);
        oBrowserEvent.cancelBubble();
    }
}
;
UCF_Control.prototype.onselect = function(oBrowserEvent) {
    if (this.bAllowTextSelection) {
        oBrowserEvent.oDomEvent.returnValue = true;
    }
    oBrowserEvent.cancelBubble();
}
;
UCF_Control.prototype.onselectstart = function(oBrowserEvent) {
    if (this.bAllowTextSelection) {
        oBrowserEvent.oDomEvent.returnValue = true;
    }
    oBrowserEvent.cancelBubble();
}
;
UCF_Control.prototype.sGetDragSourceInfo = function() {
    return null ;
}
;
UCF_Control.prototype.oGetDragParent = function() {
    if (this.sGetDragSourceInfo())
        return this;
    if (this.oGetParent()) {
        return this.oGetParent().oGetDragParent();
    }
    return null ;
}
;
UCF_Control.prototype.initializeHandle = function(oHandleDomRef) {
    if (this.bIsDragHandle) {
        if (this.oGetDragParent()) {
            oHandleDomRef.style.cursor = "move";
            oHandleDomRef.unselectable = true;
            oHandleDomRef.style.mozUserSelect = "none";
            this.oDragHandleDomRef = oHandleDomRef;
        }
    }
}
;
UCF_Control.prototype.notifyLayoutChange = function() {
    this.oLS.oBrowserWindow.notifyLayoutChange();
}
;
UCF_Control.prototype.notifyLayerVisible = function() {
    this.oLS.oBrowserWindow.notifyLayerVisible();
}
;
UCF_Control.prototype.notifyLayerHidden = function() {
    this.oLS.oBrowserWindow.notifyLayerHidden();
}
;
UCF_Control.prototype.onlsdragstart = function(oBrowserEvent) {
    this.createDragDelegate(oBrowserEvent);
}
;
UCF_Control.prototype.onlsdragenter = function(oBrowserEvent) {
    this.createDropDelegate(oBrowserEvent);
}
;
UCF_Control.prototype.createDragDelegate = function(oBrowserEvent) {}
;
UCF_Control.prototype.createDropDelegate = function(oBrowserEvent) {}
;
function UCF_KeyNames() {}
;UCF_KeyNames = {
    "8": "BACKSPACE",
    "9": "TAB",
    "12": "NUMPAD_5",
    "13": "ENTER",
    "16": "SHIFT",
    "17": "CONTROL",
    "18": "ALT",
    "19": "BREAK",
    "20": "CAPS_LOCK",
    "27": "ESCAPE",
    "32": "SPACE",
    "33": "PAGE_UP",
    "34": "PAGE_DOWN",
    "35": "END",
    "36": "HOME",
    "37": "ARROW_LEFT",
    "38": "ARROW_UP",
    "39": "ARROW_RIGHT",
    "40": "ARROW_DOWN",
    "44": "PRINT",
    "45": "INSERT",
    "46": "DELETE",
    "48": "0",
    "49": "1",
    "50": "2",
    "51": "3",
    "52": "4",
    "53": "5",
    "54": "6",
    "55": "7",
    "56": "8",
    "57": "9",
    "65": "A",
    "66": "B",
    "67": "C",
    "68": "D",
    "69": "E",
    "70": "F",
    "71": "G",
    "72": "H",
    "73": "I",
    "74": "J",
    "75": "K",
    "76": "L",
    "77": "M",
    "78": "N",
    "79": "O",
    "80": "P",
    "81": "Q",
    "82": "R",
    "83": "S",
    "84": "T",
    "85": "U",
    "86": "V",
    "87": "W",
    "88": "X",
    "89": "Y",
    "90": "Z",
    "91": "WINDOWS",
    "93": "CONTEXT_MENU",
    "94": "TURN_OFF",
    "95": "SLEEP",
    "96": "NUMPAD_0",
    "97": "NUMPAD_1",
    "98": "NUMPAD_2",
    "99": "NUMPAD_3",
    "100": "NUMPAD_4",
    "101": "NUMPAD_5",
    "102": "NUMPAD_6",
    "103": "NUMPAD_7",
    "104": "NUMPAD_8",
    "105": "NUMPAD_9",
    "106": "NUMPAD_ASTERISK",
    "107": "NUMPAD_PLUS",
    "109": "NUMPAD_MINUS",
    "110": "NUMPAD_COMMA",
    "111": "NUMPAD_SLASH",
    "112": "F1",
    "113": "F2",
    "114": "F3",
    "115": "F4",
    "116": "F5",
    "117": "F6",
    "118": "F7",
    "119": "F8",
    "120": "F9",
    "121": "F10",
    "122": "F11",
    "123": "F12",
    "144": "NUM_LOCK",
    "145": "SCROLL_LOCK",
    "186": "OPEN_BRACKET",
    "187": "PLUS",
    "188": "COMMA",
    "189": "SLASH",
    "190": "DOT",
    "191": "PIPE",
    "192": "SEMICOLON",
    "219": "MINUS",
    "220": "GREAT_ACCENT",
    "221": "EQUALS",
    "222": "SINGLE_QUOTE",
    "226": "BACKSLASH"
};
function UCF_ControlFactory(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.mControls = {};
}
;UCF_ControlFactory.prototype = new UCF_Object();
UCF_ControlFactory.prototype.M_TYPES = {
    ACR: "UCF_Accordion",
    ACRI: "UCF_AccordionItem",
    B: "UCF_Button",
    BRC: "UCF_BreadCrumb",
    BRCI: "UCF_BreadCrumbItem",
    Calculator: "UCF_Calculator",
    CP: "UCF_Caption",
    SC: "UCF_ScrollContainer",
    IT: "UCF_InputTokenizer",
    C: "UCF_CheckBox",
    CG: "UCF_CheckBoxGroup",
    RM: "UCF_RoadMap",
    RMI: "UCF_RoadMapItem",
    RI: "UCF_RatingIndicator",
    IMG: "UCF_Image",
    IMGM: "UCF_ImageMap",
    IMGMA: "UCF_ImageMapArea",
    MNB: "UCF_MenuBar",
    MNBI: "UCF_MenuBarItem",
    ML: "UCF_MatrixLayout",
    PHM: "UCF_PageHeader",
    PG: "UCF_Paginator",
    PHI: "UCF_PhaseIndicator",
    PRI: "UCF_ProgressIndicator",
    PHII: "UCF_PhaseIndicatorItem",
    CXP: "UCF_ContextualPanel",
    HCNP: "UCF_HorizontalContextualPanel",
    HCNPI: "UCF_HorizontalContextualPanelItem",
    HCNPMI: "UCF_HorizontalContextualPanelMenuItem",
    FRA: "UCF_FreeContextualArea",
    I: "UCF_InputField",
    IHB: "UCF_InputFieldHelpButton",
    II: "UCF_InputFieldInplaceEdit",
    NL: "UCF_NavigationList",
    NLI: "UCF_NavigationListItem",
    NLG: "UCF_NavigationListGroup",
    CB: "UCF_ComboBox",
    CBI: "UCF_ComboBoxInplaceEdit",
    CBS: "UCF_SuggestBox",
    CBSI: "UCF_SuggestBoxInplaceEdit",
    CBILB: "UCF_ComboBoxListBox",
    CBSLB: "UCF_SuggestBoxListBox",
    ILBS: "UCF_SelectListBox",
    ILBM: "UCF_SelectListBox",
    ILBAI: "UCF_ItemListBoxActionItem",
    ILBI: "UCF_ItemListBoxItem",
    ST: "UCF_SapTable",
    STCS: "UCF_SapTableCS",
    SCB: "UCF_Scrollbar",
    TS: "UCF_TabStrip",
    TSITM: "UCF_TabStripItem",
    VS: "UCF_ViewSwitch",
    VSI: "UCF_ViewSwitchItem",
    TV: "UCF_TextView",
    TXB: "UCF_TextBar",
    HTV: "UCF_HTMLTextView",
    FOR: "UCF_Form",
    POMN: "UCF_PopupMenu",
    POMNI: "UCF_PopupMenuItem",
    L: "UCF_Label",
    LP: "UCF_LoadingPlaceHolder",
    LN: "UCF_Link",
    LNC: "UCF_LinkChoice",
    SP: "UCF_Splitter",
    SPC: "UCF_SplitterCol",
    SPR: "UCF_SplitterRow",
    SPCE: "UCF_SplitterCell",
    SpITS: "UCF_SplitterITS",
    SY: "UCF_System",
    DatePicker: "UCF_DatePicker",
    POTRG: "UCF_PopupTrigger",
    R: "UCF_RadioButton",
    RG: "UCF_RadioButtonGroup",
    TRI: "UCF_TriStateCheckBox",
    FU: "UCF_FileUpload",
    TY: "UCF_Tray",
    DT: "UCF_DataTip",
    CAL_YEAR: "UCF_CalendarYearView",
    CAL_MONTH: "UCF_CalendarMonthView",
    CAL_DAY: "UCF_CalendarDayView",
    CAL_ENTRY: "UCF_CalendarEntry",
    CAL_RH: "UCF_CalendarRowHeader",
    PCTIT: "UCF_PatternContainerTitle",
    PCTAB: "UCF_PatternContainerTab",
    PCTABITM: "UCF_PatternContainerTabItem",
    PCSEQ: "UCF_PatternContainerSequence",
    PCSEQITM: "UCF_PatternContainerSequenceItem",
    PCI: "UCF_PatternContainerIconButton",
    PL: "UCF_PageLayout",
    PI: "UCF_PopIn",
    PRTHW: "UCF_PortalHeaderlessWindow",
    PRTHWP: "UCF_PortalHeaderlessWindowParameter",
    PortalPage: "UCF_PortalPage",
    DN: "UCF_DateNavigator",
    TE: "UCF_TextEdit",
    TEI: "UCF_TextEditInplaceEdit",
    TGL: "UCF_ToggleLink",
    PW: "UCF_PopupWindow",
    TR: "UCF_Tree",
    TRN: "UCF_TreeNode",
    G: "UCF_Group",
    SHC: "UCF_Shuttle",
    RTE: "UCF_RichTextEdit",
    T: "UCF_Toolbar",
    MB: "UCF_MessageBar",
    IL: "UCF_ItemList",
    ILI: "UCF_ItemListItem",
    IF: "UCF_Iframe",
    AX: "UCF_ActiveXContainer",
    AP: "UCF_AppletContainer",
    FLC: "UCF_FlashContainer",
    SLC: "UCF_SilverlightContainer",
    PDF: "UCF_PDFContainer",
    IFO: "UCF_InteractiveForm",
    IFA: "UCF_InteractiveFormAbap",
    TTR: "UCF_TimeTrigger",
    MTR: "UCF_MessageTrigger",
    CL: "UCF_ColumnLayout",
    GM: "UCF_GeoMap",
    LA: "UCF_LoadingAnimation",
    VC: "UCF_ValueComparison",
    LEG: "UCF_Legend",
    FTV: "UCF_FormattedTextView",
    PAGE: "UCF_Page",
    DSI: "UCF_DragSourceInfo",
    DTI: "UCF_DropTargetInfo",
    DRT: "UCF_DropTarget",
    SL: "UCF_SingleColumnLayout",
    MG: "UCF_MeltingGroup",
    TAGCLOUD: "UCF_TagCloud",
    TAGCLOUDITEM: "UCF_TagCloudItem",
    CO: "UCF_Container",
    GL: "UCF_GridLayout",
    GLC: "UCF_GridLayoutCell",
    MLC: "UCF_MatrixLayoutCell",
    HKC: "UCF_Hotkeys",
    SH: "UCF_SectionHeader",
    THSL: "UCF_ThresholdSlider",
    THP: "UCF_ThresholdPoint",
    TSW: "UCF_TrackSwitch",
    W: "UCF_WebWidget",
    WA: "UCF_WebWidgetParameter",
    LSHP: "UCF_LShape",
    LSHPTLN: "UCF_LShapeTLN",
    LSHPTLNI: "UCF_LShapeTLNItem",
    LSHPDNLINK: "UCF_LShapeDNLink",
    LSHPDN: "UCF_LShapeDN",
    WR: "UCF_Wire",
    INPL: "UCF_InplaceEdit",
    PRTMENUBAR: "UCF_PortalMenuBar",
    PRTMENUBARITEM: "UCF_PortalMenuBarItem",
    PRTTREE: "UCF_PortalTree",
    PRTTREENODE: "UCF_PortalTreeNode",
    PRTBUTTON: "UCF_PortalButton",
    PRTPOPUPMENU: "UCF_PortalPopupMenu",
    PRTPOPUPMENUITEM: "UCF_PortalPopupMenuItem",
    BIIMGSLDR: "UCF_BiImageSlider",
    BIFRAME: "UCF_BiFrame",
    IHUB: "UCF_IHub",
    IHUBEVENTING: "UCF_IHubEventing",
    IHUBNAVIGATION: "UCF_IHubNavigation",
    IHUBWORKPROTECT: "UCF_IHubWorkProtect",
    IHUBLSHAPE: "UCF_IHubLShape",
    IHUBMESSAGING: "UCF_IHubMessaging",
    MSGT: "UCF_MessagingTrigger",
    IHUBLEGACYWDJ: "UCF_IHubLegacyWDJ",
    BIAF: "UCF_BiApplicationFrame",
    HAR: "UCF_HeaderArea",
    CTAR: "UCF_ContentArea",
    P: "UCF_Panel",
    PST: "UCF_PanelStack",
    ACF: "UCF_AcfAdapter",
    SelectionList: "UCF_SelectionList",
    SelectionItem: "UCF_SelectionItem",
    COP: "UCF_ColorPicker",
    COI: "UCF_ColorItem",
    RTT: "UCF_RichTooltip"
};
UCF_ControlFactory.prototype.destroy = function() {
    for (var i in this.mControls) {
        this.mControls[i].destroy();
        delete this.mControls[i];
    }
}
;
UCF_ControlFactory.prototype.oGetControlByDomRef = function(oDomRef, bCreate) {
    var sId = oDomRef.getAttribute("id")
      , sCt = oDomRef.getAttribute("ct");
    if (sId == "" || sId == null  || sCt == "" || sCt == null ) {
        return null ;
    }
    var oControl = this.mControls[sId];
    if (oControl) {
        if (!oControl.bIsValid()) {
            this.purgeControl(oControl);
            oControl = this.mControls[sId];
            if (!UCF_DomUtil.bIsInActiveDom(oDomRef))
                bCreate = false;
        }
    }
    if (!oControl && bCreate) {
        oControl = this.oCreateControlByDomRef(oDomRef);
    }
    return oControl;
}
;
UCF_ControlFactory.prototype.oGetControlById = function(sId) {
    var oControl = this.mControls[sId];
    if (oControl) {
        if (!oControl.bIsValid()) {
            this.purgeControl(oControl);
            oControl = this.mControls[sId];
        }
    }
    if (!oControl) {
        oControl = this.oCreateControlById(sId);
    }
    return oControl;
}
;
UCF_ControlFactory.prototype.oGetControl = function(sClassName, sId) {
    var oControl = this.mControls[sId];
    if (!oControl) {
        oControl = this.oCreateControl(sClassName, sId);
    }
    return oControl;
}
;
UCF_ControlFactory.prototype.oGetCurrentControlsByClassName = function(sClassName, bSearchSuperClasses) {
    var aControlList = [];
    for (var n in this.mControls) {
        var oControl = this.mControls[n];
        if (!oControl.sClassName)
            continue;if (!bSearchSuperClasses) {
            if (oControl.sClassName == sClassName) {
                aControlList.push(oControl);
            }
        } else {
            if (UCF_JsUtil.bInstanceOf(oControl, sClassName)) {
                aControlList.push(oControl);
            }
        }
    }
    return aControlList;
}
;
UCF_ControlFactory.prototype.oCreateControlByDomRef = function(oDomRef) {
    var sId = oDomRef.getAttribute("id")
      , sCt = oDomRef.getAttribute("ct");
    if (sId == "" || sId == null  || sCt == "" || sCt == null ) {
        return null ;
    }
    var sType = this.M_TYPES[sCt], oControl, oClass;
    if (!sType) {
        if (sCt.indexOf(".") > -1) {
            sType = sCt;
        } else {
            sType = "UCF_Control";
        }
    }
    oClass = UCF_ClassLoader.oGetClass(sType);
    oControl = new oClass(oDomRef,this.oLS);
    this.mControls[oDomRef.getAttribute("id")] = oControl;
    if (sCt.indexOf(".") > -1) {
        var iClassStart = sType.lastIndexOf('.');
        oControl.sClassName = "UCF_" + sType.substr(iClassStart + 1);
    } else {
        oControl.sClassName = sType;
    }
    return oControl;
}
;
UCF_ControlFactory.prototype.oCreateControlById = function(sId) {
    var oDomRef = null 
      , oControl = null 
      , iRootIndex = sId.indexOf("-r");
    if (iRootIndex > 0) {
        sId = sId.substring(0, sId.length - iRootIndex);
    }
    oDomRef = this.oGetControlDomRef(sId);
    if (oDomRef) {
        oControl = this.oCreateControlByDomRef(oDomRef);
    }
    return oControl;
}
;
UCF_ControlFactory.prototype.oCreateControl = function(sClassName, sId) {
    var oClass = UCF_ClassLoader.oGetClass(sClassName);
    oControl = new oClass(null ,this.oLS,sId);
    this.mControls[sId] = oControl;
    oControl.sClassName = sClassName;
    return oControl;
}
;
UCF_ControlFactory.prototype.oGetControlDomRef = function(sId) {
    var oDomRef = UCF_DomUtil.$(sId) || UCF_DomUtil.$(sId + "-r");
    if (oDomRef && oDomRef.firstChild && oDomRef.firstChild.tagName == "XMP") {
        var oXMPRef = oDomRef.firstChild
          , bIsControl = oXMPRef.getAttribute("ct");
        if (!bIsControl) {
            var bIsPlaceHolder = oXMPRef.getAttribute("ph");
            if (bIsPlaceHolder) {
                var oContentRef = document.createElement("div");
                oContentRef.style.position = "absolute";
                oContentRef.style.top = "-10000px";
                oContentRef.id = sId + "-ph";
                this.oLS.oGetStaticAreaRef().appendChild(oContentRef);
                var sMarkup = oXMPRef.innerHTML;
                var iCt = sMarkup.indexOf('ct=\"AP\"');
                var iLsevents = sMarkup.indexOf("lsevents=");
                var iTi = sMarkup.indexOf("ti=");
                if (iCt >= 0 && iLsevents < 0 && iTi < 0) {
                    sMarkup = sMarkup.substring(0, iCt + 7) + " ti=\"0\" lsevents={} " + sMarkup.substring(iCt + 7);
                }
                oContentRef.innerHTML = sMarkup;
            } else {
                if (oDomRef.childNodes.length == 1) {
                    oDomRef.innerHTML = oXMPRef.innerHTML;
                } else {
                    var oTemp = document.createElement("div");
                    oTemp.innerHTML = oXMPRef.innerHTML;
                    var oFragment = document.createDocumentFragment();
                    while (oTemp.firstChild) {
                        oFragment.appendChild(oTemp.firstChild);
                    }
                    oDomRef.replaceChild(oFragment, oXMPRef);
                }
            }
            return UCF_DomUtil.$(sId);
        }
    }
    return oDomRef;
}
;
UCF_ControlFactory.prototype.purgeControls = function() {
    var mControls = this.mControls, oControl;
    for (var i in mControls) {
        oControl = mControls[i];
        this.purgeControl(oControl);
    }
}
;
UCF_ControlFactory.prototype.purgeControl = function(oControl) {
    if (!oControl.bIsValid()) {
        if (oControl.bDoKeepAlive()) {
            oControl.reconnectToDom();
        } else {
            oControl.destroy();
            delete this.mControls[oControl.sId];
        }
    }
}
;
UCF_ControlFactory.prototype.bIsControlDomRef = function(oDomRef) {
    if (oDomRef == null  || oDomRef == window || oDomRef == document || oDomRef == document.body) {
        return false;
    }
    var sId = oDomRef.getAttribute("id")
      , sCt = oDomRef.getAttribute("ct");
    if (sId == "" || sId == null  || sCt == "" || sCt == null ) {
        return false;
    }
    return true;
}
;
function UCF_KeyboardHelper() {}
;UCF_KeyboardHelper.bAccessKeyHighlight = false;
UCF_KeyboardHelper.oRootRef = null ;
UCF_KeyboardHelper.sHotkeyValue = function(iKey, bCtrl, bAlt, bShift) {
    var sHotkey = "";
    if (bCtrl) {
        sHotkey = "CTRL_";
        if (bAlt)
            sHotkey = sHotkey + "ALT_";
    } else if (bAlt)
        sHotkey = "ALT_";
    if (bShift)
        sHotkey = sHotkey + "SHIFT_";
    return ( sHotkey + UCF_KeyNames[iKey]) ;
}
;
UCF_KeyboardHelper.bIsValidHotkey = function(iKey, bCtrl, bAlt, bShift) {
    var sHotkey = this.sHotkeyValue(iKey, bCtrl, bAlt, bShift);
    if (sHotkey == "CTRL_F4" && UCF_System.sDevice == "ff1")
        return false;
    if (UCF_HotkeyValues[sHotkey])
        return true;
    else
        return false;
}
;
UCF_KeyboardHelper.showAccessKeys = function() {
    if (!this.bAccessKeyHighlight) {
        UCF_DomUtil.addClass(this.oRootRef, "urHighlightAccessKey");
        this.bAccessKeyHighlight = true;
    }
}
;
UCF_KeyboardHelper.hideAccessKeys = function() {
    if (this.bAccessKeyHighlight) {
        UCF_DomUtil.removeClass(this.oRootRef, "urHighlightAccessKey");
        this.bAccessKeyHighlight = false;
    }
}
;
function UCF_HotkeyValues() {}
;UCF_HotkeyValues = {
    "CTRL_0": true,
    "CTRL_1": true,
    "CTRL_2": true,
    "CTRL_3": true,
    "CTRL_4": true,
    "CTRL_5": true,
    "CTRL_6": true,
    "CTRL_7": true,
    "CTRL_8": true,
    "CTRL_9": true,
    "CTRL_A": true,
    "CTRL_B": true,
    "CTRL_C": true,
    "CTRL_D": true,
    "CTRL_E": true,
    "CTRL_F": true,
    "CTRL_G": true,
    "CTRL_H": true,
    "CTRL_I": true,
    "CTRL_J": true,
    "CTRL_K": true,
    "CTRL_L": true,
    "CTRL_M": true,
    "CTRL_N": true,
    "CTRL_O": true,
    "CTRL_P": true,
    "CTRL_Q": true,
    "CTRL_R": true,
    "CTRL_S": true,
    "CTRL_T": true,
    "CTRL_U": true,
    "CTRL_V": true,
    "CTRL_W": true,
    "CTRL_X": true,
    "CTRL_Y": true,
    "CTRL_Z": true,
    "CTRL_DOT": true,
    "CTRL_COMMA": true,
    "ESCAPE": true,
    "DELETE": true,
    "INSERT": true,
    "ENTER": true,
    "F1": true,
    "F2": true,
    "F3": true,
    "F4": true,
    "F5": true,
    "F6": true,
    "F7": true,
    "F8": true,
    "F9": true,
    "F10": true,
    "F11": true,
    "F12": true,
    "CTRL_F1": true,
    "CTRL_F2": true,
    "CTRL_F3": true,
    "CTRL_F4": true,
    "CTRL_F5": true,
    "CTRL_F6": true,
    "CTRL_F7": true,
    "CTRL_F8": true,
    "CTRL_F9": true,
    "CTRL_F10": true,
    "CTRL_F11": true,
    "CTRL_F12": true,
    "CTRL_SHIFT_0": true,
    "CTRL_SHIFT_1": true,
    "CTRL_SHIFT_2": true,
    "CTRL_SHIFT_3": true,
    "CTRL_SHIFT_4": true,
    "CTRL_SHIFT_5": true,
    "CTRL_SHIFT_6": true,
    "CTRL_SHIFT_7": true,
    "CTRL_SHIFT_8": true,
    "CTRL_SHIFT_9": true,
    "CTRL_SHIFT_A": true,
    "CTRL_SHIFT_B": true,
    "CTRL_SHIFT_C": true,
    "CTRL_SHIFT_D": true,
    "CTRL_SHIFT_E": true,
    "CTRL_SHIFT_F": true,
    "CTRL_SHIFT_G": true,
    "CTRL_SHIFT_H": true,
    "CTRL_SHIFT_I": true,
    "CTRL_SHIFT_J": true,
    "CTRL_SHIFT_K": true,
    "CTRL_SHIFT_L": true,
    "CTRL_SHIFT_M": true,
    "CTRL_SHIFT_N": true,
    "CTRL_SHIFT_O": true,
    "CTRL_SHIFT_P": true,
    "CTRL_SHIFT_Q": true,
    "CTRL_SHIFT_R": true,
    "CTRL_SHIFT_S": true,
    "CTRL_SHIFT_T": true,
    "CTRL_SHIFT_U": true,
    "CTRL_SHIFT_V": true,
    "CTRL_SHIFT_W": true,
    "CTRL_SHIFT_X": true,
    "CTRL_SHIFT_Y": true,
    "CTRL_SHIFT_Z": true,
    "CTRL_SHIFT_F1": true,
    "CTRL_SHIFT_F2": true,
    "CTRL_SHIFT_F3": true,
    "CTRL_SHIFT_F4": true,
    "CTRL_SHIFT_F5": true,
    "CTRL_SHIFT_F6": true,
    "CTRL_SHIFT_F7": true,
    "CTRL_SHIFT_F8": true,
    "CTRL_SHIFT_F9": true,
    "CTRL_SHIFT_F10": true,
    "CTRL_SHIFT_F11": true,
    "CTRL_SHIFT_F12": true,
    "ALT_ARROW_LEFT": true,
    "ALT_ARROW_UP": true,
    "ALT_ARROW_RIGHT": true,
    "ALT_ARROW_DOWN": true
};
function UCF_WaitingEventQueue() {
    UCF_Object.apply(this);
    this.mQueue = [];
    this.bProcessingLock = false;
    this.bRefireLock = false;
}
UCF_WaitingEventQueue.prototype = new UCF_Object();
UCF_WaitingEventQueue.prototype.oEnqueue = function(oSemanticEvent) {
    var sControlId = oSemanticEvent.mGetParameters()["Id"];
    var sControlName = oSemanticEvent.sGetControl();
    var sEventName = oSemanticEvent.sGetName();
    this.mQueue.push(oSemanticEvent);
    return oSemanticEvent;
}
;
UCF_WaitingEventQueue.prototype.oDequeue = function() {
    var oSemanticEvent = this.mQueue.shift();
    var sControlId = oSemanticEvent.mGetParameters()["Id"];
    var sControlName = oSemanticEvent.sGetControl();
    var sEventName = oSemanticEvent.sGetName();
    return oSemanticEvent;
}
;
UCF_WaitingEventQueue.prototype.iGetLength = function() {
    return this.mQueue.length;
}
;
UCF_WaitingEventQueue.prototype.reset = function() {
    this.mQueue = [];
}
;
UCF_WaitingEventQueue.prototype.bIsSyncSubmit = function(oSemanticEvent) {
    var ucfParam = oSemanticEvent.mGetUcfParameters();
    eClientAction = ucfParam["ClientAction"] || "enqueue";
    return ( eClientAction == "submit") ;
}
;
UCF_WaitingEventQueue.prototype.bContainsSyncSubmit = function() {
    for (var i = 0; i < this.mQueue.length; i++) {
        if (this.bIsSyncSubmit(this.mQueue[i])) {
            return true;
        }
    }
    return false;
}
;
UCF_WaitingEventQueue.prototype.bIsProcessingLock = function() {
    return this.bProcessingLock;
}
;
UCF_WaitingEventQueue.prototype.setProcessingLock = function(bLock) {
    this.bProcessingLock = bLock;
}
;
UCF_WaitingEventQueue.prototype.bIsRefireLock = function() {
    return this.bRefireLock;
}
;
UCF_WaitingEventQueue.prototype.setRefireLock = function(bLock) {
    this.bRefireLock = bLock;
}
;
function UCF_Interface(oObject, aMethods) {
    if (!oObject)
        return oObject;
    function fCreateDelegator(oObject, sMethodName) {
        return function() {
            return oObject[sMethodName].apply(oObject, arguments);
        }
        ;
    }
    ;if (!aMethods)
        return;
    var sMethodName;
    for (var i = 0; i < aMethods.length; i++) {
        sMethodName = aMethods[i];
        this[sMethodName] = fCreateDelegator(oObject, sMethodName);
    }
}
function UCF_JsUtil() {}
;UCF_JsUtil.mDelayedCalls = {};
UCF_JsUtil.mIntervalCalls = {};
UCF_JsUtil.iIdCounter = 0;
UCF_JsUtil.sSerialize = function(oObject) {
    var aBuffer = [];
    this.serializeToBuffer(oObject, aBuffer);
    return aBuffer.join("");
}
;
UCF_JsUtil.serializeToBuffer = function(oObject, aBuffer) {
    if (oObject == null )
        return null ;
    switch (typeof (oObject)) {
    case "object":
        if (oObject instanceof Array) {
            aBuffer.push("[");
            for (var i = 0; i < oObject.length; i++) {
                if (i > 0)
                    aBuffer.push(", ");
                this.serializeToBuffer(oObject[i], aBuffer);
            }
            aBuffer.push("]");
        } else {
            aBuffer.push("{");
            var bFirst = true;
            for (var i in oObject) {
                if (typeof (oObject[i]) == "undefined")
                    continue;if (!bFirst)
                    aBuffer.push(", ");
                else
                    bFirst = false;
                this.serializeToBuffer(i, aBuffer);
                aBuffer.push(": ");
                this.serializeToBuffer(oObject[i], aBuffer);
            }
            aBuffer.push("}");
        }
        break;
    case "string":
        aBuffer.push("\"");
        aBuffer.push(oObject.replace(/\\/g, "\\\\").replace(/"/g, "\\\""));
        aBuffer.push("\"");
        break;
    default:
        aBuffer.push(oObject);
    }
}
;
UCF_JsUtil.oDeserialize = function(sObject) {
    var oObject;
    try {
        eval("oObject = " + sObject);
    } catch (e) {
        oObject = null ;
    }
    return oObject;
}
;
UCF_JsUtil.delayedCall = function(iDelay, oObject, sMethodName, aParameters) {
    var sInfo = "";
    if (UCF_System.bClientDebug) {
        var sCallerName = this.sExtractFunctionName(arguments.callee.caller)
          , sClassName = oObject.sClassName;
        if (typeof (oObject) == "function")
            sClassName = this.sExtractFunctionName(oObject);
        if (!sClassName)
            sClassName = "???";
        sInfo = sClassName + "." + sMethodName + " called by " + sCallerName + " after " + iDelay + "ms delay.";
    }
    if (!aParameters)
        aParameters = [];
    var sDelayedCallId = sMethodName + this.sGetUID();
    var sTimeoutId = setTimeout('UCF_JsUtil.callDelayedCallRedirect("' + sDelayedCallId + '")', iDelay);
    this.mDelayedCalls[sDelayedCallId] = {
        oObject: oObject,
        sMethodName: sMethodName,
        aParameters: aParameters,
        sTimeoutId: sTimeoutId,
        sInfo: sInfo
    };
    return sDelayedCallId;
}
;
UCF_JsUtil.clearDelayedCall = function(sDelayedCallId) {
    var oDelayedCall = this.mDelayedCalls[sDelayedCallId];
    if (oDelayedCall) {
        clearTimeout(oDelayedCall.sTimeoutId);
        delete this.mDelayedCalls[sDelayedCallId];
    }
}
;
UCF_JsUtil.callDelayedCallRedirect = function(sDelayedCallId) {
    var oDelayedCall = this.mDelayedCalls[sDelayedCallId];
    if (oDelayedCall) {
        oDelayedCall.oObject[oDelayedCall.sMethodName].apply(oDelayedCall.oObject, oDelayedCall.aParameters);
        delete this.mDelayedCalls[sDelayedCallId];
    }
}
;
UCF_JsUtil.intervalCall = function(iInterval, oObject, sMethodName, aParameters) {
    if (!aParameters)
        aParameters = [];
    var sIntervalCallId = sMethodName + this.sGetUID();
    var sIntervalId = setInterval('UCF_JsUtil.callIntervalCallRedirect("' + sIntervalCallId + '")', iInterval);
    this.mIntervalCalls[sIntervalCallId] = {
        oObject: oObject,
        sMethodName: sMethodName,
        aParameters: aParameters,
        sIntervalId: sIntervalId
    };
    return sIntervalCallId;
}
;
UCF_JsUtil.clearIntervalCall = function(sIntervalCallId) {
    var oIntervalCall = this.mIntervalCalls[sIntervalCallId];
    if (oIntervalCall) {
        clearInterval(oIntervalCall.sIntervalId);
        delete this.mIntervalCalls[sIntervalCallId];
    }
}
;
UCF_JsUtil.callIntervalCallRedirect = function(sIntervalCallId) {
    var oIntervalCall = this.mIntervalCalls[sIntervalCallId];
    if (oIntervalCall) {
        oIntervalCall.oObject[oIntervalCall.sMethodName].apply(oIntervalCall.oObject, oIntervalCall.aParameters);
    }
}
;
UCF_JsUtil.feedMassNotificationFilter = function(iDelay, oCommon, oCallInstance, sCallMethod, aCallParameters) {
    if (oCommon.massNotificationFilterTimer)
        UCF_JsUtil.clearDelayedCall(oCommon.massNotificationFilterTimer);
    oCommon.massNotificationFilterTimer = UCF_JsUtil.delayedCall(iDelay, UCF_JsUtil, "timedMassNotificationFilter", [oCommon, oCallInstance, sCallMethod, aCallParameters]);
}
;
UCF_JsUtil.resetMassNotificationFilter = function(oCommon) {
    if (oCommon.massNotificationFilterTimer)
        UCF_JsUtil.clearDelayedCall(oCommon.massNotificationFilterTimer);
    if ("massNotificationFilterTimer" in oCommon)
        delete oCommon.massNotificationFilterTimer;
}
;
UCF_JsUtil.timedMassNotificationFilter = function(oCommon, oCallInstance, sCallMethod, aCallParameters) {
    UCF_JsUtil.resetMassNotificationFilter(oCommon);
    oCallInstance[sCallMethod].apply(oCallInstance, aCallParameters ? aCallParameters : []);
}
;
UCF_JsUtil.iGetTimeStamp = function() {
    return new Date().getTime();
}
;
UCF_JsUtil.sGetUID = function() {
    return "id" + this.iGetTimeStamp() + this.iIdCounter++;
}
;
UCF_JsUtil.sGetResolvedUrl = function(sUrl, sBaseUrl) {
    this.clearRegExpBackReferences();
    var rHttpUrl = /^(https?:\/\/[a-zA-Z0-9.-]+(:[0-9]+)?)(\/([^\/?]+\/)*)?([^\/?]*)?(\?.*)?$/;
    if (rHttpUrl.test(sUrl))
        return sUrl;
    var bIsAbsolute = rHttpUrl.test(sBaseUrl);
    var sBaseHost = RegExp.$1
      , sBasePath = RegExp.$3;
    if (sUrl.charAt(0) == "/")
        return sBaseHost + sUrl;
    var sResolvedUrl = sBaseHost + sBasePath + sUrl
      , rSelfRef = /(\/\.\/)/
      , rParentRef = /(\/[^\/]+\/\.\.\/)/;
    while (rSelfRef.test(sResolvedUrl))
        sResolvedUrl = sResolvedUrl.replace(RegExp.$1, "/");
    while (rParentRef.test(sResolvedUrl))
        sResolvedUrl = sResolvedUrl.replace(RegExp.$1, "/");
    return sResolvedUrl;
}
;
UCF_JsUtil.bInstanceOf = function(oObject, sClassName) {
    var oClass = window[sClassName];
    if (!oClass)
        return false;
    return oObject instanceof oClass;
}
;
UCF_JsUtil.downloadFile = function(sUrl) {
    var oFrameRef = document.createElement("iframe");
    oFrameRef.src = sUrl;
    oFrameRef.style.display = "none";
    document.body.appendChild(oFrameRef);
    var removeFunction = function() {
        try {
            document.body.removeChild(oFrameRef);
        } catch (e) {}
    }
    ;
    if (oFrameRef.readyState) {
        oFrameRef.onreadystatechange = function() {
            if (oFrameRef.readyState == "interactive") {
                oFrameRef.onreadystatechange = null ;
                setTimeout(removeFunction, 200);
            }
        }
        ;
    } else {
        oFrameRef.onload = function() {
            oFrameRef.onload = null ;
            setTimeout(removeFunction, 200);
        }
        ;
    }
}
;
UCF_JsUtil.sendUnloadRequest = function(url) {
    if (this.isSameHost(url)) {
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
            try {
                req.open("GET", url, false);
                req.send(null );
                return;
            } catch (ex) {}
        }
        var xml = document.createElement("xml");
        document.body.appendChild(xml);
        if (xml.XMLDocument) {
            xml.XMLDocument.async = false;
            xml.XMLDocument.load(url);
            return;
        }
    }
    var termHtml, termUrl, windowName, windowOptions = "width=100,height=100,left=2000,top=2000,status=no,toolbar=no";
    termHtml = "<iframe src=\"";
    termHtml += url.replace(/&/g, "&amp;").replace(/\"/g, "&quot;");
    termHtml += "\" onload=\"window.close()\"></iframe>";
    termUrl = "javascript:\"" + termHtml.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"") + "\"";
    windowName = "terminator" + new Date().valueOf();
    window.open(termUrl, windowName, windowOptions);
}
;
UCF_JsUtil.isSameHost = function(url) {
    if (!/^https?:\/\//.test(url))
        return true;
    var urlTest = location.protocol + "//" + location.hostname;
    return ( url.indexOf(urlTest) == 0) ;
}
;
UCF_JsUtil.oClone = function(obj, bRecursive) {
    if (obj == null  || typeof (obj) != 'object')
        return obj;
    var oClone = new Object();
    try {
        if (obj.constructor)
            oClone = new obj.constructor();
    } catch (e) {}
    ;for (var key in obj) {
        try {
            var oCopy = null ;
            if (bRecursive)
                oCopy = this.oClone(obj[key], bRecursive);
            else
                oCopy = obj[key];
            oClone[key] = oCopy;
        } catch (e) {}
        ;
    }
    return oClone;
}
;
UCF_JsUtil.oParseXMLDocument = function(sXMLText) {
    var oXMLDocument = null ;
    if (window.ActiveXObject) {
        var oXMLRef = document.getElementById("UCF_XML");
        if (oXMLRef) {
            oXMLDocument = oXMLRef.XMLDocument;
        } else {
            oXMLDocument = new ActiveXObject("Microsoft.XMLDOM");
        }
        oXMLDocument.async = false;
        oXMLDocument.loadXML(sXMLText);
    }
    if (window.DOMParser) {
        var oParser = new DOMParser();
        oXMLDocument = oParser.parseFromString(sXMLText, "text/xml");
    }
    return oXMLDocument;
}
;
UCF_JsUtil.removeComments = function(oElement) {
    var aChildNodes = oElement.childNodes, oChildNode;
    for (var i = 0; i < aChildNodes.length; i++) {
        oChildNode = aChildNodes[i];
        switch (oChildNode.nodeType) {
        case 1:
            this.removeComments(oChildNode);
            break;
        case 8:
            oElement.removeChild(oChildNode);
            i--;
            break;
        }
    }
}
;
UCF_JsUtil.sXmlEscape = function(sText) {
    sText = sText.replace(/\&/g, "&amp;");
    sText = sText.replace(/\</g, "&lt;");
    sText = sText.replace(/\"/g, "&quot;");
    return sText;
}
;
UCF_JsUtil.mDecodeURIParameters = function(sParameters) {
    var aParameters = sParameters.split("&"), mParameters = {}, aParameter, sName, sValue;
    for (var i = 0; i < aParameters.length; i++) {
        aParameter = aParameters[i].split("=");
        sName = decodeURIComponent(aParameter[0]);
        sValue = decodeURIComponent(aParameter[1]);
        if (sName) {
            mParameters[sName] = "";
            if (sValue) {
                mParameters[sName] = sValue;
            }
        }
    }
    return mParameters;
}
;
UCF_JsUtil.sExtractFunctionName = function(oFunction) {
    var sText = oFunction.toString()
      , sName = sText.substr(0, sText.indexOf("("));
    return sName;
}
;
UCF_JsUtil.clearRegExpBackReferences = function() {
    /()/.test("");
}
;
function UCF_EventHandler(oLS) {
    UCF_EventProvider.apply(this);
    this.oLS = oLS;
    this.oLS.attachEvent(this.oLS.E_EVENTS.SemanticEvent, this, "onSemanticEvent");
    this.oQueue = new (UCF_ClassLoader.oGetClass("UCF_EventQueue"))(this.oLS);
    this.mFormQueues = {};
    this.oWEQueue = new (UCF_ClassLoader.oGetClass("UCF_WaitingEventQueue"))();
    this.oTimer = new (UCF_ClassLoader.oGetClass("UCF_EventTimer"))();
}
UCF_EventHandler.prototype = new UCF_EventProvider();
UCF_EventHandler.prototype.E_EVENTS = {
    AfterRequestSubmit: 1,
    EventQueueDataComplete: 2
};
UCF_EventHandler.prototype.E_KEY = {
    ACTION: "ClientAction",
    CARDINALITY: "EnqueueCardinality",
    TRANSPORT: "TransportMethod",
    RESPONSE: "ResponseData",
    ACTIONURL: "ActionUrl",
    PREPARESCRIPT: "PrepareScript",
    DELAY: "Delay",
    SYNCEXECUTION: "SyncExecution",
    CLIENTLISTENER: "ClientListener"
};
UCF_EventHandler.prototype.E_ACTION = {
    SUBMIT: "submit",
    SUBMITASYNC: "submitAsync",
    ENQUEUE: "enqueue",
    NONE: "none"
};
UCF_EventHandler.prototype.E_CARDINALITY = {
    MULTIPLE: "multiple",
    SINGLE: "single",
    NONE: "none"
};
UCF_EventHandler.prototype.E_RESPONSE_DATA = {
    FULL: "full",
    DELTA: "delta",
    INHERIT: "inherit"
};
UCF_EventHandler.prototype.E_DELAY = {
    NONE: "none",
    FULL: "full"
};
UCF_EventHandler.prototype.E_FORM_RESPONSE_DATA = {
    FULL: "FULL",
    DELTA: "DELTA"
};
UCF_EventHandler.prototype.bActionSUBMITABLE = function(iAction) {
    return ( iAction == this.E_ACTION.SUBMIT || iAction == this.E_ACTION.SUBMITASYNC) ;
}
;
UCF_EventHandler.prototype.bActionENQUEUABLE = function(iAction) {
    return ( iAction == this.E_ACTION.ENQUEUE || iAction == this.E_ACTION.SUBMIT || iAction == this.E_ACTION.SUBMITASYNC) ;
}
;
UCF_EventHandler.prototype.bCardinalityENQUEUABLE = function(iCardinality) {
    return ( iCardinality == this.E_CARDINALITY.SINGLE || iCardinality == this.E_CARDINALITY.MULTIPLE) ;
}
;
UCF_EventHandler.prototype.destroy = function() {
    this.oLS.detachEvent(this.oLS.E_EVENTS.SemanticEvent, this);
}
;
UCF_EventHandler.prototype.oGetFormQueue = function(oForm) {
    var oFormQueue = this.mFormQueues[oForm.sId];
    if (!oFormQueue) {
        oFormQueue = new (UCF_ClassLoader.oGetClass("UCF_EventQueue"))(this.oLS);
        this.mFormQueues[oForm.sId] = oFormQueue;
        oForm.attachEvent(oForm.E_EVENTS.Destroy, this, "onFormDestroy");
    }
    return oFormQueue;
}
;
UCF_EventHandler.prototype.onFormDestroy = function(oEvent) {
    var oFormId = oEvent.oGetParam("Id")
      , oForm = this.oLS.oControlFactory.oGetControlById(oFormId)
      , oQueue = this.mFormQueues[oFormId];
    if (oQueue) {
        oQueue.reset();
        delete this.mFormQueues[oFormId];
    }
    oForm.detachEvent(oForm.E_EVENTS.Destroy, this, "onFormDestroy");
}
;
UCF_EventHandler.prototype.setPendingRequestHandler = function(oPendingRequestHandlerObject, sPendingRequestHandlerFunction) {
    this.oPendingRequestHandlerObject = oPendingRequestHandlerObject;
    this.sPendingRequestHandlerFunction = sPendingRequestHandlerFunction;
}
;
UCF_EventHandler.prototype.sendFormRequest = function(oForm, oQueue) {
    var oPendingRequest = new (UCF_ClassLoader.oGetClass("UCF_PendingRequest"))(oQueue);
    oPendingRequest.setForm(oForm);
    this.processPendingRequest(oPendingRequest);
}
;
UCF_EventHandler.prototype.sendXmlHttpRequest = function(sActionUrl, oForm, oQueue, bSyncExecution) {
    var oPendingRequest = new (UCF_ClassLoader.oGetClass("UCF_PendingRequest"))(oQueue);
    if (oForm) {
        oPendingRequest.setForm(oForm);
    }
    oPendingRequest.setActionUrl(sActionUrl);
    oPendingRequest.setSyncExecution(bSyncExecution);
    this.processPendingRequest(oPendingRequest);
}
;
UCF_EventHandler.prototype.processPendingRequest = function(oPendingRequest) {
    this.oLS.processPendingRequest(oPendingRequest);
    if (oPendingRequest.bIsSuspended()) {
        oPendingRequest.attachEvent(oPendingRequest.M_EVENTS.Send, this, "onPendingRequestSend");
    } else {
        this.sendPendingRequest(oPendingRequest);
    }
}
;
UCF_EventHandler.prototype.onPendingRequestSend = function(oEvent) {
    var oPendingRequest = oEvent.oGetParam("oPendingRequest");
    oPendingRequest.detachEvent(oPendingRequest.M_EVENTS.Send, this);
    this.sendPendingRequest(oPendingRequest);
}
;
UCF_EventHandler.prototype.sendPendingRequest = function(oPendingRequest) {
    var oQueue = oPendingRequest.oGetQueue()
      , iType = oPendingRequest.iGetType()
      , oForm = oPendingRequest.oGetForm()
      , sHash = (document.location.hash) ? document.location.hash : "";
    if (oForm) {
        this.oWEQueue.setProcessingLock(false);
        var sFocusedId = this.oLS.sGetFocusedElementId();
        if (!oForm.bPageForm) {
            oForm.fireRequest(oForm.sId, oQueue.bAsync, sFocusedId, sHash, this.oLS.bHasDomChanged(), this.oLS.bIsDirty());
        } else {
            var oPage = this.oLS.oGetPage();
            if (oPage) {
                oPage.fireRequest(oPage.sId, oQueue.bAsync, sFocusedId, sHash, this.oLS.bHasDomChanged(), this.oLS.bIsDirty());
            } else {}
        }
        this.oWEQueue.setProcessingLock(true);
    }
    var mQueueTransportMap = oQueue.mGetTransportMap();
    var sTstamp = "@" + (new Date()).getTime();
    oQueue.setDebugSupplements(true, sTstamp);
    this.fireEvent(this.E_EVENTS.EventQueueDataComplete);
    oQueue.setDebugSupplements(false, "");
    oQueue.reset();
    this.oLS.bDirty = false;
    this.oLS.setDomChanged(false);
    if (iType == UCF_PendingRequest.FORM) {
        oForm.putHiddenFieldsByMap(mQueueTransportMap);
        this.oWEQueue.setProcessingLock(false);
        oForm.submit();
    } else if (iType == UCF_PendingRequest.XMLHTTP || iType == UCF_PendingRequest.XMLHTTP_SYNC) {
        var sActionUrl = oPendingRequest.sGetActionUrl();
        var mRequestParameters = null ;
        if (oForm != null ) {
            mRequestParameters = {};
            this.copyHiddenFieldsToMap(oForm, mRequestParameters);
            for (var key in mQueueTransportMap) {
                mRequestParameters[key] = mQueueTransportMap[key];
            }
        } else {
            mRequestParameters = mQueueTransportMap;
        }
        if (iType == UCF_PendingRequest.XMLHTTP) {
            UCF_RequestUtil.sendAsyncRequest(sActionUrl, "POST", mRequestParameters, this, "onXmlHttpResponse");
        } else {
            this.onXmlHttpResponse(UCF_RequestUtil.sendSyncRequest(sActionUrl, "POST", mRequestParameters));
        }
    }
    this.fireEvent(this.E_EVENTS.AfterRequestSubmit);
}
;
UCF_EventHandler.prototype.copyHiddenFieldsToMap = function(oForm, mMap) {
    var thisForm = oForm.oDomRef;
    for (var i = 0; i < thisForm.elements.length; i++) {
        var srcElem = thisForm.elements[i];
        if (srcElem.type == "hidden" && srcElem.name) {
            if (mMap[srcElem.name]) {}
            mMap[srcElem.name] = srcElem.value;
        }
    }
}
;
UCF_EventHandler.prototype.onXmlHttpResponse = function(oResponse) {
    if (oResponse.bSuccess && oResponse.oDocument && oResponse.oDocument.documentElement) {
        this.oLS.oPageUpdater.processUpdateDocument(oResponse.oDocument);
        if (!this.oWEQueue.bContainsSyncSubmit()) {
            this.oLS.unlock();
        }
        this.oWEQueue.setProcessingLock(false);
        this.refireWaitingEvents();
    } else {
        if (oResponse.bSuccess && (!oResponse.oDocument || !oResponse.oDocument.documentElement) && oResponse.sText) {}
        this.oLS.destroy(oResponse.sText);
    }
}
;
UCF_EventHandler.prototype.E_SOURCE = {
    DIRECT: 0,
    WQUEUE: 1,
    TIMER: 2
};
UCF_EventHandler.prototype.sSourceToString = function(iSource) {
    switch (iSource) {
    case this.E_SOURCE.DIRECT:
        return "(0):DIRECT";
    case this.E_SOURCE.WQUEUE:
        return "(1):WQUEUE";
    case this.E_SOURCE.TIMER:
        return "(2):TIMER";
    default:
        return ( "(" + iSrc + "):UNKNOWN") ;
    }
}
;
UCF_EventHandler.prototype.onSemanticEvent = function(oEvent) {
    var oSemanticEvent = oEvent.oGetParam("oSemanticEvent");
    if (this.bSpecialActions(oSemanticEvent))
        return;
    this.processSemanticEvent(oSemanticEvent, this.E_SOURCE.DIRECT);
}
;
UCF_EventHandler.prototype.processSemanticEvent = function(oSemanticEvent, iSource) {
    if (oSemanticEvent.bIsCanceled())
        return;
    var eClientAction = this.E_ACTION.ENQUEUE
      , eEnqueueCardinality = this.E_CARDINALITY.MULTIPLE
      , eResponseData = this.E_RESPONSE_DATA.INHERIT
      , sActionUrl = null 
      , sPrepareScript = ""
      , eDelay = this.E_DELAY.NONE
      , bDelay = false
      , bSyncExecution = false
      , sClientListener = "";
    var ucfParam = oSemanticEvent.mGetUcfParameters();
    if (ucfParam != null ) {
        sPrepareScript = ucfParam[this.E_KEY.PREPARESCRIPT] || sPrepareScript;
        sClientListener = ucfParam[this.E_KEY.CLIENTLISTENER] || sClientListener;
        eClientAction = ucfParam[this.E_KEY.ACTION] || eClientAction;
        eEnqueueCardinality = ucfParam[this.E_KEY.CARDINALITY] || eEnqueueCardinality;
        eResponseData = ucfParam[this.E_KEY.RESPONSE] || eResponseData;
        sActionUrl = ucfParam[this.E_KEY.ACTIONURL] || sActionUrl;
        eDelay = ucfParam[this.E_KEY.DELAY] || eDelay;
        bDelay = (eDelay == this.E_DELAY.FULL);
        bSyncExecution = ucfParam[this.E_KEY.SYNCEXECUTION];
    }
    if (sPrepareScript != "") {
        var func = new Function("oSemanticEvent","oLS",sPrepareScript);
        var bOk = func(oSemanticEvent.oGetInterface(), this.oLS.oGetInterface());
        if (bOk === false)
            return;
    }
    if (sClientListener != "") {
        var func = null ;
        if (typeof (sClientListener) == "function") {
            func = sClientListener;
        }
        var bOk = true;
        if (func) {
            var sId = oSemanticEvent.mGetParameters()["Id"];
            bOk = func(this.oLS.oGetControlById(sId), oSemanticEvent.oGetInterface());
        }
        if (bOk === false)
            return;
    }
    var oEventQueue = this.oQueue;
    var oFormControl = oSemanticEvent.oGetForm();
    if (oFormControl) {
        oEventQueue = this.oGetFormQueue(oFormControl);
    } else {
        if (!this.oLS.bIsMainLS()) {
            var oMainLS = this.oLS.oGetMainLS()
              , oMainEventHandler = oMainLS.oEventHandler;
            oMainEventHandler.processSemanticEvent(oSemanticEvent, iSource);
            return;
        }
        var oPage = this.oLS.oGetPage();
        if (oPage) {
            var sFormId = oPage.sFormId;
            if (sFormId) {
                oFormControl = this.oLS.oControlFactory.oGetControlById(sFormId);
            }
        }
    }
    var bDoLock = false;
    if (this.bActionSUBMITABLE(eClientAction)) {
        if (iSource == this.E_SOURCE.TIMER)
            bDoLock = true;
        else if (bDelay)
            bDoLock = false;
        else
            bDoLock = true;
        if (bDoLock) {
            if (eClientAction == this.E_ACTION.SUBMIT || this.oTimer.sGetPendingAction() == this.E_ACTION.SUBMIT) {
                this.oLS.lock();
            }
        }
    }
    if (this.oWEQueue.bIsProcessingLock()) {
        this.oWEQueue.oEnqueue(oSemanticEvent);
        return;
    }
    if (bDoLock) {
        this.oWEQueue.setProcessingLock(true);
    }
    if (iSource == this.E_SOURCE.TIMER) {
        ;
    } else {
        if (this.bActionENQUEUABLE(eClientAction) && this.bCardinalityENQUEUABLE(eEnqueueCardinality)) {
            var oItem = new (UCF_ClassLoader.oGetClass("UCF_EventQueueItem"))(oSemanticEvent);
            switch (eEnqueueCardinality) {
            case this.E_CARDINALITY.SINGLE:
                oEventQueue.purgeByItem(oItem);
                oEventQueue.addItem(oItem);
                break;
            case this.E_CARDINALITY.MULTIPLE:
                oEventQueue.addItem(oItem);
                break;
            default:
                ;
            }
        }
    }
    if (iSource == this.E_SOURCE.TIMER) {
        this.oTimer.rejectCall();
    } else {
        if (this.bActionSUBMITABLE(eClientAction)) {
            if (this.oTimer.bPendingDelay()) {
                this.oTimer.rejectCall();
            }
            if (bDelay) {
                this.oTimer.scheduleCall(this, "processSemanticEvent", oSemanticEvent, this.E_SOURCE.TIMER, eClientAction);
                return;
            }
        } else {
            if (bDelay) {}
        }
    }
    if (this.bActionSUBMITABLE(eClientAction)) {
        oEventQueue.bAsync = eClientAction == this.E_ACTION.SUBMITASYNC;
        if (eResponseData == this.E_RESPONSE_DATA.INHERIT) {
            if (oFormControl) {
                var eFormResponseData = oFormControl.sResponseData;
                eResponseData = (eFormResponseData == this.E_FORM_RESPONSE_DATA.DELTA) ? this.E_RESPONSE_DATA.DELTA : this.E_RESPONSE_DATA.FULL;
            } else {
                eResponseData = this.E_RESPONSE_DATA.FULL;
            }
        }
        switch (eResponseData) {
        case this.E_RESPONSE_DATA.FULL:
            {
                if (!oFormControl) {
                    oFormControl = this.oCreateForm();
                }
                if (sActionUrl) {
                    oFormControl.setAction(sActionUrl);
                }
                this.sendFormRequest(oFormControl, oEventQueue);
                break;
            }
        case this.E_RESPONSE_DATA.DELTA:
            {
                if (!sActionUrl && oFormControl) {
                    sActionUrl = oFormControl.sGetAction();
                }
                if (!sActionUrl) {
                    sActionUrl = document.location.href;
                }
                this.sendXmlHttpRequest(sActionUrl, oFormControl, oEventQueue, bSyncExecution);
                break;
            }
        default:
            {
                break;
            }
        }
    }
}
;
UCF_EventHandler.prototype.refireWaitingEvents = function() {
    var oSemanticEvent;
    if (this.oWEQueue.bIsRefireLock() || this.oWEQueue.iGetLength() < 1)
        return;
    this.oWEQueue.setRefireLock(true);
    while ((!this.oWEQueue.bIsProcessingLock()) && (this.oWEQueue.iGetLength() > 0)) {
        oSemanticEvent = this.oWEQueue.oDequeue();
        this.processSemanticEvent(oSemanticEvent, this.E_SOURCE.WQUEUE);
    }
    this.oWEQueue.setRefireLock(false);
}
;
UCF_EventHandler.prototype.activateStartupQueueing = function() {
    this.oWEQueue.setProcessingLock(true);
}
;
UCF_EventHandler.prototype.deactivateStartupQueueing = function() {
    this.oWEQueue.setProcessingLock(false);
    this.refireWaitingEvents();
}
;
UCF_EventHandler.prototype.oCreateForm = function() {
    var oFormRef = document.createElement("form");
    oFormRef.method = "POST";
    this.oLS.oGetStaticAreaRef().appendChild(oFormRef);
    var oForm = new (UCF_ClassLoader.oGetClass("UCF_Form"))(oFormRef,this.oLS);
    oForm.initialize();
    oForm.bPageForm = true;
    return oForm;
}
;
UCF_EventHandler.prototype.sSerializeForTrace = function(oSemanticEvent) {
    var aBuff = [];
    aBuff.push("SemanticEvent");
    aBuff.push("\n");
    aBuff.push("sControl: ");
    aBuff.push(oSemanticEvent.sGetControl());
    aBuff.push("\n");
    aBuff.push("sName: ");
    aBuff.push(oSemanticEvent.sGetName());
    aBuff.push("\n");
    aBuff.push("sParameters: ");
    aBuff.push(this.sSerializeSectionForTrace(oSemanticEvent.mGetParameters()));
    aBuff.push("\n");
    aBuff.push("sUcfParameters: ");
    aBuff.push(this.sSerializeSectionForTrace(oSemanticEvent.mGetUcfParameters()));
    aBuff.push("\n");
    aBuff.push("sCustomParameters: ");
    aBuff.push(this.sSerializeSectionForTrace(oSemanticEvent.mGetCustomParameters()));
    aBuff.push("\n");
    return aBuff.join("");
}
;
UCF_EventHandler.prototype.sSerializeSectionForTrace = function(obj) {
    return (obj == null ) ? "" : UCF_JsUtil.sSerialize(obj);
}
;
UCF_EventHandler.prototype.bSpecialActions = function(oSemanticEvent) {
    var sControlId = oSemanticEvent.mGetParameters()["Id"];
    if (!sControlId)
        return false;
    if (sControlId && sControlId.indexOf("__testLS__") != 0)
        return false;
    switch (sControlId.substring(10)) {
    case "debugger":
        eval("debugger");
        return true;
    case "WQReset":
        this.oWEQueue.reset();
        return true;
    case "WQLock":
        this.oWEQueue.setProcessingLock(true);
        return true;
    case "WQUnlock":
        this.oWEQueue.setProcessingLock(false);
        return true;
    case "WQRefire":
        this.refireWaitingEvents();
        return true;
    case "WQContainsSyncSubmit":
        alert("Exists any SyncSubmit in WQ:" + this.oWEQueue.bContainsSyncSubmit());
        return true;
    case "EDSetDelay5000":
        this.oTimer.setMaxDelay(5000);
        return true;
    default:
        return false;
    }
}
;
function UCF_DomUtil() {
    this.oTopWindow = null ;
}
;UCF_DomUtil.bIsRTL = document.documentElement.dir == "rtl";
UCF_DomUtil.oActiveElement = null ;
UCF_DomUtil.$ = function(sId, oWindow) {
    if (!oWindow)
        oWindow = window;
    return oWindow.document.getElementById(sId);
}
;
UCF_DomUtil.attachEvent = function(oDomRef, sName, fHandler, bUseCapture) {
    if (oDomRef.attachEvent) {
        oDomRef.attachEvent("on" + sName, fHandler);
    } else if (oDomRef.addEventListener) {
        oDomRef.addEventListener(sName, fHandler, bUseCapture);
    }
}
;
UCF_DomUtil.detachEvent = function(oDomRef, sName, fHandler, bUseCapture) {
    if (oDomRef.detachEvent) {
        oDomRef.detachEvent("on" + sName, fHandler);
    } else if (oDomRef.removeEventListener) {
        oDomRef.removeEventListener(sName, fHandler, bUseCapture);
    }
}
;
UCF_DomUtil.oGetParentByTagName = function(oDomRef, sTagName) {
    while (oDomRef && oDomRef.tagName != "BODY") {
        if (oDomRef.tagName == sTagName) {
            return oDomRef
        }
        oDomRef = oDomRef.parentNode;
    }
    return null ;
}
;
UCF_DomUtil.oGetParentByAttribute = function(oDomRef, sAttribute, sValue) {
    while (oDomRef && oDomRef.tagName != "BODY") {
        if (!oDomRef.getAttribute)
            return null ;
        if ((oDomRef.getAttribute(sAttribute) && !sValue) || (oDomRef.getAttribute(sAttribute) && oDomRef.getAttribute(sAttribute) == sValue)) {
            return oDomRef
        }
        oDomRef = oDomRef.parentNode;
    }
    return null ;
}
;
UCF_DomUtil.setClass = function(oDomRef, sClassName) {
    oDomRef.className = sClassName;
}
;
UCF_DomUtil.sGetClass = function(oDomRef) {
    return oDomRef.className;
}
;
UCF_DomUtil.addClass = function(oDomRef, sClassName) {
    var sCurrentClass = oDomRef.className;
    if (sCurrentClass) {
        sClassName = sCurrentClass + " " + sClassName;
    }
    oDomRef.className = sClassName;
}
;
UCF_DomUtil.removeClass = function(oDomRef, sRemoveClassName) {
    if (sRemoveClassName == "" || sRemoveClassName == " ")
        return;
    var sCurrentClass = oDomRef.className;
    if (sCurrentClass) {
        while (sCurrentClass.indexOf(sRemoveClassName + " ") != -1)
            sCurrentClass = sCurrentClass.replace(sRemoveClassName + " ", "");
        while (sCurrentClass.indexOf(sRemoveClassName) != -1)
            sCurrentClass = sCurrentClass.replace(sRemoveClassName, "");
    }
    oDomRef.className = sCurrentClass;
}
;
UCF_DomUtil.replaceClass = function(oDomRef, sReplaceClassName, sClassName) {
    if (sReplaceClassName == "" || sReplaceClassName == " ")
        return;
    var sCurrentClass = oDomRef.className;
    if (sCurrentClass) {
        sCurrentClass = sCurrentClass.replace(sReplaceClassName + " ", sClassName + " ");
        sCurrentClass = sCurrentClass.replace(sReplaceClassName, sClassName);
    }
    oDomRef.className = sCurrentClass;
}
;
UCF_DomUtil.oGetDocument = function(oDomRef) {
    if (oDomRef) {
        return oDomRef.ownerDocument;
    } else {
        return window.document;
    }
}
;
UCF_DomUtil.oGetElementFromPoint = function(iX, iY) {
    if (this.oGetDocument().elementFromPoint) {
        return this.oGetDocument().elementFromPoint(iX, iY);
    } else {
        return null ;
    }
}
;
UCF_DomUtil.oGetScrollOffset = function(oWindow) {
    var x, y;
    var doc = oWindow.document;
    if (oWindow.pageYOffset) {
        x = oWindow.pageXOffset;
        y = oWindow.pageYOffset;
    } else if (doc.documentElement && doc.documentElement.scrollTop) {
        x = doc.documentElement.scrollLeft;
        y = doc.documentElement.scrollTop;
    } else if (doc.body) {
        x = doc.body.scrollLeft;
        y = doc.body.scrollTop;
    }
    return {
        x: x,
        y: y
    };
}
;
UCF_DomUtil.oGetInnerSize = function(oWindow) {
    var width, height;
    var doc = oWindow.document;
    if (oWindow.innerHeight) {
        width = oWindow.document.body.offsetWidth;
        height = oWindow.innerHeight;
    } else if (doc.documentElement && doc.documentElement.clientHeight) {
        width = doc.documentElement.clientWidth;
        height = doc.documentElement.clientHeight;
    } else if (document.body) {
        width = doc.body.clientWidth;
        height = doc.body.clientHeight;
    }
    return {
        width: width,
        height: height
    };
}
;
UCF_DomUtil.setTabIndex = function(oDomRef, iValue) {
    oDomRef.tabIndex = iValue;
    oDomRef.setAttribute("ti", iValue);
}
;
UCF_DomUtil.resetTabIndex = function(oDomRef) {
    this.setTabIndex(oDomRef, -1);
}
;
UCF_DomUtil.bHasTabIndex = function(oDomRef) {
    var iTabIndex = this.iGetTabIndex(oDomRef);
    return !isNaN(iTabIndex) && iTabIndex >= 0;
}
;
UCF_DomUtil.iGetTabIndex = function(oDomRef) {
    return parseInt(oDomRef.getAttribute("ti"));
}
;
UCF_DomUtil.setAccessKey = function(oDomRef, sValue) {
    if (sValue != "d" && sValue != "D")
        oDomRef.setAttribute("accessKey", sValue);
}
;
UCF_DomUtil.focusDomElement = function(oDomRef) {
    try {
        oDomRef.focus();
    } catch (oException) {}
}
;
UCF_DomUtil.bDomElementFocused = function(oDomRef) {
    try {
        oDomRef.focus();
        return true;
    } catch (oException) {
        return false;
    }
}
;
UCF_DomUtil.bFocusDomElement = function(oDomRef) {
    try {
        oDomRef.focus();
    } catch (oException) {
        return false;
    }
    if (document.activeElement && document.activeElement != oDomRef)
        return false;
    return true;
}
;
UCF_DomUtil.refocusDomElement = function(oDomRef) {
    try {
        oDomRef.blur();
        oDomRef.focus();
    } catch (oException) {
        return false;
    }
    return true;
}
;
UCF_DomUtil.oGetActiveElement = function() {
    var o = null ;
    try {
        if (document.activeElement || document.activeElement === null )
            o = document.activeElement;
        else
            o = UCF_DomUtil.oActiveElement;
    } catch (exception) {
        o = UCF_DomUtil.oActiveElement;
    }
    return o;
}
;
UCF_DomUtil.setActiveElement = function(oDomRef) {
    UCF_DomUtil.oActiveElement = oDomRef;
}
;
UCF_DomUtil.purgeActiveElement = function() {
    if (UCF_DomUtil.oActiveElement) {
        try {
            if (document.activeElement) {
                UCF_DomUtil.oActiveElement = document.activeElement;
                return;
            }
        } catch (exception) {}
        if (!this.bIsInActiveDom(UCF_DomUtil.oActiveElement)) {
            if (UCF_DomUtil.oActiveElement.getAttribute("id")) {
                UCF_DomUtil.oActiveElement = this.$(UCF_DomUtil.oActiveElement.getAttribute("id"));
            } else {
                UCF_DomUtil.oActiveElement = null ;
            }
        }
    }
}
;
UCF_DomUtil.bIsInActiveDom = function(oDomRef) {
    var oCurrDomRef = oDomRef;
    while (oCurrDomRef) {
        if (oCurrDomRef == document)
            return true;
        oCurrDomRef = oCurrDomRef.parentNode;
    }
    return false;
}
;
UCF_DomUtil.bContains = function(oDomRefContainer, oDomRefChild) {
    var oDomRef = oDomRefChild;
    if (oDomRefContainer == oDomRefChild)
        return true;
    while (oDomRef != null ) {
        if (oDomRef == oDomRefContainer)
            return true;
        oDomRef = oDomRef.parentNode;
    }
    return false;
}
;
UCF_DomUtil.oGetFirstElement = function(oDomRefNode) {
    var ELEMENT_NODE = 1;
    if (oDomRefNode.firstChild && oDomRefNode.firstChild.nodeType == ELEMENT_NODE) {
        return oDomRefNode.firstChild;
    } else {
        if (!oDomRefNode.childNodes)
            return null ;
        for (var i = 0; i < oDomRefNode.childNodes.length; i++) {
            if (oDomRefNode.childNodes[i].nodeType == ELEMENT_NODE) {
                return oDomRefNode.childNodes[i];
            }
        }
    }
    return null ;
}
;
UCF_DomUtil.oGetFirstChild = function(oDomRefNode) {
    for (var i = 0; i < oDomRefNode.childNodes.length; i++) {
        if (oDomRefNode.childNodes[i].tagName != "!")
            return oDomRefNode.childNodes[i];
    }
    return null ;
}
;
UCF_DomUtil.oGetObjectRect = function(oDomRef, oContainerRef) {
    var oRect, oOffsetParent = oDomRef.offsetParent, bIsContainer = false;
    if (oOffsetParent && oContainerRef) {
        bIsContainer = oOffsetParent == oContainerRef || oOffsetParent.firstChild == oContainerRef;
    }
    if (oOffsetParent && !bIsContainer) {
        var oParentRect = this.oGetObjectRect(oOffsetParent, oContainerRef)
          , bHandled = false;
        oRect = {
            top: oParentRect.top + oDomRef.offsetTop,
            left: oParentRect.left + oDomRef.offsetLeft,
            width: oDomRef.offsetWidth,
            height: oDomRef.offsetHeight
        };
        var oCurDomRef = oDomRef;
        do {
            oCurDomRef = oCurDomRef.parentNode;
            if (oCurDomRef == document.body)
                continue;oRect.top -= oCurDomRef.scrollTop;
            oRect.left -= oCurDomRef.scrollLeft;
        } while (oCurDomRef != oOffsetParent);if (UCF_DomUtil.bIsRTL) {
            var offsetLeft = oDomRef.offsetLeft;
            if (oOffsetParent != document.body) {
                if (oDomRef.offsetLeft <= 0 && this.sGetCurrentStyle(oDomRef, "position") != "relative" && this.sGetCurrentStyle(oDomRef, "position") != "absolute") {
                    if (oOffsetParent.scrollLeft || this.sGetCurrentStyle(oOffsetParent, "overflowX") != "visible") {
                        offsetLeft = -oOffsetParent.scrollLeft;
                    } else {
                        var iCalculationMode = 0
                          , iChildrenOffset = 0
                          , sTextAlign = this.sGetCurrentStyle(oOffsetParent, "textAlign");
                        if (!sTextAlign || sTextAlign == "right") {
                            iChildrenOffset = 0;
                        } else if (sTextAlign == "left") {
                            iChildrenOffset = 2;
                        } else if (sTextAlign == "center") {
                            iChildrenOffset = 1;
                        }
                        oCurDomRef = oDomRef;
                        while (oCurDomRef) {
                            if (oCurDomRef != oDomRef && this.sGetCurrentStyle(oDomRef, "display") != "inline" && oDomRef.tagName != "TD" && oDomRef.tagName != "TH") {
                                break;
                            }
                            if (iCalculationMode != 2 || oCurDomRef != oDomRef)
                                iChildrenOffset += oCurDomRef.offsetWidth;
                            if (iCalculationMode != 2) {
                                oCurDomRef = oCurDomRef.previousSibling;
                            } else {
                                oCurDomRef = oCurDomRef.nextSibling;
                            }
                        }
                        if (iCalculationMode == 0) {
                            offsetLeft = oOffsetParent.offsetWidth - iChildrenOffset;
                        } else if (iCalculationMode == 1) {} else if (iCalculationMode == 2) {
                            offsetLeft = iChildrenOffset;
                        }
                    }
                    if (oDomRef.offsetWidth < oOffsetParent.offsetWidth && oDomRef.offsetLeft == oDomRef.offsetWidth - oOffsetParent.offsetWidth) {
                        offsetLeft -= (oOffsetParent.offsetWidth - oDomRef.offsetWidth);
                    }
                }
                offsetLeft += this.iGetVerticalScollbarOffset(oOffsetParent);
            }
            oRect.left = oParentRect.left + offsetLeft;
        }
        return oRect;
    } else
        return {
            top: oDomRef.offsetTop,
            left: oDomRef.offsetLeft,
            width: oDomRef.offsetWidth,
            height: oDomRef.offsetHeight
        }
}
;
UCF_DomUtil.oGetVisibleRect = function(oDomRef) {
    var oRect = this.oGetObjectRect(oDomRef)
      , oScrollRef = this.oGetParentScrollContainer(oDomRef);
    if (oScrollRef) {
        oScrollRect = this.oGetObjectRect(oScrollRef);
        oScrollRect.height = oScrollRef.clientHeight;
        oScrollRect.width = oScrollRef.clientWidth;
        var dtop = oScrollRect.top - oRect.top
          , dbottom = (oRect.top + oRect.height) - (oScrollRect.top + oScrollRect.height)
          , dleft = oScrollRect.left - oRect.left;
        dright = (oRect.left + oRect.width) - (oScrollRect.left + oScrollRect.width);
        if (dtop > 0) {
            oRect.height -= dtop;
            oRect.top += dtop;
        }
        if (dbottom > 0) {
            oRect.height -= dbottom;
        }
        if (dleft > 0) {
            oRect.width -= dleft;
            oRect.left += dleft;
        }
        if (dright > 0) {
            oRect.width -= dright;
        }
    }
    if (oRect.height <= 0)
        oRect.height = 0;
    if (oRect.width <= 0)
        oRect.width = 0;
    return oRect;
}
;
UCF_DomUtil.iGetVerticalScollbarOffset = function(oDomRef) {
    return oDomRef.offsetWidth - oDomRef.clientWidth;
}
;
UCF_DomUtil.oGetObjectSize = function(oDomRef) {
    return new UCF_Size(oDomRef.offsetWidth,oDomRef.offsetHeight);
}
;
UCF_DomUtil.bIsInRect = function(oRect, iPosX, iPosY) {
    return iPosX >= oRect.left && iPosX <= oRect.left + oRect.width && iPosY >= oRect.top && iPosY <= oRect.top + oRect.height;
}
;
UCF_DomUtil.oGetParentScrollContainer = function(oDomRef, bIgnoreBody) {
    while (oDomRef != null ) {
        if (oDomRef == document.body) {
            return bIgnoreBody ? null  : oDomRef;
        } else {
            var sOverflow = this.sGetCurrentStyle(oDomRef, "overflow");
            if (sOverflow != "visible" && sOverflow != "hidden")
                return oDomRef;
        }
        oDomRef = oDomRef.parentNode;
    }
    return null ;
}
;
UCF_DomUtil.firstChild = function(oDomRef, tagname) {
    if (oDomRef != null ) {
        var untestedNode = oDomRef.childNodes;
        for (i = 0; i < untestedNode.length; i++) {
            if ((tagname != null  && untestedNode[i].nodeName == tagname) || (tagname == null  && untestedNode[i].nodeType == 1)) {
                return untestedNode[i];
            }
        }
    }
    return null ;
}
;
UCF_DomUtil.lastChild = function(oDomRef, tagname) {
    if (oDomRef != null ) {
        var untestedNode = oDomRef.childNodes;
        for (i = untestedNode.length - 1; i >= 0; i--) {
            if ((tagname != null  && untestedNode[i].nodeName == tagname) || (tagname == null  && untestedNode[i].nodeType == 1)) {
                return untestedNode[i];
            }
        }
    }
    return null ;
}
;
UCF_DomUtil.nextSibling = function(oDomRef, tagname) {
    if (oDomRef != null ) {
        var untestedNode = oDomRef.nextSibling;
        while (untestedNode != null ) {
            if ((tagname != null  && untestedNode.nodeName == tagname) || (tagname == null  && untestedNode.nodeType == 1)) {
                return untestedNode;
            }
            var untestedNode = untestedNode.nextSibling;
        }
    }
    return null ;
}
;
UCF_DomUtil.previousSibling = function(oDomRef, tagname) {
    if (oDomRef != null ) {
        var untestedNode = oDomRef.previousSibling;
        while (untestedNode != null ) {
            if ((tagname != null  && untestedNode.nodeName == tagname) || (tagname == null  && untestedNode.nodeType == 1)) {
                return untestedNode;
            }
            var untestedNode = untestedNode.previousSibling;
        }
    }
    return null ;
}
;
UCF_DomUtil.oGetTPElement = function(oDomRef) {
    var element = oDomRef;
    while (element != null  && element.nodeType == 1 && !(element.getAttribute("tp") || element.getAttribute("ct"))) {
        element = element.parentNode;
    }
    if (element == null  || element.nodeType != 1 || element.getAttribute("ct")) {
        return null ;
    }
    return element;
}
;
UCF_DomUtil.bIsTPInstanceOf = function(oDomRef, type) {
    var element = this.oGetTPElement(oDomRef);
    if (element != null  && element.nodeType == 1 && element.getAttribute("tp")) {
        var tp = element.getAttribute("tp");
        if (tp == type) {
            return true;
        }
    }
    return false;
}
;
UCF_DomUtil.oGetCTElement = function(oDomRef) {
    var element = oDomRef;
    while (element != null  && element.nodeType == 1 && !(element.getAttribute("ct"))) {
        element = element.parentNode;
    }
    if (element == null  || element.nodeType != 1) {
        return null ;
    }
    return element;
}
;
UCF_DomUtil.bIsCTInstanceOf = function(oDomRef, type) {
    var element = this.oGetCTElement(oDomRef);
    if (element != null  && element.nodeType == 1 && element.getAttribute("ct")) {
        var tp = element.getAttribute("ct");
        if (tp == type) {
            return true;
        }
    }
    return false;
}
;
UCF_DomUtil.childNodes = function(oDomRef, tagname) {
    var children = new Array();
    if (oDomRef != null ) {
        var untestedNode = oDomRef.childNodes;
        for (i = 0; i < untestedNode.length; i++) {
            if ((tagname != null  && untestedNode[i].nodeName == tagname) || (tagname == null  && untestedNode[i].nodeType == 1)) {
                children.push(untestedNode[i]);
            }
        }
    }
    return children;
}
;
UCF_DomUtil.setCursorPos = function(oDomRef, iPos) {
    if ((oDomRef && oDomRef.tagName == "INPUT" && (oDomRef.getAttribute('type') == "text" || oDomRef.getAttribute('type') == "password")) || oDomRef && oDomRef.tagName == "TEXTAREA") {
        if (oDomRef.createTextRange) {
            var oTextRange = oDomRef.createTextRange()
              , iMaxLength = oDomRef.value.length;
            if (iPos < 0 || iPos > iMaxLength)
                iPos = iMaxLength;
            if (oTextRange) {
                oTextRange.collapse();
                oTextRange.moveStart("character", iPos);
                oTextRange.select();
            }
        } else if (typeof (oDomRef.selectionStart) == "number") {
            oDomRef.focus();
            oDomRef.selectionStart = iPos;
            oDomRef.selectionEnd = iPos;
        }
    }
}
;
UCF_DomUtil.iGetCursorPos = function(oDomRef) {
    if ((oDomRef && oDomRef.tagName == "INPUT" && (oDomRef.getAttribute('type') == "text" || oDomRef.getAttribute('type') == "password")) || oDomRef && oDomRef.tagName == "TEXTAREA") {
        if (oDomRef.createTextRange) {
            var oTextRange = oDomRef.createTextRange();
            if (oTextRange) {
                try {
                    var oCopiedTextRange = window.document.selection.createRange().duplicate()
                      , iMaxLength = oDomRef.value.length + 1;
                    oTextRange.collapse();
                    for (var idx = 0; idx < iMaxLength; idx++) {
                        if (oTextRange.isEqual(oCopiedTextRange))
                            return idx;
                        oTextRange.moveEnd("character", 1);
                        oTextRange.moveStart("character", 1);
                    }
                } catch (e) {}
            }
        } else if (typeof (oDomRef.selectionStart) == "number") {
            return oDomRef.selectionStart;
        }
    }
    return -1;
}
;
UCF_DomUtil.sGetSelectionText = function(oDomRef) {
    var sSelectionText = null ;
    if (oDomRef.createTextRange) {
        try {
            var oSelectionRange = document.selection.createRange().duplicate();
            sSelectionText = oSelectionRange.text
        } catch (e) {}
    } else if (typeof (oDomRef.selectionStart) == "number") {
        sSelectionText = oDomRef.selectedText;
    } else if (window.getSelection && window.getSelection()) {
        sSelectionText = window.getSelection().toString();
    }
    return sSelectionText;
}
;
UCF_DomUtil.iGetSelectionStart = function(oDomRef) {
    var iSelectionStart = -1;
    if (oDomRef.createTextRange) {
        try {
            var oSelectionRange = document.selection.createRange().duplicate();
            var iSelectionLength = oSelectionRange.text.length;
            var iLength = oDomRef.value.length;
            if (iSelectionLength > 0) {
                for (var i = 0; i < iLength; i++) {
                    oSelectionRange.moveStart('character', -1);
                    if (oSelectionRange.htmlText != oSelectionRange.text)
                        break;
                }
                iSelectionStart = oSelectionRange.text.length - iSelectionLength;
            }
        } catch (e) {}
    } else if (typeof (oDomRef.selectionStart) == "number") {
        iSelectionStart = oDomRef.selectionStart;
    }
    return iSelectionStart;
}
;
UCF_DomUtil.iGetSelectionEnd = function(oDomRef) {
    var iSelectionEnd = -1;
    if (oDomRef.createTextRange) {
        try {
            var oSelectionRange = document.selection.createRange().duplicate();
            var iSelectionLength = oSelectionRange.text.length;
            var iLength = oDomRef.value.length;
            if (iSelectionLength > 0) {
                for (var i = 0; i < iLength; i++) {
                    oSelectionRange.moveStart('character', -1);
                    if (oSelectionRange.htmlText != oSelectionRange.text)
                        break;
                }
                iSelectionEnd = oSelectionRange.text.length;
            }
        } catch (e) {}
    } else if (typeof (oDomRef.selectionEnd) == "number") {
        iSelectionEnd = oDomRef.selectionEnd;
    }
    return iSelectionEnd;
}
;
UCF_DomUtil.setSelection = function(oDomRef, iStart, iEnd) {
    if (oDomRef.createTextRange) {
        var oTextEditRange = oDomRef.createTextRange();
        oTextEditRange.collapse();
        oTextEditRange.moveStart('character', iStart);
        oTextEditRange.moveEnd('character', iEnd - iStart);
        oTextEditRange.select();
    } else if (typeof (oDomRef.selectionStart) == "number") {
        oDomRef.selectionStart = iStart;
        oDomRef.selectionEnd = iEnd;
    }
}
;
UCF_DomUtil.removeSelection = function(oDomRef) {
    if (document.selection) {
        try {
            document.selection.empty();
        } catch (e) {}
    } else {}
}
;
UCF_DomUtil.sGetCurrentStyle = function(oDomRef, sStyleAttribute) {
    if (oDomRef.currentStyle) {
        return oDomRef.currentStyle[sStyleAttribute];
    } else {
        return window.getComputedStyle(oDomRef, "").getPropertyValue(UCF_StringUtil.sGetCSSNotation(sStyleAttribute));
        ;
    }
}
;
UCF_DomUtil.sGetInnerText = function(oDomRef) {
    var sText = oDomRef.innerText || oDomRef.textContent;
    if (typeof (sText) != "string")
        sText = "";
    return sText;
}
;
UCF_DomUtil.setInnerText = function(oDomRef, sText) {
    var oTextNode = document.createTextNode(sText);
    oDomRef.innerHTML = "";
    oDomRef.appendChild(oTextNode);
}
;
UCF_DomUtil.bIsVisible = function(oDomRef, bIncludeParents) {
    if (this.bIsInActiveDom(oDomRef) && oDomRef.nodeType == 1) {
        var bVisible = this.sGetCurrentStyle(oDomRef, "visibility") != "hidden" && this.sGetCurrentStyle(oDomRef, "display") != "none";
        if (!bVisible)
            return false;
        if (bIncludeParents && oDomRef.tagName && oDomRef.tagName != "BODY" && oDomRef.parentNode) {
            return UCF_DomUtil.bIsVisible(oDomRef.parentNode, true);
        } else {
            return true;
        }
    }
    return false;
}
;
UCF_DomUtil.oGetTopWindow = function() {
    if (this.oTopWindow)
        return this.oTopWindow;
    var oWindows = new Array();
    var oWindow = window;
    oWindows[oWindows.length] = oWindow;
    while (oWindow != oWindow.parent) {
        oWindows[oWindows.length] = oWindow.parent;
        oWindow = oWindow.parent;
    }
    for (var x = oWindows.length - 1; x >= 0; x--) {
        var oTopWindow = oWindows[x];
        try {
            oTopWindow.document.domain;
        } catch (e) {
            continue;
        }
        var iBs = oTopWindow.document.getElementsByTagName("frameset").length;
        if (iBs > 0)
            continue;return this.oTopWindow = oTopWindow;
    }
}
;
UCF_DomUtil.applyRuntimeStyle = function(oDomRef) {
    if (oDomRef.nodeType != 1)
        return;
    var aProperties = ["backgroundColor", "fontSize", "fontFamily", "borderStyle", "borderColor", "borderWidth", "padding"];
    if (oDomRef.currentStyle) {
        for (var i = 0; i < aProperties.length; i++)
            oDomRef.style[aProperties[i]] = oDomRef.currentStyle[aProperties[i]];
    } else {
        oDomRef.style.backgroundColor = window.getComputedStyle(oDomRef, "").getPropertyValue("background-color");
        for (var i = 0; i < aProperties.length; i++)
            oDomRef.style[aProperties[i]] = window.getComputedStyle(oDomRef, "").getPropertyValue(aProperties[i]);
    }
    var aChildNodes = oDomRef.childNodes;
    for (var i = 0; i < aChildNodes.length; i++)
        UCF_DomUtil.applyRuntimeStyle(aChildNodes[i]);
}
;
UCF_DomUtil.oGetFirstFocusableDomRef = function(oContainerDomRef) {
    if (!oContainerDomRef || !UCF_DomUtil.bIsVisible(oContainerDomRef))
        return null ;
    var oCurrDomRef = oContainerDomRef.firstChild
      , oDomRefFound = null ;
    while (oCurrDomRef) {
        if (oCurrDomRef.nodeType == 1 && UCF_DomUtil.bIsVisible(oCurrDomRef)) {
            if (UCF_DomUtil.bHasTabIndex(oCurrDomRef)) {
                return oCurrDomRef;
            }
            if (oCurrDomRef.childNodes) {
                oDomRefFound = UCF_DomUtil.oGetFirstFocusableDomRef(oCurrDomRef);
                if (oDomRefFound)
                    return oDomRefFound;
            }
        }
        oCurrDomRef = oCurrDomRef.nextSibling;
    }
    return null ;
}
;
UCF_DomUtil.oGetLastFocusableDomRef = function(oContainerDomRef) {
    if (!oContainerDomRef || !UCF_DomUtil.bIsVisible(oContainerDomRef))
        return null ;
    var oCurrDomRef = oContainerDomRef.lastChild
      , oDomRefFound = null ;
    while (oCurrDomRef) {
        if (oCurrDomRef.nodeType == 1 && UCF_DomUtil.bIsVisible(oCurrDomRef)) {
            if (oCurrDomRef.childNodes) {
                oDomRefFound = UCF_DomUtil.oGetLastFocusableDomRef(oCurrDomRef);
                if (oDomRefFound)
                    return oDomRefFound;
            }
            if (UCF_DomUtil.bHasTabIndex(oCurrDomRef)) {
                return oCurrDomRef;
            }
        }
        oCurrDomRef = oCurrDomRef.previousSibling;
    }
    return null ;
}
;
UCF_DomUtil.removeFromDom = function(oDomRef) {
    if (oDomRef && oDomRef.parentNode)
        oDomRef.parentNode.removeChild(oDomRef);
}
;
UCF_DomUtil.removePreviousIdDuplicates = function(oDomRef) {
    var sDomRefId = oDomRef.getAttribute("id");
    if (sDomRefId) {
        var oFoundDomRef = UCF_DomUtil.$(sDomRefId)
          , oLastFoundDomRef = null ;
        while (oFoundDomRef && oFoundDomRef != oDomRef && oFoundDomRef != oLastFoundDomRef) {
            if (oFoundDomRef.parentNode)
                oFoundDomRef.parentNode.removeChild(oFoundDomRef);
            oLastFoundDomRef = oFoundDomRef;
            oFoundDomRef = UCF_DomUtil.$(sDomRefId);
        }
    }
}
;
UCF_DomUtil.oGetTabbableElementForward = function(oDomRef, bAscending) {
    var oResult = null 
      , ELEMENT_NODE = 1;
    while (oDomRef != null ) {
        if (oDomRef.nodeType == ELEMENT_NODE) {
            if (UCF_DomUtil.bHasTabIndex(oDomRef))
                return oDomRef;
            if (oDomRef.firstChild)
                oResult = UCF_DomUtil.oGetTabbableElementForward(oDomRef.firstChild, false);
            if (oResult)
                return oResult;
        }
        oDomRef = UCF_DomUtil.oGetNextSibling(oDomRef, bAscending);
    }
    return null ;
}
;
UCF_DomUtil.oGetTabbableElementBackward = function(oDomRef, bAscending) {
    var oResult = null 
      , ELEMENT_NODE = 1;
    while (oDomRef != null ) {
        if (oDomRef.nodeType == ELEMENT_NODE) {
            if (oDomRef.lastChild)
                oResult = UCF_DomUtil.oGetTabbableElementBackward(oDomRef.lastChild, false);
            if (oResult)
                return oResult;
            if (UCF_DomUtil.bHasTabIndex(oDomRef))
                return oDomRef;
        }
        oDomRef = UCF_DomUtil.oGetPreviousSibling(oDomRef, bAscending);
    }
    return null ;
}
;
UCF_DomUtil.oGetNextSibling = function(oDomRef, bAscending) {
    if (!bAscending)
        return oDomRef.nextSibling;
    while (oDomRef != null ) {
        if (oDomRef.nextSibling)
            return oDomRef.nextSibling;
        oDomRef = oDomRef.parentNode;
    }
    return null ;
}
;
UCF_DomUtil.oGetPreviousSibling = function(oDomRef, bAscending) {
    if (!bAscending)
        return oDomRef.previousSibling;
    while (oDomRef != null ) {
        if (oDomRef.previousSibling)
            return oDomRef.previousSibling;
        oDomRef = oDomRef.parentNode;
    }
    return null ;
}
;
UCF_DomUtil.removeCaret = function(oDomRef) {
    if (document.selection) {
        if (oDomRef) {
            if (oDomRef.tagName == "INPUT") {
                try {
                    document.selection.empty();
                } catch (e) {}
            }
        }
    }
}
;
UCF_DomUtil.sGetValueForClassAndProperty = function(sClassName, sPropertyName) {
    for (var j = 0; j < document.styleSheets.length; j++) {
        var oStyleSheet = document.styleSheets[j]
          , oRules = oStyleSheet.rules || oStyleSheet.cssRules
          , oRule = null ;
        for (var i = 0; i < oRules.length; i++) {
            oRule = oRules[i];
            if (oRule.selectorText.toLowerCase() == sClassName.toLowerCase()) {
                return oRule.style[sPropertyName];
            }
        }
    }
    return null ;
}
;
UCF_DomUtil.iConvertAnySizeToPixel = function(sSize) {
    if (typeof (sSize) == "string" && sSize.indexOf("%") > 0) {
        return UCF_DomUtil.oGetInnerSize(window).width * parseInt(sSize) / 100;
    }
    var oDiv = document.createElement("div");
    document.body.appendChild(oDiv);
    var oStyle = oDiv.style;
    oStyle.position = "absolute";
    oStyle.left = "0px";
    oStyle.top = "-5000px";
    oStyle.width = sSize;
    var pixelWidth = oDiv.scrollWidth;
    UCF_DomUtil.removeFromDom(oDiv);
    return parseInt(pixelWidth);
}
;
function UCF_ClipboardUtil() {}
;UCF_ClipboardUtil.sLsClipboardBagId = "lsClipboardBag";
UCF_ClipboardUtil.oGetClipboardBag = function() {
    var oDomRefClipboardBag = UCF_DomUtil.$(UCF_ClipboardUtil.sLsClipboardBagId);
    if (!oDomRefClipboardBag) {
        var oDomRefButton = document.createElement("button");
        oDomRefButton.onselectstart = function() {
            event.cancelBubble = true;
        }
        ;
        oDomRefClipboardBag = document.createElement("div");
        oDomRefClipboardBag.setAttribute("id", UCF_ClipboardUtil.sLsClipboardBagId);
        oDomRefClipboardBag.style.overflow = "hidden";
        oDomRefClipboardBag.style.position = "absolute";
        oDomRefClipboardBag.style.top = "-10000px";
        oDomRefClipboardBag.style.height = "1px";
        oDomRefClipboardBag.style.width = "1px";
        oDomRefClipboardBag.appendChild(oDomRefButton);
        oDomRefClipboardBag.appendChild(document.createElement("div"));
        document.body.appendChild(oDomRefClipboardBag);
    }
    return oDomRefClipboardBag;
}
;
UCF_ClipboardUtil.cleanUpClipboardBag = function() {
    var oDomRefClipboardBag = UCF_DomUtil.$(UCF_ClipboardUtil.sLsClipboardBagId);
    if (oDomRefClipboardBag) {
        oDomRefClipboardBag.parentNode.removeChild(oDomRefClipboardBag);
    }
}
;
UCF_ClipboardUtil.setHtmlToClipboard = function(sHtmlContent) {
    var oDomRefClipboardBag = UCF_ClipboardUtil.oGetClipboardBag()
      , oDomRefContainer = oDomRefClipboardBag.firstChild
      , oDomRefPreparationContainer = oDomRefClipboardBag.lastChild;
    oDomRefPreparationContainer.style.display = "none";
    oDomRefPreparationContainer.innerHTML = sHtmlContent;
    oDomRefPreparationContainer.style.display = "block";
    if (oDomRefPreparationContainer.firstChild && oDomRefPreparationContainer.firstChild.getAttribute("ct") == "ST" && oDomRefPreparationContainer.firstChild.tBodies[0] && oDomRefPreparationContainer.firstChild.tBodies[0].firstChild && oDomRefPreparationContainer.firstChild.tBodies[0].firstChild.firstChild) {
        oDomRefPreparationContainer.innerHTML = oDomRefPreparationContainer.firstChild.tBodies[0].firstChild.firstChild.innerHTML;
    }
    oDomRefPreparationContainer.style.display = "none";
    var oCollectionInputFields = oDomRefPreparationContainer.firstChild.getElementsByTagName("input")
      , oInputField = null 
      , oNewElement = null ;
    while (oCollectionInputFields.length > 0) {
        oInputField = oCollectionInputFields[0];
        oNewElement = document.createElement("span");
        oNewElement.innerHTML = oInputField.value;
        oInputField.parentNode.replaceChild(oNewElement, oInputField);
    }
    UCF_ClipboardUtil.convertClassToStyle(oDomRefPreparationContainer.firstChild);
    oDomRefContainer.innerHTML = oDomRefPreparationContainer.innerHTML;
    if (!oDomRefContainer.firstChild) {
        oDomRefContainer.innerHTML = "<div>No data available</div>";
    }
    var oRange = oDomRefContainer.createTextRange();
    oRange.select();
    oRange.execCommand("Copy");
}
;
UCF_ClipboardUtil.convertClassToStyle = function(oDomRefContent) {
    if (oDomRefContent.tagName == "TABLE") {
        oDomRefContent.style.borderCollapse = oDomRefContent.currentStyle.borderCollapse;
        oDomRefContent.className = "";
    } else if (oDomRefContent.className && oDomRefContent.currentStyle) {
        oDomRefContent.style.backgroundColor = oDomRefContent.currentStyle.backgroundColor;
        oDomRefContent.style.fontSize = "8pt";
        oDomRefContent.style.fontFamily = "Arial,Helvetica,sans-serif;";
        oDomRefContent.className = "";
    }
    if (oDomRefContent.tagName == "TD" || oDomRefContent.tagName == "TH") {
        oDomRefContent.innerHTML = oDomRefContent.innerText;
        oDomRefContent.style.padding = "4px 6px";
    }
    if (oDomRefContent.childNodes) {
        for (var n = 0; n < oDomRefContent.childNodes.length; n++) {
            UCF_ClipboardUtil.convertClassToStyle(oDomRefContent.childNodes[n]);
        }
    }
}
;
function UCF_BrowserWindow(oRootRef) {
    UCF_EventProvider.apply(this);
    var oBrowserWindow = this;
    this.forwardBrowserEvent = function(oDomEvent) {
        oBrowserWindow.handleBrowserEvent(oDomEvent);
    }
    ;
    this.oRootRef = oRootRef;
    UCF_KeyboardHelper.oRootRef = oRootRef;
    this.attachBrowserEvents(this.A_WINDOW_EVENTS, window);
    this.attachBrowserEvents(this.A_DOCUMENT_EVENTS, document);
    this.attachBrowserEvents(this.A_DOM_EVENTS, this.oRootRef);
    this.iZoom = 100;
    this.oLocked = {};
    this.oCurrentDomRef = null ;
    this.oBrowserEventPool = new (UCF_ClassLoader.oGetClass("UCF_ObjectPool"))(UCF_BrowserEvent);
    this.oResizeEventHelper = null ;
    this.oDragAndDropManager = null ;
    this.bFocussed = true;
    this.iVisibleLayers = 0;
    this.bEventPlayer = false;
    this.sDelayedDoubleClickTimeout = null ;
    this.oDelayedDoubleClickedDomRef = null ;
}
;UCF_BrowserWindow.prototype = new UCF_EventProvider();
UCF_BrowserWindow.LOCKTYPES = {
    ROUNDTRIP: "ROUNDTRIP",
    DRAGDROP: "DRAGDROP",
    PENDINGNAVIGATION: "PENDINGNAVIGATION",
    POPUP: "POPUP"
};
UCF_BrowserWindow.prototype.E_LS_EVENTS = {
    up: "lsup",
    down: "lsdown",
    left: "lsleft",
    right: "lsright",
    next: "lsnext",
    previous: "lsprevious",
    pageup: "lspageup",
    pagedown: "lspagedown",
    top: "lstop",
    bottom: "lsbottom",
    home: "lshome",
    end: "lsend",
    select: "lsselect",
    space: "lsspace",
    enter: "lsenter",
    escape: "lsescape",
    expand: "lsexpand",
    collapse: "lscollapse",
    collapseall: "lscollapseall",
    show: "lsshow",
    hide: "lshide",
    dragstart: "lsdragstart",
    drag: "lsdrag",
    dragover: "lsdragover",
    draghover: "lsdraghover",
    dragscroll: "lsdragscroll",
    drop: "lsdrop",
    dragend: "lsdragend",
    dragenter: "lsdragenter",
    dragleave: "lsdragleave",
    focusin: "lsfocusin",
    focusout: "lsfocusout",
    focus: "lsfocus",
    blur: "lsblur",
    tabnext: "lstabnext",
    tabprevious: "lstabprevious",
    skipforward: "lsskipforward",
    skipback: "lsskipback",
    containerfocus: "lscontainerfocus",
    containerblur: "lscontainerblur",
    accessibility: "lsaccessibility",
    hotkey: "lshotkey",
    acchierarchy: "lsacchierarchy",
    focuslost: "lsfocuslost",
    delayeddoubleclick: "lsdelayeddoubleclick"
};
UCF_BrowserWindow.prototype.E_EVENTS = {
    ControlEvent: 0,
    Load: 1,
    Unload: 2,
    Resize: 3,
    Focus: 4,
    Blur: 5,
    AnyEvent: 6,
    Debug: 7,
    LayoutChange: 8,
    EventPlayer: 9,
    Lock: 10,
    Unlock: 11,
    LayersVisible: 12,
    LayersHidden: 13
};
UCF_BrowserWindow.prototype.A_WINDOW_EVENTS = ["load", "unload", "resize", "scroll", "focus"];
UCF_BrowserWindow.prototype.A_DOM_EVENTS = ["click", "dblclick", "dragstart", "drop", "mousedown", "mouseup", "mouseover", "mouseout", "paste", "cut", "activate", "deactivate", "focusin", "focusout", "focus", "blur", "mousewheel", "help"];
UCF_BrowserWindow.prototype.A_DOCUMENT_EVENTS = ["contextmenu", "select", "selectstart", "submit", "keydown", "keyup", "keypress", "reset"];
UCF_BrowserWindow.prototype.destroy = function() {
    this.detachBrowserEvents(this.A_WINDOW_EVENTS, window);
    this.detachBrowserEvents(this.A_DOCUMENT_EVENTS, document);
    this.detachBrowserEvents(this.A_DOM_EVENTS, this.oRootRef);
    this.oRootRef = null ;
}
;
UCF_BrowserWindow.prototype.attachBrowserEvent = function(sName, oDomRef) {
    if (UCF_System.sDevice != "ie6" && sName == "resize" && oDomRef != window) {
        if (!this.oResizeEventHelper)
            this.oResizeEventHelper = new (UCF_ClassLoader.oGetClass("UCF_ResizeEventHelper"))(this.forwardBrowserEvent);
        this.oResizeEventHelper.attachEvent(oDomRef);
        return;
    }
    UCF_DomUtil.attachEvent(oDomRef, sName, this.forwardBrowserEvent, true);
}
;
UCF_BrowserWindow.prototype.attachBrowserEvents = function(aEventList, oDomRef) {
    for (var i = 0; i < aEventList.length; i++) {
        this.attachBrowserEvent(aEventList[i], oDomRef);
    }
}
;
UCF_BrowserWindow.prototype.detachBrowserEvent = function(sName, oDomRef) {
    if (UCF_System.sDevice != "ie6" && sName == "resize" && oDomRef != window) {
        if (this.oResizeEventHelper)
            this.oResizeEventHelper.detachEvent(oDomRef);
        return
    }
    UCF_DomUtil.detachEvent(oDomRef, sName, this.forwardBrowserEvent, true);
}
;
UCF_BrowserWindow.prototype.detachBrowserEvents = function(aEventList, oDomRef) {
    for (var i = 0; i < aEventList.length; i++) {
        this.detachBrowserEvent(aEventList[i], oDomRef);
    }
}
;
UCF_BrowserWindow.prototype.lock = function(type) {
    UCF_DomUtil.removeCaret(this.oCurrentDomRef);
    if (!this.bIsLocked()) {
        this.fireEvent(this.E_EVENTS.Lock);
    }
    this.oLocked[type] = true;
}
;
UCF_BrowserWindow.prototype.unlock = function(type) {
    var bWasLocked = this.bIsLocked();
    delete this.oLocked[type];
    if (bWasLocked && !this.bIsLocked()) {
        this.fireEvent(this.E_EVENTS.Unlock);
    }
}
;
UCF_BrowserWindow.prototype.bIsLocked = function() {
    for (var i in this.oLocked) {
        return true;
    }
    return false;
}
;
UCF_BrowserWindow.prototype.bIsLockedByType = function(type) {
    var bLocked = this.oLocked[type];
    if (bLocked)
        return true;
    else
        return false;
}
;
UCF_BrowserWindow.prototype.handleBrowserEvent = function(oDomEvent) {
    var oBrowserEvent = this.oBrowserEventPool.oBorrowObject(oDomEvent);
    var sHandlerName = "on" + oBrowserEvent.sGetName();
    if (this[sHandlerName])
        this[sHandlerName](oBrowserEvent);
    if (this.bEventPlayer) {
        var mEventParams = {
            oBrowserEvent: oBrowserEvent
        };
        this.fireEvent(this.E_EVENTS.EventPlayer, mEventParams);
    }
    this.processBrowserEvent(oBrowserEvent);
    this.oBrowserEventPool.returnObject(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.processBrowserEvent = function(oBrowserEvent) {
    var bProcessDragDrop = (this.oLocked[UCF_BrowserWindow.LOCKTYPES.DRAGDROP] && this.bIsDragDropEvent(oBrowserEvent.sGetName()));
    if (this.bIsLocked() && oBrowserEvent.bIsUserTriggered() && !bProcessDragDrop) {
        if (this.oLocked[UCF_BrowserWindow.LOCKTYPES.DRAGDROP])
            return;
        oBrowserEvent.cancel();
        return;
    }
    if (oBrowserEvent.bLocked) {
        oBrowserEvent.cancel();
        return;
    }
    if (oBrowserEvent.bCancelBubble)
        return;
    var mEventParams = {
        oBrowserEvent: oBrowserEvent
    };
    this.fireEvent(this.E_EVENTS.AnyEvent, mEventParams);
    this.fireEvent(this.E_EVENTS.ControlEvent, mEventParams);
}
;
UCF_BrowserWindow.prototype.oGetDragAndDropManager = function() {
    if (!this.oDragAndDropManager) {
        this.oDragAndDropManager = new (UCF_ClassLoader.oGetClass("UCF_DragAndDropManager"))(this);
    }
    return this.oDragAndDropManager;
}
;
UCF_BrowserWindow.prototype.oncontextmenu = function(oBrowserEvent) {
    if (!this.oDragAndDropManager)
        return;
    this.oDragAndDropManager.notifyContextMenu(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onselectstart = function(oBrowserEvent) {
    oBrowserEvent.cancel();
}
;
UCF_BrowserWindow.prototype.onselect = function(oBrowserEvent) {
    oBrowserEvent.oDomEvent.returnValue = false;
}
;
UCF_BrowserWindow.prototype.onfocusin = function(oBrowserEvent) {
    this.oNextFocusDomRef = oBrowserEvent.oGetSource();
    if (!this.bFocussed) {
        this.bFocussed = true;
        this.fireEvent(this.E_EVENTS.Focus);
    }
    oBrowserEvent.oFromElement = this.oCurrentDomRef;
    this.oNextFocusDomRef = oBrowserEvent.oGetSource();
    this.oCurrentDomRef = oBrowserEvent.oGetSource();
    UCF_DomUtil.setActiveElement(this.oCurrentDomRef);
    this.fireLSEvent(this.E_LS_EVENTS.focus, oBrowserEvent);
    this.fireLSEvent(this.E_LS_EVENTS.containerfocus, oBrowserEvent);
    if (window.UCF_System.bIs508) {
        this.fireLSEvent(this.E_LS_EVENTS.accessibility, oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.onfocus = function(oBrowserEvent) {
    if (window.UCF_System.sDevice.indexOf("ie") == -1) {
        this.onfocusin(oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.checkForLostFocus = function(oBrowserEvent) {
    if (UCF_UserAgent.bIsWebKit() && !UCF_DomUtil.bIsInActiveDom(this.oCurrentDomRef)) {
        return;
    }
    if (this.oNextFocusDomRef == null ) {
        if (this.bFocussed) {
            this.bFocussed = false;
            this.fireEvent(this.E_EVENTS.Blur);
        }
    }
    if (this.oNextFocusDomRef == null  || this.oNextFocusDomRef.tagName && this.oNextFocusDomRef.tagName == "IFRAME") {
        oBrowserEvent.oDomEvent = {
            srcElement: null ,
            type: "lsfocuslost"
        };
        this.fireLSEvent(this.E_LS_EVENTS.focuslost, oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.onblur = function(oBrowserEvent) {
    if (UCF_UserAgent.bIsFirefox() || (UCF_UserAgent.bIsSafari() && !UCF_UserAgent.bIsSafari(5))) {
        this.onfocusout(oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.onfocusout = function(oBrowserEvent) {
    this.oNextFocusDomRef = null ;
    this.oPreviousFocusDomRef = this.oCurrentDomRef;
    if (oBrowserEvent.oDomEvent.toElement == null ) {}
    if (this.oCurrentDomRef) {
        UCF_DomUtil.setActiveElement(this.oCurrentDomRef);
    }
    this.fireLSEvent(this.E_LS_EVENTS.blur, oBrowserEvent);
    this.fireLSEvent(this.E_LS_EVENTS.containerblur, oBrowserEvent);
    UCF_JsUtil.delayedCall(0, this, "checkForLostFocus", [oBrowserEvent]);
}
;
UCF_BrowserWindow.prototype.onkeyup = function(oBrowserEvent) {
    var iKey = oBrowserEvent.iKeyCode();
    if (iKey == UCF_KeyCodes.ALT) {
        UCF_KeyboardHelper.hideAccessKeys();
    }
    if (this.oDragAndDropManager) {
        this.oDragAndDropManager.notifyKeyUp(oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.onkeydown = function(oBrowserEvent) {
    var iKey = oBrowserEvent.iKeyCode()
      , bCtrl = oBrowserEvent.bCtrl()
      , bShift = oBrowserEvent.bShift()
      , bAlt = oBrowserEvent.bAlt();
    if (!bAlt)
        UCF_KeyboardHelper.hideAccessKeys();
    var bArrowKey = (iKey == UCF_KeyCodes.ARROW_DOWN || iKey == UCF_KeyCodes.ARROW_UP || iKey == UCF_KeyCodes.ARROW_LEFT || iKey == UCF_KeyCodes.ARROW_RIGHT);
    if (bAlt && !bCtrl && !bArrowKey) {
        UCF_KeyboardHelper.showAccessKeys();
    }
    if (bCtrl && bAlt && bShift && UCF_System.bClientDebug) {
        var mEventParams = {
            iKey: iKey
        };
        this.fireEvent(this.E_EVENTS.Debug, mEventParams);
        oBrowserEvent.cancel();
        return;
    }
    this.findMatchingLSEvents(oBrowserEvent);
    if (this.oDragAndDropManager) {
        this.oDragAndDropManager.notifyKeyDown(oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.onresize = function(oBrowserEvent) {
    var oSource = oBrowserEvent.oGetSource();
    if (!oSource || oSource == document) {
        UCF_JsUtil.delayedCall(0, this, "notifyLayoutChange");
    }
}
;
UCF_BrowserWindow.prototype.findMatchingLSEvents = function(oBrowserEvent) {
    var iKey = oBrowserEvent.iKeyCode()
      , bCtrl = oBrowserEvent.bCtrl()
      , bShift = oBrowserEvent.bShift()
      , bAlt = oBrowserEvent.bAlt()
      , bCtrlOnly = bCtrl && !bShift && !bAlt
      , bAltOnly = bAlt && !bCtrl && !bShift
      , bShiftOnly = bShift && !bCtrl && !bAlt
      , bCtrlAlt = bCtrl && bAlt && !bShift
      , bNoModifiers = !bCtrl && !bAlt && !bShift;
    if (iKey == UCF_KeyCodes.ARROW_DOWN) {
        this.fireLSEvent(this.E_LS_EVENTS.down, oBrowserEvent, true);
        if (bAltOnly) {
            this.fireLSEvent(this.E_LS_EVENTS.show, oBrowserEvent);
        }
    } else if (iKey == UCF_KeyCodes.ARROW_UP) {
        this.fireLSEvent(this.E_LS_EVENTS.up, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.ARROW_LEFT) {
        this.fireLSEvent(this.E_LS_EVENTS.left, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.ARROW_RIGHT) {
        this.fireLSEvent(this.E_LS_EVENTS.right, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.HOME) {
        this.fireLSEvent(this.E_LS_EVENTS.home, oBrowserEvent, true);
        if (bCtrlOnly) {
            this.fireLSEvent(this.E_LS_EVENTS.top, oBrowserEvent);
        }
    } else if (iKey == UCF_KeyCodes.END) {
        this.fireLSEvent(this.E_LS_EVENTS.end, oBrowserEvent, true);
        if (bCtrlOnly) {
            this.fireLSEvent(this.E_LS_EVENTS.bottom, oBrowserEvent);
        }
    } else if (iKey == UCF_KeyCodes.PAGE_UP) {
        this.fireLSEvent(this.E_LS_EVENTS.pageup, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.PAGE_DOWN) {
        this.fireLSEvent(this.E_LS_EVENTS.pagedown, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.SPACE) {
        this.fireLSEvent(this.E_LS_EVENTS.select, oBrowserEvent, true);
        this.fireLSEvent(this.E_LS_EVENTS.space, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.ENTER) {
        this.fireLSEvent(this.E_LS_EVENTS.select, oBrowserEvent, true);
        this.fireLSEvent(this.E_LS_EVENTS.enter, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.NUMPAD_PLUS) {
        this.fireLSEvent(this.E_LS_EVENTS.expand, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.NUMPAD_MINUS) {
        this.fireLSEvent(this.E_LS_EVENTS.collapse, oBrowserEvent, true);
    } else if (iKey == UCF_KeyCodes.NUMPAD_ASTERISK && bNoModifiers) {
        this.fireLSEvent(this.E_LS_EVENTS.collapseall, oBrowserEvent);
    } else if (iKey == UCF_KeyCodes.ESCAPE && bNoModifiers) {
        if (this.oDragAndDropManager) {
            this.oDragAndDropManager.notifyEscapePressed(oBrowserEvent);
        }
        this.fireLSEvent(this.E_LS_EVENTS.escape, oBrowserEvent);
    } else if (iKey == UCF_KeyCodes.F4 && bNoModifiers)
        this.fireLSEvent(this.E_LS_EVENTS.show, oBrowserEvent);
    else if (iKey == UCF_KeyCodes.TAB && !bAlt && !bCtrl) {
        var sEventName = bShift ? this.E_LS_EVENTS.tabprevious : this.E_LS_EVENTS.tabnext;
        this.fireLSEvent(sEventName, oBrowserEvent);
    } else if (iKey == UCF_KeyCodes.F6 && !bAlt && !bCtrl) {
        var sEventName = bShift ? this.E_LS_EVENTS.skipback : this.E_LS_EVENTS.skipforward;
        this.fireLSEvent(sEventName, oBrowserEvent);
    } else if (iKey == UCF_KeyCodes.F10 && bShiftOnly) {
        this.fireLSEvent("contextmenu", oBrowserEvent);
    } else if (UCF_System.bIs508 && (iKey == UCF_KeyCodes.V || iKey == UCF_KeyCodes.W) && bCtrlAlt) {
        this.fireLSEvent(this.E_LS_EVENTS.acchierarchy, oBrowserEvent);
    }
    if (oBrowserEvent.bIsDomEventCanceled())
        return;
    var iNextKey = UCF_System.bIsRTL ? UCF_KeyCodes.ARROW_LEFT : UCF_KeyCodes.ARROW_RIGHT
      , iPreviousKey = UCF_System.bIsRTL ? UCF_KeyCodes.ARROW_RIGHT : UCF_KeyCodes.ARROW_LEFT;
    if (iKey == iPreviousKey || iKey == UCF_KeyCodes.ARROW_UP) {
        this.fireLSEvent(this.E_LS_EVENTS.previous, oBrowserEvent, true);
    }
    if (iKey == iNextKey || iKey == UCF_KeyCodes.ARROW_DOWN) {
        this.fireLSEvent(this.E_LS_EVENTS.next, oBrowserEvent, true);
    }
    if (UCF_KeyboardHelper.bIsValidHotkey(iKey, bCtrl, bAlt, bShift)) {
        if (iKey == UCF_KeyCodes.F1 && bNoModifiers) {
            if (UCF_System.sDevice == "ff1" || UCF_System.sDevice == "sf3") {
                this.fireLSEvent(this.E_LS_EVENTS.hotkey, oBrowserEvent);
            }
        } else if (bCtrlOnly && iKey == UCF_KeyCodes.C && document.selection) {
            var oTextRange = document.selection.createRange();
            if (!oTextRange || oTextRange.text.length <= 0) {
                this.fireLSEvent(this.E_LS_EVENTS.hotkey, oBrowserEvent);
            }
        } else {
            this.fireLSEvent(this.E_LS_EVENTS.hotkey, oBrowserEvent);
        }
    }
}
;
UCF_BrowserWindow.prototype.fireLSEvent = function(sName, oBrowserEvent, bCheckModifier) {
    var bAnyModifier = oBrowserEvent.bCtrl() || oBrowserEvent.bShift() || oBrowserEvent.bAlt()
      , oNewBrowserEvent = this.oBrowserEventPool.oBorrowObject(oBrowserEvent.oDomEvent);
    if (bCheckModifier && bAnyModifier)
        sName += "modifier";
    oNewBrowserEvent.setName(sName);
    oNewBrowserEvent.setSource(oBrowserEvent.oGetSource());
    oNewBrowserEvent.oFromElement = oBrowserEvent.oFromElement;
    oNewBrowserEvent.oSourceControl = oBrowserEvent.oSourceControl;
    this.processBrowserEvent(oNewBrowserEvent);
    this.oBrowserEventPool.returnObject(oNewBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onmousedown = function(oBrowserEvent) {
    if (!this.oDragAndDropManager)
        this.oDragAndDropManager = new (UCF_ClassLoader.oGetClass("UCF_DragAndDropManager"))(this);
    this.oDragAndDropManager.notifyMouseDown(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onmouseover = function(oBrowserEvent) {
    if (!this.oDragAndDropManager && UCF_DomUtil.oGetTopWindow().oDragSession)
        this.oDragAndDropManager = new (UCF_ClassLoader.oGetClass("UCF_DragAndDropManager"))(this);
    if (!this.oDragAndDropManager)
        return;
    this.oDragAndDropManager.notifyMouseOver(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onmouseout = function(oBrowserEvent) {
    if (!this.oDragAndDropManager)
        return;
    this.oDragAndDropManager.notifyMouseOut(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onmousemove = function(oBrowserEvent) {
    if (!this.oDragAndDropManager)
        return;
    this.oDragAndDropManager.notifyMouseMove(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onmouseup = function(oBrowserEvent) {
    if (!this.oDragAndDropManager)
        return;
    this.oDragAndDropManager.notifyMouseUp(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onclick = function(oBrowserEvent) {
    if (this.oDragAndDropManager)
        this.oDragAndDropManager.notifyMouseClick(oBrowserEvent);
    if (this.sDelayedDoubleClickTimeout == null  || oBrowserEvent.oGetSource() != this.oDelayedDoubleClickedDomRef) {
        this.oDelayedDoubleClickedDomRef = oBrowserEvent.oGetSource();
        UCF_JsUtil.clearDelayedCall(this.sDelayedDoubleClickTimeout);
        this.sDelayedDoubleClickTimeout = UCF_JsUtil.delayedCall(300, this, "openDelayedDoubleClickGate", []);
    }
    if (this.sDelayedDoubleClickTimeout == -1) {
        this.sDelayedDoubleClickTimeout = null ;
        this.fireLSEvent(this.E_LS_EVENTS.delayeddoubleclick, oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.openDelayedDoubleClickGate = function() {
    this.sDelayedDoubleClickTimeout = -1;
}
;
UCF_BrowserWindow.prototype.notifyLayoutChange = function() {
    this.fireEvent(this.E_EVENTS.LayoutChange);
}
;
UCF_BrowserWindow.prototype.notifyLayerVisible = function() {
    if (this.iVisibleLayers == 0) {
        this.fireEvent(this.E_EVENTS.LayersVisible);
    }
    this.iVisibleLayers++;
}
;
UCF_BrowserWindow.prototype.notifyLayerHidden = function() {
    this.iVisibleLayers--;
    if (this.iVisibleLayers == 0) {
        this.fireEvent(this.E_EVENTS.LayersHidden);
    }
}
;
UCF_BrowserWindow.prototype.onhelp = function(oBrowserEvent) {
    this.fireLSEvent(this.E_LS_EVENTS.hotkey, oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.bIsDragDropEvent = function(sName) {
    switch (sName) {
    case this.E_LS_EVENTS.drag:
    case this.E_LS_EVENTS.dragover:
    case this.E_LS_EVENTS.draghover:
    case this.E_LS_EVENTS.dragscroll:
    case this.E_LS_EVENTS.drop:
    case this.E_LS_EVENTS.dragend:
    case this.E_LS_EVENTS.dragenter:
    case this.E_LS_EVENTS.dragleave:
    case this.E_LS_EVENTS.mousemove:
        return true;
    default:
        return false;
    }
}
;
function UCF_DebugHelper(oLS) {
    UCF_Object.apply(this);
    this.mDebugHandlers = {};
    var oBrowserWindow = oLS.oBrowserWindow;
    oBrowserWindow.attachEvent(oBrowserWindow.E_EVENTS.Debug, this, "onDebug");
    this.addDebugHandlerClass(UCF_KeyCodes.A, "UCF_AccessibilityInfo", "Show/hide accessibility text display");
    this.addDebugHandlerClass(UCF_KeyCodes.O, "UCF_ContainerOutliner", "Show nesting of HTML containers");
    this.addDebugHandlerClass(UCF_KeyCodes.D, "UCF_DOMAnalyzer", "Show HTML DOM analysis");
    this.addDebugHandlerClass(UCF_KeyCodes.N, "UCF_NestingAnalyzer", "Show nesting analysis");
    this.addDebugHandlerClass(UCF_KeyCodes.S, "UCF_SizeInfo", "Show/hide pane with size information");
    this.addDebugHandlerClass(UCF_KeyCodes.Y, "UCF_AccessibilityInfoText2Speech", "Start/stop the accessibility text2speech helper");
}
UCF_DebugHelper.prototype = new UCF_Object();
UCF_DebugHelper.prototype.destroy = function(oEvent) {
    var sClassName, oObject;
    UCF_Object.prototype.destroy.apply(this, arguments);
    for (var i in this.mDebugHandlers) {
        sClassName = this.mDebugHandler.sClassName;
        oObject = this.mDebugHandler.oObject;
        if (sClassName && oObject) {
            oObject.destroy();
        }
    }
}
;
UCF_DebugHelper.prototype.onDebug = function(oEvent) {
    var iKey = oEvent.oGetParam("iKey")
      , oDebugHandler = this.mDebugHandlers[iKey];
    if (iKey == UCF_KeyCodes.H) {
        this.showAvailableHandlers();
        return;
    }
    if (!oDebugHandler)
        return;
    if (!oDebugHandler.oObject) {
        var sClassName = oDebugHandler.sClassName
          , oClass = UCF_ClassLoader.oGetClass(sClassName);
        oDebugHandler.oObject = new oClass();
    }
    oDebugHandler.oObject.trigger();
}
;
UCF_DebugHelper.prototype.addDebugHandler = function(iKeyCode, oObject, sDescription) {
    this.mDebugHandlers[iKeyCode] = {
        oObject: oObject,
        sDescription: sDescription
    };
}
;
UCF_DebugHelper.prototype.addDebugHandlerClass = function(iKeyCode, sClassName, sDescription) {
    this.mDebugHandlers[iKeyCode] = {
        sClassName: sClassName,
        sDescription: sDescription
    };
}
;
UCF_DebugHelper.prototype.showAvailableHandlers = function() {
    var sDisplayText = "Available Ctrl-Alt-Shift Shortcuts:\n\n", oDebugHandler;
    for (var i in this.mDebugHandlers) {
        oDebugHandler = this.mDebugHandlers[i];
        sDisplayText += String.fromCharCode(i) + " - " + oDebugHandler.sDescription + "\n";
    }
    alert(sDisplayText);
}
;
function UCF_EventQueueItem(oSemanticEvent) {
    UCF_Object.apply(this);
    this.sControlName = oSemanticEvent.sGetControl();
    this.sEventName = oSemanticEvent.sGetName();
    this.sControlId = oSemanticEvent.mGetParameters()["Id"];
    this.sItemName = this.sControlName + "::" + this.sEventName + "::" + this.sControlId;
    this.sSerializedData = this.sSerialize(oSemanticEvent);
}
;UCF_EventQueueItem.prototype = new UCF_Object();
UCF_EventQueueItem.prototype.sGetControlName = function() {
    return this.sControlName;
}
;
UCF_EventQueueItem.prototype.sGetEventName = function() {
    return this.sEventName;
}
;
UCF_EventQueueItem.prototype.sGetControlId = function() {
    return this.sControlId;
}
;
UCF_EventQueueItem.prototype.sGetItemName = function() {
    return this.sItemName;
}
;
UCF_EventQueueItem.prototype.sGetSerializedData = function() {
    return this.sSerializedData;
}
;
UCF_EventQueueItem.prototype.sSerialize = function(oSemanticEvent) {
    var aBuff = [];
    var ose = oSemanticEvent;
    aBuff.push(ose.sGetControl());
    aBuff.push("_");
    aBuff.push(ose.sGetName());
    this.sSerializeSection(ose.mGetParameters(), aBuff, true);
    var ucfParam = ose.mGetUcfParameters();
    if (ucfParam == null  || ucfParam["Serialize"] == "none") {
        ucfParam = {};
    }
    this.sSerializeSection(ucfParam, aBuff, false);
    this.sSerializeSection(ose.mGetCustomParameters(), aBuff, false);
    return aBuff.join("");
}
;
UCF_EventQueueItem.prototype.sSerializeSection = function(oParams, aBuff, bCollectionAllowed) {
    var iCnt = 0;
    if (oParams == null )
        iCnt;
    aBuff.push(this.E_SEPARATORS.SECTION_BEGIN);
    var bFirst = true;
    for (var i in oParams) {
        if (!bFirst) {
            aBuff.push(this.E_SEPARATORS.KEYVALUE_PAIR);
        } else {
            bFirst = false;
        }
        aBuff.push(i);
        aBuff.push(this.E_SEPARATORS.KEYVALUE);
        this.sSerializePropertyValue(oParams[i], aBuff, bCollectionAllowed);
        iCnt++;
    }
    aBuff.push(this.E_SEPARATORS.SECTION_END);
    return iCnt;
}
;
UCF_EventQueueItem.prototype.sSerializePropertyValue = function(oValue, aBuff, bCollectionAllowed) {
    switch (typeof (oValue)) {
    case "object":
        if (this.bInstanceOfArray(oValue) && bCollectionAllowed) {
            for (var i = 0; i < oValue.length; i++) {
                switch (typeof (oValue[i])) {
                case "number":
                case "boolean":
                case "string":
                    if (i > 0)
                        aBuff.push(this.E_SEPARATORS.COLLECTION_ENTRY);
                    this.sSerializePropertyValue(oValue[i], aBuff, false);
                    break;
                default:
                    break;
                }
            }
        } else {}
        break;
    default:
        aBuff.push(oValue);
    }
}
;
UCF_EventQueueItem.prototype.bInstanceOfArray = function(oObject) {
    if (oObject instanceof Array)
        return true;
    if ("[object Array]" == Object.prototype.toString.apply(oObject))
        return true;
    return false;
}
;
UCF_EventQueueItem.prototype.E_SEPARATORS = {
    EVENT: "\ue001",
    SECTION_BEGIN: "\ue002",
    SECTION_END: "\ue003",
    KEYVALUE: "\ue004",
    KEYVALUE_PAIR: "\ue005",
    COLLECTION_ENTRY: "\ue006"
};
function UCF_LS(oRootRef, oSystem) {
    UCF_EventProvider.apply(this);
    if (window.UCF_bLSCreated) {
        return;
    }
    window.UCF_bLSCreated = true;
    this.setRootRef(oRootRef);
    this.oMainLS = null ;
    this.bStylesMoved = false;
    this.oDefaultButton = null ;
    this.sDragData = null ;
    this.sMainWindowId = "";
    this.bIsDestroyed = false;
    this.bIsLocked = false;
    this.bStoredFocusElementId = "";
    this.bDomChanged = false;
    this.bDirty = false;
    this.oSemanticEventHandlerObject = null ;
    this.sSemanticEventHandlerFunction = "";
    this.oApplicationExitHandlerObject = null ;
    this.sApplicationExitHandlerFunction = "";
    this.oPendingRequestHandlerObject = null ;
    this.sPendingRequestHandlerFunction = "";
    if (!oSystem) {
        this.oSystem = new (UCF_ClassLoader.oGetClass("UCF_System"))(document.getElementById("UCF_System"));
    } else {
        this.oSystem = oSystem;
    }
    this.oControlFactory = new (UCF_ClassLoader.oGetClass("UCF_ControlFactory"))(this);
    this.oBrowserWindow = new (UCF_ClassLoader.oGetClass("UCF_BrowserWindow"))(this.oRootRef);
    this.oDebugHelper = new (UCF_ClassLoader.oGetClass("UCF_DebugHelper"))(this);
    if (!this.oSystem.bUseActiveX)
        UCF_RequestUtil.disableActiveX();
    if (!this.oSystem.bUseXHR)
        UCF_RequestUtil.disableXHR();
    this.oPopupManager = null ;
    this.oMessageBundle = new (UCF_ClassLoader.oGetClass("UCF_MessageBundle"))();
    this.oBrowserWindow.attachEvent(this.oBrowserWindow.E_EVENTS.ControlEvent, this, "onControlEvent");
    if (!(this.bIsDestroyed && this.oSystem == null ) && this.oSystem.bIsUCF) {
        this.oEventHandler = new (UCF_ClassLoader.oGetClass("UCF_EventHandler"))(this);
        this.oEventHandler.activateStartupQueueing();
        this.oPageUpdater = new (UCF_ClassLoader.oGetClass("UCF_PageUpdater"))(this);
    }
    this.processInitializeIDs();
    if (this.oSystem.bIsUCF) {
        this.attachMainLSEvents();
    }
    if (!this.bIsMainLS()) {
        if (!this.oPopupManager)
            this.oPopupManager = new (UCF_ClassLoader.oGetClass("UCF_PopupManager"))(this);
        var sPopupId = this.oPopupManager.sGetPopupIdByWindow(window);
        this.oGetMainLS().oPopupManager.handleLSloaded(this, sPopupId);
    }
    this.attachToDebugWindow();
    UCF_ErrorMessage.attachDestroyHandler(this, "destroy");
    window.document.qtp_readystate = true;
    if (this.oEventHandler) {
        this.oEventHandler.deactivateStartupQueueing();
    }
    return this.oGetInterface();
}
;UCF_LS.prototype = new UCF_EventProvider();
UCF_LS.prototype.E_EVENTS = {
    SemanticEvent: 0,
    Lock: 1,
    Unlock: 2,
    PendingRequest: 3,
    FocusEnd: 4
};
UCF_LS.prototype.M_CONSTANTS = {
    LSPOPUP: "LSPOPUP"
};
UCF_LS.prototype.destroy = function(sErrorHTML) {
    if (this.bIsDestroyed)
        return;
    this.bIsDestroyed = true;
    if (this.oApplicationExitHandlerObject) {
        this.oApplicationExitHandlerObject[this.sApplicationExitHandlerFunction]()
    }
    if (this.oSystem.bIsUCF) {
        this.detachMainLSEvents();
        this.oEventHandler.destroy();
        this.oPageUpdater.destroy();
    }
    this.oControlFactory.destroy();
    this.oBrowserWindow.destroy();
    this.oSystem.destroy();
    if (this.oPopupManager) {
        if (this.bIsMainLS()) {
            this.oPopupManager.closeAllPopups();
        }
        this.oPopupManager.destroy();
    }
    if (this.oMessageBundle)
        this.oMessageBundle.destroy();
    if (this.oBlockLayer)
        this.oBlockLayer.destroy();
    this.oMainLS = null ;
    this.oRootRef = null ;
    if (sErrorHTML || sErrorHTML == "") {
        document.body.className = "";
        document.body.innerHTML = "<input type='hidden'>" + sErrorHTML;
    }
}
;
UCF_LS.prototype.addDebugHandler = function(iKeyCode, oObject, sDescription) {
    this.oDebugHelper.addDebugHandler(iKeyCode, oObject, sDescription);
}
;
UCF_LS.prototype.onControlEvent = function(oEvent) {
    var oBrowserEvent = oEvent.oGetParam("oBrowserEvent")
      , oSourceRef = oBrowserEvent.oGetSource()
      , oControlDomRef = oBrowserEvent.oGetSourceRoot()
      , oControl = null 
      , bIsAccessibilityEvent = this.oSystem.bIs508 && oBrowserEvent.sGetName() == this.oBrowserWindow.E_LS_EVENTS.accessibility;
    if (this.oControlFactory.bIsControlDomRef(oControlDomRef)) {
        oControl = this.oControlFactory.oGetControlByDomRef(oControlDomRef, true);
    } else {
        oControl = this.oGetPage();
    }
    oBrowserEvent.oSourceControl = oControl;
    if (bIsAccessibilityEvent) {
        oBrowserEvent.oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_AccessibilityHelper"))(this);
    }
    while (oControl && !oBrowserEvent.bCancelBubble) {
        this.dispatchBrowserEvent(oControl, oBrowserEvent);
        oControl = oControl.oGetParent();
    }
    if (bIsAccessibilityEvent) {
        oBrowserEvent.oAccessibilityHelper.apply(oBrowserEvent.oGetSource());
    }
    if (oBrowserEvent.bCancelBubble) {}
}
;
UCF_LS.prototype.dispatchBrowserEvent = function(oHandler, oBrowserEvent) {
    var sHandlerName = "on" + oBrowserEvent.sGetName()
      , aDelegates = null ;
    if (oHandler[sHandlerName]) {
        oHandler[sHandlerName](oBrowserEvent);
    }
    if (oHandler instanceof UCF_Control)
        aDelegates = oHandler.aGetDelegates();
    if (aDelegates != null ) {
        for (var i = 0; i < aDelegates.length; i++) {
            this.dispatchBrowserEvent(aDelegates[i], oBrowserEvent);
        }
    }
}
;
UCF_LS.prototype.oCreateSemanticEvent = function(sEventName, mParameters, mCustomParameters) {
    var oSemanticEvent = new (UCF_ClassLoader.oGetClass("UCF_SemanticEvent"))("Custom",sEventName,mParameters,mCustomParameters);
    return oSemanticEvent;
}
;
UCF_LS.prototype.fireSemanticEvent = function(oSemanticEvent) {
    this.processSemanticEvent(oSemanticEvent);
}
;
UCF_LS.prototype.processSemanticEvent = function(oSemanticEvent) {
    if (this.oSemanticEventHandlerObject) {
        this.oSemanticEventHandlerObject[this.sSemanticEventHandlerFunction](oSemanticEvent.oGetInterface());
    }
    this.fireEvent(this.E_EVENTS.SemanticEvent, {
        oSemanticEvent: oSemanticEvent
    });
}
;
UCF_LS.prototype.processPendingRequest = function(oPendingRequest) {
    if (this.oPendingRequestHandlerObject) {
        this.oPendingRequestHandlerObject[this.sPendingRequestHandlerFunction](oPendingRequest.oGetInterface());
    }
    this.fireEvent(this.E_EVENTS.PendingRequest, {
        oPendingRequest: oPendingRequest
    });
}
;
UCF_LS.prototype.setSemanticEventHandler = function(oSemanticEventHandlerObject, sSemanticEventHandlerFunction) {
    this.oSemanticEventHandlerObject = oSemanticEventHandlerObject;
    this.sSemanticEventHandlerFunction = sSemanticEventHandlerFunction;
}
;
UCF_LS.prototype.setApplicationExitHandler = function(oApplicationExitHandlerObject, sApplicationExitHandlerFunction) {
    this.oApplicationExitHandlerObject = oApplicationExitHandlerObject;
    this.sApplicationExitHandlerFunction = sApplicationExitHandlerFunction;
}
;
UCF_LS.prototype.setPendingRequestHandler = function(oPendingRequestHandlerObject, sPendingRequestHandlerFunction) {
    this.oPendingRequestHandlerObject = oPendingRequestHandlerObject;
    this.sPendingRequestHandlerFunction = sPendingRequestHandlerFunction;
}
;
UCF_LS.prototype.setMainWindowId = function(sMainWindowId) {
    this.sMainWindowId = sMainWindowId;
}
;
UCF_LS.prototype.sGetMainWindowId = function() {
    return this.sMainWindowId;
}
;
UCF_LS.prototype.bIsMainLS = function() {
    var bMainLS = true;
    if (parent != window) {
        try {
            parent.document;
        } catch (e) {
            this.bIsMainLS = function() {
                return bMainLS;
            }
            ;
            return bMainLS;
        }
        var aIFrames = parent.document.getElementsByTagName("iframe");
        for (var x = 0; x < aIFrames.length; x++) {
            var oIFrame = aIFrames[x];
            try {
                if (oIFrame.contentWindow != window)
                    continue;
            } catch (e) {
                continue;
            }
            if (oIFrame.getAttribute(this.M_CONSTANTS.LSPOPUP) == "true") {
                bMainLS = false;
                break;
            }
        }
    }
    this.bIsMainLS = function() {
        return bMainLS;
    }
    ;
    return bMainLS;
}
;
UCF_LS.prototype.oGetMainLS = function() {
    return this.oMainLS || (this.oMainLS = this.oFindMainLS());
}
;
UCF_LS.prototype.oFindMainLS = function() {
    if (!this.oPopupManager)
        this.oPopupManager = new (UCF_ClassLoader.oGetClass("UCF_PopupManager"))(this);
    var sPopupId = this.oPopupManager.sGetPopupIdByWindow(window);
    if (!sPopupId)
        return this;
    var oOpenerLS = this.oPopupManager.oGetOpenerLSByPopupId(sPopupId);
    if (oOpenerLS.bIsMainLS())
        return oOpenerLS;
    return oOpenerLS.oGetMainLS();
}
;
UCF_LS.prototype.attachMainLSEvents = function() {
    if (this.bIsMainLS())
        return;
    var oMainLS = this.oGetMainLS();
    oMainLS.attachEvent(oMainLS.E_EVENTS.Lock, this, "onMainLock");
    oMainLS.attachEvent(oMainLS.E_EVENTS.Unlock, this, "onMainUnlock");
    oMainLS.attachEvent(oMainLS.E_EVENTS.PendingRequest, this, "onMainPendingRequest");
}
;
UCF_LS.prototype.detachMainLSEvents = function() {
    if (this.bIsMainLS())
        return;
    var oMainLS = this.oGetMainLS();
    oMainLS.detachEvent(oMainLS.E_EVENTS.Lock, this);
    oMainLS.detachEvent(oMainLS.E_EVENTS.Unlock, this);
    oMainLS.detachEvent(oMainLS.E_EVENTS.PendingRequest, this);
}
;
UCF_LS.prototype.onMainLock = function(oEvent) {
    this.lock();
}
;
UCF_LS.prototype.onMainUnlock = function(oEvent) {
    this.unlock();
}
;
UCF_LS.prototype.onMainPendingRequest = function(oEvent) {
    var oPendingRequest = oEvent.oGetParam("oPendingRequest");
    this.processPendingRequest(oPendingRequest);
}
;
UCF_LS.prototype.attachToDebugWindow = function() {
    var oWinRef;
    if (this.bIsMainLS()) {
        oWinRef = window;
    } else {
        if (!this.oPopupManager)
            this.oPopupManager = new (UCF_ClassLoader.oGetClass("UCF_PopupManager"))(this);
        oWinRef = this.oPopupManager.oGetOpenerWindow(window);
    }
    var debugWindow = window.UCF_debugWindow;
    if (debugWindow)
        debugWindow.attachToLS(this, oWinRef);
}
;
UCF_LS.prototype.oGetPage = function() {
    var oPage = null ;
    if (this.oRootRef) {
        oPage = this.oControlFactory.oGetControlByDomRef(this.oRootRef, true);
    }
    return oPage;
}
;
UCF_LS.prototype.oGetPopupManager = function() {
    return this.oGetPopupManagerInternal().oGetInterface();
}
;
UCF_LS.prototype.oGetPopupManagerInternal = function() {
    if (!this.oPopupManager) {
        this.oPopupManager = new (UCF_ClassLoader.oGetClass("UCF_PopupManager"))(this);
    }
    return this.oPopupManager;
}
;
UCF_LS.prototype.processInitializeIDs = function() {
    var oIdRef = UCF_DomUtil.$("UCF_InitializeIDs");
    if (!oIdRef)
        return;
    var aIds = eval(oIdRef.innerHTML), sId, oControl;
    for (var i = 0; i < aIds.length; i++) {
        sId = aIds[i];
        oControl = this.oControlFactory.oGetControlById(sId);
        if (oControl && oControl.initialize) {
            oControl.initialize();
        }
    }
    if (oIdRef && oIdRef.parentNode) {
        oIdRef.parentNode.removeChild(oIdRef);
    }
}
;
UCF_LS.prototype.oGetControlById = function(sId) {
    var oControl = this.oControlFactory.oGetControlById(sId);
    return oControl && oControl.oGetInterface();
}
;
UCF_LS.prototype.oGetControlByDomRef = function(oDomRef) {
    var oControl = null ;
    while (oDomRef && oDomRef != window && oDomRef != document) {
        var sId = oDomRef.id, iRootPos;
        if (oDomRef.getAttribute("ct")) {
            return this.oControlFactory.oGetControlByDomRef(oDomRef, true);
        }
        if (sId) {
            iRootPos = sId.indexOf("-r");
            if (iRootPos > 0) {
                oDomRef = UCF_DomUtil.$(sId.substr(0, iRootPos));
                return this.oControlFactory.oGetControlByDomRef(oDomRef, true);
            }
        }
        oDomRef = oDomRef.parentNode;
    }
    return null ;
}
;
UCF_LS.prototype.purgeControls = function() {
    this.oControlFactory.purgeControls();
    UCF_DomUtil.purgeActiveElement();
}
;
UCF_LS.prototype.setRootRef = function(oRootRef) {
    if (!oRootRef) {
        oRootRef = document.body;
        var aDivs = document.getElementsByTagName("DIV")
          , oFirstDiv = aDivs[0]
          , oSecondDiv = aDivs[1];
        if (oFirstDiv && oFirstDiv.getAttribute("ct") == "PAGE") {
            oRootRef = oFirstDiv;
        } else if (oSecondDiv && oSecondDiv.getAttribute("ct") == "PAGE") {
            oRootRef = oSecondDiv;
        }
    }
    this.oRootRef = oRootRef;
}
;
UCF_LS.prototype.oGetRootRef = function() {
    return this.oRootRef;
}
;
UCF_LS.prototype.oGetAssociatedAreaRef = function() {
    var oPage = this.oGetPage();
    if (!oPage)
        return this.oRootRef;
    return oPage.oGetAssociatedAreaRef();
}
;
UCF_LS.prototype.oGetStaticAreaRef = function() {
    var oPage = this.oGetPage();
    if (!oPage)
        return document.body;
    return oPage.oGetStaticAreaRef();
}
;
UCF_LS.prototype.sGetText = function(sKey) {
    if (!this.oMessageBundle) {
        this.oMessageBundle = new (UCF_ClassLoader.oGetClass("UCF_MessageBundle"))();
    }
    return this.oMessageBundle.sGetText(sKey);
}
;
UCF_LS.prototype.sGetRawText = function(sKey) {
    if (!this.oMessageBundle) {
        this.oMessageBundle = new (UCF_ClassLoader.oGetClass("UCF_MessageBundle"))();
    }
    return this.oMessageBundle.sGetRawText(sKey);
}
;
UCF_LS.prototype.updateControl = function(sControlId, sHTML) {
    var oControl = this.oControlFactory.oGetControlById(sControlId)
      , oRootRef = oControl.oRootRef
      , oParentRef = oRootRef.parentNode
      , oPreviousRef = oRootRef.previousSibling
      , oStyle = this.oRootRef.getElementsByTagName("STYLE")[0];
    if (oStyle && !this.bStylesMoved) {
        this.bStylesMoved = true;
        document.getElementsByTagName("HEAD")[0].appendChild(oStyle);
    }
    oPreviousRef = oRootRef.previousSibling;
    while (oPreviousRef && oPreviousRef.nodeType != 1)
        oPreviousRef = oPreviousRef.previousSibling;
    if (oPreviousRef && oPreviousRef.tagName && oPreviousRef.tagName.toLowerCase() == "style") {
        oParentRef.removeChild(oPreviousRef);
    }
    if (UCF_System.sDevice == "ie6") {
        oRootRef.outerHTML = sHTML;
    } else {
        var oTemp = document.createElement("div"), oNewRef, oParentRef;
        oTemp.innerHTML = sHTML;
        oNewRef = oTemp.childNodes[0];
        oParentRef.replaceChild(oNewRef, oRootRef);
        while (oTemp.childNodes.length > 0) {
            oParentRef.appendChild(oTemp.childNodes[0]);
        }
    }
    this.purgeControls();
    this.processInitializeIDs();
}
;
UCF_LS.prototype.updateDomRef = function(oDomRef, sHTML) {
    var oRoot = oDomRef
      , oStyle = oDomRef.getElementsByTagName("STYLE")[0];
    if (oStyle && !this.bStylesMoved) {
        this.bStylesMoved = true;
        document.getElementsByTagName("HEAD")[0].appendChild(oStyle);
    }
    oRoot.innerHTML = sHTML;
    this.purgeControls();
    this.processInitializeIDs();
}
;
UCF_LS.prototype.updatePage = function(sHTML) {
    var oPage = this.oGetPage();
    if (oPage) {
        var oAsso = oPage.oGetAssociatedAreaRef();
        if (oAsso)
            sHTML += "<div id='" + oAsso.id + "'></div>";
    }
    this.updateDomRef(this.oRootRef, sHTML);
}
;
UCF_LS.prototype.sGetFocusedElementId = function() {
    var oPopupManager = this.oGetPopupManagerInternal()
      , sFocussedPopupWindowId = oPopupManager.sGetFocusedPopupId()
      , sResult = "";
    if (sFocussedPopupWindowId && sFocussedPopupWindowId != oPopupManager.sGetPopupIdByWindow(window)) {
        var oPWLsToDelegate = oPopupManager.oGetLSByPopupId(sFocussedPopupWindowId);
        if (oPWLsToDelegate)
            sResult = oPWLsToDelegate.sGetFocusedElementId();
    } else {
        var oFocusInfo = new (UCF_ClassLoader.oGetClass("UCF_FocusInfo"))(this);
        oFocusInfo.init(UCF_DomUtil.oGetActiveElement());
        sResult = oFocusInfo.sSerialize();
        oFocusInfo.cleanUp();
    }
    return sResult;
}
;
UCF_LS.prototype.suppressFocus = function() {
    this.bSuppressFocus = true;
}
;
UCF_LS.prototype.focusWindow = function() {
    if (this.oBrowserWindow.bIsLockedByType(UCF_BrowserWindow.LOCKTYPES.PENDINGNAVIGATION)) {
        this.focusElement(this.sStoredFocusId);
        return;
    }
    var oFocusInfo = new (UCF_ClassLoader.oGetClass("UCF_FocusInfo"))(this);
    oFocusInfo.deserialize(this.sStoredFocusId);
    oFocusInfo.apply();
    oFocusInfo.cleanUp();
}
;
UCF_LS.prototype.focusElement = function(sId) {
    if (sId == "")
        return;
    if (this.bSuppressFocus) {
        this.bSuppressFocus = false;
        return;
    }
    var oPopupManager = this.oGetPopupManagerInternal()
      , sPopupWindowToDelegateId = null 
      , sThisPopupWindowId = oPopupManager.sGetPopupIdByWindow(window)
      , oFocusInfo = new (UCF_ClassLoader.oGetClass("UCF_FocusInfo"))(this);
    oFocusInfo.deserialize(sId);
    if (oFocusInfo.sGetPopupWindowId()) {
        if (oFocusInfo.sGetPopupWindowId() != sThisPopupWindowId)
            sPopupWindowToDelegateId = oFocusInfo.sGetPopupWindowId();
    } else {
        sPopupWindowToDelegateId = oPopupManager.sGetFocusedPopupId();
    }
    if (sPopupWindowToDelegateId && sPopupWindowToDelegateId != sThisPopupWindowId) {
        var oPWLsToDelegate = oPopupManager.oGetLSByPopupId(sPopupWindowToDelegateId);
        if (oPWLsToDelegate)
            oPWLsToDelegate.focusElement(sId);
        oFocusInfo.cleanUp();
        return;
    }
    this.sStoredFocusId = sId;
    if (!this.oBrowserWindow.bFocussed) {
        this.oBrowserWindow.attachEvent(this.oBrowserWindow.E_EVENTS.Focus, this, "onWindowFocus");
        oFocusInfo.cleanUp();
        return;
    }
    if (this.oBrowserWindow.bIsLocked()) {
        this.oBrowserWindow.attachEvent(this.oBrowserWindow.E_EVENTS.Unlock, this, "onWindowUnlock");
        oFocusInfo.cleanUp();
        return;
    }
    var oFocusInfo = new (UCF_ClassLoader.oGetClass("UCF_FocusInfo"))(this);
    oFocusInfo.deserialize(sId);
    oFocusInfo.apply();
    oFocusInfo.cleanUp();
    this.sStoredFocusId = "";
}
;
UCF_LS.prototype.applyStoredFocus = function() {
    if (this.sStoredFocusId) {
        UCF_JsUtil.delayedCall(0, this, "focusElement", [this.sStoredFocusId]);
    }
}
;
UCF_LS.prototype.onWindowUnlock = function(oEvent) {
    this.oBrowserWindow.detachEvent(this.oBrowserWindow.E_EVENTS.Unlock, this);
    this.applyStoredFocus();
}
;
UCF_LS.prototype.onWindowFocus = function(oEvent) {
    this.oBrowserWindow.detachEvent(this.oBrowserWindow.E_EVENTS.Focus, this);
    this.applyStoredFocus();
}
;
UCF_LS.prototype.focusEnd = function() {
    var oEnd = UCF_DomUtil.$("ls-endofpage")
      , oContainer = this.oGetStaticAreaRef();
    if (oContainer) {
        if (!oEnd) {
            var oEnd = document.createElement("SPAN");
            oEnd.setAttribute("id", "ls-endofpage");
            if (this.oSystem.bIs508)
                oEnd.setAttribute("title", this.sGetText("SAPUR_PAGE_END"));
            oEnd.tabIndex = "0";
            oEnd = oContainer.appendChild(oEnd);
        } else if (UCF_DomUtil.oGetNextSibling(oEnd)) {
            oEnd = oContainer.appendChild(oEnd);
        }
        UCF_DomUtil.focusDomElement(oEnd);
    }
    this.fireEvent(this.E_EVENTS.FocusEnd, {});
}
;
UCF_LS.prototype.scrollIntoView = function(sId, bAlignToTop) {
    var oDomRef = document.getElementById(sId);
    if (oDomRef)
        oDomRef.scrollIntoView(bAlignToTop);
}
;
UCF_LS.prototype.lockByNavigation = function() {
    this.oBrowserWindow.lock(UCF_BrowserWindow.LOCKTYPES.PENDINGNAVIGATION);
    var oLoadingAnim = this.oGetLoadingAnim();
    if (oLoadingAnim)
        oLoadingAnim.show();
}
;
UCF_LS.prototype.unlockByNavigation = function() {
    this.oBrowserWindow.unlock(UCF_BrowserWindow.LOCKTYPES.PENDINGNAVIGATION);
    var oLoadingAnim = this.oGetLoadingAnim();
    if (oLoadingAnim)
        oLoadingAnim.cancel();
}
;
UCF_LS.prototype.lock = function() {
    if (!this.bIsLocked) {
        this.oBrowserWindow.lock(UCF_BrowserWindow.LOCKTYPES.ROUNDTRIP);
        this.fireEvent(this.E_EVENTS.Lock);
        if (this.bIsActiveWindow()) {
            var oLoadingAnim = this.oGetLoadingAnim();
            if (oLoadingAnim)
                oLoadingAnim.trigger();
        }
        this.bIsLocked = true;
    }
}
;
UCF_LS.prototype.unlock = function() {
    if (this.bIsLocked) {
        this.oBrowserWindow.unlock(UCF_BrowserWindow.LOCKTYPES.ROUNDTRIP);
        this.fireEvent(this.E_EVENTS.Unlock);
        var oLoadingAnim = this.oGetLoadingAnim();
        if (oLoadingAnim && !this.oBrowserWindow.bIsLockedByType(UCF_BrowserWindow.LOCKTYPES.PENDINGNAVIGATION))
            oLoadingAnim.cancel();
        this.bIsLocked = false;
    }
}
;
UCF_LS.prototype.oGetLoadingAnim = function() {
    if (!this.oLoadingAnim) {
        this.oLoadingAnim = this.oControlFactory.oGetControlById("ur-loading");
    }
    return this.oLoadingAnim;
}
;
UCF_LS.prototype.bIsActiveWindow = function() {
    if (!this.oPopupManager) {
        return true;
    }
    return this.oPopupManager.bIsActiveWindow();
}
;
UCF_LS.prototype.highlightDefaultButton = function(oDefaultButton) {
    if (this.oDefaultButton) {
        this.oDefaultButton.bIsDefaultButton(false);
    }
    this.oDefaultButton = oDefaultButton;
    if (this.oDefaultButton) {
        this.oDefaultButton.bIsDefaultButton(true);
    }
}
;
UCF_LS.prototype.oGetDefaultButton = function() {
    return this.oDefaultButton;
}
;
UCF_LS.prototype.addBlindLayer = function() {
    if (!this.oBlindLayers) {
        this.oBlindLayers = [];
    }
    var oBlindLayerDomRef = document.createElement("IFRAME");
    oBlindLayerDomRef.frameBorder = "0";
    oBlindLayerDomRef.scrolling = "no";
    oBlindLayerDomRef.setAttribute("id", "ls-blindlayer-" + this.oBlindLayers.length);
    oBlindLayerDomRef.style.position = "absolute";
    oBlindLayerDomRef.style.top = "-10000";
    oBlindLayerDomRef.style.height = "1";
    oBlindLayerDomRef.style.width = "1";
    oBlindLayerDomRef.style.zIndex = "9";
    oBlindLayerDomRef.src = "javascript:''";
    oBlindLayerDomRef.tabIndex = "-1";
    if (!UCF_UserAgent.bIsIE()) {
        oBlindLayerDomRef.style.MozOpacity = "0.01";
    } else {
        oBlindLayerDomRef.style.filter = "alpha(opacity=1)";
    }
    this.oGetStaticAreaRef().appendChild(oBlindLayerDomRef);
    var oBlindLayer = {
        oDomRef: oBlindLayerDomRef,
        bUsed: true
    };
    this.oBlindLayers.push(oBlindLayer);
    return oBlindLayer;
}
;
UCF_LS.prototype.oGetBlindLayer = function() {
    if (!this.oBlindLayers) {
        this.oBlindLayers = [];
    }
    for (var i = 0; i < this.oBlindLayers.length; i++) {
        var oBlindLayer = this.oBlindLayers[i];
        if (oBlindLayer.bUsed == false) {
            this.oGetStaticAreaRef().appendChild(oBlindLayer.oDomRef);
            oBlindLayer.bUsed = true;
            return oBlindLayer;
        }
    }
    return this.addBlindLayer();
}
;
UCF_LS.prototype.releaseBlindLayer = function(oBlindLayer) {
    oBlindLayer.oDomRef.style.top = "-10000";
    oBlindLayer.oDomRef.style.height = "1";
    oBlindLayer.oDomRef.style.width = "1";
    oBlindLayer.bUsed = false;
}
;
UCF_LS.prototype.setDragData = function(sData, sMimeType, sDragSessionId) {
    this.oBrowserWindow.oDragAndDropManager.setDragData(sData, sMimeType, sDragSessionId);
}
;
UCF_LS.prototype.markDirty = function(bFromEvent) {
    if (!this.bDirty) {
        if (bFromEvent && this.sDirtyMode == "CLIENTSERVER") {
            this.setDirty(true);
        } else if (!bFromEvent && this.sDirtyMode != "NONE") {
            this.setDirty(true);
        }
    }
}
;
UCF_LS.prototype.setDirty = function(bDirty) {
    if (this.sDirtyMode != "NONE") {
        this.bDirty = bDirty;
    }
}
;
UCF_LS.prototype.bIsDirty = function() {
    return this.bDirty;
}
;
UCF_LS.prototype.oGetWindow = function() {
    return window;
}
;
UCF_LS.prototype.bHasDomChanged = function() {
    return this.bDomChanged;
}
;
UCF_LS.prototype.setDomChanged = function(bChanged) {
    this.bDomChanged = bChanged;
}
;
UCF_LS.prototype.oGetRenderManager = function() {
    if (!this.oRenderManager) {
        this.oRenderManager = new (UCF_ClassLoader.oGetClass("UCF_RenderManager"))(this);
        this.oRenderManager.oControlFactory = this.oControlFactory;
    }
    return this.oRenderManager;
}
;
UCF_LS.prototype.aPublicMethods = ["destroy", "addDebugHandler", "oCreateSemanticEvent", "fireSemanticEvent", "setSemanticEventHandler", "setApplicationExitHandler", "setPendingRequestHandler", "setMainWindowId", "oGetPage", "oGetPopupManager", "processInitializeIDs", "oGetControlById", "purgeControls", "updateControl", "updatePage", "sGetFocusedElementId", "suppressFocus", "focusWindow", "focusElement", "scrollIntoView", "lock", "unlock", "highlightDefaultButton", "oGetDefaultButton", "setDragData", "markDirty", "bIsDirty", "bHasDomChanged", "setDomChanged", "oGetRenderManager"];
function UCF_EventTimer() {
    UCF_Object.apply(this);
    this.iMaxDelay = 200;
    this.sTimeoutId = null ;
    this.sPendingAction = null ;
}
UCF_EventTimer.prototype = new UCF_Object();
UCF_EventTimer.prototype.setMaxDelay = function(iMaxDelay) {
    this.iMaxDelay = iMaxDelay;
}
;
UCF_EventTimer.prototype.iGetMaxDelay = function() {
    return this.iMaxDelay;
}
;
UCF_EventTimer.prototype.bPendingDelay = function() {
    return ( this.sTimeoutId != null ) ;
}
;
UCF_EventTimer.prototype.sGetPendingAction = function() {
    return this.sPendingAction;
}
;
UCF_EventTimer.prototype.rejectCall = function() {
    if (this.sTimeoutId != null ) {
        UCF_JsUtil.clearDelayedCall(this.sTimeoutId);
        this.sTimeoutId = null ;
        this.sPendingAction = null ;
    }
}
;
UCF_EventTimer.prototype.scheduleCall = function(oHandlerObject, sHandlerMethod, oSemanticEvent, iVariant, sPendingAction) {
    this.sPendingAction = sPendingAction;
    this.sTimeoutId = UCF_JsUtil.delayedCall(this.iMaxDelay, oHandlerObject, sHandlerMethod, [oSemanticEvent, iVariant]);
}
;
function UCF_System(oDomRef) {
    if (oDomRef) {
        UCF_ControlInfo.apply(this, [oDomRef]);
    }
    window.UCF_System = this;
}
;UCF_System.prototype = new (UCF_ClassLoader.oGetClass("UCF_ControlInfo"))();
UCF_System.prototype.aAttributeNames = ["bIs508", "bIsRTL", "sDevice", "sLanguage", "iFirstDayOfWeek", "iMinimalDaysInFirstWeek", "bClientDebug", "sExternalThemeRoot", "sResourceRoot", "sSpaceGif", "bLoadOnDemand", "bUseAnimation", "bUseActiveX", "bIsUCF", "sPlatform", "sClientVersionKey", "sUserAgentName", "fUserAgentVersion", "bUseSafeTransportEncoding", "bUseXHR"];
UCF_System.prototype.aMethodNames = [];
UCF_System.prototype.bIs508 = false;
UCF_System.prototype.bIsRTL = false;
UCF_System.prototype.sDevice = 'ie6';
UCF_System.prototype.sLanguage = 'en';
UCF_System.prototype.iFirstDayOfWeek = 0;
UCF_System.prototype.iMinimalDaysInFirstWeek = 4;
UCF_System.prototype.bClientDebug = false;
UCF_System.prototype.sExternalThemeRoot = '';
UCF_System.prototype.sResourceRoot = '.';
UCF_System.prototype.sSpaceGif = null ;
UCF_System.prototype.bLoadOnDemand = true;
UCF_System.prototype.bUseAnimation = true;
UCF_System.prototype.bUseActiveX = true;
UCF_System.prototype.bIsUCF = false;
UCF_System.prototype.sPlatform = 'Windows';
UCF_System.prototype.sClientVersionKey = '7.20.0.0';
UCF_System.prototype.sUserAgentName = 'MSIE';
UCF_System.prototype.fUserAgentVersion = 0;
UCF_System.prototype.bUseSafeTransportEncoding = true;
UCF_System.prototype.bUseXHR = true;
UCF_System.prototype.setDefaultValues = function() {
    this.bIs508 = false;
    this.bIsRTL = false;
    this.sDevice = 'ie6';
    this.sLanguage = 'en';
    this.iFirstDayOfWeek = 0;
    this.iMinimalDaysInFirstWeek = 4;
    this.bClientDebug = false;
    this.sExternalThemeRoot = '';
    this.sResourceRoot = '.';
    this.sSpaceGif = null ;
    this.bLoadOnDemand = true;
    this.bUseAnimation = true;
    this.bUseActiveX = true;
    this.bIsUCF = false;
    this.sPlatform = 'Windows';
    this.sClientVersionKey = '7.20.0.0';
    this.sUserAgentName = 'MSIE';
    this.fUserAgentVersion = 0;
    this.bUseSafeTransportEncoding = true;
    this.bUseXHR = true;
}
;
function UCF_Size(iWidth, iHeight) {
    this.iWidth = iWidth;
    this.iHeight = iHeight;
}
UCF_Size.prototype = new UCF_Object();
function UCF_Page(oDomRef, oLS) {
    UCF_Control.apply(this, [oDomRef, oLS]);
    if (this.sBrowserHistory != "ENABLED") {
        UCF_JsUtil.delayedCall(500, this, "setBrowserHistory", [this.sBrowserHistory]);
    }
    this.oBrowserHistory = null ;
    this.aExternalWindows = [];
    this.oLS.sDirtyMode = this.sDirtyMode;
    this.setDirty(this.bDirty);
    if (this.mEvents.Scroll) {
        this.oScrollArea = new (UCF_ClassLoader.oGetClass("UCF_ScrollArea"))(document.body);
        this.oScrollArea.attachEvent(this.oScrollArea.E_EVENTS.Scroll, this, "onAreaScroll");
        this.addDelegate(this.oScrollArea);
    }
    if (this.mEvents.Resize) {
        this.iWidth = document.body.offsetWidth;
        this.iHeight = document.body.offsetHeight;
    }
    if (this.mEvents.HashChanged) {
        this.startHashPolling();
        if (this.sHash != document.location.hash) {
            UCF_JsUtil.delayedCall(100, this, "setHash", [document.location.hash, false]);
            this.bInitHash = true;
        }
    }
}
;UCF_Page.prototype = new (UCF_ClassLoader.oGetClass("UCF_Control"))();
UCF_Page.prototype.initialize = function() {
    if (this.oScrollArea) {
        this.oScrollArea.setScrollPosition(this.iScrollTop, this.iScrollLeft);
    }
}
;
UCF_Page.prototype.destroy = function() {
    this.stopHashPolling();
    if (this.oBrowserHistory)
        this.oLS.detachEvent(this.oLS.E_EVENTS.Unlock, this, "onUnlock");
    if (this.sUnloadUrl && !this.oLS.bIsLocked) {
        UCF_JsUtil.sendUnloadRequest(this.sUnloadUrl);
    }
    UCF_Control.prototype.destroy.apply(this, arguments);
}
;
UCF_Page.prototype.onlscontainerfocus = function(oBrowserEvent) {
    UCF_Control.prototype.onlscontainerfocus.call(this, oBrowserEvent);
    var oSource = oBrowserEvent.oGetSource()
      , oControl = oBrowserEvent.oGetSourceControl()
      , sControlId = oControl.sGetId(oSource)
      , sLastFocusId = ""
      , oFocusedControl = this.oFocusedControl;
    if (!oFocusedControl || !oFocusedControl.bIsValid()) {
        this.oFocusedControl = null ;
    } else {
        if (oFocusedControl && oFocusedControl.bIsValid())
            sLastFocusId = oFocusedControl.sGetId(oSource);
        if (this.oFocusedControl != oControl) {
            this.fireFocusChange(this.sId, sControlId, sLastFocusId, this.oLS.sGetFocusedElementId());
        }
    }
    this.oFocusedControl = oControl;
}
;
UCF_Page.prototype.oncontextmenu = function(oBrowserEvent) {
    var oSource = oBrowserEvent.oGetSource()
      , oControl = oBrowserEvent.oGetSourceControl()
      , iPosX = oBrowserEvent.iPageX()
      , iPosY = oBrowserEvent.iPageY()
      , sControlId = oControl.sGetId(oSource)
      , bShowBrowserMenu = oBrowserEvent.bCtrl() && oBrowserEvent.bAlt() && oBrowserEvent.bShift();
    if (!bShowBrowserMenu) {
        this.fireContextMenu(this.sId, sControlId, iPosX, iPosY, oBrowserEvent.bShift(), oBrowserEvent.bCtrl(), oBrowserEvent.bAlt());
        oBrowserEvent.cancel();
    }
}
;
UCF_Page.prototype.onlshotkey = function(oBrowserEvent) {
    var bHelp = false
      , oSource = oBrowserEvent.oGetSource()
      , oControl = oBrowserEvent.oGetSourceControl()
      , sControlId = oControl.sGetId(oSource);
    if ((oBrowserEvent.iKeyCode() == UCF_KeyCodes.F1 || (oBrowserEvent.iKeyCode() == 0 && oBrowserEvent.oDomEvent.type == "help")) && !oBrowserEvent.bAlt() && !oBrowserEvent.bShift() && !oBrowserEvent.bCtrl())
        bHelp = true;
    if (this.sHotkeysId == '') {
        if (bHelp && this.mEvents.Help) {
            this.fireHelp(this.sId, sControlId);
            oBrowserEvent.cancel();
        } else {
            return;
        }
    }
    var oHotkeys = this.oGetControlById(this.sHotkeysId);
    if (oHotkeys == null )
        return;
    oHotkey = oHotkeys.getHotkeyFromEvent(oBrowserEvent);
    if (oHotkey) {
        oBrowserEvent.cancel();
        if (bHelp && this.mEvents.Help)
            this.fireHelp(this.sId, sControlId);
        if (!oHotkeys.bHandleHotkeyOnClient(oHotkey))
            this.fireHotkey(this.sId, oHotkey.sHotkey, oHotkey.sProviderId, sControlId);
    } else if (bHelp && this.mEvents.Help) {
        oBrowserEvent.cancel();
        this.fireHelp(this.sId, sControlId);
    }
}
;
UCF_Page.prototype.onresize = function(oEvent) {
    var iWidth = document.body.offsetWidth;
    var iHeight = document.body.offsetHeight;
    if (iWidth != this.iWidth || iHeight != this.iHeight) {
        this.iWidth = iWidth;
        this.iHeight = iHeight;
        this.fireResize(this.sId, iWidth, iHeight);
    }
}
;
UCF_Page.prototype.onAreaScroll = function(oEvent) {
    var iScrollTop = oEvent.oGetParam("iScrollTop")
      , iScrollLeft = oEvent.oGetParam("iScrollLeft");
    this.fireScroll(this.sId, iScrollTop, iScrollLeft);
}
;
UCF_Page.prototype.setScrollPosition = function(iScrollTop, iScrollLeft) {
    this.oScrollArea.setScrollPosition(iScrollTop, iScrollLeft);
}
;
UCF_Page.prototype.setTitle = function(sTitle) {
    if (this.oLS.bIsMainLS()) {
        document.title = sTitle;
    } else {
        var oPopupManager = this.oLS.oGetPopupManager()
          , sPopupId = oPopupManager.sGetPopupIdByWindow(window);
        if (sPopupId)
            oPopupManager.notifyTitleUpdate(sPopupId, sTitle);
    }
}
;
UCF_Page.prototype.setBrowserHistory = function(sBrowserHistory) {
    if (this.oBrowserHistory) {
        this.oBrowserHistory.detachEvent(this.oBrowserHistory.E_EVENTS.Back, this);
    }
    if (sBrowserHistory == "ENABLED") {
        if (this.oBrowserHistory) {
            this.oBrowserHistory.deactivate();
        }
    } else {
        if (!this.oBrowserHistory) {
            this.oBrowserHistory = new (UCF_ClassLoader.oGetClass("UCF_BrowserHistory"))();
        }
        this.oBrowserHistory.activate();
        this.oLS.attachEvent(this.oLS.E_EVENTS.Unlock, this, "onUnlock");
        if (sBrowserHistory == "NOTIFY") {
            this.oBrowserHistory.attachEvent(this.oBrowserHistory.E_EVENTS.Back, this, "onBrowserHistoryBack");
        }
    }
}
;
UCF_Page.prototype.onUnlock = function(oEvent) {
    if (this.oBrowserHistory) {
        this.oBrowserHistory.reactivate();
    }
}
;
UCF_Page.prototype.onBrowserHistoryBack = function(oEvent) {
    if (this.mEvents.Back) {
        this.fireBack(this.sId);
    }
}
;
UCF_Page.prototype.setHasMargin = function(bHasMargin) {
    if (bHasMargin) {
        UCF_DomUtil.removeClass(document.body, "urBdyStdNoMrg");
    } else {
        UCF_DomUtil.addClass(document.body, "urBdyStdNoMrg");
    }
    this.notifyLayoutChange();
}
;
UCF_Page.prototype.oGetAssociatedAreaRef = function() {
    return UCF_DomUtil.$(this.sId + "-asso");
}
;
UCF_Page.prototype.oGetStaticAreaRef = function() {
    if (!this.oStaticAreaRef) {
        this.oStaticAreaRef = UCF_DomUtil.$(this.sId + "-static");
        if (!this.oStaticAreaRef) {
            var oStatic = document.createElement("DIV");
            oStatic.setAttribute("id", this.sId + "-static");
            this.oStaticAreaRef = this.oDomRef.appendChild(oStatic);
        }
    }
    return this.oStaticAreaRef;
}
;
UCF_Page.prototype.openModalPopup = function(sId, sURL) {
    var oOpenerWindow = window
      , oOnloadCallbackMethod = null 
      , oPopupManager = this.oLS.oGetPopupManagerInternal();
    oPopupManager.createPopupWindow(oOpenerWindow, sURL, sId, oOnloadCallbackMethod, oPopupManager.DISPLAY_MODE.MODAL);
}
;
UCF_Page.prototype.closePopup = function(sId) {
    this.oLS.oGetPopupManager().closePopup(sId);
}
;
UCF_Page.prototype.closeAllModalPopups = function() {
    this.oLS.oGetPopupManager().closeAllPopups();
}
;
UCF_Page.prototype.openExternalWindow = function(sId, sURL, iTop, iLeft, iWidth, iHeight, bHasMenubar, bHasStatusbar, bHasToolbar, bHasAddressbar) {
    var features = "scrollbars=yes,resizable=yes";
    features += ",top=" + iTop;
    features += ",left=" + iLeft;
    if (iWidth)
        features += ",width=" + iWidth;
    if (iHeight)
        features += ",height=" + iHeight;
    features += ",menubar=" + (bHasMenubar ? "yes" : "no");
    features += ",status=" + (bHasStatusbar ? "yes" : "no");
    features += ",toolbar=" + (bHasToolbar ? "yes" : "no");
    features += ",location=" + (bHasAddressbar ? "yes" : "no");
    this.oLS.lockByNavigation();
    var oExternalWindow;
    try {
        oExternalWindow = window.open(sURL, sId, features);
    } catch (e) {}
    ;if (oExternalWindow) {
        this.aExternalWindows[sId] = oExternalWindow;
        try {
            oExternalWindow.focus();
        } catch (e) {}
        ;
    }
    UCF_JsUtil.delayedCall(1500, this.oLS, "unlockByNavigation", [])
}
;
UCF_Page.prototype.openExternalWindowByPost = function(sId, sURL, sPostParameters, iTop, iLeft, iWidth, iHeight, bHasMenubar, bHasStatusbar, bHasToolbar, bHasAddressbar) {
    this.openExternalWindow(sId, "about:blank", iTop, iLeft, iWidth, iHeight, bHasMenubar, bHasStatusbar, bHasToolbar, bHasAddressbar);
    var mParameters = UCF_JsUtil.mDecodeURIParameters(sPostParameters);
    UCF_RequestUtil.sendFormRequest("POST", sURL, mParameters, sId);
}
;
UCF_Page.prototype.closeExternalWindow = function(sId) {
    var oExternalWindow = this.aExternalWindows[sId];
    if (oExternalWindow) {
        try {
            window.open(UCF_System.sExternalThemeRoot + "/common/1x1.gif", sId, "left=10000").close();
        } catch (e) {}
        ;
    }
    delete this.aExternalWindows[sId];
}
;
UCF_Page.prototype.closeWindow = function() {
    window.open('', '_self');
    window.close();
    this.oLS.destroy();
}
;
UCF_Page.prototype.setFocus = function(sFocusInfo) {
    if (!sFocusInfo || sFocusInfo == "")
        return;
    this.oLS.focusElement(sFocusInfo);
}
;
UCF_Page.prototype.setKeepAlive = function(sId, bKeepAlive) {
    var oControl = this.oLS.oControlFactory.oGetControlById(sId);
    if (oControl && oControl.setKeepAlive) {
        oControl.setKeepAlive(bKeepAlive);
    }
}
;
UCF_Page.prototype.setDragData = function(sData, sMimeType, sDragSessionId) {
    this.oLS.setDragData(sData, sMimeType, sDragSessionId);
}
;
UCF_Page.prototype.downloadFile = function(sUrl) {
  //debugger;
  //top.localStorage.setItem("fileUrl",sUrl);
  ysp.fileUrl = sUrl;
  	//change
    //UCF_JsUtil.downloadFile(sUrl);
}
;
UCF_Page.prototype.scrollIntoView = function(sId, bAlignToTop) {
    this.oLS.scrollIntoView(sId, bAlignToTop);
}
;
UCF_Page.prototype.setDirty = function(bDirty) {
    this.oLS.setDirty(bDirty);
}
;
UCF_Page.prototype.bIsDirty = function() {
    return this.oLS.bDirty;
}
;
UCF_Page.prototype.print = function() {
    window.print();
}
;
UCF_Page.prototype.setUnloadUrl = function(sUrl) {
    this.sUnloadUrl = sUrl;
}
;
UCF_Page.prototype.redirect = function(sMethod, sUrl, sPostParameters) {
    var mParameters;
    if (sPostParameters) {
        mParameters = UCF_JsUtil.mDecodeURIParameters(sPostParameters);
    }
    UCF_RequestUtil.sendFormRequest(sMethod, sUrl, mParameters, "");
}
;
UCF_Page.prototype.checkHash = function() {
    if (document.location.hash != "#" && !this.oLS.bIsLocked && document.location.hash != this.sHash) {
        this.setHash(document.location.hash);
    }
}
;
UCF_Page.prototype.setHash = function(sHash, bSuppressHashChanged) {
    if (this.bInitHash) {
        this.bInitHash = false;
        return;
    }
    if (this.oLS.bIsLocked) {
        UCF_JsUtil.delayedCall(100, this, "setHash", [sHash, bSuppressHashChanged]);
        return;
    }
    if (this.sHash != sHash && !bSuppressHashChanged) {
        this.fireHashChanged(this.sId, sHash, this.sHash);
    }
    this.sHash = sHash;
    document.location.hash = sHash;
}
;
UCF_Page.prototype.startHashPolling = function() {
    if (this.oHashInterval) {
        this.stopHashPolling();
    }
    this.oHashInterval = UCF_JsUtil.intervalCall(200, this, "checkHash");
}
;
UCF_Page.prototype.stopHashPolling = function() {
    UCF_JsUtil.clearIntervalCall(this.oHashInterval);
    this.oHashInterval = null ;
}
;
UCF_Page.prototype.setDirtyMode = function(sDirtyMode) {
    this.oLS.sDirtyMode = sDirtyMode;
}
;
UCF_Page.prototype.aAttributeNames = ["sFormId", "sScrollingMode", "sHotkeysId", "sBrowserHistory", "sUnloadUrl", "iScrollTop", "iScrollLeft", "sDirtyMode", "bDirty", "sHash"];
UCF_Page.prototype.aMethodNames = ["setTitle", "setHasMargin", "setBrowserHistory", "setFocus", "showModalDialog", "openModalPopup", "closePopup", "closeAllModalPopups", "openExternalWindow", "openExternalWindowByPost", "closeExternalWindow", "closeWindow", "setKeepAlive", "setDragData", "downloadFile", "scrollIntoView", "setDirty", "print", "setUnloadUrl", "redirect", "setHash", "setDirtyMode"];
UCF_Page.prototype.sFormId = '';
UCF_Page.prototype.sScrollingMode = "AUTO";
UCF_Page.prototype.sHotkeysId = '';
UCF_Page.prototype.sBrowserHistory = "ENABLED";
UCF_Page.prototype.sUnloadUrl = '';
UCF_Page.prototype.iScrollTop = 0;
UCF_Page.prototype.iScrollLeft = 0;
UCF_Page.prototype.sDirtyMode = "CLIENTSERVER";
UCF_Page.prototype.bDirty = false;
UCF_Page.prototype.sHash = '';
UCF_Page.prototype.setDefaultValues = function() {
    this.sFormId = '';
    this.sScrollingMode = "AUTO";
    this.sHotkeysId = '';
    this.sBrowserHistory = "ENABLED";
    this.sUnloadUrl = '';
    this.iScrollTop = 0;
    this.iScrollLeft = 0;
    this.sDirtyMode = "CLIENTSERVER";
    this.bDirty = false;
    this.sHash = '';
}
;
UCF_Page.prototype.fireHelp = function(sId, sControlId) {
    var mParams = {
        Id: sId,
        ControlId: sControlId
    };
    this.fireSemanticEvent("Page", "Help", mParams, false, false, false);
}
;
UCF_Page.prototype.fireContextMenu = function(sId, sControlId, iPosX, iPosY, bShift, bCtrl, bAlt) {
    var mParams = {
        Id: sId,
        ControlId: sControlId,
        PosX: iPosX,
        PosY: iPosY,
        Shift: bShift,
        Ctrl: bCtrl,
        Alt: bAlt
    };
    this.fireSemanticEvent("Page", "ContextMenu", mParams, false, false, false);
}
;
UCF_Page.prototype.fireFocusChange = function(sId, sControlId, sLastFocusedId, sFocusInfo) {
    var mParams = {
        Id: sId,
        ControlId: sControlId,
        LastFocusedId: sLastFocusedId,
        FocusInfo: sFocusInfo
    };
    this.fireSemanticEvent("Page", "FocusChange", mParams, false, false, false);
}
;
UCF_Page.prototype.fireHotkey = function(sId, sHotkey, sProviderId, sControlId) {
    var mParams = {
        Id: sId,
        Hotkey: sHotkey,
        ProviderId: sProviderId,
        ControlId: sControlId
    };
    this.fireSemanticEvent("Page", "Hotkey", mParams, false, true, false);
}
;
UCF_Page.prototype.fireBack = function(sId) {
    var mParams = {
        Id: sId
    };
    this.fireSemanticEvent("Page", "Back", mParams, false, false, false);
}
;
UCF_Page.prototype.fireScroll = function(sId, iScrollTop, iScrollLeft) {
    var mParams = {
        Id: sId,
        ScrollTop: iScrollTop,
        ScrollLeft: iScrollLeft
    };
    this.fireSemanticEvent("Page", "Scroll", mParams, false, false, false);
}
;
UCF_Page.prototype.fireRequest = function(sId, bAsync, sFocusInfo, sHash, bDomChanged, bIsDirty) {
    var mParams = {
        Id: sId,
        Async: bAsync,
        FocusInfo: sFocusInfo,
        Hash: sHash,
        DomChanged: bDomChanged,
        IsDirty: bIsDirty
    };
    this.fireSemanticEvent("Page", "Request", mParams, false, true, false);
}
;
UCF_Page.prototype.fireResize = function(sId, iWidth, iHeight) {
    var mParams = {
        Id: sId,
        Width: iWidth,
        Height: iHeight
    };
    this.fireSemanticEvent("Page", "Resize", mParams, false, false, false);
}
;
UCF_Page.prototype.fireHashChanged = function(sId, sHash, sPreviousHash) {
    var mParams = {
        Id: sId,
        Hash: sHash,
        PreviousHash: sPreviousHash
    };
    this.fireSemanticEvent("Page", "HashChanged", mParams, false, true, false);
}
;
UCF_Page.prototype.aPublicMethods = ["setScrollPosition", "setTitle", "setHasMargin", "openModalPopup", "openExternalWindow", "openExternalWindowByPost", "closeExternalWindow", "closeWindow", "setFocus", "setKeepAlive", "setDragData", "downloadFile", "setDirty", "print", "redirect", "setHash", "setDirtyMode"];
function UCF_Position(iTop, iLeft) {
    this.iTop = iTop;
    this.iLeft = iLeft;
}
UCF_Position.prototype = new UCF_Object();
function UCF_Queue() {
    this.aList = [];
}
;UCF_Queue.prototype = new UCF_Object();
UCF_Queue.prototype.push = function(oObject) {
    this.aList.push(oObject);
}
;
UCF_Queue.prototype.get = function() {
    var oObject = this.aList[0];
    this.aList.splice(0, 1);
    return oObject;
}
;
UCF_Queue.prototype.peek = function() {
    return this.aList[0];
}
;
function UCF_RequestUtil() {}
;UCF_RequestUtil.oXmlHttp = null ;
UCF_RequestUtil.oIFrameRequestObject = null ;
UCF_RequestUtil.bUseXHR = true;
UCF_RequestUtil.bUseActiveX = true;
UCF_RequestUtil.oGetHTTPRequestObject = function(bNew) {
    if (!bNew) {
        if (!this.oXmlHttp)
            this.oXmlHttp = this.oGetHTTPRequestObject(true);
        return this.oXmlHttp;
    }
    if (this.bUseXHR && window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    if (this.bUseXHR && this.bUseActiveX && window.ActiveXObject) {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            _fatal("Please enable ActiveX support!");
            return;
        }
    }
    if (!this.oIFrameRequestObject) {
        this.oIFrameRequestObject = new UCF_IFrameRequestObject();
    }
    return this.oIFrameRequestObject;
}
;
UCF_RequestUtil.sendSyncRequest = function(sUrl, sMethod, mParameters) {
    return this.sendRequest(sUrl, sMethod, false, mParameters, null , null );
}
;
UCF_RequestUtil.sendAsyncRequest = function(sUrl, sMethod, mParameters, oObject, sMethodName) {
    this.sendRequest(sUrl, sMethod, true, mParameters, oObject, sMethodName);
}
;
UCF_RequestUtil.sendRequest = function(sUrl, sMethod, bAsync, mParameters, oObject, sMethodName) {
    var sPostBody = null ;
    window.document.qtp_readystate = false;
    if (!sMethod)
        sMethod = "GET";
    if (mParameters) {
        var sEncodedParameters = this.sEncodeParameters(mParameters)
          , sPostBody = null ;
        if (sMethod == "GET") {
            if (sUrl.indexOf("?") > 0)
                sUrl += "&";
            else
                sUrl += "?";
            sUrl += sEncodedParameters;
        } else if (sMethod == "POST") {
            sPostBody = sEncodedParameters;
        }
    }
    var oXmlHttp = this.oGetHTTPRequestObject(bAsync);
    if (bAsync && oObject) {
        if (this.bUseActiveX && UCF_UserAgent.bIsIE(6) && !UCF_UserAgent.bIsIE(7)) {
            var fPoller = function() {
                if (oXmlHttp.readyState != 4) {
                    setTimeout(fPoller, 1);
                    return;
                }
                var oResponse = UCF_RequestUtil.oCreateResponseObject(oXmlHttp);
                oObject[sMethodName](oResponse);
            }
            ;
            setTimeout(fPoller, 1);
        } else {
            oXmlHttp.onreadystatechange = function() {
                _forwardRequestCallback(oXmlHttp, oObject, sMethodName);
            }
            ;
        }
    }
    oXmlHttp.open(sMethod, sUrl, bAsync);
    if (sMethod == "POST") {
        oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    try {
        oXmlHttp.send(sPostBody);
    } catch (oExeption) {
        UCF_ErrorMessage.show(1);
        return this.oCreateResponseObject(oXmlHttp);
    }
    if (!bAsync) {
        return this.oCreateResponseObject(oXmlHttp);
    }
}
;
UCF_RequestUtil.oCreateResponseObject = function(oXmlHttp) {
    var bSuccess = oXmlHttp.status == "200" || oXmlHttp.status == "304"
      , sText = oXmlHttp.responseText
      , oDocument = oXmlHttp.responseXML;
    if (UCF_UserAgent.bIsFirefox(2) && !UCF_UserAgent.bIsFirefox(3)) {
        oDocument = UCF_JsUtil.oParseXMLDocument(sText);
    }
    window.setTimeout("eval(window.document.qtp_readystate=true)", 100);
    return {
        bSuccess: bSuccess,
        sText: sText,
        oDocument: oDocument
    };
}
;
UCF_RequestUtil.sEncodeParameters = function(mParameters) {
    var aBuffer = [];
    for (var i in mParameters) {
        if (mParameters[i] instanceof Array) {
            var aParameterValues = mParameters[i];
            for (var j = 0; j < aParameterValues.length; j++) {
                aBuffer.push(encodeURIComponent(i) + "=" + encodeURIComponent(aParameterValues[j]));
            }
        } else {
            aBuffer.push(encodeURIComponent(i) + "=" + encodeURIComponent(mParameters[i]));
        }
    }
    return aBuffer.join("&");
}
;
UCF_RequestUtil.disableActiveX = function() {
    this.bUseActiveX = false;
}
;
UCF_RequestUtil.disableXHR = function() {
    this.bUseXHR = false;
}
;
function _forwardRequestCallback(oXmlHttp, oCallbackObject, sMethodName) {
    if (oXmlHttp.readyState != 4)
        return;
    if (UCF_UserAgent.bIsFirefox() && _firefoxRequestFailed(oXmlHttp)) {
        return;
    }
    var oResponse = UCF_RequestUtil.oCreateResponseObject(oXmlHttp);
    oCallbackObject[sMethodName](oResponse);
    delete oXmlHttp.onreadystatechange;
}
;function _firefoxRequestFailed(oXmlHttp) {
    var bRequestFailed = false;
    try {
        bRequestFailed = (oXmlHttp.status == 0);
    } catch (e) {
        bRequestFailed = true;
    }
    if (bRequestFailed) {
        UCF_ErrorMessage.show(1);
        return true;
    }
    return false;
}
;UCF_RequestUtil.sendFormRequest = function(sMethod, sUrl, mParameters, sTarget) {
    if (sMethod == "GET" && !mParameters && !sTarget) {
        document.location.href = sUrl;
        return;
    }
    var oForm = document.createElement("form"), oInput;
    oForm.setAttribute("action", sUrl);
    oForm.setAttribute("target", sTarget);
    oForm.setAttribute("method", sMethod);
    for (var i in mParameters) {
        oInput = document.createElement("input");
        oInput.setAttribute("type", "hidden");
        oInput.setAttribute("name", i);
        oInput.setAttribute("value", mParameters[i]);
        oForm.appendChild(oInput);
    }
    document.body.appendChild(oForm);
    oForm.submit();
    document.body.removeChild(oForm);
}
;
function UCF_PageUpdater(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.mWaitingUpdates = {};
    this.iWaitingUpdates = 0;
    UCF_JsUtil.delayedCall(0, this, "initialize");
}
UCF_PageUpdater.prototype = new UCF_Object();
UCF_PageUpdater.prototype.initialize = function() {
    var oInitialUpdateRef = UCF_DomUtil.$("UCF_InitialUpdate");
    if (!oInitialUpdateRef)
        return;
    var sXMLText = oInitialUpdateRef.innerHTML
      , oXMLDoc = UCF_JsUtil.oParseXMLDocument(sXMLText);
    if (!oXMLDoc.documentElement)
        return;
    UCF_JsUtil.removeComments(oXMLDoc.documentElement);
    this.processUpdateDocument(oXMLDoc);
    oInitialUpdateRef.parentNode.removeChild(oInitialUpdateRef);
}
;
UCF_PageUpdater.prototype.processUpdateDocument = function(oDocument) {
    var oRootRef = oDocument.documentElement, aUpdates = oRootRef.childNodes, oUpdateRef, sWindowId, oTargetLS;
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;sWindowId = oUpdateRef.getAttribute("windowid");
        if (sWindowId && sWindowId != this.oLS.sGetMainWindowId()) {
            this.processPopupWindowUpdate(sWindowId, oUpdateRef);
        } else {
            this.processUpdates(oUpdateRef);
        }
    }
}
;
UCF_PageUpdater.prototype.processPopupWindowUpdate = function(sWindowId, oUpdateRef) {
    var oPopupManager = this.oLS.oGetPopupManagerInternal()
      , oTargetLS = oPopupManager.oGetLSByPopupId(sWindowId);
    if (oTargetLS) {
        oTargetLS.oPageUpdater.processUpdates(oUpdateRef);
    } else {
        if (this.iWaitingUpdates == 0) {
            oPopupManager.attachEvent(oPopupManager.E_EVENTS.WindowOpen, this, "onWindowOpen");
        }
        this.iWaitingUpdates++;
        if (!this.mWaitingUpdates[sWindowId]) {
            this.mWaitingUpdates[sWindowId] = [];
        } else {}
        this.mWaitingUpdates[sWindowId].push(oUpdateRef);
    }
}
;
UCF_PageUpdater.prototype.onWindowOpen = function(oEvent) {
    var oPopupManager = this.oLS.oGetPopupManagerInternal()
      , oTargetLS = oEvent.oGetParam("oTargetLS")
      , sWindowId = oEvent.oGetParam("sPopupId")
      , aUpdateRefs = this.mWaitingUpdates[sWindowId];
    delete this.mWaitingUpdates[sWindowId];
    this.iWaitingUpdates--;
    if (this.iWaitingUpdates == 0) {
        oPopupManager.detachEvent(oPopupManager.E_EVENTS.WindowOpen, this);
    }
    for (var i = 0; i < aUpdateRefs.length; i++) {
        var oPopupWindow = oPopupManager.oGetPopupById(sWindowId);
        if (!oPopupWindow && i > 0) {
            break;
        }
        oTargetLS.oPageUpdater.processUpdates(aUpdateRefs[i]);
    }
}
;
UCF_PageUpdater.prototype.processUpdates = function(oNode) {
    var aUpdates = oNode.childNodes, oUpdateRef, sCommand, sContent;
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "start-script":
            this.callScript(oUpdateRef);
            break;
        }
    }
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "style-update":
            this.updateStyle(oUpdateRef);
            break;
        }
    }
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "content-update":
            this.updateContent(oUpdateRef);
            break;
        case "control-update":
            this.updateControl(oUpdateRef);
            break;
        case "control-append":
            this.appendControl(oUpdateRef);
            break;
        case "html-update":
            this.updateHtml(oUpdateRef);
            break;
        case "lsx-update":
            this.updateLSX(oUpdateRef);
            break;
        case "initialize-ids":
            this.initializedIds(oUpdateRef);
            break;
        }
    }
    this.oLS.purgeControls();
    this.oLS.processInitializeIDs();
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "script-call":
            this.callScript(oUpdateRef);
            break;
        }
    }
    this.oLS.oBrowserWindow.notifyLayoutChange();
}
;
UCF_PageUpdater.sGetCDATAContent = function(oUpdateRef) {
    var sContent = ""
      , oCData = oUpdateRef.firstChild;
    while (oCData != null ) {
        if (oCData.nodeType == 4) {
            sContent += oCData.nodeValue;
        }
        oCData = oCData.nextSibling;
    }
    return sContent;
}
;
UCF_PageUpdater.prototype.initializedIds = function(oUpdateRef) {
    var sHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oRootRef = this.oLS.oGetRootRef()
      , oSpanRef = document.createElement("span");
    oSpanRef.innerHTML = sHTML;
    oRootRef.appendChild(oSpanRef.firstChild);
}
;
UCF_PageUpdater.prototype.updateStyle = function(oUpdateRef) {
    var oRootRef = this.oLS.oGetRootRef()
      , oDiv = document.createElement("div");
    oDiv.style.display = "none";
    oRootRef.appendChild(oDiv);
    if (UCF_UserAgent.bIsIE())
        oDiv.innerHTML = "<input type=hidden>" + UCF_PageUpdater.sGetCDATAContent(oUpdateRef);
    else
        oDiv.innerHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef);
}
;
UCF_PageUpdater.prototype.updateContent = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , sHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oControl = this.oLS.oControlFactory.oGetControlById(sId)
      , oRootRef = oControl.oRootRef
      , oParentRef = oRootRef.parentNode;
    oRootRef.innerHTML = sHTML;
}
;
UCF_PageUpdater.prototype.updateControl = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , sHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oControl = this.oLS.oControlFactory.oGetControlById(sId)
      , oRootRef = oControl.oRootRef
      , oParentRef = oRootRef.parentNode;
    if (UCF_System.sDevice == "ie6") {
        oRootRef.outerHTML = sHTML;
    } else {
        var oTemp = document.createElement("div");
        oTemp.innerHTML = sHTML;
        oParentRef.replaceChild(oTemp.firstChild, oRootRef);
        while (oTemp.firstChild) {
            oParentRef.appendChild(oTemp.firstChild);
        }
    }
}
;
UCF_PageUpdater.prototype.appendControl = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , oControl = this.oLS.oControlFactory.oGetControlById(sId);
    if (oControl) {
        this.updateControl(oUpdateRef);
        return;
    }
    var sCId = oUpdateRef.getAttribute("cid")
      , sHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oContainer = this.oLS.oControlFactory.oGetControlById(sCId)
      , oParentRef = oContainer.oDomRef;
    var oDiv = document.createElement("div");
    oParentRef.appendChild(oDiv);
    oDiv.innerHTML = sHTML;
}
;
UCF_PageUpdater.prototype.updateHtml = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , bInnerHTML = oUpdateRef.getAttribute("innerHTML") == 'true'
      , sHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oRootRef = UCF_DomUtil.$(sId);
    if (bInnerHTML) {
        oRootRef.innerHTML = sHTML;
    } else if (UCF_System.sDevice == "ie6") {
        oRootRef.outerHTML = sHTML;
    } else {
        var oTemp = document.createElement("div")
          , oParentRef = oRootRef.parentNode;
        oTemp.innerHTML = sHTML;
        oParentRef.replaceChild(oTemp.firstChild, oRootRef);
        while (oTemp.firstChild) {
            oParentRef.appendChild(oTemp.firstChild);
        }
    }
}
;
UCF_PageUpdater.prototype.updateLSX = function(oUpdateRef) {
    var oXML = new ActiveXObject("Msxml2.DOMDocument.3.0")
      , oRenderManager = new (UCF_ClassLoader.oGetClass("UCF_RenderManager"))()
      , sId = oUpdateRef.getAttribute("id")
      , sXML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oRootRef = UCF_DomUtil.$(sId);
    oXML.loadXML(sXML);
    oRenderManager.renderXML(oXML.documentElement, oRootRef);
}
;
UCF_PageUpdater.prototype.callScript = function(oUpdateRef) {
    var sScript = UCF_PageUpdater.sGetCDATAContent(oUpdateRef);
    var fScriptCall = new Function("oLS",sScript);
    fScriptCall.call(window, this.oLS.oGetInterface());
}
;
