var UCF_classes = [];
function UCF_Global() {}
function _trace() {}
;function _assert() {}
;function _fatal() {}
;function _measure() {}
;function UCF_Tracer() {}
;var ERROR = 0
  , WARNING = 1
  , INFO = 2
  , DEBUG = 3;
var START = 0
  , STOP = 1;
UCF_Tracer.iTraceLevel = INFO;
UCF_Tracer.mTimers = {};
UCF_Tracer.mListeners = {};
UCF_Tracer.iCounter = 0;
UCF_Tracer.addListener = function(oListener, sFunction) {
    this.mListeners[this.iCounter++] = {
        "oListener": oListener,
        "sFunction": sFunction
    };
}
;
UCF_Tracer.removeListener = function(oListener) {
    if (!this.mListeners)
        return;
    for (oEntry in this.mListeners) {
        if (this.mListeners[oEntry].oListener == oListener) {
            delete this.mListeners[oEntry];
        }
    }
}
;
UCF_Tracer.notifyListeners = function(mParameters) {
    for (oEntry in this.mListeners) {
        with (this.mListeners[oEntry]) {
            oListener[sFunction](mParameters);
        }
    }
}
;
UCF_Tracer.trace = function(iLevel, sText, sLocation) {
    if (iLevel <= this.iTraceLevel) {
        var mParameters = {
            iTimeStamp: new Date().getTime(),
            iLevel: iLevel,
            sText: sText,
            sLocation: sLocation
        };
        this.notifyListeners(mParameters);
        var sTraceText = sLocation + " : " + sText;
        if (window.console) {
            switch (iLevel) {
            case ERROR:
                console.error(sTraceText);
                break;
            case WARNING:
                console.warn(sTraceText);
                break;
            case INFO:
                console.info(sTraceText);
                break;
            case DEBUG:
                if (console.debug)
                    console.debug(sTraceText);
                else
                    console.info(sTraceText);
                break;
            }
        }
        if (window.Debug) {
            var sDebugOutput = "";
            switch (iLevel) {
            case ERROR:
                sDebugOutput += "ERROR: ";
                break;
            case WARNING:
                sDebugOutput += "Warning: ";
                break;
            case INFO:
                sDebugOutput += "Info: ";
                break;
            case DEBUG:
                sDebugOutput += "Debug: ";
                break;
            }
            sDebugOutput += sTraceText;
            Debug.writeln(sTraceText);
        }
    }
}
;
UCF_Tracer.assert = function(bResult, sStatement, sLocation) {
    if (!bResult) {
        this.trace(ERROR, "Assert failed: " + sStatement, sLocation);
    }
}
;
UCF_Tracer.measure = function(iAction, sId, sText) {
    switch (iAction) {
    case START:
        if (sText)
            this.trace(INFO, sText, "");
        this.mTimers[sId] = new Date().getTime();
        break;
    case STOP:
        var result = new Date().getTime() - this.mTimers[sId];
        if (sText)
            this.trace(INFO, sText + " " + result + "ms", "");
        break;
    }
}
;
UCF_Tracer.setTraceLevel = function(iLevel) {
    this.iTraceLevel = iLevel;
}
;
function _trace(iLevel, sText, sLocation) {
    UCF_Tracer.trace(iLevel, sText, sLocation);
}
;function _assert(bResult, sStatement, sLocation) {
    UCF_Tracer.assert(bResult, sStatement, sLocation);
}
;function _measure(iAction, sId, sText) {
    UCF_Tracer.measure(iAction, sId, sText);
}
;function _fatal(sText, sLocation) {
    UCF_Tracer.trace(ERROR, sText, sLocation);
    alert("FATAL ERROR: " + sText);
}
;function UCF_ClassLoader() {}
;UCF_ClassLoader.mLibraries = {};
UCF_ClassLoader.registerLibrary = function(sPrefix, sUrlTemplate, bRemovePrefix) {
    if (this.mLibraries[sPrefix]) {}
    this.mLibraries[sPrefix] = {
        sPrefix: sPrefix,
        sUrlTemplate: sUrlTemplate,
        bRemovePrefix: bRemovePrefix
    };
}
;
UCF_ClassLoader.oGetLibrary = function(sClassName) {
    for (var sPrefix in this.mLibraries) {
        if (sClassName.indexOf(sPrefix) == 0) {
            return this.mLibraries[sPrefix];
        }
    }
    return null;
}
;
UCF_ClassLoader.loadClass = function(sClassName, bSuppressError) {
    var oLibrary = this.oGetLibrary(sClassName);
    if (oLibrary) {} else {
        if (!bSuppressError) {}
        return null;
    }
    var sFile = sClassName
      , sUrl = ""
      , oApplyTo = window;
    if (sFile.indexOf(".") > -1) {
        aParts = sFile.split(".");
        sFile = aParts[0];
        for (var i = 0; i < aParts.length - 1; i++) {
            if (!oApplyTo[aParts[i]]) {
                oApplyTo[aParts[i]] = {};
            }
            oApplyTo = oApplyTo[aParts[i]];
            sFile = sFile + "/" + aParts[i + 1];
        }
        sUrl = oLibrary.sUrlTemplate.replace(/\$\$/, "/" + sFile);
    } else {
        if (oLibrary.bRemovePrefix) {
            sFile = sFile.substr(oLibrary.sPrefix.length);
        }
        sUrl = oLibrary.sUrlTemplate.replace(/\$\$/, sFile);
    }
    if (!sUrl) {
        return;
    }
    this.loadClassAbsolute(sClassName, sUrl, bSuppressError);
}
;
UCF_ClassLoader.loadClassAbsolute = function(sClassName, sUrl, bSuppressError) {
    var oResponse = UCF_RequestUtil.sendSyncRequest(sUrl)
      , oApplyTo = window;
    if (!oResponse.bSuccess) {
        oApplyTo[sClassName] = "not-implemented";
        if (!bSuppressError) {
            UCF_ErrorMessage.show(UCF_ErrorMessage.E_TYPE.NETWORK);
        }
        return;
    }
    if (window.execScript) {
        window.execScript(oResponse.sText);
    } else {
        window.eval(oResponse.sText);
    }
    if (!window[sClassName]) {
        window[sClassName] = eval(sClassName);
    }
}
;
UCF_ClassLoader.oGetClassAbsolute = function(sClassName, sUrl, bSuppressError) {
    try {
        window;
    } catch (e) {
        return Object;
    }
    var oClass = window[sClassName];
    if (sClassName.indexOf(".") > -1) {
        oClass = (new Function("try{return " + sClassName + "} catch(ex) {return null};"))();
    }
    if (oClass == "not-implemented") {
        return null;
    }
    if (!oClass || typeof (oClass) != "function") {
        this.loadClassAbsolute(sClassName, sUrl, bSuppressError);
        oClass = window[sClassName];
    }
    if (!bSuppressError) {}
    return oClass;
}
;
UCF_ClassLoader.oGetClass = function(sClassName, bSuppressError) {
    try {
        window;
    } catch (e) {
        return Object;
    }
    var oClass = window[sClassName];
    if (sClassName.indexOf(".") > -1) {
        oClass = (new Function("try{return " + sClassName + "} catch(ex) {return null};"))();
    }
    if (oClass == "not-implemented") {
        return null;
    }
    if (!oClass || typeof (oClass) != "function") {
        this.loadClass(sClassName, bSuppressError);
        oClass = window[sClassName];
    }
    if (!bSuppressError) {}
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
UCF_SemanticEvent.prototype.addParameter = function(sName, sValue) {
    this.mParameters[sName] = sValue;
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
    if (this.mUcfParameters) {
        return (this.mUcfParameters["Composite"]) ? true : false;
    }
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
UCF_SemanticEvent.prototype.setActionUrl = function(sActionUrl) {
    this.mUcfParameters.ActionUrl = sActionUrl;
}
;
UCF_SemanticEvent.prototype.setSyncExecution = function(bSyncExecution) {
    this.mUcfParameters.SyncExecution = bSyncExecution;
}
;
UCF_SemanticEvent.prototype.aPublicMethods = ["sGetControl", "sGetName", "mGetParameters", "addParameter", "mGetCustomParameters", "cancel", "setCustomParameter", "setClientAction", "setEnqueueCardinality", "setResponseData", "setTransportMethod", "setDelay", "setActionUrl", "setSyncExecution"];
function UCF_XSSEncoder() {}
;UCF_XSSEncoder.hex = function(iChar, iLength) {
    var sHex = iChar.toString(16);
    if (iLength) {
        while (iLength > sHex.length) {
            sHex = "0" + sHex;
        }
    }
    return sHex;
}
;
UCF_XSSEncoder.rHtml = /[\x00-\x08\x11\x12\x14-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
UCF_XSSEncoder.rHtmlReplace = /[\x00-\x08\x11\x12\x14-\x1f\x7f-\x9f]/;
UCF_XSSEncoder.mHtmlLookup = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "\"": "&quot;"
};
UCF_XSSEncoder.fHtml = function(sChar) {
    var sEscaped = UCF_XSSEncoder.mHtmlLookup[sChar];
    if (!sEscaped) {
        if (UCF_XSSEncoder.rHtmlReplace.test(sChar)) {
            sEscaped = "&#xfffd;";
        } else {
            sEscaped = "&#x" + UCF_XSSEncoder.hex(sChar.charCodeAt(0)) + ";";
        }
        UCF_XSSEncoder.mHtmlLookup[sChar] = sEscaped;
    }
    return sEscaped;
}
;
UCF_XSSEncoder.encodeHTML = function(sString) {
    return sString.replace(this.rHtml, this.fHtml);
}
;
UCF_XSSEncoder.encodeXML = function(sString) {
    return sString.replace(this.rHtml, this.fHtml);
}
;
UCF_XSSEncoder.rJS = /[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
UCF_XSSEncoder.mJSLookup = {};
UCF_XSSEncoder.fJS = function(sChar) {
    var sEscaped = UCF_XSSEncoder.mJSLookup[sChar];
    if (!sEscaped) {
        var iChar = sChar.charCodeAt(0);
        if (iChar < 256) {
            sEscaped = "\\x" + UCF_XSSEncoder.hex(iChar, 2);
        } else {
            sEscaped = "\\u" + UCF_XSSEncoder.hex(iChar, 4);
        }
        UCF_XSSEncoder.mJSLookup[sChar] = sEscaped;
    }
    return sEscaped;
}
;
UCF_XSSEncoder.encodeJS = function(sString) {
    return sString.replace(this.rJS, this.fJS);
}
;
UCF_XSSEncoder.rURL = /[\x00-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
UCF_XSSEncoder.mURLLookup = {};
UCF_XSSEncoder.fURL = function(sChar) {
    var sEscaped = UCF_XSSEncoder.mURLLookup[sChar];
    if (!sEscaped) {
        var iChar = sChar.charCodeAt(0);
        if (iChar < 128) {
            sEscaped = "%" + UCF_XSSEncoder.hex(iChar, 2);
        } else if (iChar < 2048) {
            sEscaped = "%" + UCF_XSSEncoder.hex((iChar >> 6) | 192, 2) + "%" + UCF_XSSEncoder.hex((iChar & 63) | 128, 2);
        } else {
            sEscaped = "%" + UCF_XSSEncoder.hex((iChar >> 12) | 224, 2) + "%" + UCF_XSSEncoder.hex(((iChar >> 6) & 63) | 128, 2) + "%" + UCF_XSSEncoder.hex((iChar & 63) | 128, 2);
        }
        UCF_XSSEncoder.mURLLookup[sChar] = sEscaped;
    }
    return sEscaped;
}
;
UCF_XSSEncoder.encodeURL = function(sString) {
    return sString.replace(this.rURL, this.fURL);
}
;
UCF_XSSEncoder.rCSS = /[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xff\u2028\u2029][0-9A-Fa-f]?/g;
UCF_XSSEncoder.fCSS = function(sChar) {
    var iChar = sChar.charCodeAt(0);
    if (sChar.length == 1) {
        return "\\" + UCF_XSSEncoder.hex(iChar);
    } else {
        return "\\" + UCF_XSSEncoder.hex(iChar) + " " + sChar.substr(1);
    }
}
;
UCF_XSSEncoder.encodeCSS = function(sString) {
    return sString.replace(this.rCSS, this.fCSS);
}
;
function UCF_ErrorMessage() {}
;UCF_ErrorMessage.E_TYPE = {
    FATAL: 0,
    NETWORK: 1
};
UCF_ErrorMessage[UCF_ErrorMessage.E_TYPE.FATAL] = {
    sTitle: "Fatal Error",
    aItems: ["The browser failed to download files.", "The server is not responding", "The server was temporary not available."],
    aIssues: ["Internet connectivity has been lost.", "The website is temporarily unavailable.", "The Domain Name Server (DNS) is not reachable.", "The Domain Name Server (DNS) does not have a listing for the website's domain.", "If this is an HTTPS (secure) address, click tools, click Internet Options, click Advanced, and check to be sure the SSL and TLS protocols are enabled under the security section."],
    aTryTo: ["Retype the address.", "Try visiting another website to make sure you are connected."],
    bDestroy: true,
    sInternalMessage: "SAP HTML Rendering: Error 0"
};
UCF_ErrorMessage[UCF_ErrorMessage.E_TYPE.NETWORK] = {
    sTitle: "Server connection not available",
    aItems: ["You are not connected to the Internet.", "The server is not responding", "The server was temporary not available."],
    aIssues: ["Internet connectivity has been lost.", "The website is temporarily unavailable.", "The Domain Name Server (DNS) is not reachable.", "The Domain Name Server (DNS) does not have a listing for the website's domain.", "If this is an HTTPS (secure) address, click tools, click Internet Options, click Advanced, and check to be sure the SSL and TLS protocols are enabled under the security section."],
    aTryTo: ["Reconnect to the server.", "Retype the address.", "Try visiting another website to make sure you are connected."],
    bDestroy: true,
    sInternalMessage: "SAP HTML Rendering: Error 1"
};
UCF_ErrorMessage.aDestroyObjects = [];
UCF_ErrorMessage.oSystemPopup = null;
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
            UCF_ErrorMessage.aDestroyObjects[i] = null;
        }
    }
}
;
UCF_ErrorMessage.show = function(iErrorNumber) {
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
    sHTML.push("<div style=\"width:100%;height:" + Math.floor(document.body.offsetHeight / 2) + "px;overflow:auto\" class=\"urBdyStd\"><table width=\"100%\" cellpadding=\"2\" cellspacing=\"4\" border=\"0\" style=\"font-size:8pt\"><tr><td align=\"left\"><b style=\"font-size:8pt\">Most likely causes:</b><br><ul>");
    for (var i = 0; i < oError.aItems.length; i++)
        sHTML.push("<li style=\"font-size:8pt\">" + oError.aItems[i] + "</li>");
    sHTML.push("</ul></td></tr><tr><td align=\"left\"><b style=\"font-size:8pt\">What you can try:</b><br><ul>");
    for (var i = 0; i < oError.aTryTo.length; i++)
        sHTML.push("<li >" + oError.aTryTo[i] + "</li>");
    sHTML.push("</ul></td></tr><tr><td align=\"left\"><b style=\"font-size:8pt\">This problem can be caused by a variety of issues, including:</b><br><ul>");
    for (var i = 0; i < oError.aIssues.length; i++)
        sHTML.push("<li style=\"font-size:8pt\">" + oError.aIssues[i] + "</li>");
    sHTML.push("</ul></td></tr></table></div>");
    if (!this.oSystemPopup) {
        this.oSystemPopup = new UCF_SystemPopup();
    }
    this.oSystemPopup.setTitle(oError.sTitle + "&nbsp;&nbsp;-&nbsp;&nbsp;<span onclick=\"UCF_ErrorMessage.hide()\">(Click here to close)</span>");
    this.oSystemPopup.setContent(sHTML.join(""));
    this.oSystemPopup.show();
    window.onerror = UCF_ErrorMessage.handleError;
}
;
UCF_ErrorMessage.handleError = function(sMsg, sUrl, iLineNumber) {
    return true;
}
;
UCF_ErrorMessage.hide = function() {
    this.oSystemPopup.hide();
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
    this.mParameters = null;
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
            if (!sFunction) {
                oListener(oEvent);
            } else {
                oListener[sFunction](oEvent);
            }
        }
    }
    this.oEventPool.returnObject(oEvent);
}
;
UCF_EventProvider.prototype.hasListeners = function(iEventId) {
    if (!this.mEventRegistry[iEventId])
        return false;
    if (UCF_JsUtil.bIsEmpty(this.mEventRegistry[iEventId]))
        return false;
    return true;
}
;
function UCF_BrowserHistory() {
    UCF_EventProvider.apply(this);
    this.oIframe = null;
    this.bActivated = false;
    this.bBackPrevention = false;
    this.bHistorySupport = false;
    this.sInitialHash = null;
    this.sLastHash = null;
}
;UCF_BrowserHistory.prototype = new UCF_EventProvider();
UCF_BrowserHistory.prototype.E_EVENTS = {
    HashChanged: 0
};
UCF_BrowserHistory.prototype.BACKPREVENTION_HASH = "#...";
UCF_BrowserHistory.prototype.HASH_POLLING_INTERVAL = 200;
UCF_BrowserHistory.prototype.destroy = function() {
    this.cleanUp();
    UCF_EventProvider.prototype.destroy.apply(this, arguments);
}
;
UCF_BrowserHistory.prototype.cleanUp = function() {
    this.stopHashNotification();
    this.sInitialHash = null;
    this.sLastHash = null;
    this.cleanUpIFrame();
    this.bActivated = false;
    this.bBackPrevention = false;
    this.bHistorySupport = false;
}
;
UCF_BrowserHistory.prototype.init = function(bBackPrevention, bHistorySupport, bPageInitial) {
    if (!this.bActivated) {
        var bNeedIFrame = (UCF_UserAgent.bIsIE() && (bHistorySupport || bBackPrevention)) || (UCF_UserAgent.bIsGecko() && bBackPrevention && !this.bIsHashChangeEventSupported());
        this.bActivated = true;
        this.bBackPrevention = bBackPrevention;
        this.bHistorySupport = bHistorySupport;
        this.sInitialHash = this.sGetHash();
        this.sLastHash = this.sInitialHash;
        if (bNeedIFrame) {
            if (bPageInitial)
                UCF_JsUtil.delayedCall(500, this, "createIFrame");
            else
                this.createIFrame();
        } else if (this.bBackPrevention) {
            this.setHash(this.BACKPREVENTION_HASH);
            this.setHash(this.sInitialHash);
        }
        if (this.bHistorySupport || !bNeedIFrame && this.bBackPrevention)
            this.startHashNotification();
    }
}
;
UCF_BrowserHistory.prototype.createIFrame = function() {
    if (this.oIframe)
        this.cleanUpIFrame();
    if (!this.oIframe) {
        var oIframe = document.createElement("IFRAME");
        oIframe.setAttribute("id", "sap-ui-BrowserHistory");
        oIframe.tabIndex = "-1";
        oIframe.style.height = "1px";
        oIframe.style.width = "100px";
        oIframe.style.position = "absolute";
        oIframe.style.top = "-10px";
        oIframe.src = UCF_System.sResourceRoot + "/js/html/browserhistory.html" + (this.bBackPrevention ? "?bBackPrevention" : "") + "#h0";
        if (UCF_UserAgent.bIsTrident(4.0) && !UCF_UserAgent.bIsTrident(5.0)) {
            oIframe.onactivate = this.fOnActivateIFrameIE8;
        }
        document.body.appendChild(oIframe);
        this.oIframe = oIframe;
    }
}
;
UCF_BrowserHistory.prototype.cleanUpIFrame = function() {
    if (this.oIframe) {
        this.oIframe.parentNode.removeChild(this.oIframe);
        this.oIframe.onactivate = null;
        this.oIframe = null;
    }
}
;
UCF_BrowserHistory.prototype.fOnActivateIFrameIE8 = function() {
    var oToFocus = event.fromElement;
    if (oToFocus && oToFocus.focus && oToFocus.tagName != "BODY") {
        oToFocus.focus();
    }
    return false;
}
;
UCF_BrowserHistory.prototype.startHashNotification = function() {
    if (this.bIsHashChangeEventSupported()) {
        var oBrowserHistory = this;
        this.onNativeHashChange = function(oDomEvent) {
            oBrowserHistory.checkHash();
        }
        ;
        UCF_DomUtil.attachEvent(window, "hashchange", this.onNativeHashChange, false);
    } else if (!this.oHashInterval) {
        this.oHashInterval = UCF_JsUtil.intervalCall(this.HASH_POLLING_INTERVAL, this, "checkHash");
    }
}
;
UCF_BrowserHistory.prototype.stopHashNotification = function() {
    if (this.bIsHashChangeEventSupported()) {
        if (this.onNativeHashChange) {
            UCF_DomUtil.detachEvent(window, "hashchange", this.onNativeHashChange, false);
            this.onNativeHashChange = null;
        }
    } else if (this.oHashInterval) {
        UCF_JsUtil.clearIntervalCall(this.oHashInterval);
        this.oHashInterval = null;
    }
}
;
UCF_BrowserHistory.prototype.bIsHashChangeEventSupported = function() {
    return ("onhashchange"in window) && !(UCF_UserAgent.bIsIE() && UCF_System.sDevice != "standards");
}
;
UCF_BrowserHistory.prototype.checkHash = function() {
    if (this.sGetHash() != this.sLastHash) {
        if (!this.oIframe && this.bBackPrevention && this.sGetHash() == this.BACKPREVENTION_HASH) {
            if (this.bHistorySupport)
                UCF_JsUtil.delayedCall(0, window.history, "forward");
            else
                this.setHash(this.sInitialHash);
        } else {
            this.setHash(this.sGetHash());
            if (this.bActivated && this.bHistorySupport) {
                this.fireEvent(this.E_EVENTS.HashChanged, {
                    sName: "HashChanged",
                    sNewHash: this.sGetHash(),
                    sOldHash: this.sLastHash
                });
            }
            this.sLastHash = this.sGetHash();
        }
    }
}
;
UCF_BrowserHistory.prototype.setHash = function(sHash) {
    if (!(this.bActivated && (this.bHistorySupport || this.bBackPrevention && !this.oIframe)))
        return;
    if (this.oIframe) {
        try {
            this.oIframe.contentWindow.setHash(sHash);
        } catch (oException) {
            UCF_JsUtil.delayedCall(100, this, "setHash", [sHash]);
        }
    } else {
        this.setHashDirect(this.sNormalizeHash(sHash), false);
    }
}
;
UCF_BrowserHistory.prototype.setHashDirect = function(sHash, bSkipDelayed) {
    if (!bSkipDelayed)
        return UCF_JsUtil.delayedCall(0, this, "setHashDirect", [sHash, true]);
    if (sHash != this.sGetHash())
        document.location.hash = sHash;
}
;
UCF_BrowserHistory.prototype.sGetHash = function() {
    return document.location.hash;
}
;
UCF_BrowserHistory.prototype.sNormalizeHash = function(sHash) {
    return "#" + sHash.replace("#", "");
}
;
UCF_BrowserHistory.prototype.aPublicMethods = ["destroy", "cleanUp", "init", "setHash", "setHashDirect", "sGetHash", "sNormalizeHash"];
function UCF_Exception(message) {
    this.name = "Exception";
    this.message = message;
}
;function UCF_FormatException(message) {
    if (arguments.length == 0)
        return;
    this.name = "FormatException";
    this.message = message;
}
;UCF_FormatException.prototype = new (UCF_ClassLoader.oGetClass("UCF_Exception"))();
function UCF_UserAgent() {}
;UCF_UserAgent.TRIDENT = "TRIDENT";
UCF_UserAgent.GECKO = "GECKO";
UCF_UserAgent.WEBKIT = "WEBKIT";
UCF_UserAgent.MSIE = "MSIE";
UCF_UserAgent.FIREFOX = "Firefox";
UCF_UserAgent.SAFARI = "Safari";
UCF_UserAgent.CHROME = "Chrome";
UCF_UserAgent.OPERA = "Opera";
UCF_UserAgent.WINDOWS = "WINDOWS";
UCF_UserAgent.MACOS = "MACINTOSH";
UCF_UserAgent.LINUX = "X11";
UCF_UserAgent.IOS = "IOS";
UCF_UserAgent.ANDROID = "ANDROID";
UCF_UserAgent.init = function() {
    var sUserAgent = window.navigator.userAgent
      , sSearchUA = /Trident\/(\d+\.\d+)/
      , sSearchB = [/MSIE (\d+\.\d+)/];
    this.sUA = UCF_UserAgent.TRIDENT;
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
    else if (sUserAgent.indexOf("Android") > -1)
        this.sOs = this.ANDROID;
    else if (sUserAgent.indexOf("Linux") > -1)
        this.sOs = this.LINUX;
    else if (sUserAgent.indexOf("iPad") > -1)
        this.sOs = this.IOS;
    else if (sUserAgent.indexOf("iPhone") > -1)
        this.sOs = this.IOS;
    else if (sUserAgent.indexOf("iPod") > -1)
        this.sOs = this.IOS;
    else if (sUserAgent.indexOf("Mac OS") > -1)
        this.sOs = this.MACOS;
    this.bIECompatibilityMode = false;
    if (this.sB == this.MSIE) {
        if (!this.fUAVersion)
            this.fUAVersion = 3.0;
        this.bIECompatibilityMode = (this.fUAVersion >= 4.0) && (this.fBVersion - this.fUAVersion < 4.0);
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
UCF_UserAgent.bIsTrident = function(fVersion) {
    return this.bIsUserAgent(this.TRIDENT, fVersion);
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
UCF_UserAgent.bIsIE = function(fVersion) {
    return this.bIsBrowser(this.MSIE, fVersion);
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
UCF_UserAgent.bIsIOS = function() {
    return this.sOs == this.IOS;
}
;
UCF_UserAgent.sGetPlatform = function() {
    return this.sOs;
}
;
UCF_UserAgent.sGetUserAgentName = function() {
    return this.sUA;
}
;
UCF_UserAgent.bIsIECompatibilityMode = function() {
    return this.bIsIE() && this.bIECompatibilityMode;
}
;
UCF_UserAgent.bIsStandardsMode = function() {
    return document.compatMode == "CSS1Compat";
}
;
UCF_UserAgent.bIsQME = function() {
    return this.bIsIE() && parseInt(document.documentMode) >= 9 && document.compatMode.indexOf("BackCompat") != -1;
}
;
function UCF_RenderManager(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.oControlFactory = oLS.oControlFactory;
    this.aActiveWriter = [];
    this.oAccessibilityHelper = null;
    this.aSubControls = [];
    this.aInitializeIds = [];
    this.oRenderTree = null;
    this.iEventsLength = 0;
    this.iMode = UCF_RenderManager.Mode.REUSEHTML;
    this.aRenderControlStack = [];
}
;UCF_RenderManager.prototype = new UCF_Object();
UCF_RenderManager.iGenId = 0;
UCF_RenderManager.Mode = {
    REUSEHTML: 0,
    RENDERALL: 1
};
UCF_RenderManager.prototype.setMode = function(eMode) {
    this.iMode = eMode;
}
;
UCF_RenderManager.prototype.clearBuffer = function() {
    this.aActiveWriter = [];
}
;
UCF_RenderManager.prototype.sGetId = function() {
    var sId = "";
    while (!sId) {
        var i = this.iGenId++;
        sId = "ls.id." + i;
        if (!this.oLS.oGetControlById(sId)) {
            return sId;
        }
        sId = "";
    }
}
;
UCF_RenderManager.prototype.oGetRenderer = function(sControlName) {
    sChar = sControlName.substring(0, 1).toUpperCase();
    sControlName = "UCF_" + sChar + sControlName.substring(1) + "Renderer";
    if (!window[sControlName]) {
        UCF_ClassLoader.loadClass(sControlName);
    }
    if (window[sControlName]) {
        return oRenderer = new window[sControlName](this);
    } else {
        return null;
    }
}
;
UCF_RenderManager.prototype.addRenderedControl = function(oControl) {
    this.aRenderControlStack.push(oControl);
}
;
UCF_RenderManager.prototype.renderSubControls = function(aWriter) {
    var aLocalSubControls = this.aSubControls;
    this.aSubControls = [];
    for (var i = 0; i < aLocalSubControls.length; i++) {
        var sClassName = aLocalSubControls[i].sClassName
          , mParameters = aLocalSubControls[i].mParameters
          , iWriterIndex = aLocalSubControls[i].iIndex;
        this.aActiveWriter = [];
        var oRenderer = this.oGetRenderer(sClassName);
        oRenderer.render(mParameters);
        this.renderSubControls(this.aActiveWriter);
        aWriter[iWriterIndex] = this.aActiveWriter.join("");
    }
    this.aActiveWriter = aWriter;
}
;
UCF_RenderManager.prototype.renderControl = function(oControl, oDomRef) {
    if (UCF_JsUtil.bInstanceOf(oControl, "UCF_ClientControl")) {
        var sClassName = oControl.sClassName
          , oRenderer = this.oGetRenderer(sClassName)
          , sId = oControl.getId();
        if (oRenderer) {
            var bInvalid = true;
            if (oControl.getVisibility && oControl.getVisibility() == "NONE") {
                if (oControl.getUCFInstance()) {
                    oControl.getUCFInstance().destroy();
                }
                return;
            } else if ((bInvalid = !oControl.hasValidHTML()) || this.iMode == UCF_RenderManager.Mode.RENDERALL) {
                if (!bInvalid) {} else {}
                oRenderer.render(oControl);
                oControl.resetInvalidated();
            } else {
                if (oControl.getLifeCycle) {
                    oRenderer.render(oControl);
                    oControl.resetInvalidated();
                } else {
                    this.initializeSubTree(oControl);
                    this.aActiveWriter.push(oControl.getHTML());
                }
            }
        }
    }
    if (oDomRef) {
        oDomRef.innerHTML = this.aActiveWriter.join("");
        this.aActiveWriter = [];
    }
}
;
UCF_RenderManager.prototype.reinitializeUCFControls = function() {
    for (var i = 0; i < this.aRenderControlStack.length; i++) {
        var oControl = this.aRenderControlStack[i];
        if (oControl.onAfterRender) {
            oControl.onAfterRender();
        }
    }
    this.aRenderControlStack = [];
    this.oLS.purgeControls();
    this.oLS.oControlFactory.endClientRendering();
    this.oLS.processInitializeIDs(this.aInitializeIds);
    this.resetInitializeIds();
    UCF_JsUtil.delayedCall(0, this.oLS.oBrowserWindow, "notifyLayoutChange", []);
}
;
UCF_RenderManager.prototype.initializeSubTree = function(oControl) {
    var mAggregations = oControl.mAggregations;
    var sUCFClassName = "UCF_" + oControl.sClassName;
    if (this.oLS.oControlFactory.bControlNeedsInitialization(oControl.getId())) {
        this.addInitializeId(oControl.getId());
    }
    var that = this;
    oControl.traverseChildren(function(oChild) {
        var sId = oChild.getId();
        if (that.oLS.oControlFactory.bControlNeedsInitialization(sId)) {
            that.addInitializeId(sId);
        }
    });
}
;
UCF_RenderManager.prototype.translate = function(sTextKey, aParameters) {
    if (sTextKey.search(/^SAPUR_/) == 0) {
        sTextKey = sTextKey.substring(6);
    }
    if (!this.oAccessibilityHelper) {
        if (UCF_System.sAccessibility == "ARIA") {
            this.oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_ARIAHelper"))(this.oLS);
        } else {
            this.oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_AccessibilityHelper"))(this.oLS);
        }
    }
    var sText = "";
    try {
        sText = this.oAccessibilityHelper.sGetText(sTextKey, aParameters);
    } catch (oException) {}
    return sText;
}
;
UCF_RenderManager.prototype.write = function(sString) {
    this.aActiveWriter.push(sString);
}
;
UCF_RenderManager.prototype.addInitializeId = function(sId) {
    if (!sId || sId == '') {
        var c = (this.addInitializeId.caller ? this.addInitializeId.caller : '') + ''
          , i = c.indexOf('{')
          , s = c.substring(0, i)
          , sError = "NullPointerException - Could not initialize control with ID '" + sId + "' called by " + s;
        throw sError;
    }
    this.aInitializeIds.push(sId);
}
;
UCF_RenderManager.prototype.resetInitializeIds = function() {
    this.aInitializeIds = [];
}
;
UCF_RenderManager.prototype.sGetEscaped = function(s) {
    return typeof (s) != "string" ? s : s.replace(/&/gi, "&amp;amp;").replace(/"/gi, "&quot;").replace(/>/gi, "&gt;").replace(/</gi, "&lt;").replace(/\\/gi, "\\\\").replace(/'/gi, "\\'");
}
;
UCF_RenderManager.prototype.writeAcceleratorKey = function(sKey, sValue, sPrefix, sSuffix) {
    if (!sSuffix)
        sSuffix = "";
    var iStart = sValue.indexOf(sKey);
    if (iStart < 0) {
        this.write(sValue);
        return;
    }
    this.write(sValue.substring(0, iStart));
    this.write(sPrefix);
    iEnd = iStart + sKey.length;
    this.write(sValue.substring(iStart, iEnd));
    this.write(sSuffix);
    this.write(sValue.substring(iEnd, sValue.length));
}
;
UCF_RenderManager.prototype.fGetHandlerFunction = function(sKey) {
    if (!this.aEvents)
        return null;
    var oFunc = this.aEvents[sKey];
    delete this.aEvents[sKey];
    if (oFunc == null)
        return null;
    return oFunc;
}
;
UCF_RenderManager.prototype.addHandlerFunction = function(fFunction) {
    if (!this.aEvents)
        this.aEvents = [];
    var sKey = "_" + this.iEventsLength;
    this.aEvents["_" + this.iEventsLength] = fFunction;
    this.iEventsLength++;
    return sKey;
}
;
UCF_RenderManager.prototype.writeEvents = function(oEvents) {
    if (oEvents) {
        this.write(" lsevents=\"{");
        var i = 0;
        for (var n in oEvents) {
            var oEvent = oEvents[n];
            if (i > 0)
                this.write(",");
            i++;
            this.write(n + ":[{");
            var j = 0;
            for (var m in oEvent) {
                if (j > 0)
                    this.write(",");
                j++;
                var oEventParameter = oEvent[m];
                if (oEventParameter) {
                    if (m == "Enabled") {
                        oEventParameter = oEventParameter == "true";
                    }
                    var sType = typeof (oEventParameter);
                    if (sType == "string") {
                        this.write(m + ":'" + this.sGetEscaped(oEventParameter) + "'");
                    } else if (sType == "function") {
                        var sKey = this.addHandlerFunction(oEventParameter);
                        this.write(m + ":'" + this.sGetEscaped(sKey) + "'");
                    } else {
                        this.write(m + ":" + oEventParameter);
                    }
                } else {
                    this.write(m + ":null");
                }
            }
            this.write("}]");
        }
        this.write("}\" ");
    }
}
;
function UCF_FocusInfo(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.sFocussedId = "";
    this.sApplyControlId = "";
    this.sPopupWindowId = "";
    this.mParameters = {};
    this.oDomRefOrgFocussedElement = null;
}
;UCF_FocusInfo.prototype = new UCF_Object();
UCF_FocusInfo.prototype.E_PARAMS_TO_SERIALIZE = {
    sFocussedId: "sFocussedId",
    sApplyControlId: "sApplyControlId",
    sPopupWindowId: "sPopupWindowId"
};
UCF_FocusInfo.prototype.ID_MARKER = "@";
UCF_FocusInfo.prototype.cleanUp = function() {
    this.oLS = null;
    this.sFocussedId = "";
    this.sApplyControlId = "";
    this.sPopupWindowId = "";
    this.mParameters = null;
    this.oDomRefOrgFocussedElement = null;
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
        while (oCurrControl != null && oCurrControl.bIsValid()) {
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
    return this.oDomRefOrgFocussedElement;
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
UCF_FocusInfo.prototype.apply = function(bForce) {
    if (this.sApplyControlId) {
        var oApplyControl = this.oLS.oControlFactory.oGetControlById(this.sApplyControlId);
        if (oApplyControl && oApplyControl.bIsVisible()) {
            oApplyControl.applyFocusInfo(this);
        } else {}
    } else if (this.sFocussedId) {
        var oDomRef = UCF_DomUtil.$(this.sFocussedId)
          , oControl = this.oLS.oControlFactory.oGetControlById(this.sFocussedId);
        if (oControl && UCF_JsUtil.bInstanceOf(oControl, "UCF_PopupWindow")) {
            oControl.focus();
        } else if (oControl && oControl.bIsVisible()) {
            if (bForce)
                oControl.focus();
            else
                oControl.moveFocus();
        } else if (oDomRef) {
            if (UCF_DomUtil.bIsVisible(oDomRef, true)) {
                UCF_JsUtil.delayedCall(0, UCF_DomUtil, "focusDomElement", [oDomRef]);
            } else {}
        } else {}
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
    if (sAttributes == null || sAttributes == "")
        return;
    eval("var mAttributes = " + sAttributes);
    for (var i in mAttributes) {
        sName = this.aAttributeNames[i];
        this[sName] = mAttributes[i];
    }
}
;
function UCF_Property(oDomRef) {
    UCF_ControlInfo.apply(this, [oDomRef]);
}
;UCF_Property.prototype = new (UCF_ClassLoader.oGetClass("UCF_ControlInfo"))();
UCF_Property.prototype.aAttributeNames = ["sKey", "sValue"];
UCF_Property.prototype.aMethodNames = ["addClientListener", "removeClientListener", "playAnimation", "getCustomData"];
UCF_Property.prototype.sKey = '';
UCF_Property.prototype.sValue = '';
UCF_Property.prototype.setDefaultValues = function() {
    this.sKey = '';
    this.sValue = '';
    if (this.getClientControl()) {
        this.setClientProperty("Key", '');
        this.setClientProperty("Value", '');
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
    "SHIFT_F1": true,
    "SHIFT_F2": true,
    "SHIFT_F3": true,
    "SHIFT_F4": true,
    "SHIFT_F5": true,
    "SHIFT_F6": true,
    "SHIFT_F7": true,
    "SHIFT_F8": true,
    "SHIFT_F9": true,
    "SHIFT_F10": true,
    "SHIFT_F11": true,
    "SHIFT_F12": true,
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
UCF_WaitingEventQueue.prototype.bIsPartialEvent = function(oSE) {
    var ucfParam = oSE.mGetUcfParameters();
    if (ucfParam != null) {
        sTP = ucfParam["TransportMethod"];
        if (sTP == "partial") {
            return true;
        }
    }
    return false;
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
    return (eClientAction == "submit");
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
    this.oFromElement = null;
    this.oSourceControl = null;
    this._bShift = oDomEvent.shiftKey;
    this._bAlt = oDomEvent.altKey;
    this._bCtrl = UCF_UserAgent.bIsMacOs() ? oDomEvent.metaKey : oDomEvent.ctrlKey;
    this._bRepeat = oDomEvent.repeat;
    this._iKeyCode = oDomEvent.keyCode;
    this._iClientX = oDomEvent.clientX;
    this._iClientY = oDomEvent.clientY;
    this._iScreenX = oDomEvent.screenX;
    this._iScreenY = oDomEvent.screenY;
    this._iParentX = UCF_UserAgent.bIsGecko() ? this.oDomEvent.layerX : this.oDomEvent.x;
    this._iParentY = UCF_UserAgent.bIsGecko() ? this.oDomEvent.layerY : this.oDomEvent.y;
    this._iPageX = 0;
    this._iPageY = 0;
    this.oData = null;
}
;
UCF_BrowserEvent.prototype.serializeDomRef = function(oDomRef) {
    var sSerialized = ""
      , iChildCount = 0;
    while (oDomRef) {
        if (oDomRef.getAttribute && oDomRef.getAttribute("id") && iChildCount == 0) {
            sSerialized = "UCF_DomUtil.$('" + oDomRef.getAttribute("id") + "')" + sSerialized;
            oDomRef = null;
        } else if (oDomRef.tagName && oDomRef.tagName == "BODY") {
            sSerialized = "document.body" + sSerialized;
            oDomRef = null;
        } else if (oDomRef == document) {
            sSerialized = "document" + sSerialized;
            oDomRef = null;
        } else if (oDomRef == window) {
            sSerialized = "window" + sSerialized;
            oDomRef = null;
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
    this.oDomEvent = null;
    this.sName = null;
    this.bCancelBubble = false;
    this.bHandled = false;
    this.oSource = null;
    this.oFromElement = null;
    this.oSourceControl = null;
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
        return null;
    }
    if ((oSourceRoot.document && oSourceRoot.document != document) || oSourceRoot.parentNode == null) {
        return null;
    }
    while (oSourceRoot != document) {
        sId = oSourceRoot.id;
        if (sId) {
            if (oSourceRoot.getAttribute("ct"))
                return oSourceRoot;
            if (UCF_StringUtil.bEndsWith(sId, "-r") || UCF_StringUtil.bEndsWith(sId, "-o") || UCF_StringUtil.bEndsWith(sId, "-ph") || UCF_StringUtil.bEndsWith(sId, "-map")) {
                oRealRoot = UCF_DomUtil.$(sId.substr(0, sId.lastIndexOf("-")));
                if (oRealRoot && oRealRoot.getAttribute("ct")) {
                    return oRealRoot;
                }
            }
        }
        oSourceRoot = oSourceRoot.parentNode;
    }
    return null;
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
        var iScrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        this._iPageX = this.oDomEvent.clientX + iScrollLeft;
    }
    if (UCF_System.bIsRTL)
        this._iPageX = this._iPageX - UCF_DomUtil.iGetVerticalScollbarOffset(document.body) - (document.body.scrollWidth - UCF_DomUtil.iClientWidth());
    return this._iPageX;
}
;
UCF_BrowserEvent.prototype.iPageY = function() {
    if (this._iPageY)
        return this._iPageY;
    if (this.oDomEvent.pageY) {
        this._iPageY = this.oDomEvent.pageY;
    } else {
        var iScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        this._iPageY = this.oDomEvent.clientY + iScrollTop;
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
UCF_BrowserEvent.prototype.iWheelDelta = function() {
    return this.oDomEvent.detail ? this.oDomEvent.detail * -1 : this.oDomEvent.wheelDelta / 40;
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
    if (this.oDomEvent.stopPropagation)
        this.oDomEvent.stopPropagation();
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
    } else if (this.bIsTouchEvent()) {
        return this.MOUSE_BUTTON_STATE.Left
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
    return null;
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
UCF_BrowserEvent.prototype.bIsKeyboardTriggered = function() {
    switch (this.oDomEvent.type) {
    case "keydown":
    case "keyup":
    case "keypress":
        return true;
    default:
        return false;
    }
}
;
UCF_BrowserEvent.prototype.oGetData = function() {
    if (!this.oData)
        this.oData = {};
    return this.oData;
}
;
UCF_BrowserEvent.prototype.aGetTouches = function() {
    if (this.bIsTouchEvent()) {
        var oDomEvent = this.oDomEvent;
        return oDomEvent.changedTouches ? oDomEvent.changedTouches : [{
            pageX: oDomEvent.pageX,
            pageY: oDomEvent.pageY,
            identifier: oDomEvent.pointerId
        }];
    }
    return null;
}
;
UCF_BrowserEvent.prototype.bIsTouchEvent = function() {
    return this.oDomEvent.type.match(/^(MSPointer|touch)/i) && (!this.oDomEvent.MSPOINTER_TYPE_TOUCH || this.oDomEvent.pointerType == this.oDomEvent.MSPOINTER_TYPE_TOUCH) ? true : false;
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
    this.initTouchSupport();
    this.iZoom = 100;
    this.oLocked = {};
    this.bAlternativeKeyboardHandling = false;
    this.oCurrentDomRef = null;
    this.oBrowserEventPool = new (UCF_ClassLoader.oGetClass("UCF_ObjectPool"))(UCF_BrowserEvent);
    this.oResizeEventHelper = null;
    this.oDragAndDropManager = null;
    this.bFocussed = true;
    this.iVisibleLayers = 0;
    this.bEventPlayer = false;
    this.sDelayedDoubleClickTimeout = null;
    this.oDelayedDoubleClickedDomRef = null;
}
;UCF_BrowserWindow.prototype = new UCF_EventProvider();
UCF_BrowserWindow.LOCKTYPES = {
    ROUNDTRIP: "ROUNDTRIP",
    DRAGDROP: "DRAGDROP",
    PENDINGNAVIGATION: "PENDINGNAVIGATION",
    POPUP: "POPUP",
    FRAMEPROTECT: "FRAMEPROTECT"
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
    delayeddoubleclick: "lsdelayeddoubleclick",
    mousewheel: "lsmousewheel",
    touchstart: "lstouchstart",
    touchmove: "lstouchmove",
    touchend: "lstouchend"
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
    LayersHidden: 13,
    Offline: 14,
    Online: 15
};
UCF_BrowserWindow.prototype.A_WINDOW_EVENTS = ["load", "unload", "offline", "online", "resize", "scroll", "focus"];
UCF_BrowserWindow.prototype.A_DOM_EVENTS = ["click", "dblclick", "dragstart", "drop", "mousedown", "mouseup", "mouseover", "mouseout", "paste", "cut", "activate", "deactivate", "focusin", "focusout", "focus", "blur", (/Gecko\/\d+ /.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"), "help"];
UCF_BrowserWindow.prototype.A_DOCUMENT_EVENTS = ["contextmenu", "select", "selectstart", "submit", "keydown", "keyup", "keypress", "reset"];
UCF_BrowserWindow.prototype.destroy = function() {
    this.detachBrowserEvents(this.A_WINDOW_EVENTS, window);
    this.detachBrowserEvents(this.A_DOCUMENT_EVENTS, document);
    this.detachBrowserEvents(this.A_DOM_EVENTS, this.oRootRef);
    this.cleanUpTouchSupport();
    this.oRootRef = null;
}
;
UCF_BrowserWindow.prototype.attachBrowserEvent = function(sName, oDomRef) {
    if (sName == "resize" && oDomRef != window) {
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
    if (sName == "resize" && oDomRef != window) {
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
    var bWasUnlocked = !this.bIsLocked();
    this.oLocked[type] = true;
    if (type == UCF_BrowserWindow.LOCKTYPES.ROUNDTRIP && this.oResizeEventHelper) {
        this.oResizeEventHelper.bActive = false;
    }
    if (bWasUnlocked) {
        this.fireEvent(this.E_EVENTS.Lock);
    }
}
;
UCF_BrowserWindow.prototype.unlock = function(type) {
    var bWasLocked = this.bIsLocked();
    delete this.oLocked[type];
    if (type == UCF_BrowserWindow.LOCKTYPES.ROUNDTRIP && this.oResizeEventHelper) {
        this.oResizeEventHelper.bActive = true;
    }
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
    if (bLocked) {
        return true;
    } else {
        return false;
    }
}
;
UCF_BrowserWindow.prototype.bLockedAsDragDrop = function() {
    if (this.oLocked[UCF_BrowserWindow.LOCKTYPES.DRAGDROP])
        return true;
    return false;
}
;
UCF_BrowserWindow.prototype.handleBrowserEvent = function(oDomEvent) {
    if (this.bIsUnnecessaryEvent(oDomEvent))
        return false;
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
    var bProcessDragDrop = (this.bLockedAsDragDrop() && this.bIsDragDropEvent(oBrowserEvent.sGetName()));
    if (this.bIsLocked() && oBrowserEvent.bIsUserTriggered() && !bProcessDragDrop) {
        if (this.bLockedAsDragDrop())
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
UCF_BrowserWindow.prototype.bIsUnnecessaryEvent = function(oDomEvent) {
    if (oDomEvent.type == "resize" && UCF_UserAgent.bIsIE()) {
        var oDomRef = oDomEvent.srcElement;
        if (oDomRef && oDomRef.nodeType && oDomRef.nodeType == 1) {
            var iWidth = oDomRef.offsetWidth
              , iHeight = oDomRef.offsetHeight;
            if (oDomRef.iLastWidth == iWidth && oDomRef.iLastHeight == iHeight) {
                return true;
            } else {
                oDomRef.iLastWidth = iWidth;
                oDomRef.iLastHeight = iHeight;
            }
        }
    }
    return false;
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
UCF_BrowserWindow.prototype.onmousewheel = function(oBrowserEvent) {
    this.fireLSEvent(this.E_LS_EVENTS.mousewheel, oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onDOMMouseScroll = function(oBrowserEvent) {
    this.fireLSEvent(this.E_LS_EVENTS.mousewheel, oBrowserEvent);
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
    if (this.bIsLockedByType(UCF_BrowserWindow.LOCKTYPES.PENDINGNAVIGATION)) {
        var oSource = oBrowserEvent.oGetSource();
        if (oSource && oSource.getAttribute("ct") == "FLC") {
            return;
        }
    }
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
    if (UCF_UserAgent.bIsFirefox() || (UCF_UserAgent.bIsSafari() && !UCF_UserAgent.bIsSafari(5))) {
        this.onfocusin(oBrowserEvent);
    }
}
;
UCF_BrowserWindow.prototype.checkForLostFocus = function(oBrowserEvent) {
    if (UCF_UserAgent.bIsWebKit() && !UCF_DomUtil.bIsInActiveDom(this.oCurrentDomRef)) {
        return;
    }
    if (this.oNextFocusDomRef == null) {
        if (this.bFocussed) {
            this.bFocussed = false;
            this.fireEvent(this.E_EVENTS.Blur);
        }
    }
    if (this.oNextFocusDomRef == null || this.oNextFocusDomRef.tagName && this.oNextFocusDomRef.tagName == "IFRAME") {
        oBrowserEvent.oDomEvent = {
            srcElement: null,
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
    this.oNextFocusDomRef = null;
    this.oPreviousFocusDomRef = this.oCurrentDomRef;
    if (oBrowserEvent.oDomEvent.toElement == null) {}
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
    if (bCtrl && bAlt && bShift && !(iKey == UCF_KeyCodes._1 || iKey == UCF_KeyCodes._2)) {
        var mEventParams = {
            iKey: iKey,
            oBrowserEvent: oBrowserEvent
        };
        this.fireEvent(this.E_EVENTS.Debug, mEventParams);
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
    if (!oSource || oSource == window || oSource == document) {
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
    } else if ((!this.bAlternativeKeyboardHandling && iKey == UCF_KeyCodes.F6 && !bCtrl && !bAlt) || (this.bAlternativeKeyboardHandling && iKey == UCF_KeyCodes.F5 && !bCtrl && bAlt)) {
        var sEventName = bShift ? this.E_LS_EVENTS.skipback : this.E_LS_EVENTS.skipforward;
        this.fireLSEvent(sEventName, oBrowserEvent);
    } else if (iKey == UCF_KeyCodes.F10 && bShiftOnly) {
        this.fireLSEvent("contextmenu", oBrowserEvent);
    } else if (UCF_System.bIs508 && (iKey == UCF_KeyCodes._1 || iKey == UCF_KeyCodes._2) && bCtrl && bAlt && bShift) {
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
            if (!UCF_UserAgent.bIsIE()) {
                this.fireLSEvent(this.E_LS_EVENTS.hotkey, oBrowserEvent);
            }
        } else if (bCtrlOnly && iKey == UCF_KeyCodes.C && UCF_DomUtil.sGetSelectionText(document.body)) {} else {
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
    if (UCF_UserAgent.bIsWebKit()) {
        var oSource = oBrowserEvent.oGetSource();
        while (oSource && oSource.getAttribute && oSource.getAttribute("ti") != 0) {
            oSource = oSource.parentNode;
        }
        if (oSource && oSource.getAttribute && oSource.getAttribute("ti") == 0) {
            UCF_DomUtil.focusDomElement(oSource);
        }
    }
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
UCF_BrowserWindow.prototype.onoffline = function(oBrowserEvent) {
    this.fireEvent(this.E_EVENTS.Offline);
}
;
UCF_BrowserWindow.prototype.ononline = function(oBrowserEvent) {
    this.fireEvent(this.E_EVENTS.Online);
}
;
UCF_BrowserWindow.prototype.onclick = function(oBrowserEvent) {
    if (this.oDragAndDropManager)
        this.oDragAndDropManager.notifyMouseClick(oBrowserEvent);
    if (this.sDelayedDoubleClickTimeout == null || oBrowserEvent.oGetSource() != this.oDelayedDoubleClickedDomRef) {
        this.oDelayedDoubleClickedDomRef = oBrowserEvent.oGetSource();
        UCF_JsUtil.clearDelayedCall(this.sDelayedDoubleClickTimeout);
        this.sDelayedDoubleClickTimeout = UCF_JsUtil.delayedCall(300, this, "openDelayedDoubleClickGate", []);
    }
    if (this.sDelayedDoubleClickTimeout == -1) {
        this.sDelayedDoubleClickTimeout = null;
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
UCF_BrowserWindow.prototype.bLayersVisible = function() {
    return this.iVisibleLayers > 0;
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
UCF_BrowserWindow.prototype.A_DOM_EVENTS_IOS_TOUCH = ["touchstart", "touchmove", "touchend", "touchcancel"];
UCF_BrowserWindow.prototype.A_DOM_EVENTS_MS_TOUCH = ["MSPointerDown", "MSPointerMove", "MSPointerUp"];
UCF_BrowserWindow.prototype.initTouchSupport = function() {
    this.bIsMSPointerDown = false;
    if (UCF_UserAgent.bIsIOS()) {
        this.attachBrowserEvents(this.A_DOM_EVENTS_IOS_TOUCH, this.oRootRef);
    }
    if (UCF_UserAgent.bIsTrident(6) && UCF_System.sDevice == "standards" && window.navigator.msPointerEnabled) {
        for (var i = 0; i < this.A_DOM_EVENTS_MS_TOUCH.length; i++) {
            this.oRootRef.addEventListener(this.A_DOM_EVENTS_MS_TOUCH[i], this.forwardBrowserEvent, false);
        }
    }
}
;
UCF_BrowserWindow.prototype.cleanUpTouchSupport = function() {
    if (UCF_UserAgent.bIsIOS()) {
        this.detachBrowserEvents(this.A_DOM_EVENTS_IOS_TOUCH, this.oRootRef);
    }
    if (UCF_UserAgent.bIsTrident(6) && UCF_System.sDevice == "standards" && window.navigator.msPointerEnabled) {
        for (var i = 0; i < this.A_DOM_EVENTS_MS_TOUCH.length; i++) {
            this.oRootRef.removeEventListener(this.A_DOM_EVENTS_MS_TOUCH[i], this.forwardBrowserEvent, false);
        }
    }
}
;
UCF_BrowserWindow.prototype.ontouchstart = function(oBrowserEvent) {
    this.fireLSEvent(this.E_LS_EVENTS.touchstart, oBrowserEvent);
    if (this.oDragAndDropManager)
        this.oDragAndDropManager.notifyMouseDown(oBrowserEvent);
    else
        this.oGetDragAndDropManager();
}
;
UCF_BrowserWindow.prototype.ontouchmove = function(oBrowserEvent) {
    this.fireLSEvent(this.E_LS_EVENTS.touchmove, oBrowserEvent);
    if (this.oDragAndDropManager)
        this.oDragAndDropManager.notifyMouseMove(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.ontouchend = function(oBrowserEvent) {
    this.fireLSEvent(this.E_LS_EVENTS.touchend, oBrowserEvent);
    if (this.oDragAndDropManager)
        this.oDragAndDropManager.notifyMouseUp(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.ontouchcancel = function(oBrowserEvent) {
    this.ontouchend(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onMSPointerDown = function(oBrowserEvent) {
    if (!oBrowserEvent.bIsTouchEvent())
        return;
    this.bIsMSPointerDown = true;
    this.ontouchstart(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onMSPointerMove = function(oBrowserEvent) {
    if (this.bIsMSPointerDown)
        this.ontouchmove(oBrowserEvent);
}
;
UCF_BrowserWindow.prototype.onMSPointerUp = function(oBrowserEvent) {
    if (!oBrowserEvent.bIsTouchEvent())
        return;
    this.ontouchend(oBrowserEvent);
    this.bIsMSPointerDown = false;
}
;
function UCF_ClientElement(oLS, sId, oJson) {
    if (arguments.length == 0)
        return;
    UCF_EventProvider.apply(this);
    if (typeof (sId) == "object") {
        oParent = oJson;
        oJson = sId;
        if (oJson.Id) {
            sId = oJson.Id;
            delete oJson.Id;
        }
    }
    if (!sId) {
        sId = UCF_ClientElement.createId("ls.id.");
    }
    this.sId = sId;
    this.oLS = oLS;
    this.oJson = oJson;
    this.oParent = null;
    this.mProperties = {};
    this.mAggregations = {};
    this.mAssociations = {};
    this.mEvents = {};
    this.sAggregationName = null;
    this.mBindingInfos = {};
    this.oModels = {};
    this.mDebugInfos = {};
    this.mVirtualizedBindings = {};
    this.oPage = oLS.oGetPageInternal();
    this.bDesignTimeMode = false;
}
;UCF_ClientElement.prototype = new UCF_EventProvider();
UCF_ClientElement.prototype.E_EVENTS = {
    PropertyChange: 0
};
UCF_ClientElement.prototype.toJSONString = function() {
    return UCF_JsUtil.sStringifyJSON(this.toJSON());
}
;
UCF_ClientElement.prototype.toJSON = function() {
    var o = {};
    var oMetadata = this.getMetadata()
      , oProperties = oMetadata.propeties;
    UCF_JsUtil.each(this.mProperties, function(sName, oValue) {
        if (oValue != oMetadata.properties[sName].defaultValue) {
            o[sName] = oValue;
        }
    });
    UCF_JsUtil.each(this.mAggregations, function(sName, oAggregation) {
        if (sName in oMetadata.aggregations) {
            if (oAggregation instanceof UCF_ClientElement) {
                o[sName] = oAggregation.toJSON();
            } else if (UCF_JsUtil.bIsArray(oAggregation)) {
                o[sName] = [];
                for (var i = 0; i < oAggregation.length; i++) {
                    o[sName].push(oAggregation[i].toJSON());
                }
            }
        }
    });
    UCF_JsUtil.each(this.mEvents, function(sName, oEvent) {
        o[sName] = oEvent;
    });
    var oResult = {};
    oResult["sap.ls.controls." + oMetadata.name] = o;
    return oResult;
}
;
UCF_ClientElement.prototype.toLSXString = function(sMethod) {
    var aXML = [];
    var oMetadata = this.getMetadata()
      , oProperties = oMetadata.propeties
      , sControlName = oMetadata.name.substring(0, 1).toLowerCase() + oMetadata.name.substring(1);
    aXML.push("<" + sControlName);
    if (sMethod) {
        aXML.push(" method=\"" + sMethod + "\"");
    }
    UCF_JsUtil.each(this.mProperties, function(sName, oValue) {
        if (oValue != oMetadata.properties[sName].defaultValue) {
            sName = sName.substring(0, 1).toLowerCase() + sName.substring(1);
            aXML.push(" " + sName + "=\"" + UCF_XSSEncoder.encodeXML("" + oValue) + "\"");
        }
    });
    UCF_JsUtil.each(this.mEvents, function(sName, oEvent) {
        sName = sName.substring(0, 1).toLowerCase() + sName.substring(1);
        for (var n in oEvent) {
            var oConfig = oEvent[n];
            aXML.push(" " + sName + "Info." + n + "=\"" + oConfig + "\"");
        }
    });
    var bClosed = false;
    UCF_JsUtil.each(this.mAggregations, function(sName, oAggregation) {
        if (sName in oMetadata.aggregations) {
            bClosed = true;
            aXML.push(">");
            if (oAggregation instanceof UCF_ClientElement) {
                aXML.push(oAggregation.toLSXString("set" + sName));
            } else if (UCF_JsUtil.bIsArray(oAggregation)) {
                for (var i = 0; i < oAggregation.length; i++) {
                    aXML.push(oAggregation[i].toLSXString("add" + sName));
                }
            }
        }
    });
    if (bClosed) {
        aXML.push("</" + sControlName + ">");
    } else {
        aXML.push(" />");
    }
    return aXML.join("");
}
;
UCF_ClientElement.prototype.getAggregationName = function() {
    return this.sAggregationName;
}
;
UCF_ClientElement.prototype.getParentAggregationIndex = function() {
    if (this.getParent()) {
        var aElements = this.getParent().getAggregation(this.sAggregationName);
        for (var i = 0; o < aElements.length; i++) {
            if (aElements[i] == this) {
                return i;
            }
        }
    }
}
;
UCF_ClientElement.prototype.attachPropertyChange = function(oObj, sMethod) {
    this.attachEvent(this.E_EVENTS.PropertyChange, oObj, sMethod);
}
;
UCF_ClientElement.prototype.setDesignTimeMode = function(bDesignTime, bForce) {
    if (typeof (bDesignTime) == "undefined")
        return;
    if (bDesignTime != this.bDesignTimeMode) {
        var oParent = this.getParent();
        if (oParent && oParent.getDesignTimeMode() && !bForce) {
            return;
        }
        this.bDesignTimeMode = bDesignTime || false;
        var oMetadata = this.getMetadata();
        UCF_JsUtil.each(this.mAggregations, function(sName, oAggregation) {
            if (sName in oMetadata.aggregations) {
                if (oAggregation instanceof UCF_ClientElement) {
                    oAggregation.setDesignTimeMode(bDesignTime, true);
                } else if (UCF_JsUtil.bIsArray(oAggregation)) {
                    for (var i = 0; i < oAggregation.length; i++) {
                        oAggregation[i].setDesignTimeMode(bDesignTime, true);
                    }
                }
            }
        });
        if (!this.getParent() || !this.getParent().getDesignTimeMode()) {
            this.bDesignTimeRoot = true;
        }
        this.invalidate();
    }
}
;
UCF_ClientElement.prototype.getDesignTimeMode = function() {
    return this.bDesignTimeMode;
}
;
UCF_ClientElement.prototype.setDesignTimeUnselectable = function(bUnselectable) {
    if (bUnselectable != this.bUnselectable) {
        this.bUnselectable = bUnselectable || false;
    }
}
;
UCF_ClientElement.prototype.setDesignTimeLocked = function(bLocked) {
    if (bLocked != this.bLocked) {
        this.bLocked = bLocked || false;
    }
}
;
UCF_ClientElement.prototype.setDesignTimeRemovable = function(bRemovable) {
    if (bRemovable != this.bRemovable) {
        this.bRemovable = bRemovable || false;
    }
}
;
UCF_ClientElement.prototype.getDesignTimeMetadata = function() {
    if (!this.mDesignTimeMetadata) {
        this.mDesignTimeMetadata = UCF_JsUtil.cloneJSON(this.getMetadata());
    }
    return this.mDesignTimeMetadata;
}
;
UCF_ClientElement.prototype.detachPropertyChange = function(oObj, sMethod) {
    this.detachEvent(this.E_EVENTS.PropertyChange, oObj, sMethod);
}
;
UCF_ClientElement.prototype.firePropertyChange = function(mParam) {
    this.fireEvent(this.E_EVENTS.PropertyChange, mParam);
}
;
UCF_ClientElement.prototype.addDebugInfo = function(sMethodName) {
    if (!this.mDebugInfos[sMethodName]) {
        this.mDebugInfos[sMethodName] = this[sMethodName];
        var that = this;
        this[sMethodName] = (function() {
            return function() {
                var iTS = (new Date()).getTime();
                debugger ;if ((new Date()).getTime() - iTS < 100) {
                    alert("There is no debugger attached. Please attach it using F12 tools");
                }
                return that.mDebugInfos[sMethodName].apply(that, arguments);
            }
        }
        )(sMethodName, that);
    }
}
;
UCF_ClientElement.prototype.removeDebugInfo = function(sMethodName) {
    if (this.mDebugInfos[sMethodName]) {
        this[sMethodName] = this.mDebugInfos[sMethodName];
        delete this.mDebugInfos[sMethodName];
    }
}
;
UCF_ClientElement.prototype.render = function() {
    if (this.getParent()) {
        this.getParent().render();
    }
}
;
UCF_ClientElement.prototype.setProperty = function(sPropertyName, oValue, bSuppressRerendering) {
    if (!this.mMetadata.properties[sPropertyName]) {
        return;
    }
    var sType = this.mMetadata.properties[sPropertyName].type
      , oOldValue = this.getProperty(sPropertyName);
    if (oOldValue == oValue) {
        return this;
    }
    if (oValue === null || typeof (oValue) == "undefined" || !(sPropertyName in this.mProperties)) {
        oValue = this.mMetadata.properties[sPropertyName].defaultValue;
    }
    if (typeof (oValue) != sType && sType.indexOf("UCF_ClientInterfaces.E.") == -1) {
        if (sType == "string")
            oValue = oValue + "";
        if (sType == "int")
            oValue = isNaN(parseInt(oValue)) ? this.mMetadata.properties[sPropertyName].defaultValue : parseInt(oValue);
        if (sType == "float")
            oValue = isNaN(parseFloat(oValue)) ? this.mMetadata.properties[sPropertyName].defaultValue : parseFloat(oValue);
        if (sType == "boolean")
            oValue = oValue === "X" || oValue === "true" || oValue !== 0;
    }
    if (sType.indexOf("UCF_ClientInterfaces.E.") == 0) {
        var oEnum = UCF_ClientInterfaces.E[sType.substring(sType.lastIndexOf(".") + 1)];
        if (oValue in oEnum) {
            oValue = oEnum[oValue];
        } else {
            oValue = this.mMetadata.properties[sPropertyName].defaultValue;
        }
    }
    if (oOldValue != oValue) {
        this.mProperties[sPropertyName] = oValue;
        if (this.hasListeners(this.E_EVENTS.PropertyChange)) {
            var mParam = {
                sender: this,
                name: sPropertyName,
                oldValue: oOldValue,
                newValue: oValue
            };
            this.firePropertyChange(mParam);
        }
        if (this.mBindingInfos[sPropertyName] && !this.mBindingInfos[sPropertyName].skipModelUpdate) {
            this.updateModelProperty(sPropertyName, oValue, this.mProperties[sPropertyName]);
        }
        if (!bSuppressRerendering) {
            this.invalidate();
        }
    }
    return this;
}
;
UCF_ClientElement.prototype.getProperty = function(sPropertyName) {
    if (!this.mMetadata.properties[sPropertyName]) {
        return;
    }
    if (!(sPropertyName in this.mProperties)) {
        this.mProperties[sPropertyName] = this.mMetadata.properties[sPropertyName].defaultValue;
    }
    return this.mProperties[sPropertyName];
}
;
UCF_ClientElement.prototype.getAggregation = function(sAggregationName, iIndex) {
    if (!this.mMetadata.aggregations[sAggregationName]) {
        return;
    }
    if (typeof (iIndex) == "undefined" || iIndex === null) {
        if (this.mMetadata.aggregations[sAggregationName].multiple) {
            return this.mAggregations[sAggregationName] || [];
        } else {
            return this.mAggregations[sAggregationName];
        }
    } else if (this.mMetadata.aggregations[sAggregationName].multiple) {
        if (this.mAggregations[sAggregationName] && this.mAggregations[sAggregationName].length > iIndex) {
            return this.mAggregations[sAggregationName][iIndex];
        } else {
            return null;
        }
    }
}
;
UCF_ClientElement.prototype.setAggregation = function(sAggregationName, oInstance, bSuppressRerendering) {
    if (!this.mMetadata.aggregations[sAggregationName]) {
        return;
    }
    if (!this.mMetadata.aggregations[sAggregationName].multiple) {
        if (this.mAggregations[sAggregationName] && this.mAggregations[sAggregationName] === oInstance)
            return;
        this.mAggregations[sAggregationName] = oInstance;
        oInstance.setParent(this, sAggregationName);
        if (!bSuppressRerendering) {
            this.invalidate();
        }
    } else {}
}
;
UCF_ClientElement.prototype.addAggregation = function(sAggregationName, oInstance, bSuppressRerendering) {
    if (!this.mMetadata.aggregations[sAggregationName]) {
        return;
    }
    if (this.mMetadata.aggregations[sAggregationName].multiple) {
        if (!this.mAggregations[sAggregationName])
            this.mAggregations[sAggregationName] = [];
        this.mAggregations[sAggregationName].push(oInstance);
        oInstance.setParent(this, sAggregationName);
        if (!bSuppressRerendering) {
            this.invalidate();
        }
    } else {}
}
;
UCF_ClientElement.prototype.insertAggregation = function(sAggregationName, oInstance, iIndex, bSuppressRerendering) {
    if (!this.mMetadata.aggregations[sAggregationName]) {
        return;
    }
    if (this.mMetadata.aggregations[sAggregationName].multiple) {
        if (!this.mAggregations[sAggregationName])
            this.mAggregations[sAggregationName] = [];
        if (this.mAggregations[sAggregationName].length > iIndex) {
            this.mAggregations[sAggregationName].splice(iIndex, 0, oInstance);
            oInstance.setParent(this, sAggregationName);
            if (!bSuppressRerendering) {
                this.invalidate();
            }
        } else {
            this.addAggregation(sAggregationName, oInstance, bSuppressRerendering);
        }
    } else {}
}
;
UCF_ClientElement.prototype.removeAggregation = function(sName, vElement, bSuppressRerendering) {
    if (!this.hasAggregation(sName)) {
        return;
    }
    if (typeof (vElement) != "number" && !vElement)
        return;
    var oAggregation = this.mAggregations[sName];
    if (!oAggregation)
        return;
    if (vElement instanceof UCF_ClientElement) {
        var oInstance = vElement;
        if (this.mMetadata.aggregations[sName].multiple) {
            for (var i = 0; i < oAggregation.length; i++) {
                var oElement = oAggregation[i];
                if (oElement == oInstance) {
                    oElement.setParent(null);
                    oElement.destroy();
                    oAggregation.splice(i, 1);
                    return;
                }
            }
        } else if (oAggregation == oInstance) {
            this.clearAggregation(sName, bSuppressRerendering);
        }
    } else if (UCF_JsUtil.bIsArray(oAggregation)) {
        if (oAggregation.length > vElement) {
            oAggregation[vElement].destroy();
            oAggregation.splice(vElement, 1);
            if (!bSuppressRerendering) {
                this.invalidate();
            }
        } else {}
    } else {}
}
;
UCF_ClientElement.prototype.replaceAggregation = function(sName, oOldInstance, oNewInstance, bSuppressRerendering) {
    if (!this.hasAggregation(sName)) {
        return;
    }
    if (typeof (oOldInstance) != "number" && !oOldInstance)
        return;
    var oAggregation = this.mAggregations[sName];
    if (!oAggregation)
        return;
    if (oOldInstance instanceof UCF_ClientElement) {
        var oInstance = oOldInstance;
        if (this.mMetadata.aggregations[sName].multiple) {
            for (var i = 0; i < oAggregation.length; i++) {
                var oElement = oAggregation[i];
                if (oElement == oInstance) {
                    oAggregation.splice(i, 1, oNewInstance);
                    oElement.destroy();
                    if (!bSuppressRerendering) {
                        this.invalidate();
                    }
                }
            }
        } else if (oAggregation == oInstance) {
            var oRootRef = this.getRootRef();
            this.clearAggregation(sName, bSuppressRerendering);
            this.setAggregation(sName, oNewInstance, bSuppressRerendering);
        }
    }
}
;
UCF_ClientElement.prototype.clearAggregation = function(sName, bSuppressRerendering) {
    if (!this.hasAggregation(sName)) {
        return;
    }
    var oAggregation = this.mAggregations[sName];
    if (!oAggregation)
        return;
    delete this.mAggregations[sName];
    if (UCF_JsUtil.bIsArray(oAggregation)) {
        for (var i = 0; i < oAggregation.length; i++) {
            oAggregation[i].destroy(bSuppressRerendering);
        }
    } else {
        oAggregation.destroy(bSuppressRerendering);
    }
    if (!bSuppressRerendering) {
        this.invalidate();
    }
}
;
UCF_ClientElement.prototype.getId = function() {
    return this.sId;
}
;
UCF_ClientElement.prototype.setParent = function(oElement, sAggregationName) {
    if (this.oParent && this.oParent != oElement && !sAggregationName) {
        this.oParent.removeAggregation(this.sAggregationName, oElement);
        this.oParent.invalidate();
    }
    this.sAggregationName = sAggregationName || "Content";
    this.oParent = oElement;
    if (oElement && this.hasModel()) {
        this.updateBindingContext();
        this.updateBindings(true);
    }
}
;
UCF_ClientElement.prototype.getParent = function() {
    return this.oParent;
}
;
UCF_ClientElement.prototype.setEventConfiguration = function(sEventName, oConfig) {
    this.mEvents[sEventName] = oConfig;
}
;
UCF_ClientElement.prototype.getEventConfiguration = function(sEventName) {
    return this.mEvents[sEventName];
}
;
UCF_ClientElement.prototype.hasProperty = function(sName) {
    return this.getMetadata().properties && this.getMetadata().properties[sName];
}
;
UCF_ClientElement.prototype.hasAggregation = function(sName) {
    return this.mMetadata.aggregations && this.mMetadata.aggregations[sName];
}
;
UCF_ClientElement.prototype.bind = function(oBindingInfo) {
    var oMetadata = this.mMetadata;
    if (!oMetadata.defaultProperty && !oMetadata.defaultAggregation) {
        return;
    } else {
        if (mMetadata.defaultAggregation) {
            this.bindAggregation(this.mMetadata.defaultAggregation, oBindingInfo);
        } else {}
        if (mMetadata.defaultProperty) {
            this.bindAggregation(this.mMetadata.defaultAggregation, oBindingInfo);
        } else {}
    }
}
;
UCF_ClientElement.prototype.bindProperty = function(sName, oBindingInfo) {
    var sPath, oFormat, sMode, sModelName, iSeparatorPos, fnFormatter, oType, iSeparatorPos;
    if (!this.hasProperty(sName))
        return;
    if (typeof oBindingInfo == "string") {
        sPath = arguments[1];
        oFormat = arguments[2];
        sMode = arguments[3];
        if (iSeparatorPos > 0) {
            sModelName = sPath.substr(0, iSeparatorPos);
            sPath = sPath.substr(iSeparatorPos + 1);
        }
        UCF_ClassLoader.oGetClass("UCF_SimpleType");
        if (typeof oFormat == "function") {
            fnFormatter = oFormat;
        } else if (oFormat instanceof UCF_SimpleType) {
            oType = oFormat;
        }
        oBindingInfo = {
            path: sPath,
            formatter: fnFormatter,
            type: oType,
            model: sModelName,
            mode: sMode
        };
    }
    iSeparatorPos = oBindingInfo.path.indexOf(">");
    if (iSeparatorPos > 0) {
        oBindingInfo.model = oBindingInfo.path.substr(0, iSeparatorPos);
        oBindingInfo.path = oBindingInfo.path.substr(iSeparatorPos + 1);
    }
    if (this.isBound(sName)) {
        this.unbindProperty(sName);
    }
    this.mBindingInfos[sName] = oBindingInfo;
    if (this.getModel(oBindingInfo.model)) {
        this._bindProperty(sName, oBindingInfo);
    }
    return this;
}
;
UCF_ClientElement.prototype.setModel = function(oModel, sName) {
    if (oModel !== this.oModels[sName]) {
        this.oModels[sName] = oModel;
        if (!sName) {
            this.updateBindingContext();
        }
        this.updateBindings(false, sName, true);
    }
    return this;
}
;
UCF_ClientElement.prototype.getModel = function(sName) {
    var oModel = this.oModels[sName];
    if (!oModel && this._oCurrentModel) {
        return this._oCurrentModel;
    }
    if (!this.oPage.hasModels()) {
        return null;
    }
    if (!oModel && this.sModelId)
        oModel = this.oPage.getModel(this.sModelId);
    if (!oModel && sName)
        oModel = this.getParent() && this.getParent().getModel(sName);
    if (!oModel)
        oModel = this.getParent() && this.getParent().getModel();
    oModel = this.oPage.getModel(sName) || oModel;
    if (oModel && sName) {
        this.oModels[sName] = oModel;
    } else {
        for (var n in this.oModels) {
            if (oModel)
                break;
            oModel = this.oModels[n];
        }
    }
    this._oCurrentModel = oModel;
    return oModel;
}
;
UCF_ClientElement.prototype.hasModel = function() {
    if (!UCF_JsUtil.bIsEmptyObject(this.oModels) || (this.getParent() && this.getParent().hasModel())) {
        return true;
    } else {
        return false;
    }
}
;
UCF_ClientElement.prototype.updateBindings = function(bUpdateAll, sModelName, bRecreate) {
    var that = this;
    UCF_JsUtil.each(this.mBindingInfos, function(sName, oBindingInfo) {
        if (that.getModel(oBindingInfo.model) && (bUpdateAll || oBindingInfo.model == sModelName)) {
            if (bRecreate && oBindingInfo.binding) {
                oBindingInfo.binding.detachChange(oBindingInfo.modelChangeHandler);
                if (oBindingInfo.template) {
                    oBindingInfo.template.destroy();
                }
                delete oBindingInfo.binding;
            }
            if (!oBindingInfo.binding) {
                if (oBindingInfo.factory) {
                    that._bindAggregation(sName, oBindingInfo);
                } else {
                    that._bindProperty(sName, oBindingInfo);
                }
            }
        }
    });
    UCF_JsUtil.each(this.mAggregations, function(sName, oAggregation) {
        if (oAggregation instanceof UCF_ClientElement) {
            oAggregation.updateBindings(bUpdateAll, sModelName, bRecreate);
        } else if (UCF_JsUtil.bIsArray(oAggregation)) {
            for (var i = 0; i < oAggregation.length; i++) {
                oAggregation[i].updateBindings(bUpdateAll, sModelName, bRecreate);
            }
        }
    });
}
;
UCF_ClientElement.prototype.updateAggregation = function(sName) {
    var oBindingInfo = this.mBindingInfos[sName];
    if (!oBindingInfo)
        return;
    var oBinding = oBindingInfo.binding, fnFactory = oBindingInfo.factory, oAggregationInfo = this.getMetadata().aggregations[sName], oClone, that = this;
    if (!oBinding)
        return;
    if (!this.mVirtualizedBindings[sName]) {
        this[oAggregationInfo._sDestructor]();
    }
    if (this.isTreeBinding(sName, oBindingInfo)) {
        var iNodeIndex = 0
          , update = function(aContexts, fnFactory, oBinding, oParent) {
            UCF_JsUtil.each(aContexts, function(iIndex, oContext) {
                var sId = that.getId() + "-" + iNodeIndex++;
                oClone = fnFactory(sId, oContext);
                if (oClone) {
                    if (oClone.getParent() != that) {
                        that[oAggregationInfo._sMutator](oClone);
                    }
                    oClone.setBindingContext(oContext);
                    if (that.mVirtualizedBindings[sName]) {
                        that.onCloneUpdate(oClone, oContext);
                    }
                    update(oBinding.getNodeContexts(oContext), fnFactory, oBinding, oClone);
                }
            });
        };
        update(oBinding.getRootContexts(), fnFactory, oBinding, this);
    } else if (this.isGridBinding(sName, oBindingInfo)) {
        var oContexts = oBinding.getContexts(this.getVisibleRange());
        if (oContexts && this.mVirtualizedBindings[sName]) {
            this.mVirtualizedBindings[sName].returnAll();
        }
        UCF_JsUtil.each(oContexts, function(iIndex, oContext) {
            var oParameter = oContext.getBindingParameter();
            var sId = that.getId() + "-[" + oParameter.key + "]";
            oClone = fnFactory(sId, oContext);
            if (oClone) {
                if (oClone.getParent() != that) {
                    that[oAggregationInfo._sMutator](oClone);
                }
                oClone.setBindingContext(oContext);
                if (that.mVirtualizedBindings[sName]) {
                    that.onCloneUpdate(oClone, oContext);
                }
            }
        });
        if (oContexts && this.mVirtualizedBindings[sName]) {
            var aFreeInstances = this.mVirtualizedBindings[sName].getFreeInstances();
            if (aFreeInstances) {
                for (var i = 0; i < aFreeInstances.length; i++) {
                    var oInstance = aFreeInstances[i];
                    if (oInstance) {
                        this.onCloneReturn(oInstance);
                    }
                }
            }
        }
    } else {
        if (this.mVirtualizedBindings[sName]) {
            this.mVirtualizedBindings[sName].returnAll();
        }
        UCF_JsUtil.each(oBinding.getContexts(), function(iIndex, oContext) {
            var sId = that.getId() + "-" + iIndex;
            oClone = fnFactory(sId, oContext);
            if (oClone) {
                if (oClone.getParent() != that) {
                    that[oAggregationInfo._sMutator](oClone);
                }
                oClone.setBindingContext(oContext);
                if (that.mVirtualizedBindings[sName]) {
                    that.onCloneUpdate(oClone, oContext);
                }
            }
        });
        if (this.mVirtualizedBindings[sName]) {
            var aFreeInstances = this.mVirtualizedBindings[sName].getFreeInstances();
            if (aFreeInstances) {
                for (var i = 0; i < aFreeInstances.length; i++) {
                    var oInstance = aFreeInstances[i];
                    if (oInstance) {
                        this.onCloneReturn(oInstance);
                    }
                }
            }
        }
    }
}
;
UCF_ClientElement.prototype.clone = function(sIdSuffix, aLocalIds) {
    if (!sIdSuffix) {
        sIdSuffix = UCF_ClientElement.createId("clone");
    }
    if (!aLocalIds) {
        aLocalIds = UCF_JsUtil.map(this.findElements(true), function(oElement) {
            return oElement.getId();
        });
    }
    var oMetadata = this.getMetadata(), oClass = oMetadata._oClass, sId = this.getId() + "-" + sIdSuffix, mSettings = {}, mProps = this.mProperties, sKey, oClone;
    for (sKey in mProps) {
        mSettings[sKey] = mProps[sKey];
    }
    UCF_JsUtil.each(this.mAggregations, function(sName, oAggregation) {
        if (sName in oMetadata.aggregations) {
            if (oAggregation instanceof UCF_ClientElement) {
                mSettings[sName] = oAggregation.clone(sIdSuffix, aLocalIds);
            } else if (UCF_JsUtil.bIsArray(oAggregation)) {
                mSettings[sName] = [];
                for (var i = 0; i < oAggregation.length; i++) {
                    mSettings[sName].push(oAggregation[i].clone(sIdSuffix, aLocalIds));
                }
            } else {
                mSettings[sName] = oAggregation;
            }
        }
    });
    UCF_JsUtil.each(this.mAssociations, function(sName, oAssociation) {
        if (UCF_JsUtil.bIsArray(oAssociation)) {
            oAssociation = oAssociation.slice(0);
            for (var i = 0; i < oAssociation.length; i++) {
                if (UCF_JsUtil.bInArray(oAssociation[i], aLocalIds) >= 0) {
                    oAssociation[i] += "-" + sIdSuffix;
                }
            }
        } else if (UCF_JsUtil.bInArray(oAssociation, aLocalIds) >= 0) {
            oAssociation += "-" + sIdSuffix;
        }
        mSettings[sName] = oAssociation;
    });
    if (this instanceof UCF_ClientControl) {
        oClone = UCF_ClientControl.createInstance(this.sClassName, this.oLS, sId, mSettings);
    } else {
        oClone = UCF_ClientElement.createInstance(this.sClassName, this.oLS, sId, mSettings);
    }
    UCF_JsUtil.each(this.mEvents, function(sName, aConfig) {
        oClone.mEvents[sName] = aConfig;
    });
    oClone.oCurrentTemplate = this;
    UCF_JsUtil.each(this.oModels, function(sName, oModel) {
        oClone.setModel(oModel, sName);
    });
    oClone.sModelId = this.sModelId;
    UCF_JsUtil.each(this.mBindingInfos, function(sName, oBindingInfo) {
        var oCloneBindingInfo = {};
        for (var n in oBindingInfo) {
            oCloneBindingInfo[n] = oBindingInfo[n];
        }
        delete oCloneBindingInfo.binding;
        if (oBindingInfo.factory) {
            oClone.bindAggregation(sName, oCloneBindingInfo);
        } else {
            oClone.bindProperty(sName, oCloneBindingInfo);
        }
    });
    return oClone;
}
;
UCF_ClientElement.prototype.findElements = function(bRecursive) {
    var aControls = [];
    function fFindElements(oControl) {
        for (var n in oControl.mAggregations) {
            var a = oControl.mAggregations[n];
            if (UCF_JsUtil.bIsArray(a)) {
                for (var i = 0; i < a.length; i++) {
                    aControls.push(a[i]);
                    if (bRecursive) {
                        fFindElements(a[i]);
                    }
                }
            } else if (a instanceof UCF_ClientElement) {
                aControls.push(a);
                if (bRecursive) {
                    fFindElements(a);
                }
            }
        }
    }
    fFindElements(this);
    return aControls;
}
;
UCF_ClientElement.prototype.isTreeBinding = function(sName) {
    var o = this.getMetadata().aggregations[sName];
    return o && o.bindingType === "tree";
}
;
UCF_ClientElement.prototype.isGridBinding = function(sName, oBindingInfo) {
    if (oBindingInfo && oBindingInfo.bindingtype === "UCF_GridBinding") {
        return true;
    }
    var o = this.getMetadata().aggregations[sName];
    if (o.bindingType === "grid") {
        return true;
    }
    return false;
}
;
UCF_ClientElement.prototype.isListBinding = function(sName, oBindingInfo) {
    if (oBindingInfo && oBindingInfo.bindingtype === "UCF_ListBinding") {
        return true;
    }
    var o = this.getMetadata().aggregations[sName];
    if (o && o.bindingType !== "grid" && o.bindingType !== "tree") {
        return true;
    }
    return false;
}
;
UCF_ClientElement.prototype.isTreeBinding = function(sName, oBindingInfo) {
    if (oBindingInfo && oBindingInfo.bindingtype === "UCF_TreeBinding") {
        return true;
    }
    var o = this.getMetadata().aggregations[sName];
    if (o && o.bindingType === "tree") {
        return true;
    }
    return false;
}
;
UCF_ClientElement.prototype._bindProperty = function(sName, oBindingInfo) {
    if (!this.hasProperty(sName))
        return;
    var oModel = this.getModel(oBindingInfo.model), oContext, oBinding, oPropertyInfo = this.getMetadata().properties[sName], fnFormatter = oBindingInfo.formatter, oType = oBindingInfo.type, sDataType = oBindingInfo.datatype;
    if (sDataType && !oType) {
        var sConfiguration = oBindingInfo.typeconfig || null;
        var oTypeClass = UCF_JSONModel.getDataType(sDataType);
        if (oTypeClass) {
            var oConfiguration = null;
            if (sConfiguration) {
                oConfiguration = UCF_JsUtil.oParseJSON(sConfiguration);
            }
            var oTypeInstance = null;
            if (oConfiguration) {
                oTypeInstance = new oTypeClass(oConfiguration);
            } else {
                oTypeInstance = new oTypeClass();
            }
            oBindingInfo.type = oTypeInstance;
        }
        oType = oBindingInfo.type;
    }
    var sInternalType = oPropertyInfo.type
      , that = this
      , fModelChangeHandler = function() {
        var oValue = oBinding.getValue();
        if (fnFormatter) {
            oValue = fnFormatter.apply(that, [oValue]);
        }
        if (oType) {
            try {
                oValue = oType.formatValue(oValue, sInternalType);
                oBindingInfo.skipModelUpdate = true;
                that[oPropertyInfo._sMutator](oValue);
                oBindingInfo.skipModelUpdate = false;
            } catch (oException) {
                if (oException instanceof UCF_FormatException) {
                    this.oLS.fireFormatError({
                        element: that,
                        property: sName,
                        type: oType,
                        newValue: oValue,
                        oldValue: that.getProperty(sName),
                        exception: oException
                    });
                } else {
                    throw oException;
                }
            }
        } else {
            oBindingInfo.skipModelUpdate = true;
            that[oPropertyInfo._sMutator](oValue);
            oBindingInfo.skipModelUpdate = false;
        }
    };
    oContext = oBindingInfo.model ? null : this.getBindingContext();
    oBinding = oModel.bindProperty(oBindingInfo.path, oContext, oBindingInfo.parameters);
    oBindingInfo.skipModelUpdate = false;
    oBindingInfo.binding = oBinding;
    oBindingInfo.modelChangeHandler = fModelChangeHandler;
    if (!oBindingInfo.mode || !oModel.isBindingModeSupported(oBindingInfo.mode)) {
        oBindingInfo.mode = oModel.getDefaultBindingMode();
    }
    if (oBindingInfo.mode != UCF_Binding.Mode.OneTime) {
        oBinding.attachChange(fModelChangeHandler);
        oBinding.setListener(this);
    }
    fModelChangeHandler();
}
;
UCF_ClientElement.prototype.getBinding = function(sName) {
    return this.mBindingInfos[sName] && this.mBindingInfos[sName].binding;
}
;
UCF_ClientElement.prototype.unbindProperty = function(sName) {
    var oBindingInfo = this.mBindingInfos[sName];
    if (oBindingInfo) {
        if (oBindingInfo.binding) {
            oBindingInfo.binding.detachChange(oBindingInfo.modelChangeHandler);
            oBindingInfo.binding.setListener(null);
        }
        delete this.mBindingInfos[sName];
    }
    return this;
}
;
UCF_ClientElement.prototype.isBound = function(sName) {
    return (sName in this.mBindingInfos)
}
;
UCF_ClientElement.prototype.bindAggregation = function(sName, oBindingInfo) {
    var sPath, oTemplate, oSorter, aFilters;
    if (typeof oBindingInfo == "string") {
        sPath = arguments[1];
        oTemplate = arguments[2];
        oSorter = arguments[3];
        aFilters = arguments[4];
        oBindingInfo = {
            path: sPath,
            sorter: oSorter,
            filters: aFilters
        };
        if (oTemplate instanceof UCF_ClientElement) {
            oBindingInfo.template = oTemplate;
        } else if (typeof oTemplate === "function") {
            oBindingInfo.factory = oTemplate;
        }
    }
    iSeparatorPos = oBindingInfo.path.indexOf(">");
    if (iSeparatorPos > 0) {
        oBindingInfo.model = oBindingInfo.path.substr(0, iSeparatorPos);
        oBindingInfo.path = oBindingInfo.path.substr(iSeparatorPos + 1);
    }
    if (this.isBound(sName)) {
        this.unbindAggregation(sName);
    }
    if (!(oBindingInfo.template || oBindingInfo.factory)) {
        throw new Error("Missing template or factory function for aggregation " + sName + " of control id " + this.getId() + " !");
    }
    var that = this;
    if (oBindingInfo.template) {
        if (oBindingInfo.template.sClassName == "TemplateList") {
            oBindingInfo.template.destroy = function() {
                for (var n in this.mTemplates) {
                    this.mTemplates[n].destroy();
                }
            }
            ;
            oBindingInfo.template.clone = function(sId, oContext) {
                if (!this.mTemplates) {
                    var aItems = this.getItems();
                    this.mTemplates = {};
                    for (var i = 0; i < aItems.length; i++) {
                        var oControl = aItems[i].getControl();
                        var sTemplateName = aItems[i].getName();
                        if (sTemplateName == "" || i == 0) {
                            this.mTemplates["_defaulttemplate"] = oControl;
                            if (that.mVirtualizedBindings[sName]) {
                                that.mVirtualizedBindings[sName].setDefaultType(oControl);
                            }
                        }
                        if (sTemplateName != "") {
                            this.mTemplates[sTemplateName] = oControl;
                            if (that.mVirtualizedBindings[sName]) {
                                that.mVirtualizedBindings[sName].addType(sTemplateName, oControl);
                            }
                        }
                    }
                }
                var sItemName = this.getItemName()
                  , oClone = null;
                if (this.mBindingInfos["ItemName"]) {
                    sItemName = oContext.getModel().getProperty(oContext.getPath() + "/" + this.mBindingInfos["ItemName"].path) || "";
                }
                if (that.mVirtualizedBindings[sName]) {
                    oClone = that.mVirtualizedBindings[sName].borrowInstance(sItemName, sId, oContext);
                } else {
                    oClone = this.mTemplates[sItemName];
                }
                oClone.setBindingContext(oContext);
                oClone.updateBindings();
                return oClone;
            }
            ;
        }
        oBindingInfo.factory = function(sId, oContext) {
            if (oBindingInfo.template.sClassName != "TemplateList" && that.mVirtualizedBindings[sName]) {
                if (!that.mVirtualizedBindings[sName].checkType(oBindingInfo.template)) {
                    that.mVirtualizedBindings[sName].setDefaultType(oBindingInfo.template);
                }
                oClone = that.mVirtualizedBindings[sName].borrowInstance("", sId, oContext);
                return oClone;
            }
            if (oBindingInfo.template.sClassName == "TemplateList") {
                oClone = oBindingInfo.template.clone(sId, oContext);
            } else {
                oClone = oBindingInfo.template.clone(sId, oContext);
            }
            return oClone;
        }
    }
    this.mBindingInfos[sName] = oBindingInfo;
    if (this.getModel(oBindingInfo.model)) {
        this._bindAggregation(sName, oBindingInfo);
    }
    return this;
}
;
UCF_ClientElement.prototype.getTemplateId = function() {
    if (this.oCurrentTemplate) {
        return this.oCurrentTemplate.getId();
    }
    return null;
}
;
UCF_ClientElement.prototype.setVirtualize = function(sName, bUseVirtualization) {
    var oAggregation = this.getMetadata().aggregations[sName];
    if (!oAggregation) {
        return;
    }
    if (this.mVirtualizedBindings[sName]) {
        while (this.mVirtualizedBindings[sName].length > 0) {
            var oClone = this.mVirtualizedBindings[sName].pop();
            this.onCloneDelete(oClone);
            oClone.destroy();
        }
        if (bUseVirtualization === false) {
            delete this.mVirtualizedBindings[sName];
        }
    }
    if (bUseVirtualization) {
        this.mVirtualizedBindings[sName] = new (UCF_ClassLoader.oGetClass("UCF_TypedTemplatePool"))(this);
    }
}
;
UCF_ClientElement.prototype.isContextVisible = function(oBindingContext) {
    var oRange = this.getVisibleRange()
      , oParameter = oBindingContext.getBindingParameter();
    if (!oRange)
        return true;
    if ("x"in oParameter && "y"in oParameter) {
        var iX = oParameter.x
          , iY = oParameter.y;
        if (iX >= oRange.iStartX && iX <= oRange.iEndX && iY >= oRange.iStartY && iY <= oRange.iEndY) {
            return true;
        }
        return false;
    } else if ("x"in oParameter) {
        var iX = oParameter.x;
        if (iX >= oRange.iStart && iX <= oRange.iEnd) {
            return true;
        }
        return false;
    }
}
;
UCF_ClientElement.prototype.getVisibleRange = function(sId, oBindingContext) {
    return null;
}
;
UCF_ClientElement.prototype.onCloneUpdate = function(oClone, oBindingContext) {}
;
UCF_ClientElement.prototype.onCloneReturn = function(oClone) {}
;
UCF_ClientElement.prototype.onCloneCreate = function(oClone) {}
;
UCF_ClientElement.prototype.onCloneDelete = function(oClone) {
    oClone.destroy();
}
;
UCF_ClientElement.prototype._bindAggregation = function(sName, oBindingInfo) {
    var that = this, oBinding, fModelChangeHandler = function(oEvent) {
        var sUpdater = "update" + sName.substr(0, 1).toUpperCase() + sName.substr(1);
        if (that[sUpdater]) {
            that[sUpdater]();
        } else {
            that.updateAggregation(sName);
        }
    };
    var sModelName = oBindingInfo.model;
    if (this.isTreeBinding(sName, oBindingInfo)) {
        oBinding = this.getModel(sModelName).bindTree(oBindingInfo.path, this.getBindingContext(), oBindingInfo.filters, oBindingInfo.parameters);
    } else if (this.isGridBinding(sName, oBindingInfo)) {
        oBinding = this.getModel(sModelName).bindGrid(oBindingInfo.path, this.getBindingContext(), oBindingInfo.filters, oBindingInfo.parameters);
    } else if (this.isListBinding(sName, oBindingInfo)) {
        oBinding = this.getModel(sModelName).bindList(oBindingInfo.path, this.getBindingContext(), oBindingInfo.sorter, oBindingInfo.filters, oBindingInfo.parameters);
    }
    oBindingInfo.binding = oBinding;
    oBindingInfo.modelChangeHandler = fModelChangeHandler;
    oBinding.attachChange(fModelChangeHandler);
    fModelChangeHandler();
}
;
UCF_ClientElement.prototype.unbindAggregation = function(sName) {
    var oBindingInfo = this.mBindingInfos[sName];
    if (oBindingInfo) {
        if (oBindingInfo.binding) {
            oBindingInfo.binding.detachChange(oBindingInfo.modelChangeHandler);
            if (oBindingInfo.template) {
                oBindingInfo.template.destroy();
            }
            if (oBindingInfo.factory) {
                oBindingInfo.template.destroy();
            }
        }
        delete this.mBindingInfos[sName];
    }
    return this;
}
;
UCF_ClientElement.prototype.destroy = function(bSuppressRerendering) {
    var that = this;
    for (var sAggregation in this.mAggregations) {
        this.clearAggregation(sAggregation, true);
        if (this.mVirtualizedBindings[sAggregation]) {
            this.mVirtualizedBindings[sAggregation].destroy();
        }
    }
    if (this.getParent() && this.sAggregationName) {
        this.getParent().removeAggregation(this.sAggregationName, this, true);
    }
    UCF_JsUtil.each(this.mBindingInfos, function(sName, oBindingInfo) {
        if (oBindingInfo.factory) {
            that.unbindAggregation(sName);
        } else {
            that.unbindProperty(sName);
        }
    });
    if (!bSuppressRerendering) {
        this.removeFromDom();
    }
    this.setParent = function() {
        throw Error("The control with ID " + that.getId() + " was destroyed and cannot be used anymore.");
    }
    ;
    if (this.oLS.oControlFactory.mClientControls[this.getId()]) {
        delete this.oLS.oControlFactory.mClientControls[this.getId()];
    }
}
;
UCF_ClientElement.prototype.removeFromDom = function() {
    var oRootRef = this.getRootRef();
    if (oRootRef && oRootRef.parentNode) {
        oRootRef.parentNode.removeChild(oRootRef);
    }
}
;
UCF_ClientElement.prototype.getBindingPath = function(sName) {
    return this.mBindingInfos[sName] && this.mBindingInfos[sName].path;
}
;
UCF_ClientElement.prototype.setBindingContext = function(oContext) {
    this.oBindingContext = oContext;
    this.updateBindingContext();
    return this;
}
;
UCF_ClientElement.prototype.updateBindingContext = function(bSkipLocal) {
    var oModel = this.getModel(), oParent = this.getParent(), oParentContext, that = this;
    if (this.sBindingPath && !bSkipLocal) {
        if (oParent && oModel == oParent.getModel()) {
            oParentContext = oParent.getBindingContext();
        }
        if (oModel) {
            oModel.createBindingContext(this.sBindingPath, oParentContext, this.mBindingParameters, function(oContext) {
                that.oBindingContext = oContext;
                that.updateBindingContext(true);
            });
        } else {
            this.oBindingContext = undefined;
        }
        return;
    }
    var oContext = this.getBindingContext();
    UCF_JsUtil.each(this.mBindingInfos, function(sName, oBindingInfo) {
        var oBinding = oBindingInfo.binding;
        if (oBinding && oBinding.getModel() == oModel) {
            oBinding.setContext(oContext);
        }
    });
    UCF_JsUtil.each(this.mAggregations, function(sName, oAggregation) {
        if (oAggregation instanceof UCF_ClientElement) {
            oAggregation.updateBindingContext();
        } else if (oAggregation instanceof Array) {
            for (var i = 0; i < oAggregation.length; i++) {
                oAggregation[i].updateBindingContext();
            }
        }
    });
}
;
UCF_ClientElement.prototype.getBindingContext = function() {
    var oModel = this.getModel();
    if (this.oBindingContext) {
        return this.oBindingContext;
    } else if (oModel && this.getParent() && oModel != this.getParent().getModel()) {
        return undefined;
    } else {
        return this.getParent() && this.getParent().getBindingContext();
    }
}
;
UCF_ClientElement.prototype.invalidate = function() {
    if (this.bInvalidated)
        return;
    this.bInvalidated = true;
    if (this.oParent) {
        this.oParent.invalidate();
    }
}
;
UCF_ClientElement.prototype.isParentInvalidated = function() {
    var oParent = this.getParent()
      , bParentInvalidated = false;
    while (oParent) {
        if (oParent)
            bParentInvalidated = oParent.bInvalidated;
        oParent = oParent.getParent();
    }
    return bParentInvalidated;
}
;
UCF_ClientElement.prototype.isInvalidated = function() {
    return this.bInvalidated;
}
;
UCF_ClientElement.prototype.isChildInvalidated = function() {
    var bChildInvalidated = false;
    this.traverseChildren(function(oElement) {
        if (bChildInvalidated)
            return;
        if (oElement.isInvalidated()) {
            bChildInvalidated = true;
        }
    });
    return bChildInvalidated;
}
;
UCF_ClientElement.prototype.getInvalidatedChildren = function() {
    var aChildren = [];
    this.traverseChildren(function(oElement) {
        if (oElement.isInvalidated()) {
            aChildren.push(oElement);
            return true;
        }
    });
    return aChildren;
}
;
UCF_ClientElement.prototype.numberOfInvalidatedChildren = function() {
    var i = 0;
    this.traverseChildren(function(oElement) {
        if (oElement.isInvalidated())
            i++;
    });
    return i;
}
;
UCF_ClientElement.prototype.resetInvalidated = function() {
    this.bInvalidated = false;
    this.traverseChildren(function(oElement) {
        oElement.bInvalidated = false;
        if (oElement._serialized) {
            if (oElement._serialized._control) {
                oElement._serialized._control = null;
            }
            oElement._serialized = null;
        }
    });
    if (this._serialized) {
        if (this._serialized._control) {
            this._serialized._control = null;
        }
        this._serialized = null;
    }
}
;
UCF_ClientElement.prototype.hasValidHTML = function() {
    if (this.isInvalidated())
        return false;
    if (this.isChildInvalidated())
        return false;
    var sId = this.getId()
      , oRootRef = UCF_DomUtil.$(sId + "-r");
    if (!oRootRef)
        oRootRef = UCF_DomUtil.$(sId);
    if (!oRootRef)
        return false;
    return true;
}
;
UCF_ClientElement.prototype.getRootRef = function() {
    var sId = this.getId()
      , oRootRef = UCF_DomUtil.$(sId + "-r");
    if (!oRootRef)
        oRootRef = UCF_DomUtil.$(sId);
    return oRootRef;
}
;
UCF_ClientElement.prototype.getHTML = function() {
    var oRootRef = this.getRootRef();
    if (oRootRef && !oRootRef.outerHTML) {
        oDomHelper.appendChild(oRootRef);
        return oDomHelper.innerHTML;
    } else {
        return oRootRef.outerHTML;
    }
}
;
UCF_ClientElement.prototype.traverseChildren = function(fCallback) {
    for (var n in this.mMetadata.aggregations) {
        var oAggregation = this.mAggregations[n];
        if (!oAggregation)
            continue;
        if (this.mMetadata.aggregations[n].multiple) {
            for (var i = 0; i < oAggregation.length; i++) {
                if (!fCallback(oAggregation[i])) {
                    oAggregation[i].traverseChildren(fCallback);
                }
            }
        } else if (oAggregation) {
            if (!fCallback(oAggregation)) {
                oAggregation.traverseChildren(fCallback);
            }
        }
    }
}
;
UCF_ClientElement.prototype.updateModelProperty = function(sName, oValue, oOldValue) {
    if (this.isBound(sName)) {
        var oBindingInfo = this.mBindingInfos[sName];
        if (this.mBindingInfos.skipModelUpdate) {
            return;
        }
        var oBinding = oBindingInfo.binding
          , oPropertyInfo = this.getMetadata().properties[sName]
          , oType = oBindingInfo.type
          , sInternalType = oPropertyInfo.type;
        if (!window["UCF_Binding"]) {
            UCF_ClassLoader.oGetClass("UCF_Binding");
        }
        if (oBindingInfo.mode == UCF_Binding.Mode.TwoWay && oBinding && !oBindingInfo.skipModelUpdate && !oBindingInfo.formatter) {
            if (oType) {
                try {
                    oValue = oType.parseValue(oValue, sInternalType);
                    oType.validateValue(oValue);
                    oBindingInfo.binding.setValue(oValue);
                    this.oLS.fireValidationSuccess({
                        element: this,
                        property: sName,
                        type: oType,
                        newValue: oValue,
                        oldValue: oOldValue
                    });
                } catch (oException) {
                    if (oException instanceof UCF_ParseException) {
                        this.oLS.fireParseError({
                            element: this,
                            property: sName,
                            type: oType,
                            newValue: oValue,
                            oldValue: oOldValue,
                            exception: oException
                        });
                    } else if (oException instanceof UCF_ValidateException) {
                        this.oLS.fireValidationError({
                            element: this,
                            property: sName,
                            type: oType,
                            newValue: oValue,
                            oldValue: oOldValue,
                            exception: oException
                        });
                    } else {
                        throw oException;
                    }
                }
            } else {
                oBindingInfo.binding.setValue(oValue);
            }
        }
    }
}
;
UCF_ClientElement.prototype.onBeforeRender = function() {}
;
UCF_ClientElement.prototype.onAfterRender = function() {}
;
UCF_ClientElement.prototype.getUCFInstance = function() {
    return this.oLS.oControlFactory.oGetControlById(this.sId) || this.oLS.oControlFactory.oCreateControlById(this.sId);
}
;
UCF_ClientElement.extendClass = function(sClassName, oBaseClass) {
    UCF_ClassLoader.oGetClass("UCF_ClientInterfaces");
    var oInterface = UCF_ClientInterfaces.getInterface(sClassName);
    if (!oInterface || !oInterface.name) {
        return null;
    }
    var sClientClassName = "UCF_Client" + oInterface.name
      , oClass = window[sClientClassName]
      , oUCFClass = null
      , oClientClass = null;
    if (!oClass || !oClass._extended) {
        if (UCF_ControlFactory.M_NAMES["UCF_" + oInterface.name]) {
            oUCFClass = UCF_ClassLoader.oGetClass("UCF_" + oInterface.name, true);
        }
        if (oUCFClass && oUCFClass.getClientControlClass) {
            sClientControlClass = oUCFClass.getClientControlClass();
            if (sClientControlClass) {
                oClientClass = UCF_ClassLoader.oGetClass(sClientControlClass, true);
            }
        }
        oClass = function(oLS, sId, oJson, oParent) {
            if (arguments.length == 0)
                return;
            oBaseClass.apply(this, [oLS, sId, oJson, oParent]);
            oLS.oControlFactory.mClientControls[this.getId()] = this;
            if (oParent) {
                this.oParent = oParent;
            }
            this.sClassName = oInterface.name;
            this.mMetadata = oInterface;
            this.mMetadata._oClass = oClass;
        }
        ;
        if (oInterface.renderer) {
            oClass.prototype = new (UCF_ClassLoader.oGetClass("UCF_ClientControl"))();
        } else {
            oClass.prototype = new (UCF_ClassLoader.oGetClass("UCF_ClientElement"))();
        }
        oClass.prototype.getMetadata = function() {
            if (this.mMetadata && !this.mMetadata._) {
                this.mMetadata._ = true;
                for (var n in this.mMetadata.properties) {
                    this.mMetadata.properties[n]._sMutator = "set" + n;
                }
                for (var n in this.mMetadata.aggregations) {
                    var oAggregation = this.mMetadata.aggregations[n];
                    if (oAggregation.multiple) {
                        oAggregation._sMutator = "add" + this.mMetadata.aggregations[n].singularName;
                        oAggregation._sDestructor = "clear" + n;
                    } else {
                        oAggregation._sMutator = "set" + n;
                        oAggregation._sDestructor = "clear" + n;
                    }
                }
            }
            return this.mMetadata;
        }
        ;
        for (var n in oInterface.properties) {
            var sName = n
              , sSetter = "set" + sName
              , sGetter = "get" + sName;
            oClass.prototype[sGetter] = (function(sName) {
                return function() {
                    return this.getProperty(sName);
                }
                ;
            }
            )(sName);
            if (false && oUCFClassMethods && oUCFClassMethods[sSetter]) {
                oClass.prototype[sSetter] = (function(sName) {
                    return function(oValue, bSuppressRerendering) {
                        var oControl = this.oLS.oControlFactory.oGetControlById(this.getId());
                        if (oControl) {
                            oControl["set" + sName](oValue);
                        }
                        this.setProperty(sName, oValue, false);
                    }
                    ;
                }
                )(sName);
            } else {
                oClass.prototype[sSetter] = (function(sName) {
                    return function(oValue, bSuppressRerendering) {
                        this.setProperty(sName, oValue, bSuppressRerendering);
                    }
                    ;
                }
                )(sName);
            }
        }
        if (oInterface.aggregations && oInterface.aggregations["PropertyBinding"])
            delete oInterface.aggregations["PropertyBinding"];
        if (oInterface.aggregations && oInterface.aggregations["ListBinding"])
            delete oInterface.aggregations["ListBinding"];
        for (var n in oInterface.aggregations) {
            var sName = n
              , sSetter = "set" + sName
              , sGetter = "get" + sName
              , sClear = "clear" + sName;
            oAggregation = oInterface.aggregations[n];
            if (!oAggregation.multiple) {
                oClass.prototype[sGetter] = (function(sName) {
                    return function() {
                        return this.getAggregation(sName);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sSetter] = (function(sName) {
                    return function(oValue, bSuppressRerendering) {
                        this.setAggregation(sName, oValue, bSuppressRerendering);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sClear] = (function(sName) {
                    return function(bSuppressRerendering) {
                        this.clearAggregation(sName, bSuppressRerendering);
                    }
                    ;
                }
                )(sName);
            } else {
                var sGetter = "get" + oAggregation.singularName
                  , sGetters = "get" + sName
                  , sAdd = "add" + oAggregation.singularName
                  , sInsert = "insert" + oAggregation.singularName
                  , sRemove = "remove" + oAggregation.singularName
                  , sClear = "clear" + sName;
                oClass.prototype[sGetter] = (function(sName) {
                    return function(iIndex) {
                        return this.getAggregation(sName, iIndex);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sGetters] = (function(sName) {
                    return function() {
                        return this.getAggregation(sName);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sAdd] = (function(sName) {
                    return function(oValue, bSuppressRerendering) {
                        this.addAggregation(sName, oValue, bSuppressRerendering);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sInsert] = (function(sName) {
                    return function(oValue, iIndex, bSuppressRerendering) {
                        this.insertAggregation(sName, oValue, iIndex, bSuppressRerendering);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sRemove] = (function(sName) {
                    return function(iIndex, bSuppressRerendering) {
                        this.removeAggregation(sName, iIndex, bSuppressRerendering);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sClear] = (function(sName) {
                    return function(bSuppressRerendering) {
                        this.clearAggregation(sName, bSuppressRerendering);
                    }
                    ;
                }
                )(sName);
            }
            for (var n in oInterface.events) {
                var sName = n
                  , sAttach = "attach" + n
                  , sDetach = "detach" + n
                  , sFire = "fire" + n;
                oClass.prototype[sAttach] = (function(sName) {
                    return function(fFunction) {
                        this.attachEvent(sName, fFunction);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sDetach] = (function(sName) {
                    return function(fFunction) {
                        this.detachEvent(sName, fFunction);
                    }
                    ;
                }
                )(sName);
                oClass.prototype[sFire] = (function(sName) {
                    return function() {
                        this.fireEvent(sName);
                    }
                    ;
                }
                )(sName);
            }
            ;
        }
        if (oClientClass) {
            for (var n in oClientClass.prototype) {
                oClass.prototype[n] = oClientClass.prototype[n];
            }
            for (var n in oClientClass._) {
                if (!oClass._) {
                    oClass._ = {};
                }
                oClass._[n] = oClientClass._[n];
            }
        }
        oClass._extended = true;
        window[sClientClassName] = oClass;
    }
    return oClass;
}
;
UCF_ClientElement.createInstance = function(sClassName, oLS, sId, oJson, oParent) {
    var oClass = UCF_ClientElement.extendClass(sClassName, UCF_ClientElement);
    if (!oClass)
        return null;
    var oControl = new oClass(oLS,sId,oJson,oParent);
    if (oJson) {
        for (var n in oJson) {
            if (n == "Id")
                continue;
            if (n == "ModelId")
                continue;
            if (n == "PropertyBinding")
                continue;
            var mMetadata = oControl.getMetadata();
            if (mMetadata.properties && mMetadata.properties[n]) {
                oControl["set" + n](oJson[n], true);
            } else if (mMetadata.aggregations && mMetadata.aggregations[n]) {
                var oContent = null;
                if (!mMetadata.aggregations[n].multiple) {
                    if (oJson[n]instanceof UCF_ClientElement) {
                        oControl["set" + n](oJson[n], true);
                    } else {
                        for (var m in oJson[n]) {
                            oContent = UCF_ClientControl.createInstance(m, oLS, oJson[n][m].Id, oJson[n][m], oControl);
                            oContent.bInvalidated = true;
                            oControl["set" + n](oContent, true);
                        }
                    }
                } else {
                    for (var i = 0; i < oJson[n].length; i++) {
                        if (oJson[n][i]instanceof UCF_ClientElement) {
                            oControl["add" + mMetadata.aggregations[n].singularName](oJson[n][i], true);
                        } else {
                            for (var m in oJson[n][i]) {
                                if (UCF_ClientInterfaces.getInterface(m)) {
                                    oContent = UCF_ClientControl.createInstance(m, oLS, oJson[n][i][m].Id, oJson[n][i][m], oControl);
                                    oContent.bInvalidated = true;
                                    oControl["add" + mMetadata.aggregations[n].singularName](oContent, true);
                                }
                            }
                        }
                    }
                }
            } else if (mMetadata.events && mMetadata.events[n]) {
                oControl.setEventConfiguration(n, oJson[n], true);
            }
        }
        if (oJson["PropertyBinding"]) {
            for (var i = 0; i < oJson["PropertyBinding"].length; i++) {
                var oBinding = oJson["PropertyBinding"][i];
                for (var x in oBinding) {
                    if (oJson["ModelId"] && oBinding[x].Path.indexOf(">") == -1 && oBinding[x].Path.indexOf("/") != 0) {
                        oBinding[x].Path = oJson["ModelId"] + ">" + oBinding[x].Path;
                    }
                    var oBindingInfo = {
                        path: oBinding[x].Path
                    }
                      , sDataType = oBinding[x].Type;
                    if (sDataType) {
                        oBindingInfo.datatype = sDataType;
                        oBindingInfo.typeconfig = oBinding[x].TypeConfiguration;
                    }
                    oControl.bindProperty(oBinding[x].Name, oBindingInfo);
                }
            }
        }
        if (oJson["ListBinding"]) {
            for (var i = 0; i < oJson["ListBinding"].length; i++) {
                var oBinding = oJson["ListBinding"][i];
                for (var x in oBinding) {
                    if (oJson["ModelId"] && oBinding[x].Path.indexOf(">") == -1 && oBinding[x].Path.indexOf("/") != 0) {
                        oBinding[x].Path = oJson["ModelId"] + ">" + oBinding[x].Path;
                    }
                    var oTemplate = null;
                    if (oBinding[x].Template) {
                        for (var m in oBinding[x].Template) {
                            var oTemplate = UCF_ClientControl.createInstance(m, oLS, oBinding[x].Template[m].Id, oBinding[x].Template[m], oControl);
                        }
                    }
                    var oBindingInfo = {
                        path: oBinding[x].Path,
                        template: oTemplate,
                        bindingtype: "UCF_ListBinding",
                        sorter: null,
                        filters: null
                    };
                    oControl.bindAggregation(oBinding[x].Name, oBindingInfo);
                }
            }
        }
        if (oJson["GridBinding"]) {
            for (var i = 0; i < oJson["GridBinding"].length; i++) {
                var oBinding = oJson["GridBinding"][i];
                for (var x in oBinding) {
                    if (oJson["ModelId"] && oBinding[x].Path.indexOf(">") == -1 && oBinding[x].Path.indexOf("/") != 0) {
                        oBinding[x].Path = oJson["ModelId"] + ">" + oBinding[x].Path;
                    }
                    var oTemplate = null;
                    if (oBinding[x].Template) {
                        for (var m in oBinding[x].Template) {
                            oTemplate = UCF_ClientControl.createInstance(m, oLS, oBinding[x].Template[m].Id, oBinding[x].Template[m], oControl);
                        }
                    }
                    var oBindingInfo = {
                        path: oBinding[x].Path,
                        template: oTemplate,
                        bindingtype: "UCF_GridBinding",
                        sorter: null,
                        filters: null
                    };
                    oControl.bindAggregation(oBinding[x].Name, oBindingInfo);
                }
            }
        }
        if (oJson["ModelId"]) {
            var oModel = oLS.oGetPageInternal().getModel(oJson["ModelId"]);
            oControl.sModelId = oJson["ModelId"];
            oControl.setModel(oModel, oJson["ModelId"]);
        }
    }
    return oControl;
}
;
UCF_ClientElement.createId = function(sPrefix, sSuffix) {
    var S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    sSuffix = sSuffix || "";
    return sPrefix + (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()) + sSuffix;
}
;
UCF_ClientElement.prototype.aPublicMethods = ["getParent", "bindProperty", "setModel", "getModel", "hasModel", "findElements", "getBinding", "unbindProperty", "isBound", "bindAggregation", "unbindAggregation", "setBindingContext", "getBindingContext"];
function UCF_ClientControl(oLS, sClassName, sId, oJson, oParent) {
    if (arguments.length == 0)
        return;
    UCF_ClientElement.apply(this, arguments);
    this.oParentDomRef = null;
}
;UCF_ClientControl.prototype = new (UCF_ClassLoader.oGetClass("UCF_ClientElement"))();
UCF_ClientControl.prototype.setParentDomRef = function(oDomRef) {
    this.oParentDomRef = oDomRef;
}
;
UCF_ClientControl.createInstance = function(sClassName, oLS, sId, oJson, oParent) {
    var oClass = UCF_ClientElement.extendClass(sClassName, UCF_ClientControl);
    return UCF_ClientElement.createInstance(sClassName, oLS, sId, oJson, oParent);
}
;
UCF_ClientControl.prototype.invalidate = function() {
    if (this.bInvalidated)
        return;
    this.bInvalidated = true;
    if (this.mMetadata.renderer) {
        UCF_JsUtil.delayedCall(0, this, "render", [])
    } else if (this.oParent) {
        this.oParent.invalidate();
    }
}
;
UCF_ClientControl.prototype.placeAt = function(oDomRef) {
    this.setParentDomRef(oDomRef);
    this.invalidate();
    this.render();
}
;
UCF_ClientControl.prototype.render = function() {
    if (this.bInvalidated) {
        if (this.isParentInvalidated()) {
            return;
        }
        if (this.getVisibility && this.getVisibility() == "NONE") {
            if (this.getParent()) {
                this.getParent().invalidate();
            } else {}
            return;
        }
        oUCFDomRef = UCF_DomUtil.$(this.getId() + "-r") || UCF_DomUtil.$(this.getId());
        if (oUCFDomRef) {
            var oRenderManager = this.oLS.oGetRenderManager()
              , oDomElement = document.createElement("DIV");
            oRenderManager.renderControl(this, oDomElement);
            var oControlDomRef = oDomElement.firstChild;
            oUCFDomRef.parentNode.replaceChild(oDomElement.firstChild, oUCFDomRef);
            oRenderManager.reinitializeUCFControls();
            if (UCF_System.bClientDebug) {}
        } else if (this.oParentDomRef) {
            var oRenderManager = this.oLS.oGetRenderManager()
              , oDomElement = document.createElement("DIV");
            oRenderManager.renderControl(this, oDomElement);
            var oControlDomRef = oDomElement.firstChild;
            this.oParentDomRef.appendChild(oDomElement.firstChild);
            oRenderManager.reinitializeUCFControls();
            if (UCF_System.bClientDebug) {
                if (oControlDomRef) {}
            }
            this.setParentDomRef(null);
        } else {
            if (this.getParent()) {
                this.getParent().invalidate();
            } else {}
        }
    } else {
        var aControls = this.getInvalidatedChildren();
        for (var i = 0; i < aControls.length; i++) {
            aControls[i].render();
        }
    }
}
;
UCF_ClientControl.prototype.highlightRenderedArea = function(oControlDomRef) {
    if (document.location.search.indexOf("clientrenderingtestmode=true") > -1)
        return;
    setTimeout(function() {
        if (oControlDomRef)
            oControlDomRef.style.outline = "";
    }, 400);
    setTimeout(function() {
        if (oControlDomRef)
            oControlDomRef.style.outline = "3px solid #2085D2";
    }, 800);
    setTimeout(function() {
        if (oControlDomRef)
            oControlDomRef.style.outline = "";
    }, 1200);
}
;
function UCF_DebugHelper(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.mDebugHandlers = {};
    var oBrowserWindow = oLS.oBrowserWindow;
    oBrowserWindow.attachEvent(oBrowserWindow.E_EVENTS.Debug, this, "onDebug");
    if (UCF_System.bClientDebug) {
        this.addDebugHandlerClass(UCF_KeyCodes.A, "UCF_AccessibilityInfo", "Shows/hides accessibility text display");
        this.addDebugHandlerClass(UCF_KeyCodes.O, "UCF_ContainerOutliner", "Shows nesting of HTML containers");
        this.addDebugHandlerClass(UCF_KeyCodes.D, "UCF_DOMAnalyzer", "Shows HTML DOM analysis");
        this.addDebugHandlerClass(UCF_KeyCodes.N, "UCF_NestingAnalyzer", "Shows nesting analysis");
        this.addDebugHandlerClass(UCF_KeyCodes.M, "UCF_MeasurementInfo", "Shows browser measurements like a performance analysis");
        this.addDebugHandlerClass(UCF_KeyCodes.S, "UCF_SizeInfo", "Shows/hides pane with size information.");
        this.addDebugHandlerClass(UCF_KeyCodes.V, "UCF_VersionInfo", "Shows/hides pane with version information");
        this.addDebugHandlerClass(UCF_KeyCodes.Y, "UCF_AccessibilityInfoText2Speech", "Starts/stops the AccessibilityText2SpeechHelper for demo purposes. It cannot provide official screen reader support!");
        this.addDebugHandlerClass(UCF_KeyCodes.R, "UCF_SeleniumRecorder", "Starts/stops the Selenium Test script recording.");
        UCF_DebugHelper.oWindow = window;
        UCF_DebugHelper.initDebuggingInfo();
    }
}
;UCF_DebugHelper.prototype = new UCF_Object();
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
    UCF_DebugHelper.deactivateAllDebuggingInfos();
    UCF_DebugHelper.oWindow = null;
}
;
UCF_DebugHelper.prototype.onDebug = function(oEvent) {
    var iKey = oEvent.oGetParam("iKey")
      , oDebugHandler = this.mDebugHandlers[iKey];
    if (iKey == UCF_KeyCodes.H) {
        this.showAvailableHandlers(oEvent);
        return;
    }
    if (!oDebugHandler)
        return;
    if (!oDebugHandler.oObject) {
        var sClassName = oDebugHandler.sClassName
          , oClass = UCF_ClassLoader.oGetClass(sClassName);
        oDebugHandler.oObject = new oClass(this.oLS);
    }
    var oBrowserEvent = oEvent.oGetParam("oBrowserEvent");
    oDebugHandler.oObject.trigger();
    oBrowserEvent.cancel();
    oBrowserEvent.cancelBubble();
    oBrowserEvent.bHandled = true;
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
UCF_DebugHelper.prototype.showAvailableHandlers = function(oEvent) {
    if (!UCF_JsUtil.bIsEmpty(this.mDebugHandlers)) {
        var sDisplayText = "Available SAP UR Lightspeed Ctrl-Alt-Shift Shortcuts:\n\n These shortcuts work as implemented!\n\n", oDebugHandler;
        for (var i in this.mDebugHandlers) {
            oDebugHandler = this.mDebugHandlers[i];
            sDisplayText += String.fromCharCode(i) + " - " + oDebugHandler.sDescription + "\n";
        }
        alert(sDisplayText);
        var oBrowserEvent = oEvent.oGetParam("oBrowserEvent");
        oBrowserEvent.cancel();
        oBrowserEvent.cancelBubble();
        oBrowserEvent.bHandled = true;
    }
}
;
UCF_DebugHelper.initDebuggingInfo = function() {
    if (UCF_DebugHelper.oWindow.localStorage) {
        var sDebuggingList = UCF_DebugHelper.oWindow.localStorage.getItem("lsDebuggingInfo");
        if (sDebuggingList) {
            UCF_DebugHelper.mDebuggingInfoList = (new Function("return " + sDebuggingList + ";"))();
            for (var n in UCF_DebugHelper.mDebuggingInfoList) {
                var sImpl = UCF_DebugHelper.mDebuggingInfoList[n].newimpl;
                if (sImpl) {
                    UCF_DebugHelper.mDebuggingInfoList[n].newimpl = sImpl.replace(/\\n/gi, "\n");
                }
                UCF_DebugHelper.mDebuggingInfoList[n].activated = UCF_DebugHelper.mDebuggingInfoList[n].initialactivated && UCF_DebugHelper.mDebuggingInfoList[n].activated;
            }
        } else {
            UCF_DebugHelper.mDebuggingInfoList = {};
        }
    }
}
;
UCF_DebugHelper.deleteAllDebuggingInfos = function() {
    for (var n in UCF_DebugHelper.mDebuggingInfoList) {
        UCF_DebugHelper.removeDebuggingInfo(UCF_DebugHelper.mDebuggingInfoList[n]);
    }
    UCF_DebugHelper.mDebuggingInfoList = {};
    UCF_DebugHelper.saveDebuggingInfo()
}
;
UCF_DebugHelper.saveDebuggingInfo = function() {
    var oObject = {};
    for (var n in UCF_DebugHelper.mDebuggingInfoList) {
        var oInfo = UCF_DebugHelper.mDebuggingInfoList[n];
        if (oInfo) {
            oObject[n] = {};
            oObject[n].func = oInfo.func;
            oObject[n].activated = oInfo.activated;
            oObject[n].newimpl = oInfo.newimpl;
            oObject[n].initialactivated = oInfo.initialactivated;
        }
    }
    var sObject = UCF_JsUtil.sStringifyJSON(oObject);
    sObject = sObject.replace(/\r/gi, "");
    sObject = sObject.replace(/\n/gi, "\\n");
    if (sObject) {
        UCF_DebugHelper.oWindow.localStorage.setItem("lsDebuggingInfo", sObject);
    }
}
;
UCF_DebugHelper.applyDebuggingInfos = function(sClassName) {
    var mInfos = UCF_DebugHelper.mDebuggingInfoList;
    if (!sClassName) {
        for (var n in mInfos) {
            var sNewClassName = n.substring(n.indexOf("."));
            if (sNewClassName != sClassName) {
                sClassName = sNewClassName;
                UCF_DebugHelper.applyDebuggingInfos(sClassName);
            }
        }
        return;
    }
    for (var n in mInfos) {
        if (n.indexOf(sClassName) == 0) {
            var oClass = UCF_DebugHelper.oWindow[sClassName];
            for (var m in oClass) {
                if (UCF_JsUtil.bIsFunction(oClass[m])) {
                    var sPath = n + "." + m;
                    if (oInfos[sPath]) {
                        UCF_DebugHelper.applyDebuggingInfo(oInfos[sPath]);
                    }
                }
            }
            for (var m in oClass.prototype) {
                if (UCF_JsUtil.bIsFunction(oClass.prototype[m])) {
                    var sPath = n + ".prototype." + m;
                    if (oInfos[sPath]) {
                        UCF_DebugHelper.applyDebuggingInfo(oInfos[sPath]);
                    }
                }
            }
        }
    }
}
;
UCF_DebugHelper.applyDebuggingInfo = function(oInfo) {
    if (oInfo.func) {
        if (oDebuggingInfo.activated) {
            UCF_DebugHelper.activateDebuggingInfo(oInfo);
        } else {
            UCF_DebugHelper.dectivateDebuggingInfo(oInfo);
        }
    }
}
;
UCF_DebugHelper.deactivateAllDebuggingInfos = function() {
    var oInfos = UCF_DebugHelper.mDebuggingInfoList;
    for (var n in oInfos) {
        UCF_DebugHelper.deactivateDebuggingInfo(oInfos[n]);
    }
}
;
UCF_DebugHelper.getDebuggingInfos = function() {
    for (var n in UCF_DebugHelper.mDebuggingInfoList) {
        var oInfo = UCF_DebugHelper.mDebuggingInfoList[n]
          , sFunc = oInfo.func
          , sClassName = ""
          , sMethodName = "";
        if (sFunc) {
            sClassName = sFunc.substring(0, sFunc.indexOf("."));
            sFunc = sFunc.replace(sClassName + ".prototype.", "");
            sFunc = sFunc.replace(sClassName + ".", "");
            sMethodName = sFunc;
        }
        UCF_DebugHelper.mDebuggingInfoList[n] = UCF_DebugHelper.getDebuggingInfo(sClassName, sMethodName);
    }
    return UCF_DebugHelper.mDebuggingInfoList;
}
;
UCF_DebugHelper.getDebuggingInfo = function(sClassName, sMethodName, sNewImpl) {
    var oClass = UCF_ClassLoader.oGetClass(sClassName, true);
    if (!oClass || typeof (oClass) == "string")
        return;
    var sMapKey = sClassName + ".prototype." + sMethodName
      , oInfo = UCF_DebugHelper.mDebuggingInfoList[sMapKey];
    if (sMethodName == "constructor") {
        if (!oInfo && UCF_DebugHelper.oWindow[sClassName] && UCF_DebugHelper.oWindow[sClassName]) {
            oInfo = {
                func: sClassName + ".constructor",
                newimpl: sNewImpl
            };
            oInfo.originalimpl = UCF_DebugHelper.oWindow.eval("UCF_DebugHelper.oWindow." + sClassName).toString();
            if (oInfo.originalimpl.substring(0, oInfo.originalimpl.indexOf("(")).indexOf(sClassName) > -1) {
                oInfo.originalimpl = oInfo.originalimpl.replace(sClassName, "");
            }
        }
    } else {
        if (!oInfo && UCF_DebugHelper.oWindow[sClassName] && UCF_DebugHelper.oWindow[sClassName].prototype && UCF_DebugHelper.oWindow[sClassName].prototype[sMethodName]) {
            oInfo = {
                func: sClassName + ".prototype." + sMethodName,
                newimpl: sNewImpl
            };
            oInfo.originalimpl = UCF_DebugHelper.oWindow.eval("UCF_DebugHelper.oWindow." + oInfo.func).toString();
        }
        if (!oInfo) {
            sMapKey = sClassName + "." + sMethodName;
            oInfo = UCF_DebugHelper.mDebuggingInfoList[sMapKey];
            if (!oInfo && UCF_DebugHelper.oWindow[sClassName] && UCF_DebugHelper.oWindow[sClassName][sMethodName]) {
                oInfo = {
                    func: sClassName + "." + sMethodName,
                    newimpl: sNewImpl
                };
                oInfo.originalimpl = UCF_DebugHelper.oWindow.eval("UCF_DebugHelper.oWindow." + oInfo.func).toString();
            }
        }
    }
    if (oInfo && !oInfo.originalimpl) {
        oInfo.originalimpl = UCF_DebugHelper.oWindow.eval("UCF_DebugHelper.oWindow." + oInfo.func).toString();
    }
    return oInfo;
}
;
UCF_DebugHelper.addDebuggingInfo = function(oInfo, sNewImpl) {
    var oOldInfo = UCF_DebugHelper.mDebuggingInfoList[oInfo.func];
    if (oOldInfo == oInfo) {
        var bActivated = oOldInfo.activated;
        if (bActivated) {
            UCF_DebugHelper.deactivateDebuggingInfo(oOldInfo);
        }
        oOldInfo.newimpl = sNewImpl;
        if (bActivated) {
            UCF_DebugHelper.activateDebuggingInfo(oOldInfo);
        }
        return;
    }
    if (oOldInfo) {
        UCF_DebugHelper.removeDebuggingInfo(oOldInfo);
    }
    oInfo.newimpl = sNewImpl || oInfo.newimpl;
    UCF_DebugHelper.mDebuggingInfoList[oInfo.func] = oInfo;
    if (oInfo.activated) {
        UCF_DebugHelper.activateDebuggingInfo(oInfo);
    }
    UCF_DebugHelper.saveDebuggingInfo();
}
;
UCF_DebugHelper.removeDebuggingInfo = function(oInfo) {
    if (oInfo && oInfo.func) {
        UCF_DebugHelper.deactivateDebuggingInfo(oInfo);
        delete UCF_DebugHelper.mDebuggingInfoList[oInfo.func];
        UCF_DebugHelper.saveDebuggingInfo();
    }
}
;
UCF_DebugHelper.activateDebuggingInfo = function(oInfo) {
    if (oInfo && oInfo.func) {
        oInfo.activated = true;
        var sFunc = oInfo.func;
        sFunc = sFunc.replace(".constructor", "");
        if (!oInfo.originalimpl) {
            oInfo.originalimpl = UCF_DebugHelper.oWindow.eval("UCF_DebugHelper.oWindow." + sFunc).toString();
        }
        if (!oInfo.newimpl) {
            oInfo.newimpl = oInfo.originalimpl.replace("{", "{\n\ndebugger;\n\n");
        }
        var newFunctPointer = (function() {
            eval(sFunc + " = " + oInfo.newimpl);
        }
        )();
    }
    UCF_DebugHelper.saveDebuggingInfo();
}
;
UCF_DebugHelper.deactivateDebuggingInfo = function(oInfo) {
    if (oInfo && oInfo.func) {
        oInfo.activated = false;
        var fPointer = null;
        var sFunc = oInfo.func;
        sFunc = sFunc.replace(".constructor", "");
        eval("fPointer = " + sFunc);
        if (fPointer) {
            var newFunctPointer = (function() {
                eval(sFunc + " = " + oInfo.originalimpl);
            }
            )();
        }
    }
    UCF_DebugHelper.saveDebuggingInfo();
}
;
UCF_DebugHelper.getClassList = function(aClassPrefixes) {
    var aClassList = []
      , mClassList = {}
      , fRelevant = function(sClassName, aClassPrefixes) {
        var bRelevant = false;
        for (var i = 0; i < aClassPrefixes.length; i++) {
            bRelevant = sClassName.indexOf(aClassPrefixes[i]) == 0;
            var iNext_ = sClassName.substring(aClassPrefixes[i].length + 1).indexOf("_");
            if (iNext_ > -1) {
                bRelevant = false;
            }
            if (bRelevant) {
                break;
            }
        }
        return bRelevant;
    };
    if (typeof (aClassPrefixes) == "string") {
        aClassPrefixes = [aClassPrefixes];
    }
    for (var n in UCF_DebugHelper.oWindow) {
        var sClassName = n;
        if (sClassName.indexOf(".") > -1)
            continue;
        if (fRelevant(sClassName, aClassPrefixes) && !mClassList[sClassName] && UCF_JsUtil.bIsFunction(UCF_DebugHelper.oWindow[sClassName])) {
            aClassList.push(sClassName);
            mClassList[sClassName] = true;
        }
    }
    for (var i = 0; i < UCF_DebugHelper.oWindow.UCF_classes.length; i++) {
        var sClassName = UCF_DebugHelper.oWindow.UCF_classes[i];
        if (sClassName.indexOf(".") > -1)
            continue;
        if (fRelevant(sClassName, aClassPrefixes) && !mClassList[sClassName] && UCF_JsUtil.bIsFunction(UCF_DebugHelper.oWindow[sClassName])) {
            aClassList.push(sClassName);
            mClassList[sClassName] = true;
        }
    }
    mControls = UCF_ControlFactory.prototype.M_TYPES;
    for (var n in mControls) {
        var sClassName = mControls[n];
        if (fRelevant(sClassName, aClassPrefixes) && !mClassList[sClassName]) {
            aClassList.push(sClassName);
            mClassList[sClassName] = true;
        }
    }
    aClassList.sort();
    return aClassList;
}
;
UCF_DebugHelper.getMethodList = function(sClassName) {
    var aStaticMethodList = []
      , aPrototypeMethodList = []
      , oClass = UCF_ClassLoader.oGetClass(sClassName);
    if (oClass && typeof (oClass) != "string") {
        if (UCF_JsUtil.bIsFunction(oClass)) {}
        for (var n in oClass) {
            if (UCF_JsUtil.bIsFunction(oClass[n])) {
                aStaticMethodList.push(n + "(static)");
            }
        }
        if (oClass.prototype) {
            for (var n in oClass.prototype) {
                if (UCF_JsUtil.bIsFunction(oClass.prototype[n])) {
                    aPrototypeMethodList.push(n);
                }
            }
        }
    }
    aStaticMethodList.sort();
    aPrototypeMethodList.sort();
    return aPrototypeMethodList.concat(aStaticMethodList);
}
;
function UCF_Size(iWidth, iHeight) {
    this.iWidth = iWidth;
    this.iHeight = iHeight;
}
UCF_Size.prototype = new UCF_Object();
UCF_Size.prototype.equals = function(oSize) {
    if (oSize === this) {
        return true;
    }
    if (oSize instanceof UCF_Size) {
        return this.iWidth === oSize.iWidth && this.iHeight === oSize.iHeight;
    }
    return false;
}
;
function UCF_SystemPopup() {
    UCF_EventProvider.apply(this);
    this.sId = UCF_JsUtil.sGetUID();
    this.bIsOpen = false;
    this.mButtons = {};
    var oSystemPopup = this;
    this.fClickHandler = function(e) {
        var oDomRef = e.srcElement || e.target
          , sId = oDomRef.getAttribute("id");
        if (sId) {
            oSystemPopup.fireEvent(oSystemPopup.E_EVENTS.Button, {
                sId: sId
            });
        }
    }
    ;
}
UCF_SystemPopup.prototype = new UCF_EventProvider();
UCF_SystemPopup.prototype.E_EVENTS = {
    Button: 0,
    Close: 1
};
UCF_SystemPopup.prototype.setTitle = function(sTitle) {
    this.sTitle = sTitle;
    if (this.bIsOpen) {
        var oTitleRef = document.getElementById(this.sId + "-title");
        oTitleRef.innerHTML = sTitle;
    }
}
;
UCF_SystemPopup.prototype.setContent = function(sContent) {
    this.sContent = sContent;
    if (this.bIsOpen) {
        var oContentRef = document.getElementById(this.sId + "-content");
        oContentRef.innerHTML = sContent;
    }
}
;
UCF_SystemPopup.prototype.setButton = function(sId, sText) {
    this.mButtons[sId] = sText;
    if (this.bIsOpen) {
        var oButtonsRef = document.getElementById(this.sId + "-buttons");
        oButtonsRef.innerHTML = this.sGetButtonHTML();
    }
}
;
UCF_SystemPopup.prototype.sGetButtonHTML = function() {
    var sHTML = "";
    for (var sId in this.mButtons) {
        sHTML += "<span id=\"" + sId + "\" style=\"border: 1px solid black;padding: 1px 3px 1px 3px\">";
        sHTML += this.mButtons[sId];
        sHTML += "</span>";
    }
    return sHTML;
}
;
UCF_SystemPopup.prototype.show = function() {
    if (this.bIsOpen)
        return;
    this.bIsOpen = true;
    document.body.style.overflow = "hidden";
    var sHTML = [];
    sHTML.push("<div style=\"line-height:normal;border-style:solid;border-width:1px;border-bottom-color:#1D4971;border-left-color:#77A4D8;border-right-color:#1D4971;border-top-color:#77A4D8;background-color:white;cursor:default\">");
    sHTML.push("<div style=\"border-style:solid;border-width:1px;border-bottom-color:#77A4D8;border-left-color:#1D4971;border-right-color:#77A4D8;border-top-color:#1D4971;background-color:#2e6695\">");
    sHTML.push("<div id=\"" + this.sId + "-title\" style=\"padding:3px 0 3px 6px;font-family:Arial;font-size:11px;font-weight:bold;color:#FFF;text-overflow:ellipsis;overflow:hidden\">");
    sHTML.push(this.sTitle);
    sHTML.push("</div></div><div id=\"" + this.sId + "-content\">");
    sHTML.push(this.sContent);
    sHTML.push("</div><div id=\"" + this.sId + "-buttons\" style=\"padding:3px 24px 12px 3px;font-size: 0.7em;text-align:right\">");
    sHTML.push(this.sGetButtonHTML());
    sHTML.push("</div></div>");
    var oFrame = document.createElement("IFRAME");
    oFrame.setAttribute("id", this.sId + "-frame");
    with (oFrame.style) {
        position = "absolute";
        top = "-2px";
        left = "-2px";
        width = "150%";
        height = "150%";
        border = "none";
    }
    UCF_DomUtil.setOpacityStyle(oFrame, 50);
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
    oDiv.setAttribute("id", this.sId + "-window");
    if (document.body) {
        document.body.appendChild(oDiv);
        var oButtonsRef = document.getElementById(this.sId + "-buttons");
        UCF_DomUtil.attachEvent(oButtonsRef, "click", this.fClickHandler);
    }
}
;
UCF_SystemPopup.prototype.hide = function() {
    if (!this.bIsOpen)
        return;
    this.bIsOpen = false;
    var oFrame = document.getElementById(this.sId + "-frame")
      , oDiv = document.getElementById(this.sId + "-window");
    if (oFrame)
        oFrame.parentNode.removeChild(oFrame);
    if (oDiv)
        oDiv.parentNode.removeChild(oDiv);
}
;
function UCF_Position(iTop, iLeft) {
    this.iTop = iTop;
    this.iLeft = iLeft;
}
UCF_Position.prototype = new UCF_Object();
function UCF_Control(oDomRef, oLS, sId) {
    if (arguments.length == 0)
        return;
    UCF_EventProvider.apply(this);
    this.sId = sId;
    this.oLS = oLS;
    this.aDelegates = null;
    this.mEvents = {};
    this.bKeepAlive = false;
    this.bIgnoreDefaultButton = false;
    this.sActiveDefaultButtonId = "";
    this.bAllowTextSelection = false;
    this.oPendingRequest = null;
    this.oParentControl = null;
    this.oFocusDomRef = null;
    this.oLastFocusDomRef = null;
    this.oFirstFocusDomRef = null;
    if (oDomRef)
        this.connectToDom(oDomRef);
    this.oClientControl = null;
    this.aTooltipNodes = [];
}
;UCF_Control.prototype = new UCF_EventProvider();
UCF_Control.prototype.oGetInterface = function(aMethodNames) {
    if (!aMethodNames)
        aMethodNames = this.aMethodNames;
    return new UCF_Interface(this,aMethodNames);
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
    this.initializeRichTooltip();
}
;
UCF_Control.prototype.destroy = function() {
    this.oLS.fireControlDestroy({
        sId: this.sId
    });
    this.removeDataTip();
    this.removeRichTooltip();
    this.oDomRef = null;
    this.oRootRef = null;
    this.oFocusDomRef = null;
    this.oParentControl = null;
    this.oDragHandleDomRef = null;
}
;
UCF_Control.prototype.reconnectToDom = function() {
    var oDomRef = UCF_DomUtil.$(this.sId);
    this.oParentControl = null;
    this.setDefaultValues();
    this.connectToDom(oDomRef);
    this.notifyReconnected();
}
;
UCF_Control.prototype.notifyReconnected = function() {}
;
UCF_Control.prototype.bDoKeepAlive = function() {
    var oNewDomRef = UCF_DomUtil.$(this.sId);
    return this.bKeepAlive && oNewDomRef;
}
;
UCF_Control.prototype.updateAttributes = function() {
    var sAttributes = this.oDomRef.getAttribute("lsdata"), sName;
    if (sAttributes == null || sAttributes == "")
        return;
    eval("var mAttributes = " + sAttributes);
    for (var i in mAttributes) {
        sName = this.aAttributeNames[i];
        this[sName] = mAttributes[i];
    }
}
;
UCF_Control.prototype.addClientListener = function(sEventName, oObject, sListener) {
    this.mEvents[sEventName] = {
        ClientListener: {
            oObject: oObject,
            sListener: sListener
        }
    };
}
;
UCF_Control.prototype.removeClientListener = function(sEventName) {
    delete this.mEvents[sEventName];
}
;
UCF_Control.prototype.updateEvents = function() {
    var sEvents = this.oDomRef.getAttribute("lsevents");
    if (sEvents == null)
        return;
    eval("this.mEvents = " + sEvents);
}
;
UCF_Control.prototype.addDelegate = function(oDelegate) {
    if (this.aDelegates == null)
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
UCF_Control.prototype.initializeRichTooltip = function() {
    this.oRichTooltip = this.oGetRichTooltipById(this.sId);
    if (this.oRichTooltip) {
        this.oRichTooltip.setOpenerId(this.sId);
        this.oRichTooltip.setOpenerRef(this.oDomRef);
        this.addDelegate(this.oRichTooltip);
        if (!this.oRichTooltip.bKeepTooltip()) {
            this.oDomRef.title = "";
        }
    }
}
;
UCF_Control.prototype.oGetRichTooltipById = function(sId) {
    var oRichTooltipRef = this.oLS.oControlFactory.oGetControlById(sId + "-tt");
    return (!oRichTooltipRef) ? null : oRichTooltipRef;
}
;
UCF_Control.prototype.removeRichTooltip = function() {
    if (this.oRichTooltip) {
        this.oRichTooltip.remove();
        this.oRichTooltip = null;
    }
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
UCF_Control.prototype.createDataTip = function(sType, sText) {
    if (!sType && !this.oDataTip) {
        var oDataTip = this.oLS.oControlFactory.oCreateControl("UCF_DataTip", this.sId + "-dtip");
        oDataTip.render(this.sId, this.oLS);
        this.initializeDataTip(this.sId);
        return this.oDataTip;
    } else if (sType) {
        if (this.oDataTip) {} else {
            var oNewDataTip = this.oLS.oCreateClientControl("DataTip", this.sId + "-dtip", {
                Type: sType,
                Text: sText,
                ConnectedControlId: this.sId
            });
            oNewDataTip.placeAt(this.oLS.oGetAssociatedAreaRef());
            this.createDataTip();
        }
    }
}
;
UCF_Control.prototype.removeDataTip = function() {
    if (this.oDataTip) {
        this.removeDelegate(this.oDataTip);
        this.oDataTip.remove();
        this.oDataTip = null;
    }
}
;
UCF_Control.prototype.oGetDataTipById = function(sId) {
    var oDataTipRef = UCF_DomUtil.$(sId + "-dtip");
    return (oDataTipRef == null) ? null : this.oLS.oControlFactory.oGetControlByDomRef(oDataTipRef, true);
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
    if (this.getClientControl()) {
        var oConfig = this.getClientControl().getEventConfiguration(sName);
        if (oConfig && oConfig.UcfParameters) {
            this.mEvents[sName] = [oConfig.UcfParameters];
        }
    }
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
            return;
        }
        if (this.mEvents[sName] && this.mEvents[sName].ClientListener && typeof (this.mEvents[sName].ClientListener.sListener) == "string") {
            var oClientListener = this.mEvents[sName].ClientListener;
            if (oClientListener.oObject) {
                var fMethod = oClientListener.oObject[oClientListener.sListener];
                if (fMethod)
                    oClientListener.oObject[oClientListener.sListener](oSemanticEvent);
            }
            return;
        }
        this.enrichSematicEventParamsWithBindingContext(mParameters, "Id");
        if (this.oPendingRequest) {
            this.oPendingRequest.addSemanticEvent(oSemanticEvent);
        } else {
            this.oLS.processSemanticEvent(oSemanticEvent);
        }
    } else {}
}
;
UCF_Control.prototype.enrichSematicEventParamsWithBindingContext = function(mParams, sName) {
    var oClientControl = this.getClientControl();
    if (oClientControl) {
        var oBindingContext = oClientControl.getBindingContext();
        if (oBindingContext && oClientControl.getTemplateId()) {
            var sContextData = oBindingContext.getModel().getId() + ">" + oBindingContext.getPath();
            if (oClientControl.getTemplateId()) {
                mParams[sName + ".TemplateId"] = oClientControl.getTemplateId();
            }
            mParams[sName + ".BindingContextPath"] = sContextData;
            return;
        }
        if (this.oGetParent()) {
            this.oGetParent().enrichSematicEventParamsWithBindingContext(mParams, sName);
        }
    }
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
    if (!this.oRootRef) {
        return null;
    }
    if (!this.oParentControl || this.bKeepAlive) {
        this.oParentControl = this.oFindParent(this.oRootRef);
    }
    return this.oParentControl;
}
;
UCF_Control.prototype.oGetQTPProperty = function(sName) {
    if (!this.mQTPProperties) {
        var sAttributeName, sQTPName;
        this.mQTPProperties = {};
        for (var i = 0; i < this.aAttributeNames.length; i++) {
            sAttributeName = this.aAttributeNames[i];
            sQTPName = sAttributeName.substr(1).toLowerCase();
            this.mQTPProperties[sQTPName] = sAttributeName;
        }
    }
    var oValue = this[this.mQTPProperties[sName]];
    if (typeof oValue == "object" || typeof oValue == "function")
        return null;
    return oValue;
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
    return null;
}
;
UCF_Control.prototype.oGetLastFocusDomRef = function() {
    if (this.oLastFocusDomRef) {
        return this.oLastFocusDomRef;
    }
    return this.oGetFocusDomRef();
}
;
UCF_Control.prototype.oGetFirstFocusDomRef = function() {
    if (this.oFirstFocusDomRef) {
        return this.oFirstFocusDomRef;
    }
    return this.oGetFocusDomRef();
}
;
UCF_Control.prototype.oFindParent = function(oDomRef) {
    var oParentRef = oDomRef.parentNode, oParentControl;
    while (oParentRef && oParentRef.getAttribute && oParentRef != document.body) {
        if (oParentRef.getAttribute("ct")) {
            oParentControl = this.oLS.oControlFactory.oGetControlByDomRef(oParentRef, true);
            if (oParentControl != null) {
                return oParentControl;
            }
        }
        oParentRef = oParentRef.parentNode;
    }
    return null;
}
;
UCF_Control.prototype.bIsChildOf = function(oParent) {
    var oControl = this.oGetParent();
    while (oControl) {
        if (oControl == oParent)
            return true;
        oControl = oControl.oGetParent();
    }
    return false;
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
        return null;
    var aChildren = oDomRef.childNodes;
    if (!aChildren)
        return null;
    for (var i = 0; i < aChildren.length; i++) {
        var oTmp = aChildren.item(i);
        if (oTmp.nodeType != 1 || !UCF_DomUtil.bIsVisible(oTmp) || oTmp.bIsCollectorContainer)
            continue;
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
    return null;
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
        return null;
    var aChildren = oDomRef.childNodes;
    if (!aChildren)
        return null;
    for (var i = aChildren.length - 1; i >= 0; i--) {
        var oTmp = aChildren.item(i);
        if (oTmp.nodeType != 1 || !UCF_DomUtil.bIsVisible(oTmp) || oTmp.bIsCollectorContainer)
            continue;
        if (oTmp.getAttribute("ct")) {
            var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oTmp, true);
            if (oControl && oControl.bIsFocusable()) {
                return oControl;
            }
        }
        var oControl = this.oGetLastFocusableChildRecursive(oTmp);
        if (oControl) {
            return oControl;
        }
    }
    return null;
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
        return null;
    while (oDomRef.nextSibling) {
        oDomRef = oDomRef.nextSibling;
        if (oDomRef.nodeType != 1 || !UCF_DomUtil.bIsVisible(oDomRef) || oDomRef.bIsCollectorContainer)
            continue;
        if (oDomRef.getAttribute("ct")) {
            var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oDomRef, true);
            if (oControl && oControl.bIsFocusable()) {
                return oControl;
            }
        }
        var oControl = this.oGetFirstFocusableChildRecursive(oDomRef);
        if (oControl)
            return oControl;
    }
    if (oDomRef.parentNode != null) {
        var oControl = this.oGetNextFocusableControlRecursive(oDomRef.parentNode);
        if (oControl)
            return oControl;
    }
    return null;
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
        return null;
    while (oDomRef.previousSibling) {
        oDomRef = oDomRef.previousSibling;
        if (oDomRef.nodeType != 1 || !UCF_DomUtil.bIsVisible(oDomRef) || oDomRef.bIsCollectorContainer)
            continue;
        if (oDomRef.getAttribute("ct")) {
            var oControl = this.oLS.oControlFactory.oGetControlByDomRef(oDomRef, true);
            if (oControl && oControl.bIsFocusable()) {
                return oControl;
            }
        }
        var oControl = this.oGetLastFocusableChildRecursive(oDomRef);
        if (oControl)
            return oControl;
    }
    if (oDomRef.parentNode != null) {
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
    return null;
}
;
UCF_Control.prototype.oGetQueueForm = function() {
    var oControl = this;
    while (oControl != null) {
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
        oNextControl.moveFocus(false, false);
        return true;
    }
    return false;
}
;
UCF_Control.prototype.focusPreviousControl = function() {
    var oPreviousControl = this.oGetPreviousFocusableControl();
    if (oPreviousControl) {
        oPreviousControl.moveFocus(false, true);
        return true;
    }
    return false;
}
;
UCF_Control.prototype.bIsFocusable = function() {
    return (this.oFocusDomRef != null);
}
;
UCF_Control.prototype.bIsValid = function() {
    var oDomRef = UCF_DomUtil.$(this.sId);
    return (oDomRef != null && oDomRef == this.oDomRef);
}
;
UCF_Control.prototype.bIsVisible = function() {
    if (!this.bIsValid())
        return false;
    return UCF_DomUtil.bIsVisible(this.oRootRef, true);
}
;
UCF_Control.prototype.focus = function(bFormBackNavigation) {
    if (!this.bIsVisible())
        return;
    var oDomRef = this.oFocusDomRef;
    if (bFormBackNavigation && this.oLastFocusDomRef)
        oDomRef = this.oLastFocusDomRef;
    if (bFormBackNavigation === false && this.oFirstFocusDomRef)
        oDomRef = this.oFirstFocusDomRef;
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
        oControl.removeForcedFocus(oDomEvent.srcElement || oDomEvent.target);
    }
    ;
    UCF_DomUtil.attachEvent(oDomRef, "blur", this._forwardBlur);
}
;
UCF_Control.prototype.removeForcedFocus = function(oDomRef) {
    UCF_DomUtil.resetTabIndex(oDomRef);
    UCF_DomUtil.detachEvent(oDomRef, "blur", this._forwardBlur);
}
;
UCF_Control.prototype.moveFocus = function(bDirect, bBackNavigation) {
    if (bDirect) {
        if (this.oDomRef) {
            this.focus(bBackNavigation);
        } else {}
    } else
        UCF_JsUtil.delayedCall(0, this, "moveFocus", [true, bBackNavigation]);
}
;
UCF_Control.prototype.refocus = function(oDomRef) {
    if (this.oLS.oSystem.bIs508) {
        var oSpan = UCF_DomUtil.$("ur-accfocus");
        if (oSpan == null) {
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
    while (oDomRef != null) {
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
    while (oDomRef != null) {
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
    this.sActiveDefaultButtonId = "";
    if (!sDefaultButtonId)
        return;
    var oDefaultButton = this.oLS.oControlFactory.oGetControlById(sDefaultButtonId);
    if (oDefaultButton && (UCF_JsUtil.bInstanceOf(oDefaultButton, "UCF_Button") || UCF_JsUtil.bInstanceOf(oDefaultButton, "UCF_LargeButton"))) {
        this.sActiveDefaultButtonId = sDefaultButtonId;
    }
}
;
UCF_Control.prototype.bHasEnterHotkey = function() {
    if (this.sHotkeysId == null || this.sHotkeysId == '')
        return false;
    var oHotkeys = this.oGetControlById(this.sHotkeysId);
    if (oHotkeys != null && oHotkeys.getHotkey(UCF_KeyCodes.ENTER, false, false, false))
        return true;
    else
        return false;
}
;
UCF_Control.prototype.markDirty = function(bFromEvent) {
    this.oLS.markDirty(bFromEvent);
}
;
UCF_Control.prototype.onlscontainerfocus = function(oBrowserEvent) {
    if (oBrowserEvent.oGetData().bSkipDefaultButtonHandling)
        return;
    this.oLS.highlightDefaultButton(null);
    if (this.bHasEnterHotkey()) {
        oBrowserEvent.oGetData().bSkipDefaultButtonHandling = true;
    }
    if (this.bIgnoreDefaultButton) {
        oBrowserEvent.oGetData().bSkipDefaultButtonHandling = true;
    } else if (this.sActiveDefaultButtonId) {
        this.oLS.highlightDefaultButton(this.sActiveDefaultButtonId);
        oBrowserEvent.oGetData().bSkipDefaultButtonHandling = true;
    }
}
;
UCF_Control.prototype.sGetAccControlName = function() {
    if (UCF_System.sAccessibility == "ARIA") {
        var oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_ARIAHelper"))(this.oLS);
    } else {
        var oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_AccessibilityHelper"))(this.oLS);
    }
    var sText = "";
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
    if (iKey == UCF_KeyCodes._1) {
        oParent = this.oGetParent();
        while (oParent && !oParent.onlsaccessibility) {
            oParent = oParent.oGetParent();
        }
        if (oParent)
            sText = this.oLS.sGetText("SAPUR_PARENT") + " " + oParent.sGetAccControlName();
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
      , sText = this.sGetAccControlName();
    if (sText != "")
        sText += ": ";
    return sText + this.sGetAccChildrenText(aAccChildren);
}
;
UCF_Control.prototype.sGetAccChildrenText = function(aAccChildren) {
    var aSumChildren = new Array()
      , sText = this.oLS.sGetText("SAPUR_CHILDREN") + "\n\n";
    if (aAccChildren == null || aAccChildren.length == 0)
        return this.oLS.sGetText("SAPUR_NO_CHILDREN");
    for (var i = 0; i < aAccChildren.length; i++) {
        var sControlName = aAccChildren[i].sGetAccControlName();
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
    if (!oDomRef || oDomRef.childNodes == null || !UCF_DomUtil.bIsVisible(oDomRef))
        return null;
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
    if (this.bIgnoreDefaultButton || (this.bHasEnterHotkey() && !this.sActiveDefaultButtonId)) {
        oBrowserEvent.cancelBubble();
        return;
    }
    if (this.sActiveDefaultButtonId) {
        var oDefaultButton = this.oLS.oControlFactory.oGetControlById(this.sActiveDefaultButtonId);
        if (oDefaultButton) {
            oDefaultButton.onclick(oBrowserEvent);
            oBrowserEvent.cancelBubble();
        }
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
    return null;
}
;
UCF_Control.prototype.oGetDragParent = function() {
    if (this.sGetDragSourceInfo())
        return this;
    if (this.oGetParent()) {
        return this.oGetParent().oGetDragParent();
    }
    return null;
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
UCF_Control.prototype.updateHTML = function(sHTML) {}
;
UCF_Control.prototype.sGetDisplayedText = function() {
    return "";
}
;
UCF_Control.prototype.iGetParentZIndex = function() {
    var iZIndex = 0
      , oRef = UCF_DomUtil.oGetParentByAttribute(this.oDomRef, "ct", "PW");
    if (oRef)
        iZIndex = parseInt(oRef.style.zIndex);
    return iZIndex;
}
;
UCF_Control.prototype.playAnimation = function(sId, oAnimation) {
    var oDomRef = document.getElementById(sId).firstChild;
    while (oDomRef && oDomRef.nodeType != 1)
        oDomRef = oDomRef.nextSibling;
    if (!oDomRef)
        return;
    oAnimation.setDomRef(oDomRef);
    oAnimation.run(true);
}
;
UCF_Control.prototype.getCustomData = function() {
    if (this.sCustomData) {
        return this.sCustomData;
    }
    return "";
}
;
UCF_Control.prototype.oGetFirstChildControl = function() {
    var oDomRef = UCF_DomUtil.oGetFirstChildByAttribute(this.oDomRef, "ct");
    if (!oDomRef)
        return null;
    var oControl = this.oLS.oGetControlByDomRef(oDomRef);
    if (oControl) {
        return oControl;
    }
    return null;
}
;
UCF_Control.prototype.oGetLastChildControl = function() {
    var oDomRef = UCF_DomUtil.oGetLastChildByAttribute(this.oDomRef, "ct");
    if (!oDomRef)
        return null;
    var oControl = this.oLS.oGetControlByDomRef(oDomRef);
    if (oControl) {
        return oControl;
    }
    return null;
}
;
UCF_Control.prototype.iGetOptimalWidth = function() {
    var iWidth = 20;
    if (this.oRootRef && this.oRootRef.offsetWidth > 0) {
        var sWidth = UCF_DomUtil.sGetCurrentStyle(this.oRootRef, "width");
        if (!sWidth || sWidth.indexOf("%") == -1) {
            iWidth = this.oRootRef.offsetWidth;
        }
    }
    return iWidth;
}
;
UCF_Control.prototype.removeTooltips = function(oDomRef) {
    if (!oDomRef) {
        oDomRef = this.oDomRef || this.oRootRef;
    }
    if (oDomRef.getAttribute && (oDomRef.getAttribute("title") == "" || oDomRef.getAttribute("title") == null) && oDomRef.parentNode) {
        this.hideTooltip(oDomRef.parentNode);
    } else {
        var aInnerImages = oDomRef.getElementsByTagName("IMG");
        if (oDomRef.tagName == "IMAGE" && oDomRef.getAttribute("alt")) {
            var sAltText = aInnerImages[i].getAttribute("alt");
            if (sAltText) {
                this.aTooltipNodes.push({
                    attribute: "alt",
                    domref: oDomRef,
                    text: sAltText
                });
                oDomRef.setAttribute("alt", "");
            }
        }
        for (var i = 0; i < aInnerImages.length; i++) {
            var sAltText = aInnerImages[i].getAttribute("alt");
            if (sAltText) {
                this.aTooltipNodes.push({
                    attribute: "alt",
                    domref: aInnerImages[i],
                    text: sAltText
                });
                aInnerImages[i].setAttribute("alt", "");
            }
        }
        if (oDomRef.getAttribute && oDomRef.getAttribute("title") != "") {
            var sAltText = oDomRef.getAttribute("title");
            oDomRef.setAttribute("title", "");
            this.aTooltipNodes.push({
                attribute: "title",
                domref: oDomRef,
                text: sAltText
            });
            this.hideTooltip(oDomRef.parentNode);
        }
    }
}
;
UCF_Control.prototype.resetTooltips = function() {
    while (this.aTooltipNodes.length > 0) {
        var oObject = this.aTooltipNodes.pop();
        if (oObject.domref) {
            oObject.domref.setAttribute(oObject.attribute, oObject.text);
        }
    }
}
;
UCF_Control.prototype.getClientControl = function() {
    return this.oLS.oControlFactory.oGetClientControlById(this.sId);
}
;
UCF_Control.prototype.setClientProperty = function(sName, oValue, bSuppressRendering) {
    var oClientControl = this.getClientControl();
    if (oClientControl) {
        if (oClientControl["set" + sName] && oClientControl["get" + sName]) {
            if (oClientControl["get" + sName]() != oValue) {
                oClientControl["set" + sName](oValue, bSuppressRendering);
            }
        } else {}
    }
}
;
UCF_Control.prototype.getClientProperty = function(sName) {
    var oClientControl = this.getClientControl();
    if (oClientControl && oClientControl["get" + sName]) {
        return oClientControl["get" + sName]();
    }
}
;
UCF_Control.prototype.aPublicMethods = ["addClientListener", "removeClientListener", "playAnimation", "getCustomData"];
function UCF_Page(oDomRef, oLS) {
    UCF_Control.apply(this, [oDomRef, oLS]);
    this.oBrowserHistory = null;
    this.aExternalWindows = [];
    this.oLS.sDirtyMode = this.sDirtyMode;
    this.setDirty(this.bDirty);
    this.bResizeNotification = this.mEvents.Resize ? true : false;
    if (this.mEvents.Scroll) {
        this.oScrollArea = new (UCF_ClassLoader.oGetClass("UCF_ScrollArea"))(document.body);
        this.oScrollArea.attachEvent(this.oScrollArea.E_EVENTS.Scroll, this, "onAreaScroll");
        this.addDelegate(this.oScrollArea);
    }
    if (this.bResizeNotification) {
        this.iWidth = document.body.offsetWidth;
        this.iHeight = document.body.offsetHeight;
    }
    this.setDefaultButtonId(this.sDefaultButtonId);
    this.oLS.attachEvent(this.oLS.E_EVENTS.Lock, this, "onLsLock");
    this.oLS.attachEvent(this.oLS.E_EVENTS.Unlock, this, "onLsUnlock");
    this.bCancelCtrlF4KeyPress = false;
    this.mAnimations = {};
    this.mAnimationTriggers = {};
    this.mModels = {};
    this.sDefaultModelId = null;
    this.aScriptQueue = [];
}
;UCF_Page.prototype = new (UCF_ClassLoader.oGetClass("UCF_Control"))();
UCF_Page.prototype.E_EVENTS = {
    FinishedScriptLoading: 0,
    BeforeResize: 1,
    ModelAvailable: 2
};
UCF_Page.prototype.initialize = function() {
    if (this.oScrollArea) {
        this.oScrollArea.setScrollPosition(this.iScrollTop, this.iScrollLeft);
    }
    if (this.iSessionTimeout) {
        this.oSessionMonitor = new (UCF_ClassLoader.oGetClass("UCF_SessionMonitor"))(this.oLS,this.iSessionTimeout,this.sSessionKeepAliveUrl);
    }
    this.initBrowserHistory(true);
    this.initAnimations();
    var oClientTreeDomRef = UCF_DomUtil.$(this.sId + "-controltree");
    if (oClientTreeDomRef) {
        this.oLS.attachEvent(this.oLS.E_EVENTS.ControlsInitialized, this, "createClientControlTree");
        this.createClientControlTree();
    }
}
;
UCF_Page.prototype.destroy = function() {
    UCF_JsUtil.resetMassNotificationFilter(this);
    this.oLS.detachEvent(this.oLS.E_EVENTS.Lock, this, "onLsLock");
    this.oLS.detachEvent(this.oLS.E_EVENTS.Unlock, this, "onLsUnlock");
    if (this.sUnloadUrl && !this.oLS.bIsLocked) {
        UCF_JsUtil.sendUnloadRequest(this.sUnloadUrl);
    }
    if (this.oSessionMonitor) {
        this.oSessionMonitor.destroy();
    }
    if (this.mAnimations) {
        for (var n in this.mAnimations) {
            oAnimationConfig = this.mAnimations[n];
            if (oAnimationConfig.animation) {
                oAnimationConfig.animation.destroy();
            }
            this.oLS.oBrowserWindow.detachEvent(this.oLS.oBrowserWindow.E_EVENTS.ControlEvent, this, "triggerAnimation");
            this.oLS.detachEvent(this.oLS.E_EVENTS.SemanticEvent, this, "triggerAnimation");
            delete this.mAnimations[n]
        }
    }
    this.cleanUpBrowserHistory();
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
    if (oFocusedControl && oFocusedControl.bIsValid()) {
        sLastFocusId = oFocusedControl.sGetId(oSource);
    } else {
        this.oFocusedControl = null;
    }
    if (this.oFocusedControl != oControl) {
        if (sLastFocusId != "" || this.oLS.bAlternativeKeyboardHandling) {
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
    if (oSource && oBrowserEvent.bIsKeyboardTriggered()) {
        var oRectangle = UCF_DomUtil.oGetObjectRect(oSource);
        iPosX = oRectangle.left + Math.floor(oRectangle.width / 2);
        iPosY = oRectangle.top + Math.floor(oRectangle.height / 2);
    }
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
    if (oHotkeys == null)
        return;
    oHotkey = oHotkeys.getHotkeyFromEvent(oBrowserEvent);
    if (oHotkey) {
        if (UCF_Hotkeys.bMustCancelLSHotKey(oBrowserEvent)) {
            oBrowserEvent.cancel();
        }
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
UCF_Page.prototype.onkeypress = function(oBrowserEvent) {
    if (UCF_ClassLoader.oGetClass("UCF_Hotkeys").bMustCancelKeyPress(oBrowserEvent)) {
        oBrowserEvent.cancel();
    }
}
;
UCF_Page.prototype.onresize = function(oBrowserEvent) {
    if (this.bResizeNotification) {
        UCF_JsUtil.feedMassNotificationFilter(400, this, this, "checkResize");
    }
}
;
UCF_Page.prototype.checkResize = function() {
    if (this.bResizeNotification) {
        var iWidth = document.body.offsetWidth
          , iHeight = document.body.offsetHeight;
        if (iWidth != this.iWidth || iHeight != this.iHeight) {
            this.iWidth = iWidth;
            this.iHeight = iHeight;
            this.fireEvent(this.E_EVENTS.BeforeResize);
            this.fireResize(this.sId, this.iWidth, this.iHeight);
        }
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
    UCF_JsUtil.delayedCall(1500, this.oLS, "unlockByNavigation", []);
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
            window.open(UCF_System.sSpaceGif, sId, "left=10000").close();
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
UCF_Page.prototype.addStyle = function(sUrl, sContent) {
    if (!sUrl && !sContent)
        return;
    var oHead = document.getElementsByTagName("HEAD")[0];
    if (!oHead)
        return;
    if (sUrl) {
        var aLinks = document.getElementsByTagName("LINK")
          , oLink = null;
        for (var i = 0; i < aLinks.length; i++) {
            if (aLinks[i].getAttribute("href") == sUrl) {
                oLink = aLinks[i];
                break;
            }
        }
        if (!oLink) {
            oLink = document.createElement("LINK");
            oLink.setAttribute('rel', 'stylesheet');
            oLink.setAttribute('type', 'text/css');
            oLink.setAttribute('href', sUrl);
            oHead.appendChild(oLink);
        }
    }
    if (sContent) {
        var oStyle = document.createElement("DIV");
        oStyle.innerHTML = "<style>" + sContent + "</style>";
        oHead.appendChild(oStyle.firstChild);
    }
}
;
UCF_Page.prototype.addScript = function(sUrl, sContent, mCustomAttributes, oObject, sMethod, aParameters) {
    if (!sUrl && !sContent)
        return;
    if (sUrl && sContent) {
        this.addScript(sUrl, null, mCustomAttributes);
        sUrl = null;
    }
    this.aScriptQueue.push({
        src: sUrl,
        content: sContent,
        attributes: mCustomAttributes,
        object: oObject,
        method: sMethod,
        parameters: aParameters || []
    });
    if (this.aScriptQueue.length == 1) {
        this.loadAndExecScript();
    } else {
        this.fireEvent(this.E_EVENTS.FinishedScriptLoading);
    }
}
;
UCF_Page.prototype.loadingScripts = function() {
    return this.aScriptQueue.length > 0;
}
;
UCF_Page.prototype.loadAndExecScript = function() {
    if (this.aScriptQueue.length == 0) {
        UCF_DomUtil.detachEvent(oScript, "load", this.forwardRSCBrowserEvent);
        UCF_DomUtil.detachEvent(oScript, "readystatechange", this.forwardRSCBrowserEvent);
        return;
    }
    var oHead = document.getElementsByTagName("HEAD")[0]
      , oScriptProperties = this.aScriptQueue[0];
    if (oScriptProperties.src) {
        var bFound = false
          , aScripts = document.getElementsByTagName("SCRIPT");
        for (var i = 0; i < aScripts.length; i++) {
            if (aScripts[i].getAttribute("src") == oScriptProperties.src) {
                bFound = true;
                break;
            }
        }
        if (bFound) {
            this.shiftScriptQueue();
            if (this.aScriptQueue.length > 0) {
                this.loadAndExecScript();
            } else {
                this.fireEvent(this.E_EVENTS.FinishedScriptLoading);
            }
            return;
        }
        oScript = document.createElement("SCRIPT");
        oScript.language = "text/javascript";
        oScript.type = "text/javascript";
        oScript.src = oScriptProperties.src;
        if (oScriptProperties.attributes) {
            for (var attribute in oScriptProperties.attributes) {
                oScript.setAttribute(attribute, oScriptProperties.attributes[attribute]);
            }
        }
        var that = this;
        this.forwardRSCBrowserEvent = function(oDomEvent) {
            that.onScriptReadyStateChange(oDomEvent);
        }
        ;
        UCF_DomUtil.attachEvent(oScript, "load", this.forwardRSCBrowserEvent);
        UCF_DomUtil.attachEvent(oScript, "readystatechange", this.forwardRSCBrowserEvent);
        oHead.appendChild(oScript);
    } else if (oScriptProperties.content) {
        (new Function(oScriptProperties.content))();
        this.shiftScriptQueue();
        if (this.aScriptQueue.length > 0) {
            this.loadAndExecScript();
        } else {
            this.fireEvent(this.E_EVENTS.FinishedScriptLoading);
        }
    }
}
;
UCF_Page.prototype.shiftScriptQueue = function() {
    var oScript = this.aScriptQueue.shift();
    if (oScript && oScript.object && oScript.method) {
        oScript.object[oScript.method].apply(oScript.object, oScript.parameters);
    }
}
;
UCF_Page.prototype.onScriptReadyStateChange = function(oDomEvent) {
    var oSource = oDomEvent.target || oDomEvent.srcElement;
    if (oSource.tagName == "SCRIPT" && (!oScript.readyState || oScript.readyState == "loaded" || oScript.readyState == "complete")) {
        this.shiftScriptQueue();
        this.loadAndExecScript();
    }
}
;
UCF_Page.prototype.setDragData = function(sData, sMimeType, sDragSessionId) {
    this.oLS.setDragData(sData, sMimeType, sDragSessionId);
}
;
UCF_Page.prototype.downloadFile = function(sUrl) {
    UCF_JsUtil.downloadFile(sUrl);
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
    this.setClientProperty("UnloadUrl", this.sUnloadUrl, true);
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
UCF_Page.prototype.setDirtyMode = function(sDirtyMode) {
    this.oLS.sDirtyMode = sDirtyMode;
}
;
UCF_Page.prototype.onLsUnlock = function(oEvent) {
    if (this.mHashInfoLockMap) {
        this.fireHashChanged(this.sId, this.mHashInfoLockMap.sNewHashAfterLock, this.mHashInfoLockMap.sOldHashBeforeLock);
        this.mHashInfoLockMap = null;
    }
    this.bResizeNotification = this.mEvents.Resize ? true : false;
    if (this.bResizeNotification) {
        this.checkResize();
    }
}
;
UCF_Page.prototype.onLsLock = function(oEvent) {
    if (this.bResizeNotification) {
        this.bResizeNotification = false;
        UCF_JsUtil.resetMassNotificationFilter(this);
    }
}
;
UCF_Page.prototype.setBrowserHistory = function(sBrowserHistory) {
    this.cleanUpBrowserHistory();
    this.sBrowserHistory = sBrowserHistory;
    this.setClientProperty("BrowserHistory", this.sBrowserHistory, true);
    this.initBrowserHistory(false);
}
;
UCF_Page.prototype.cleanUpBrowserHistory = function() {
    if (this.oBrowserHistory) {
        this.oBrowserHistory.detachEvent(this.oBrowserHistory.E_EVENTS.HashChanged, this, "onHashChanged");
        this.oBrowserHistory.destroy();
        this.oBrowserHistory = null;
    }
    this.bSkipNextHashChangeNotification = false;
    this.mHashInfoLockMap = null;
}
;
UCF_Page.prototype.initBrowserHistory = function(bPageInitial) {
    var bBackprevention = this.sBrowserHistory != "ENABLED"
      , bHistorySupport = this.bIsHistorySupport();
    this.mHashInfoLockMap = null;
    this.oBrowserHistory = new (UCF_ClassLoader.oGetClass("UCF_BrowserHistory"))();
    if (bHistorySupport) {
        if (this.oBrowserHistory.sGetHash() != this.sHash) {
            if (this.oBrowserHistory.sGetHash()) {
                this.fireHashChangedEvent(this.oBrowserHistory.sGetHash(), this.sHash);
            } else {
                this.oBrowserHistory.setHashDirect(this.sHash, true);
            }
        }
        this.oLS.oGetPopupManagerInternal().setIframeCaching(false);
        this.oBrowserHistory.attachEvent(this.oBrowserHistory.E_EVENTS.HashChanged, this, "onHashChanged");
    }
    this.oBrowserHistory.init(bBackprevention, bHistorySupport, bPageInitial);
}
;
UCF_Page.prototype.bIsHistorySupport = function() {
    return window == window.top && (this.sBrowserHistory == "NOTIFY" || (this.mEvents.HashChanged && this.bHashChangedNotification));
}
;
UCF_Page.prototype.onHashChanged = function(oEvent) {
    if (!this.bSkipNextHashChangeNotification) {
        this.fireHashChangedEvent(oEvent.oGetParam("sNewHash"), oEvent.oGetParam("sOldHash"));
    }
    this.bSkipNextHashChangeNotification = false;
}
;
UCF_Page.prototype.fireHashChangedEvent = function(sNewHash, sOldHash) {
    if (this.bIsHistorySupport()) {
        if (this.oLS.bIsLocked) {
            if (this.mHashInfoLockMap) {
                this.mHashInfoLockMap.sNewHashAfterLock = sNewHash;
            } else {
                this.mHashInfoLockMap = {
                    sOldHashBeforeLock: sOldHash,
                    sNewHashAfterLock: sNewHash
                };
            }
        } else {
            this.fireHashChanged(this.sId, sNewHash, sOldHash);
        }
    }
}
;
UCF_Page.prototype.setHash = function(sHash, bSuppressHashChanged) {
    sHash = this.oBrowserHistory.sNormalizeHash(sHash);
    if (this.mHashInfoLockMap) {
        this.mHashInfoLockMap.sOldHashBeforeLock = sHash;
    } else {
        if (sHash != this.oBrowserHistory.sGetHash())
            this.bSkipNextHashChangeNotification = true;
        this.oBrowserHistory.setHash(sHash);
    }
}
;
UCF_Page.prototype.getHash = function() {
    return this.oBrowserHistory ? this.oBrowserHistory.sGetHash() : "";
}
;
UCF_Page.prototype.setHashChangedNotification = function(bHashChangedNotification) {
    if (bHashChangedNotification != this.bHashChangedNotification) {
        this.bHashChangedNotification = bHashChangedNotification;
        this.setClientProperty("HashChangedNotification", this.bHashChangedNotification, true);
        this.cleanUpBrowserHistory();
        this.initBrowserHistory(false);
    }
}
;
UCF_Page.prototype.setScrollingMode = function(sScrollingMode) {
    if (this.sScrollingMode != sScrollingMode) {
        switch (sScrollingMode) {
        case "BOTH":
            document.body.style.overflow = "scroll";
            break;
        case "HIDE":
            document.body.style.overflow = "hidden";
            break;
        case "AUTO":
            document.body.style.overflow = "auto";
            break;
        case "NONE":
            document.body.style.overflow = "";
            break;
        }
        this.sScrollingMode = sScrollingMode;
        this.setClientProperty("ScrollingMode", this.sScrollingMode, true);
    }
}
;
UCF_Page.prototype.sGetScrollingMode = function() {
    return this.sScrollingMode;
}
;
UCF_Page.prototype.changeThemeUrl = function(sThemeUrl) {
    var aLinks = document.getElementsByTagName("LINK");
    for (var i = 0; i < aLinks.length; i++) {
        var oLink = aLinks[i];
        if (oLink.getAttribute("href") && oLink.getAttribute("href") == UCF_System.sCSSURL) {
            if (sThemeUrl.indexOf(".css") == -1) {
                var sThemeId = sThemeUrl || oLink.getAttribute("t")
                  , sThemePartId = oLink.getAttribute("p")
                  , sDevice = oLink.getAttribute("d")
                  , sBaseRoot = UCF_System.sExternalThemeRoot.substring(0, UCF_System.sExternalThemeRoot.lastIndexOf("/"));
                sThemeUrl = sBaseRoot + "/" + sThemeId + "/" + sThemePartId + "/" + sThemePartId + "_" + sDevice + ".css";
            }
            oLink.setAttribute("href", sThemeUrl);
            UCF_System.sCSSURL = sThemeUrl;
            break;
        }
    }
}
;
UCF_Page.prototype.addCustomStyleClass = function(sClassName) {
    if (document.body.className.indexOf(" " + sClassName) == -1) {
        document.body.className += " " + sClassName;
    }
}
;
UCF_Page.prototype.removeCustomStyleClass = function(sClassName) {
    if (document.body.className.indexOf(" " + sClassName) > -1) {
        document.body.className = document.body.className.replace(" " + sClassName, "");
    }
}
;
UCF_Page.prototype.setDefaultButtonId = function(sDefaultButtonId) {
    UCF_Control.prototype.setDefaultButtonId.call(this, sDefaultButtonId);
}
;
UCF_Page.prototype.initAnimations = function() {
    this.mAnimations = {};
    this.updateAnimations();
}
;
UCF_Page.prototype.updateAnimations = function() {
    if (!UCF_System.bUseAnimation)
        return;
    if (!window["JSON"])
        return;
    if (!UCF_UserAgent.bIsIE(8) && !UCF_UserAgent.bIsFirefox(4) && !UCF_UserAgent.bIsWebKit())
        return;
    for (var n in this.mAnimations) {
        var oDomRef = this.mAnimations[n].domref;
        if (!UCF_DomUtil.bIsInActiveDom(oDomRef)) {
            var oAnimationConfig = this.mAnimations[n]
              , oAnimation = oAnimationConfig.animation;
            if (oAnimation.bIsRunning) {
                oAnimation.callbackFinish(this, "updateAnimations");
            }
            if (oAnimation)
                oAnimation.destroy();
            delete this.mAnimations[n];
        }
    }
    var oAnimDomRef = UCF_DomUtil.$(this.sId + "-" + "animations")
      , aChildren = oAnimDomRef.getElementsByTagName("SPAN")
      , bUserTriggerRegistered = false
      , bSematicTriggerRegistered = false;
    for (var i = 0; i < aChildren.length; i++) {
        var oChildAnim = aChildren[i]
          , oConfig = JSON.parse(UCF_DomUtil.sGetInnerText(oChildAnim));
        if (this.mAnimations[oChildAnim.id]) {
            if (oChildAnim.getAttribute("duration") == "-1") {
                delete this.mAnimations[oChildAnim.id];
            }
            continue;
        }
        this.mAnimations[oChildAnim.id] = {
            duration: parseInt(oChildAnim.getAttribute("duration")) || 300,
            controlid: oChildAnim.getAttribute("controlid"),
            domref: oChildAnim,
            config: oConfig,
            animation: null
        };
        var aTriggers = this.mAnimations[oChildAnim.id].config.Triggers;
        for (var j = 0; j < aTriggers.length; j++) {
            var sEventName = aTriggers[j].EventName;
            if (aTriggers[j].EventType == "USER") {
                sEventName = sEventName.toLowerCase();
            }
            var sKey = aTriggers[j].EventType + "_" + aTriggers[j].SourceControlId + "_" + sEventName;
            if (!this.mAnimationTriggers[sKey])
                this.mAnimationTriggers[sKey] = [];
            this.mAnimationTriggers[sKey].push(this.mAnimations[oChildAnim.id]);
            if (!bUserTriggerRegistered && aTriggers[j].EventType == "USER") {
                this.oLS.oBrowserWindow.attachEvent(this.oLS.oBrowserWindow.E_EVENTS.ControlEvent, this, "triggerAnimation");
                bUserTriggerRegistered = true;
            } else if (!bSematicTriggerRegistered && aTriggers[j].EventType == "SEMANTIC") {
                this.oLS.attachEvent(this.oLS.E_EVENTS.SemanticEvent, this, "triggerAnimation");
                bSematicTriggerRegistered = true;
            }
        }
    }
}
;
UCF_Page.prototype.runAnimation = function(oAnimationDefinition) {
    var sControlId = oAnimationDefinition.controlid;
    if (!sControlId)
        return;
    var oDomRef = this.oLS.oControlFactory.oGetControlById(sControlId).oRootRef;
    if (!oDomRef && oAnimationDefinition.animations) {
        for (var n in oAnimationDefinition.animations) {
            oAnimationDefinition.animations[n].destroy();
            delete oAnimationDefinition.animations[n];
        }
        oAnimationDefinition.animations = null;
    }
    if (oAnimationDefinition.animations) {
        var bDomRefInvalid = false;
        for (var n in oAnimationDefinition.animations) {
            if (!UCF_DomUtil.bIsInActiveDom(oAnimationDefinition.animations[n].oDomRef)) {
                oAnimationDefinition.animations[n].destroy();
                delete oAnimationDefinition.animations[n];
                bDomRefInvalid = true;
            }
        }
        if (bDomRefInvalid) {
            oAnimationDefinition.animations = null;
        }
    }
    if (!oAnimationDefinition.animations) {
        if (!oAnimationDefinition.config.Steps)
            return;
        var mPhasedAnimations = {};
        for (var i = 0; i < oAnimationDefinition.config.Steps.length; i++) {
            var oStep = oAnimationDefinition.config.Steps[i];
            if (!mPhasedAnimations[oStep.Phase]) {
                mPhasedAnimations[oStep.Phase] = new (UCF_ClassLoader.oGetClass("UCF_Animation"))(oDomRef,oAnimationDefinition.duration);
            }
            oAnimation = mPhasedAnimations[oStep.Phase];
            var iInitalValue = oStep.InitalValue
              , iFinalValue = oStep.FinalValue
              , iStartValue = oStep.StartValue
              , iEndValue = oStep.EndValue
              , sAttribute = oStep.Attribute
              , sFunction = oStep.Function
              , sControlId = oStep.ControlId
              , eFunction = oAnimation.M_TRANSITIONS.Linear
              , oStepDomRef = null;
            if (sControlId) {
                oStepDomRef = this.oLS.oControlFactory.oGetControlById(sControlId).oRootRef;
            }
            if (sFunction == "EASEIN") {
                eFunction = oAnimation.M_TRANSITIONS.EaseIn;
            } else if (sFunction == "EASEOUT") {
                eFunction = oAnimation.M_TRANSITIONS.EaseOut;
            } else if (sFunction == "EASEINOUT") {
                eFunction = oAnimation.M_TRANSITIONS.EaseInOut;
            } else if (sFunction == "EASELOOPBACK") {
                eFunction = oAnimation.M_TRANSITIONS.EaseLoopBack;
            }
            if (sAttribute == "OPACITY") {
                if (typeof (iInitialValue) == "number") {
                    oAnimation.addInitialOpacityValue(iInitialValue, oStepDomRef);
                }
                oAnimation.addOpacityChange(iStartValue, iEndValue, eFunction, oStepDomRef);
                if (typeof (iFinalValue) == "number") {
                    oAnimation.addFinalOpacityValue(iFinalValue, oStepDomRef);
                }
            } else if (sAttribute == "HEIGHT" || sAttribute == "WIDTH") {
                var sStyleAttribute = sAttribute.toLowerCase();
                if (typeof (iInitialValue) == "number") {
                    oAnimation.addInitialStyleValue(sStyleAttribute, iInitialValue + "px", oStepDomRef);
                }
                oAnimation.addStyleChange(sStyleAttribute, "", "px", iStartValue, iEndValue, eFunction, oStepDomRef);
                if (typeof (iFinalValue) == "number") {
                    oAnimation.addFinalStyleValue(sStyleAttribute, iFinalValue + "px", oStepDomRef);
                }
            } else if (sAttribute == "LEFT" || sAttribute == "TOP") {
                var sStyleAttribute = sAttribute.toLowerCase();
                if (typeof (iInitialValue) == "number") {
                    oAnimation.addInitialStyleValue("position", "relative", oStepDomRef);
                    oAnimation.addInitialStyleValue("margin-" + sStyleAttribute, iInitialValue + "px", oStepDomRef);
                }
                oAnimation.addStyleChange("margin-" + sStyleAttribute, "", "px", iStartValue, iEndValue, eFunction, oStepDomRef);
                if (typeof (iFinalValue) == "number") {
                    oAnimation.addFinalStyleValue("position", "relative", oStepDomRef);
                    oAnimation.addFinalStyleValue("margin-" + sStyleAttribute, iFinalValue + "px", oStepDomRef);
                }
            } else if (sAttribute == "SCALEX" || sAttribute == "SCALEY" || sAttribute == "TRANSLATEX" || sAttribute == "TRANSLATEY" || sAttribute == "ROTATE" || sAttribute == "SKEWX" || sAttribute == "SKEWY") {
                var mTransformMap = {
                    SCALEX: "scaleX",
                    SCALEY: "scaleY",
                    ROTATE: "rotate",
                    SKEWX: "skewX",
                    SKEWY: "skewY",
                    TRANSLATEX: "translateX",
                    TRANSLATEY: "translateY"
                }
                  , sTransform = mTransformMap[sAttribute];
                if (typeof (iInitialValue) == "number") {
                    oAnimation.addInitialTransformValue(sTransform, [iInitialValue], oStepDomRef);
                }
                oAnimation.addTransformChange(sTransform, [iStartValue], [iEndValue], eFunction, oStepDomRef);
                if (typeof (iFinalValue) == "number") {
                    oAnimation.addFinalTransformValue(sTransform, [iFinalValue], oStepDomRef);
                }
            }
        }
        oAnimationDefinition.animations = mPhasedAnimations;
    }
    for (var n in oAnimationDefinition.animations) {
        this.addNextAnimation(oAnimationDefinition.animations[n], n);
    }
    this.playAnimations("TRIGGER");
    if (!this.bAnimationEventsAttached) {
        this.oLS.attachEvent(this.oLS.E_EVENTS.BeforeRequest, this, "playBeforeRequest");
        this.oLS.attachEvent(this.oLS.E_EVENTS.AfterRequest, this, "playAfterRequest");
        this.oLS.attachEvent(this.oLS.E_EVENTS.AfterResponse, this, "playAfterResponse");
        this.oLS.attachEvent(this.oLS.E_EVENTS.UpdateComplete, this, "playUpdateComplete");
        this.bAnimationEventsAttached = true;
    }
}
;
UCF_Page.prototype.addNextAnimation = function(oAnimation, sEvent) {
    if (!this.mNextAnimations)
        this.mNextAnimations = {};
    if (!this.mNextAnimations[sEvent])
        this.mNextAnimations[sEvent] = [];
    this.mNextAnimations[sEvent].push(oAnimation);
}
;
UCF_Page.prototype.playBeforeRequest = function() {
    this.playAnimations("BEFOREREQUEST");
}
;
UCF_Page.prototype.playAfterRequest = function() {
    this.playAnimations("AFTERREQUEST");
}
;
UCF_Page.prototype.playAfterResponse = function() {
    this.playAnimations("AFTERRESPONSE");
}
;
UCF_Page.prototype.playUpdateComplete = function() {
    this.playAnimations("UPDATECOMPLETE");
}
;
UCF_Page.prototype.playAnimations = function(sEvent) {
    if (this.oCurrentAnimation && this.oCurrentAnimation.bRunning) {
        UCF_JsUtil.delayedCall(this.oCurrentAnimation.iDuration - this.oCurrentAnimation.iElapsedTime, this, "playAnimations", [sEvent]);
    } else {
        if (!this.mNextAnimations)
            return;
        if (this.mNextAnimations[sEvent] && this.mNextAnimations[sEvent].length > 0) {
            this.oCurrentAnimation = this.mNextAnimations[sEvent][0];
            if (sEvent == "UPDATECOMPLETE") {
                this.oCurrentAnimation.setDomRef(UCF_DomUtil.$(this.oCurrentAnimation.oDomRef.id));
            }
            this.oCurrentAnimation.play();
            this.mNextAnimations[sEvent].splice(0, 1);
        }
    }
}
;
UCF_Page.prototype.triggerAnimation = function(oEvent) {
    if (oEvent.mGetParameters().oBrowserEvent) {
        var sEventType = "USER"
          , sControlId = ""
          , sEventName = oEvent.mGetParameters().oBrowserEvent.sName
          , oControl = oEvent.mGetParameters().oBrowserEvent.oSourceControl;
        if (oControl && oControl.sId) {
            sControlId = oControl.sId;
        }
        if (sControlId) {
            var sKey = sEventType + "_" + sControlId + "_" + sEventName;
            if (this.mAnimationTriggers[sKey]) {
                this.runAnimation(this.mAnimationTriggers[sKey]);
            }
        }
    } else if (oEvent.mGetParameters().oSemanticEvent) {
        var sEventType = "SEMANTIC"
          , sEventName = oEvent.mGetParameters().oSemanticEvent.sName
          , sControlId = oEvent.mGetParameters().oSemanticEvent.mParameters.Id;
        if (sControlId) {
            var sKey = sEventType + "_" + sControlId + "_" + sEventName;
            if (this.mAnimationTriggers[sKey]) {
                for (var i = 0; i < this.mAnimationTriggers[sKey].length; i++) {
                    this.runAnimation(this.mAnimationTriggers[sKey][i]);
                }
            }
        }
    }
}
;
UCF_Page.prototype.registerModel = function(sId, oModel, bDefault) {
    if (!this.mModels[sId]) {
        if (!this.sDefaultModelId && bDefault) {
            this.sDefaultModelId = sId;
        }
        this.mModels[sId] = oModel;
        this.oLS.oControlFactory.updateControlTreeBindings(null, false);
        this.fireEvent(this.E_EVENTS.ModelAvailable);
    }
}
;
UCF_Page.prototype.unregisterModel = function(sId) {
    if (this.mModels[sId]) {
        if (this.sDefaultModelId == sId) {
            this.sDefaultModelId = "";
        }
        delete this.mModels[sId];
    }
}
;
UCF_Page.prototype.initModels = function() {
    this.mModels["$"] = this.oLS.oControlFactory.createClientControlModel();
    var oModelsDomRef = UCF_DomUtil.$(this.sId + "-models");
    if (oModelsDomRef) {
        var sModels = oModelsDomRef.innerHTML
          , oHelperDomElement = document.createElement("DIV");
        oHelperDomElement.style.display = "none";
        this.oGetStaticAreaRef().appendChild(oHelperDomElement);
        oHelperDomElement.innerHTML = sModels;
        var aModelsDomRefs = oHelperDomElement.getElementsByTagName("SPAN");
        for (var i = 0; i < aModelsDomRefs.length; i++) {
            var oModelDomRef = aModelsDomRefs[i]
              , sModelId = oModelDomRef.getAttribute("id");
            bDefault = oModelDomRef.getAttribute("default") == "true",
            oData = (new Function("var o=" + oModelDomRef.innerHTML + ";" + "return o;"))();
            if (sModelId) {
                if (bDefault) {
                    this.sDefaultModelId = sModelId;
                }
                if (oData) {
                    this.setModelData(sModelId, oData, false, bDefault, oModelDomRef);
                } else {
                    this.setModelData(sModelId, {}, false, bDefault, oModelDomRef);
                }
            }
        }
    }
    this.oLS.oControlFactory.updateControlTreeBindings(null, true);
}
;
UCF_Page.prototype.setModelData = function(sModelId, oData, bMerge, bIsDefault, oDomRef) {
    if (this.mModels[sModelId]) {
        this.mModels[sModelId].setData(oData, bMerge);
    } else {
        this.mModels[sModelId] = new (UCF_ClassLoader.oGetClass("UCF_JSONModel"))();
        var oUCFInstance = new (UCF_ClassLoader.oGetClass("UCF_ModelControl"))(oDomRef,this.oLS,sModelId);
        this.mModels[sModelId].setUCFInstance(oUCFInstance);
        this.mModels[sModelId].setData(oData, false);
    }
    if (bIsDefault && this.sDefaultModelId && this.sDefaultModelId != sModelId) {
        this.sDefaultModelId = sModelId;
        for (var n in this.mModels) {
            this.mModels[sModelId].checkUpdate(true);
        }
    } else if (!this.sDefaultModelId) {
        this.sDefaultModelId = sModelId;
        for (var n in this.mModels) {
            this.mModels[sModelId].checkUpdate(true);
        }
    }
}
;
UCF_Page.prototype.createClientControlTree = function() {
    this.oLS.detachEvent(this.oLS.E_EVENTS.ControlsInitialized, this, "createClientControlTree");
    this.oLS.oControlFactory.createClientControlTree("", this.sId);
    this.oLS.oControlFactory.updateControlTreeBindings(this.sId, false);
}
;
UCF_Page.prototype.hasModels = function() {
    for (var n in this.mModels) {
        return true;
    }
    ;return false;
}
;
UCF_Page.prototype.getModels = function() {
    return this.mModels;
}
;
UCF_Page.prototype.getModel = function(sModelId) {
    if (!sModelId && this.sDefaultModelId) {
        sModelId = this.sDefaultModelId
    }
    if (!sModelId) {
        return;
    }
    if (this.mModels[sModelId]) {
        this.mModels[sModelId].oLS = this.oLS;
    }
    return this.mModels[sModelId];
}
;
UCF_Page.prototype.setModel = function(sModelId, oModel, bIsDefault) {
    if (UCF_JsUtil.bInstanceOf(oModel, "UCF_JSONModel")) {
        if (bIsDefault)
            this.sDefaultModelId = sModelId;
        if (this.mModels[sModelId]) {
            this.updateModel(sModelId, mModels[sModelId].setData(oModel.getData()));
        } else {
            this.mModels[sModelId] = oModel;
        }
        this.fireEvent(this.E_EVENTS.ModelAvailable);
    }
}
;
UCF_Page.prototype.updateModel = function(sModelId, oData, bMerge) {
    if (typeof (sModelId) != "string") {
        bMerge = oData;
        oData = sModelId;
        sModelId = "";
    }
    var oModel = this.getModel(sModelId);
    this.oLS.oControlFactory.createClientControlTree();
    oModel.setData(oData, bMerge);
}
;
UCF_Page.prototype.aAttributeNames = ["sFormId", "sScrollingMode", "sHotkeysId", "sBrowserHistory", "sUnloadUrl", "iScrollTop", "iScrollLeft", "sDirtyMode", "bDirty", "sHash", "bHashChangedNotification", "bHasEventQueue", "iSessionTimeout", "sSessionKeepAliveUrl", "sDefaultButtonId", "sCustomStyle"];
UCF_Page.prototype.aMethodNames = ["setTitle", "setHasMargin", "setBrowserHistory", "setFocus", "showModalDialog", "openModalPopup", "closePopup", "closeAllModalPopups", "openExternalWindow", "openExternalWindowByPost", "closeExternalWindow", "closeWindow", "setKeepAlive", "setDragData", "downloadFile", "scrollIntoView", "setDirty", "print", "setUnloadUrl", "redirect", "setHash", "getHash", "setHashChangedNotification", "setDirtyMode", "setScrollingMode", "setDefaultButtonId", "addStyle", "addScript", "changeThemeUrl", "addCustomStyleClass", "removeCustomStyleClass", "addClientListener", "removeClientListener", "playAnimation", "getCustomData"];
UCF_Page.prototype.sFormId = '';
UCF_Page.prototype.sScrollingMode = "NONE";
UCF_Page.prototype.sHotkeysId = '';
UCF_Page.prototype.sBrowserHistory = "ENABLED";
UCF_Page.prototype.sUnloadUrl = '';
UCF_Page.prototype.iScrollTop = 0;
UCF_Page.prototype.iScrollLeft = 0;
UCF_Page.prototype.sDirtyMode = "CLIENTSERVER";
UCF_Page.prototype.bDirty = false;
UCF_Page.prototype.sHash = '';
UCF_Page.prototype.bHashChangedNotification = true;
UCF_Page.prototype.bHasEventQueue = true;
UCF_Page.prototype.iSessionTimeout = 0;
UCF_Page.prototype.sSessionKeepAliveUrl = '';
UCF_Page.prototype.sDefaultButtonId = '';
UCF_Page.prototype.sCustomStyle = '';
UCF_Page.prototype.setDefaultValues = function() {
    this.sFormId = '';
    this.sScrollingMode = "NONE";
    this.sHotkeysId = '';
    this.sBrowserHistory = "ENABLED";
    this.sUnloadUrl = '';
    this.iScrollTop = 0;
    this.iScrollLeft = 0;
    this.sDirtyMode = "CLIENTSERVER";
    this.bDirty = false;
    this.sHash = '';
    this.bHashChangedNotification = true;
    this.bHasEventQueue = true;
    this.iSessionTimeout = 0;
    this.sSessionKeepAliveUrl = '';
    this.sDefaultButtonId = '';
    this.sCustomStyle = '';
    if (this.getClientControl()) {
        this.setClientProperty("FormId", '');
        this.setClientProperty("ScrollingMode", "NONE");
        this.setClientProperty("HotkeysId", '');
        this.setClientProperty("BrowserHistory", "ENABLED");
        this.setClientProperty("UnloadUrl", '');
        this.setClientProperty("ScrollTop", 0);
        this.setClientProperty("ScrollLeft", 0);
        this.setClientProperty("DirtyMode", "CLIENTSERVER");
        this.setClientProperty("Dirty", false);
        this.setClientProperty("Hash", '');
        this.setClientProperty("HashChangedNotification", true);
        this.setClientProperty("HasEventQueue", true);
        this.setClientProperty("SessionTimeout", 0);
        this.setClientProperty("SessionKeepAliveUrl", '');
        this.setClientProperty("DefaultButtonId", '');
        this.setClientProperty("CustomStyle", '');
    }
}
;
UCF_Page.prototype.fireHelp = function(sId, sControlId) {
    var mParams = {
        Id: sId,
        ControlId: sControlId
    };
    if (sControlId) {
        var oControl = this.oLS.oControlFactory.oGetControlById(sControlId);
        if (oControl) {
            oControl.enrichSematicEventParamsWithBindingContext(mParams, "ControlId");
        }
    }
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
    if (sControlId) {
        var oControl = this.oLS.oControlFactory.oGetControlById(sControlId);
        if (oControl) {
            oControl.enrichSematicEventParamsWithBindingContext(mParams, "ControlId");
        }
    }
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
    if (sControlId) {
        var oControl = this.oLS.oControlFactory.oGetControlById(sControlId);
        if (oControl) {
            oControl.enrichSematicEventParamsWithBindingContext(mParams, "ControlId");
        }
    }
    if (sLastFocusedId) {
        var oControl = this.oLS.oControlFactory.oGetControlById(sLastFocusedId);
        if (oControl) {
            oControl.enrichSematicEventParamsWithBindingContext(mParams, "LastFocusedId");
        }
    }
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
    if (sControlId) {
        var oControl = this.oLS.oControlFactory.oGetControlById(sControlId);
        if (oControl) {
            oControl.enrichSematicEventParamsWithBindingContext(mParams, "ControlId");
        }
    }
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
UCF_Page.prototype.aPublicMethods = ["setScrollPosition", "setTitle", "setHasMargin", "openModalPopup", "closePopup", "closeAllModalPopups", "openExternalWindow", "openExternalWindowByPost", "closeExternalWindow", "closeWindow", "setFocus", "setKeepAlive", "addStyle", "addScript", "setDragData", "downloadFile", "scrollIntoView", "setDirty", "print", "setUnloadUrl", "redirect", "setDirtyMode", "setBrowserHistory", "setHash", "getHash", "setHashChangedNotification", "setScrollingMode", "sGetScrollingMode", "changeThemeUrl", "addCustomStyleClass", "removeCustomStyleClass", "setDefaultButtonId", "updateModel"];
function UCF_AriaStateHelper() {}
;UCF_AriaStateHelper.setExpanded = function(oDomRef, bState) {
    if (bState)
        oDomRef.setAttribute("aria-expanded", "true");
    else
        oDomRef.setAttribute("aria-expanded", "false");
}
;
UCF_AriaStateHelper.setDisabled = function(oDomRef, bState) {
    if (bState)
        oDomRef.setAttribute("aria-disabled", "true");
    else
        oDomRef.removeAttribute("aria-disabled");
}
;
UCF_AriaStateHelper.setReadonly = function(oDomRef, bState) {
    if (bState)
        oDomRef.setAttribute("aria-readonly", "true");
    else
        oDomRef.removeAttribute("aria-readonly");
}
;
UCF_AriaStateHelper.setSelected = function(oDomRef, bState) {
    if (bState)
        oDomRef.setAttribute("aria-selected", "true");
    else
        oDomRef.setAttribute("aria-selected", "false");
}
;
UCF_AriaStateHelper.setActivedescendant = function(oDomRef, sId) {
    if (sId == "")
        oDomRef.removeAttribute("aria-activedescendant");
    else
        oDomRef.setAttribute("aria-activedescendant", sId);
}
;
UCF_AriaStateHelper.setDescribedby = function(oDomRef, sId) {
    if (sId == "")
        oDomRef.removeAttribute("aria-describedby");
    else
        oDomRef.setAttribute("aria-describedby", sId);
}
;
UCF_AriaStateHelper.setControls = function(oDomRef, sId) {
    if (sId == "")
        oDomRef.removeAttribute("aria-controls");
    else
        oDomRef.setAttribute("aria-controls", sId);
}
;
UCF_AriaStateHelper.setOwns = function(oDomRef, sId) {
    if (sId == "")
        oDomRef.removeAttribute("aria-owns");
    else
        oDomRef.setAttribute("aria-owns", sId);
}
;
UCF_AriaStateHelper.setSetsize = function(oDomRef, iSetSize) {
    oDomRef.setAttribute("aria-setsize", iSetSize);
}
;
UCF_AriaStateHelper.setPosinset = function(oDomRef, iPos) {
    if (!UCF_AriaStateHelper.bIsActive)
        return;
    oDomRef.setAttribute("aria-posinset", iPos);
}
;
UCF_AriaStateHelper.setPressed = function(oDomRef, bState) {
    if (!UCF_AriaStateHelper.bIsActive)
        return;
    if (bState)
        oDomRef.setAttribute("aria-pressed", "true");
    else
        oDomRef.setAttribute("aria-pressed", "false");
}
;
UCF_AriaStateHelper.setChecked = function(oDomRef, bState) {
    if (bState === null)
        oDomRef.setAttribute("aria-checked", "mixed");
    else if (bState)
        oDomRef.setAttribute("aria-checked", "true");
    else
        oDomRef.removeAttribute("aria-checked");
}
;
UCF_AriaStateHelper.setTabIndex = function(oDomRef, bState) {
    if (bState)
        UCF_DomUtil.setTabIndex(oDomRef, "0");
    else
        UCF_DomUtil.resetTabIndex(oDomRef);
}
;
function UCF_ValidateException(message, violatedConstraints) {
    this.name = "ValidateException";
    this.message = message;
    this.violatedConstraints = violatedConstraints;
}
;UCF_ValidateException.prototype = new (UCF_ClassLoader.oGetClass("UCF_Exception"))();
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
    this.bFullUpdate = false;
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;
        sWindowId = oUpdateRef.getAttribute("windowid");
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
        oPopupWindow && oPopupWindow.preparePositionChange();
        if (!oPopupWindow && i > 0) {
            break;
        }
        oTargetLS.oPageUpdater.processUpdates(aUpdateRefs[i]);
    }
}
;
UCF_PageUpdater.prototype.processUpdates = function(oNode) {
    var aUpdates = oNode.childNodes, oUpdateRef, sCommand, sContent;
    var mControlUpdates = {};
    if (oNode.tagName == "full-update") {
        this.bFullUpdate = true;
        this.oLS.oControlFactory.deleteControlTrees();
    }
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;
        sCommand = oUpdateRef.tagName;
        if (sCommand == "control-update") {
            var sId = oUpdateRef.getAttribute("id");
            if (mControlUpdates[sId]) {
                mControlUpdates[sId].setAttribute("ignore", "true");
            }
            mControlUpdates[sId] = oUpdateRef;
        }
    }
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;
        sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "start-script":
            this.callScript(oUpdateRef);
            break;
        }
    }
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;
        sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "style-update":
            this.updateStyle(oUpdateRef);
            break;
        }
    }
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;
        sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "content-update":
            this.updateContent(oUpdateRef);
            break;
        case "control-update":
            if (oUpdateRef.getAttribute("ignore") != "true") {
                this.updateControl(oUpdateRef);
            }
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
        case "animation-update":
            this.updateAnimation(oUpdateRef);
            break;
        case "model-update":
            this.updateModel(oUpdateRef);
            break;
        }
    }
    this.oLS.purgeControls();
    this.oLS.processInitializeIDs();
    for (var i = 0; i < aUpdates.length; i++) {
        oUpdateRef = aUpdates[i];
        if (oUpdateRef.nodeType != 1)
            continue;
        sCommand = oUpdateRef.tagName;
        switch (sCommand) {
        case "script-call":
            this.callScript(oUpdateRef);
            break;
        }
    }
    this.oLS.oBrowserWindow.notifyLayoutChange();
    this.oLS.fireUpdateComplete();
    if (this.oLS.oPage) {
        this.oLS.oPage.updateAnimations();
    }
}
;
UCF_PageUpdater.sGetCDATAContent = function(oUpdateRef) {
    var sContent = ""
      , oCData = oUpdateRef.firstChild;
    while (oCData != null) {
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
      , oControl = sHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oControl = this.oLS.oControlFactory.oGetControlById(sId);
    if (oControl == null) {
        return;
    }
    var oRootRef = oControl.oRootRef
      , oParentRef = oRootRef.parentNode;
    oRootRef.innerHTML = sHTML;
}
;
UCF_PageUpdater.prototype.updateControl = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , oContentRef = null
      , oControlTreeRef = null
      , sUpdateMethod = oUpdateRef.getAttribute("updateMethod")
      , oControl = this.oLS.oControlFactory.oGetControlById(sId)
      , oClientControl = this.oLS.oControlFactory.oGetClientControlById(sId);
    if (oControl == null && oClientControl == null) {
        return;
    }
    oContentRef = oUpdateRef.getElementsByTagName("content")[0];
    oControlTreeRef = oUpdateRef.getElementsByTagName("controltree")[0];
    if (oContentRef && oControl) {
        var sHTML = UCF_PageUpdater.sGetCDATAContent(oContentRef)
          , oRootRef = oControl.oRootRef
          , oParentRef = oRootRef.parentNode;
        if (sUpdateMethod == "PARTIAL") {
            oControl.updateHTML(sHTML);
        } else {
            if (!UCF_UserAgent.bIsIE() && (oParentRef.childNodes.length == 1 || UCF_DomUtil.firstChild(oParentRef) == UCF_DomUtil.lastChild(oParentRef))) {
                oParentRef.innerHTML = sHTML;
            } else {
                var oTemp = document.createElement("div");
                oTemp.innerHTML = sHTML;
                var oFragment = document.createDocumentFragment();
                while (oTemp.firstChild) {
                    oFragment.appendChild(oTemp.firstChild);
                }
                oParentRef.replaceChild(oFragment, oRootRef);
            }
        }
    }
    if (oControlTreeRef) {
        if (!oClientControl) {
            this.oLS.oControlFactory.createClientControlTree(UCF_PageUpdater.sGetCDATAContent(oControlTreeRef), sId, this.bFullUpdate);
            oClientControl = this.oLS.oControlFactory.oGetClientControlById(sId)
        } else {
            if (sUpdateMethod == "PARTIAL") {
                if (oControl.updateControlTree) {
                    oControl.updateControlTree();
                } else {}
            } else {
                var bSuppress = oContentRef != null || this.bFullUpdate;
                this.updateControlTree(oControlTreeRef, sId, bSuppress);
            }
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
      , oContainer = this.oLS.oControlFactory.oGetControlById(sCId)
      , oContentRef = oUpdateRef.getElementsByTagName("content")[0]
      , oControlTreeRef = oUpdateRef.getElementsByTagName("controltree")[0]
      , oParentRef = oContainer.oDomRef
      , sHTML = UCF_PageUpdater.sGetCDATAContent(oContentRef);
    if (oContentRef) {
        var oDiv = document.createElement("div");
        oParentRef.appendChild(oDiv);
        oDiv.innerHTML = sHTML;
    }
    if (oControlTreeRef) {
        var oClientContainer = this.oLS.oControlFactory.oGetClientControlById(sCId);
        if (!oClientContainer) {}
        if (oClientContainer instanceof UCF_ClientContainer) {
            oContent = oClientContainer;
        } else {
            var oContent = oClientContainer.getContent();
            if (oContent && !oContent instanceof UCF_ClientContainer) {
                var oNewContainer = this.oLS.oControlFactory.oCreateClientControl("Container");
                oNewContainer.setTransientRendering(true);
                oNewContainer.addItem(oContent);
                oClientContainer.setContent(oNewContainer);
                oContent = oNewContainer;
            }
        }
        if (oContent && oContent.addItem) {
            var sControlTree = UCF_PageUpdater.sGetCDATAContent(oControlTreeRef);
            var oItemJson = (new Function("return " + sControlTree))();
            oNewItem = this.oLS.oControlFactory.oCreateClientControl(oItemJson);
            oContent.addItem(oNewItem, oContentRef != null);
        }
    }
}
;
UCF_PageUpdater.prototype.updateHtml = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , bInnerHTML = oUpdateRef.getAttribute("innerHTML") == 'true'
      , oContentRef = null
      , oControlTreeRef = null
      , oRootRef = UCF_DomUtil.$(sId);
    oContentRef = oUpdateRef.getElementsByTagName("content")[0];
    oControlTreeRef = oUpdateRef.getElementsByTagName("controltree")[0];
    var sHTML = UCF_PageUpdater.sGetCDATAContent(oContentRef);
    if (bInnerHTML) {
        oRootRef.innerHTML = sHTML;
    } else if (UCF_UserAgent.bIsIE()) {
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
    var oRenderManager = this.oLS.oGetRenderManager()
      , sId = oUpdateRef.getAttribute("id")
      , sXML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oRootRef = UCF_DomUtil.$(sId);
    oRenderManager.renderXMLStream(sXML, oRootRef);
}
;
UCF_PageUpdater.prototype.callScript = function(oUpdateRef) {
    var sScript = UCF_PageUpdater.sGetCDATAContent(oUpdateRef);
    var fScriptCall = new Function("oLS",sScript);
    fScriptCall.call(window, this.oLS.oGetInterface());
}
;
UCF_PageUpdater.prototype.updateAnimation = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , sHTML = UCF_PageUpdater.sGetCDATAContent(oUpdateRef)
      , oDomRef = UCF_DomUtil.$(sId);
    if (oDomRef && oDomRef.parentNode) {
        var oTemp = document.createElement("div");
        oTemp.innerHTML = sHTML;
        var oFragment = document.createDocumentFragment();
        while (oTemp.firstChild) {
            oFragment.appendChild(oTemp.firstChild);
        }
        oDomRef.parentNode.replaceChild(oFragment, oDomRef);
    }
}
;
UCF_PageUpdater.prototype.updateControlTree = function(oUpdateRef, sId, bHTMLUpdated) {
    var sControlTree = UCF_PageUpdater.sGetCDATAContent(oUpdateRef);
    if (sControlTree) {
        var oControlTree = (new Function("return " + sControlTree))();
        this.oLS.keepLocked(true);
        this.oLS.oControlFactory.updateClientControlTree(oControlTree, bHTMLUpdated);
        UCF_JsUtil.delayedCall(0, this.oLS, "keepLocked", [false]);
    }
}
;
UCF_PageUpdater.prototype.updateModel = function(oUpdateRef) {
    var sId = oUpdateRef.getAttribute("id")
      , oDataNodes = oUpdateRef.getElementsByTagName("data");
    var oModelControl = this.oLS.oControlFactory.oGetControlById(sId);
    if (oModelControl) {
        oModelControl.lock();
    } else {
        return;
    }
    for (var i = 0; i < oDataNodes.length; i++) {
        var oDataNode = oDataNodes[i]
          , bMerge = oDataNode.getAttribute("merge") === "true"
          , sPath = oDataNode.getAttribute("path")
          , sData = UCF_PageUpdater.sGetCDATAContent(oDataNode);
        if (sData) {
            var oData = (new Function("return " + sData))();
            if (oData !== null || oData != undefined) {
                if (oModelControl) {
                    if (sPath) {
                        oModelControl.setPathData(sPath, oData, bMerge);
                    } else {
                        oModelControl.setData(oData, bMerge);
                    }
                }
            }
        }
    }
    if (oModelControl) {
        oModelControl.unlock();
    } else {
        return;
    }
}
;
function UCF_Renderer(oRenderManager) {
    if (arguments.length == 0)
        return;
    UCF_Object.apply(this);
    this.oRenderManager = oRenderManager;
}
;UCF_Renderer.prototype = new UCF_Object();
UCF_Renderer.prototype.getJSONRenderTree = function(oControl, bForce) {
    if (oControl.onBeforeRender) {
        oControl.onBeforeRender();
        this.oRenderManager.addRenderedControl(oControl);
    }
    if (oControl.getDesignTimeMode()) {
        bForce = true;
    }
    if (oControl._serialized && !bForce) {
        return oControl._serialized;
    }
    var mMetadata = oControl.getMetadata()
      , mParameters = {};
    mParameters.Id = oControl.getId();
    mParameters.sClassName = oControl.sClassName;
    for (var n in mMetadata.properties) {
        mParameters[n] = oControl["get" + n]();
    }
    for (var n in mMetadata.aggregations) {
        var aAggregation = oControl["get" + n]();
        if (UCF_JsUtil.bIsArray(aAggregation)) {
            mParameters[n] = [];
            for (var i = 0; i < aAggregation.length; i++) {
                mParameters[n].push(this.getJSONRenderTree(aAggregation[i], bForce));
            }
        } else if (aAggregation) {
            mParameters[n] = this.getJSONRenderTree(aAggregation, bForce);
        } else {
            mParameters[n] = null;
        }
    }
    if (oControl.getDesignTimeMode()) {} else {
        for (var n in mMetadata.events) {
            if (!mParameters["Events"]) {
                mParameters["Events"] = {};
            }
            var mEvents = mParameters["Events"];
            var oConfig = oControl.getEventConfiguration(n);
            if (oConfig) {
                mEvents[n] = {};
                for (var m in oConfig.UcfParameters) {
                    mEvents[n][m] = oConfig.UcfParameters[m];
                }
                for (var m in oConfig.Parameters) {
                    mEvents[n][m] = oConfig.Parameters[m];
                }
            }
        }
    }
    mParameters._control = oControl;
    oControl._serialized = mParameters;
    return mParameters;
}
;
UCF_Renderer.prototype.render = function(oControl) {
    var mParameters = this.getJSONRenderTree(oControl);
    if (this.sRootFragment) {
        this["render" + this.sRootFragment](mParameters);
    }
}
;
function UCF_ErrorUtil() {}
;UCF_ErrorUtil.onImageError = function(oDomRef) {
    try {
        oDomRef.onerror = null;
        var sFallbackSrc = oDomRef.getAttribute("errorimgsrc");
        if (sFallbackSrc) {
            oDomRef.src = sFallbackSrc;
        } else {}
    } catch (oException) {}
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
function UCF_PendingRequest(oQueue) {
    UCF_EventProvider.apply(this);
    this.oQueue = oQueue;
    this.iType = UCF_PendingRequest.XMLHTTP;
    this.oForm = null;
    this.sActionUrl = "";
    this.sFocusIdForRequest = "";
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
UCF_PendingRequest.prototype.setFocusIdForRequest = function(sFocusIdForRequest) {
    this.sFocusIdForRequest = sFocusIdForRequest;
}
;
UCF_PendingRequest.prototype.sGetFocusIdForRequest = function() {
    return this.sFocusIdForRequest;
}
;
UCF_PendingRequest.prototype.bAsync = function() {
    return this.oGetQueue().bAsync;
}
;
UCF_PendingRequest.prototype.aPublicMethods = ["suspend", "resume", "send", "addSemanticEvent", "setFocusIdForRequest", "sGetFocusIdForRequest", "bAsync"];
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
        if (oItem == null)
            continue;
        sSepar = (bAnyData) ? oItem.E_SEPARATORS.EVENT : "";
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
    if (sString && sSubString) {
        if (bIgnoreCase) {
            sString = sString.toUpperCase();
            sSubString = sSubString.toUpperCase();
        }
        return sString.indexOf(sSubString) >= 0;
    }
    return false;
}
;
UCF_StringUtil.sStripWhiteSpace = function(sValue) {
    return sValue.replace(/\s/g, "");
}
;
UCF_StringUtil.sTrim = function(sValue) {
    return sValue.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "");
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
UCF_IFrameRequestObject.prototype.onreadystatechange = null;
UCF_IFrameRequestObject.prototype.status = "";
UCF_IFrameRequestObject.prototype.responseText = null;
UCF_IFrameRequestObject.prototype.responseXML = null;
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
    this.responseXML = null;
    this.readyState = 4;
    try {
        oXml = oWindow.document.getElementsByTagName("xml")[0];
        bSuccess = (oXml != null);
    } catch (e) {
        bSuccess = false;
    }
    if (bSuccess) {
        this.status = "200";
        if (UCF_UserAgent.bIsIE()) {
            this.responseText = oXml.innerHTML;
            this.responseXML = oXml.XMLDocument;
        } else {
            var oDocument = document.implementation.createDocument("", "", null)
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
function UCF_Rectangle(iTop, iLeft, iWidth, iHeight) {
    this.iTop = iTop;
    this.iLeft = iLeft;
    this.iWidth = iWidth;
    this.iHeight = iHeight;
}
UCF_Rectangle.prototype = new UCF_Object();
function UCF_ControlFactory(oLS) {
    UCF_Object.apply(this);
    this.oLS = oLS;
    this.mControls = {};
    this.mClientControls = {};
    this.aClientControlTree = null;
    this.bClientRenderingStarted = false;
    UCF_ControlFactory.M_NAMES = {};
    for (var n in UCF_ControlFactory.prototype.M_TYPES) {
        UCF_ControlFactory.M_NAMES[UCF_ControlFactory.prototype.M_TYPES[n]] = n;
    }
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
    InputAssistant: "UCF_InputAssistant",
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
    PGR: "UCF_Pager",
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
    ITSSP: "UCF_ItsSplitter",
    ITSSPC: "UCF_ItsSplitterCol",
    ITSSPR: "UCF_ItsSplitterRow",
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
    IHUBFRAMEPROTECT: "UCF_IHubFrameProtect",
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
    RTT: "UCF_RichTooltip",
    SS: "UCF_Slideshow",
    SR: "UCF_StarRater",
    DTC: "UCF_DTContainer",
    DTE: "UCF_DTElement",
    FLL: "UCF_FluidLayout",
    FLCL: "UCF_FluidLayoutCell",
    FLCO: "UCF_FluidLayoutContainer",
    LB: "UCF_LargeButton",
    AL: "UCF_AbapList",
    ALC: "UCF_AbapListCheckBox",
    ALT: "UCF_AbapListText",
    ALI: "UCF_AbapListImage",
    ALCO: "UCF_AbapListContainer",
    ALTA: "UCF_AbapListTabActor",
    CI: "UCF_ClientInspector",
    QV: "UCF_QuickView",
    HI: "UCF_HtmlIsland",
    DG: "UCF_DataGrid",
    DGS: "UCF_DataGridSegment",
    DGSC: "UCF_DataGridSegmentCell",
    MODELCONTROL: "UCF_ModelControl",
    CHART: "UCF_Chart",
    DECO: "UCF_Decorator",
    UI5CONT: "UCF_Ui5Container",
    RLI: "UCF_RasterLayoutItem",
    RL: "UCF_RasterLayout",
    STN: "UCF_Stickynote"
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
    if (sId == "" || sId == null || sCt == "" || sCt == null) {
        return null;
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
            continue;
        if (!bSearchSuperClasses) {
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
    if (sId == "" || sId == null || sCt == "" || sCt == null) {
        return null;
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
    this.oLS.fireControlCreate({
        Id: sId
    });
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
    oControl = new oClass(null,this.oLS,sId);
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
                UCF_ClassLoader.oGetClass("UCF_PlaceHolder");
                UCF_ClassLoader.oGetClass("UCF_AcfAdapter");
                UCF_PlaceHolder.createContent(sId, oXMPRef, this.oLS.oGetStaticAreaRef());
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
    if (oDomRef == null || oDomRef == window || oDomRef == document || oDomRef == document.body) {
        return false;
    }
    var sId = oDomRef.getAttribute("id")
      , sCt = oDomRef.getAttribute("ct");
    if (sId == "" || sId == null || sCt == "" || sCt == null) {
        return false;
    }
    return true;
}
;
UCF_ControlFactory.prototype.bControlNeedsInitialization = function(sId) {
    return (this.mControls[sId] && this.mControls[sId].initialize);
}
;
UCF_ControlFactory.prototype.registerControlType = function(sPrefix, sCT, sType) {
    var sKey = sPrefix + sCT
      , sValue = sPrefix + sType;
    if (this.M_TYPES[sKey]) {
        return;
    }
    this.M_TYPES[sKey] = sValue;
}
;
UCF_ControlFactory.prototype.createClientControlTree = function(sControlTree, sId, bSuppress) {
    if (!this.aClientControlTree || !this.mClientControls[sId]) {
        if (!sControlTree) {
            var oDomRef = document.getElementById(sId + "-controltree");
            if (!oDomRef) {
                return;
            } else {
                sControlTree = UCF_StringUtil.sTrim(oDomRef.innerHTML);
            }
        }
        if (!sControlTree)
            return;
        var aControlTree = (new Function("return " + sControlTree))();
        if (!aControlTree)
            return;
        if (!UCF_JsUtil.bIsArray(aControlTree)) {
            aControlTree = [aControlTree];
        }
        if (!this.aClientControlTree) {
            this.aClientControlTree = [];
        }
        for (var i = 0; i < aControlTree.length; i++) {
            this.updateClientControlTree(aControlTree[i], true, bSuppress);
        }
        if (this.oControlModel) {
            this.oControlModel.setData(this.mClientControls);
            this.updateControlTreeBindings(null, false);
        }
        if (UCF_System.bClientDebug && this.aClientControlTree) {
            this.testClientRendering();
        }
    }
}
;
UCF_ControlFactory.prototype.startClientRendering = function() {
    this.bClientRenderingStarted = true;
}
;
UCF_ControlFactory.prototype.endClientRendering = function() {
    this.bClientRenderingStarted = false;
}
;
UCF_ControlFactory.prototype.testClientRendering = function(oControl) {
    this.oLS.oGetRenderManager();
    if (UCF_ControlFactory.bTestMode) {
        var that = this;
        var mOldHTML = {};
        setTimeout(function() {
            for (var i = 0; i < that.aClientControlTree.length; i++) {
                var sId = that.aClientControlTree[i]._root.getId();
                var oControl = that.oGetControlById(sId);
                if (oControl && oControl.oRootRef) {
                    mOldHTML[sId] = oControl.oRootRef.parentNode.innerHTML;
                }
            }
        }, 1000);
        setTimeout(function() {
            for (var i = 0; i < that.aClientControlTree.length; i++) {
                oTree = that.aClientControlTree[i];
                oTree._root.bInvalidated = true;
                oTree._root.render();
            }
        }, 3000);
        setTimeout(function() {
            for (var i = 0; i < that.aClientControlTree.length; i++) {
                oTree = that.aClientControlTree[i];
                oTree._root.bInvalidated = true;
                oTree._root.render();
            }
        }, 4000);
    }
}
;
UCF_ControlFactory.prototype.purgeClientControls = function(oControl) {
    var mAggregations = oControl.getMetadata().aggregations;
    for (var n in mAggregations) {
        oControl.clearAggregation(n);
    }
}
;
UCF_ControlFactory.prototype.deleteControlTrees = function() {
    if (!this.aClientControlTree)
        return;
    for (var i = 0; i < this.aClientControlTree.length; i++) {
        this.deleteControlTree(this.aClientControlTree[i]);
    }
    this.aClientControlTree = null;
}
;
UCF_ControlFactory.prototype.deleteControlTree = function(oControlTree) {
    for (var n in oControlTree) {
        var oFirst = oControlTree[n];
        if (oFirst.destroy) {
            oFirst.destroy(true);
        }
    }
}
;
UCF_ControlFactory.prototype.updateClientControlTree = function(oControlTree, bSuppressRerendering, bSuppressFullUpdate) {
    this.createClientControlTree();
    for (var n in oControlTree) {
        var oFirst = oControlTree[n]
          , sClassName = n;
        if (oFirst) {
            var sId = oFirst.Id
              , oControl = this.mClientControls[sId];
            if (oControl) {
                var oParent = oControl.getParent()
                  , sAggregationName = oControl.getAggregationName();
                if (oParent && sAggregationName) {
                    this.purgeClientControls(oControl);
                    var oNewControl = UCF_ClientControl.createInstance(sClassName, this.oLS, oFirst.Id, oFirst);
                    oParent.replaceAggregation(sAggregationName, oControl, oNewControl, bSuppressRerendering);
                    if (!bSuppressRerendering) {
                        oParent.invalidate();
                    }
                } else if (oParent == null) {
                    for (var i = 0; i < this.aClientControlTree.length; i++) {
                        if (this.aClientControlTree[i]._root == oControl) {
                            oControl.destroy(true);
                            var oNewControl = UCF_ClientControl.createInstance(sClassName, this.oLS, oFirst.Id, oFirst);
                            this.aClientControlTree[i]._root = oNewControl;
                            if (!bSuppressRerendering) {
                                oNewControl.invalidate();
                            }
                            break;
                        }
                    }
                }
            } else {
                if (!this.aClientControlTree) {
                    this.aClientControlTree = [];
                } else {
                    for (var i = 0; i < this.aClientControlTree.length; i++) {
                        var oTreeNode = this.aClientControlTree[i]
                          , sRootId = oTreeNode._root.getId()
                          , fFindId = function(o, sId) {
                            if (o.Id == sId)
                                return true;
                            for (var n in o) {
                                if (UCF_JsUtil.bIsArray(o[n])) {
                                    for (var i = 0; i < o[n].length; i++) {
                                        if (fFindId(o[n][i], sId)) {
                                            return true;
                                        }
                                    }
                                } else if (typeof (o[n]) == "object") {
                                    if (fFindId(o[n], sId)) {
                                        return true;
                                    }
                                }
                            }
                        };
                        if (fFindId(oControlTree, sRootId)) {
                            this.aClientControlTree[i]._root.destroy();
                            this.aClientControlTree[i] = null;
                        }
                    }
                    var aControlTree = [];
                    for (var i = 0; i < this.aClientControlTree.length; i++) {
                        if (this.aClientControlTree[i]) {
                            aControlTree.push(this.aClientControlTree[i]);
                        }
                    }
                    this.aClientControlTree = aControlTree;
                }
                var oNewControl = UCF_ClientControl.createInstance(sClassName, this.oLS, oFirst.Id, oFirst);
                oControlTree._root = oNewControl;
                this.aClientControlTree.push(oControlTree);
                if (!bSuppressFullUpdate) {
                    oNewControl.invalidate();
                } else {
                    oNewControl.resetInvalidated();
                }
                break;
            }
            if (this.oControlModel) {
                this.oControlModel.setData(this.mClientControls);
                this.updateControlTreeBindings(null, false);
            }
        }
    }
}
;
UCF_ControlFactory.prototype.createClientControlModel = function() {
    if (!this.oControlModel) {
        this.oControlModel = new (UCF_ClassLoader.oGetClass("UCF_ControlModel"))();
        this.oLS.oGetPageInternal().registerModel("$", oControlModel);
    }
    return this.oControlModel;
}
;
UCF_ControlFactory.prototype.updateControlTreeBindings = function(sId, bRecreate) {
    if (this.aClientControlTree) {
        for (var i = 0; i < this.aClientControlTree.length; i++) {
            if (this.aClientControlTree[i] && this.aClientControlTree[i]["_root"]) {
                this.aClientControlTree[i]["_root"].updateBindings(true, sId, bRecreate);
            }
        }
    }
}
;
UCF_ControlFactory.prototype.oGetClientControlById = function(sId) {
    if (this.mClientControls[sId]) {
        return this.mClientControls[sId];
    }
    this.createClientControlTree();
    if (this.mClientControls[sId]) {
        return this.mClientControls[sId];
    }
    return this.mClientControls[sId];
}
;
UCF_ControlFactory.prototype.oCreateClientControl = function(sClassName, sId, oJson) {
    if (typeof (sClassName) == "object") {
        for (var n in sClassName) {
            oJson = sClassName[n];
            sId = oJson.Id;
            sClassName = n;
            break;
        }
    }
    if (sId && this.mClientControls[sId]) {
        this.mClientControls[sId].destroy()
    }
    this.createClientControlTree();
    var oClientControl = UCF_ClientControl.createInstance(sClassName, this.oLS, sId, oJson);
    return oClientControl;
}
;
function UCF_KeyboardHelper() {}
;UCF_KeyboardHelper.bAccessKeyHighlight = false;
UCF_KeyboardHelper.oRootRef = null;
UCF_KeyboardHelper.sGetHotkeyText = function(oLS, sHotkey) {
    if (!sHotkey || sHotkey == "")
        return "";
    index = sHotkey.lastIndexOf("_");
    var compareText = "";
    if (index < 0)
        compareText = sHotkey;
    else if (index + 1 < sHotkey.length) {
        compareText = sHotkey.substr(0, index);
        sHotkey = sHotkey.substr(index + 1);
    }
    switch (compareText) {
    case "NONE":
        sHotkey = "";
        break;
    case "CTRL":
        sHotkey = this.sGetText(oLS, "MODIFIER_KEY_CTRL", sHotkey);
        break;
    case "CTRL_SHIFT":
        sHotkey = this.sGetText(oLS, "MODIFIER_KEY_CTRL_SHIFT", sHotkey);
        break;
    case "ALT":
        sHotkey = this.sGetText(oLS, "MODIFIER_KEY_ALT", sHotkey);
        break;
    case "ALT_SHIFT":
        sHotkey = this.sGetText(oLS, "MODIFIER_KEY_ALT_SHIFT", sHotkey);
        break;
    case "ALT_ARROW":
        if (sHotkey == "LEFT")
            sHotkey = this.sGetText(oLS, "MODIFIER_KEY_ALT", this.sGetText(oLS, "NAV_KEY_CURSOR_LEFT"));
        else if (sHotkey == "UP")
            sHotkey = this.sGetText(oLS, "MODIFIER_KEY_ALT", this.sGetText(oLS, "NAV_KEY_CURSOR_UP"));
        else if (sHotkey == "RIGHT")
            sHotkey = this.sGetText(oLS, "MODIFIER_KEY_ALT", this.sGetText(oLS, "NAV_KEY_CURSOR_RIGHT"));
        else if (sHotkey == "DOWN")
            sHotkey = this.sGetText(oLS, "MODIFIER_KEY_ALT", this.sGetText(oLS, "NAV_KEY_CURSOR_DOWN"));
        break;
    case "SHIFT":
        sHotkey = this.sGetText(oLS, "MODIFIER_KEY_SHIFT", sHotkey);
        break;
    case "CTRL_ALT_SHIFT":
        sHotkey = this.sGetText(oLS, "MODIFIER_KEY_CTRL_ALT_SHIFT", sHotkey);
        break;
    case "ESCAPE":
        sHotkey = this.sGetText(oLS, "ESCAPE_KEY", sHotkey);
        break;
    case "DELETE":
        sHotkey = this.sGetText(oLS, "DELETE_KEY", sHotkey);
        break;
    case "INSERT":
        sHotkey = this.sGetText(oLS, "INSERT_KEY", sHotkey);
        break;
    }
    if (sHotkey == "")
        return "";
    else
        return "(" + sHotkey + ")";
}
;
UCF_KeyboardHelper.sGetText = function(oLS, sTextKey, aValues) {
    var sText = oLS.sGetText("SAPUR_" + sTextKey);
    if (typeof (aValues) != "undefined") {
        if (typeof (aValues) == "string") {
            aValues = [aValues];
        }
        for (var i = 0; i < aValues.length; i++) {
            sText = sText.replace("{" + i + "}", aValues[i]);
        }
    }
    if (!sText)
        sText = sTextKey;
    return sText;
}
;
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
    return (sHotkey + UCF_KeyNames[iKey]);
}
;
UCF_KeyboardHelper.bIsValidHotkey = function(iKey, bCtrl, bAlt, bShift) {
    var sHotkey = this.sHotkeyValue(iKey, bCtrl, bAlt, bShift);
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
function UCF_JsUtil() {}
;UCF_JsUtil.mDelayedCalls = {};
UCF_JsUtil.mIntervalCalls = {};
UCF_JsUtil.iIdCounter = 0;
UCF_JsUtil.MODIFIER = {
    NONE: 0,
    SHIFT: 1,
    CTRL: 2,
    ALT: 4,
    ALL: 100,
    NONE_OR_SHIFT: 101,
    NONE_OR_CTRL: 102,
    NONE_OR_SHIFT_XOR_CTRL: 103
};
UCF_JsUtil.sSerialize = function(oObject) {
    if (!oObject)
        return "";
    var aBuffer = [];
    this.serializeToBuffer(oObject, aBuffer);
    return aBuffer.join("");
}
;
UCF_JsUtil.serializeToBuffer = function(oObject, aBuffer) {
    if (oObject == null)
        return null;
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
                    continue;
                if (!bFirst)
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
        oObject = null;
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
UCF_JsUtil.clearDelayedCallsOfObject = function(oObject) {
    var mDelayedCalls = this.mDelayedCalls;
    for (var sDelayedCallId in mDelayedCalls) {
        if (mDelayedCalls[sDelayedCallId].oObject == oObject)
            this.clearDelayedCall(sDelayedCallId);
    }
}
;
UCF_JsUtil.callDelayedCallRedirect = function(sDelayedCallId) {
    var oDelayedCall = this.mDelayedCalls[sDelayedCallId];
    if (oDelayedCall) {
        oDelayedCall.oObject[oDelayedCall.sMethodName].apply(oDelayedCall.oObject, oDelayedCall.aParameters);
        UCF_JsUtil.clearDelayedCall(sDelayedCallId);
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
    if (oCommon.sMassNotificationFilterTimerId)
        UCF_JsUtil.clearDelayedCall(oCommon.sMassNotificationFilterTimerId);
    oCommon.sMassNotificationFilterTimerId = UCF_JsUtil.delayedCall(iDelay, UCF_JsUtil, "timedMassNotificationFilter", [oCommon, oCallInstance, sCallMethod, aCallParameters]);
}
;
UCF_JsUtil.resetMassNotificationFilter = function(oCommon) {
    if (oCommon) {
        if (oCommon.sMassNotificationFilterTimerId)
            UCF_JsUtil.clearDelayedCall(oCommon.sMassNotificationFilterTimerId);
        if ("sMassNotificationFilterTimerId"in oCommon)
            delete oCommon.sMassNotificationFilterTimerId;
    }
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
    };
    if (oFrameRef.readyState) {
        oFrameRef.onreadystatechange = function() {
            if (oFrameRef.readyState == "interactive") {
                oFrameRef.onreadystatechange = null;
                setTimeout(removeFunction, 200);
            }
        }
        ;
    } else {
        oFrameRef.onload = function() {
            oFrameRef.onload = null;
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
                req.send(null);
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
    return (url.indexOf(urlTest) == 0);
}
;
UCF_JsUtil.oClone = function(obj, bRecursive) {
    if (obj == null || typeof (obj) != 'object')
        return obj;
    var oClone = new Object();
    try {
        if (obj.constructor)
            oClone = new obj.constructor();
    } catch (e) {}
    ;for (var key in obj) {
        try {
            var oCopy = null;
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
    var oXMLDocument = null;
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
UCF_JsUtil.sSerializeXMLDocument = function(oXMLDocument) {
    var sXMLString = "";
    if (window.ActiveXObject) {
        sXMLString = oXMLDocument.xml;
    }
    if (window.XMLSerializer) {
        var serializer = new XMLSerializer();
        sXMLString = serializer.serializeToString(oXMLDocument);
    }
    return sXMLString;
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
    var aParameters = sParameters.split("&"), mParameters = {}, aParameter, sName = "", sValue = "";
    for (var i = 0; i < aParameters.length; i++) {
        aParameter = aParameters[i].split("=");
        sName = decodeURIComponent(aParameter[0]);
        sValue = (aParameter.length == 2 ? decodeURIComponent(aParameter[1]) : "");
        if (mParameters[sName] == null) {
            mParameters[sName] = sValue;
        } else {
            if (typeof mParameters[sName] == "string") {
                mParameters[sName] = [mParameters[sName]];
            }
            mParameters[sName].push(sValue);
        }
    }
    return mParameters;
}
;
UCF_JsUtil.sExtractFunctionName = function(oFunction) {
    var sText = oFunction.toString()
      , sName = sText.substr(9, sText.indexOf("(") - 9);
    return sName;
}
;
UCF_JsUtil.sTrim = function(str, chars) {
    return UCF_JsUtil.ltrim(UCF_JsUtil.rtrim(str, chars), chars);
}
;
UCF_JsUtil.ltrim = function(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+","g"), "");
}
;
UCF_JsUtil.rtrim = function(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$","g"), "");
}
;
UCF_JsUtil.bIsEmpty = function(oObject) {
    if (typeof (oObject) == "object") {
        for (var oP in oObject) {
            return false;
        }
        return true;
    }
}
;
UCF_JsUtil.aIntersection = function(aArray1, aArray2) {
    var aIntersection = [];
    for (var x = 0, len1 = aArray1.length; x < len1; x++) {
        var oItem1 = aArray1[x];
        for (var y = 0, len2 = aArray2.length; y < len2; y++) {
            var oItem2 = aArray2[y];
            if (oItem1 === oItem2)
                aIntersection.push(oItem1);
        }
    }
    return aIntersection;
}
;
UCF_JsUtil.bIsArray = function(a) {
    return a != null && ((typeof (a) == "object" && typeof (a.length) == "number") || typeof (a) == "array");
}
;
UCF_JsUtil.bEqual = function(a, b, maxDepth, depth) {
    if (!depth)
        depth = 0;
    if (!maxDepth)
        maxDepth = 10;
    if (depth > maxDepth)
        return false;
    if (a === b)
        return true;
    if (UCF_JsUtil.bIsArray(a) && UCF_JsUtil.bIsArray(b)) {
        if (a.length != b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!UCF_JsUtil.bEqual(a[i], b[i], maxDepth, depth + 1)) {
                return false;
            }
        }
        return true;
    }
    if (typeof a == "object" && typeof b == "object") {
        if (!a || !b) {
            return false;
        }
        if (a.constructor != b.constructor) {
            return false;
        }
        if (a instanceof Date) {
            return a.valueOf() == b.valueOf();
        }
        for (var i in a) {
            if (!UCF_JsUtil.bEqual(a[i], b[i], maxDepth, depth + 1)) {
                return false;
            }
        }
        for (var i in b) {
            if (a[i] === undefined) {
                return false;
            }
        }
        return true;
    }
    return false;
}
;
UCF_JsUtil.bIsPlainObject = function(obj) {
    var getType = function(obj) {
        return obj == null ? String(obj) : "object";
    };
    if (!obj || getType(obj) !== "object") {
        return false;
    }
    try {
        if (obj.constructor && !Object.prototype.hasOwnProperty.call(obj, "constructor") && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }
    } catch (e) {
        return false;
    }
    var key;
    for (key in obj) {}
    return key === undefined || Object.prototype.hasOwnProperty.call(obj, key);
}
;
UCF_JsUtil.oMergeObjects = function(oOriginal, oMerge) {
    if (UCF_JsUtil.bIsPlainObject(oMerge)) {
        for (var n in oMerge) {
            if (!oOriginal[n] || (!UCF_JsUtil.bIsPlainObject(oMerge[n]) && !UCF_JsUtil.bIsArray(oMerge[n]))) {
                if (oMerge[n] === null) {
                    delete oOriginal[n];
                } else {
                    oOriginal[n] = oMerge[n];
                }
            } else {
                if (!UCF_JsUtil.bIsPlainObject(oMerge[n]) && !UCF_JsUtil.bIsArray(oMerge[n])) {
                    if (oMerge[n] === null) {
                        delete oOriginal[n];
                    } else {
                        oOriginal[n] = oMerge[n];
                    }
                } else {
                    oOriginal[n] = UCF_JsUtil.oMergeObjects(oOriginal[n], oMerge[n]);
                }
            }
        }
    } else if (UCF_JsUtil.bIsArray(oMerge)) {
        var i;
        for (i = 0; i < oOriginal.length; i++) {
            if (oMerge[i]) {
                oOriginal[i] = UCF_JsUtil.oMergeObjects(oOriginal[i], oMerge[i]);
            } else if (oMerge[i] === null) {
                oOriginal[i] = null;
            }
        }
        for (; i < oMerge.length; i++) {
            oOriginal[i] = oMerge[i];
        }
        i = 0;
        while (true) {
            if (oOriginal[i] === null) {
                oOriginal.splice(i, 1);
                if (i == oOriginal.length)
                    break;
                continue;
            }
            i++;
            if (i == oOriginal.length)
                break;
        }
    }
    return oOriginal;
}
;
UCF_JsUtil.cloneJSON = function(oData) {
    return UCF_JsUtil.oParseJSON(UCF_JsUtil.sStringfyJSON(oData))
}
;
UCF_JsUtil.oParseJSON = function(sData) {
    if (typeof sData !== "string" || !sData) {
        return null;
    }
    sData = UCF_StringUtil.sTrim(sData);
    if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(sData);
    }
    var rvalidchars = /^[\],:{}\s]*$/
      , rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
      , rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
      , rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
    if (rvalidchars.test(sData.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
        return (new Function("return " + sData))();
    }
    return null
}
;
UCF_JsUtil.sStringifyJSON = function(oData, sFormat) {
    if (typeof oData !== "object" || !oData) {
        return "";
    }
    var format = null;
    if (sFormat)
        format = function(sJsonString, bHTML) {
            var aResult = []
              , s = sJsonString
              , iPos = 0
              , iLength = s.length
              , sTab = bHTML ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "\t"
              , sNewLine = bHTML ? "<br>" : "\n"
              , bInString = false;
            for (var i = 0; i < iLength; i++) {
                var sChar = s.charAt(i);
                if (sChar == "\"" && s.charAt(i - 1) != "\\") {
                    bInString = !bInString;
                    aResult.push(sChar);
                    continue;
                }
                if (bInString) {
                    aResult.push(sChar);
                    continue;
                }
                if (sChar == "}" || sChar == "]") {
                    aResult.push(sNewLine);
                    iPos = iPos - 1;
                    aResult.push((new Array(iPos)).join(sTab));
                }
                aResult.push(sChar);
                if (sChar == "{" || sChar == "[" || sChar == ",") {
                    aResult.push(sNewLine);
                    if (sChar == "{" || sChar == "[") {
                        iPos = iPos + 1;
                    }
                    aResult.push((new Array(iPos)).join(sTab));
                }
            }
            return aResult.join("");
        }
        ;
    if (window.JSON && window.JSON.stringify) {
        var sString = window.JSON.stringify(oData, null);
        if (sFormat) {
            sString = format(sString, sFormat === "HTML");
        }
        return sString;
    }
    var serialize = function(oObject, aBuffer) {
        if (oObject == null)
            return null;
        switch (typeof (oObject)) {
        case "object":
            if (oObject instanceof Array) {
                aBuffer.push("[");
                for (var i = 0; i < oObject.length; i++) {
                    if (i > 0)
                        aBuffer.push(", ");
                    serialize(oObject[i], aBuffer);
                }
                aBuffer.push("]");
            } else {
                aBuffer.push("{");
                var bFirst = true;
                for (var i in oObject) {
                    if (typeof (oObject[i]) == "undefined" || typeof (oObject[i]) == "function")
                        continue;
                    if (!bFirst)
                        aBuffer.push(",");
                    else
                        bFirst = false;
                    serialize(i, aBuffer);
                    aBuffer.push(":");
                    serialize(oObject[i], aBuffer);
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
      , aBuffer = [];
    serialize(oData, aBuffer);
    var sString = aBuffer.join("");
    if (format) {
        sString = format(sString, sFormat);
    }
    return sString;
}
;
UCF_JsUtil.iObjectIndexInArray = function(o, a) {
    var len;
    var i = 0;
    if (a) {
        if (Array.prototype.indexOf) {
            return Array.prototype.indexOf.call(a, o, i);
        }
        len = a.length;
        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
        for (; i < len; i++) {
            if (i in a && a[i] === o) {
                return i;
            }
        }
    }
    return -1;
}
;
UCF_JsUtil.each = function(object, callback, args) {
    if (!object)
        return;
    var name, i = 0, length = object.length, isObj = length === undefined || typeof (object) == "function";
    if (args) {
        if (isObj) {
            for (name in object) {
                if (callback.apply(object[name], args) === false) {
                    break;
                }
            }
        } else {
            for (; i < length; ) {
                if (callback.apply(object[i++], args) === false) {
                    break;
                }
            }
        }
    } else {
        if (isObj) {
            for (name in object) {
                if (callback.call(object[name], name, object[name]) === false) {
                    break;
                }
            }
        } else {
            for (; i < length; ) {
                if (callback.call(object[i], i, object[i++]) === false) {
                    break;
                }
            }
        }
    }
    return object;
}
;
UCF_JsUtil.bIsEmptyObject = function(o) {
    for (var name in o) {
        return false;
    }
    return true;
}
;
UCF_JsUtil.map = function(elems, callback, arg) {
    var value, key, ret = [], i = 0, length = elems.length, isArray = length !== undefined && typeof length === "number" && ((length > 0 && elems[0] && elems[length - 1]) || length === 0 || UCF_JsUtil.bIsArray(elems));
    if (isArray) {
        for (; i < length; i++) {
            value = callback(elems[i], i, arg);
            if (value != null) {
                ret[ret.length] = value;
            }
        }
    } else {
        for (key in elems) {
            value = callback(elems[key], key, arg);
            if (value != null) {
                ret[ret.length] = value;
            }
        }
    }
    return ret.concat.apply([], ret);
}
;
UCF_JsUtil.bIsFunction = function(oFunc) {
    return (oFunc && (typeof (oFunc) == "function" || (typeof (oFunc) == "object" && oFunc.toString && oFunc.toString().indexOf("function") == 0)));
}
;
UCF_JsUtil.arrayFromObject = function(oObject) {
    var aArray = [];
    for (var n in oObject) {
        var i = parseInt(n);
        if (!isNaN(i)) {
            aArray[i] = oObject[n];
        }
    }
    return aArray;
}
;
UCF_JsUtil.eActiveComponents = {
    WORD: "word",
    EXCEL: "excel",
    FLASH: "flash",
    ACROBAT: "acrobat",
    SILVERLIGHT: "silverlight",
    JAVA: "java(tm)"
};
UCF_JsUtil.mActiveComponentToActiveXMap = {
    "word": "Word.Application",
    "excel": "Excel.Application",
    "flash": "ShockwaveFlash.ShockwaveFlash.1",
    "acrobat": "AcroPDF.PDF",
    "silverlight": "AgControl.AgControl",
    "java(tm)": "JavaWebStart.isInstalled"
};
UCF_JsUtil.bIsActiveComponentEnabled = function(eActiveComponentKey) {
    if (window.ActiveXObject) {
        try {
            new ActiveXObject(this.mActiveComponentToActiveXMap[eActiveComponentKey]);
            return true;
        } catch (e) {}
        ;
    } else {
        for (var i = 0; navigator.plugins[i]; i++) {
            if (navigator.plugins[i].name.toLowerCase().indexOf(eActiveComponentKey) > -1)
                return true;
        }
    }
    return false;
}
;
function UCF_Cookies() {}
UCF_Cookies.setCookie = function(sName, sValue, iHours) {
    var oDate = new Date();
    oDate.setTime(oDate.getTime() + (iHours * 60 * 60 * 1000));
    var sExpires = oDate.toGMTString();
    document.cookie = sName + "=" + sValue + "; expires=" + sExpires + "; path=/";
}
;
UCF_Cookies.getCookie = function(sName) {
    var sNameEQ = sName + "=";
    var aCookies = document.cookie.split(';');
    for (var i = 0; i < aCookies.length; i++) {
        var sCookie = aCookies[i];
        while (sCookie.charAt(0) == ' ')
            sCookie = sCookie.substr(1);
        if (sCookie.indexOf(sNameEQ) == 0)
            return sCookie.substr(sNameEQ.length);
    }
    return null;
}
;
UCF_Cookies.saveObject = function(sName, oObj, iHours) {
    var sObj = UCF_JsUtil.sSerialize(oObj);
    this.setCookie(sName, sObj, iHours);
}
;
UCF_Cookies.loadObject = function(name) {
    var sObj = this.getCookie(name)
      , oObj = UCF_JsUtil.oDeserialize(sObj);
    return oObj;
}
;
function UCF_EventHandler(oLS) {
    UCF_EventProvider.apply(this);
    this.oLS = oLS;
    this.oLS.attachEvent(this.oLS.E_EVENTS.SemanticEvent, this, "onSemanticEvent");
    this.oQueue = new (UCF_ClassLoader.oGetClass("UCF_EventQueue"))(this.oLS);
    this.mFormQueues = {};
    this.oPartialQueue = new (UCF_ClassLoader.oGetClass("UCF_EventQueue"))(this.oLS);
    this.bPartialMode = false;
    this.bPageQueueEnabled = true;
    this.sPageQueueSubstitute = "";
    this.oWEQueue = new (UCF_ClassLoader.oGetClass("UCF_WaitingEventQueue"))();
    this.oTimer = new (UCF_ClassLoader.oGetClass("UCF_EventTimer"))();
    var oPage = oLS.oGetPageInternal();
    if (oPage && !oPage.bHasEventQueue) {
        var sFormId = oPage.sFormId;
        if (sFormId) {
            this.mFormQueues[sFormId] = this.oQueue;
            this.bPageQueueEnabled = false;
            this.sPageQueueSubstitute = sFormId;
        } else {}
    }
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
UCF_EventHandler.prototype.E_TRANSPORT_METHOD = {
    FULL: "full",
    PARTIAL: "partial"
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
    return (iAction == this.E_ACTION.SUBMIT || iAction == this.E_ACTION.SUBMITASYNC);
}
;
UCF_EventHandler.prototype.bActionENQUEUABLE = function(iAction) {
    return (iAction == this.E_ACTION.ENQUEUE || iAction == this.E_ACTION.SUBMIT || iAction == this.E_ACTION.SUBMITASYNC);
}
;
UCF_EventHandler.prototype.bCardinalityENQUEUABLE = function(iCardinality) {
    return (iCardinality == this.E_CARDINALITY.SINGLE || iCardinality == this.E_CARDINALITY.MULTIPLE);
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
      , oQueue = this.mFormQueues[oFormId];
    if (oQueue) {
        oQueue.reset();
        delete this.mFormQueues[oFormId];
    }
}
;
UCF_EventHandler.prototype.setPendingRequestHandler = function(oPendingRequestHandlerObject, sPendingRequestHandlerFunction) {
    this.oPendingRequestHandlerObject = oPendingRequestHandlerObject;
    this.sPendingRequestHandlerFunction = sPendingRequestHandlerFunction;
}
;
UCF_EventHandler.prototype.sendFormRequest = function(oForm, oQueue, sFocusIdForRequest) {
    var oPendingRequest = new (UCF_ClassLoader.oGetClass("UCF_PendingRequest"))(oQueue);
    oPendingRequest.setForm(oForm);
    if (sFocusIdForRequest)
        oPendingRequest.setFocusIdForRequest(sFocusIdForRequest);
    this.processPendingRequest(oPendingRequest);
}
;
UCF_EventHandler.prototype.sendXmlHttpRequest = function(sActionUrl, oForm, oQueue, bSyncExecution, sFocusIdForRequest) {
    var oPendingRequest = new (UCF_ClassLoader.oGetClass("UCF_PendingRequest"))(oQueue);
    if (oForm) {
        oPendingRequest.setForm(oForm);
    }
    oPendingRequest.setActionUrl(sActionUrl);
    oPendingRequest.setSyncExecution(bSyncExecution);
    if (sFocusIdForRequest)
        oPendingRequest.setFocusIdForRequest(sFocusIdForRequest);
    this.processPendingRequest(oPendingRequest);
    this.bPartialMode = false;
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
    this.oLS.fireBeforeRequest();
    var oQueue = oPendingRequest.oGetQueue()
      , iType = oPendingRequest.iGetType()
      , oForm = oPendingRequest.oGetForm()
      , sHash = (document.location.hash) ? document.location.hash : "";
    if (oForm) {
        this.oWEQueue.setProcessingLock(false);
        var sFocusedId = oPendingRequest.sGetFocusIdForRequest();
        if (sFocusedId == "")
            sFocusedId = this.oLS.sGetFocusedElementId();
        if (!oForm.bPageForm || oForm.bHasEventQueue) {
            oForm.fireRequest(oForm.sId, oQueue.bAsync, sFocusedId, sHash, this.oLS.bHasDomChanged(), this.oLS.bIsDirty());
        } else {
            var oPage = this.oLS.oGetPageInternal();
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
        var mRequestParameters = null;
        if (oForm != null) {
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
    this.oLS.fireAfterRequest();
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
    this.oLS.fireAfterResponse();
    if (oResponse.bSuccess && !oResponse.oParseError) {
        if (oResponse.oJson) {} else {
            this.oLS.oPageUpdater.processUpdateDocument(oResponse.oDocument);
        }
        this.oWEQueue.setProcessingLock(false);
        var bCcontainsSyncSubmit = this.refireWaitingEvents();
        if (!bCcontainsSyncSubmit)
            this.oLS.unlock();
    } else {
        if (oResponse.oParseError) {
            var oParseError = oResponse.oParseError
              , sErrorText = "Reason: " + oParseError.reason + "\n" + "Location: " + oParseError.url + "\n" + "Source: " + oParseError.srcText + "\n" + "Line: " + oParseError.line + "\n" + "Column: " + oParseError.linepos;
        }
        this.oLS.destroy(oResponse.sText, oResponse.sStatusCode);
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
        return ("(" + iSrc + "):UNKNOWN");
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
      , eTransportMethod = this.E_TRANSPORT_METHOD.FULL
      , sActionUrl = null
      , sPrepareScript = ""
      , eDelay = this.E_DELAY.NONE
      , bDelay = false
      , bSyncExecution = false
      , sClientListener = "";
    var ucfParam = oSemanticEvent.mGetUcfParameters();
    if (ucfParam != null) {
        sPrepareScript = ucfParam[this.E_KEY.PREPARESCRIPT] || sPrepareScript;
        if (sPrepareScript != "") {
            var func = new Function("oSemanticEvent","oLS",sPrepareScript);
            var bOk = func(oSemanticEvent.oGetInterface(), this.oLS.oGetInterface());
            if (bOk === false)
                return;
        }
        sClientListener = ucfParam[this.E_KEY.CLIENTLISTENER] || sClientListener;
        eClientAction = ucfParam[this.E_KEY.ACTION] || eClientAction;
        eEnqueueCardinality = ucfParam[this.E_KEY.CARDINALITY] || eEnqueueCardinality;
        eResponseData = ucfParam[this.E_KEY.RESPONSE] || eResponseData;
        sActionUrl = ucfParam[this.E_KEY.ACTIONURL] || sActionUrl;
        eTransportMethod = ucfParam[this.E_KEY.TRANSPORT] || eTransportMethod;
        eDelay = ucfParam[this.E_KEY.DELAY] || eDelay;
        bDelay = (eDelay == this.E_DELAY.FULL);
        bSyncExecution = ucfParam[this.E_KEY.SYNCEXECUTION];
        var sId = "";
        if ((sId = oSemanticEvent.mParameters.Id) && typeof (sActionUrl) == "string") {
            if (this.oLS.oControlFactory.oGetClientControlById(sId)) {
                var sParam = (sActionUrl.indexOf("?") > 0 ? "&" : "?") + "ControlTree=true";
                sActionUrl = sActionUrl + sParam;
            }
        }
    }
    if (eTransportMethod == this.E_TRANSPORT_METHOD.PARTIAL) {
        if (!this.bActionSUBMITABLE(eClientAction) || eEnqueueCardinality != this.E_CARDINALITY.MULTIPLE || eResponseData != this.E_RESPONSE_DATA.DELTA) {
            eTransportMethod = this.E_TRANSPORT_METHOD.FULL;
            oSemanticEvent.setTransportMethod(this.E_TRANSPORT_METHOD.FULL);
            var sTraceInfo = oSemanticEvent.sGetControl() + "::" + oSemanticEvent.sGetName() + "::" + oSemanticEvent.mGetParameters()["Id"];
            sTraceInfo = sTraceInfo + " Parameters: ClientAction=" + eClientAction + " EnqueueCardinality= " + eEnqueueCardinality;
            sTraceInfo = sTraceInfo + " ResponseData= " + eResponseData + " TransportMethod=" + eTransportMethod + " ActionUrl=" + sActionUrl;
        }
    }
    if (sClientListener != "") {
        var func = null;
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
    if (oSemanticEvent.bIsCanceled())
        return;
    var oEventQueue = this.oQueue;
    var oFormControl = oSemanticEvent.oGetForm();
    if (oFormControl instanceof UCF_Interface) {
        var sInternalFormId = oFormControl.getId()
          , oDomRef = document.getElementById(sInternalFormId)
          , oFormControl = this.oLS.oGetControlByDomRef(oDomRef);
    }
    if (oFormControl) {
        oEventQueue = this.oGetFormQueue(oFormControl);
    } else {
        if (!this.oLS.bIsMainLS()) {
            var oMainLS = this.oLS.oGetMainLS()
              , oMainEventHandler = oMainLS.oEventHandler;
            oMainEventHandler.processSemanticEvent(oSemanticEvent, iSource);
            return;
        }
        var oPage = this.oLS.oGetPageInternal();
        if (oPage) {
            var sFormId = oPage.sFormId;
            if (sFormId) {
                oFormControl = this.oLS.oControlFactory.oGetControlById(sFormId);
            }
        }
    }
    if (this.bPartialMode) {
        oEventQueue = this.oPartialQueue;
    }
    var bDoLock = false;
    var sFocusIdForRequest = "";
    if (oSemanticEvent.sGetName() != "Scroll")
        sFocusIdForRequest = this.oLS.sGetFocusedElementId();
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
                if (eTransportMethod == this.E_TRANSPORT_METHOD.PARTIAL) {
                    this.bPartialMode = true;
                    oEventQueue = this.oPartialQueue;
                    oEventQueue.addItem(oItem);
                } else {
                    oEventQueue.addItem(oItem);
                }
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
                var oClass = UCF_ClassLoader.oGetClass("UCF_" + oSemanticEvent.sGetControl());
                if (oClass.getEventDelay) {
                    this.oTimer.setMaxDelay(oClass.getEventDelay());
                }
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
                this.sendFormRequest(oFormControl, oEventQueue, sFocusIdForRequest);
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
                this.sendXmlHttpRequest(sActionUrl, oFormControl, oEventQueue, bSyncExecution, sFocusIdForRequest);
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
    var oSemanticEvent, bCcontainsSyncSubmit = false;
    if (this.oWEQueue.iGetLength() < 1)
        return false;
    if (this.oWEQueue.bIsRefireLock())
        return this.oWEQueue.bContainsSyncSubmit();
    this.oWEQueue.setRefireLock(true);
    while (!this.oWEQueue.bIsProcessingLock() && this.oWEQueue.iGetLength() > 0) {
        oSemanticEvent = this.oWEQueue.oDequeue();
        var sId = oSemanticEvent.mGetParameters()["Id"];
        if (sId && this.oLS.oControlFactory.oGetControlById(sId)) {
            if (this.oWEQueue.bIsSyncSubmit(oSemanticEvent))
                bCcontainsSyncSubmit = true;
            this.processSemanticEvent(oSemanticEvent, this.E_SOURCE.WQUEUE);
        } else {}
    }
    this.oWEQueue.setRefireLock(false);
    return bCcontainsSyncSubmit;
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
    oFormRef.style.margin = "0px";
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
    return (obj == null) ? "" : UCF_JsUtil.sSerialize(obj);
}
;
UCF_EventHandler.prototype.bSpecialActions = function(oSemanticEvent) {
    var sControlId = oSemanticEvent.mGetParameters()["Id"];
    if (!sControlId)
        return false;
    if (sControlId && sControlId.indexOf("-_testLS_") != 0)
        return false;
    switch (sControlId.substring(9)) {
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
    this.oTopWindow = null;
}
;UCF_DomUtil.bIsRTL = document.documentElement.dir == "rtl";
UCF_DomUtil.oActiveElement = null;
UCF_DomUtil.$ = function(sId, oWindow) {
    if (!oWindow)
        oWindow = window;
    var o = oWindow.document.getElementById(sId);
    if (o) {
        if (o.id == sId)
            return o;
        if (o.name == sId && oWindow.document.all)
            return oWindow.document.all[sId];
    }
    return null;
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
            return oDomRef;
        }
        oDomRef = oDomRef.parentNode;
    }
    return null;
}
;
UCF_DomUtil.oGetParentByAttribute = function(oDomRef, sAttribute, sValue) {
    while (oDomRef && oDomRef.tagName != "BODY") {
        if (!oDomRef.getAttribute)
            return null;
        if ((oDomRef.getAttribute(sAttribute) && !sValue) || (oDomRef.getAttribute(sAttribute) && oDomRef.getAttribute(sAttribute) == sValue)) {
            return oDomRef;
        }
        oDomRef = oDomRef.parentNode;
    }
    return null;
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
    var sClassName = oDomRef.className;
    if (!sClassName)
        return;
    var aClassNames = oDomRef.className.split(" ");
    for (var x = 0; x < aClassNames.length; x++) {
        var sName = aClassNames[x];
        if (sName == sRemoveClassName || sName == "") {
            aClassNames.splice(x, 1);
            x--;
        }
    }
    oDomRef.className = aClassNames.join(" ");
}
;
UCF_DomUtil.bHasClass = function(oDomRef, sClassName) {
    var oReg = new RegExp("(^| )" + sClassName + "( |$)")
      , sClass = UCF_DomUtil.sGetClass(oDomRef);
    return sClass.match(oReg);
}
;
UCF_DomUtil.replaceClass = function(oDomRef, sReplaceClassName, sClassName) {
    if (sReplaceClassName == "" || sReplaceClassName == " ")
        return;
    var sCurrentClass = oDomRef.className;
    if (sCurrentClass) {
        sCurrentClass = sCurrentClass.replace(new RegExp("(^| )" + sReplaceClassName + "( |$)","g"), "$1" + sClassName + "$2");
        oDomRef.className = sCurrentClass;
    }
}
;
UCF_DomUtil.setBackgroundColor = function(oDomRef, sClassName, oCache) {
    var bCanRuntimeStyles = oDomRef.runtimeStyle ? true : false;
    if (oDomRef.sFastBgAppliedBy == sClassName || oDomRef.sStdBgAppliedBy == sClassName)
        return;
    if (oDomRef.sFastBgAppliedBy || oDomRef.sStdBgAppliedBy)
        UCF_DomUtil.resetBackgroundColor(oDomRef, oDomRef.sFastBgAppliedBy ? oDomRef.sFastBgAppliedBy : oDomRef.sStdBgAppliedBy, oCache);
    if (bCanRuntimeStyles && oCache && oCache[sClassName]) {
        oDomRef.sFastBgAppliedBy = sClassName;
        oDomRef.sFastBgMode = "STYLE";
        oDomRef.sFastBgTextCache = oDomRef.style.backgroundColor;
        oDomRef.style.backgroundColor = oCache[sClassName];
        if (oDomRef.currentStyle.backgroundColor != oCache[sClassName]) {
            oDomRef.style.backgroundColor = oDomRef.sFastBgTextCache;
            oDomRef.sFastBgMode = "STYLETEXT";
            oDomRef.sFastBgTextCache = oDomRef.runtimeStyle.cssText;
            oDomRef.runtimeStyle.cssText = "background-color:" + oCache[sClassName] + " !important;" + oDomRef.runtimeStyle.cssText;
        }
    } else {
        var sBgBefore = (bCanRuntimeStyles && oCache) ? oDomRef.currentStyle.backgroundColor : null;
        UCF_DomUtil.addClass(oDomRef, sClassName);
        oDomRef.sStdBgAppliedBy = sClassName;
        if (bCanRuntimeStyles && oCache && oDomRef.currentStyle.backgroundColor !== sBgBefore) {
            oCache[sClassName] = oDomRef.currentStyle.backgroundColor;
        }
    }
}
;
UCF_DomUtil.resetBackgroundColor = function(oDomRef, sClassName, oCache) {
    if (oDomRef.sFastBgAppliedBy && sClassName == oDomRef.sFastBgAppliedBy) {
        if (oDomRef.sFastBgMode == "STYLE") {
            oDomRef.style.backgroundColor = oDomRef.sFastBgTextCache;
        } else if (oDomRef.sFastBgMode == "STYLETEXT") {
            oDomRef.runtimeStyle.cssText = oDomRef.sFastBgTextCache;
        }
        oDomRef.sFastBgAppliedBy = "";
        oDomRef.sFastBgTextCache = "";
        oDomRef.sFastBgMode = "";
    } else if (oDomRef.sStdBgAppliedBy && oDomRef.className.indexOf(sClassName) != -1) {
        UCF_DomUtil.removeClass(oDomRef, sClassName);
        oDomRef.sStdBgAppliedBy = "";
    }
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
        return null;
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
    return {
        width: UCF_DomUtil.iClientWidth(oWindow),
        height: UCF_DomUtil.iClientHeight(oWindow)
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
    } catch (oException) {}
}
;
UCF_DomUtil.oGetActiveElement = function() {
    var o = null;
    try {
        if (document.activeElement || document.activeElement === null)
            o = document.activeElement;
        else
            o = UCF_DomUtil.oActiveElement;
    } catch (exception) {
        o = UCF_DomUtil.oActiveElement;
    }
    if (UCF_UserAgent.bIsFirefox()) {
        try {
            if (o && (o == document || o.tagName))
                return o;
            else
                return null;
        } catch (ex) {
            return null;
        }
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
                UCF_DomUtil.oActiveElement = null;
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
    while (oDomRef != null) {
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
            return null;
        for (var i = 0; i < oDomRefNode.childNodes.length; i++) {
            if (oDomRefNode.childNodes[i].nodeType == ELEMENT_NODE) {
                return oDomRefNode.childNodes[i];
            }
        }
    }
    return null;
}
;
UCF_DomUtil.oGetFirstChild = function(oDomRefNode) {
    var oChildren = oDomRefNode.childNodes;
    for (var i = 0; i < oDomRefNode.childNodes.length; i++) {
        var c = oChildren[i];
        if (c.tagName != "!" && c.nodeName != "#comment")
            return c;
    }
    return null;
}
;
UCF_DomUtil.oGetLastChild = function(oDomRefNode) {
    var oChildren = oDomRefNode.childNodes;
    for (var i = oChildren.length - 1; i >= 0; i--) {
        var c = oChildren[i];
        if (c.tagName != "!" && c.nodeName != "#comment")
            return c;
    }
    return null;
}
;
UCF_DomUtil.oGetFirstChildByAttribute = function(oDomRefNode, sAttribute, sValue) {
    if (!oDomRefNode)
        return null;
    var oChildren = oDomRefNode.childNodes;
    for (var i = 0; i < oChildren.length; i++) {
        var c = oChildren[i];
        if (c.nodeType == 1) {
            if ((!sValue && c.getAttribute(sAttribute)) || (c.getAttribute(sAttribute) === sValue)) {
                return c;
            } else {
                return this.oGetFirstChildByAttribute(c, sAttribute, sValue);
            }
        }
    }
    return null;
}
;
UCF_DomUtil.oGetLastChildByAttribute = function(oDomRefNode, sAttribute, sValue) {
    if (!oDomRefNode)
        return null;
    var oChildren = oDomRefNode.childNodes;
    for (var i = oChildren.length - 1; i >= 0; i--) {
        var c = oChildren[i];
        if (c.nodeType == 1) {
            if ((!sValue && c.getAttribute(sAttribute)) || (c.getAttribute(sAttribute) === sValue)) {
                return c;
            } else {
                return UCF_DomUtil.oGetLastChildByAttribute(c, sAttribute, sValue);
            }
        }
    }
    return null;
}
;
UCF_DomUtil.oGetObjectRect = function(oDomRef, oContainerRef) {
    var oOffsetParent = oDomRef.offsetParent
      , bAbort = oOffsetParent ? false : true
      , oRect = {
        top: oDomRef.offsetTop,
        left: oDomRef.offsetLeft,
        width: oDomRef.offsetWidth,
        height: oDomRef.offsetHeight
    };
    if (oContainerRef) {
        if (oOffsetParent) {
            if (oOffsetParent == oContainerRef) {
                bAbort = true;
            } else if (oOffsetParent.firstChild == oContainerRef) {
                oRect.top = oDomRef.offsetTop - oContainerRef.offsetTop;
                oRect.left = oDomRef.offsetLeft - oContainerRef.offsetLeft;
                bAbort = true;
            }
            ;
        }
        if (oDomRef.tagName == "BODY" && oContainerRef.tagName != "BODY") {
            var oContainerRect = this.oGetObjectRect(oContainerRef);
            oRect.top = -oContainerRect.top + oContainerRef.scrollTop;
            oRect.left = -oContainerRect.left + oContainerRef.scrollLeft;
            bAbort = true;
        }
    }
    if (!bAbort) {
        var oParentRect = this.oGetObjectRect(oOffsetParent, oContainerRef)
          , bHandled = false
          , oCurDomRef = null;
        oRect.top = oParentRect.top + oDomRef.offsetTop;
        oRect.left = oParentRect.left + oDomRef.offsetLeft;
        if ((oDomRef.clientTop || oDomRef.clientLeft) && (oDomRef.tagName == "DIV" || oDomRef.tagName == "TD")) {
            if (oDomRef.clientTop)
                oRect.top += oDomRef.clientTop;
            if (!UCF_DomUtil.bIsRTL && oDomRef.clientLeft)
                oRect.left += oDomRef.clientLeft;
        }
        oCurDomRef = oDomRef;
        do {
            oCurDomRef = oCurDomRef.parentNode;
            if (oCurDomRef == document.body)
                continue;
            oRect.top -= oCurDomRef.scrollTop;
            oRect.left -= oCurDomRef.scrollLeft;
        } while (oCurDomRef != oOffsetParent);if (UCF_DomUtil.bIsRTL) {
            var offsetLeft = oDomRef.offsetLeft;
            if (oOffsetParent != document.body) {
                if (offsetLeft && this.sGetCurrentStyle(oDomRef, "display") == "inline" && (oDomRef.tagName == "SPAN" || oDomRef.tagName == "A") && UCF_DomUtil.oGetFirstElement(oDomRef)) {
                    oCurDomRef = oDomRef;
                    do {
                        var oFirstChild = UCF_DomUtil.oGetFirstElement(oCurDomRef);
                        if (oFirstChild && oFirstChild.nodeType == 1 && this.sGetCurrentStyle(oDomRef, "display") == "inline")
                            oCurDomRef = oFirstChild;
                        else
                            break;
                    } while (true);if (oCurDomRef != oDomRef) {
                        do {
                            var oSibling = oCurDomRef.nextSibling;
                            if (oSibling && oSibling.nodeType == 1 && (oSibling.offsetLeft + oSibling.offsetWidth) > (oCurDomRef.offsetLeft + oCurDomRef.offsetWidth)) {
                                oCurDomRef = oSibling;
                            } else
                                break;
                        } while (true);
                    }
                    if (oCurDomRef != oDomRef) {
                        offsetLeft = (oCurDomRef.offsetLeft + oCurDomRef.offsetWidth) - oDomRef.offsetWidth;
                    }
                }
                if (oDomRef.offsetLeft <= 0 && this.sGetCurrentStyle(oDomRef, "position") != "relative" && this.sGetCurrentStyle(oDomRef, "position") != "absolute") {
                    var sTextAlign = this.sGetCurrentStyle(oOffsetParent, "textAlign")
                      , iCalculationMode = 0
                      , iPaddingCorrection = 0;
                    if (!sTextAlign || sTextAlign == "right") {
                        iCalculationMode = 0;
                    } else if (sTextAlign == "center") {
                        iCalculationMode = 1;
                    } else if (sTextAlign == "left") {
                        iCalculationMode = 2;
                    }
                    if (oOffsetParent.scrollLeft || this.sGetCurrentStyle(oOffsetParent, "overflowX") != "visible") {
                        offsetLeft = -oOffsetParent.scrollLeft;
                    } else {
                        var iSiblingsWidth = 0;
                        if (this.sGetCurrentStyle(oDomRef, "display") == "inline" || oDomRef.tagName == "TD" || oDomRef.tagName == "TH") {
                            oCurDomRef = oDomRef;
                            while (oCurDomRef) {
                                if (iCalculationMode == 2)
                                    oCurDomRef = UCF_DomUtil.nextSibling(oCurDomRef);
                                else
                                    oCurDomRef = UCF_DomUtil.previousSibling(oCurDomRef);
                                if (oCurDomRef)
                                    iSiblingsWidth += oCurDomRef.offsetWidth;
                            }
                        }
                        {
                            var sPadding = this.sGetCurrentStyle(oOffsetParent, "padding" + (iCalculationMode == 2 ? "Left" : "Right"));
                            if (sPadding && sPadding.indexOf("px") != -1)
                                iPaddingCorrection = parseInt(sPadding);
                        }
                        if (iCalculationMode == 0) {
                            offsetLeft = oOffsetParent.offsetWidth - (iSiblingsWidth + oDomRef.offsetWidth + iPaddingCorrection);
                        } else if (iCalculationMode == 1) {
                            offsetLeft = (oOffsetParent.offsetWidth / 2) - ((iSiblingsWidth + oDomRef.offsetWidth) / 2);
                        } else if (iCalculationMode == 2) {
                            offsetLeft = iSiblingsWidth + iPaddingCorrection;
                        }
                    }
                    if (iPaddingCorrection == 0 && oDomRef.offsetWidth < oOffsetParent.offsetWidth && oDomRef.offsetLeft == oDomRef.offsetWidth - oOffsetParent.offsetWidth) {
                        iPaddingCorrection = oOffsetParent.offsetWidth - oDomRef.offsetWidth;
                        offsetLeft -= iPaddingCorrection;
                    }
                }
                offsetLeft += this.iGetVerticalScollbarOffset(oOffsetParent);
            }
            oRect.left = oParentRect.left + offsetLeft;
        }
    }
    return oRect;
}
;
UCF_DomUtil.oGetViewPort = function(oDomRef) {
    if (this.oGetParentScrollContainer(oDomRef) == document.body) {
        return this.oGetObjectRect(oDomRef);
    } else {
        var oRect = this.oGetObjectRect(oDomRef)
          , oScrollRef = this.oGetParentScrollContainer(oDomRef.parentNode);
        while (oScrollRef) {
            var oScrollRect = this.oGetObjectRect(oScrollRef);
            oScrollRect.height = UCF_DomUtil.iClientHeight(oScrollRef);
            oScrollRect.width = UCF_DomUtil.iClientWidth(oScrollRef);
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
            oScrollRef = this.oGetParentScrollContainer(oScrollRef.parentNode);
            if (oScrollRef == document.body)
                oScrollRef = null;
        }
        if (oRect.height <= 0)
            oRect.height = 0;
        if (oRect.width <= 0)
            oRect.width = 0;
        return oRect;
    }
}
;
UCF_DomUtil.oGetVisibleRect = function(oDomRef) {
    var oRect = this.oGetObjectRect(oDomRef)
      , oScrollRef = this.oGetParentScrollContainer(oDomRef.parentNode);
    if (oScrollRef) {
        var oScrollRect = this.oGetObjectRect(oScrollRef);
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
    while (oDomRef != null) {
        if (oDomRef == document.body) {
            return bIgnoreBody ? null : oDomRef;
        } else {
            var sOverflow = this.sGetCurrentStyle(oDomRef, "overflow");
            if (sOverflow != "visible" && sOverflow != "hidden")
                return oDomRef;
        }
        oDomRef = oDomRef.parentNode;
    }
    return null;
}
;
UCF_DomUtil.oGetParentAbsolutePositionContainer = function(oDomRef, oStopAtDomRef) {
    while (oDomRef != null && oDomRef != document.body) {
        if (oStopAtDomRef && oDomRef == oStopAtDomRef)
            return null;
        if (this.sGetCurrentStyle(oDomRef, "position") == "absolute") {
            return oDomRef;
        }
        oDomRef = oDomRef.parentNode;
    }
    return null;
}
;
UCF_DomUtil.oGetParentPositionReferenceContainer = function(oDomRef, bIgnoreBody, oStopAtDomRef) {
    var bHiddenHasEffect = UCF_UserAgent.bIsIE();
    while (oDomRef != null) {
        if (oStopAtDomRef && oDomRef == oStopAtDomRef)
            return null;
        if (oDomRef == document.body) {
            return bIgnoreBody ? null : oDomRef;
        } else {
            var sOverflow = this.sGetCurrentStyle(oDomRef, "overflow");
            if (oDomRef.getAttribute("bNoPosRefContainer") == null && (sOverflow != "visible" && !(!bHiddenHasEffect && sOverflow == "hidden")) || oDomRef.getAttribute("bUseAsPosRefContainer")) {
                return oDomRef;
            } else {
                var sPosition = this.sGetCurrentStyle(oDomRef, "position");
                if (sPosition == "absolute" || sPosition == "relative") {
                    return oDomRef;
                }
            }
        }
        oDomRef = oDomRef.parentNode;
    }
    return null;
}
;
UCF_DomUtil.firstChild = function(oDomRef, sTagName) {
    if (oDomRef != null) {
        var oFirstChild = oDomRef.firstChild;
        while (oFirstChild) {
            if (sTagName == null && oFirstChild.nodeType == 1)
                break;
            if (sTagName && oFirstChild.nodeName == sTagName)
                break;
            oFirstChild = oFirstChild.nextSibling;
        }
        return oFirstChild;
    }
    return null;
}
;
UCF_DomUtil.lastChild = function(oDomRef, sTagName) {
    if (oDomRef != null) {
        var oLastChild = oDomRef.lastChild;
        while (oLastChild) {
            if (sTagName == null && oLastChild.nodeType == 1)
                break;
            if (sTagName && oLastChild.nodeName == sTagName)
                break;
            oLastChild = oLastChild.previousSibling;
        }
        return oLastChild;
    }
    return null;
}
;
UCF_DomUtil.nextSibling = function(oDomRef, sTagName) {
    if (oDomRef != null) {
        var oUntestedNode = oDomRef.nextSibling;
        while (oUntestedNode != null) {
            if ((sTagName != null && oUntestedNode.nodeName == sTagName) || (sTagName == null && oUntestedNode.nodeType == 1)) {
                return oUntestedNode;
            }
            oUntestedNode = oUntestedNode.nextSibling;
        }
    }
    return null;
}
;
UCF_DomUtil.previousSibling = function(oDomRef, sTagName) {
    if (oDomRef != null) {
        var oUntestedNode = oDomRef.previousSibling;
        while (oUntestedNode != null) {
            if ((sTagName != null && oUntestedNode.nodeName == sTagName) || (sTagName == null && oUntestedNode.nodeType == 1)) {
                return oUntestedNode;
            }
            oUntestedNode = oUntestedNode.previousSibling;
        }
    }
    return null;
}
;
UCF_DomUtil.oGetTPElement = function(oDomRef) {
    var element = oDomRef;
    while (element != null && element.nodeType == 1 && !(element.getAttribute("tp") || element.getAttribute("ct"))) {
        element = element.parentNode;
    }
    if (element == null || element.nodeType != 1 || element.getAttribute("ct")) {
        return null;
    }
    return element;
}
;
UCF_DomUtil.bIsTPInstanceOf = function(oDomRef, sType) {
    var element = this.oGetTPElement(oDomRef);
    if (element != null && element.nodeType == 1 && element.getAttribute("tp")) {
        var tp = element.getAttribute("tp");
        if (tp == sType) {
            return true;
        }
    }
    return false;
}
;
UCF_DomUtil.oGetCTElement = function(oDomRef) {
    var element = oDomRef;
    while (element != null && element.nodeType == 1 && !(element.getAttribute("ct"))) {
        element = element.parentNode;
    }
    if (element == null || element.nodeType != 1) {
        return null;
    }
    return element;
}
;
UCF_DomUtil.bIsCTInstanceOf = function(oDomRef, sType) {
    var element = this.oGetCTElement(oDomRef);
    if (element != null && element.nodeType == 1 && element.getAttribute("ct")) {
        var tp = element.getAttribute("ct");
        if (tp == sType) {
            return true;
        }
    }
    return false;
}
;
UCF_DomUtil.childNodes = function(oDomRef, sTagName) {
    var aChildren = new Array();
    if (oDomRef != null) {
        var oUntestedNode = oDomRef.childNodes
          , iLen = oUntestedNode.length;
        for (var i = iLen; i--; ) {
            var oArrayItem = oUntestedNode[i];
            if ((sTagName != null && oArrayItem.nodeName == sTagName) || (sTagName == null && oArrayItem.nodeType == 1)) {
                aChildren.unshift(oArrayItem);
            }
        }
    }
    return aChildren;
}
;
UCF_DomUtil.setCursorPos = function(oDomRef, iPos) {
    try {
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
    } catch (oException) {}
}
;
UCF_DomUtil.iGetCursorPos = function(oDomRef) {
    if ((oDomRef && oDomRef.tagName == "INPUT" && (oDomRef.type && (oDomRef.type.toLowerCase() == "text" || oDomRef.type.toLowerCase() == "password"))) || oDomRef && oDomRef.tagName == "TEXTAREA") {
        var curPos = -1;
        try {
            if (oDomRef.curPos) {
                return oDomRef.curPos;
            }
            if (window.document.selection) {
                oDomRef.focus();
                var oSel = window.document.selection.createRange();
                if (oSel) {
                    oSel.moveStart('character', -oDomRef.value.length);
                    curPos = oSel.text.length;
                }
            } else if (typeof (oDomRef.selectionStart) == "number") {
                return oDomRef.selectionStart;
            }
        } catch (e) {}
        return curPos;
    }
    return -1;
}
;
UCF_DomUtil.sGetSelectionText = function(oDomRef) {
    var sSelectionText = null;
    if (oDomRef.createTextRange) {
        try {
            var oSelectionRange = document.selection.createRange().duplicate();
            sSelectionText = oSelectionRange.text;
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
    if (oDomRef.selStart) {
        return oDomRef.selStart;
    }
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
    if (oDomRef.selEnd) {
        return oDomRef.selEnd;
    }
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
    } else if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
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
UCF_DomUtil.setOpacityStyle = function(oDomRef, iOpacity) {
    if (UCF_UserAgent.bIsIE() && !UCF_UserAgent.bIsStandardsMode()) {
        oDomRef.style.filter = (iOpacity == 100 ? "" : "alpha(opacity=" + (iOpacity < 10 ? "0" : "") + iOpacity + ")");
    } else {
        oDomRef.style.opacity = (iOpacity / 100);
    }
}
;
UCF_DomUtil.removeOpacityStyle = function(oDomRef) {
    if (UCF_UserAgent.bIsIE()) {
        oDomRef.style.filter = "";
    } else {
        oDomRef.style.opacity = "";
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
UCF_DomUtil.setVisibility = function(oDomRef, sVisibility) {
    var oStyle = oDomRef.style;
    switch (sVisibility) {
    case "NONE":
        oStyle.display = "none";
        oStyle.visibility = "";
        break;
    case "VISIBLE":
        oStyle.display = "";
        oStyle.visibility = "";
        break;
    case "BLANK":
        oStyle.display = "";
        oStyle.visibility = "hidden";
        break;
    default:
        var sId = oDomRef.id;
    }
}
;
UCF_DomUtil.oGetTopWindow = function() {
    if (this.oTopWindow)
        return this.oTopWindow;
    var aWindows = new Array();
    var oWindow = window;
    var oParentWindow = null;
    var bFirstParentAccess = true;
    aWindows[0] = oWindow;
    try {
        oParentWindow = oWindow.parent;
    } catch (e) {
        bFirstParentAccess = false;
    }
    if (bFirstParentAccess) {
        while (oWindow != oParentWindow) {
            oWindow = oParentWindow;
            aWindows[aWindows.length] = oWindow;
            try {
                oParentWindow = oWindow.parent;
            } catch (e) {
                break;
            }
        }
    }
    for (var x = aWindows.length - 1; x >= 0; x--) {
        var oTopWindow = aWindows[x];
        try {
            oTopWindow.document.domain;
            if (UCF_UserAgent.bIsFirefox())
                oTopWindow.location.href;
        } catch (e) {
            continue;
        }
        var iBs = oTopWindow.document.getElementsByTagName("frameset").length;
        if (iBs > 0)
            continue;
        return this.oTopWindow = oTopWindow;
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
UCF_DomUtil.oGetFirstFocusableDomRef = function(oContainerDomRef, bIncludeInvisible) {
    if (!oContainerDomRef || !(bIncludeInvisible || UCF_DomUtil.bIsVisible(oContainerDomRef)))
        return null;
    var oCurrDomRef = oContainerDomRef.firstChild
      , oDomRefFound = null;
    while (oCurrDomRef) {
        if (oCurrDomRef.nodeType == 1 && (bIncludeInvisible || UCF_DomUtil.bIsVisible(oCurrDomRef))) {
            if (UCF_DomUtil.bHasTabIndex(oCurrDomRef)) {
                return oCurrDomRef;
            }
            if (oCurrDomRef.childNodes) {
                oDomRefFound = UCF_DomUtil.oGetFirstFocusableDomRef(oCurrDomRef, bIncludeInvisible);
                if (oDomRefFound)
                    return oDomRefFound;
            }
        }
        oCurrDomRef = oCurrDomRef.nextSibling;
    }
    return null;
}
;
UCF_DomUtil.oGetLastFocusableDomRef = function(oContainerDomRef, bIncludeInvisible) {
    if (!oContainerDomRef || !(bIncludeInvisible || UCF_DomUtil.bIsVisible(oContainerDomRef)))
        return null;
    var oCurrDomRef = oContainerDomRef.lastChild
      , oDomRefFound = null;
    while (oCurrDomRef) {
        if (oCurrDomRef.nodeType == 1 && (bIncludeInvisible || UCF_DomUtil.bIsVisible(oCurrDomRef))) {
            if (oCurrDomRef.childNodes) {
                oDomRefFound = UCF_DomUtil.oGetLastFocusableDomRef(oCurrDomRef, bIncludeInvisible);
                if (oDomRefFound)
                    return oDomRefFound;
            }
            if (UCF_DomUtil.bHasTabIndex(oCurrDomRef)) {
                return oCurrDomRef;
            }
        }
        oCurrDomRef = oCurrDomRef.previousSibling;
    }
    return null;
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
          , oLastFoundDomRef = null;
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
    while (oDomRef != null) {
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
    return null;
}
;
UCF_DomUtil.oGetTabbableElementBackward = function(oDomRef, bAscending) {
    var oResult = null
      , ELEMENT_NODE = 1;
    while (oDomRef != null) {
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
    return null;
}
;
UCF_DomUtil.oGetNextSibling = function(oDomRef, bAscending) {
    if (!bAscending)
        return oDomRef.nextSibling;
    while (oDomRef != null) {
        if (oDomRef.nextSibling)
            return oDomRef.nextSibling;
        oDomRef = oDomRef.parentNode;
    }
    return null;
}
;
UCF_DomUtil.oGetPreviousSibling = function(oDomRef, bAscending) {
    if (!bAscending)
        return oDomRef.previousSibling;
    while (oDomRef != null) {
        if (oDomRef.previousSibling)
            return oDomRef.previousSibling;
        oDomRef = oDomRef.parentNode;
    }
    return null;
}
;
UCF_DomUtil.removeCaret = function(oDomRef) {
    if (!oDomRef)
        return;
    try {
        if (document.selection) {
            if (oDomRef) {
                if (oDomRef.tagName == "INPUT") {
                    try {
                        document.selection.empty();
                    } catch (e) {}
                }
            }
        }
    } catch (ex) {}
}
;
UCF_DomUtil.sGetValueForClassAndProperty = function(sClassName, sPropertyName) {
    for (var j = 0; j < document.styleSheets.length; j++) {
        try {
            var oStyleSheet = document.styleSheets[j]
              , oRules = oStyleSheet.rules || oStyleSheet.cssRules
              , oRule = null;
            for (var i = 0; i < oRules.length; i++) {
                oRule = oRules[i];
                if (oRule.selectorText.toLowerCase() == sClassName.toLowerCase()) {
                    return oRule.style[sPropertyName];
                }
            }
        } catch (e) {}
    }
    return null;
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
    var iPixelWidth = oDiv.scrollWidth;
    UCF_DomUtil.removeFromDom(oDiv);
    return parseInt(iPixelWidth);
}
;
UCF_DomUtil.oCreateDebugRect = function(oRect, sText, sColor) {
    var oDomRefResult = document.createElement("DIV");
    oDomRefResult.style.position = "absolute";
    oDomRefResult.style.width = oRect.width + "px";
    oDomRefResult.style.height = oRect.height + "px";
    oDomRefResult.style.top = oRect.top + "px";
    oDomRefResult.style.left = oRect.left + "px";
    oDomRefResult.style.border = "1px solid " + sColor;
    oDomRefResult.setAttribute("title", sText);
    oDomRefResult.style.overflow = "hidden";
    oDomRefResult.style.fontSize = "1px";
    oDomRefResult.onclick = function() {
        event.srcElement.parentNode.removeChild(event.srcElement);
    }
    ;
    return oDomRefResult;
}
;
UCF_DomUtil.bNotEmpty = function(oRef, sAttributeName) {
    try {
        if (oRef.nodeType == 1) {
            if (typeof (oRef.getAttribute(sAttributeName)) != 'undefined' && oRef.getAttribute(sAttributeName) != "" && oRef.getAttribute(sAttributeName) != null) {
                return true;
            } else {
                return false;
            }
        }
    } catch (e) {}
}
;
UCF_DomUtil.sGetARIAInfo = function(oDomRef) {
    var sStatic = "";
    var SEP = " - ";
    if (oDomRef && oDomRef.nodeType == 1) {
        var el = oDomRef;
        if (el.attributes && el.attributes.length > 0) {
            for (var i = 0; i < el.attributes.length; i++) {
                if (el.attributes[i].name.indexOf("role") != -1) {
                    sStatic = el.attributes[i].value.toUpperCase();
                    break;
                }
            }
        }
        if (sStatic == "")
            sStatic = "[" + el.nodeName + "]";
        if (el.attributes && el.attributes.length > 0) {
            for (var j = 0; j < el.attributes.length; j++) {
                if (el.attributes[j].name.indexOf("aria") != -1) {
                    if (this.bNotEmpty(el, el.attributes[j].name)) {
                        if (el.attributes[j].name.indexOf("labelledby") != -1) {
                            var labelled_ids = new Array();
                            var txt1 = "";
                            labelled_ids = (el.getAttribute(el.attributes[j].name)).toString().split(' ');
                            for (var k = 0; k < labelled_ids.length; k++) {
                                var obj1 = this.$(labelled_ids[k]);
                                if (obj1 != null && obj1.innerHTML != "")
                                    txt1 += obj1.innerHTML + " ";
                            }
                            if (txt1 != "" && txt1 != " ")
                                sStatic += SEP + "|" + UCF_JsUtil.sTrim(txt1) + "|";
                        } else if (el.attributes[j].name.indexOf("describedby") != -1) {
                            var described_ids = new Array();
                            var txt2 = "";
                            described_ids = (el.getAttribute(el.attributes[j].name)).toString().split(' ');
                            for (var l = 0; l < described_ids.length; l++) {
                                var obj2 = this.$(described_ids[l]);
                                if (obj2 != null && obj2.innerHTML != "")
                                    txt2 += obj2.innerHTML + " ";
                            }
                            if (txt2 != "" && txt2 != " ")
                                sStatic += SEP + "{" + UCF_JsUtil.sTrim(txt2) + "}";
                        } else {
                            sStatic += SEP + el.attributes[j].name.substr(5) + "=" + el.attributes[j].value;
                        }
                    }
                }
            }
        }
        if (this.bNotEmpty(el, "title"))
            sStatic += SEP + el.getAttribute("title");
    }
    return sStatic;
}
;
UCF_DomUtil.oAddLayeredElement = function(oDomRefLayered, oDomRefTopLayerArea, oDomRefReferenceContainer, bInitialSize) {
    var oAddTo = null;
    if (oDomRefReferenceContainer) {
        var oInsertAfter = null;
        oAddTo = this.oGetFirstElement(oDomRefReferenceContainer);
        if (UCF_UserAgent.bIsIE() || (UCF_UserAgent.bIsGecko() && UCF_UserAgent.bIsStandardsMode())) {
            while (oAddTo && this.sGetCurrentStyle(oAddTo, "position") == "absolute") {
                oInsertAfter = oAddTo;
                oAddTo = UCF_DomUtil.nextSibling(oAddTo);
            }
        }
        if (!oAddTo || !oAddTo.bIsCollectorContainer) {
            oAddTo = document.createElement("div");
            oAddTo.style.height = "0px";
            oAddTo.style.width = UCF_DomUtil.bIsRTL ? "100%" : "0px";
            oAddTo.style.position = "relative";
            oAddTo.bIsCollectorContainer = true;
            if (UCF_UserAgent.bIsIE()) {
                var oDummyContent = document.createElement("div");
                oDummyContent.style.height = "0px";
                oDummyContent.style.width = "0px";
                oDummyContent.style.overflow = "hidden";
                oDummyContent.style.fontSize = "0.1pt";
                oDummyContent.style.position = "absolute";
                oAddTo.appendChild(oDummyContent);
            }
            if (!oDomRefReferenceContainer.firstChild) {
                oDomRefReferenceContainer.appendChild(oAddTo);
            } else {
                if (oInsertAfter) {
                    if (oDomRefReferenceContainer.lastChild == oInsertAfter)
                        oDomRefReferenceContainer.appendChild(oAddTo);
                    else
                        oDomRefReferenceContainer.insertBefore(oAddTo, oInsertAfter.nextSibling);
                } else {
                    oDomRefReferenceContainer.insertBefore(oAddTo, oDomRefReferenceContainer.firstChild);
                }
            }
        }
    } else if (oDomRefTopLayerArea) {
        oAddTo = oDomRefTopLayerArea;
    }
    if (oDomRefLayered && oAddTo) {
        oDomRefLayered.style.top = "-10000px";
        oDomRefLayered.style.position = "absolute";
        if (bInitialSize) {
            oDomRefLayered.style.height = "1px";
            oDomRefLayered.style.width = "1px";
        }
        oAddTo.appendChild(oDomRefLayered);
    }
    return oAddTo;
}
;
UCF_DomUtil.iScreenWidth = function() {
    return screen.width;
}
;
UCF_DomUtil.iScreenHeight = function() {
    return screen.height;
}
;
UCF_DomUtil.sScreenOrientation = function() {
    if ("orientation"in window) {
        switch (window.orientation) {
        case 0:
            return "portrait";
        }
    }
    ;return "landscape"
}
;
UCF_DomUtil.iClientWidth = function(oWindow) {
    if (!oWindow)
        oWindow = window;
    return oWindow.innerWidth || (oWindow.document.documentElement.clientWidth || oWindow.document.body.clientWidth);
}
;
UCF_DomUtil.iClientHeight = function(oWindow) {
    if (!oWindow)
        oWindow = window;
    return oWindow.innerHeight || (oWindow.document.documentElement.clientHeight || oWindow.document.body.clientHeight);
}
;
UCF_DomUtil.oScrollSize = function(oWindow) {
    if (!oWindow)
        oWindow = window;
    if (oWindow.document.body.scrollHeight > oWindow.document.body.offsetHeight)
        return {
            width: oWindow.document.body.scrollWidth,
            height: oWindow.document.body.scrollHeight
        };
    else
        return {
            width: oWindow.document.body.offsetWidth,
            height: oWindow.document.body.offsetHeight
        };
}
;
UCF_DomUtil.bCheckStandardsCorrection = function(oTable) {
    return document.documentMode && parseInt(document.documentMode) >= 8 && UCF_UserAgent.bIsStandardsMode();
}
;
UCF_DomUtil.initHtmlTableCorrection = function(oTable) {
    if (oTable && UCF_DomUtil.bCheckStandardsCorrection()) {
        var sCorrProcedure = ""
          , bNeedsResizeHandling = false
          , bForceCorrection = false
          , sTableHeight = oTable.style.height
          , iTableAdd = 0
          , iRelatedParentAdd = 0
          , oRelatedParent = this.oGetHtmlTableCorrectionRelatedParent(oTable)
          , iRelatedParentHeight = 0
          , sRelatedParentHeight = null;
        oTable.removeAttribute("lsTableCorrProcedure");
        oTable.removeAttribute("lsTableCorrAdd");
        oTable.removeAttribute("lsTableCorrParentAdd");
        if (oRelatedParent) {
            iRelatedParentHeight = oRelatedParent.clientHeight;
            sRelatedParentHeight = oRelatedParent.style.height;
        }
        if (sTableHeight) {
            var bRelatedParentHeightFixed = sRelatedParentHeight.indexOf("%") == -1
              , bTableHeightFixed = sTableHeight.indexOf("%") == -1;
            bNeedsResizeHandling = !bTableHeightFixed;
            bForceCorrection = bTableHeightFixed || (!bTableHeightFixed && bRelatedParentHeightFixed);
            if (bTableHeightFixed) {
                sCorrProcedure = "P2";
            } else if (sRelatedParentHeight) {
                sCorrProcedure = "P1";
            }
        }
        if (sCorrProcedure) {
            var aRows = oTable.rows
              , oRow = null
              , aCells = null
              , oReferenceCell = null
              , bHasFixedRows = false
              , iROF = 0
              , bHasPercentContent = false
              , sCellSpacing = oTable.getAttribute("cellspacing");
            if (sCellSpacing)
                iTableAdd += parseInt(sCellSpacing) * (aRows.length + 1);
            if (oRelatedParent) {
                var oDomRef = oTable.parentNode;
                while (oDomRef) {
                    iRelatedParentAdd -= this.iGetHtmlTableCorrectionHeightOffset(oDomRef);
                    if (oDomRef == oRelatedParent)
                        break;
                    oDomRef = oDomRef.parentNode;
                }
            }
            for (var iRowIndex = 0; iRowIndex < aRows.length; iRowIndex++) {
                oRow = aRows[iRowIndex];
                aCells = oRow.cells;
                for (var iCellIndex = 0; iCellIndex < aCells.length; iCellIndex++) {
                    oReferenceCell = aCells[iCellIndex];
                    if (oReferenceCell.firstChild)
                        break;
                }
                oRow.removeAttribute("lsTableCorrROF");
                oRow.removeAttribute("lsTableCorrAdd");
                if (oRow.style.height.indexOf("%") != -1)
                    iROF = parseInt(oRow.style.height);
                else if (oReferenceCell.style.height.indexOf("%") != -1)
                    iROF = parseInt(oReferenceCell.style.height);
                else
                    iROF = 0;
                if (iROF) {
                    var oContent = UCF_DomUtil.oGetFirstElement(oReferenceCell);
                    if (oContent && oContent.currentStyle.height == "100%") {
                        var iAdd = (iRelatedParentHeight > 500) ? 4 : 0;
                        bHasPercentContent = true;
                        if (oContent.currentStyle.display != "inline")
                            iAdd += this.iGetHtmlTableCorrectionHeightOffset(oReferenceCell);
                        oRow.setAttribute("lsTableCorrROF", iROF);
                        oRow.setAttribute("lsTableCorrAdd", iAdd);
                    }
                } else
                    bHasFixedRows = true;
            }
            if (!bHasFixedRows || !bHasPercentContent)
                sCorrProcedure = "";
        }
        oTable.setAttribute("lsTableCorrProcedure", sCorrProcedure);
        oTable.setAttribute("lsTableCorrAdd", iTableAdd);
        oTable.setAttribute("lsTableCorrParentAdd", iRelatedParentAdd);
        if (sCorrProcedure) {
            UCF_DomUtil.updateHtmlTableCorrection(oTable, bForceCorrection);
            if (bNeedsResizeHandling) {
                this.attachEvent(oTable, "resize", this.fGetHtmlTableCorrectionHandler(oTable));
                if (oRelatedParent) {
                    this.attachEvent(oRelatedParent, "resize", this.fGetHtmlTableCorrectionHandler(oTable));
                }
            }
        }
    }
}
;
UCF_DomUtil.iGetHtmlTableCorrectionHeightOffset = function(oDomRef) {
    var iOffset = 0
      , oStyle = oDomRef.currentStyle;
    if (oStyle.paddingTop)
        iOffset += parseInt(oStyle.paddingTop);
    if (oStyle.paddingBottom)
        iOffset += parseInt(oStyle.paddingBottom);
    return iOffset;
}
;
UCF_DomUtil.oGetHtmlTableCorrectionRelatedParent = function(oTable) {
    var oRelatedParent = oTable.parentNode;
    while (oRelatedParent && oRelatedParent != document.body && oRelatedParent.tagName.charAt(0) == "T") {
        oRelatedParent = oRelatedParent.parentNode;
    }
    return oRelatedParent;
}
;
UCF_DomUtil.fGetHtmlTableCorrectionHandler = function(oTarget) {
    var fHandler = function() {
        if (UCF_DomUtil.bIsInActiveDom(oTarget)) {
            UCF_DomUtil.updateHtmlTableCorrection(oTarget, false);
        } else {
            this.detachEvent(event.srcElement, "resize", fHandler);
            fHandler = null;
            oTarget = null;
        }
    };
    return fHandler;
}
;
UCF_DomUtil.updateHtmlTableCorrection = function(oTable, bForceCorrection) {
    var iTableHeight = oTable.offsetHeight
      , iRelatedParentHeight = iTableHeight
      , oRelatedParent = this.oGetHtmlTableCorrectionRelatedParent(oTable)
      , sCorrProcedure = oTable.getAttribute("lsTableCorrProcedure");
    if (oRelatedParent) {
        iRelatedParentHeight = oRelatedParent.clientHeight + parseInt(oTable.getAttribute("lsTableCorrParentAdd"));
    }
    if (bForceCorrection || Math.abs(iTableHeight - iRelatedParentHeight) > 5 || iTableHeight > iRelatedParentHeight) {
        var aRows = oTable.rows
          , oRow = null
          , iFixHeight = parseInt(oTable.getAttribute("lsTableCorrAdd"));
        for (var i = 0; i < aRows.length; i++) {
            oRow = aRows[i];
            iFixHeight += (oRow.getAttribute("lsTableCorrROF") ? parseInt(oRow.getAttribute("lsTableCorrAdd")) : oRow.offsetHeight);
        }
        if (sCorrProcedure == "P1") {
            oTable.style.height = Math.max(2, Math.floor(((iRelatedParentHeight - iFixHeight) * 100 / iRelatedParentHeight))) + "%";
        } else if (sCorrProcedure == "P2") {
            var sCssTableHeight = oTable.style.height
              , sUnit = sCssTableHeight.substring(sCssTableHeight.length - 2)
              , fCorrectedValue = parseFloat(sCssTableHeight) * (1.0 - ((iTableHeight / (iTableHeight - iFixHeight)) - 1.0));
            if (sUnit == "px") {
                oTable.style.height = Math.max(10, Math.floor(fCorrectedValue)) + sUnit;
            } else {
                oTable.style.height = fCorrectedValue + sUnit;
            }
        }
    }
}
;
UCF_DomUtil.initPercentageToStaticHeight = function(oDomRef) {
    if (oDomRef) {
        UCF_DomUtil.updatePercentageToStaticHeight(oDomRef);
        oDomRef.onresize = UCF_DomUtil.updatePercentageToStaticHeightHandler;
    }
}
;
UCF_DomUtil.updatePercentageToStaticHeight = function(oDomRef) {
    oDomRef.style.height = (document.documentMode == 8 ? oDomRef.clientHeight : oDomRef.offsetHeight) + "px";
}
;
UCF_DomUtil.updatePercentageToStaticHeightHandler = function() {
    UCF_JsUtil.feedMassNotificationFilter(50, this, UCF_DomUtil, "updatePercentageToStaticHeight", [this]);
}
;
UCF_DomUtil.oGetTextHeight = function(sText, sClassName) {
    var oSpan = document.createElement("span");
    oSpan.className = sClassName;
    oSpan.style.border = "none";
    oSpan.style.padding = "0px";
    oSpan.innerHTML = sText;
    oSpan.style.position = "absolute";
    oSpan.style.top = "-1000";
    document.body.appendChild(oSpan);
    var iHeight = oSpan.clientHeight;
    document.body.removeChild(oSpan);
    oSpan = null;
    return iHeight;
}
;
UCF_DomUtil.oGetTextSize = function(sText, sClassName) {
    var oSpan = document.createElement("span");
    oSpan.className = sClassName;
    oSpan.style.border = "none";
    oSpan.style.padding = "0px";
    oSpan.style.width = "auto";
    oSpan.innerHTML = sText;
    oSpan.style.position = "absolute";
    oSpan.style.top = "-1000";
    document.body.appendChild(oSpan);
    var iHeight = oSpan.clientHeight;
    var iWidth = oSpan.clientWidth;
    document.body.removeChild(oSpan);
    oSpan = null;
    return {
        width: iWidth,
        height: iHeight
    };
}
;
UCF_DomUtil.checkTooltip = function(oDomRef, sTooltip, oDomRefOvfl) {
    var sSepator = (sTooltip != "") ? " - " : "";
    if (oDomRef) {
        if (oDomRefOvfl) {
            if (oDomRefOvfl.offsetWidth > oDomRef.offsetWidth || oDomRef.scrollWidth > oDomRef.offsetWidth) {
                var sText = this.removeColon(UCF_DomUtil.sGetInnerText(oDomRefOvfl));
                if (sText != UCF_StringUtil.sTrim(sTooltip)) {
                    this.setTooltip(oDomRef, sText + sSepator + sTooltip);
                    this.setTooltip(oDomRefOvfl, sText + sSepator + sTooltip);
                }
            } else {
                this.setTooltip(oDomRef, sTooltip);
                this.setTooltip(oDomRefOvfl, sTooltip);
            }
        } else {
            var oParentDomRef = this.oGetParentByAttribute(oDomRef, "ctv", "C");
            if (oParentDomRef) {
                if (oParentDomRef.scrollWidth > oParentDomRef.clientWidth || oDomRef.offsetWidth > oParentDomRef.offsetWidth) {
                    var sText = this.removeColon(UCF_DomUtil.sGetInnerText(oDomRef));
                    if (sText != UCF_StringUtil.sTrim(sTooltip)) {
                        this.setTooltip(oDomRef, sText + sSepator + sTooltip);
                    }
                } else {
                    this.setTooltip(oDomRef, sTooltip);
                }
            }
        }
    }
}
;
UCF_DomUtil.removeColon = function(sString) {
    var sStringValue = sString;
    if (sStringValue != null && sStringValue != "") {
        if (UCF_StringUtil.bEndsWith(sStringValue, ":")) {
            return UCF_StringUtil.sTrim(sStringValue.substring(0, sStringValue.length - 1));
        }
    }
    return UCF_StringUtil.sTrim(sStringValue);
}
;
UCF_DomUtil.setTooltip = function(oDomRef, sTooltip) {
    oDomRef.title = sTooltip;
}
;
UCF_DomUtil.setTextAlign = function(oDomRef, sTextAlign, sTextDirection) {
    var mSystemDirection = {
        "LTR": 0,
        "RTL": 1
    }
      , mTextAlignStates = {
        "FORCEDLEFT": [{
            "LTR": "",
            "RTL": "left",
            "INHERIT": ""
        }, {
            "LTR": "left",
            "RTL": "left",
            "INHERIT": "left"
        }],
        "LEFT": [{
            "LTR": "",
            "RTL": "",
            "INHERIT": ""
        }, {
            "LTR": "",
            "RTL": "",
            "INHERIT": ""
        }],
        "CENTER": [{
            "LTR": "center",
            "RTL": "center",
            "INHERIT": "center"
        }, {
            "LTR": "center",
            "RTL": "center",
            "INHERIT": "center"
        }],
        "RIGHT": [{
            "LTR": "right",
            "RTL": "right",
            "INHERIT": "right"
        }, {
            "LTR": "right",
            "RTL": "",
            "INHERIT": ""
        }],
        "ENDOFLINE": [{
            "LTR": "right",
            "RTL": "left",
            "INHERIT": "right"
        }, {
            "LTR": "right",
            "RTL": "left",
            "INHERIT": "left"
        }],
        "FORCEDRIGHT": [{
            "LTR": "right",
            "RTL": "right",
            "INHERIT": "right"
        }, {
            "LTR": "right",
            "RTL": "",
            "INHERIT": ""
        }],
        "BEGINOFLINE": [{
            "LTR": "left",
            "RTL": "right",
            "INHERIT": "left"
        }, {
            "LTR": "left",
            "RTL": "right",
            "INHERIT": "right"
        }]
    }
      , oTextAlignState = mTextAlignStates[sTextAlign]
      , iLayoutDirection = UCF_DomUtil.bIsRTL ? mSystemDirection.RTL : mSystemDirection.LTR
      , oTextAlignStateSD = oTextAlignState[iLayoutDirection]
      , sTextAlignStyle = oTextAlignStateSD[sTextDirection];
    oDomRef.style.textAlign = sTextAlignStyle;
}
;
UCF_DomUtil.applyIECssCursorRule = function(sRuleName) {
    if (sRuleName && UCF_UserAgent.bIsIE() && !UCF_DomUtil.mAppliedIECursorRules[sRuleName]) {
        var oStyleSheet = null
          , sCssRuleText = null
          , sStyleSheetLocation = null
          , bRuleSeach = true
          , sTargetRuleName = sRuleName
          , aMatch = sTargetRuleName.match(/^([\.\w_]+)_(ie6)_$/);
        if (aMatch && aMatch.length)
            sTargetRuleName = aMatch[1];
        try {
            for (var i = 0; i < document.styleSheets.length; i++) {
                var aRules = null;
                oStyleSheet = document.styleSheets[i];
                aRules = oStyleSheet.cssRules || oStyleSheet.rules;
                for (var j = 0; j < aRules.length; j++) {
                    var oRule = aRules[j];
                    if (oRule.selectorText == sRuleName) {
                        sCssRuleText = " " + oRule.selectorText + "{" + oRule.style.cssText + "}";
                        break;
                    }
                }
                if (sCssRuleText) {
                    sStyleSheetLocation = oStyleSheet.href.substring(0, oStyleSheet.href.lastIndexOf("/") + 1);
                    break;
                }
            }
            if (sCssRuleText && sStyleSheetLocation) {
                var sStyleId = "AppliedIECursorRules"
                  , oDomRefLink = oStyleSheet.ownerNode
                  , oDocument = null
                  , oDomRefStyle = null;
                if (!oDomRefLink) {
                    var aDomRefLinks = document.getElementsByTagName("link");
                    for (var i = 0; i < aDomRefLinks.length; i++) {
                        oDomRefLink = aDomRefLinks[i];
                        if (oDomRefLink.styleSheet == oStyleSheet)
                            break;
                    }
                }
                oDocument = oDomRefLink.ownerDocument,
                oDomRefStyle = oDocument.getElementById(sStyleId);
                if (!oDomRefStyle) {
                    oDomRefStyle = oDocument.createElement("style");
                    oDomRefStyle.setAttribute("id", sStyleId);
                    if (oDomRefLink.nextSibling)
                        oDomRefLink.parentNode.insertBefore(oDomRefStyle, oDomRefLink.nextSibling);
                    else
                        oDomRefLink.parentNode.appendChild(oDomRefStyle);
                }
                if (sTargetRuleName != sRuleName)
                    sCssRuleText = sCssRuleText.replace(sRuleName, sTargetRuleName);
                oDomRefStyle.styleSheet.cssText += sCssRuleText.replace("url(", "url(" + sStyleSheetLocation);
            } else {}
        } catch (oException) {}
        UCF_DomUtil.mAppliedIECursorRules[sRuleName] = true;
    }
}
;
UCF_DomUtil.mAppliedIECursorRules = {};
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
    if (ucfParam == null || ucfParam["Serialize"] == "none") {
        ucfParam = {};
    }
    this.sSerializeSection(ucfParam, aBuff, false);
    this.sSerializeSection(ose.mGetCustomParameters(), aBuff, false);
    return aBuff.join("");
}
;
UCF_EventQueueItem.prototype.sSerializeSection = function(oParams, aBuff, bCollectionAllowed) {
    var iCnt = 0;
    if (oParams == null)
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
    this.registerLibrary();
    if (window.UCF_bLSCreated) {
        return;
    }
    window.UCF_bLSCreated = true;
    this.setRootRef(oRootRef);
    this.oMainLS = null;
    this.bStylesMoved = false;
    this.sActiveDefaultButtonId = "";
    this.sDragData = null;
    this.sMainWindowId = "";
    this.bIsDestroyed = false;
    this.bIsLocked = false;
    this.bDomChanged = false;
    this.bDirty = false;
    this.bAlternativeKeyboardHandling = false;
    this.mCapturedEvents = {};
    this.oSemanticEventHandlerObject = null;
    this.sSemanticEventHandlerFunction = "";
    this.oApplicationExitHandlerObject = null;
    this.sApplicationExitHandlerFunction = "";
    this.oPendingRequestHandlerObject = null;
    this.sPendingRequestHandlerFunction = "";
    if (!oSystem) {
        this.oSystem = new (UCF_ClassLoader.oGetClass("UCF_System"))(document.getElementById("UCF_System"));
    } else {
        this.oSystem = oSystem;
    }
    this.oControlFactory = new (UCF_ClassLoader.oGetClass("UCF_ControlFactory"))(this);
    this.oBrowserWindow = new (UCF_ClassLoader.oGetClass("UCF_BrowserWindow"))(this.oRootRef);
    this.oDebugHelper = new (UCF_ClassLoader.oGetClass("UCF_DebugHelper"))(this);
    if (!this.bIsDestroyed && this.oSystem && this.oSystem.sEmbedding == UCF_System.EMBEDDING.ISOLATED) {
        this.oMainLS = this;
        this.bIsolatedEmbedding = true;
    } else {
        this.bIsolatedEmbedding = false;
    }
    if (!this.oSystem.bUseActiveX)
        UCF_RequestUtil.disableActiveX();
    if (!this.oSystem.bUseXHR)
        UCF_RequestUtil.disableXHR();
    this.oPopupManager = null;
    this.oMessageBundle = new (UCF_ClassLoader.oGetClass("UCF_MessageBundle"))();
    this.oBrowserWindow.attachEvent(this.oBrowserWindow.E_EVENTS.ControlEvent, this, "onControlEvent");
    if (!(this.bIsDestroyed && this.oSystem == null) && this.oSystem.bIsUCF) {
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
    this.attachToTestsuite();
    this.attachToQTP();
    UCF_ErrorMessage.attachDestroyHandler(this, "destroy");
    this.bFireLifecycleEvents = false;
    if (this.oEventHandler) {
        this.oEventHandler.deactivateStartupQueueing();
    }
    if (this.oSystem.sDevice.indexOf("ie") > -1 && ((document.documentMode && document.documentMode >= 9) || (document.compatMode && document.compatMode != "BackCompat") || (this.oSystem.sDevice != "standards" && (document.doctype != null)))) {
        var oSystemPopup = new (UCF_ClassLoader.oGetClass("UCF_SystemPopup"))()
          , aContent = []
          , sTitle = this.sGetText("SAPUR_BROWSER_QUIRKS_TITLE")
          , sDetail = this.sGetText("SAPUR_BROWSER_QUIRKS_WARN", ["<a target=\"_blank\" href=\"https://service.sap.com/sap/support/notes/1586993\">1586993</a>"])
          , sButtonText = this.sGetText("SAPUR_BROWSER_QUIRKS_CONTINUE")
          , oHandler = new UCF_Object();
        oSystemPopup.setTitle(sTitle);
        oSystemPopup.setButton("IgnoreButton", sButtonText);
        oHandler.oLS = this;
        oHandler.oSystemPopup = oSystemPopup;
        oHandler.onButtonPress = function() {
            oHandler.oSystemPopup.hide();
        }
        ;
        oSystemPopup.attachEvent(oSystemPopup.E_EVENTS.Button, oHandler, "onButtonPress");
        aContent.push("<div style=\"margin:10px\">");
        aContent.push(sDetail);
        aContent.push("</div>");
        oSystemPopup.setContent(aContent.join(""));
        oSystemPopup.show();
    }
    this.attachOfflineListener();
    window.document.qtp_readystate = true;
    if (UCF_LS.aRegisteredClasses.length > 0) {
        for (var i = 0; i < UCF_LS.aRegisteredClasses.length; i++) {
            if (UCF_LS.aRegisteredClasses[i].onLSInit) {
                UCF_LS.aRegisteredClasses[i].onLSInit(this);
            }
        }
    }
    return this.oGetInterface();
}
;UCF_LS.prototype = new UCF_EventProvider();
UCF_LS.prototype.dataChange = function(o) {}
;
UCF_LS.prototype.E_EVENTS = {
    SemanticEvent: 0,
    Lock: 1,
    Unlock: 2,
    PendingRequest: 3,
    FocusEnd: 4,
    ControlCreate: 5,
    ControlDestroy: 6,
    BeforeDestroy: 7,
    BeforeRequest: 8,
    AfterRequest: 9,
    AfterResponse: 10,
    UpdateComplete: 11,
    ControlsInitialized: 12
};
UCF_LS.prototype.M_CONSTANTS = {
    LSPOPUP: "LSPOPUP"
};
UCF_LS.E_LAYERS = {
    CONTROLS: 1000,
    BLINDLAYER: 4000,
    POPUPWINDOWS: 10000,
    POPUPMENUS: 20000,
    GHOSTS: 21000,
    DECORATORS: 22000
};
UCF_LS.prototype.destroy = function(sErrorHTML, iStatusCode) {
    if (this.bIsDestroyed)
        return;
    this.bIsDestroyed = true;
    this.fireEvent(this.E_EVENTS.BeforeDestroy, {});
    if (this.oApplicationExitHandlerObject) {
        this.oApplicationExitHandlerObject[this.sApplicationExitHandlerFunction]();
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
    this.oMainLS = null;
    this.oRootRef = null;
    if ("oPage"in this)
        delete this.oPage;
    if (sErrorHTML || sErrorHTML == "") {
        if (typeof (iStatusCode) == "number" && iStatusCode >= 400) {
            document.body.className = "";
            document.body.innerHTML = "<input type='hidden'>" + sErrorHTML;
        } else {
            setTimeout(function() {
                document.open();
                document.write(sErrorHTML);
                document.close();
            }, 0);
        }
    }
    if (UCF_LS.aRegisteredClasses.length > 0) {
        for (var i = 0; i < UCF_LS.aRegisteredClasses.length; i++) {
            if (UCF_LS.aRegisteredClasses[i].onLSDestroy) {
                UCF_LS.aRegisteredClasses[i].onLSDestroy(this);
            }
        }
    }
    this.detachOfflineListener();
}
;
UCF_LS.prototype.registerLibrary = function() {
    var aScriptTags = document.getElementsByTagName("script"), sScriptUrl, iFilePos, iQueryPos, sUrlTemplate, bDebugMode;
    for (var i = 0; i < aScriptTags.length; i++) {
        sScriptUrl = aScriptTags[i].getAttribute("src");
        if (!sScriptUrl)
            continue;
        iFilePos = sScriptUrl.indexOf("/lightspeed.js");
        iQueryPos = sScriptUrl.lastIndexOf("?");
        if (iFilePos >= 0)
            break;
    }
    sUrlTemplate = sScriptUrl.substr(0, iFilePos) + "/classes/$$.js";
    bDebugMode = sUrlTemplate.indexOf("/js/dbg") > 0;
    if (bDebugMode) {
        sUrlTemplate += "?" + sScriptUrl.substr(iQueryPos + 1) + "__" + UCF_JsUtil.iGetTimeStamp();
    } else if (iQueryPos > 0) {
        sUrlTemplate += "?" + sScriptUrl.substr(iQueryPos + 1);
    }
    UCF_ClassLoader.registerLibrary("UCF_", sUrlTemplate, true);
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
    if (this.oOfflinePopup != null && this.oOfflinePopup.bIsOpen) {
        return;
    }
    if (this.oControlFactory.bIsControlDomRef(oControlDomRef)) {
        oControl = this.oControlFactory.oGetControlByDomRef(oControlDomRef, true);
    } else {
        oControl = this.oGetPageInternal();
    }
    oBrowserEvent.oSourceControl = oControl;
    if (bIsAccessibilityEvent) {
        if (UCF_System.sAccessibility == "ARIA") {
            oBrowserEvent.oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_AriaHelper"))(this);
        } else {
            oBrowserEvent.oAccessibilityHelper = new (UCF_ClassLoader.oGetClass("UCF_AccessibilityHelper"))(this);
        }
    }
    if (this.sStoredFocusId && oBrowserEvent.sGetName() == "mousedown" && !this.oBrowserWindow.bIsLocked()) {
        this.cleanUpStoredFocus();
    }
    this.dispatchCapturedEvent(oControl, oBrowserEvent);
    while (oControl && !oBrowserEvent.bCancelBubble) {
        this.dispatchBrowserEvent(oControl, oBrowserEvent);
        if (!oBrowserEvent.bCancelBubble)
            oControl = oControl.oGetParent();
    }
    if (bIsAccessibilityEvent) {
        oBrowserEvent.oAccessibilityHelper.apply(oBrowserEvent.oGetSource());
    }
    if (oBrowserEvent.bCancelBubble) {}
}
;
UCF_LS.prototype.attachOfflineListener = function() {
    this.oOfflinePopup = new (UCF_ClassLoader.oGetClass("UCF_SystemPopup"))();
    var sContent = this.sGetText("SAPUR_OFFLINE")
      , sTitle = this.sGetText("SAPUR_OFFLINE_TITLE")
      , sButton = this.sGetText("SAPUR_OFFLINE_CONTINUE");
    this.oOfflinePopup.setTitle(sTitle != "" ? sTitle : "Network Connection Lost");
    this.oOfflinePopup.setContent(sContent != "" ? sContent : "Your network connection is offline. Reconnecting your network will close this popup.");
    this.oBrowserWindow.attachEvent(this.oBrowserWindow.E_EVENTS.Offline, this, "onOffline");
    this.oBrowserWindow.attachEvent(this.oBrowserWindow.E_EVENTS.Online, this, "onOnline");
}
;
UCF_LS.prototype.detachOfflineListener = function() {
    this.oBrowserWindow.detachEvent(this.oBrowserWindow.E_EVENTS.Offline, this);
    this.oBrowserWindow.detachEvent(this.oBrowserWindow.E_EVENTS.Online, this);
    this.oOfflinePopup = null;
}
;
UCF_LS.prototype.onOffline = function() {
    this.lock();
    this.oOfflinePopup.show();
}
;
UCF_LS.prototype.onOnline = function() {
    this.unlock();
    if (this.oOfflinePopup != null && this.oOfflinePopup.bIsOpen) {}
    this.oOfflinePopup.hide();
}
;
UCF_LS.prototype.dispatchBrowserEvent = function(oHandler, oBrowserEvent) {
    var sHandlerName = "on" + oBrowserEvent.sGetName()
      , aDelegates = null;
    if (oHandler[sHandlerName]) {
        oHandler[sHandlerName](oBrowserEvent);
    }
    if (oHandler instanceof UCF_Control)
        aDelegates = oHandler.aGetDelegates();
    if (aDelegates != null) {
        for (var i = 0; i < aDelegates.length; i++) {
            this.dispatchBrowserEvent(aDelegates[i], oBrowserEvent);
        }
    }
}
;
UCF_LS.prototype.dispatchCapturedEvent = function(oControl, oBrowserEvent) {
    var sName = oBrowserEvent.sGetName()
      , aHandlers = this.mCapturedEvents[sName];
    if (!aHandlers)
        return;
    var aCallHandlers = [], oHandler;
    for (var i = 0; i < aHandlers.length; i++) {
        oHandler = aHandlers[i];
        if (oControl == oHandler.oControl || oControl.bIsChildOf(oHandler.oControl)) {
            aCallHandlers.push(oHandler);
        }
    }
    for (var i = 0; i < aCallHandlers.length; i++) {
        oHandler = aCallHandlers[i];
        oHandler.oControl[oHandler.sFunction](oBrowserEvent);
    }
}
;
UCF_LS.prototype.attachCaptureEvent = function(sName, oControl, sFunction) {
    var aHandlers = this.mCapturedEvents[sName];
    if (!aHandlers) {
        this.mCapturedEvents[sName] = [];
        aHandlers = this.mCapturedEvents[sName];
    }
    aHandlers.push({
        oControl: oControl,
        sFunction: sFunction
    });
}
;
UCF_LS.prototype.detachCaptureEvent = function(sName, oControl) {
    var aHandlers = this.mCapturedEvents[sName];
    if (!aHandlers)
        return;
    for (var i = 0; i < aHandlers.length; i++) {
        if (aHandlers[i].oControl == oControl) {
            aHandlers.splice(i, 1);
            i--;
        }
    }
    if (aHandlers.length == 0) {
        delete this.mCapturedEvents[sName];
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
UCF_LS.prototype.fireControlCreate = function(mParameter) {
    if (this.bFireLifecycleEvents) {
        var oSemanticEvent = this.oCreateSemanticEvent("CreateControl", mParameter, {});
        this.fireSemanticEvent(oSemanticEvent);
    }
    this.fireEvent(this.E_EVENTS.ControlCreate, mParameter);
}
;
UCF_LS.prototype.fireControlDestroy = function(mParameter) {
    if (this.bFireLifecycleEvents) {
        var oSemanticEvent = this.oCreateSemanticEvent("DestroyControl", mParameter, {});
        this.fireSemanticEvent(oSemanticEvent);
    }
    this.fireEvent(this.E_EVENTS.ControlDestroy, mParameter);
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
UCF_LS.prototype.fireBeforeRequest = function() {
    this.fireEvent(this.E_EVENTS.BeforeRequest, {
        oLS: this
    });
}
;
UCF_LS.prototype.fireAfterRequest = function() {
    this.fireEvent(this.E_EVENTS.AfterRequest, {
        oLS: this
    });
}
;
UCF_LS.prototype.fireAfterResponse = function() {
    this.fireEvent(this.E_EVENTS.AfterResponse, {
        oLS: this
    });
}
;
UCF_LS.prototype.fireUpdateComplete = function() {
    this.fireEvent(this.E_EVENTS.UpdateComplete, {
        oLS: this
    });
}
;
UCF_LS.prototype.enableLifecycleEvents = function() {
    this.bFireLifecycleEvents = true;
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
    return this.bIsolatedEmbedding || this.oGetPopupIFrame() == null;
}
;
UCF_LS.prototype.oGetMainLS = function() {
    if (!this.oMainLS) {
        this.oMainLS = this.oFindMainLS();
    }
    return this.oMainLS;
}
;
UCF_LS.prototype.oFindMainLS = function() {
    if (!this.oPopupManager)
        this.oPopupManager = new (UCF_ClassLoader.oGetClass("UCF_PopupManager"))(this);
    if (this.bIsolatedEmbedding)
        return this;
    var sPopupId = this.oPopupManager.sGetPopupIdByWindow(window);
    if (!sPopupId)
        return this;
    var oOpenerLS = this.oPopupManager.oGetOpenerLSByPopupIdInternal(sPopupId);
    if (oOpenerLS.bIsMainLS())
        return oOpenerLS;
    return oOpenerLS.oGetMainLS();
}
;
UCF_LS.prototype.oGetPopupIFrame = function() {
    try {
        parent.document.domain;
    } catch (ex) {
        return null;
    }
    var aIFrames = parent.document.getElementsByTagName("iframe");
    for (var x = 0; x < aIFrames.length; x++) {
        var oIFrame = aIFrames[x];
        try {
            if (oIFrame.contentWindow == window && oIFrame.getAttribute(this.M_CONSTANTS.LSPOPUP) == "true") {
                return oIFrame;
            }
        } catch (e) {}
    }
    return null;
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
    try {
        oMainLS.detachEvent(oMainLS.E_EVENTS.Lock, this);
        oMainLS.detachEvent(oMainLS.E_EVENTS.Unlock, this);
        oMainLS.detachEvent(oMainLS.E_EVENTS.PendingRequest, this);
    } catch (e) {}
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
UCF_LS.prototype.attachToTestsuite = function() {
    if (this.bIsMainLS()) {
        try {
            if (top.testFramework && top.testFramework.setLS) {
                top.testFramework.setLS(this.oGetInterface());
            }
        } catch (ex) {}
    }
}
;
UCF_LS.prototype.attachToQTP = function() {
    window.oQTP = this.oGetInterface(["oGetQTPControl"]);
}
;
UCF_LS.prototype.oGetPage = function() {
    var oPage = this.oGetPageInternal();
    return oPage ? oPage.oGetInterface() : null;
}
;
UCF_LS.prototype.oGetPageInternal = function() {
    if (!("oPage"in this)) {
        var aDivs = document.getElementsByTagName("DIV")
          , oFirstDiv = aDivs[0]
          , oSecondDiv = aDivs[1];
        if (this.oRootRef && this.oRootRef.getAttribute("ct") == "PAGE") {
            this.oPage = this.oControlFactory.oGetControlByDomRef(this.oRootRef, true);
        } else if (oFirstDiv && oFirstDiv.getAttribute("ct") == "PAGE") {
            this.oPage = this.oControlFactory.oGetControlByDomRef(oFirstDiv, true);
        } else if (oSecondDiv && oSecondDiv.getAttribute("ct") == "PAGE") {
            this.oPage = this.oControlFactory.oGetControlByDomRef(oSecondDiv, true);
        } else {
            this.oPage = null;
        }
        if (this.oPage) {
            if (UCF_LS.aRegisteredClasses.length > 0) {
                for (var i = 0; i < UCF_LS.aRegisteredClasses.length; i++) {
                    if (UCF_LS.aRegisteredClasses[i].onLSPageInit) {
                        UCF_LS.aRegisteredClasses[i].onLSPageInit(this.oPage);
                    }
                }
            }
        }
    }
    return this.oPage;
}
;
UCF_LS.prototype.oGetPopupManager = function() {
    var oPopupManager = this.oGetPopupManagerInternal();
    return oPopupManager ? oPopupManager.oGetInterface() : null;
}
;
UCF_LS.prototype.oGetPopupManagerInternal = function() {
    if (!this.oPopupManager) {
        this.oPopupManager = new (UCF_ClassLoader.oGetClass("UCF_PopupManager"))(this);
    }
    return this.oPopupManager;
}
;
UCF_LS.prototype.processInitializeIDs = function(aIds) {
    var oIdRef = UCF_DomUtil.$("UCF_InitializeIDs");
    if (!oIdRef && !aIds) {
        this.fireControlsInitialized();
        return;
    }
    var aIds = aIds || eval(oIdRef.innerHTML), sId, oControl;
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
    var oPage = this.oGetPageInternal();
    if (oPage) {
        if (oPage.loadingScripts()) {
            oPage.attachEvent(oPage.E_EVENTS.FinishedScriptLoading, this, "fireControlsInitialized");
        } else {
            this.fireControlsInitialized();
        }
    }
}
;
UCF_LS.prototype.fireControlsInitialized = function() {
    var oPage = this.oGetPageInternal();
    if (oPage) {
        this.oGetPageInternal().detachEvent(this.oGetPageInternal().E_EVENTS.FinishedScriptLoading, this, "fireControlsInitialized");
        this.fireEvent(this.E_EVENTS.ControlsInitialized, {});
    }
}
;
UCF_LS.prototype.oCreateControl = function(sControlName, sId) {
    return this.oControlFactory.oCreateControl(sControlName, sId);
}
;
UCF_LS.prototype.oGetClientControlById = function(sId) {
    return this.oControlFactory.oGetClientControlById(sId);
}
;
UCF_LS.prototype.oCreateClientControl = function(sControlName, sId, oJson) {
    var oClientControl = this.oControlFactory.oCreateClientControl(sControlName, sId, oJson);
    return oClientControl;
}
;
UCF_LS.prototype.oGetControlById = function(sId) {
    var oControl = this.oControlFactory.oGetControlById(sId);
    return oControl && oControl.oGetInterface();
}
;
UCF_LS.prototype.oGetQTPControl = function(sId) {
    var oControl = this.oControlFactory.oGetControlById(sId);
    if (!oControl)
        return null;
    var aQTPInterface = oControl.aMethodNames.slice(0);
    aQTPInterface.push("oGetQTPProperty");
    return oControl.oGetInterface(aQTPInterface);
}
;
UCF_LS.prototype.registerControlType = function(sPrefix, sCT, sType) {
    this.oControlFactory.registerControlType(sPrefix, sCT, sType);
}
;
UCF_LS.prototype.oGetControlByDomRef = function(oDomRef) {
    while (oDomRef && oDomRef != window && oDomRef != document) {
        var sId = oDomRef.id, iRootPos;
        if (oDomRef.getAttribute("ct")) {
            return this.oControlFactory.oGetControlByDomRef(oDomRef, true);
        }
        if (sId) {
            iRootPos = sId.indexOf("-r");
            if (iRootPos > 0 && iRootPos + 2 == sId.length) {
                oDomRef = UCF_DomUtil.$(sId.substr(0, iRootPos));
                return this.oControlFactory.oGetControlByDomRef(oDomRef, true);
            }
        }
        oDomRef = oDomRef.parentNode;
    }
    return null;
}
;
UCF_LS.prototype.purgeControls = function() {
    this.oControlFactory.purgeControls();
    UCF_DomUtil.purgeActiveElement();
}
;
UCF_LS.prototype.setRootRef = function(oRootRef) {
    this.oRootRef = (!oRootRef) ? document.body : oRootRef;
}
;
UCF_LS.prototype.oGetRootRef = function() {
    return this.oRootRef;
}
;
UCF_LS.prototype.oGetAssociatedAreaRef = function() {
    var oPage = this.oGetPageInternal();
    if (!oPage)
        return this.oRootRef;
    return oPage.oGetAssociatedAreaRef();
}
;
UCF_LS.prototype.oGetStaticAreaRef = function() {
    var oPage = this.oGetPageInternal();
    if (!oPage)
        return document.body;
    return oPage.oGetStaticAreaRef();
}
;
UCF_LS.prototype.sGetText = function(sKey, aVars) {
    if (!this.oMessageBundle) {
        this.oMessageBundle = new (UCF_ClassLoader.oGetClass("UCF_MessageBundle"))();
    }
    return this.oMessageBundle.sGetText(sKey, aVars);
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
    if (UCF_UserAgent.bIsIE()) {
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
    var oPage = this.oGetPageInternal();
    if (oPage) {
        var oAsso = oPage.oGetAssociatedAreaRef();
        if (oAsso)
            sHTML += "<div id='" + oAsso.id + "'></div>";
        if (oPage.oDomRef) {
            oPage.oDomRef.style.opacity = "0.2";
            UCF_JsUtil.delayedCall(100, this, "applyUpdate", [oPage, sHTML]);
        }
    } else {
        this.updateDomRef(this.oRootRef, sHTML);
    }
}
;
UCF_LS.prototype.applyUpdate = function(oPage, sHTML) {
    this.updateDomRef(oPage.oDomRef, sHTML);
    oPage.oDomRef.style.opacity = "1.0";
}
;
UCF_LS.prototype.sGetFocusedElementId = function() {
    var oPopupManager = this.oGetPopupManagerInternal()
      , sFocussedPopupWindowId = oPopupManager.sGetFocusedPopupId()
      , sResult = ""
      , oPWLsToDelegate = null;
    if (sFocussedPopupWindowId && sFocussedPopupWindowId != oPopupManager.sGetPopupIdByWindow(window)) {
        oPWLsToDelegate = oPopupManager.oGetLSByPopupId(sFocussedPopupWindowId);
        if (!oPWLsToDelegate)
            return sResult;
        if (oPWLsToDelegate == this)
            oPWLsToDelegate = null;
    }
    if (oPWLsToDelegate) {
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
    if (this.bIsDestroyed)
        return;
    if (sId == "")
        return;
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
        if (oPWLsToDelegate != this) {
            if (oPWLsToDelegate)
                oPWLsToDelegate.focusElement(sId);
            oFocusInfo.cleanUp();
            return;
        }
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
    oFocusInfo.apply(true);
    oFocusInfo.cleanUp();
    this.cleanUpStoredFocus();
}
;
UCF_LS.prototype.applyStoredFocus = function() {
    if (this.sStoredFocusId) {
        this.sStoredFocusApplyCall = UCF_JsUtil.delayedCall(0, this, "focusElement", [this.sStoredFocusId]);
    }
}
;
UCF_LS.prototype.cleanUpStoredFocus = function() {
    if (this.sStoredFocusApplyCall) {
        UCF_JsUtil.clearDelayedCall(this.sStoredFocusApplyCall);
        this.sStoredFocusApplyCall = null;
    }
    this.sStoredFocusId = "";
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
}
;
UCF_LS.prototype.unlockByNavigation = function() {
    this.oBrowserWindow.unlock(UCF_BrowserWindow.LOCKTYPES.PENDINGNAVIGATION);
}
;
UCF_LS.prototype.keepLocked = function(bKeepLocked) {
    this.bKeepLocked = bKeepLocked;
    if (bKeepLocked === false && this.bUnlockRequested) {
        this.unlock();
    }
}
;
UCF_LS.prototype.lock = function() {
    if (this.bKeepLocked) {
        this.bUnlockRequested = false;
    }
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
    if (this.bKeepLocked) {
        this.bUnlockRequested = true;
        return;
    }
    if (this.bIsLocked) {
        this.oBrowserWindow.unlock(UCF_BrowserWindow.LOCKTYPES.ROUNDTRIP);
        this.fireEvent(this.E_EVENTS.Unlock);
        var oLoadingAnim = this.oGetLoadingAnim();
        if (oLoadingAnim)
            oLoadingAnim.cancel();
        this.bIsLocked = false;
    }
}
;
UCF_LS.prototype.bLocked = function() {
    return this.bIsLocked;
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
UCF_LS.prototype.highlightDefaultButton = function(sActiveDefaultButtonId) {
    var oDefaultButton = null;
    if (this.sActiveDefaultButtonId) {
        oDefaultButton = this.oControlFactory.oGetControlById(this.sActiveDefaultButtonId);
        if (oDefaultButton)
            oDefaultButton.setIsDefaultButton(false);
    }
    this.sActiveDefaultButtonId = sActiveDefaultButtonId;
    if (this.sActiveDefaultButtonId) {
        oDefaultButton = this.oControlFactory.oGetControlById(this.sActiveDefaultButtonId);
        if (oDefaultButton)
            oDefaultButton.setIsDefaultButton(true);
    }
}
;
UCF_LS.prototype.oGetDefaultButton = function() {
    if (this.sActiveDefaultButtonId) {
        var oDefaultButton = this.oControlFactory.oGetControlById(this.sActiveDefaultButtonId);
        if (oDefaultButton)
            return oDefaultButton;
    }
    return null;
}
;
UCF_LS.prototype.oCreateBlindLayer = function(sId) {
    var oDomRef = document.createElement("IFRAME");
    oDomRef.frameBorder = "0";
    oDomRef.scrolling = "no";
    oDomRef.setAttribute("id", sId);
    oDomRef.style.position = "absolute";
    oDomRef.style.top = "-10000px";
    oDomRef.style.height = "1px";
    oDomRef.style.width = "1px";
    oDomRef.style.zIndex = UCF_LS.E_LAYERS.BLINDLAYER;
    oDomRef.src = "javascript:''";
    oDomRef.tabIndex = "-1";
    oDomRef.className = "lsnoprint";
    UCF_DomUtil.setOpacityStyle(oDomRef, 1);
    return {
        oDomRef: oDomRef,
        bUsed: true
    };
    ;
}
;
UCF_LS.prototype.oGetBlindLayer = function() {
    var oBlindLayer = null;
    if (!this.oBlindLayers)
        this.oBlindLayers = [];
    for (var i = 0; i < this.oBlindLayers.length; i++) {
        oBlindLayer = this.oBlindLayers[i];
        if (oBlindLayer.bUsed)
            oBlindLayer = null;
        else
            break;
    }
    if (!oBlindLayer) {
        oBlindLayer = this.oCreateBlindLayer("ls-blindlayer-" + this.oBlindLayers.length);
        this.oBlindLayers.push(oBlindLayer);
    }
    this.oGetStaticAreaRef().appendChild(oBlindLayer.oDomRef);
    oBlindLayer.bUsed = true;
    return oBlindLayer;
}
;
UCF_LS.prototype.releaseBlindLayer = function(oBlindLayer) {
    oBlindLayer.oDomRef.style.top = "-10000px";
    oBlindLayer.oDomRef.style.left = "1px";
    oBlindLayer.oDomRef.style.height = "1px";
    oBlindLayer.oDomRef.style.width = "1px";
    oBlindLayer.bUsed = false;
}
;
UCF_LS.prototype.setDragData = function(sData, sMimeType, sDragSessionId) {
    this.oBrowserWindow.oDragAndDropManager.setDragData(sData, sMimeType, sDragSessionId);
}
;
UCF_LS.prototype.sCreateDragSession = function(sDragSessionData) {
    return this.oBrowserWindow.oGetDragAndDropManager().sCreateDragSession(sDragSessionData);
}
;
UCF_LS.prototype.oGetDragSession = function() {
    return UCF_DomUtil.oGetTopWindow().oDragSession;
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
        var bTestMode = false;
        try {
            bTestMode = top.document.location.search.indexOf("clientrenderingtestmode=true") > -1;
        } catch (ex) {}
        if (!bTestMode) {
            bTestMode = document.location.search.indexOf("clientrenderingtestmode=true") > -1;
        }
        if (bTestMode) {
            this.oRenderManager.setMode(UCF_RenderManager.Mode.RENDERALL);
            UCF_ControlFactory.bTestMode = true;
        }
    }
    return this.oRenderManager;
}
;
UCF_LS.prototype.oGetLsNamespaceRenderManager = function() {
    if (!this.oRenderManager) {
        sap.ls.require("sap.ls.core.RenderManager");
        this.oRenderManager = new sap.ls.core.RenderManager(this);
    }
    return this.oRenderManager;
}
;
UCF_LS.prototype.setAlternativeKeyboardHandling = function(bSet) {
    this.bAlternativeKeyboardHandling = bSet;
    this.oBrowserWindow.bAlternativeKeyboardHandling = bSet;
}
;
UCF_LS.prototype.bIsAlternativeKeyboardHandling = function() {
    return this.bAlternativeKeyboardHandling;
}
;
UCF_LS.prototype.bIsIsolatedEmbedding = function() {
    return this.bIsolatedEmbedding;
}
;
UCF_LS.applySupportedThemes = function(oBody) {
    if (!oBody)
        return;
    oBody.setAttribute("supportedthemes", "sap_corbu");
    if (UCF_UserAgent.bIsIE() && !UCF_UserAgent.bIsStandardsMode()) {
        oBody.style.backgroundImage = "none";
        oBody.style.padding = "0";
    }
}
;
UCF_LS.prototype.registerInputAssistant = function(fCallback) {
    this.fInputAssistantCallBack = fCallback;
    return;
}
;
UCF_LS.prototype.unregisterInputAssistant = function(fCallback) {
    this.fInputAssistantCallBack = null;
}
;
UCF_LS.prototype.getModel = function(sName) {
    return this.oGetPageInternal().getModel(sName);
}
;
UCF_LS.prototype.updateModel = function(sName, oData, bMerge) {
    return this.oGetPageInternal().updateModel(sName, oData, bMerge);
}
;
UCF_LS.prototype.fireValidationSuccess = function(oValidationSuccess) {}
;
UCF_LS.prototype.fireParseError = function(oParseError) {}
;
UCF_LS.prototype.fireValidationError = function(oValidationError) {}
;
UCF_LS.prototype.fireFormatError = function(oError) {}
;
UCF_LS.prototype.registerDataType = function(sTypeName, sBaseClass, oDefaultConfiguratation, sImplementationUrl) {
    var oClass = UCF_ClassLoader.oGetClass("UCF_JSONModel");
    if (oClass && oClass.registerDataType) {
        oClass.registerDataType(sTypeName, sBaseClass, oDefaultConfiguratation, sImplementationUrl);
        if (oClass.getDataType(sTypeName)) {
            this.oControlFactory.updateControlTreeBindings(null, true);
        }
    }
}
;
UCF_LS.prototype.registerMapDataType = function(sTypeName, oJsonMap) {
    if (typeof (oJsonMap) == "string") {
        try {
            oJsonMap = new Function("return " + oJsonMap)();
        } catch (ex) {}
    }
    this.registerDataType(sTypeName, "Map", oJsonMap);
}
;
UCF_LS.prototype.registerCustomDataType = function(sTypeName, sImplementationUrl) {
    this.registerDataType(sTypeName, null, null, sImplementationUrl);
}
;
UCF_LS.prototype.initializeNamespace = function() {
    if (!window.sap)
        window.sap = {};
    var that = this;
    this.registerSapLsLibrary();
    if (!window.sap.ls)
        window.sap.ls = {
            declare: function(sName, fConstructor) {
                var aNames = sName.split(".")
                  , o = window;
                for (var i = 0; i < aNames.length; i++) {
                    if (!o[aNames[i]]) {
                        o[aNames[i]] = {};
                    }
                    o = o[aNames[i]];
                }
                o = {};
                return o;
            },
            require: function(sClassName) {
                return UCF_ClassLoader.oGetClass(sClassName);
            },
            implement: function(sImplClassName) {
                return UCF_ClassLoader.loadClass(sImplClassName, true);
            },
            extend: function(oA, oB) {
                for (var n in oB) {
                    if (oA[n])
                        continue;
                    oA[n] = oB[n];
                }
            },
            newObject: function(oPrototype) {
                return new (sap.ls.factory(oPrototype))();
            },
            factory: function(oPrototype) {
                function Factory() {}
                Factory.prototype = oPrototype;
                return Factory;
            }
        };
    sap.ls.require("sap.ls.controls.LibraryMetadata");
    sap.ls.controls.LibraryMetadata.initialize(this);
    sap.ls.require("sap.ls.controls.Button");
    var oButton = new sap.ls.controls.Button();
    oButton.render(document.body);
    return;
}
;
UCF_LS.prototype.registerSapLsLibrary = function() {
    var aScriptTags = document.getElementsByTagName("script"), sScriptUrl, iFilePos, iQueryPos, sUrlTemplate, bDebugMode;
    for (var i = 0; i < aScriptTags.length; i++) {
        sScriptUrl = aScriptTags[i].getAttribute("src");
        if (!sScriptUrl)
            continue;
        iFilePos = sScriptUrl.indexOf("/lightspeed.js");
        iQueryPos = sScriptUrl.lastIndexOf("?");
        if (iFilePos >= 0)
            break;
    }
    sUrlTemplate = sScriptUrl.substr(0, iFilePos) + "$$.js";
    bDebugMode = sUrlTemplate.indexOf("/js/dbg") > 0;
    if (bDebugMode) {
        sUrlTemplate += "?" + sScriptUrl.substr(iQueryPos + 1) + "__" + UCF_JsUtil.iGetTimeStamp();
    } else if (iQueryPos > 0) {
        sUrlTemplate += "?" + sScriptUrl.substr(iQueryPos + 1);
    }
    UCF_ClassLoader.registerLibrary("sap", sUrlTemplate, false);
}
;
UCF_LS.prototype.getSeleniumRecorder = function() {
    UCF_ClassLoader.oGetClass("UCF_SeleniumRecorder");
    return UCF_SeleniumRecorder.getInstance(this, 'ABAP');
}
;
UCF_LS.registerCustomInstance = function(oInstance) {
    UCF_LS.aRegisteredClasses.push(oInstance);
}
;
UCF_LS.aRegisteredClasses = [];
UCF_LS.prototype.aPublicMethods = ["destroy", "addDebugHandler", "oCreateSemanticEvent", "fireSemanticEvent", "fireControlCreate", "fireControlDestroy", "enableLifecycleEvents", "setSemanticEventHandler", "setApplicationExitHandler", "setPendingRequestHandler", "setMainWindowId", "oGetPage", "oGetPopupManager", "processInitializeIDs", "oCreateControl", "oGetClientControlById", "oCreateClientControl", "oGetControlById", "oGetQTPControl", "registerControlType", "purgeControls", "updateControl", "updatePage", "sGetFocusedElementId", "focusWindow", "focusElement", "scrollIntoView", "lock", "unlock", "bLocked", "highlightDefaultButton", "oGetDefaultButton", "setDragData", "sCreateDragSession", "oGetDragSession", "markDirty", "bIsDirty", "oGetWindow", "bHasDomChanged", "setDomChanged", "oGetRenderManager", "setAlternativeKeyboardHandling", "registerInputAssistant", "unregisterInputAssistant", "getModel", "updateModel", "registerMapDataType", "registerCustomDataType", "getSeleniumRecorder"];
function UCF_EventTimer() {
    UCF_Object.apply(this);
    this.iMaxDelay = 200;
    this.sTimeoutId = null;
    this.sPendingAction = null;
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
    return (this.sTimeoutId != null);
}
;
UCF_EventTimer.prototype.sGetPendingAction = function() {
    return this.sPendingAction;
}
;
UCF_EventTimer.prototype.rejectCall = function() {
    if (this.sTimeoutId != null) {
        UCF_JsUtil.clearDelayedCall(this.sTimeoutId);
        this.sTimeoutId = null;
        this.sPendingAction = null;
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
    UCF_System.EMBEDDING = {
        AUTO: "AUTO",
        ISOLATED: "ISOLATED"
    };
    this.sUseFocusColor = "";
    this.sIsRemoteDesktop = "false";
    this.sSetDirtyForRoundtrips = "false";
    this.mProperties = {};
    var aXMPs = UCF_DomUtil.childNodes(this.oDomRef, "XMP");
    for (var i = 0, l = aXMPs.length; i < l; i++) {
        var oXMP = aXMPs[i];
        if (oXMP.getAttribute("ct") == "PROP") {
            var oProp = new (UCF_ClassLoader.oGetClass("UCF_Property"))(oXMP);
            this.mProperties[oProp.sKey] = oProp.sValue;
            if (oProp.sKey == "UseFocusColor") {
                if (oProp.sValue == "true") {
                    this.sUseFocusColor = "true";
                } else if (oProp.sValue == "false") {
                    this.sUseFocusColor = "false";
                } else {}
            } else if (oProp.sKey == "IsRemoteDesktop") {
                if (oProp.sValue == "true") {
                    this.sIsRemoteDesktop = "true";
                } else if (oProp.sValue == "false") {
                    this.sIsRemoteDesktop = "false";
                } else {}
            } else if (oProp.sKey == "SetDirtyForRoundtrips") {
                if (oProp.sValue == "true") {
                    this.sSetDirtyForRoundtrips = "true";
                } else if (oProp.sValue == "false") {
                    this.sSetDirtyForRoundtrips = "false";
                } else {}
            }
        }
    }
    this.bIsAria = this.sAccessibility == "ARIA";
}
;UCF_System.prototype = new (UCF_ClassLoader.oGetClass("UCF_ControlInfo"))();
UCF_System.prototype.aAttributeNames = ["bIs508", "bIsRTL", "sDevice", "sLanguage", "iFirstDayOfWeek", "iMinimalDaysInFirstWeek", "bIsDesigntime", "bClientDebug", "sExternalThemeRoot", "sCSSURL", "sResourceRoot", "sSpaceGif", "bLoadOnDemand", "bUseAnimation", "bUseActiveX", "bIsUCF", "sPlatform", "sClientVersionKey", "sUserAgentName", "fUserAgentVersion", "bUseSafeTransportEncoding", "bUseXHR", "sAccessibility", "sEmbedding"];
UCF_System.prototype.aMethodNames = ["addClientListener", "removeClientListener", "playAnimation", "getCustomData"];
UCF_System.prototype.bIs508 = false;
UCF_System.prototype.bIsRTL = false;
UCF_System.prototype.sDevice = 'ie6';
UCF_System.prototype.sLanguage = 'en';
UCF_System.prototype.iFirstDayOfWeek = 0;
UCF_System.prototype.iMinimalDaysInFirstWeek = 4;
UCF_System.prototype.bIsDesigntime = false;
UCF_System.prototype.bClientDebug = false;
UCF_System.prototype.sExternalThemeRoot = '';
UCF_System.prototype.sCSSURL = '';
UCF_System.prototype.sResourceRoot = '.';
UCF_System.prototype.sSpaceGif = null;
UCF_System.prototype.bLoadOnDemand = true;
UCF_System.prototype.bUseAnimation = true;
UCF_System.prototype.bUseActiveX = true;
UCF_System.prototype.bIsUCF = false;
UCF_System.prototype.sPlatform = 'Windows';
UCF_System.prototype.sClientVersionKey = '';
UCF_System.prototype.sUserAgentName = 'MSIE';
UCF_System.prototype.fUserAgentVersion = 0;
UCF_System.prototype.bUseSafeTransportEncoding = true;
UCF_System.prototype.bUseXHR = true;
UCF_System.prototype.sAccessibility = 'NONE';
UCF_System.prototype.sEmbedding = 'AUTO';
UCF_System.prototype.setDefaultValues = function() {
    this.bIs508 = false;
    this.bIsRTL = false;
    this.sDevice = 'ie6';
    this.sLanguage = 'en';
    this.iFirstDayOfWeek = 0;
    this.iMinimalDaysInFirstWeek = 4;
    this.bIsDesigntime = false;
    this.bClientDebug = false;
    this.sExternalThemeRoot = '';
    this.sCSSURL = '';
    this.sResourceRoot = '.';
    this.sSpaceGif = null;
    this.bLoadOnDemand = true;
    this.bUseAnimation = true;
    this.bUseActiveX = true;
    this.bIsUCF = false;
    this.sPlatform = 'Windows';
    this.sClientVersionKey = '';
    this.sUserAgentName = 'MSIE';
    this.fUserAgentVersion = 0;
    this.bUseSafeTransportEncoding = true;
    this.bUseXHR = true;
    this.sAccessibility = 'NONE';
    this.sEmbedding = 'AUTO';
    if (this.getClientControl()) {
        this.setClientProperty("Is508", false);
        this.setClientProperty("IsRTL", false);
        this.setClientProperty("Device", 'ie6');
        this.setClientProperty("Language", 'en');
        this.setClientProperty("FirstDayOfWeek", 0);
        this.setClientProperty("MinimalDaysInFirstWeek", 4);
        this.setClientProperty("IsDesigntime", false);
        this.setClientProperty("ClientDebug", false);
        this.setClientProperty("ExternalThemeRoot", '');
        this.setClientProperty("CSSURL", '');
        this.setClientProperty("ResourceRoot", '.');
        this.setClientProperty("SpaceGif", null);
        this.setClientProperty("LoadOnDemand", true);
        this.setClientProperty("UseAnimation", true);
        this.setClientProperty("UseActiveX", true);
        this.setClientProperty("IsUCF", false);
        this.setClientProperty("Platform", 'Windows');
        this.setClientProperty("ClientVersionKey", '');
        this.setClientProperty("UserAgentName", 'MSIE');
        this.setClientProperty("UserAgentVersion", 0);
        this.setClientProperty("UseSafeTransportEncoding", true);
        this.setClientProperty("UseXHR", true);
        this.setClientProperty("Accessibility", 'NONE');
        this.setClientProperty("Embedding", 'AUTO');
    }
}
;
function UCF_ParseException(message) {
    if (arguments.length == 0)
        return;
    this.name = "ParseException";
    this.message = message;
}
;UCF_ParseException.prototype = new (UCF_ClassLoader.oGetClass("UCF_Exception"))();
function UCF_ClipboardData() {
    this.oClipboardTable = null;
    this.oClipboardContents = null;
    this.nColumnCount = 0;
    this.sEventSource = '';
}
var oClipboardData = null;
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
      , oNewElement = null;
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
    var oRange = oDomRefContainer.createTextRange()
      , oActiveElement = UCF_DomUtil.oGetActiveElement();
    oRange.select();
    oRange.execCommand("Copy");
    UCF_DomUtil.focusDomElement(oActiveElement);
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
UCF_ClipboardUtil.getClipboardTable = function() {
    if (oClipboardData && oClipboardData.oClipboardTable)
        return oClipboardData.oClipboardTable;
    return null;
}
;
UCF_ClipboardUtil.getClipboardContents = function() {
    if (oClipboardData)
        return oClipboardData.oClipboardContents;
    return null;
}
;
UCF_ClipboardUtil.getNumberOfRows = function() {
    if (!UCF_ClipboardUtil.isTable())
        return 0;
    return oClipboardData.oClipboardTable.length;
}
;
UCF_ClipboardUtil.getNumberOfColumns = function() {
    if (!UCF_ClipboardUtil.isTable())
        return 0;
    return oClipboardData.nColumnCount;
}
;
UCF_ClipboardUtil.isTable = function() {
    return (oClipboardData && oClipboardData.oClipboardTable != null);
}
;
UCF_ClipboardUtil.getCellData = function(row, column) {
    if (oClipboardData && oClipboardData.oClipboardTable[row][column])
        return oClipboardData.oClipboardTable[row][column];
    return "";
}
;
UCF_ClipboardUtil.getEventSource = function() {
    if (!UCF_ClipboardUtil.isTable())
        return '';
    return oClipboardData.sEventSource;
}
;
UCF_ClipboardUtil.tokenizeClipboard = function(sClipboardData) {
    var sRows;
    if (UCF_UserAgent.bIsGecko())
        sRows = sClipboardData.split("\n");
    else
        sRows = sClipboardData.split("\r\n");
    if (sRows.length > 1 && sRows[sRows.length - 1].length == 0)
        sRows = sRows.slice(0, sRows.length - 1);
    oClipboardData.oClipboardTable = new Array(sRows.length);
    var iNumberOfRows = oClipboardData.oClipboardTable.length;
    var columns_length;
    oClipboardData.nColumnCount = 0;
    for (var i = 0; i < iNumberOfRows; i++) {
        var columns = sRows[i].split("\t");
        if (columns) {
            oClipboardData.oClipboardTable[i] = new Array(columns.length);
            if (oClipboardData.nColumnCount < columns.length)
                oClipboardData.nColumnCount = columns.length;
            columns_length = columns.length;
            if (UCF_System.bIsRTL)
                for (var j = 0; j < columns_length; j++)
                    oClipboardData.oClipboardTable[i][j] = columns[columns_length - 1 - j];
            else
                for (var j = 0; j < columns_length; j++)
                    oClipboardData.oClipboardTable[i][j] = columns[j];
        }
    }
    if (sRows.length == 1 && oClipboardData.nColumnCount == 1) {
        oClipboardData.oClipboardTable = null;
        oClipboardData.nColumnCount = 0;
        return false;
    }
    return true;
}
;
UCF_ClipboardUtil.parseClipboard = function(pasteevent) {
    oClipboardData = new UCF_ClipboardData();
    if (pasteevent == null) {
        pasteevent = window.event;
        if (pasteevent.target)
            oClipboardData.sEventSource = pasteevent.target.id;
        else
            oClipboardData.sEventSource = pasteevent.srcElement.id;
    } else
        oClipboardData.sEventSource = pasteevent.oSource.id;
    if (typeof pasteevent.oDomEvent.clipboardData != "undefined")
        oClipboardData.oClipboardContents = pasteevent.oDomEvent.clipboardData.getData('text/plain');
    else if (typeof window.clipboardData != "undefined")
        oClipboardData.oClipboardContents = window.clipboardData.getData('Text');
    else {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (err) {
            return;
            alert('Permission to read the clipboard was denied. The javasrcipt file does not seem to be signed.\nPlease use \n user_pref("signed.applets.codebase_principal_support", true); \nas a workaround ');
        }
        var clipboard = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
        if (clipboard) {
            var transferable = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
            if (transferable) {
                var string = new Object();
                var stringLength = new Object();
                transferable.addDataFlavor("text/unicode");
                clipboard.getData(transferable, clipboard.kGlobalClipboard);
                transferable.getTransferData("text/unicode", string, stringLength);
                if (string) {
                    string = string.value.QueryInterface(Components.interfaces.nsISupportsString);
                    if (string) {
                        oClipboardData.oClipboardContents = string.data.substring(0, stringLength.value / 2);
                    }
                }
            }
        }
    }
    UCF_ClipboardUtil.tokenizeClipboard(oClipboardData.oClipboardContents);
    if (!UCF_ClipboardUtil.isTable())
        UCF_ClipboardUtil.cleanup();
}
;
UCF_ClipboardUtil.cleanup = function() {
    oClipboardData = null;
}
;
UCF_ClipboardUtil.pasteIntoTable = function(oInputField) {
    var oTable = oInputField.oParentControl;
    while (oTable && !UCF_JsUtil.bInstanceOf(oTable, "UCF_SapTable"))
        oTable = oTable.oParentControl;
    if (!oTable)
        return;
    var oMatrix = oTable.aGetVisibleContentGrid();
    var cols = UCF_ClipboardUtil.getNumberOfColumns();
    var rows = UCF_ClipboardUtil.getNumberOfRows();
    for (var iRow = 0; iRow < rows; iRow++)
        for (var iCol = 0; iCol < cols; iCol++) {
            if (oMatrix[oMatrix.iFocusRow + iRow] == undefined)
                return;
            var oMatrixElement = oMatrix[oMatrix.iFocusRow + iRow][oMatrix.iFocusColumn + iCol];
            if (!oMatrixElement)
                break;
            if (UCF_DomUtil.bContains(oMatrixElement, UCF_DomUtil.oGetFirstFocusableDomRef(oMatrixElement))) {
                var oEditField = oTable.oGetControlByDomRef(UCF_DomUtil.oGetFirstFocusableDomRef(oMatrixElement), true);
                if (UCF_JsUtil.bInstanceOf(oEditField, "UCF_EditFieldBase"))
                    oEditField.importValue(UCF_ClipboardUtil.getCellData(iRow, iCol));
            }
        }
}
;
UCF_ClipboardUtil.pasteToTable = function(oEditfield, oBrowserEvent) {
    UCF_ClipboardUtil.parseClipboard(oBrowserEvent);
    if (UCF_ClipboardUtil.isTable()) {
        UCF_ClipboardUtil.pasteIntoTable(oEditfield);
        UCF_ClipboardUtil.cleanup();
        return true;
    }
    return false;
}
;
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
;UCF_RequestUtil.oXmlHttp = null;
UCF_RequestUtil.oIFrameRequestObject = null;
UCF_RequestUtil.bUseXHR = true;
UCF_RequestUtil.bUseActiveX = true;
UCF_RequestUtil.retryCounter = 0;
UCF_RequestUtil.oGetHTTPRequestObject = function(bNew) {
    if (!bNew) {
        if (!this.oXmlHttp || this.oXmlHttp.readyState != 4) {
            this.oXmlHttp = this.oGetHTTPRequestObject(true);
        }
        return this.oXmlHttp;
    }
    if (this.bUseXHR && window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    if (this.bUseXHR && this.bUseActiveX && window.ActiveXObject) {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
        _fatal("Please enable ActiveX support!");
        return;
    }
    if (!this.oIFrameRequestObject) {
        this.oIFrameRequestObject = new UCF_IFrameRequestObject();
    }
    return this.oIFrameRequestObject;
}
;
UCF_RequestUtil.sendSyncRequest = function(sUrl, sMethod, mParameters, sBody) {
    return this.sendRequest(sUrl, sMethod, false, mParameters, null, null, sBody);
}
;
UCF_RequestUtil.sendAsyncRequest = function(sUrl, sMethod, mParameters, oObject, sMethodName, sBody) {
    this.sendRequest(sUrl, sMethod, true, mParameters, oObject, sMethodName, sBody);
}
;
UCF_RequestUtil.sendRequest = function(sUrl, sMethod, bAsync, mParameters, oObject, sMethodName, sBody) {
    var sPostBody = null
      , oCachedRequest = [];
    window.document.qtp_readystate = false;
    if (!sMethod)
        sMethod = "GET";
    if (!bAsync)
        bAsync = false;
    if (mParameters) {
        var sEncodedParameters = this.sEncodeParameters(mParameters)
          , sPostBody = null;
        if (sMethod == "GET") {
            if (sUrl.indexOf("?") > 0)
                sUrl += "&";
            else
                sUrl += "?";
            sUrl += sEncodedParameters;
        } else if (sMethod == "POST") {
            sPostBody = sEncodedParameters;
        }
    } else if (sBody) {
        sPostBody = sBody;
    }
    for (var i = 0; i < arguments.length; i++) {
        oCachedRequest.push(arguments[i]);
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
            };
            setTimeout(fPoller, 1);
        } else {
            oXmlHttp.onreadystatechange = function() {
              if(oXmlHttp.responseURL.indexOf('PageBuilder') != -1 && ysp.detailControl === true && oXmlHttp.responseText != ''){
                var taskId;
                var taskIdMatch = oXmlHttp.responseText.match(/taskId%3D.*%26isS/);
                if(taskIdMatch){
                  taskId = taskIdMatch[0].replace('taskId%3D','').replace('%26isS','');
                  var xhrObj = {
                  	readyState: 4,
                    status: 200,
                    response: oXmlHttp.response,
                    responseText: oXmlHttp.responseText,
                    responseXML: oXmlHttp.responseXML
                  };
                  xhrObj.responseXML.querySelectorAll('script-call')[5].remove();
                  xhrObj.getResponseHeader = function(){
                    return 'other';
                  }
                  ysp.detailControl = false;
                  _forwardRequestCallback(xhrObj, oObject, sMethodName, oCachedRequest);
                  window.open('http://ihn.chng.com.cn:10001/webdynpro/dispatcher/sap.com/tc~bpem~wdui~taskinstance/ATaskExecution?taskId='+taskId);
                }else{
                  _forwardRequestCallback(oXmlHttp, oObject, sMethodName, oCachedRequest);
                }
              }else{
                _forwardRequestCallback(oXmlHttp, oObject, sMethodName, oCachedRequest);
              }
            }
            ;
        }
    }
    oXmlHttp.open(sMethod, sUrl, bAsync);
    oXmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    if (sMethod == "POST") {
        oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    try {
        oXmlHttp.send(sPostBody);
    } catch (oExeption) {
        UCF_ErrorMessage.show(UCF_ErrorMessage.E_TYPE.NETWORK);
        return this.oCreateResponseObject(oXmlHttp);
    }
    if (!bAsync) {
        return this.oCreateResponseObject(oXmlHttp);
    }
}
;
UCF_RequestUtil.oCreateResponseObject = function(oXmlHttp) {
    var sStatusCode = oXmlHttp.status
      , bSuccess = sStatusCode == "200" || sStatusCode == "304"
      , sText = oXmlHttp.responseText
      , oDocument = oXmlHttp.responseXML
      , oJson = null;
    oParseError = null;
    if (oXmlHttp.getResponseHeader("content-type") == "application/json") {
        try {
            oJson = UCF_JsUtil.oParseJSON(sText);
            oParseError = this.oGetParseError(oDocument);
        } catch (ex) {
            oParseError = {
                errorCode: -1,
                url: "",
                reason: "Not valid json",
                srcText: ex.message,
                line: "",
                linepos: "",
                filepos: ""
            };
        }
    } else if (oXmlHttp.getResponseHeader("content-type") == "text/xml") {
        if (UCF_UserAgent.bIsFirefox(2) && !UCF_UserAgent.bIsFirefox(3)) {
            oDocument = UCF_JsUtil.oParseXMLDocument(sText);
        }
        oParseError = this.oGetParseError(oDocument);
    } else {
        oParseError = this.oGetParseError(oDocument);
    }
    window.setTimeout("eval(window.document.qtp_readystate=true)", 100);
    return {
        bSuccess: bSuccess,
        sStatusCode: sStatusCode,
        oParseError: oParseError,
        sText: sText,
        oJson: null,
        oDocument: oDocument
    };
}
;
UCF_RequestUtil.oGetParseError = function(oDocument) {
    var oParseError = {
        errorCode: -1,
        url: "",
        reason: "unknown error",
        srcText: "",
        line: "",
        linepos: "",
        filepos: ""
    };
    if (UCF_UserAgent.bIsIE() && oDocument && oDocument.parseError && oDocument.parseError.errorCode != 0) {
        return oDocument.parseError;
    }
    if (UCF_UserAgent.bIsGecko() && oDocument && oDocument.documentElement && oDocument.documentElement.tagName == "parsererror") {
        var sErrorText = oDocument.documentElement.firstChild.nodeValue
          , rParserError = /XML Parsing Error: (.*)\nLocation: (.*)\nLine Number (\d+), Column (\d+):(.*)/;
        if (rParserError.test(sErrorText)) {
            oParseError.reason = RegExp.$1;
            oParseError.url = RegExp.$2;
            oParseError.line = parseInt(RegExp.$3);
            oParseError.linepos = parseInt(RegExp.$4);
            oParseError.srcText = RegExp.$5;
        }
        return oParseError;
    }
    if (UCF_UserAgent.bIsWebKit() && oDocument && oDocument.documentElement && oDocument.documentElement.tagName == "html" && oDocument.getElementsByTagName("parsererror").length > 0) {
        var sErrorText = UCF_JsUtil.sSerializeXMLDocument(oDocument)
          , rParserError = /error on line (\d+) at column (\d+): ([^<]*)/;
        if (rParserError.test(sErrorText)) {
            oParseError.reason = RegExp.$3;
            oParseError.url = "";
            oParseError.line = parseInt(RegExp.$1);
            oParseError.linepos = parseInt(RegExp.$2);
            oParseError.srcText = "";
        }
        return oParseError;
    }
    if (!oDocument || !oDocument.documentElement) {
        return oParseError;
    }
    return null;
}
;
UCF_RequestUtil.sEncodeParameters = function(mParameters) {
    var aBuffer = [];
    for (var i in mParameters) {
        if (mParameters[i]instanceof Array) {
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
function _forwardRequestCallback(oXmlHttp, oCallbackObject, sMethodName, oCachedRequest) {
    if (oXmlHttp.readyState != 4)
        return;
    if (UCF_UserAgent.bIsFirefox() && _firefoxRequestFailed(oXmlHttp)) {
        return;
    } else if (UCF_UserAgent.bIsIE() && UCF_RequestUtil._ieRequestFailed(oXmlHttp, oCachedRequest)) {
        return;
    }
    var oResponse = UCF_RequestUtil.oCreateResponseObject(oXmlHttp);
    oCallbackObject[sMethodName](oResponse);
    delete oXmlHttp.onreadystatechange;
}
;UCF_RequestUtil._ieRequestFailed = function(oXmlHttp, oCachedRequest) {
    if (oXmlHttp && oXmlHttp.status && oCachedRequest) {
        var sStatus = oXmlHttp.status.toString();
        switch (sStatus) {
        case "12019":
        case "12152":
        case "12031":
            if (this.retryCounter < 5) {
                this.retryCounter++;
                if (this.retryCounter <= 1) {
                    UCF_RequestUtil.sendRequest.apply(UCF_RequestUtil, oCachedRequest);
                } else {
                    UCF_JsUtil.delayedCall(this.retryCounter * 50, UCF_RequestUtil, "sendRequest", oCachedRequest);
                }
            } else {
                this.retryCounter = 0;
                UCF_ErrorMessage.show(UCF_ErrorMessage.E_TYPE.NETWORK);
            }
            return true;
            break;
        }
    }
    this.retryCounter = 0;
    return false;
}
;
function _firefoxRequestFailed(oXmlHttp) {
    var bRequestFailed = false;
    try {
        bRequestFailed = (oXmlHttp.status == 0);
    } catch (e) {
        bRequestFailed = true;
    }
    if (bRequestFailed) {
        UCF_ErrorMessage.show(UCF_ErrorMessage.E_TYPE.NETWORK);
        return true;
    }
    return false;
}
;UCF_RequestUtil.sendFormRequest = function(sMethod, sUrl, mParameters, sTarget) {
    if (sMethod == "GET" && !mParameters && !sTarget) {
        document.location.href = sUrl;
        return;
    }
    var oForm = document.createElement("form");
    oForm.setAttribute("action", sUrl);
    oForm.setAttribute("target", sTarget);
    oForm.setAttribute("method", sMethod);
    for (var i in mParameters) {
        var oValue = mParameters[i];
        if (typeof oValue == "string") {
            this.addFormField(oForm, i, oValue);
        } else {
            for (var j = 0; j < oValue.length; j++) {
                this.addFormField(oForm, i, oValue[j]);
            }
        }
    }
    document.body.appendChild(oForm);
    oForm.submit();
    document.body.removeChild(oForm);
}
;
UCF_RequestUtil.addFormField = function(oForm, sName, sValue) {
    var oInput = document.createElement("input");
    oInput.setAttribute("type", "hidden");
    oInput.setAttribute("name", sName);
    oInput.setAttribute("value", sValue);
    oForm.appendChild(oInput);
}
;
