var docBody = null;  
sapPopupSizeBehavior     = { CONTENT : "CONTENT", USER : "USER" };
strDomainRelaxScript  = "";  

if(ur_system.emptyhoverurl==null) ur_system.emptyhoverurl = ur_system.mimepath+"emptyhover.html";
//popup_emptydoc = "about:blank";

sapPopupPositionBehavior = { MENULEFT : "MENULEFT", MENURIGHT : "MENURIGHT", BROWSERCENTER : "BROWSERCENTER", USER : "USER", SUBMENU : "SUBMENU", EVENT:"EVENT"}
var sapPopupMainId = "sapPopupMainId_X";
var sapPopupStore=new Array(); 

window.addEventListener("load",sapPopup_init);

function sapPopup_init() {
  var oFramesContainer = document.getElementById("urFrames");
  if(oFramesContainer!=null){
    return;
  }
  window.document.addEventListener("mousemove",resetMouseOver);

	var b=document.getElementsByTagName("BODY")[0];
	var oFramesContainer=document.createElement("DIV");
	oFramesContainer.setAttribute("id","urFrames");
	b.appendChild(oFramesContainer);
	for (var n=0;n<2;n++) {
		var oFrame = document.createElement("IFRAME");
		oFrame.src="javascript:void(0)";
    oFrame.setAttribute("frameBorder","0");
		oFramesContainer.appendChild(oFrame);
		oFrame.setAttribute("id",sapPopupMainId+(n));
		oFrame.setAttribute("name",sapPopupMainId+(n));
		oFrame.style.position="absolute";
		oFrame.style.zIndex="1001";
		oFrame.style.width="0";
		oFrame.style.height="0";
		oFrame.style.display="block";
		oFrame.setAttribute("tabIndex","-1");
		oFrame.setAttribute("border","no");
		oFrame.setAttribute("scrolling","no");
		oFrame.src=ur_system.emptyhoverurl;
  }
}  
function sapPopup(sourcewindow,stylesheets,contentobject,sourceobject,sourceevent,level) {
  if (!level) level=0;
  this.level=level;
  //define a global variable with the body element for all popups once
  if (!docBody) docBody = window.document.getElementsByTagName("BODY")[0];

  //Attributes
  this.sizebehaviour   = sapPopupSizeBehavior.CONTENT;
  if (ur_system.direction=="rtl")
    this.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
  else
    this.positionbehavior = sapPopupPositionBehavior.MENULEFT;
  
  this.position = { left: -1, top: -1, right: -1, bottom: -1 };
  this.size     = { width: -1, height: -1 };
  
  if (document.getElementById(sapPopupMainId+(level+1))==null) {
  	 var oFramesContainer = document.getElementById("urFrames");
  	 for (var f=level+1;f<level+3;f++) {
    	 var oFrame = document.createElement("IFRAME");
			 oFrame.src="javascript:void(0)";
			 oFramesContainer.appendChild(oFrame);
    	 oFrame.setAttribute("id",sapPopupMainId+(f));
    	 oFrame.setAttribute("name",sapPopupMainId+(f));
    	 oFrame.style.position="absolute";
			 oFrame.style.zIndex="1001";
			 oFrame.style.width="0";
			 oFrame.style.height="0";
			 oFrame.style.display="block";
			 oFrame.setAttribute("tabIndex","-1");
    	 oFrame.setAttribute("frameborder","0");
    	 oFrame.setAttribute("border","no");
    	 oFrame.setAttribute("scrolling","no");
       oFrame.src=ur_system.emptyhoverurl;
  	 }
  }
  this.frame = { object: document.getElementById(sapPopupMainId+level), 
                 window: window.frames[sapPopupMainId+level]};

  this.content = { html: contentobject.innerHTML,
                   size: contentobject.childNodes[0],
                   obj:contentobject };
  
  //store information about the source of that popuprequest
  this.source = { event:sourceevent, 
                  object:sourceobject, 
                  window: sourcewindow, 
                  document:sourcewindow.document, 
                  body: sourcewindow.document.getElementsByTagName("BODY")[0] };
  
  this.canrender   = true;
  this.scrolling   = true; 
  this.stylesheets = stylesheets;

  //Methods
  this.write   = sapPopup_write;
  this.show    = sapPopup_show;
  this.showOld = sapPopup_showOld;  
  this.hide    = sapPopup_hide;
  this.poscalc = sapPopup_poscalc;
  //this.closeWin= sapPopup_close;
  
  //Events
  this.onbeforerender  = null;
  this.onblur          = null;
  this.mouseover       = true;    
  
  
   
  //if relative urls are used for styles try to absolute them
  for (var n=0; n<this.stylesheets.length;n++) {
    this.stylesheets[n]=relativeToAbsolutePath(this.stylesheets[n],sourcewindow.location.href);
  }
  if (this.source.window.ur_system.domainrelaxing==this.source.window.sapUrDomainRelaxing.MINIMAL) {
    strDomainRelaxScript  = "<s"+"cript>var hostname = location.hostname;if( !(/^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(hostname)) ) {var posBehindFirstDot = hostname.indexOf(\".\") + 1;if (posBehindFirstDot>0) {document.domain=hostname.substr(posBehindFirstDot);}};</scri"+"pt>";
  } else {
      if (this.source.window.ur_system.domainrelaxing==this.source.window.sapUrDomainRelaxing.MAXIMAL){
      strDomainRelaxScript  = "<s"+"cript>try { while(document.domain.indexOf(\".\")>0) { document.domain = document.domain.substr(document.domain.indexOf(\".\")+1); }} catch(e) {}};</scri"+"pt>";
    }
  }

  //set a variable inside sourcewindow to itself, used to refer events back
  this.source.window.me = this.source.window;
  sapPopupStore[level] = this;
  return this; 
}

function sapPopup_write(bDoNotAutoFocus) {
  var oTargetWin = this.frame.window;
  var oTargetDoc = oTargetWin.document;
  var oTargetBody = oTargetDoc.getElementsByTagName("BODY")[0];
  //set the text direction
  if (ur_system.direction == "rtl")
    oTargetBody.setAttribute("dir","rtl")
    oTargetWin.mover=false;
    oTargetWin.ispopup=true;
    oTargetWin.me=null;
    var oFunc = new oTargetWin.Function("if (parent.sapPopupStore["+this.level+"]) {me=parent.sapPopupStore["+this.level+"].source.window;mylevel="+this.level+";}else{mylevel=null;}");
    oFunc();
  if (!bDoNotAutoFocus) {
		try {oTargetWin.focus();} 
		catch(ex){}
	}
  if(ur_system.is508) {
    oTargetDoc.attachEvent('onactivate',me.ur_SCR_activate);
  }
  
  if (ur_system.eventPrefix) {
    oTargetDoc.attachEvent("onactivate", ur_activateEvents);
  }

  for (var n = 0; n<this.stylesheets.length;n++) {
    var oLink = oTargetDoc.getElementsByTagName("LINK")[0];
    oLink.href = this.stylesheets[n];
  }
  
  oTargetBody.onbeforeunload = new oTargetWin.Function('if (window.me) me.closeWin(window);');
  oTargetBody.className = "urBdyStd";
  oTargetBody.scroll = "no";
  sFocus = "";
  if (!bDoNotAutoFocus) {
    oTargetBody.tabIndex="0";
    oTargetBody.onload = new oTargetWin.Function("document.body.focus()");
    oTargetBody.onclick = new oTargetWin.Function("document.body.focus()");
  }  
  oTargetBody.unselectable = "on";
  oTargetBody.oncontextmenu = new oTargetWin.Function("return false");
  //oTargetBody.onblur=new oTargetWin.Function('if (window.me) me.closeWin(window);');
  oTargetBody.onmouseenter=new oTargetWin.Function('window.mover=true;if (window.me) {if (window.me.sapPopupStore["+this.level+"]) me.sapPopupStore["+this.level+"].mouseover=true;}'); 
  oTargetBody.onmouseleave=new oTargetWin.Function('window.mover=false;if (window.me) {if (window.me.sapPopupStore["+this.level+"]) me.sapPopupStore["+this.level+"].mouseover=false;}');  
  oTargetBody.attachEvent("onactivate",new oTargetWin.Function('window.mover=true;if (window.me) {if (window.me.sapPopupStore["+this.level+"]) me.sapPopupStore["+this.level+"].mouseover=true;}'));  
  oTargetBody.style.margin="0";
  oTargetBody.style.border="none";
  var oDiv = oTargetDoc.createElement("DIV");
  oTargetBody.innerHTML="";
  oTargetBody.appendChild(oDiv);
  var sBaseUrl = document.location.href.substring(0,document.location.href.lastIndexOf(document.location.search));
  sBaseUrl = sBaseUrl.substring(0,sBaseUrl.lastIndexOf("/"));
  this.content.html =  this.content.html.replace(/src=\"\./gi," src=\""+sBaseUrl+"/.");
  oDiv.innerHTML=this.content.html;
}

function sapPopup_poscalc() {
//set the size of the frame depending on its content
  if (this.sizebehaviour==sapPopupSizeBehavior.CONTENT) {
    this.size.width  = this.content.size.offsetWidth;
    this.size.height = this.content.size.offsetHeight;
  } else {
    if ((this.size.width<=0) || (this.size.height<=0)) {
      showError("Please set\n   int sapPopup.size.width\n   int sapPopup.size.height\n to a value > 0.");
      this.canrender = false
    }
  } 
  var sourceoffset    = getAbsolutePosition(this.source.object);
  var sourcesize      = getElementSize(this.source.object);
  var oldPosLeft      = this.position.left;
  var oldPosRight     = this.position.right;
  var oldPosTop       = this.position.top;
  
  // bug in IE: 
  // in RTL, in case there is no scrollbar
  // the visible page extends from right:16 to left:scrollLeft-16
  // the browser won't let me use the leftmost 16px,
  // but at least I can prevent it from using the rightmost 16px (GN)
  var rightPageEnd	= 0;
  if (ur_system.direction=="rtl") 
    if (docBody.clientLeft <= 2) rightPageEnd = 16;
    
  //event object is available
  if ( this.positionbehavior.indexOf("MENU")>-1) {
    //set inital positions
    this.position.right = sourceoffset.right;
    this.position.left = sourceoffset.left;
    this.position.top  = sourceoffset.top + sourcesize.height ;
    if (this.level>0) {
      this.position.right = this.position.right + sapPopupStore[this.level-1].position.right;
      this.position.left  = this.position.left  + sapPopupStore[this.level-1].position.left;
      this.position.top   = this.position.top   + sapPopupStore[this.level-1].position.top;
    }
    if (this.positionbehavior == sapPopupPositionBehavior.MENURIGHT) {
      if (ur_system.direction!="rtl")
        this.position.left = this.position.left + sourcesize.width - this.size.width;
    }
    if (this.positionbehavior == sapPopupPositionBehavior.MENULEFT) {
      if (ur_system.direction=="rtl")
        this.position.right = this.position.right + sourcesize.width - this.size.width;
    }
    if (this.positionbehavior == sapPopupPositionBehavior.SUBMENU) {
      if (ur_system.direction=="rtl")
        this.position.right = this.position.right + sourcesize.width; 
      else
        this.position.left = this.position.left + sourcesize.width;
    this.position.top  = this.position.top - sourcesize.height;
    }
  // subtract scrolled parts
  var sccontrol = this.source.object.parentNode; //the events trigger
  while (sccontrol) {
    if (sccontrol.tagName=="DIV" || sccontrol.tagName=="SPAN") { 
    if (sccontrol.currentStyle.overflow!="visible") {
	    if (sccontrol.scrollTop>0)  this.position.top=this.position.top-sccontrol.scrollTop;
        if (ur_system.direction=="rtl") {
          scrollRight = getScrollRight(sccontrol);
          if (scrollRight>0) this.position.right=this.position.right-scrollRight;
        } else {
	      if (sccontrol.scrollLeft>0) this.position.left=this.position.left-sccontrol.scrollLeft;
    	}
    }
    }
    
    sccontrol = sccontrol.parentNode; 
  }
    
//calculate left and bottom resp. right and bottom
  if (ur_system.direction=="rtl") 
    this.position = setPosBottomLeft(docBody, this.position, this.size);
  else
    this.position = setPosBottomRight(docBody, this.position, this.size);
      
  // if submenue does not fit on usual place,
  // try to position on other side of parent menu,
  // but only, if there is enough space available
  var setsubmenubelow=false;
  if (this.positionbehavior == sapPopupPositionBehavior.SUBMENU) {
	if (ur_system.direction=="rtl") { 
	  if (this.position.left-docBody.scrollLeft<0) {
        if (this.position.right-(sourcesize.width)+2-this.size.width>rightPageEnd+getScrollRight(docBody)) {
          this.position.right=this.position.right-(sourcesize.width)+2-this.size.width;
        }  
        else {
          this.position.top = this.position.top + sourcesize.height;
          setsubmenubelow=true;
        }    
        this.position = setPosBottomLeft(docBody, this.position, this.size); 
      }  
    }
    else {
      if (this.position.right-getScrollRight(docBody)<0) {
        if (this.position.left-(sourcesize.width)+2-this.size.width>docBody.scrollLeft) {
          this.position.left=this.position.left-(sourcesize.width)+2-this.size.width;
        }  
        else {
          this.position.top = this.position.top + sourcesize.height;
          setsubmenubelow=true;
        }
        this.position = setPosBottomRight(docBody, this.position, this.size); 
      } 
    }  
  }     
  
  // reposition horizontally
  if (ur_system.direction=="rtl") {
      if (this.position.left-docBody.scrollLeft<0) this.position.right = getScrollRight(docBody) + docBody.clientWidth - this.size.width; // too left
      if (this.position.right-getScrollRight(docBody)<rightPageEnd) this.position.right = rightPageEnd + getScrollRight(docBody);  //too right
  } else {
    if (this.position.right-getScrollRight(docBody)<0) this.position.left = docBody.scrollLeft + docBody.clientWidth - this.size.width;  //too right
    if (this.position.left-docBody.scrollLeft<0) this.position.left  = 0 + docBody.scrollLeft; //too left
  }
  // reposition vertically
  if (this.position.bottom<0) {											 //too bottom
      if (this.positionbehavior == sapPopupPositionBehavior.SUBMENU) {
        if (setsubmenubelow) 
          this.position.top = this.position.top - sourcesize.height - this.size.height; 
        else  
          this.position.top = this.position.top + sourcesize.height - this.size.height; 
      }  
      if ((this.positionbehavior == sapPopupPositionBehavior.MENULEFT) ||
          (this.positionbehavior == sapPopupPositionBehavior.MENURIGHT)) {
        this.position.top = this.position.top - sourcesize.height - this.size.height;  
      }
  }       
  if (this.position.top-docBody.scrollTop<0) this.position.top = 0 + docBody.scrollTop;  //too top

  //recalculate left resp. right and bottom according to changed values
  if (ur_system.direction=="rtl") 
    this.position = setPosBottomLeft(docBody, this.position, this.size);
  else
    this.position = setPosBottomRight(docBody, this.position, this.size); 
} else if ( this.positionbehavior == sapPopupPositionBehavior.BROWSERCENTER) {
  if (ur_system.direction=="rtl") 
      this.position.right   = Math.floor((docBody.clientWidth/2)-(this.size.width/2)) + getScrollRight(this.source.body);
    else 
      this.position.left    = Math.floor((docBody.clientWidth/2)-(this.size.width/2)) + this.source.body.scrollLeft;
    this.position.top     = Math.floor((docBody.clientHeight/2)-(this.size.height/2)) + this.source.body.scrollTop;
    if (ur_system.direction=="rtl") 
      this.position = setPosBottomLeft(docBody, this.position, this.size)
    else
      this.position = setPosBottomRight(docBody, this.position, this.size)
} else if (this.positionbehavior == sapPopupPositionBehavior.EVENT) {
  if (ur_system.direction=="rtl") 
    this.position.right = getclientXtoRight(this.source.event)+getScrollRight(docBody); 
  else
    this.position.left = this.source.event.clientX+docBody.scrollLeft;
  this.position.top  = this.source.event.clientY+docBody.scrollTop;
    //calculate right and bottom
  if (ur_system.direction=="rtl") 
    this.position = setPosBottomLeft(docBody, this.position, this.size)
  else
    this.position = setPosBottomRight(docBody, this.position, this.size)
  //repositioning horizontally
  if (ur_system.direction=="rtl") {
    if (this.position.left-docBody.scrollLeft<0) this.position.right = this.position.right - this.size.width; //too left
    if (this.position.right-getScrollRight(docBody)<rightPageEnd) this.position.right=rightPageEnd + getScrollRight(docBody); // too right
  } else {
    if (this.position.right-getScrollRight(docBody)<0) this.position.left = this.position.left - this.size.width;  //too right
    if (this.position.left-docBody.scrollLeft<0) this.position.left=docBody.scrollLeft; // too left
  }
  // repositioning vertically
  if (this.position.bottom<0) this.position.top = this.position.top - this.size.height;    //too bottom
  if (this.position.top-docBody.scrollTop<0) this.position.top=docBody.scrollTop;    // too top
  //recalculate left resp. right and bottom according to changed values
  if (ur_system.direction=="rtl") 
    this.position = setPosBottomLeft(docBody, this.position, this.size);
  else
    this.position = setPosBottomRight(docBody, this.position, this.size);
} else 
  if (ur_system.direction=="rtl") {
    if ((this.position.top<0) || (this.position.right<0)) {
      showError("Please set\n   int sapPopup.position.right\n   int sapPopup.position.top\n to a value > 0.");
      this.canrender = false;
    }
  } else {
    if ((this.position.top<0) || (this.position.left<0)) {
      showError("Please set\n   int sapPopup.position.left\n   int sapPopup.position.top\n to a value > 0.");
      this.canrender = false;
    }  
  }
    
  if ((this.position.left-docBody.scrollLeft<0) || (this.position.right-getScrollRight(docBody)<rightPageEnd)) {
	if (ur_system.direction=="rtl")
      this.position.right = rightPageEnd + getScrollRight(docBody);
    else
      this.position.left = docBody.scrollLeft;
  }
  if ((this.position.top-docBody.scrollTop<0) || (this.position.bottom<0)) {
    if (this.canrender) this.scrolling = true; //sorry does not fit
    this.position.top  = docBody.scrollTop;
  }
  if (ur_system.direction=="rtl")
    this.position.right += oldPosRight+1;
  else
    this.position.left+=oldPosLeft+1;
  this.position.top +=oldPosTop+1;
}

function sapPopup_show(bDoNotAutoFocus) {
  this.poscalc();
  if (this.onbeforerender) { if (!this.onbeforerender(this)) return; }
  if (!this.canrender) { showError("Cannot render Popup. Sizes and positions are not set."); return; }
  if (this.frame.window.mylevel==null) {
    this.write(bDoNotAutoFocus);
  } else {
    this.frame.window.document.getElementsByTagName("DIV").item(0).innerHTML=this.content.html;
  }
  if (bDoNotAutoFocus) {
  } else {
   try {this.frame.window.document.body.focus();}
   catch(ex) {} 
  }
  if (ur_system.direction=="rtl")
    this.frame.object.style.right   = this.position.right+"px";
  else
    this.frame.object.style.left   = this.position.left+"px";
  this.frame.object.style.top    = this.position.top+"px";
  this.frame.object.style.width  = this.size.width+"px";
  this.frame.object.style.height = this.size.height+"px";
  return true;
}

//----------------------------------------------------------------------------
// method showOld
//----------------------------------------------------------------------------
// desc : shows the popup, does not calculate the position and does not
//        write the content
// in   : none
// out  : none 
// brw  : IE6>
//----------------------------------------------------------------------------
function sapPopup_showOld() {
  if (ur_system.direction=="rtl")
    this.frame.object.style.right   = this.position.right+"px";
  else
    this.frame.object.style.left   = this.position.left+"px";
  this.frame.object.style.top    = this.position.top+"px";
  this.frame.object.style.width  = this.size.width+"px";
  this.frame.object.style.height = this.size.height+"px";
  return true;
}


function resetMouseOver() {
	if (sapPopupStore[0]) {
		var overmenu=false;
		for (var i=0;i<sapPopupStore.length;i++) {
		  sapPopupStore[i].mouseover=false;
		}
	}
}

function closeIfDeactivated() {
    var overmenu;
    for (var i=0;i<sapPopupStore.length;i++) {
      if (sapPopupStore[i] && sapPopupStore[i].mouseover) {
        overmenu=true; 
      }
    }
    if (!overmenu) {
       setTimeout("closeIfDeactivatedDelayed()",0);
    }
}

function closeIfDeactivatedDelayed() {
    var overmenu;
    for (var i=0;i<sapPopupStore.length;i++) {
      if (sapPopupStore[i] && sapPopupStore[i].mouseover) {
        overmenu=true; 
      }
    }
    if (!overmenu) {
        for (var i=0;i<sapPopupStore.length;i++) {
          if (sapPopupStore[i]) {
            sapPopupStore[i].hide();
          }
        }
    }
}

function closeWin(w) {
 if (w.mylevel>=0) {
  if (sapPopupStore[0]) {
   if (sapPopupStore[0].position.top>-1000) {
    var overmenu=false;
    for (var i=0;i<sapPopupStore.length;i++) {
      if (sapPopupStore[i].mouseover) {
       overmenu=true; 
      }
    }
    if (!overmenu) {
        try {
         sapPopupStore[0].source.object.focus();
            sapPopupStore[0].onblur();
          } catch (Ex) {
          }
        }
   }
  }
 } 
}
function setEventer() {
  oEvents = window.document.getElementById("sapPopup_Event");
  oEvents.style.top    = 0;
  if (ur_system.direction=="rtl") {
    oEvents.style.right	 = 0;
  } else {
    oEvents.style.left   = 0;
  }
  oEvents.style.width  = docBody.scrollWidth;
  oEvents.style.height = docBody.scrollHeight;
  oEvents.onmousedown  = blurPopupMenu;
  oEvents.level        = 0;
}
function resetEventer() {
 	oEvents = window.document.getElementById("sapPopup_Event");
  oEvents.style.top    = -5000;
  if (ur_system.direction=="rtl") {
    oEvents.style.right  = 0;
  } else {
    oEvents.style.left   = 0;
  }
  oEvents.style.width  = 1;
  oEvents.style.height = 1;
  oEvents.onmousedown  = null;
  oEvents.level        = 0;
}

function hidePopupMenu(level) {
  if (sapPopupStore[0]) {
    sapPopupStore[0].hide();
  }
}

function blurPopupMenu(level) {
  if (sapPopupStore[0]) {
    try {
      sapPopupStore[0].onblur();
    } catch (Ex){
    }
  }
}

function sapPopup_hide() {
  this.frame.object.style.top="-5001"; 
  if (ur_system.direction=="rtl") {
    this.frame.object.style.right="25px";
  } else {
    this.frame.object.style.left="0px";
  }
  if (this.level<sapPopupStore.length-1) {
  	sapPopupStore[this.level+1].hide();
  }
  if (this.level == 0 && this.remove) this.remove();
  sapPopupStore[this.level] = null; 
  var sapPopNew = new Array();
  for (var n=0;n<sapPopupStore.length;n++) {
  	if (sapPopupStore[n]!=null) {
  		sapPopNew[sapPopNew.length]=sapPopupStore[n];
  	}
  }
  sapPopupStore = sapPopNew;
  return true;
}

function setPosBottomRight ( oBody, oPos, oSize) {
  oPos.right   = oBody.scrollWidth - oPos.left - oSize.width;
  oPos.bottom  = oBody.clientHeight - oPos.top - oSize.height + oBody.scrollTop;
  // bottom is measured inside client window
  return oPos;
}   

function setPosBottomLeft ( oBody, oPos, oSize) {
  oPos.left   = oBody.scrollWidth - oPos.right - oSize.width; 
  oPos.bottom  = oBody.clientHeight - oPos.top - oSize.height + oBody.scrollTop;
  // bottom is measured inside client window
  return oPos;
}

function getAbsolutePosition (obj) {
  if (obj)
	  return sapUrMapi_getAbsolutePosition (obj);
}  

function getElementSize (obj) {
  if (obj)
    return { height : obj.offsetHeight, width: obj.offsetWidth };
}

/* fuer rtl eingefuegte Funktionen */

function getScrollRight(elem)
{
  //alert("getScrollRight = "+elem.scrollWidth+"-"+elem.scrollLeft+"-"+elem.clientWidth);
  return sapUrMapi_scrollRight(elem);
}

function getClientRight(elem)
{
  return sapUrMapi_clientRight(elem);
}

function getScrollBarWidth(elem)
{
    return sapUrMapi_scrollBarWidth(elem);
}

function getOffsetRight(elem)
{
    return sapUrMapi_offsetRight(elem);
}

function getclientXtoRight(e)
{
  return sapUrMapi_clientXtoRight(docBody,e)
}

/* Ende fuer rtl eingefuegte Funktionen */


function relativeToAbsolutePath(strRel,strAbs) {
  if (strRel.lastIndexOf("./")==-1) {
  	if((strRel.indexOf("http") !=-1) && (strRel.indexOf(".css"))) return strRel;
  	if((strRel.indexOf("https") !=-1) && (strRel.indexOf(".css"))) return strRel;
	  	
  	if(strRel.indexOf("/") == 0) {
  		strRel = strRel.substr(1);
  	}
  
  	if (strAbs.indexOf("?")!=-1) {
  		var strAbs = strAbs.substring(0,strAbs.indexOf("?"));
  	}
  
  	var urlParts = strAbs.split("//");
  	var domain = urlParts[1].substring(0,urlParts[1].indexOf("/"));
  	var strAbsPath = urlParts[0] + "//" + domain + "/";
  
    	strNewAbsPath = strAbsPath + strRel;
    	return strNewAbsPath;
    }
    else {
  	  if (strAbs.indexOf("?")==-1) {
  		var strRelDots      = strRel.substring(0,strRel.lastIndexOf("./")+2);
  		var strAbsPath      = strAbs.substring(0,strAbs.lastIndexOf("/"));
  	  }
  	  else {
  		var strRelDots      = strRel.substring(0,strRel.lastIndexOf("./")+2);
  		var strAbsPath      = strAbs.substring(0,strAbs.indexOf("?"));
  		var strAbsPath      = strAbsPath.substring(0,strAbsPath.lastIndexOf("/"));
  	  }
  }

  while(strRelDots.lastIndexOf("..")>-1) { //erase all double dots
    strAbsPath = strAbsPath.substring(0,strAbsPath.lastIndexOf("/")); 
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf(".."))+"/";
  }
  if (strRelDots.lastIndexOf("./")>-1) {
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf("./"))+"/";
    if (strRelDots.lastIndexOf("./")>-1) { 
      showError (strRel+" is not a valid relative url.");
    }
  }
  //build absolut path
  strNewAbsPath = strAbsPath + strRelDots + strRel.substring(strRel.lastIndexOf("./")+2,strRel.length);
  return strNewAbsPath;
}  

function showError(strTxt) {
  alert("Error:"+strTxt);
}
