(function ($) {
	$.fn.hoverClass = function (b) {
		this.each(function (i, c) {
			$(c).hover(function () {
				$(this).addClass(b);
			}, function () {
				$(this).removeClass(b);
			});
		});
		return this;
	};
	//IE8,IE9
	if(!window.console){
		console = {log:function(){}, warning: function(){}, error: function(){}};
	}
})(jQuery);

// jquery.mask.js  遮罩
(function ($) {
	$.extend($.fn, {
		mask : function (msg, maskDivClass) {
			this.unmask().stop(true);
			var op = {
				z : 1000,
				bgcolor : '#FEFEFE'
			};
			var original = $(document.body);
			var position = {
				top : 0,
				left : 0
			};
			if (this[0] && this[0] !== window.document) {
				original = this;
				position = original.position();
			}
			var maskDiv = $('div.maskdivgen', original).first();
			if (maskDiv.size() == 0) {
				maskDiv = $('<div class="maskdivgen" style="opacity:0.2; filter:Alpha(opacity=20)">&nbsp;</div>');  /*filter style only for IE8*/
				maskDiv.appendTo(original);
			}
			var maskWidth = original.outerWidth();
			if (!maskWidth) {
				maskWidth = original.width();
			}
			var maskHeight = original.outerHeight();
			if (!maskHeight) {
				maskHeight = original.height();
			}
			maskDiv.css({
				position : 'absolute',
				top : position.top,
				left : position.left,
				'z-index' : op.z,
				width : maskWidth,
				height : maskHeight,
				'background-color' : op.bgcolor
			});
			if (maskDivClass) {
				maskDiv.addClass(maskDivClass);
			}
			if (msg) {
				var msgDiv = $('div.maskdivmsg', original);
				if (msgDiv.size() == 0) {
					msgDiv = $('<div class="maskdivmsg" style="position:absolute;border:#F2F2F2 1px solid; padding:2px;background:#ccca"><div style="line-height:24px;border:#F7F7F7 1px solid;background:white;padding:2px 10px 2px 10px">' + msg + '</div></div>');
					msgDiv.appendTo(original);
				}
				var top = ($(window).height() - msgDiv.height()) / 2;
				var left = ($(window).width() - msgDiv.width()) / 2;
				var scrollTop = $(document).scrollTop();
				var scrollLeft = $(document).scrollLeft();
				msgDiv.css({
					cursor : 'wait',
					top : top + scrollTop,
					left : left + scrollLeft
				});
			}
			maskDiv.fadeIn('fast');
			return maskDiv;
		},
		unmask : function () {
			var original = $(document.body);
			if (this[0] && this[0] !== window.document) {
				original = $(this[0]);
			}
			return $("div.maskdivgen,div.maskdivmsg", original).stop(true).fadeOut('fast', 0, function () {
				$(this).remove();
			});
		}
	});
})(jQuery);

// jquery.xslt.js  视图解析
(function ($) {
	function xml2String($xml) {
		try {
			return (new XMLSerializer()).serializeToString($xml);
		} catch (e) {
			return $xml.xml;
		}
	}

	var transform = function ($xml, $xsl, $param) {
		try {
			var $proc = new XSLTProcessor();
		} catch (e) {
			console.log('浏览器不支持XLTProcess！');
		}
		if (!$proc) {
			var $xslt = new ActiveXObject("Msxml2.XSLTemplate.6.0");
			var $xsldoc = new ActiveXObject("Msxml2.FreeThreadedDOMDocument.6.0");
			$xsldoc.async = false;
			$xsldoc.loadXML($xsl);
			if ($xsldoc.parseError.errorCode) {
				// console.warn("You have errors in xsl document: " +
				// $xsldoc.parseError.reason);
				// throw ("You have errors in xsl document: " +
				// $xsldoc.parseError.reason);
			}
			var $xmldoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
			$xmldoc.async = false;
			$xmldoc.loadXML($xml);
			if ($xmldoc.parseError.errorCode) {
				// console.warn("You have errors in xml document: " +
				// $xmldoc.parseError.reason);
				// throw ("You have errors in xml document: " +
				// $xmldoc.parseError.reason);
			}
			$xslt.stylesheet = $xsldoc;
			var $proc = $xslt.createProcessor();
			$proc.input = $xmldoc;
			if ($param && $param instanceof Object)
				$.each($param, function ($n, $v) {
					if ($v !== undefined)
						$proc.addParameter($n, $v);
				});
			$proc.transform();
			return $proc.output;
		} else {
			var $parser = new DOMParser();
			var $xmlobj = $parser.parseFromString($xml, "text/xml");
			var $xslobj = $parser.parseFromString($xsl, "text/xml");
			var $proc = new XSLTProcessor();
			if ($param && $param instanceof Object)
				$.each($param, function ($n, $v) {
					if ($v !== undefined)
						$proc.setParameter(null, $n, $v);
				});
			$proc.importStylesheet($xslobj);
			var $resultDocument = $proc.transformToDocument($xmlobj);
			return xml2String($resultDocument);
		}
	};
	var load = function ($url, $callback) {
		$.ajax({
			url : $url,
			dataType : 'text',
			async : false,
			success : $callback,
			error : function () {
				throw ("I couldn't the file load from " + $url);
			}
		});
	};
	var $methods = {
		transform : function ($o) {
			var $xmlstring = $o.xmlstring;
			var $xslstring = $o.xslstring;
			if ($o.xmlurl) {
				load($o.xmlurl, function ($r) {
					$xmlstring = $r;
				});
			} else if (!$xmlstring) {
				// console.warn('The xmlstring or xmlurl must be provided');
				// throw ('The xmlstring or xmlurl must be provided');
			}
			if ($o.xslurl) {
				load($o.xslurl, function ($r) {
					$xslstring = $r;
				});
			} else if (!$xslstring) {
				// console.warn('The xslstring or xslurl must be provided');
				// throw ('The xslstring or xslurl must be provided');
			}
			return transform($xmlstring, $xslstring, $o.params);
		}
	};
	$.XSLTransform = $methods.transform;
})(jQuery);

// jquery.path base busi admin
(function ($) {
	$.extend({
		path : {
			getLocalDbName : function (/* optional */
				url) {
				url = url || document.location.pathname;
				if (!/^\//.test(url))
					url = "/" + url;
				return url.substring(0, url.toLowerCase().indexOf(".nsf") + 4);
			},
			getLocalFileName : function (/* optional */
				url) {
				var db = $.path.getLocalDbName(url);
				return db.substring(db.lastIndexOf("/") + 1);
			},
			/* 获取当前应用目录路径 */
			getLocalDbPath : function (/* optional */
				url) {
				url = $.path.getLocalDbName(url);
				return url.substring(0, url.lastIndexOf("/"));
			},
			getConfigDbName : function (/* optional */
				url) {
				return $.path.getLocalDbPath(url) + '/MoaWebConfigSet.nsf';
			},
			getLocalLogName9 : function (/* optional */
				url) {
				return $.path.getLocalDbPath(url) + '/' + $('[name=fldLogDbName]').val();
			},
			getFlowDbName : function (/* optional */
				url) {
				return $.path.getLocalDbPath(url) + "/MoaWebFlowSet.nsf";
			},
			/* 获取工作库路径 */
			getWebDbName : function (/* optional */
				url) {
				return $.path.getLocalDbPath(url) + "/MoaWebOffice.nsf";
			},
			/* 获取经办库路径 */
			getHandleDbName : function (/* optional */
				url) {
				return $.path.getLocalDbPath(url) + "/MoaWebHandle.nsf";
			},
			/* 获取首页库路径 */
			getHomeDbName : function () {
				return this.getLocalDbPath() + "/home.nsf";
			},
			/* 获取工具库路径 */
			getToolDbName : function () {
				return $.path.getLocalDbPath() + "/MoaWebTools.nsf";
			},
			/* 获取框架库路径 */
			getFrameDbName : function (/* optional */
				dbname) {
				return "/WebOfficeFrame/" + (dbname || "syslib.nsf");
			},
			/* 视图中获取当前数据库 */
			getViewDbName : function (_p) {
				var $p = $(_p || document);
				return ($('[name=fldViewDb]', $p).val() != '') ? $('[name=fldViewDb]', $p).val() : $.path.getLocalFileName();
			},
			/* 视图中获取当前数据库路径 */
			getViewDbPath : function (_p) {
				return $.path.getLocalDbPath() + "/" + $.path.getViewDbName(_p);
			},
			/* 当前视图 */
			getView : function (_p) {
				var $p = $(_p || document);
				return $('[name=fldView]', $p).val();
			},
			/* 视图带路径 */
			getViewPath : function (_p) {
				return $.path.getViewDbPath(_p) + "/" + $.path.getView(_p);
			}
		},
		base : {
			each : function (elements, callback) {
				$.each(elements, function (i, ele) {
					callback(ele, i);
				});
			},
			filter : function (elements, callback) {
				return $.grep(elements, function (ele, i) {
					return callback(ele, i);
				});
			},
			some : function (elements, callback) {
				var b = false;
				$.each(elements, function (i, ele) {
					if (callback(ele, i) == true) {
						b = true;
						return false;
					}
				});
				return b;
			},
			every : function (elements, callback) {
				var b = true;
				$.each(elements, function (i, ele) {
					if (callback(ele, i) == false) {
						b = false;
						return false;
					}
				});
				return b;
			},
			indexOf : function (elements, item, fnCompare) {
				var r = -1;
				$.each(elements, function (i, ele) {
					var b = false;
					if ($.isFunction(fnCompare)) {
						b = fnCompare(ele, item);
					} else {
						b = ele == item;
					}
					if (b == true) {
						r = i;
						return false;
					}
				});
				return r;
			},
			open : function (url) {
				window.open(url);
			},
			select : function (bul) {
				bul = bul || false;
				$('[name="$$SelectDoc"]:visible').prop('checked', bul);
			},
			selected : function () {
				var arr = [];
				$('[name="$$SelectDoc"]:checked:visible').each(function (i, o) {
					arr.push($(o).val());
				});
				return arr;
			},
			alert : function (content) {
				$.dialog.alert(content);
			},
			dialog : function (options) {
				var p = $.extend({
						title : '',
						data : {},
						width : 640,
						height : 480,
						fixed : true,
						lock : true,
						padding : 0,
						resize : false,
						esc : false,
						cache : false,
						max : false,
						min : false
					}, options);
				p.content = 'url:' + options.url;
				if (options.argus)
					p.data.argus = options.argus;
				if (options.callback)
					p.data.callback = options.callback;
                    //2015-10-19  陈开   添加close方法,解决部门选择框和控件重叠bug
                    if (options.close)
						p.data.close = options.close;
				return $.dialog(p);
			},
			xsltTransform : function (options, callback) {
				var d = $.XSLTransform(options);
				if ($.isFunction(callback)) {
					callback(d);
				}
				return d;
			}
		},
		busi : {
			open : function (appdb, caseid) {
				window.open($.path.getWebDbName() + '/agtOpenBusiDoc?OpenAgent&appdb=' + appdb + '&caseid=' + caseid);
			},
			start : function (options) {
				var opt = {
					db : $('[name=fldViewDb]').val(),
					form : '',
					proc : ''
				}
				$.extend(opt, options);
				var url = $.path.getConfigDbName() + '/agtQueryStartApp?OpenAgent&appdb=' + opt.db + '&appform=' + opt.form + '&procname=' + opt.proc;
				$.ajax({
					url : url,
					dataType : 'json',
					success : function (json) {
						if (json.length == 0) {
							// alertMsg.warn("您没有启动这种类型文件的权限！");
							alert("您没有启动这种类型文件的权限！");
						} else if (json.length == 1) {
							var url = $.base.open($.path.getConfigDbName() + '/agtStartApp?OpenAgent&proc=' + encodeURIComponent(json[0].procname) + '&node=' + encodeURIComponent(json[0].nodename) + '&group=' + encodeURIComponent(json[0].groupname));
							//$.base.open(url);
						} else {
							$vt.dialog({
								height : 340,
								width : 480,
								title : '新启文件',
								url : $.path.getConfigDbName() + '/fomStartApp?OpenForm',
								argus : json,
								callback : function (data) {
									$.base.open($.path.getConfigDbName() + '/agtStartApp?OpenAgent&proc=' + encodeURIComponent(data.procname) + '&node=' + encodeURIComponent(data.nodename) + '&group=' + encodeURIComponent(data.groupname));
								}
							});
						}

					}
				});
			},
			/* 加入收藏夹 */
			bookmark : function (title, url) {
				url = url || ($.path.getWebDbName() + '/agtOpenBusiDoc?OpenAgent&appdb=' + $ct.getLocalFileName() + '&caseid=' + $('[name=fldCaseDocUNID]').val());
				$vt.dialog({
					title : '加入收藏',
					url : $.path.getLocalDbPath() + '/MoaWebBookmark.nsf/fomBookmark?OpenForm',
					argus : {
						title : title,
						url : url
					},
					width : 600,
					height : 300
				});
			},
			del : function (options) {
				if (options.db == '' || options.db == 'undefined' || options.id == '' || options.id == 'undefined') {
					$.base.alert('请选择您要删除的文件！');
					return false;
				}
				$.dialog.confirm('您确定要删除选中的文件吗？', function () {
					var opt = {
						db : '',
						id : '',
						adocid : '',
						beAdmin : '0', // 流程文件是否已管理员角色进行删除 '0'否 '1' 是
						delAllInfor : '0', // 人员管理，是否删除所有信息 '0'否 '1' 是
						isgeneral : '0', // 是否以普通文档形式删除，特殊标示。处理类似病文文档，包含流程信息所有字段，但为非流程文件 '0'否 '1' 是
						delInfor : '' //删除原因
					}
					$.extend(opt, options);
					var o = {
						"db" : opt.db,
						"id" : opt.id,
						"adocid" : opt.adocid,
						"beAdmin" : opt.beAdmin,
						"delAllInfor" : opt.delAllInfor,
						"isgeneral" : opt.isgeneral,
						"delInfor" : opt.delInfor
					};
					$.ajax({
						url : $.path.getConfigDbName() + '/agtDelDoc?OpenAgent',
						type : 'POST',
						dataType : 'json',
						data : o,
						complete : function (xhr) {
							if ($.isFunction(opt.callback)) {
								opt.callback(xhr);
							}
						}
					});
				});
			}
		}
	});
})(jQuery);

if (!Array.prototype.indexOf)
	Array.prototype.indexOf = function (item, i) {
		i || (i = 0);
		var length = this.length;
		if (i < 0)
			i = length + i;
		for (; i < length; i++)
			if (this[i] === item)
				return i;
		return -1;
	};

var REGX_HTML_DECODE = /&\w+;|&#(\d+);/g;
var HTML_DECODE = {
	"&lt;" : "<",
	"&gt;" : ">",
	"&amp;" : "&",
	"&nbsp;" : " ",
	"&quot;" : "\"",
	"&copy;" : ""
};
function decodeHtml(s) {
	return (typeof s != "string") ? s : s.replace(REGX_HTML_DECODE, function ($0, $1) {
		var c = HTML_DECODE[$0];
		if (c == undefined) {
			if (!isNaN($1)) {
				c = String.fromCharCode(($1 == 160) ? 32 : $1);
			} else {
				c = $0;
			}
		}
		return c;
	});
};

var $ct = {
	apply : function (o, c, defaults) {
		return $.extend(o, defaults, c);
	},
	each : $.base.each,
	/* 数组元素过滤 */
	filter : $.base.filter,
	some : $.base.some,
	every : $.base.every,
	indexOf : $.base.indexOf,
	getUnicodeString : function (text) {
		text = text || '';
		var strText = '';
		for (var i = 0; i < text.length; i++) {
			strText += '&#' + text.charCodeAt(i) + ';';
		}
		return strText;
	},
	compareDate : function (d1, d2) {
		var a = new Date(d1.replace(/-/g, '/'));
		var b = new Date(d2.replace(/-/g, '/'));
		return a > b ? 1 : (a < b ? -1 : 0);
	},
	/* 以s为分隔符，获取其所有参数所组成的串 */
	join : function (s) {
		var arr = [];
		for (var i = 1; i < arguments.length; i++) {
			if (arguments[i] != '') {
				arr.push(arguments[i]);
			}
		}
		return arr.join(s);
	},
	isObject : function (obj) {
		return typeof(obj) != 'undefined' && Object.prototype.toString.call(obj) === "[object Object]";
	},
	/* 获取source串中参数paramName对应的值，不区分大小写 */
	getParam : function (paramName, source) {
		var find = Math.max(source.toLowerCase().indexOf("&" + paramName.toLowerCase() + "="), source.toLowerCase().indexOf("?" + paramName.toLowerCase() + "="));
		if (find == -1)
			return "";
		find += paramName.length + 2;
		var findEnd = source.indexOf("&", find);
		if (findEnd == -1) {
			return source.substring(find);
		} else {
			return source.substring(find, findEnd);
		}
	},
	get : function (url, callback, /* optional */
		async, /* Cache */
		cache) {
		return $.ajax({
			url : url,
			async : $.type(async) == 'boolean' ? async : true,
			cache : $.type(cache) == 'boolean' ? cache : false,
			complete : function (xhr) {
				if ($.isFunction(callback)) {
					callback(xhr);
				}
			}
		});
	},
	post : function (url, callback, /* optional */
		async, /* optional */
		post) {
		return $.ajax({
			url : url,
			data : post,
			type : 'POST',
			async : $.type(async) == 'boolean' ? async : true,
			complete : function (xhr) {
				if ($.isFunction(callback)) {
					callback(xhr);
				}
			}
		});
	},
	xsltTransform : function (xmlurl, xslurl, callback) {
		return $.base.xsltTransform({
			xmlurl : xmlurl,
			xslurl : xslurl
		}, callback);
	},
	/*
	 * 仿@DbLookup公式，db:数据路径，例如“/WebOffice/MoaWebFlowSet.nsf”，view：待检索视图,例如：“viwFlows”，
	 * keyword:检索条件，可以为空（类似@DbColumn方式）
	 * col：查找内容，可以为string类型的列name属性，也可以为number类型的列数值
	 */
	dbLookup : function (db, view, keyword, col, callback) {
		var me = this;
		if (!db || db == "")
			db = this.getLocalDbName();
		var url = db + "/" + view + "?ReadViewEntries&Outputformat=JSON&Start=1&Count=-1";
		if (keyword && keyword != "")
			url += "&RestrictToCategory=" + encodeURIComponent(keyword);
		return this.get(url).then(function (xhr) {
			var v = new Array();
			var json;
			if(!$.isPlainObject(json = xhr)){			
				try {
					json = eval('(' + xhr.responseText + ')');
				} catch (e) {
					console.error('$ct.dbLookup方法加载数据异常！');
					return;
				}
			}
			if ($.isArray(json.viewentry)) {
				var len = json.viewentry.length;
				for (var i = 0; i < len; i++) {
					if (col) {
						if (typeof col === 'number')
							for (var k in json.viewentry[i].entrydata[col].text) {
								v[i] = (v[i] ? v[i] + '; ' : '') + json.viewentry[i].entrydata[col].text[k];
							}
						else {
							var datas = json.viewentry[i].entrydata;
							for (var j = 0; j < datas.length; j++) {
								if (datas[j]['@name'] == col) {
									for (var k in datas[j].text) {
										v[i] = (v[i] ? v[i] + '; ' : '') + datas[j].text[k];
									}
									break;
								}
							}
						}
					}
				}
			}
			if (me.isFunction(callback))
				callback(v);
			return $.Deferred().resolve(v);
		}, function(){ var def = $.Deferred(); return def.reject.call(def, arguments); });
	},
	setStyle : function (el, spec) {
		for (var n in spec) {
			el.style[n] = spec[n];
		}
	},
	addEvent : function (obj, type, fn) {
		$(obj).bind(type, fn);
	},
	removeEvent : function (obj, type, fn) {
		$(obj).unbind(type, fn);
	},
	hasClass : function (ele, cls) {
		return $(ele).hasClass(cls);
	},
	addClass : function (ele, cls) {
		$(ele).addClass(cls);
	},
	removeClass : function (ele, cls) {
		$(ele).removeClass(cls);
	},
	reinitIframe : function (iframe) {
		try {
			iframe.height = $(iframe.contentWindow.document).height() + 'px';
		} catch (ex) {}
	},
	//获取指定域的值, select, checkbox 获取的为 text, text_or_value, checkbox 应该放在label 中才可以获取text
	getFldValue : function (fldName, context, text_or_value) {
		var obj = $('[name=' + JSON.stringify(fldName) + ']', context || document);
		if (obj.size() == 0) {
			return '';
		}
		var strParmValue = "";
		switch (obj.prop('type')) {
			case 'radio':
				strParmValue = obj.filter(':checked').val() || '';
				break;
			case 'checkbox':
				obj.filter(':checked').each(function (i, o) {
					var strCon = (strParmValue == "") ? "" : ";";
					switch(text_or_value){
						case 'value':
							strParmValue += strCon + $(o).val();
							break;
						case 'text':
						default:
							strParmValue += strCon + $(o).parent().text();
							break;
					}
				});
				break;
			case 'select-one':
				strParmValue = $('option:selected', obj).text() || '';
				break;
			case 'select-multiple':
				$('option:selected', obj).each(function (i, o) {
					var strCon = (strParmValue == "") ? "" : ";";
					switch(text_or_value){
						case 'value':
							strParmValue += strCon + $(o).val();
							break;
						case 'text':
						default:
							strParmValue += strCon + $(o).text();
							break;
					}
				});
				break;
			default:
				strParmValue = obj.val() || '';
				break;
		}
		return strParmValue;
	},
	txtVal : function (field, val) {
		if (typeof val == 'undefined')
			return $('[name=' + field + ']').val();
		else
			$('[name=' + field + ']').val(val);
	},
	trim : $.trim,
	isFunction : $.isFunction,
	isArray : $.isArray,
	getLocalDbName : $.path.getLocalDbName,
	getLocalFileName : $.path.getLocalFileName,
	getLocalDbPath : $.path.getLocalDbPath,
	getConfigDbName : $.path.getConfigDbName,
	getLocalLogName9 : $.path.getLocalLogName9,
	getFlowDbName : $.path.getFlowDbName,
	getWebDbName : $.path.getWebDbName,
	getHandleDbName : $.path.getHandleDbName,
	getToolDbName : $.path.getToolDbName,
	getHomeDbName : $.path.getHomeDbName,
	getFrameDbName : $.path.getFrameDbName,
	sellectAll : $.base.select,
	selected : $.base.selected,
	open : $.base.open,
	alert : $.base.alert,
	startMask : function (t) {
		$(document).mask(t || '请稍后...');
	},
	stopMask : function () {
		$(document).unmask();
	},
	showModalDialog : function (options) {
		// alert('show');
		$.base.dialog(options);
	}
};

var $vt = {
	/* 在视图中的起始 位置 */
	fldStart : '1',
	/* 每页显示个数 */
	fldCount : 20,
	/* 当前页数 */
	fldNumber : 1,
	/* 文件总个数 */
	fldTotal : 0,
	loading : '',
	loaded : '数据加载完成！',
	/*
	 * 0:普通列表 ，1:简单搜索， 2:高级搜索
	 */
	viewStatus : '0',
	manageView : function () {
		$ct.showModalDialog({
			title : '视图定制',
			url : $ct.getConfigDbName() + '/fomViewSet?openform',
			width : 600,
			height : 400,
			argus : window,
			callback : function (json) {
				$ct.txtVal('fldJSON', json);
				$vt.refresh();
			}
		});
	},
	/* 简单搜索内容 */
	getSearch : function () {
		return $ct.txtVal('fldSearch');
	},
	getSearchTitle : function () {
		return $('[name=fldSearch]').attr('searchtitle');
	},
	getSearchAdvanced : function () {
		return $('[name=fldSearch]').attr('advanced');
	},
	/* 检索分类 */
	getCategory : function (root) {
		var r = (root.attr('category')) ? root.attr('category') : '';
		var f = $ct.txtVal('fldCategory')||'';
		if (r == '')
			return f;
		if (f == '')
			return r;
		return r + ',' + f;
	},
	/* 点击表头排序 */
	resort : function (obj) {
		if (this.resortcolumn != obj.getAttribute('column')) {
			this.resortcolumn = obj.getAttribute('column');
			this.resortstring = '';
		}
		var sort = [];
		sort.push('');
		if (obj.getAttribute('asc'))
			sort.push('ResortAscending');
		if (obj.getAttribute('desc'))
			sort.push('ResortDescending');
		for (var i = 0; i < sort.length; i++) {
			if (this.resortstring == sort[i]) {
				this.resortstring = sort[(i + 1) % sort.length];
				break;
			}
		}
		if (this.viewStatus == '0')
			this.refresh();
		else if (this.viewStatus == '1')
			this.search();
		else
			this.advanced();
	},
	/* 拼装样式表 */
	xslstr : function (root, jdata) {
		var $cols = root.find('cl');
		var $cates = root.find('cate');
		// var xslstr = "<xsl:stylesheet
		// xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
		// version='1.0'><xsl:output method='html' indent= 'no' encoding=
		// 'gb2312'/><xsl:template match='/viewentries'><table class='tb'
		// cellspacing='0' cellpadding='3'><THEAD><TR>";
		var xslstr = "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='1.0'><xsl:output method='html' indent= 'no' encoding= 'gb2312'/><xsl:template match='/viewentries'><table id='dg' style='width:100%;height:auto;border:1px solid #ccc;'><THEAD><TR>";
		$cols.each(function (i, col) {
			var $col = $(col);
			var desc = $col.attr("desc");
			var asc = $col.attr("asc");
			xslstr += "<TH data-options=\"field:'" + $col.attr('name').replace('$', '') + "',halign:'center', width:$vt.fixColumnWidth('"+$col.attr("width").replace(/'|"/ig,'')+"')";
			xslstr += "\"";
			// 分类视图排序后分类丢失且排序号发生变化，因此不做排序
			if (this.viewStatus == "0" && $cates.length == 0)
				xslstr += (desc ? " desc='true'" : "") + (asc ? " asc='true'" : "") + (desc || asc ? " onClick='$vt.resort(this);' column='" + $col.attr("column") + "'" : "");
			// xslstr += (root.attr("cls") ? " class='" + root.attr("cls") + "'"
			// : "") + (root.attr("align") ? " align='" + root.attr("align") +
			// "'" : "") + " style='" + (typeof($col.attr("width")) !=
			// 'undefined' ? "width:" + $col.attr("width") + "px;" : "") +
			// (this.viewStatus == "0" && cates.length == 0 && (desc || asc) ?
			// "cursor:hand;" : "") + "' title='" + $col.attr("title") +
			// "'>";(root.attr("cls") ? " class='" + root.attr("cls") + "'" :
			// "") +
			xslstr += (typeof($col.attr("align")) != 'undefined' ? " align='" + $col.attr("align") + "'" : "") + " style='" + (this.viewStatus == "0" && cates.length == 0 && (desc || asc) ? "cursor:hand;" : "") + "' title='" + $col.attr("title") + "'>";
			if (this.resortcolumn == $col.attr("column")) {
				if (this.resortstring == '')
					xslstr += '*';
				else if (this.resortstring == 'ResortAscending')
					xslstr += '↑';
				else if (this.resortstring == 'ResortDescending')
					xslstr += '↓';
			} else if ((desc || asc) && this.viewStatus == '0' && cates.length == 0) {
				xslstr += '*';
			}
			xslstr += $col.attr("title") + "</TH>";
		}); // alert(xslstr);
		xslstr += "</TR></THEAD><TBODY><xsl:for-each select=\"viewentry[@unid";
		// 过滤末页多余内容
		if (jdata && jdata.start.indexOf('.') > -1 && this.igory[1] != 2) {
			xslstr += " and starts-with(@position,'" + jdata.start.substring(0, jdata.start.lastIndexOf('.')) + "')";
		}
		xslstr += "]";
		xslstr += "\"><TR>";
		$cols.each(function (i, col) {
			var $col = $(col); // + ($col.attr('cls') ? " class='" +
			// $col.attr('cls') + "'" : "") +
			// ($col.attr('align') ? " align='" +
			// $col.attr('align') + "'" : "")
			xslstr += "<TD><xsl:value-of select=\"entrydata[@name='" + $col.attr('name') + "']/text\" disable-output-escaping='yes'/></TD>";
			// xslstr += "</TD>"; //<BR/>
		});

		xslstr += "</TR></xsl:for-each></TBODY></table></xsl:template></xsl:stylesheet>";
		return xslstr;
	},
	/* 分组时当前变更的select及组变更标志:0:未变更，1：已变更,2:显示全部 */
	igory : [-1, 1],
	/**/
	selcate : function (obj) {
		this.fldNumber = 1;
		this.igory[1] = 1;
		var s = document.getElementById('tabcate');
		var fldcates = document.getElementsByName('fldcate');
		for (var i = 0; i < fldcates.length; i++) {
			if (fldcates[i] == obj) {
				this.igory[0] = i;
				if (i == 0 && obj.options.selectedIndex == obj.options.length - 1) { // 选中全部
					this.igory[1] = 2;
					if (s) {
						$('td', s).not(':first').hide();
					}
				} else {
					if (s) {
						$('td', s).show();
					}
					if (i == fldcates.length - 1)
						this.igory[1] = 0;
				}
			}
		}
		this.refresh();
	},
	// 修正宽度设置，如果设置的是百分比，则转成固定值。
	fixColumnWidth: function(width){
		if(width&&!isNaN(width))
			return width;
		if(/^[1-9]\d*%$/.test(width))
			return $(window).width()/100*parseInt(width);
		return '';
	},
	/* 更新页面数据 */
	refresh : function (callback) {
		if (this.getView() == '')
			return false;

		if ($vt.viewStatus == '1') {
			$vt.DepthSearch(undefined, callback);
			return false;
		}
		
		var me = this;
		window.status = this.loading;
		if (this.getTemplate() == '') {
			this.setTemplate(this.readdesign(this.getViewPath() + '?readdesign'));
		}
		this.viewStatus = '0';
		var viwdoc = $.parseXML(this.getTemplate());
		var root = $('view', viwdoc);
		$('#title').html(root.attr('title'));
		if (root.attr('count') != 'undefined' && root.attr('count') != '')
			this.fldCount = parseInt(root.attr('count'));
		// 分组显示处理
		var $cates = root.find('cate');
		var gorys = (this.getCategory(root) == '') ? [] : this.getCategory(root).split(',');
		var $category = $('#category');
		var fldcates = document.getElementsByName('fldcate');
		if ($category.size() > 0 && /* 分组参数与design不同时，为分组显示 */
			$cates.length != gorys.length && /* 组变更标志 */
			this.igory[1] == 1) { // 不匹配则为显示分组
			this.igory[1] = 0;
			var vc = [];
			if (fldcates.length == 0) { // 尚未渲染分组
				$cates.each(function (i, cate) {
					vc.push('1');
				});
			} else {
				$ct.each(fldcates, function (fldcate, i) {
					vc[i] = (i > me.igory[0]) ? '1' : (fldcate.options.selectedIndex + 1);
				});
			}
			var cateurl = this.getViewPath() + '?ReadViewEntries&PreFormat&count=-1&Collapse=' + vc.join('.');
			$.ajax({
					url: cateurl,
					success : function(xmldoc){
						var s = '';
						if (fldcates.length == 0) {
							s = '<table id="tabcate" cellpadding="0" cellspacing="0"><tr>';
							$cates.each(function (i, cate) {
								s += '<td>&nbsp;->&nbsp;' + $(cate).attr('title') + '：<select name="fldcate" onchange="$vt.selcate(this);"></select></td>';
							});
							s += '</tr></table>';
							$category.html(s);
							fldcates = document.getElementsByName('fldcate');
						}
						for (var i = me.igory[0] + 1; i < fldcates.length; i++) {
							fldcates[i].options.length = 0;
						}
						$ct.each(xmldoc.documentElement.getElementsByTagName('viewentry'), function (entry) {
							var position = entry.getAttribute('position');
							var i = position.length - position.replace(/[.]/g, '').length;
							if (i > me.igory[0]) {
								var option = new Option(entry.text, entry.text);
								fldcates[i].options[fldcates[i].options.length] = option;
							}
						});
						if (s != '') {
							var option = new Option('-全部-', '-全部-');
							fldcates[0].options[fldcates[0].options.length] = option;
						}
					},
					dataType: 'xml',
					async: false
			});
		}
		var sr = '';
		if (this.igory[1] != 2) { // 全部时无RestrictToCategory
			if (fldcates.length == 0) {
				sr = this.getCategory(root);
			} else {
				var vr = [];
				$ct.each(fldcates, function (fldcate, i) {
					vr[i] = fldcate.options[fldcate.options.selectedIndex].value;
				});
				sr = vr.join(',');
			}
		}
		var xmlurl = this.getViewPath() + '?ReadViewEntries&PreFormat' + (($.type(this.resortstring)!='undefined'&&this.resortstring != '') ? ('&' + this.resortstring + '=' + this.resortcolumn) : '');
		var toolurl = $ct.getLocalDbName() + '/agtViewPosition?OpenAgent&RestrictToCategory=' + encodeURIComponent(sr) + '&s=' + ((this.fldNumber - 1) * this.fldCount + 1) + '&v=' + this.getView() + '&db=' + this.getViewDbName()+'&d='+$.now();
		$ct.startMask();
		$.getJSON(toolurl, function (jdata) {
			me.fldStart = jdata.start;
			me.fldTotal = parseInt(jdata.total);
			if (me.fldNumber > 1 && me.fldTotal == 0) {
				me.fldTotal = (me.fldNumber - 1) * me.fldCount + 1
				me.go(me.fldNumber - 1);
				return false;
			}
			var c = (parseInt(me.fldCount) > parseInt(me.fldTotal) || parseInt(me.fldCount) == -1 ? me.fldTotal : me.fldCount);
			if (me.igory[1] == 2) {
				$ct.each(fldcates, function (fldcate, i) {
					c += fldcate.options.length;
				});
			}
			xmlurl += '&Start=' + me.fldStart + '&Count=' + c + '&d=' + $.now();
			var xslstr = me.xslstr(root, jdata);
			$.base.xsltTransform({
				xslstring : xslstr,
				xmlurl : xmlurl
			}, function (t) {

				var $toolbar = $('#OperationBar').clone(true);
				/* 检索框 */
				var opt = $('<div style="float:right;padding-top:2px;"></div>').appendTo($toolbar);
				$('<input name="fldSearch" type="text" />').keyup(function (event) {
					if (event.keyCode == 13) {
						$('[name=btnSearch]').click();
					}
				}).appendTo(opt);
				$('<input type="checkbox" name="fldSecondSearch" value="0" title="勾选表示可在结果中进行二次检索" />').appendTo(opt);
				
				$('<input type="button" name="btnSearch" value="搜索" />').click(function () {
					if ($ct.trim($('[name=fldSearch]').val()) == '') {
						$vt.clearSearch();
						$vt.refresh();
					} else {
						$vt.fldNumber = 1;
						$vt.setSearchStr();
						$vt.DepthSearch();
					}
				}).appendTo(opt);
				opt.append('&nbsp;');
				$('<input type="button"  value="清空" />').click(function () {
					$('[name=fldSearch]').val('').attr('advanced', '').attr('searchtitle', '');
					$vt.clearSearch();
					$vt.refresh();
				}).appendTo(opt);

				$('[title]', opt).qtip({
					position : {
						my : 'top center',
						at : 'bottom center'
					},
					style : {
						classes : 'qtip-bootstrap'
					}
				});

				$('#divData').html(decodeHtml(t));
				// fitColumns : true,rownumbers:true,
				$('#dg').datagrid({
				    	striped:true,
					singleSelect : true,
					height : $(window).height(),
					pagination : true,
					loadMsg : '',
					fitColumns : true,
					nowrap:false,	
					toolbar : $toolbar											
				});
							
				$vt.toolbar();
				$vt.tip();

				// $('#divData').html(decodeHtml(t));
				if ($ct.isFunction(callback))
					callback(t);
				// me.toolbar();
				$ct.stopMask();
			});
		});
	},

	DepthSearch : function (num, callback) {
		var linkStr = "->";
		window.status = this.loading;
		this.viewStatus = '1';
		// 搜索不排序
		this.resortcolumn = -1;
		this.resortstring = '';
		var viwdoc = $.parseXML(this.getTemplate());
		var root = $('view', viwdoc);

		/*
		 * var SearchArr = this.getSearchStr().split(linkStr); var
		 * ChooseConditionArr = [];
		 *
		 *
		 * if (typeof (num) !== 'undefined') { // 在已输入条件中选择历史条件 for ( var i = 0; i <=
		 * num; i++) { ChooseConditionArr.push(SearchArr[i]); }
		 * this.setSearchStr(ChooseConditionArr.join(linkStr)); this.setSearch(''); }
		 * else { // 搜索或二次搜索 if (this.getSecondSearch() == "0") { arrSearchStr = [];
		 * if (this.getSearchStr() != "") { arrSearchStr =
		 * this.getSearchStr().split(linkStr); if ($ct.indexOf(arrSearchStr,
		 * this.getSearch()) == "-1") { if (this.fldTotal == 0) {
		 * arrSearchStr.pop(); } arrSearchStr.push(this.getSearch()); } }
		 * this.setSearchStr(arrSearchStr.join(linkStr)); } else {
		 * this.setSearchStr(this.getSearch()); } }
		 */

		/*
		 * var $title = $('#title'); if ($title.size() > 0) { var SearchShowArr =
		 * this.getSearchStr().split(linkStr); var SearchShowStr = ''; for ( var i =
		 * 0; i < SearchShowArr.length; i++) { if (SearchShowStr == '') {
		 * SearchShowStr = "<span onclick='$vt.DepthSearch(" + i + ")'
		 * style='cursor:hand;color:red'>" + SearchShowArr[i] + "</span>"; } else {
		 * SearchShowStr += linkStr + "<span onclick='$vt.DepthSearch(" + i + ")'
		 * style='cursor:hand;color:red'>" + SearchShowArr[i] + "</span>"; } }
		 * $title.html(root.attr('title') + ' -> 搜索“' + SearchShowStr + '”'); }
		 */

		var category = document.getElementById('category');
		if (category)
			category.innerHTML = '';
		// 分组显示处理
		var $cates = root.find('cate');
		var gorys = (this.getCategory(root) == '') ? [] : this.getCategory(root).split(',');
		if ($cates.length != gorys.length) {
			this.igory[1] = 2;
		}
		var searchurl = $ct.getConfigDbName() + '/agtViewSearch?OpenAgent&RestrictToCategory=' + encodeURIComponent(this.getCategory(root));
		searchurl += '&s=' + ((this.fldNumber - 1) * this.fldCount + 1) + '&v=' + this.getView() + '&c=' + this.fldCount;
		searchurl += '&isSearch=' + this.viewStatus + '&db=' + $vt.getViewDbName() + '&q=' + encodeURIComponent(this.getSearchStr());
		var me = this;
		$.get(searchurl, function (xmldoc, textStatus, xhr) {
			if (xmldoc.documentElement.getAttribute('start') == -1) {
				$vt.go($vt.fldNumber - 1);
			} else {
				me.fldStart = xmldoc.documentElement.getAttribute('start');
				me.fldTotal = parseInt(xmldoc.documentElement.getAttribute('total'));

				$.base.xsltTransform({
					xslstring : me.xslstr(root),
					xmlstring : xhr.responseText
				}, function (t) {

					var $toolbar = $('#OperationBar').clone(true);
					/* 检索框 */
					var opt = $('<div style="float:right;padding-top:2px;"></div>').appendTo($toolbar);
					$('<input name="fldSearch" type="text" />').keyup(function (event) {
						if (event.keyCode == 13) {
							$('[name=btnSearch]').click();
						}
					}).appendTo(opt);
					$('<input type="checkbox" name="fldSecondSearch" value="0" title="勾选表示可在结果中进行二次检索" />').appendTo(opt);
					
					$('<input type="button" name="btnSearch" value="搜索" />').click(function () {
						if ($ct.trim($('[name=fldSearch]').val()) == '') {
							$vt.clearSearch();
							$vt.refresh();
						} else {
							$vt.fldNumber = 1;
							$vt.setSearchStr();
							$vt.DepthSearch();
						}
					}).appendTo(opt);
					opt.append('&nbsp;');
					$('<input type="button"  value="清空" />').click(function () {
						$('[name=fldSearch]').val('').attr('advanced', '').attr('searchtitle', '');
						$vt.clearSearch();
						$vt.refresh();
					}).appendTo(opt);

					$('[title]', opt).qtip({
						position : {
							my : 'top center',
							at : 'bottom center'
						},
						style : {
							classes : 'qtip-bootstrap'
						}
					});

					$('#divData').html(decodeHtml(t));
					// fitColumns : true,rownumbers:true,
					$('#dg').datagrid({
						singleSelect : true,
						height : $(window).height(),
						pagination : true,
						loadMsg : '',
						toolbar : $toolbar
					});
					$vt.toolbar();
					$vt.tip();

					// $('#divData').html(decodeHtml(t));
					if ($.isFunction(callback))
						callback(t);
				});
				// me.toolbar();
				$ct.stopMask();
			}
		}, 'xml');
	},
	search : function (callback) {
		this.DepthSearch(undefined, callback);
	},
	/* 根据用户分类搜索显示 我的工作、回收站、经办库用到 */
	refreshByLoginID : function (num, type, callback) {
		var linkStr = "->"
			this.viewStatus = '1';
		// 搜索不排序
		this.resortcolumn = -1;
		if (this.getTemplate() == '') { // xml显示模板
			this.setTemplate(this.readdesign($vt.getViewPath() + '?readdesign')); // 获取视图列标题
		}
		var viwdoc = $.parseXML(this.getTemplate());
		var root = $('view', viwdoc);
		$('#title').html(root.attr('title'));
		if (root.attr('count') != 'undefined' && root.attr('count') != '')
			this.fldCount = parseInt(root.attr('count'));

		/*
		 * var SearchArr = this.getSearchStr().split(linkStr) var ChooseConditionArr = []
		 * if (num != '-1') { // 在已输入条件中选择历史条件 for ( var i = 0; i <= num; i++) {
		 * ChooseConditionArr.push(SearchArr[i]); }
		 * this.setSearchStr(ChooseConditionArr.join(linkStr)); this.setSearch(''); }
		 * else { // 搜索或二次搜索 if (this.getSecondSearch() == "0") { arrSearchStr = []; if
		 * (this.getSearchStr() != "") { arrSearchStr =
		 * this.getSearchStr().split(linkStr); if ($ct.indexOf(arrSearchStr,
		 * this.getSearch()) == "-1") { if (this.fldTotal == 0) { arrSearchStr.pop(); } }
		 * else { return false; } } arrSearchStr.push(this.getSearch());
		 * this.setSearchStr(arrSearchStr.join(linkStr)); } else {
		 * this.setSearchStr(this.getSearch()); } } if (this.getSearchStr() != "") { var
		 * $title = $('#title'); if ($title.size() > 0) { var SearchShowArr =
		 * this.getSearchStr().split(linkStr) var SearchShowStr = '';
		 *
		 * for ( var i = 0; i < SearchShowArr.length; i++) { if (SearchShowStr == '') {
		 * SearchShowStr = "<font color=red><span onclick='$vt.refreshByLoginID(\"" +
		 * i + "\",\"" + type + "\")' style='cursor:hand'>" + SearchShowArr[i] + "</span></font>" }
		 * else { SearchShowStr = SearchShowStr + linkStr + "<font color=red><span
		 * onclick='$vt.refreshByLoginID(\"" + i + "\",\"" + type + "\")'
		 * style='cursor:hand'>" + SearchShowArr[i] + "</span>" } }
		 * $title.html(root.attr('title') + ' -> 搜索“' + SearchShowStr + '”'); } }
		 */

		var category = document.getElementById('category');
		if (category)
			category.innerHTML = '';
		// 分组显示处理
		var $cates = root.find('cate');
		var gorys = (this.getCategory(root) == '') ? [] : this.getCategory(root).split(',');
		if ($cates.length != gorys.length) {
			this.igory[1] = 2;
		}
		var searchurl = $vt.getViewDbPath() + '/agtViewSearchByLoginID?OpenAgent';
		searchurl += '&s=' + ((this.fldNumber - 1) * this.fldCount + 1);
		searchurl += '&v=' + this.getView();
		searchurl += '&c=' + this.fldCount;
		searchurl += '&isSearch=' + this.viewStatus;
		if (type == "recycle") {
			searchurl += '&DbName=' + $ct.txtVal('fldRecycleDB');
			searchurl += '&Form=' + $ct.txtVal('fldRecycleForm');
		}
		searchurl += '&q=' + encodeURIComponent(this.getSearchStr());
		var me = this;
		$.get(searchurl,{d: $.now()}, function(xmldoc,textStatus,xhr){
				this.fldStart = xmldoc.documentElement.getAttribute('start');

				if (xmldoc.documentElement.getAttribute('start') == -1) {
					$vt.goByLoginID($vt.fldNumber - 1, "-1", type);
				} else {
					me.fldTotal = parseInt(xmldoc.documentElement.getAttribute('total'));
					$.base.xsltTransform({
						xslstring : me.xslstr(root),
						xmlstring : xhr.responseText
					}, function (t) {
						// $vt.senfe();

						var toolbar = $('#OperationBar').clone(true);
						/* 检索框 */
						var opt = $('<div style="float:right;padding-top:2px;"></div>').appendTo(toolbar);
						$('<input name="fldSearch" type="text" />').keyup(function (event) {
							if (event.keyCode == 13) {
								$('[name=btnSearch]').click();
							}
						}).appendTo(opt);
						$('<input type="checkbox" name="fldSecondSearch" value="0" title="勾选表示可在结果中进行二次检索" />').appendTo(opt);
						opt.append('&nbsp;');
						$('<input type="button" name="btnSearch" value="搜索" />').click(function () {
							if ($ct.trim($('[name=fldSearch]').val()) == '') {
								$vt.clearSearch();
								$vt.refreshByLoginID("-1", type);
							} else {
								$vt.fldNumber = 1;
								$vt.setSearchStr();
								$vt.refreshByLoginID("-1", type);
							}
						}).appendTo(opt);
						opt.append('&nbsp;');
						$('<input type="button"  value="清空" />').click(function () {
							$('[name=fldSearch]').val('').attr('advanced', '').attr('searchtitle', '');
							$vt.clearSearch();
							$vt.refreshByLoginID("-1", type);
						}).appendTo(opt);

						$('[title]', opt).qtip({
							position : {
								my : 'top center',
								at : 'bottom center'
							},
							style : {
								classes : 'qtip-bootstrap'
							}
						});

						$('#divData').html(decodeHtml(t));
						// fitColumns : true,rownumbers:true,
						$('#dg').datagrid({
							//view: detailview,
							//						detailFormatter:function(index,row){
							//							return '<div style="padding:2px"><table class="ddv"></table></div>';
							//	                	},
							//	                	onExpandRow: function(index,row){console.log(row);},
							striped:true,
							singleSelect : true,
							height : $(window).height(),
							pagination : true,
							loadMsg : '',
							toolbar : toolbar
						});
						$vt.toolbarByLoginID(num, type);
						$vt.tip();

						if ($ct.isFunction(callback))
							callback(t);
						$ct.stopMask();
					});
				}
			}, 'xml');
	},
	senfe : function () {
		$('tbody>tr', '#divData').hoverClass('hover').filter(':odd').addClass('color');
	},
	tip : function (ASelector) {
		if ($.fn.qtip)
			$(ASelector||'.datagrid a[logdb][caseid]').each(function () {
				$(this).qtip({
					content : {
						title : $(this).attr('proc') + ' - ' + $(this).attr('node'),
						text : function (event, api) {
							$.ajax({
								url : $ct.getLocalDbPath() + '/' + api.elements.target.attr('logdb') + '/viwHistorysTip?ReadViewEntries&RestrictToCategory=' + api.elements.target.attr('caseid'),
								dataType : 'text',
								async : true
							}).then(function (data) {
								var xslstr = "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='1.0'><xsl:output method='html' indent= 'no' encoding= 'gb2312'/>"
									xslstr += "<xsl:template match='/viewentries'><table width='280px'>";
								xslstr += "<xsl:for-each select=\"viewentry[@unid]\">";
								xslstr += "<tr><td width='100px'><xsl:value-of select=\"entrydata[@name='fldNodeShow']/text\" disable-output-escaping='yes'/></td>";
								xslstr += "<td width='80px'><xsl:value-of select=\"entrydata[@name='$fldNodeUsers']/text\" disable-output-escaping='yes'/></td>";
								xslstr += "<td width='100px'><xsl:value-of select=\"entrydata[@name='$fldActStatus']/text\" disable-output-escaping='yes'/></td></tr>";
								xslstr += "</xsl:for-each></table></xsl:template></xsl:stylesheet>";
								var d = $.base.xsltTransform({
										xslstring : xslstr,
										xmlstring : data
									});
								api.set('content.text', d);
							});
							return "加载中...";
						}
					},
					position : {
						my : 'center left',
						viewport : $(window)
					},
					show : {
						// 隐藏其他提示
						solo : true
					},
					style : {
						classes : 'qtip-bootstrap'
					},
					hide : {
						fixed : true,
						delay : 300
					}
				});
			});
	},
	toolbarByLoginID : function (num, type) {
		$('#dg').datagrid('getPager').pagination({
			onRefresh : function () {
				$vt.refreshByLoginID();
			},
			onSelectPage : function (pageNumber, pageSize) {
				$vt.fldNumber = pageNumber;
				$vt.goByLoginID(pageNumber, num, type);
			},
			total : this.fldTotal,
			pageSize : this.fldCount,
			pageNumber : this.fldNumber,
			beforePageText : '第',
			afterPageText : '页，共 {pages} 页',
			displayMsg : '共{total}条，当前显示 {from} 至 {to} 条',
			layout : ['refresh', 'sep', 'first', 'prev', 'sep', 'links', 'sep', 'next', 'last', 'sep', 'manual']
		});

		return false;
	},
	toolbar : function () {
		$('#dg').datagrid('getPager').pagination({
			onRefresh : function () {
				$vt.refresh();
			},
			onSelectPage : function (pageNumber, pageSize) {
				$vt.fldNumber = pageNumber;
				$vt.go(pageNumber);
			},
			total : this.fldTotal,
			pageSize : this.fldCount,
			pageNumber : this.fldNumber,
			beforePageText : '第',
			afterPageText : '页，共 {pages} 页',
			displayMsg : '共{total}条，当前显示 {from} 至 {to} 条',
			layout : ['refresh', 'sep', 'first', 'prev', 'sep', 'links', 'sep', 'next', 'last', 'sep', 'manual']
		});

	},
	/* 视图分页内容跳转 */
	go : function (n, callback) {
		var page = Math.ceil(this.fldTotal / this.fldCount);
		n = n || 1;
		n = n > page ? page : n;
		n = n < 1 ? 1 : n;
		// $('[name=fldPageGo]').val(n);
		this.fldNumber = n;
		if (this.viewStatus == '0')
			this.refresh(callback);
		else if (this.viewStatus == '1')
			this.DepthSearch();
		else
			this.advanced();
	},
	goByLoginID : function (n, num, type, callback) {
		var page = Math.ceil(this.fldTotal / this.fldCount);
		n = n || 1;
		n = n > page ? page : n;
		n = n < 1 ? 1 : n;
		// $('[name=fldPageGo]').val(n);
		this.fldNumber = n;
		this.refreshByLoginID(num, type, callback);
	},
	setSearch : function (s) {
		$ct.txtVal('fldSearch', s);
	},
	getSecondSearch : function () {
		if ($('[name=fldSecondSearch]:checked').size() > 0)
			return "0";
		else
			return "";
	},
	setSearchStr : function (s) {
		// $ct.txtVal('fldSearchStr', s);
		var s = $ct.txtVal('fldSearch');
		if ($.trim(s) == '') {
			$vt.clearSearch();
		} else {
			$vt.viewStatus = '1';
			if ($('[name=fldSecondSearch]').prop('checked')) {
				var arr = $ct.txtVal('fldSearchStr').split('->');
				arr.push($ct.txtVal('fldSearch'));
				$ct.txtVal('fldSearchStr', arr.join('->'));
			} else {
				$ct.txtVal('fldSearchStr', $ct.txtVal('fldSearch'));
			}
		}
	},
	clearSearch : function () {
		$vt.fldNumber = 1;
		$vt.igory = [-1, 1];
		$vt.viewStatus = '0';
		$('[name=fldSecondSearch]').prop('checked', false);
		$ct.txtVal('fldSearch', '');
		$ct.txtVal('fldSearchStr', '');
	},

	getSearchStr : function () {
		return $ct.txtVal('fldSearchStr');
	},
	getTemplate : function () {
		return $ct.txtVal('fldJSON');
	},
	setTemplate : function (s) {
		$ct.txtVal('fldJSON', s);
	},
	readdesign : function (url) {
		var s = '';
		var me = this;
		$.ajax({
			url: url,
			dataType: 'xml',
			success : function(xmldoc){	
				var cols = xmldoc.getElementsByTagName("column");
				s = '<?xml version="1.0" encoding="UTF-8"?>';
				s += '<xml><view title="此页面尚未配置，请联系管理员！" count="' + me.fldCount + '" cls="THCell" align="center">';
				$ct.each(cols, function (col) {
					var cate = col.getAttribute('sortcategorize');
					if (cate) {
						s += '<cate name="' + col.getAttribute('name') + '" title="' + col.getAttribute('title') + '"></cate>';
					} else {
						s += '<cl name="' + col.getAttribute('name') + '" title="' + col.getAttribute('title') + '" width="' + col.getAttribute('width') + '"' + (col.getAttribute('resortdescending') ? ' desc="true"' : '') + (col.getAttribute('resortascending') ? ' asc="true"' : '') + ' column="' + col.getAttribute('columnnumber') + '" cls="ViewContentCell"></cl>';
					}
				});
				s += '</view></xml>';
			},
			async: false
		});
		return s;
	},
	/* 视图菜单栏 */
	viwOptBar : function (viewName, theme) {

		var $operationBar = $('<div id="OperationBar"></div>').hide().prependTo("form");

		var url = this.getViewDbPath() + '/' + viewName + '?OpenView&Count=0';
		return $.ajax({
			dataType : 'text',
			url : url,
			success : function (data) {
				var s = data.indexOf('<table');
				var e = data.indexOf('</table>');
				if(s==-1||e==-1)
					return false;
				var t = $(data.substring(s, e + 8)).hide().prependTo('form');
				$('a', t).each(function (i, a) {
					var text = $(a).text();
					var menuMatch = text.match(/.*(?:\/)(?=[^\/]+\/?$)/); // 上级
					var menuName = $ct.trim(menuMatch == null ? "" : menuMatch[0]);
					var barLable = text.match(/[^\/]*$/)[0]; // 最右
					var barTitle = text.match(/[^\/]*(?=\/?$)/)[0]; // 显示
					// console.log(barLable);
					switch (barLable) {
					case "": // 表示需要生产一个子群组
						if (menuName == '') { // 为空，表示跟分类
							var id = $.md5(text);
							var cls = (typeof $(a).attr('target') != 'undefined') ? ',iconCls:\'' + $(a).attr('target') + '\'' : '';
							var $a = $('<a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:\'#' + id + '\',plain:false' + cls + '">' + $.trim(barTitle) + '</a>');
							$operationBar.append($a).append('\n');
							$operationBar.append('<div id="' + id + '" style="display:none" cat="true"></div>').append('\n');
						} else { // 多级分类
							$('#' + $.md5(menuName)).append('<div id="' + $.md5(text) + '"><span>' + barTitle + '</span><div></div></div>');
						}
						break;
					case "-":
						if (menuName != '') {
							$('#' + $.md5(menuName)).append('<div class="menu-sep"></div>');
						} else {
							// $(operationBar).append('<div
							// class="datagrid-btn-separator"></div>');
						}
						break;
					default:
						if (menuName == '') { // 不存在上级则加到bar中
							// ,iconCls:\'icon-edit\'
							var cls = (typeof $(a).attr('target') != 'undefined') ? ',iconCls:\'' + $(a).attr('target') + '\'' : '';
							var $a = $('<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:false' + cls + '">' + $.trim(barTitle) + '</a>').click(function () {
									$(a).click();
								});
							$operationBar.append($a).append('\n');
						} else { // 存在上级则添加至上级div中
							var cls = (typeof $(a).attr('target') != 'undefined') ? 'iconCls:\'' + $(a).attr('target') + '\'' : '';
							var $a = $('<div data-options="' + cls + '">' + barTitle + '</div>').click(function () {
									$(a).click();
								});
							var $d = $('#' + $.md5(menuName));
							if ($d.attr('cat') == 'true') {
								$d.append($a);
							} else {
								$d.find('div:first').append($a);
							}
						}
						break;
					}
				});
				$('#OperationBar>a.easyui-linkbutton').linkbutton({
					'plain' : true
				});
				$('#OperationBar>a.easyui-menubutton').menubutton({
					'plain' : true
				});

			}
		});

	},
	getViewDbName : $.path.getViewDbName,
	getViewDbPath : $.path.getViewDbPath,
	getView : $.path.getView,
	getViewPath : $.path.getViewPath,
	dialog : $.base.dialog,
	window : $.base.dialog,
	bookmark : $.busi.bookmark,
	busi : $.busi.open,
	startWork : function (appdb, appform, procname) {
		var options = {};
		if (typeof(appdb) != 'undefined')
			options.db = appdb;
		if (typeof(appform) != 'undefined')
			options.form = appform;
		if (typeof(procname) != 'undefined')
			options.proc = procname;
		$.busi.start(options);
	},
	confirm : function (options) {},
	alert : function (options) {},
	getMulMember : function (options) {
		/* other options arguments:
		argus:	array|plain-object	数组则为传入的已选择的值;
							对象的data属性为选择的值，show-columns为显示的列的配置，可以为cn、show等域名，也可以是完整的easyui-datagrid columns配置属性
		*/
		var p = {
			cate : 'root', // 树根，可为部门全称
			sel : 0, // 0：只显示列选部门、用户，1：显示所有部门、用户，2：手机树，3：邮件树
			chk : 2, // 1：叶节点可选，2：枝节点可选，3：根节点可选
			tag : 'Member', // Member:只有用户可选，Group:部门可选,Member,Group:均可选
			linkage : 1, // 联动选择下级节点，默认为是
			groupback : 0, // 0：返回部门编号，1：返回群组值
			ae  : 0, //是否可返回空
			io : 'cn,value' // 选择的text和value。待选项：cn、Abbreviate、show、value、oid,pId, pName
		};
		$ct.apply(p, options);
		var sURL = $ct.getFlowDbName() + '/fomMulMemberDialog?OpenForm&cate=' + encodeURIComponent(p.cate) + '&chk=' + p.chk + '&sel=' + p.sel + '&link=' + p.linkage + '&tag=' + p.tag + '&io=' + p.io + '&ae=' + p.ae+ '&groupback=' + p.groupback+ '&showTopUser=' + p.showTopUser;
		var param = {
			title : '选择用户',
			width : 650,
			height : 450,
			url : sURL
		}
		$ct.apply(param, options);
		return this.dialog(param);
	},
	getOneMember : function (options) {
		var p = {
			cate : 'root',
			sel : 0,
			chk : 1,
			tag : 'Member',
			ae  : 0,
			io : 'cn,value'
		};
		$ct.apply(p, options);
		var sURL = $ct.getFlowDbName() + '/fomOneMemberDialog?OpenForm&cate=' + encodeURIComponent(p.cate) + '&chk=' + p.chk + '&sel=' + p.sel + '&tag=' + p.tag + '&io=' + p.io+ '&ae=' + p.ae+ '&showTopUser=' + p.showTopUser;

		var param = {
			title : '选择用户',
			width : 350,
			height : 350,
			url : sURL
		}
		$ct.apply(param, options);
		return this.dialog(param);
	},
	getOneUser : function (options) {
		var p = {
			cate : '',
			sel : 1,
			chk : 1,
			tag : 'User',
			ae  : 0,
			io : 'cn,value'
		};
		$ct.apply(p, options);
		var sURL = $ct.getFlowDbName() + '/fomOneDataDialog?OpenForm&cate=' + encodeURIComponent(p.cate) + '&chk=' + p.chk + '&sel=' + p.sel + '&tag=' + p.tag + '&io=' + p.io + '&ae=' + p.ae+ '&view=viwTreeUser&page=pagTreeLeaf';
		var param = {
			title : '选择用户',
			width : 350,
			height : 350,
			url : sURL
		}
		$ct.apply(param, options);
		return this.dialog(param);
	},
	getMulGroup : function (options) {
		var p = {
			cate : 'root',
			sel : 0,
			chk : '2',
			tag : 'Group',
			io : 'Abbreviate,value',
			ae  : 0,
			linkage :2 ,        // 联动选择下级节点,默认2关联子节点，1为关联父节点，2为关联子节点，3为关联父子节点，0不关联		
			add : 3		    //1：可以增加叶节点，2：可以增加枝节点，3：可以增加根节点，默认为3
		};
		$ct.apply(p, options);
		var sURL = $ct.getFlowDbName() + '/fomMulDataDialogCN?OpenForm&cate=' + encodeURIComponent(p.cate) +'&chk=' + p.chk + '&sel=' + p.sel + '&tag=' + p.tag + '&io=' + p.io+ '&ae=' + p.ae + '&link=' + p.linkage + '&add=' + p.add + '&view=viwTreeGroup&page=pagTreeFolder';

		var param = {
			title : '选择部门',
			width : 650,
			height : 450,
			url : sURL
		}
		$ct.apply(param, options);
		return this.dialog(param);
	},
	getOneGroup : function (options) {
		var p = {
			cate : 'root',
			sel : 0,
			chk : '2',
			tag : 'Group',
			ae  : 0,
			io : 'Abbreviate,value'
		};
		$ct.apply(p, options);
		var sURL = $ct.getFlowDbName() + '/fomOneDataDialog?OpenForm&cate=' + encodeURIComponent(p.cate) + '&chk=' + p.chk + '&sel=' + p.sel + '&tag=' + p.tag + '&io=' + p.io + '&ae=' + p.ae+ '&view=viwTreeGroup&page=pagTreeFolder';
		var param = {
			title : '选择部门',
			width : 350,
			height : 350,
			url : sURL
		}
		$ct.apply(param, options);
		return this.dialog(param);
	},
	getMulData : function (options) {
		var p = {
			group : 'root', // 分级管理部门
			key : '', // 数据字典关键字
			sel : 0,
			chk : '1',
			tag : 'Data',
			ae  : 0,
			add : 3,		//1：可以增加叶节点，2：可以增加枝节点，3：可以增加根节点，默认为3
			io : 'cn,cn'
		};
		$ct.apply(p, options);
		var sURL = $ct.getFlowDbName() + '/fomMulDataDialog?OpenForm&cate=' + encodeURIComponent((p.group + '/' + p.key)) + '&chk=' + p.chk + '&sel=' + p.sel + '&tag=' + p.tag + '&io=' + p.io + '&ae=' + p.ae + '&add=' + p.add + '&view=viwTreeDataByKey&page=pagTreeFolder'  + '&depart=' + p.depart ;
		var param = {
			title : '选择' + p.key,
			width : 650,
			height : 450,
			url : sURL
		};
		$ct.apply(param, options);
		return this.dialog(param);
	},
	getOneData : function (options) {
		var p = {
			group : 'root',
			key : '',
			sel : 0,
			chk : '2',
			tag : 'Data',
			ae  : 0,
			io : 'cn,cn'
		};
		$ct.apply(p, options);
		var sURL = $ct.getFlowDbName() + '/fomOneDataDialog?OpenForm&cate=' + encodeURIComponent((p.group + '/' + p.key)) + '&chk=' + p.chk + '&sel=' + p.sel + '&tag=' + p.tag + '&io=' + p.io + '&ae=' + p.ae+ '&view=viwTreeDataByKey&page=pagTreeFolder';
		var param = {
			title : '选择' + p.key,
			width : 350,
			height : 350,
			url : sURL
		};
		$ct.apply(param, options);
		return this.dialog(param);
	},
	CuiBan : function (adocid) {
		$vt.dialog({
			url : $ct.getHandleDbName() + '/fomCuiBan?OpenForm&fldadocid=' + adocid,
			callback : function () {}
		});
	},
	del : function (type, beadmin) {
		if (type == "businessPost") {
			$vt.delbusinessPost(beadmin);
		} else if (type == "generalPost") {
			$vt.delgeneralPost();
		}
	},
	delbusinessPost : function (beadmin) {
		var arr = $ct.selected();
		if (arr.length == 0) {
			alert("请选择要删除的文件！");
			return false;
		}
		var url = $ct.getConfigDbName() + '/agtBusinessDocDelPost?OpenAgent'
			var Arrdel = [];
		Arrdel[0] = 'db=' + $vt.getViewDbName();
		Arrdel[1] = 'unid=' + arr.join(',');
		Arrdel[2] = 'beAdmin=' + (beadmin || '');
		$vt.confirm({
			win : parent.parent,
			title : 'DeleteFile',
			callback : function () {
				$ct.post(url, function (xhr) {
					var t = $ct.trim(xhr.responseText);
					if (t == 'OK') {
						if ($ct.getFldValue('fldSearch') == '') {
							$vt.refresh();
							$('[name=fldSearchStr]').val('');
							$('[name=fldSecondSearch]').prop('checked', false);
						} else {
							$vt.DepthSearch();
						}
					} else {
						alert(t);
					}
				}, false, Arrdel.join('&'));
			}
		});
	},
	delgeneralPost : function () {
		var arr = $ct.selected();
		if (arr.length == 0) {
			alert("请选择要删除的文件！");
			return false;
		}
		var url = $ct.getConfigDbName() + '/agtGeneralDocDelPost?OpenAgent'
			var Arrdel = [];
		Arrdel[0] = 'db=' + $vt.getViewDbName();
		Arrdel[1] = 'unid=' + arr.join(',');
		$vt.confirm({
			win : parent,
			title : 'DeleteFile',
			callback : function () {
				$ct.post(url, function (xhr) {
					var t = $ct.trim(xhr.responseText);
					if (t == 'OK') {
						if ($ct.getFldValue('fldSearch') == '') {
							$vt.refresh();
							$('[name=fldSearchStr]').val('');
							$('[name=fldSecondSearch]').prop('checked', false);
						} else {
							$vt.DepthSearch();
						}
					} else {
						alert(t);
					}
				}, false, Arrdel.join('&'));
			}
		});
	},
	delDoc : $.busi.del
};

var $ft = {
	content : '',
	getContent : function () {
		var sb = '';
		return sb;
	},
	isModify : function () {
		return (this.content != this.getContent() && this.content != '');
	},
	onLoad : function () {
		$(function () {
			$ft.content = $ft.getContent();
		});
	},
	/* 以下为BetterTip内容 */
	getAbsoluteLeft : function(o) {
		var oLeft = o.offsetLeft;
		var oParent = o.offsetParent;
		while (oParent) {
			oLeft += oParent.offsetLeft;
			oParent = oParent.offsetParent;
		}
		return oLeft;
	},
	getAbsoluteTop : function(o) {
		var oTop = o.offsetTop;
		var oParent = o.offsetParent;
		while (oParent) {
			oTop += oParent.offsetTop;
			oParent = oParent.offsetParent;
		}
		return oTop;
	},
	getElementWidth : function(o) {
		return o.offsetWidth;
	},
	BT_remove : function() {
		console.warn('tip方法$ft.BT_remove已弃用，请修改设计！');
		return false;
		var b = document.getElementById('BT');
		if (b) b.style.display = 'none';
	},
	BT_show : function(obj) {
		console.warn('tip方法$ft.BT_show已弃用，请修改设计！');
		return false;
		this.BT_remove();
		var tipid = obj.getAttribute('tip');
		var tipWidth = obj.getAttribute('tWidth') ? parseInt(obj.getAttribute('tWidth')) : 250;
		var act_left = this.getAbsoluteLeft(obj);
		var act_width = this.getElementWidth(obj);
		var left = act_left + act_width + 12;
		var top = this.getAbsoluteTop(obj);
		var arrowDir = "left";
		var docWidth = self.innerWidth || (document.documentElement && document.documentElement.clientWidth) || document.body.clientWidth;
		var right = act_left + act_width + 11 + tipWidth + 20;
		var arrowLeft = -10;
		var arrowTop = -3;
		var shadowTop = -7;
		var shadowLeft = -7;
		if (docWidth < right) {
			arrowDir = "right";
			left = act_left - 12 - tipWidth;
			arrowLeft = tipWidth;
			arrowTop = -1;
			if (document.all)
				arrowLeft -= 2;
		}
		var o = document.getElementById('BT');
		if (o){
			o.style.top = (top - shadowTop - 8) + 'px';
			o.style.left = (left - shadowLeft - 8) + 'px';
			o.style.display = 'block';
		}else{
			(o=$("<div id='BT' class='BT_shadow0' style='z-index:1999;top:" + (top - shadowTop - 8) + "px; left:" + (left - shadowLeft - 8) + "px;'></div>")).appendTo(document.body);
		}
		var sFrameCover = "<iframe style='position:absolute;width:100%;height:100%;filter:alpha(opacity=0);opacity=0;border-style:none;'></iframe>"
		o.innerHTML = sFrameCover+"<div class='BT_shadow1'>" + "<div class='BT_shadow2'>" + "<div id='BT_main' style='width:" + tipWidth + "px; top:" + shadowTop + "px; left:" + shadowLeft + "px;'>" + "<div id='BT_arrow_" + arrowDir + "' style='top: " + arrowTop + "px; left:" + arrowLeft + "px;'></div><div style='padding:5px'>" + "<div id='BT_content'>" + "<div class='BT_loader'></div>" + "</div>" + "</div>" + "</div></div></div>";
		var url = $ct.getFrameDbName('sysmsg.nsf') + '/link/ToolTip_' + tipid + '?OpenDocument';
		$ct.get(url, function(xhr) {
			o.innerHTML = sFrameCover+"<div class='BT_shadow1'>" + "<div class='BT_shadow2'>" + "<div id='BT_main' style='width:" + tipWidth + "px; top:" + shadowTop + "px; left:" + shadowLeft + "px;'>" + "<div id='BT_arrow_" + arrowDir + "' style='top: " + arrowTop + "px; left:" + arrowLeft + "px;'></div><div style='padding:5px'>" + "<div id='BT_content'>" + xhr.responseText+ "</div>" + "</div>" + "</div></div></div>";
			o = null;
		}, true, true);
	},
/* 以上为BetterTip内容 */
	callback : function (data) {
		if (frameElement) {
			try {
				var callback = frameElement.api.data.callback;
				if ($.isFunction(callback)) {
					callback(data);
				}
			} catch (e) {}
		} else {
			if ($.isFunction(parent.callback)) {
				parent.callback(data);
			}
		}
		return $ft;
	},
	close : function () {
		if (frameElement) {
			//frameElement.api.close();
			frameElement.api.hide();
			setTimeout("frameElement.api.close()",100);
		} else {
			parent.close();
		}
	},
	fomOptBar : function (theme, OperationBar) {
		if (typeof(DOMINO_OPT_BAR) == 'undefined') {
			var tableBar = $('table:last');
		} else {
			var tableBar = $(DOMINO_OPT_BAR);
		}
		tableBar.find('a').each(function (i, a) {
			if ($(a).text() != '-') {
				frameElement.api.button({
					name : $.trim($(a).text()),
					callback : function () {
						$(a).click();
						return false;
					},
					focus : $(a).attr('target') == 'focus' ? true : false
				});
			}
		});
	},
	qtip : function (scope) {
		if($.type(scope)!='object'||$.type(scope)!='string')
			scope = '';
		if ($.fn.qtip) {
			$('[tip]', scope).each(function () {
				$(this).qtip({
					content : {
						text : function (event, api) {
							$.ajax({
								url : $ct.getFrameDbName('sysmsg.nsf') + '/link/ToolTip_' + api.elements.target.attr('tip') + '?OpenDocument',
								dataType : 'text'
							}).then(function (data) {
								api.set('content.text', data);
							});
							return "加载中...";
						}
					},
					position : {
						my : 'center left',
						viewport : $(window)
					},
					show : {
						solo : true
					},
					style : {
						classes : 'qtip-bootstrap'
					},
					hide : {
						fixed : true,
						delay : 300
					}
				});
			});
		}
	},
	openIframe : function (target, url) {
		$(target).html("<iframe scrolling='auto' frameborder='0' src='" + url + "' style='width:100%;height:100%'></iframe>");
	},
	metadata : function () {
		var metadata = parent.metadata;
		if (metadata == null) {
			if (frameElement && frameElement.api) {
				metadata = frameElement.api.data.argus;
			}
		}
		return metadata;
	}
};

//xpage functions
var XSP;
if (XSP)
	$xpt = {
		//Programmatically Triggering an XPages Server Side Event Handler
		executeOnServer : function () {

			// must supply event handler id or we're outta here....
			if (!arguments[0])
				return false;

			// the ID of the event handler we want to execute
			var functionName = arguments[0];

			// OPTIONAL - The Client Side ID that you want to partial refresh after executing the event handler
			var refreshId = (arguments[1]) ? arguments[1] : "@none";
			var form = (arguments[1]) ? XSP.findForm(arguments[1]) : dojo.query('form')[0];

			// OPTIONAL - Options object contianing onStart, onComplete and onError functions for the call to the
			// handler and subsequent partial refresh
			var options = (arguments[2]) ? arguments[2] : {};

			// Set the ID in $$xspsubmitid of the event handler to execute
			dojo.query('[name="$$xspsubmitid"]')[0].value = form.id + ':' + functionName;
			XSP._partialRefresh("post", form, refreshId, options);

		}
	};

if ($.fn.pagination) {
	$.fn.pagination.defaults.beforePageText = '第';
	$.fn.pagination.defaults.afterPageText = '页 共{pages}页';
	$.fn.pagination.defaults.displayMsg = '显示{from}到{to},共{total}记录';
}
if ($.fn.datagrid) {
	$.fn.datagrid.defaults.loadMsg = '正在处理，请稍待。。。';
}
if ($.fn.treegrid && $.fn.datagrid) {
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager) {
	$.messager.defaults.ok = '确定';
	$.messager.defaults.cancel = '取消';
}
if ($.fn.validatebox) {
	$.fn.validatebox.defaults.missingMessage = '该输入项为必输项';
	$.fn.validatebox.defaults.rules.email.message = '请输入有效的电子邮件地址';
	$.fn.validatebox.defaults.rules.url.message = '请输入有效的URL地址';
	$.fn.validatebox.defaults.rules.length.message = '输入内容长度必须介于{0}和{1}之间';
	$.fn.validatebox.defaults.rules.remote.message = '请修正该字段';
}
if ($.fn.numberbox) {
	$.fn.numberbox.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.combobox) {
	$.fn.combobox.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.combotree) {
	$.fn.combotree.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.combogrid) {
	$.fn.combogrid.defaults.missingMessage = '该输入项为必输项';
}
if ($.fn.calendar) {
	$.fn.calendar.defaults.weeks = ['日', '一', '二', '三', '四', '五', '六'];
	$.fn.calendar.defaults.months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
}
if ($.fn.datebox) {
	$.fn.datebox.defaults.currentText = '今天';
	$.fn.datebox.defaults.closeText = '关闭';
	$.fn.datebox.defaults.okText = '确定';
	$.fn.datebox.defaults.missingMessage = '该输入项为必输项';
	$.fn.datebox.defaults.formatter = function (date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
	};
	$.fn.datebox.defaults.parser = function (s) {
		if (!s)
			return new Date();
		var ss = s.split('-');
		var y = parseInt(ss[0], 10);
		var m = parseInt(ss[1], 10);
		var d = parseInt(ss[2], 10);
		if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
			return new Date(y, m - 1, d);
		} else {
			return new Date();
		}
	};
}
if ($.fn.datetimebox && $.fn.datebox) {
	$.extend($.fn.datetimebox.defaults, {
		currentText : $.fn.datebox.defaults.currentText,
		closeText : $.fn.datebox.defaults.closeText,
		okText : $.fn.datebox.defaults.okText,
		missingMessage : $.fn.datebox.defaults.missingMessage
	});
}