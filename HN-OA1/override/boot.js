// /////////初始化[BEGIN]
(function(w, tax, o, s, gaf, acf, awf, apf, ca, wa, ip) {
	var xo = tax();
	if (!xo) {
		w.alert("jsfw无法正常运行，可能原因：\n1)  浏览器的安全级别调得过高\n2)  浏览器被第三方软件禁用AX");
		return;
	}
	;
	if (o) {
		o.Class = {};
		o.WebUI = {};
		o.WebUIList = '';
		o.Path = gaf(s, "src").replace("boot.js", "");
		o.Theme = (typeof (gaf(s, "theme")) == 'string') ? gaf(s, "theme")
				: 'bjml';
		if (o.Theme == "")
			o.Theme = "bjml";
		o.JsPath = "js";
		o.Call = function(us, absPath) {
			return ca(o.JsPath, us, absPath);
		};
		o.Wait = function(uc, uf) {
			return wa(uc, uf, this);
		};
		o.Import = function(us) {
			if (us.substr(0, 6).toLowerCase() == 'webui.')
				us = 'webUI.' + us.substr(6);
			return ip(o.Path, us.replace(/\./img, '/'), xo);
		};
	} else
		o = w.jsfw;
	var cl, cw, pl;
	cl = gaf(s, "loadClass");
	cl && acf(cl.replace(/,/img, ';').split(";"), o.Import);
	cw = gaf(s, "loadWebUI");
	cw = cw || '';
	cw && awf(cw.replace(/,/img, ';').split(";"), o.Import);
	o.WebUIList += ';' + cw;
	pl = gaf(s, "loadPrototype");
	pl && apf(pl.replace(/,/img, ';').split(";"), o.Import);
})
// -----------------------------------------------------------------------------
(window, function() {// tax
	var ie = /msie/i.test(navigator.userAgent);
	if (ie) {
		for ( var i = 0; i < 5; i++) {
			try {
				var xo = new ActiveXObject([ "MSXml2.XMLHTTP",
						"Microsoft.XMLHTTP", "Msxml2.XMLHTTP.5.0",
						"Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.3.0" ][i]);
				return xo;
			} catch (e) {
				try {
					var xo = new XMLHttpRequest();
					return xo;
				} catch (e) {
				}
			}
		}
		;
		return false;
	} else {
		try {
			var xo = new XMLHttpRequest();
			return xo;
		} catch (e) {
			return false;
		}
	}
}, (function() {// o
	if (window.jsfw)
		return false;
	window.jsfw = {};
	return window.jsfw;
})(), (function() {// s
	var s = document.getElementsByTagName("script");
	return s[s.length - 1];
})(), function(o, s) {// gaf
	return o.getAttribute(s);
}, function(t, f) {// acf
	for ( var i in t)
		if (t.hasOwnProperty(i))
			if (t[i] != '') {
				f('classes.' + t[i]);
			}
	;
}, function(t, f) {// awf
	for ( var i in t)
		if (t.hasOwnProperty(i))
			if (t[i] != '') {
				f('webUI.' + t[i]);
			}
	;
}, function(t, f) {// apf
	for ( var i in t)
		if (t.hasOwnProperty(i))
			if (t[i] != '') {
				f('prototypes.' + t[i]);
			}
	;
},
/*
 * function (p, t, f, o){//apf for (var i in t) f(p, "" + t[i], o); },
 */
function(p, s, absPath) {// ca
	var n = document.createElement("script");
	var h = document.getElementsByTagName("head");
	n.type = "text/javascript";
	if (absPath) {
		n.src = s;
	} else {
		n.src = p + "/" + s
				+ (s.toLowerCase().substr(s.length - 3) == '.js' ? '' : '.js');
	}
	// n.src = p + "/" + s + ".js";
	h && h[0].appendChild(n);
}, function(c, f, o) {// wa
	if (c())
		return f();
	setTimeout(function() {
		o.Wait(c, f);
	}, 50);
}, function(p, s, o) {// ip
	var strTem = (p.substr(p.length - 1) == '/') ? (p + s) : (p + "/" + s);
	o.open("get", strTem + ".js", false);
	o.send(null);
	if (o.status == 0 || o.status == 200)
		(new Function(o.responseText))();
});
// /////////初始化[END]

/*
 * // /////////预先加载Ajax类[BEGIN] if (!jsfw.Ajax) { if (!jsfw.Class.Ajax)
 * jsfw.Import("classes.Ajax"); jsfw.Ajax = new jsfw.Class.Ajax(); }
 */
// Cookie操作--
if (!jsfw.getCookie) {
	jsfw.getCookie = function(Name) {
		var search = Name + "=";
		if (document.cookie.length > 0) {
			var offset = document.cookie.indexOf(search);
			if (offset != -1) {
				offset += search.length;
				var end = document.cookie.indexOf(";", offset);
				if (end == -1)
					end = document.cookie.length;
				return unescape(document.cookie.substring(offset, end));
			} else
				return "";
		} else
			return "";
	};
	jsfw.setCookie = function(name, value) {
		var today = new Date();
		var expires = new Date();
		expires.setTime(today.getTime() + 1000 * 60 * 60 * 24 * 365);
		document.cookie = name + "=" + escape(value) + "; path=/; expires="
				+ expires.toGMTString();
	};
	jsfw.delCookie = function(name) {
		var today = new Date();
		var expires = new Date();
		expires.setTime(today.getTime() - 1);
		document.cookie = name + "=0; path=/; expires=" + expires.toGMTString();
	};
}
// 获取URL中的参数
if (!jsfw.getParam) {
	jsfw.getParam = function(sParam, retArr) {
		var strTem = self.location.href;
		var intTem = strTem.indexOf('?');
		if (intTem == -1)
			return '';
		strTem = strTem.substr(intTem + 1);
		var arr = strTem.split('&');
		var arrR = new Array();
		for ( var i = 0; i < arr.length; i++) {
			if (arr[i].toLowerCase().indexOf(sParam.toLowerCase() + '=') == 0)
				arrR[arrR.length] = arr[i].substr(sParam.length + 1);
			// return arr[i].substr(sParam.length+1);
		}
		if (retArr)
			return arrR;
		if (arrR.length == 1)
			return arrR[0];
		if (arrR.length > 1)
			return arrR.toString();
		return '';
	};
}
// 获取控件的绝对位置--
if (!jsfw.getAbsoluteLeft) {
	jsfw.getAbsoluteLeft = function(aObj, bNotAbs) {
		var obj = (typeof (aObj) == 'string') ? document.getElementById(aObj)
				: aObj;
		var iResult = obj.offsetLeft;
		if (bNotAbs) {
			while (obj = obj.offsetParent) {
				if (obj.style.position == 'absolute')
					return iResult;
				iResult += obj.offsetLeft;
			}
		} else {
			while (obj = obj.offsetParent) {
				iResult += obj.offsetLeft;
			}
		}
		return iResult;
	};

	jsfw.getAbsoluteTop = function(aObj, bNotAbs) {
		var obj = (typeof (aObj) == 'string') ? document.getElementById(aObj)
				: aObj;
		var iResult = obj.offsetTop;
		if (bNotAbs) {
			while (obj = obj.offsetParent) {
				if (obj.style.position == 'absolute')
					return iResult;
				iResult += obj.offsetTop;
			}
		} else {
			while (obj = obj.offsetParent) {
				iResult += obj.offsetTop;
			}
		}
		return iResult;
	};
}
if (!jsfw.addEvent) {
	jsfw.addEvent = function(obj, type, fn, capture) {
		if (obj.attachEvent) {
			obj['e' + type + fn] = fn;
			obj[type + fn] = function() {
				obj['e' + type + fn](window.event);
			};
			obj.attachEvent('on' + type, obj[type + fn]);
		} else {
			obj.addEventListener(type, fn, typeof(capture) == 'undefined' ? false : capture);
		}
	};
	jsfw.removeEvent = function(obj, type, fn, capture) {
		if (obj.detachEvent) {
			obj.detachEvent('on' + type, obj[type + fn]);
			obj[type + fn] = null;
		} else
			obj.removeEventListener(type, fn, typeof(capture) == 'undefined' ? false : capture);
	};
}