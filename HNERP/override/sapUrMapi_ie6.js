
//** GlobalVariables.ie6 **

var sapUrDomainRelaxing = {NONE:"NONE",MINIMAL:"MINIMAL",MAXIMAL:"MAXIMAL"};
try {ur_system==null;} catch(e) {ur_system = {doc : window.document , stylepath : document.location.pathname.substring(0,document.location.pathname.substring(1).indexOf("/")+1)+"/resources/style/", is508 : true, domainrelaxing:sapUrDomainRelaxing.MINIMAL, dateformat:1, firstdayofweek:0, createTimeFrameworkControlled:false};}
try {ur_language==null;} catch(e) {ur_language=""};
ur_txt=new Array();
ur_system.browser_abbrev = "ie6";
if (ur_system.stylepath.lastIndexOf("/ur/")==ur_system.stylepath.length-4) ur_system.stylepath=ur_system.stylepath.substring(0,ur_system.stylepath.length-3);
if (ur_system.mimepath == null) ur_system.mimepath = ur_system.stylepath.substring(0,ur_system.stylepath.indexOf("/ur"))+"/common/";
if(ur_system.emptyhoverurl==null) ur_system.emptyhoverurl = ur_system.mimepath+"emptyhover.html";
ur_KEYS = {TAB:9,ESCAPE:27,
           UP:38,DOWN:40,LEFT:37,RIGHT:39,
           BEGIN:36,END:35,PAGE_UP:33,PAGE_DOWN:34,POS1:36,
           BACKSPACE:8,DELETE:46,ENTER:13,SPACE:32,INSERT:45,
           F4:115}

//** Abbrev.ie5 **

ur_ctmap={AX:"ActiveXContainer",AP:"AppletContainer",BRC:"BreadCrumb",B:"Button",BR:"ButtonRow",CP:"Caption",C:"CheckBox",CG:"CheckBoxGroup",CB:"ComboBox",CXP:"ContextualPanel",DT:"DataTip",DN:"DateNavigator",DRS:"DragSource",DDL:"DropDownListBox",DRT:"DropTarget",FU:"FileUpload",FL:"FlowLayout",FOC:"FocusRect",FRA:"FreeArea",GTBV:"GenericTableView",GM:"GeoMap",GL:"GridLayout",G:"Group",HD:"HorizontalDivider",IF:"Iframe",IMG:"Image",I:"InputField",IT:"InputTokenizer",ITL:"InputTokenList",INV:"Invisible",IL:"ItemList",ILB:"ItemListBox",	L:"Label",LEG:"Legend",LEGDI:"LegendDateNavigatorItem",LEGTI:"LegendTableItem",LN:"Link",LB:"ListBox",LA:"LoadingAnimation",ML:"MatrixLayout",MNB:"MenuBar",MB:"MessageBar",NL:"NavigationList",PH:"ViewSwitch",PG:"Paginator",PC:"PatternContainerContentItem",PCI:"PatternContainerIconButton",PCSEQ:"PatternContainerSequence",PCTAB:"PatternContainerTab",PCTIT:"PatternContainerTitle",PHI:"PhaseIndicator",PI:"PopIn",POMN:"PopupMenu",POTRG:"PopupTrigger",PRI:"ProgressIndicator",R:"RadioButton",RG:"RadioButtonGroup",RL:"RasterLayout",RI:"RatingIndicator",RM:"RoadMap",ST:"SapTable",STC:"SapTableCell",STDB:"SapTableDefaultBody",STHC:"SapTableHeaderCell",STHIC:"SapTableHierarchicalCell",STR:"SapTableRow",STSB:"SapTableScrollingBody",STSC:"SapTableSelectionCell",SC:"ScrollContainer",SLB:"SelectableLinkBar",SL:"SingleColumnLayout",TBV:"TableView",TS:"TabStrip",TSITM:"Tabstrip Item",TXB:"TextBar",TE:"TextEdit",TV:"TextView",TGL:"ToggleLink",T:"Toolbar",TB:"ToolbarButton",TCB:"ToolbarComboBox",TDDL:"ToolbarDropDownListBox",TI:"ToolbarInputField",TLN:"ToolbarLink",TSEP:"ToolbarSeparator",TY:"Tray",TR:"Tree",TRI:"TriStateCheckBox",BS:"UrBase",VC:"ValueComparison",VS:"ViewSwitch"};
ur_st={SUCCESS:"a",ERROR:"b",COMPLETED:"c",DESELECTABLE:"D",DISABLED:"d",END:"e",INVALID:"i",REQUIRED:"m",NOTSELECTED:"n",UNCOMPLETED:"o",READONLY:"r",SELECTABLE:"6",SELECTED:"s",UNDEFINED:"u",WARNING:"w",MINIMIZED:"z",START:"1",EXPANDED:"+",COLLAPSED:"-",SORTEDASC:"2",SORTEDDESC:"3",NOTSORTED:"4",DYNAMIC:"y"};

//** GlobalFunctions.ie5 **
ur_type={ActiveXContainer:"AX",ActiveXContainer_End:"AX_END",AppletContainer:"AP",AppletContainer_End:"AP_END",Button:"B",Button_Menu:"B_MNU",Button_MenuSection:"B_MNUSEC",Button_Toggle:"B_TG",BreadCrumb:"BRC",BreadCrumb_Item:"BRC_I",BreadCrumb_SingleLink:"BRC_SL",Calendar_Entry:"CAL_ENTRY",Calendar_Entry_Fullday:"CAL_ENTRY_FULLDAY",Calendar_DayColumn:"CAL_DCOL",Calendar_MultipleDayView:"CAL_MD",Calendar_DayView:"CAL_D",Calendar_MonthView:"CAL_M",Calendar_MonthCell:"CAL_MCELL",Calendar_YearView:"CAL_Y",Calendar_HierarchicalMonthView:"CAL_HM",Calendar_RowHeader:"CAL_RH",CheckBox:"C",ComboBox:"CB",ComboBox_DropDownListBox:"CB_DD",CheckBoxGroup:"CG",CheckBoxGroup_End:"CG_END",Caption:"CP",ContextualPanel:"CXP",ContextualPanel_Help:"CXP_H",ContextualPanel_Personalize:"CXP_P",ContextualPanel_End:"CXP_END",DateNavigator:"DN",DateNavigator_Month:"DN_MONTH",DateNavigator_Day:"DN_DAY",DateNavigator_Week:"DN_WEEK",DateNavigator_End:"DN_END",FileUpload:"FU",FreeArea:"FRA",FreeArea_Personalize:"FRA_P",FreeArea_End:"FRA_END",FormattedTextView:"FTV",GeoMap:"GM",GeoMap_Button:"GM_BTN",GeoMap_Image:"GM_IMG",GeoMap_End:"GM_END",GeoMap_ZoomIn:"GM_ZIN",GeoMap_ZoomOut:"GM_ZOUT",Group:"G",Group_End:"G_END",HorizontalContextualPanel:"HCNP",HorizontalContextualPanel_MenuItem:"HCNP_LNK",InputField:"I",Iframe:"IF",Iframe_End:"IF_END",ItemList:"IL",ItemListBoxSingle:"ILBS",ItemListBoxSingle_Item:"ILBS_I",ItemListBoxMultiple:"ILBM",ItemListBoxMultiple_Item:"ILBM_I",Image:"IMG",Invisible:"INV",InputTokenizer:"IT",InputTokenList:"ITL",Label:"L",Legend:"LEG",LegendDateNavigatorItem:"LEGDI",LegendTableItem:"LEGTI",Link:"LN",ListBox:"LB",LoadingAnimation:"LA",MatrixLayout:"ML",MenuBar:"MNB",MenuBar_Item:"MNB_I",MenuBar_End:"MNB_END",MessageBar:"MB",MessageBar_Link:"MB_LNK",MeltingGroup:"MG",MeltingGroup_End:"MG_END",NavigationList:"NL",NavigationList_Item:"NL_I",NavigationList_Group:"NL_G",NavigationList_Personalize:"NL_P",NavigationList_End:"NL_END",PageHeader:"PH",PageHeaderEnd:"PH_END",Paginator:"PG",Paginator_Button:"PG_B",Paginator_InputField:"PG_I",Paginator_Menu:"PG_MNU",Paginator_TextView:"PG_TV",PatternContainerContentItem:"PC",PatternContainerIconButton:"PCI",PatternContainerIconButton_Collapse:"PCI_C",PatternContainerIconButton_Expand:"PCI_E",PatternContainerIconButton_Min:"PCI_M",PatternContainerTab:"PCTAB",PatternContainerTab_Item:"PCTAB_I",PatternContainerTab_End:"PCTAB_END",PatternContainerTab_Menu:"PCTAB_MNU",PatternContainerTitle:"PCTIT",PatternContainerTitle_End:"PCTIT_END",PatternContainerTitle_Menu:"PCTIT_MNU",PatternContainerSequence:"PCSEQ",PatternContainerSequence_Item:"PCSEQ_I",PatternContainerSequence_End:"PCSEQ_END",PatternContainerSequence_Menu:"PCSEQ_MNU",PhaseIndicator:"PHI",PhaseIndicator_Step:"PHI_STN",PopIn:"PI",PopIn_CloseButton:"PI_CLB",PopIn_End:"PI_END",PopupMenu_Item:"POMN_I",PopupMenu_SubMenu:"POMN_ISMNU",PopupTrigger:"POTRG",ProgressIndicator:"PRI",RadioButton:"R",RadioButtonGroup:"RG",RadioButtonGroup_End:"RG_END",RasterLayout:"RL",RatingIndicator:"RI",RoadMap:"RM",RoadMap_RoundTripStep:"RM_SUB",RoadMap_Step:"RM_STN",RoadMap_RoundtripClosed:"RM_RTCLO",RoadMap_RoundtripStart:"RM_RTSTR",RoadMap_RoundtripEnd:"RM_RTEND",ScrollContainer:"SC",ScrollContainer_End:"SC_END",SapTable:"ST",SapTable_Header1:"ST_HDR1",SapTable_Header2:"ST_HDR2",SapTable_Header3:"ST_HDR3",SapTable_SortButtonAsc:"ST_SRTBTNA",SapTable_SortButtonDesc:"ST_SRTBTND",SapTable_SelectionCell:"ST_SC",SapTable_SelectionColumn:"ST_SCOL",SapTable_SelectionMenu:"ST_SMNU",SapTable_FilterButton:"ST_FBTN",SapTable_End:"ST_END",SapTable_Cell:"ST_C",SapTable_EmptyRowCell:"ST_ER",SectionHeader:"SH",SelectableLinkBar:"SLB",SingleColumnLayout:"SL",TableView:"TBV",TabStrip:"TS",TabstripItem:"TSITM",TextBar:"TXB",TextEdit:"TE",TextView:"TV",ToggleLink:"TGL",Toolbar:"T",Toolbar_ToggleButton:"T_BTN",Toolbar_End:"T_END",ToolbarInputField:"TI",ToolbarLink:"TLN",Tray:"TY",Tray_Button:"TY_BTN",Tray_Menu:"TY_MNU",Tray_End:"TY_END",Tree:"TR",Tree_Folder:"TR_F",Tree_Leaf:"TR_L",TriStateCheckBox:"TRI",ValueComparison:"VC",ViewSwitch:"VS"};
function UR_NotHandled(){}
function sapUrMapi_checkKey(e,eType,arrKeys) {
	if (e.type==eType) {
		for (var i=0;i<arrKeys.length;i++) {
			if (e.keyCode==parseInt(arrKeys[i])) {
				e.returnValue=false;
				return true;
			}
		}
	}
	return false;
}
   
  
  
  var ur_context={suppressFocus:false};
  function sapUrMapi_suppressFocus(){
  	ur_context.suppressFocus=true;
  	_ur_focused=false;
  }
function sapUrMapi_triggerFocus(sId) {
  ur_callDelayed("sapUrMapi_focusElement('" + sId.replace(/\\/g, "\\\\").replace(/\'/g, "\\'") + "', true)", 0);
}
function sapUrMapi_findFirstFocus(o,bLast) {
	if (o && o.style && o.style.display == "none") return null;
  var oChild=o;
  if (o==null) return null;
  if (sapUrMapi_Focus_canFocus(o)) {
		return o;
  }
  
  if (ur_system.direction=="rtl" || bLast) {
   	for (var i=oChild.childNodes.length-1;i>=0;i--) {
      var oTmp=oChild.childNodes.item(i);
      if (oTmp && oTmp.style && oTmp.style.display=="none") continue;
			if (sapUrMapi_Focus_canFocus(oTmp)) {
				return oTmp;
			}
			var oTmp=sapUrMapi_findFirstFocus(oTmp,bLast);
			if (oTmp!=null) {
				return oTmp;
			}
    }  
  } else {    
    for (var i=0;i<oChild.childNodes.length;i++) {
      var oTmp=oChild.childNodes.item(i);
      if (oTmp && oTmp.style && oTmp.style.display=="none") continue;
			if (sapUrMapi_Focus_canFocus(oTmp)) {
				return oTmp;
      }
      var oTmp=sapUrMapi_findFirstFocus(oTmp);
      if (oTmp!=null) {
        return oTmp;
      }
    }  
  }
  return null;
}
function ur_focus(o) {
	if (_ur_focused) {
		try {
			o.focus();
		}	catch (ex){}
  } else {
    _ur_focusedElement = o;
  }
}
function sapUrMapi_focusElement(sId,bTriggered) {
    if (ur_context.suppressFocus) {
      ur_context.setfocusto=sId;
      ur_context.suppressFocus = false;
      return;
    } 
    if (ur_context.setfocusto != null) {
      sId=ur_context.setfocusto;
      ur_context.setfocusto=null;
    }
 	var bErr=false;
  
	if( typeof(sId)=="string" )
	{
        
		if (ptrPopup.focusTitle(sId))
            		return;
    
	
		
		if ( sapUrMapi_SapTable_bIsMatrixId(sId))
		{
			sapUrMapi_SapTable_focusMatrixItem(sId);
			return;
		}
	}
	
	
	  var o;
	  if (typeof(sId)=="string") {
	    o=ur_get(sId);
	  } else {
	    o=sId;
	  }
	  if(o == null) return;
	  
	  var sType=sapUrMapi_getControlTypeFromObject(o);
	  
		if (sType=="I"  && bTriggered) {
			
			sId = sapUrMapi_getRootControl(o).id;
			o=ur_get(sId);
						
			if(o.tagName=="INPUT" && ( o.getAttribute('type') == "text" || o.getAttribute('type') == "password" ) ) {
				if(_ur_cursorInfo && _ur_cursorInfo.id == sId ) {
					var htmlRef = document.getElementById(_ur_cursorInfo.id);
					if(htmlRef) ur_setCursorPos(htmlRef, _ur_cursorInfo.pos);
				  else o.select();
				 } else{
					o.select(); 
					_ur_cursorInfo = null; 
				}
			}
		}
		if (sType=="TE" && bTriggered) {
			if(_ur_cursorInfo && _ur_cursorInfo.id == sId ) {
				var htmlRef = document.getElementById(_ur_cursorInfo.id);
				if(htmlRef) ur_setCursorPos(htmlRef, _ur_cursorInfo.pos);
			  else ur_setCursorPos(htmlRef,o.value.length);
			 }
			 else{
			   ur_setCursorPos(o,o.value.length); 
			  _ur_cursorInfo = null; 
			}
		}
		if ((sType=="TR")&&((o.className.indexOf("urTreN")>-1)||(o.className.indexOf("urTreExp")>-1))) {
		  sapUrMapi_Tree_focusNode(sapUrMapi_getRootControl(o).id,o.id.split("-")[0],true);
		} else if ((sType=="TS")&&
	            (((o.className.indexOf("urTbsTxt")>-1) || ((o.firstChild!=null)&&(o.firstChild.className.indexOf("urTbsTxt")>-1))))){
		  	sapUrMapi_TabStrip_initFocus(sapUrMapi_getRootControl(o).id,parseInt(o.id.split("-")[2]));
		} else if (sType=="I" || sType=="TE") { 
		   
		} else if (sType=="SLB") {
		    if (o.id.indexOf("-itm-")>-1) {
			    sapUrMapi_SelectableLinkBar_scroll(sapUrMapi_getRootControl(o).id,o.id);
			    sapUrMapi_setTabIndex(o,0);
			  }
			  try {
			   ur_focus(o);
			  } catch (ex){bErr=true};
		} else if ((sType=="PHI")&&(o.id.indexOf("-itm-")>-1)) {
		    sapUrMapi_PhaseIndicator_focusItem(sapUrMapi_getRootControl(o).id,"-itm-0",o.id.substring(o.id.indexOf("-")));
		} else if ((sType=="RM")&&(o.id.indexOf("-itm-")>-1)) {
		    sapUrMapi_RoadMap_setFocus(sapUrMapi_getRootControl(o).id,"-itm-0",o.id.substring(o.id.indexOf("-itm-")+5));
		}else if(sType=="IT"){
			ur_focus(o);
		}else if (sType=="ST") {
		  var oOrgFocusObj = o;
		  
		  if ((o.firstChild!=null) && (o.firstChild.tagName=="BUTTON") && (o.firstChild.className.indexOf("Ico")>-1)) {
		    o=o.firstChild;
		  }
		  o=sapUrMapi_findFirstFocus(o);
		  
		  if(!o && oOrgFocusObj) {
		  	var oElemToFocus = null;
		  	
		  	
		  	if(!oElemToFocus && oOrgFocusObj.getAttribute("tp") == "HIC" || oOrgFocusObj.getAttribute("tp") == "C") {
		  		oElemToFocus = oOrgFocusObj.firstChild;
		  	}
		  	
		  	
		  	if(!oElemToFocus && oOrgFocusObj.tagName == "TH" && oOrgFocusObj.id ) {
		  		var oContentContainer = document.getElementById(oOrgFocusObj.id + "-content");
		  		if(oContentContainer && oContentContainer.getAttribute("tp") &&  oContentContainer.getAttribute("tp").indexOf("HDR") == 0) {
		  			oElemToFocus = oContentContainer;
		  		}
		  		
		  	}
		  	
		  	if(oElemToFocus) {
					sapUrMapi_setTabIndex(oElemToFocus,"0");
					sapUrMapi_setTabIndexAutoReset(oElemToFocus);
					ur_focus(oElemToFocus);
					return;
		  	}
		  }
		    
		  try {
		   ur_focus(o);
		  } catch (ex){bErr=true};
		  
		} else if (sType=="CB") {
		  o=ur_get(sapUrMapi_getRootControl(o).id);
			if (o.disabled==true) { o.disabled=false;ur_focus(o);o.disabled=true;}
			else ur_focus(o);
		} 
		
		else if (sType=="C") {
			o=ur_get(o.id.split("-")[0]+"-img");
			ur_focus(o);
		} else if (sType=="R") {
			o=ur_get(o.id.split("-")[0]);
		  if (!o.checked) {
				var oInputGrp  = document.getElementsByName(o.name);
				for (var i=0;i<oInputGrp.length;i++){
				  if (oInputGrp[i].checked) {
				    o=oInputGrp[i];
						break;
				  } 
				}
		  }
		  try {
			 if (o.disabled==true) {o=ur_get(o.id.split("-")[0]+"-img");}
		   ur_focus(o);
		  } catch (ex){bErr=true};
		} else if (sType=="RG" && o.id.indexOf("skipend")<-1) {
		  o=sapUrMapi_findFirstFocus(o);
			if (o!=null && !o.checked) {
				var oInputGrp  = document.getElementsByName(o.name);
				for (var i=0;i<oInputGrp.length;i++){
				  if (oInputGrp[i].checked) {
				    o=oInputGrp[i];
				  } 
				}
		  }
		  o=ur_get(o.id.split("-")[0]);
		  try {
		   ur_focus(o);
		  } catch (ex){bErr=true};
		} else {
			if (typeof(sId)=="string") {
				if (ur_get(sId+"-r")!=null) {
					sapUrMapi_focusElement(sId+"-r");
				}
			}
			o=sapUrMapi_findFirstFocus(o);
			if (o==null) return;
		  try {
		   ur_focus(o);
		  } catch (ex){bErr=true};
	  }
	  if (!b508Refocus) {
	   if (bErr) {
	     sapUrMapi_Focus_hideFocusRect();
	   } else {
	     sapUrMapi_Focus_showFocusRect(o);
	   }
	  }
	  return true;
	
}
var b508Refocus=false;
function sapUrMapi_refocusElement(sId) {
	if (ur_system.is508) {
	  oSpan=ur_get("ur-accfocus");
	  if (oSpan==null) {
	    oSpan=document.createElement("span");
	    oSpan.setAttribute("id","ur-accfocus");
	    oSpan.style.position="absolute";
	    document.getElementsByTagName("BODY").item(0).appendChild(oSpan);
	    oSpan=ur_get("ur-accfocus");
	  }
	  oSpan.tabIndex="2";
	  b508Refocus=true;
	  oSpan.focus();
	  if(typeof(sId)=="object") sId.focus();
	  else ur_get(sId).focus();
	  b508Refocus=false;
	  oSpan.tabIndex="-1";
	}
}
function sapUrMapi_setTabIndex(oElem,sVal) {
	if(oElem.getAttribute("ti")) {
		oElem.setAttribute("orgTi",oElem.getAttribute("ti"));
	}	
  oElem.tabIndex=sVal;
  oElem.setAttribute("ti",sVal);
}
function sapUrMapi_resetTabIndex(oElem) {
	if(!oElem) oElem=this;
	
	if(oElem.getAttribute("orgTi")) {
		var sVal = oElem.getAttribute("orgTi");
		oElem.tabIndex=sVal;
		oElem.setAttribute("ti",sVal);
		if(oElem.onblur == sapUrMapi_resetTabIndex)
			oElem.onblur = null;
		oElem.setAttribute("orgTi",null);
	}	else {
  	oElem.tabIndex="-1";
  	oElem.setAttribute("ti",null);
	}
}
function sapUrMapi_setTabIndexAutoReset(oElem) {
	if(!oElem.onblur)
		oElem.onblur = sapUrMapi_resetTabIndex;
}
function sapUrMapi_getAbsolutePositionInScrollContainer(obj) {
	var position = { top: 0, left: 0, right: 0};
	var oOrg=obj;
	while (obj) {   
	  var offsetleft = obj.offsetLeft;
	  
	  if (ur_system.direction=="rtl") {
	    var offsetright = sapUrMapi_offsetRight(obj);
	    var controlType = sapUrMapi_getControlTypeFromObject(obj);
  		
		  if (controlType=="MB") {
	      if (obj.tagName=="SPAN") {
	        var temp=offsetleft+3;
	        offsetleft=offsetright-3;
	        offsetright=temp;
		   }
	    } else   
	    
	    
	    
	    if ((offsetleft < 0) && !(parseInt(obj.currentStyle.marginLeft) < 0)) {  
	      var parentControlType = "none";
          if (obj.offsetParent) {
            parentControlType = sapUrMapi_getControlTypeFromObject(obj.offsetParent);
          }
	      if ((controlType == "ST") || (controlType == "TBV")) {
			if (obj.offsetParent) {
			  
			  
			  
			  
              offsetleft = parseInt(obj.offsetParent.currentStyle.paddingLeft);
              offsetright = parseInt(obj.offsetParent.currentStyle.paddingRight);
              if (isNaN(offsetleft)) {offsetleft=0;}
              if (isNaN(offsetright)) {offsetright=0;}
            } else 
              offsetleft = 0;
              offsetright = 0;
	      } else if (controlType == "PMN") {
	        offsetleft = 0;
	        offsetright = 0;
	      } 
	      if ((parentControlType == "RL") && (controlType != "RL")) {
	        offsetleft = 0;
	        offsetright = 0;
	      }
	    } else 
	    if (controlType == "RI") {
	      
	      
	      
	      if (obj.tagName=="SPAN") {
	          offsetleft+=obj.firstChild.firstChild.offsetWidth-obj.offsetWidth;
	          offsetright+=obj.offsetWidth-obj.firstChild.firstChild.offsetWidth; 
	      }  
	    } else 
	    if (controlType == "CB") {
	      
	      
	      
	      var parentControlType = "none";
          if (obj.offsetParent) {
            parentControlType = sapUrMapi_getControlTypeFromObject(obj.offsetParent);
          }
	      if (parentControlType != "ST") {      
	        if (obj.tagName=="SPAN") {
              offsetleft+=obj.firstChild.offsetWidth-obj.offsetWidth;
	          offsetright+=obj.offsetWidth-obj.firstChild.offsetWidth + 16; 
	        }  
	      }     
	    }
	    if (sapUrMapi_getControlTypeFromObject(obj.firstChild) == "C") {
	      
	      
	      
	      var objChild = obj.firstChild;
	      if (obj.tagName=="SPAN") {
	          offsetleft+=objChild.firstChild.offsetWidth-objChild.offsetWidth;
	          offsetright+=objChild.offsetWidth-objChild.firstChild.offsetWidth; 
	      }  
	    }    
		  position.right += offsetright;
	  }     
    if (oOrg!=obj && obj.tagName && (obj.tagName=="DIV" || obj.tagName=="SPAN")) {
      if (obj.currentStyle.overflow!="visible") {
        break;
      }
    }
	  var offsettop=obj.offsetTop;
	  if (oOrg!=obj && obj.tagName!="TABLE") { 
			var iT=parseInt(obj.currentStyle.borderTopWidth);
			if (!isNaN(iT)) {
				offsettop+=iT;
			}
			var iW=parseInt(obj.currentStyle.borderLeftWidth);
			if (!isNaN(iW)) offsetleft+=iW;
		}
	  position.top  += offsettop;
	  position.left += offsetleft;
	  obj = obj.offsetParent;
	}
	return position;
}
function sapUrMapi_getAbsolutePosition (obj) {
	var position = { top: 0, left: 0, right: 0};
	var oOrg=obj;
	while (obj) {   
	  var offsetleft = obj.offsetLeft;
	  if (ur_system.direction=="rtl") {
	    var offsetright = sapUrMapi_offsetRight(obj);
	    var controlType = sapUrMapi_getControlTypeFromObject(obj);
	    if (controlType=="MNB") {
	      
	      
	      
	      
	      if (obj.tagName=="SPAN") {
	        var temp=offsetleft+3;
	        offsetleft=offsetright-3;
	        offsetright=temp;
	      }
	    } else if (controlType=="TR") {
	      
	      
	      if (obj.tagName=="SPAN") {
	        if (obj.offsetParent) {
	          offsetleft+=obj.offsetParent.offsetWidth-obj.offsetWidth;
	          offsetright+=obj.offsetWidth-obj.offsetParent.offsetWidth; 
	        }
	      }
	    } else   
	    
	    
	    
	    if ((offsetleft < 0) && !(parseInt(obj.currentStyle.marginLeft) < 0)) {  
	      var parentControlType = "none";
          if (obj.offsetParent) {
            parentControlType = sapUrMapi_getControlTypeFromObject(obj.offsetParent);
          }
	      if ((controlType == "ST") || (controlType == "TBV")) {
			if (obj.offsetParent) {
			  
			  
			  
			  
              offsetleft = parseInt(obj.offsetParent.currentStyle.paddingLeft);
              offsetright = parseInt(obj.offsetParent.currentStyle.paddingRight);
              if (isNaN(offsetleft)) {offsetleft=0;}
              if (isNaN(offsetright)) {offsetright=0;}
            } else 
              offsetleft = 0;
              offsetright = 0;
	      } else if (controlType == "POMN") {
	        offsetleft = 0;
	        offsetright = 0;
	      } 
	      if ((parentControlType == "RL") && (controlType != "RL")) {
	        offsetleft = 0;
	        offsetright = 0;
	      }
	    } else 
	    if (controlType == "RI") {
	      
	      
	      
	      if (obj.tagName=="SPAN") {
	          offsetleft+=obj.firstChild.firstChild.offsetWidth-obj.offsetWidth;
	          offsetright+=obj.offsetWidth-obj.firstChild.firstChild.offsetWidth; 
	      }  
	    } else 
	    if (controlType == "CB") {
	      
	      
	      
	      
	      var parentControlType = "none";
          if (obj.offsetParent) {
            parentControlType = sapUrMapi_getControlTypeFromObject(obj.offsetParent);
          }
	      if (parentControlType != "ST") {      
	        if (obj.tagName=="SPAN") {
              offsetleft+=obj.firstChild.offsetWidth-obj.offsetWidth;
	          offsetright+=obj.offsetWidth-obj.firstChild.offsetWidth; 
	        }  
	      }     
	    }
	    if (sapUrMapi_getControlTypeFromObject(obj.firstChild) == "CP") {
	      
	      
	      
	      var objChild = obj.firstChild;
	      if (obj.tagName=="SPAN") {
	          offsetleft+=objChild.firstChild.offsetWidth-objChild.offsetWidth;
	          offsetright+=objChild.offsetWidth-objChild.firstChild.offsetWidth; 
	      }  
	    }    
	    position.right += offsetright;
	  }     
	  var offsettop=obj.offsetTop;
	  if (oOrg!=obj && obj.tagName!="TABLE") { 
			var iT=parseInt(obj.currentStyle.borderTopWidth);
			if (!isNaN(iT)) {
				offsettop+=iT;
			}
			var iW=parseInt(obj.currentStyle.borderLeftWidth);
			if (!isNaN(iW)) offsetleft+=iW;
		}
	  position.top  += offsettop;
	  position.left += offsetleft;
	  obj = obj.offsetParent;
	}
	return position;
}
function sapUrMapi_getOffsetOnScreen (object) {
	var position= { top: 0, left: 0};
	position = sapUrMapi_getAbsolutePosition(object);
	var sccontrol = object.parentNode;
	while (sccontrol) {
	  if (sccontrol.tagName=="DIV" || sccontrol.tagName=="SPAN") {
	    if (sccontrol.currentStyle.overflow!="visible") {
	      if (sccontrol.scrollTop>0)  position.top=position.top-sccontrol.scrollTop;
	      if (sccontrol.scrollLeft>0) position.left=position.left-sccontrol.scrollLeft;
	    }
	  }
    	  sccontrol = sccontrol.parentNode;
	}
	return position;
}
function sapUrMapi_getRootControl(o) {
	var oR=o;
	try {
		
	  if (oR.id.indexOf("-")>-1) {
	    oR=ur_get(o.id.split("-")[0]);
	  }
	  if(oR.getAttribute("ct")!=null) return oR;
	  
	  oR=o;
	  while (oR.getAttribute("ct")==null) {
	    if (oR.tagName=="BODY") return "";
	    oR=oR.parentNode;
	  }
	  return oR;
	} catch (ex) {return ""};
}
function sapUrMapi_isChildOfControl(oObj,sControlType) {
  while (oObj.tagName!="BODY") {
    if (oObj && oObj.getAttribute && oObj.getAttribute("ct")==sControlType) return oObj;
    oObj=oObj.parentNode;
  }
  return null;
}
function sapUrMapi_getControlTypeFromObject(o) {
	try {
	  return sapUrMapi_getRootControl(o).getAttribute("ct");
	} catch (ex) {return ""};
}
function sapUrMapi_getControlType(sId) {
	try {
	  aId=sId.split("-");
	  var sCt=ur_get(aId[0]).getAttribute("ct");
	  if(sCt==null) sCt=ur_get(aId[0]+"-r").getAttribute("ct");
	  return sCt;
	} catch (ex) {return ""};
}
function getLanguageText(sMain,arrChildTxt) {
	 var s;
	 try {
	 	 s= ur_txt[ur_language][sMain];
	 	 if (arrChildTxt) {
		 	for (var i=0;i<arrChildTxt.length;i++) {
			 	 if (ur_txt[ur_language][arrChildTxt[i]]) {
			 	   s= s.replace("{"+i+"}",ur_txt[ur_language][arrChildTxt[i]]);
		 	 	} else {
		 	   	s= s.replace("{"+i+"}",arrChildTxt[i]);
		 	 }
		 }
	 }
	} catch (e) {
   		s="";
	}
	 return s;
}
function sapUrMapi_triggerClick(e,arrKeys) {
 if(sapUrMapi_checkKey(e,"keydown",arrKeys) || sapUrMapi_checkKey(e,"keypress",arrKeys)){
  try{
      e.srcElement.click();
    }
    catch(ex){};
  }
}
function sapUrMapi_scrollRight(elem) {
  return elem.scrollWidth-elem.scrollLeft-elem.clientWidth;
}
function sapUrMapi_clientRight(elem)
{
  return elem.offsetWidth-elem.clientWidth-elem.clientLeft;
}
function sapUrMapi_scrollBarWidth(elem)
{
  clientRight=sapUrMapi_clientRight(elem);
  if (elem.clientLeft>clientRight) return elem.clientLeft-clientRight;
    else return clientRight-elem.clientLeft;
}
var ur_applyRightMargin = false;
function sapUrMapi_offsetRight(elem) {
  var x = 0;
  var obj = elem;
  while (obj.tagName != "BODY" ) {
    if (obj.offsetWidth > document.body.clientWidth-document.body.clientLeft+2) {
      ur_applyRightMargin = true;
    }
    obj = obj.offsetParent;
  }
  if (elem.currentStyle.position=="absolute") {
    ur_applyRightMargin = false;
    
    
  }
  if (elem.offsetLeft < 0) {
    var iRight = parseInt(elem.currentStyle.right);
    if (iRight>0) return iRight;
    if (elem.clientWidth == 0) return 0;
    return elem.clientWidth - elem.offsetWidth;
  }
  if (elem.offsetParent) {
	  if (elem.scrollWidth > elem.clientWidth) {
	    x = parseInt(elem.currentStyle.paddingRight);
	    if (isNaN(x)) x=0;
	    return x;
    } else {
	    x = parseInt(elem.currentStyle.paddingRight);
	    if (isNaN(x)) x=0;
   
    var iParentClientWidth = elem.offsetParent.clientWidth;
    
    if (iParentClientWidth == 0) iParentClientWidth = elem.offsetParent.offsetWidth;
    return iParentClientWidth-elem.offsetLeft-elem.offsetWidth;
}
  } else {
    if (elem.tagName && elem.tagName=="BODY" && (elem.currentStyle.overflow=="scroll" || (elem.currentStyle.overflow =="auto"  || elem.currentStyle.overflow =="hidden" && elem.scrollHeight > elem.offsetHeight || (elem.scrollWidth > elem.offsetWidth && elem.scrollHeight == elem.offsetHeight)))) {
	    if (elem.scrollWidth > elem.clientWidth) {
	      x = parseInt(elem.currentStyle.marginRight);
	      if (isNaN(x)) x=0;
	      var result = (ur_applyRightMargin ? x : 0); 
	      ur_applyRightMargin=false;
	      return result;
      } else {
        return 0;
            }
    } else {
     return 0;
    }
  }
}
function sapUrMapi_clientXtoRight(docBody, e)
{
  return docBody.offsetWidth-e.clientX;
}
function sapUrMapi_posLeftCorrectionForRTL(elem)
{
   return elem.scrollWidth - elem.clientWidth + 16;
}
function sapUr_Scroll_scrollToPosition(sId,x,y) {
	var ct = sapUrMapi_getControlType(sId);
	try{
	if(ct!="")
	{
		if(ct=="G" || ct=="TY")
			sapUrMapi_scrollToPosition(ur_get(sId+"-bd"),x,y);
		else
		if(ct =="TS")
		{
			var iSelIdx = ur_get(sId).getAttribute('sidx'); 
			var oCont = ur_get(sId+"-tbar-cnt-"+iSelIdx); 
			if(!oCont) 
			{
				oCont = ur_get(sId+"-bd-"+iSelIdx); 
			}
			sapUrMapi_scrollToPosition(oCont,x,y);
		}
		else
		{
		    sapUrMapi_scrollToPosition(ur_get(sId),x,y);
		}
	}
	}catch(ex) {};}
function sapUrMapi_scrollToPosition(o,x,y) {
	o.scrollTop=y;
  o.scrollLeft=x;
}
function sapUrMapi_getScrollLeft(o) {
  return o.scrollLeft;
}
function sapUrMapi_getScrollTop(o) {
  return o.scrollTop;
}
function sapUr_Scroll_scrollLeft(sId) {
	
	var ct = sapUrMapi_getControlType(sId);
	try{
	if(ct!="")
	{
		if(ct=="G" || ct=="TY")
			return ur_get(sId+"-bd").scrollLeft;
		else
		if(ct =="TS")
		{
			var iSelIdx = ur_get(sId).getAttribute('sidx'); 
			var oCont = ur_get(sId+"-tbar-cnt-"+iSelIdx); 
			if(!oCont) 
			{
				oCont = ur_get(sId+"-bd-"+iSelIdx); 
			}
			return oCont.scrollLeft;
		}
		else
		{
		  return ur_get(sId).scrollLeft;
		}
	}
	}catch(ex) {};
}
function sapUr_Scroll_scrollRight(sId) {
	var o = ur_get(sId);
	return sapUrMapi_scrollRight(o);
}
function sapUr_Scroll_scrollTop(sId) {
	
	var ct = sapUrMapi_getControlType(sId);
	try{
	if(ct!="")
	{
		if(ct=="G" || ct=="TY")
			return ur_get(sId+"-bd").scrollTop;
		else
		if(ct =="TS")
		{
			var iSelIdx = ur_get(sId).getAttribute('sidx'); 
			var oCont = ur_get(sId+"-tbar-cnt-"+iSelIdx); 
			if(!oCont) 
			{
				oCont = ur_get(sId+"-bd-"+iSelIdx); 
			}
			return oCont.scrollTop;
		}
		else
		{
		  return ur_get(sId).scrollTop;
		}
	}
	}catch(ex) {};
}
function ur_Scrl_setScrlPosById(sId,oPos)
{
	sapUr_Scroll_scrollToPosition(sId,oPos.x,oPos.y);
}
function ur_Scrl_getScrlPosById(sId)
{
	var oPos = new Object();
	oPos.x = sapUr_Scroll_scrollLeft(sId);
	oPos.y = sapUr_Scroll_scrollTop(sId);
	return oPos;
}
function sapUrMapi_initLinkStatus() {
  var oNodes = document.getElementsByTagName("A");
  for (var n=0;n<oNodes.length;n++) {
    if (oNodes[n].href.indexOf("javascript:void")>-1) {
      oNodes[n].addEventListener("onmouseover",sapUrMapi_resetStatus);
      oNodes[n].addEventListener("onfocus",sapUrMapi_resetStatus);
    }
  }
}
function sapUrMapi_resetStatus() {
  window.status="";
  event.returnValue=true;
}
function sapUrMapi_Resize_Handler(sId, sHandler) {
	this.sId = sId;
	this.sHandler = sHandler;
}
var sapUrMapi_Resize_Registry = new Array();
var sapUrMapi_Resize_Width = null;
var sapUrMapi_Resize_Timeout = null;
var sapUrMapi_Resize_Set = false;
function sapUrMapi_Resize_Capture() {
	if (sapUrMapi_Resize_Set == false) {
		window.attachEvent("onresize", sapUrMapi_Resize_CheckSize);
		sapUrMapi_Resize_Set = true;
	}
}
function sapUrMapi_Resize_AddItem(sId, sHandler) {
	
	sapUrMapi_Resize_Capture();
	
	if (!sapUrMapi_Resize_Registry[sId] || sapUrMapi_Resize_Registry[sId]) {
		sapUrMapi_Resize_Registry[sId] = new sapUrMapi_Resize_Handler(sId, sHandler);
	}
}
function sapUrMapi_Resize_CheckSize() {
	if (sapUrMapi_Resize_Timeout == null && sapUrMapi_Resize_Width == null) {
		sapUrMapi_Resize_Width = document.body.offsetWidth;
		sapUrMapi_Resize_Timeout = window.ur_callDelayed("sapUrMapi_Resize_CheckSize()", 50);
		return;
	}
	if (sapUrMapi_Resize_Width != document.body.offsetWidth) {
		sapUrMapi_Resize_Width = document.body.offsetWidth;
		sapUrMapi_Resize_Timeout = window.ur_callDelayed("sapUrMapi_Resize_CheckSize()", 50);
	}
	else {
	    window.clearTimeout(sapUrMapi_Resize_Timeout);
		sapUrMapi_Resize_Timeout = null;
		sapUrMapi_Resize_Resize();
		sapUrMapi_Resize_Width = null;
	}
}
function sapUrMapi_Resize_Resize() {
	for (var ctl in sapUrMapi_Resize_Registry) {
		if (ctl.indexOf("_") == 0) {continue;}
		if (sapUrMapi_Resize_Registry[ctl] != null) {
		  eval(sapUrMapi_Resize_Registry[ctl].sHandler);
		}
	}
}
function sapUrMapi_Create_Handler(sId, sHandler) {
	this.sId = sId;
	this.sHandler = sHandler;
}
var sapUrMapi_Create_Registry = new Array();
var sapUrMapi_Create_Apply = new Array();
var sapUrMapi_Create_Set = false;
var sapUrMapi_Create_Timeout = null;
function sapUrMapi_Create_Capture() {
	if (!ur_system.createTimeFrameworkControlled && !sapUrMapi_Create_Set) {
		window.document.attachEvent("onreadystatechange", sapUrMapi_Create_CreateItems);
		sapUrMapi_Create_Set = true;
	}
}
function sapUrMapi_Create_AddItem(sId, sHandler,bApply) {
	
	sapUrMapi_Create_Capture();
	
	if(bApply)
		sapUrMapi_Create_Apply[sId] = new sapUrMapi_Create_Handler(sId, sHandler);
	else
		sapUrMapi_Create_Registry[sId] = new sapUrMapi_Create_Handler(sId, sHandler);
}
function sapUrMapi_Create_CreateItems() {
	if (!ur_system.createTimeFrameworkControlled && document.readyState != "complete") return;
	else {
		for (var ctl in sapUrMapi_Create_Registry) {
			if (ctl.indexOf("_") == 0) {continue;}
			if (sapUrMapi_Create_Registry[ctl] != null) {
				eval(sapUrMapi_Create_Registry[ctl].sHandler);
			}
		}
		sapUrMapi_Create_Registry = new Array();
		
		for (var ctl in sapUrMapi_Create_Apply) {
			if (ctl.indexOf("_") == 0) {continue;}
			if (sapUrMapi_Create_Apply[ctl] != null) {
				eval(sapUrMapi_Create_Apply[ctl].sHandler);
			}
		}
		sapUrMapi_Create_Apply = new Array();		
	}
}
function sapUrMapi_init() {
	if (ur_system.mimepath == null) ur_system.mimepath = ur_system.stylepath+"/common/";
	if (ur_system.emptyhoverurl == null || ur_system.emptyhoverurl == "") ur_system.emptyhoverurl = ur_system.mimepath+"emptyhover.html";
	if (ur_language==null || ur_language=="") {
		var oScript=ur_get("ur_lang_js");
		if (!oScript) {
			var scripts=document.getElementsByTagName("SCRIPT");
			for (var i=0;i<scripts.length;i++) 
				if (scripts[i].src.indexOf("urMessageBundle_")>-1) {
					oScript=scripts[i];
					break;
				}
		}
		if (oScript) {
			var url = oScript.src,
			beginPos = url.indexOf("urMessageBundle_"),
			endPos = url.indexOf(".js", beginPos); 
			oScript.src = url.substring(0,beginPos) + "urMessageBundle" + url.substring(endPos);
    }
	}
	
	try {
		if (ptrPopup && ptrPopup.ptrGetSourceWindow(window) == window) {
			window.attachEvent("onresize",sapUrMapi_PopupMenu_hideAll);
		}
	} catch (ex) {}	
  oPopup=null;
  oDatePicker=null;
  sapUrMapi_Focus_hideFocusRect();
  sapUrMapi_Resize_Registry=new Array();
	sapUrMapi_PcTabSeq_Registry = new Array();  
	initMenus=new Array();
	_ur_POMN = {all:new Array(),menus:new Array(),level:0};
  _ur_tables=new Array();
  
  
  _ur_focused=true;
  ur_attachFocusEvent();
  
  ur_attachActivateEvent();
  
  _ur_CAL=new Array();
  ur_Scrollbar_EnvironmentInit();
  ur_SapTableClientScroll_EnvironmentInit();
  ur_DragDrop_EnvironmentInit();
  sapUrMapi_DBTN_hideDBtn();
}
var _ur_focused=false;
var _ur_focusedElement=null;
function ur_attachFocusEvent() {
  window.detachEvent("onfocus",ur_onfocus);
  window.attachEvent("onfocus",ur_onfocus);
}
function ur_onfocus(oEvt) {
  if (!_ur_focused && _ur_focusedElement) {
    _ur_focused=true;
    ur_focus(_ur_focusedElement);
    _ur_focusedElement=null;
  } else {
    _ur_focused=true;
  }
}
function ur_evtSrc(e){
	if (typeof(e)=='undefined') e=window.event.srcElement;
	return e.srcElement;
}
function ur_get(sId) {
  if(sId!="") return document.getElementById(sId);
}
function ur_getAttD(o,sAtt,def) {
  if (!o.getAttribute) return def;
  var s=o.getAttribute(sAtt);
  if (s!=null && s!="") return s;
  else return def;
}
function sapUrMapi_cleanUp() {
  try {
		
		window.detachEvent("onresize", sapUrMapi_Resize_CheckSize);
    document.detachEvent("onreadystatechange", sapUrMapi_Create_CreateItems);
		
		
		window.detachEvent("onfocus",ur_onfocus);
		window.detachEvent("onblur",ur_onblur);
		
		document.detachEvent("onactivate",ur_focus_activate_handler); 
		document.detachEvent("ondeactivate",sapUrMapi_Focus_hideFocusRect);
		
		
		document.detachEvent("onactivate",ur_defaultbutton_activate_handler); 
		document.detachEvent("ondeactivate",sapUrMapi_DBTN_hideDBtn);
		
		
		document.detachEvent("onactivate", ur_SCR_activate);
		
		document.detachEvent("onactivate", ur_activateEvents);
		
		
	  window.document.detachEvent("onactivate",sapUrMapi_hideDatePicker);
    document.detachEvent("onmousedown",sapUrMapi_PopupMenu_hideAll);
		
		window.detachEvent("onresize",sapUrMapi_PopupMenu_hideAll);
    
	} catch(ex) {
	}
}
function ur_setCursorPos(htmlInputFieldRef, pos) {
if ( ( htmlInputFieldRef && htmlInputFieldRef.tagName == "INPUT" && (htmlInputFieldRef.getAttribute('type') == "text" || htmlInputFieldRef.getAttribute('type') == "password")) || 
     (  htmlInputFieldRef && htmlInputFieldRef.tagName == "TEXTAREA")) {
		var textRange = htmlInputFieldRef.createTextRange(),
			maxLength = htmlInputFieldRef.value.length;
		if(pos < 0 || pos > maxLength) pos = maxLength;
		if(textRange) {
			textRange.collapse();
			textRange.moveStart(  "character",pos);
			textRange.select();
		}
	}
};
function ur_getCursorPos(htmlInputFieldRef) {
	
if ( ( htmlInputFieldRef && htmlInputFieldRef.tagName == "INPUT" && (htmlInputFieldRef.getAttribute('type') == "text" || htmlInputFieldRef.getAttribute('type') == "password")) || 
     (  htmlInputFieldRef && htmlInputFieldRef.tagName == "TEXTAREA")) {
		var textRange = htmlInputFieldRef.createTextRange();
		if(textRange) {
			var cTextRange = window.document.selection.createRange().duplicate(),
				maxLength = htmlInputFieldRef.value.length+1;
			textRange.collapse();
			for(var idx=0; idx < maxLength; idx++) {
				if(  textRange.isEqual(cTextRange) )return idx;
				textRange.moveEnd("character",1);
				textRange.moveStart("character",1);
			}
		}
	}
	return -1;
};
var _ur_cursorInfo =null;
function ur_checkFocussedUiElement(htmlRef, browserEvent) {
	if (browserEvent) {
		var srcHtmlElement = browserEvent.srcElement,
		cursorPos = ur_getCursorPos(srcHtmlElement);
		if(cursorPos>=0) {
			_ur_cursorInfo = {
				id: ur_getId(srcHtmlElement),
				pos: cursorPos
			}
			return _ur_cursorInfo.id;
		}
	}
	_ur_cursorInfo = null;
	return ur_getId(htmlRef);
}
function ur_getId(o) {
	while ( o!=null && o.id=="") o = o.parentNode;
	if (o == null || o.id == null) return "";
	return o.id;
};
function sapUrMapi_triggerDefaultButton(sId,oEvt)
{
	var oR=ur_get(sId);
	var dbId = oR.getAttribute("dbid");
	var dbtn = ur_get(dbId);
	var parentId = oEvt.srcElement.id;
	if(dbId!=null && ur_get(dbId).parentNode!=null)
	{
		
		var currentFocusId = sapUrMapi_Focus_getCurrentId();
		var currentFocus = ur_get(currentFocusId);
		var sCt=sapUrMapi_getControlTypeFromObject(currentFocus);
		switch (sCt) 
		{
			case "IT":
			 
 				 sapUrMapi_DataTip_hide(sId);
				 sapUrMapi_defaultButtonClick(dbtn);
				 ur_EVT_cancel(oEvt);
				 break;
			case "B":
			case "TB":
			case "LN":
			case "TGL": 
				sapUrMapi_DataTip_hide(parentId); 
			    	sapUrMapi_DBTN_hideDBtn(); 
				break;
			case "TE":
				sapUrMapi_DataTip_hide(parentId); 
			    	sapUrMapi_DBTN_hideDBtn(); 
				break;
			case "TY":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN" || sTp=="MNU")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
			    {
					sapUrMapi_DataTip_hide(parentId);
					sapUrMapi_defaultButtonClick(dbtn);
				}
				break;
			case "T":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
				{
					sapUrMapi_DataTip_hide(parentId);
					sapUrMapi_defaultButtonClick(dbtn);
				}
				break;
			case "I":
			case "TI":
				if(currentFocus.onkeypress!=null)
					sapUrMapi_DBTN_hideDBtn(); 
				else
				{
					sapUrMapi_DataTip_hide(parentId);
					sapUrMapi_defaultButtonClick(dbtn);
				}
				break;
			default :
			{
				sapUrMapi_DataTip_hide(parentId);
				sapUrMapi_defaultButtonClick(dbtn);
			}
				
		}
	}
	else 
	{
		sapUrMapi_DBTN_hideDBtn();
	}
		
}
function sapUrMapi_defaultButtonClick(dbtn)
{
	var curFocus=sapUrMapi_Focus_getCurrentId();
	ur_focus(dbtn);
	dbtn.click();
}
function sapUrMapi_getCurrentStyle(o,sStAt){
	var s=o.currentStyle[sStAt];
	return s;
}
var _ur_tableInputFoc;
function ur_setEditCellColor(o) {
  ur_removeEditCellColor();
  var sCt=sapUrMapi_getControlTypeFromObject(o);
  if (sCt=="I" || sCt=="CB" || sCt=="IT") { 
		if (ur_getAttD(o,"st","").indexOf("r")==-1 && 
		    ur_getAttD(o,"st","").indexOf("d")==-1 && 
				sapUrMapi_isChildOfControl(o,"ST")) {
			if (sapUrMapi_isChildOfControl(o,"MG")) {
			  o=sapUrMapi_isChildOfControl(o,"MG");
			}
			var oCell=o;
			while (oCell.tagName!="TD" || oCell.className.indexOf("urST3TD")==-1) {
				oCell=oCell.parentNode;
				
				if (oCell.tagName=="TR" && oCell.firstChild.firstChild!=o) { oCell=null;break;}
			}
			if (oCell!=null && oCell!=o) {
				
				if(eUrFocusAppearance != UR_FOCUS_APPEARANCE.NONE) {
					if(!ur_fastTableCellFocus(oCell, true))
						oCell.className=oCell.className+" urSTFoc";
				}
				_ur_tableInputFoc=oCell;
			}
		}
	}
}
function ur_removeEditCellColor() {
	if (_ur_tableInputFoc!=null) {
	  try {
	  	if(eUrFocusAppearance != UR_FOCUS_APPEARANCE.NONE) {
		    if(!ur_fastTableCellFocus(_ur_tableInputFoc, false))
		    	_ur_tableInputFoc.className=_ur_tableInputFoc.className.replace(" urSTFoc","");
	  	}
	  } catch (ex) {}
	  _ur_tableInputFoc=null;
	}  
}
function ur_callDelayed(sFunc,ms) {
  return setTimeout("try{"+sFunc+"}catch(ex){}",ms);
}
function ur_setSelection(htmlInputFieldRef, oSelection) {
	if(oSelection!=null && htmlInputFieldRef && htmlInputFieldRef.tagName == "INPUT" && htmlInputFieldRef.getAttribute('type') == "text") {
		var textRange = htmlInputFieldRef.createTextRange();
		textRange.moveStart("character",oSelection.pos);
		textRange.collapse(true);
		textRange.moveEnd("character",oSelection.length);
		textRange.select();
		
    htmlInputFieldRef.onbeforedeactivate=null;
		
	}
};
function ur_getSelection(htmlInputFieldRef) {
	if(htmlInputFieldRef && htmlInputFieldRef.tagName == "INPUT" && htmlInputFieldRef.getAttribute('type') == "text") {
		var textRange = htmlInputFieldRef.createTextRange();
		if(textRange) {
		  var range=window.document.selection.createRange().duplicate();
		  if (textRange.inRange(range)) {
		    var l=range.text.length;
		    range.collapse(true);
		    textRange.collapse(true);
		    var i=0;
		    while (!textRange.isEqual(range)) {
		      i++;
		      range.move("character",-1)
		    }
		  
	  	    return {pos:i,length:l};
		  }
		}
	}
	return null;
}
function ur_getPrevItm(o,sAt){
		if(!o || !sAt) return null;
		while(ur_getAttD(o,sAt,"")==""){ 
			o=o.previousSibling;
			if (!o) return null;
		}
	return o;
}
function ur_getNxtItm(o,sAt){
	if(!o || !sAt) return null;
	while(ur_getAttD(o,sAt,"")==""){ 
			o=o.nextSibling;
			if (!o ) return null;
		}
	return o;
}
function ur_focus_Itm(oNew,oOld){
		sapUrMapi_setTabIndex(oOld,-1);
		sapUrMapi_setTabIndex(oNew,0);
		ur_focus(oNew);
}
var ur_clipboardBag=null;
function ur_ClipboardBagGet() {
	if(!ur_clipboardBag) {
		ur_clipboardBag = document.createElement("div");
		ur_clipboardBag.style.overflow="hidden";
		ur_clipboardBag.style.position="absolute";
		ur_clipboardBag.style.top="-10000px";
		ur_clipboardBag.style.height="1px";
		ur_clipboardBag.style.width="1px";
		ur_clipboardBag.appendChild(document.createElement("button"));
		ur_clipboardBag.appendChild(document.createElement("div"));
		
		document.body.appendChild(ur_clipboardBag);
	} 
	return ur_clipboardBag;
}
function ur_ClipboardBagCleanUp() {
	if(ur_clipboardBag) {
		ur_clipboardBag.parentNode.removeChild(ur_clipboardBag);
		ur_clipboardBag = null;
	}
}
function ur_ClipboardSet(content) {
	var clipboardBag = ur_ClipboardBagGet().firstChild,
		htmlContainer = ur_ClipboardBagGet().lastChild;
	htmlContainer.style.display="none";
	htmlContainer.innerHTML = content;
	htmlContainer.style.display="block";
	
	
	htmlContainer.innerHTML = htmlContainer.firstChild.tBodies[0].firstChild.firstChild.innerHTML;
	
	htmlContainer.style.display="none";
	ur_prepareClipboardDom(htmlContainer.firstChild);
	
	clipboardBag.innerHTML = htmlContainer.innerHTML;
	
	if(!clipboardBag.firstChild) {
		clipboardBag.innerHTML = "<div>No data available</div>";
	}
	var oRange = clipboardBag.createTextRange();
	oRange.select();
	oRange.execCommand("Copy");
	
}
function ur_prepareClipboardDom(oTag) {
	if(oTag.tagName == "TABLE") {
  	oTag.style.borderCollapse = oTag.currentStyle.borderCollapse;
  	oTag.className = "";
	}	else if (oTag.className && oTag.currentStyle) {
    oTag.style.backgroundColor = oTag.currentStyle.backgroundColor;
    oTag.style.fontSize ="8pt";
  	oTag.style.fontFamily ="Arial,Helvetica,sans-serif;";
  	
  	oTag.className = ""; 
  }
  
  
  if(oTag.tagName == "TD" || oTag.tagName == "TH") {
		oTag.innerHTML = oTag.innerText;
		oTag.style.padding = "4px 6px";
	}
  if (oTag.childNodes) {
    for (var n = 0;n<oTag.childNodes.length;n++) {
      ur_prepareClipboardDom(oTag.childNodes[n]);
    }
  }
}
function sapUrMapi_relaxDomain(integrated, standalone, maxrelax) {
  var hostname = location.hostname,
      nameparts = hostname.split("."),
      partslength = nameparts.length,
      reference = "parent";
  
  
  if (/^(\d|\.)+$/.test(hostname)) return true;
  
  if (partslength == 1) return true;
  
  
  if (standalone == null) standalone = "minimal";
  if (integrated == null) integrated = "auto";
  if (maxrelax == null) {
    
    if (nameparts[partslength - 1].length == 2 &&
        nameparts[partslength - 2].length == 2) {
      maxrelax = 3;
    } else {
      maxrelax = 2;
    }
  }
  
  if (partslength <= maxrelax) return true;
  
  if (standalone == "auto") standalone = "minimal";
  if (window[reference] == window) reference = "opener";
  if (window[reference] == null) method = standalone;
  else method = integrated;
  
  switch (method) {
    case "none": 
      return true;
      break;
    
    case "auto": 
      try {
        window[reference].location.href;
        return true;
      }
      catch (e) {};
      var testdomain;
      for (var i = 0; i <= partslength - maxrelax; i++) {
        testdomain = nameparts.slice(i).join(".");
        try {
          document.domain = testdomain;
          window[reference].location.href;
          return true;
        }
        catch (e) {};
      }
      return false;
      break;
    case "minimal": 
      try {
        document.domain = nameparts.slice(1).join(".");
        return true;
      }
      catch (e) {
        return false;
      }
      break;
    case "maximal": 
      try {
        document.domain = nameparts.slice(partslength - maxrelax).join(".");
        return true;
      }
      catch (e) {
        return false;
      }
      break;
    default:
      alert("Unknown relaxation method: " + method);
  }
  return false;
}
function ur_attachActivateEvent() {
	if (ur_system.eventPrefix) {
		document.detachEvent("onactivate", ur_activateEvents);
		document.attachEvent("onactivate", ur_activateEvents);
	}
}
function ur_activateEvents(oEvent) {
	var oElement = oEvent.srcElement,
	    oDocument = oElement.ownerDocument;
	while (oElement != oDocument.body && oElement != oDocument) {
		if (oElement.hs) return;
		if (oElement.he != null) {
			ur_activateAllEvents(oElement);
			oElement.he = null;
			oElement.hs = true;
		}
		oElement = oElement.parentNode;
	}    
}
	
function ur_activateAllEvents(oElement) {
	var sEventName, sEventContent;
	for (var i in oElement) {
		if (i.charAt(0) == ur_system.eventPrefix) {
			sEventName = i.substr(1);
			sEventContent = oElement[i];
			
			oElement.setAttribute(sEventName, new oElement.ownerDocument.parentWindow.Function("event", "if(!event) event=window.event;" + sEventContent));
			
			if (sEventName == "onactivate" && oElement.onactivate && event.cancelBubble == false) oElement.onactivate();
			oElement[i] = null;
		}
	}
}
function ur_getNextHtmlParentByAttribute(oDomRef, sAttributeName){
	if (oDomRef) {
		var oCurDomRef = oDomRef;
		for(var i=10; i>0; i--) {
			if(oCurDomRef.tagName == "BODY") return null;
			
			if(oCurDomRef.getAttribute(sAttributeName)) return oCurDomRef;
		
			if(oCurDomRef.parentNode) oCurDomRef=oCurDomRef.parentNode;
			else return null;
		}
	}
	return null;
};
function ur_getNextHtmlParentByTagName(oDomRef, sTagName){
	if (oDomRef) {
		var oCurDomRef = oDomRef;
		for(var i=10; i>0; i--) {
			if(oCurDomRef.tagName == "BODY") return null;
			
			if(oCurDomRef.tagName == sTagName) return oCurDomRef;
		
			if(oCurDomRef.parentNode) oCurDomRef=oCurDomRef.parentNode;
			else return null;
		}
	}
	return null;
};
function ur_attachEvent(oDomRef, sEventName, fEventHandler) {
	oDomRef.attachEvent("on"+sEventName, fEventHandler);
}
function ur_detachEvent(oDomRef, sEventName, fEventHandler) {
	oDomRef.detachEvent("on"+sEventName, fEventHandler);
}
function ur_setCapture(oDomRef) {
	oDomRef.setCapture();
}
function ur_releaseCapture(oDomRef) {
	oDomRef.releaseCapture();
}
function ur_getBodyRef() {
	return document.body;
}
function ur_setAlphaFilter(oDomRef, iOpacity) {
	oDomRef.style.filter="progid:DXImageTransform.Microsoft.Alpha( Opacity=" + iOpacity + ", FinishOpacity=0, Style=0 )";
}
ur_oCurrentDragDropConfig = null;
function ur_DragDrop_dragStart(oEvt) {
	var oConfig = ur_oCurrentDragDropConfig;
	
	
	if(Math.abs(oEvt.x-oConfig.iTriggerPointX) > 5 || Math.abs(oEvt.y-oConfig.iTriggerPointY) > 5) {
		
		var oTextRange = document.selection.createRange();
		oTextRange.collapse(true);
		oTextRange.select();
		ur_DragDrop_cleanUpSource();
		oConfig.oGhost = ur_DragDrop_GhostCreate(oConfig.oDragSource);
		
		ur_setCapture(oConfig.oGhost);
		ur_attachEvent(oConfig.oGhost, "mousemove", ur_DragDrop_dragMove);
		ur_attachEvent(oConfig.oGhost, "mouseup", ur_DragDrop_dragEnd);
	}
}
function ur_DragDrop_dragMove(oEvt) {
	var oConfig = ur_oCurrentDragDropConfig,
		oBody=ur_getBodyRef();
		
	ur_DragDrop_GhostSetPos(oConfig.oGhost, oEvt.x-oConfig.iMouseOffsetX + oBody.scrollLeft, oEvt.y + oBody.scrollTop+2);
	
	var oTarget = ur_getNextHtmlParentByAttribute(ur_EVT_src(oEvt), "dropTargetFlavours");
	var bAllowed = oTarget && ur_DragDrop_hasFlavour(oConfig.oDragSource,oTarget);
  var fDDHandler = null;
  if (oTarget) {
		fDDHandler = ur_DragDrop_getHandler(oTarget);
	}
	if(fDDHandler) {
	  bAllowed = fDDHandler({
				oDragSource: oConfig.oDragSource,
				oDropTarget: oTarget,
				iMouseX: oEvt.x + ur_getBodyRef().scrollLeft ,
				iMouseY: oEvt.y + ur_getBodyRef().scrollTop,
				oEvt : oEvt,
				bAllowed : bAllowed,
				sState :"MOVE",
				oDataBag: oConfig.oDataBag
			});
			ur_EVT_cancel(oEvt);
	} else {
	  bAllowed = oConfig.oDocumentMoveHandler({
				oDragSource: oConfig.oDragSource,
				oDropTarget: oTarget,
				iMouseX: oEvt.x + ur_getBodyRef().scrollLeft ,
				iMouseY: oEvt.y + ur_getBodyRef().scrollTop,
				oEvt : oEvt,
				bAllowed : false,
				sState :"MOVE",
				oDataBag: oConfig.oDataBag
			})
		ur_EVT_cancel(oEvt);
	}
	if (bAllowed) {
		oConfig.oGhost.style.cursor="auto";
	} else {
		oConfig.oGhost.style.cursor="not-allowed";
	}
}
function ur_DragDrop_hasFlavour(oDragSource,oDropTarget) {
	if (!oDragSource || !oDropTarget || !oDragSource.getAttribute || !oDropTarget.getAttribute) return false;
	
	var sSourceFlavours = oDragSource.getAttribute("dragSourceFlavours"),
		sTargetFlavours = oDropTarget.getAttribute("dropTargetFlavours");
	
	if (!sSourceFlavours || !sTargetFlavours) return false;
	
	var aSourceFlavours = sSourceFlavours.split(" "),
	  bFound = false;
  for (var i=0;i<aSourceFlavours.length;i++) {
    if (sTargetFlavours.indexOf(aSourceFlavours[i])>-1) {
      bFound = true;
      break;
    }
  }	
	return bFound;
}
function ur_DragDrop_getHandler(oDomRef) {
	var sDDHandler = oDomRef.getAttribute("ddHandler"),
	   fDDHandler = null;
	if (sDDHandler) fDDHandler = window[sDDHandler];
	return fDDHandler;
}
function ur_DragDrop_dragEnd(oEvt) {
	var oConfig = ur_oCurrentDragDropConfig;
	var oTarget = ur_getNextHtmlParentByAttribute(ur_EVT_src(oEvt), "dropTargetFlavours");
  
	if(oTarget && ur_DragDrop_hasFlavour(oConfig.oDragSource,oTarget)) {
		var fDDHandler = ur_DragDrop_getHandler(oTarget);
		if(fDDHandler){
			fDDHandler({
				oDragSource: oConfig.oDragSource,
				oDropTarget: oTarget,
				sInsertMode: "AFTER",
				oEvt: oEvt,
				iMouseX: oEvt.x + ur_getBodyRef().scrollLeft ,
				iMouseY: oEvt.y + ur_getBodyRef().scrollTop,
				sState : "DROP",
				oDataBag: oConfig.oDataBag
			})
		}
	} else {
		var fDDHandler = ur_DragDrop_getHandler(oConfig.oDragSource);
		if(fDDHandler){
			fDDHandler({
				oDragSource: oConfig.oDragSource,
				iMouseX: oEvt.x + ur_getBodyRef().scrollLeft ,
				iMouseY: oEvt.y + ur_getBodyRef().scrollTop,
				oEvt: oEvt,
				sState : "CANCEL",
				oDataBag: oConfig.oDataBag
			})
		}
	}
	
	ur_releaseCapture(oConfig.oGhost);
	ur_detachEvent(oConfig.oGhost, "mousemove", ur_DragDrop_dragMove);
	ur_detachEvent(oConfig.oGhost, "mouseup", ur_DragDrop_dragEnd);
	ur_DragDrop_cleanUp();
}
function ur_DragDrop_dragCancel(oEvt) {
	ur_DragDrop_cleanUpSource();
	ur_DragDrop_cleanUp();
}
function ur_DragDrop_EnvironmentInit() {
	if(ur_oCurrentDragDropConfig) {
		ur_DragDrop_cleanUpSource();
		ur_DragDrop_cleanUp();
	}
}
function ur_DragDrop_init(oConfig) {
	
	if(oConfig.oEvt && oConfig.oEvt.button == 1) {
		oConfig.oDragSource = ur_getNextHtmlParentByAttribute(ur_EVT_src(oConfig.oEvt), "dragSourceFlavours");
		if(oConfig.oDragSource) {
			ur_oCurrentDragDropConfig = oConfig;
			
			
			setTimeout("ur_DragDrop_attachEventhandler()",0);
			oConfig.iMouseOffsetX = oConfig.oEvt.offsetX;
			oConfig.iMouseOffsetY = oConfig.oEvt.offsetY;
			oConfig.iTriggerPointX = oConfig.oEvt.x;
			oConfig.iTriggerPointY = oConfig.oEvt.y;
			return true;
		}
	}
	return false;
}
function ur_DragDrop_attachEventhandler() {
	var oConfig = ur_oCurrentDragDropConfig;
	ur_setCapture(oConfig.oDragSource);
	ur_attachEvent(oConfig.oDragSource, "mousemove", ur_DragDrop_dragStart);
	ur_attachEvent(oConfig.oDragSource, "mouseup", ur_DragDrop_dragCancel);
}
function ur_DragDrop_cleanUp() {
	if(ur_oCurrentDragDropConfig) {
		var oBody=ur_getBodyRef();
		ur_DragDrop_GhostCleanUp(ur_oCurrentDragDropConfig.oGhost);
		if(ur_oCurrentDragDropConfig.sCursorBefore) ur_oCurrentDragDropConfig.oGhost=ur_oCurrentDragDropConfig.sCursorBefore;
		ur_oCurrentDragDropConfig=null;
	}
}
function ur_DragDrop_cleanUpSource() {
	if(ur_oCurrentDragDropConfig) {
		var oConfig = ur_oCurrentDragDropConfig;
		if(oConfig.oDragSource) {
			ur_releaseCapture(oConfig.oDragSource);
			ur_detachEvent(oConfig.oDragSource, "mousemove", ur_DragDrop_dragStart);
			ur_detachEvent(oConfig.oDragSource, "mouseup", ur_DragDrop_dragCancel);
		}
	}
}
function ur_DragDrop_GhostCreate(oDomRef) {
	var oBody=ur_getBodyRef(), 
		oGhost=null, 
		oGhostContainer=null,
		oDolly=null;
	
	if(oDomRef.tagName == "TD" || oDomRef.tagName == "TH") {
		var oTBody = document.createElement("TBODY");
		oGhostContainer = document.createElement("TR");
		oGhost = document.createElement("TABLE");
		oGhost.style.position="absolute";
		oGhost.style.top="-1000px";
		oGhost.style.left="25px";
		ur_setAlphaFilter(oGhost, 70);
		oGhost.cellPadding="0";
		oGhost.cellSpacing="0";
		
		oGhost.appendChild(oTBody);
		oTBody.appendChild(oGhostContainer);
	} else {
		oGhost = oGhostContainer = document.createElement("DIV");
	}
	
	oDolly=oDomRef.cloneNode(true);
	oDolly.style.width=oDomRef.offsetWidth;
	oDolly.style.height=oDomRef.offsetHeight;
	oDolly.setAttribute("dragSourceFlavours", "");
	oDolly.setAttribute("dropTargetFlavours", "");
	
	oGhostContainer.appendChild(oDolly);
		
	oBody.appendChild(oGhost);
	return oGhost;
}
function ur_DragDrop_GhostCleanUp(oGhost) {
	if(oGhost && oGhost.parentNode) {
		oGhost.parentNode.removeChild(oGhost);
	}
}
function ur_DragDrop_GhostSetPos(oGhost, iX, iY) {
  var oBody = ur_getBodyRef();
	oGhost.style.left = iX;
	oGhost.style.top = iY;
}
function ur_hasClassName(oHtmlRef, clazzName) {
	if(oHtmlRef && oHtmlRef.className && oHtmlRef.className.indexOf(clazzName) != -1) return true
	else return false;
}
function ur_findPreviousFocusableElement(o) {
	var oR=o;
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.previousSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;
		oN=oR.previousSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN,true);
			if(oF==null)
				oN=oN.previousSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
function ur_findNextFocusableElement(o) {
	var oR=o;
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.nextSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;				
		oN=oR.nextSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN);
			if(oF==null)
				oN=oN.nextSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
ur_onITSDynproFocus = null;
function ur_handle_onITSDynproFocus(oEvt) {
	
	if (ur_onITSDynproFocus) {
		var sId = sapUrMapi_getRootControl(oEvt.srcElement).id;
		if (sId) {
			ur_onITSDynproFocus(sId.split("-")[0]);
		}
	}
}
function ur_removeDynproFocus() {
	document.detachEvent("onfocusin",ur_handle_onITSDynproFocus)
}
function ur_attachDynproFocus(pFunction) {
	ur_onITSDynproFocus = pFunction;
	document.attachEvent("onfocusin",ur_handle_onITSDynproFocus);
}
function sapUrTextSelectionPrevention(oEvt){
	if(oEvt.shiftKey && oEvt.srcElement) {
		var sTagName = oEvt.srcElement.tagName,
			bContentEditable = oEvt.srcElement.contentEditable && oEvt.srcElement.contentEditable == "true";
		
		if(sTagName != "INPUT" 
			&& sTagName != "TEXTAREA"
			&& !bContentEditable
		){
			return false;
		}
	}
	return true;
}
//** Context.ie5 **
																																							
var ur_ctx=new Array();
ur_ctx._i=new Array();
ur_ctx.get = function(sId,sKey) { return ur_ctx._i[sId][sKey]; }
ur_ctx.set = function(sId,sKey,sValue) { 
  if (ur_ctx._i[sId]==null) ur_ctx._i[sId]=new Array();
  ur_ctx._i[sId][sKey]=sValue;
}
ur_ctx.write = function() { 
  var s1="";
  for (var x in ur_ctx._i) {
    if (s1!="") s1+=",";
    s1+=x+":{";
    var s2="";
    for (var y in ur_ctx._i[x]) {
      var val=ur_ctx._i[x][y];
      if (s2!="") s2+=",";
      if (typeof(ur_ctx._i[x][y])=="string") val="'"+val+"'";
      s2+=y+":"+val;
    }
    s1+=s2+"}";
  }
  return "{"+s1+"}";
}
ur_ctx.read = function(s) { 
  ur_ctx._i=new Array();
  eval("ur_ctx._i="+s);
  ur_ctx.clear();
}
ur_ctx.push = function(sId,sKey,sValue) {
  if (ur_ctx._i[sId]==null) ur_ctx._i[sId]=new Array();
  ur_ctx._i[sId][sKey]=sValue;
}
ur_ctx.pop = function(sId) {
	ur_ctx._i[sId]=null;
  ur_ctx.clear();
}
ur_ctx.clear = function() {
  var a=new Array();
  for (var x in ur_ctx._i) 
    if (document.getElementById(x)!=null && ur_ctx._i[x]!=null) a[x]=ur_ctx._i[x];
  ur_ctx._i=a;
}

//** ScrollableItems.ie5 **
	var ur_IScr = {};
	
	function ur_IScr_visFirst(o,x){
		var oItm = o.items[x];
		var iWidth = oItm.width;
		if (o.availwidth > o.newwidth + iWidth) {
			oItm.visible = true;
			o.first = x;
		} else {
			oItm.visible = false;
			o.tmpwidth = o.newwidth + iWidth;
			return true;
		}
		o.newwidth += iWidth;
		return false;
	}
	
	function ur_IScr_visLast(o,x){
		var oItm = o.items[x];
		var iWidth = oItm.width;
		if (o.availwidth > o.newwidth + iWidth) {
			oItm.visible = true;
			o.last = x;
		} else {
			oItm.visible = false;
			o.tmpwidth = o.newwidth + iWidth;
			return true;
		}
		o.newwidth += iWidth;
		return false;
	}
	
	function ur_IScr_getObj(sId) {
		
		if ( ur_IScr[sId] != null && (ur_IScr[sId].ref == ur_get(sId)) ) {
			return;
		}
		
		ur_IScr[sId] = new Array();	
		ur_IScr[sId].availwidth = 0;
		ur_IScr[sId].ref = ur_get(sId);
		ur_IScr[sId].scrl = ur_get(sId + "-scrl");
		ur_IScr[sId].items = new Array();
					
		oCntItms=ur_IScr[sId].scrl.getElementsByTagName("TD");
		
		for (var i = 0; i < oCntItms.length; i++) {
			var oItm = oCntItms[i];
			if (oItm && oItm.getAttribute("idx")!= null && oItm.getAttribute("idx")!= "") {
				var iIdx = parseInt(oItm.getAttribute("idx"));
				
				if (ur_IScr[sId].items[iIdx] != null) {
					ur_IScr[sId].items[iIdx][ur_IScr[sId].items[iIdx].length] = oItm;
				}else {
					ur_IScr[sId].items[iIdx] = new Array();
					ur_IScr[sId].items[iIdx].width = 0;
					ur_IScr[sId].items[iIdx][0] = oItm;
					sT = oItm.getAttribute("st");
					
					if (sT != null && sT.indexOf("s") > -1) ur_IScr[sId].items[iIdx]["forcevisible"] = true;
				}
				
				ur_IScr[sId].items[iIdx].width += oItm.offsetWidth;
			}
		}
		ur_IScr[sId].first=parseInt(ur_IScr[sId].scrl.getAttribute("fsrl"));
		ur_IScr[sId].last=parseInt(ur_IScr[sId].scrl.parentNode.getAttribute("lsrl"));
	}
	function ur_IScr_fireEvent(sEvtName,o,idx) {
		if (o.scrl.getAttribute(sEvtName)) {
			var tmpFunc=new Function("event",o.scrl.getAttribute(sEvtName));
			if (sEvtName=="ohi" || sEvtName=="osi")
				ur_EVT_fire(o.scrl,"osi");
		   if (sEvtName=="oadi") {
				ur_EVT_fire(o.scrl,"oadi");
		   }
	   }
		return true;
	}
	
	function ur_IScr_draw(sId) {
	
		var o = ur_IScr[sId];
		
		o.scrl.style.width = 0;
		
		
		if(o.ref.getAttribute("scrl") != "1"){
			var noScrlWdth = 0;
			for( var i = 0 ; i < o.items.length ; i++) {
				noScrlWdth = noScrlWdth + o.items[i].width;
			}
			noScrlWdth = noScrlWdth + o.items[o.items.length -1].width;
			o.availwidth =noScrlWdth ;
		}
		else
			o.availwidth = o.scrl.offsetWidth + ur_get(sId+'-lscrl').offsetWidth - 1;
		o.newwidth=0;
		o.tmpwidth=0;
		
		for (var i = 0; i < o.items.length; i++) {
			o.items[i].visible = false;
		}
		
		if (o.last == -1) { 
		
			for (var i = o.first; i < o.items.length; i++) {
				
				if ( ur_IScr_visLast(o, i) ) break; 
			}
			if (o.availwidth > o.tmpwidth) { 
			
				for (var i = o.first - 1; i >= 0; i--) 
					if (ur_IScr_visFirst(o,i)) break;
			}
		} else {
		
		for (var i = o.last; i >= 0; i--) 
			
			if (ur_IScr_visFirst(o, i)) break; 
			
			if (o.availwidth > o.tmpwidth) { 
			
				for (var x = o.last + 1; x <o.items.length; x++) 
					if (ur_IScr_visLast(o,x)) break;
			}
		}
		
		
		for (var x = 0; x < o.items.length; x++) {
			o.items[x].idx = x;
			if (o.items[x].visible){
				if (ur_IScr_fireEvent("osi",o,x)) {
						for (var n = 0; n <o.items[x].length; n++) {
							o.items[x][n].style.display = "inline";
						}
					}
			} else {
					if (ur_IScr_fireEvent("ohi",o,x)) {
						for (var n = 0; n < o.items[x].length; n++) {
							o.items[x][n].style.display = "none";
						}
					}
			}
		}
		if(o.ref.getAttribute("scrl") != "1") {
			o.first = 0;
			o.last = o.items.length -1;
		}
		
		if (o.ref.getAttribute("ct") == "TS") {
			ur_TS_oadi(sId);
		}else{
			ur_IScr_fireEvent("oadi",o);
		}
		
		o.scrl.style.width = o.newwidth; 
	}
	function ur_IScr_toBegin(sId) {
		ur_IScr[sId].first = 0;
		ur_IScr[sId].last = -1;
		ur_IScr_draw(sId);
	}
	function ur_IScr_toEnd(sId) {
		ur_IScr[sId].first = -1;
		ur_IScr[sId].last = ur_IScr[sId].items.length-1;
		ur_IScr_draw(sId);
	}
	function ur_IScr_toPrevPage(sId) {
		if (ur_IScr[sId].first > 0) {
			ur_IScr[sId].last = ur_IScr[sId].first - 1;
			ur_IScr[sId].first = -1;
		ur_IScr_draw(sId);
		}
	}
	function ur_IScr_toPrevItem(sId) {
		
		
		if ( ur_IScr[sId].first > 0) {
			ur_IScr[sId].first--;
			
			ur_IScr[sId].last = -1;
			ur_IScr_draw(sId);
		}
	}
	function ur_IScr_toNextPage(sId) {
		if (ur_IScr[sId].last < ur_IScr[sId].items.length - 1) {
			ur_IScr[sId].first = ur_IScr[sId].last + 1;
			ur_IScr[sId].last = - 1;
			ur_IScr_draw(sId);
		}
	}
	function ur_IScr_toNextItem(sId) {
		
		
		if (ur_IScr[sId].first < ur_IScr[sId].items.length - 1) {
			ur_IScr[sId].first ++;
			ur_IScr[sId].last = -1;
			ur_IScr_draw(sId);
		}
	}
	function ur_IScr_resize(sId) {
		ur_IScr[sId].last=-1;
		ur_IScr_draw(sId);
	}
	
	function ur_IScr_create(sId){
		ur_IScr_resize(sId);			
	}
	
	function ur_IScr_getFirstVisibleIndex(sId){
		if (ur_IScr[sId].first > 0) {
			return parseInt(ur_IScr[sId].first);
		}
		return 0;
	}

//** Event.ie5 **

function ur_EVT_fire(o,sName,oEvt,hWnd,submitType) {
	var sFunc = o.getAttribute(sName); 
  
	if(submitType) oEvt.ur_submitType=submitType;
  
	if (sFunc && sFunc!="") {
		if (typeof(hWnd)=="undefined") hWnd=window; 
		if (typeof(oEvt)=="undefined") oEvt=hWnd.event;
		o.func=new hWnd.Function("event",sFunc); 
		return o.func(oEvt); 
	}
	return null;
}
function ur_EVT_src(oEvt) {
	return ur_EVT(oEvt).srcElement;
}
function ur_EVT_cancel(oEvt,oPrimeEvt){
	if (oPrimeEvt) oEvt = oPrimeEvt;
	if (oEvt==null) return;
	try{oEvt.keyCode="";}catch(ex){}; 
	oEvt.cancelBubble=true;
	oEvt.returnValue=false;
	return true;
}
function ur_EVT_cancelBubble(oEvt){
	oEvt.cancelBubble=true;
}
function ur_EVT(oEvt) {
	return oEvt;
}
function ur_EVT_addParam(oEvt,sParName, sParValue)
{
	if(oEvt.ur_param)
	{
		var oTemp = oEvt.ur_param;
		oTemp[sParName] = sParValue;
		oEvt.ur_param = oTemp;  
	}
	else
	{
		var oTemp = new Array();
		oTemp[sParName] = sParValue;
		oEvt.ur_param = oTemp;  
	}
}
//** KeyBoard.ie5 **

ur_KY={RETURN:13,LEAVE:9,SPACE:32,DOWN:40,UP:38,PREV:(ur_system.direction=="rtl")?39:37,NEXT:(ur_system.direction=="rtl")?37:39,PGUP:33,PGDOWN:34,END:35,HOME:36}
function ur_KY_nav(oEvt,o) {
  
  var sMode=o.ref.kb; 
	if (!sMode) return false;
	
	
	if (!o.items) o.items=o.ref.childNodes;
	
	
	var iKc=oEvt.keyCode;
	
	
	
	
	var iFOIdx=parseInt(ur_getAttD(o.ref,"fidx","0")); 
	
	var iFNIdx=iFOIdx;
	if (iKc==ur_KY.PGUP   || iKc==ur_KY.HOME ) iFNIdx=0;
	else if (iKc==ur_KY.PGDOWN || iKc==ur_KY.END) iFNIdx=o.items.length-1;
	else if (((iKc==ur_KY.PREV && sMode.indexOf("h")>-1) || (iKc==ur_KY.UP && sMode.indexOf("v")>-1))){
	
		 if(o.items.rfl==true && iFOIdx==0)
		  iFNIdx=o.items.length-1;
		 else if(iFOIdx>0)
		  iFNIdx--;
	}
	else if (((iKc==ur_KY.NEXT && sMode.indexOf("h")>-1) || (iKc==ur_KY.DOWN && sMode.indexOf("v")>-1))){
	
		 if(o.items.rfl==true && iFOIdx==o.items.length-1)
			iFNIdx=0;
		 else if(iFOIdx<o.items.length-1)
	 		iFNIdx++;
	}
	else if(iKc==ur_KY.LEAVE){
		if(o.selected!=null && o.selected!= -1)
		   iFNIdx=o.selected;
		else
			iFNIdx=0;
	}
	
	if (iFNIdx!=iFOIdx) { 
	  
      var oItm=o.items[iFOIdx];
	if(!(ur_system.is508) && ur_isSt(o.items[iFNIdx],ur_st.DISABLED))
	  	iFNIdx = ur_KY_checkDsbl(o,iFNIdx,iKc)["idx"];
	if(iFNIdx==null)return;
		  
		  sapUrMapi_setTabIndex(oItm,-1); 
		  var oItm=o.items[iFNIdx];
		  
	      o.ref.setAttribute("fidx",iFNIdx);
		  
	      sapUrMapi_setTabIndex(oItm,0);
		  
	      ur_focus(oItm);
	}
	if(iKc == ur_KY.LEAVE)oEvt.returnValue=true;
	return true;
}
function ur_KY_checkDsbl(o,idx,iKc) {
	var aIdx= new Array();
	    aIdx["from"]="none";
	    aIdx["idx"]=idx;
	    
	if(idx < 0) idx = o.items.length - 1;
	else if (idx >= o.items.length) idx = 0;
		
 		while(ur_isSt(o.items[idx],ur_st.DISABLED) && o.items[idx]!=null){
 				
 			if(iKc==ur_KY.DOWN || iKc==ur_KY.NEXT )idx+=1;
 			else idx-=1;
 			
 			if(idx>=o.items.length-1){
 				if(o.items.rfl==true){
 				   aIdx["from"]="last";
 				   idx=0;
 				}else{
 					aIdx["idx"]=null;
 					break;
 				}
 			}
 			else if(idx<0){
 				if(o.items.rfl==true){
	 			  aIdx["from"]="first";
	 			  idx=o.items.length-1;
	 			}
	 			else{
	 			  aIdx["idx"]=null;
	 			  break;
	 			}
 			}
 			if(!ur_isSt(o.items[idx],ur_st.DISABLED)){
 			  aIdx["idx"]=idx;
 			  return aIdx;
 			}
		}
	return aIdx;
}
function ur_KY_getObj(sId,sContId,sTag,sFilter,sKb,bRfl){
	var oR=ur_get(sId);
	var oContainer=ur_get(sId+ sContId);
	var o={ref:oR,
		   items:new Array()
	}
	
	if(sTag!=null)
	   var aItems=oContainer.getElementsByTagName(sTag);
	else
		var aItems=oContainer.getChildNodes;
		
	if(sFilter!=null){
		for(i=0;i<aItems.length;++i){
		
			if (sFilter == "id") {
				if (aItems[i].id != "" && aItems[i].id.indexOf("itm") > -1) 
					o.items.push(aItems[i]);
			}
			else {
				if(aItems[i].getAttribute(sFilter)!=null)
					o.items.push(aItems[i]);
			}
		}
	}
	
	o["selected"]=o.ref.getAttribute("sidx");
	o.ref["kb"]=sKb;
	o.items["rfl"]=bRfl;
	return o;
}
//** ActiveXContainer.ie5 **

function sapUrMapi_ActiveXContainer_RegisterCreate(sId) {
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_ActiveXContainer_create('" + sId + "')");
}
function sapUrMapi_ActiveXContainer_create(sId){
	var o = ur_get(sId + "-obj");
	if (!o) return;
	o.parentNode.innerHTML = o.innerHTML;	
}

//** BreadCrumb.ie5 **

function sapUrMapi_BreadCrumb_keydown(sId,oEvt){
	var o=ur_Brc_getObj(sId);
	var iKey=oEvt.keyCode;
	ur_KY_nav(oEvt,o);
	
	if(iKey==32 && ur_EVT_src(oEvt).onclick!=null){
	   oEvt.srcElement.click();
	}
	else if(iKey==13)
		ur_EVT_cancel(oEvt);
}
function ur_Brc_getObj(sId){
	var oBrd=ur_get(sId);
	var o={ref:oBrd,
		   items:new Array()
	}
	
	aItems=oBrd.childNodes;
	
	for(i=0;i<aItems.length;++i){
		if(aItems[i].getAttribute("idx")!=null)
		o.items.push(aItems[i]);
	}
	o["selected"]=o.items.length-1;
	o.ref["kb"]="h";
	o.items["rfl"]=false;
	return o;
}
function sapUrMapi_BreadCrumb_activate(sId,oEvt){
}
function sapUrMapi_BreadCrumb_deactivate(sId,oEvt){
	if(oEvt.toElement!=null&&oEvt.toElement.parentNode.className.indexOf("Brc")>=0) return;
	var o=ur_get(sId);
	var oSel=o.lastChild;
	
	sapUrMapi_setTabIndex(oSel,0);
	o.setAttribute("nav","false");
}

//** Button.ie5 **

function ur_Button_keypress(e) { 
	var o=ur_EVT_src(e);
	
	while (o.getAttribute("ct")==null && o.getAttribute("ct")!="B") {
	    if (o.tagName=="BODY") return;
	    o=o.parentNode;
	  }	
	if (ur_Button_isDsbl(o)) return;
  if((o.getAttribute("tp")=="MNUSEC")||(o.getAttribute("tp")=="MNU")) {
		if(e.altKey && e.keyCode==40 || e.keyCode==115) {
		  sapUrMapi_Button_openMenu(o.id,e);
			return ur_EVT_cancel(e);
		}
	}
  if (e.keyCode==32) {
	  ur_EVT_cancel(e);
	  if(o.getAttribute("tp")=="MNU") {
			  sapUrMapi_Button_openMenu(o.id,e);
				return ur_EVT_cancel(e);
	  }
	  return ur_EVT_fire(o,"ocl",e);
  }
}
function ur_Button_click(e) { 
	var o=ur_EVT_src(e);
	
	while (o.getAttribute("ct")==null && o.getAttribute("ct")!="B") {
	   if (o.tagName=="BODY") return;
	    o=o.parentNode;
	  }	
	
	if (ur_Button_isDsbl(o)) return;
  if (o.getAttribute("tp")=="MNU") {
		  sapUrMapi_Button_openMenu(o.id,e);
			return ur_EVT_cancel(e);
  }
  return ur_EVT_fire(o,"ocl",e);
}
function ur_Button_isDsbl(o) {
  var sSt=ur_getAttD(o,"st","");
  return sSt.indexOf("d")>-1;
}
function ur_Button_setStatus(sId,bEnabled) {
	var o=ur_get(sId);
	var bStD=ur_Button_isDsbl(o);
	if (bStD!=bEnabled) return; 
	var arrCls=o.className.split(" ");
	if (bEnabled) {
	  o.setAttribute("st","");
	  arrCls[0]=arrCls[0].replace("Dsbl","");
	} else {
	  o.setAttribute("st","d");
	  arrCls[0]=arrCls[0]+"Dsbl";
	}
	o.className=arrCls.join(" ");
}
function mf_Button_setEnabled(sId){ur_Button_setStatus(sId,true);}
function mf_Button_setDisabled(sId){ur_Button_setStatus(sId,false);}
function sapUrMapi_Button_openMenu( sButtonId, e){
	var sPopupId=document.getElementById(sButtonId).getAttribute("popup");
	if (!sPopupId) return;
	if (ur_system.direction=="rtl")
 	  sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENURIGHT,e);
 	else
 	  sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENULEFT,e);
  e.cancelBubble=false;
	if ((e.type=="contextmenu")) {
    e.returnValue=false;
  } else {
    e.returnValue=true;
  }
}
function sapUrMapi_Button_setIconSrc(sId,sIconSrc){
	var o=ur_get(sId);
	if(!o) return;
	var oImg=o.getElementsByTagName("IMG")[0];
	if(!oImg) return;
	oImg.src=sIconSrc;
}
//** CalendarView.ie5 **

var _ur_CAL = new Array();
function ur_CAL_create(sId) {
  
	sapUrMapi_Create_AddItem(sId, "ur_CAL_init('"+sId+"')");
}
function ur_CAL_init(sId) {
  
  ur_CAL_draw(sId);
  var obj=ur_CAL_getObj(sId);
  
  obj.ref.attachEvent("onactivate",ur_CAL_activate); 
  
  
  if (obj.type == "Y" || obj.type == "HM") {
     sapUrMapi_Resize_AddItem(sId, "ur_CAL_drawYear('"+sId+"')");
  } else if (obj.type=="D" || obj.type=="MD") { 
     sapUrMapi_Resize_AddItem(sId, "ur_CAL_drawDay('"+sId+"')");
    
    var scrlTop=parseFloat(ur_get(sId).getAttribute("sctop"));
    var oStartCell=ur_get(sId+"-start");
    var iRowHeight=oStartCell.offsetHeight;
    if (!isNaN(scrlTop))
      ur_get(sId+"-scrl").scrollTop=Math.floor(iRowHeight*scrlTop);
  } else if (obj.type=="M") { 
     sapUrMapi_Resize_AddItem(sId, "ur_CAL_drawMonth('"+sId+"')");
  }
}
function ur_CAL_createEntryObj(oHTMLEntry) {
	var fEntry = new Function( "return {" + oHTMLEntry.getAttribute("data") + "}" ); 
	var oEntry = fEntry(); 
	if (oEntry.dur <= 0) return null;
	oEntry.ref = oHTMLEntry; 
	oEntry.ecol = oEntry.scol + oEntry.dur;  
	oEntry.erow = oEntry.srow + oEntry.dur;  
	return oEntry; 
}
function ur_CAL_getObj(sId) {
  if (_ur_CAL[sId]) return _ur_CAL[sId];
  var o=ur_get(sId);
  var obj={id:sId,type:o.getAttribute("tp"),entries:new Array(),fullday:new Array(),ref:o};
  var oEntries=ur_get(sId+"-entries");
  var aDOMEntries=oEntries.childNodes;
  for (var n=0;n<aDOMEntries.length;n++) {
    if (aDOMEntries[n].nodeType!=1) continue; 
    var oE = ur_CAL_createEntryObj(aDOMEntries[n]);
    if (oE) obj.entries.push(oE);
  }
  
  var oEntries=ur_get(sId+"-entries-fullday"); 
  if (oEntries) { 
		var aDOMEntries=oEntries.childNodes;
		for (var n=0;n<aDOMEntries.length;n++) {
			if (aDOMEntries[n].nodeType!=1) continue; 
      var oE = ur_CAL_createEntryObj(aDOMEntries[n]);
      if (oE) obj.fullday.push(oE);
		}
  }
  _ur_CAL[sId]=obj;
  return _ur_CAL[sId];
}
function ur_CAL_createContinueEntry(oBaseEntry,sId,fStartRow,fStartCol,fDuration,bSelectable,bSelected,bFullDay) {
	var oExistingContinousEntry = ur_get(sId);
	if (oExistingContinousEntry) return oExistingContinousEntry;
	var oNewEntry  = oBaseEntry.cloneNode(true);
	oNewEntry.id   = sId;
	oNewEntry.setAttribute("data","srow:" + fStartRow + ",scol:" + fStartCol + ",dur:" + fDuration + ",selb:" + bSelectable + ",sel:" + bSelected + ",fd:" + bFullDay);
	
	oNewEntry.tabIndex = "-1";
	oNewEntry.setAttribute("ti","-1");
	oNewEntry.onactivate = new Function ("event","sapUrMapi_focusElement('"+oBaseEntry.id+"');");
	return oNewEntry;
} 
function ur_CAL_calcYearEntries(sId) {
  var obj = ur_CAL_getObj(sId);
  
  var oStartCell = ur_get(sId+"-start");
  var oRows = oStartCell.parentNode.parentNode.childNodes;
  var oEntries=obj.entries;
  
  
  if (!obj.rows) {
		obj.rows=new Array();
		for (var i=0;i<oRows.length;i++) {
			var daycount=oRows[i].cells.length-2;
			while (oRows[i].cells[daycount+1].getAttribute("disabled")) daycount--;
			obj.rows.push(daycount);
		}
	  
		for (var n=0;n<oEntries.length;n++) {
			while (oEntries[n].ecol > obj.rows[oEntries[n].srow]+1 ) { 
				var iEntryCount = 0;
				if (obj.rows.length > oEntries[n].srow+1) {
					var sEntryId = oEntries[n].ref.id+"-cont-"+(iEntryCount+1);
					if (!ur_get(sEntryId)) {
						var oNewEntry=ur_CAL_createContinueEntry(oEntries[n].ref,sEntryId,(oEntries[n].srow+1),0,(oEntries[n].dur-obj.rows[oEntries[n].srow]+oEntries[n].scol-1),(oEntries[n].selb==true),(oEntries[n].sel==true),(oEntries[n].fd==true));
						oEntries[n].ref.parentNode.appendChild( oNewEntry );
						var oE = ur_CAL_createEntryObj(oNewEntry);
						if (oE) obj.entries.push( oE );
					}
					oEntries[n].dur = obj.rows[oEntries[n].srow] - oEntries[n].scol+1;
					oEntries[n].ecol = oEntries[n].scol + oEntries[n].dur;
					iEntryCount++;
				} else {
					break; 
				}
			}
		}
	}
	
  
  oEntries.sort(ur_CAL_sortColEntries);
	
	
	var aRows = new Array();
	for (var n=0;n<obj.rows.length;n++) aRows[n] = new Array();
	for (var n=0;n<oEntries.length;n++) aRows[oEntries[n].srow].push(oEntries[n]);
	var iLevelCount=0;
	
	for (var i=0;i<aRows.length;i++) {
		var iEndCol=0;
		var aParallelRows=new Array();
		var aEndCols=new Array();
		aEndCols[0]=0;
		aParallelRows[0]=new Array();
		for (var n=0;n<aRows[i].length;n++) {
			var iLevelCount=0;
			while (aEndCols[iLevelCount] > aRows[i][n].scol && iLevelCount<aEndCols.length) {
				iLevelCount++;
        if (!aParallelRows[iLevelCount]) aParallelRows[iLevelCount] = new Array();
			}
			aEndCols[iLevelCount]=aRows[i][n].ecol;
			aParallelRows[iLevelCount].push(aRows[i][n]);
			aRows[i][n].level=iLevelCount;
			if (iEndCol< aRows[i][n].ecol) iEndCol=aRows[i][n].ecol;
			for (var x=0;x<aParallelRows.length;x++) {
				for (var y=0;y<aParallelRows[x].length;y++) {
					aParallelRows[x][y].level=x;
					aParallelRows[x][y].max=aEndCols.length;
			    aParallelRows[x][y].span=aEndCols.length-x;
					bFound=false;
					for (iNextRow = x+1; iNextRow < aParallelRows.length;iNextRow++) {
						for (iNextEntryCount = 0; iNextEntryCount < aParallelRows[iNextRow].length;iNextEntryCount++) {
							if (!(aParallelRows[x][y].ecol<aParallelRows[iNextRow][iNextEntryCount].scol ||
										aParallelRows[x][y].scol>aParallelRows[iNextRow][iNextEntryCount].ecol )
									) {
								bFound=true;
								break;
							}
						}
						if (bFound) break;
					}   
					if (bFound) aParallelRows[x][y].span=1;
				}
			}
		}
	}
	var iEntryCnt=0;
	var focusEntries=new Array();
	var iOldRow = 0;
	var oRows = obj.ref.getElementsByTagName("TR");
	for (var n=0;n<oEntries.length;n++) {
		if (obj.type == "HM") {
			while (iOldRow <= oEntries[n].srow) {
			  focusEntries.push({ref:oRows[iOldRow+1].firstChild,row:true});
			  oRows[iOldRow+1].firstChild.setAttribute("ic",(oRows.length-1)+"");
			  oRows[iOldRow+1].firstChild.setAttribute("idx",(iOldRow+1)+"");
			  oRows[iOldRow+1].firstChild.setAttribute("tp","RH");
			  oRows[iOldRow+1].firstChild.setAttribute("t",oRows[iOldRow+1].firstChild.innerText);
			  iOldRow++;
			}
		}
		if (oEntries[n].ref.id.indexOf("-cont-")==-1) {
			iEntryCnt++;
			focusEntries.push(oEntries[n]);
		}
	}
	obj.focusEntries=focusEntries;
}
function ur_CAL_drawYear(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oCal    = ur_get(sId);
  var oTbl    = ur_get(sId+"-tbl");
  var oTHs    = oTbl.getElementsByTagName("TH");
  var oCols   = oTbl.getElementsByTagName("COL");
  var iTotalWidth = oTbl.offsetWidth;
  var iMonthWidth = oTbl.getElementsByTagName("TH")[0].offsetWidth; 
  var sOldOverflow = oCal.style.overflowX;
  oCal.style.overflowX = "";
	obj.iTodaysDay = parseInt(obj.ref.getAttribute("tday"));
	if (obj.iTodaysDay > 0 && obj.iTodaysDay < 31 ) {
		oTbl.rows[0].cells[obj.iTodaysDay].style.padding="0";
		oTbl.rows[0].cells[obj.iTodaysDay].innerHTML = "<div class=\"urToday\" style=\"padding-top:1px;padding-bottom:2px\">" + obj.iTodaysDay + "</div>";
	}
  if (iTotalWidth < 200) iTotalWidth = 200; 
  var iDayWidth = Math.floor((iTotalWidth-iMonthWidth)/31); 
  
  if (iDayWidth < 21 || oCal.offsetWidth < iTotalWidth) {
    oCal.style.overflowX="auto"; 
    oCal.style.height=oTbl.offsetHeight+16; 
    iDayWidth=21;
    oCols[0].style.width = iMonthWidth;
  } else {
    oCal.style.height=oTbl.offsetHeight; 
    
  }   
  for (var i=1;i<32;i++)  oCols[i].width = iDayWidth; 
  if (sOldOverflow!=oCal.style.overflowX || oCal.style.overflowX!="auto")
	  ur_CAL_drawYearEntries(sId);
}
function ur_CAL_drawYearEntries(sId) {
	var iFixedHeight=16;
	var obj=ur_CAL_getObj(sId);
	var oEntries = obj.entries;
	var oStartCell = ur_get(sId+"-start");
	var oRows = oStartCell.parentNode.parentNode.childNodes;
	for (var n=0;n<oEntries.length;n++) {
		oStartCell = oRows[oEntries[n].srow].cells[Math.floor(oEntries[n].scol) + 1];
		var iColWidth = oStartCell.offsetWidth;
		var oPos = ur_CAL_getPos(oStartCell);
		oPos.x+=(oEntries[n].scol-Math.floor(oEntries[n].scol))*iColWidth;
		var iWidth = Math.floor(iColWidth*oEntries[n].dur);
		oEntries[n].ref.style.top = oPos.y + (iFixedHeight / oEntries[n].max * oEntries[n].level ) + 1;
		oEntries[n].ref.style.height = Math.floor(iFixedHeight / oEntries[n].max * oEntries[n].span);
		oEntries[n].ref.style.width = iWidth;
		if (ur_system.direction == "rtl")
			oEntries[n].ref.style.right = oPos.x+1; 
		else
			oEntries[n].ref.style.left=oPos.x+1;
	}
}  
function ur_CAL_calcDayEntries(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  var oRows=oTbl.getElementsByTagName("TBODY")[0].getElementsByTagName("TBODY")[0].childNodes;
  var oStartCell=ur_get(sId+"-start");
  
  var oEntries=obj.entries;
  oEntries.sort(ur_CAL_sortRowEntries);
  
  var oFullDayEntries=obj.fullday;
  oFullDayEntries.sort(ur_CAL_sortColEntries);
  
  
  var oColumns = oStartCell.parentNode.childNodes;
  var iColCount=oColumns.length-1;
  obj.cols = [];
  for (var n=1; n < oColumns.length;n++) {
		obj.cols.push(oRows.length);
  }
  
  var aEntryCols=new Array();
  for (var i=0;i<iColCount;i++) aEntryCols.push(new Array());
  
  for (var n=0;n<oEntries.length;n++) {
		var iEntryCount = 0;
		while (oEntries[n].erow > obj.cols[oEntries[n].scol]+1 ) { 
			if (obj.cols.length > oEntries[n].scol+1) {
				var sEntryId = oEntries[n].ref.id+"-cont-"+(iEntryCount+1);
				if (!ur_get(sEntryId)) {
					var oNewEntry=ur_CAL_createContinueEntry(oEntries[n].ref,sEntryId,0,(oEntries[n].scol+1),(oEntries[n].dur-obj.cols[oEntries[n].scol]+oEntries[n].srow-1),(oEntries[n].selb==true),(oEntries[n].sel==true),(oEntries[n].fd==true));
					oEntries[n].ref.parentNode.appendChild( oNewEntry );
					var oE = ur_CAL_createEntryObj(oNewEntry);
					if (oE) obj.entries.push( oE );
				}
				oEntries[n].dur = obj.cols[oEntries[n].scol] - oEntries[n].srow+1;
				oEntries[n].erow = oEntries[n].srow + oEntries[n].dur;
				iEntryCount++;
			} else {
				break; 
			}
		}
  }
  for (var n=0;n<oEntries.length;n++) aEntryCols[oEntries[n].scol].push(oEntries[n]);
  for (var i=0;i<iColCount;i++) {
    var iEndRow=0;
    var aParallelCols=new Array();
    var aEndRows=new Array();
		aEndRows[0]=0;
		aParallelCols[0]=new Array();
    for (var n=0;n<aEntryCols[i].length;n++) {
      var iLevelCount=0;
      while (aEndRows[iLevelCount] > aEntryCols[i][n].srow && iLevelCount<aEndRows.length) {
        iLevelCount++;
      	if (!aParallelCols[iLevelCount]) aParallelCols[iLevelCount] = new Array();
      }
      aEndRows[iLevelCount]=aEntryCols[i][n].erow;
      aParallelCols[iLevelCount].push(aEntryCols[i][n]);
      
      aEntryCols[i][n].level=iLevelCount;
      if (iEndRow < aEntryCols[i][n].erow) iEndRow=aEntryCols[i][n].erow;
    }
    for (var x=0;x<aParallelCols.length;x++) {
      for (var y=0;y<aParallelCols[x].length;y++) {
         aParallelCols[x][y].level=x;
         aParallelCols[x][y].max=aEndRows.length;
         
         aParallelCols[x][y].span=aEndRows.length-x;
         
         bFound=false;
         for (iNextCol = x+1; iNextCol < aParallelCols.length;iNextCol++) {
           for (iNextColEntryCount = 0; iNextColEntryCount < aParallelCols[iNextCol].length;iNextColEntryCount++) {
             
             if (!(aParallelCols[x][y].erow<aParallelCols[iNextCol][iNextColEntryCount].srow ||
                   aParallelCols[x][y].srow>aParallelCols[iNextCol][iNextColEntryCount].erow )
                 ) {
               bFound=true;
               break;
             }
           }
           if (bFound) break;
         }   
         if (bFound) aParallelCols[x][y].span=1;
      }
    }
  }
  
  var iEndCol=0;
  var aParallelRows=new Array();
  var aEndCols=new Array();
	aEndCols[0]=0;
	aParallelRows[0]=new Array();
  for (var n=0;n<oFullDayEntries.length;n++) {
    var iLevelCount=0;
    while (aEndCols[iLevelCount] > oFullDayEntries[n].scol && iLevelCount<aEndCols.length) {
      iLevelCount++;
      if (!aParallelRows[iLevelCount]) aParallelRows[iLevelCount] = new Array();
    }
    aEndCols[iLevelCount]=oFullDayEntries[n].ecol;
    aParallelRows[iLevelCount].push(oFullDayEntries[n]);
    
    oFullDayEntries[n].level=iLevelCount;
    if (iEndCol < oFullDayEntries[n].ecol) iEndCol=oFullDayEntries[n].ecol;
  }
  for (var x=0;x<aParallelRows.length;x++) {
    for (var y=0;y<aParallelRows[x].length;y++) {
        aParallelRows[x][y].level=x;
        aParallelRows[x][y].max=aEndCols.length;
        
        aParallelRows[x][y].span=1;
    }
  }
  obj.endcols=aEndCols;
}
function ur_CAL_drawDay(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  var oFixedRows=oTbl.getElementsByTagName("THEAD")[0].childNodes;
  var oScrl=ur_get(sId+"-scrl");
  if (ur_system.direction=="rtl") {
		if (oScrl.scrollHeight>oScrl.offsetHeight) oScrl.style.overflowY="scroll";
		else oScrl.style.overflowY="none";
  }
  ur_CAL_drawDayEntries(sId) 
}
function ur_CAL_drawDayEntries(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  var oStartCell=ur_get(sId+"-start");
  var oRows=oTbl.getElementsByTagName("TBODY")[0].getElementsByTagName("TBODY")[0].childNodes;
  var oFullDayCell=ur_get(sId+"-fixed");
	var iFixedHeight=16;
	var aEndCols=obj.endcols;
	var oFullDayEntries=obj.fullday;
	var oEntries=obj.entries;
	
  var iRowHeight=oStartCell.offsetHeight;
  for (var n=0;n<oEntries.length;n++) {
    
    var iColWidth=oStartCell.parentNode.childNodes[oEntries[n].scol+1].offsetWidth;
    var oPos=ur_CAL_getPos(oStartCell.parentNode.childNodes[oEntries[n].scol+1]);
    if (oRows.length-oEntries[n].srow-oEntries[n].dur<0) {
      oEntries[n].dur=oRows.length-oEntries[n].srow;
    }
    var iSpace=8; 
    iColWidth = iColWidth - iSpace;
    var iTop=Math.floor(iRowHeight*(oEntries[n].srow));
    var iHeight=Math.floor(iRowHeight*oEntries[n].dur);
    var iMinWidth=Math.floor(iColWidth/oEntries[n].max);
    oEntries[n].ref.style.top=oPos.y+iTop+1;
    oEntries[n].ref.style.height=iHeight;
    oEntries[n].ref.style.width=iMinWidth*oEntries[n].span;
		if (ur_system.direction=="rtl")
      oEntries[n].ref.style.right=oPos.x+(oEntries[n].level*iMinWidth)+1-16;
    else
      oEntries[n].ref.style.left=oPos.x+(oEntries[n].level*iMinWidth)+1;
    
    
  }
  iFixedHeight=16;
  oFullDayCell.style.height=5+(aEndCols.length*(iFixedHeight));
  for (var n=0;n<oFullDayEntries.length;n++) {
		var oPos=ur_CAL_getPos(oFullDayCell.parentNode.childNodes[Math.floor(oFullDayEntries[n].scol)+1]);
		var iColWidth=oFullDayCell.parentNode.childNodes[Math.floor(oFullDayEntries[n].scol)+1].offsetWidth;
		var iLeft=oPos.x+Math.floor(iColWidth*(oFullDayEntries[n].scol-Math.floor(oFullDayEntries[n].scol)));
    var iWidth=Math.floor(iColWidth*oFullDayEntries[n].dur);
    if (iWidth+iLeft>oTbl.offsetWidth) {
      iWidth=oTbl.offsetWidth-iLeft-1;
    }
		if (ur_system.direction=="rtl")
			oFullDayEntries[n].ref.style.right=iLeft+1;
		else
			oFullDayEntries[n].ref.style.left=iLeft+1;
    oFullDayEntries[n].ref.style.top=oPos.y+(iFixedHeight*(oFullDayEntries[n].level)+1);
    oFullDayEntries[n].ref.style.width=iWidth-1;
    oFullDayEntries[n].ref.style.height=iFixedHeight+"px";
  }  
}
function ur_CAL_calcMonthEntries(sId) {
  var obj = ur_CAL_getObj(sId);
  
  var oStartCell = ur_get(sId+"-start");
  var oRows = oStartCell.parentNode.parentNode.childNodes;
  var oEntries=obj.entries;
  
  
  if (!obj.rows) {
		obj.rows=new Array();
		for (var i=0;i<oRows.length;i++) {
			var daycount=oRows[i].cells.length-2;
			while (oRows[i].cells[daycount+1].getAttribute("disabled")) daycount--;
			obj.rows.push(daycount);
		}
	  
		for (var n=0;n<oEntries.length;n++) {
			while (oEntries[n].ecol > obj.rows[oEntries[n].srow]+1 ) { 
				var iEntryCount = 0;
				if (obj.rows.length > oEntries[n].srow+1) {
					var oNewEntry=ur_CAL_createContinueEntry(oEntries[n].ref,oEntries[n].ref.id+"-cont-"+(iEntryCount+1),(oEntries[n].srow+1),0,oEntries[n].dur-obj.rows[oEntries[n].srow]+oEntries[n].scol-1,(oEntries[n].selb==true),(oEntries[n].sel==true),(oEntries[n].fd==true));
					oEntries[n].ref.parentNode.appendChild( oNewEntry );
					oEntries[n].dur = obj.rows[oEntries[n].srow] - oEntries[n].scol+1;
					oEntries[n].ecol = oEntries[n].scol + oEntries[n].dur;
					iEntryCount++;
					var oE = ur_CAL_createEntryObj(oNewEntry);
					if ( oE ) obj.entries.push( oE );
				} else {
					break; 
				}
			}
		}
	}
  
  
  oEntries.sort(ur_CAL_sortColEntries);
	
	
	var aRows = new Array();
	for (var n =0;n<obj.rows.length;n++) aRows[n] = new Array();
	for (var n=0;n<oEntries.length;n++) aRows[ oEntries[n].srow ].push( oEntries[n] );
	var iLevelCount=0;
	
	for (var i=0;i<aRows.length;i++) {
		var iEndCol=0;
		var aParallelRows=new Array();
		var aEndCols=new Array();
		aEndCols[0]=0;
		aParallelRows[0]=new Array();
		for (var n=0;n<aRows[i].length;n++) {
			var iLevelCount=0;
			while (aEndCols[iLevelCount] > aRows[i][n].scol && iLevelCount<aEndCols.length) {
				iLevelCount++;
        if (!aParallelRows[iLevelCount]) aParallelRows[iLevelCount] = new Array();
			}
			aEndCols[iLevelCount]=aRows[i][n].ecol;
			aParallelRows[iLevelCount].push(aRows[i][n]);
			aRows[i][n].level=iLevelCount;
			if (iEndCol< aRows[i][n].ecol) iEndCol=aRows[i][n].ecol;
			for (var x=0;x<aParallelRows.length;x++) {
				for (var y=0;y<aParallelRows[x].length;y++) {
					aParallelRows[x][y].level=x;
					aParallelRows[x][y].max=aEndCols.length;
			    aParallelRows[x][y].span=aEndCols.length-x;
					bFound=false;
					for (iNextRow = x+1; iNextRow < aParallelRows.length;iNextRow++) {
						for (iNextEntryCount = 0; iNextEntryCount < aParallelRows[iNextRow].length;iNextEntryCount++) {
							if (!(aParallelRows[x][y].ecol<aParallelRows[iNextRow][iNextEntryCount].scol ||
										aParallelRows[x][y].scol>aParallelRows[iNextRow][iNextEntryCount].ecol )
									) {
								bFound=true;
								break;
							}
						}
						if (bFound) break;
					}   
					if (bFound) aParallelRows[x][y].span=1;
				}
			}
		}
	}
	var iEntryCnt=0;
  var focusEntries=new Array();
	for (var n=0;n<oEntries.length;n++) {
		if (oEntries[n].ref.id.indexOf("-cont-")==-1) {
			iEntryCnt++;
			focusEntries.push(oEntries[n]);
		}
	}
	obj.focusEntries=focusEntries;
}
function ur_CAL_drawMonth(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  ur_CAL_drawMonthEntries(sId) 
}
function ur_CAL_drawMonthEntries(sId) {
	var iFixedHeight=16*6;
	var iMaxHeight = 16*6;
	var obj=ur_CAL_getObj(sId);
	var oEntries = obj.entries;
	var oStartCell = ur_get(sId+"-start");
	var oRows = oStartCell.parentNode.parentNode.childNodes;
  var iHeight = 16; 
	for (var n=0;n<oEntries.length;n++) {
		oStartCell = oRows[oEntries[n].srow].cells[Math.floor(oEntries[n].scol) + 1];
		if (oEntries[n].level>5) continue; 
		if (oEntries[n].level>3) {
		  
		  oRows[oEntries[n].srow].style.height = (1.5*(oEntries[n].level+2))+"em";
		}
		var iColWidth = oStartCell.offsetWidth;
		var oPos = ur_CAL_getPos(oStartCell);
		oPos.x +=(oEntries[n].scol - Math.floor(oEntries[n].scol)) * iColWidth;
    if (oEntries[n].fd) {
		  var iWidth = Math.floor(iColWidth*oEntries[n].dur)-1;
		  oEntries[n].ref.style.top = oPos.y + (iHeight * oEntries[n].level ) + 1;
		  oEntries[n].ref.style.height = iHeight;
		  oEntries[n].ref.style.width = iWidth;
		  if (ur_system.direction == "rtl")
			  oEntries[n].ref.style.right = oPos.x+1; 
		  else
			  oEntries[n].ref.style.left=oPos.x+1;
	  } else {
		  var iWidth = iColWidth-1;
		  oEntries[n].ref.style.top = oPos.y + (iHeight * oEntries[n].level ) + 1;
		  oEntries[n].ref.style.height = iHeight;
		  oEntries[n].ref.style.width = iWidth;
		  if (ur_system.direction == "rtl")
			  oEntries[n].ref.style.right = oPos.x+1; 
		  else
			  oEntries[n].ref.style.left=oPos.x+1;
	  }
	}
}
function ur_CAL_draw(sId) {
  var obj=ur_CAL_getObj(sId);
  if (obj.type=="Y" || obj.type == "HM" ) {
    ur_CAL_calcYearEntries(sId);
    ur_CAL_drawYear(sId);
  } else if (obj.type=="D" || obj.type=="MD") {
    ur_CAL_calcDayEntries(sId);
    ur_CAL_drawDay(sId);
  } else if (obj.type=="M") {
    ur_CAL_calcMonthEntries(sId);
    ur_CAL_drawMonth(sId);
  }
  return true;
}
function ur_CAL_activate(oEvt) {
  var oSrc = ur_EVT_src(oEvt);
  var sId = ur_getRootObj(oSrc).id;
  var obj=ur_CAL_getObj(sId);
  if (obj.type == "MD" || obj.type == "D") {
    if ( obj.ref.contains(oEvt.fromElement)) {
      if (obj.focusedCol) {
        var oEntries = ur_CAL_Day_getEntriesOfColumn(obj,obj.focusedCol-1);
      }
      return;
    }
    if ( oEvt.shiftKey ) {
      
      
      var iColCount = obj.ref.getElementsByTagName("TH").length-1;
      var oEntries = ur_CAL_Day_getEntriesOfColumn(obj,iColCount);
      if (oEntries.length > 0) {
        ur_CAL_setFocus(obj,oEntries[oEntries.length-1].ref);
      } else {
        ur_CAL_setFocus(obj,obj.ref.getElementsByTagName("TH")[iColCount]);
      }
    } else {
      ur_CAL_setFocus(obj,obj.ref.getElementsByTagName("TH")[1])
    }
  } else if (obj.type == "M") {
    ur_CAL_Month_activate(obj,oEvt);  
  }
  ur_SCR_activate(oEvt);
}
function ur_CAL_keydown(sId,oEvt) {
  
  var obj=ur_CAL_getObj(sId);
  
  if (sapUrMapi_skip(obj.ref.id,oEvt)) {
    return;
  } else if (oEvt.keyCode=="32" || oEvt.keyCode=="13") {
    ur_CAL_click(sId,oEvt);
  } else if (obj.type == "D" || obj.type == "MD") {
    ur_CAL_Day_keydown( obj , oEvt);
  } else if (obj.type == "M") {
    ur_CAL_Month_keydown( obj , oEvt);
  } else if (obj.type == "Y" || obj.type == "HM")  {
    ur_CAL_Year_keydown(obj,oEvt);
  } else {
		sapUrMapi_skip(sId,oEvt);
  }
}
function ur_CAL_click(sId, oEvt) {
  var o=ur_get(sId);
  var obj = ur_CAL_getObj(sId);
  var oSrc=ur_EVT_src(oEvt);
  var oMainSource = oSrc;
  
  var sType = ur_getAttD( oMainSource,"cal","");
  if (sType == "") sType = ur_getAttD( oMainSource,"tp","")
  while (sType == "" && oMainSource.tagName != "TABLE") {
    oMainSource = oMainSource.parentNode;
    sType = ur_getAttD( oMainSource,"cal","");
    if (sType == "") sType = ur_getAttD( oMainSource,"tp","")
  }
  if (sType=="COL" || sType=="ENTRY") {
    if (sType=="ENTRY") {
      oEntry = eval("result={" + oMainSource.data +"};");
      obj.focusedCol = oEntry.scol+1;  
    }
    ur_CAL_setFocus(obj,oMainSource);
    sapUrMapi_Focus_showFocusRect();
  }
  
  if (oSrc.tagName=="DIV" && oSrc.parentNode.tagName=="TD") oSrc=oSrc.parentNode;
  if (oSrc.tagName=="DIV" && oSrc.parentNode.tagName=="TH") oSrc=oSrc.parentNode;
  oEvt["ur_param"]=new Array();
  if (oSrc.tagName=="TH" && ur_getAttD(oSrc,"cidx","")!="") {
    oEvt.ur_param["col"]=ur_getAttD(oSrc,"cidx","");
    
    ur_EVT_fire(o,"och",oEvt);
  } else if (oSrc.tagName=="TD" && (ur_getAttD(oSrc,"cidx","")!="" || ur_getAttD(oSrc,"ridx","")!="")) {
    var iCol=ur_getAttD(oSrc,"cidx","");
    var iRow=ur_getAttD(oSrc,"ridx","");
    if (iCol!="" && iRow!="") {
      oEvt.ur_param["col"]=iCol;
      oEvt.ur_param["row"]=iRow;
			if (ur_getAttD(oSrc,"fr","")=="1") {
				
				oEvt.ur_param["fullday"]=true;
    
      }
      
      ur_EVT_fire(o,"ocl",oEvt);
    } else {
      oEvt.ur_param["row"]=iRow;
      
      ur_EVT_fire(o,"orh",oEvt);
    }
  } else if (ur_getAttD(oSrc,"data","")!="") {
    if (ur_getAttD(oSrc,"data","").indexOf("selb:true")>-1) {
      
      oEvt.ur_param["entryid"]=oSrc.id.split("-")[0];
      ur_EVT_fire(o,"oes",oEvt);
    }
  } else if (oSrc.tagName=="IMG" && ur_getAttD(oSrc,"class","")!="urCVMore") {
    
    var oTd=oSrc;
    while (oTd && oTd.tagName!="TD") {
      oTd=oTd.parentNode;
    }
    if (!oTd) return;
    var iCol=ur_getAttD(oTd,"cidx","");
    var iRow=ur_getAttD(oTd,"ridx","");
    if (iCol!="" && iRow!="") {
      oEvt.ur_param["col"]=iCol;
      oEvt.ur_param["row"]=iRow;
			if (ur_getAttD(oTd,"fr","")=="1") {
				
				oEvt.ur_param["fullday"]=true;
    
      }
    }
    ur_EVT_fire(o,"omcl",oEvt);
  }
  if (obj.type == "M") {
		ur_CAL_Month_click(obj,oEvt);
  }
}
function ur_CAL_getPos(o) {
  var pos={x:0,y:0};
  var orig=o;
  while (o.tagName!="BODY") {
    if (o.tagName=="DIV" && o.currentStyle.overflow!="none") break;
    pos.x+=o.offsetLeft;
    pos.y+=o.offsetTop;
    o=o.offsetParent;
  }
  if (ur_system.direction=="rtl") {
    pos.x=o.offsetWidth-pos.x-orig.offsetWidth;
  }
  return pos;
}
function sapUrMapi_CAL_getScrollTop(sId) {
  var oStartCell=ur_get(sId+"-start");
  var oScrl=ur_get(sId+"-scrl");
  var pos=oScrl.scrollTop;
  return pos/oStartCell.offsetHeight;
}
function ur_CAL_sortRowEntries(a,b) {
  if (a.scol-b.scol!=0) return a.scol-b.scol
  return a.srow-b.srow;
}
function ur_CAL_sortColEntries(a,b) {
  if (a.srow-b.srow!=0) return a.srow-b.srow
  return a.scol-b.scol;
}
function ur_CAL_setFocus( obj, oNewElem) {
  if (obj.focusedElement) {
    sapUrMapi_setTabIndex ( obj.focusedElement, "-1");       
  }
  sapUrMapi_setTabIndex ( oNewElem, "0");
  obj.focusedElement = oNewElem;
  if (obj.focusedElement.tagName=="TD") {
    obj.focusedCol = obj.focusedElement.cellIndex;
	  obj.focusedRow = obj.focusedElement.parentNode.rowIndex;
  }
  if ( ur_getAttD( obj.focusedElement,"cal","") == "COL") {
    var iColIdx = parseInt( ur_getAttD( obj.focusedElement,"idx","-1") );
    if ( iColIdx > -1 ) { 
      obj.focusedCol = iColIdx;
    }
    ur_CAL_Day_getEntriesOfColumn(obj,iColIdx-1);
    obj.focusedElement.setAttribute("ici",obj.colEntries[iColIdx-1].length);
  }
  ur_focus( oNewElem );
}
function ur_CAL_Day_focusNextDay( obj, oEvt ) {
  var iColIdx = obj.focusedCol;
  if (obj.focusedElement) {
    sapUrMapi_setTabIndex ( obj.focusedElement, "-1");       
  }
  obj.focusedElement = obj.ref.getElementsByTagName("TH")[obj.focusedCol];
  var iColCount = parseInt( ur_getAttD( obj.focusedElement,"ic","-1") );
  if ( !isNaN(iColIdx) ) { 
    if (iColIdx < iColCount) { 
      obj.focusedCol++;
      ur_CAL_setFocus( obj, obj.focusedElement.nextSibling)
      ur_EVT_cancel(oEvt);
    }
  }
}
function ur_CAL_Day_focusPrevDay( obj, oEvt ) {
  var iColIdx = obj.focusedCol;
  if (obj.focusedElement) {
    sapUrMapi_setTabIndex ( obj.focusedElement, "-1");       
  }
  obj.focusedElement = obj.ref.getElementsByTagName("TH")[obj.focusedCol];
  var iColCount = parseInt( ur_getAttD( obj.focusedElement,"ic","-1") );
  if ( !isNaN(iColIdx) ) { 
    if (iColIdx > 1) { 
      obj.focusedCol--;
      ur_CAL_setFocus( obj, obj.focusedElement.previousSibling)
      ur_EVT_cancel(oEvt);
    }
  }
}
function ur_CAL_Day_getEntriesOfColumn(obj,iCol) {
 
    obj.colEntries = new Array();  
 
 
    var oEntries = new Array();
    var iFullDayEntryCount = 0;
    var iEntryCount = 0;
    for (var i = 0;i < obj.fullday.length; i++) { 
      if (obj.fullday[i].scol == iCol || (iCol > obj.fullday[i].scol && iCol < obj.fullday[i].scol + obj.fullday[i].dur )) {
         oEntries.push(obj.fullday[i]);
         iFullDayEntryCount++;
         obj.fullday[i].ref.setAttribute("idx",iFullDayEntryCount); 
      }
    }
    
    for (var i = 0;i < oEntries.length; i++) {
      oEntries[i].ref.setAttribute("ic",iFullDayEntryCount); 
    }
    for (var i = 0;i < obj.entries.length; i++) {
      if (obj.entries[i].scol == iCol) {
        oEntries.push(obj.entries[i]);
        iEntryCount++;
        obj.entries[i].ref.setAttribute("idx",iEntryCount); 
      }
    }
    
    for (var i = iFullDayEntryCount;i < oEntries.length; i++) {
      oEntries[i].ref.setAttribute("ic",iEntryCount); 
    }
    obj.colEntries[iCol] = oEntries; 
  return obj.colEntries[iCol];
}
function ur_CAL_Day_keydown( obj, oEvt) {
  
  
  var oDomRef = ur_EVT_src (oEvt);
  var sType = ur_getAttD( oDomRef,"cal","");
  if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  while (sType == "" && oDomRef.tagName != "TABLE") {
    oDomRef = oDomRef.parentNode;
    sType = ur_getAttD( oDomRef,"cal","");
    if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  }
  if ( oDomRef == obj.ref ) {
     sapUrMapi_setTabIndex (obj.ref.getElementsByTagName("TH")[1],"0");
     return;
  }
  if ( !obj.focusedElement ) obj.focusedElement = oEvt.srcElement;
  if ( !obj.focusedCol )   obj.focusedCol = 1;
  
  var oEntriesThis = ur_CAL_Day_getEntriesOfColumn(obj,obj.focusedCol-1);
  
  var oEntriesPrev = ur_CAL_Day_getEntriesOfColumn(obj,obj.focusedCol-2);
  
  
  
  if (oEvt.keyCode == ur_KEYS.TAB && !oEvt.shiftKey ) {
    if ( sType == "COL" ) {
      
      if (oEntriesThis.length > 0) {
        ur_CAL_setFocus(obj, oEntriesThis[0].ref);
        ur_EVT_cancel(oEvt);
        return;
      }
      ur_CAL_Day_focusNextDay(obj, oEvt);
    } else if ( sType == "ENTRY" ) {
      
      for (var i = 0;i < oEntriesThis.length; i++) {
        if (oEntriesThis[i].ref == oDomRef && i < oEntriesThis.length-1) {
          ur_CAL_setFocus(obj, oEntriesThis[i+1].ref);
          ur_EVT_cancel(oEvt);
          return;
        }
      }
      ur_CAL_Day_focusNextDay(obj, oEvt);
      return;
    }
    
  
  } else if (oEvt.keyCode == ur_KEYS.TAB && oEvt.shiftKey ) {
    if ( sType == "COL" ) {
      
      if (oEntriesPrev.length > 0) {
        ur_EVT_cancel(oEvt);
        ur_CAL_setFocus(obj, oEntriesPrev[oEntriesPrev.length-1].ref);
        obj.focusedCol--;
        return;
      }
      
      ur_CAL_Day_focusPrevDay(obj, oEvt);
      return;
    } else if ( sType == "ENTRY" ) {
      
      for (var i = oEntriesThis.length -1 ;i >= 0; i--) {
        if (oEntriesThis[i].ref == oDomRef && i > 0) {
          ur_EVT_cancel(oEvt);
          ur_CAL_setFocus(obj, oEntriesThis[i-1].ref);
          return;
        }
      }
      var oNewElem = obj.ref.getElementsByTagName("TH")[obj.focusedCol];
      ur_EVT_cancel(oEvt);
      ur_CAL_setFocus( obj, oNewElem)
      return;
    }
  } else if (oEvt.keyCode == ur_KEYS.LEFT) {
    ur_CAL_Day_focusPrevDay(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.RIGHT) {
    ur_CAL_Day_focusNextDay(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.BEGIN) {
    
    var oNewElem = obj.ref.getElementsByTagName("TH")[obj.focusedCol].parentNode.firstChild.nextSibling;
    ur_CAL_setFocus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.END) {
    
    var oNewElem = obj.ref.getElementsByTagName("TH")[obj.focusedCol].parentNode.lastChild;
    ur_CAL_setFocus( obj, oNewElem)
  }
}
function ur_CAL_Month_keydown( obj, oEvt) {
  
  
  var oDomRef = ur_EVT_src (oEvt);
	
  
  var oDomRef = ur_EVT_src (oEvt);
  var sType = ur_getAttD( oDomRef,"cal","");
  if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  while (sType == "" && oDomRef.tagName != "TABLE") {
    oDomRef = oDomRef.parentNode;
    sType = ur_getAttD( oDomRef,"cal","");
    if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  }
  
  if (oEvt.keyCode == ur_KEYS.TAB && !oEvt.shiftKey ) {
  
  } else if (oEvt.keyCode == ur_KEYS.TAB && oEvt.shiftKey ) {
  } else if ((oEvt.keyCode == ur_KEYS.LEFT && ur_system.direction=="ltr") || (oEvt.keyCode == ur_KEYS.RIGHT && ur_system.direction=="rtl")) {
    ur_CAL_Month_focusCellPrev(obj, oEvt);
  } else if ((oEvt.keyCode == ur_KEYS.RIGHT && ur_system.direction=="ltr") || (oEvt.keyCode == ur_KEYS.LEFT && ur_system.direction=="rtl")) {
    ur_CAL_Month_focusCellNext(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.UP) {
    ur_CAL_Month_focusCellUp(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.DOWN) {
    ur_CAL_Month_focusCellDown(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.BEGIN && oEvt.ctrlKey) {
    
    var oNewElem = obj.ref.getElementsByTagName("TD")[1];
    ur_CAL_Month_focus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.END && oEvt.ctrlKey) {
    
    var oElements = obj.ref.getElementsByTagName("TD");
    var oNewElem = oElements[oElements.length-1];
    ur_CAL_Month_focus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.BEGIN && !oEvt.ctrlKey) {
    
    var oElements = obj.ref.getElementsByTagName("TR")[obj.focusedRow].childNodes;
    var oNewElem = oElements[1];
    ur_CAL_Month_focus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.END && !oEvt.ctrlKey) {
    
    var oElements = obj.ref.getElementsByTagName("TR")[obj.focusedRow].childNodes;
    var oNewElem = oElements[oElements.length-1];
    ur_CAL_Month_focus( obj, oNewElem)
  }  
}
function ur_CAL_Month_activate(obj,oEvt) {
  
  
  
  
  
  
  
  
  ur_CAL_Month_initNavigation(obj);
  
  var oDomRef = ur_EVT_src(oEvt);
  if (obj.ref==oDomRef || (!obj.ref.contains(oDomRef)) ) {
    
    if (oEvt.shiftKey) {
      var x=obj.tabChain.length-1;
      while(x>=0) {
        if (obj.tabChain[x].type!="CELLNOENTRY") {
					obj.focusedElement = obj.tabChain[x].navObj.ref;
					ur_CAL_Month_focusElement(obj);
					ur_EVT_cancel(oEvt);
					return;
				}
				x--;
			}
    } else {
      var x=0;
      while(x<obj.tabChain.length) {
        if (obj.tabChain[x].type!="CELLNOENTRY") {
					obj.focusedElement = obj.tabChain[x].navObj.ref;
					ur_CAL_Month_focusElement(obj);
					return;
				}
				x++;
			}
    }
    obj.focusedElement = null;   
  } 
}
function ur_CAL_Month_focusElement(obj) {
	sapUrMapi_setTabIndex(obj.focusedElement,"0");
  ur_focus(obj.focusedElement);
}
function ur_CAL_Month_focusNextTabElement(obj) {
  for (var i=0;i<obj.tabChain.length;i++) {
    if (obj.tabChain[i].navObj.ref == obj.focusedElement) {
      var x=i;
      while (x<obj.tabChain.length-1) {
        if ( obj.tabChain[x+1].type!="CELLNOENTRY") {
					sapUrMapi_setTabIndex(obj.focusedElement,"-1");
					obj.focusedElement = obj.tabChain[x+1].navObj.ref
		      ur_CAL_Month_focusElement(obj);
		      return obj;
				}
				x++;
      } 
      return null;
    }
  }
}
function ur_CAL_Month_focusPrevTabElement(obj) {
  for (var i=obj.tabChain.length-1;i>=0;i--) {
    if (obj.tabChain[i].navObj.ref == obj.focusedElement) {
      var x=i;
      while (x>0) {
        if ( obj.tabChain[x-1].type!="CELLNOENTRY") {
					sapUrMapi_setTabIndex(obj.focusedElement,"-1");
					obj.focusedElement = obj.tabChain[x-1].navObj.ref
					ur_CAL_Month_focusElement(obj);
		      return obj;
				}
				x--;
      } 
      ur_focus(ur_findPreviousFocusableElement(obj.ref));
      return obj.ref;
    } 
  }
}
function ur_CAL_Month_initNavigation(obj) {
  if (!obj.monthInit) {
		var oEntries = obj.entries;
		obj.navigationGrid = new Array();
		obj.navigationGrid.rows = new Array();
		obj.tabChain = new Array();
		var oRows = obj.ref.getElementsByTagName("TR");
		for (var i=1;i<oRows.length;i++) {
			obj.navigationGrid.rows.push({ref:oRows[i],cells:new Array()});
			for (var j=1;j<oRows[i].cells.length;j++) {
			  
				obj.navigationGrid.rows[i-1].cells.push({ref:oRows[i].cells[j]});
				obj.navigationGrid.rows[i-1].cells[j-1].entries = ur_CAL_Month_getEntriesOfCell(obj,i-1,j-1);
				ur_CAL_Month_setFocusAttributes(obj,obj.navigationGrid.rows[i-1].cells[j-1])
				if (obj.navigationGrid.rows[i-1].cells[j-1].entries.length>0) {
					obj.tabChain.push({navObj:obj.navigationGrid.rows[i-1].cells[j-1],type:"CELL"});
				} else {
					obj.tabChain.push({navObj:obj.navigationGrid.rows[i-1].cells[j-1],type:"CELLNOENTRY"});
				}
				for (var x=0;x<obj.navigationGrid.rows[i-1].cells[j-1].entries.length;x++) {
				  var oEntry =obj.navigationGrid.rows[i-1].cells[j-1].entries[x];
					if (!oEntry.referenceCount) {
					  obj.navigationGrid.rows[i-1].cells[j-1].entries[x].referenceCount = 1;
						obj.tabChain.push({navObj:oEntry,type:"ENTRY"});
					}
					sapUrMapi_setTabIndex(oEntry.ref,"-1");
				}
			}
		}
		for (var i=0;i<obj.tabChain.length;i++) {
		  
		  if (obj.tabChain[i].navObj.type=="CELL")
				obj.tabChain[i].navObj.ref.setAttribute("ic",obj.tabChain[i].navObj.entries.length);
		  obj.tabChain[i].navObj.ref.attachEvent("onkeydown",ur_CAL_Month_itemKeyDown);
		}
		obj.monthInit=true;
	}
}
function ur_CAL_Month_itemKeyDown(oEvt) {
  var oDomRef = ur_EVT_src (oEvt);
	
  
  var oSrc = ur_EVT_src(oEvt);
  var sId = ur_getRootObj(oSrc).id;
  var obj=ur_CAL_getObj(sId);
  
  if (oEvt.keyCode == ur_KEYS.TAB && !oEvt.shiftKey ) {
    if (ur_CAL_Month_focusNextTabElement(obj))
	    ur_EVT_cancel(oEvt);
  
  } else if (oEvt.keyCode == ur_KEYS.TAB && oEvt.shiftKey ) {
    if (ur_CAL_Month_focusPrevTabElement(obj))
	    ur_EVT_cancel(oEvt);
  } else if(oEvt.keyCode==32 && oEvt.ctrlKey==true && oSrc.getAttribute("more")) {
    oSrc.getElementsByTagName("IMG")[0].click();
  }
}
function ur_CAL_Month_click(obj,oEvt) {
  var oDomRef = ur_EVT_src (oEvt);
	
  
  var oSrc = ur_EVT_src(oEvt);
  var oTd = oSrc;
  while (oTd && oTd.tagName!="TD") {
    oTd=oTd.parentNode;
  }
  var sId = ur_getRootObj(oSrc).id;
  var obj=ur_CAL_getObj(sId);
	for (var i=0;i<obj.tabChain.length;i++) {
	  
	  if (obj.tabChain[i].navObj.ref==oTd) {
			if (obj.focusedElement)
				sapUrMapi_setTabIndex(obj.focusedElement,"-1");
			obj.focusedElement =obj.tabChain[i].navObj.ref
			ur_CAL_Month_focusElement(obj);		
		}
	}
  
  
}
function ur_CAL_Month_getEntriesOfCell (obj,iRow, iCol){
  var oEntries = new Array();
	var iEntryCount=0;
  for (var i = 0;i < obj.entries.length; i++) {
	  var oEntry = obj.entries[i];
    if (((oEntry.scol == iCol && oEntry.ecol > iCol) ||
         (oEntry.scol < iCol && oEntry.ecol > iCol))&& oEntry.srow == iRow) {
      oEntries.push(oEntry);
      iEntryCount++;
      obj.entries[i].ref.setAttribute("idx",iEntryCount); 
    }
  }
  
  for (var i = 0;i < oEntries.length; i++) {
    oEntries[i].ref.setAttribute("ic",iEntryCount); 
  }
  return oEntries;
}
function ur_CAL_Month_setFocusAttributes(obj,oCellObj) {
	
	var oEntries = oCellObj.entries;
	var oElem = oCellObj.ref;
	if (oEntries.length>0) {
	  oCellObj.ref.setAttribute("ic",new String(oEntries.length));
	}
	
	oCellObj.ref.setAttribute("week",oCellObj.ref.parentNode.firstChild.innerText);
	
	oElem.setAttribute("dayname",obj.ref.getElementsByTagName("TH")[oCellObj.ref.cellIndex].innerText);
	if (oElem.childNodes[0].className.indexOf("TOD")>-1) oElem.setAttribute("st","t");
	if (oElem.getElementsByTagName("IMG").length>0) oElem.setAttribute("more","1");
}
function ur_CAL_Month_getFocusedCell(obj) {
  var oLastCell  = null;
  if (obj.focusedElement && obj.focusedElement.tagName=="TD") {
    oLastCell = obj.focusedElement;
  } else {
		for (var i=0;i<obj.tabChain.length;i++) {
			if (obj.tabChain[i].navObj.ref==obj.focusedElement) {
			  break;
			}
			if (obj.tabChain[i].type=="CELL") {
			  oLastCell = obj.tabChain[i].navObj.ref;
			}
		}
	}
	return oLastCell;
}
function ur_CAL_Month_focusCellUp(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell) {
	  var iRow = oLastCell.parentNode.rowIndex;
	  var iCol = oLastCell.cellIndex;
	  if (iRow>1) {
			obj.focusedElement = obj.ref.getElementsByTagName("TR")[iRow-1].cells[iCol];
      ur_CAL_Month_focusElement( obj );
      ur_EVT_cancel(oEvt);
	  }
	}
}
function ur_CAL_Month_focusCellDown(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell) {
	  var iRow = oLastCell.parentNode.rowIndex;
	  var iCol = oLastCell.cellIndex;
	  if (iRow<oLastCell.parentNode.parentNode.rows.length) {
			obj.focusedElement = obj.ref.getElementsByTagName("TR")[iRow+1].cells[iCol];
      ur_CAL_Month_focusElement( obj );
      ur_EVT_cancel(oEvt);
	  }
	}
}
function ur_CAL_Month_focusCellNext(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell && oLastCell.nextSibling) {
		obj.focusedElement = oLastCell.nextSibling;
		ur_CAL_Month_focusElement( obj );
		ur_EVT_cancel(oEvt);
	}
}
function ur_CAL_Month_focusCellPrev(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell && oLastCell.previousSibling.previousSibling) {
		obj.focusedElement = oLastCell.previousSibling;
		ur_CAL_Month_focusElement( obj );
		ur_EVT_cancel(oEvt);
	}
}
function ur_CAL_Month_getTutorText(o,sTut) {
   var count = o.getAttribute("ic");
   if (!count) { 
     count="0";
     sTut="";
   }
   var sKey="SAPUR_CAL_MCELL";
   if (count=="1") {
     sKey+="_ONE";
     sTut = getLanguageText("SAPUR_CAL_MCELL_TUT");
   }
   if (o.getAttribute("more")) {
	   sTut += " " + getLanguageText("SAPUR_SEPARATOR") + " " + getLanguageText("SAPUR_CAL_MORE_TUT");
   }
   return sTut;
	   
}
function ur_CAL_Month_getCtText(o) {
   var sKey="SAPUR_CAL_MCELL";
   var count = o.getAttribute("ic");
   if (!count) { 
     count="0";
   }
   if (count=="1") {
     sKey+="_ONE";
   }
	 return "" +
	    o.getAttribute("dayname") + " " +
	    o.innerText + " " + 
			o.getAttribute("desc") + 
			" " + getLanguageText("SAPUR_SEPARATOR") +
			" " + getLanguageText(sKey, new Array(count)) +
			" " + getLanguageText("SAPUR_SEPARATOR") +
			" " +getLanguageText("SAPUR_DN_WEEK",new Array(o.getAttribute("week")));	
}
	  
function ur_CAL_Year_keydown(obj,oEvt) {
	var focusEntries=obj.focusEntries;
  if (!focusEntries) return;
	var o = document.activeElement;
	if (oEvt.keyCode==ur_KEYS.SPACE) {
	  
	} else if (oEvt.keyCode==ur_KEYS.UP) {
    var oPrevRow = null;
    for (var n=0;n<focusEntries.length;n++) {
      if (o==focusEntries[n].ref) {
				if (oPrevRow) {
				  sapUrMapi_focusElement(oPrevRow);
				}
				ur_EVT_cancel(oEvt);
				return;
      }
      if (focusEntries[n].row) {
        oPrevRow = focusEntries[n].ref;
      }
    }
  } else if (oEvt.keyCode==ur_KEYS.DOWN) {
    var oNextRow = null;
    for (var n=focusEntries.length-1;n>=0;n--) {
      if (o==focusEntries[n].ref) {
				if (oNextRow) {
				  sapUrMapi_focusElement(oNextRow);
				}
				ur_EVT_cancel(oEvt);
				return;
      }
      if (focusEntries[n].row) {
        oNextRow = focusEntries[n].ref;
      }
    }
  } else if (oEvt.keyCode==9 && !oEvt.ctrlKey) {
		if (o==obj.ref && (!oEvt.shiftKey)) {
			ur_EVT_cancel(oEvt);
			sapUrMapi_focusElement(focusEntries[0].ref);
		} else {
  		for (var n=0;n<focusEntries.length;n++) {
				if (o==focusEntries[n].ref && n<focusEntries.length-1 && (!oEvt.shiftKey)) {
					ur_EVT_cancel(oEvt);
					sapUrMapi_focusElement(focusEntries[n+1].ref);
				} else if (o==focusEntries[n].ref && n>0 && oEvt.shiftKey) {
					ur_EVT_cancel(oEvt);
					sapUrMapi_focusElement(focusEntries[n-1].ref);
				} else if (o!=obj.ref && n==0 && oEvt.shiftKey) {
					ur_EVT_cancel(oEvt);
					sapUrMapi_focusElement(obj.ref);
				} else if (o==focusEntries[focusEntries.length-1].ref && !oEvt.shiftKey){
					var oR=ur_get(obj.ref.id);
					var oN=null;
					var oF=null;
					while(oR!=null && oF==null){
						while(oR!=null && oR.nextSibling==null)
							oR=oR.parentNode;
						if(oR==null)
							break;				
						oN=oR.nextSibling;
						while(oN!=null && oF==null){
							oF=sapUrMapi_findFirstFocus(oN);
							if(oF==null)
								oN=oN.nextSibling;
						}
						if(oF==null)
							oR=oR.parentNode;
						else
							break;
					}
					if (oF) {
						ur_EVT_cancel(oEvt);
						sapUrMapi_focusElement(oF);
					}
				}
			}
		}
	}
}

//** CheckBox.ie5 **

function sapUrMapi_CheckBox_toggle(sId,e) {
	var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
 
	if ( ur_isSt(oImg,ur_st.READONLY) || ur_isSt(oImg,ur_st.DISABLED) ) return false;  
  
	if(ur_isSt(oImg,ur_st.SELECTED)){
		oIn.checked=false;
		ur_setSt(oImg,ur_st.SELECTED,false);
		ur_setSt(oImg,ur_st.NOTSELECTED,true);
		oImg.className=oImg.className.replace("On","Off");
  }
  
	else{
		oIn.checked=true;
		ur_setSt(oImg,ur_st.NOTSELECTED,false);
		ur_setSt(oImg,ur_st.SELECTED,true);
		oImg.className=oImg.className.replace("Off","On");
	}
	if (ur_system.is508) oImg.fireEvent("onactivate");
	return true;
}
function sapUrMapi_CheckBox_setDisabled(sId) {
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	if (ur_isSt(oImg,ur_st.DISABLED)) return;
	if(ur_isSt(oImg,ur_st.READONLY)){
		oImg.className=oImg.className.replace("Dsbl","");
		ur_setSt(oImg,ur_st.READONLY,false);
	}
	oLbl.className=oLbl.className.replace("Lbl","LblDsbl");
  if(ur_isSt(oImg,ur_st.SELECTED))
		oImg.className=oImg.className.replace("On","OnDsbl");
	else if(ur_isSt(oImg,ur_st.UNDEFINED))
		oImg.className=oImg.className.replace("Ind","IndDsbl");
	else
		oImg.className=oImg.className.replace("Off","OffDsbl");	
	if(ur_system.is508)
		sapUrMapi_setTabIndex(oLbl,"0");
  oIn.disabled=true;	
	ur_setSt(oImg,ur_st.DISABLED,true);
	sapUrMapi_Label_setDisabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_CheckBox_setEnabled(sId) {
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	oLbl.className=oLbl.className.replace("Dsbl","");
	oLbl.className=oLbl.className.replace("Ro","");
	oLbl.className=oLbl.className.replace("Inv","");
	oImg.className=oImg.className.replace("Dsbl","");
	oIn.disabled=false;
	ur_setSt(oImg,ur_st.DISABLED,false);
	ur_setSt(oImg,ur_st.READONLY,false);
	if(ur_system.is508)
		sapUrMapi_setTabIndex(oLbl,"-1");
	sapUrMapi_Label_setEnabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_CheckBox_setReadonly(sId,bSet){
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	if(bSet){
		if (ur_isSt(oImg,ur_st.READONLY)) return;
		if (ur_isSt(oImg,ur_st.DISABLED)){
			oLbl.className=oLbl.className.replace("Dsbl","");
			oImg.className=oImg.className.replace("Dsbl","");
			ur_setSt(oImg,ur_st.DISABLED,false);
		}
		if(ur_isSt(oImg,ur_st.SELECTED))
			oImg.className=oImg.className.replace("On","OnDsbl");
		else if(ur_isSt(oImg,ur_st.UNDEFINED))
			oImg.className=oImg.className.replace("Ind","IndDsbl");			
		else
			oImg.className=oImg.className.replace("Off","OffDsbl");	
		oIn.disabled=true;	
		ur_setSt(oImg,ur_st.READONLY,true);
		if(ur_system.is508)
			sapUrMapi_setTabIndex(oImg,"0");
	}
	else{
		if (!ur_isSt(oImg,ur_st.READONLY)) return;
		oLbl.className=oLbl.className.replace("Ro","");
		oIn.disabled=false;	
		ur_setSt(oImg,ur_st.READONLY,false);
		if(ur_system.is508)
			sapUrMapi_setTabIndex(oLbl,"-1");	
	}
	sapUrMapi_Label_setEnabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;
}
function sapUrMapi_CheckBox_setInvalid(sId) {
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	if (ur_isSt(oImg,ur_st.INVALID) || ur_isSt(oImg,ur_st.READONLY) || ur_isSt(oImg,ur_st.DISABLED))
		return;
	oLbl.className=oLbl.className.replace("Lbl","LblInv");
	
	ur_setSt(oImg,ur_st.INVALID,true);
	sapUrMapi_Label_setInvalid(sapUrMapi_Label_getInputLabel(sId),true);
	if(ur_system.is508)
		oLbl.st=oImg.st;	
}
function sapUrMapi_CheckBox_focus(sId,oEvt) {
	sapUrMapi_DataTip_show(sId,"focus");
}
function sapUrMapi_CheckBox_blur(sId,oEvt) {
	sapUrMapi_DataTip_hide(sId);
}
function sapUrMapi_CheckBox_keydown(sId,oEvt) {
	
	if(oEvt.keyCode==73 && oEvt.shiftKey && oEvt.ctrlKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		return ur_EVT_cancel(oEvt);
	}
	
	else if(oEvt.keyCode==27){
		sapUrMapi_DataTip_hide(sId);
		return ur_EVT_cancel(oEvt);
	}
	
	else if(oEvt.keyCode==32 && !oEvt.altKey && !oEvt.ctrlKey){
		var o=ur_EVT_src(oEvt);
		if(o) {
			o.click();
			ur_EVT_cancel(oEvt);
		}
	}
}

//** ColumnLayout.ie5 **
_ur_columnLayouts=new Array();
_ur_columnLayout=null;
var _ur_columnLayout_group = "";
var _ur_columnLayout_tooltip = "";
function ur_ColumnLayout_focusCell(oCell,obj,last) {
}
function ur_ColumnLayout_deactivate(oEvt) {
 	var oSource = ur_EVT_src( oEvt ),
 		obj = ur_ColumnLayout_getColumnLayoutFromDomRef( oSource );
	obj.bActive=false;
}  
function ur_ColumnLayout_getColumnLayoutFromDomRef(oDomRef) {
  var oDomRef = sapUrMapi_isChildOfControl( oDomRef , "CL" );
	if (!oDomRef) return;
	if ( !oDomRef.id ) {
		oDomRef.setAttribute("id","ur-cl-"+_ur_columnLayouts.length);
	}
  return ur_ColumnLayout_getObj(oDomRef.id);
}
function ur_ColumnLayout_keydown(oEvt) {
   	var oSource = ur_EVT_src( oEvt ),
 		obj = ur_ColumnLayout_getColumnLayoutFromDomRef( oSource );
  
  obj.iActiveIndex = 0;
  while (oSource && oSource.getAttribute && oSource.getAttribute("ct")!="CLC") {
		oSource = oSource.parentNode;	
  }
	if (!oSource || !oSource.getAttribute) return;
	
	obj.iActiveIndex = parseInt(oSource.getAttribute("cltabindex"));
  if( (oEvt.shiftKey && oEvt.ctrlKey && oEvt.keyCode==9) || (oEvt.shiftKey && oEvt.altKey && oEvt.keyCode==90) ||(oEvt.shiftKey && oEvt.keyCode==117) ) {
		var oCell = null,
			oSection = obj.aTabOrderCells[obj.iActiveIndex].oSection,
			iStartIndex = obj.iActiveIndex;
		if (!oSection || !oSection.aCells || oSection.aCells.length == 0) {
			sapUrMapi_skip(obj.ref.id,oEvt);
			return;
		}
		oCell = oSection.aCells[0];
		
		for (var i = obj.iActiveIndex; i >= 0; i--) {
			if (obj.aTabOrderCells[i].oCell == oCell) {
				obj.iActiveIndex = i;
				if (ur_ColumnLayout_focusPreviousElement( obj )) {
					ur_EVT_cancel(oEvt);
					return;
				} 
			}
		}
		sapUrMapi_skip(obj.ref.id, oEvt);
	} 
	
	else if ((oEvt.ctrlKey && oEvt.keyCode==9) || (oEvt.altKey && oEvt.keyCode==90) || (oEvt.keyCode==117) ) {
		var oCell = null,
			oSection = obj.aTabOrderCells[obj.iActiveIndex].oSection,
			iStartIndex = obj.iActiveIndex;
		if (!oSection || !oSection.aCells || oSection.aCells.length == 0) {
			sapUrMapi_skip(obj.ref.id,oEvt);
			return;
		}
		oCell = oSection.aCells[oSection.aCells.length-1];
		
		for (var i = obj.iActiveIndex; i < obj.aTabOrderCells.length; i++) {
			if (obj.aTabOrderCells[i].oCell == oCell) {
				obj.iActiveIndex = i;
				if (ur_ColumnLayout_focusNextElement(obj)) {
					ur_EVT_cancel(oEvt);
					return;
				}	
				
			}
		}
		sapUrMapi_skip(obj.ref.id,oEvt);
	}
	
}
function ur_ColumnLayout_activate(oEvt) {
 	var oSource = ur_EVT_src( oEvt ),
 		obj = ur_ColumnLayout_getColumnLayoutFromDomRef( oSource );
	
	if (oSource.getAttribute("fr")=="CLKEYEXIT") {
		if (oEvt.fromElement && obj.ref.contains(oEvt.fromElement)) {
			obj.iActiveIndex = obj.aTabOrderCells.length;
			obj.bActive=false;
			var o = ur_getNextFocusableElement(obj.ref);
			if (o) ur_focus(o);
		} else {
			obj.iActiveIndex = obj.aTabOrderCells.length;
			ur_ColumnLayout_focusPreviousElement(obj,null)
		}
	}
	if (oSource.getAttribute("fr")=="CLKEYENTER") {
		if (oEvt.fromElement && obj.ref.contains(oEvt.fromElement)) {
			obj.iActiveIndex = 0;
			obj.bActive=false;
			var o = ur_getPreviousFocusableElement(obj.ref);
			if (o) ur_focus(o);
		} else {
			obj.iActiveIndex = -1;
			ur_ColumnLayout_focusNextElement(obj,null)
		}
	} 
	if (ur_system.is508) {
		if (oSource.getAttribute("fr")=="CLKEYENTER") return;
		if (oSource.getAttribute("fr")=="CLKEYEXIT") return;
		
		var oCurrentSection = null;
		while (oSource && oSource.getAttribute && !oSource.getAttribute("sid")) {
			if (oSource == obj.ref) return;
			oSource = oSource.parentNode;
		}
		if (!oSource || !oSource.getAttribute || !oSource.getAttribute("sid")) return;
		var sSectionId = oSource.getAttribute("sid"),
			oCurrentSection = obj.aSectionNames[sSectionId],
			oParentSection = oCurrentSection.oParentSection,
			oLastParentSection = null,
			sSectionText = "";
		if (obj.oLastFocusedSection != oCurrentSection) {
			var aSections = [],
				sSeparatorText = "-";
	
			aSections.push(oCurrentSection);
			_ur_columnLayout_group = "";
			_ur_columnLayout_tooltip = "";
			
			
			while (oParentSection && (oLastParentSection != oParentSection)) {
				aSections.push(oParentSection);
				oParentSection  = oParentSection.oParentSection;
				if (oLastParentSection) {
					oLastParentSection  = oLastParentSection.oParentSection;
				}
			}
			
			for (var i = aSections.length-1;i>=0;i--) {
				if (aSections[i].ad) {
					if (sSectionText) sSectionText += " " + sSeparatorText + " ";
					sSectionText += aSections[i].ad;
				}
				if (aSections[i].tt) {
					if (_ur_columnLayout_tooltip) _ur_columnLayout_tooltip+=" " + sSeparatorText+" ";
					_ur_columnLayout_tooltip = aSections[i].tt;
				}
			}
	
			
			obj.oLastFocusedSection	= oCurrentSection;
			_ur_columnLayout_group = sSectionText;
				
		} 
	}
}
function ur_ColumnLayout_getObj(sId) {
	var oDomRef = ur_get(sId);
  if (!_ur_columnLayouts[ sId ] || _ur_columnLayouts[ sId ].ref != oDomRef) {
		var obj = new Array();
		
		obj.ref = oDomRef;
		oDomRef.attachEvent("onkeydown",ur_ColumnLayout_keydown);
		obj.oNavigationList = [];
	  
    
    var oHTMLSections = oDomRef.tHead.getElementsByTagName("SPAN");
    
		
    var aSectionNames = new Array(), 
				aSectionsList = new Array();
			i = 0, 
			oPreviousSection = null,
			oNextSection = null;
			
    for (var i = 0; i < oHTMLSections.length; i++) {
      oSection = { 
					ref:oHTMLSections[i],
				  sid:oHTMLSections[i].getAttribute("sid"),
				  sId:oHTMLSections[i].getAttribute("sid"),
				  pid:oHTMLSections[i].getAttribute("pid"),
				  sParentSectionId:oHTMLSections[i].getAttribute("pid"),
				  idx:i,
				  nextSection:null,
				  ad:oHTMLSections[i].getAttribute("ad"),
				  tt:oHTMLSections[i].getAttribute("tt")};
			oSection.previousSection = oPreviousSection;
			if (oSection.previousSection) {
				oSection.previousSection.nextSection = oSection;
			}
			oPreviousSection = oSection;
			aSectionsList.push(oSection);
			aSectionNames[oSection.sid] = oSection;
    }
		if (aSectionsList.length == 0) {
			
			var aTableRows = oDomRef.rows;
			for (var iRows = 1; iRows < aTableRows.length; iRows++) {
				var aTableCells = aTableRows[iRows].cells;
				for (var iCells = 0; iCells < aTableCells.length; iCells++) {
					var oCell = aTableCells[iCells].setAttribute("sid","ur-pseudosection");
				}
			}
			aSectionNames["ur-pseudosection"] = {sId:"ur-pseudosection",sParentSectionId:""};
			aSectionsList.push(aSectionNames["ur-pseudosection"]);
		}
    obj.aSectionNames = aSectionNames;
    obj.aSectionsList = aSectionsList;
    
    
		for ( var iSections = 0; iSections < obj.aSectionsList.length; iSections++ ) {
			var oSection = obj.aSectionsList[ iSections ];
			if ( oSection.sParentSectionId ) {
				var oParentSection = obj.aSectionNames[oSection.sParentSectionId];
				oSection.oParentSection = oParentSection;
			}
		}
		var aTableRows = oDomRef.rows;
		
		for ( var iSections = 0; iSections < obj.aSectionsList.length; iSections++ ) {
			var iSectionsTabIndex = 0,
				oSection = obj.aSectionsList[ iSections ];
			
			for (var iRows = 1; iRows < aTableRows.length; iRows++) {
				var aTableCells = aTableRows[iRows].cells;
				for (var iCells = 0; iCells < aTableCells.length; iCells++) {
					var oTableCell = aTableCells[iCells],
						sCellSectionId = oTableCell.getAttribute("sid");
					 
					if (oSection.sId == sCellSectionId) {
						
						iSectionsTabIndex++;
						if ( !oSection.aCells ) oSection.aCells = [];
						oSection.aCells.push(oTableCell);
					} else {
						
						oTempSection = obj.aSectionNames[sCellSectionId];
						while (oTempSection && oTempSection.oParentSection && !oTempSection.bChecked) {
							if (oTempSection.oParentSection.sId == oSection.sId) {
								if ( !oSection.aCells ) oSection.aCells = [];
								oSection.aCells.push(oTempSection);
								
								oTempSection.bChecked = true;
							}
							oTempSection = oTempSection.oParentSection;
						}
					}
				}
			}
		}
		
		obj.iIndexCounter = 0;
		
		for ( var iSections = 0; iSections < obj.aSectionsList.length; iSections++ ) {
			var oSection = obj.aSectionsList[ iSections ];
			ur_ColumnLayout_buildCellTabIndex(obj,oSection);
		}
    _ur_columnLayouts[sId] = obj;
		
		var aTDs = oDomRef.cells;
		for (var i = 0; i < aTDs.length; i++) {
			var oTD = aTDs[i];
			
			
			if (oTD.getAttribute("ct") != "CLC") continue;
			var oStart = oTD.firstChild;
			var oEnd = oTD.lastChild;
			oStart.attachEvent("onfocus",ur_ColumnLayout_focus);
			sapUrMapi_setTabIndex(oStart,"0");
			oEnd.attachEvent("onfocus",ur_ColumnLayout_focusOut);
			sapUrMapi_setTabIndex(oEnd,"0");
		}
  } 
  return _ur_columnLayouts[sId];
}
function ur_ColumnLayout_buildCellTabIndex(obj, oSection) {
	
	
	if (oSection.bProcessed) return;
	
	
	oSection.bProcessed = true;
	
	
	if (!oSection.aCells) return;
	
	
	if (!obj.aTabOrderCells) obj.aTabOrderCells = [];
	
	
	for (var iCells = 0; iCells < oSection.aCells.length; iCells++) {
		var oCell = oSection.aCells[iCells];
		
		if (oCell.tagName) {
			
			
			
			oCell.setAttribute("cltabindex",obj.iIndexCounter);
			obj.aTabOrderCells.push({oCell:oCell,oSection:oSection});
			obj.iIndexCounter++;
		} else {
			
			var oSubSection = oCell;
			
			ur_ColumnLayout_buildCellTabIndex(obj,oSubSection);
		}
	}
}
function ur_ColumnLayout_focusPreviousElement(obj,oEvt) {
	if (oEvt) obj.iActiveIndex = parseInt(oEvt.srcElement.parentNode.getAttribute("cltabindex"));
	var iActiveIndex = obj.iActiveIndex;
	
	obj.iActiveIndex--;
	
	if (obj.iActiveIndex <0) {
		return false;
	}
	
	var	oCell = obj.aTabOrderCells[obj.iActiveIndex].oCell;
	obj.oActiveSection = obj.aTabOrderCells[obj.iActiveIndex].oSection;
	var oFirstFocus=ur_ColumnLayout_findFirstFocus(oCell,true);
	if (!oFirstFocus) {
		
		var bFoc = ur_ColumnLayout_focusPreviousElement(obj);
		if (!bFoc) {
			var o = ur_getPreviousFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return true;
		}
	} else {
		ur_focus(oFirstFocus);
	}
	return true;
	
}
function ur_ColumnLayout_focusNextElement(obj, oEvt) {
	if (oEvt) obj.iActiveIndex = parseInt(oEvt.srcElement.parentNode.getAttribute("cltabindex"));
	var iActiveIndex = obj.iActiveIndex;
	obj.iActiveIndex++;
	
	if (obj.iActiveIndex >= obj.aTabOrderCells.length) {
		return false;
	}
	
	var	oCell = obj.aTabOrderCells[obj.iActiveIndex].oCell;
	obj.oActiveSection = obj.aTabOrderCells[obj.iActiveIndex].oSection;
	var oFirstFocus=ur_ColumnLayout_findFirstFocus(oCell);
	if (!oFirstFocus) {
		var bFoc = ur_ColumnLayout_focusNextElement(obj);
		if (!bFoc) {
			var o = ur_getNextFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return true;
		}
	} else {
		ur_focus(oFirstFocus);
	}
	return true;
}
function ur_ColumnLayout_findFirstFocus(o,bLast) {
	var oChild=o;
  if (o==null) return null;
  
  
  if (ur_system.direction=="rtl" || bLast) {
   	for (var i=oChild.childNodes.length-1;i>=0;i--) {
      var oTmp=oChild.childNodes.item(i);
			if (sapUrMapi_Focus_canFocus(oTmp) && !(oTmp.getAttribute("fr")=="CLCS" || oTmp.getAttribute("fr")=="CLCE")) {
				return oTmp;
      }
      var oTmp=ur_ColumnLayout_findFirstFocus(oTmp,bLast);
      if (oTmp!=null) {
        return oTmp;
      }
    }  
  } else {    
    for (var i=0;i<oChild.childNodes.length;i++) {
      var oTmp=oChild.childNodes.item(i);
			if (sapUrMapi_Focus_canFocus(oTmp) && !(oTmp.getAttribute("fr")=="CLCS" || oTmp.getAttribute("fr")=="CLCE")) {
				return oTmp;
      }
      var oTmp=ur_ColumnLayout_findFirstFocus(oTmp);
      if (oTmp!=null) {
        return oTmp;
      }
    }  
  }
  return null;
}
function ur_ColumnLayout_focus(oEvt) {
		var oSource = oEvt.srcElement,
		obj = ur_ColumnLayout_getColumnLayoutFromDomRef(oSource),
		bFocused = false;
		bFocused = ur_ColumnLayout_focusPreviousElement(obj,oEvt);
		if (!bFocused) {
 			obj.bActive=false;
			var o = ur_getPreviousFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return;
 		}
}
function ur_ColumnLayout_focusOut(oEvt) {
	var oSource = oEvt.srcElement,
		obj = ur_ColumnLayout_getColumnLayoutFromDomRef(oSource),
		bFocused = false;
	bFocused = ur_ColumnLayout_focusNextElement(obj,oEvt);
 	if (!bFocused) {
 			obj.bActive=false;
 			var o = ur_getNextFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return;
 	}
}
//** ComboBox.ie5 **

var oComboBoxListLoadEvent=null;
function ur_ComboBox_fireBeforeListLoad(sId,sListId,oEvt){
	var o=sapUrMapi_ComboBox_getObject(sId);
  var sFunc=o.main.getAttribute("onbll");	
  if(sFunc && sFunc.indexOf("UR_NotHandled")<0){
  	
	  oComboBoxListLoadEvent= new Object();
	  oComboBoxListLoadEvent.type=oEvt.type;
	  oComboBoxListLoadEvent.keyCode=oEvt.keyCode;
	  oComboBoxListLoadEvent.altKey=oEvt.altKey;
	  oComboBoxListLoadEvent.ctrlKey=oEvt.ctrlKey;
	  oComboBoxListLoadEvent.srcElement=oEvt.srcElement;
  	
		o.main.fBefListLoad = new Function("event",sFunc);
		o.main.fBefListLoad(oEvt);
  }
  else return false;
  return true;
} 
function sapUrMapi_ComboBox_getObject(sId) {
	var o=new Object();
	var sLblFor="";
	o.main=ur_get(sId+"-r");
	o.txt=ur_get(sId);
	o.isdd=o.txt.getAttribute("tp")=="DD";
	o.isro=ur_isSt(sId,ur_st.READONLY);
	o.isdsbl=ur_isSt(sId,ur_st.DISABLED);
	o.isinv=ur_isSt(sId,ur_st.INVALID);
	o.isreq=ur_isSt(sId,ur_st.REQUIRED);	
	o.key=o.txt.getAttribute("k");
	o.vt=o.txt.getAttribute("vt")=="true";
	o.lid=o.txt.getAttribute("lid");
	o.open=o.txt.getAttribute("op")=="true";
	o.f4always=o.txt.getAttribute("f4always")=="true";	
	sLblFor=o.txt.getAttribute("f");
	if(sLblFor!=null && sLblFor!="")
		o.lblFor=ur_get(sLblFor);
	else
		o.lblFor=null;
	return o;
}
function sapUrMapi_ComboBox_registerCreate(sId,sListId,sWidth){
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_ComboBox_setWidth('"+sId+"','"+sListId+"','"+sWidth+"')");
}
var aCoB=new Array();
aCoB["oEvt"]="focus";
var aCoBWidth=new Array();
function sapUrMapi_ComboBox_setWidth(sId,sListId,sWidth){
	if(sWidth!="") return;
	var o=ur_get(sId);
	var oL=ur_get(sListId+"-r");
	if(oL==null) return;
	sapUrMapi_ItemListBox_setDim( sListId, "10px" );
	aCoB[aCoB.length]=o;
	oL=ur_get(sListId);
	aCoBWidth[aCoBWidth.length]=oL.offsetWidth;
	sapUrMapi_Create_AddItem("CoB", "sapUrMapi_ComboBox_set()",true);
}
function sapUrMapi_ComboBox_set(){
	for(var i=0; i<aCoB.length; i++)
		if(aCoB[i]!=null && typeof(aCoB[i])=="object")
			aCoB[i].style.width=parseInt(aCoBWidth[i]);
}
function sapUrMapi_ComboBox_addClass(sId,sClass,bSetIt) {
  var o=sapUrMapi_ComboBox_getObject(sId);
  var bInTbl=o.main.parentNode.className.indexOf("STTD")>=0;
  
	if (o.txt.className.indexOf(sClass)==-1 && bSetIt){
		o.txt.className=o.txt.className+" "+sClass; 
		if(bInTbl) o.main.className=o.main.className+" "+sClass;
	}
	else if(o.txt.className.indexOf(sClass)>=0 && !bSetIt){
		o.txt.className=o.txt.className.replace(" "+sClass,"");
		if(bInTbl) o.main.className=o.main.className.replace(" "+sClass,"");
	}
	return o;
}
function sapUrMapi_ComboBox_mousedown(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	if(e.button!=1 && o.open) return;
  o.txt.setAttribute("noblur","true");
  aCoB["srcE"]=e.srcElement.tagName;
  aCoB["oEvt"]="click";
  aCoB["dd"]=o.isdd;
}
function sapUrMapi_ComboBox_triggerClick(sId) {
	if(!oComboBoxListLoadEvent || oComboBoxListLoadEvent.type=="click" ||
	   (oComboBoxListLoadEvent.altKey && (oComboBoxListLoadEvent.keyCode==40||oComboBoxListLoadEvent.keyCode==38)) ||
	   oComboBoxListLoadEvent.keyCode==115){
		ur_callDelayed("sapUrMapi_ComboBox_click('"+sId+"')",0);
	}
	else if(oComboBoxListLoadEvent.type=="keydown"){
		ur_callDelayed("sapUrMapi_ComboBox_keydown('"+sId+"')",0);		
	}
	else if(oComboBoxListLoadEvent.type=="keypress"){
		ur_callDelayed("sapUrMapi_ComboBox_keypress('"+sId+"')",0);		
	}	
}
function sapUrMapi_ComboBox_click(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	
	if (o.isdsbl || (o.isro && !o.f4always)) return;	
	
	
	if (e==null || o.isdd || e.type=="keydown" || ur_EVT_src(e).className.indexOf("urCoB2Btn")>=0) {
	  if (!o.open) 
			sapUrMapi_ComboBox_showList(sId,e);
		else{
			sapUrMapi_ComboBox_hideList(sId);
			if(o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",true);			
		}
		if(e==null || ur_EVT_src(e).className.indexOf("urCoB2Btn")>=0) 
			ur_focus(o.txt);
	}
  o.txt.setAttribute("noblur","false");
  if(!e){
  	oComboBoxListLoadEvent=null;
  	return;
  }
  else{
  	return ur_EVT_cancel(e);
  }
}
function sapUrMapi_ComboBox_focusDdlb(sId,e) { 
	var o=sapUrMapi_ComboBox_getObject(sId);
	aCoB["dd"]=o.isdd;
	
	ur_setEditCellColor(o.txt);
    if(aCoB["dd"]=="true"){
	if (!o.open && aCoB["oEvt"]=="focus") sapUrMapi_DataTip_show(sId,"focus");
	}else{
		if (!o.open && aCoB["srcE"]!="BUTTON") sapUrMapi_DataTip_show(sId,"focus");
	}
	aCoB["oEvt"]="focus";
	aCoB["srcE"]="";
	
	if (ur_system.is508 && o.txt.getAttribute("nav")!="true")
		if (o.isdsbl) return;
	o.txt.setAttribute("noblur","false");
	o.txt.setAttribute("nav","true");	
	if(!o.isdd) return;
	if (o.open) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
	else sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",true);
  return ur_EVT_cancel(e);
}
var oComboBoxSCTimer=null;
var oComboBoxSCEvent=null;
function sapUrMapi_ComboBox_prepareFireSelectionChange(o, oEvt){
	
  if(o.txt.getAttribute("ks")==o.txt.getAttribute("k") && o.txt.getAttribute("vs")==o.txt.value) 
		return false;
  
  
  if((oEvt.type=="keydown" || oEvt.type=="keypress") && o.open) 
		return true;
		
	
	if(o.txt.getAttribute("k") == o.txt.getAttribute("ks") && o.txt.getAttribute("vs")!=o.txt.value){
		o.txt.setAttribute("k", "");
	}
				
  
  oComboBoxSCEvent = document.createEventObject( oEvt);
		
	
	if(oComboBoxSCTimer) clearTimeout(oComboBoxSCTimer);  
  if(oEvt.type=="click" || oEvt.type=="blur" || oEvt.keyCode==ur_KEYS.ENTER) { 
		sapUrMapiComboBox_fireSelectionChange(o, oEvt);
	}
	
	else{	
	var sId=o.txt.id;
    	oComboBoxSCTimer=setTimeout("sapUrMapiComboBox_fireSelectionChange(\""+sId+"\")",500);  	                 
    }
    
  return true;
}
function sapUrMapiComboBox_fireSelectionChange(o, oEvt){
	
	if(typeof(o)=="string"){
		o=sapUrMapi_ComboBox_getObject(o);
	}
	
	
	if(o.lblFor!=null){
		o.lblFor.setAttribute("lbl",o.txt.value);	
  }
  
  
  o.txt.setAttribute("vs",o.txt.value);
  o.txt.setAttribute("ks",o.txt.getAttribute("k"));
    
  
  var sFunc=o.main.getAttribute("onsc");
  if(sFunc){
		o.main.fSelCh = new Function("event",sFunc);
		o.main.fSelCh(oComboBoxSCEvent);
  }
}
function sapUrMapi_ComboBox_blurDdlb(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	
	ur_removeEditCellColor();
	
	if (o.isdsbl) {sapUrMapi_DataTip_hide(sId);return;}
	if(o.txt.getAttribute("noblur")=="true" || (oPopup!=null && oPopup.frame.window.mover && o.open)){
		o.txt.setAttribute("noblur","false");
		ur_focus(o.txt);
		return ur_EVT_cancel(e);
	}
	
	if (o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
	if (oPopup!=null && o.open) sapUrMapi_ComboBox_hideList(sId);
	if (oPopup!=null && !o.open) sapUrMapi_DataTip_hide(sId);
	sapUrMapi_ComboBox_prepareFireSelectionChange(o,e);
	if (ur_system.is508)
		o.txt.setAttribute("nav","false");
	return ur_EVT_cancel(e);
}
function sapUrMapi_ComboBox_setReadonly(sId,bReadonly) {
  var o=ur_get(sId);
  if(bReadonly && ur_isSt(o,ur_st.READONLY)) return;
  ur_setSt(o,ur_st.READONLY,bReadonly);
  if(bReadonly)
		o.className+=" urCoB2Ro";
	else
		o.className=o.className.replace(" urCoB2Ro","");
  o.readOnly=bReadonly;
}
function sapUrMapi_ComboBox_setDisabled(sId,bSet) {
  var o=ur_get(sId);
  var oBtn=o.nextSibling.firstChild;
  if(bSet && ur_isSt(o,ur_st.DISABLED)) return;
  ur_setSt(o,ur_st.DISABLED,bSet);
  if(bSet){
		o.className+=" urCoB2Dsbl";
		oBtn.className="urCoB2BtnDsbl";
	}
	else{
		o.className=o.className.replace(" urCoB2Dsbl","");
		oBtn.className="urCoB2Btn";
	}
  o.readOnly=bSet;
}
function sapUrMapi_ComboBox_setInputState(sId,sInputState) {
  var o=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
	sapUrMapi_Label_setInputState(oLbl,sInputState);
  if (sInputState == 'ERROR') {
    if (ur_isSt(o,ur_st.INVALID)) return;
    ur_setSt(o,ur_st.WARNING,false);
    ur_setSt(o,ur_st.INVALID,true);
		o.className=o.className.replace(" urCoB2Warn","");
		o.className+=" urCoB2Inv";
  } else if (sInputState == 'WARNING'){
    if (ur_isSt(o,ur_st.WARNING)) return;
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.WARNING,true);
		o.className=o.className.replace(" urCoB2Inv","");
		o.className+=" urCoB2Warn";
  } else {
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.ERROR,false);
		o.className=o.className.replace(" urCoB2Inv","");
		o.className=o.className.replace(" urCoB2Warn","");
  }
}
function sapUrMapi_ComboBox_setInvalid(sId,bInvalid) {
  if (bInvalid) sapUrMapi_ComboBox_setInputState(sId,"ERROR");
  else sapUrMapi_ComboBox_setInputState(sId,"NONE");
}
var sUrComboBox_virtualTyping="";
function sapUrMapi_ComboBox_keydown(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	var bListLoaded=false;
	
	
	if(!e){
		e=oComboBoxListLoadEvent;
		bListLoaded=true;
	}
	
	
	if(e.keyCode==73 && e.ctrlKey && e.shiftKey && !e.altKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		return ur_EVT_cancel(e);
	}
	
	
	if (o.isdsbl || (o.isro && !o.f4always)) return;
	
	
	if (e.keyCode==9) {
		if(o.open) sapUrMapi_ItemListBox_selectHoveredItem(o.lid, oPopup.frame.window.document,e);
		if (o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
		if (oPopup!=null && o.open) sapUrMapi_ComboBox_hideList(sId);
		return;
	}
	
	
	if( (e.altKey && (e.keyCode==40||e.keyCode==38)) || e.keyCode==115 ){
		sapUrMapi_ComboBox_click(sId,e);
		if(bListLoaded){
			oComboBoxListLoadEvent=null;
			return;
		}
		else{
			return ur_EVT_cancel(e);
		}
	}
	
	
	if(e.keyCode==40 || e.keyCode==38 || e.keyCode==35 || e.keyCode==36){
		if(o.open) sapUrMapi_ItemListBox_keydown(o.lid, oPopup.frame.window.document, e );
		else{
			
			if(!bListLoaded){
				if(ur_ComboBox_fireBeforeListLoad(sId,o.lid,e)) 
					return ur_EVT_cancel(e);
			}
			sapUrMapi_ItemListBox_setParentId(o.lid, sId);
			sapUrMapi_ItemListBox_setSelectedKey(o.lid,o.key,document,false);
			sapUrMapi_ItemListBox_keydown(o.lid, document, e );
		}		
		if(bListLoaded){
			oComboBoxListLoadEvent=null;
			return;
		}
		else{
			return ur_EVT_cancel(e);
		}
	}
	
	if (e.keyCode==37 || e.keyCode==39)
	{		
        if(!o.isdd)
		    {
			   return ur_EVT_cancelBubble(e);
			}
	}
	
	
  if (e.keyCode==27 && o.open) {
		o.txt.value=o.txt.getAttribute("vs");
		o.txt.setAttribute("k",o.txt.getAttribute("ks"));
  	sapUrMapi_ComboBox_hideList(sId);
  	sapUrMapi_ComboBox_focusDdlb(sId,e);
  	return ur_EVT_cancel(e);
  }
  else if (e.keyCode==27 && !o.open) 
		sapUrMapi_DataTip_hide(sId);
  
  
  if (e.keyCode==13 && o.open) { 
		sapUrMapi_ItemListBox_selectHoveredItem(o.lid, oPopup.frame.window.document,e);
  	sapUrMapi_ComboBox_hideList(sId);
  	o.open=false;
  	
  	if(!sapUrMapi_ComboBox_prepareFireSelectionChange(o, e)) return;
		if(ur_system.is508) o.txt.setAttribute("noblur","true");  	
  	return ur_EVT_cancel(e);
  }
  else if (e.keyCode==13 && !o.isdd){
    		sapUrMapi_ComboBox_prepareFireSelectionChange(o, e);
}
}
function sapUrMapi_ComboBox_keypress(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	var sKey="";
	var sNewKey=""; 
	
	
	if (!o.isdd){
		o.txt.setAttribute("k","");
		
		if(o.open){
			var sSearch=o.txt.value+String.fromCharCode(e.keyCode);
			sNewKey=sapUrMapi_ItemListBox_findItem(o.lid,sSearch,sKey,document);
			if(sNewKey){
				sapUrMapi_ItemListBox_setSelectedKey(o.lid,sNewKey,oPopup.frame.window.document,true);
			}
		}
	}
	
	
	else{
	var bListLoaded=false;
		sKey=o.txt.getAttribute("k");
	
	if(!e){
		e=oComboBoxListLoadEvent;
		bListLoaded=true;
	}
	
	if(!bListLoaded && !o.open){
		if(ur_ComboBox_fireBeforeListLoad(sId,o.lid,e)){ 
			return ur_EVT_cancel(e);
		}
	}
	if (o.vt) sapUrMapi_ComboBox_initVirtualTyping(sId);
	var sSearch=String.fromCharCode(e.keyCode);
	if (!o.vt) sUrComboBox_virtualTyping=sSearch;
	else sUrComboBox_virtualTyping+=sSearch;
		sNewKey=sapUrMapi_ItemListBox_findItem(o.lid,sUrComboBox_virtualTyping,sKey,document);
 		if(sNewKey){
			sapUrMapi_ComboBox_setValue(sId,sNewKey,sapUrMapi_ItemListBox_getVal(o.lid,sNewKey),null,e);	
 		}
	if(o.open){
	  o=sapUrMapi_ComboBox_getObject(sId);
	  sapUrMapi_ItemListBox_setSelectedKey(o.lid,o.key,oPopup.frame.window.document,true);
	}	  	
	oComboBoxListLoadEvent=null;
}
}
var oVTTimer=null;
function sapUrMapi_ComboBox_initVirtualTyping(sid) {
  if (oVTTimer!=null) clearTimeout(oVTTimer); 
 	oVTTimer=ur_callDelayed("sapUrMapi_ComboBox_endVirtualTyping(\""+sid+"\");",250);
 }
 
 
function sapUrMapi_ComboBox_endVirtualTyping(sid) {   
   sUrComboBox_virtualTyping="";                        
   clearTimeout(oVTTimer);                              
   oVTTimer=null;                                       
   var o=sapUrMapi_ComboBox_getObject(sid);      
   var e=document.createEventObject(ur_get(sid));           
   e.type = "endVT";                             
   sapUrMapi_ComboBox_prepareFireSelectionChange(o, e); 
 }
function sapUrMapi_ComboBox_showList(sId,oEvt) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	var oIlb;
	var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
	
	if(oEvt!=null){ 
		if(ur_ComboBox_fireBeforeListLoad(sId,o.lid,oEvt))
			return ur_EVT_cancel(oEvt);
	}
	
	
	if(!o.lid || !ur_get(o.lid+"-r")){
		return;
	}
	
	o.open=o.txt.setAttribute("op","true");
  if (o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
  	
	
	clearTimeout(_ur_DataTip_timer);
	
	
	sapUrMapi_ItemListBox_setParentId(o.lid, sId);
	oIlb=sapUrMapi_ItemListBox_getObject(o.lid,document,null);
	sapUrMapi_ItemListBox_setDim(o.lid, o.main.offsetWidth);
	sapUrMapi_ItemListBox_setReadonly(oIlb,o.isro);	
	oPopup = new sapPopup(window,arrUrls,ur_get(o.lid+"-r"),ur_get(sId),oEvt,0);
	oPopup.size.height=oIlb.box.offsetHeight;
	oPopup.size.width=oIlb.box.offsetWidth;
	oPopup.sizebehaviour=sapPopupSizeBehavior.USER;
	if (ur_system.direction=="rtl") oPopup.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
	else oPopup.positionbehavior = sapPopupPositionBehavior.MENULEFT;	
	oPopup.show(true);
	if(!o.isro) sapUrMapi_ItemListBox_setSelectedKey(o.lid,o.key,oPopup.frame.window.document,true);
	 sapUrMapi_DBTN_hideDBtn(); 
	}
function sapUrMapi_ComboBox_hideList(sId) {
  var o=sapUrMapi_ComboBox_getObject(sId);
	o.txt.setAttribute("op","false");
	o.txt.setAttribute("noblur","false");
	if (oPopup) oPopup.hide();
	sapUrMapi_DBTN_showDBtn();
}
function sapUrMapi_ComboBox_setValue(sId,sKey,sValue,sImgSrc,oEvt) {
  var o=sapUrMapi_ComboBox_getObject(sId);
  if(!o.isro && !o.isdsbl && sKey!=null && (o.txt.ks!=sKey || o.txt.k!=sKey)){
		
			o.txt.setAttribute("k",sKey);
			o.txt.value=sValue;
			if (sImgSrc!="" && sImgSrc!=null)
  			if (sImgSrc.indexOf("url(")!=0 && sImgSrc.length>0) o.txt.style.backgroundImage="url("+sImgSrc+")";
  			else o.txt.style.backgroundImage=sImgSrc;
		
		sapUrMapi_ComboBox_prepareFireSelectionChange(o,oEvt);
  }
  
  
  if (oEvt!=null && oEvt.type=="click"){
		sapUrMapi_ComboBox_hideList(sId);
		ur_focus(o.txt);
	}
	
	else if (ur_system.is508){
		o.txt.setAttribute("noblur","true");
		sapUrMapi_refocusElement(o.txt.id);
  }
}
function sapUrMapi_ComboBox_getSelectedKey(sId) {
  var o=sapUrMapi_ComboBox_getObject(sId);
  return o.txt.getAttribute("k");
}
function sapUrMapi_ComboBox_getSelectedValue(sId) {
  var o=sapUrMapi_ComboBox_getObject(sId);
	return o.txt.value;
}

//** ContextualPanel.ie5 **

function ur_CXP_cl(sId,oEvt){
}
function ur_CXP_kd(sId,oEvt)
{
	return sapUrMapi_skip(sId,oEvt)
}
function ur_CXP_expand(sId,oEvt)
{
	ur_EVT_cancelBubble(oEvt);
	var elBody = ur_get(sId); 
	if ( elBody != null && elExp != null )
	{
		if ( elBody.style.display == "none" )
		{
			elBody.style.display = "block";
			ur_setSt(elBody,ur_st.COLLAPSED,false);
			ur_setSt(elBody,ur_st.EXPANDED,true);
		} 
		else
		{
			elBody.style.display = "none";
			ur_setSt(oSkip,ur_st.COLLAPSED,true);
			ur_setSt(oSkip,ur_st.EXPANDED,false);
		}
	}
	return true;
}
function ur_CXP_collapse(sId,oEvt)
{
}

//** DataTip.ie5 **

var _ur_DataTip=new Object();
_ur_DataTip.hover=false;
_ur_DataTip.leave=false;
_ur_DataTip.label_leave=false;
_ur_DataTip.time_out=0;
function ur_Dt_mouseover(){
	clearTimeout(_ur_DataTip_timer);
	_ur_DataTip.hover=true;
}
function ur_Dt_mouseleave(){
	clearTimeout(_ur_DataTip_timer);
	_ur_DataTip.leave=true;
	if (!oPopup || !oPopup.source || !oPopup.source.object) return;
	var sId=oPopup.source.object.id.split("-")[0];
	sapUrMapi_DataTip_hide(sId);
}
var _ur_DataTip_timer;
function sapUrMapi_DataTip_getText(sId) {
	var oDTText = ur_get(sId+"-dtip"),
		sTxt = oDTText.firstChild.firstChild.innerText + " "+oDTText.firstChild.lastChild.innerText;
	return sTxt;
}
enumUrDataTipType = {ERROR:"Error",WARNING:"Warning",OK:"Ok",TEXT:"Text"};
function sapUrMapi_DataTip_getType(sId) { 
	var oDTTyp  = ur_get(sId+"-dtip");
	oDTTyp = oDTTyp.firstChild.firstChild.firstChild;
	if (typeof(oDTTyp.className)=="undefined")return enumUrDataTipType.TEXT;
    else if ((oDTTyp.className).indexOf(enumUrDataTipType.ERROR)>-1) return enumUrDataTipType.ERROR;
    else if ((oDTTyp.className).indexOf(enumUrDataTipType.WARNING)>-1) return enumUrDataTipType.WARNING;
    else if ((oDTTyp.className).indexOf(enumUrDataTipType.OK)>-1) return enumUrDataTipType.OK;
  }
function sapUrMapi_DataTip_isOpen(sId){
	var oDT = ur_get(sId+"-dtip");
	if(oDT!=null)
	return (oDT.getAttribute("op")=="true");
}
function sapUrMapi_DataTip_show(sId,sEvtType) {
	var bShow=false;
	oDataTip = ur_get(sId+"-dtip");
	if (oDataTip==null) return;
	var bAf=((oDataTip.getAttribute("af")!=null) && (oDataTip.getAttribute("af")=="a"));
	var bAff=((oDataTip.getAttribute("af")!=null) && (oDataTip.getAttribute("af")=="f"));
	
	var iTo=0;
	if ((oDataTip.getAttribute("to")!=null) && (oDataTip.getAttribute("to")!="")) {
	  iTo=parseInt(oDataTip.getAttribute("to"));
	}
	
	
	if (typeof(sEvtType)=="undefined" || sEvtType=="") {
	  bShow=true;
	}
	else if (sEvtType=="keydown") {
	  bShow=true;
	  iTo=0;
	}
	else if (sEvtType=="focus") {
	  if (bAf) bShow=true;
	  if ((bAff) && (oDataTip.getAttribute("first")==null || oDataTip.getAttribute("first")=="")) {
	    bShow=true;
		oDataTip.setAttribute("first","true");
	  } else {
	    if (!bAf) iTo=0;
	  }
	}
	else if(sEvtType=="mousemove"){
		bShow=true;
		iTo=-1;
	}
	if (bShow) {
		var oDT = ur_get(sId+"-dtip");
		oDT.open = oDT.setAttribute("op", "true");
		var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
		sTriggerId=sId;
		oTrg=ur_get(sId);
		sCt=sapUrMapi_getControlType(sId);
		if (sCt=="R" || sCt=="C" || sCt=="TRI") {
		  oTrg=oTrg.nextSibling;
		}
		oPopup = new sapPopup(window,arrUrls,ur_get(sId+'-dtip'),oTrg,sEvtType,0);
		if (ur_system.direction=="rtl") oPopup.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
		else sapPopupPositionBehavior.MENULEFT;	
		oPopup.show(true);
		if(iTo==-1){
			oPopup.frame.window.document.body.attachEvent("onmouseover",ur_Dt_mouseover);
			oPopup.frame.window.document.body.attachEvent("onmouseleave",ur_Dt_mouseleave);
		}
	}
	if (iTo>0) {
	 _ur_DataTip_timer = ur_callDelayed("sapUrMapi_DataTip_hide(\""+sId+"\")",iTo*1000);
	}
}
function sapUrMapi_DataTip_hide(sId) {
	var oDT = ur_get(sId+"-dtip");
	
	if(oDT==null) return;
	if(oDT.getAttribute("op")!="true") return; 
	clearTimeout(_ur_DataTip_timer);
	if ((oPopup!=null && _ur_DataTip.hover==false)||(oPopup!=null && _ur_DataTip.leave==true)){
		oPopup.frame.window.document.body.detachEvent("onmouseover",ur_Dt_mouseover);
		oPopup.frame.window.document.body.detachEvent("onmouseleave",ur_Dt_mouseleave);
		oPopup.hide();
		_ur_DataTip.hover=false;
		_ur_DataTip.leave=false;
		
	var oInput = ur_get(sId+"-r");
		if(oInput!=null){
		  if(oInput.getAttribute("evt")!=null){
			oInput.detachEvent("onmouseover",ur_L_mm);
			oInput.detachEvent("onmouseout",ur_L_ml);
			oInput.removeAttribute("evt");
		  }
		}
		oDT.setAttribute("op", "false");
	}
}

//** DateNavigator.ie5 **

function ur_DateNavigator_getMonthHdr(o){
  try {
	  return o.firstChild.firstChild.firstChild.cells[1].firstChild;
	} catch (ex) {
	  return null;
	}
} 
function ur_DateNavigator_getMonth(o){
	while(o.tagName!="TABLE")
		o=o.parentNode;
	return o.parentNode;  
      }
function ur_DateNavigator_focusNextMonth(o){
	var oThis=ur_DateNavigator_getMonth(o);
	var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
	if (!oThisHdr) return false;
	var oPrev=null;
	var oPrevHdr=null;
	if(oThisHdr && oThisHdr.parentNode.nextSibling && oThisHdr.parentNode.nextSibling.className.indexOf("ArrNext")>-1 && oThisHdr.parentNode.nextSibling.className.indexOf("Dsbl")==-1) { 
		oThisHdr.parentNode.nextSibling.click();
  } else{		
		oNext=oThis.nextSibling; 
		if(oNext==null&&oThis.parentNode.nextSibling!=null)	
			oNext=oThis.parentNode.nextSibling.firstChild;
		if(oNext==null) return false;
		oNextHdr=ur_DateNavigator_getMonthHdr(oNext);
		if(oNextHdr!=null)
			ur_focus(oNextHdr);
			return true;
  }
}
function ur_DateNavigator_focusUpMonth(o){
	var oThis=ur_DateNavigator_getMonth(o);
	var oPrevRow=oThis.parentNode.previousSibling;
	if(oPrevRow==null) return;
	ur_DateNavigator_getMonthHdr(oPrevRow.childNodes[oThis.cellIndex]).focus();
  }
function ur_DateNavigator_focusDownMonth(o){
	var oThis=ur_DateNavigator_getMonth(o);
	var oNextRow=oThis.parentNode.nextSibling;
	if(oNextRow==null) return;
	ur_DateNavigator_getMonthHdr(oNextRow.childNodes[oThis.cellIndex]).focus();
			    }
function ur_DateNavigator_focusPrevMonth(o){
	var oThis=ur_DateNavigator_getMonth(o);
	var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
	var oPrev=null;
	var oPrevHdr=null;
  if(oThisHdr.parentNode.previousSibling.className.indexOf("urCalArrPrev")>-1) {
		oThisHdr.parentNode.previousSibling.click();
        }
  else{		
		oPrev=oThis.previousSibling;	
		if(oPrev==null&&oThis.parentNode.previousSibling!=null)	
			oPrev=oThis.parentNode.previousSibling.lastChild;
		if(oPrev==null) return;
		oPrevHdr=ur_DateNavigator_getMonthHdr(oPrev);
		if(oPrevHdr!=null)
			oPrevHdr.focus();
      }
    }
function ur_DateNavigator_focusThisMonth(o){
	var oThis=ur_DateNavigator_getMonth(o);
	var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
	if(oThisHdr!=null)
		oThisHdr.focus();
  } 
function ur_DateNavigator_focusNextDay(o){
	var oNext=o.nextSibling;
	while(oNext!=null && ur_isSt(oNext.id,ur_st.DISABLED)) 
			oNext=oNext.nextSibling;
	if(oNext!=null && o.className.indexOf("urCalNum")==-1) oNext.setAttribute("sameWeek","true");
	if(oNext==null&&o.parentNode.nextSibling!=null)
	{
		oNext=o.parentNode.nextSibling.firstChild;
		oNext.setAttribute("sameWeek","false");
	}
	if(oNext==null) return;
	if(oNext.getAttribute("ti")=="0")
		oNext.focus();
	else
		ur_DateNavigator_focusNextDay(oNext);
   }
function ur_DateNavigator_focusPrevDay(o){
	var oPrev=o.previousSibling;
	while(oPrev!=null && ur_isSt(oPrev.id,ur_st.DISABLED)) 
			oPrev=oPrev.previousSibling;
	if(oPrev!=null && o.className.indexOf("urCalNum")==-1) oPrev.setAttribute("sameWeek","true");
	if(oPrev==null&&o.parentNode.previousSibling!=null)
	{
		oPrev=o.parentNode.previousSibling.lastChild;
		oPrev.setAttribute("sameWeek","false");
	}
	if(oPrev==null||oPrev.className.indexOf("urCalName")>=0) return;
	if(oPrev.getAttribute("ti")=="0")
		oPrev.focus();
	else
		ur_DateNavigator_focusPrevDay(oPrev);
		 }
function ur_DateNavigator_focusNextWeek(o){
	var oNext=o.parentNode.nextSibling;
	if(oNext==null) return;
	oNext=oNext.cells[o.cellIndex];
	if(oNext.getAttribute("ti")=="0")
		oNext.focus();
	else
		ur_DateNavigator_focusNextWeek(oNext);
  }
function ur_DateNavigator_focusPrevWeek(o){
	var oPrev=o.parentNode.previousSibling;
	if(oPrev==null) return;
	oPrev=oPrev.cells[o.cellIndex];
	if(oPrev.className.indexOf("urCalName")>=0) return;
	if(oPrev.getAttribute("ti")=="0")
		oPrev.focus();
	else
		ur_DateNavigator_focusPrevWeek(oPrev);
}
function sapUrMapi_DateNavigator_keydown(sId,oEvt) {
  var o=ur_evtSrc(oEvt);
  var iKey=oEvt.keyCode;
	
  if(iKey==37)
		iKey=ur_system.direction!="rtl"?37:39;
	else if(iKey==39)
		iKey=ur_system.direction!="rtl"?39:37;
		
	
	if(iKey==117)
		return sapUrMapi_skip(sId,oEvt);
	
	
	if(iKey==32){
		o.click();
    return ur_EVT_cancel(oEvt);
  }
			
		
	if(iKey==39){
		if(o.className.indexOf("Whl")>=0) return;
		if (o.parentNode.className.indexOf("urCalHdr")>-1)
			ur_DateNavigator_focusNextMonth(o);
		else
			ur_DateNavigator_focusNextDay(o);
		return ur_EVT_cancel(oEvt);
				}
	
		
	if(iKey==37){
		if(o.className.indexOf("Whl")>=0) return;
		if (o.parentNode.className.indexOf("urCalHdr")>-1)
			ur_DateNavigator_focusPrevMonth(o);
		else
			ur_DateNavigator_focusPrevDay(o);
		return ur_EVT_cancel(oEvt);
			}
	
	
	if(iKey==38){
		if(o.className.indexOf("Whl")>=0) return;
		if(o.getAttribute("tp")=="DAY")
		{
			o.setAttribute("sameWeek","false");
		}
		
		if(o.parentNode.className.indexOf("urCalHdr")>=0)
			ur_DateNavigator_focusUpMonth(o);
		else
			ur_DateNavigator_focusPrevWeek(o);
		return ur_EVT_cancel(oEvt);
				}
	
	if(iKey==40){
		if(o.className.indexOf("Whl")>=0) return;
		if(o.getAttribute("tp")=="DAY")
		{
			o.setAttribute("sameWeek","false");
		}
		if(o.parentNode.className.indexOf("urCalHdr")>=0)
			ur_DateNavigator_focusDownMonth(o);
		else		
			ur_DateNavigator_focusNextWeek(o);
		return ur_EVT_cancel(oEvt);
			}
	
	
	if(iKey==9 && o.id!=sId && o.id!=sId+"-skipend"){
		if(o.className.indexOf("Whl")>=0||o.parentNode.className.indexOf("urCalHdr")>-1) return;
		if(oEvt.shiftKey)
			ur_DateNavigator_focusThisMonth(o);
		else{
			var oThis=ur_DateNavigator_getMonth(o);
			var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
      if (!ur_DateNavigator_focusNextMonth(oThisHdr)) {
			  if (ur_get(sId+"-skipend")) {
			    ur_get(sId+"-skipend").focus();
      		return ur_EVT_cancel(oEvt);
			  } else {
			    
			    var tds = o.parentNode.parentNode.parentNode.getElementsByTagName("TD");
			    var td = tds[tds.length-1];
			    ur_focus(td);
			  }
			} else {
      		return ur_EVT_cancel(oEvt);
			}
    }
  }
  
	
	if(iKey==9&&oEvt.shiftKey&&o.id==sId+"-skipend"){
		o.previousSibling.firstChild.firstChild.lastChild.lastChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.focus();
		return ur_EVT_cancel(oEvt);
	}	  
}
function sapUrMapi_DateNavigator_mousemove(sId,oEvt) {
  var oFrom = oEvt.fromElement;
	var oTo = oEvt.toElement;
	var o=ur_get(sId);
	var oRef=o.getAttribute("hovered");
	if ((oRef!=null)  && (oRef.className.indexOf(" urCalHov")>-1)) oRef.className=oRef.className.substring(0,oRef.className.indexOf(" urCalHov"));
  if ((oTo!=null) && (oTo.currentStyle)&&((oTo.currentStyle.cursor=="hand") || (oTo.currentStyle.cursor=="pointer"))){
    if (oTo.className=="") {
      oTo.className=" urCalHov";
    } else {
      oTo.className=oTo.className+" urCalHov";
    }
    o.setAttribute("hovered",oTo);
  } else {
    o.setAttribute("hovered",null	);
  }
}
function sapUrMapi_DateNavigator_activate(sId,oEvt){
	var o=ur_evtSrc(oEvt);
	var sDay=o.getAttribute("day");
	var sSep=" "+getLanguageText("SAPUR_SEPARATOR")+" ";	
	
	if(sDay!=null){
		var oRow=o.parentNode;
		var oWeekday=oRow.parentNode.rows[1].cells[o.cellIndex];
		var sDesign=o.getAttribute("ds");
		var sTt=o.getAttribute("tt");
		o.title=sDay+sSep+getLanguageText("SAPUR_CALWEEK")+" "+oRow.firstChild.innerText+sSep+oWeekday.title;
		if(sDesign!=null&&sDesign!="")
			o.title+=sSep+sDesign;
		if(sTt!=null&&sTt!="")
			o.title+=sSep+sTt;
		if(o.getAttribute("cl")=="true")
			o.title+=sSep+getLanguageText("SAPUR_CALSEL_TUTOR");
	}
	
	else if (o.parentNode!=null&&o.parentNode.className.indexOf("urCalHdr")>-1){
		o.title=o.innerText;
		var iIdx=o.getAttribute("idx");
		if(iIdx=="f"){
			o.title+=sSep+getLanguageText("SAPUR_CALFIRSTMONTH");
			if(ur_get(sId).getAttribute("nav")=="true")
				o.title+=sSep+getLanguageText("SAPUR_CALPREVMONTH_TUTOR");
			if(o.getAttribute("cl")=="true")
				o.title+=" "+getLanguageText("SAPUR_CALSEL_TUTOR");													
		}
		else if(iIdx=="l"){
			o.title+=sSep+getLanguageText("SAPUR_CALLASTMONTH");
			if(ur_get(sId).getAttribute("nav")=="true")
				o.title+=sSep+getLanguageText("SAPUR_CALNEXTMONTH_TUTOR");
			if(o.getAttribute("cl")=="true")
				o.title+=" "+getLanguageText("SAPUR_CALSEL_TUTOR");						
}
		else if(o.getAttribute("cl")=="true")
			o.title+=sSep+getLanguageText("SAPUR_CALSEL_TUTOR");
	}
}
function sapUrMapi_DateNavigator_getDateFromId(sId){}
function sapUrMapi_DateNavigator_getDefaultSelectionClass(){
	return "urSel5";
}

//** DefaultButton.ie5 **
function sapUrMapi_DBTN_RegisterCreate() {
	sapUrMapi_Create_AddItem("ur_dbtn", "sapUrMapi_DBTN_addDBtn()");
}
function sapUrMapi_DBTN_addDBtn()
{
  if (!ur_get("ur-topdefault")) {
		var oDefaultTop=document.createElement("DIV");
		var oDefaultBottom=document.createElement("DIV");
		var oDefaultLeft=document.createElement("DIV");
		var oDefaultRight=document.createElement("DIV");
		oDefaultTop.setAttribute("id","ur-topdefault");
		oDefaultBottom.setAttribute("id","ur-bottomdefault");
		oDefaultLeft.setAttribute("id","ur-leftdefault");
		oDefaultRight.setAttribute("id","ur-rightdefault");
		
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultTop);
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultBottom);
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultLeft);
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultRight);
  }
  sapUrMapi_Resize_AddItem("ur-DBtn-rect", "sapUrMapi_DBTN_showDBtn()");
}
function sapUrMapi_DBTN_showDBtn() 
{ 
	var dbId=null;
	try {
		var oNewActive=document.activeElement;
	}
	catch (ex) { 
		return; 
	}
	if( oNewActive != null)
	{
		while(dbId==null && oNewActive.tagName != null && oNewActive.tagName!="BODY") 
		{
		  dbId=oNewActive.getAttribute("dbId");
		  oNewActive=oNewActive.parentNode;
		}
	}
	
	if(dbId!=null && ur_get(dbId).parentNode!=null)
	{
		
		var currentFocusId = sapUrMapi_Focus_getCurrentId();
		var currentFocus = ur_get(currentFocusId);
		var sCt=sapUrMapi_getControlTypeFromObject(currentFocus);
		switch (sCt) 
		{	
			case "B":
			case "TB":
			case "LN":
			case "TE":
				    sapUrMapi_DBTN_hideDBtn(); 
				break;
			case "TY":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN" || sTp=="MNU")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
			    {
					sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				}
				break;
			case "T":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
				{
					sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				}
				break;
			case "I":
			case "TI":
				if(currentFocus.onkeypress!=null)
					sapUrMapi_DBTN_hideDBtn(); 
				else
					sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				break;
			case "IT":
				var oOnek = currentFocus.getAttribute("onek");
					if(oOnek){
					   sapUrMapi_DBTN_hideDBtn();
					   break;
					}
			default :
				sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				
		}
	}
	else 
	{
		sapUrMapi_DBTN_hideDBtn();
	}
	
}
function sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive)
{
	oNewActive=ur_get(dbId);  
	var activeoffsetonscreen; 
	if(ur_get("ur-topdefault")!=null && ur_get("ur-bottomdefault")!=null && ur_get("ur-leftdefault")!=null && ur_get("ur-rightdefault")!=null)
		activeoffsetonscreen = sapUrMapi_DBTN_getOffset(oNewActive);
	else
		return false;
	var oC={top:ur_get("ur-topdefault"),bottom:ur_get("ur-bottomdefault"),left:ur_get("ur-leftdefault"),right:ur_get("ur-rightdefault")};
	var oDefBtn;	
	if (oNewActive.offsetWidth>0)
	{
		oDefBtn=sapUrMapi_DBTN_calcRect(oNewActive,activeoffsetonscreen,oC.left,oC.right,oC.top,oC.bottom);
		if (oDefBtn==null) return;
		oCC={x1:"top",x2:"bottom",x3:"left",x4:"right"};
		for (xx in oCC) 
		{
			if (xx.charAt(0) == "_") {continue;}
			oC[oCC[xx]].style.top=oDefBtn[oCC[xx]].top;
			oC[oCC[xx]].style.left=oDefBtn[oCC[xx]].left;
		   if (oCC[xx]=="top" || oCC[xx]=="bottom") 
			oC[oCC[xx]].style.width=oDefBtn[oCC[xx]].width;
			if (oCC[xx]=="left" || oCC[xx]=="right") 
			oC[oCC[xx]].style.height=oDefBtn[oCC[xx]].height;
		}
	}
    var top = ur_get("ur-topdefault");
	top.style.borderTop="solid DarkSlateGray 1px";
	top.style.height="1px";
	top.style.position="absolute";
	top.style.zIndex="1000";
    var right = ur_get("ur-rightdefault");
	right.style.borderRight="solid DarkSlateGray 1px";
	right.style.height="1px";
	right.style.width="1px";
	right.style.position="absolute";
	right.style.zIndex="1000";
    var bottom = ur_get("ur-bottomdefault");
	bottom.style.borderTop="solid DarkSlateGray 1px";
	bottom.style.height="1px";
	bottom.style.position="absolute";
	bottom.style.zIndex="1000";
    var left = ur_get("ur-leftdefault");
	left.style.borderLeft="solid DarkSlateGray 1px";
	left.style.height="1px";
	left.style.width="1px";
	left.style.position="absolute";
	left.style.zIndex="1000";
	bottom.style.fontSize = "1px";
}
function sapUrMapi_DBTN_hideDBtn()
{
	sapUrMapi_Focus_DeflBtn_hideFocusRect(true);
 }
function sapUrMapi_DBTN_calcRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom) {    
	var obj=sapUrMapi_Focus_DflBtn_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom,true);
	return obj;
}
function sapUrMapi_DBTN_getOffset(object)
{	
	var pos=sapUrMapi_Focus_DflBtn_getFocusOffset(object,true);
	return pos;
}
//** DragSource.ie5 **

var _ur_DragDrop=null;
function ur_Drag_hideCursor() {
	if (_ur_DragDrop) {
   if (_ur_DragDrop.cursor) {
     _ur_DragDrop.cursor.style.display="none";
   }
  }
}
function ur_Drag_showCursor() {
	if (_ur_DragDrop) {
   if (_ur_DragDrop.cursor) {
     _ur_DragDrop.cursor.style.display="block";
   }
  }
}
function ur_Drag_progress(e) {
  if (_ur_DragDrop && _ur_DragDrop.progress) {
    var o=ur_EVT_src(e);
    _ur_DragDrop.isddoperation=true;
    var oChildContainer=sapUrMapi_isChildOfControl(o,"DRT");
    if (oChildContainer) {
	    if (_ur_DragDrop.target!=oChildContainer) {
	      _ur_DragDrop.target=oChildContainer;
	      ur_Drag_enter(_ur_DragDrop.target.id,e);
	    } else {
	      ur_Drag_over(_ur_DragDrop.target.id,e);
	    }
	    if (_ur_DragDrop.cursor!=_ur_DragDrop.drag) {
	      ur_Drag_hideCursor();
	      _ur_DragDrop.cursor=_ur_DragDrop.drag;
	    };
	  } else {
	    if (_ur_DragDrop.target) ur_Drag_leave(_ur_DragDrop.target.id,e);
	    _ur_DragDrop.target=null;
	    if (_ur_DragDrop.cursor!=_ur_DragDrop.nodrag) {
	      ur_Drag_hideCursor();
	      _ur_DragDrop.cursor=_ur_DragDrop.nodrag;
	    };
	  }
	  var oBody=document.getElementsByTagName("BODY")[0];
	  if (e.x>oBody.offsetWidth-26 ||e.y>oBody.offsetHeight-26 || e.x<0 || e.y<0) {
	    ur_Drag_hideCursor();
	  } else {
	  	if (ur_system.direction=="rtl") {
				iHorCorr = oBody.scrollLeft-sapUrMapi_posLeftCorrectionForRTL(oBody);
				_ur_DragDrop.cursor.style.top=e.clientY+14;
				_ur_DragDrop.cursor.style.left=e.clientX-5;
			} else {
				iHorCorr = oBody.scrollLeft;
				_ur_DragDrop.cursor.style.top=e.clientY+14;
				_ur_DragDrop.cursor.style.left=e.clientX+10;
			}
	    ur_Drag_showCursor();
	  }
    ur_EVT_fire(ur_get(_ur_DragDrop.source.id),"odrag",e);
  }
}
function ur_Drag_start(sId,e){
  if (!_ur_DragDrop) {
    _ur_DragDrop={cursor:null,drag:null,nodrag:null,progress:false,isddoperation:false};
    var o=document.createElement("IMG");
    o.src=ur_system.mimepath+"dragdrop/nodrop.gif";
		o.style.position="absolute";
	  o.style.display="none";
	  o.style.zIndex="1000";
	  _ur_DragDrop.nodrag=o;
	  document.body.appendChild(_ur_DragDrop.nodrag);
    var o=document.createElement("IMG");
    o.src=ur_system.mimepath+"dragdrop/drop.gif";
		o.style.position="absolute";
	  o.style.display="none";
	  o.style.zIndex="1000";
	  _ur_DragDrop.drag=o;
	  document.body.appendChild(_ur_DragDrop.drag);
	} 
	_ur_DragDrop.progress=true;
	_ur_DragDrop.source=sapUrMapi_isChildOfControl(ur_get(sId),"DRS");
	ur_get(sId).setCapture();
  ur_EVT_fire(ur_get(sId),"ods",e);
}
function ur_Drag_end(e){
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
    ur_Drag_hideCursor();
    if (_ur_DragDrop.target) ur_Drop(_ur_DragDrop.target.id,e);
	  ur_EVT_fire(_ur_DragDrop.source,"ode",e);
		_ur_DragDrop.source.releaseCapture();
		ur_Drag_hideCursor();
		_ur_DragDrop.source=null;
		_ur_DragDrop.target=null;
		_ur_DragDrop.isddoperation=false;
		_ur_DragDrop.progress=false;
  }
}
function ur_Drop(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
		ur_EVT_fire(ur_get(sId),"odrop",e);
	}
}
function ur_Drag_enter(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
	  ur_EVT_fire(ur_get(sId),"odenter",e);
	}
}
function ur_Drag_over(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
	  ur_EVT_fire(ur_get(sId),"odo",e);
	}
}
function ur_Drag_leave(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
  	ur_EVT_fire(ur_get(sId),"odl",e);
  }
}

//** DropDownListBox.ie5 **

function sapUrMapi_DropDownListBox_getSelectedKey(sId) {
	oSelect = ur_get(sId);
	return oSelect.options[oSelect.selectedIndex].value;
}
function sapUrMapi_DropDownListBox_setSelectedKey(sId,sKey) {
	oSelect = ur_get(sId);
	for (var n=0;n<oSelect.options.length;n++) {
		if (oSelect.options[n].value==sKey) {
			oSelect.selectedIndex=n; return;
		}
	}
}
function sapUrMapi_DropDownListBox_getSelectedIndex(sId) {
	return ur_get(sId).selectedIndex;
}
function sapUrMapi_DropDownListBox_setSelectedIndex(sId,iIndex) {
	ur_get(sId).selectedIndex=iIndex;
}
function sapUrMapi_DropDownListBox_focus(sId) {
   sapUrMapi_focusElement(sId);
}
function sapUrMapi_DropDownListBox_addOptions(sId,oKeyValuePairs,sSelectedKey) {
  for(var elem in oKeyValuePairs)
    sapUrMapi_DropDownListBox_addOption(sId,elem,oKeyValuePairs[elem],elem==sSelectedKey);
}
function sapUrMapi_DropDownListBox_addOption(sId,sKey,sValue,bSelected) {
  var ddlb = ur_get(sId);
  ddlb.options[ddlb.options.length] = new Option(sValue,sKey);
  if (bSelected) ddlb.options[ddlb.options.length-1].selected=true;
}
function sapUrMapi_DropDownListBox_keydown(sId,oEvt){
	if(oEvt.keyCode==40 || oEvt.keyCode==38) ur_EVT_cancelBubble(oEvt);
}

//** FileUpload.ie5 **

function sapUrMapi_FileUpload_change(sId,oEvt){
	
}

//** FocusRect.ie6 **

function sapUrMapi_Focus_canFocus(o) {
	if (o==null) return;
	if (!o.tagName) return;
	var tag=","+o.tagName+",";
  
	if((tag==",INPUT,")&&(o.type=="hidden"||o.disabled)){ 
		return false;
	}
	var search=",A,BODY,BUTTON,FRAME,IFRAME,INPUT,ISINDEX,OBJECT,SELECT,TEXTAREA,";
	if (search.indexOf(tag)>-1){
	   if (!ur_system.is508 && o.tabIndex<0)
	       return (o.ti>=0);
	   else
		  return (o.tabIndex>=0);
	}
	if (!o.getAttribute) return;
	if (o.getAttribute("ti")!=null) return (parseInt(o.getAttribute("ti"))>=0);
}
function sapUrMapi_Focus_getNextFocusableElement(o) {
	while (o!=null) {
		if (sapUrMapi_Focus_canFocus(o)) return o;
		o=o.parentNode;
	}
	return null;
}
var oOldFocus=null;
function sapUrMapi_Focus_showFocusRect(sId) {
	try
	{
		if ((document.activeElement!=null) && (document.activeElement.id=="ur-accfocus")) return;
	}
	catch(e)
	{
		return;
	}	
	var oTop = ur_get("ur-topfocus");
	if (oTop==null) return;
  var oNewActive=null;
	if (typeof(sId)!="undefined") {
		if (typeof(sId)=="string") {
    oNewActive=ur_get(sId);
	} else {
      oNewActive=sId;
		}
	} else {
    oNewActive=document.activeElement;
	}
	if (oOldFocus!=null) {
	  if (oOldFocus==oNewActive) return;
	}
	oNewActive=sapUrMapi_Focus_getNextFocusableElement(oNewActive);      
	if ((oNewActive==null)||(oNewActive.tagName=="BODY")) return;
	
	if (oNewActive.tagName =="IFRAME" && !oNewActive.getAttribute("ct")) {
		sapUrMapi_Focus_hideFocusRect();
		return;
	}
	if (ur_getAttD(oNewActive,"ct","")=="IF") {
	  oNewActive.firstChild.attachEvent("onactivate",sapUrMapi_Focus_hideFocusRect);
	  return;
	}
  var sType=sapUrMapi_getControlTypeFromObject(oNewActive);
	if(sType=="C"||sType=="R"||sType=="TRI"){ 
		oNewActive=ur_get(oNewActive.id.split("-")[0]+"-lbl");
	}
	if(oNewActive.getAttribute("urhf")=="true") return;
  var x=oNewActive.currentStyle.width;
  var y=oNewActive.offsetWidth;
  if (!oNewActive.hideFocus) oNewActive.hideFocus="true";
  if (y!=oNewActive.offsetWidth) oNewActive.style.width=x;
  
  
	
	if (sType=="TS") {
	  if (oNewActive.id.indexOf("-itm-")>-1 && oNewActive.id.indexOf("-txt")==-1 && oNewActive.id.indexOf("-a")==-1) 
	    oNewActive=oNewActive.firstChild;
	}
	
	else  if (sType=="TBV") {
		  if (oNewActive.className=="urImgCbgCbx") {
		    oNewActive=oNewActive.nextSibling;
		  } else if (oNewActive.className=="urImgRbgCbx") {
		    oNewActive=oNewActive.nextSibling;
		  }
	}
	
  else if (sType=="SB") {
	  if (oNewActive.tagName=="TABLE") {
	    oNewActive=oNewActive.parentNode.parentNode.parentNode;
	  }	else {
	    oNewActive=oNewActive.parentNode;
	  }
	}
	
  
  else if (sType=="CB") {
		oNewActive=oNewActive.parentNode;
  	if(oNewActive.tagName=="TD")	
  		oNewActive=oNewActive.parentNode.parentNode;
  }
  else if (sType=="ILBM" || sType=="ILBS") {
  
  	if(oNewActive.tagName=="TD") {
  		oNewActive=oNewActive.parentNode.parentNode.parentNode.parentNode;
    }
  }
  
  
  else if (sType=="ST") {
		if (oNewActive.innerText=="") {
		  oNewActive=oNewActive.parentNode;
		}
  }
  var activeoffsetonscreen = sapUrMapi_Focus_getFocusOffset(oNewActive);
	var sccontrol = oNewActive.parentNode;
	var oC={top:ur_get("ur-topfocus"),bottom:ur_get("ur-bottomfocus"),left:ur_get("ur-leftfocus"),right:ur_get("ur-rightfocus")};
  if (oNewActive.offsetWidth>0) {
		oFocusRect=sapUrMapi_Focus_calcFocusRect(oNewActive,activeoffsetonscreen,oC.left,oC.right,oC.top,oC.bottom);
		if (oFocusRect==null) return;
		oCC={x1:"top",x2:"bottom",x3:"left",x4:"right"};
		for (xx in oCC) {
			if (xx.charAt(0) == "_") {continue;}
		  oC[oCC[xx]].style.top=oFocusRect[oCC[xx]].top;
		  oC[oCC[xx]].style.left=oFocusRect[oCC[xx]].left;
		  if (oCC[xx]=="top" || oCC[xx]=="bottom") 
		    oC[oCC[xx]].style.width=oFocusRect[oCC[xx]].width;
		  if (oCC[xx]=="left" || oCC[xx]=="right") 
		    oC[oCC[xx]].style.height=oFocusRect[oCC[xx]].height;
	}
}
}
function sapUrMapi_Focus_hideFocusRect() {
	sapUrMapi_Focus_DeflBtn_hideFocusRect(false);
 
}
function sapUrMapi_Focus_addFocusRect(sFocusElementId) {
	
	if (ur_get("ur-topfocus")==null) {
	  var oBody=document.getElementsByTagName("BODY")[0];
		
		var oFTop		 = document.createElement("DIV");
		var oFBottom = document.createElement("DIV");
		var oFLeft   = document.createElement("DIV");
		var oFRight  = document.createElement("DIV");
		
	  
		oFTop.setAttribute("id","ur-topfocus"); 
		oFTop.className="urFocTop";
		oFTop.style.top="-10000px";
		oFTop.appendChild(document.createTextNode(""));
		oBody.appendChild(oFTop);
	  
		oFBottom.setAttribute("id","ur-bottomfocus"); 
		oFBottom.className="urFocBtm";
		oFBottom.style.top="-10000px";
		oFBottom.appendChild(document.createTextNode(""));
		oBody.appendChild(oFBottom);
	  
		oFLeft.setAttribute("id","ur-leftfocus"); 
		oFLeft.className="urFocLft";
		oFLeft.style.top="-10000px";
		oFLeft.appendChild(document.createTextNode(""));
		oBody.appendChild(oFLeft);
	  
		oFRight.setAttribute("id","ur-rightfocus"); 
		oFRight.className="urFocRgt";
		oFRight.style.top="-10000px";
		oFRight.appendChild(document.createTextNode(""));
		oBody.appendChild(oFRight);
		
		ur_focus_activate_handler=function (){sapUrMapi_Focus_showFocusRect()};
		
		
		
		
		
  }
		
	
	if (ur_get("ur-topdefault")==null) {
	  var oBody=document.getElementsByTagName("BODY")[0];
		
		var oDefaultTop=document.createElement("DIV");
		var oDefaultBottom=document.createElement("DIV");
		var oDefaultLeft=document.createElement("DIV");
		var oDefaultRight=document.createElement("DIV");
		oDefaultTop.setAttribute("id","ur-topdefault");
		oDefaultBottom.setAttribute("id","ur-bottomdefault");
		oDefaultLeft.setAttribute("id","ur-leftdefault");
		oDefaultRight.setAttribute("id","ur-rightdefault");
		oBody.appendChild(oDefaultTop);
		oBody.appendChild(oDefaultBottom);
		oBody.appendChild(oDefaultLeft);
		oBody.appendChild(oDefaultRight);
	  sapUrMapi_Resize_AddItem("ur-DBtn-rect", "sapUrMapi_DBTN_showDBtn()");
		ur_defaultbutton_activate_handler=function (){sapUrMapi_DBTN_showDBtn()};
		document.attachEvent("onactivate",ur_defaultbutton_activate_handler); 
		document.attachEvent("ondeactivate",ur_defaultbutton_activate_handler);
  	document.attachEvent("onactivate",ur_defaultbutton_activate_handler);
	}
	try {
  	sapUrMapi_focusElement(sFocusElementId);
	} catch(ex) {}
}
function sapUrMapi_Focus_RegisterCreate(sId) {
	
}
function sapUrMapi_Focus_getCurrentId () {
	try{
	  var o = window.document.activeElement;
  } catch(ex) {return "";}
  if (o!=null) {
	  if (o.tagName=="LABEL") return o.htmlFor;
	  while (o.id=="") {
			if (o.tagName=="BODY") return "";
			o=o.parentNode;
	  }
	  return o.id;
  }
  return "";
}
function sapUrMapi_Focus_reset() {
	sapUrMapi_Focus_addFocusRect();
	var oTop = ur_get("ur-topfocus");
	var oBottom = ur_get("ur-bottomfocus");
	var oLeft = ur_get("ur-leftfocus");
	var oRight = ur_get("ur-rightfocus");
  if(oTop) {
	  var oParent=oTop.parentNode;
	  var oBody=document.getElementsByTagName("BODY")[0];
	  if (oParent!=oBody) {
			oParent.removeChild(oTop);
			oBody.appendChild(oTop);
			oParent.removeChild(oBottom);
			oBody.appendChild(oBottom);
			oParent.removeChild(oLeft);
			oBody.appendChild(oLeft);
			oParent.removeChild(oRight);
			oBody.appendChild(oRight);
		}
  }
}
function sapUrMapi_Focus_remove() {
	var oTop = ur_get("ur-topfocus");
	if(oTop==null) return;
	var oBottom = ur_get("ur-bottomfocus");
	var oLeft = ur_get("ur-leftfocus");
	var oRight = ur_get("ur-rightfocus");
  var oParent=oTop.parentNode;
	oParent.removeChild(oTop);
	oParent.removeChild(oBottom);
	oParent.removeChild(oLeft);
	oParent.removeChild(oRight);
	oParent.removeChild(oEdg1);
	oParent.removeChild(oEdg2);
	oParent.removeChild(oEdg3);
	oParent.removeChild(oEdg4);
}
function sapUrMapi_Focus_getFocusRectHeight() {
	var oTop = ur_get("ur-topfocus");
	if (oTop) return oTop.offsetHeight;
	return 0;
}
function sapUrMapi_Focus_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom)
{
	var oFcsRect = sapUrMapi_Focus_DflBtn_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom,false);
	return oFcsRect;
}
function sapUrMapi_Focus_getFocusOffset(oNewActive)
{
	var activeoffsetonscreen = sapUrMapi_Focus_DflBtn_getFocusOffset(oNewActive,false);
	return activeoffsetonscreen;
}
function sapUrMapi_Focus_DflBtn_getFocusOffset(object,IsDeflBtn) {
	var position= { top: 0, left: 0};
	position = sapUrMapi_getAbsolutePosition(object);
	var sccontrol = object.parentNode;
	var bFoundFirstScrollContainer=false;	
	if(IsDeflBtn)
		var oC={top:ur_get("ur-topdefault"),bottom:ur_get("ur-bottomdefault"),left:ur_get("ur-leftdefault"),right:ur_get("ur-rightdefault")};
	else
		var oC={top:ur_get("ur-topfocus"),bottom:ur_get("ur-bottomfocus"),left:ur_get("ur-leftfocus"),right:ur_get("ur-rightfocus")};	
	while ((sccontrol) && (!bFoundFirstScrollContainer)) {
	  if (sccontrol.tagName=="DIV" || sccontrol.tagName=="SPAN") {
	    if (sccontrol.currentStyle.overflow!="visible" && sccontrol.currentStyle.height!="auto" ) {
				if (sccontrol!=oC.top.parentNode) {
				  oParent=oC.top.parentNode;
					for (var n in oC) {
						if (n.charAt(0) == "_") {continue;}
						oParent.removeChild(oC[n]);
					  sccontrol.appendChild(oC[n]);
				   }
				}
				bFoundFirstScrollContainer=true;
				var pos=sapUrMapi_getOffsetOnScreen(sccontrol);
        
	      position.top-=pos.top;
	      position.left-=pos.left;
	      if (sccontrol.currentStyle.borderTopStyle!="none") {
					if (!isNaN(parseInt(sccontrol.currentStyle.borderTopWidth)))
				  position.top-=parseInt(sccontrol.currentStyle.borderTopWidth);
	      }
	      if (sccontrol.currentStyle.borderLeftStyle!="none") {
					if (!isNaN(parseInt(sccontrol.currentStyle.borderLeftWidth)))
			    position.left-=parseInt(sccontrol.currentStyle.borderLeftWidth);
        }
	    } 
	  }
	  sccontrol = sccontrol.parentNode;
	}
	if (!bFoundFirstScrollContainer) {
			oBody=document.getElementsByTagName("BODY").item(0);
			if (oBody!=oC.top.parentNode) {
			  oParent=oC.top.parentNode;
				for (var n in oC) {
					if (n.charAt(0) == "_") {continue;}
					oParent.removeChild(oC[n]);
					oBody.appendChild(oC[n]);
			}
	}
	}
	return position;
}
function sapUrMapi_Focus_DflBtn_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom,IsDeflBtn) {
	
	var o=new Array();
	o.top = {top:0,left:0,width:0};
	o.bottom = {top:0,left:0,width:0};
	o.left = {top:0,left:0,height:0};
	o.right = {top:0,left:0,height:0};
	sType=sapUrMapi_getControlTypeFromObject(oElement);
	sParentType=sapUrMapi_getControlTypeFromObject(oElement.parentNode);
	
	var oWidthCalc = oElement.parentNode;
	var iRealWidth = oElement.offsetWidth;
	var iLeftOffset = 0;
	
	
	
	while(oWidthCalc && oWidthCalc.tagName!="BODY" && oWidthCalc.offsetWidth >= iRealWidth){
		iLeftOffset+=oWidthCalc.offsetLeft;
		oWidthCalc = oWidthCalc.parentNode;
	}
	if (oWidthCalc && (oWidthCalc.tagName=="TD" ||oWidthCalc.tagName=="TH")) {
		iRealWidth = oWidthCalc.offsetWidth - iLeftOffset - 2;
	}
	
	if (sType=="PI") {
	  if (oElement.id.indexOf("-itm-")>-1){
	    o.top.top+=parseInt(oTop.currentStyle.height);
	    o.bottom.top-=parseInt(oBottom.currentStyle.height);
	    o.left.left+=parseInt(oLeft.currentStyle.width);
	    o.right.left-=parseInt(oRight.currentStyle.width);
	  } else {
	    o.top.top+=parseInt(oTop.currentStyle.height);
	    o.bottom.top-=(parseInt(oBottom.currentStyle.height)+1);
	    o.left.left+=parseInt(oLeft.currentStyle.width);
	    o.right.left-=parseInt(oRight.currentStyle.width);
	  }
	} else if (oElement.className.indexOf("urTreN")>-1) {
	  if (!(oElement.childNodes.length>0 && oElement.childNodes[0].tagName=="TABLE")) {
	    o.bottom.top-=4;
	}
		}
	
	if(IsDeflBtn==true) 
		o.top.top+=oOffsets.top-1;
	else
		o.top.top+=oOffsets.top-parseInt(oLeft.currentStyle.width);
	o.top.left+=oOffsets.left;
	o.top.width+=iRealWidth;
	o.bottom.top+=(oOffsets.top+oElement.offsetHeight);
	o.bottom.left=o.top.left;
	o.bottom.width=o.top.width;
	o.left.top=o.top.top;
	if(IsDeflBtn==true) 
		o.left.left+=oOffsets.left-1;
	else
		o.left.left+=(-1*parseInt(oLeft.currentStyle.width))+oOffsets.left;
	o.right.top=o.top.top;
	if(IsDeflBtn==true) 
		o.right.left+=o.left.left+o.top.width +1;
	else
		o.right.left+=(o.left.left+o.top.width+parseInt(oLeft.currentStyle.width));
	if (oElement.offsetHeight>0) {
		if(IsDeflBtn==true) 
			o.left.height+=o.bottom.top-o.top.top;
		else
			o.left.height+=o.bottom.top-o.top.top+parseInt(oBottom.currentStyle.height);
		
		o.right.height+=o.left.height;
		
	}
  
  try {
    
    sExclude=",B,I,CB,C,R,TE,TS,TV,CP,RM,PG,";
    if (!IsDeflBtn && sExclude.indexOf(","+sType+",")==-1 && oElement.tagName!="A" && oElement.tagName!="INPUT"  ) {
      var w=ur_get("ur-leftfocus").offsetWidth;
  		o.top.top+=w; 
  		o.top.left+=w 
  		o.top.width-=w; 
	  	
			o.bottom.top-=w;
			o.bottom.left+=w;
			o.bottom.width-=w;
			
			o.left.top+=w;
			o.left.left+=w;
			o.left.height-=w*2;
			
			o.right.top+=w;
			o.right.left-=w;
			o.right.height-=w*2;
		}
  } catch (ex) {
  }
	
	for (var iter1 in o) {
		if ((IsDeflBtn==false) && (iter1.charAt(0) == "_")) {continue;}
	  for (var iter2 in o[iter1]) {
	  	if ((IsDeflBtn==false) && (iter2.charAt(0) == "_")) {continue;}
	    if (isNaN(o[iter1][iter2])) return null;
	    o[iter1][iter2]+="px";
	  }
	}
	return o;
}
function sapUrMapi_Focus_DeflBtn_hideFocusRect(IsDeflBtn) {
  var oNewActive=null;
  try {
    oNewActive=document.activeElement;
  } catch (ex) { return; }
  oOldFocus=null;
	if (IsDeflBtn)
	   var oC={top:ur_get("ur-topdefault"),bottom:ur_get("ur-bottomdefault"),left:ur_get("ur-leftdefault"),right:ur_get("ur-rightdefault")};
	else
		var oC={top:ur_get("ur-topfocus"),bottom:ur_get("ur-bottomfocus"),left:ur_get("ur-leftfocus"),right:ur_get("ur-rightfocus")};
  if (oC.top==null) return;
  for (var x in oC) {
  	if (x.charAt(0) == "_") {continue;}
  	oC[x].style.top="-10000px";
}
}

//** FreeContextualArea.ie5 **

function mf_FRA_exp(sId)
{
  var o=ur_get(sId);
  var oImg=o.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;
  oImg.className="urFRAExpOp";
  var oCnt=o.firstChild.childNodes[1].firstChild.firstChild;
  oCnt.style.display="block";
  
  ur_setSt(o,ur_st.COLLAPSED,false);
  ur_setSt(o,ur_st.EXPANDED,true);
  sapUrMapi_DBTN_showDBtn();
  sapUrMapi_refocusElement(sId);
}
function mf_FRA_col(sId)
{
  var o=ur_get(sId);
  var oImg=o.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;
  oImg.className="urFRAExpClo";
  var oCnt=o.firstChild.childNodes[1].firstChild.firstChild;
  oCnt.style.display="none";
  ur_setSt(o,ur_st.COLLAPSED,true);
  ur_setSt(o,ur_st.EXPANDED,false);
  sapUrMapi_DBTN_hideDBtn(); 
  sapUrMapi_refocusElement(sId);
}
function ur_FRA_cl(oEvt)
{
  if (ur_FRA_tgl(oEvt)) return true;
  var oCl=ur_EVT_src(oEvt);
  var o=ur_getRootObj(oCl);
  if (oCl.className=="urFRAPers")
  {
    ur_EVT_fire(o,"opers",oEvt);
    return true;	
  }
}
function ur_FRA_kd(sId,oEvt)
{
	
	var o=ur_get(sId);
	if(oEvt.keyCode==107)
	{
		if (ur_isSt(o,ur_st.COLLAPSED))
		{
			mf_FRA_exp(sId);
			
			
		 
		}
		return true;
	 }
	 
	 else  if(oEvt.keyCode==109)
	 {
		 if (ur_isSt(o,ur_st.EXPANDED))
		 {
			 mf_FRA_col(sId);
			 sapUrMapi_DBTN_hideDBtn(); 
			
		 }
		 return true;
	 }
     else if(oEvt.keyCode== 13)
	 {
		sapUrMapi_triggerDefaultButton(sId,oEvt);
	 }	 
	 else
		return sapUrMapi_skip(sId,oEvt);
}
function ur_FRA_tgl(oEvt)
{
  var oCl=ur_EVT_src(oEvt);
  var o=ur_getRootObj(oCl);
  if (oCl.className=="urFRAExpOp") 
  {
    ur_EVT_fire(o,"ocol",o.id);
    return true;
  } else if (oCl.className=="urFRAExpClo")
  {
    ur_EVT_fire(o,"oexp",oEvt);
    return true;
  }
}
//** GeoMap.ie5 **

function sapUrMapi_GeoMap_keydown(sId, oEvt){
	var o=ur_get(sId);
	var oBtn=null;
 	var iKey=oEvt.keyCode;
	
	if(o==null) return;
	
 	if(ur_system.direction=="rtl" && iKey==37) iKey=39;
 	else if(ur_system.direction=="rtl" && iKey==39) iKey=37;
	if(iKey==107)
		oBtn=ur_GeoMap_getImage("ZIN",o);
	else if(iKey==109)
		oBtn=ur_GeoMap_getImage("ZOUT",o);
	else if(iKey==38)
		oBtn=ur_GeoMap_getImage("N",o);
	else if(iKey==39)
		oBtn=ur_GeoMap_getImage("E",o);
	else if(iKey==40)
		oBtn=ur_GeoMap_getImage("S",o);
	else if(iKey==37)
		oBtn=ur_GeoMap_getImage("W",o);
		
	if(oBtn!=null){
		oBtn.click();
		return;
	}
	
	return sapUrMapi_skip(sId,oEvt);
}
function ur_GeoMap_getImage(sType,o){
	var a=o.getElementsByTagName("IMG");
	for(var i=0; i<a.length; i++){
		if(a[i].getAttribute("tp")==sType)
			return a[i];
	}
	a=o.getElementsByTagName("A");
	for(var i=0; i<a.length; i++){
		if(a[i].getAttribute("tp")==sType)
			return a[i];
	}
	return null;
}
//** HorizontalContextualPanel.ie5 **

function ur_Hcnp_RegisterCreate(sId,iCount,iSel,iMenuIdx)
{
	if(!sId || iCount==0 || iSel<0) return;
	sapUrMapi_Create_AddItem(sId, "ur_Hcnp_create('" + sId + "','" + iCount + "','" + iSel + "')");
}
function ur_Hcnp_create(sId,Count,SelIndex)
{
	var oHcnp = ur_get(sId);
	if(SelIndex >0 )
	{
		var iPrevSel = parseInt(SelIndex) -1;
		ur_get(sId+"-itm-"+iPrevSel+"-b").style.display="none";
	}
}
function ur_Hcnp_setActiveItem(sId,iSel,iPrevSel,evt)
{
	
	var oTbl = ur_get(sId);	
	var iOldSel = oTbl.getAttribute("sidx");
	
	if(iSel == iOldSel) return;
	
	if(iOldSel !=0)
	{
		var iPrevSel = parseInt(iOldSel) -1;
		ur_get(sId+"-itm-"+iPrevSel+"-b").style.display="";
	}
	
	
	var curTabBeg = ur_get(sId+"-itm-"+iSel+"-a");
	var curTabEnd = ur_get(sId+"-itm-"+iSel+"-b");
	var curTabTxt = ur_get(sId+"-itm-"+iSel);
	var oldTabBeg = ur_get(sId+"-itm-"+iOldSel+"-a");
	var oldTabEnd = ur_get(sId+"-itm-"+iOldSel+"-b");
	var oldTabTxt = ur_get(sId+"-itm-"+iOldSel);
	if(iOldSel ==0 )
	{
		oldTabBeg.className = "urHcnpfirstAngOff urHcnpTopUndBdr";
		oldTabEnd.className = "urHcnpUnSelTabEnd urHcnpTopUndBdr";
		oldTabTxt.className = "urHcnpUnSelTabText urHcnpTopUndBdr";
	}
	else
	{
		oldTabBeg.className = "urHcnpUnSelTabStart urHcnpTopUndBdr";
		oldTabEnd.className = "urHcnpUnSelTabEnd urHcnpTopUndBdr"; 
		oldTabTxt.className = "urHcnpUnSelTabText urHcnpTopUndBdr";
		oldTabBeg.childNodes[0].className = "urHcnpBetwAng";
	}
	if(iSel == 0)
	{
		curTabBeg.className = "urHcnpfirstAngOn";
		curTabEnd.className = "urHcnpSelTabEnd";
		curTabTxt.className = "urHcnpSelTabText";
	}
	else
	{
		curTabBeg.className = "urHcnpSelTabStart";
		curTabEnd.className = "urHcnpSelTabEnd";
		curTabTxt.className = "urHcnpSelTabText";
		curTabBeg.childNodes[0].className = "urHcnpBetSelAng";
	}
	oTbl.setAttribute("sidx",iSel);
	if (ur_system.is508) {
		ur_setSt(oldTabTxt,ur_st.NOTSELECTED,true);
		ur_setSt(oldTabTxt,ur_st.SELECTED,false);
		ur_setSt(curTabTxt,ur_st.NOTSELECTED,false);
		ur_setSt(curTabTxt,ur_st.SELECTED,true);
	
		sapUrMapi_refocusElement(curTabTxt.id);
	}
	if(iSel !=0)
	{
		var iPrevSel = parseInt(iSel) -1;
		ur_get(sId+"-itm-"+iPrevSel+"-b").style.display="none";		
	}
	
	
	var oOldCont = ur_get(sId+"-cnt-"+iOldSel);
	var oNewCont = ur_get(sId+"-cnt-"+iSel);
	oOldCont.style.display= "none";
	oNewCont.style.display ="block";
}
function ur_HcnpMnu_Select(sId,tabIdx,mnuIdx,oEvt)
{
	var iMenuSel = parseInt(ur_get(sId+"-cnt-"+tabIdx).getAttribute('sidx'));
	var oNewSelMenuItm = ur_get(sId+"-cnt-"+tabIdx+"-mnu-"+mnuIdx);
	
	var oPrevSelMenuItm =  ur_get(sId+"-cnt-"+tabIdx+"-mnu-"+iMenuSel);
	
	if(mnuIdx == iMenuSel) return;
	
	if(iMenuSel == -1)
	{
		oNewSelMenuItm.className = "urHcnpMenuSel";
		ur_get(sId+"-cnt-"+tabIdx).setAttribute('sidx',mnuIdx);
	}
	else if(iMenuSel >= 0)
	{
		oNewSelMenuItm.className = "urHcnpMenuSel";
		oPrevSelMenuItm.className = "urHcnpMenuUnSel";
		ur_get(sId+"-cnt-"+tabIdx).setAttribute('sidx',mnuIdx);
		if (ur_system.is508){
			ur_setSt(oPrevSelMenuItm,ur_st.NOTSELECTED,true);
			ur_setSt(oPrevSelMenuItm,ur_st.SELECTED,false);
			ur_setSt(oNewSelMenuItm,ur_st.NOTSELECTED,false);
			ur_setSt(oNewSelMenuItm,ur_st.SELECTED,true);
		
			sapUrMapi_refocusElement(oNewSelMenuItm.id);
		}
	}	
		
}
function ur_Hcnp_keySelect(sId,oEvt){
	var o = ur_get(sId);
	var oItm = ur_EVT_src(oEvt);
	var sItmId=oItm.id;
	var sItm="-itm-";
	if(sItmId.indexOf("mnu")>-1){
		var tabIdx=sItmId.split("-")[2];
		sItm="-cnt-"+tabIdx+"-mnu-";
		o=ur_EVT_src(oEvt).parentNode;
	}
	if(ur_system.direction!="rtl"){
		oPrev=ur_getPrevItm(oItm.previousSibling,"idx");
		oNext = ur_getNxtItm(oItm.nextSibling,"idx");
	}else{
		oNext=ur_getPrevItm(oItm.previousSibling,"idx");
		oPrev = ur_getNxtItm(oItm.nextSibling,"idx");
	}
	if((oEvt.keyCode == 39 || oEvt.keyCode == 40) && oNext!=null) {
		 ur_focus_Itm(oNext,oItm);
		 ur_EVT_cancel(oEvt);
	}
	else if((oEvt.keyCode == 37 || oEvt.keyCode == 38) && oPrev!=null){
		ur_focus_Itm(oPrev,oItm);
		ur_EVT_cancel(oEvt);
	}
	else if(oEvt.keyCode==9){
		var iSel=o.getAttribute("sidx");
		var oSel = ur_get(sId+sItm+iSel);
		ur_focus_Itm(oSel,oItm);
	}
	else if(oEvt.keyCode==32 || oEvt.keyCode==13){
		oItm.click();
		 ur_EVT_cancelBubble(oEvt);
	}else
		sapUrMapi_skip(sId,oEvt);
}
//** Iframe.ie5 **

function sapUrMapi_Iframe_adaptSize(sId, oEvt) {
  var oIf = ur_get(sId);
  if (oIf && (oIf.width == "" || oIf.height == "")) {
    
    try {
      var oIfBody = oIf.contentWindow.document.body;
      if (oIf.width == "") 
        oIf.width = oIfBody.scrollWidth + oIfBody.offsetWidth - oIfBody.clientWidth;
      if (oIf.height == "") 
        oIf.height = oIfBody.scrollHeight + oIfBody.offsetHeight - oIfBody.clientHeight;
    } 
    catch (e) {
      
    }
  }
}

//** Image.ie5 **

function sapUrMapi_Image_menuActivate(sImageId,e) {
	oImage = ur_get(sImageId);
	if (sapUrMapi_checkKey(e,"keydown",new Array("32","40"))) {
		if (oImage.onclick) {oImage.onclick();return false;} 
		if (oImage.oncontextmenu) {oImage.oncontextmenu();return false;} 
		if (oImage.onmouseover) {oImage.onmouseover();return false;} 
	}
  return false;
}
function sapUrMapi_Image_checkClick(sId, e) {
	if (e.type=="click") return true;
	return sapUrMapi_checkKey(e,"keydown",new Array("32"));
}
function sapUrMapi_Image_registerCreate(sId,MaxWidth,MaxHeight){
	if( MaxWidth =="" && MaxHeight =="") {
		return;
	}
	else {
		ur_Image_Create(sId,MaxWidth,MaxHeight);
	}
}
		
function ur_Image_Create(sId, TargetWidth, TargetHeight) {
	TargetWidth = parseInt(TargetWidth);
	TargetHeight = parseInt(TargetHeight);
	
	if(isNaN(TargetWidth) || TargetWidth < 0) TargetWidth = 0;
	if(isNaN(TargetHeight) || TargetHeight < 0) TargetHeight = 0;
	
	var oLoadedImage = ur_get(sId);
	
	if (oLoadedImage == null) return;
	
	if (TargetWidth <= 0 && TargetHeight <= 0){ 
		ur_Image_showImg(oLoadedImage);
		  return;
		}		
	
	if (oLoadedImage.tagName == "SPAN") oLoadedImage = oLoadedImage.firstChild;
	
    var ActWidth = oLoadedImage.offsetWidth,
  		ActHeight = oLoadedImage.offsetHeight,
		PropHeight = ur_Image_getProportionlaSize(TargetWidth, ActWidth, ActHeight);
	
	
	if (PropHeight > TargetHeight) {
	  	oLoadedImage.style.height = TargetHeight;
	}
	
	else {
		oLoadedImage.style.width = TargetWidth;
		}
	
	ur_Image_showImg(oLoadedImage);
    }
function ur_Image_getProportionlaSize(TargetSize, ActualSizeA, ActualSizeB ){
	return Math.floor( ActualSizeB * ( TargetSize / ActualSizeA ) );
}
function ur_Image_showImg(img) {
	var sVisibility = img.getAttribute("visibility");
	
	if (img == null || sVisibility == "BLANK") return;
	
	img.style.visibility ="visible";
	img.parentNode.style.overflow = "";
	img.parentNode.style.display = "inline-block"; 
	
	if (ur_system.browser_abbrev.indexOf("ie") > -1) {
		img.parentNode.style.height = "auto";
		img.parentNode.style.width = "auto";
	}
	
}

//** InputField.ie5 **

var aMonthNames=null;
var aDayNames=null;
var aDayNameAbbrevs=null;
var aDayCount=null;
var sInpSrcEl=null;
var sDtPicker=null;
function sapUrMapi_InputField_setInputState(sId,sInputState) {
  var o=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
	sapUrMapi_Label_setInputState(oLbl,sInputState);
  if (sInputState == 'ERROR') {
    if (ur_isSt(o,ur_st.INVALID)) return;
    ur_setSt(o,ur_st.WARNING,false);
    ur_setSt(o,ur_st.INVALID,true);
		o.className=o.className.replace(" urEdf2TxtWarn","");
		o.className+=" urEdf2TxtInv";
  } else if (sInputState == 'WARNING'){
    if (ur_isSt(o,ur_st.WARNING)) return;
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.WARNING,true);
		o.className=o.className.replace(" urEdf2TxtInv","");
		o.className+=" urEdf2TxtWarn";
  } else {
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.ERROR,false);
		o.className=o.className.replace(" urEdf2TxtInv","");
		o.className=o.className.replace(" urEdf2TxtWarn","");
  }
}
function sapUrMapi_InputField_setInvalid(sId,bSet,sTooltip) {
	var oIn=ur_get(sId);
	if (oIn.disabled || oIn.readonly || (ur_isSt(sId,ur_st.INVALID)&&bSet) || (!ur_isSt(sId,ur_st.INVALID)&&!bSet)) return;
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
	sapUrMapi_Label_setInvalid(oLbl,bSet);
	if(sTooltip!="") oIn.setAttribute("tt",sTooltip);
	ur_setSt(sId,ur_st.INVALID,bSet);
	if(bSet)
		oIn.className=oIn.className+" urEdf2TxtInv";
	else
    oIn.className=oIn.className.replace(" urEdf2TxtInv","");
}
function sapUrMapi_InputField_setDisabled(sId,bSet) {
	var oIn=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
  var oBtn=ur_get(sId+"-btn");
  
	if (bSet && !ur_isSt(sId,ur_st.DISABLED)) {
		sapUrMapi_Label_setDisabled(oLbl);
	  oIn.readOnly=true;
		oIn.className+=" urEdf2TxtDsbl";
		if(oBtn!=null) 
			oBtn.className=oBtn.className+"Dsbl";
		ur_setSt(sId,ur_st.DISABLED,bSet);	
	} 
	else if(!bSet && ur_isSt(sId,ur_st.DISABLED)){
		sapUrMapi_Label_setEnabled(oLbl);
	  oIn.readOnly=false;
    oIn.className=oIn.className.replace(" urEdf2TxtDsbl","");
		if(oBtn!=null)
			oBtn.className=oBtn.className.substring(0,oBtn.className.length-4);
		ur_setSt(sId,ur_st.DISABLED,bSet);
	}
}
function sapUrMapi_InputField_setReadonly(sId,bSet) {
	var oIn=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
  var oBtn=ur_get(sId+"-btn");
  
	if (bSet && !ur_isSt(sId,ur_st.READONLY)) {
		sapUrMapi_Label_setDisabled(oLbl);
	  oIn.readOnly=true;
		oIn.className+=" urEdf2TxtRo";
		ur_setSt(sId,ur_st.READONLY,bSet);
	} 
	else if(!bSet && ur_isSt(sId,ur_st.READONLY)){
		sapUrMapi_Label_setEnabled(oLbl);
	  oIn.readOnly=false;
		oIn.className=oIn.className.replace(" urEdf2TxtRo","");
		ur_setSt(sId,ur_st.READONLY,bSet);
	}
}
function sapUrMapi_InputField_keydown(sId,e){
	var o=ur_get(sId);
	var iKeyCode=e.keyCode;
	
	
	if((e.altKey && (iKeyCode==ur_KEYS.UP||iKeyCode==ur_KEYS.DOWN)) || iKeyCode==ur_KEYS.F4){
	  var oBtn=ur_get(sId+"-btn");
	  if(oBtn){
			oBtn.click();
	   }
		return ur_EVT_cancel(e);
	}
	
	
	if(iKeyCode==73 && e.ctrlKey  && e.shiftKey && !e.altKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		return ur_EVT_cancel(e);
	}
	
	
	if(iKeyCode==ur_KEYS.ESCAPE){
		if (sapUrMapi_DataTip_isOpen(sId)) {
			sapUrMapi_DataTip_hide(sId);
			return ur_EVT_cancel(e);
		}
	}
	
	
	
	var sDefaultValue=o.getAttribute("defval");
	if(sDefaultValue && o.value == sDefaultValue){
		var sNavigationKeys="|"+ur_KEYS.UP+"|"+ur_KEYS.DOWN+"|"+ur_KEYS.LEFT+"|"+ur_KEYS.RIGHT+"|"+ur_KEYS.POS1+"|"+ur_KEYS.END+"|";
		if(sNavigationKeys.indexOf("|"+iKeyCode+"|") >=0){
			return ur_EVT_cancel(e);		}				
	}	
}
function sapUrMapi_InputField_changeLabel(sId,sNewLabel){
	var o=ur_get(sId);
	o.setAttribute("lbl",sNewLabel);
}
function sapUrMapi_InputField_focus(sId,oEvt) {
	var o=ur_get(sId);
	
	
  o.onbeforedeactivate=new Function ("event","ur_get('"+sId+"').setAttribute('cp',ur_getSelection(ur_get('"+sId+"')))");
  
	
	sapUrMapi_DataTip_show(sId,"focus");
	
	
	ur_setEditCellColor(o);
	
	sapUrMapi_InputField_showLength(o,oEvt);
	
	sapUrMapi_InputField_showButton(o,oEvt);
	
	
	var sDefaultValue=o.getAttribute("defval");
	if(sDefaultValue && o.value == sDefaultValue){
		o.select();
		o.onclick=ur_InputField_click;
	}
	
	
	o.setAttribute("oldvalue",o.value);
	
}
function ur_InputField_click() {
	var o=ur_evtSrc(event);
	
	
	var sDefaultValue=o.getAttribute("defval");
	if(sDefaultValue && o.value == sDefaultValue){
		o.select();
	}
}
function sapUrMapi_InputField_focusWithFormat(sId,sFormat,oEvt) {
	var o=ur_get(sId);	
	sapUrMapi_InputField_focus(sId,oEvt);
    o.setAttribute("tp","DATE"); 
	if (ur_getAttD(o,"tp","")=="DATE") {
	   o.setAttribute("df",sFormat);
	}
}
function sapUrMapi_InputField_showLength(o,oEvt) {
	if ( o.getAttribute("showlength") != "true" 
	    || (parseInt(o.getAttribute("maxlength")) >= o.size)
	    
	    || sapUrMapi_isChildOfControl(o,"ST") ){ return; }
	
	if (urSizeDiv==null)
		sapUrMapi_InputField_initMask();
	
	var oR=o.parentNode;
	var oB=oR.lastChild;
	urInpSizes[o.id]  = o.size;
  urInpWidths[o.id] = o.style.width;
	urInpWidths["pWdth"]=o.offsetWidth;
	
  
  sapUrMapi_InputField_KeyUp(o.id);
}
function sapUrMapi_InputField_triggerOnChange(sId,sOldValue,sNewValue) {
  var oInp = ur_get(sId);
  if (sOldValue!=sNewValue) {
    if (oInp.onchange!=null) return oInp.onchange();
  }
}
function sapUrMapi_InputField_setValue(sId,sValue) {
  ur_get(sId).value=sValue;
}
function sapUrMapi_InputField_getValue(sId) {
  return ur_get(sId).value;
}
var oDatePicker;
var dActDate;
function sapUrMapi_Date_getArray(sFormat,sDate) {
  var q;
  if ( sFormat == 1 || sFormat == 4 )
    q=sDate.split(".");
  if ( sFormat == 2 || sFormat == 5 || sFormat == 7)
    q=sDate.split("/" );
  if ( sFormat == 3 || sFormat == 6 || sFormat == 8)
    q=sDate.split("-");
  for (var i=0;i<q.length;i++) {
  	var str=q[i];
		if(str.length==2 && str.charAt(0)=='0'){
		  str=str.charAt(1);
		}
		q[i]=parseInt(str);
  }
  return q;
}
function sapUrMapi_Date_normalize(sFormat,arrDate) {
  
	var Day=1;
	var Month=0;
	var Year=0;
	if(sFormat==1 || sFormat==7 || sFormat==8){
		Day=arrDate[0];
		Month=arrDate[1];
		Year=arrDate[2];
	}
	else if(sFormat==2 || sFormat==3){
		Day=arrDate[1];
		Month=arrDate[0];
		Year=arrDate[2];
	}
	else if(sFormat==4 || sFormat==5 || sFormat== 6){
		Day=arrDate[2];
		Month=arrDate[1];
		Year=arrDate[0];
	}
	var arrRet=new Array(3);
	arrRet[0]=Year;
	arrRet[1]=Month-1;
	arrRet[2]=Day;
	return arrRet;
}
function sapUrMapi_Date_make(sFormat,vYear,vMonth,vDay)
{
  var dateString;
  if ( sFormat == 1 )
    dateString=sapUrMapi_Date_setZero(parseInt(vDay)) + "." + sapUrMapi_Date_setZero(parseInt(vMonth)) + "." + vYear;
  if ( sFormat == 2 )
    dateString=sapUrMapi_Date_setZero(parseInt(vMonth)) + "/" + sapUrMapi_Date_setZero(parseInt(vDay)) + "/" + vYear;
  if ( sFormat == 3 )
    dateString=sapUrMapi_Date_setZero(parseInt(vMonth)) + "-" + sapUrMapi_Date_setZero(parseInt(vDay)) + "-" + vYear;
  if ( sFormat == 4 )
    dateString="" + vYear + "." + sapUrMapi_Date_setZero(parseInt(vMonth)) + "." + sapUrMapi_Date_setZero(parseInt(vDay));
  if ( sFormat == 5 )
    dateString="" + vYear + "/" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "/" + sapUrMapi_Date_setZero(parseInt(vDay));
  if ( sFormat == 6 )
    dateString="" + vYear + "-" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "-" + sapUrMapi_Date_setZero(parseInt(vDay));
  if ( sFormat == 7 )
    dateString=sapUrMapi_Date_setZero(parseInt(vDay)) + "/" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "/" + vYear;
  if ( sFormat == 8 )
    dateString=sapUrMapi_Date_setZero(parseInt(vDay)) + "-" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "-" + vYear;
  return dateString;
}
function sapUrMapi_InputField_showActualDatePicker(sId, oEvt) {
	  var dt=sapUrMapi_DateField_getDate(sId);
      sapUrMapi_InputField_showDatePicker(sId,dt.year,dt.month-1,dt.day,ur_system.firstdayofweek, oEvt);
}
function sapUrMapi_InputField_showDatePicker(sId,iYear,iMonth,iDay,iFirstDayOfWeek, oEvt,bNav) {
	oInput=ur_get(sId);
	if (ur_getAttD(oInput,"st","").indexOf("d")>-1) return;
	try {sapUrMapi_DataTip_hide(sId)} catch (ex){} 
	oEvt.cancelBubble=true;
	if (!bNav && ur_getAttD(oInput,"dp","0")=="1") {sapUrMapi_hideDatePicker();return;}
  if (typeof(iFirstDayOfWeek)=="undefined") {
  	iFirstDayOfWeek=ur_system.firstdayofweek;
  }
  if (isNaN(iYear) || isNaN(iMonth) || isNaN(iDay)) {
	  var dt=sapUrMapi_DateField_getDate(sId);
	  iYear=dt.year;
	  iMonth=dt.month;
	  iDay=dt.day;
	  if (isNaN(iYear) || isNaN(iMonth) || isNaN(iDay)) {
			var dt=new Date();
			iYear  = dt.getFullYear();
			iMonth = dt.getMonth();
			iDay   = dt.getDate();
		} 
  }
	var arrUrls;
	arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
	
	if (oDatePicker) 
	if(oDatePicker.frame.window.document.getElementsByTagName("DIV")[0].firstChild)
		if(oDatePicker.frame.window.document.getElementsByTagName("DIV")[0].firstChild.className=="urDataTipStd")
			oDatePicker=null;
  if (oDatePicker) {
    var oCal = sapUrMapi_DatePicker_make(sId,iYear,iMonth,iDay,iFirstDayOfWeek);
  	oDatePicker.frame.window.document.getElementsByTagName("DIV")[0].innerHTML=oCal.innerHTML;
		oDatePicker.frame.window.document.getElementById("dp").focus();
  } else {
    dActDate  = new Date(iYear,iMonth,iDay);
    var oCal = sapUrMapi_DatePicker_make(sId,iYear,iMonth,iDay,iFirstDayOfWeek);
    oDatePicker = new sapPopup(window,arrUrls,oCal,ur_get(sId+"-btn"),oEvt,0);
	if (ur_system.direction=="rtl")
	  oDatePicker.positionbehavior = sapPopupPositionBehavior.MENULEFT;
    else
	  oDatePicker.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
	oDatePicker.onblur = sapUrMapi_hideDatePicker;
	if (ur_system.direction=="rtl") {
	  oDatePicker.position.right=oDatePicker.position.right-1;
	} else {
	  oDatePicker.position.left=oDatePicker.position.left-1;
	}
	oDatePicker.position.top=oDatePicker.position.top-1;
  	oDatePicker.show();
		oDatePicker.inp=sId;
		oInput.setAttribute("dp","1");
		oDatePicker.frame.window.document.getElementById("dp").focus();
		window.document.attachEvent("onactivate",sapUrMapi_hideDatePicker);
	sDtPicker=true;
  }
	sapUrMapi_Focus_hideFocusRect();
}
function sapUrMapi_hideDatePicker() {
	var oOldFocus=null;
	if (window.event && window.event.type=="activate" && window.event.srcElement.id.indexOf(oDatePicker.inp+"-btn")>-1) {
	  return;
	}
	window.document.detachEvent("onactivate",sapUrMapi_hideDatePicker);
	if (oDatePicker) {
		oOldFocus=oDatePicker.source.object;
		var oInput=ur_get(oDatePicker.inp);
		oInput.setAttribute("dp","0");
		oDatePicker.onblur=null;
		try {
			if (document.activeElement==oInput || document.activeElement.id=="sapPopupMainId_X0" || document.activeElement.id.indexOf(oInput.id)>-1) {
				sapUrMapi_focusElement(oDatePicker.inp);
				ur_setSelection(oInput,oInput.getAttribute("cp"));
			}
		} catch (ex) {}
		oDatePicker.hide();
		oDatePicker=null;
		oPopup=null;
	}
	sDtPicker=false;
}
function sapUrMapi_DatePicker_select(sId,e) {
  var o = e.srcElement;
  var oInput=ur_get(sId);
  if(ur_isSt(sId,ur_st.READONLY))
	  return;
  while (o.tagName!="TD") {
  	o = o.parentNode;
  	if (o==null) return;
  }
	sDay = o.id;
	if (sDay==null || sDay=="") return;
  if (sDay) {
    var aDate = sDay.split("-");
    var arrValue=new Array();
    arrValue[0]=parseInt(aDate[2]);
    arrValue[1]=parseInt(aDate[1]);
    arrValue[2]=parseInt(aDate[0]);
 
 	  sapUrMapi_DateField_setDate(sId,arrValue[0],arrValue[1],arrValue[2]);
		e.cancelBubble=true;
		sapUrMapi_hideDatePicker();
		ur_setSelection(oInput,{pos:oInput.value.length,length:0}); 
  }
}
function sapUrMapi_DatePicker_keydown(hWnd,oEvt,sId) {
  var i=oEvt.keyCode;
  var oSrc=ur_EVT_src(oEvt);
  if (ur_system.direction == "rtl" && i==37) i=39;
  else if (ur_system.direction == "rtl" && i==39) i=37;
  if (i==16) { return; } 
  else if (i==33 && !oEvt.shiftKey) {
  	var oDomRef = hWnd.document.getElementById("prev");
  	if (oDomRef) oDomRef.click();
  }
  else if (i==34 && !oEvt.shiftKey) { 
  	var oDomRef = hWnd.document.getElementById("next");
  	if (oDomRef) oDomRef.click();
  }
  else if (i==33 && oEvt.shiftKey) { 
  	var oDomRef = hWnd.document.getElementById("prevyear");
  	if (oDomRef) oDomRef.click();
  }
  else if (i==34 && oEvt.shiftKey) { 
  	var oDomRef = hWnd.document.getElementById("nextyear");
  	if (oDomRef) oDomRef.click();
  }
  else if (i==9) {sapUrMapi_hideDatePicker();return;}
  
  else if (i==40 && oEvt.altKey) {sapUrMapi_hideDatePicker();return;}
  else if (i==115) {sapUrMapi_hideDatePicker();}
  else if (i==27) {sapUrMapi_hideDatePicker();return;}
  else if (i>=37 && i<=40) {
		if (i==37 && oSrc.previousSibling && oSrc.previousSibling.tagName=="TD") { oSrc.previousSibling.focus();  }
		else if (i==38) {
		  var idx=0;
		  while(oSrc.previousSibling) {oSrc=oSrc.previousSibling;idx++;}
		  if (oSrc.parentNode.previousSibling && oSrc.parentNode.previousSibling.childNodes[idx] && oSrc.parentNode.previousSibling.childNodes[idx].tagName=="TD") {
		    oSrc.parentNode.previousSibling.childNodes[idx].focus();
		  }
		} 
		else if (i==39 && oSrc.nextSibling && oSrc.nextSibling.tagName=="TD") { oSrc.nextSibling.focus();  }
		else if (i==40) {
		  var idx=0;
		  while(oSrc.previousSibling) {oSrc=oSrc.previousSibling;idx++;}
		  if (oSrc.parentNode.nextSibling && oSrc.parentNode.nextSibling.childNodes[idx] && oSrc.parentNode.nextSibling.childNodes[idx].tagName=="TD") {
		    oSrc.parentNode.nextSibling.childNodes[idx].focus();
		  }
		} 
  } 
  else if (i==13 || i==32) {sapUrMapi_DatePicker_select(sId,oEvt);oEvt.keyCode=0;}
  else {sapUrMapi_hideDatePicker();}
  
  ur_EVT_cancel(oEvt);
  return false;
}
function sapUrMapi_Date_setZero(iInt) {
	return iInt<10?"0"+iInt:iInt;
}
function sapUrMapi_DatePicker_focus(me,oEvt,sId) {
  var oTD=me.document.getElementById(sId);
  if (!oTD) oTD=me.document.getElementsByTagName("TD")[4];
  me.onblur=null;
  oTD.focus();
}
function sapUrMapi_DatePicker_make(sId,iYear,iMonth,iDay,iFirstDayOfWeek) {
	if (iYear < 0 ) {
		iYear = 0;
		iMonth = 0;
	}
  var arrTmp = ur_txt[ur_language];
  var hasValue = document.getElementById(sId).value==ur_InputField_getFormattedDateString(sId,iDay,iMonth+1,iYear);
  if (aMonthNames==null) aMonthNames = new Array (arrTmp["SAPUR_JANUARY"],arrTmp["SAPUR_FEBRUARY"],arrTmp["SAPUR_MARCH"],arrTmp["SAPUR_APRIL"],arrTmp["SAPUR_MAY"],arrTmp["SAPUR_JUNE"],arrTmp["SAPUR_JULY"],arrTmp["SAPUR_AUGUST"],arrTmp["SAPUR_SEPTEMBER"],arrTmp["SAPUR_OCTOBER"],arrTmp["SAPUR_NOVEMBER"],arrTmp["SAPUR_DECEMBER"]);
  if (aDayNameAbbrevs==null)   aDayNameAbbrevs   = new Array (arrTmp["SAPUR_SUNDAY_ABBREV"],arrTmp["SAPUR_MONDAY_ABBREV"],arrTmp["SAPUR_TUESDAY_ABBREV"],arrTmp["SAPUR_WEDNESDAY_ABBREV"],arrTmp["SAPUR_THURSDAY_ABBREV"],arrTmp["SAPUR_FRIDAY_ABBREV"],arrTmp["SAPUR_SATURDAY_ABBREV"]);
  if (aDayCount==null)  aDayCount = new Array (31,28,31,30,31,30,31,31,30,31,30,31);
  sapUrMapi_Date_setDayCount(iMonth,iYear);
  if (typeof(iFirstDayOfWeek)=="undefined") {
  	iFirstDayOfWeek=ur_system.firstdayofweek;
  }
  var oCal = ur_get("ur-date-picker");
  if (!oCal) {
	  var oBody = document.getElementsByTagName("BODY")[0];
	  var oCal = document.createElement("SPAN");
	  oCal.id="ur-date-picker";
	  oCal.style.position="absolute";
	  if (ur_system.direction=="rtl") {
	    oCal.style.right="25";
	  } else {
	    oCal.style.left="0";
	  }
	  oCal.style.top="-1999px";
	  oBody.appendChild(oCal);
  }
  var sCalHtml = "<table onfocus=\"me.sapUrMapi_DatePicker_focus(window,event,'"+iYear+"-"+(iMonth+1)+"-"+iDay+"');\" onkeydown=\"return me.sapUrMapi_DatePicker_keydown(window,event,'"+sId+"')\" id=\"dp\" onclick=\"me.sapUrMapi_DatePicker_select('"+sId+"',event);\" class=urCalPicWhl cellpaddding=0 cellspacing=0 border=0 style=\"border-bottom:solid 1px;border-collapse:collapse\"><tr>";
  var o=ur_get(sId);
  var bRO=o.readOnly;
  var pm = iMonth-1;
  var nm = iMonth+1;
  var dy = iDay;
  var py = iYear;
  var ny = iYear;
  if (pm==-1) {pm = 11;py--;}
  if (nm==12) {nm = 0;ny++;}
  if (dy>28) {dy=25}
  if (ur_system.direction=="rtl") {
		if(iYear==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevYearDsbl\">&nbsp;</td>";
		} else {
		  sCalHtml    += "<td id=\"prevyear\" class=\"urCalArrPrevYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear-1)+","+iMonth+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		if(iYear==0 && iMonth==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevDsbl\">&nbsp;</td>";
		} else {
		  sCalHtml    += "<td id=\"prev\" class=\"urCalArrPrev\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+py+","+pm+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		sCalHtml    += "<td colspan=4 class=urCalHdr nowrap align=center>"+aMonthNames[iMonth]+" "+iYear+"</td>";
		if(iYear==9999) {
		  if (iMonth==11) 
  				sCalHtml  += "<td id=\"next\" class=\"urCalArrNextDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
			else
				sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYearDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
		} else {
			sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear+1)+","+iMonth+","+iDay+","+iFirstDayOfWeek+",event,true);\">";
		}
	} else {
		if(iYear==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevYearDsbl\">&nbsp;</td>";
		} else {
		  sCalHtml    += "<td id=\"prevyear\" class=\"urCalArrPrevYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear-1)+","+iMonth+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		if(iYear==0 && iMonth==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevDsbl\">&nbsp;</td>";
		} else {
		  sCalHtml    += "<td id=\"prev\" class=\"urCalArrPrev\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+py+","+pm+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		sCalHtml    += "<td colspan=4 class=urCalHdr nowrap align=center>"+aMonthNames[iMonth]+" "+iYear+"</td>";
		if(iYear==9999) {
		  if (iMonth==11) 
  			sCalHtml  += "<td id=\"next\" class=\"urCalArrNextDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
			else
				sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYearDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
		} else {
			sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear+1)+","+iMonth+","+iDay+","+iFirstDayOfWeek+",event,true);\">";
		}
	}
  sCalHtml    += "&nbsp;";
  sCalHtml    += "</td>";
  sCalHtml    += "</tr>";
  sCalHtml    += "<tr>";
  iLastDayOfWeek = iFirstDayOfWeek-1;
  if (iLastDayOfWeek==-1) iLastDayOfWeek=6;
  
  if (ur_system.direction=="rtl") {
    sCalHtml    += "<th class=urCalName style=\"border-left:0px none\">&nbsp;</td>";
  } else {
    sCalHtml    += "<th class=urCalName style=\"border-right:0px none\">&nbsp;</td>";
  }
  for (var i=iFirstDayOfWeek;i<aDayNameAbbrevs.length;i++) {
    if (aDayNameAbbrevs.length>3) {
      aDayNameAbbrevs[i]=aDayNameAbbrevs[i].substring(0,3);
    }
    sCalHtml    += "<th class=urCalName>"+aDayNameAbbrevs[i]+"</td>";
  }
  for (var i=0;i<iFirstDayOfWeek;i++) {
    if (i==iLastDayOfWeek) {
      if (ur_system.direction=="rtl") {
        sCalHtml    += "<td class=urCalName style=\"border-left:0px none\">"+aDayNameAbbrevs[i]+"</td>";
      } else {
        sCalHtml    += "<td class=urCalName style=\"border-right:0px none\">"+aDayNameAbbrevs[i]+"</td>";
      }
    } else {
      sCalHtml    += "<td class=urCalName>"+aDayNameAbbrevs[i]+"</td>";
    }
  }
  var dDate  = new Date(iYear,iMonth,1,12);
  dDate.setFullYear(iYear);
  var dStart=dDate;
  dStart = new Date(dStart.getTime()-((dStart.getDay()-iFirstDayOfWeek)*1000*60*60*24));
  if (dStart.getDate() >= 1 && dStart.getDate() <= 7) dStart = new Date(dStart.getTime()-(7*1000*60*60*24));
  var iFirstWeekCode=30;                                                   
  
  var iMinimalDaysInFirstWeek=ur_system.minimalDaysInFirstWeek;
  if (!iMinimalDaysInFirstWeek) iMinimalDaysInFirstWeek=4;
		
	for (var i=0;i<6;i++) {
    var oDateObj=new Date();
    var weekNum=ur_getWeek(dStart,iMinimalDaysInFirstWeek);
		
    sCalHtml    += "<tr class=urCalRow";
    if (!bRO) sCalHtml    += " style=\"cursor:hand;height:18px\"";
		sCalHtml    += ">";
		
    sCalHtml    +=                                                           
		"<th class=urCalName style='border-style:none" +                         
		((i<5)?" none solid none":"")+" !important;'>" +                         
		weekNum+"</th>";                                       
    for (var n=0;n<7;n++) {
				var sClass="";
            var sId="id="+dStart.getFullYear()+"-"+(dStart.getMonth()+1)+"-"+dStart.getDate();
            if (dStart.getFullYear()<0 || dStart.getFullYear()>9999) {
            	sId="";
            } 
	  		if (dStart.getMonth()!=iMonth) {
	  			sClass="urCalIna";
	  		} else {
	  			sClass="";
	  		}
	  		if ((dStart.getYear()==dActDate.getYear()) && (dStart.getMonth()==dActDate.getMonth()) && (dStart.getDate()==dActDate.getDate() && hasValue)) {
	  			sClass+=" urMnuRowOn";
	  		}
	  		sCalHtml+="<td ti=\"0\" tabindex=0";
				if (n==0) {
				  if (ur_system.direction=="rtl")
				    sCalHtml+=" style=\"border-right-style:solid\"";
				  else    
	  		        sCalHtml+=" style=\"border-left-style:solid\"";
	  		}
	  		if ((dStart.getYear()==new Date().getYear()) && (dStart.getMonth()==new Date().getMonth()) && (dStart.getDate()==new Date().getDate())) {
	        var sCursor = "cursor:hand";
	        if (dStart.getFullYear()<0 || dStart.getFullYear()>9999) {
	        	sCursor = "cursor:default!important"
	        }
	        if (sClass!="") {
	          sCalHtml+=" class="+sClass+" "+sId+"><div style=\"margin:-1;"+sCursor+";background-color:transparent\" class=urCalTod>"+dStart.getDate()+"</div></td>";
	        } else {
	          sCalHtml+=" "+sId+"><div style=\"margin:-1;"+sCursor+";background-color:transparent;height:18px\" class=urCalTod>"+dStart.getDate()+"</div></td>";
	        }
	  		} else {
	  		  if (sClass!="") {
	          	sCalHtml+=" "+sId+" class="+sClass+">"+dStart.getDate()+"</td>";
	       	 } else {
	          sCalHtml+=" "+sId+">"+dStart.getDate()+"</td>";
	        }
	  		}
	  		var oldStart = dStart;
	  		dStart = new Date(dStart.getTime()+(1000*60*60*24));
	  		if (dStart.getDate()==oldStart.getDate()) {
	  		  
	  		  dStart = new Date(dStart.getTime()+(1000*60*60*1));
	  		}
	  		if (dStart.getHours()==1) {
	  		  dStart = new Date(dStart.getTime()-(1000*60*60*1));
	  		}
  	}
    sCalHtml    += "</tr>";
  }
  sCalHtml    += "</tr></table>";
  oCal.innerHTML=sCalHtml;
  return oCal;
}
function sapUrMapi_Date_setDayCount(iMonth, iYear) {
	if ((iMonth == 1) && ((iYear % 400 == 0)) || ((iYear % 4 == 0) && (iYear % 100 != 0))) aDayCount[1] = 29;
}
var urSizeDiv = null;
var urInpSizes = new Array();
var urInpWidths = new Array();
function sapUrMapi_InputField_KeyUp(id, event) {
	var spaceTxt = "";
	var spaceChar = "0";
	var o=ur_get(id);
	var maxChars = parseInt(o.getAttribute("maxlength"));
	var oR=o.parentNode;
	var oB=ur_get(id+"-btn");
	
	if (o.getAttribute("showlength")!="true" || maxChars >= o.size 	    
	   
	   || sapUrMapi_isChildOfControl(o,"ST") ){ return; }
	
	
	if (urSizeDiv==null) sapUrMapi_InputField_initMask();
	
	
	spaceTxt = sapUrMapi_InputField_getValue(id);
	
	
	for (var i=spaceTxt.length; i < maxChars; i++)
		spaceTxt += spaceChar;
	urSizeDiv.innerHTML = spaceTxt;
	
	
	
		
	
	if( oR.tagName=="TD" ){
		oR.nextSibling.style.width = urInpWidths["pWdth"] - urSizeDiv.offsetWidth;
	}
	
	else{
		o.nextSibling.style.width = urInpWidths["pWdth"] - urSizeDiv.offsetWidth - 1;
		o.nextSibling.style.height = o.offsetHeight;
		
		if(oB!=null)
			oB.parentNode.className = oB.parentNode.className.split(" ")[0] + " urEdf2BtnBrd";
	}
	
	o.style.width = urSizeDiv.offsetWidth;
}
function sapUrMapi_InputField_Blur(id, oEvt) {
	var o=ur_get(id);
	
	
	ur_removeEditCellColor();
	
	
	if (sDtPicker==true)sDtPicker=false;
	
	
	else sapUrMapi_DataTip_hide(id);
  
	sapUrMapi_InputField_hideButton(o,oEvt);
	
	if (ur_getAttD(o,"tp","")=="DATE") {
	  sapUrMapi_DateField_checkDate(id);
	}
	
	
	if(document.selection){
		try{
	        if(document.selection.type!="None" &&
	           document.selection.createRange().text!="" && 
	           document.selection.createRange().text==o.value && 
	           document.activeElement &&
	           document.activeElement.tagName != "INPUT") {
			   
		document.selection.collapse();
		document.selection.empty();
	}
	
		} catch(err){}
	}
	
	
	var sOldValue=o.getAttribute("oldvalue");
	if(sOldValue!=o.value){
		o.onchange();
	}	
	
	
	
	if (!urInpSizes[id] || o.getAttribute("showlength")!="true" 
		  
	    || sapUrMapi_isChildOfControl(o,"ST") ){ return; }
	o.size = urInpSizes[id];
	o.style.width = urInpWidths[id];
	var oR = o.parentNode;
	var oB=ur_get(id+"-btn");
	
	if( oR.tagName=="TD" ){
		oR.nextSibling.style.width = "0px";
	}
	
	else{
		o.nextSibling.style.width = "0px";
		
		if(oB!=null)
			oB.parentNode.className = oB.parentNode.className.replace("urEdf2BtnBrd","");
	}
}
function sapUrMapi_InputField_initMask() {
	if (urSizeDiv == null) {
		urSizeDiv = document.createElement("DIV");
		
		urSizeDiv.id = "UKL_DIV";
		urSizeDiv.className = "urEdfTxtEnbl";
		urSizeDiv.style.position = "absolute";
		if (ur_system.direction=="rtl") {
		  urSizeDiv.style.right = "0";
		} else {
		  urSizeDiv.style.left = "0";
		}
		urSizeDiv.style.top = "0";
		urSizeDiv.style.zIndex = "9999";
		urSizeDiv.style.visibility = "hidden";
		urSizeDiv.innerHTML = "aaa";
		document.body.appendChild(urSizeDiv);
	}
}
function sapUrMapi_InputField_change(sId,oEvt) {
	var o=ur_get(sId);
	
	o.setAttribute("oldvalue",o.value);
}
function sapUrMapi_InputFieldHelpClick(sId,oEvt) {
	var o=ur_get(sId);	
	sInpSrcEl="BUTTON";
	if (o.getAttribute("dp")!="1") {
	o.onfocus();
  sapUrMapi_InputField_showActualDatePicker(sId,oEvt);
	} else {
	  sapUrMapi_hideDatePicker();
	}
}
function sapUrMapi_InputField_showButton(o,oEvt){
	var oBtn=ur_get(o.id+"-btn");
	
	if(oBtn==null || oBtn.offsetTop>=0) return;
	
	
	var iTop=o.offsetTop;
	var oParent=o.offsetParent;
	while(oParent!=document.body){
		if(oParent.style.position=="absolute" || oParent.style.overflow=="auto" || oParent.style.overflow=="scroll") 
			break;
		iTop+=oParent.offsetTop;
		oParent=oParent.offsetParent;
	}
	oBtn.style.top=iTop;
}
function sapUrMapi_InputField_hideButton(o,oEvt){
	var oBtn=ur_get(o.id+"-btn");
	if(oBtn==null || oBtn.style.position!="absolute")return;
	ur_callDelayed("ur_get('"+oBtn.id+"').style.top='-900px'",150);
}
function sapUrMapi_InputField_onselectstart(sId,oEvt)
{
	var o=ur_get(sId);
	if(ur_isSt(sId,ur_st.DISABLED))
    {
		ur_EVT_cancel(oEvt);
	}
}
function sapUrMapi_DateField_checkDate(sId) {
  
  
  
}
function sapUrMapi_DateField_getDate(sId) {
  var dToday=new Date();
  var sValue=sapUrMapi_InputField_getValue(sId);
  if (sValue=="") return {day:iDay,month:iMonth,year:iYear};
  var sPattern=ur_DateField_getDatePattern(sId);
  var sLongPattern=sPattern;
  var dgtsYr=0;
  
  var sFindNumber="0123456789";
  var sFindPattern="dMy";
  var iDay,iMonth,iYear;
  var iErrors=0;
	while(sFindNumber.indexOf(sValue.charAt(0))==-1) {
		sValue=sValue.substring(1);
		iErrors++;
	}
	while(sFindNumber.indexOf(sValue.charAt(sValue.length-1))==-1) {
	  sValue=sValue.substring(0,sValue.length-1);
		iErrors++;
	}
  
  var sRegPattern="([^0-9])";
  var reg=new RegExp(sRegPattern,"ig");
  var arr=reg.exec(sValue);
  var xValue=sValue;
	var sCh=RegExp.$1;
	var sCh1;
	var twodelimiters=false;
	
	 try{
	xValue=sValue.split(sCh);
  if (xValue.length != 3)
  {
	var reg1=new RegExp(sRegPattern,"ig");
	var stempval=xValue[1];
	if(stempval!=null)
	while(reg1.exec(stempval))
	{
		var arr1= reg1.exec(stempval);
		sCh1=RegExp.$1;
		xValue=stempval.split(sCh1);
		stempval=xValue[1];
	}
	}
 
	
	if(sCh1!=null) {
	twodelimiters=true;
	if (sValue.indexOf(sCh) > sValue.indexOf(sCh1))
	{
		var tmp=sCh1;
		sCh1=sCh;
		sCh=tmp;
		
	}
	}
	}catch(Exp){}
    reg=new RegExp(sRegPattern,"ig");
    arr=reg.exec(sValue);
	if (reg.lastIndex>0) {
    if (sValue.indexOf(sCh)==4 || sValue.indexOf(sCh)==3) {
		  xValue=sPattern.replace("yyyy",sValue.substring(0,sValue.indexOf(sCh)));
				  if(twodelimiters)
			{
			  xValue=xValue.replace("MM",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh1)));
			  xValue=xValue.replace("M",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh1)));
			  xValue=xValue.replace("dd",sValue.substring(sValue.lastIndexOf(sCh1)+1));
			  xValue=xValue.replace("d",sValue.substring(sValue.lastIndexOf(sCh1)+1));
			}
	      else
			{
  xValue=xValue.replace("MM",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh)));
		  xValue=xValue.replace("M",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh)));
		  xValue=xValue.replace("dd",sValue.substring(sValue.lastIndexOf(sCh)+1));
		  xValue=xValue.replace("d",sValue.substring(sValue.lastIndexOf(sCh)+1));
			}
		  sValue=xValue;
    }
  }
	while(sFindPattern.indexOf(sPattern.charAt(sPattern.length-1))==-1) sPattern=sPattern.substring(0,sPattern.length-1);
  while (sPattern.indexOf(" ")>-1) sPattern=sPattern.replace(" ","");
  while (sValue.indexOf(" ")>-1) {
		
    sValue=sValue.replace(" ","");
  }
  if (iErrors>3) return {day:iDay,month:iMonth,year:iYear};
  
  
  var reg=ur_DateField_getRegExpTest(sValue,sPattern);
  if (reg.lastIndex>0) {
    
    
    var iDayPos=sPattern.indexOf("d");
    var iMonthPos=sPattern.indexOf("M");
    var iYearPos=sPattern.indexOf("y");
    var sDay,sMonth,sYear="";
    if(iDayPos != -1)
    {    
		if (iDayPos<iMonthPos && iDayPos<iYearPos) sDay=RegExp.$1;
    if (iDayPos>iMonthPos && iDayPos<iYearPos) sDay=RegExp.$2;
    if (iDayPos<iMonthPos && iDayPos>iYearPos) sDay=RegExp.$2;
    if (iDayPos>iMonthPos && iDayPos>iYearPos) sDay=RegExp.$3;
    if (iMonthPos==-1)
		{
		if( iDayPos<iYearPos) sDay=RegExp.$1;
		else
		if(iDayPos>iYearPos) sDay=RegExp.$2;
		}
	if (iYearPos==-1)
		{
		if( iDayPos<iMonthPos) sDay=RegExp.$1;
		else
		if(iDayPos>iMonthPos) sDay=RegExp.$2;
		}
    if(iMonthPos==-1 && iYearPos==-1)
		sDay=RegExp.$1;
		
		while (sDay.indexOf("0")==0 && sDay.length>1) sDay=sDay.substring(1);
		iDay=parseInt(sDay);
		if (iDay==0) iDay=1;
	}
	else
	{iDay=-1;}
	if (iMonthPos != -1	)
	{
    if (iMonthPos<iDayPos && iMonthPos<iYearPos) sMonth=RegExp.$1;
    if (iMonthPos>iDayPos && iMonthPos<iYearPos) sMonth=RegExp.$2;
    if (iMonthPos<iDayPos && iMonthPos>iYearPos) sMonth=RegExp.$2;
    if (iMonthPos>iDayPos && iMonthPos>iYearPos) sMonth=RegExp.$3;
    
    if (iDayPos==-1)
		{
		if( iMonthPos<iYearPos) sMonth=RegExp.$1;
		else
		if(iMonthPos>iYearPos) sMonth=RegExp.$2;
		}
	if (iYearPos==-1)
		{
		if( iMonthPos<iDayPos) sMonth=RegExp.$2;
		else
		if(iMonthPos>iDayPos) sMonth=RegExp.$1;
		}
	if(iDayPos==-1 && iYearPos==-1)
		sMonth=RegExp.$1;
		
   
    while (sMonth.indexOf("0")==0 && sMonth.length>1) sMonth=sMonth.substring(1);
		iMonth=parseInt(sMonth);
	}
	else
		iMonth=-1;
	if(iYearPos != -1)
	{
    if (iYearPos<iMonthPos && iYearPos<iDayPos) sYear=RegExp.$1;
    if (iYearPos>iMonthPos && iYearPos<iDayPos) sYear=RegExp.$2;
    if (iYearPos<iMonthPos && iYearPos>iDayPos) sYear=RegExp.$2;
    if (iYearPos>iMonthPos && iYearPos>iDayPos) sYear=RegExp.$3;
    
    if (iDayPos==-1)
		{
		if(iMonthPos<iYearPos) sYear=RegExp.$2;
		else
		if(iMonthPos>iYearPos) sYear=RegExp.$1;
		}
	if (iMonthPos==-1)
		{
		if(iYearPos<iDayPos) sYear=RegExp.$1;
		else
		if(iYearPos>iDayPos) sYear=RegExp.$2;
		}
	if(iDayPos==-1 && iMonthPos==-1)
		sYear=RegExp.$1;    
	dgtsYr=sYear.length;
    while (sYear.indexOf("0")==0 && sYear.length>1) sYear=sYear.substring(1);
		iYear=parseInt(sYear);
	}
	else
	iYear =-1;
		var arrMonth=new Array(0,31,29,31,30,31,30,31,31,30,31,30,31);
  	if (isNaN(iYear) && isNaN(iMonth) && isNaN(iDay)) return {day:iDay,month:iMonth,year:iYear};
		if (isNaN(iYear)) iYear=dToday.getFullYear();
		if (isNaN(iMonth)) iMonth=dToday.getMonth()+1;
		if (isNaN(iDay) && iMonth==dToday.getMonth()+1) iDay=dToday.getDate();
		if (isNaN(iDay) && iMonth!=dToday.getMonth()+1) iDay=1;
		if (isNaN(iYear) || isNaN(iMonth) || isNaN(iDay)) return {day:iDay,month:iMonth,year:iYear};
		if (iMonth>12) iMonth=12;
		if (iMonth<1) iMonth=1;
		if (iDay>arrMonth[iMonth]) iDay=arrMonth[iMonth];
		if ( dgtsYr != 4 && dgtsYr !=0)
		{
		if (iYear<=20) iYear+=	2000;
		else if (iYear>20 && iYear<=99) iYear+=1900;
		}
		if (iMonth==2 && iDay==29 && (!ur_DateField_isLeapYear(iYear))) iDay=28;
    return {day:iDay,month:iMonth,year:iYear};
  } else {
  	
    return {day:iDay,month:iMonth,year:iYear};
  }
  oEvt.returnValue=false;
  
}
function ur_DateField_getRegExpTest(sValue,sPattern) {
  var sPatternNew="";
  var sEscapeChars="()*$[]\/^{}|. -";
  var sFindNumberPattern="dMy";
  var bFoundNumber=false;
  for (var j=0;j<sPattern.length;j++) {
    if (!bFoundNumber && sFindNumberPattern.indexOf(sPattern.charAt(j))>-1) bFoundNumber=true;
    if (bFoundNumber) {
			if (sEscapeChars.indexOf(sPattern.charAt(j))>-1) sPatternNew=sPatternNew+"[^0-9]{0,1}";
			else sPatternNew+=sPattern.charAt(j);
		}
  }
  sRegPattern=sPatternNew.replace("dd","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("MM","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("yyyy","([0-9]{1,4})");
  sRegPattern=sRegPattern.replace("yy","([0-9]{1,4})");
  var reg=new RegExp(sRegPattern,"ig");
  var arr=reg.exec(sValue);
	if (reg.lastIndex==0) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("MM","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("yyyy","([0-9]{1,4})");
		sRegPattern=sRegPattern.replace("yy","([0-9]{1,4})");
		var reg=new RegExp(sRegPattern,"ig");
		var arr=reg.exec(sValue);
  }
  if (reg.lastIndex==0 && sValue.length>2) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{2,2})");
		sRegPattern=sRegPattern.replace("MM","([0-9]{2,2})");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("yyyy","");
		sRegPattern=sRegPattern.replace("yy","");
		if (sRegPattern.indexOf("\\(")==-1 && sRegPattern.indexOf("\\)")==-1) {
		  sRegPattern=sRegPattern.substring(sRegPattern.indexOf("("),sRegPattern.lastIndexOf(")")+1);
		}
		var reg=new RegExp(sRegPattern,"ig");
	  var arr=reg.exec(sValue);
	}
  if (reg.lastIndex==0 && sValue.length>2) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("MM","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("yyyy","");
		sRegPattern=sRegPattern.replace("yy","");
		if (sRegPattern.indexOf("\\(")==-1 && sRegPattern.indexOf("\\)")==-1) {
		  sRegPattern=sRegPattern.substring(sRegPattern.indexOf("("),sRegPattern.lastIndexOf(")")+1);
		}
		var reg=new RegExp(sRegPattern,"ig");
	  var arr=reg.exec(sValue);
	}
  if (reg.lastIndex==0) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{2,2})");
		sRegPattern=sRegPattern.replace("MM","");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","");
		sRegPattern=sRegPattern.replace("yyyy","");
		sRegPattern=sRegPattern.replace("yy","");
		if (sRegPattern.indexOf("\\(")==-1 && sRegPattern.indexOf("\\)")==-1) {
		  sRegPattern=sRegPattern.substring(sRegPattern.indexOf("("),sRegPattern.lastIndexOf(")")+1);
		}
		var reg=new RegExp(sRegPattern,"ig");
	  var arr=reg.exec(sValue);
	}
	return reg;
}
function ur_DateField_isLeapYear(iYear) {
  return ((iYear % 400 == 0) || ((iYear % 4 == 0) && (iYear % 100 != 0)));
}
function ur_InputField_getFormattedDateString(sId,iDay,iMonth,iYear) {
  var sPattern=ur_DateField_getDatePattern(sId);
  var sFormat=sPattern;
  var s=sPattern.replace("dd",ur_DateField_addZero(iDay));
  s=s.replace("MM",ur_DateField_addZero(iMonth));
  if (iYear<10)
  	s=s.replace("yyyy","000"+iYear);
  else if (iYear<100)
  	s=s.replace("yyyy","00"+iYear);
  else if (iYear<1000) {
  	s=s.replace("yyyy","0"+iYear);
  } else {
  	s=s.replace("yyyy",""+iYear);
  }
  if (iYear<1950) {
    s=s.replace("yy",iYear+"");
  } else {
    s=s.replace("yy",(iYear+"").substring(2));
  }
  s=s.replace("d",iDay+"");
  s=s.replace("M",iMonth+"");
  return s; 
}
function sapUrMapi_DateField_setDate(sId,iDay,iMonth,iYear) {
  var s=ur_InputField_getFormattedDateString(sId,iDay,iMonth,iYear);
	sapUrMapi_InputField_setInvalid(sId,false,"");
	var oldValue=sapUrMapi_InputField_getValue(sId);
	sapUrMapi_InputField_setValue(sId,s)
	sapUrMapi_InputField_triggerOnChange(sId,oldValue,s);
}
function ur_DateField_getDatePattern(sId) {
	var o=ur_get(sId);
	var sFormatString="";
	if (ur_getAttD(o,"tp","")=="DATE") {
	  sFormatString=ur_getAttD(o,"df","");
	}
	if (sFormatString=="") {
	  sFormatString=ur_system.dateformatstring;
	}
	if (sFormatString!=null && sFormatString!="") 
		{
		while(sFormatString.indexOf("'")>-1) {sFormatString=sFormatString.replace("'","");}
		return sFormatString;
		}
	var iFormat=ur_system.dateformat;
	if (iFormat==1) return "dd.MM.yyyy";
	else if (iFormat==2) return "MM/dd/yyyy";
	else if (iFormat==3) return "MM-dd-yyyy";
	else if (iFormat==4) return "yyyy.MM.dd";
	else if (iFormat==5) return "yyyy/MM/dd";
	else if (iFormat==6) return "yyyy-MM-dd";
	else if (iFormat==7) return "dd/MM/yyyy";
	else if (iFormat==8) return "dd-MM-yyyy";
	else return "MM/dd/yyyy";
}
function ur_DateField_addZero(i) {
  return i<10&&i>0?"0"+i:""+i;
}
function ur_getWeek(oDate,minDays) { 
  if (oDate.getFullYear() < 500) return "";
  var x1day = 864e5;
  var x7days = 7*x1day;
  if (oDate.getDay()==0) oDate=new Date(oDate.getFullYear(), oDate.getMonth(), oDate.getDate()+1);
  var oDateISO = (Date.UTC(oDate.getFullYear(), oDate.getMonth(), oDate.getDate())/x1day)+(7-minDays);
  var iAbsoluteWeekNum = Math.floor(oDateISO/7); 
  var iWeekYearNum = new Date(iAbsoluteWeekNum*x7days).getUTCFullYear();
  return iAbsoluteWeekNum - Math.floor(Date.UTC(iWeekYearNum-1, 11, 31)/x7days) 
}
if(!ur_system.is508)
   window.document.attachEvent("onkeydown", ur_focusRoInp);
function ur_focusRoInp(oEvt){
	
	if (oEvt.altKey) return;
	
	var iKey = oEvt.keyCode;
	var bNext = iKey == 78; 
	var bPrevious = iKey == 66; 
	
	if (oEvt.ctrlKey && oEvt.shiftKey) {
		if (bNext == true || bPrevious == true) {
			var oSource = ur_EVT_src(oEvt);
			
			var oFind = (iKey == 78) ? ur_findNextFocusableElement(oSource) : ur_findPreviousFocusableElement(oSource);
				
			while(oFind != null){
				if(oFind.getAttribute("st") && oFind.getAttribute("st").indexOf("r") > -1 && oFind.getAttribute("ct")=="I")
				   break;
				else
				   oFind = (iKey == 78) ? ur_findNextFocusableElement(oFind) : ur_findPreviousFocusableElement(oFind);
			}
			
			if(oFind != null)
				ur_focus(oFind);
		}
	}
}

//** InputTokenizer.ie5 **

var oLastSelTextRange = null;
function sapUrMapi_InputTokenizer_MouseUp(oEvt) {
	var oClicked=oEvt.srcElement;
	
	if (oClicked.st=="v"){
		var oValid=ur_getValidTokenizerRange(sapUrMapi_getRootControl(oClicked).id,oEvt);
		if(oValid!=false)
		oValid.select();
	}
	if(oClicked.ct=="IT"){
		if(oClicked.delimiter=="" && oClicked.firstChild.st=="v")
		ur_EVT_cancel(oEvt);
	}
}
function sapUrMapi_InputTokenizer_Click(sId,oEvt) {
	var oInp = ur_getTokenizerObj(sId);
	if(oInp.ref.st=="d"){
		ur_focus(oInp);
		return;
	}
	
	var oTknt=oEvt.srcElement;
	if (oTknt.st=="v"){
		var oValid=ur_getValidTokenizerRange(sId,oEvt);
		if(oValid!=false)
		oValid.select();
	}
	if(oEvt.srcElement.getAttribute("ocl")==null)return;
	else ur_EVT_fire(oEvt.srcElement,"ocl",oEvt);
}
function ur_InpTkn_conTxt(sId,oEvt){
	var oClicked=oEvt.srcElement;
	
	if (oClicked.st=="v"){
		var oValid=ur_getValidTokenizerRange(sapUrMapi_getRootControl(oClicked).id,oEvt);
		if(oValid!=false)
		oValid.select();
	}
	if(oClicked.ct=="IT"){
		if(oClicked.delimiter=="" && oClicked.firstChild.st=="v")
		ur_EVT_cancel(oEvt);
	}
}
function sapUrMapi_InputTokenizer_KeyDown(sId,oEvt) {
	var o = ur_getTokenizerObj(sId);
	var iKey =oEvt.keyCode;
	
	if(o.ref.status=="d")
		return;
	if(iKey==13){
		if(o.bssv==false && oEvt.ctrlKey){
			sapUrMapi_InputTokenizer_markValidTokens(sId);
			oEvt.keyCode=35;
		}
		else if(!oEvt.ctrlKey){
			oEvt.ur_param = new Object();
			oEvt.ur_param.value=o.ref.text;
		  	ur_EVT_fire(o.ref,"onek",oEvt);
		  	ur_EVT_cancel(oEvt);
	  	}
		return;
	}
	if(iKey==115){
		if(o.f4!=null)
		  ur_EVT_fire(o.f4,"ocl",oEvt);
		return ur_EVT_cancel(oEvt);
	}
		if(o.items[0]==null){
		
		ur_EVT_cancelBubble(oEvt);
		return;	
	}
	var oSelection = document.selection.createRange();
	var sCharKey=",48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111,186,187,188,189,190,191,192,219,220,221,222,";
	var sNavKey=",46,37,39,35,36,40,38,";
	var sFunctionKey=",8,46,37,39,35,36,9,40,38,115,13,";
	var sDelKey=",8,32,46,88,";
	if(oEvt.ctrlKey && o.single){
		if(iKey==65){
			var range = ur_getValidTokenizerRange(o.ref.id,oEvt,oSelection);
			if(range==false)return;
			   range.select();
			   return ur_EVT_cancel(oEvt);
		 }
	}else if(o.single==true && oSelection.text=="" && o.items[0].st=="v" && sFunctionKey.indexOf("," + iKey + ",") ==-1)
		return ur_EVT_cancel(oEvt);
	if(oSelection.text!="" && o.items[0].st=="v" && sCharKey.indexOf("," + iKey + ",") !=-1 && !oEvt.ctrlKey && !oEvt.altKey){
		o.items[0].className="urTknUnchecked";
		o.items[0].st="0";
	}
	
	if (sDelKey.indexOf("," + iKey + ",") != -1 || sCharKey.indexOf("," + iKey + ",") != -1 && !oEvt.altKey) {
		if(o.ref.text!=""){
			if(o.single){
				if(oSelection.htmlText.indexOf("nbsp;")>-1){
					oSelection.moveEnd("character",-1);
				}
			}
			var oTkn=oSelection.parentElement();
			if(oTkn.tagName=="DIV")oTkn=oSelection;
			if(o.single)oTkn=ur_get(sId).firstChild;
			if (oTkn.st=="i"){
			   oTkn.className = "urTknUnchecked";
			   oTkn.st="0";
			 }
			if(oTkn.st=="v" || oSelection.text==o.items[oTkn.idx]){
				o.ref.removeChild(oTkn);
			}
		}
	}
	if(o.single==false && o.ref.text!="")
		 ur_InputTokenizerIndexReset(sId);
		 
	if(sNavKey.indexOf("," + iKey + ",") >-1){
		ur_InpTkn_handleNav(o,iKey,oSelection,oEvt);
	}
	ur_callDelayed("sapUrMapi_Focus_showFocusRect()",0);
	if (iKey != 9 && iKey!=38 && iKey!=40 && iKey!=13)ur_EVT_cancelBubble(oEvt);
}
function ur_InpTkn_handleNav(o,iKey,oSelection,oEvt){
	if(o.ref.text=="")return;
	if(oEvt.shiftKey)
		var oSelTxt=oSelection.duplicate();
	else
		var oSelTxt=oSelection;
		
	
	if(iKey==39){
	   oSelection.move("character",1);
		}
	
	else if(iKey==37){
		oSelection.move("character",-1);
		}
	
	if(oSelection.parentElement().st=="v"){
		var range = ur_getValidTokenizerRange(o.ref.id,oEvt,oSelection);
		if(range==false)return;
		var iMove=o.items[0].innerText.length;
		
			if(oEvt.shiftKey && iKey==39){
			    if(oSelTxt.text!="")
			   		range.moveStart("character",iMove);
			   	else
			   		range.moveEnd("character",iMove);
			}else if(oEvt.shiftKey && iKey==37){
				range.moveEnd("character",iMove);
			}
		range.select();
	}
}
function sapUrMapi_InputTokenizer_markValidTokens(sId) {
	var oInput = ur_get(sId);
	var val = oInput.innerText;
	var delim = oInput.getAttribute("delimiter");
	if (val == "" || delim=="")return;
	var tokenlist = sapUrMapi_InputTokenizer_getTokenList(oInput);
	var keymap = sapUrMapi_InputTokenizer_getKeyMap(oInput);
	var usecase = oInput.getAttribute("casesensitive");
	var newValue = "";
	var msg = "";
	var evt = "";
	var inputtokens = sapUrMapi_InputTokenizer_splitTokens(oInput);
	for (i = 0; i < inputtokens.length; i++) {
	  if (sapUrMapi_InputTokenizer_matchToken(inputtokens[i], tokenlist, usecase)) {
			if (ur_system.is508) {
				tl = inputtokens[i]
				
			}
			evt = "ocl=\"sapUrMapi_InputToken_Click('" + keymap[inputtokens[i]] + "',event);\" ondoubleclick=\"sapUrMapi_InputToken_DblClick('" + keymap[inputtokens[i]] + "',event);\"";
	    	inputtokens[i] = "<span idx=\""+i+"\" st=\"v\" id=\""+keymap[inputtokens[i]]+"\" class='urTknValid' " + msg + " " + evt +">" + inputtokens[i] + delim + "&nbsp;</span>";
	  }
		else {
			if (ur_system.is508) {
				
			}
			evt = "ocl=\"sapUrMapi_InputToken_Click('" + keymap[inputtokens[i]] + "',event);\" ondoubleclick=\"sapUrMapi_InputToken_DblClick('" + keymap[inputtokens[i]] + "',event);\"";
		    inputtokens[i] = "<span idx=\""+i+"\" st=\"i\" id=\""+keymap[inputtokens[i]]+"\" class='urTknInvalid' "+ msg + " " + evt +">" + inputtokens[i] + delim + "&nbsp;</span>";
		}
		newValue += inputtokens[i];
	}
	
	oInput.innerHTML=newValue;
}
function sapUrMapi_InputTokenizer_getTokenList(oInput) {
	var listdiv = ur_get(oInput.getAttribute("listid"));
	if (listdiv != null) {
		var tokendelim = listdiv.getAttribute("tokendelim");
		var keydelim = listdiv.getAttribute("keydelim");
  	var list = listdiv.innerHTML.split(tokendelim);
		var retstr = "|-|";
		for (i = 0; i < list.length; i++) {
			var tkn = list[i].split(keydelim);
			retstr += tkn[0] +  "|-|" ;
		}
		return retstr;
	}
}
function sapUrMapi_InputTokenizer_getKeyMap(oInput) {
	var listdiv = ur_get(oInput.getAttribute("listid"));
	if (listdiv != null) {
		var tokendelim = listdiv.getAttribute("tokendelim");
		var keydelim = listdiv.getAttribute("keydelim");
  	var list = listdiv.innerHTML.split(tokendelim);
		var keyMap = new Array();
		for (i = 0; i < list.length; i++) {
			var tkn = list[i].split(keydelim);
			keyMap[tkn[0]] = tkn[1];
		}
		return keyMap;
	}
}
function sapUrMapi_InputTokenizer_ClipData(sId,sData){
	if(typeof(sData)=="string"){
		var oInput = ur_get(sId);
		var sdelim = oInput.getAttribute("delimiter");
		var sPasteTxt=sData.split("\r\n");
		var s="";
		for (var n=0;n<sPasteTxt.length;n++) {
		  if (s!="")s+=sdelim;
		  if (sPasteTxt[n].length>0) {
		    s+=sPasteTxt[n];
		  }
		}
		return s;
	}else{
		return false;
	}
}
function sapUrMapi_InputTokenizer_Drop(sId,oEvt){
	var sClipTxt = oEvt.dataTransfer.getData("Text");
	var oInput = ur_get(sId);
	var bSingle=oInput.delimiter;
	if(bSingle=="" && oInput.innerText!=""){
		var sSt=oInput.firstChild.st;
		if(sSt=="v")return oEvt.returnValue=false;
	}
	oEvt.returnValue=false;
	var s = sapUrMapi_InputTokenizer_ClipData(sId,sClipTxt);
	var oInpRange=document.body.createTextRange();
	oInpRange.moveToElementText(oInput);
	var range = document.selection.createRange();
	range.moveToPoint(oEvt.x,oEvt.y);
	var sTknStyle=range.parentElement().className;
	if(sTknStyle=="urTknInvalid"||sTknStyle=="urTknValid"){
		oInpRange.collapse(false);
		oInpRange.pasteHTML(s);
	}else{
		if(range!="undefined"){
		range.pasteHTML(s);
			if (range.parentElement() != null && range.parentElement().tagName.toLowerCase() == "span") {
			 range.parentElement().className = "";
			}
		}
	}
	if(oLastSelTextRange!=null){
		if(oLastSelTextRange.root.st!="d" && oLastSelTextRange.root.st!="r")
		   oLastSelTextRange.selection.text="";
		   oLastSelTextRange=null;
	}
}
function ur_InpTkn_drag(sId,oEvt){
	if(document.selection.createRange().text!=""){
		oLastSelTextRange={
						selection:document.selection.createRange(),
						root:ur_get(sId)
						  }
	}else
		return;
}
function sapUrMapi_InputTokenizer_Paste(sId,oEvt){
	var sClipTxt = clipboardData.getData("Text");
	var oInput = ur_get(sId);
	var bSingle=oInput.delimiter;
	var oSelection=document.selection.createRange();
	if(bSingle=="" && oInput.innerText!=""){
		if(oSelection.text==""){
			var sSt=oInput.firstChild.st;
			if(sSt=="v")return ur_EVT_cancel(oEvt);
		}
	}
	oEvt.returnValue=false;
	var s = sapUrMapi_InputTokenizer_ClipData(sId,sClipTxt);
	var range = document.selection.createRange();
	var oInpRange=document.body.createTextRange();
	oInpRange.moveToElementText(oInput);
	if(range!="undefined"){
		range.pasteHTML(s);
		if (range.parentElement() != null && range.parentElement().tagName.toLowerCase() == "span") {
		 range.parentElement().className = "";
		}
	}
}
function sapUrMapi_InputTokenizer_splitTokens(oInput) {
	var delim = oInput.getAttribute("delimiter");
	var txt = oInput.innerText;
	
	if(delim=="")
		return txt.split(" ");
		
	var re = new RegExp("\\s*" + delim + "\\s*", "gi");
	
	
	while (txt.substr(0,1) == " ") {
		txt = txt.substr(1,txt.length-1);
	}
	
	
	while (txt.substr(txt.length-1, 1) == " " || txt.substr(txt.length-1, 1) == delim) {
		txt = txt.substr(0, txt.length-1);
	}
	return txt.split(re);
}
function sapUrMapi_InputTokenizer_matchToken(sTkn, sTknList, bUseCase) {
	
	if (bUseCase=="true") {
	  if (sTknList.indexOf("|-|" + sTkn + "|-|") != -1) {
	    return true;
	  }
	}
	else {
	  if (sTknList.toLowerCase().indexOf("|-|" + sTkn.toLowerCase() + "|-|") != -1) {
	    return true;
	  }
	}
	
	return false;
}
function sapUrMapi_InputToken_Click(sId, oEvt) {
	
}
function sapUrMapi_InputToken_DblClick(sId, oEvt) {
	
}
function sapUrMapi_InputTokenizerHelpClick(sId,oEvt){}
var aInpTknTxt = new Array();
function ur_InpTkn_focus(sId){
	var oTkn=ur_get(sId);
	aInpTknTxt[sId]=oTkn.innerText;
  ur_setEditCellColor(oTkn); 
}
function ur_InpTkn_blur(sId,oEvt){
	var oTkn=ur_get(sId);
  ur_removeEditCellColor(); 
	if(aInpTknTxt[sId]!=oTkn.innerText)
		ur_EVT_fire(oTkn,"och",oEvt);
}
function sapUrMapi_InputTokenizer_change(sId,oEvt){
	var oTkn=ur_get(sId);
	oEvt.ur_param = new Object();
	oEvt.ur_param.value=oTkn.innerText;
}
function ur_getValidTokenizerRange(sId,oEvt,oSelection){
	if(oEvt.type=="click" || oEvt.type=="contextmenu" || oEvt.type=="mouseup"){
		var iIdx=oEvt.srcElement.idx;
	}
	else if(oEvt.type=="keydown" && oSelection!=null && oSelection.parentElement().tagName!="DIV"){
		var iIdx=oSelection.parentElement().idx;
	}else{
		return false;
	} 
	if(iIdx==null)
		return false;
		
	var o=ur_getTokenizerObj(sId);	
	var oRange = new Array();
	var i=0;
	var ii=0;
	
	oRange[i]=document.body.createTextRange();
	oRange[i].findText(o.items[iIdx].innerText);
	
	if(oRange[i].parentElement().id!=o.items[iIdx].id){
		while(oRange[i].parentElement().id!=o.items[iIdx].id){
			ii=i;
			i=i+1;
			oRange[i] = document.body.createTextRange();
			oRange[i].setEndPoint("StartToEnd", oRange[ii]);
			oRange[i].findText(o.items[iIdx].innerText);
		}
	}
	return oRange[i];
}
function ur_getTokenizerObj(sId){
	var oInput=ur_get(sId);
	var bModus=false;
	if(oInput.delimiter=="")bModus=true;
	var bCaseSensitive=false;
	if(oInput.casesensitive=="true")bCaseSensitive=true;
	var bValidation=true
	if(oInput.delimiter!="")bValidation=false;
	
	var o = {
			ref:oInput,
			items:oInput.getElementsByTagName("SPAN"),
			delimiter:oInput.delimiter,
			single:bModus,
			usecase:bCaseSensitive,
			bssv:bValidation,
			vbtn:null,
			f4:null
			};
			
	o.ref["status"]=o.ref.st;		
	o.ref["text"]=o.ref.innerText;
	
	if(bValidation==false)
		o["list"]=sapUrMapi_InputTokenizer_getTokenList(oInput);
	if(ur_get(oInput.vb))
		o.vbtn=ur_get(oInput.vb);
	if(ur_get(sId+"-btn"))
		o.f4=ur_get(sId+"-btn");
	return o;
}
function ur_InputTokenizerIndexReset(sId){
	var o=ur_getTokenizerObj(sId);
	var oInput=ur_get(sId);
	if(o.bssv=false)return;
	for(i=0; i<o.items.length; i++){
		o.items[i].idx=i;
	}
}

//** ItemListBox.ie5 **

function sapUrMapi_ItemListBox_registerCreate(sId,sWidth){
	if(sId=="")return;
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_ItemListBox_setDim('"+sId+"','"+sWidth+"')");
}
 
function ur_ItemListBox_getIndex(sId,sKey){
	if(sId=="") return 0;
	var o=sapUrMapi_ItemListBox_getObject(sId,document);
	if(!o) return 0;
	var i=0;
	for(i=0; i<o.itms.length; i++)
		if(o.itms[i].k==sKey)	return i+1;
	return null;
}
function sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt){
	if(sId=="")return null;
	var o=new Object();
	
	var oR=oDoc.getElementById(sId+"-r");
	if (oR && oR.hasChildNodes() && oR.firstChild.tagName=="XMP") {
	  oR.innerHTML=oR.firstChild.innerHTML; 
	}	
	o.r=oDoc.getElementById(sId);
	if(!o.r) return null;
	
	o.tbl=o.r.getElementsByTagName("TABLE")[0];
	o.tbd=o.tbl.firstChild;
	
	o.box=o.tbl.parentNode;
	
	o.scrl=o.box;
	
	o.itms=o.tbl.getElementsByTagName("TR");
	
	var sFocus=o.tbl.getAttribute("focusitm");
	if(sFocus)
		o.focusedItm=o.itms[parseInt(sFocus)-1];
	else
		o.focusedItm=null;
	var sOldFocus=o.tbl.getAttribute("oldfocusitm");
	if(sOldFocus)
		o.oldFocusedItm=o.itms[parseInt(sOldFocus)-1];
	if(o.focusedItm==null)
		o.focusedItm=o.itm;
	
	o.selItms=new Array();
	o.prevItm=null;
	o.nextItm=null;
	var j=0;
	o.mItems={};
	for(var i=0;i<o.itms.length;i++){
		o.mItems[o.itms[i].getAttribute("k")] = o.itms[i];
		if(o.itms[i].className=="urIlb2ISel"){
			o.selItms[j]=o.itms[i];
			j++;
		}
		if(o.focusedItm!=null&&o.focusedItm==o.itms[i]){
			if(i>0)
				if(o.itms[i-1].name=="HLine") o.prevItm=o.itms[i-2];
				else o.prevItm=o.itms[i-1];
			if(i<o.itms.length-1)
				if(o.itms[i+1].name=="HLine") o.nextItm=o.itms[i+2];
				else o.nextItm=o.itms[i+1];
		}
	}
	if(o.prevItm==null && o.nextItm==null) o.nextItm=o.itms[0];
	
	o.parId=o.r.getAttribute("parid");
	
	if(o.parId!=null&&o.parId!="") o.ro = ur_isSt(o.parId,ur_st.READONLY);
	else o.ro = ur_isSt(o.r.id,ur_st.READONLY);
	o.enbl = !ur_isSt(o.r.id,ur_st.DISABLED);
	o.inv = ur_isSt(o.r.id,ur_st.INVALID);
	o.popup = o.tbl.getAttribute("pop") == "true";
	o.multi = o.tbl.getAttribute("multi") == "true";
	o.size = parseInt(o.tbl.getAttribute("s"));
	o.vissize = parseInt(o.tbl.getAttribute("v"));
	o.userheight = o.tbl.getAttribute("h");
	o.userwidth = o.tbl.getAttribute("w");
	o.cols = o.tbl.getAttribute("cols");
	o.valcol=o.tbl.getAttribute("vcol");
	o.icocol=o.tbl.getAttribute("icol");
	return o;
}
function sapUrMapi_ItemListBox_getItem(o,sKey){
	for(var i=0; i<o.itms.length;i++){
		if(sKey==o.itms[i].getAttribute("k"))
			return o.itms[i];
	}
	return o.itms[0];
}
function sapUrMapi_ItemListBox_setParentId(sId, sParentId){
	if (!ur_get(sId)) sapUrMapi_ItemListBox_getObject(sId,document,null);
	ur_get(sId).setAttribute("parid",sParentId);
}
function sapUrMapi_ItemListBox_getSelectedKeys(sId,oDoc){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	var aKeys=new Array();
	var j=0;
	for(var i=0; i<o.itms.length;i++){
		if( o.itms[i].className=="urIlb2ISel" ){
			aKeys[j]=o.itms[i].getAttribute("k");
			j++;
		}
	}
	return aKeys;
}
function sapUrMapi_ItemListBox_setSelectedKeys(sId,aKeys,oDoc){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	var sKey=aKeys.toString();
	for(var i=0; i<o.itms.length;i++)
		if( sKey.indexOf(o.itms[i].getAttribute("k")) == 0 )
			sapUrMapi_ItemListBox_selectItem(o,o.itms[i],true,null);
}
function sapUrMapi_ItemListBox_setSelectedKey(sId,sKey,oDoc,bScroll){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	if(sKey=="") return;
	for(var i=0; i<o.itms.length;i++){
		if( sKey==o.itms[i].getAttribute("k") ){
			sapUrMapi_ItemListBox_deselectAllItems(o);
			sapUrMapi_ItemListBox_itemSetHighlight(o.itms[i], true);
			sapUrMapi_ItemListBox_focusItem(o,o.itms[i]);
			if(bScroll) sapUrMapi_ItemListBox_scrollIntoView(o,o.itms[i],true);
			return;
		}
	}
}
function sapUrMapi_ItemListBox_selectHoveredItem(sId,oDoc,oEvt){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	for(var i=0; i<o.selItms.length;i++)
		sapUrMapi_ItemListBox_selectItem(o,o.selItms[i],true,oEvt);
}
function sapUrMapi_ItemListBox_getList(sId,doc){
	var o=sapUrMapi_ItemListBox_getObject(sId,doc,null);
	var oCols = new Array();
	var sItmKey = "";
	var sList = "";
	for( var i=0; i<o.itms.length; i++ ){
		sItmKey = o.itms[i].getAttribute("k");
		oCols =  o.itms[i].getElementsByTagName("TD");
		sList += "||";
		sList += oCols[parseInt(o.valcol)-1].innerText;
		sList += "|";
		sList += sItmKey;
	}
	if(sList!="") sList+="||";
	return sList;
}
function sapUrMapi_ItemListBox_setDim( sId, sWidth ){
	var o = sapUrMapi_ItemListBox_getObject(sId,document,null);
	
	if( parseInt(o.vissize) > 0 && !isNaN(parseInt(o.vissize)) )
		sapUrMapi_ItemListBox_setSize(o, parseInt(o.vissize));
	else if( (parseInt(o.userheight) > 0 && !isNaN(parseInt(o.userheight))) || o.popup )
		sapUrMapi_ItemListBox_setHeight(o, parseInt(o.userheight));
	
	if( parseInt(sWidth) >= 0 && !isNaN(parseInt(sWidth)) )
		sapUrMapi_ItemListBox_setWidth(o, sWidth);
}
function sapUrMapi_ItemListBox_setSize(o,sSize){
	var iHeight = 0;
	var iBorder = 0;
	if( o.tbl.offsetHeight > o.box.offsetHeight ) iBorder = 2*o.box.clientTop;
	else iBorder = o.box.offsetHeight - o.tbl.offsetHeight;
	if(parseInt(sSize) <= 0) return;
	if(parseInt(sSize) >= o.itms.length) return;
	if(o.itms.length > 1)
		iHeight = parseInt(sSize) * parseInt(o.itms[1].offsetHeight) + iBorder + 2*(o.itms[1].offsetHeight-o.itms[0].offsetHeight);
	else
		iHeight = parseInt(sSize) * parseInt(o.itms[0].offsetHeight) + iBorder;
	sapUrMapi_ItemListBox_setHeight(o,iHeight);
}
function sapUrMapi_ItemListBox_setHeight(o,sHeight){
	var iHeight=o.scrl.offsetHeight; 
	var iNewHeight=0; 
	var iWindowHeight=parseInt(document.body.clientHeight); 
	var iBorder=0; 
	
	
	if( o.tbl.offsetHeight > o.box.offsetHeight ) iBorder=2*o.box.clientTop;
	else iBorder = o.box.offsetHeight - o.tbl.offsetHeight;
	
	
	
	
	if( (isNaN(parseInt(sHeight)) || parseInt(sHeight) <= 0 ) && !o.popup){
		return;
	}
	
	
	if(!isNaN(parseInt(sHeight)) && parseInt(sHeight) > 0 ){
		o.scrl.style.overflowY = "scroll";
		o.scrl.style.height = sHeight;
		iNewHeight = o.scrl.offsetHeight;
		if(iWindowHeight<iNewHeight){
			iNewHeight=iWindowHeight;
			o.scrl.style.overflowY = "scroll";
			o.scrl.style.height = iWindowHeight;					
		}
	}
	else if(o.popup && iHeight>iWindowHeight){
		iNewHeight=iWindowHeight;
		o.scrl.style.overflowY = "scroll";
		o.scrl.style.height = iWindowHeight;		
	}
	else{
		return; 
	}
	
	
	if (o.popup) {
	  iNewHeight = o.scrl.offsetHeight;
	  
	  if(iHeight <= iNewHeight){
		  o.scrl.style.height=iHeight;
		  return;
	  }
	  
	  iNewHeight = 0;
	  for( var i=0; i<o.itms.length; i++ ){
		  if( (iNewHeight + parseInt(o.itms[i].offsetHeight)) > o.scrl.offsetHeight )
			  break;
		  iNewHeight += parseInt(o.itms[i].offsetHeight);
	  }
	  iNewHeight = iNewHeight + iBorder;
	  
	  if( o.box.offsetHeight < o.tbl.offsetHeight || o.popup){
		  
			  
		  o.box.setAttribute("style","overflow-y:scroll;");
	  }
	  else{
			o.box.style.overflowY = "visible";
		  o.box.setAttribute("style","overflow-y:visible;");
	  }
	  o.scrl.style.height = iNewHeight;
	  o.scrl.setAttribute("style","height:"+iNewHeight+";");
	  o.tbl.setAttribute("s",i);
	}
}
function sapUrMapi_ItemListBox_setWidth(o,sWidth){
	var iWidth=0;
	var iNewWidth=0;
	
	if(typeof(sWidth)=="number" || sWidth.indexOf("px")>0){
		iNewWidth=parseInt(sWidth);
	}
	else{
		o.box.style.width = sWidth;
		iNewWidth = o.r.offsetWidth;
	}		
	o.box.style.width = "10px";
	iWidth = o.r.offsetWidth;
	if (iNewWidth<iWidth) return;
	o.box.style.width = sWidth;
	o.tbl.style.width = "100%";
	o.box.setAttribute("style","width:"+sWidth+";");
}
function sapUrMapi_ItemListBox_itemSelected(oItm){
	if( oItm.className == "urIlb2ISel" ) return true;
	return false;
}
function sapUrMapi_ItemListBox_itemSetHighlight(oItm,bOn){
	if( oItm == null || oItm.tagName != "TR" ) return;
	if( bOn && oItm.className != "urIlb2ISel") oItm.className = "urIlb2ISel";
	else if( oItm.className == "urIlb2ISel" ) oItm.className = "";
	else return;
}
function sapUrMapi_ItemListBox_deselectAllItems(o){
	if(o.selItms==null) return;
	for(var i=0; i<o.selItms.length; i++)
		sapUrMapi_ItemListBox_itemSetHighlight(o.selItms[i],false);
}
function sapUrMapi_ItemListBox_getVal(sId,sKey){
	var o=sId;
	if(typeof(o)!="object"){
		o=sapUrMapi_ItemListBox_getObject(sId,document,null);
	}
	if(!o) return null;
	var oItem=o.mItems[sKey];
	if(!oItem) return null;
	var oCol=sapUrMapi_ItemListBox_oGetItemValueColumn(oItem);
	if(!oCol) return null;
	return oCol.innerText;
}
function sapUrMapi_ItemListBox_oGetItemValueColumn(oItem) {
		var oCols=oItem.getElementsByTagName("TD");
		
		for(var i=0; i<oCols.length; i++){
			var oImg=oCols[i].getElementsByTagName("IMG");
			if(oCols[i].className!="urCob2IDscr" && oImg.length===0){
				return oCols[i];
			}
		}
		return null;
}
function sapUrMapi_ItemListBox_getIconSrc(o,oItm){
	if(o.icocol==null || o.icocol=="") return null;
	var oCols=oItm.getElementsByTagName("TD");
	var oIco;
	oIco = oCols[parseInt(o.icocol)-1].firstChild;
	return oIco.style.backgroundImage;
}
function sapUrMapi_ItemListBox_hoverItem(o,oItm){
	if(o.ro) return;
	sapUrMapi_ItemListBox_deselectAllItems(o);
	sapUrMapi_ItemListBox_itemSetHighlight(oItm, true);
	sapUrMapi_ItemListBox_focusItem(o,oItm);
}
function sapUrMapi_ItemListBox_scrollIntoView(o,oItm,bTop){
	if( (o.box.scrollTop > oItm.rowIndex*oItm.offsetHeight) || (o.box.scrollTop+o.box.offsetHeight-2*o.box.clientTop <= oItm.rowIndex*oItm.offsetHeight) )
		if(!bTop) o.box.scrollTop=(oItm.rowIndex-o.size+1)*oItm.offsetHeight;
		else o.box.scrollTop=oItm.rowIndex*oItm.offsetHeight;
}
function sapUrMapi_ItemListBox_selectItem(o,oItm,bTop,oEvt){
	if(!o.ro && o.enbl){
		if(!(o.multi&&(oEvt.shiftKey||oEvt.ctrlKey))) sapUrMapi_ItemListBox_deselectAllItems(o);
		sapUrMapi_ItemListBox_itemSetHighlight(oItm,true);
		if(o.popup){
			var sKey=oItm.getAttribute("k");
			sapUrMapi_ComboBox_setValue(o.parId, sKey, sapUrMapi_ItemListBox_getVal(o,sKey), sapUrMapi_ItemListBox_getIconSrc(o,oItm),oEvt);
		}
	}
	else if(o.popup)
		sapUrMapi_ComboBox_setValue(o.parId, null,null, null,oEvt);	
		
	sapUrMapi_ItemListBox_focusItem(o,oItm);
	if(o.popup) sapUrMapi_ItemListBox_scrollIntoView(o,oItm,bTop);	
}
function sapUrMapi_ItemListBox_deselectItem(oItm){
	sapUrMapi_ItemListBox_itemSetHighlight(oItm,false);
}
function sapUrMapi_ItemListBox_focusItem(o,oItm){
	
	if(!o.popup&&o.focusedItm!=null)
		sapUrMapi_setTabIndex(o.focusedItm.getElementsByTagName("TD")[parseInt(o.valcol)-1],-1);
	
	o.tbl.setAttribute("focusitm",oItm.rowIndex+1);
	if (!o.popup){
		var oCols=oItm.getElementsByTagName("TD");
		sapUrMapi_setTabIndex(oCols[parseInt(o.valcol)-1],0);
		if(ur_system.is508){	
			oCols[parseInt(o.valcol)-1].setAttribute("t",oItm.getAttribute("t"));								
			if(oItm.className.indexOf("Sel")!=-1){ 
				ur_setSt(oCols[parseInt(o.valcol)-1],ur_st.SELECTED,true);
				ur_setSt(oCols[parseInt(o.valcol)-1],ur_st.NOTSELECTED,false);					
			}
			else{
				ur_setSt(oCols[parseInt(o.valcol)-1],ur_st.SELECTED,false);	
				ur_setSt(oCols[parseInt(o.valcol)-1],ur_st.NOTSELECTED,true);	
			}	
		}
		if (document.activeElement != oCols[parseInt(o.valcol)-1]) {
		  var oTd = oCols[parseInt(o.valcol)-1];
		  ur_focus(oTd);
		}
	}
}
function sapUrMapi_ItemListBox_mouseover( sId,oDoc,oEvt) {
	var oFrom=oEvt.fromElement;
	var oTo=oEvt.toElement;
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt);
	
	if( oTo.tagName=="DIV" || oTo.tagName=="SPAN" || o.ro || !o.enbl || o.size==0) return;
	while( oFrom != null && oFrom.tagName != "TR" )
		oFrom = oFrom.parentNode;
	while( oTo != null && oTo.tagName != "TR" )
		oTo = oTo.parentNode;
	if( oTo==null || oTo.name=="HLine" || oFrom==oTo ) return;
	sapUrMapi_ItemListBox_hoverItem(o,oTo);
}
function sapUrMapi_ItemListBox_focus(sId,oDoc,oEvt){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt);
	
	if(!o.enbl && !ur_system.is508) return;
	sapUrMapi_DataTip_show(sId,"focus");
	
	if(ur_evtSrc(oEvt).id!=sId) return;
	
	if(o.popup){
		ur_focus(ur_get(o.parId));
		return;
	}
	
	if(o.tbl.getAttribute("tabback")=="true"){
		o.tbl.setAttribute("tabback","false");
		var oNewEvt=oDoc.createEventObject();
		oNewEvt.keyCode="9";
		oNewEvt.shiftKey=true;
		o.r.fireEvent("onkeydown",oNewEvt);
		return;
	}
	
	if(o.selItms.length==0) oItm = o.itms[0];
	else oItm = o.selItms[0];
	
	var iTop = o.r.scrollTop;
	sapUrMapi_ItemListBox_focusItem(o,oItm);
	o.r.scrollTop = iTop;
}
function sapUrMapi_ItemListBox_blur(sId,oEvt) {
	if(oEvt.toElement!=null && oEvt.toElement.className.indexOf("Ilb")!=-1) return;
	sapUrMapi_DataTip_hide(sId);
	if(ur_system.is508)
		ur_get(sId).setAttribute("nav","false");
}
function sapUrMapi_ItemListBox_click(sId,oDoc,oEvt) {
	
	var oItm=ur_evtSrc(oEvt);
	if(oItm.tagName!="TD" && oItm.tagName!="IMG") return; 	
	while(oItm.tagName!="TR"){
		if(oItm.getAttribute("ct")=="ItemListBox") return;
		oItm=oItm.parentNode;
	}
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt);
	var bSel = false;
	
	
	if( o.multi == true && oEvt.ctrlKey == false )
		sapUrMapi_ItemListBox_deselectAllItems(o);
	
	if(oEvt.shiftKey == true && o.multi == true  && (o.focusedItm != oItm) ){
		var oStart=o.oldFocusedItm;
		if(oStart.rowIndex < oItm.rowIndex)
			for(var i=oStart.rowIndex;i<=oItm.rowIndex;i++)
				sapUrMapi_ItemListBox_selectItem(o,o.itms[i], true, oEvt);
		else
			for(var i=oStart.rowIndex;i>=oItm.rowIndex;i--)
				sapUrMapi_ItemListBox_selectItem(o,o.itms[i], true, oEvt);
	}
	
	else{
		sapUrMapi_ItemListBox_selectItem(o, oItm, true,oEvt);
		o.tbl.setAttribute( "oldfocusitm", oItm.rowIndex+1 );
	}
	return ur_EVT_cancel(oEvt);
}
function sapUrMapi_ItemListBox_keypress( sId, oEvt ){
	var o=sapUrMapi_ItemListBox_getObject(sId, document, oEvt);
	if (o.popup) return;
  
  if( oEvt.keyCode > 0){
    var sSearchChar = String.fromCharCode(oEvt.keyCode);
    var sSelectedKey = "";
    if (o.selItms.length > 0) {
      sSelectedKey = o.selItms[o.selItms.length-1].getAttribute("k");
      
    }
    var sNewKey = sapUrMapi_ItemListBox_findItem(sId,sSearchChar,sSelectedKey,document);
    if (sNewKey!="") sapUrMapi_ItemListBox_setSelectedKey(sId,sNewKey,document,true);
  }  
}
function sapUrMapi_ItemListBox_findItem(sId,sSearchString,sStartKey,oDoc) {
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	if(!o) return;
	
	var bSearchStart=false;
	var sValue1="";
	var sValue2="";
	var sFirstKey="";
	
	sSearchString=sSearchString.toUpperCase();
	if(!sSearchString) return;
	if(!sStartKey) bSearchStart=true;
	for(var sKey in o.mItems){
		
		sValue1=o.mItems[sKey].cells[0].innerText;
		sValue1=sValue1.substr(0,sSearchString.length);
		sValue1=sValue1.toUpperCase();
		
		if(o.mItems[sKey].cells[1]){
			sValue2=o.mItems[sKey].cells[1].innerText;
			sValue2=sValue2.substr(0,sSearchString.length);
			sValue2=sValue2.toUpperCase();			
		}
		if(bSearchStart){
			if(sSearchString==sValue1 || sSearchString==sValue2){
  return sKey;
}
		}
		else if(sStartKey==sKey){
			bSearchStart=true;
		}
		if(!sFirstKey && (sSearchString==sValue1 || sSearchString==sValue2)){
			sFirstKey=sKey;
		}
	}
	if(sFirstKey){
		return sFirstKey;
	}
}
function sapUrMapi_ItemListBox_keydown( sId, doc, e ){
	var o=sapUrMapi_ItemListBox_getObject(sId, doc, e);
	var iItmIdx = 0;
	
	if(e.keyCode==73 && e.ctrlKey && oEvt.shiftKey && !e.altKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
	}
		
	
	else if(e.keyCode==27){
		sapUrMapi_DataTip_hide(sId);
	}
		
	
	else if(e.keyCode==9 && e.shiftKey){
		if(ur_evtSrc(e).tagName!="SPAN"){
			o.tbl.setAttribute("tabback","true");
			ur_focus(o.r);
		}
		return true;
	}
	
	
	else if(e.keyCode==38 && o.prevItm!=null){
		if( e.ctrlKey && o.multi )
			sapUrMapi_ItemListBox_focusItem(o,o.prevItm);
		else if( sapUrMapi_ItemListBox_itemSelected(o.prevItm) && o.multi ){
			sapUrMapi_ItemListBox_deselectItem(o.focusedItm);
			sapUrMapi_ItemListBox_focusItem(o,o.prevItm);
		}
		else
			sapUrMapi_ItemListBox_selectItem(o, o.prevItm, true, e );
	}
	
	
	else if( e.keyCode==40 && o.nextItm!=null ){
		if( e.ctrlKey && o.multi )
			sapUrMapi_ItemListBox_focusItem(o,o.nextItm);
		else if( sapUrMapi_ItemListBox_itemSelected(o.nextItm) && o.multi ){
			sapUrMapi_ItemListBox_deselectItem(o.focusedItm);
			sapUrMapi_ItemListBox_focusItem(o,o.nextItm);
		}
		else
			sapUrMapi_ItemListBox_selectItem(o, o.nextItm, false, e );
	}
	
	
	else if(e.keyCode==32){
		if( sapUrMapi_ItemListBox_itemSelected(o.focusedItm) &&  e.ctrlKey && o.multi)
			sapUrMapi_ItemListBox_deselectItem(o.focusedItm);
		else
			sapUrMapi_ItemListBox_selectItem(o, o.focusedItm, true, e);
		if(ur_system.is508) sapUrMapi_refocusElement(e.srcElement);			
	}
		
	
	else if( e.keyCode==36 ){
		sapUrMapi_ItemListBox_selectItem(o, o.itms[0], true, e );
		if(ur_system.is508 && o.focusedItm.rowIndex==0) sapUrMapi_refocusElement(e.srcElement);					
	}
		
	
	else if(e.keyCode==35){
		sapUrMapi_ItemListBox_selectItem(o, o.itms[o.itms.length-1], false, e );
	}
		
	
	else if( e.keyCode==33 && o.size!=null ){
		if(!o.focusedItm) {
			if(o.itms.length > 0) {
				sapUrMapi_ItemListBox_selectItem(o, o.itms[0], true, e );
			}
		}
		else {
			iItmIdx = o.focusedItm.rowIndex - o.size + 1;
			if( iItmIdx < 0 ) iItmIdx = 0;
			sapUrMapi_ItemListBox_selectItem(o, o.itms[iItmIdx], true, e );
		}
	}
	
	
	else if( e.keyCode==34 && o.size!=null ){
		if(!o.focusedItm) {
			if(o.itms.length > 0) {
				sapUrMapi_ItemListBox_selectItem(o, o.itms[o.itms.length-1], true, e );
			}
		}
		else {
			iItmIdx = o.focusedItm.rowIndex + o.size - 1;
			if( iItmIdx > o.tbd.lastChild.rowIndex ) iItmIdx = o.tbd.lastChild.rowIndex;
			sapUrMapi_ItemListBox_selectItem(o, o.itms[iItmIdx], false, e);
		}
  }
  else return;
   
  return ur_EVT_cancel(e);
}
function sapUrMapi_ItemListBox_setInputState(sId,sInputState) {
	var o=sapUrMapi_ItemListBox_getObject(sId, document);
	if(o.popup) return;
	if(ur_isSt(o.r,ur_st.READONLY) || ur_isSt(o.r,ur_st.DISABLED)) return;
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
  o = o.box;
	sapUrMapi_Label_setInputState(oLbl,sInputState);
  if (sInputState == 'ERROR') {
    if (ur_isSt(sId,ur_st.INVALID)) return;
    ur_setSt(sId,ur_st.WARNING,false);
    ur_setSt(sId,ur_st.INVALID,true);
		o.className=o.className.replace("Warn","");
		o.className=o.className.replace("Box","BoxInv");
  } else if (sInputState == 'WARNING'){
    if (ur_isSt(sId,ur_st.WARNING)) return;
    ur_setSt(sId,ur_st.INVALID,false);
    ur_setSt(sId,ur_st.WARNING,true);
		o.className=o.className.replace("Inv","");
		o.className=o.className.replace("Box","BoxWarn");
  } else {
    ur_setSt(sId,ur_st.INVALID,false);
    ur_setSt(sId,ur_st.ERROR,false);
		o.className=o.className.replace("Warn","");
		o.className=o.className.replace("Inv","");
  }
}
function sapUrMapi_ItemListBox_setInvalid(sId,bSet) {
  if (bSet) sapUrMapi_ItemListBox_setInputState(sId,"ERROR");
  else sapUrMapi_ItemListBox_setInputState(sId,"NONE");
}
function sapUrMapi_ItemListBox_setDisabled(sId,bSet){
	var o=sapUrMapi_ItemListBox_getObject(sId, document);
	if(o.popup) return;
	if(bSet && ur_isSt(o.r,ur_st.DISABLED)) return;
	if(!bSet && !ur_isSt(o.r,ur_st.DISABLED)) return;
	if(bSet){
		o.box.className=o.box.className.replace("Box","BoxDsbl");
		ur_setSt(sId,ur_st.DISABLED,true);
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IDsbl");
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Dscr","");				
			}
		}
	}
	else{
		o.box.className=o.box.className.replace("BoxDsbl","Box");
		ur_setSt(sId,ur_st.DISABLED,false);	
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Dsbl","");
				if(j!=parseInt(o.valcol)-1)
					o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IDscr");				
			}
		}		
	}
}
function sapUrMapi_ItemListBox_setReadonly(sId,bSet){
	var o=null;
	if(typeof(sId)=="object")
		o=sId;
	else
		o=sapUrMapi_ItemListBox_getObject(sId, document);
	if(bSet && ur_isSt(o.r,ur_st.READONLY)) return;
	if(!bSet && !ur_isSt(o.r,ur_st.READONLY)) return;
	if(bSet){
		o.box.className=o.box.className.replace("Box","BoxRo");
		ur_setSt(o.r,ur_st.READONLY,true);
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IRo");
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Dscr","");				
			}
		}
	}
	else{
		o.box.className=o.box.className.replace("BoxRo","Box");
		ur_setSt(o.r,ur_st.READONLY,false);	
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ro","");
				if(j!=parseInt(o.valcol)-1)
					o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IDscr");				
			}
		}		
	}
}

//** Label.ie5 **

function sapUrMapi_Label_setDisabled(oLbl) {
	if(oLbl==null || oLbl.className.indexOf("Dsbl")>-1) return;
	if(oLbl.className.indexOf("Bar")>-1)
		oLbl.className=oLbl.className.replace("LBar","LBarDsbl");
	else
		oLbl.className=oLbl.className.replace("L","LDsbl");
}
function sapUrMapi_Label_setEnabled(oLbl) {
	if (oLbl==null) return;
	oLbl.className=oLbl.className.replace("Dsbl","");
}
function sapUrMapi_Label_setInvalid(oLbl,bSet) {
	if (oLbl==null) return;
	
	if(!bSet){
		oLbl.className=oLbl.className.replace("Inv","");
		return;
	}
	
	if(oLbl.className.indexOf("Inv")>-1) return;
	if (oLbl.className.indexOf("Bar")>-1) 
		oLbl.className=oLbl.className.replace("Bar","BarInv");
	else
		oLbl.className+="Inv";
}
function sapUrMapi_Label_getInputLabel(sId) {
	var ur_arrLabels = document.getElementsByTagName("LABEL");
	for (var i=0;i<ur_arrLabels.length;i++) {
		if (ur_arrLabels.item(i).getAttribute("f")==sId) {
			return ur_arrLabels.item(i);
		}
	}
	for (var i=0;i<ur_arrLabels.length;i++) {
		if (ur_arrLabels.item(i).getAttribute("htmlFor")==sId) {
			return ur_arrLabels.item(i);
		}
	}
	return null;
}
function sapUrMapi_Label_FocusLabeledElement(sForId) {
  sapUrMapi_focusElement(sForId);
}
function sapUrMapi_Label_getLabelText(sId) {
	var oLbl=sapUrMapi_Label_getInputLabel(sId);
	if(oLbl==null) return null;
	var sTxt=oLbl.getAttribute("lbl");
	if(sTxt==null || sTxt=="")
		sTxt=oLbl.innerText;
	if(sTxt.lastIndexOf(" *")>-1 && sTxt.lastIndexOf(" *")==sTxt.length-2)
		sTxt=sTxt.substring(0,sTxt.lastIndexOf(" *"));	
	if(sTxt.lastIndexOf(":")>-1 && sTxt.lastIndexOf(":")==sTxt.length-1)
		sTxt=sTxt.substring(0,sTxt.lastIndexOf(":"));
	return sTxt;
}
function sapUrMapi_Label_clickLabeledElement(sForId) {
	var o=ur_get(sForId);
	try{
		if (ur_system.eventPrefix) ur_activateAllEvents(o);
		var sCt=o.getAttribute("ct");
		if(sCt=="C" || sCt=="R" || sCt=="TRI") o.click();
		else ur_focus(o);
	} catch(e){}
}
function ur_L_getF(sId){
  var sF=ur_get(sId).getAttribute("f");
  return sF;
}
function ur_L_mm(sId,oEvt){
	clearTimeout(_ur_DataTip_timer);
	if(typeof(sId)== "object"){
		oEvt = sId;
		sId = oEvt.srcElement.getAttribute("id");
	}
	var o=ur_get(sId);
	
	if(!o) return;
	
	var sCt=o.getAttribute("ct");
	if(ur_EVT_src(oEvt).className=="urHlpTHFont")
		_ur_DataTip.time_out=70;
	else
		_ur_DataTip.time_out=0;
	if(sCt=="L")sId=ur_L_getF(sId);
	if(sapUrMapi_DataTip_isOpen(sId)==false)
		_ur_DataTip_timer=ur_callDelayed("sapUrMapi_DataTip_show('"+sId+"','mousemove')",500);
}
function ur_L_ml(sId,oEvt){
	clearTimeout(_ur_DataTip_timer);
	if(typeof(sId)== "object"){
		oEvt = sId;
		sId = oEvt.srcElement.getAttribute("id");
	}
	var o=ur_get(sId);
	
	if(!o) return;
	
	var oInput = null;
	var sCt=o.getAttribute("ct");
	if(sCt=="L"){
		sId=ur_L_getF(sId);
		_ur_DataTip_timer = ur_callDelayed("sapUrMapi_DataTip_hide(\""+sId+"\")",_ur_DataTip.time_out);
	}
	
	if(oPopup){
		_ur_DataTip_timer = ur_callDelayed("sapUrMapi_DataTip_hide(\""+sId+"\")",_ur_DataTip.time_out);
	}
}

//** Link.ie5 **

function sapUrMapi_Link_activate(sLinkId,e) {
	var oLink = ur_get(sLinkId);
	var iKeyCode=e.keyCode;
	
	
	if(iKeyCode==32 && oLink.onclick){
		oLink.click(); 
		e.returnValue=false;
		return false;
	}
	
	else if (oLink.getAttribute("hasmenu")=="true" && iKeyCode==40 && oLink.oncontextmenu) {
		oLink.oncontextmenu();
		e.returnValue=false;
		return false;
	}
  e.returnValue=true;
  return true;
}

//** LinkChoice.ie5 **

function ur_LinkChoice_keydown(e) { 
	var o=ur_EVT_src(e);
	
	if(o.tagName == "SPAN") o = o.parentNode;
	   
  if (e.keyCode==32) {
	  ur_EVT_cancel(e);
		sapUrMapi_LinkChoice_openMenu(o.id,e);
		return ur_EVT_cancel(e);
  }
}
function ur_LinkChoice_click(e) { 
	var o=ur_EVT_src(e);
	
	if(o.tagName == "SPAN") o = o.parentNode;
	
	sapUrMapi_LinkChoice_openMenu(o.id,e);
	return ur_EVT_cancel(e);
}
function sapUrMapi_LinkChoice_openMenu( sId, e){
	var sPopupId=document.getElementById(sId).getAttribute("popup");
	
	if (!sPopupId) return;
	if (ur_system.direction=="rtl")
 	  sapUrMapi_PopupMenu_showMenu(sId,sPopupId,sapPopupPositionBehavior.MENURIGHT,e);
 	else
 	  sapUrMapi_PopupMenu_showMenu(sId,sPopupId,sapPopupPositionBehavior.MENULEFT,e);
  e.cancelBubble=false;
	if ((e.type=="contextmenu")) {
    e.returnValue=false;
  } else {
    e.returnValue=true;
  }
}

//** ListBox.ie5 **

function sapUrMapi_ListBox_focus(sId,e) {
    
	sapUrMapi_DataTip_show(sId,"focus");
}
function sapUrMapi_ListBox_blur(sId,event) {
	sapUrMapi_DataTip_hide(sId);
}
function sapUrMapi_ListBox_keydown(sId,oEvt) {
	
	if(oEvt.keyCode == "73" && oEvt.ctrlKey && oEvt.shiftKey && !oEvt.altKey ){
		ur_EVT_cancel(oEvt);
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
	}
	if(oEvt.keyCode == "27"){
		ur_EVT_cancel(oEvt);
		sapUrMapi_DataTip_hide(sId);
	}
}
//** LoadingAnimation.ie5 **

var _ur_LoadingAni_delay = 2000;
var _ur_LoadingAni_timerId = null;
var _ur_LoadingPopup = null;
function sapUrMapi_LoadingAnimation_getObject() {
	return ur_get("ur-loading");
}
function sapUrMapi_LoadingAnimation_getText() {
	var oLAText = ur_get("ur-loading");
	oLAText = oLAText.firstChild.lastChild;
	return oLAText.innerHTML;
}
function sapUrMapi_LoadingAnimation_trigger(loadingDelay) {
	if ( loadingDelay>=0 ) 
		_ur_LoadingAni_timerId = ur_callDelayed("sapUrMapi_LoadingAnimation_show('ur-loading')", loadingDelay);
	else 
		_ur_LoadingAni_timerId = ur_callDelayed("sapUrMapi_LoadingAnimation_show('ur-loading')", _ur_LoadingAni_delay);
}
function sapUrMapi_LoadingAnimation_show(sId) {
	if (_ur_LoadingAni_timerId) {
		var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
		_ur_LoadingPopup = new sapPopup(window,arrUrls,ur_get("ur-loading"),null,e,1);
		_ur_LoadingPopup.positionbehavior=sapPopupPositionBehavior.BROWSERCENTER;
		_ur_LoadingPopup.show(true);
		_ur_LoadingAni_timerId = null;
	}
}
function sapUrMapi_LoadingAnimation_cancel() {
	if (_ur_LoadingAni_timerId) {
		clearTimeout(_ur_LoadingAni_timerId);
	_ur_LoadingAni_timerId = null;
	} else {
		sapUrMapi_LoadingAnimation_hide();
}
}
function sapUrMapi_LoadingAnimation_hide() {
	if (_ur_LoadingPopup!=null) {
	   _ur_LoadingPopup.hide();
	   _ur_LoadingPopup=null;
	}
}

//** MenuBar.ie5 **

function sapUrMapi_MenuBar_hover(sId,e){
	var oTxt=ur_get(sId+"-txt");
	var oBtn=ur_get(sId+"-btn");
	var oMnuBar=ur_get(sId).parentNode;
	var sAi=oMnuBar.getAttribute("ai");
	
	if(ur_isSt(sId,ur_st.DISABLED)) return;
	
	if (oTxt.className.indexOf("Hover")==-1){
		oTxt.className+="Hover";
		oBtn.className+="Hover";
	}
	if(e.type=="mouseout"){
		oTxt.className=oTxt.className.replace("Hover","");
		oBtn.className=oBtn.className.replace("Hover","");
	}
	if(oPopup!=null){
	  if (!oPopup.source.object) return; 
		var sSrcPopup = oPopup.source.object.parentNode.getAttribute("id");
		var sMenu = oMnuBar.getAttribute("id");
		if (sSrcPopup == sMenu && sAi!=sId){
 			oTxt.click();
			oMnuBar.setAttribute("ai",sId);
		}
	}
}
function sapUrMapi_MenuBar_keyDown(sMenuId,e) {
}
function sapUrMapi_MenuBarItem_keyDown(sItemId,iCurrentIndex,sPopupId,oEvt) {
 	if (!sapUrMapi_checkKey(oEvt,"keydown",new Array("35","36","37","39","9","40"))) 
 		return false;
	var sId= ur_EVT_src(oEvt).parentNode.parentNode.getAttribute("id");
 	var o = ur_MenuBar_getObj(sId,oEvt);
 	var oMenuItem=o.items[iCurrentIndex];
 	var iKey=oEvt.keyCode;
	
 	if (iKey==40 && !ur_isSt(oMenuItem,ur_st.DISABLED)) {
		if (oMenuItem.onclick) 
	 		oMenuItem.onclick();
	 	else if (oMenuItem.oncontextmenu)
			oMenuItem.oncontextmenu();
	}
	
	if(ur_KY_nav(oEvt,o)&&oEvt.keyCode!=9)
		return ur_EVT_cancel(oEvt);
}
var ur_pullDownMenu = false;
function sapUrMapi_MenuBarItem_click(sItemId,sPopupId,oEvt) {
  ur_pullDownMenu = true;
  sapUrMapi_PopupMenu_showMenu(sItemId,sPopupId,sapPopupPositionBehavior.MENULEFT,oEvt);
  ur_EVT_cancel(oEvt);
}
function sapUrMapi_MenuBar_focus(sMenuId,oEvt) {
	 	var oMenu = ur_get(sMenuId);
	 	var oMenuItem = oMenu.firstChild;
	 	if(!ur_system.is508)
	 		while(ur_isSt(oMenuItem,ur_st.DISABLED) && oMenuItem!=null)
	 			oMenuItem=oMenuItem.nextSibling;
	 	if(oMenuItem!=null){
	 		sapUrMapi_setTabIndex(oMenuItem,0);
	 		ur_focus(oMenuItem);
	 	sapUrMapi_setTabIndex(oMenu,-1);
	 }
}
function sapUrMapi_MenuBarItem_focus(oEvt){ur_EVT_cancel(oEvt);}
function ur_MenuBar_getObj(sMenuId,oEvt) {
	var o = {
			ref:ur_getRootObj(ur_EVT_src(oEvt)),
			items:new Array,
			fidx:0
			};
	o.ref["kb"]="h";
	o.items["rfl"]=true;
	
	var aItems=o.ref.childNodes;
	
	for (var i=0;i<aItems.length;i++){
		if(aItems[i].getAttribute("idx")!=null)
    		o.items.push(aItems[i]);
	}
	return o;
}
//** MessageBar.ie5 **
enumUrMessageBarType = {ERROR:"Error",WARNING:"Warning",OK:"Ok",STOP:"Stop",LOADING:"Loading",NONE:"None",TEXT:"Text",ALERT:"Alert",INFO:"Info",NOTIFICATION:"Notif",TASK:"Task"};
function sapUrMapi_MessageBar_setAccText(sId,vMessageBarType) {
	var oMBar = ur_get(sId);
	var oMTxt = ur_get(sId+"-txt");
	var sMTxt = oMTxt.innerText;
	if (oMTxt.getAttribute("tt")!=null && oMTxt.getAttribute("tt")!="") sMTxt=oMTxt.getAttribute("tt");
	var sType = vMessageBarType.toUpperCase(); 
	var bHasConId = oMBar.onclick!=null;
	var sTxt = "";
	if (bHasConId) sTxt="SAPUR_MSG_JUMPKEY"; 
	if (vMessageBarType!=enumUrMessageBarType.TEXT) {
		if (ur_system.is508) {
			oMBar.title=getLanguageText("SAPUR_MSG",new Array("SAPUR_MSG_"+sType,sMTxt,sTxt));
		} else {
		  oMBar.title=sMTxt;
		}
	} else {
		if (ur_system.is508) {
			oMBar.title=getLanguageText("SAPUR_MSG",new Array("",sMTxt,sTxt));
		} else {
		  oMBar.title=sMTxt;
		}
	}
}
function sapUrMapi_MessageBar_setType(sId,vMessageBarType) {
	var oMBar = ur_get(sId);
	sapUrMapi_MessageBar_setAccText(sId,vMessageBarType);
	if (vMessageBarType==enumUrMessageBarType.NONE) {
		oMBar.style.display = 'none';
		return;
	} else {
		if (vMessageBarType==enumUrMessageBarType.ERROR || vMessageBarType==enumUrMessageBarType.STOP) oMBar.className="urMsgBarErr";
		else oMBar.className="urMsgBarStd";
		oMBar.style.display = 'block';
    var oMBarImg  = ur_get(sId+"-img");
    if (vMessageBarType!=enumUrMessageBarType.TEXT) {
    	oMBarImg.style.display="inline";
      oMBarImg.className = "urMsgBarImg"+vMessageBarType;
    } else {
    	oMBarImg.style.display="none";
    }
	}
}
function sapUrMapi_MessageBar_getType(sId) {
	var oMBar = ur_get(sId);
  if (oMBar.style.display == 'none') {
  	return enumUrMessageBarType.NONE;
  } else {
    var oMBarImg  = ur_get(sId+"-img");
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.ERROR)>-1) return enumUrMessageBarType.ERROR;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.WARNING)>-1) return enumUrMessageBarType.WARNING;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.LOADING)>-1) return enumUrMessageBarType.LOADING;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.STOP)>-1) return enumUrMessageBarType.STOP;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.OK)>-1) return enumUrMessageBarType.OK;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.ALERT)>-1) return enumUrMessageBarType.ALERT;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.INFO)>-1) return enumUrMessageBarType.INFO;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.NOTIFICATION)>-1) return enumUrMessageBarType.NOTIFICATION;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.TASK)>-1) return enumUrMessageBarType.TASK;
    if ((oMBarImg.style.display).indexOf("none")>-1) return enumUrMessageBarType.TEXT;
  }
}
function sapUrMapi_MessageBar_setText(sId,sText) {
	var oMBarText = ur_get(sId+"-txt");
	oMBarText.innerHTML = sText;
	sapUrMapi_MessageBar_setAccText(sId,sapUrMapi_MessageBar_getType(sId));
}
function sapUrMapi_MessageBar_getText(sId) {
	var oMBarText = ur_get(sId+"-txt");
	return oMBarText.innerHTML;
}
function sapUrMapi_MessageBar_navigateToField(sId,sConId,oEvt) {
  
  if ((oEvt.type=="click") || (sapUrMapi_checkKey(oEvt,"keydown",new Array("32")))) {
    
    ur_EVT_cancel(oEvt);
    sapUrMapi_triggerFocus(sConId);
  }
}
function ur_MB_click(sId,sConId,oEvt){
	if(oEvt.type!="click" && oEvt.keyCode!="32") return;
	var oSrc=ur_EVT_src(oEvt);
	if(oSrc.tp=="H")
		ur_EVT_fire(oSrc,"ocl",oEvt);
	else{
		var oMb=sapUrMapi_getRootControl(oSrc);
		ur_EVT_fire(oMb,"ocl",oEvt);
	}
}
function sapUrMapi_HelpLnk_click(sId,sConId,oEvt){}

//** NavigationList.ie5 **

function ur_NL_getItem(oEvt){
	var oItm=ur_EVT_src(oEvt);
	while(ur_getAttD(oItm,"idx","")==""){ 
		oItm=oItm.parentNode;
		if (!oItm || oItm.tagName=="BODY") return null;
	}
	return oItm;
}
function ur_NL_getGroup(oEvt){
	var oItm=ur_EVT_src(oEvt);
	while(ur_getAttD(oItm,"gidx","")==""){ 
		oItm=oItm.parentNode;
		if (!oItm || oItm.tagName=="BODY") return null;
	}
	return oItm;
}
function ur_NL_cl(oEvt){
	var oSrcElement = ur_EVT_src(oEvt);
	var oNL = sapUrMapi_getRootControl(oSrcElement);
	var sId = oNL.getAttribute("id");	
	var o = ur_NL_getObj(sId);
	
	for(i=0; i<o.items.length; i++){
		if(oSrcElement.id==o.items[i].id){
			o.ref.setAttribute("iFidx",i);
			break;
		}
	}
  if (ur_FRA_cl(oEvt)) return;
	var oItm=ur_NL_getItem(oEvt);
	
	if (oItm==null) {
	  oItm=ur_NL_getGroup(oEvt);
	  if (oItm!=null)
		  ur_EVT_fire(oItm,"ogc",oEvt);
		return;
	}
	if(oItm==null) return;
	if (ur_getAttD(oItm,"st","").indexOf("d")>-1) return;
	var sMenuId=oItm.parentNode.getAttribute("pop");
	var sChildId=oItm.getAttribute("id");
	
	if(sMenuId!=null && sMenuId!=""){
		if (ur_system.direction=="rtl")
		  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENULEFT,oEvt);
		else
	 	  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENURIGHT,oEvt);
	}
	else{
	  ur_EVT_fire(oItm,"oic",oEvt);
	}
}
function ur_NL_keyNav(oEvt){
	var oSrcElement = ur_EVT_src(oEvt);
	var oNL = sapUrMapi_getRootControl(oSrcElement);
	var sId = oNL.getAttribute("id");	
	var o = ur_NL_getObj(sId);
	var iKey = oEvt.keyCode;
	var oItem = null;
	var iFidx=o.ref.getAttribute("iFidx");
	if(iFidx==null)
		iFidx=o.items.selidx;
	if(iFidx==null)
		iFidx=0;
		
	if(iKey==40 && oSrcElement!=o.end){
		if(oSrcElement==o.ref && o.items.selected!=null || oSrcElement==o.ref.pers && o.items.selected!=null)
		   oItem=ur_get(o.items.selected);
		else if(oSrcElement==o.ref && o.items.selected==null || oSrcElement==o.ref.pers && o.items.selected==null)
			oItem=o.items[0];
		else{
			if(iFidx<=o.items.length ){
				iFidx=iFidx+1;
				oItem=o.items[iFidx];
			}else
				return;
		}
			
	}
	else if(iKey==38 && oSrcElement!=o.end && oSrcElement!=o.ref){
		iFidx=iFidx-1;
		if(iFidx>=0){
		   oItem=o.items[iFidx];
		}else
		   return;
	}
	else if(iKey==9){
		 if(oEvt.shiftKey){ 
		 	if(oSrcElement!=o.ref && oSrcElement!=o.end && o.ref.pers==null){
			   oItem=o.ref;
			   if(o.items.selected==null)
			   	  iFidx=0;
			   	else
			   	  iFidx=o.items.selidx;
			}
			else if(oSrcElement!=o.ref && oSrcElement!=o.end && o.ref.pers!=null && oSrcElement!=o.ref.pers ){
			   oItem=o.ref.pers;
			   iFidx=0;
			}
			else if(oSrcElement==o.end){
				if(o.items.selected==null){
					oItem=o.items[o.items.length-1];
					iFidx=o.items.length-1;
				}else{
				   oItem=o.items[o.items.selidx];
				   iFidx=o.items.selidx;
				}
			}
			else if(oSrcElement==o.ref.pers)
				oItem=o.ref;
		 }
		 if(!oEvt.shiftKey){
		 	if(oSrcElement!=o.ref && oSrcElement!=o.end && oSrcElement!=o.ref.pers){
	 			oItem=o.end;
	 			iFidx=o.items.length-1;
	 		}
			else if((oSrcElement==o.ref && o.ref.pers==null) || oSrcElement==o.ref.pers){
				if(o.items.selected==null){
					oItem=o.items[0];
					iFidx=0;
				}
				else{
					oItem=o.items[o.items.selidx];
					iFidx=o.items.selidx;
				}
			}
		 }
	}
	
	if(iFidx<o.items.length)
	    o.ref.setAttribute("iFidx",iFidx);
	
	if(oItem!=null){
		try{
			sapUrMapi_setTabIndex(oItem,0);
			ur_focus(oItem);
		} catch(err){}
		return ur_EVT_cancel(oEvt);
	}
}
function ur_NL_getObj(sId){
		var oNL=ur_get(sId);
		var oCnt=ur_get(sId+"-cnt");
		var o = {
			ref:oNL,
			items:new Array(),
			end:ur_get(sId+"-end")
			};
	o.ref["pers"]=ur_get(sId+"-pers");
	var oItems=oCnt.getElementsByTagName("TD");
	for(i=0; i<oItems.length; i++){
		if(oItems[i].getAttribute("idx")!=null || oItems[i].getAttribute("gidx")!=null){
			o.items.push(oItems[i]);
		}
				
	}
	for(i=0; i<o.items.length; i++){
		if(o.items[i].getAttribute("sel")!=null){
		   o.items["selected"]=o.items[i].getAttribute("sel");
		}
		if(o.items[i].id==o.items.selected){
		   o.items["selidx"]=i;
		   break; 
		}
	}
		return o;
}
function ur_NL_kd(oEvt){
	var o = ur_EVT_src(oEvt);
	 o = sapUrMapi_getRootControl(o);
	var sId = o.getAttribute("id");	
	var oSrcElement=ur_EVT_src(oEvt);
	
  if(oEvt.keyCode==9 || oEvt.keyCode==38 || oEvt.keyCode==40){
	ur_NL_keyNav(oEvt);
   }
   else if(oEvt.keyCode==107 && ur_isSt(o,ur_st.COLLAPSED) && oSrcElement.ct=="NL")
	 {
		if (ur_isSt(o,ur_st.COLLAPSED))
		{
			mf_FRA_exp(sId);
		}
		return ur_EVT_cancel(oEvt);
	 }
	 
	 else if(oEvt.keyCode==109 && oSrcElement.ct=="NL")
	 {
		 if (ur_isSt(o,ur_st.EXPANDED))
		 {
			 mf_FRA_col(sId);
		 }
		 return ur_EVT_cancel(oEvt);
	 }
	
	else if(oEvt.keyCode==32 || oEvt.keyCode==13){
		ur_EVT_src(oEvt).click();
		return ur_EVT_cancel(oEvt);
	}	
	
	else if(oEvt.keyCode==39 || oEvt.keyCode==115){
		var oMnuNode=ur_NL_getPrevObj(ur_NL_getItem(oEvt),"pop");
		var sSt = oSrcElement.getAttribute("st");
		
		if(oMnuNode==null || sSt=="d" || sSt==null)return ur_EVT_cancel(oEvt);
		else {
			sChildId=oSrcElement.getAttribute("id");
			sMenuId=oMnuNode.getAttribute("pop");
				if (ur_system.direction=="rtl")
				  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENULEFT,oEvt);
				else
			 	  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENURIGHT,oEvt);
			return ur_EVT_cancel(oEvt);
		}
	}
	else
		return sapUrMapi_skip(sId,oEvt);
}
function ur_NL_getPrevObj(o,sAt){
		if(!o || !sAt) return null;
		while(ur_getAttD(o,sAt,"")==""){ 
			o=o.parentNode;
			if (!o || o.getAttribute("ct")=="NL") return null;
		}
	return o;
}

//** Paginator.ie5 **

UR_PAGINATOR_BUTTON = {BEGIN:0, PREVIOUS_PAGE:1, PREVIOUS_ITEM:2,NEXT_ITEM:3,NEXT_PAGE:4,END:5};
function sapUrMapi_Paginator_setStates(sId, arrBtns, arrStates) {
	var oPaginator  = ur_get(sId);
	var oButton;
	var bHorizontal = oPaginator.getAttribute("ur_direction")=="horizontal";
	for (var n=0;n<arrBtns.length;n++) {
		try {
		  oButton= ur_get(sId+"-btn-"+arrBtns[n]);
		  if (oButton==null) continue;
		} catch (e) {
		  continue;
		}
		if (arrStates[n]) {
		  if (ur_isSt(oButton,ur_st.DISABLED)) {
		  	var arrClass=oButton.className.split(" ");
		  	arrClass[0]=arrClass[0].replace("Dsbl","");
		  	arrClass[2]=arrClass[2].replace("Dsbl","");
		  	oButton.className=arrClass.join(" ");
		  	ur_setSt(oButton,ur_st.DISABLED,false);
		  	oButton.setAttribute("href","javascript:void(0)");
		  }
		} else {
		  if (!ur_isSt(oButton,ur_st.DISABLED)) {
		  	var arrClass=oButton.className.split(" ");
		  	arrClass[0]=arrClass[0]+"Dsbl";
		  	arrClass[2]=arrClass[2]+"Dsbl";
		  	oButton.className=arrClass.join(" ");
		  	oButton.href=null;
		  	ur_setSt(oButton,ur_st.DISABLED,true);
		  	oButton.removeAttribute("href");
		  }
		}
	}
  sapUrMapi_Focus_showFocusRect();
}
function sapUrMapi_Paginator_buttonDisabled(o) {
  if (o.ct=="PG") return true;
  return ur_isSt(o,ur_st.DISABLED);
}
function sapUrMapi_Paginator_getInputValue(sId) {
  var oInp=ur_get(sId+"-inp");
  if (oInp!=null) return parseInt(oInp.value);
}
function sapUrMapi_Paginator_setInputValue(sId,iNewValue) {
  var oInp=ur_get(sId+"-inp");
  if (oInp!=null) oInp.value=iNewValue;
}
function sapUrMapi_Paginator_click(sId,sConId,oEvt) {
  var o=ur_EVT_src(oEvt);
  if (o.id.indexOf("-btn")==-1) return;
  if (!sapUrMapi_Paginator_buttonDisabled(o)) {
    ur_EVT_fire(o,"ocl",oEvt);
  }
}
function sapUrMapi_Paginator_keydown(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
  if (o.id.indexOf("-btn")==-1) return;
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
    sapUrMapi_triggerClick(oEvt,new Array("32"));
  }
  if ((o.id.indexOf("-menu")>-1) && ((oEvt.keyCode==40) || (oEvt.keyCode==13)|| (oEvt.keyCode==32))) {
    return ur_EVT_cancel(oEvt);
  }
  if (oEvt.keyCode>36 && oEvt.keyCode<41) {
	  return ur_EVT_cancel(oEvt);
  }
  if (oEvt.keyCode==32) {
	  return ur_EVT_cancel(oEvt);
  }
  if (oEvt.keyCode>=33 && oEvt.keyCode<=36) {
    var oBtn=null;
		if (oEvt.keyCode==33) { 
			oBtn=ur_get(sId+"-btn-1");
		}
		if (oEvt.keyCode==34) { 
			oBtn=ur_get(sId+"-btn-4");
		}
		if (oEvt.keyCode==36) { 
			oBtn=ur_get(sId+"-btn-0");
		}
		if (oEvt.keyCode==35) { 
			oBtn=ur_get(sId+"-btn-5");
		}
    if (oBtn!=null) { 
      sapUrMapi_focusElement(oBtn.id);
      if (!sapUrMapi_Paginator_buttonDisabled(oBtn)) {
        ur_EVT_fire(oBtn,"ocl",oEvt);
      }
    }
	}
}
function sapUrMapi_Paginator_navBegin(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		var arrButtonArray = new Array();
		arrButtonArray[0]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
		arrButtonArray[1]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
		arrButtonArray[2]=UR_PAGINATOR_BUTTON.BEGIN;
		arrButtonArray[3]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
		arrButtonArray[4]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
		arrButtonArray[5]=UR_PAGINATOR_BUTTON.END;
		var arrStateArray = new Array();
		arrStateArray[0]=false;
		arrStateArray[1]=false;
		arrStateArray[2]=false;
		arrStateArray[3]=true;
		arrStateArray[4]=true;
		arrStateArray[5]=true;
		sapUrMapi_Paginator_setStates(sId,arrButtonArray,arrStateArray);
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      sapUrMapi_bounceItem(sConId,-1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_bounceItem(sConId,-1,"PCTAB");
	  } catch (ex) {}  
		return true;
  }
  return false
}
function sapUrMapi_Paginator_navEnd(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		var arrButtonArray = new Array();
		arrButtonArray[0]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
		arrButtonArray[1]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
		arrButtonArray[2]=UR_PAGINATOR_BUTTON.END;
		arrButtonArray[3]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
		arrButtonArray[4]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
		arrButtonArray[5]=UR_PAGINATOR_BUTTON.BEGIN;
		var arrStateArray = new Array();
		arrStateArray[0]=false;
		arrStateArray[1]=false;
		arrStateArray[2]=false;
		arrStateArray[3]=true;
		arrStateArray[4]=true;
		arrStateArray[5]=true;
		sapUrMapi_Paginator_setStates(sId,arrButtonArray,arrStateArray);
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      sapUrMapi_bounceItem(sConId,1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_bounceItem(sConId,1,"PCTAB");
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_navPrevPage(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_pageItem(sConId,-1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_pageItem(sConId,-1,"PCTAB");				
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function	sapUrMapi_Paginator_navNextPage(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_pageItem(sConId,1,"PCSEQ");
	        if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_pageItem(sConId,1,"PCTAB");
			
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_navPrev(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		try {
	    if (sapUrMapi_getControlType(sConId)=="PHI") 
	        sapUrMapi_PhaseIndicator_paging(sConId,"BACK");
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_scrollItem(sConId,-1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_scrollItem(sConId,-1,"PCTAB");
			if(sapUrMapi_getControlType(sConId)=="TS")
			{
				ur_IScr_toPrevItem(sConId);
				var oCon = ur_get(sConId);
				var ifocIdx = parseInt(oCon.getAttribute('fidx'));
				if(ifocIdx > 0)
					ur_TS_setTabIdx(sConId,ifocIdx,-1);					
			    ur_EVT_addParam(oEvt,"FirstVisibleItemIdx",ur_IScr[sConId].first);
			}
	    } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_navNext(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
    try {
	    if (sapUrMapi_getControlType(sConId)=="PHI") 
	      sapUrMapi_PhaseIndicator_paging(sConId,"FURTHER");
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_scrollItem(sConId,1,"PCSEQ");
	    if (sapUrMapi_getControlType(sConId)=="PCTAB") 
	      sapUrMapi_scrollItem(sConId,1,"PCTAB");
		if(sapUrMapi_getControlType(sConId)=="TS")
		{
		  ur_IScr_toNextItem(sConId);	      	      
		  var oCon = ur_get(sConId);
		  var ifocIdx = parseInt(oCon.getAttribute('fidx'));
		  var iCount = parseInt(oCon.getAttribute('ic'));
		  if(ifocIdx < iCount )
			ur_TS_setTabIdx(sConId,ifocIdx,-1);
		  ur_EVT_addParam(oEvt,"FirstVisibleItemIdx",ur_IScr[sConId].first);
		}
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_showMenu(sId,sMenuId,sConId,oEvt) {
  if (oEvt.type=="click" || (oEvt.keyCode==40) || (oEvt.keyCode==13)|| (oEvt.keyCode==32)) {
    if (sapUrMapi_getControlType(sConId)=="TS") {
      sId=sConId+"-pg";
    }
    sapUrMapi_PopupMenu_showMenu(sId+"-menu",sMenuId,sapPopupPositionBehavior.MENURIGHT,oEvt);
  }
  return false;
}
function ur_Paginator_triggerClick(sId,enumButton) {
  var oBtn=null;
	oBtn=ur_get(sId+"-btn-"+enumButton);
  if (oBtn!=null) { 
    if (!sapUrMapi_Paginator_buttonDisabled(oBtn)) {
      oBtn.click();
      return true;
    }
  }
}
function sapUrMapi_Paginator_enrichParameters(sConId) {
	try {
		if (sapUrMapi_getControlType(sConId)=="PHI") {
	  	return sapUrMapi_PhaseIndicator_getFirstVisible(ur_get(sConId));
	   }
	} catch (ex) {}  
	return "";
}
function sapUrMapi_Paginator_removeFromTabChain(sId) {
  var o=ur_get(sId);
  if (!o.hasChildNodes) return;
  var oC=o.childNodes;
  for (var i=0;i<oC.length;i++) sapUrMapi_setTabIndex(oC[i],-1);
}

//** PatternContainerContentItem.ie5 **

function sapUrMapi_Pc_Resize(sId) {
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
function sapUrMapi_Pc_RegisterCreate(sId) {
	sapUrMapi_PcTabSeq_Create(sId);
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
function sapUrMapi_Pc_toggle(sId, sCtlType, e) {
	if ((e.type!="click") && (!sapUrMapi_checkKey(e,"keydown",new Array("32","30")))) return false;
	ur_EVT_cancelBubble(e);
	var tbdy = ur_get(sId+"-tbd");
	var tbl = tbdy.parentElement;
	var tbar = ur_get(sId+"-tbar");
	var thead = ur_get(sId+"-hd");
	var ico = ur_get(sId+"-exp");
	if ( tbdy != null && ico != null ) {
		if ( tbdy.style.display == "none" ) {
			if (tbar) tbar.style.setAttribute("display", "block");
			tbdy.style.setAttribute("display", "block");
			
			if (tbl.getAttribute("sized") != "true"){
				sapUrMapi_Pc_Create(sId, tbl.getAttribute("scrolltype"), false );
			}
			if (ico.className.indexOf("urPcExpClosedIco") != -1){ ico.className = ico.className.replace("urPcExpClosedIco", "urPcExpOpenIco");}
			if (thead != null && thead.className == "urPcHdBgClosedIco" ){ thead.className = "urPcHdBgOpenIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_COLLAPSE",new Array(thead.innerText,sCtlType + "_COLLAPSE_KEY"));
			}
		} else {
			if (tbar){ tbar.style.setAttribute("display", "none");}
			var helper = tbdy.parentNode.offsetWidth;
			tbdy.style.setAttribute("display", "none");
			tbdy.parentNode.style.width=helper+"px";
			if (ico.className.indexOf("urPcExpOpenIco") != -1 ){ ico.className = ico.className.replace("urPcExpOpenIco", "urPcExpClosedIco");}
			if (thead != null && thead.className == "urPcHdBgOpenIco" ){ thead.className = "urPcHdBgClosedIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_EXPAND",new Array(thead.innerText, sCtlType + "_EXPAND_KEY"));
			}
	}
		ur_focus(ico);
}
  sapUrMapi_Focus_showFocusRect();
	return true;
}
function sapUrMapi_Pc_showOptionMenu(sId,e) {
  var sTrayId=sId;
  var sTriggerId=sId+"-menu";
  var sMenuContentId=ur_get(sTriggerId).getAttribute("mid");
 	if (ur_system.direction=="rtl")
	  var enumPositionBehavior=sapPopupPositionBehavior.MENULEFT;
	else
	  var enumPositionBehavior=sapPopupPositionBehavior.MENURIGHT;
  var sControlType=sapUrMapi_getControlTypeFromObject(ur_get(sId));
	switch (sControlType) {
		case "PCTAB" :
			if (e.type!="click") {
				if (sapUrMapi_checkKey(e,"keydown",new Array("32","40","13"))){
					sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
				}
				else if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))) {
					var intTabCount = parseInt(ur_get(sTrayId + "-tbl").getAttribute("tabcount"));
					if (ur_system.direction=="rtl") {
					  sapUrMapi_PcTabs_focusItem(sTrayId,null,null,e.keyCode==37,e.keyCode==39);
					} else {
					  sapUrMapi_PcTabs_focusItem(sTrayId,null,null,e.keyCode==39,e.keyCode==37);
					}
					return;
				}
				else {
					return false;
				}
			}
			else {
				sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
			}
			break;
		case "PCTIT" :
			if (e.type!="click") {
				if (sapUrMapi_checkKey(e,"keydown",new Array("32","40","13"))){
					sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
				}
			}
			else {
			  sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
			}
			break;
		default :
			return;
	}
}
function sapUrMapi_PcTab_Resize(sId) {
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
function sapUrMapi_PcTabSeq_RegisterCreate(sId) {
	sapUrMapi_PcTabSeq_Create(sId);
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
var sapUrMapi_PcTabSeq_Registry = new Array();
function sapUrMapi_PcTabSeq_Create(sId) {
	sapUrMapi_PcTabSeq_Registry[sId] = false;
	
	var bCollapsed = ur_get(sId).getAttribute("collapsed");
	var tbl = ur_get(sId + "-tbd").parentElement;
	if (bCollapsed == "true"){
		tbl.setAttribute("sized", "false");
	}
	else{
		tbl.setAttribute("sized", "true");
	}
	
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
	sapUrMapi_PcTabSeq_Registry[sId] = true;
}
function sapUrMapi_PcTabSeq_Draw() {
	var divlist = new Array();
	var tbdylist = new Array();
	var iIdx = "null";
	for (var ctls in sapUrMapi_PcTabSeq_Registry) {
		if (ctls.indexOf("_") == 0) {continue;}
		var tbdy = ur_get(ctls + "-tbd");
    if(tbdy==null) continue;
		tbdylist[ctls] = tbdy;
		divlist[ctls] = null;
		if (tbdy.style.display == "none") {
			continue;
		}
		iIdx = ur_get(ctls + "-tbl").getAttribute("selectedtab");
		if (iIdx == -9999) {
			iIdx = "Title";
		}
		var div = ur_get(ctls + "-cnt-" + iIdx);
		if (div==null) return;
		divlist[ctls] = div;
		
}
	for (var ctls in sapUrMapi_PcTabSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		var maxWidth = parseInt(div.clientWidth);
		
	}
	for (var ctls in sapUrMapi_PcTabSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		for (var i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {
				if (div.childNodes[i].style.display == "none") {
					div.childNodes[i].style.display = "";
				}
			}
		}
	}
}
function sapUrMapi_PcTabs_getSelectedItemId(sTabStripId) {
  var oTabTable 	= ur_get(sTabStripId+"-tbl");
	var iSelTab			=	parseInt(oTabTable.getAttribute("selectedtab"));
	return sTabStripId+"-itm-"+iSelTab;
}
function sapUrMapi_PcTabs_focusItem(sTabStripId,iFocusIdx,iTabCount,bNext,bPrev) {
	var oTabTable = ur_get(sTabStripId+"-tbl");
	if (isNaN(iFocusIdx)) {iFocusIdx = parseInt(oTabTable.getAttribute("selectedtab"));}
	if (isNaN(iTabCount)) {iTabCount = parseInt(oTabTable.getAttribute("tabcount"));}
	var ico = ur_get(sTabStripId + "-menu");
	var iNewIndex=iFocusIdx;
	if (ico != null && ico.getAttribute("hasfocus") == "true") {
		if (bNext) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab"));
		}
		if (bPrev) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab")) - 1 + parseInt(oTabTable.getAttribute("vistabs"));
		}
	}
	else {
		if (bNext) {
			if (iFocusIdx<iTabCount-1) iNewIndex=iFocusIdx+1;
			else iNewIndex=0;
		}
		if (bPrev) {
			if (iFocusIdx>0) iNewIndex=iFocusIdx-1;
			else iNewIndex=iTabCount-1;
		}
	}
	oFocusedTab = ur_get(sTabStripId+"-itm-"+iNewIndex);
	if (oFocusedTab.style.display != "none") {
		var iOldFoc     = parseInt(oTabTable.getAttribute("focusedtab"));
		if (!isNaN(iOldFoc)) {
			sapUrMapi_setTabIndex(ur_get(sTabStripId+"-itm-"+iOldFoc+"-txt"),-1);
		}
		var oFoc = ur_get(sTabStripId+"-itm-"+iNewIndex+"-txt");
		sapUrMapi_setTabIndex(oFoc,0);
		oFoc.focus();
		oTabTable.setAttribute("focusedtab",iNewIndex);
		if (ico != null) {
			ico.setAttribute("hasfocus", "false");
		}
		if ((oFocusedTab.getAttribute("dsbl")=="true")&&(!ur_system.is508)) {
			sapUrMapi_PcTabs_focusItem(sTabStripId,iNewIndex,iTabCount,bNext,bPrev);
			return;
		}
	}
	else {
	    if (ico != null) {
			sapUrMapi_setTabIndex(ico,0);
			ico.setAttribute("hasfocus", "true");
			ico.focus();
	    }
	}
}
function sapUrMapi_PcTabs_enter (sId,e) {
	if (e.srcElement.id==sId+"-skipstart") {
		if (sapUrMapi_skip(sId+'-skipstart',sId+'-skipend',e)) return;
    if (!e.shiftKey) { 
		  if (sapUrMapi_checkKey(e,"keydown",new Array("9","39","37"))){
	      sapUrMapi_PcTabs_focusItem(sId);
				ur_EVT_cancel(e);
		  }
	  }
	}
}
function sapUrMapi_PcTabs_setActiveItem(sId,iIdx) {
	with (document) {
		var oTabTable 	= getElementById(sId+"-tbl");
		var tbdy = getElementById(sId+"-tbd");
		var iSelTab			=	parseInt(oTabTable.getAttribute("selectedtab"));
		var iTabLength	=	parseInt(oTabTable.getAttribute("tabcount"));
		var iCurIdx = parseInt(oTabTable.getAttribute("starttab"));
		var iVisTabs = parseInt(oTabTable.getAttribute("vistabs"));
		if (isNaN(iIdx)) return;
		if (getElementById(sId+"-itm-"+iIdx).getAttribute("dsbl")=="true") return false; 
		if ((iTabLength==1) || (iSelTab==iIdx)) return true; 
		var oCurrentTxt  = getElementById(sId+"-itm-"+iSelTab+"-txt");
		var oCurrentCell = getElementById(sId+"-itm-"+iSelTab);
		var oCurrentCon = getElementById(sId+"-itm-"+iSelTab+"-c");
		var oClickedTxt  = getElementById(sId+"-itm-"+iIdx+"-txt");
		var oClickedCell = getElementById(sId+"-itm-"+iIdx);
		var oClickedCon = getElementById(sId+"-itm-"+iIdx+"-c");
		var oFirstImage  = getElementById(sId+"-p");
		var oLastImage   = getElementById(sId+"-n");
		if (oCurrentCell != null){
			oCurrentCell.className="urPcTbsLabelOff"; 
			oCurrentTxt.className = "urPcTbsTxtOff";  
			if (oCurrentCon != null){
				oCurrentCon.className = "urPcConOff";	
			}
		}
		oClickedTxt.className = "urPcTbsTxtOn";   
		oClickedCell.className="urPcTbsLabelOn";  
		if (oClickedCon != null){
			oClickedCon.className = "urPcConOn";	
		}
		
		if (iCurIdx != 0){
			if (iIdx!=iCurIdx){oFirstImage.className="urPcTbsFirstAngOffPrevOn"; }
			else{oFirstImage.className="urPcTbsFirstAngOnPrevOn"; }
		}
		else{
			if (iIdx!=iCurIdx){oFirstImage.className="urPcTbsFirstAngOffPrevOff"; }
			else{oFirstImage.className="urPcTbsFirstAngOnPrevOff"; }
		}
		
		if (iCurIdx + iVisTabs >= iTabLength){
			if (iIdx == iTabLength - 1){
				oLastImage.className="urPcTbsLastOnNextOff"; 
			}
			else{
				if (iIdx != (iCurIdx + iVisTabs - 1)){oLastImage.className="urPcTbsLastOffNextOff"; }
				else{oLastImage.className="urPcTbsLastOnNextOff"; }
			}
		}
		else{  
			if (iIdx != (iCurIdx + iVisTabs - 1))oLastImage.className="urPcTbsLastOffNextOn"; 
			else{oLastImage.className="urPcTbsLastOnNextOn"; }
		}
		
		if (iSelTab == iCurIdx){
			getElementById(sId+"-itm-"+(iSelTab)+"-a").className="urPcTbsAngOffOff";
			getElementById(sId+"-itm-"+(iSelTab+1)+"-a").className="urPcTbsAngOffOff";
		} else  {
			getElementById(sId+"-itm-"+(iSelTab)+"-a").className="urPcTbsAngOffOff";
			if (iSelTab != iTabLength - 1){
				getElementById(sId+"-itm-"+(iSelTab+1)+"-a").className="urPcTbsAngOffOff";
			}
		}
		
		if (iIdx==iCurIdx){
			getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcTbsAngOffOn";
			if (iIdx != iTabLength - 1) {
			  getElementById(sId+"-itm-"+(iIdx+1)+"-a").className="urPcTbsAngOnOff";
			}
		} else {
			getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcTbsAngOffOn";
			if (iIdx != iTabLength - 1) {
				getElementById(sId+"-itm-"+(iIdx+1)+"-a").className="urPcTbsAngOnOff";
			}
		}
		oTabTable.setAttribute("selectedtab",iIdx); 
		sapUrMapi_PcTabs_focusItem(sId,iIdx); 
		
		var oCurrentContent  = getElementById(sId+"-cnt-"+iSelTab);
		var oClickedContent  = getElementById(sId+"-cnt-"+iIdx);
		
		if (tbdy.style.display != "none") {
			var maxwidth = parseInt(oCurrentContent.clientWidth);
			for (var i = 0; i < oClickedContent.childNodes.length; i++){
				oClickedContent.childNodes[i].style.width = (maxwidth - 1) + "px";
				}
			}
		
		oClickedContent.className = "urPcTbsDspSel";
		oCurrentContent.className = "urPcTbsDsp";
	}
	
	
	ur_setSt(oCurrentTxt,ur_st.NOTSELECTED,true);
	ur_setSt(oCurrentTxt,ur_st.SELECTED,false);
	ur_setSt(oClickedTxt,ur_st.NOTSELECTED,false);
	ur_setSt(oClickedTxt,ur_st.SELECTED,true);
	if (ur_system.is508) {
		sapUrMapi_refocusElement(oClickedTxt.id)
	}
	return true
}
function sapUrMapi_PcTabs_keySelect(sId, iSelectedIdx, iTabCount,e) {
	if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))){
	  if (ur_system.direction=="rtl") {
	    sapUrMapi_PcTabs_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==37,e.keyCode==39);
	  } else {
		  sapUrMapi_PcTabs_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==39,e.keyCode==37);
	  }
		ur_EVT_cancel(e);
		return;
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("32"))){
		sapUrMapi_PcTabs_setActiveItem(sId,iSelectedIdx,0,false);
		ur_EVT_cancel(e);
		return;
	}
}
function sapUrMapi_scrollItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != -1 && iDir != 1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var diff = vistabs;
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs - 1;}
	}
	if (lasttab != firsttab + vistabs - 1){
		diff = lasttab - firsttab;
	}
	if (iDir == 1){
		
		if (lasttab == tabcount - 1){return false;}
		
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, false, true, false);
		
		firsttab += 1;
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, true, false);
		if (diff > 2) {
			
			SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, false, false);
		}
		if (diff != 1) {
		
		lasttab += 1;
		SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, false, true);
	}
	else{
		
		lasttab = firsttab;
		SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, true, true);
		}
	}
	else{
		
		if (firsttab == 0){return false;}
		
		
		if (diff >= vistabs - 1){
			
			SCROLL_FUNCTIONS[sCtlType](sId, lasttab, false, false, true);
			
			lasttab -= 1;
			SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, false, true);
		}
		if (diff >= 1) {
			if (vistabs > 1) {
				
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, false, false);
		
		firsttab -= 1;
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, true, false);
	}
		else {
			  
				SCROLL_FUNCTIONS[sCtlType](sId, firsttab, false, false, false);
		
		firsttab -= 1;
				SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, true, false);
			}
		}
		else {
		
    SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, false, true);
		firsttab -= 1;
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, true, true);
		}
	}
	
	ICON_FUNCTIONS[sCtlType]( sId, firsttab, lasttab, tabcount );
	
	var newtabpage = Math.floor(firsttab / vistabs);
	oTabs.setAttribute("starttab", firsttab);
	oTabs.setAttribute("lasttab", lasttab);
	oTabs.setAttribute("tabpage", newtabpage);
	sapUrMapi_Pc_togglePager(sId,e);
	ur_PCTab_resetTabs(sId);
}
function sapUrMapi_pageItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != 1 && iDir != -1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if ((iDir == -1 && firsttab == 0) || ( iDir == 1 && lasttab == tabcount -1)){
		return false;
	}
	
	if (((iDir == 1) && ((tabpage + iDir) * vistabs) < (tabcount)) ||
		((iDir == -1) && (tabpage + iDir >= 0) )){
		tabpage = tabpage + iDir;
	}
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, true, false);
			}
			else if (i == lasttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, true);
			}
			else{
			   SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, true);
		   }
		   else{
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, false);
		   }
		}
	}
	
	ICON_FUNCTIONS[sCtlType]( sId, lbound, ubound, tabcount );
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	sapUrMapi_Pc_togglePager(sId,e);
	ur_PCTab_resetTabs(sId);
	
}
function sapUrMapi_boundsItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != 1 && iDir != -1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if ((iDir == -1 && firsttab == 0) || ( iDir == 1 && lasttab == tabcount)){
		return false;
	}
	
	if (iDir == 1){
		tabpage = Math.ceil(tabcount / vistabs) - 1;
	}
	else{
		tabpage = 0;
	}
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, true, false);
			}
			else if (i == lasttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, true);
			}
			else{
			   SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, true);
		   }
		   else{
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, false);
		   }
		}
	}
	
	ICON_FUNCTIONS[sCtlType]( sId, lbound, ubound, tabcount );
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	sapUrMapi_Pc_togglePager(sId,e)
}
function sapUrMapi_jumpItem( sId, iTab, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
  sapUrMapi_PopupMenu_hideAll();
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var seltab = parseInt(oTabs.getAttribute("selectedtab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if (iTab >= tabcount || iTab < 0){
		return false;
	}
	
	var tabpage = Math.floor(iTab / vistabs);
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, true, false);
			}
			else if (i == lasttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, true);
			}
			else{
			   SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, true);
		   }
		   else{
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, false);
		   }
		}
	}
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	sapUrMapi_Pc_togglePager(sId,e)
	
	
	SELECT_FUNCTIONS[sCtlType](sId, iTab, seltab, false);
	
	ICON_FUNCTIONS[sCtlType]( sId, lbound, ubound, tabcount );
}
function showTab(sId, iIdx, bShow, bIsFirst, bIsLast ){
	
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var tabimg = ur_get(sId + "-itm-" + iIdx + "-a");
	var tabcell = ur_get(sId + "-itm-" + iIdx);
	
	var conimg = ur_get(sId + "-itm-" + iIdx + "-ca");
	var concell = ur_get(sId + "-itm-" + iIdx + "-c");
	if (bShow){
		
		if (!bIsFirst && !bIsLast){
			tabimg.style.display = "";
			tabcell.style.display = "";
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
			}
		}
		else if (bIsFirst){
			tabimg.style.display = "none";
			tabcell.style.display = "";
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "none";
			}
		}
		else if (bIsLast && !bIsFirst){
			tabimg.style.display = "";
			tabcell.style.display = "";
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
			}
		}
	}
	else{
		
		tabimg.style.display = "none";
		tabcell.style.display = "none";
		if (concell != null){
			concell.style.display = "none";
			conimg.style.display = "none";
		}
	}
}
function setTabIcons( sId, firsttab, lasttab, tabcount ){
	var prev = ur_get(sId + "-p");
	var next = ur_get(sId + "-n");
	var first = ur_get(sId + "-itm-" + firsttab);
	var last = ur_get(sId + "-itm-" + lasttab);
	var prevtmp = prev.className;
	var nexttmp = next.className
	
	if (firsttab == 0){
		if (first.className.indexOf("LabelOn") != -1){
			prev.className = "urPcTbsFirstAngOnPrevOff";
		}
		else{
			prev.className = "urPcTbsFirstAngOffPrevOff";
		}
	}
	else{
		if (first.className.indexOf("LabelOn") != -1){
			prev.className = "urPcTbsFirstAngOnPrevOn";
		}
		else{
			prev.className = "urPcTbsFirstAngOffPrevOn";
		}
	}
	
	if (lasttab == tabcount - 1){
		if (last.className.indexOf("LabelOn") != -1){
			next.className = "urPcTbsLastOnNextOff";
		}
		else{
			next.className = "urPcTbsLastOffNextOff";
		}
	}
	else{
		if (last.className.indexOf("LabelOn") != -1){
			next.className = "urPcTbsLastOnNextOn";
		}
		else{
			next.className = "urPcTbsLastOffNextOn";
		}
	}
	prev.childNodes(0).className = "urPcTbsPreFirstAng";
	next.childNodes(0).className = "urPcTbsAfterLastAng";
}
try{
SCROLL_FUNCTIONS = {PCTAB:showTab,PCSEQ:showItem};
ICON_FUNCTIONS = {PCTAB:setTabIcons,PCSEQ:setSeqIcons}
SELECT_FUNCTIONS = {PCTAB:sapUrMapi_PcTabs_setActiveItem,PCSEQ:sapUrMapi_PcSeq_setActiveItem}
}catch(ex){};
function debug_jumpItem(elm){
	for (var i = 0; i < elm.options.length; i++){
		if (elm.options[i].selected == true){
			sapUrMapi_jumpItem( elm.getAttribute("control"), i, elm.getAttribute('controltype'));
	}
    }
}
function sapUrMapi_Pc_togglePager(sId,e) {
  if (ur_get(sId+"-pag")!=null) {
    var sPagerId=ur_get(sId+"-pag").firstChild.id;
  } else {
    return;
  }
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
  var arrButtonArray = new Array();
	var arrStateArray = new Array();
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.BEGIN;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
	if (firsttab!=0) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.END;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
	if (lasttab!=tabcount-1) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  sapUrMapi_Paginator_setStates(sPagerId,arrButtonArray,arrStateArray);
}
function ur_PCTab_resetTabs(sId)
{
	var oTabs = ur_get(sId + "-tbl");
	var iFoc = parseInt(oTabs.getAttribute('focusedtab'));
	var iSel = parseInt(oTabs.getAttribute('selectedtab'));
	var iFirst = parseInt(oTabs.getAttribute('starttab'));
	
	if(ur_get(sId+"-itm-"+iSel).style.display=="none" || ur_get(sId+"-itm-"+iFoc).style.display=="none" )
	{
		
		
		oTabs.setAttribute('focusedtab',iFirst);
		
		var oFoc = ur_get(sId+"-itm-"+iFirst+"-txt");
		var oOldFoc = 	ur_get(sId+"-itm-"+iFoc+"-txt");
		sapUrMapi_setTabIndex(ur_get(sId+"-itm-"+iSel+"-txt"),-1);
		sapUrMapi_setTabIndex(oOldFoc,-1);
		sapUrMapi_setTabIndex(oFoc,0);
		
		
		
	}
}
//** PatternContainerSequence.ie5 **

function ur_PcSeq_Resize(sId) {
	sapUrMapi_Resize_AddItem(sId, "ur_PcSeq_Draw('" + sId + "')");
}
function ur_PcSeq_RegisterCreate(sId) {
	ur_PcSeq_Create(sId);
	sapUrMapi_Create_AddItem(sId, "ur_PcSeq_Draw('" + sId + "')");
}
var ur_PcSeq_Registry = new Array();
function ur_PcSeq_Create(sId) {
	ur_PcSeq_Registry[sId] = false;
	
	var bCollapsed = ur_get(sId).getAttribute("collapsed");
	var tbl = ur_get(sId + "-tbd").parentElement;
	if (bCollapsed == "true"){
		tbl.setAttribute("sized", "false");
	}
	else{
		tbl.setAttribute("sized", "true");
	}
	
	sapUrMapi_Resize_AddItem(sId, "ur_PcSeq_Draw('" + sId + "')");
	ur_PcSeq_Registry[sId] = true;
}
function ur_PcSeq_Draw() {
	var divlist = new Array();
	var tbdylist = new Array();
	var iIdx = "null";
	for (var ctls in ur_PcSeq_Registry) {
		if (ctls.indexOf("_") == 0) {continue;}
		var tbdy = ur_get(ctls + "-tbd");
    if(tbdy==null) continue;
		tbdylist[ctls] = tbdy;
		divlist[ctls] = null;
		if (tbdy.style.display == "none") {
			continue;
		}
		iIdx = ur_get(ctls + "-tbl").getAttribute("selectedtab");
		if (iIdx == -9999) {
			iIdx = "Title";
		}
		var div = ur_get(ctls + "-cnt-" + iIdx);
		if (div==null) return;
		divlist[ctls] = div;
		
}
	for (var ctls in ur_PcSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		var maxWidth = parseInt(div.clientWidth);
		
	}
	for (var ctls in ur_PcSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		for (var i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {
				if (div.childNodes[i].style.display == "none") {
					div.childNodes[i].style.display = "";
				}
			}
		}
	}
}
function sapUrMapi_PcSeq_setActiveItem(sId, iIdx, iOldIdx, bIsTitle) {
	with(document) {
		var maxwidth = 0;
		var oTbl = getElementById(sId+"-tbl");
		var tbdy = getElementById(sId+"-tbd");
		var iOldIdx = parseInt(oTbl.getAttribute("selectedtab"));
		var iTabLength = parseInt(oTbl.getAttribute("tabcount"));
		var iNewIdx = parseInt(oTbl.getAttribute("starttab"));
		var iVisTabs = parseInt(oTbl.getAttribute("vistabs"));
		
		
		if (isNaN(iIdx)){return;}
		if ((iTabLength==1) || (iOldIdx==iIdx)){ return true; }
		
		
		if (iIdx != -9999){
			
			var oClkCell = getElementById(sId + "-itm-" + iIdx);
			if (oClkCell.getAttribute("dsbl")=="true" || oClkCell.className.indexOf("Term") != -1){ return false; }
		}
		
		if (iOldIdx == -9999){
			
			
			var oCurTxt = getElementById(sId + "-tit-txt");
			var oCurCon = getElementById(sId + "-itm-tit-cn");
			var oCurContent  = getElementById(sId+"-cnt-tit");
			maxwidth = parseInt(oCurContent.clientWidth);
			
			if (oCurTxt != null){
				oCurTxt.className = "urPcTitTxt";
				}
			
				if (oCurCon != null){
				oCurCon.className = "urPcConOff";
				}
			
			oCurContent.className = "urPcSeqDsp";
		}
		else if (iOldIdx >=0 && iOldIdx < iTabLength){
			
			
			var oCurTxt = getElementById(sId + "-itm-" + iOldIdx + "-txt");
			var oCurCell = getElementById(sId + "-itm-" + iOldIdx);
			var oCurCon = getElementById(sId + "-itm-" + iOldIdx + "-c");
			var oCurStpCell = getElementById(sId + "-itm-" + iOldIdx + "-n");
			var oCurStpTxt = getElementById(sId + "-itm-" + iOldIdx + "-na");
			var oCurContent  = getElementById(sId+"-cnt-"+iOldIdx);
			maxwidth = parseInt(oCurContent.clientWidth);
			if (oCurCell != null){
				
				oCurCell.className="urPcSeqLabelOff";
				oCurTxt.className = "urPcSeqTxtOff";
				if (oCurStpCell != null){
					var re = /On/gi;
					var clsNm = oCurStpCell.className;
					
					oCurStpCell.className = clsNm.replace(re, "Off");
					oCurStpTxt.className = "urPcSeqStpTxtOff";
				}
				
				if (oCurCon != null){
					oCurCon.className = "urPcConOff";
				}
			}
			
			oCurContent.className = "urPcSeqDsp";
		}
		
		
		var newHt = 0;
		if (iIdx == -9999){
			
			
			var oClkTxt  = getElementById(sId + "-tit-a");
			var oClkCon = getElementById(sId + "-itm-tit-cn");
			var oClkContent  = getElementById(sId+"-cnt-tit");
			
			if (oClkCon != null){
				oClkCon.className = "urPcConOn";
			}
			
			if (tbdy.style.display != "none") {
				for (var i = 0; i < oClkContent.childNodes.length; i++){
					oClkContent.childNodes[i].style.width = (maxwidth - 1) + "px";
					}
				}
			oClkContent.className = "urPcSeqDspSel";
		}
		else{
			
			
			var oClkCell = getElementById(sId + "-itm-" + iIdx);
			var oClkTxt  = getElementById(sId + "-itm-" + iIdx + "-txt");
			var oClkCon = getElementById(sId + "-itm-" + iIdx + "-c");
			var oClkStpCell = getElementById(sId + "-itm-" + iIdx + "-n");
			var oClkStpTxt = getElementById(sId + "-itm-" + iIdx + "-na");
			var oClkContent  = getElementById(sId+"-cnt-"+iIdx);
			if (oClkCell != null){
				
				oClkCell.className="urPcSeqLabelOn";
				oClkTxt.className = "urPcSeqTxtOn";
				if (oClkStpCell != null){
					var re = /Off/gi;
					var clsNm = oClkStpCell.className;
					
					oClkStpCell.className = clsNm.replace(re, "On");
					oClkStpTxt.className = "urPcSeqStpTxtOn";
				}
			}
			
			if (oClkCon != null){
				oClkCon.className = "urPcConOn";
			}
			
			if (tbdy.style.display != "none") {
				for (var i = 0; i < oClkContent.childNodes.length; i++){
					oClkContent.childNodes[i].style.width = (maxwidth - 1) + "px";
					}
				}
			oClkContent.className = "urPcSeqDspSel";
		}
		
		if (iOldIdx != -9999){
			if (iOldIdx == iNewIdx){
				if (getElementById(sId+"-itm-"+(iOldIdx)+"-a") != null) {
				  getElementById(sId+"-itm-"+(iOldIdx)+"-a").className="urPcSeqAngOffOff";
				}
				var td = getElementById(sId+"-itm-"+(iOldIdx+1)+"-a");
				if (td.className.indexOf("Term") == -1){
					td.className="urPcSeqAngOffOff";
				}
				else{
					 td.className="urPcSeqAngOffTerm";
				}
			}
			else if (iOldIdx >=0 && iOldIdx < iTabLength){
				getElementById(sId+"-itm-"+(iOldIdx)+"-a").className="urPcSeqAngOffOff";
				if (iOldIdx < iTabLength){
					var td = getElementById(sId+"-itm-"+(iOldIdx+1)+"-a");
					if (td != null) {
					        if (td.className.indexOf("Term") == -1){
						        td.className="urPcSeqAngOffOff";
					        }
					        else{
						        td.className="urPcSeqAngOffTerm";
						}
					}
				}
			}
		}
		
		if (iIdx==iNewIdx){
				var td = getElementById(sId+"-itm-"+(iIdx+1)+"-a");
				if (getElementById(sId+"-itm-"+(iIdx)+"-a") != null) {
				  getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcSeqAngOffOn";
				}
				if (td.className.indexOf("Term") == -1){
					td.className="urPcSeqAngOnOff";
				}
				else{
					td.className="urPcSeqAngOnTerm";
				}
		}
		else{
			if (iIdx != -9999){
				getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcSeqAngOffOn";
			}
			if (iIdx != -9999 && iIdx != iTabLength - 1) {
				var td = getElementById(sId+"-itm-"+(iIdx+1)+"-a");
				if (td.className.indexOf("Term") == -1){
					td.className="urPcSeqAngOnOff";
				}
				else{
					td.className="urPcSeqAngOnTerm";
				}
			}
		}
		
		var oFirstImage  = getElementById(sId+"-p");
		var oLastImage   = getElementById(sId+"-n");
		
		if (iNewIdx != 0){
			
			if (iIdx!=iNewIdx){oFirstImage.className="urPcSeqFirstAngOffPrevon";}
			
			else{oFirstImage.className="urPcSeqFirstAngOnPrevon";}
		}
		else{
			
			if (iIdx!=iNewIdx){oFirstImage.className="urPcSeqFirstAngOffPrevoff";}
			
			else{oFirstImage.className="urPcSeqFirstAngOnPrevoff";}
		}
		
		
		var oLastItm=null;
		if (iTabLength-1<iNewIdx+iVisTabs-1) {
		 oLastItm=ur_get(sId+"-itm-"+(iTabLength-1));
		} else {
		  oLastItm=ur_get(sId+"-itm-"+(iNewIdx+iVisTabs-1));
		}
		if (oLastItm.getAttribute("design")=="TERM") oLastImage.style.display="none";
		else oLastImage.style.display="block";
		
		if (iNewIdx + iVisTabs >= iTabLength){
			
			if (iIdx != (iNewIdx + iVisTabs - 1) && iIdx != iTabLength - 1){
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOffBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
					
					oLastImage.className="urPcSeqAngOffTerm";
				} 
				else if ((iIdx + iVisTabs) < iOldIdx) {
					oLastImage.className="urPcSeqLastOffNextOff";
				} else {
					oLastImage.className="urPcSeqAngOffTerm";
				}
			}
			else{ 
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOnBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
					oLastImage.className="urPcSeqAngOnTerm";
					
				}
				else if (iIdx<iTabLength - 1){
					oLastImage.className="urPcSeqLastOffNextOn";
				}
			}
		}
		else{
			
			if (iIdx != (iNewIdx + iVisTabs - 1) && iIdx != iTabLength - 1){
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOffBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
					oLastImage.className="urPcSeqAngOnTerm";
				}
				else{
					oLastImage.className="urPcSeqLastOffNextOn";
				}
			}
			else{
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOnBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
					oLastImage.className="urPcSeqAngOnTerm";
				}
				else if (iIdx<iVisTabs - 1){
					oLastImage.className="urPcSeqLastOffNextOn";
				} else {
					oLastImage.className="urPcSeqLastOnNextOn";
				}
			}
		}
		
		oTbl.setAttribute("selectedtab",iIdx);
	
	ur_setSt(oCurTxt,ur_st.NOTSELECTED,true);
	ur_setSt(oCurTxt,ur_st.SELECTED,false);
	ur_setSt(oClkTxt,ur_st.NOTSELECTED,false);
	ur_setSt(oClkTxt,ur_st.SELECTED,true);
	if (ur_system.is508) {
		sapUrMapi_refocusElement(oClkTxt.id)
	}
		
		if (iIdx != -1){
			sapUrMapi_PcSeq_focusItem(sId,iIdx);
		}
		if (ur_system.is508) {
			oClkTxt.title = getLanguageText("SAPUR_PCSEQ_ITEM",new Array(oClkTxt.innerText,"SAPUR_PCSEQ_ITEM_SELECTED"));
			if (oClkStpTxt != null) {
				oClkStpTxt.title = getLanguageText("SAPUR_PCSEQ_ITEM_STEPNUMBER",new Array(oClkStpTxt.innerText,"SAPUR_PCSEQ_ITEM_STEPNR_SELECTED"));
			}
			if (oCurTxt != null) {
				oCurTxt.title = getLanguageText("SAPUR_PCSEQ_ITEM",new Array(oCurTxt.innerText,"SAPUR_PCSEQ_ITEM_ENABLED"));
				if (oCurStpTxt != null) {
					oCurStpTxt.title = getLanguageText("SAPUR_PCSEQ_ITEM_STEPNUMBER",new Array(oCurStpTxt.innerText,"SAPUR_PCSEQ_ITEM_STEPNR_ENABLED"));
				}
			}
		}
	}
}
function sapUrMapi_PcSeq_focusItem(sSeqId, iIdx, iTabCount, bNext, bPrev) {
	var oTabTable 	= ur_get(sSeqId+"-tbl");
	if (isNaN(iIdx)) {iIdx = parseInt(oTabTable.getAttribute("selectedtab"));}
	if (isNaN(iTabCount)) {iTabCount = parseInt(oTabTable.getAttribute("tabcount"));}
	var ico = ur_get(sSeqId + "-menu");
	
	if (iIdx == -9999) {return false;}
	var iNewIndex=iIdx;
	if (ico != null && ico.getAttribute("hasfocus") == "true") {
		if (bNext) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab"));
		}
		if (bPrev) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab")) - 1 + parseInt(oTabTable.getAttribute("vistabs"));
			if (ur_get(sSeqId+"-itm-"+iNewIndex+"-txt").getAttribute("design") == "term") {
				iNewIndex--;
			}
		}
	}
	else {
		if (bNext) {
			
			if (iIdx<iTabCount-1){ iNewIndex=iIdx+1;}
			else {iNewIndex=0;}
		}
		if (bPrev) {
			if (iIdx>0) {iNewIndex=iIdx-1;}
			else {iNewIndex=iTabCount-1;}
		}
	}
	oFocusedTab = ur_get(sSeqId+"-itm-"+iNewIndex);
	if (oFocusedTab.style.display != "none") {
		var iOldFoc = parseInt(oTabTable.getAttribute("focusedtab"));
		if (!isNaN(iOldFoc)) {
			if (iOldFoc == -9999) {
			  sapUrMapi_setTabIndex(ur_get(sSeqId+"-tit-txt"),-1);
			}
			else {
			  sapUrMapi_setTabIndex(ur_get(sSeqId+"-itm-"+iOldFoc+"-txt"),-1);
			}
		}
		var oFoc = ur_get(sSeqId+"-itm-"+iNewIndex+"-txt");
		if (oFoc.getAttribute("design") != "term") {
			sapUrMapi_setTabIndex(oFoc,0);
			oFoc.focus();
			oTabTable.setAttribute("focusedtab",iNewIndex);
			if (ico != null) {
				ico.setAttribute("hasfocus", "false");
			}
			if ((oFocusedTab.getAttribute("dsbl")=="true")&&(!ur_system.is508)) {
				sapUrMapi_PcSeq_focusItem(sSeqId,iNewIndex,iTabCount,bNext,bPrev);
				return;
			}
		}
		else {
			if (ico != null && ico.getAttribute("hasfocus") != "true") {
				sapUrMapi_setTabIndex(ico,0);
				ico.setAttribute("hasfocus", "true");
				ico.focus();
			}
			else {
				sapUrMapi_PcSeq_focusItem(sSeqId,iNewIndex,iTabCount,bNext,bPrev);
				return;
			}
		}
	}
	else {
	    if (ico != null) {
			sapUrMapi_setTabIndex(ico,0);
			ico.setAttribute("hasfocus", "true");
			ico.focus();
	    }
	}
}
function sapUrMapi_PcSeq_keySelect(sId, iSelectedIdx, iTabCount,e) {
	if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))){
	  if (ur_system.direction=="rtl") {
	    sapUrMapi_PcSeq_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==37,e.keyCode==39);
	  } else {
		sapUrMapi_PcSeq_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==39,e.keyCode==37);
	  }
		ur_EVT_cancel(e);
	  return;
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("32"))){
		sapUrMapi_PcSeq_setActiveItem(sId,iSelectedIdx,0,false);
		ur_EVT_cancel(e);
		return;
	}
}
function ur_PcSeq_toggle(sId, sCtlType, e) {
	if ((e.type!="click") && (!sapUrMapi_checkKey(e,"keydown",new Array("32","30")))) return false;
	ur_EVT_cancelBubble(e);
	var tbdy = ur_get(sId+"-tbd");
	var tbl = tbdy.parentElement;
	var tbar = ur_get(sId+"-tbar");
	var thead = ur_get(sId+"-hd");
	var ico = ur_get(sId+"-exp");
	if ( tbdy != null && ico != null ) {
		if ( tbdy.style.display == "none" ) {
			if (tbar) tbar.style.setAttribute("display", "block");
			tbdy.style.setAttribute("display", "block");
			
			if (tbl.getAttribute("sized") != "true"){
				sapUrMapi_Pc_Create(sId, tbl.getAttribute("scrolltype"), false );
			}
			if (ico.className.indexOf("urPcExpClosedIco") != -1){ ico.className = ico.className.replace("urPcExpClosedIco", "urPcExpOpenIco");}
			if (thead != null && thead.className == "urPcHdBgClosedIco" ){ thead.className = "urPcHdBgOpenIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_COLLAPSE",new Array(thead.innerText,sCtlType + "_COLLAPSE_KEY"));
			}
		} else {
			if (tbar){ tbar.style.setAttribute("display", "none");}
			var helper = tbdy.parentNode.offsetWidth;
			tbdy.style.setAttribute("display", "none");
			tbdy.parentNode.style.width=helper+"px";
			if (ico.className.indexOf("urPcExpOpenIco") != -1 ){ ico.className = ico.className.replace("urPcExpOpenIco", "urPcExpClosedIco");}
			if (thead != null && thead.className == "urPcHdBgOpenIco" ){ thead.className = "urPcHdBgClosedIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_EXPAND",new Array(thead.innerText, sCtlType + "_EXPAND_KEY"));
			}
	}
		ur_focus(ico);
}
  sapUrMapi_Focus_showFocusRect();
	return true;
}
function ur_PcSeq_showOptionMenu(sId,e) {
  var sTrayId=sId;
  var sTriggerId=sId+"-menu";
  var sMenuContentId=ur_get(sTriggerId).getAttribute("mid");
 	if (ur_system.direction=="rtl")
	  var enumPositionBehavior=sapPopupPositionBehavior.MENULEFT;
	else
	  var enumPositionBehavior=sapPopupPositionBehavior.MENURIGHT;
  var sControlType=sapUrMapi_getControlTypeFromObject(ur_get(sId));
	if(sControlType == "PCSEQ") 
	{
		if (e.type!="click") {
			if (sapUrMapi_checkKey(e,"keydown",new Array("32","40","13"))){
				sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
			}
			else if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))) {
				var intTabCount = parseInt(ur_get(sTrayId + "-tbl").getAttribute("tabcount"));
				if (ur_system.direction=="rtl") {
					sapUrMapi_PcSeq_focusItem(sTrayId,null,null,e.keyCode==37,e.keyCode==39);
				} else {
					sapUrMapi_PcSeq_focusItem(sTrayId,null,null,e.keyCode==39,e.keyCode==37);
				}
				return;
			}
			else {
				return false;
			}
		}
		else {
			sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
		}
	}
}
function ur_PcSeq_scrollItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != -1 && iDir != 1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var diff = vistabs;
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs - 1;}
	}
	if (lasttab != firsttab + vistabs - 1){
		diff = lasttab - firsttab;
	}
	if (iDir == 1){
		
		if (lasttab == tabcount - 1){return false;}
		
		showItem(sId, firsttab, false, true, false);
		
		firsttab += 1;
		showItem(sId, firsttab, true, true, false);
		if (diff > 2) {
			
			showItem(sId, lasttab, true, false, false);
		}
		if (diff != 1) {
		
		lasttab += 1;
		showItem(sId, lasttab, true, false, true);
	}
	else{
		
		lasttab = firsttab;
		showItem(sId, lasttab, true, true, true);
		}
	}
	else{
		
		if (firsttab == 0){return false;}
		
		
		if (diff >= vistabs - 1){
			
			showItem(sId, lasttab, false, false, true);
			
			lasttab -= 1;
			showItem(sId, lasttab, true, false, true);
		}
		if (diff >= 1) {
			if (vistabs > 1) {
				
		showItem(sId, firsttab, true, false, false);
		
		firsttab -= 1;
		showItem(sId, firsttab, true, true, false);
	}
		else {
			  
				showItem(sId, firsttab, false, false, false);
		
		firsttab -= 1;
				showItem(sId, firsttab, true, true, false);
			}
		}
		else {
		
    showItem(sId, firsttab, true, false, true);
		firsttab -= 1;
		showItem(sId, firsttab, true, true, true);
		}
	}
	
	setSeqIcons( sId, firsttab, lasttab, tabcount );
	
	var newtabpage = Math.floor(firsttab / vistabs);
	oTabs.setAttribute("starttab", firsttab);
	oTabs.setAttribute("lasttab", lasttab);
	oTabs.setAttribute("tabpage", newtabpage);
	ur_PcSeq_togglePager(sId,e)
}
function ur_PcSeq_pageItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != 1 && iDir != -1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if ((iDir == -1 && firsttab == 0) || ( iDir == 1 && lasttab == tabcount -1)){
		return false;
	}
	
	if (((iDir == 1) && ((tabpage + iDir) * vistabs) < (tabcount)) ||
		((iDir == -1) && (tabpage + iDir >= 0) )){
		tabpage = tabpage + iDir;
	}
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				showItem(sId, i, false, true, false);
			}
			else if (i == lasttab){
				showItem(sId, i, false, false, true);
			}
			else{
			   showItem(sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				showItem(sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				showItem(sId, i, true, false, true);
		   }
		   else{
				showItem(sId, i, true, false, false);
		   }
		}
	}
	
	setSeqIcons( sId, lbound, ubound, tabcount );
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	ur_PcSeq_togglePager(sId,e)
}
function showItem( sId, iIdx, bShow, bIsFirst, bIsLast ){
	
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var seltab = parseInt(oTabs.getAttribute("selectedtab"));
	var tabimg = ur_get(sId + "-itm-" + iIdx + "-a");
	var tabstat = ur_get(sId + "-itm-" + iIdx + "-n");
	var tabcell = ur_get(sId + "-itm-" + iIdx);
	
	var conimg = ur_get(sId + "-itm-" + iIdx + "-ca");
	var constat = ur_get(sId + "-itm-" + iIdx + "-cn");
	var concell = ur_get(sId + "-itm-" + iIdx + "-c");
	if (bShow){
		
		var statdisp = "";
		if (tabcell.getAttribute("design") == "INT" || tabcell.getAttribute("design") == "TERM"){
			statdisp = "none";
		}
		if (!bIsFirst && !bIsLast){
			tabimg.style.display = "";
			tabcell.style.display = "";
			tabstat.style.display = statdisp;
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
				constat.style.display = statdisp;
			}
		}
		else if (bIsFirst){
			tabimg.style.display = "none";
			tabcell.style.display = "";
			tabstat.style.display = statdisp;
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "none";
				constat.style.display = statdisp;
			}
		}
		else if (bIsLast){
			tabimg.style.display = "";
			tabcell.style.display = "";
			tabstat.style.display = statdisp;
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
				constat.style.display = statdisp;
			}
		}
	}
	else{
		
		tabimg.style.display = "none";
		tabcell.style.display = "none";
		tabstat.style.display = "none";
		if (concell != null){
			concell.style.display = "none";
			conimg.style.display = "none";
			constat.style.display = "none";
		}
	}
}
function setSeqIcons( sId, firsttab, lasttab, tabcount ){
	var prev = ur_get(sId + "-p");
	var next = ur_get(sId + "-n");
	var c_prev = ur_get(sId + "-p-c");
	var c_next = ur_get(sId + "-n-c");
	var first = ur_get(sId + "-itm-" + firsttab);
	var last = ur_get(sId + "-itm-" + lasttab);
	var prevtmp = prev.className;
	var nexttmp = next.className
	
	if (firsttab == 0){
		if (first.className == "urPcSeqLabelOn"){
			prev.className = "urPcSeqFirstAngOnPrevOff";
		}
		else{
			prev.className = "urPcSeqFirstAngOffPrevOff";
		}
		if (c_prev != null) {
		  c_prev.style.display = "none";
		}
	}
	else{
		if (first.className == "urPcSeqLabelOn"){
			prev.className = "urPcSeqFirstAngOnPrevOn";
		}
		else{
			prev.className = "urPcSeqFirstAngOffPrevOn";
		}
		if (c_prev != null) {
		  c_prev.style.display = "";
		}
	}
	
	if (lasttab == tabcount - 1){
		var lastdesign = last.getAttribute("design").toUpperCase();
		
		
		if (lastdesign == "TERM") {
			next.className = "urPcSeqLastTerm";
			if (c_next != null) {
			  c_next.style.display = "none";
			}
		}
		
		else if (lastdesign == "BRANCH") {
			if (last.className == "urPcSeqLabelOn"){
				next.className = "urPcSeqLastOnBranchOn";
			}
			else{
				next.className = "urPcSeqLastOffBranchOn";
			}
			if (c_next != null) {
			  c_next.style.display = "none";
			}
		}
		else {
		    if (last.className == "urPcSeqLabelOn") {
				next.className = "urPcSeqLastOnNextOff";
			}
			else {
			    next.className = "urPcSeqLastOffNextOff";
			}
			if (c_next != null) {
			  c_next.style.display = "none";
			}
		}
	}
	else{
		next.style.display="block";
		if (last.className == "urPcSeqLabelOn"){
			next.className = "urPcSeqLastOnNextOn";
		}
		else{
			next.className = "urPcSeqLastOffNextOn";
		}
		if (c_next != null) {
		  c_next.style.display = "";
		}
	}
	
	prev.childNodes(0).className = "urPcSeqPreFirstAng";
	
	if (next.className.indexOf("Term") != -1){
		next.childNodes(0).className = "urPcSeqAfterLastAng";
	}
	else if (next.className.indexOf("Branch") != -1){
		next.childNodes(0).className = "urPcSeqBranchAng";
	}
	else{
		next.childNodes(0).className = "urPcSeqAfterLastAng";
	}
}
function ur_PcSeq_jumpItem( sId, iTab, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
  sapUrMapi_PopupMenu_hideAll();
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var seltab = parseInt(oTabs.getAttribute("selectedtab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if (iTab >= tabcount || iTab < 0){
		return false;
	}
	
	var tabpage = Math.floor(iTab / vistabs);
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				showItem(sId, i, false, true, false);
			}
			else if (i == lasttab){
				showItem(sId, i, false, false, true);
			}
			else{
			   showItem(sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				showItem(sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				showItem(sId, i, true, false, true);
		   }
		   else{
				showItem(sId, i, true, false, false);
		   }
		}
	}
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	ur_PcSeq_togglePager(sId,e)
	
	
	sapUrMapi_PcSeq_setActiveItem(sId, iTab, seltab, false);
	
	setSeqIcons( sId, lbound, ubound, tabcount );
}
function ur_PcSeq_togglePager(sId,e) {
  if (ur_get(sId+"-pag")!=null) {
    var sPagerId=ur_get(sId+"-pag").firstChild.id;
  } else {
    return;
  }
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
  var arrButtonArray = new Array();
	var arrStateArray = new Array();
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.BEGIN;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
	if (firsttab!=0) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.END;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
	if (lasttab!=tabcount-1) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  sapUrMapi_Paginator_setStates(sPagerId,arrButtonArray,arrStateArray);
}
//** PhaseIndicator.ie5 **
function sapUrMapi_PhInPhaseSelect(sId,iIdx,bSelected,e){
	var oPhIn=ur_get(sId);
	var iFcIdx=oPhIn.getAttribute("fi");
	if(iFcIdx==" ")iFcIdx=ur_get(sId).getAttribute("sel");
	if(iFcIdx==null)iFcIdx=0;
	var oNew=ur_get(sId+"-itm-"+iIdx);
	var oOld=ur_get(sId+"-itm-"+iFcIdx);
	
	oPhIn.setAttribute("fi",iIdx);
}
var arrValuesOfPhases = new Array();
function sapUrMapi_PhaseIndicator_create(sId){
	var o = ur_get(sId);
	var iItemSel = parseInt(o.getAttribute('sel'));
	if(document.getElementById(sId+"-itm-0")==null)return;
	if(isNaN(iItemSel))document.getElementById(sId+"-itm-0").tabIndex=0;
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PhaseIndicator_init('"+sId+"')");
}
function sapUrMapi_PhaseIndicator_init(sId){
	var oVisblPhases = ur_get(sId);
	var iWidth = oVisblPhases.offsetWidth;
	if (iWidth>0) {
	  sapUrMapi_PhaseIndicator_setAllValues(sId);
	} else {
	 	return;
  }
  sapUrMapi_PhaseIndicator_draw(sId);
	
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PhaseIndicator_draw('" + sId + "')");
}
function sapUrMapi_PhaseIndicator_setAllValues(sId){
		arrValuesOfPhases[sId] = new Array();
        var iItemCount = parseInt(ur_get(sId).getAttribute('ai'));
		for(var i = 0; i <= iItemCount; i++){
			arrValuesOfPhases[sId][i] = new Array();
			arrValuesOfPhases[sId][i][0] = sId + '-itm-' + i;
			arrValuesOfPhases[sId][i][1] = ur_get(sId + '-itm-' + i).offsetWidth;
		}
		arrValuesOfPhases[sId][iItemCount + 1] = new Array();
		done = true;
}
function sapUrMapi_PhaseIndicator_draw(sId) {
  var o=ur_get(sId);
  	if (o == null) return;
	var iItemCount = parseInt(o.getAttribute('ai'));
	var iFirstIdxOld = parseInt(o.getAttribute('fv'));
	ur_get(sId + '-cnt-scrl').style.width = '1px';
	sapUrMapi_PhaseIndicator_make(sId,iFirstIdxOld,iItemCount);
}
function sapUrMapi_PhaseIndicator_make(sId,iStart,iEnd,sDir){
  var o=ur_get(sId);
	var iLastIdxOld = parseInt(o.getAttribute('lv'));
	var iFirstIdxOld = parseInt(o.getAttribute('fv'));
	var iAvailWdth = ur_get(sId + '-cnt').offsetWidth;
	var iItemCount = parseInt(o.getAttribute('ai'));
	var iVisblWdth = 0;
	var iFirstIdx = 0;
	var iLastIdx = 0;
	var ii=0;
	for(var i=0;i<=iItemCount;i++) {
	  arrValuesOfPhases[sId][i][2]=false;
	}
  
  
	if(sDir == 'FURTHER' || typeof(sDir)=="undefined"){
    for (i=iStart;i<=iEnd;i++) {
			if(iAvailWdth > 0 && iAvailWdth >= arrValuesOfPhases[sId][i][1]){
				arrValuesOfPhases[sId][i][2]=true;
				iAvailWdth = iAvailWdth - arrValuesOfPhases[sId][i][1];
				iVisblWdth = iVisblWdth + arrValuesOfPhases[sId][i][1];
			}else{
				break;
			}
		ii=i;
    }
	}
	if(sDir == 'BACK'){
    for (i=iStart;i>=iEnd;i--) {
			if(iAvailWdth > 0 && iAvailWdth >= arrValuesOfPhases[sId][i][1]){
				arrValuesOfPhases[sId][i][2]=true;
				iAvailWdth = iAvailWdth - arrValuesOfPhases[sId][i][1];
				iVisblWdth = iVisblWdth + arrValuesOfPhases[sId][i][1];
			}else{
				break;
			}
		  ii=i;
    }
  }
	if(ii == 0 && iAvailWdth > iVisblWdth && iAvailWdth >= arrValuesOfPhases[sId][iStart + 1][1]){
		iAvailWdth = ur_get(sId + '-cnt').offsetWidth;
		for(i = (iStart + 1); i<= iItemCount; i++){
				iVisblWdth = iVisblWdth + arrValuesOfPhases[sId][i][1];
			if(iAvailWdth >= iVisblWdth && iAvailWdth >= arrValuesOfPhases[sId][i][1]){
				arrValuesOfPhases[sId][i][2]=true;
				iStart = i;
			}else{
				break;
			}
		}
	}
	for(var i=0;i<=iItemCount;i++) {
	  if (arrValuesOfPhases[sId][i][2]==false) {
		  ur_get(arrValuesOfPhases[sId][i][0]).childNodes[0].style.display = "none";
	  } else {
		  ur_get(arrValuesOfPhases[sId][i][0]).childNodes[0].style.display = "block";
	  }
	}
	if(sDir == 'BACK'){
		ur_get(sId).setAttribute('fv',ii);
		ur_get(sId).setAttribute('lv',iStart);
		iFirstIdx = ii;
		iLastIdx = iStart;
	} else {
		ur_get(sId).setAttribute('fv',iStart);
		ur_get(sId).setAttribute('lv',ii);
		iFirstIdx = iStart;
		iLastIdx = ii;
	}
	var oLastIdx = ur_get(sId + '-itm-img-' + iLastIdx);
	if(iFirstIdx == 0 && iLastIdx != iItemCount && oLastIdx != null){
		ur_get(sId + '-cnt-scrl').style.width = iVisblWdth;
		if(!isNaN(iLastIdxOld) && iLastIdxOld != iItemCount){
			ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
			}
		ur_get(sId + '-p').style.display = 'none';
		ur_get(sId + '-itm-img-' + iLastIdx).className = 'urPhInMoreAfter';
	}
	if(iFirstIdx != 0 && iLastIdx != iItemCount){
		ur_get(sId + '-p').style.display = 'block';
		ur_get(sId + '-cnt-scrl').style.width = iVisblWdth;
		if(iLastIdxOld != iItemCount){
			if(!isNaN(iLastIdxOld)){
				ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
			}
		}
		if(iLastIdx!=null){
			ur_get(sId + '-itm-img-' + iLastIdx).className = 'urPhInMoreAfter';
		}
	}
	if(iFirstIdx != 0 && iLastIdx == iItemCount){
		ur_get(sId + '-p').style.display = 'block';
		ur_get(sId + '-cnt-scrl').style.width = iVisblWdth;
		if(!isNaN(iLastIdxOld) && iLastIdxOld != iItemCount){
			ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
		}
	}
	if(iFirstIdx == 0 && iLastIdx == iItemCount){
		ur_get(sId + '-cnt-scrl').style.width = iVisblWdth;
		ur_get(sId + '-p').style.display = 'none';
		if(!isNaN(iLastIdxOld) && iLastIdxOld != iItemCount){
			ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
		}
	}
	ur_get(sId + '-cnt-scrl').scrollLeft = 0;
	sapUrMapi_PhaseIndicator_setPagingButtons(sId);
}
function sapUrMapi_PhaseIndicator_paging(sId,sDir){
	var iItemCount = parseInt(ur_get(sId).getAttribute('ai'));
	var iFirstIdxOld = parseInt(ur_get(sId).getAttribute('fv'));
	var iLastIdxOld = parseInt(ur_get(sId).getAttribute('lv'));
		if(sDir == 'FURTHER'){
				iFirstIdxOld = iLastIdxOld + 1;
				sapUrMapi_PhaseIndicator_make(sId,iFirstIdxOld,iItemCount,sDir);
		} else if(sDir== 'BACK'){
			iLastIdxOld = iFirstIdxOld - 1;
			if(iLastIdxOld != 0){
				sapUrMapi_PhaseIndicator_make(sId,iLastIdxOld,0,sDir);
				}else{
					ur_get(sId).setAttribute('fv',0);
					sapUrMapi_PhaseIndicator_draw(sId);
				}
		} else {
		  	iLastIdxOld = parseInt(sDir.substring(sDir.lastIndexOf("-")+1));
				ur_get(sId).setAttribute('fv',iLastIdxOld);
				sapUrMapi_PhaseIndicator_draw(sId);
			}
	}
function sapUrMapi_PhaseIndicator_setPagingButtons(sId){
	var iItemCount = parseInt(ur_get(sId).getAttribute('ai'));
	if(ur_get(sId+"-pag").hasChildNodes()){
		sPagerId = ur_get(sId+"-pag").childNodes.item(0).id;
		var arrButtonArray = new Array();
		arrButtonArray[0]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
		arrButtonArray[1]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
		var arrStateArray = new Array();
		arrStateArray[0]=true; 
		arrStateArray[1]=true; 
		var iFirstIdxOld = parseInt(ur_get(sId).getAttribute('fv'));
		var iLastIdxOld = parseInt(ur_get(sId).getAttribute('lv'));
		if(iFirstIdxOld == 0){
				arrStateArray[0]=false; 
		}
		if(iLastIdxOld == iItemCount || isNaN(iLastIdxOld)){
				arrStateArray[1]=false; 
		}
		sapUrMapi_Paginator_setStates(sPagerId,arrButtonArray,arrStateArray);
	} else {
	  return;
	}
}
function sapUrMapi_PhaseIndicator_keydownStep(sId,sItemIdx,bSel,e){
	var oItm=ur_get(sId+"-itm-"+sItemIdx);
	var oPrev=null;
	var oNext=null;
	
	if(ur_system.direction!="rtl"){
		oPrev=oItm.previousSibling;
		oNext = oItm.nextSibling;
	}else{
		oNext=oItm.previousSibling;
		oPrev = oItm.nextSibling;
	}
	
	if(e.keyCode == 39 && oNext!=null) {
		if (!ur_system.is508)
			oNext=ur_PhIn_checkDsbl(oNext,sItemIdx,e.keyCode);
		if(oNext.idx>ur_get(sId).getAttribute('lv'))
			sapUrMapi_PhaseIndicator_paging(sId,"FURTHER");
		 ur_focus_Itm(oNext,oItm);
	}
	else if(e.keyCode == 37 && oPrev!=null){
		if (!ur_system.is508)
			oPrev=ur_PhIn_checkDsbl(oPrev,sItemIdx,e.keyCode);
		if(oPrev.idx<ur_get(sId).getAttribute('fv'))
			sapUrMapi_PhaseIndicator_paging(sId,"BACK");
		ur_focus_Itm(oPrev,oItm);
	}
	else if(e.keyCode==9){
		var oPhIn = ur_get(sId);
		var iSel = oPhIn.getAttribute("sel");
		if(iSel==null)iSel=0;
		var oSel = ur_get(sId+"-itm-"+iSel);
		ur_focus_Itm(oSel,oItm);
	}
	else if(e.keyCode==32){
		oItm = oItm.getElementsByTagName("TD")[0];
		if (oItm.id.indexOf("start")>-1) oItm = oItm.nextSibling;
		oItm.click();
	}
		ur_EVT_cancelBubble(e);
}
function ur_PhIn_checkDsbl(oItem,iIdx,iKey){
	if(oItem==null)return;
 		while(ur_isSt(oItem,ur_st.DISABLED) && oItem!=null){
 			if(iKey==39)oItem=oItem.nextSibling;		
 			else oItem=oItem.previousSibling;
 			
 			if(oItem==null || !ur_isSt(oItem,ur_st.DISABLED))
 				break;
		} 
	return oItem;
}
function sapUrMapi_PhaseIndicator_getFirstVisible(o){
	return o.getAttribute("fv");
}

//** PopIn.ie5 **

function sapUrPopIn_close(sId, oEvt){
	if ( oEvt.keyCode == 32 || oEvt.type == "click" ) {
		ur_EVT_fire(ur_get(sId + "-cl"),"ocl");
	}
}
//** PopupMenu.ie5 **
var oPopup;
var _ur_POMN = {all:new Array(),menus:new Array(),level:0};
var _ur_POMN_triggerId="";
var mnu = new Object();
mnu.intv = null;
mnu.active = false;
mnu.delay = 250;
mnu.cancel = false;
mnu.mnuWin = null;
mnu.mnuE = null;
var sapPopupMenuLevel = 0;
var menuFontSize;
var subMenus = new Array(null,null,null,null,null,null);
var subMenuItems = new Array(null,null,null,null,null,null);
var initMenus = new Array();
var me = window;
function sapUrMapi_PopupMenu_init(id,e) {
	if (me.menuObject) {
	  sapUrMapi_PopupMenu_exit(id,e);
	}
	if (!me.menuObject) {
	  var items =window.document.getElementById(id).childNodes.item(0).childNodes.item(0).childNodes.item(1).childNodes;
	  var menu = new sapUrMapi_PopupMenu(items);
	  me.menuObject = menu;
    me.menuObject.standalone=true;
  }
}
function sapUrMapi_PopupMenu_exit(id,e) {
	if (e.srcElement.id==id) {
		if (me.menuObject) {
			if (!me.menuObject.standalone) {
			  sapUrMapi_PopupMenu_hideAll();
			  sapUrMapi_PopupMenu_setItemActive(me,-1, id);
		    me.menuObject = null;
		  }
		}
	} else {
		if (me.menuObject) {
			if (me.menuObject.out) {
		    sapUrMapi_PopupMenu_setItemActive(me,-1, id);
		  }
		}
	}
}
function sapUrMapi_PopupMenu_hoverItem(mywindow,id,e) {
	
	var o=mywindow.event.srcElement;
  if(o.parentNode.className=="urMnuDvdr"){
      iIdx = "dvdr"
      sapUrMapi_PopupMenu_setItemActive(mywindow,iIdx, id);
      if (mywindow.mylevel<=sapPopupMenuLevel) {
                  for (var n=mywindow.mylevel+1;n<=sapPopupMenuLevel;n++) {
                       subMenus[n].hide();
                  }
      }
      return;
  }
  if (o.tagName=="IMG" || o.tagName=="NOBR" || o.tagName=="SPAN")o=o.parentNode;
	if (o.tagName=="TD") {
	  iIdx = parseInt(o.parentNode.getAttribute("Idx"));
	  if (mywindow.menuObject==null) {
	    sapUrMapi_PopupMenu_init(id,e);
	  }
	  if (mywindow.menuObject.activeItem==iIdx) return;
if(o.getAttribute("isscroll")=="true") {
    mywindow.event.cancelBubble=true;
				iIdx=-1;
    return false;
}
	  sapUrMapi_PopupMenu_setItemActive(mywindow,iIdx, id);
	  if (mywindow.mylevel<=sapPopupMenuLevel) {
	  	for (var n=mywindow.mylevel+1;n<=sapPopupMenuLevel;n++) {
	      subMenus[n].hide();
      }
	  }
	  try {
	  if (ur_getAttD(mywindow.menuObject.items[mywindow.menuObject.activeItem],"st","").indexOf("d")==-1) {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"opensub", id);
	  }
		} catch (e) {
		}
	}
	mywindow.event.cancelBubble=true;
}
var oPopup;
function sapUrMapi_PopupMenu_hideAll() {
  window.document.detachEvent("ondeactivate",closeIfDeactivated);
  for (var n=0;n<sapPopupMenuLevel+1;n++) {
		if (subMenus[n]!=null) {
			subMenus[n].hide();	
		}
  }
  if (oPopup) {
    oPopup.hide();
    try {
	  
	  
	  var oSrc = oPopup.source.object;
	  if (oSrc && oSrc.tagName=="TD") {
	    if (oSrc.firstChild && oSrc.firstChild.nodeType == 1) 
	        ur_focus(oSrc.firstChild);
	  } else {
	    ur_focus(oSrc);
	  }
	} catch(e) 
	{}	
  }
  oPopup=null;
  ur_pullDownMenu = false;
  try {
		if (window.event && window.event.srcElement) {
			try {
				if (document.activeElement.tagName == "IFRAME") {
					ur_focus(window.event.srcElement);
				}			
			} catch (ex) {
				if (document.activeElement.tagName == "IFRAME") {
					ur_focus(document.getElementsByTagName("BODY")[0]);
				}
			}
		}
  } catch (ex) {}
  window.document.onmousedown=null;
  document.detachEvent("onmousedown",sapUrMapi_PopupMenu_hideAll);
  sapPopupMenuLevel=0;
}
function sapUrMapi_PopupMenu_showMenu(idTrigger,idContent,enumAlignment,e,bRemoveOnClose) {
	var styles = document.getElementsByTagName("LINK");
	var arrUrls;
	_ur_POMN_triggerId=idTrigger;
	arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
  
  for (var i=0;i<subMenus.length;i++) {
  	if (subMenus[i]!=null) {
  		subMenus[i].hide();
  	}
  }
	var menuDiv = ur_get(idContent);
	if (!menuDiv) return;
	if (menuDiv.hasChildNodes() && menuDiv.childNodes[0].tagName=="XMP") {
	  menuDiv.innerHTML=menuDiv.firstChild.innerHTML; 
	}
	sapUrMapi_PopupMenu_drawInit(idContent); 
	oPopup = new sapPopup(window,arrUrls,ur_get(idContent),ur_get(idTrigger),e,0);
  oPopup.onblur=oPopup.hide;
  oPopup.idTrigger = idTrigger;
  
  if (ur_system.direction=="rtl") {
    if (!enumAlignment) enumAlignment= sapPopupPositionBehavior.MENURIGHT
  } else {
    if (!enumAlignment) enumAlignment= sapPopupPositionBehavior.MENULEFT
  }
  oPopup.positionbehavior = enumAlignment;
  if (bRemoveOnClose) {
		oPopup.remove = sapUrMapi_PopupMenu_removeAll;
	}
  oPopup.show();
  document.attachEvent("onmousedown",sapUrMapi_PopupMenu_hideAll);
  window.document.attachEvent("ondeactivate",closeIfDeactivated);
  
	var items = oPopup.frame.window.document.body.childNodes.item(0).childNodes.item(0).childNodes.item(0).childNodes.item(1).childNodes;
  var menu = new sapUrMapi_PopupMenu(items);
  oPopup.frame.window.menuObject = menu;
  oPopup.frame.window.document.body.onkeydown = menuDiv.childNodes.item(0).onkeydown;
  try {
  if (e.type=="keydown") {
  	sapUrMapi_PopupMenu_setItemActive(oPopup.frame.window,"first", idContent);
  }
  } catch (exc) {}
  sapUrMapi_setTabIndex(oPopup.frame.window.document.body.childNodes.item(0).childNodes.item(0),0);
  oPopup.frame.window.document.body.childNodes.item(0).focus();
try {
  oPopup.frame.window.document.body.childNodes.item(0).childNodes.item(0).fireEvent("onkeypress");
} catch(e) {
}
}
function sapUrMapi_PopupMenu_setItemActive(win,newActive, sId) {
	var remActive = newActive;
	var menuObj=win.menuObject;
	menuObj.out=false;
	if ((newActive=="opensubkey")||(newActive=="opensub")) {
		if (!menuObj.items[menuObj.activeItem]) return;
		if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) return;
		var sSubMenuId = ur_getAttD(menuObj.items[menuObj.activeItem],"smnu","");
		if (sSubMenuId!="") {
		  if (!oPopup) {
		  	var iStartLevel=-1;
		  } else {
		  	var iStartLevel=win.mylevel;
		  }
		  if (iStartLevel<sapPopupMenuLevel) {
				for (var n=iStartLevel+1;n<sapPopupMenuLevel+1;n++) {
				  if (subMenus[n]!=null) {
  				  subMenus[n].hide();
  		      
  				}
				}
			  sapPopupMenuLevel=iStartLevel;
			}
			var arrUrls;
			arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
			if (!oPopup) {
			   subwindow = window;
  			 sapPopupMenuLevel = 0;
			} else {
			  subwindow = win;
			  sapPopupMenuLevel = win.mylevel+1;
			}
			var src = menuObj.items[menuObj.activeItem];
			var o = ur_get(sSubMenuId);
			if (o.hasChildNodes() && o.firstChild.tagName=="XMP") {
				o.innerHTML=o.firstChild.innerHTML; 
			}
			sapUrMapi_PopupMenu_drawInit(sSubMenuId, window); 
		  sapUrMapi_PopupMenu_drawInit(sSubMenuId);
			subMenu = new sapPopup(window,arrUrls,o,src,subwindow.event,sapPopupMenuLevel);
		  subMenu.onblur=subMenu.hide;
		  subMenu.positionbehavior = sapPopupPositionBehavior.SUBMENU;
		  subMenu.show();
		  subMenu.bRemoveOnClose = oPopup.bRemoveOnClose;
		  subMenus[sapPopupMenuLevel] = subMenu;
			subMenuItems[sapPopupMenuLevel] = menuObj.items[menuObj.activeItem];
			var items = subMenus[sapPopupMenuLevel].frame.window.document.body.childNodes.item(0).childNodes.item(0).childNodes.item(0).childNodes.item(1).childNodes;
			var menu = new sapUrMapi_PopupMenu(items);
		  subMenus[sapPopupMenuLevel].frame.window.menuObject = menu;
		  subMenus[sapPopupMenuLevel].frame.window.document.body.onkeydown = o.childNodes.item(0).onkeydown;
			
			if (!oPopup) {
				oPopup= subMenus[sapPopupMenuLevel];
			}
			if (win.mylevel>1) {
				sapUrMapi_PopupMenu_setItemActive(subMenus[win.mylevel-1].frame.window,subMenus[win.mylevel-1].frame.window.menuObject.activeItem, sId)
			} else {
				if (!oPopup) {
					sapUrMapi_PopupMenu_setItemActive(subMenus[sapPopupMenuLevel].frame.window,subMenus[sapPopupMenuLevel].frame.window.menuObject.activeItem, sId)
				} else {
					sapUrMapi_PopupMenu_setItemActive(oPopup.frame.window,oPopup.frame.window.menuObject.activeItem, sId)
				}
			}
			if (newActive=="opensubkey") {
				sapUrMapi_PopupMenu_setItemActive(subMenus[sapPopupMenuLevel].frame.window,"first", sId);
		  }
		  sapUrMapi_setTabIndex(subMenus[sapPopupMenuLevel].frame.window.document.body.childNodes.item(0),0);
		  subMenus[sapPopupMenuLevel].frame.window.document.body.childNodes.item(0).focus();
try {
		  subMenus[sapPopupMenuLevel].frame.window.document.body.childNodes.item(0).fireEvent("onkeypress");
} catch(e) {
}
		}
	  return;
	}
	if (newActive=="closesub") {
		if (win.mylevel) {
			subMenus[win.mylevel].hide();
			if (win.mylevel>1) {
				subMenus[win.mylevel-1].frame.window.document.body.focus();
				sapUrMapi_PopupMenu_setItemActive(subMenus[win.mylevel-1].frame.window,subMenus[win.mylevel-1].frame.window.menuObject.activeItem, sId)
			} else {
				oPopup.frame.window.document.body.focus();
				sapUrMapi_PopupMenu_setItemActive(oPopup.frame.window,oPopup.frame.window.menuObject.activeItem, sId)
			}
		}
	  return;
	}
	if (newActive=="first") {
	  newActive=menuObj.activeItem+1;
	  if (newActive>menuObj.items.length-1) newActive=0;
	}
	var bDown = "true";
	if (newActive=="next") {
	  newActive=menuObj.activeItem+1;
		if (newActive>menuObj.items.length-1){
			if (menuObj.items[0].style.display != "none"){
				newActive=0;
			}
			else{
			   newActive = menuObj.items.length-1;
			   return;
			}
		}
	}
	if (newActive=="prev") {
		newActive=menuObj.activeItem-1;
		if (newActive<0){
			if (menuObj.items[menuObj.items.length-1].style.display != "none"){
				newActive=menuObj.items.length-1;
			}
			else{
			   newActive = 0;
			   return;
			}
		}
		bDown = "false";
	}
  if (newActive=="dvdr") {
             if (menuObj.activeItem>-1) {
                  if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
                    menuObj.items[menuObj.activeItem].className="urMnuRowDsbl";
                  } else {
                    menuObj.items[menuObj.activeItem].className="urMnuRowOff";
                  }
             }
             menuObj.activeItem=newActive;
  }
	if ((newActive>-1) || isNaN(newActive)) {
		if (menuObj.activeItem>-1) {
			if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
			  menuObj.items[menuObj.activeItem].className="urMnuRowDsbl";
		  } else {
			  menuObj.items[menuObj.activeItem].className="urMnuRowOff";
		  }
		  if (ur_system.is508) {
		  	with(menuObj.items[menuObj.activeItem]) {
		  	  for (var i=0;i<childNodes.length;i++) {
		  	    if (childNodes.item(i).className=="urMnuTxt") {
		  	    	sapUrMapi_setTabIndex(childNodes.item(i),-1);
		  	    	break;
		  	    }
		  	  }
		  	}
		  }
		}
		menuObj.activeItem =  newActive;
		if (menuObj.activeItem>-1) {
		  while (menuObj.items[menuObj.activeItem].style.display == "none"){
			sapUrMapi_PopupMenu_manualScroll(win, sId, bDown, true);
		  }
		  
		  	with(menuObj.items[menuObj.activeItem]) {
		  	  for (var i=0;i<childNodes.length;i++) {
		  	    if (childNodes.item(i).className=="urMnuTxt") {
		  	    	sapUrMapi_setTabIndex(childNodes.item(i),0);
					childNodes.item(i).hideFocus=true;
		  	    	if (sapPopupStore && sapPopupStore[0]) sapPopupStore[0].mouseover=true; 
				childNodes.item(i).focus();
		  	    	break;
		  	    }
		  	  }
		  	}
		  
			if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
			  menuObj.items[menuObj.activeItem].className="urMnuRowDsblOn";
		  } else {
			  menuObj.items[menuObj.activeItem].className="urMnuRowOn";
		  }
		}
	} else {
		if (newActive==-1) {
			if (ur_system.is508) {
				if (menuObj) {
					if (menuObj.items) {
				  	for (var j=0;j<menuObj.items.length;j++) {
				 			if (menuObj.items[j]) {
					  		with(menuObj.items[j]) {
						  	  for (var i=0;i<childNodes.length;i++) {
						  	    if (childNodes.item(i).className=="urMnuTxt") {
						  	    	sapUrMapi_setTabIndex(childNodes.item(i),-1);
						  	    	break;
						  	    }
						  	  }
						  	}
					  	}
					  }
					}
				}
		  }
		  if (menuObj) {
			  if (menuObj.items.length>0) {
			  	if (menuObj.items[menuObj.activeItem]) {
						if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
						  menuObj.items[menuObj.activeItem].className="urMnuRowDsbl";
					  } else {
						  menuObj.items[menuObj.activeItem].className="urMnuRow";
					  }
					}
				}
			}
		}
	}
}
function sapUrMapi_PopupMenu(items) {
	this.activeItem = -1;
	this.items = new Array();
	for (var i=0;i<items.length;i++) {
		if (items.item(i).childNodes.item(0).className!="urMnuDvdr") {
			this.items[this.items.length]=items.item(i);
			this.items[this.items.length-1].setAttribute("Idx",this.items.length-1);
		}
	}
	return this;
}
function sapUrMapi_PopupMenu_keyDown(mywindow,id,e) {
  if (e.keyCode==27 || e.keyCode==115 ) {
		if (mywindow.menuObject) {
			if (mywindow.mylevel>0) {
				sapUrMapi_PopupMenu_setItemActive(mywindow,"closesub", id);
			} else {
				if (oPopup.source.object) oPopup.source.object.focus();
				hidePopupMenu();
			}
		}
		ur_EVT_cancel(e);
		return false;
	}
	if (e.keyCode==40) { 
	  sapUrMapi_PopupMenu_setItemActive(mywindow,"next", id);
	}
	if (e.keyCode==38) { 
	  sapUrMapi_PopupMenu_setItemActive(mywindow,"prev", id);
	}
	if (e.keyCode==39) { 
	  if (ur_system.direction == "rtl") {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"closesub", id);
	  } else {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"opensubkey", id);
	  }
    }
	if (e.keyCode==37) { 
	  if (ur_system.direction == "rtl") {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"opensubkey", id);
	  } else {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"closesub", id);
	  }
	}
	if (e.keyCode==13 || e.keyCode==32) { 
	  ur_PopupMenu_click(mywindow,id,e);
	}
	if (e.keyCode!=9) {
	  e.cancelBubble=true;
	  e.returnValue=false;
	} else {
		if (mywindow.menuObject) {
			mywindow.menuObject.out=true;
		}
		if(oPopup && oPopup.source && oPopup.source.object!=null) oPopup.source.object.focus();
		hidePopupMenu();
	  e.cancelBubble=false;
	  e.returnValue=true;
	}
	return false;
}
function sapUrMapi_PopupMenu_ExecuteLink(id) {
  oItem = window.document.getElementById(id);
  sTarget = oItem.target;
  sHref   = oItem.href;
  oTarget = top.frames[sTarget];
  if (oTarget) {
  	oTarget.location.href=sHref;
  } else {
    window.open(sHref,sTarget,"");
  }
}
function sapUrMapi_PopupMenu_drawInit( sId, oSubWindow ){
	if (initMenus && initMenus[sId] && typeof(initMenus[sId])!="undefined" && initMenus[sId].windowHeight==window.document.body.clientHeight) {
	  return;
	}
	var tbl = null;
	if (!oSubWindow) {
	  tbl = window.document.getElementById(sId+"-r");
	}
	else {
	  tbl = oSubWindow.document.getElementById(sId+"-r");
	}
	if (typeof(tbl)=="undefined" || tbl==null)  {
 		tbl=oSubWindow.document.getElementById(sId).childNodes.item(0).childNodes.item(0);
 		if (tbl.tagName=="TABLE") {
 		  	tbl.setAttribute("id",sId+"-r");
 		} else {
 			tbl=null;
 		}
 	}
	
	if (typeof(tbl)=="undefined" || tbl==null)  {
		return;
	}
	tbl.style.width = tbl.offsetWidth;
	
	var rows = tbl.childNodes.item(1).rows;
	
	if (tbl.offsetWidth == 0 || !rows(0)){
	  
	  return;
	}
	var visIdx = tbl.getAttribute("visidx") - 0;
  var visCnt = tbl.getAttribute("viscnt") - 0;
	if (visCnt==0){return false;}
	tbl.childNodes.item(0).style.display = "";
	tbl.childNodes.item(2).style.display = "";
  var actVisCnt = visCnt;
  var oldActVisCnt = tbl.getAttribute("actviscnt") - 0;
	var maxVisCnt = rows.length - visIdx;
	if (visCnt > maxVisCnt) {
	    
		visCnt = maxVisCnt;
		
	}
	
  
	
	var maxHt = window.document.body.clientHeight;
	var mnuHt = tbl.offsetHeight;
	var btnHt = tbl.childNodes.item(0).rows(0).offsetHeight + tbl.childNodes.item(2).rows(0).offsetHeight;
	var visBtns = true;
	var menuProps = new Array();
	var firsttime = false;
	if (!initMenus || !initMenus[sId] || typeof(initMenus[sId])=="undefined") {
	  for (var i = 0; i < rows.length; i++){
        for (var z = 0; z < rows(i).cells.length; z++){
						var oCell = rows(i).cells(z);
						if (oCell.offsetWidth == 0) {
							var originalStyle = rows(i).style.display;
							rows(i).style.display="";
              oCell.width = oCell.offsetWidth;
              oCell.style.width = oCell.offsetWidth +"px";
							rows(i).style.display = originalStyle;                            
        }
						else {
							oCell.width = oCell.offsetWidth;
							oCell.style.width = oCell.offsetWidth +"px";
						}
        }
      }
	  menuProps["windowHeight"] = maxHt;
	  menuProps["menuHeight"]= mnuHt;
	  menuProps["buttonHeight"] = btnHt;
	  menuProps["itemHeight"] = rows(0).offsetHeight;
	  initMenus[sId]=menuProps;
	  oldActVisCnt = visCnt;
	  firsttime=true;
	} else {
	  initMenus[sId].windowHeight=maxHt;
	}
	if (typeof(menuFontSize)=="undefined") {
	  menuFontSize = rows(0).cells(0).currentStyle.fontSize;
	}
	
	if ((visIdx == 0) && (visCnt >= rows.length)) {
	    if (maxHt > mnuHt){
	      tbl.setAttribute("actviscnt", actVisCnt);
		    for (var i = 0; i < rows.length; i++){
			    if (rows(i).cells(0).className == "urMnuDvdr"){
				    rows(i).cells(0).style.fontSize="5px";
			     }
		      visBtns = false;
		    }
	      tbl.childNodes.item(0).style.display = "none";
		    tbl.childNodes.item(2).style.display = "none";
	    } else {
	      tbl.childNodes.item(0).style.display = "";
		    tbl.childNodes.item(2).style.display = "";
		  }
	}
	mnuHt = 0 + tbl.childNodes.item(0).rows(0).offsetHeight + tbl.childNodes.item(2).rows(0).offsetHeight;
	var n;
	actVisCnt = Math.floor((maxHt-mnuHt)/initMenus[sId].itemHeight);
	if (actVisCnt <= 0) actVisCnt=1;
	if (actVisCnt > visCnt) actVisCnt=visCnt;
	var upOn = false;
	var dnOn = false;
	if (firsttime) {
	  
	  for (n=0; n<visIdx; n++) rows(n).style.display = "none";
	  
	  for (n=visIdx+actVisCnt; n<rows.length; n++) rows(n).style.display = "none";
	}
	if (visIdx>0) upOn = true;
	
	
    if (actVisCnt < oldActVisCnt) {
      for (n= visIdx+actVisCnt; n<visIdx+oldActVisCnt; n++)
           rows(n).style.display = "none";
	} else {
	  for (n= visIdx+oldActVisCnt; n<visIdx+actVisCnt; n++)
           rows(n).style.display = "";
    }
    if (visIdx+actVisCnt < rows.length) dnOn = true;
    if ((actVisCnt!=oldActVisCnt) || (firsttime))
      tbl.setAttribute("actviscnt", actVisCnt);
	
	if (visBtns) {
	  if (!oSubWindow) {
	    sapUrMapi_PopupMenu_setButtons( sId, false, upOn );
	    sapUrMapi_PopupMenu_setButtons( sId, true, dnOn );
	  } else {
		sapUrMapi_PopupMenu_setButtons( sId, false, upOn, oSubWindow );
		sapUrMapi_PopupMenu_setButtons( sId, true, dnOn, oSubWindow );
	  }
    }
}
function sapUrMapi_PopupMenu_timeScroll(oWindow, sId, bDown, bCancel, e) {
    
    mnu.mnuWin = oWindow;
    mnu.mnuWin.event.cancelBubble = true;
    if (bCancel & mnu.intv == null){
        mnu.active = false;
        return false;
    }
    else if (bCancel){
        mnu.cancel = true;
        mnu.mnuWin.parent.clearInterval(mnu.intv);
        mnu.intv = null;
        
        if (mnu.active == false){
            sapUrMapi_PopupMenu_scrollItem(sId, bDown);
        }
        mnu.active = false;
    }
    else{
        mnu.cancel = false;
		mnu.intv = mnu.mnuWin.parent.setInterval("sapUrMapi_PopupMenu_scrollItem('" + sId + "', '" + bDown + "')", mnu.delay);
    }
}
function sapUrMapi_PopupMenu_manualScroll(oWindow, sId, bDown, bCancel, e ){
    
    mnu.mnuWin = oWindow;
    mnu.mnuWin.event.cancelBubble = true;
	if (bCancel){
        mnu.cancel = true;
        mnu.mnuWin.parent.clearInterval(mnu.intv);
        mnu.intv = null;
        
        if (mnu.active == false){
            sapUrMapi_PopupMenu_scrollItem(sId, bDown);
        }
        mnu.active = false;
	}
	else{
	   return false;
	}
}
function sapUrMapi_PopupMenu_scrollItem(sId, bDown) {
    mnu.active = true;
    
	var tbl = mnu.mnuWin.document.getElementById(sId+"-r");
    var tbody = tbl.childNodes.item(1);
    
    var rIdx = tbl.getAttribute("visidx") - 0;
    var visCnt = tbl.getAttribute("actviscnt") - 0;
    
    if (bDown == "true"){
        if ((rIdx + visCnt) >= tbody.rows.length){
            mnu.cancel = true;
        }
        else{
            tbody.rows(rIdx).style.display = "none";
			tbody.rows(rIdx + visCnt).style.display = "";
            ++rIdx;
            tbl.setAttribute("visidx", rIdx);
            mnu.cancel = false;
        }
    }
    else{
       if (rIdx <= 0){
           mnu.cancel = true;
       }
       else{
           tbody.rows(rIdx + visCnt - 1).style.display = "none";
           --rIdx;
		   tbody.rows(rIdx).style.display = "";
           tbl.setAttribute("visidx", rIdx);
           mnu.cancel = false;
       }
    }
    
    if(mnu.cancel){
        mnu.mnuWin.parent.clearInterval(mnu.intv);
        mnu.intv = null;
        return;
    }
    else{
       
       if ((rIdx + visCnt - 0) >= tbody.rows.length){
           sapUrMapi_PopupMenu_setButtons(sId, true, false);
       }
       else{
           sapUrMapi_PopupMenu_setButtons(sId, true, true);
       }
       if (rIdx - 0 <= 0){
          sapUrMapi_PopupMenu_setButtons(sId, false, false);
       }
       else{
          sapUrMapi_PopupMenu_setButtons(sId, false, true);
       }
    }
}
function sapUrMapi_PopupMenu_setButtons( sId, bUp, bOn, oMenuWin ){
    var x;
    var node;
    (bUp)? x = 2 : x = 0;
		try {
			if (oMenuWin) {
			  node = oMenuWin.document.getElementById(sId+"-r").childNodes.item(x).childNodes.item(0).childNodes.item(0);
			} else {
	        if (mnu.mnuWin != null){
	         node = mnu.mnuWin.document.getElementById(sId+"-r").childNodes.item(x).childNodes.item(0).childNodes.item(0);
	        } else {
	         node = window.document.getElementById(sId+"-r").childNodes.item(x).childNodes.item(0).childNodes.item(0);
	        }
			}
			if (!bOn){
			  node.className = node.className.split("Dsbl")[0] + "Dsbl";
			} else {
		      node.className = node.className.split("Dsbl")[0];
			}
		}
		catch(e){
		}
}
function sapUrMapi_PopupMenuItem_setDisabled( sPopupMenuId, iIdx){
  var tbl = window.document.getElementById(sPopupMenuId+"-r");
	if (isNaN(iIdx)) { return; }
	var rows = tbl.childNodes.item(1).rows;
	rows(iIdx).className="urMnuRowDsbl";
	rows(iIdx).setAttribute("dsbl","true");
	rows(iIdx).cells(1).oldTitle=rows(iIdx).cells(1).title;
  rows(iIdx).cells(1).title=getLanguageText("SAPUR_POPUP_ITEM_WHL_DISABLED",new Array(rows(iIdx).cells(1).innerText,"SAPUR_POPUP_ITEM_DISABLED"))
}
function sapUrMapi_PopupMenuItem_setEnabled( sPopupMenuId, iIdx){
  var tbl = window.document.getElementById(sPopupMenuId+"-r");
	if (isNaN(iIdx)) { return; }
	var rows = tbl.childNodes.item(1).rows;
	rows(iIdx).className="urMnuRowOff";
	rows(iIdx).setAttribute("dsbl","false");
	rows(iIdx).cells(1).title=rows(iIdx).cells(1).oldTitle;
}
var ur_replace_function=false;
var ur_replace_function_button_id="";
function sapUrMapi_PopupMenu_selectItem(oWnd,sItemId,bChecked,oEvt) {
	
   if(oEvt && oPopup && oPopup.idTrigger && document.getElementById(oPopup.idTrigger)) {
     if(!oEvt.ur_param) oEvt.ur_param = {};
   	 oEvt.ur_param.TriggerId = oPopup.idTrigger;
   }
   
   oWnd.me.sapUrMapi_ToolbarButton_setFunctionFromMenuItem(sItemId);  
   oWnd.me.sapUrMapi_PopupMenu_hideAll();
   ur_EVT_cancel(oEvt);
}
function mf_PopupMenu_getObj(sId,hWnd) {
	
	if (typeof(hWnd)=="undefined") hWnd=window;
	var o=hWnd.document.getElementById(sId);
	if (o.hasChildNodes() && o.childNodes[0].tagName=="XMP") {
	  o.innerHTML=o.firstChild.innerHTML; 
	}
	
	
  if (o==null) return;
  if (hWnd._ur_POMN.all[sId]==null) {
    
		var oPMn={id:sId,
		          ref:o,
		          evtref:o.childNodes[0],
		          items:new Array(),
		          shown:false,
		          frame:null};
		var oRows=o.getElementsByTagName("TBODY")[0].getElementsByTagName("TR");
		var iIdx=0;
		for (var i=0;i<oRows.length;i++) {
			var bHasSep=false;
			var oSepRef=null;
			if (oRows[i].firstChild.className.indexOf("urMnuDvdr")>-1) {
				bHasSep=true; 
				oSepRef=oRows[i];
				i++;
			}
			var oRow=oRows[i];
			var sSt=ur_getAttD(oRow,"st","");
			var sAtt=ur_getAttD(oRow,"att","");
			var sTd=ur_getAttD(oRow,"td","");
			var sSmnu=ur_getAttD(oRow,"smnu","");
			oPMn.items.push({ref:oRow,
			                 sepref:oSepRef,
			                 idx:iIdx,
			                 Id:oRow.id,
			                 Enabled:sSt.indexOf("d")==-1,
			                 HasSubMenu:sSmnu!="",
											 SubMenuId:sSmnu,
			                 HasSeparator:sAtt.indexOf("s")>-1,
			                 Text:ur_getAttD(oRow,"t",""),
			                 CanCheck:(sSt.indexOf("n")>-1 || sSt.indexOf("s")>-1),
			                 GroupId:ur_getAttD(oRow,"gid",""),
			                 Checked:sSt.indexOf("s")>-1,
			                 HasIcon:sAtt.indexOf("i")>-1,
			                 IsLink:sAtt.indexOf("l")>-1,
			                 EnabledIconSrc:ur_getAttD(oRow,"eis",""),
			                 DisabledIconSrc:ur_getAttD(oRow,"dis",""),
			                 HasEllipsis:sAtt.indexOf("e")>-1,
			                 TextDirection:sTd,
			                 POPUPMENUITEMSELECT:ur_getAttD(oRow,"ocl",""),
			                 POPUPMENUITEMLINKCLICK:ur_getAttD(oRow,"olc",""),
			                 Hovered:false,
			                 Hidden:false,
			                 Menu:oPMn});
			iIdx++;
		}
		hWnd._ur_POMN.all[sId]=oPMn;
	}
	return hWnd._ur_POMN.all[sId];
}
function mf_PopupMenu_getTriggerId() {
	return _ur_POMN_triggerId.split("-")[0];
}
function ur_PopupMenu_render(oPMn) {
  var oTBdy=oPMn.ref.getElementsByTagName("TBODY")[0];
  var oTable=oPMn.ref.getElementsByTagName("TABLE")[0];
  while (oTBdy.childNodes.length>0) oTBdy.removeChild(oTBdy.lastChild);
  for (var i=0;i<oPMn.items.length;i++) {
    var oItm=oPMn.items[i];
    var oH=document.createElement("TR");
    var oHTxtTd=document.createElement("TD");
    var oHTxtSpan=document.createElement("SPAN");
 
    var oHIcoTd=document.createElement("TD");
    var oHChkTd=document.createElement("TD");
    var oHTd=document.createElement("TD");
    var oHSubTd=document.createElement("TD");
    
    
    if (oItm.Enabled) oH.className="urMnuRowOff";
    else oH.className="urMnuRowDsbl";
    
    
    if (oItm.CanCheck) {
      if(oItm.GroupId!='')
        if (oItm.Checked) oHChkTd.className="urMnuChkRbgOn";
        else oHChkTd.className="urMnuChkRbg";
      else if (oItm.Checked) oHChkTd.className="urMnuChkOn";
      else oHChkTd.className="urMnuChk";
    } else {
     oHTxtTd.className="urMnuTxt";
    } 
    if (oItm.CanCheck) oHChkTd.innerHTML="&nbsp;&nbsp;&nbsp;";
    else oHChkTd.innerHTML="&nbsp;";
    
    if (oItm.HasIcon) {
      oHIcoTd.className="urMnuTxt";
      if (ur_system.direction=="RTL") oHIcoTd.style.paddingLeft="3px";
      else oHIcoTd.style.paddingRight="3px";
      oImg=document.createElement("IMG");
      if (oItm.Enabled) oImg.src=oItm.EnabledIconSrc;
      else oImg.src=oItm.DisabledIconSrc;		
      oImg.border="0";
      oHIcoTd.appendChild(oImg);
    } else {
      oHIcoTd.innerHTML="&nbsp;";
    }
    
    
    var sEll="";
    if (oItm.HasEllipsis) sEll="\u2026";
    var oHTxt=document.createTextNode(oItm.Text+sEll);
    oHTxtTd.className="urMnuTxt";
    oHTxtTd.appendChild(oHTxtSpan);
    oHTxtSpan.style.whiteSpace="nowrap";
    
    
    if (oItm.HasSubMenu) { oHSubTd.className="urMnuSubOn";oHSubTd.innerHTML="&nbsp;&nbsp;&nbsp;";
    } else {oHSubTd.className="urMnuSub";oHSubTd.innerHTML="&nbsp;";}
    
	
	if (ur_system.is508){
		if (oItm.HasSubMenu)oHTxtTd.setAttribute("tp","ISMNU");
		else oHTxtTd.setAttribute("tp","I");
		oHTxtTd.setAttribute("t",oItm.Text);
		if(oItm.Enabled == false)oHTxtTd.setAttribute("st","d");
		if(oItm.CanCheck==true){
			var sSt=oHTxtTd.getAttribute("st");
			if(sSt==null)sSt="";
	   		if(oItm.Checked)oHTxtTd.setAttribute("st",sSt+"s");
	   		else oHTxtTd.setAttribute(sSt+"n");
	 	}
		oHTxtTd.setAttribute("idx",i+1);
		oTable.ic=oPMn.items.length;
	}
	
    
    oH.appendChild(oHChkTd);
    oH.appendChild(oHIcoTd);
    oH.appendChild(oHTxtTd);
    oH.appendChild(oHSubTd);
    oHTxtSpan.appendChild(oHTxt);
    if (oItm.TextDirection=="ltr" && ur_system.direction=="RTL") {
      oHTxtSpan.style.direction="ltr";
    } else if (oItm.TextDirection=="rtl" && ur_system.direction=="LTR") {
      oHTxtSpan.style.direction="ltr";
    }
    if (oItm.HasSeparator) {
      var oHSep=document.createElement("TR");
      oHSep.setAttribute("class","urMnuRowOff");
      var oHSepTd=document.createElement("TD");
      oHSepTd.className="urMnuDvdr";
      oHSepTd.colSpan="4";
      var oHSepTmp=document.createElement("DIV")
      oHSepTmp.innerHTML="&nbsp;";
      oHSepTd.appendChild(oHSepTmp);
      oHSep.appendChild(oHSepTd);
	    oTBdy.appendChild(oHSep);
    }
    
    oH.setAttribute("id",oItm.Id);
    
    var sAtt="";
    sAtt+=oItm.HasSeparator?"s":"";
    sAtt+=oItm.HasEllipsis?"e":"";
    sAtt+=oItm.HasIcon?"i":"";
    sAtt+=oItm.IsLink?"l":"";
    oH.setAttribute("att",sAtt);
    if (oItm.TextDirection!=ur_system.direction) {
	    oH.setAttribute("td",oItm.TextDirection);
    } else {
	    oH.setAttribute("td",ur_system.direction);
    }
    var sSt="";
    if (!oItm.Enabled) sSt+="d";
    if (oItm.CanCheck) {
      if (oItm.Checked) sSt+="s";
      else sSt+="n";
    } 
    oH.setAttribute("st",sSt);
    oH.setAttribute("ocl",oItm.POPUPMENUITEMSELECT);
    oH.setAttribute("olc",oItm.POPUPMENUITEMLINKCLICK);
    
    if (oItm.HasSubMenu && oItm.SubMenuId!='') oH.setAttribute("smnu",oItm.SubMenuId);
    oH.setAttribute("t",oItm.Text);
    if (oItm.HasIcon) {
      oH.setAttribute("eis",oItm.EnabledIconSrc);
      oH.setAttribute("dis",oItm.DisabledIconSrc);
    }
	  oTBdy.appendChild(oH);
  }
  
  var sId=oPMn.id;
  _ur_POMN.all[sId]=null;
  if (!initMenus) initMenus = new Array();
  if (initMenus[sId]) initMenus[sId] = null;
  mf_PopupMenu_getObj(sId);
}
function mf_PopupMenu_addItem (oPMn,oItm) {
  oPMn.items[oPMn.items.length]=oItm;
}
function mf_PopupMenu_removeItem (oPMn,oItm) {
  var j=0;
  var items=new Array();
  for (var i=0;i<oPMn.items.length;i++) 
    if (oItm.Id!=oPMn.items[i].Id) items.push(oPMn.items[i]);
  oPMn.items=items
}
function mf_PopupMenu_replaceItem (oPMn,oOldItm,oNewItm) {
  var j=0;
  var oNewItems=new Array();
  for (var i=0;i<oPMn.items.length;i++) 
    if (oOldItm.Id==oPMn.items[i].Id) oPMn.items[i].Id=oNewItm;
}
function mf_PopupMenu_removeAllItems (oPMn) {
  oPMn.items=new Array();
  var oTable=oPMn.ref.getElementsByTagName("TABLE")[0];
  oTable.style.width="50px";
  return oPMn;
}
function mf_PopupMenu_apply (oPMn) {
  ur_PopupMenu_render(oPMn);
}
function mf_PopupMenu_getItemById (oPMn,sItemId) {
  for (var i=0;i<oPMn.items.length;i++) 
    if (sItemId==oPMn.items[i].Id) return oPMn.items[i];
  return null;
}
function mf_PopupMenu_getItemByIdx (oPMn,iIdx) {
  return oPMn.items[iIdx];
}
function mf_PopupMenu_createItem (sId) {
  return {Id:sId,Enabled:true,HasSubMenu:false,SubMenuId:"",HasSeparator:false,Text:"",CanCheck:false,GroupId:"",Checked:false,HasIcon:false,EnabledIconSrc:"",DisabledIconSrc:"",HasEllipsis:false,TextDirection:"ltr",POPUPMENUITEMSELECT:"",POPUPMENUITEMLINKCLICK:"",Menu:null};
}
function ur_PopupMenu_click(hWnd,sId,oEvt) {
  if ( !oEvt ) return;
  if ( ur_pullDownMenu && oEvt.type == "contextmenu") return; 
  if ( oPopup == null ) return; 
  var oItm=ur_EVT_src(oEvt);
  if (oItm.tagName=="BODY" || oItm.tagName=="DIV") {
	var aItems = hWnd.document.getElementsByTagName("TR");
    for (var i=0;i<aItems.length;i++) {
			if (aItems[i].className.indexOf("urMnuRowOn")>-1) {
				oItm = aItems[i];
				break;
			}
    }
  } else {
  while (oItm && ur_getAttD(oItm,"ocl","")=="" && ur_getAttD(oItm,"olc","")=="") {
		if (oItm.className=="urMnuDvdr" || oItm.className=="urMnuRowDsbl") return;
		else oItm=oItm.parentNode;
		}
  }
  if (oItm == null || oItm.tagName=="BODY" || oItm.tagName=="DIV") return;
  
  ur_EVT_addParam(oEvt,"ItemId",oItm.id);
  if (ur_getAttD(oItm,"st","").indexOf("d")>-1) return
  if (ur_getAttD(oItm,"ocl","")!="")  ur_EVT_fire(oItm,"ocl",oEvt,hWnd);  
  if (ur_getAttD(oItm,"olc","")!="") ur_EVT_fire(oItm,"olc",oEvt,hWnd);	
  ur_EVT_cancel(oEvt);
}
function ur_PopupMenu_keydown(hWnd,sId,oEvt) {
	if (oEvt.keyCode==27) {
		if (hWnd.menuObject) {
			if (hWnd.mylevel>0) {
				for (var i=hWnd.mylevel+1;i<subMenus.length;i++) {
				  if (subMenus[i]!=null) subMenus[i].hide();
				}
				sapUrMapi_PopupMenu_setItemActive(hWnd,"closesub", sId);
			} else {
				oPopup.source.object.focus();
				hidePopupMenu();
			}
		}
		return;
	}
	if (oEvt.keyCode==40) { 
	  var iIdx=hWnd.menu.activeItem.idx;
	  if (iIdx==hWnd.menu.items.length-1) iIdx=0;
	  else iIdx++;
	  var oItm=mf_PopupMenu_getItemByIdx(hWnd.menu,iIdx);
	  mf_PopupMenu_setItemDisplay(hWnd,oItm,"overkey",oEvt);
	  ur_EVT_cancel(oEvt);
	} else if (oEvt.keyCode==38) { 
	  var iIdx=hWnd.menu.activeItem.idx;
	  if (iIdx==0) iIdx=hWnd.menu.items.length-1;
	  else iIdx--;
	  var oItm=mf_PopupMenu_getItemByIdx(hWnd.menu,iIdx);
	  mf_PopupMenu_setItemDisplay(hWnd,oItm,"overkey",oEvt);
	  ur_EVT_cancel(oEvt);
	} else if (oEvt.keyCode==39) { 
	  if (ur_system.direction == "rtl") {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"closekey",oEvt);
	  } else {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"openkey",oEvt);
	  }
  } else if (oEvt.keyCode==37) { 
	  if (ur_system.direction == "rtl") {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"openkey");
	  } else {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"closekey");
	  }
	} else if (oEvt.keyCode==13 || oEvt.keyCode=="32") { 
		var item=hWnd.menuObject.items[hWnd.menuObject.activeItem];
    	if (item.getAttribute("ocl")!=null && item.getAttribute("ocl")!="") ur_EVT_fire(item,"ocl",oEvt,hWnd);
    	if (item.getAttribute("olc")!=null && item.getAttribute("olc")!="") ur_EVT_fire(item,"olc",oEvt,hWnd);
	} else if (oEvt.keyCode!=9) {
	  oEvt.cancelBubble=true;
	  oEvt.returnValue=false;
	} else {
		if (hWnd.menuObject) {
			hWnd.menuObject.out=true;
		}
		if(oPopup.source.object!=null) oPopup.source.object.focus();
		hidePopupMenu();
	  oEvt.cancelBubble=false;
	  oEvt.returnValue=true;
	}
	return false;
}
function mf_PopupMenu_setScrollSettings(iFirstVisibleItem,iMaxVisibleItems) {
  var o=ur_get(sId+"-r");
  o.setAttribute("viscnt",iMaxVisibleItems);
  o.setAttribute("visidx",iFirstVisibleItem);
  
  
}
function mf_PopupMenu_getTriggeredUserData() {
  var o=ur_get(_ur_POMN_triggerId);
  if (o && o.getAttribute && o.getAttribute("ud")) {
	  return ur_getAttD(o,"ud","");
  }
  return _ur_POMN_triggerId;
}
function mf_triggerMenu_AtPosition(popupMenuId,left,top,bRemoveOnClose){
	var evt=new Object();
	evt.clientX=left;
	evt.clientY=top;
		
	sapUrMapi_PopupMenu_showMenu("",popupMenuId,sapPopupPositionBehavior.EVENT,evt,bRemoveOnClose)
}
function sapUrMapi_PopupMenu_removeAll(){
	if (oPopup) {
		var obj = oPopup.content.obj;
		sapUrMapi_PopupMenu_remove(obj);
	}
}
function sapUrMapi_PopupMenu_remove(obj){
	var items = obj.getElementsByTagName("TR"); 
	for (var i=0;i<items.length;i++) {
		var sSubMenu = items[i].getAttribute("smnu");
		if (sSubMenu) {
			var oSubMenu = ur_get(sSubMenu);
			if (oSubMenu && oSubMenu!=obj) sapUrMapi_PopupMenu_remove(oSubMenu);
		}
	}
	obj.parentNode.removeChild(obj);
}

//** PopupTrigger.ie5 **

function sapUrMapi_PopupTrigger_hover(sId,oEv) {
	if (ur_get(sId).firstChild == null) return;
	
	var oBtn = ur_get(sId + "-btn"),
		o = ur_get(sId),
		bIsInteractive = o.getAttribute("ia") == "t";
	
	if (oEv.type=="mouseover") {
		o.className = "urPopUpTrgWhl urPopUpTrHover";
		oBtn.className =  oBtn.className + " urPopUpTrgIndHover";
	}
	else if (oEv.type=="mouseout") {
		o.className = "urPopUpTrgWhl";
		oBtn.className = oBtn.className.split("urPopUpTrgIndHover")[0];
	}
}
function mf_PopupTrigger_openOnRequest(sId){
	var o=ur_get(sId);
	var oBtn = ur_get(sId+"-btn");
	
	if(oBtn)oBtn.click();
	else o.click();
}
function sapUrMapi_PopupTrigger_openMenu(sId,sMenuId,e) {
	var o=ur_get(sId);
	var bOpen=false;
	var eConMenu=false;
	var eClick=false;
	
	if(ur_system.is508 ) var oChild=sapUrMapi_findFirstFocus(o);
	
	if(oChild && oChild.getAttribute("id") != null &&oChild.getAttribute("id") != "") {
		var sChildId = oChild.getAttribute("id");
	}
	else {
		var sChildId = sId;
	}
	
	var oBtn=ur_get(sId+"-btn");
	if((o && o.oncontextmenu) || (oBtn && oBtn.oncontextmenu)) {
	  eConMenu=true;
	  eClick=true;
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("121")) && eConMenu==true){
		bOpen=true;
	} else if (e.altKey && sapUrMapi_checkKey(e,"keydown",new Array("40")) && eClick==true){
		bOpen=true;
	} else if(e.type=="contextmenu" ||e.type=="click") {
		bOpen=true;
	}else if(sapUrMapi_checkKey(e,"keydown",new Array("115"))) {
		bOpen=true;
	}else if(e.keyCode==32 && e.srcElement.getAttribute("ct")!="POTRG"){ 
		bOpen=true;
	}else if(e.keyCode==32 && e.srcElement.getAttribute("id").indexOf("_selmenu")>-1){ 
		bOpen=true;
		e.cancelBubble=true;
	}
	if (bOpen &&sMenuId=="" )return ur_EVT_fire(o,"oreq",e);
	if (bOpen) {
		if (ur_system.direction=="rtl")
		  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENULEFT,e);
		else
	 	  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENURIGHT,e);
		  if (sapUrMapi_checkKey(e,"keydown",new Array("115","121")))return ur_EVT_cancel(e);
		  if (e.type=="contextmenu") {
		      e.returnValue=false;
		    } else {
			  ur_EVT_cancelBubble(e);
		      e.returnValue=true;
		    }
		  
	}
    
}
function sapUrMapi_PopupTrigger_RegisterCreate(sId) {
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PopupTrigger_init('" + sId + "')");
}
function sapUrMapi_PopupTrigger_init(sId){
	   if (ur_get(sId) == null || ur_get(sId).firstChild == null) return;
	   var value = ur_get(sId).firstChild.style.width;
	   var percent = value.lastIndexOf('%');
	   if(percent < 3 && percent > -1)
	   {
	     ur_get(sId).style.width = value;
	     ur_get(sId).firstChild.style.width = '100%';
	   }
}

//** PopupWindow.ie5 **

var ptrPopup = new URPopupManager();
function URPopupManager()
{
  this.hostWindow = null;
  this.popups = null;	
  this.ptrActiveXArray = new Array();
  this.IE = !document.addEventListener;
  this.bEncHTML = false;
  
};
URPopupManager.prototype.isRTL = function()
{
  return this.IE && ur_system.direction == "rtl";
};
function ptrGetPopupWindow()
{
    return ptrPopup;
};
URPopupManager.prototype.getPopups = function()
{
  if (this.popups != null)
    return this.popups;
  if (typeof(this.getHostWindow().urclassic_popupwindows) == "undefined"  )
    this.getHostWindow().urclassic_popupwindows = new this.getHostWindow().Array();
  return this.popups = this.getHostWindow().urclassic_popupwindows;
};
URPopupManager.prototype.getHostWindow = function()
{
    
    
  if (this.hostWindow != null)
      return this.hostWindow;
  var windows = new Array();
	
	var oWindow = window; 
	windows[windows.length] = oWindow;
	
	while (oWindow != oWindow.parent)
	{
		windows[windows.length] = oWindow.parent;
		oWindow = oWindow.parent;
	}
		
	for (var x = windows.length-1; x >= 0; x--)
	{
		var upperMostWindow = windows[x];
		
		
		try
		{
			upperMostWindow.document.domain;
		}
		catch(e)
		{
			continue;
		}
		
		
		
		var iBs = upperMostWindow.document.getElementsByTagName("frameset").length;
		if (iBs > 0)
			continue;
		
		return this.hostWindow = upperMostWindow;		
	}
}
var CONSTANTS = 
{
    borderSize: 2, 
    left: 2,
    top: 23,
    right: 2,
    bottom: 31,
    typeLeft: 72,
    typeRight: 72,
    modlessOffset: 10,
    modalOffset: 30,
    waveBottom: 22,
    waveMid: 40,
    waveTop: 15,
    waveResize: 22
};
function URPopupWindow(
        sourceWindow,
        index,
        title,
        hasCloseButton,
        isResizable,
        text,
        popupManager, 
	    	initLeft,
    		initRight,
    		initTop,
        desiredWidth,
        desiredHeight,
        buttonStyle,
        sourceFocusId, 
        type,
        dialogMode, 
        popupId,
        url )
{
	  this.sourceWindow = sourceWindow;
	  this.index = index;
	  this.title = title;
    this.popupManager = popupManager;
    this.left = "0px";
    this.right = "0px";
    this.top = "0px";
    this.text = text;
    this.initLeft = initLeft;
    this.initRight = initRight;
    this.initTop = initTop;
    this.hasCloseButton = hasCloseButton;
    this.isResizable = isResizable;
    this.isInitial = true;
    this.isResized = false;
    this.isMoved = false;
    this.isMaximized = false;
    this.frameIndex = 0;
    this.strDomainRelaxScript = "<s"+"cript>try{parent.document.domain;}catch(e){document.domain='" + this.popupManager.getHostWindow().document.domain + "';}</scri" + "pt>";
    this.sourceWindow = sourceWindow;
    this.desiredWidth = desiredWidth;
    this.desiredHeight = desiredHeight;
    this.buttonStyle = buttonStyle;
    this.sourceFocusId = sourceFocusId;
  
    this.messageType = type;
    this.dialogMode = dialogMode;
    this.popupId = popupId;
    this.url = url;
    
    var iframeIndex = this.iframeIndex = this.popupManager._getAvailableIFrameIndex();
    
    
    this.outerIFrame = this.createIFrame("urPopupOuter" + iframeIndex);
    this.outerIFrame.setAttribute("scrolling", "no");	
    
    var that = this;
    this.initOuterHandler = function(){that.createHTML();};
    helperAddEventListener(this.outerIFrame,"load",this.initOuterHandler);  
    
   if (url.length > 0)
   {
        this.innerIFrame = this.createIFrame("urPopupInner" + iframeIndex);
        this.initInnerHandler = function(){that.initializeInnerIFrame();};
        
        helperAddEventListener(this.innerIFrame,"load",this.initInnerHandler);
         	
   }
       
}
URPopupWindow.prototype.initializeInnerIFrame = function()
{
    if (!this.innerIFrame)
      return;
      
    helperRemoveEventListener(this.innerIFrame,"load",this.initInnerHandler);
    
    var html = "";
    if (this.popupManager.isRTL())
        html = "<html dir=\"rtl\"><head>";
    else
        html = "<html><head>";
    html += this.strDomainRelaxScript;
    
    var absoluteURL = this.relativeToAbsolutePath(this.url,this.sourceWindow.location.href);
    
    html += "</head>";
    html += "<body id=\"ptrBodyLoading\" unselectable=\"on\" oncontextmenu=\"return false;\" style=\"margin:0;\" scroll=\"no\">";
    html += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"height:100%;width:100%;\">";
    html += "<tbody><tr><td align=\"center\" style=\"font-family:Arial\"><span style=\"font-size:0.8em\">Loading...</span></table>";
    html += "<sc" + "ript>window.setTimeout(function(){location.href='" + absoluteURL + "';},0);" + "</sc" + "ript>";
    html += "</body></html>";
    
    var innerWindow = this.innerIFrame.contentWindow;
    innerWindow.document.write(html);
    innerWindow.document.close();
}
URPopupManager.prototype._getAvailableIFrameIndex = function()
{
    
    
    var index = 0;
    while(true)
    {
        var iframe = this.getHostWindow().document.getElementById("urPopupOuter" + index);
         
        
        if (!iframe)
           return index;
            
        
        
        if (iframe.style.top == "-5000px")
        {
           iframe.style.top = "-4000px";
           return index;
        } 
        index++;
    }
    
}
URPopupManager.prototype._ptrShowPopupWindow = function (
		sourceWindow,
		initLeft,initRight,initTop,
		width,height,
	 	url ,
	 	title,
	 	text,
	 	buttonStyle, 	
	 	type,		
	 	logout,
	 	isMaximized,
	 	isResizable,
	 	dialogMode,
	 	popupId,
	 	hasCloseButton,
    sourceFocusId,
    hasTimeout)
{
    
   this._createBlocklayer();
   
    if (typeof sourceFocusId == "undefined")
    {
      sourceFocusId = "";
      
      if (this.IE)
      {
        if(event && event.srcElement)
        {
            sourceFocusId=event.srcElement.id;
        }
      }
    }
    
    this._blockActiveXControls();
		
	
	
	
	 try
	 {
        var popups = this.getPopups();
        for (var x = 0; x < popups.length; x++)
            popups[x].innerIFrame.contentWindow.document.body.focus();
        
	    sourceWindow.document.body.focus();
	}
    catch (e)
    {}
	
		
	
	var index = this.getPopups().length;
	var newPopup = this.getPopups()[index] = new URPopupWindow(sourceWindow,index,title,hasCloseButton,isResizable,text,this,initLeft,initRight,initTop,width,height,buttonStyle,sourceFocusId,type,dialogMode,index,url);
   	
  this.focusPopup(null);
		
  if (popupId.length > 0)
    newPopup.popupId = popupId;
          
}
URPopupWindow.prototype.createHTML = function()
{
  if (!this.outerIFrame)
    return;
  
  helperRemoveEventListener(this.outerIFrame,"load",this.initOuterHandler);
  
  var html = "";
  if (this.popupManager.isRTL())
      html = "<html dir=\"rtl\"><head>";
  else
      html = "<html><head>";
  
  
  
  html += "<link rel=\"stylesheet\" href=\"" + this.getPopupStyles() + "\"/>";
  html += "<link rel=\"stylesheet\" href=\"" + this.getFoundationStyles() + "\"/>";
	
  
  html += this.strDomainRelaxScript;
  
  var outerIFrameWindow = this.outerIFrame.contentWindow;
  
  if (typeof(outerIFrameWindow.parent.popupRef) == "undefined"  )
    outerIFrameWindow.parent.popupRef = new (outerIFrameWindow.parent).Array()
  
  outerIFrameWindow.parent.popupRef[this.popupId] = this;
  html += "<script>var thisPopup = parent.popupRef['" + this.popupId + "'];</script>";
    
  
  
  html += this._getCSS();
  html += "</head>";
      
  html += "<body onkeydown='if (event.keyCode==8) return false;' id=\"iframePopupBody\" unselectable=\"on\" oncontextmenu=\"return false;\" class=\"urPopBdyStd urPopFont\">";
  		
  var width = 200;
  var height = 120;
     
  
  html += "<div tabindex=\"0\" id=\"ptrFocusReverse\" onfocus=\"thisPopup.focusLastElement()\"></div>";
  html += "<div id=\"iframePopupDivOuterFrame\" class=\"urPopFrame1\" style=\"width:" + width + ";height:" + height + ";\">";
  html += "<div class=\"urPopFrame2\" id=\"urPopFrame2\" style=\"width:100%;height:100%\">";
  html += "<div id=\"iframePopupDivHeader\" tabindex=\"0\" class=\"urPopTitleArea\">";
  html += "<table width='100%' class='urPopFont' cellspacing='0' cellpadding='0' border='0'><tr>";
  html += "<td id='urPopupWindowTitle' class='urPopTitleAreaHeader'";
  if (ur_system.is508 == false && this.isResizable == true)
  {
      html += " ondblclick='thisPopup.toggleMinMax();'";
  }
  html += ">";
  
  
  html += "<div id=\"iframePopupDivHeaderText\" class=\"urPopTitle urPopFont\" style='height:100%;width:" + 150 + ";' onmousedown='return thisPopup.startDrag(event,false)' title='";
  if (ur_system.is508 == false)
  {
      if (this.popupManager.bEncHTML)
          html += toHTMLEntities(this.title);
      else
          html += this.title;
  }
  else
  {
      var transText = ur_txt[ur_language].SAPUR_POPUP.replace("{0}", this.title);
      html += transText;
  }
  html += "'>";
  
  if (this.popupManager.bEncHTML)
      html += toHTMLEntities(this.title);
  else
      html += this.title;
          
   html += "</div></td>";
  
  
  if (this.isResizable)
  {
      html += "<td align='";
      if (this.popupManager.isRTL())
      		html += "left";
      else
          html += "right"; 
      
      html += "' class='urPopTitleAreaResize'>";
      html += "<div tabindex=\"0\" border='0' id='ptrPopupToggleIconId' onkeypress='if(event.keyCode==13){thisPopup.toggleMinMax();};'";
      html += " onClick='thisPopup.toggleMinMax()' class='urPopFrameMax'><img alt='' src='" + ur_system.mimepath + "1x1.gif' style='width:16px;height:16px'";
      
      var sTitle = "Resize";
      if (ur_system.is508)
      {
          sTitle += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
      }
      html += " title='" + sTitle + "'>";
      html += "</div></td>";
  }
  
  
  if (this.hasCloseButton == true)
  {
      html += "<td align='";
      if (this.popupManager.isRTL())
          html += "left";
      else
          html += "right";
      html += "' class='urPopTitleAreaClose'><div onkeypress='if(event.keyCode==13||event.keyCode==32){thisPopup.popupManager._closePopup(thisPopup,\"CANCEL\")};' id=\"headerCancel\" tabindex=\"0\" border='0' onClick='thisPopup.popupManager._closePopup(thisPopup,\"CANCEL\")' class='urPopFrameClose'";
      
      var sTitle = "Cancel";
      if (ur_system.is508)
      {
          sTitle += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
      }
      html += " title='" + sTitle + "'>";
      html += "<img alt='' src='" + ur_system.mimepath + "1x1.gif' style='width:16px;height:16px'></div></td>";
  }
  html += "</tr></table>";
  html += "</div>";
	
  height -= CONSTANTS.top + CONSTANTS.bottom;
  width  -= CONSTANTS.left + CONSTANTS.right;
	
  var messageIconClass = "";
  var message508Text = "";
  if (this.messageType.length > 0)
  {
      if (this.messageType == "PTR_WARNING")
      {
          messageIconClass = "urPopIconWarning";
          message508Text = "Warning";
      }
      else if (this.messageType == "PTR_INFORMATION")
      {
          messageIconClass = "urPopIconInformation";
          message508Text = "Information";
      }
      else if (this.messageType == "PTR_QUESTION")
      {
          messageIconClass = "urPopIconQuestion";
          message508Text = "Question";
      }
      else if (this.messageType == "PTR_SUCCESS")
      {
          messageIconClass = "urPopIconSuccess";
          message508Text = "Success";
      }
      else if (this.messageType == "PTR_ERROR")
      {
          messageIconClass = "urPopIconError";
          message508Text = "Error";
      }
      else if (this.messageType == "PTR_STOP" || this.messageType == "PTR_STOPP")
      {
          messageIconClass = "urPopIconStopp";
          message508Text = "Stopp";
      }
  }
  if (messageIconClass.length > 0)
  {
      html += "<table width='100%' style=\"table-layout:fixed;\" cellspacing='0' cellpadding='0' border='0'><tr>";
      html += "<td valign='top' id='messageIcon' tabindex=\"0\"";
      if (ur_system.is508 == true)
      {
          html += " title='" + message508Text + " - " + ur_txt[ur_language].SAPUR_IMG + "'";
      }
      html += " class='urPopIconArea " + messageIconClass + "'><img alt='' src='" + ur_system.mimepath + "1x1.gif' style='width:32px;height:32px' alt=''></td>";
      if (this.url.length == 0)
      {
          var align = this.messageType.length > 0 ? this.popupManager.isRTL() ?  "right" : "left": "center";
          html += "<td style='text-align:" + align + ";vertical-align:middle;'>";
          html += "<div id='iframePopupDivInnerFrame' tabindex=\"0\" style='overflow:auto;position:relative;left:0;top:1px;height:" + height + ";'>";
          html += "<table class='urPopFont' style='height:100%;' cellspacing='0' cellpadding='0' border='0'><tr><td><div class='urPopTxtStd urPopFont'>" + this.text + "</div></td></tr></table>";
          html += "</div></td>";
      }
      else
      {
          html += "<td><div id=\"iframePopupDivInnerFrame\" tabindex=\"0\" onfocus=\"thisPopup.innerIFrame.contentWindow.document.getElementById('ptrFocusStart').focus();\">&nbsp;</div></td>";
      }
      html += "</tr></table>";
  }
  else 
  {
      html += "<div id=\"iframePopupDivInnerFrame\" tabindex=\"0\"";
      if (this.url.length > 0)
      {
          html += " onfocus=\"thisPopup.innerIFrame.contentWindow.document.getElementById('ptrFocusStart').focus();\"";
      }
      html += " style=\"overflow:auto;position:relative;top:1px;width:" + width + ";height:" + height + ";\">";
      if (this.url.length == 0)
      {
          html += "<table class='urPopFont' style='height:100%;' cellspacing='0' cellpadding='0' border='0'><tr>";
          html += "<td valign='top' style='padding:16px 22px 16px 22px'><div class='urPopTxtStd urPopFont'>" + this.text + "</div></td>";
          html += "</tr></table>";
      }
      html += "</div>";
  }
  
  if (typeof(this.buttonStyle) == "number" || (typeof(this.buttonStyle) == "string" && this.buttonStyle.length > 0 && this.buttonStyle!= "PTR_NONE"))
  {
      html += '<table id="ptrToolbarArea" style="height:' + (CONSTANTS.bottom - CONSTANTS.borderSize) + 'px;width:100%" cellpadding="0" border="0" cellspacing="0" class="urPopTbarWhl urPopFont" >';
      html += '<tr>';
      
      html += '<td valign="top" nowrap class="urPopWaveBottom"><img alt="" border = "0" style = "height:1px;width:' + CONSTANTS.waveBottom + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td valign="top" nowrap class="urPopWaveMid"><img alt="" border="0" style = "height:1px;width:' + CONSTANTS.waveMid + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td nowrap class="urPopWaveTop" style="width:' + CONSTANTS.waveTop + 'px;">  <img alt="" border = "0" style="height:1px;width:' + CONSTANTS.waveTop + 'px" src="' + ur_system.mimepath + '1x1.gif">';
      
      
      html += '<td valign="middle" align="right" nowrap class="urPopWaveTop">';
      html += '<table id="ptrToolbar" cellpadding="0" border="0" cellspacing="0" class="urPopFont"><tr><td valign="top" nowrap style="padding-top:4px" id="ptrToolbarContent" > ';
      
      html += _getButtonHTML(this.buttonStyle, this.index);
      
      
      html += '</tr></table></td>';
      
      if (ur_system.is508 == false && this.isResizable == true)
      {
          var align = "right";
          var padding = "left";
          if (this.popupManager.isRTL())
          {
              align = "left";
              padding = "right";
          }
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = "urPopWaveTop" valign = "bottom" align = "' + align + '" > ';
          html += '<div id="ptrPopupResizeIconId" class = "urPopFrameResize" onmousedown = "return thisPopup.startDrag(event,true);"><img alt="" src = "' + ur_system.mimepath + '1x1.gif" style = "width:17px;height: 17px "></div>';
      }
      else
      {
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = "urPopWaveTop"><img alt=""  border = "0" style = "height:1px;width:22px" src = "' + ur_system.mimepath + '1x1.gif" > ';
      }
      html += '</table>';
  }
  else
  {
      html += '<table id="ptrToolbarArea" style="height:' + (CONSTANTS.bottom - CONSTANTS.borderSize) + 'px;width:100%" cellpadding="0" border="0" cellspacing="0" class="urPopTbarWhl urPopFont" >';
      html += '<tr>';
      
      html += '<td valign="top" nowrap class=""><img alt="" border = "0" style = "height:1px;width:' + CONSTANTS.waveBottom + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td valign="top" nowrap class=""><img alt="" border="0" style = "height:1px;width:' + CONSTANTS.waveMid + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td nowrap class="" style="width:' + CONSTANTS.waveTop + 'px;">  <img alt="" border = "0" style="height:1px;width:' + CONSTANTS.waveTop + 'px" src="' + ur_system.mimepath + '1x1.gif">';
      
      
      html += '<td valign="middle" align="right" nowrap class="">';
      html += '<table id="ptrToolbar" cellpadding="0" border="0" cellspacing="0" class="urPopFont"><tr><td valign="top" nowrap style="padding-top:4px" id="ptrToolbarContent" > ';
      html += '</tr></table></td>';
      
      if (ur_system.is508 == false && this.isResizable == true)
      {
          var align = "right";
          var padding = "left";
          if (this.popupManager.isRTL())
          {
              align = "left";
              padding = "right";
          }
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = "" valign = "bottom" align = "' + align + '" > ';
          html += '<div id="ptrPopupResizeIconId" class = "urPopFrameResize" onmousedown = "return thisPopup.startDrag(event,true);"><img alt="" src = "' + ur_system.mimepath + '1x1.gif" style = "width:17px;height: 17px "></div>';
      }
      else
      {
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = ""><img alt="" width="22" border = "0" style = "height:1px;width:22px" src = "' + ur_system.mimepath + '1x1.gif" > ';
      }
      html += '</table>';
  }
      
  html += "</div></div><div tabindex=\"0\" onfocus=\"thisPopup.focusTitle();\"></div>";
  html += "</body>";
  
      
      
  if (this.url.length == 0)
      html += "<sc" + "ript>setTimeout(function(){thisPopup.forceInitialize();},0);" + "</sc" + "ript>";
  
  
  html += "</html>";
  
  
  outerIFrameWindow.document.onhelp = function(){return false;};
  outerIFrameWindow.document.write(html);
  outerIFrameWindow.thisPopup = this;
  
  
  if (this.popupManager.IE || navigator.userAgent.indexOf("Firefox") != -1)
  { 
    
    outerIFrameWindow.document.close();    
  }  
}
URPopupWindow.prototype.forceInitialize = function()
{
    this.initialize(this.sourceWindow.ptrDialogObj,false);
}
URPopupWindow.prototype.createIFrame = function(id)
{
    
    
    var iFrame = this.popupManager.getHostWindow().document.getElementById(id);
    if (iFrame == null)
    {
        iFrame = this.popupManager.getHostWindow().document.createElement("IFRAME");
    }
    
    
    iFrame.src = "javascript:void(0)";
    iFrame.setAttribute("frameBorder", "0");
    iFrame.setAttribute("id", id);
    iFrame.setAttribute("name", id);
    iFrame.setAttribute("tabIndex", "-1");
    iFrame.setAttribute("border", "no");
    iFrame.setAttribute("scrolling", "auto");
    iFrame.style.position = "absolute";
    iFrame.style.zIndex = "1001";
    iFrame.style.width = "0px";
    iFrame.style.height = "0px";
    iFrame.style.display = "block";
    iFrame.style.left = "0px";
    iFrame.style.right = "0px";
    iFrame.style.top = -4000;
    iFrame.style.overflow = "auto";
    
    if (!iFrame.parentNode)
      this.popupManager.getHostWindow().document.body.appendChild(iFrame);
    iFrame.src = this.getEmptyHoverUrl();
    return iFrame;
}
URPopupWindow.prototype.enableFocusRect = function(enable)
{
    var innerIFrameWindow = this.innerIFrame.contentWindow;
    try
    {
        var oC={top:innerIFrameWindow.ur_get("ur-topfocus"),bottom:innerIFrameWindow.ur_get("ur-bottomfocus"),left:innerIFrameWindow.ur_get("ur-leftfocus"),right:innerIFrameWindow.ur_get("ur-rightfocus")};
        for (x in oC)
        {
            oC[x].style.display = enable ? "block" : "none";
        }
    }catch(e){}
}
URPopupWindow.prototype.initialize = function(translationObj,resize)
{
    
    if (typeof(translationObj) != "undefined")
    {
        this.initLabels(translationObj);
        
        if (typeof(translationObj.sourceFocusId) == "string")
        {
            this.sourceFocusId = translationObj.sourceFocusId;
        }
    }
    
    var sourceWindow = this.sourceWindow;
    var innerIFrameWindow = null;
    if (this.innerIFrame != null)
    {
        innerIFrameWindow = this.innerIFrame.contentWindow;
        innerIFrameWindow.sourceWindow = sourceWindow;
        
        if (innerIFrameWindow.document.body.className.indexOf("urPopBdyEmp") < 0)
        	innerIFrameWindow.document.body.className += " urPopBdyEmp";
    }
    
    var width = this.getWidth();
    var height = this.getHeight();
    
    var viewportSize = this.popupManager.getViewPortSize(this.popupManager.getHostWindow());
    var scrollOffset = this.popupManager.getScrollOffset(this.popupManager.getHostWindow());
    var modalOffset = CONSTANTS.modalOffset;
    
    if (!this.isResized)
    {
        var currentWidth = this.getWidth();
        var currentHeight = this.getHeight();
        
        if (innerIFrameWindow != null)
        {
            
            this.innerIFrame.style.width = "150px";
            this.innerIFrame.style.height = "150px";
            
            
            if (this.isInitial)
            {
                
                
                
                
                
                if (this.desiredHeight != null)
                    this.innerIFrame.style.height = this.desiredHeight;
                
                if (this.desiredWidth != null)
                    this.innerIFrame.style.width = this.desiredWidth;
            }
            else if (this.popupManager.isRTL())
            {
              this.innerIFrame.style.width = this.desiredWidth;
            }
            
            
            
            if (this.popupManager.isRTL())
            {
                
                this.enableFocusRect(false);
                
                var bg = innerIFrameWindow.document.body.style.backgroundColor;
                innerIFrameWindow.document.body.style.backgroundColor = "transparent";
                innerIFrameWindow.document.body.style.backgroundColor = bg;
            }
            
            var pageSize = this.popupManager.getPageSize(innerIFrameWindow.document);
            
            if (this.popupManager.isRTL())
            { 
                this.enableFocusRect(true);
            }
            
            pageSize.height += 21 + 29 + 4;
	        pageSize.width += 4; 
            
	        width = pageSize.width;
	        height = pageSize.height;
	    }
        
        if (this.messageType.length > 0)
            width += CONSTANTS.typeLeft;
        
        
        
        if (this.isInitial)
        {
            if (this.desiredHeight != null)
                height = Math.max(height,parseInt(this.desiredHeight));
            
            if (this.desiredWidth != null)
                width  = Math.max(width,parseInt(this.desiredWidth));
        }
        
        
        height = Math.min(height,viewportSize.height - modalOffset);
        width = Math.min(width,viewportSize.width - modalOffset);    
        
        
        height = Math.max(height,currentHeight);
        width = Math.max(width,currentWidth);
        
	      
        height = Math.max(height,21 + 29 + 4 + 150);
        width = Math.max(width,4 + 160);        
        
        this.setWidth(width);
        this.setHeight(height);
        
        if (innerIFrameWindow != null)
        {
            
            var innerBody = innerIFrameWindow.document.body;
            innerIFrameWindow.document.body.scroll = "auto";
              
            var sw = innerBody.scrollWidth;
            var cw = innerBody.clientWidth;
            var ow = innerBody.offsetWidth;
            
            var sh = innerBody.scrollHeight;
            var ch = innerBody.clientHeight;
            var oh = innerBody.offsetHeight;
            
            if (ch < sh && this.isInitial)
            {
               
                width += 21;
                this.setWidth(width);
                
                if (!this.popupManager.IE)
                {
                    height += 1;
                    this.setHeight(height);
                }
                this.updateScrollBars();
            }
            
            
            
        }
    }   
    
    var position = this.getPosition();
    
    var left = position.left;
    var right = position.right;
    var top = position.top;
    
    if (this.isInitial)
    {
       
      
	    left = this.initLeft;
	    right = this.initRight;
	    top = this.initTop;
	    
	    if (left == null)
        left = scrollOffset.x  + viewportSize.width / 5 + this.index * modalOffset;
        
        
      if (right == null)
        right = scrollOffset.x  + viewportSize.width  / 5 + this.index * modalOffset;
           
      if (top == null)
        top = scrollOffset.y  + viewportSize.height  / 5  + this.index * modalOffset;
        
            
    }
    
    
    if (!this.isMoved)
    {
  
      var bottomRight = scrollOffset;
      bottomRight.x += viewportSize.width - modalOffset/2;
      bottomRight.y += viewportSize.height - modalOffset/2;
          
      if (right + width > bottomRight.x)
          right = bottomRight.x - width- modalOffset/2;
      
      if (left + width > bottomRight.x )
          left = bottomRight.x - width- modalOffset/2;
      
    if (top + height > bottomRight.y )
        top = bottomRight.y  - height;
	
	}
	
	this.setPosition(left,right,top);
    
  if (resize == false && this.index == this.popupManager.getPopups().length - 1)
  {
      
      this.popupManager.getPopups()[this.popupManager.getPopups().length-1].focusDefaultElement(translationObj);
  }  
  
  if (innerIFrameWindow != null)
      this.createFocusHelpers();
  
  if (this.isInitial)
  {
      this.popupManager.focusPopup(null);
      
      var that = this;
      var closeCallback = function(event)
      {
          if (!event)
              event = that.outerIFrame.contentWindow.event;
          
          if (!event && innerIFrameWindow)
              event = innerIFrameWindow.event;    
          
          
          if (event && event.keyCode == 27 && that.hasCloseButton)
          {
              if (event.preventDefault)
                event.preventDefault();
                
              that.popupManager._closePopup(that,"CANCEL");   
          }
      }
      
      helperAddEventListener(this.outerIFrame.contentWindow.document,"keypress", closeCallback);
      
      if (innerIFrameWindow)
          helperAddEventListener(innerIFrameWindow.document,"keypress", closeCallback);    
  }
  
  
  if (this.innerIFrame)
      this.innerIFrame.contentWindow.document.body.style.overflow = "";
      
  
  if (this.innerIFrame)
      this.innerIFrame.style.overflow = "";
  if (this.outerIFrame)
      this.outerIFrame.style.overflow = "";
  
  var that = this;
  setTimeout(function()
  {
      if (that.innerIFrame)
        that.innerIFrame.style.overflow = "auto";
      if (that.outerIFrame)
        that.outerIFrame.style.overflow = "auto";
      
      
      if (that.innerIFrame)
        that.innerIFrame.contentWindow.document.body.style.overflow = "auto";
      
  },100);
  
  
  this.isInitial = false;
  return innerIFrameWindow;
}
URPopupWindow.prototype.updateScrollBars = function()
{
  
  if (!this.innerIFrame)
    return;
  
  var innerBody = this.innerIFrame.contentWindow.document.body;
  
  var sw = innerBody.scrollWidth;
  var cw = innerBody.clientWidth;
  var ow = innerBody.offsetWidth;
  
  var sh = innerBody.scrollHeight;
  var ch = innerBody.clientHeight;
  var oh = innerBody.offsetHeight;
  
  var scroll = "no";
  if (sw > cw || sh > ch)
      scroll = "auto";
  
  this.innerIFrame.contentWindow.document.body.scroll = scroll;
  
}
URPopupManager.prototype._getIndexOfPopup = function(popup)
{
    for (var x = 0; x < this.getPopups().length; x++)
    {
        if (this.getPopups()[x] == popup)
            return x;
    }
    return null;
}
URPopupWindow.prototype.toggleMinMax = function()
{	
    
  
  this.isMoved = true;
  
  var outerWindow = this.outerIFrame.contentWindow;
  var iframePopupDivHeaderTextObj =  outerWindow.document.getElementById("iframePopupDivHeader");
  var titleAnimationDiv = this.popupManager.getHostWindow().document.getElementById("titleAnimationDiv");
  titleAnimationDiv.innerText = outerWindow.document.getElementById("iframePopupDivHeaderText").innerText;
  var height = iframePopupDivHeaderTextObj.clientHeight;
  
  var bodyLeft = this.popupManager.getHostWindow().document.body.scrollLeft;
  var bodyRight = this.popupManager.getHostWindow().document.body.scrollWidth - document.body.clientWidth - document.body.scrollLeft;
  var bodyWidth = this.popupManager.getHostWindow().document.body.clientWidth;
  var bodyTop = this.popupManager.getHostWindow().document.body.scrollTop;
  
  var position = this.getPosition();
  
  var popupRight = position.right;
	var popupTop = position.top;
	var popupLeft = position.left;
	var popupWidth = null;
	
	if (this.isMaximized)
	{
		popupRight = parseInt(this.midRight);
		popupTop = parseInt(this.midTop);
		popupLeft = parseInt(this.midLeft);
		popupWidth = parseInt(this.midWidth);
		
	}
	else
	{
	    this.midWidth = this.getWidth();
	    this.midHeight = this.getHeight();
	}
		
    titleAnimationDiv.style.display = "block";
    titleAnimationDiv.style.zIndex = this.outerIFrame.style.zIndex + 10;
    
    this.animateMinMax(titleAnimationDiv, 20, popupLeft,  bodyLeft, popupRight, bodyRight, popupWidth, bodyWidth, popupTop, bodyTop, height); 
    
}
URPopupWindow.prototype.animateMinMax = function( titleAnimationDiv, countAnimation, popupLeft, bodyLeft, popupRight, bodyRight, popupWidth, bodyWidth, popupTop, bodyTop, height)
{
  var left = 0;
  var right = 0;
  var width = 0;
  var top = 0;
  
  var factor = this.isMaximized == false ? 20-countAnimation: countAnimation;
  
  left = popupLeft;
  right = popupRight;
      
  if (countAnimation > 0)
  {
      left = popupLeft - parseInt((popupLeft - bodyLeft) / 20) * factor;
      right = popupRight - parseInt((popupRight - bodyRight) / 20) * factor;
  }
  else if (this.isMaximized == false)
  {
      left = bodyLeft;
      right = bodyRight;
  }
  	
  
  width = popupWidth;
  if (countAnimation > 0)
  {
      width = popupWidth - parseInt((popupWidth - bodyWidth) / 20) * factor;
  }
  else if (this.isMaximized == false)
  {
      width = bodyWidth;
  }
  
  
  top = popupTop;
  if (countAnimation > 0)
  {
      top = popupTop - parseInt((popupTop - bodyTop) / 20) * factor;
  }
  else if (this.isMaximized == false)
  {
      top = bodyTop;
  }
  
  titleAnimationDiv.style.top = top + "px";
  titleAnimationDiv.style.left = left + "px";
  titleAnimationDiv.style.right = right + "px";
  if (width)
    titleAnimationDiv.style.width = width + "px";
  titleAnimationDiv.style.height = height + "px";
      
  countAnimation--;
  
  if (countAnimation >= 0)
  {
      var that = this;
      window.setTimeout(function()
      {
          that.animateMinMax( titleAnimationDiv, countAnimation, popupLeft, bodyLeft, popupRight, bodyRight,
              popupWidth, bodyWidth, popupTop, bodyTop, height); 
      }
      , 0);
  }
  else
  {
      var that = this;
      window.setTimeout(function()
      {
        var outerWindow = that.outerIFrame.contentWindow;
        var toggleIcon = outerWindow.document.getElementById("ptrPopupToggleIconId");
        var resizeIcon = outerWindow.document.getElementById("ptrPopupResizeIconId");
          
        titleAnimationDiv.style.display = "none";
        
    	  if (that.isMaximized == false)
    	  {
  		    that.isMaximized = true;
  	       
  	      var position = that.getPosition();
  	        	
	        that.midLeft = position.left;
	        that.midRight = position.right;
	        that.midTop = position.top;
        	
	        resizeIcon.className = "urPopFrameResizeHide";
	        toggleIcon.className = "urPopFrameMid";
        		        	
	        that.maximize();
        	
	        that.autoResizeHandler = function()
	        {
	            that.maximize();
	        }
        	
	        helperAddEventListener(that.popupManager.getHostWindow(),"resize",that.autoResizeHandler);
  	        	
    	  }
        else if (that.isMaximized == true)
        {
      	  that.isMaximized = false;
      	  resizeIcon.className = "urPopFrameResize";
      	  toggleIcon.className = "urPopFrameMax";
        	
      	  that.setPosition(that.midLeft,that.midRight,that.midTop);
      	  that.setWidth(that.midWidth);
      	  that.setHeight(that.midHeight);
        	
      	  if (that.autoResizeHandler)
      	  {
      	      helperRemoveEventListener(that.popupManager.getHostWindow(),"resize",that.autoResizeHandler);
      	      that.autoResizeHandler = null;
      	  }
        }
         
      }
      , 0);
      
  }
}
URPopupWindow.prototype.maximize = function()
{
    
  var hostBody = this.popupManager.getHostWindow().document.body;
  
  var viewPortSize = this.popupManager.getViewPortSize(this.popupManager.getHostWindow());
  var pageSize = this.popupManager.getPageSize(this.popupManager.getHostWindow().document);
    
  var width = viewPortSize.width;
	var height = viewPortSize.height;
	var top = hostBody.scrollTop;
	var left = hostBody.scrollLeft;
  var right = hostBody.scrollWidth - hostBody.clientWidth - hostBody.scrollLeft;
	
	
	this.setPosition(left,right,top);
	this.setWidth(width);
	this.setHeight(height);
	
}
URPopupManager.prototype.ptrResizeModalDialog = function(popupId, style, translationObj)
{
    
    if (typeof(translationObj) != "object")
    	translationObj = new Object();
    
    
    var currentIndex = this.getPopups().length - 1;
    
    
    if (typeof(popupId) == "string" && popupId.length > 0)
    {
        for (var i = 0; i < this.getPopups().length; i++)
        {
            if (this.getPopups()[i].popupId == popupId)
            {
                currentIndex = i;
                translationObj.popupId = popupId;
                break;
            }
        }
    }
	var thePopup = this.getPopups()[currentIndex];
    if (thePopup.innerIFrame == null)
        return ;
    
    
    var ptrBodyLoadingObj = thePopup.innerIFrame.contentWindow.document.body;
    if (ptrBodyLoadingObj.id == "ptrBodyLoading")
        return;
    
   
   	
    if (thePopup.innerIFrame.contentWindow.document.body.className.indexOf("urPopBdyEmp") < 0)
    	thePopup.innerIFrame.contentWindow.document.body.className += " urPopBdyEmp";
    
    
    if (thePopup.innerIFrame != null)
    {
        
        thePopup.createFocusHelpers();
    }
		
	
    if (typeof(style) == "number")
    {
        if (typeof(thePopup.style) != "number" || thePopup.style != style)
        {
            thePopup.style = style;
            var html = "";
            for (var i = 0; i < style; i++)
            {
                html += _createButton(this.getPopups().length - 1, "BUTTON_" + i, "");
            }
           
            thePopup.outerIFrame.contentWindow.document.getElementById("ptrToolbarContent").innerHTML = html;
        }
    }
    
    
    var imgObj = thePopup.outerIFrame.contentWindow.document.getElementById("ptrPopupToggleIconId");
    if (imgObj == null || thePopup.isMaximized == false)
        this.ptrInitModalDialog(translationObj, true);
        
    if (thePopup.isMaximized)
      thePopup.updateScrollBars();    
    
}
URPopupWindow.prototype.buttonClick = function(buttonDomRef,keyCode)
{
  if (buttonDomRef.getAttribute("status") == "enabled")
    this.popupManager._closePopup(this,keyCode);
}
function _createButton(index, keyCode, text)
{
    var html = '<span><a tabindex="0" href="javascript:void(0);" onmouseover="window.status=\'\';return true;" onfocus="window.status=\'\';return true;" onkeypress="if(event.keyCode==13||event.keyCode==32){thisPopup.buttonClick(this,\'' + keyCode + '\');};" ';
    html += 'onClick="thisPopup.buttonClick(this,\'' + keyCode + '\');" ';
    html += 'class="urBtnStd urPopFont" ';
    html += 'status="enabled" ';
    html += 'id="' + keyCode + '" title="' + text;
    if (ur_system.is508 == true)
        html += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
    html += '">'+text;
    html += '</a><span style="width:2px;">&nbsp;</span></span>';
    
    
    return html;
    var classes = "urPopTbarBtnStd urPopFont";
       
    var html = 	'<span onmousedown="event.cancelBubble=true" class="urPopTbarItmBtn" id="' + keyCode + '-r" show="true" cancollapse="false" > ';
    html += '<a href="javascript:void(0);" onmouseover="window.status=\'\';return true;" onkeypress="if(event.keyCode==13||event.keyCode==32){this.click();};" ';
    html += 'onClick="thisPopup.popupManager._closePopup(thisPopup,\'' + keyCode + '\');" ';
    
    html += 'class="' + classes + '" ';
    html += 'status="enabled" ';
    html += 'id="' + keyCode + '" title="' + text;
    
    if (ur_system.is508 == true)
        html += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
    
    html += '">';
    html += '<span style="white-space:nowrap;">' + text + '</span>';
    html += '</a>';
    html += '</span>';
   
    
    return html;
}
URPopupWindow.prototype._ptrUpdateButton = function(buttonDefinition, buttonDomRef)
{
  
  if (typeof(buttonDefinition) == "undefined" || buttonDomRef == null)
  	return;
  
  var text = "";
  var tooltip = "";
  
  if (typeof(buttonDefinition.title) != "undefined" || typeof(buttonDefinition.tooltip) != "undefined")
  {
    tooltip = typeof(buttonDefinition.title) != "undefined" ? buttonDefinition.title : buttonDefinition.tooltip;
  }
  
  if (ur_system.is508 == true)
  {
      
      text = buttonDefinition.text;
      
      
      text += " - " + (ur_txt[ur_language].SAPUR_B?ur_txt[ur_language].SAPUR_B:ur_txt[ur_language].SAPUR_BUTTON);
      
      
      if (tooltip != "" && tooltip != buttonDefinition.text)
        text += " - " + tooltip;
      
      
      if (typeof(buttonDefinition.enabled) == "boolean" && !buttonDefinition.enabled)
      {
        text += " - " + ur_txt[ur_language].SAPUR_DISABLED;
      }
      else
      {
        text += " - " + ur_txt[ur_language].SAPUR_B_TUT;
      }
  }
  else
  {
      if (tooltip)
        text = tooltip;
      else
        text = buttonDefinition.text;
  }
  
  buttonDomRef.title = text;
  
  var html = "";
  if (typeof(buttonDefinition.image) == "object" && typeof(buttonDefinition.image.src) == "string")
  {
    html = '<img border="0" align="absmiddle" src=   "' + buttonDefinition.image.src + '"alt = "';
    if (typeof(buttonDefinition.image.alt) == "string")
    {
        html += buttonDefinition.image.alt;
    }
    else
    {
        html += buttonDefinition.image.src;
    }
    html += '">&nbsp;';
  }
  
  
  if (typeof(buttonDefinition.enabled) == "boolean")
  {
    
    if (!buttonDefinition.enabled)
    {
      buttonDomRef.className = "urBtnStdDsbl urPopFont";
      buttonDomRef.setAttribute("status", "disabled");
      buttonDomRef.setAttribute("tabIndex", "-1");
    }
    else
    {
      buttonDomRef.className = "urBtnStd urPopFont";
      buttonDomRef.setAttribute("status", "enabled");
      buttonDomRef.setAttribute("tabIndex", "0");
    }
    
  }
  if (buttonDefinition.text)
    html += buttonDefinition.text;
  
  buttonDomRef.innerHTML = html;
}
URPopupWindow.prototype.initLabels = function(translationObj)
{
    
  if (typeof(translationObj) == "undefined")
      return;
  
  var popupWindow = this.outerIFrame.contentWindow;
  if (typeof(this.buttonStyle) == "number")
  {
    for (var i = 0; i < this.buttonStyle; i++)
    {
     this._ptrUpdateButton(translationObj["BUTTON_" + i], popupWindow.document.getElementById("BUTTON_" + i));
    }
  }
  else
  {
    if (popupWindow.document.getElementById("ABORT"))
      this._ptrUpdateButton(translationObj.ABORT, popupWindow.document.getElementById("ABORT"));
    
    if (popupWindow.document.getElementById("CLOSE"))
      this._ptrUpdateButton(translationObj.CLOSE, popupWindow.document.getElementById("CLOSE"));
    
    if (popupWindow.document.getElementById("RETRY"))
      this._ptrUpdateButton(translationObj.RETRY, popupWindow.document.getElementById("RETRY"));
    
    if (popupWindow.document.getElementById("IGNORE"))
      this._ptrUpdateButton(translationObj.IGNORE,popupWindow.document.getElementById("IGNORE"));
    
    if (popupWindow.document.getElementById("OK"))
      this._ptrUpdateButton(translationObj.OK,  popupWindow.document.getElementById("OK"));
    
    if (popupWindow.document.getElementById("YES"))
      this._ptrUpdateButton(translationObj.YES, popupWindow.document.getElementById("YES"));
    
    if (popupWindow.document.getElementById("NO"))
      this._ptrUpdateButton(translationObj.NO,  popupWindow.document.getElementById("NO"));
      
    if (popupWindow.document.getElementById("CANCEL"))  
      this._ptrUpdateButton(translationObj.CANCEL, popupWindow.document.getElementById("CANCEL"));
  }
  
  var titlebar = popupWindow.document.getElementById("iframePopupDivHeaderText");
  
	
  if (typeof(translationObj.title) != "undefined")
  {
    titlebar.innerHTML = translationObj.title;
    if (ur_system.is508 == true)
    {
       titlebar.title = ur_txt[ur_language].SAPUR_POPUP.replace("{0}", translationObj.title);
    }
    else
    {
      titlebar.title = translationObj.title;
    }
  }
  if (ur_system.is508 == true)
  {
    if (typeof(translationObj.accessibilityDescribtion) != "undefined")
    {
      titlebar.title = ur_txt[ur_language].SAPUR_POPUP.replace("{0}", translationObj.accessibilityDescribtion);
    }
    if (typeof(translationObj.accessibilityCancelButtonText) != "undefined")
    {
      var cancelButton = popupWindow.document.getElementById("headerCancel");
      
      if (cancelButton)
          cancelButton.title = translationObj.accessibilityCancelButtonText 
                             + " - " 
                             + ur_txt[ur_language].SAPUR_B 
                             + " - " 
                             + ur_txt[ur_language].SAPUR_B_TUT;
    }
    if (typeof(translationObj.accessibilityMessageIconText) != "undefined")
    {
      
      var messageIcon = popupWindow.document.getElementById("messageIcon");
      
      if (messageIcon)
          messageIcon.title = translationObj.accessibilityMessageIconText 
                              + " - " 
                              + ur_txt[ur_language].SAPUR_IMG;
    }
  }
}
URPopupManager.prototype.ptrSetTitle = function(popupId, title)
{
    var currentIndex = null;
    for (var i = 0; i < this.getPopups().length; i++)
    {
        if (this.getPopups()[i].popupId == popupId)
        {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex == null)
        return;
        
    this.getPopups()[currentIndex].initLabels({title: title});
}
URPopupManager.prototype.ptrGetWinRefById = function(popupId)
{
  var urlWindow = null;
  
  for (var i = 0; i < this.getPopups().length; i++)
  {
    if (popupId == this.getPopups()[i].popupId)
    {
      urlWindow = this.getPopups()[i].innerIFrame.contentWindow;
      break;
    }
  }
  return urlWindow;
}
URPopupManager.prototype.ptrInitDialogByWindow = function(urlWindow)
{
    this.ptrInitModalDialog( {popupId:ptrGetPopupId(urlWindow)} );
}
URPopupManager.prototype.ptrInitDialogById = function(popupId)
{
    this.ptrInitModalDialog( {popupId: popupId} );
}
URPopupManager.prototype.ptrGetPopupId = function(urlWindow)
{
    
  var popupId = null;
  for (var i = 0; i < this.getPopups().length; i++)
  {
      
    if (urlWindow == this.getPopups()[i].innerIFrame.contentWindow)
    {
      popupId = this.getPopups()[i].popupId;
      break;
    }
  }
  return popupId;
}
URPopupManager.prototype.getPopupById = function(id)
{
    
  var popup = null;
  for (var i = 0; i < this.getPopups().length; i++)
  {
      
    if (id == this.getPopups()[i].popupId)
    {
      return this.getPopups()[i];
    }
  }
  return null;
}
URPopupManager.prototype.ptrInitModalDialog = function(translationObj, resize)
{
	
	
	if (this.getPopups().length == 0)
        return ;
    
  var currentIndex = this.getPopups().length-1;
  
  if (typeof(translationObj) != "undefined" && translationObj != null)
  {
    if (typeof(translationObj.popupId) != "undefined")
    {
      for (var i = 0; i < this.getPopups().length; i++)
      {
        if (this.getPopups()[i].popupId == translationObj.popupId)
        {
          currentIndex = i;
          
          break;
        }
      }
    }
  }
    
  if (typeof(resize) == "undefined")
    resize = false;
    
  var popup = this.getPopups()[currentIndex];
  
  popup.initialize(translationObj,resize);
  
 	var innerIFrameWindow = popup.innerIFrame.contentWindow;
 	innerIFrameWindow.sourceWindow = popup.sourceWindow;
 	return innerIFrameWindow;
}
URPopupWindow.prototype.getWidth = function()
{
  var width = parseInt(this.outerIFrame.style.width);
  if (isNaN(width))
    width = 0;
  return width;
}
	
URPopupWindow.prototype.getHeight = function()
{
  var height = parseInt(this.outerIFrame.style.height);
  if (isNaN(height))
      height = 0;
  return height;
    
}
URPopupWindow.prototype.getPosition = function()
{
  var left = parseInt(this.outerIFrame.style.left);
  if (isNaN(left))
    left = 0;
  
  var right = parseInt(this.outerIFrame.style.right);
  if (isNaN(right))
    right = 0;
  
  var top = parseInt(this.outerIFrame.style.top);
  if (isNaN(top))
    top = 0;
  
  return {left:left,right:right,top:top};
}
URPopupWindow.prototype.setHeight = function(height)
{
  height = Math.max(height, 21 + 29 + 4 + 90); 
  
  var outerWindow = this.outerIFrame.contentWindow;
  var outerBorderDiv = outerWindow.document.getElementById("iframePopupDivOuterFrame");
  var innerBorderDiv = outerWindow.document.getElementById("iframePopupDivInnerFrame");
  
  this.outerIFrame.style.height = height + "px";
  
  outerWindow.document.getElementById("urPopFrame2").style.height = (height - 4) + "px";
  
  outerBorderDiv.style.height = (height - 2) + "px";
  innerBorderDiv.style.height = (height - 1 - CONSTANTS.top - CONSTANTS.bottom) + "px";
  if (this.innerIFrame != null)
  {
    this.innerIFrame.style.height = (height - CONSTANTS.top - CONSTANTS.bottom) + "px";
  }
}
URPopupWindow.prototype.setWidth = function( width)
{
    
  width = Math.max(width,this.getToolbarWidth());
  width = Math.max(width,210);
      
  var outerWindow = this.outerIFrame.contentWindow;
  var outerBorderDiv = outerWindow.document.getElementById("iframePopupDivOuterFrame");
  var innerBorderDiv = outerWindow.document.getElementById("iframePopupDivInnerFrame");
  var iframePopupDivHeaderTextObj = outerWindow.document.getElementById("iframePopupDivHeaderText");
  
  this.outerIFrame.style.width = width + "px";
  outerBorderDiv.style.width = width + "px";
  iframePopupDivHeaderTextObj.style.width = (width - 50)  + "px";
  
  if (!this.popupManager.IE)
  {
    outerBorderDiv.style.width = (width - 2) + "px";
    outerWindow.document.getElementById("urPopFrame2").style.width = (width - 4) + "px";
  }
  
  
  if (this.innerIFrame)
  {
	  var innerIFrameStyle = this.innerIFrame.style;
    if (this.messageType.length == 0)
    {
      innerIFrameStyle.width = (width - (CONSTANTS.left + CONSTANTS.right)) + "px";
        
    }
    else
    {
      if (this.popupManager.isRTL())
      {
        innerIFrameStyle.width = (width- CONSTANTS.left	- CONSTANTS.typeRight) + "px";
      }
      else
      {
    	  innerIFrameStyle.width = (width - CONSTANTS.right - CONSTANTS.typeLeft) + "px";
      }
    }
  }
  else 
  {
      
    var innerWidth = width - CONSTANTS.left - CONSTANTS.right;
    if (this.messageType.length > 0)
    {
      if (this.popupManager.isRTL())
      {
        innerBorderDiv.style.width = (innerWidth - CONSTANTS.typeRight) + "px";
      }
      else
      {
        innerBorderDiv.style.width = (innerWidth - CONSTANTS.typeLeft) + "px";
      }
    
    }
    else
    {
      innerBorderDiv.style.width = innerWidth + "px";
        
    }
      
  }
}
URPopupManager.prototype.focusTitle = function(popupId)
{
  for (var x = 0; x < this.getPopups().length; x++)
  {
    if (this.getPopups()[x].popupId == popupId)
    {
      return this.getPopups()[x].focusTitle();
    }    
  }
  return false;
}
URPopupWindow.prototype.focusTitle = function()
{
  try
  {
    this.outerIFrame.contentWindow.document.getElementById("iframePopupDivHeader").focus();
  }
  catch (e)
  {
    return false;
  }          
  return true;
}
URPopupWindow.prototype.focusDefaultElement = function(obj)
{
	
	if (ur_system.is508)
	{
	  this.focusTitle();
	  return;
	}
	
  var outerWindow = this.outerIFrame.contentWindow;
  var focusId = "iframePopupDivHeader";
  
  if (!obj)
    return;
  	
	if (typeof(obj.applFocusId) != "undefined")
	{
    focusId = obj.applFocusId;
    try
    {
        this.innerIFrame.contentWindow.document.getElementById(focusId).focus();
    }
    catch (e)
    {
        outerWindow.document.getElementById("iframePopupDivHeader").focus();
    }
  }
  else if (typeof(obj.defaultFocusId) != "undefined")
  {
    focusId = obj.defaultFocusId;
    try
    {
        outerWindow.document.getElementById(focusId).focus();
    }
    catch (e)
    {
        
        try
    	{
		if (outerWindow.document.getElementById("iframePopupDivHeader").focus)
          		outerWindow.document.getElementById("iframePopupDivHeader").focus();
        } catch (e) {}
    }
  }
  
}
function _canFocus(domElement)
{
   if (domElement == null)
      return false;
  if (!domElement.tagName)
      return false;
      
  var tag = "," + domElement.tagName + ",";
  
  if ((tag == ",INPUT,") && (domElement.type == "hidden" || domElement.disabled))
     return false;
  
  var search = ",A,BODY,BUTTON,FRAME,IFRAME,INPUT,ISINDEX,OBJECT,SELECT,TEXTAREA,";
  
  if (!domElement.getAttribute)
      return false;
  
  if (search.indexOf(tag) >  -1)
  {   
      return (parseInt(domElement.getAttribute("tabIndex")) >= 0);
  }
      
  if (domElement.getAttribute("ti") != null)
  {
      return (parseInt(domElement.getAttribute("ti")) >= 0);
  }
  return false;
}
URPopupWindow.prototype.focusLastElement = function()
{
  try
  {
    
    if(this._findChildFocus(this.outerIFrame.contentWindow.document.getElementById('ptrToolbar'))==false)
    {
        this.focusElement(this.innerIFrame.contentWindow.document.getElementById('ptrFocusEnd').previousSibling,false);
    }
 
  }
  catch(e){};
   
}
URPopupWindow.prototype._findChildFocus = function(ele)
{
  var hasFocus = false;
  for (var i = 0; hasFocus == false && i < ele.childNodes.length; i++)
  {
    if (_canFocus(ele.childNodes.item(i)) == true)
    {
      ele.childNodes.item(i).focus();
      return true;
    }
    hasFocus = this._findChildFocus(ele.childNodes.item(i));
  }
  return hasFocus;
}
URPopupWindow.prototype.focusElement = function(ele,next)
{
   
  do
  {
    if (ele.id != 'urFrames' && ele.id != 'sapPopup_Event')
    {    
       
      
      if (_canFocus(ele))
      {
        ele.setAttribute("tabIndex",0);
        try
        {
          ele.focus();
          return true;
        }
        catch (e){};
      }
                  
      var x = next? ele.firstChild:ele.lastChild;
    
      if (x && this.focusElement(x,next))
         return true;   
    }
    
    if (next)
        ele = ele.nextSibling;
    else
        ele = ele.previousSibling;    
     
  }
  while (ele != null);
  
  return false;
}
URPopupWindow.prototype.createFocusHelpers = function()
{
  var documentBody = this.innerIFrame.contentWindow.document.body;
  var spanFocusStart2 = null;
  if (this.innerIFrame.contentWindow.document.getElementById("ptrFocusStart2") == null)
  {
      
    spanFocusStart2 = this.innerIFrame.contentWindow.document.createElement("SPAN");
    spanFocusStart2.id = "ptrFocusStart2";
    spanFocusStart2.tabIndex = "0";
    var that = this;
    helperAddEventListener(spanFocusStart2,"focus",function(){try{that.outerIFrame.contentWindow.document.getElementById('iframePopupDivHeader').focus();}catch(e){};});
    documentBody.insertBefore(spanFocusStart2, documentBody.childNodes[0]);
  }
  
  if (this.innerIFrame.contentWindow.document.getElementById("ptrFocusStart") == null)
  {
      
    var spanFocusStart = this.innerIFrame.contentWindow.document.createElement("SPAN");
    spanFocusStart.id = "ptrFocusStart";
    spanFocusStart.tabIndex = "0";
    var that = this;
    helperAddEventListener(spanFocusStart,"focus",function(){try{that.focusElement(spanFocusStart2.nextSibling,true);}catch(e){};});
    documentBody.insertBefore(spanFocusStart, documentBody.childNodes[0]);
  }
  
  if (this.innerIFrame.contentWindow.document.getElementById("ptrFocusEnd") == null)
  {
    var spanFocusEnd = this.innerIFrame.contentWindow.document.createElement("SPAN");
    spanFocusEnd.id = "ptrFocusEnd";
    spanFocusEnd.tabIndex = "0";
    
    var that = this;
    var method = function()
    {
      try
      {
        
        if( that._findChildFocus(that.outerIFrame.contentWindow.document.getElementById('ptrToolbar'))==false)
        {
            that.outerIFrame.contentWindow.document.getElementById('iframePopupDivHeader').focus();
        }
     
      }
      catch(e){};
   }
    
   helperAddEventListener(spanFocusEnd,"focus",method);
   documentBody.appendChild(spanFocusEnd);
  }
   
}
URPopupManager.prototype.ptrGetSourceWindow = function(urlWindow)
{
    if (this.getPopups().length == 0)
        return urlWindow;
    var currentIndex = this.getPopups().length - 1;
    if (typeof(urlWindow) != "undefined")
    {
        for (var i = 0; i < this.getPopups().length; i++)
        {
            if (urlWindow == this.getPopups()[i].innerIFrame.contentWindow)
            {
                currentIndex = i;
            }
        }
    }
    
    return this.getPopups()[currentIndex].sourceWindow;
}
URPopupWindow.prototype.getPopupStyles = function()
{
  
  
  var abs = this.sourceWindow.location.href;
  
  var stylepathUrl = ur_system.stylepath;
  var stylepathArray = ur_system.stylepath.split("/");
  if (stylepathArray[stylepathArray.length - 2] != "ur")
  {
      stylepathUrl += "ur/";
  }
  var stylesheet = stylepathUrl + "ur_dia_" + ur_system.browser_abbrev + ".css";
  
  return this.relativeToAbsolutePath(stylesheet,abs);
}
URPopupWindow.prototype.getFoundationStyles = function()
{
  
  
  var abs = this.sourceWindow.location.href;
  
  var stylepathUrl = ur_system.stylepath;
  var stylepathArray = ur_system.stylepath.split("/");
  if (stylepathArray[stylepathArray.length - 2] != "ur")
  {
      stylepathUrl += "ur/";
  }
  
  var stylesheet = stylepathUrl + "ur_" + ur_system.browser_abbrev + ".css";
  
  return this.relativeToAbsolutePath(stylesheet,abs);
}
URPopupWindow.prototype.getEmptyHoverUrl = function()
{
    var abs = this.sourceWindow.location.href;
    var rel = ur_system.emptyhoverurl;
    
    return this.relativeToAbsolutePath(rel,abs);
}
URPopupWindow.prototype.relativeToAbsolutePath = function(relativeURL,baseURL)
{
    
  if(relativeURL.indexOf("http:/"+"/") !=-1 ) return relativeURL;
	if(relativeURL.indexOf("https:/"+"/") !=-1) return relativeURL;    
  if(relativeURL.indexOf("file:/"+"/") !=-1) return relativeURL;    
    
  if (relativeURL.indexOf("./") == -1) 
  {
	    
    if (baseURL.indexOf("?")!=-1) 
    {
      baseURL = baseURL.substring(0,baseURL.indexOf("?"));
    }
    
    if(relativeURL.indexOf("/") == 0) 
    {
      
      var urlParts = baseURL.split("/"+"/");
      var domain = urlParts[1].substring(0,urlParts[1].indexOf("/"));
      var baseURLPath = urlParts[0] + "/"+"/" + domain;
      
      return baseURLPath + relativeURL;
    }
    else
    {
      
      var baseURLPath = baseURL.substring(0,baseURL.lastIndexOf("/")+1);
      return baseURLPath + relativeURL;
    }
	    
  }
    
    var baseURLPath = baseURL;
    
    if (baseURLPath.indexOf("?") != -1) 
      baseURLPath = baseURLPath.substring(0,baseURLPath.indexOf("?"));
            
    baseURLPath = baseURLPath.substring(0,baseURLPath.lastIndexOf("/"));
    
    var relativeURLDots = relativeURL.substring(0,relativeURL.lastIndexOf("./")+2);
    
    while(relativeURLDots.lastIndexOf("..")>-1) 
    { 
      baseURLPath = baseURLPath.substring(0,baseURLPath.lastIndexOf("/"));
      relativeURLDots = relativeURLDots.substring(0,relativeURLDots.lastIndexOf(".."))+"/";
    }
  
    if (relativeURLDots.lastIndexOf("./")>-1) 
    {
        
      relativeURLDots = relativeURLDots.substring(0,relativeURLDots.lastIndexOf("./"))+"/";
      if (relativeURLDots.lastIndexOf("./")>-1) 
      {
        showError (relativeURL + " is not a valid relative url.");
      }
    }
    
    strNewAbsPath = baseURLPath + relativeURLDots + relativeURL.substring(relativeURL.lastIndexOf("./")+2,relativeURL.length);
    return strNewAbsPath;
}
URPopupManager.prototype.ptrCloseModalDialog = function(popupId, okCode)
{
  if (typeof(okCode) == "undefined")
  {
    okCode = null;
  }
  var currentIndex = this.getPopups().length - 1;
  if (typeof(popupId) != "undefined" && popupId.length > 0)
  {
    for (var i = 0; i < this.getPopups().length; i++)
    {
      if (this.getPopups()[i].popupId == popupId)
      {
        currentIndex = i;
      }
    }
  }
  this._closePopup(this.getPopups()[currentIndex],okCode);
}
URPopupManager.prototype._closePopup = function(thePopup,okCode)
{
  var close = (okCode == null)? true : thePopup.callback("ptrOnHideModalDialog",[okCode]);
  if (close == false)
  	return;
  
  if (thePopup.innerIFrame)
  {
    
    try
    {
        thePopup.innerIFrame.contentWindow.sapUrMapi_PopupMenu_hideAll();
    }
    catch (e)
    {
    }
  }
  
  if (thePopup.autoResizeHandler)
  {
    helperRemoveEventListener(this.getHostWindow(),"resize",thePopup.autoResizeHandler);
    thePopup.autoResizeHandler = null;
  }
  
  this._unblockActiveXControls();
  
  
  
  if (this.getPopups().length == 1)
  {
    
    try
    {
      var sourceWindow = thePopup.sourceWindow;
      if (typeof(thePopup.sourceFocusId) == "string" && thePopup.sourceFocusId.length > 0)
      {
        sourceWindow.document.getElementById(thePopup.sourceFocusId).setActive();
        sourceWindow.document.getElementById(thePopup.sourceFocusId).focus();
      }
      else
      {
        sourceWindow.document.body.setActive();
        sourceWindow.document.body.focus();
      }
    }
    catch (e){}
  }
  
  if (thePopup.outerIFrame.contentWindow.parent.popupRef)
    thePopup.outerIFrame.contentWindow.parent.popupRef[thePopup.popupId] = null;
  thePopup.outerIFrame.parentNode.removeChild(thePopup.outerIFrame);
  delete thePopup.outerIFrame;
  
  if (thePopup.innerIFrame != null)
  {
    thePopup.innerIFrame.parentNode.removeChild(thePopup.innerIFrame);
    delete thePopup.innerIFrame;
      
  }
	
		
	var index = this._getIndexOfPopup(thePopup);
	this.getPopups().splice(index,1);		
	
	if (index > 0)
	{
    this.focusPopup(this.getPopups()[index-1]);
    this.getPopups()[index-1].focusDefaultElement(null);
	}
	else
	  this.focusPopup(null);
	
}
URPopupManager.prototype._createBlocklayer = function()
{
  var documentBody = this.getHostWindow().document.body;
  var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
  if (blockLayer == null)
  {    
      
    blockLayer = this.getHostWindow().document.createElement('div');
    blockLayer.id = "ptrBlockLayer";
    blockLayer.style.position = "absolute";
    blockLayer.style.left = "0px";
    blockLayer.style.right = "0px";
    blockLayer.style.top = "0px";
    blockLayer.style.display = "none";
    blockLayer.style.zIndex = "4999";
    blockLayer.tabIndex = "0";
    blockLayer.style.backgroundColor = "#FFFFFF";
    blockLayer.style.opacity = "0.6";
    blockLayer.style.filter = "alpha(opacity=60)";
	  
    var firstChild = documentBody.firstChild;
    documentBody.insertBefore(blockLayer,firstChild);
  }
  
  
  
  var titleAnimationBlock = this.getHostWindow().document.getElementById("titleAnimationDiv");
  if (titleAnimationBlock == null)
 	{
    titleAnimationBlock = this.getHostWindow().document.createElement('div');
    titleAnimationBlock.id = "titleAnimationDiv";
    titleAnimationBlock.style.fontFamily = "font-family:Arial,Helvetica,sans-serif";
    titleAnimationBlock.style.fontWeight = "bold";
    titleAnimationBlock.style.fontStyle = "normal";
    titleAnimationBlock.style.backgroundColor = "#999999";
    titleAnimationBlock.style.fontSize = "11px";
    titleAnimationBlock.style.color = "#FFFFFF";
    titleAnimationBlock.style.position = "absolute";
    titleAnimationBlock.style.left = "0px";
    titleAnimationBlock.style.top = "0px";
    titleAnimationBlock.style.display = "none";
    titleAnimationBlock.style.zIndex = "5999";
    titleAnimationBlock.style.width = "100%";
    titleAnimationBlock.style.paddingTop = "2px";
    titleAnimationBlock.style.overflow = "hidden";
    titleAnimationBlock.style.textOverflow = "ellipsis";
    documentBody.appendChild(titleAnimationBlock);
  }
}
URPopupManager.prototype._showBlocklayer = function(zIndex)
{
	this._resizeBlocklayer();
	var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
	
  blockLayer.style.cursor = "not-allowed"; 
  blockLayer.style.display = "block";
  blockLayer.style.zIndex = zIndex;
  
  if (!ur_system.is508)
      blockLayer.style.backgroundColor = "#FFFFFF";
	
	blockLayer.oncontextmenu =  function(event)
  {
    event = event || window.event;
    if (event)
      event.cancelBubble=true;
        
    return false;             
      
  };
  var that = this;
  
  if (!blockLayer.onclick)
  {
    blockLayer.onclick = function()
    {
      var popups = that.getPopups();
      popups[popups.length-1].blink();
      
    };
  }
  if (!blockLayer.ondragstart)
  {
    blockLayer.ondragstart = function(event)
    {
      event = event || window.event;
      event.returnValue = false;
      return false;
    };
  }
  if (!blockLayer.onfocus)
  {
    blockLayer.onfocus = function()
    {
     
      var popups = that.getPopups();
      popups[popups.length-1].focusTitle();
         
    };
  }
	
	if (!this.focusCall)
  {    
    var that = this;
    this.focusCall = function()
    {
      var popups = that.getPopups();
      if (popups.length > 0)
        popups[popups.length-1].focusTitle();
    }
    helperAddEventListener(this.getHostWindow(),"focus", this.focusCall);
  }
	
	if (!this.resizeCall)
  {    
    var that = this;
    this.resizeCall = function()
    {
      that._resizeBlocklayer();
    }
    helperAddEventListener(this.getHostWindow(),"resize", this.resizeCall);
  }
    
}
URPopupManager.prototype._resizeBlocklayer = function()
{
    
  var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
  var hostBody = this.getHostWindow().document.body;
  
  var viewPortSize = this.getViewPortSize(this.getHostWindow());
  
  var bodyScrollHeight = hostBody.scrollHeight;
  var bodyScrollWidth = hostBody.scrollWidth;
  var bodyClientHeight = viewPortSize.height;
  var bodyClientWidth = viewPortSize.width;
  
  blockLayer.style.height = Math.max(bodyScrollHeight, bodyClientHeight) + "px";
  blockLayer.style.width = Math.max(bodyScrollWidth, bodyClientWidth) + "px";
    
}
URPopupManager.prototype._hideBlocklayer = function()
{
	var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
    
  blockLayer.style.cursor = "default";
  blockLayer.style.display = "none";
  
  if (typeof(this.resizeCall) != "undefined")
      helperRemoveEventListener(this.getHostWindow(),"resize",this.resizeCall);
  this.resizeCall = null; 
  if (typeof(this.focusCall) != "undefined")
      helperRemoveEventListener(this.getHostWindow(),"focus",this.focusCall);
  this.focusCall = null;
};
URPopupWindow.prototype.blink = function(step)
{
  if (typeof(step) == "undefined")
  {
    this.blink(5);
    return;
  }
  
  var visibility = (step % 2 == 0)? "visible" : "hidden"; 
	
	if (this.outerIFrame)
	  this.outerIFrame.style.visibility = visibility;
	
	var that = this;
	if (step > 0)
	{
		setTimeout (function () { that.blink( step-1); },80); 
	}
	else
	{
	  this.focusTitle();
	}
  
}
URPopupWindow.prototype.startDrag = function(event,resize)
{
  this.popupManager.focusPopup(this);
  
  if (this.isMaximized == true)
      return false;
  
  var outerIFrame = this.outerIFrame;
  var outerWindow = this.outerIFrame.contentWindow;
  var innerWindow = this.innerIFrame? this.innerIFrame.contentWindow : null;
      
  var srcElement;
  var theEvent;
  if (this.popupManager.IE)
  {
    if (outerWindow.event == null)
        return false;
    
    theEvent = outerWindow.event; 
    srcElement = theEvent.srcElement;
      
  }
  else
  {
    theEvent = event;
    srcElement = theEvent.target;
  } 
  
  this.popupManager.viewportSize = this.popupManager.getViewPortSize(this.popupManager.getHostWindow());
  this.popupManager.scrollOffset = this.popupManager.getScrollOffset(this.popupManager.getHostWindow());	
  
  this.moveData = 
  {
    srcElement: srcElement,
    startX: 	parseInt(outerIFrame.style.left),
    startXR: 	parseInt(outerIFrame.style.right),
    startY:		parseInt(outerIFrame.style.top), 
    startW: 	parseInt(outerIFrame.style.width), 
    startH: 	parseInt(outerIFrame.style.height),
    x: 			theEvent.screenX, 
    y: 			theEvent.screenY
  };
  
  this.resizeData = (resize == true);
  
  var that = this;
  this.movePopupCall = function(event)
  {
    if (!event)
        event = outerWindow.event;
    that.drag(event);
  }
  this.endPopupCall = function()
  {
    that.endDrag();
  }
  
  if (this.popupManager.IE)
  {
    srcElement.onmousemove = this.movePopupCall;
    srcElement.onmouseup = srcElement.onlosecapture = this.endPopupCall;
    srcElement.setCapture();
  }
  else
  {
    outerWindow.document.documentElement.addEventListener("mousemove",this.movePopupCall,false);
    outerWindow.document.documentElement.addEventListener("mouseup",this.endPopupCall,false);
    if(innerWindow!=null)
    {
      innerWindow.document.documentElement.addEventListener("mousemove",this.movePopupCall,false);
      innerWindow.document.documentElement.addEventListener("mouseup",this.endPopupCall,false);
    }
    this.popupManager.getHostWindow().document.documentElement.addEventListener("mousemove",this.movePopupCall,false);
    
    this.popupManager.getHostWindow().document.addEventListener("mouseup",this.endPopupCall,false);
    
  
  }
  
  return false;
  
}
URPopupWindow.prototype.drag = function(event)
{
    
  if (!this.popupManager.IE)
       event.cancelBubble = true;
    
	var outerIFrame = this.outerIFrame;
	var innerIFrame = null;
	if (this.innerIFrame != null)
	{
		innerIFrame = this.innerIFrame;
		try
		{
		   
		   if (!this.innerIFrame.contentWindow._ur_LoadingPopup)
		    this.innerIFrame.contentWindow.sapUrMapi_PopupMenu_hideAll();
		}
		catch(e){};
	}
	
	var position = this.getPosition();
	var left = position.left;
	var right = position.right;
	var top = position.top;
	var width = this.getWidth();
	var height = this.getHeight();
			
  if (this.resizeData == true)
  {
    this.isResized = true;
    var minimumWidth = this.getToolbarWidth();
    
    if (this.innerIFrame != null)
      this.innerIFrame.contentWindow.document.body.scroll = "auto";
  
    var x = event.screenX - this.moveData.x;
    if (this.popupManager.isRTL())
    	x *= -1;
    
    var width = parseInt(this.moveData.startW + x);
    if (left + width < this.popupManager.scrollOffset.x + this.popupManager.viewportSize.width)
    {
        this.setWidth(width);
    }
    
    var height = this.moveData.startH + event.screenY - this.moveData.y;
    
    if (top + height < this.popupManager.scrollOffset.y + this.popupManager.viewportSize.height)
    {
       this.setHeight(height);    
    }
    
  }
  else
  {
  	this.isMoved = true;
  	
  	left = Math.max(this.moveData.startX + event.screenX - this.moveData.x, this.popupManager.scrollOffset.x);
  	right = Math.max(this.moveData.startXR - event.screenX + this.moveData.x,0);
  	top = Math.max(this.moveData.startY + event.screenY - this.moveData.y,this.popupManager.scrollOffset.y);
  	
  	left = Math.min(left, this.popupManager.scrollOffset.x+this.popupManager.viewportSize.width - this.getWidth());
  	top = Math.min(top, Math.max(0, this.popupManager.scrollOffset.y+this.popupManager.viewportSize.height - this.getHeight()));
  	
      
  }
     
  this.setPosition(left,right,top);
   
  return false;
}
URPopupWindow.prototype.endDrag = function()
{
  var innerWindow = null;
	if (this.innerIFrame != null)
	{
		innerWindow = this.innerIFrame.contentWindow;
	}
  
  var position = this.getPosition();
  
  var params = [this.popupId,position.left,position.right,position.top,this.getWidth(),this.getHeight()]
  
  if (this.resizeData == true)
      this.callback("ptrPopupResized",params);
  else    
      this.callback("ptrPopupMoved",params);
  
  var outerWindow = this.outerIFrame.contentWindow;    
  
  
  if (this.popupManager.IE)
  {
      var srcElement = this.moveData.srcElement;
      srcElement.releaseCapture();
      srcElement.onmousemove = srcElement.onmouseup = srcElement.onlosecapture =  null;
  }
  else
  {
    
    outerWindow.document.documentElement.removeEventListener("mousemove",this.movePopupCall,false);
    outerWindow.document.documentElement.removeEventListener("mouseup",this.endPopupCall,false);
    
    if(innerWindow != null)
    {
      innerWindow.document.documentElement.removeEventListener("mousemove",this.movePopupCall,false);
      innerWindow.document.documentElement.removeEventListener("mouseup",this.endPopupCall,false);
    }
    this.popupManager.getHostWindow().document.documentElement.removeEventListener("mousemove",this.movePopupCall,false);
    this.popupManager.getHostWindow().document.documentElement.removeEventListener("mouseup",this.endPopupCall,false);
  
  }
  
  this.movePopupCall = null;
  this.endPopupCall = null;
      
  this.popupManager._resizeBlocklayer();
}
URPopupManager.prototype.focusPopup = function(thePopup)
{
  this.focussedPopup = thePopup;
		
	var zIndex = 5000;
	var blocklayerZIndex = null;
		
	for (var x = 0; x <  this.getPopups().length; x++)
	{
		if (this.getPopups()[x])
		{
			var popup = this.getPopups()[x];
			
			
			
			if (popup.dialogMode == "alwaysOnTop")
			{
				popup.setZIndex(zIndex++ +100);
			}
			else if (popup.dialogMode == "modal")
			{
				blocklayerZIndex = zIndex+=2;
				
				popup.setZIndex(zIndex+=2);
				
			}
			else if (popup.dialogMode == "amodal")
			{
				popup.setZIndex(zIndex+=2);
				
			}
		}
	}
	
	if (this.focussedPopup != null)
	{
		this.focussedPopup.setZIndex(zIndex+ 101);
		try
		{
		  var oHeaderDomRef = this.focussedPopup.outerIFrame.contentWindow.document.getElementById("iframePopupDivHeader");
		}
		catch(e){};
		
		if (oHeaderDomRef && oHeaderDomRef.focus)
		  oHeaderDomRef.focus();
	}
	if (blocklayerZIndex != null)
	{
    if (this.focussedPopup) 
        this.focussedPopup.callback("ptrShowBlocklayer",[]);
	        
		this._showBlocklayer(blocklayerZIndex);
	}
	else
	{
		this._hideBlocklayer();
		
	}
}
URPopupWindow.prototype.setZIndex = function(zIndex)
{
	this.outerIFrame.style.zIndex = zIndex;
	
	if (!this.innerIFrame)
		return;
	
	this.innerIFrame.style.zIndex = zIndex+1;
}
URPopupWindow.prototype.callback = function(methodName,parameters)
{
    
  var res = null;
  if (this.innerIFrame)
  {
    var iframeInnerPopupWindow = this.innerIFrame.contentWindow;
    try
    {
  	  
      res = iframeInnerPopupWindow[methodName].apply(iframeInnerPopupWindow,parameters);
    }
    catch (e)
    {};
  }
  var sourceWindow = this.sourceWindow;
  if (res == null)
  {
    try
    {
      
      res = sourceWindow[methodName].apply(sourceWindow,parameters);
    }
    catch (e)
    {};
  }
  return res;
}
URPopupWindow.prototype.getToolbarWidth = function()
{
	var toolbarWidth = 0;
	try
	{
	  toolbarWidth += parseInt(this.outerIFrame.contentWindow.document.getElementById("ptrToolbar").scrollWidth);
	}
	catch(e){}
	
	return toolbarWidth 
		    + CONSTANTS.left 
		    + CONSTANTS.right 
		    + CONSTANTS.waveBottom 
		    + CONSTANTS.waveMid 
		    + CONSTANTS.waveTop 
		    + CONSTANTS.waveResize;	
}
URPopupWindow.prototype.setPosition = function(left, right, top)
{
	this.left = left + "px";
  this.right = right + "px";
  this.top = top + "px";
  var outerIFrame = this.outerIFrame;
  
  outerIFrame.style.right = right + "px";
  outerIFrame.style.left = left + "px";
  outerIFrame.style.top = top + "px";
  
  if (!this.innerIFrame)
	  return;
	
	var innerIFrame = this.innerIFrame;
	
	innerIFrame.style.top = (top + CONSTANTS.top + (this.popupManager.IE?0:1)) + "px";
		
  if (this.messageType.length == 0)
  {
  	innerIFrame.style.left = (left + CONSTANTS.left) + "px";
    innerIFrame.style.right = (right + CONSTANTS.right) + "px";
              
  }
  else
  {
  	innerIFrame.style.left = (left + CONSTANTS.typeLeft) + "px";
    innerIFrame.style.right = (right + CONSTANTS.typeRight)  + "px";
  }
       
}
function _getButtonHTML(buttonStyle, index)
{
	
	var html = "";
	
	
  if (typeof(buttonStyle) == "number")
  {
    for (var i = 0; i < buttonStyle; i++)
    {
      html += _createButton(index, "BUTTON_" + i, "");
    }
  }
  
  else
  {
    if (buttonStyle == "PTR_ABORTRETRYIGNORE")
        html += _createButton(index, "ABORT", "Abort");
    if (buttonStyle == "PTR_CLOSE")
        html += _createButton(index, "CLOSE", "Close");
    if (buttonStyle == "PTR_ABORTRETRYIGNORE" || buttonStyle == "PTR_RETRYCANCEL")
        html += _createButton(index, "RETRY", "Retry");
    if (buttonStyle == "PTR_ABORTRETRYIGNORE")
        html += _createButton(index, "IGNORE", "Ignore");
    if (buttonStyle == "PTR_OK" || buttonStyle == "PTR_OKCANCEL")
        html += _createButton(index, "OK", "OK");
    if (buttonStyle == "PTR_YESNO" || buttonStyle == "PTR_YESNOCANCEL")
        html += _createButton(index, "YES", "Yes");
    if (buttonStyle == "PTR_YESNO" || buttonStyle == "PTR_YESNOCANCEL")
        html += _createButton(index, "NO", "No");
    if (buttonStyle == "PTR_OKCANCEL" || buttonStyle == "PTR_RETRYCANCEL" || buttonStyle == "PTR_YESNOCANCEL")
        html += _createButton(index, "CANCEL", "Cancel");
  }	
	return html;
}
function toHTMLEntities(text)
{
    text = text.replace( /&/g, "&amp;");
    text = text.replace( /"/g,"&quot;");
    text = text.replace( /'/g,"&apos;");
    text = text.replace( /</g, "&lt;");
    text = text.replace( />/g, "&gt;");
    return text; 
}
URPopupWindow.prototype._getCSS = function()
{
	var css = "<st" + "yle>";
    
  if (this.popupManager.IE)
  {
    css += ".urPopFrameMax{background-position:center;background-repeat:no-repeat;vertical-align:middle;width:16px;height:16px;}";
    css += ".urPopFrameMid{background-position:center;background-repeat:no-repeat;vertical-align:middle;width:16px;height:16px;}";
    css += ".urPopFrameClose{background-position:center;background-repeat:no-repeat;vertical-align:middle;width:16px;height:16px;}";
    css += ".urPopFrameResizeHide{cursor:default;width:22px;height:17px;}";
    css += ".urPopFrameResize{width:22px;height:17px;background-repeat:no-repeat;background-position:";
    if (this.popupManager.isRTL())
        css += "left bottom;cursor:sw-resize;";
    else
        css += "right bottom;cursor:nw-resize;";
    css += "}";
    
 
    css += ".urPopTitleArea{border-width:0px 0px 1px 0px;border-style:solid;cursor:default;height:21px;padding:";
    if (this.popupManager.isRTL())
        css += "0px 5px 0px 1px";
    else
        css += "0px 1px 0px 5px";
    css += "}";
    css += ".urPopTitle{vertical-align:top;padding-top:1px;font-weight:bold;font-style:normal;font-size:11px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}";
  
    css += ".urPopTitleAreaHeader{padding-top:1px}";
    css += ".urPopTitleAreaResize{padding:";
    if (this.popupManager.isRTL())
        css += "0px 2px 0px 0px";
    else
        css += "0px 0px 0px 2px";
    css += ";width:18px;}";
    css += ".urPopTitleAreaClose{padding:";
    if (this.popupManager.isRTL())
        css += "0px 0px 0px 2px";
    else
        css += "0px 2px 0px 2px";
    css += ";width:20px;}";
    css += ".urPopIconArea{text-align:center;width:72px;padding:";
    if (this.popupManager.isRTL())
	    css += "0px 22px 0 18px;"
    else
        css += "0px 18px 0 22px;";
    
    css += "}";
  }
  else
  {
    css += ".urPopFrameMax{background-position:center;background-repeat:no-repeat;height:20px;}";
    css += ".urPopFrameMid{background-position:center;background-repeat:no-repeat;height:20px;}";
    css += ".urPopFrameClose{background-position:center;background-repeat:no-repeat;height:20px;}";
    css += ".urPopFrameResizeHide{width:22px;height:17px;}";
    css += ".urPopFrameResize{width:22px;height:17px;background-position:right bottom;cursor:nw-resize;background-repeat:no-repeat;}";
  
    css += ".urPopTitleArea{border-width:0px 0px 1px 0px;border-style:solid;cursor:default;height:21px;padding:0px 1px 0px 5px}";
    css += ".urPopTitle{vertical-align:top;padding-top:1px;font-weight:bold;font-style:normal;font-size:11px;white-space:nowrap;overflow:hidden;}";
    
    css += ".urPopTitleAreaHeader{padding-top:2px}";
    css += ".urPopTitleAreaResize{padding:0px 0px 0px 2px;width:16px;}";
    css += ".urPopTitleAreaClose{padding:0px 2px 0px 2px;width:16px;}";
    css += ".urPopIconArea{text-align:center;width:32px;padding-left:22px;padding-right:18px;}";
  }
  
  css += ".urPopIconArea{background-position:50% 16px;background-repeat:no-repeat;}";
  css += ".urPopFrame1{border-width:1px;border-style:solid;cursor:default;font-size:11px;}";
  css += ".urPopFrame2{border-width:1px;border-style:solid;cursor:default;font-size:11px;}";
  
  css += ".urPopWaveBottom{background-repeat:repeat-x;width:100%;}";
  css += ".urPopWaveMid{background-repeat:no-repeat;width:40px;}";
  css += ".urPopWaveTop{background-repeat:repeat-x;}";
  css += ".urPopFont{font-size:11px;}";
  css += ".urPopTxtStd{font-size:11px;font-style:normal;}";
  css += ".urPopBdyStd{overflow:hidden;margin:0px;}";
  css += "</st" + "yle>";
  return css;	
}
function helperAddEventListener(element,type, method)
{
  if (element.attachEvent)
	{
		
		element.attachEvent("on" + type, method);
	}
	else
	{
		element.addEventListener(type,method,false);
	}
}
function helperRemoveEventListener(element,type, method)
{
	if (element.detachEvent)
	{
		element.detachEvent("on" + type, method);
	}
	else
	{
		element.removeEventListener(type,method,false);
	}
}
URPopupManager.prototype.getPageSize = function(oDocument)
{
	var x,y;
	
	var test1 = oDocument.body.scrollWidth;
	var test2 = oDocument.body.offsetWidth;
	if (test1 > test2) 
	{
		x = oDocument.body.scrollWidth;
		y = oDocument.body.scrollHeight;
	}
	else 
	     
	{
		x = oDocument.body.offsetWidth;
		y = oDocument.body.offsetHeight;												
	}
	
	x = Math.max(oDocument.body.scrollWidth,oDocument.body.offsetWidth);
	y = Math.max(oDocument.body.scrollHeight, oDocument.body.offsetHeight);
	
	return {width:x,height:y};
	
}
URPopupManager.prototype.getViewPortSize = function(oWindow)
{
	var width,height;
	if (document.addEventListener) 
	
	{
		
		width = oWindow.document.body.offsetWidth;
		
		
		height = oWindow.innerHeight;
	}
	else if (oWindow.document.documentElement && oWindow.document.documentElement.clientHeight)
	
	{
		width = oWindow.document.documentElement.clientWidth;
		height = oWindow.document.documentElement.clientHeight;
	}
	else if (oWindow.document.body) 
	
	{
		width = oWindow.document.body.clientWidth;
		height = oWindow.document.body.clientHeight;
	}
	return {width:width,height:height};
}
URPopupManager.prototype.getScrollOffset = function(oWindow)
{
	var body = oWindow.document.body;
	var x,y;
	if (oWindow.pageYOffset) 
	{
		x = oWindow.pageXOffset;
		y = oWindow.pageYOffset;
	}
	else if (oWindow.document.documentElement && oWindow.document.documentElement.scrollTop)
		
	{
		
		x = oWindow.document.documentElement.scrollLeft;
		y = oWindow.document.documentElement.scrollTop;
	}
	else if (body) 
	{
		
		x = body.scrollLeft;
		
		if (this.isRTL())
		  x = body.scrollWidth - body.scrollLeft - body.clientWidth;
		
		y = body.scrollTop;
	}
			
	return {x:x,y:y};
	
}      
                                                 
URPopupManager.prototype.ptrRegisterActiveXComponent = function(sourceWindow, enable, ptrFunction)
{
    for (var i = 0; i < this.ptrActiveXArray.length; i++)
    {
        var item = this.ptrActiveXArray[i];
        if (item.sourceWindow == sourceWindow && item.enable == enable)
        {
            item.isActive = true;
            item.ptrFunction = ptrFunction;
            break;
        }
    }
    if (i >= this.ptrActiveXArray.length)
    {
        this.ptrActiveXArray[this.ptrActiveXArray.length] = 
        {
            sourceWindow: sourceWindow,
            enable: 			enable,
            ptrFunction:  ptrFunction, 
            isActive: 		true
        };
    }
}
URPopupManager.prototype.ptrUnregisterActiveXComponent = function(sourceWindow)
{
    for (var i = 0; i < this.ptrActiveXArray.length; i++)
    {
        var item = this.ptrActiveXArray[i];
        if (item.sourceWindow == sourceWindow)
        {
            item.isActive = false;
        }
    }
}
URPopupManager.prototype._unblockActiveXControls = function()
{
  this._toggleActiveXControls(true);
}
URPopupManager.prototype._blockActiveXControls = function()
{
  this._toggleActiveXControls(false);
}
URPopupManager.prototype._toggleActiveXControls = function(enable)
{
  if (!this.IE)
    return;
  
  for (var i = 0; i < this.ptrActiveXArray.length; i++)
  {
      var item = this.ptrActiveXArray[i];
      if (item.isActive == true && item.enable == enable)
      {
          try
          {
              item.ptrFunction();
          }
          catch (e){}
      }
  }
}
URPopupManager.prototype.ptrMessageBox = function(sourceWindow, text, title, style, type)
{
    this.ptrShowModalDialog(sourceWindow, text, title, style, type);
}
URPopupManager.prototype.ptrModalDialogUrl = function(sourceWindow, url, title, style, width, height)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
    
    this.ptrShowModalDialog(sourceWindow, '', title, style, '', width, height, url,  false, false, true, false, '', true);
}
URPopupManager.prototype.ptrModalDialogWdr = function(sourceWindow, popupId, url, title, style, type,
    width, height, hasCloseButton, initLeft, initTop)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
        
    this.ptrShowModalDialog(sourceWindow, '', title, style, type, width, height, url, false, false, true, false, popupId, false, hasCloseButton,initLeft,initLeft,initTop);
}
URPopupManager.prototype.ptrFloatingDialogWdr = function(sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton, initLeft, initTop)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
          
    this.ptrShowModalDialog(sourceWindow, '', title, style, type, width, height, url, false, false, true, "alwaysOnTop", popupId, false, hasCloseButton,initLeft,initLeft,initTop);
}
URPopupManager.prototype.ptrModelessDialogUrl = function(sourceWindow, url, title, style, width, height)
{
    this.ptrModlessDialogUrl(sourceWindow, url, title, style, width, height);
}
URPopupManager.prototype.ptrModelessDialogWdr = function(sourceWindow, popupId, url, title, style, width, height, hasCloseButton, initLeft, initTop)
{
    
    
    this.ptrModlessDialogWdr(sourceWindow, popupId, url, title, style, width, height, hasCloseButton, initLeft, initLeft, initTop);
}
URPopupManager.prototype.ptrDialogWdr = function(isModal, sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton)
{
    if (typeof(isModal) == "boolean")  
    {
        if (isModal == true)
            this.ptrModalDialogWdr(sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton);
        else
            this.ptrModlessDialogWdr(sourceWindow, popupId, url, title, style, width,  height, hasCloseButton);
    }
    else
    {
        this.ptrFloatingDialogWdr(sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton);        
    }
}
URPopupManager.prototype.ptrModlessDialogUrl = function(sourceWindow, url, title, style, width, height)
{
    if (typeof(style) == "string" && style.length == 0)
    {
        style = "PTR_OKCANCEL";
    }
   
    this.ptrShowModalDialog(sourceWindow, '', title, style, '', width, height, url, false, true, true, true, '', true);
}
URPopupManager.prototype.ptrModlessDialogWdr = function(sourceWindow, popupId, url, title, style, width, height, hasCloseButton)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
     
    this.ptrShowModalDialog(sourceWindow, '', title, style, '', width, height, url, false, true, true, true, popupId, true, hasCloseButton);
}
URPopupManager.prototype.ptrModalDialog = function(sourceWindow, text, title, style, width, height)
{
    this.ptrShowModalDialog(sourceWindow, text, title, style, '', width, height, '',  false, false, true);
}
URPopupManager.prototype.ptrLogout = function(sourceWindow, text, title)
{
    this.ptrShowModalDialog(sourceWindow, text, title, "PTR_YESNO", "PTR_QUESTION", 200, 120, '', true, true);
}
URPopupManager.prototype.ptrShowModalDialog = function(sourceWindow, text, title, style, type, width,
    height, url, logout, mode, resize, aModal, popupId, isFix, hasCloseButton,initLeft,initRight,initTop)
{
    if (typeof(sourceWindow) != "object")
        return ;
    if (typeof(text) == "undefined")
        text = "Your request is being processed!";
    
    if (typeof(title) == "undefined")
        title = "SAP";
    
    if (typeof(style) == "undefined")
        style = "PTR_OK";
    
    if (typeof(type) == "undefined")
        type = "";
    
    if (typeof(width) == "undefined" || width == 0)
        width = null;
    
    if (typeof(height) == "undefined" || height == 0)
        height = null;
    
    if (typeof(url) == "undefined")
        url = "";
    
    if (typeof(logout) == "undefined")
        logout = false;
    
    if (typeof(mode) == "undefined")
        mode = false;
    
    if (typeof(resize) == "undefined")
        resize = false;
    
    if (typeof(aModal) == "undefined")
        aModal = false;
    
    var dialogMode = null;
    if (typeof(aModal) == "boolean" )
    {
        if (aModal == true)
        {
            dialogMode = "amodal";
        }
        else
        {
            dialogMode = "modal";
        }
    }
    else 
    {
        dialogMode = aModal;
    }
        
    
    if (typeof(popupId) == "undefined")
        popupId = "";
    
    if (typeof(isFix) == "undefined")
        isFix = false;
    
    if (typeof(hasCloseButton) != "boolean")
        hasCloseButton = true;
    
    if (typeof(initLeft) == "undefined")
        initLeft = null;
    
    if (typeof(initRight) == "undefined")
        initRight = null;
    
    if (typeof(initTop) == "undefined")
        initTop = null;
    
    this._ptrShowPopupWindow(sourceWindow,initLeft,initRight,initTop, width, height, url, title, text, style, type, logout, mode, resize, dialogMode, popupId, hasCloseButton);
}

//** RadioButton.ie5 **

function sapUrMapi_RadioButton_registerCreate(sId) {
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_RadioButton_create('"+sId+"')");
}
function sapUrMapi_RadioButton_create(sId) {
	var o=ur_get(sId);
	if(o==null || !o.checked ) return;
	o.checked=false;
	o.checked=true;
}
function sapUrMapi_RadioButton_toggle(sId,e) { 
	if(e.type=="keydown" && (e.ctrlLeft || e.ctrlRight)) return;
  var oIn=ur_get(sId);
  var oImg=ur_get(sId+"-img");
  if (ur_isSt(oIn,new Array(ur_st.DISABLED)) || ur_isSt(oIn,new Array(ur_st.READONLY))) return false;
  if (ur_isSt(oIn,ur_st.SELECTED)) return false;
  var oInGrp=new Array();
  if(oIn.name!="") 
		oInGrp=document.getElementsByName(oIn.name);
	else
		oInGrp[0]=oIn;
  oIn.checked=true;
  ur_setSt(oIn,ur_st.SELECTED,true);
  ur_setSt(oIn,ur_st.NOTSELECTED,false);
  oImg.className=oImg.className.replace("Off","On");
  ur_focus(oIn);
  for(var i=0;i<oInGrp.length;i++){
	  oImg=ur_get(oInGrp[i].id+"-img");
	  if (oImg==null || oIn==oInGrp[i]) continue; 
	  if(ur_isSt(oInGrp[i],ur_st.SELECTED)){ 
			oImg.className=oImg.className.replace("On","Off");
			ur_setSt(oInGrp[i],ur_st.SELECTED,false);
			ur_setSt(oInGrp[i],ur_st.NOTSELECTED,true);			
		}
  }
  if (ur_system.is508) oIn.fireEvent("onactivate");
  return ur_EVT_fire(ur_get(sId+"-r"),"och",e);
}
function sapUrMapi_RadioButton_setDisabled(sId) {
 	var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	if (ur_isSt(oIn,ur_st.DISABLED)) return;
	if(ur_isSt(oIn,ur_st.READONLY)){
		oImg.className=oImg.className.replace("Dsbl","");
		ur_setSt(oIn,ur_st.READONLY,false);
	}
	oLbl.className=oLbl.className.replace("Lbl","LblDsbl");
  if(ur_isSt(oIn,ur_st.SELECTED))
		oImg.className=oImg.className.replace("On","OnDsbl");
	else
		oImg.className=oImg.className.replace("Off","OffDsbl");	
	if(ur_system.is508)
		sapUrMapi_setTabIndex(oLbl,"0");
  oIn.disabled=true;	
	ur_setSt(oIn,ur_st.DISABLED,true);
	sapUrMapi_Label_setDisabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_RadioButton_setEnabled(sId) {
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	oLbl.className=oLbl.className.replace("Dsbl","");
	oLbl.className=oLbl.className.replace("Ro","");
	oLbl.className=oLbl.className.replace("Inv","");
	oImg.className=oImg.className.replace("Dsbl","");
	oIn.disabled=false;
	ur_setSt(oIn,ur_st.DISABLED,false);
	ur_setSt(oIn,ur_st.READONLY,false);
	if(ur_system.is508)
		sapUrMapi_setTabIndex(oLbl,"-1");
	sapUrMapi_Label_setEnabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_RadioButton_setReadonly(sId,bSet){
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	if(bSet){
		if (ur_isSt(oIn,ur_st.READONLY)) return;
		if (ur_isSt(oIn,ur_st.DISABLED)){
			oLbl.className=oLbl.className.replace("Dsbl","");
			oImg.className=oImg.className.replace("Dsbl","");
			ur_setSt(oIn,ur_st.DISABLED,false);
		}
		if(ur_isSt(oIn,ur_st.SELECTED))
			oImg.className=oImg.className.replace("On","OnDsbl");
		else
			oImg.className=oImg.className.replace("Off","OffDsbl");	
		oIn.disabled=true;	
		ur_setSt(oIn,ur_st.READONLY,true);
		if(ur_system.is508)
			sapUrMapi_setTabIndex(oImg,"0");
	}
	else{
		if (!ur_isSt(oIn,ur_st.READONLY)) return;
		oLbl.className=oLbl.className.replace("Ro","");
		oIn.disabled=false;	
		ur_setSt(oIn,ur_st.READONLY,false);
		if(ur_system.is508)
			sapUrMapi_setTabIndex(oLbl,"-1");	
	}
	sapUrMapi_Label_setEnabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;
}
function sapUrMapi_RadioButton_setInvalid(sId){
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-lbl");
	var oImg=ur_get(sId+"-img");
	if (ur_isSt(oIn,ur_st.INVALID) || ur_isSt(oIn,ur_st.READONLY) || ur_isSt(oIn,ur_st.DISABLED))
		return;
	oLbl.className=oLbl.className.replace("Lbl","LblInv");
	
	ur_setSt(oIn,ur_st.INVALID,true);
	sapUrMapi_Label_setInvalid(sapUrMapi_Label_getInputLabel(sId),true);
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_RadioButton_focus(sId,oEvt) {
	sapUrMapi_DataTip_show(sId,"focus");
}
function sapUrMapi_RadioButton_blur(sId,oEvt) {
	sapUrMapi_DataTip_hide(sId);
}
function sapUrMapi_RadioButton_keydown(sId,oEvt) {
  var iKey=oEvt.keyCode;	
  if(iKey==37)
		iKey==ur_system.direction!="rtl"?37:39;
	else if(iKey==39)
		iKey==ur_system.direction!="rtl"?39:37;
	
	if(oEvt.keyCode == "73" && oEvt.ctrlKey && oEvt.shiftKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		return ur_EVT_cancel(oEvt);
	}
	
	
	else if(oEvt.keyCode == "27"){
		sapUrMapi_DataTip_hide(sId);
		return ur_EVT_cancel(oEvt);		
	}
	
	
	else if(iKey==37 || iKey==38){		 
		var oIn=ur_get(sId);
		if(!(oIn.disabled || oEvt.shiftKey)) return;
		if (!oIn.name) return;
		var oInGrp=document.getElementsByName(oIn.name);
		for(var i=0; i<oInGrp.length;i++)
			if(oInGrp[i]==oIn) break;
		if(i>0) i-=1;
		if(oInGrp[i].disabled) oIn=ur_get(oInGrp[i].id+"-lbl");
		else oIn=oInGrp[i];
		ur_focus(oIn);
		sapUrMapi_Focus_showFocusRect(oIn.id);
		return ur_EVT_cancel(oEvt);
	}
	
	else if(iKey==39 || iKey==40){
		var oIn=ur_get(sId);
		if(!(oIn.disabled || oEvt.shiftKey)) return;
		if (!oIn.name) return;
		var oInGrp=document.getElementsByName(oIn.name);
		for(var i=0; i<oInGrp.length;i++)
			if(oInGrp[i]==oIn) break;
		if(i<oInGrp.length-1) i+=1;
		if(oInGrp[i].disabled) oIn=ur_get(oInGrp[i].id+"-lbl");
		else oIn=oInGrp[i];
		ur_focus(oIn);
		sapUrMapi_Focus_showFocusRect(oIn.id);
		return ur_EVT_cancel(oEvt);
	}
}

//** RichTextEdit.ie5 **

var rteChanged = {};
function ur_RTE_Create(sId,sText,Evt)
{
	rteChanged[sId] = false;
	
	if(ur_get(sId+"-rd"))
	{
		ur_get(sId+"-rd").innerHTML = sText;	
	}
}
function ur_RTE_IframeLoad(sId,sText)
{
	rteChanged[sId] = false;
	
	try{
	var oIfrm = ur_get(sId+'-frm'),
	    oDoc = oIfrm.contentWindow.document;
	oDoc.body.setAttribute("id",sId);
	if(sText == "")
		sText = "<p></p>";
	sText = sText.replace(/<\/br>/g, "");
	var oLink = oDoc.getElementsByTagName("LINK")[0],
	    cssUrl = ur_system.stylepath+"ur/ur_"+ur_system.browser_abbrev+".css";
        
	oLink.href = ur_RTE_relativeToAbsolutePath(cssUrl, location.href);
	
	oDoc.body.dir = ur_system.direction;
	oDoc.body.className = "urBdyStd urTrcBodyBox urFTxtV";
	oDoc.body.innerHTML = sText;	
	
	
	oDoc.body.disabled = true;
	oDoc.body.contentEditable = true;
	oDoc.body.disabled = false;
	oDoc.attachEvent("onkeydown",ur_RTE_keyHandler);
	oDoc.attachEvent("onkeyup",ur_RTE_keyHandler);
	
	oDoc.attachEvent("onclick",ur_RTE_handleClick); 
	oDoc.attachEvent("onselect",ur_RTE_handleClick);
	
	oDoc.body.attachEvent("onblur",ur_RTE_blur);
	}catch(ex){};
	
}
function ur_RTE_blur(evt)
{
	
	var sId = evt.srcElement.getAttribute("id");
	if (rteChanged[sId]) ur_EVT_fire(ur_get(sId),"ochg");
	
	
}
function ur_RTE_keyHandler(evt)
{
	var sId = evt.srcElement.getAttribute("id");
   
    	rteChanged[sId] = true;
    	ur_RTE_queryState(sId);
}
function ur_RTE_handleClick(evt)
{
	var sId = evt.srcElement.getAttribute("id");
	
	if(sId == "" && (evt.srcElement).tagName != "BODY")
	{
		var elm = evt.srcElement;
		while(elm.tagName != "BODY")
			elm  = elm.parentNode;
		
		sId = elm.getAttribute("id");
		
	}
	ur_RTE_queryState(sId);
}
function ur_RTE_btnClk(sId,Evt)
{
	var elm;
	if(Evt.srcElement.tagName == "IMG")
		elm = Evt.srcElement.parentNode.parentNode;
		
	else if(Evt.srcElement.tagName == "A")
		elm = Evt.srcElement.parentNode;
	
	if(!elm || elm.getAttribute("id") == "" ) return;
	
	var sIdCtrl = elm.getAttribute("id").split("-")[0];
	if(sId.indexOf('-bld')> -1){
		ur_RTE_frmt(sIdCtrl,"","Bold");
		}
	else if(sId.indexOf('-itl')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","italic");
	}
	else if(sId.indexOf('-und')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","Underline");
	}
	else if(sId.indexOf('-head1')> -1)
	{
		if(ur_get(sIdCtrl+"-tbar-head1").className == "urBtnStdD")
			ur_RTE_frmt(sIdCtrl,"<p>","formatblock");
		else
			ur_RTE_frmt(sIdCtrl,"<h1>","formatblock");
	}
	else if(sId.indexOf('-head2')> -1)
	{
		if(ur_get(sIdCtrl+"-tbar-head2").className == "urBtnStdD")
			ur_RTE_frmt(sIdCtrl,"<p>","formatblock");
		else
			ur_RTE_frmt(sIdCtrl,"<h2>","formatblock");
	}
	else if(sId.indexOf('-head3')> -1)
	{		
		if(ur_get(sIdCtrl+"-tbar-head3").className == "urBtnStdD")
			ur_RTE_frmt(sIdCtrl,"<p>","formatblock");
		else
			ur_RTE_frmt(sIdCtrl,"<h3>","formatblock");
	}	else if(sId.indexOf('-idnt')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","Indent");
	}
	else if(sId.indexOf('-odnt')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","Outdent");
	}
	else if(sId.indexOf('-olist')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","InsertOrderedList");
	}
	else if(sId.indexOf('-unolist')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","InsertUnorderedList");
	}
	rteChanged[sIdCtrl] = true;
	ur_RTE_queryState(sIdCtrl);
}
function ur_RTE_frmt(sId,format,selName)
{	
	var oCtrl = ur_get(sId+"-frm");
	oCtrl.contentWindow.focus();
	oCtrl.contentWindow.document.execCommand(selName,false,format);	
	ur_RTE_queryState(sId);
}
function ur_RTE_queryState(sId,target)
{
	
	var oIfrm = ur_get(sId+"-frm");
	
	if(ur_get(sId+"-tbar-itl"))
	{
		var bI = oIfrm.contentWindow.document.queryCommandState("Italic");
		if(bI)
			ur_TB_toggleDownState(sId+"-tbar-itl","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-itl","up");
	}
	if(ur_get(sId+"-tbar-bld"))
	{
		var bB = oIfrm.contentWindow.document.queryCommandState('Bold');
		if(bB)
			ur_TB_toggleDownState(sId+"-tbar-bld","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-bld","up");
	}
	if(ur_get(sId+"-tbar-und"))
	{
		var bU = oIfrm.contentWindow.document.queryCommandState('Underline');
		if(bU)
			ur_TB_toggleDownState(sId+"-tbar-und","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-und","up");
	}
	if(ur_get(sId+"-tbar-head1"))
	{
		var sH1 = "" + oIfrm.contentWindow.document.queryCommandValue('formatblock');
		if(sH1.indexOf("1") >= 0)
			ur_TB_toggleDownState(sId+"-tbar-head1","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-head1","up");
	}
	if(ur_get(sId+"-tbar-head2"))
	{
		var sH2 = "" + oIfrm.contentWindow.document.queryCommandValue('formatblock');
		if(sH2.indexOf("2") >= 0)
			ur_TB_toggleDownState(sId+"-tbar-head2","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-head2","up");
	}
	if(ur_get(sId+"-tbar-head3"))
	{
		var sH3 = "" + oIfrm.contentWindow.document.queryCommandValue('formatblock');
		if(sH3.indexOf("3") >= 0)
			ur_TB_toggleDownState(sId+"-tbar-head3","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-head3","up");
	}
	
	if(ur_get(sId+"-tbar-idnt"))
	{
		var bIdnt = oIfrm.contentWindow.document.queryCommandState("Indent");
		if(bIdnt)
			ur_TB_toggleDownState(sId+"-tbar-idnt","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-idnt","up");
	}
	if(ur_get(sId+"-tbar-odnt"))
	{
		var bOdnt = oIfrm.contentWindow.document.queryCommandState("Outdent");
		if(bOdnt)
			ur_TB_toggleDownState(sId+"-tbar-odnt","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-odnt","up");
	}
	if(ur_get(sId+"-tbar-olist"))
	{
		var bOlist = oIfrm.contentWindow.document.queryCommandState("InsertOrderedList");
		if(bOlist)
			ur_TB_toggleDownState(sId+"-tbar-olist","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-olist","up");
	}
	if(ur_get(sId+"-tbar-unolist"))
	{
		var bOlist = oIfrm.contentWindow.document.queryCommandState("InsertUnorderedList");
		if(bOlist)
			ur_TB_toggleDownState(sId+"-tbar-unolist","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-unolist","up");
	}
}
function ur_TB_toggleDownState(sId,bSt)
{
	
	var oBtn = ur_get(sId);
	var oBtnR = ur_get(sId+"-r");
	if(bSt == "dn")
	{
		oBtn.className = "urBtnStdD";
		oBtnR.setAttribute("down","true");
	}
	else if(bSt == "up")
	{
		oBtn.className = "urBtnStd";
		oBtnR.setAttribute("down","false");
	}
	else
	{
		if(oBtn.className == "urBtnStd")
			oBtn.className == "urBtnStdD"
		else
			oBtn.className == "urBtnStd"
	}
}
var ur_RTE_iSerializeCounter = 0;
function ur_RTE_getHTMLText(sId,oEvt)
{
   var node = ur_get(sId+'-frm').contentWindow.document.body,
       buffer = [],
       html;
   
   ur_RTE_iSerializeCounter++;    
   ur_RTE_serializeXHTML(buffer, node);
   html = buffer.join("");
   return html;
}
var ur_RTE_oValidTags = {
	"abbr":{empty:false},
	"acronym":{empty:false},
	"address":{empty:false},
	"blockquote":{empty:false},
	"br":{empty:true},
	"cite":{empty:false},
	"code":{empty:false},
	"dfn":{empty:false},
	"div":{empty:false},
	"em":{empty:false},
	"h1":{empty:false},
	"h2":{empty:false},
	"h3":{empty:false},
	"h4":{empty:false},
	"kbd":{empty:false},
	"p":{empty:false},
	"pre":{empty:false},
	"q":{empty:false},
	"samp":{empty:false},
	"span":{empty:false},
	"strong":{empty:false},
	"var":{empty:false},
	"dt":{empty:false},
	"dd":{empty:false},
	"ol":{empty:false},
	"ul":{empty:false},
	"li":{empty:false},
	"a":{empty:false, attrs:["href"]},
	"img":{empty:true, attrs:["src"]},
	
	"b":{mapped:"strong"},
	"i":{mapped:"em"}
};
var ur_RTE_oOmitContentTags = {
	"script": true,
	"noscript": true,
	"style": true,
	"select": true,
	"button": true,
	"link": true,
	"iframe": true,
	"object": true
};
function ur_RTE_serializeXHTML(aBuffer, oNode) {
	switch(oNode.nodeType) {
		case 1: 
			var sTagName = oNode.tagName.toLowerCase(),
				oTagInfo = ur_RTE_oValidTags[sTagName];
			if (oTagInfo) {
				
				
				
				if (oNode.cnt == ur_RTE_iSerializeCounter) {
					break;
				}
				oNode.cnt = ur_RTE_iSerializeCounter;
				
				if (oTagInfo.mapped) {
					sTagName = oTagInfo.mapped;
					oTagInfo = ur_RTE_oValidTags[sTagName];
				}
				
				aBuffer.push("<");
				aBuffer.push(sTagName);
				if (oTagInfo.attrs) {
					var aAttributes = oTagInfo.attrs,
						sName,
						sValue;
					for (var i = 0; i < aAttributes.length; i++) {
						sName = aAttributes[i];
						sValue = oNode.getAttribute(sName);
						if (sValue) {
							aBuffer.push(" ");
							aBuffer.push(sName); 
							aBuffer.push("=\""); 
							aBuffer.push(ur_RTE_sXmlEscape(sValue));
							aBuffer.push("\""); 
						}
					}
				}
				if (oTagInfo.empty) {
					aBuffer.push(" />");
				}	
				else {
					aBuffer.push(">");
				}
			}
			
			if (!ur_RTE_oOmitContentTags[sTagName]) {
				var childNodes = oNode.childNodes;
				if (childNodes) {
					for (var i = 0; i < childNodes.length; i++) {
						ur_RTE_serializeXHTML(aBuffer, childNodes[i]);
					}
				}
			}
			
			if (oTagInfo && !oTagInfo.empty) {
				aBuffer.push("</" + sTagName + ">");			
			}
			break;
		case 3: 
			aBuffer.push(ur_RTE_sXmlEscape(oNode.nodeValue));
			break;
		default: 
			
	}
};
function ur_RTE_sXmlEscape(sText) {
	sText = sText.replace(/\&/g, "&amp;");
	sText = sText.replace(/\</g, "&lt;");
	sText = sText.replace(/\"/g, "&quot;");
	return sText;
};
function ur_RTE_relativeToAbsolutePath(strRel,strAbs) {
  if (strRel.lastIndexOf("./")==-1) return strRel; 
  var strRelDots      = strRel.substring(0,strRel.lastIndexOf("./")+2);
  var strAbsPath      = strAbs.substring(0,strAbs.lastIndexOf("/")); 
  while(strRelDots.lastIndexOf("..")>-1) { 
    strAbsPath = strAbsPath.substring(0,strAbsPath.lastIndexOf("/")); 
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf(".."))+"/";
  }
  if (strRelDots.lastIndexOf("./")>-1) {
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf("./"))+"/";
    if (strRelDots.lastIndexOf("./")>-1) { 
      showError (strRel+" is not a valid relative url.");
    }
  }
  
  strNewAbsPath = strAbsPath + strRelDots + strRel.substring(strRel.lastIndexOf("./")+2,strRel.length);
  return strNewAbsPath;
}  

//** RoadMap.ie5 **

function ur_RM_RegisterCreate(sId)
{
	var oRm = ur_get(sId);
	if(parseInt(oRm.getAttribute("ic"))==0)return;
 	
	if(!oRm.getAttribute("sel"))
		oRm.setAttribute("sel","-1");
	 if(oRm.getAttribute('scrl') == "1")
		sapUrMapi_Create_AddItem(sId, "ur_RM_create('" + sId + "')");
	 else
	 {
		ur_get(sId+"-scrl").className = "";
		if(oRm.getAttribute('sel') == "-1")
			sapUrMapi_setTabIndex(ur_get(sId+'-itm-0'),0);
		else
			sapUrMapi_setTabIndex(ur_get(sId+'-itm-'+oRm.getAttribute('sel')),0);
	 }
}
function sapUrMapi_RoadMap_hoverEdges(sId,edgeType,e){
	var oS= ur_get(sId + "-itm-start");
	var sBts=oS.childNodes[0].className;
	var oE= ur_get(sId + "-itm-end");
	var sBte=oE.childNodes[0].className;
	
	if(e.type=="mouseover"){
		if(edgeType=="start" && sBts.indexOf("More")>-1)
			oS.childNodes[0].className=sBts +"Hover";
		else if(edgeType=="end" && sBte.indexOf("More")>-1)
			oE.childNodes[0].className=sBte +"Hover";
	}
	else if(e.type=="mouseout"){
		if(edgeType=="start" && sBts.indexOf("More")>-1)
			oS.childNodes[0].className=sBts.split("Hover")[0];
		else if(edgeType=="end" && sBte.indexOf("More")>-1)
			oE.childNodes[0].className=sBte.split("Hover")[0];
	}
}
function sapUrMapi_RoadMap_hoverStep(sId,iStepNr,e){
	var iSel = parseInt(ur_get(sId).getAttribute("sel"));
	var oTitle = ur_get(sId + "-itm-" + iStepNr).childNodes[1];
	
	if( iSel == iStepNr || oTitle.className == "urRMNoItem")return;
	
	if(e.type == "mouseover"){
		oTitle.className = "urRMStepItem urRMItemHover";
		}
	else if(e.type=="mouseout"){
			oTitle.className = "urRMStepItem";
		}
}
function ur_RM_create(sId)
{
	ur_get(sId+'-itm-start').setAttribute("stDsgn",ur_get(sId+'-itm-start').firstChild.className);
	ur_get(sId+'-itm-end').setAttribute("endDsgn",ur_get(sId+'-itm-end').firstChild.className);
	
	ur_IScr_getObj(sId);
	ur_IScr_create(sId);
	sapUrMapi_Resize_AddItem(sId, "ur_IScr_resize('"+sId+"')");
    var oRm = ur_get(sId);
    var oRmScrl = ur_IScr[sId];
    var iSel = parseInt(oRm.getAttribute('sel'));
    var iFScrl = oRmScrl.first;
    var iLScrl = oRmScrl.last;
	if(iSel <= iLScrl && iSel >=iFScrl)
		sapUrMapi_setTabIndex(ur_get(sId+'-itm-'+iSel),0);
	else{
		sapUrMapi_setTabIndex(ur_get(sId+'-itm-'+iFScrl),0);
		oRm.setAttribute("fidx",iFScrl);
	}
}
function sapUrMapi_RoadMap_keydownStep(sId,iIdx,e){
	var o=ur_RM_getObj(sId);
	var bScroll=o.ref.getAttribute("scrl");
	if(e.keyCode==32)
		o.items[iIdx].click();
	if(bScroll=="1"){
		if(e.keyCode == 39 && iIdx == ur_IScr[sId].last) 
		   ur_IScr_toNextPage(sId);
		if(e.keyCode == 37 && iIdx == ur_IScr[sId].first)
   	       ur_IScr_toPrevPage(sId);
	}
	ur_KY_nav(e,o);
}
function ur_RM_getObj(sId) {
  var oRm=ur_get(sId);
  var oScrl=ur_get(sId+"-scrl");
  var o={ref:oRm,
  		items:new Array(),
  		selected:oRm.getAttribute("sel")
  };
  o.ref["kb"]="h";
  o.items=ur_get(sId+"-scrl").firstChild.firstChild.firstChild.childNodes;
  
  return o;
}
function ur_RM_oadi(sId,oEvt)
{
	var o = ur_IScr[sId];
	if(o.first!= 0)
		ur_get(sId+'-itm-start').firstChild.className = "urRMMoreBefore";
	else
		ur_get(sId+'-itm-start').firstChild.className = ur_get(sId+'-itm-start').getAttribute("stDsgn");
	if(o.last != o.items.length-1)
	{
		ur_get(sId+'-itm-end').firstChild.className = "urRMMoreAfter";
				
	}
	else
	{
		ur_get(sId+'-itm-end').firstChild.className = ur_get(sId+'-itm-end').getAttribute("endDsgn");
	}
}
function ur_RM_select(sId,iNr,oEv){
	var o = ur_get(sId + "-itm-" + iNr);
	var iSelectedIdx = parseInt(ur_get(sId).getAttribute("sel"));
	
	
	if( o.st && o.st.indexOf("d") > -1  ||
		iSelectedIdx == iNr ||
		o.className == "urRMNotInterActive") return;
	
	var oStepN = o.getElementsByTagName("TD")[1];
	var oTitleN = o.childNodes[1];
	var oRm = ur_get(sId);
	oStepN.className = oStepN.className + "Sel";
	oTitleN.className = "urRMStepItem";
	oTitleN.className = oTitleN.className + "Sel";
	
	if (ur_system.is508) {
		ur_setSt(o,ur_st.NOTSELECTED,false);
		ur_setSt(o,ur_st.SELECTED,true);
		sapUrMapi_refocusElement(o);
	}
	
	if (iSelectedIdx != -1) {
		var o = ur_get(sId + "-itm-" + iSelectedIdx);
		var oStepO = o.getElementsByTagName("TD")[1];
		var oTitleO = o.childNodes[1];
		
		oStepO.className = oStepO.className.split("Sel")[0];
		oTitleO.className = oTitleO.className.split("Sel")[0];
		
		sapUrMapi_setTabIndex(oStepO,-1);
		
		if (ur_system.is508) {
			ur_setSt(o,ur_st.NOTSELECTED,true);
			ur_setSt(o,ur_st.SELECTED,false);
		}
	}
	
	
	sapUrMapi_setTabIndex(oStepN,0);
	oRm.setAttribute("fidx", iNr);
	oRm.setAttribute("sel", iNr);
	
	
	
	if ( oRm.scroll == 1 ){
		ur_EVT_addParam(oEv,"FirstVisibleItemIdx",ur_IScr[sId].first);
    	var bVisible = ur_IScr[sId].items[iNr].visible;
    	
	    if ( bVisible ) 
			ur_IScr_draw(sId);
	    else {
	      ur_IScr[sId].first = iNr;
	      ur_IScr[sId].last = -1;
	      ur_IScr_draw(sId);
	    }
    }
}
function ur_RM_Scrl(sId,edgeType,oEvt)
{
	iRmItms = parseInt(ur_get(sId).getAttribute("ic"));	
	if(iRmItms==0)return;
	oRmStart = ur_get(sId+'-itm-start');
	oRmEnd = ur_get(sId+'-itm-end');
	oRmScrl = ur_IScr[sId];
	if( oRmStart.firstChild.className.indexOf("Before") > -1 && edgeType == "start" && oRmScrl.first != 0)
	{
		ur_IScr_toPrevPage(sId);
	}
	else if( oRmEnd.firstChild.className.indexOf("After") && edgeType == "end" && oRmScrl.last != (iRmItms - 1) )
	{
		ur_IScr_toNextPage(sId);
	}
	else if( oRmStart.firstChild.className.indexOf("Before") > -1 || oRmScrl.first == 0 && edgeType == "start") 
	{
		ur_EVT_fire(oRmStart,"onscrl");
	}
	else if( oRmEnd.firstChild.className.indexOf("After") > -1 || oRmScrl.last == iRmItms-1 && edgeType == "end")
	{
		ur_EVT_fire(oRmEnd,"onscrl");
	}
	ur_EVT_addParam(oEvt,"FirstVisibleItemIdx",ur_IScr[sId].first);
}

//** SapTable.ie5 **

function sapUrMapi_SapTable_processTabActionStart(oDomRef, oTable, bBackward){
	if(oTable.focusedCell == null){
		sapUrMapi_SapTable_processTabActionReset(oTable);
	} else {
		oTable.oTabActionLastCell = oTable.focusedCell;
	}
	oTable.bTabActionBackward = bBackward;
	
};
function sapUrMapi_SapTable_processTabActionReset(oTable){
	if(oTable.oTabActionLastCell != null){
		oTable.oTabActionLastCell = null;
	}
};
function sapUrMapi_SapTable_processCreateRowByTab(oDomRef, sSapTableId, oEvt){
	var oTable = ur_Table_create(sSapTableId);
	if(oTable.bTabActionBackward) {
		var oPreviousElementToFocus = ur_getPreviousFocusableElement(oDomRef);
		if(oPreviousElementToFocus) ur_focus(oPreviousElementToFocus);
	} else {
		if(oTable && oTable.oTabActionLastCell && ur_contains(oTable.oTabActionLastCell.ref, ur_getPreviousFocusableElement(oDomRef)) ) {
			ur_EVT_fire(oDomRef,"ocr",oEvt);
		} else {
			var oNextElementToFocus = ur_getNextFocusableElement(oDomRef);
			if(oNextElementToFocus) ur_focus(oNextElementToFocus);
		}
	}
	
	sapUrMapi_SapTable_processTabActionReset(oTable);
};
function ur_contains(oDomRefContainer, oDomRefChild) {
	var oDomRef = oDomRefChild;
	
	if(oDomRefContainer == oDomRefChild) return true;
	
	while(oDomRef != null) {
		if(oDomRef == oDomRefContainer) return true;
		oDomRef = oDomRef.parentNode;
	}
	
	return false;
};
function sapUrMapi_SapTable_getClickedRowIndex(e)
{
   var o=ur_evtSrc(e);
   while (o!=null && o.getAttribute("rr")==null) o=o.parentElement;
   if(o==null) return;
   try {
     var iRIdx=parseInt(o.rr);
     if (isNaN(iRIdx)) return null;
     else return iRIdx;
   } catch (e) {
     return null;
   }
}
function sapUrMapi_SapTable_getClickedColIndex(e)
{
   var o=ur_evtSrc(e);
   while (o!=null && o.getAttribute("cc")==null) o=o.parentElement;
   if(o==null) return;
   try {
     var iCIdx=parseInt(o.cc);
     if (isNaN(iCIdx)) return null;
     else return iCIdx;
   } catch (e) {
     return null;
   }
}
function sapUrMapi_SapTable_getClickedCellId(e)
{
   var o=ur_evtSrc(e);
   while ( o!=null && o.getAttribute("cc")==null ) o=o.parentElement;
   if(o==null) return;
   try {
     var sId=o.id;
     return sId;
   } catch (e) {
     return null;
   }
}
function sapUrMapi_SapTable_getClickedRow(sTableId,e) {
   var idx=sapUrMapi_SapTable_getClickedRowIndex(e);
   if(idx==null) return;
   return sapUrMapi_SapTable_getRow(sTableId,idx);
}
function sapUrMapi_SapTable_getRow(sTableId, iRowIdx) {
	var oTable=ur_Table_create(sTableId),
		aRows = oTable.rows,
		iRowIndex = -1,
		sRowIndex = null;
	for (var i=0;i<aRows.length;i++) {
		sRowIndex = aRows[i].ref.getAttribute("rr");
		iRowIndex = -1;
		if(sRowIndex) {
			iRowIndex = parseInt(sRowIndex);
			if(isNaN(iRowIndex)) continue;
		} else continue;
		if (iRowIndex==iRowIdx) return aRows[i].ref;
	}
	return null;
}
function sapUrMapi_SapTable_correctSelectionBorder(oRow){}
function sapUrMapi_SapTable_correctSelectionBorder4Table(id){}
function sapUrMapi_SapTable_isSecondarySelected(oButton) {
  return oButton.className=="urSTRowSelSecIcon";
}
function sapUrMapi_SapTable_isPrimarySelected(oButton) {
  return oButton.className=="urSTRowSelIcon";
}
function sapUrMapi_SapTable_toggleSecondarySelection(oRow) {
  var oButton = oRow.getElementsByTagName("DIV").item(0);
  sapUrMapi_SapTable_selectRowByObject(oRow, !sapUrMapi_SapTable_isSecondarySelected(oButton), true);
}
var UR_FOCUS_APPEARANCE = {
  NONE:0,
  CLASS:1,
  FAST:2
};
var eUrFocusAppearance = UR_FOCUS_APPEARANCE.FAST;
function sapUrMapi_SapTable_setFocusAppearance(eLocalUrFocusAppearance) {
	eUrFocusAppearance = eLocalUrFocusAppearance;
};
var UR_SELECTION_STATE = {
  NOT_SELECTED:0,
  PRIMARY:1,
  SECONDARY:2
};
function sapUrMapi_SapTable_setSelection(oRow, eState) {
  if(eState == UR_SELECTION_STATE.NOT_SELECTED) {
    sapUrMapi_SapTable_selectRowByObject(oRow, false, false);
  } else if(eState == UR_SELECTION_STATE.PRIMARY) {
    sapUrMapi_SapTable_selectRowByObject(oRow, true, false);
  } else if(eState == UR_SELECTION_STATE.SECONDARY) {
    sapUrMapi_SapTable_selectRowByObject(oRow, true, true);
  }
}
function sapUrMapi_SapTable_setCellSelection(oCell, eState) {
  if(eState == UR_SELECTION_STATE.NOT_SELECTED) {
    sapUrMapi_SapTableSelectCell(oCell, false, false, false);
  } else if(eState == UR_SELECTION_STATE.PRIMARY) {
    sapUrMapi_SapTableSelectCell(oCell, false, true, false);
  } else if(eState == UR_SELECTION_STATE.SECONDARY) {
    sapUrMapi_SapTableSelectCell(oCell, false, true, true);
  }
}
var oUrFastTableSelectionInfo = null;
function ur_initFastTableSelectionInfo() {
	oUrFastTableSelectionInfo = {
		bValid: false
	};
	oUrFastTableSelectionInfo.oSelectorNames = {
		sPrimary: ".urST4Sel",
		sPrimaryReadOnly: ".urST4SelRo",
		sSecondary: ".urST4Sel2",
		sSecondaryReadOnly: ".urST4Sel2Ro",
		sFocus: ".urSTFoc"
	};
	
	oUrFastTableSelectionInfo.oClassNames = {
		sPrimary: "urST4Sel",
		sPrimaryReadOnly: "urST4SelRo",
		sSecondary: "urST4Sel2",
		sSecondaryReadOnly: "urST4Sel2Ro",
		sReadOnly: "urSTTDRo2",
		sFocus: "urSTFoc"
	};
	
	oUrFastTableSelectionInfo.oColors = {
		sPrimary: null,
		sPrimaryReadOnly: null,
		sSecondary: null,
		sSecondaryReadOnly: null,
		sFocus: null
	};	
	if(window.document.styleSheets) {
		for(var j=0; j<window.document.styleSheets.length; j++) {
			var oStyleSheet = window.document.styleSheets[j];
			if(oStyleSheet.href && oStyleSheet.href.indexOf("/ur_ie") >=0 ) {
		
				var oRules = oStyleSheet.rules,
					oRule = null;
				
				oUrFastTableSelectionInfo.bValid = true;
				
				for(var i=0; i<oRules.length; i++) {
					oRule = oRules[i];
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sPrimary) {
						oUrFastTableSelectionInfo.oColors.sPrimary = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sPrimaryReadOnly) {
						oUrFastTableSelectionInfo.oColors.sPrimaryReadOnly = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sSecondary) {
						oUrFastTableSelectionInfo.oColors.sSecondary = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sSecondaryReadOnly) {
						oUrFastTableSelectionInfo.oColors.sSecondaryReadOnly = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sFocus) {
						oUrFastTableSelectionInfo.oColors.sFocus = oRule.style.backgroundColor;
						continue;
					}
								
				}
			}
		}
	}
	return oUrFastTableSelectionInfo.bValid? oUrFastTableSelectionInfo: null;
}
function ur_getFastTableSelectionInfo() {
	return (oUrFastTableSelectionInfo)? (oUrFastTableSelectionInfo.bValid? oUrFastTableSelectionInfo: null) : ur_initFastTableSelectionInfo();
}
function ur_fastTableSelectionModeEnabled() {
	return ur_getFastTableSelectionInfo() != null;
}
function ur_fastTableCellSelect(oCell, bReadOnly, bSelect, bSecondary) {
	var oSelectionInfo = ur_getFastTableSelectionInfo();
	
	if(!oSelectionInfo) return false;
	
	
	if(oCell.firstChild && oCell.firstChild.className && 	
		(oCell.firstChild.className.indexOf("urEdf2WhlDsbl") >= 0 || oCell.firstChild.className.indexOf("urEdf2WhlRo") >= 0)
	){
	 return false;
	}
	if(!(oCell.urFastSelectionClean || bSelect)) {
		if(oCell.className.indexOf(oSelectionInfo.oClassNames.sPrimary) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sPrimary, "");
	  if(oCell.className.indexOf(oSelectionInfo.oClassNames.sPrimaryReadOnly) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sPrimaryReadOnly, "");
	  if(oCell.className.indexOf(oSelectionInfo.oClassNames.sSecondary) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sSecondary, "");
		if(oCell.className.indexOf(oSelectionInfo.oClassNames.sSecondaryReadOnly) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sSecondaryReadOnly, "");
	  
	  oCell.urFastSelectionClean = true;
	}
  if (bSelect) {
    if (bSecondary) {
			if(oCell.runtimeStyle.backgroundColor) {
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oCell.runtimeStyle.backgroundColor, ((bReadOnly? oSelectionInfo.oColors.sSecondaryReadOnly: oSelectionInfo.oColors.sSecondary) + " !important") );
			} else {
	    	oCell.runtimeStyle.cssText += "background-color:" + (bReadOnly? oSelectionInfo.oColors.sSecondaryReadOnly: oSelectionInfo.oColors.sSecondary) + " !important";
	    }
    } else {
			if(oCell.runtimeStyle.backgroundColor) {
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oCell.runtimeStyle.backgroundColor, ((bReadOnly? oSelectionInfo.oColors.sPrimaryReadOnly: oSelectionInfo.oColors.sPrimary) + " !important") );
			} else {
	    	oCell.runtimeStyle.cssText += "background-color:"+ (bReadOnly? oSelectionInfo.oColors.sPrimaryReadOnly: oSelectionInfo.oColors.sPrimary) +" !important";
	    }
    }
  } else {
  	oCell.runtimeStyle.backgroundColor = "";
  }
  
  return true;
};
function ur_fastTableCellFocus(oCell, bFocus) {
	if(eUrFocusAppearance != UR_FOCUS_APPEARANCE.FAST) return false;
	
	var oSelectionInfo = ur_getFastTableSelectionInfo();
	
	if(!oSelectionInfo) return false;
	
	if (bFocus) {
		if(!oCell.bIsFocusColorized) {
			if(oCell.runtimeStyle.backgroundColor) {
				oCell.setAttribute("sOldBgColor", oCell.runtimeStyle.backgroundColor);
				oldcolo = oCell.getAttribute("sOldBgColor");
				
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oCell.runtimeStyle.backgroundColor, oSelectionInfo.oColors.sFocus + " !important");
			
			} else {
	    	oCell.runtimeStyle.cssText += "background-color:"+ oSelectionInfo.oColors.sFocus + " !important";
	    }
	    
	    oCell.bIsFocusColorized = true;
		}	
	} else {
		if(oCell.bIsFocusColorized) {
			
			var sOldBgColor = oCell.getAttribute("sOldBgColor");
			if(sOldBgColor) {
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oSelectionInfo.oColors.sFocus, sOldBgColor + " !important");
				oCell.setAttribute("sOldBgColor", "");
			} else oCell.runtimeStyle.backgroundColor = "";
			
			oCell.bIsFocusColorized = false;
		}
	}
	return true;
};
function sapUrMapi_SapTable_selectRowByObject(oRow,bSelect,bSecondary)
{
  var oButton = oRow.getElementsByTagName("DIV").item(0),
    bHasSelectionButton = bHasSelectionButton = (oButton && oButton.className && oButton.className.indexOf("urSTRow") == 0)? true: false;
  if(bHasSelectionButton) {
    if(!sapUrMapi_SapTable_isSelButtonSelectable(oButton)) return;
    
    if(!bSelect && oButton.getAttribute("selMust")) return;
    if(!bSelect)
      oButton.className="urSTRowUnSelIcon";
    else if(bSecondary)
      oButton.className="urSTRowSelSecIcon";
    else
      oButton.className="urSTRowSelIcon";
  }
  for (var n=0;n<oRow.childNodes.length;n++) {
    oItem=oRow.childNodes[n];
    sapUrMapi_SapTableSelectCell(oItem,false,bSelect,bSecondary);
  }
  if(ur_system.is508 && bHasSelectionButton){
    if(bSelect){
      ur_setSt(oButton,ur_st.SELECTED,true);
      ur_setSt(oButton,ur_st.NOTSELECTED,false);
    }
    else{
      ur_setSt(oButton,ur_st.SELECTED,false);
      ur_setSt(oButton,ur_st.NOTSELECTED,true);
    }
    oButton.fireEvent("onactivate");
  }
}
function sapUrMapi_SapTable_selectRow(sId,sRowIdx,iCol,iGroup,v1,v2,v3)
{
	var oEventSource = ur_EVT_src(v1), sTableId = null, bSecondary = null;
	
	
	
	if(oEventSource) { 
		sTableId = sId;
		bSecondary = v2;
	} else { 
		sTableId = v1;
		oEventSource = ur_EVT_src(v2);
		bSecondary = v3;
	}
	
  if (typeof(bSecondary)=="undefined") bSecondary=false;
  var oRow = oEventSource.parentNode.parentNode;
  while (oRow.tagName!="TR") oRow=oRow.parentNode;
  var oButton = oRow.getElementsByTagName("DIV").item(0);
  if(!sapUrMapi_SapTable_isSelButtonSelectable(oButton)) return oRow;
  var bSelect = sapUrMapi_SapTable_isSecondarySelected(oButton)||sapUrMapi_SapTable_isPrimarySelected(oButton)?false:true;
 
  sapUrMapi_SapTable_selectRowByObject(oRow,bSelect,bSecondary);
  return oRow;
}
function sapUrMapi_SapTableSelectCell(oCell,bEdit,bSelect,bSecondary)
{
  var bEdit=false;
  if (oCell.getAttribute("urRowSpan") &&  parseInt(oCell.getAttribute("urRowSpan")) > 1) return;
  if (typeof(bSelect)=="undefined") bSelect=true;
  if (typeof(bSecondary)=="undefined") bSecondary=false;
  if (oCell.className.indexOf("Ico")>-1) return;
  var bIsReadOnly = oCell.className.indexOf("urSTTDRo2") >= 0;
  if(!ur_fastTableCellSelect(oCell, bIsReadOnly, bSelect, bSecondary)) {
	  if (bSelect) {
	    if (bSecondary)
	      oCell.className = oCell.className + " urST4Sel2" + (bIsReadOnly? "Ro": "");
	    else
	      oCell.className = oCell.className + " urST4Sel" + (bIsReadOnly? "Ro": "");
	  } else {
	  	if(bIsReadOnly) {
	  		oCell.className=oCell.className.replace(" urST4Sel2Ro","");
		    oCell.className=oCell.className.replace(" urST4SelRo","");
	  	} else {
	  		oCell.className=oCell.className.replace(" urST4Sel2","");
		    oCell.className=oCell.className.replace(" urST4Sel","");
	  	}
	  }
  }
  if(ur_system.is508){
    var sSemanticColor = oCell.getAttribute("s")?  oCell.getAttribute("s"): "";
    sSemanticColor = sSemanticColor.replace("s","");
    if(bSelect){
      sSemanticColor += "s";
    }
    oCell.setAttribute("s", sSemanticColor);
  }
}
function sapUrMapi_SapTable_isSelButtonSelectable(oSelButton){
  if(oSelButton) {
    var sClassName = oSelButton.className;
    if(sClassName=="urSTRowUnSelIcon" || sClassName=="urSTRowSelIcon" || sClassName=="urSTRowSelSecIcon") return true;
  }
  return false;
}
function sapUrMapi_SapTable_isSelectable(oRow){
  var oButtons = oRow.getElementsByTagName("DIV");
  if(oButtons.length > 0) {
    return sapUrMapi_SapTable_isSelButtonSelectable(oButtons.item(0));
  }
  return false;
}
function sapUrMapi_SapTable_clickSelButton(oRow,oEvt){
  while(oRow.tagName!="TR") oRow = oRow.parentNode;
  if(oRow.tagName!="TR")return;
  var sButtons = oRow.getElementsByTagName("DIV");
  for(var i=0;i<sButtons.length;i++){
    if(sapUrMapi_SapTable_isSelButtonSelectable(sButtons[i])){
      sButtons[i].fireEvent("onclick",oEvt);
      return;
    }
  }
}
function sapUrMapi_SapTable_getModelCellOfCnt(sId,o) {
  var oTbl=ur_Table_create(sId);
  var oCell=o;
  
  while( (oCell.tagName != "TD" && oCell.tagName != "TH") || (oCell.className.indexOf("urST3")==-1 && oCell.className.indexOf("urST3H")==-1) ){
    if(oCell.id==sId) break;
    oCell = oCell.parentNode;
  }
  
  oCell=oTbl.lookup[oCell.id];
  return oCell;
}
var UR_SEARCH_DIRECTION = {
    NONE: 0,
    ACCENDING: 1,
    DECENDING: 2,
    LAST: 3,
    FIRST: 4
  };
function sapUrMapi_SapTable_focusDown(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.ACCENDING, false);
}
function sapUrMapi_SapTable_focusUp(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.DECENDING, false);
}
function sapUrMapi_SapTable_focusNext(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.ACCENDING, true);
}
function sapUrMapi_SapTable_focusPrevious(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.DECENDING, true);
}
function ur_SapTable_sNavigate(sTableId, oDomRefCell, eSearchDirection, bHorizontal){
  var oTable=ur_Table_create(sTableId),
    oCell = oTable.focusedCell,
    oResultCell = null;
  if (oCell==null) oCell=sapUrMapi_SapTable_getModelCellOfCnt(sTableId,oDomRefCell);
  if (oCell==null) return "UNDEFINED";
  oResultCell = ur_SapTable_oSearchFocusableCell(oTable, oCell, eSearchDirection, bHorizontal);
  if(oResultCell == oCell) return "END";
  if(oResultCell == null) return "UNDEFINED";
  sapUrMapi_SapTable_focusCell(oResultCell, sTableId);
  return "";
}
function ur_SapTable_oSearchFocusableCell(oTable, oCellReference, eSearchDirection, bHorizontal){
  var iCurrRowIndex = -1, iCurrColIndex = -1, oCurrCell = null, oOrgCell = null;
  oOrgCell = oCellReference.oOrgCell;
  iCurrRowIndex = oOrgCell.rowIdx;
  iCurrColIndex = oOrgCell.colIdx;
  if(bHorizontal) {
    if(eSearchDirection == UR_SEARCH_DIRECTION.LAST) {
      iCurrColIndex = oOrgCell.parentRow.cells.length-1;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.FIRST) {
      iCurrColIndex = 0;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.ACCENDING) {
      iCurrColIndex = iCurrColIndex + oOrgCell.iColSpan;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.DECENDING) {
      iCurrColIndex = iCurrColIndex -1;
    }
  } else {
    if(eSearchDirection == UR_SEARCH_DIRECTION.LAST) {
      iCurrRowIndex = oOrgCell.parentCol.cells.length-1;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.FIRST) {
      iCurrRowIndex = 0;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.ACCENDING) {
      iCurrRowIndex = iCurrRowIndex + oOrgCell.iRowSpan;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.DECENDING) {
      iCurrRowIndex = iCurrRowIndex -1;
    }
  }
  if(oTable.rows[iCurrRowIndex]) {
    oCurrCell = oTable.rows[iCurrRowIndex].cells[iCurrColIndex];
  }
  if(oCurrCell == null) return oCellReference;
  
  if(oCurrCell.ref.fi) {
    var oRecursionResult = null;
    if(eSearchDirection == UR_SEARCH_DIRECTION.LAST)
      oRecursionResult = ur_SapTable_oSearchFocusableCell(oTable, oCurrCell, UR_SEARCH_DIRECTION.DECENDING, bHorizontal);
    else if(eSearchDirection == UR_SEARCH_DIRECTION.FIRST)
      oRecursionResult = ur_SapTable_oSearchFocusableCell(oTable, oCurrCell, UR_SEARCH_DIRECTION.ACCENDING, bHorizontal);
    else {
      oRecursionResult = ur_SapTable_oSearchFocusableCell(oTable, oCurrCell, eSearchDirection, bHorizontal);
    }
    if(oRecursionResult.ref.fi) return oCellReference;
    else return oRecursionResult;
  } else return oCurrCell;
};
var UR_SCROLL_UI = {
  NONE:0,
  PAGINATOR:1,
  SCROLLBAR:2
}
var UR_SCROLL_DIR = {
  VERTICAL:0,
  HORIZONTAL:1
}
var UR_SCROLL_BY = {
  NEXT_ITEM:0,
  NEXT_PAGE:1,
  END:2,
  PREVIOUS_ITEM:3,
  PREVIOUS_PAGE:4,
  BEGIN:5
}
function sapUrMapi_SapTable_canScrollV(sTableId, oTable) {
  if(!oTable) oTable=ur_get(sTableId);
  return (ur_get(oTable.getAttribute("pv")) || ur_get(sTableId+"-scrollV"))? true: false;
}
function sapUrMapi_SapTable_canScrollH(sTableId, oTable) {
  if(!oTable) oTable=ur_get(sTableId);
  return (ur_get(oTable.getAttribute("ph")) || ur_get(sTableId+"-scrollH"))? true: false;
}
function sapUrMapi_SapTable_scroll(sTableId, oEvt, iScrollDir, iScrollBy) {
  var oTable=ur_get(sTableId), sSclId = null, oScl=null, scrollUi=UR_SCROLL_UI.PAGINATOR;
  if (iScrollDir == UR_SCROLL_DIR.VERTICAL) {
    sSclId=oTable.getAttribute("pv");
    oScl=ur_get(sSclId);
    if (!oScl) {
      sSclId=sTableId+"-scrollV";
      oScl=ur_get(sSclId);
      scrollUi=UR_SCROLL_UI.SCROLLBAR;
    }
  } else if (iScrollDir == UR_SCROLL_DIR.HORIZONTAL) {
    sSclId=oTable.getAttribute("ph");
    oScl=ur_get(sSclId);
    if (!oScl) {
      sSclId=sTableId+"-scrollH";
      oScl=ur_get(sSclId);
      scrollUi=UR_SCROLL_UI.SCROLLBAR;
    }
  } else return false;
  if (!oScl) return false;
  if (scrollUi == UR_SCROLL_UI.PAGINATOR) {
    switch (iScrollBy) {
      case 0:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.NEXT_ITEM)) return true;
      case 1:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.NEXT_PAGE)) return true;
      case 2:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.END)) return true;
        break;
      case 3:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.PREVIOUS_ITEM)) return true;
      case 4:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.PREVIOUS_PAGE)) return true;
      case 5:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.BEGIN)) return true;
        break;
      default:
        return false;
    }
  } else if (scrollUi == UR_SCROLL_UI.SCROLLBAR) {
    var oSclInfoObject=ur_Scrollbar_getObj(sSclId);
    switch (iScrollBy) {
      case 0:
        ur_Scrollbar_scroll(oSclInfoObject, "down", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 1:
        ur_Scrollbar_page(oSclInfoObject, "down", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 2:
        ur_Scrollbar_bounce(oSclInfoObject, "down", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 3:
        ur_Scrollbar_scroll(oSclInfoObject, "up", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 4:
        ur_Scrollbar_page(oSclInfoObject, "up", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 5:
        ur_Scrollbar_bounce(oSclInfoObject, "up", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      default:
        return false;
    }
  }
  return false;
}
function sapUrMapi_SapTable_keydown(sId,e) {
  var o=e.srcElement;
  var sTag=o.tagName;
  var iKey=e.keyCode;
  var bS=e.shiftKey;
  var bA=e.altKey;
  var bC=e.ctrlKey;
  var sCt=sapUrMapi_getControlTypeFromObject(o);
  var oT=ur_get(sId); 
  var oTableObject = ur_Table_create(sId);
	if(iKey==9) sapUrMapi_SapTable_processTabActionStart(o, oTableObject, bS);
	else sapUrMapi_SapTable_processTabActionReset(oTableObject);
  
  var bCanScrollV=sapUrMapi_SapTable_canScrollV(sId, oT);
  var bCanScrollH=sapUrMapi_SapTable_canScrollH(sId, oT);
  
  var sPhId=oT.getAttribute("ph");
  var oPh=ur_get(sPhId);
  
  var sPvId=oT.getAttribute("pv");
  var oPv=ur_get(sPvId);
  
  if(iKey==32 && sCt!="I" && sCt!="TE" && sCt!="CB" && sCt!="C" && sCt!="R" && sCt!="TRI"){
    try{
      o.fireEvent("onclick",e);
    } catch(ex){ }
    ur_EVT_cancel(e);
    return true;
  }
  
  if((bC || bS) && (iKey==40 || iKey==38)){
    if(sapUrMapiSapTable_sort(o))
      return ur_EVT_cancel(e);
  }
  
  if(iKey==40 && sCt!="TE"){
    sResult=sapUrMapi_SapTable_focusDown(sId,o);
    if (sResult=="END" && bCanScrollV) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.NEXT_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  
  if(iKey==38 && sCt!="TE"){
    sResult=sapUrMapi_SapTable_focusUp(sId,o);
    if (sResult=="END" && bCanScrollV) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.PREVIOUS_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  
  if(iKey==39 && (sCt!="I" && sCt!="TE")){
    var sResult="";
    if (ur_system.direction=="rtl")
      sResult=sapUrMapi_SapTable_focusPrevious(sId,o);
    else
      sResult=sapUrMapi_SapTable_focusNext(sId,o);
    if (sResult=="END" && bCanScrollH) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, (ur_system.direction=="rtl")? UR_SCROLL_BY.PREVIOUS_ITEM: UR_SCROLL_BY.NEXT_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  
  if(iKey==37 && (sCt!="I" && sCt!="TE")){
    var sResult="";
    if (ur_system.direction=="rtl")
      sResult=sapUrMapi_SapTable_focusNext(sId,o);
    else
      sResult=sapUrMapi_SapTable_focusPrevious(sId,o);
    if (sResult=="END" && bCanScrollH) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, (ur_system.direction=="rtl")? UR_SCROLL_BY.NEXT_ITEM: UR_SCROLL_BY.PREVIOUS_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  else if(iKey==9){
    var oTableInfoObject=ur_Table_create(sId);
    oTableInfoObject.focusedCell=null;
  }
  
  
  
  
  if (bCanScrollH && bA && !bS && !bC && sCt!="TE") {
    
    if(iKey==33){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, UR_SCROLL_BY.PREVIOUS_PAGE);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==34){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, UR_SCROLL_BY.NEXT_PAGE);
      ur_EVT_cancel(e);
      return;
    }
  }
  
  if (bCanScrollV && !bA && !bS && sCt!="I" && sCt!="TE") {
    
    if(iKey==36 && bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.BEGIN);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==35 && bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.END);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==33 && !bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.PREVIOUS_PAGE);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==34 && !bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.NEXT_PAGE);
      ur_EVT_cancel(e);
      return;
    }
  }
  
  return sapUrMapi_skip(sId,e);
}
function ur_SapTable_getCell(o){
  var oCell=o;
  while(oCell.getAttribute("tp")!="HIC"){
    if(oCell.getAttribute("ct")=="ST") return null;
    oCell=oCell.parentNode;
  }
  return oCell;
}
function sapUrMapi_SapTable_HiCell_he(o,oEvt) {
	var o=ur_evtSrc(oEvt);
	var oCell=ur_SapTable_getCell(o);
	var sCt=sapUrMapi_getControlTypeFromObject(o);
	var sFunc="";
	var oFunc=null;
	
	if(o==null || oCell==null) return;
	
	
	
	if( (sCt=="FU" || sCt=="I" || sCt=="CB" || sCt=="TE" || sCt=="TGL") && !(oEvt.ctrlKey && oEvt.type=="keydown" && (oEvt.keyCode==107 || oEvt.keyCode==109)) )
			return;
			
		
	
	if( oEvt.type!="click" && !(oEvt.type=="keydown" && (oEvt.keyCode==32 || (oEvt.keyCode==107) || (oEvt.keyCode==109) )))
		return;
		
	if (oEvt.type=="keydown" && o.tagName != "IMG") o = oCell.getElementsByTagName("IMG")[0];
		
	var sStc=o.getAttribute("stc"); 
	if(sStc) {
		if (oEvt.type=="keydown") {
			if (sStc=="oex" && oEvt.keyCode==107)
				ur_EVT_fire(oCell,sStc,oEvt);
			else if (sStc=="oco" && oEvt.keyCode==109)
				ur_EVT_fire(oCell,sStc,oEvt);
			else if (oEvt.keyCode==32)
				ur_EVT_fire(oCell,sStc,oEvt);
		} else {
			ur_EVT_fire(oCell,sStc,oEvt);
		}
	} else if (oCell.getAttribute("oc"))
		ur_EVT_fire(oCell,"oc",oEvt);
	
	return ur_EVT_cancel(oEvt);		
}
function sapUrMapiSapTable_sort(oCell,bAsc){
  var aBtn;
  var oBtn=null;
  var sTp=oCell.getAttribute("tp");
  if(sTp==null || sTp.indexOf("HDR")<0) return false;
  aBtn=oCell.getElementsByTagName("button");
  for(var i=0;i<aBtn.length;i++)
    if(aBtn[i].className.indexOf("urSTIconSor")>=0 || aBtn[i].className=="urSTIconUnsorted")oBtn=aBtn[i];
  if(oBtn!=null) oBtn.click();
  return true;
}
function sapUrMapi_SapTable_activate(sId,e){
  var o=e.srcElement;
  var oTab=ur_Table_create(sId);
  if(oTab) {
    var oCell=sapUrMapi_SapTable_getModelCellOfCnt(sId,o);
    oTab.focusedCell=oCell;
  }
}
function sapUrMapi_SapTable_deactivate(oEvt){
}
function sapUrMapi_SapTable_focusCell(oCell, sTableId){
  var oFocus = null;
  
  if(oCell==null) return null; 
  
  if( oCell.ref.firstChild!=null && oCell.ref.firstChild.nodeType!=3 && (oCell.ref.firstChild).getAttribute('ct')!="PI")
    oFocus=sapUrMapi_findFirstFocus(oCell.ref.firstChild);
  
  if(oFocus!=null){
    ur_focus(oFocus);
  }
  
  else {
    var sCellType=oCell.ref.getAttribute("tp"),
      oDomRefToFocus = oCell.ref.firstChild;
    if(sCellType!=null && sCellType=="ER") return false;
    sapUrMapi_setTabIndex(oDomRefToFocus,"0");
    sapUrMapi_setTabIndexAutoReset(oDomRefToFocus);
    if(sTableId && !oDomRefToFocus.id) oDomRefToFocus.id = sapUrMapi_SapTable_sGenerateMatrixId(sTableId, oCell.rowIdx, oCell.colIdx);
    ur_focus(oDomRefToFocus);
  }
  return true;
}
function sapUrMapi_SapTable_sGenerateMatrixId(sRootId, iRowIndex, iColIndex){ 
  return sRootId + "-mtx_" + iRowIndex + "_" + iColIndex + "_mtx-";
}
function sapUrMapi_SapTable_bIsMatrixId(sId){
  return sId && sId.indexOf("-mtx_") > 0 && sId.indexOf("_mtx-") == sId.length-5;
}
function sapUrMapi_SapTable_focusMatrixItem(sMatrixId){
  var iPosBeginIndex = sMatrixId.indexOf("-mtx_"),
    sRootId = sMatrixId.substring(0, iPosBeginIndex),
    sPos = sMatrixId.substring(iPosBeginIndex+5, sMatrixId.length - 5),
    aPos = sPos.split("_"),
    iRowIndex = parseInt(aPos[0]),
    iColIndex = parseInt(aPos[1]);
  sapUrMapi_SapTable_focusTableCellByPos(sRootId, iRowIndex, iColIndex);
}
function sapUrMapi_SapTable_focusTableCellByPos(sTableId, iRowIndex, iColIndex){
  var oTable = ur_Table_create(sTableId),
    oCell = (oTable.rows[iRowIndex])? oTable.rows[iRowIndex].cells[iColIndex]: null;
  if(oCell) {
    sapUrMapi_SapTable_focusCell(oCell, sTableId);
    oTable.focusedCell = oCell;
  }
}
function sapUrMapi_SapTable_sGetMatrixIdByContentDomRef(sTableId, oContentDomRef){
  var oDomRefTable=ur_get(sTableId),
    oTableInfo = (oDomRefTable.ct == "ST")? ur_Table_create(sTableId): null,
    oCurrDomRef = oContentDomRef;
  if(oTableInfo) {
    while(oCurrDomRef != null && oCurrDomRef != oDomRefTable && oCurrDomRef.tagName!="BODY") {
      if(oCurrDomRef.parentNode && oCurrDomRef.parentNode.rr && oCurrDomRef.id){
        var oCellInfo = oTableInfo.lookup[oCurrDomRef.id];
        if(oCellInfo) return sapUrMapi_SapTable_sGenerateMatrixId(sTableId, oCellInfo.rowIdx, oCellInfo.colIdx);
      }
      oCurrDomRef = oCurrDomRef.parentNode;
    }
  }
  return "";
}
function sapUrMapi_SapTable_bIsTableId(sTableId){
  var oDomRefTable=ur_get(sTableId);
  return oDomRefTable && oDomRefTable.ct == "ST";
}
function sapUrMapi_SapTable_getTooltip(o,oCell,oTab){
  
}
var _ur_tables=new Array();
function ur_Table_create(sId) {
  if (_ur_tables[sId]==null) {
    if(ur_SapTableClientScroll_isClientScrollTable(sId))
      return null;
    var oRows = new Array();
    var oRefCells = new Array();
    var oBdy = null;
    var iR=0;
    var oTab=ur_get(sId);
    var bHasTb=false;
    var oTb=null;
    while(oBdy==null){
      if (oTab.rows[iR].cells[0]==null){iR++;continue;}
      var oTmp=oTab.rows[iR].cells[0].firstChild;
      if (oTmp==null) {iR++;continue;}
      if (oTmp.tagName=="TABLE") {
        if (oTmp.className.indexOf("urST3Bd")>-1) {
          oBdy=oTmp;
          
          if (oBdy.ur_firstTBodyOnly && oBdy.tBodies && oBdy.tBodies.length && oBdy.tBodies.length > 0)
            oBdy=oBdy.tBodies[0];
          
          break;
        }
        if (oTmp.firstChild.firstChild.firstChild.getAttribute("ct")=="T") {
          oTb=oTmp.firstChild.firstChild.firstChild;
          bHasTb=true;
        }
      }
      iR++;
    }
    if (oBdy==null) return null;
    var oTRows = oBdy.rows;
    var oDCells = null;
    var oRowSpanedCells = new Array();
    var iMaxCols=0;
    for (var iRowCount=0;iRowCount<oTRows.length;iRowCount++)  {
      for (var iColCount=0;iColCount<oTRows[iRowCount].cells.length;iColCount++) {
        var iColSpan=parseInt(oTRows[iRowCount].cells[iColCount].colSpan);
        if (isNaN(iColSpan)) iColSpan=1;
        iMaxCols=iMaxCols+iColSpan;
      }
      break;
    }
    for (var iRowCount=0;iRowCount<oTRows.length;iRowCount++)  {
      oRows.push({irowidx:iRowCount,ref:null,cells:new Array(iMaxCols)});
    }
    for (var iRowCount=0;iRowCount<oTRows.length;iRowCount++)  {
      var oCells = oRows[iRowCount].cells;
      var iColCount=0, oOrgCell = null, oTmpCell = null;
      oDCells=oTRows[iRowCount].cells;
      for (var iCol = 0; iCol<oDCells.length; iCol++) {
        while (oCells[iColCount]) iColCount++;
        oRows[iRowCount].cells[iColCount] = {ref:oDCells[iCol]};
        var iColSpan=parseInt(oDCells[iCol].colSpan);
        if (isNaN(iColSpan)) iColSpan=1;
        var iRowSpan=parseInt(oDCells[iCol].rowSpan);
        if (isNaN(iRowSpan)) iRowSpan = 1;
        for (var x=1;x<=iColSpan;x++) {
          for (var iRowSpanCount = 1 ; iRowSpanCount <= iRowSpan; iRowSpanCount++) {
            oTmpCell = {ref:oDCells[iCol],cspan:iColSpan>1,rspan:iRowSpan>1};
            if(x == 1 && iRowSpanCount == 1) {
              oOrgCell = oTmpCell;
              oOrgCell.iRowSpan = iRowSpan;
              oOrgCell.iColSpan = iColSpan;
            }
            oTmpCell.oOrgCell = oOrgCell;
            oRows[iRowCount+iRowSpanCount-1].cells[iColCount] = oTmpCell;
          }
          iColCount++;
        }
      }
      iColCount++;
      oRows[iRowCount].ref=oTRows[iRowCount];
    }
    var oCols=new Array();
    for (var i=0; i<oRows.length; i++){
      for (var j=0; j<oRows[i].cells.length; j++) {
        if (oRows[i].cells[j] == null) {
          oRows[i].cells[j]={ref:oRows[i].cells[j-1].ref,empty:true};
          oRows[i].cells[j-1].last=true;
        } else {
          oRows[i].cells[j].empty=false;
          oRows[i].cells[j].last=j==oRows[i].cells.length-1?true:false;
        }
        if (i>0) oRows[i].previousRow=oRows[i-1];
        if (i<oRows.length-1) oRows[i].nextRow=oRows[i+1];
        oRows[i].irowidx=i;
        var oCell=oRows[i].cells[j];
        oRows[i].sel=-1;
        oCell.foc=false;
        oCell.sel=-1;
        oCell.type="te";
        oCell.parentRow=oRows[i];
        oCell.first=j==0?true:false;
        oCell.isTH=oCell.ref.tagName=="TH";
        oCell.rowIdx=i;
        oCell.colIdx=j;
        if (i==0) {
          oCols.push({icolidx:j,cells:new Array()});
        }
        oCell.parentCol=oCols[j];
        oCols[j].cells.push(oCell);
        oCols[j].sel=-1;
        if (oCell.ref.id==null || oCell.ref.id=="") {
          oCell.ref.setAttribute("id",sId+"-cell-"+i+"-"+j);
        }
        oRefCells[oCell.ref.id]=oCell;
      }
    }
    _ur_tables[sId]={rows:oRows,cols:oCols,lookup:oRefCells,ref:oTab,hasToolbar:bHasTb,toolbar:oTb};
    var debugMode="";
    if (debugMode=="table") {
      var sRenderTable = "<table border='1'>";
      for (var y=0;y<_ur_tables[sId].rows.length;y++) {
        sRenderTable+="<tr>";
        for (var x=0;x<_ur_tables[sId].rows[y].cells.length;x++) {
          sRenderTable+="<td>"+_ur_tables[sId].rows[y].cells[x].rspan + x+" "+y+" "+_ur_tables[sId].rows[y].cells[x].ref.innerText+"</td>";
        }
        sRenderTable+="</tr>";
      }
      sRenderTable+="</table>";
      var oDiv = document.createElement("DIV");
      document.body.appendChild(oDiv);
      oDiv.innerHTML = sRenderTable;
    }
  }
  return _ur_tables[sId];
}
function sapUrMapi_SapTable_Scrollbar_scroll(sId,oEvt) {
  var o=document.getElementById(sId.split("-")[0]);
  if (!o) return;
  if (oEvt.ur_param && oEvt.ur_param["dir"]) {
    var dir=oEvt.ur_param["dir"];
    if (dir=="v") {
      if (ur_getAttD(o,"o"+dir+"scrl","")!="") ur_EVT_fire(o,"o"+dir+"scrl",oEvt);
    } else if (dir=="h") {
      if (ur_getAttD(o,"o"+dir+"scrl","")!="") ur_EVT_fire(o,"o"+dir+"scrl",oEvt);
    }
  }
}
var ur_oCRConfig = null;
function ur_SapTable_CR_init(oCRConfig) {
  ur_oCRConfig = oCRConfig;
  var oSrcHeader = ur_getNextHtmlParentByTagName(oCRConfig.oDragSource, "TH"),
    oTable = document.getElementById(oCRConfig.sTableId);
  if(oSrcHeader && oTable) {
    var oHeaderRow = oSrcHeader.parentNode,
      oCurrHeader=null,
      oHeaderInfo = null,
      bCanResize = false,
      oDomRefContentTable = document.getElementById(oCRConfig.sTableId + "-content").getElementsByTagName("TABLE")[0],
      oDomRefColGroup = oDomRefContentTable.getElementsByTagName("COLGROUP")[0];
      aDomRefCols = oDomRefColGroup? oDomRefColGroup.getElementsByTagName("COL"): null;
    
    
    
    oCRConfig.oTable = oTable;
    oCRConfig.oTablePos = sapUrMapi_getAbsolutePositionInScrollContainer(oTable);
    oCRConfig.iMinColumnWidth = 25;
    oCRConfig.oAllHeaderInfos = [];
    oCRConfig.iNextColumnsTotalWidth = 0;
    oCRConfig.iSrcIndex = -1;
    oCRConfig.oSrcHeaderPos = sapUrMapi_getAbsolutePositionInScrollContainer(oSrcHeader);
    oCRConfig.sColWidths = "";
    
    var oDomRefContainer = oTable.parentElement, iScrollOffsetX =0;
    while(oDomRefContainer != null) {
      iScrollOffsetX += oDomRefContainer.scrollLeft;
      oDomRefContainer = oDomRefContainer.parentElement;
    }
    iScrollOffsetX = Math.max(iScrollOffsetX, 0);
    oCRConfig.iMinHorizontalMove = oCRConfig.oSrcHeaderPos.left + oCRConfig.iMinColumnWidth - iScrollOffsetX;
    oCRConfig.iMaxHorizontalMove = oCRConfig.iMinHorizontalMove; 
    for(var i=0; i<oHeaderRow.childNodes.length; i++) {
      oCurrHeader = oHeaderRow.childNodes[i];
      if( !(i==0 && ur_hasClassName(oCurrHeader, "urST3H1Scol")) && oCurrHeader.tagName == "TH") {
        oHeaderInfo = {
          oHeaderRef: oCurrHeader,
          iWidthBefore: oCurrHeader.offsetWidth,
          iWidthAfter: -1,
          bIsResizable: (oCurrHeader.getAttribute("rszbl") == "X"),
          sWidthUnitAfter: null,
          iWidthAmountAfter: -1,
          sWidthUnitBefore: null,
          iWidthAmountBefore: -1,
          sOrignalStyleWidth: aDomRefCols? aDomRefCols[i].style.width: null
        };
        if(oCurrHeader == oSrcHeader) {
          oCRConfig.iSrcIndex = oCRConfig.oAllHeaderInfos.length;
        }
        if(oHeaderInfo.sOrignalStyleWidth) {
          var iWidthAmount = parseInt(oHeaderInfo.sOrignalStyleWidth),
            sWidthAmount = new String(iWidthAmount),
            sWidthUnit = oHeaderInfo.sOrignalStyleWidth.substr(sWidthAmount.length);
          if(sWidthUnit == "%") {
            oHeaderInfo.iWidthAmountBefore = iWidthAmount;
            oHeaderInfo.sWidthUnitBefore = "%";
          } else if(oCRConfig.iSrcIndex != -1){
            oHeaderInfo.iWidthAmountBefore = oHeaderInfo.iWidthBefore;
            oHeaderInfo.sWidthUnitBefore = "px";
          } else {
            oHeaderInfo.iWidthAmountBefore = iWidthAmount;
            oHeaderInfo.sWidthUnitBefore = sWidthUnit;
          }
        }
        if(oCRConfig.iSrcIndex != -1) { 
          if(oHeaderInfo.bIsResizable) {
            oCRConfig.iMaxHorizontalMove += oHeaderInfo.iWidthBefore - oCRConfig.iMinColumnWidth;
            if(oCurrHeader != oSrcHeader) bCanResize=true;
          }
          if(oCurrHeader != oSrcHeader && oHeaderInfo.bIsResizable) oCRConfig.iNextColumnsTotalWidth += oHeaderInfo.iWidthBefore;
        } else {
          
          
          oHeaderInfo.iWidthAfter = oHeaderInfo.iWidthBefore;
          oHeaderInfo.sWidthUnitAfter = oHeaderInfo.sWidthUnitBefore;
          oHeaderInfo.iWidthAmountAfter = oHeaderInfo.iWidthAmountBefore;
        }
        oCRConfig.oAllHeaderInfos[oCRConfig.oAllHeaderInfos.length] = oHeaderInfo;
      }
    }
    if(bCanResize) {
      ur_SapTable_CR_hideResizeHandles(oCRConfig.sTableId);
      ur_setCapture(oCRConfig.oDragSource);
      ur_attachEvent(oCRConfig.oDragSource, "mousemove", ur_SapTable_CR_resizeMove);
      ur_attachEvent(oCRConfig.oDragSource, "mouseup", ur_SapTable_CR_resizeEnd);
    }
  }
}
function ur_SapTable_CR_cleanUp() {
  var oCRConfig = ur_oCRConfig;
  ur_releaseCapture(oCRConfig.oDragSource);
  ur_detachEvent(oCRConfig.oDragSource, "mousemove", ur_SapTable_CR_resizeMove);
  ur_detachEvent(oCRConfig.oDragSource, "mouseup", ur_SapTable_CR_resizeEnd);
  ur_SapTable_hideReferenceLine();
  ur_SapTable_CR_showResizeHandles(oCRConfig.sTableId);
  ur_oCRConfig = null;
}
function ur_SapTable_CR_resizeMove(oEvt) {
  var oCRConfig = ur_oCRConfig;
  oCRConfig.iCurrHorizontalMove = Math.min(Math.max(oCRConfig.iMinHorizontalMove, oEvt.x), oCRConfig.iMaxHorizontalMove) + ur_getBodyRef().scrollLeft;
  ur_SapTable_showReferenceLine(
    oCRConfig.iCurrHorizontalMove,
    oCRConfig.oSrcHeaderPos.top,
    oCRConfig.oTable.offsetHeight - (oCRConfig.oSrcHeaderPos.top - oCRConfig.oTablePos.top),
    oCRConfig.oTable,
    null,
    0,
    false);
}
function ur_SapTable_CR_resizeEnd(oEvt) {
  var oCRConfig = ur_oCRConfig,
    oCurrHeaderInfo = null,
    iResultWidth = oCRConfig.iCurrHorizontalMove - oCRConfig.oSrcHeaderPos.left,
    oldTotalWidth = oCRConfig.iNextColumnsTotalWidth,
    newTotalWidth = oldTotalWidth - (iResultWidth - oCRConfig.oAllHeaderInfos[oCRConfig.iSrcIndex].iWidthBefore),
    iCheckSum = 0,
    iPercentTotalValue= 0,
    iPercentNewTotalWidthInPx= 0,
    aPercentColumnInfos = new Array();
  for(var i=0;  i < oCRConfig.oAllHeaderInfos.length; i++) {
    oCurrHeaderInfo = oCRConfig.oAllHeaderInfos[i];
    if(i >= oCRConfig.iSrcIndex) {
      if(i==oCRConfig.iSrcIndex) {
        oCurrHeaderInfo.iWidthAfter =  iResultWidth;
      } else {
        if(oCurrHeaderInfo.bIsResizable) {
          oCurrHeaderInfo.iWidthAfter = Math.max(oCRConfig.iMinColumnWidth, Math.round(newTotalWidth/oldTotalWidth * (oCurrHeaderInfo.iWidthBefore)));
          iCheckSum += oCurrHeaderInfo.iWidthAfter;
        } else {
          oCurrHeaderInfo.iWidthAfter = oCurrHeaderInfo.iWidthBefore;
        }
        if(i == oCRConfig.oAllHeaderInfos.length-1) { 
          oCurrHeaderInfo.iWidthAfter -= iCheckSum - newTotalWidth ;
        }
      }
    }
    if(oCurrHeaderInfo.sWidthUnitBefore == "%" || !oCurrHeaderInfo.sOrignalStyleWidth) {
      aPercentColumnInfos[aPercentColumnInfos.length] = oCurrHeaderInfo;
      iPercentNewTotalWidthInPx += oCurrHeaderInfo.iWidthAfter;
    } else if(oCurrHeaderInfo.iWidthAmountAfter == -1) { 
      oCurrHeaderInfo.iWidthAmountAfter = oCurrHeaderInfo.iWidthAfter;
      oCurrHeaderInfo.sWidthUnitAfter = "px";
    }
  }
  
  var iWidthLeftOver = 100,
    iPercentNewWidthInPc = 0;
  for(var i=0;  i < aPercentColumnInfos.length; i++) {
    oPercentColumnInfo = aPercentColumnInfos[i];
    if(oPercentColumnInfo.iWidthAmountAfter == -1) {
      iPercentNewWidthInPc = parseInt(100 * oPercentColumnInfo.iWidthAfter/ iPercentNewTotalWidthInPx);
      iWidthLeftOver -= iPercentNewWidthInPc;
      if(i == aPercentColumnInfos.length-1) { 
        iPercentNewWidthInPc += iWidthLeftOver;
      }
      oPercentColumnInfo.iWidthAmountAfter = iPercentNewWidthInPc;
      oPercentColumnInfo.sWidthUnitAfter = "%";
    } else {
      iWidthLeftOver -= oPercentColumnInfo.iWidthAmountAfter;
    }
  }
  
  for(var i=0;  i < oCRConfig.oAllHeaderInfos.length; i++) {
    oCurrHeaderInfo = oCRConfig.oAllHeaderInfos[i];
    oCRConfig.sColWidths += oCurrHeaderInfo.iWidthAmountAfter + oCurrHeaderInfo.sWidthUnitAfter + ";";
  }
  oEvt.ur_param = {
    colWidths: oCRConfig.sColWidths
  }
  ur_SapTable_CR_cleanUp();
  ur_EVT_fire(oCRConfig.oTable,"onColumnResize",oEvt,window);
}
function ur_SapTable_CR_isResizeOperation(oEvt) {
  var oEvtSrc = ur_EVT_src(oEvt);
  return ur_hasClassName(oEvtSrc, "urSTTHResize");
}
function ur_SapTable_CR_getResizeHandle(oTableHeaderCell) {
  if(oTableHeaderCell && oTableHeaderCell.firstChild && oTableHeaderCell.firstChild.tagName=="TABLE") {
    var oHeaderTable=oTableHeaderCell.firstChild,
     oTDs = oHeaderTable.getElementsByTagName("TD");
     oCurrTD = null;
    for(var i=0; i<oTDs.length; i++) {
      oCurrTD=oTDs[i];
      if(oCurrTD.getAttribute("fid")=="resizeHandle") return oCurrTD;
    }
  }
  return null;
}
function ur_SapTable_CR_hideResizeHandles(sTableId) {
  var oTable = document.getElementById(sTableId);
  if(oTable && !oTable.hiddenResizeHandles) {
    var oTHs = oTable.getElementsByTagName("TH"),
      oResizeHandle=null;
    for(var i=0; i<oTHs.length; i++) {
      oResizeHandle = ur_SapTable_CR_getResizeHandle(oTHs[i]);
      if(oResizeHandle) {
        oResizeHandle.style.visibility="hidden";
      }
    }
    
    oTable.hiddenResizeHandles = true;
  }
}
function ur_SapTable_CR_showResizeHandles(sTableId) {
  var oTable = document.getElementById(sTableId);
  if(oTable && oTable.hiddenResizeHandles) {
    var oTHs = oTable.getElementsByTagName("TH"),
      oResizeHandle=null;
    for(var i=0; i<oTHs.length; i++) {
      oResizeHandle = ur_SapTable_CR_getResizeHandle(oTHs[i]);
      if(oResizeHandle) {
        oResizeHandle.style.visibility="";
      }
    }
    
    oTable.hiddenResizeHandles = false;
  }
}
function ur_SapTable_Drag_mousedown(sTableId,oEvt) {
  if(ur_SapTable_CR_isResizeOperation(oEvt)) {
    ur_SapTable_CR_init({
      sTableId: sTableId,
      oDragSource : ur_EVT_src(oEvt)
    });
  } else {
    var oDDConfig = {
        oEvt: oEvt,
        oDocumentMoveHandler: ur_SapTable_Drag_handler,
        oDataBag:{
          sTableId: sTableId
        }
      };
    ur_DragDrop_init(oDDConfig);
  }
  var o = ur_EVT_src(oEvt);
  if(ur_hasClassName(o, "urSTDragData")) {
    
    o.createTextRange().select();
  }
}
function ur_SapTable_Drag_Drop(oDragDropResult) {
  var oDragDropResult = ur_SapTable_getTargetHeader(oDragDropResult);
  oDragDropResult.oEvt.ur_param = {
    sMovedColId: oDragDropResult.oDragSource.id,
    sInsertMode: oDragDropResult.sInsertMode,
    sRefColId: oDragDropResult.oTarget.id
  }
  ur_SapTable_CR_showResizeHandles(oDragDropResult.oDataBag.sTableId);
  ur_SapTable_hideReferenceLine();
  ur_EVT_fire(oDragDropResult.oTable,"onColumnReorder",oDragDropResult.oEvt,window);
  return true;
}
function ur_SapTable_Drag_DropCancel(oDragDropResult) {
  ur_SapTable_CR_showResizeHandles(oDragDropResult.oDataBag.sTableId);
  ur_SapTable_hideReferenceLine();
  return true;
}
function ur_SapTable_Drag_handler(oDragDropResult) {
  if (oDragDropResult.sState == "MOVE") {
    return ur_SapTable_Drag_DragMove(oDragDropResult);
  } else if (oDragDropResult.sState == "DROP") {
    return ur_SapTable_Drag_Drop(oDragDropResult);
  } else if (oDragDropResult.sState == "CANCEL") {
    return ur_SapTable_Drag_DropCancel(oDragDropResult);
  }
  return false;
}
function ur_SapTable_getTargetHeader(oDragDropResult) {
  var oTarget = oDragDropResult.oDropTarget,
    oPreviousTarget = oTarget.previousSibling,
    oSource = oDragDropResult.oDragSource,
    oPos = null,
    oTable = ur_get(oDragDropResult.oDataBag.sTableId),
    oTablePos = sapUrMapi_getAbsolutePositionInScrollContainer(oTable);
  oPos = sapUrMapi_getAbsolutePositionInScrollContainer(oTarget);
  oPos.width = oTarget.offsetWidth;
  oPos.height = oTarget.offsetHeight;
  if (oDragDropResult.iMouseX < oTablePos.left || oDragDropResult.iMouseX > oTablePos.left + oTable.offsetWidth ||
      oDragDropResult.iMouseY < oTablePos.top || oDragDropResult.iMouseY > oTablePos.top + oTable.offsetHeight) {
      return null;
  }
  if (oDragDropResult.iMouseX < oPos.left + (oTarget.offsetWidth/2)) {
    if (oPreviousTarget && ur_DragDrop_hasFlavour(oSource, oPreviousTarget)) {
      oTarget = oPreviousTarget;
      oDragDropResult.sInsertMode = "AFTER";
    } else if(ur_DragDrop_hasFlavour(oSource, oTarget)){
      oDragDropResult.sInsertMode = "BEFORE";
    } else {
      oDragDropResult.sInsertMode = "AFTER";
      return null;
    }
    oPos = sapUrMapi_getAbsolutePositionInScrollContainer(oTarget);
    oPos.width = oTarget.offsetWidth;
    oPos.height = oTarget.offsetHeight;
  } else {
    oDragDropResult.sInsertMode = "AFTER";
  }
  oDragDropResult.oHeaderPos = oPos;
  oDragDropResult.oTablePos = oTablePos;
  oDragDropResult.oTarget = oTarget;
  oDragDropResult.oTable = oTable;
  return oDragDropResult;
}
function ur_SapTable_Drag_DragMove(oDragDropResult) {
  if (!oDragDropResult.bAllowed) {
      ur_SapTable_hideReferenceLine();
      return false;
  }
  if(oDragDropResult && oDragDropResult.oDataBag && oDragDropResult.oDataBag.sTableId) {
  	ur_SapTable_CR_hideResizeHandles(oDragDropResult.oDataBag.sTableId);
  }
  var oResult = ur_SapTable_getTargetHeader(oDragDropResult);
  if (oResult) {
    ur_SapTable_showReferenceLine(
      (oDragDropResult.sInsertMode == "AFTER")?
        oResult.oHeaderPos.left + oResult.oHeaderPos.width - 1:
        oResult.oHeaderPos.left - 1,
      oResult.oHeaderPos.top + oResult.oHeaderPos.height ,
      oResult.oTable.offsetHeight - (oResult.oHeaderPos.top - oResult.oTablePos.top) - oResult.oHeaderPos.height,
      oResult.oTable,
      oResult.oTarget,
      oResult.oHeaderPos.height,
      true);
    return true;
  } else {
    ur_SapTable_hideReferenceLine();
    return false;
  }
}
function ur_SapTable_Drag_start(sControlId,oEvt) {
  var oControl = ur_get(sControlId);
  oEvt["ur_param"] = {type:"all",rowindex:""};
  var content = ur_EVT_fire(oControl, "ocdg", oEvt, window, "SYNC");
  if(content) {
    ur_ClipboardSet(content);
    return true;
  } else {
    return false;
  }
};
function ur_SapTable_hideReferenceLine() {
  var oLine = ur_get("table-line"),
    oArrow = ur_get("table-arrow");
  if (oLine) oLine.style.top = "-1000";
  if (oArrow) oArrow.style.top = "-1000";
}
function ur_SapTable_showReferenceLine(iLeft,iTop,iHeight,oTable,oTarget,iRowHeight, bShowArrow) {
  var oLine = ur_get("table-line"),
    oArrow = ur_get("table-arrow"),
    oBody = ur_getBodyRef();
  if (!oLine || !oArrow) {
    oArrow = document.createElement("DIV");
    oArrow.style.position = "absolute";
    oArrow.style.height = "10";
    oArrow.style.width = "10";
    oArrow.style.backgroundRepeat="no-repeat";
    oArrow.style.overflow="hidden";
    oArrow.setAttribute("id","table-arrow");
    oArrow.className="urSCBDwn";
    oArrow.style.filter = "progid:DXImageTransform.Microsoft.Alpha( Opacity=80, Style=0 )";
    oLine = document.createElement("DIV");
    oLine.style.position = "absolute";
    oLine.style.borderLeft = "1px solid gray";
    oLine.style.borderRight = "1px solid gray";
    oLine.style.filter = "progid:DXImageTransform.Microsoft.Alpha( Opacity=60, Style=0 )";
    oLine.style.backgroundColor = "black";
    oLine.style.width= "3px";
    oLine.setAttribute("id","table-line");
    oBody.appendChild(oLine);
    oBody.appendChild(oArrow);
  }
  if (oTable.parentNode != oLine.parentNode) {
    oTable.parentNode.appendChild(oLine);
    oTable.parentNode.appendChild(oArrow);
  }
  oArrow.style.top = "-1000";
  oLine.style.top = "-1000";
  var iScrollTop = 0;
  var iScrollLeft = 0;
  if (oLine.parentNode == oBody) {
    iScrollTop = oBody.scrollTop;
    iScrollLeft = oBody.scrollLeft;
  }
  if(bShowArrow) {
    oArrow.style.top = iTop + iScrollTop - iRowHeight-9;
    oArrow.style.left = iLeft + iScrollLeft-5;
  }
  oLine.style.top = iTop + iScrollTop;
  oLine.style.left = iLeft + iScrollLeft;
  oLine.style.height = iHeight-1;
}
function ur_SapTable_ClipboardDataSet (sControlId, sClipboard) {
  var dataBag=ur_get("ur-databag");
  if (!dataBag) return;
  dataBag.innerHTML = sClipboard;
  if (!dataBag.firstChild) {
    dataBag.innerHTML="<div>No data available</div>";
  } else {
    var oRange = dataBag.createTextRange();
    oRange.select();
    oRange.execCommand("Copy");
  }
}
function ur_classNameToStyle(oTag) {
  if (oTag.className && oTag.currentStyle) {
    oTag.style.backgroundColor = oTag.currentStyle.backgroundColor;
    oTag.style.fontFamily      = oTag.currentStyle.fontFamily;
    oTag.style.borderStyle     = oTag.currentStyle.borderStyle;
    oTag.style.borderColor     = oTag.currentStyle.borderColor;
    oTag.style.borderWidth     = oTag.currentStyle.borderWidth;
    oTag.style.padding         = oTag.currentStyle.padding;
    oTag.style.fontSize        = oTag.currentStyle.fontSize;
    oTag.style.textAlign       = oTag.currentStyle.textAlign;
    oTag.style.borderCollapse  = oTag.currentStyle.borderCollapse;
    oTag.className = ""; 
  }
  if (oTag.childNodes) {
    for (var n = 0;n<oTag.childNodes.length;n++) {
      ur_classNameToStyle(oTag.childNodes[n]);
    }
  }
}
function ur_SapTable_applySortCursor(oEvt) {
  var o=ur_evtSrc(oEvt);
  o = ur_getNextHtmlParentByAttribute(o, "stasc");
  o.style.cursor="url(" + ur_system.mimepath + "saptable/sort.cur)";
  o.onmouseover=null;
  return false;
}
var ur_SapTableClientScrollObj;
function ur_SapTableClientScroll_flatSearchByTagName(oDomRefNode, sTagName) {
  if(oDomRefNode) {
    for(var i=0; i< oDomRefNode.childNodes.length; i++) {
      if(oDomRefNode.childNodes[i].tagName == sTagName) return oDomRefNode.childNodes[i];
    }
  }
  return null;
}
function sapUrMapi_SapTableClientScroll_setContentRowSelection(oClientScrollObj, iRowIndex, eState) {
  var aDomRefRows=[], oDomRefRow=null, aContentFragments=ur_SapTableClientScroll_getContentFragments(oClientScrollObj);
  for(var i=0; i<aContentFragments.length; i++) {
    aDomRefRows[aDomRefRows.length] = ur_SapTableClientScroll_getInnerTable(aContentFragments[i]).rows[iRowIndex-1];
  }
  for(var i=0; i<aDomRefRows.length; i++) {
    oDomRefRow = aDomRefRows[i];
    if(oDomRefRow.eState === eState) continue;
    sapUrMapi_SapTable_setSelection(oDomRefRow, eState);
    oDomRefRow.eState = eState;
  }
}
function ur_SapTableClientScroll_getContentFragments(oClientScrollObj) {
  var aContentFragments=[];
  if(oClientScrollObj.oDomRefContentContLeft) aContentFragments[aContentFragments.length] = oClientScrollObj.oDomRefContentContLeft;
  if(oClientScrollObj.oDomRefContentContNone) aContentFragments[aContentFragments.length] = oClientScrollObj.oDomRefContentContNone;
  if(oClientScrollObj.oDomRefContentContRight) aContentFragments[aContentFragments.length] = oClientScrollObj.oDomRefContentContRight;
  return aContentFragments;
}
function ur_SapTableClientScroll_getInnerTable(oFragmentRef) {
    return ur_SapTableClientScroll_flatSearchByTagName(oFragmentRef, "TABLE");
}
function ur_SapTableClientScroll_getCols(oClientScrollObj) {
  if(oClientScrollObj.aCols) return oClientScrollObj.aCols;
  var aCols=[],
    oDomRefCurrTable=null,
    oDomRefCurrColGroup=null,
    aDomRefCurrCols=null,
    aContentFragments=ur_SapTableClientScroll_getContentFragments(oClientScrollObj);
  for(var i=0; i<aContentFragments.length; i++) {
    oDomRefCurrTable = ur_SapTableClientScroll_getInnerTable(aContentFragments[i]);
    oDomRefCurrColGroup = ur_SapTableClientScroll_flatSearchByTagName(oDomRefCurrTable, "COLGROUP");
    aDomRefCurrCols = oDomRefCurrColGroup? oDomRefCurrColGroup.getElementsByTagName("COL"): null;
    for(var j=0; j<aDomRefCurrCols.length; j++) {
      aCols[aCols.length] = {
          oFragment: aContentFragments[i],
          oDomRefCol: aDomRefCurrCols[j],
          iIndexInColGroup: j
        };
    }
  }
  oClientScrollObj.aCols = aCols;
  return oClientScrollObj.aCols;
}
function sapUrMapi_SapTableClientScroll_setColSelection(oClientScrollObj, iColIndex, eState) {
  var aCols=ur_SapTableClientScroll_getCols(oClientScrollObj),
    oCol = aCols[iColIndex-1];
    
    if(oCol.oDomRefCol.eState === eState) return;
    aDomRefRows = ur_SapTableClientScroll_getInnerTable(oCol.oFragment).rows;
    for(var i=0; i<aDomRefRows.length; i++) {
      sapUrMapi_SapTable_setCellSelection(aDomRefRows[i].cells[oCol.iIndexInColGroup], eState);
    }
    oCol.oDomRefCol.eState = eState;
}
function sapUrMapi_SapTableClientScroll_setCellSelection(oClientScrollObj, iRowIndex, iColIndex, eState) {
}
function ur_SapTableClientScroll_isClientScrollTable(sId) {
  if(sId) {
    var oContentTD = ur_get(sId + "-content"),
      oDomRefClientScroll = ur_SapTableClientScroll_flatSearchByTagName(oContentTD, "TABLE"),
      sClientScrollId = ur_getAttD( oDomRefClientScroll, "id", "");
    if(oDomRefClientScroll && (oDomRefClientScroll.vcrc || oDomRefClientScroll.vcrc === "0" )) return true;
  }
  return false;
}
function ur_SapTableClientScroll_EnvironmentInit() {
  ur_SapTableClientScrollObj = new Array();
}
function ur_SapTableClientScroll_EnvironmentCleanUp() {
  ur_SapTableClientScrollObj = null;
}
function sapUrMapi_SapTableClientScroll_registerCreate(sId) {
  sapUrMapi_Create_AddItem(sId, "ur_SapTableClientScroll_init('"+sId+"')");
}
function ur_SapTableClientScroll_getObject(sId) {
  if(ur_SapTableClientScrollObj[sId]) return ur_SapTableClientScrollObj[sId];
  var oDomRefClientScroll = ur_get(sId),
    oClientScrollObj = {
    oDomRefClientScroll: oDomRefClientScroll,
    sVScrollbarId: ur_getAttD(oDomRefClientScroll, "vsbid", ""),
    sHScrollbarId: ur_getAttD(oDomRefClientScroll, "hsbid", ""),
    oDomRefContentHdrNone: ur_get(sId + "-mrss-hdr-none"),
    oDomRefContentTfxNone: ur_get(sId + "-mrss-tfx-none"),
    oDomRefContentContLeft: ur_get(sId + "-mrss-cont-left"),
    oDomRefContentContNone: ur_get(sId + "-mrss-cont-none"),
    oDomRefContentContRight: ur_get(sId + "-mrss-cont-right"),
    oDomRefContentBfxNone: ur_get(sId + "-mrss-bfx-none"),
    iVisibleContentRowCount: parseInt(ur_getAttD(oDomRefClientScroll,"vcrc","0")),
    iFirstVisibleContentRowIndex: parseInt(ur_getAttD(oDomRefClientScroll,"fvcri","0"))
  }
  ur_SapTableClientScrollObj[sId] = oClientScrollObj;
  return oClientScrollObj;
}
function ur_SapTableClientScroll_init(sId) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId),
    iHorizontalScrollPosition = parseInt(ur_getAttD(oScrollBarObj.oDomRefClientScroll,"hsp","0"));
  ur_SapTableClientScroll_updateHScrollbar(oScrollBarObj, iHorizontalScrollPosition);
  ur_Scrollbar_setCallback( oScrollBarObj.sHScrollbarId, "ur_SapTableClientScroll_callBackResizeH", "ur_SapTableClientScroll_callBackChangeH");
  ur_Scrollbar_setCallback( oScrollBarObj.sVScrollbarId, null, "ur_SapTableClientScroll_callBackChangeV");
}
function ur_SapTableClientScroll_updateHScrollbar(oScrollBarObj, iHorizontalScrollPosition) {
  if(oScrollBarObj.oDomRefContentContNone) {
    var iScrollWindowWidth = oScrollBarObj.oDomRefContentContNone.offsetWidth,
      iScrollWidth = oScrollBarObj.oDomRefContentContNone.scrollWidth,
      iScrollPos = (iHorizontalScrollPosition)? iHorizontalScrollPosition: -(oScrollBarObj.oDomRefContentContNone.firstChild.style.left + 1);
    if(iScrollWindowWidth >= iScrollWidth) iScrollWidth = iScrollWindowWidth;
    ur_Scrollbar_setSizingParams(oScrollBarObj.sHScrollbarId, iScrollPos + 1, iScrollWidth - iScrollWindowWidth + 1, iScrollWindowWidth + 1);
  }
}
function ur_SapTableClientScroll_updateHScrollPositionById(sId, iPos) {
  ur_SapTableClientScroll_updateHScrollPosition(ur_SapTableClientScroll_getObject(sId), iPos);
}
function ur_SapTableClientScroll_updateHScrollPosition(oScrollBarObj, iPos) {
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentHdrNone, iPos);
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentTfxNone, iPos);
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentContNone, iPos);
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentBfxNone, iPos);
}
function ur_SapTableClientScroll_updateHScrollPositionFragment(oDomRefFragment, iPos) {
  if(oDomRefFragment) {
    oDomRefFragment.firstChild.style.left = -(iPos+1) ;
  }
}
function ur_SapTableClientScroll_callBackResizeH(sId) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId);
  ur_SapTableClientScroll_updateHScrollbar(oScrollBarObj);
}
function ur_SapTableClientScroll_callBackChangeH(sId, iValue) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId);
  ur_SapTableClientScroll_updateHScrollPosition(oScrollBarObj, iValue);
}
function ur_SapTableClientScroll_callBackChangeV(sId, iValue) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId);
  if(iValue != oScrollBarObj.iFirstVisibleContentRowIndex) {
    var oMergingObject = {};
    for(var i=iValue, iTo=iValue+oScrollBarObj.iVisibleContentRowCount; i < iTo; i++) {
      oMergingObject[i] = true;
    }
    for(var i=oScrollBarObj.iFirstVisibleContentRowIndex, iTo=oScrollBarObj.iFirstVisibleContentRowIndex+oScrollBarObj.iVisibleContentRowCount; i < iTo; i++) {
      if(!oMergingObject[i]) oMergingObject[i] = false;
    }
    for(var i in oMergingObject) {
      i = parseInt(i);
      if(oMergingObject[i]) ur_SapTableClientScroll_showRow(oScrollBarObj, i);
      else ur_SapTableClientScroll_hideRow(oScrollBarObj, i);
    }
    oScrollBarObj.iFirstVisibleContentRowIndex = iValue;
  }
}
function ur_SapTableClientScroll_showRow(oScrollBarObj, iRowIdx) {
  ur_SapTableClientScroll_showFragmentRow(oScrollBarObj.oDomRefContentContLeft, iRowIdx);
  ur_SapTableClientScroll_showFragmentRow(oScrollBarObj.oDomRefContentContNone, iRowIdx);
  ur_SapTableClientScroll_showFragmentRow(oScrollBarObj.oDomRefContentContRight, iRowIdx);
}
function ur_SapTableClientScroll_hideRow(oScrollBarObj, iRowIdx) {
  ur_SapTableClientScroll_hideFragmentRow(oScrollBarObj.oDomRefContentContLeft, iRowIdx);
  ur_SapTableClientScroll_hideFragmentRow(oScrollBarObj.oDomRefContentContNone, iRowIdx);
  ur_SapTableClientScroll_hideFragmentRow(oScrollBarObj.oDomRefContentContRight, iRowIdx);
}
function ur_SapTableClientScroll_showFragmentRow(oFragment, iRowIdx) {
  if(oFragment && oFragment.childNodes[0] && oFragment.childNodes[0].rows[iRowIdx-1]) {
    oFragment.childNodes[0].rows[iRowIdx-1].style.display = "block";
  }
}
function ur_SapTableClientScroll_hideFragmentRow(oFragment, iRowIdx) {
  if(oFragment && oFragment.childNodes[0] && oFragment.childNodes[0].rows[iRowIdx-1]) {
    oFragment.childNodes[0].rows[iRowIdx-1].style.display = "none";
  }
}
function sapUrMapi_SapTable_setBorderCollapse(sTableId, bCollapse){
	var oTableContent = document.getElementById(sTableId + "-content"),
		oInnerTable = oTableContent? oTableContent.firstChild: null;
	
	
	while(oInnerTable != null && oInnerTable.tagName != "TABLE") {
		oInnerTable = oInnerTable.firstChild;
	}
	
	if(oInnerTable && oInnerTable.tagName == "TABLE") {
		oInnerTable.style.borderCollapse = bCollapse? "collapse": "separate";
	}
}
//** ScreenReader.ie5 **

document.attachEvent("onactivate", ur_SCR_activate);
var _ur_cnt=new Array();
_ur_cnt[ur_type.Group]="";
_ur_cnt[ur_type.PopupTrigger]="";
_ur_cnt[ur_type.SapTable]="";
_ur_cnt[ur_type.SapTableCell]="";
_ur_cnt[ur_type.TableView]="";
_ur_cnt[ur_type.TabStrip]="";
_ur_cnt[ur_type.Toolbar]="";
_ur_cnt[ur_type.Tray]="";
var _ur_SCR=new Array();
_ur_SCR[ur_type.ActiveXContainer]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ActiveXContainer_End]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.AppletContainer]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.AppletContainer_End]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Button]										={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:0}; 
_ur_SCR[ur_type.Button_MenuSection]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B_MNU",v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:0}; 
_ur_SCR[ur_type.Button_Menu]							={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:"SAPUR_MENU_TUT",ctx:0,dt:1,ico:0}; 
_ur_SCR[ur_type.Button_Toggle]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:0}; 
_ur_SCR[ur_type.BreadCrumb_Item]					={lbl:0,rt:0,rct:1,rst:1,rtt:1,rtut:"SAPUR_LRNAV_TUT",t:1,ct:0,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};  
_ur_SCR[ur_type.BreadCrumb_SingleLink]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Calendar_DayView]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Calendar_MultipleDayView] ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Calendar_YearView]			  ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Calendar_MonthView]			  ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Calendar_MonthCell]			  ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Calendar_Entry]			      ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0 ,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0,sem:1};
_ur_SCR[ur_type.Calendar_Entry_Fullday]	  ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0,sem:1};
_ur_SCR[ur_type.Calendar_DayColumn]			  ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Calendar_HierarchicalMonthView] ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Calendar_RowHeader]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:1,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.CheckBox]									={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:0};
_ur_SCR[ur_type.ComboBox]									={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:1,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.ComboBox_DropDownListBox]	={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:1,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:"SAPUR_CB_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.CheckBoxGroup]						={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.CheckBoxGroup_End]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Caption]									={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:0,ctx:0,dt:1,ico:0};	
_ur_SCR[ur_type.ContextualPanel]					  ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ContextualPanel_Help]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_LN",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_LN_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ContextualPanel_Personalize]={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_LN",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_LN_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ContextualPanel_End]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.DateNavigator]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};   
_ur_SCR[ur_type.DateNavigator_Month]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};   
_ur_SCR[ur_type.DateNavigator_Week]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};  
_ur_SCR[ur_type.DateNavigator_Day]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:0,s:1,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0,sem:1};   
_ur_SCR[ur_type.DateNavigator_End]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};   
_ur_SCR[ur_type.FileUpload]								={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:1,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.FreeArea]									={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_G",v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.FreeArea_Personalize]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_LN",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_LN_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.FreeArea_End]							={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:"SAPUR_G_END",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.FormattedTextView]				={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.GeoMap]										={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.GeoMap_Button]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.GeoMap_Image]							={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.GeoMap_End]								={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.GeoMap_ZoomIn]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.GeoMap_ZoomOut]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Group]										={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Group_End]								={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.HorizontalContextualPanel]	={lbl:0,rt:0,rct:"SAPUR_TS",rst:0,rtt:1,rtut:"SAPUR_ITEMGROUP_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.HorizontalContextualPanel_MenuItem]	={lbl:0,rt:0,rct:1,rst:0,rtt:0,rtut:"SAPUR_ITEMGROUP_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.InputField]								={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:1,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:0};	
_ur_SCR[ur_type.InputTokenizer]						={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:1,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Iframe]										={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Iframe_End]								={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ItemList]									={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:1,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ItemListBoxSingle]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:1};	
_ur_SCR[ur_type.ItemListBoxSingle_Item]		={lbl:1,rt:0,rct:1,rst:1,rtt:1,rtut:"SAPUR_UDNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:1};	
_ur_SCR[ur_type.ItemListBoxMultiple]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:1};	
_ur_SCR[ur_type.ItemListBoxMultiple_Item]	={lbl:1,rt:0,rct:1,rst:1,rtt:1,rtut:"SAPUR_UDNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:1};
_ur_SCR[ur_type.Image]										={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:"SAPUR_SELECT_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Label]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0}; 
_ur_SCR[ur_type.Link]							={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.MenuBar]									={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.MenuBar_Item]							={lbl:0,rt:0,rct:0,rst:0,rtt:1,rtut:1,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.MenuBar_End]								={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.MessageBar]								={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.MessageBar_Link]					={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.MeltingGroup]								={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_G",v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.MeltingGroup_End]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:"SAPUR_G_END",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.NavigationList]		 	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.NavigationList_Group]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.NavigationList_Item]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.NavigationList_Personalize]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_LN",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_LN_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.NavigationList_End]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PageHeader]								={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PageHeaderEnd]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Paginator]								={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,dt:0,ico:0};
_ur_SCR[ur_type.Paginator_Button]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Paginator_InputField]			={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_I",v:1,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:0,dt:0,ico:0};
_ur_SCR[ur_type.Paginator_Menu]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_MENUSPACE_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Paginator_TextView]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PatternContainerIconButton]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerIconButton_Expand]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerIconButton_Collapse]={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerIconButton_Min]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerTab]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerTab_Item]	={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_ITEMGROUP_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerTab_End]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerTab_Menu]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_PCTIT_MNU",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerTitle]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerTitle_End]={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerTitle_Menu]={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PatternContainerSequence]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerSequence_Item]={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_ITEMGROUP_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerSequence_End]	={lbl:0,rt:1,rct:1,rst:0,rtt:0,rtut:1,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PatternContainerSequence_Menu]={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PhaseIndicator]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0}; 
_ur_SCR[ur_type.PhaseIndicator_Step]	={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_LRNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:"SAPUR_SELECT_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PopIn]										={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PopIn_CloseButton]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PopIn_End]								={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PopupTrigger]							={lbl:0,rt:0,rct:1,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.PopupMenu_Item]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:"SAPUR_NL_I_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.PopupMenu_SubMenu]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:"SAPUR_NL_I_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.ProgressIndicator]			={lbl:1,rt:0,rct:1,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:1,pos:0,lvl:0,tt:1,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.RadioButton]							={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:1,ico:0};
_ur_SCR[ur_type.RadioButtonGroup]					={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.RadioButtonGroup_End]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.RoadMap]									={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0}; 
_ur_SCR[ur_type.RoadMap_Step]							={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_LRNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.RoadMap_RoundtripClosed]	={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_LRNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.RoadMap_RoundtripStart]		={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_LRNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.RoadMap_RoundtripEnd]			={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_LRNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.RoadMap_RoundTripStep]	={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:"SAPUR_LRNAV_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.ScrollContainer]					={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_G",v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ScrollContainer_End]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:"SAPUR_G_END",v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.SectionHeader]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"TV",v:0,st:0,s:1,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.SapTable]									={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_SortButtonAsc]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_SortButtonDesc]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_SelectionColumn]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_SelectionMenu]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_MENUSPACE_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_FilterButton]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.SapTable_End]							={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_Cell]						={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:1,tut:0,ctx:0,dt:0,ico:0,sem:1};	
_ur_SCR[ur_type.SapTable_EmptyRowCell]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_Header1]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_Header2]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_Header3]					={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.SapTable_SelectionCell]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Toolbar]									={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Toolbar_End]							={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Toolbar_ToggleButton]			={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};
_ur_SCR["TBV"]			 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:"SAPUR_GROUP_TUT",ctx:0,dt:0,ico:0};
_ur_SCR["TBV_END"]		 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_HC"]		 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_SC"]		 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_MNU"]		 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_TOPBTN"]	 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_PRVPG"]	 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_PRVROW"]	 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_NXTROW"]	 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_NXTPG"]	 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_BOTBTN"]	 ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TBV_INDICATOR"] ={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR["TE"]		={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ToggleLink]		={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:"SAPUR_LN_TUT",ctx:0,dt:0,ico:0};
_ur_SCR["TI"]		={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.ToolbarLink]		={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_LN",v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_LN_TUT",ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Tree_Folder]	={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:1,t:1,ct:0,v:0,st:1,s:0,pos:1,lvl:1,tt:1,tbl:0,tut:1,ctx:1,dt:0,ico:0};
_ur_SCR["TR_FC"]            	={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:1,t:1,ct:0,v:0,st:1,s:0,pos:1,lvl:1,tt:1,tbl:0,tut:1,ctx:1,dt:0,ico:0};
_ur_SCR[ur_type.Tree_Leaf]		={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:1,t:1,ct:0,v:0,st:1,s:0,pos:1,lvl:1,tt:1,tbl:0,tut:1,ctx:1,dt:0,ico:0};
_ur_SCR["TR_LC"]        		={lbl:0,rt:1,rct:1,rst:0,rtt:1,rtut:1,t:1,ct:0,v:0,st:1,s:0,pos:1,lvl:1,tt:1,tbl:0,tut:1,ctx:1,dt:0,ico:0};
_ur_SCR["TRI"]		={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TS"]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:0,v:0,st:1,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR["TS_END"]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR["TS_ITM"]	={lbl:0,rt:1,rct:1,rst:1,rtt:1,rtut:"SAPUR_ITEMGROUP_TUT",t:1,ct:1,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.TextView]		={lbl:1,rt:1,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:1,s:1,pos:0,lvl:0,tt:1,tbl:1,tut:1,ctx:0,dt:0,ico:0};
_ur_SCR["TXB"]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:0,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:1,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR[ur_type.Tray]				={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Tray_End]		={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:0,ct:1,v:0,st:0,s:0,pos:0,lvl:0,tt:0,tbl:0,tut:0,ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Tray_Button]={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:"SAPUR_B",v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_B_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR[ur_type.Tray_Menu]	={lbl:0,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:0,st:1,s:0,pos:0,lvl:0,tt:1,tbl:0,tut:"SAPUR_MENUSPACE_TUT",ctx:0,dt:0,ico:0};	
_ur_SCR["VC"]		={lbl:1,rt:0,rct:0,rst:0,rtt:0,rtut:0,t:1,ct:1,v:1,st:0,s:0,pos:1,lvl:0,tt:1,tbl:1,tut:0,ctx:0,dt:0,ico:0};
_ur_SCR["VS"]		={lbl:0,rt:1,rct:1,rst:1,rtt:0,rtut:0,t:1,ct:0,v:0,st:1,s:0,pos:1,lvl:0,tt:1,tbl:0,tut:1,ctx:0,dt:0,ico:0};
function ur_SCR_activate(oEvt){
	
	if(!ur_system.is508) return;
  if (typeof(oEvt)=="undefined") oEvt=event; 
	
	var o=oEvt.srcElement;	 
	
	
	if(o==null || o.tagName=="HTML" || o.tagName=="BODY" || o.id=="ur-accfocus") return;
	
	var oL=oEvt.fromElement; 
	
	
	var oR=sapUrMapi_getRootControl(o);	
	
	
	if( oR==null || typeof(oR)!="object" || oR.getAttribute("ct")==null) return;
	
	var sRCt=oR.getAttribute("ct"); 
	var sLbl="";				
	var sRTxt="";				
	var sRCtTxt="";			
	var sRSt="";				
	var sRTt="";				
	var sTxt="";				
	var sCtTxt="";			
	var sVal="";				
	var sSt="";					
	var sSel="";				
	var sSem="";				
	var sPos="";				
	var sLvl="";				
	var sTt="";					
	var sTbl="";				
	var sTut="";				
	var sDt="";					
	var sRTut="";				
	var sCtxMenuTut=""; 		
	var sIco="";                
	if (sRCt == "HCNP") oL = null;
	
	var bNav=true;
	if( oL == null||((!oR.contains(oL)||oL==oR) && oL.id!="ur-accfocus"))
		bNav=false;
	
	else if(sRCt==ur_type.Tree && oL.id==oR.id+"-skipstart")
		bNav=false;
		
	
	if(sRCt== ur_type.ScrollContainer && oR.getAttribute("ti") !=0) return;
	
	
	var sCt=ur_SCR_getSubtype(sRCt,o,oR);
	
	
	if( (sRCt == "TS" && sCt == "TS_MNU" ) || (sRCt == "TS" && sCt == "TS_B" )) return;
	
	if(_ur_SCR[sCt]==null) return;
	
	
	if((_ur_SCR[sCt].lbl==1 && !bNav)||(sCt=="PG_I"&&_ur_SCR[sCt].lbl==1)){
		sLbl=ur_SCR_getLabelText(oR);
		if(sLbl==null)
			sLbl=ur_SCR_getLabelText(o);
	}
		
	
	if(o!=oR && !bNav)
	{
		
		if(_ur_SCR[sCt].rt==1) sRTxt=ur_SCR_getText(sRCt,oR,bNav);	
		
		
		if(_ur_SCR[sCt].rct!=0) sRCtTxt=ur_SCR_getCtTxt(sRCt,oR,_ur_SCR[sCt].rct);
		
		
		if(_ur_SCR[sCt].rst==1) sRSt=ur_SCR_getStatusText(oR);
		
		
		if(_ur_SCR[sCt].rtt==1) sRTt=ur_SCR_getTooltip(oR);
        
		
		if(_ur_SCR[sCt].rtut!=0) sRTut=ur_SCR_getTutorTxt(sRCt,oR,oR,bNav,oEvt,_ur_SCR[sCt].rtut);    
  }
	
	
	if(_ur_SCR[sCt].t==1) sTxt=ur_SCR_getText(sCt,o,bNav);
	
	
	if(_ur_SCR[sCt].ct!=0 && !(bNav && o==oR))
		sCtTxt=ur_SCR_getCtTxt(sCt,o,_ur_SCR[sCt].ct);
		
	
	if(_ur_SCR[sCt].v==1) sVal=ur_SCR_getValue(sCt,o);
	
	
	if(_ur_SCR[sCt].st==1) sSt=ur_SCR_getStatusText(o);
		
	
	if(_ur_SCR[sCt]["sem"]) sSem=ur_SCR_getSemantic(o,oR);
	else if(_ur_SCR[sCt]["s"]) sSel=ur_SCR_getSemantic(o,oR);
	
	if(_ur_SCR[sCt].pos==1) sPos=ur_SCR_getPos(sCt,o,oR);
	
	
	if(_ur_SCR[sCt].lvl==1) sLvl=ur_SCR_getLevel(o);
		
	
	if(_ur_SCR[sCt].tt==1) sTt=ur_SCR_getTooltip(o);
	
	
	if(_ur_SCR[sCt].tut!=0) sTut=ur_SCR_getTutorTxt(sCt,o,oR,bNav,oEvt,_ur_SCR[sCt].tut);
	
	
	if(_ur_SCR[sCt].ctx!=0) sCtxMenuTut=ur_SCR_getContextMenuTutorTxt(o,oR);
	
	
	if(_ur_SCR[sCt].dt==1) sDt=ur_SCR_getDataTip(o,oR);
	
	
	if(_ur_SCR[sCt].ico==1) sIco=ur_SCR_getIcon(o,oR);
	
	var sCntCt=null;
	var oCnt=ur_SCR_getContainer(o);
	if(oCnt!=null) sCntCt=oCnt.getAttribute("ct");
	
	
	if(sCntCt == ur_type.PopupTrigger){
		sRTut=getLanguageText("SAPUR_MENU_TUT"); 
		if(oCnt != null && oCnt.getAttribute("hasCnt") == "true") {
			sRTt = ur_SCR_getTooltip(oCnt);
			oCnt = ur_SCR_getContainer(oCnt.parentNode);
			if (oCnt != null) sCntCt = oCnt.getAttribute("ct");
		}
	}
	
	
	if(sCntCt==ur_type.SapTable && sCt!=sCntCt && sCt!=ur_type.SapTable_End)  {
		if(sTxt == sTt) sTt = ""; 
		sTbl=ur_SCR_getSapTableInfo(o,oCnt);
		
		if(sTbl && sCt==ur_type.RadioButton){
			if(ur_isSt(o,ur_st.SELECTED) || ur_isSt(o,ur_st.DISABLED) || ur_isSt(o,ur_st.READONLY)) sTut="";
			else sTut=getLanguageText("SAPUR_SELECT_TUT");
		}		
	}
	else if(sCntCt==ur_type.TableView) {
		if(o.getAttribute("noCntanrAnnouce")) {
			sTut = "";
			sCtTxt = "";
		}
		sTbl=ur_SCR_getTableInfo(o);
	} else if(sCt==ur_type.DateNavigator_Day) sTbl=ur_SCR_getDayWeek(o,oEvt);
	
	else if(sCt==ur_type.Calendar_Entry && o.getAttribute("stp")=="FULLDAY") sCtTxt = getLanguageText("SAPUR_CAL_ENTRY_FULLDAY");
	else if(sCt==ur_type.Calendar_MonthCell) {
	  sTut = ur_CAL_Month_getTutorText(o,sTut);
	  sCtTxt = ur_CAL_Month_getCtText(o);
	}
	
	
	if (_ur_columnLayout_group || _ur_columnLayout_tooltip) {
		if (_ur_columnLayout_tooltip) {
			if (!sTt) sTt=_ur_columnLayout_tooltip;
			else sTt = sTt + " "+getLanguageText("SAPUR_SEPARATOR")+" " + _ur_columnLayout_tooltip; 
			_ur_columnLayout_tooltip = "";
		}
		if (_ur_columnLayout_group) {
			if (!sLbl) sLbl=_ur_columnLayout_group;
			else sLbl = _ur_columnLayout_group + " "+getLanguageText("SAPUR_SEPARATOR")+" " + sLbl;
	  		_ur_columnLayout_group = ""; 
		}
	}
	
	
	
	ur_SCR_setTooltip(o,new Array(sIco,sLbl,sRTxt,sRCtTxt,sRSt,sRTt,sTxt,sCtTxt,sVal,sSt,sSel,sSem,sPos,sLvl,sTt,sTut,sCtxMenuTut,sRTut,sDt,sTbl));
}
function ur_SCR_getSubtype(sCt,o,oR){
  var sSubTp="";
	
	if(sCt=="PCI" || sCt=="PCTAB" || sCt=="PCSEQ"){
		sSubTp=o.getAttribute("tp");
		if(sSubTp!=null && sSubTp!="") sCt+="_"+sSubTp;
		else if(o!=oR && sCt!="PCTIT") sCt+="_I";
	}
	
	else if(sCt!="I"){
	  if(o.getAttribute("tp")!=null && o.getAttribute("tp")!="")
		  sCt+="_"+o.getAttribute("tp");	
	}
	return sCt;
}
function ur_SCR_getLabelText(o){
	if(o.id==null || o.id=="") return;
		if(o.ct=="MG" || o.ct=="SC"){
		if(o.t!=null)return;
	}
	
	var sLbl=sapUrMapi_Label_getLabelText(o.id);
	
	
	if(!sLbl){
		aIn = document.getElementsByTagName("INPUT");
		for(var i=0; i<aIn.length; i++){
			sLabelFor = aIn[i].getAttribute("f");
			if(sLabelFor == o.id)
				sLbl = aIn[i].value;
		}
	}
	
	
	if(sLbl==null)
		sLbl=o.getAttribute("lbl");
	return sLbl;
}
function ur_SCR_getText(sCt,o,bNav){
	var sTxt="";
	
	
	if(sCt=="VS")
	{
		if(o.tagName=="DIV")
			sTxt=o.parentElement.getAttribute("t");
		else
			sTxt=o.getAttribute("t");
	}
	
	
	else{
		sTxt=o.getAttribute("t");
		if((sTxt==null || sTxt=="") && (sCt==ur_type.FormattedTextView || sCt==ur_type.Button || sCt==ur_type.Button_Menu || sCt==ur_type.Button_MenuSection || sCt==ur_type.Button_Toggle || sCt==ur_type.BreadCrumb_Item || sCt==ur_type.BreadCrumb_SingleLink || sCt==ur_type.ContextualPanel_Help || sCt==ur_type.ContextualPanel_Personalize  || sCt==ur_type.DateNavigator_Month || sCt==ur_type.SapTable_Header1 || sCt==ur_type.SapTable_Header2 || sCt==ur_type.SapTable_Header3 || sCt==ur_type.TextView || sCt==ur_type.Toolbar_Button || sCt==ur_type.ToolbarLink))
			sTxt=o.innerText;
	}
	return	sTxt;
}
function ur_SCR_getCtTxt(sCt,o,sMsgId){
	
	if(sMsgId!=1)
		return getLanguageText(sMsgId);
	var sMsgId="SAPUR_"+sCt;
	var sType="";
	
	
	if(sCt=="I"){
		sType=o.getAttribute("tp");
		if(sType!=null && sType!="" && (sType=="DATE" || sType=="TIME" || sType=="INTEGER"|| sType=="PW"))
			sMsgId+="_"+sType;
		if(o.getAttribute("f4")=="true")
			sMsgId+="_F4";
	} 
	
	else if(sCt==ur_type.CheckBoxGroup || sCt=="RG" || sCt=="IT")
		return getLanguageText(sMsgId, new Array(o.getAttribute("ic")));
	
	else if(sCt==ur_type.Calendar_DayView || sCt==ur_type.Calendar_MonthView || sCt==ur_type.Calendar_MultipleDayView || sCt==ur_type.Calendar_YearView) {
		return getLanguageText(sMsgId, new Array(o.getAttribute("ic")));
	}
	else if (sCt==ur_type.Calendar_HierarchicalMonthView) {
		return getLanguageText(sMsgId, new Array(o.getAttribute("ic"),o.getAttribute("ttl")));
	}
	else if(sCt==ur_type.Calendar_DayColumn) {
		return "";
	} 
	
	else if(sCt=="ST"){
		var iRows=o.getAttribute("r");
		var iCols=o.getAttribute("c");
		var iVRows=o.getAttribute("vr");
		var iVFRow=o.getAttribute("vfr"); 
		var iVCols=o.getAttribute("vc");
		
		
		
		if(parseInt(iRows)==0)
			return getLanguageText(sMsgId+"_EMPTY", new Array(iCols));
		else if(parseInt(iVRows)>0 && parseInt(iVRows)<parseInt(iRows)) {
			if(parseInt(iVCols)<parseInt(iCols)) {
				return getLanguageText(sMsgId+"_PAGE_HS", new Array(iCols,iVRows,iRows,iVFRow,iVCols));
			} else {
				return getLanguageText(sMsgId+"_PAGE", new Array(iCols,iVRows,iRows,iVFRow));
			}
		}	else {
			if(parseInt(iVCols)<parseInt(iCols)) {
				return getLanguageText(sMsgId+"_HS", new Array(iCols,iRows,iVCols));
			} else {
				return getLanguageText(sMsgId, new Array(iCols,iRows));
			}
		}
	}		
	
	else if(sCt=="ST_SC"){
		var sRow=o.getAttribute("rd");
		if(sRow==null || sRow=="" || parseInt(sRow)==0){
			var oRow=o;
			while(oRow.tagName!="TR") oRow=oRow.parentNode;
			sRow=oRow.getAttribute("rr");
		}
		return getLanguageText(sMsgId, new Array(sRow));
	}
	
	else if(sCt=="TBV")
	{
		var iCols=o.getAttribute("colCnt");
		var iVRows=o.getAttribute("visibleRCnt");
		var iRows=o.getAttribute("rowCnt");
		var iVFRow=o.getAttribute("visibleFRow");
		if(iRows == null || iCols === null) return "";	
		
		if(parseInt(iRows)==0)
			return getLanguageText(sMsgId+"_EMPTY", new Array(iCols));
		else if(parseInt(iVRows)>0 && parseInt(iVRows)<parseInt(iRows))
			return getLanguageText(sMsgId+"_PAGEWISE", new Array(iCols,iVRows,iRows,iVFRow));
		else
			return getLanguageText(sMsgId, new Array(iCols,iRows));
	}
	else if(sCt=="TBV_SC"){
		var sRow=o.getAttribute("rd");
		return getLanguageText(sMsgId, new Array(sRow));
	}
	
	else if(sCt=="TBV_INDICATOR") 
	{
		var navi = o.getAttribute("navi");
		var iRows = o.getAttribute("rCnt");
		var iVRows = o.getAttribute("visibleRCnt");
		return getLanguageText(sMsgId, new Array(navi,iVRows,iRows));
	}
	return getLanguageText(sMsgId);
}
function ur_SCR_getValue(sCt,o){
	if((sCt==ur_type.InputField && o.getAttribute("tp")=="PW")||sCt=="PG_I")
		return;
	if(sCt==ur_type.ComboBox_DropDownListBox && o.value=="")
		return getLanguageText("SAPUR_CB_NOITEM");
	return o.value;
}
function ur_SCR_getPos(sCt,o,oR){
	var iIdx=0;
	var iIc=0;
	
	
	if((sCt==ur_type.CheckBox || sCt=="R" || sCt=="TRI") && o.name!=""){
		var a=document.getElementsByName(o.name);
		iIc=a.length;
		for(var i=0;i<a.length;i++){
			if(a[i].tagName!="INPUT"){
				iIc=iIc-1;
				continue;
			}			
				iIdx=iIdx+1;
			if(a[i]==o) break;	
		}
	}
	else if(sCt=="IL"){
		iIdx=o.getAttribute("idx");
		iIc=o.getAttribute("ic");
	}
	
	else if(sCt==ur_type.ComboBox || sCt==ur_type.ComboBox_DropDownListBox){
		lid = o.getAttribute("lid");
		if (lid) {
		iIdx=ur_ItemListBox_getIndex(o.getAttribute("lid"),o.getAttribute("k"));
			oItemListBox=sapUrMapi_ItemListBox_getObject(lid,document);
			if(oItemListBox){
				iIc=oItemListBox.itms.length;
			}
		}
	}
	else if(sCt=="ILB"){
		iIdx=o.parentNode.rowIndex+1;
		iIc=oR.firstChild.rows.length;
	}
	else if(sCt=="VS"){
		    if(o.tagName=="DIV")
			{
				iIdx=o.parentNode.parentNode.rowIndex+1;
				iIc=oR.firstChild.rows.length;
			}
			else
			{
				iIdx=o.parentNode.rowIndex+1;
				iIc=oR.firstChild.rows.length;
			}
	}
	else if(sCt=="NL_I")
	{
		iIdx=parseInt(o.getAttribute("idx"))+1;
		var oIc=ur_NL_getPrevObj(o,"ic");
		iIc=oIc.getAttribute("ic");
	}
	else if(sCt=="NL_G")
	{
		iIdx=parseInt(o.getAttribute("gidx"))+1;
		var oIc=ur_NL_getPrevObj(o,"ic");
		iIc=oIc.getAttribute("ic");
	}
	else if(sCt.indexOf("RM")>-1 || sCt.indexOf("PHI")>-1)
	{
		iIdx=parseInt(o.getAttribute("idx"))+1;
		iIc=o.getAttribute("ic");
	}
	
	else if(sCt=="TS_ITM")
	{
		iIdx=parseInt(o.getAttribute("idx")) + 1;
		iIc=oR.getAttribute("ic");
		return  getLanguageText("SAPUR_TS_ITM_POS",new Array(iIdx,iIc));
	}
	else if(sCt==ur_type.Calendar_DayColumn){
	  var result = "";
		iIdx=o.getAttribute("idx");
		iIc=o.getAttribute("ic");
		if (iIc > 1) {
		  result = getLanguageText("SAPUR_CAL_DCOL",new Array(""+iIdx,""+iIc));
		}
		var iIci=o.getAttribute("ici");
		if(iIci!=null && parseInt(iIci)>0) {
			result = result + " " + getLanguageText("SAPUR_CAL_DCOL_ENTRY",new Array(""+iIci));
		}
		return result;
	}
	else if(sCt==ur_type.Tree_Folder || sCt==ur_type.Tree_Leaf){
		iIdx=o.getAttribute("idx");
		iIc=o.getAttribute("ic");
		var iIci=o.getAttribute("ici");
		if(iIci==null || parseInt(iIci)<=0)
			return getLanguageText("SAPUR_ITMPOS",new Array(iIdx,iIc));
		else
			return getLanguageText("SAPUR_ITMPOSCOUNT",new Array(iIdx,iIc,iIci));
	}
	else if(sCt=="HCNP_LNK"){
		iIdx=o.getAttribute("idx");
		iIc=o.getAttribute("ic");
    }
	else if(sCt=="POMN_I") {
      iIdx=o.getAttribute("idx");
      iIc=oR.getAttribute("ic");
	  if (iIdx>0 && iIc>0) {
		return getLanguageText("SAPUR_ITMPOS",new Array(iIdx,iIc));
	  }
	} 
    else if (o.getAttribute("ic")){ 
       iIdx=o.getAttribute("idx");
       iIc=o.getAttribute("ic");
    }
	else{
		iIdx=o.getAttribute("idx");
		iIc=oR.getAttribute("ic");
	}
	if(iIc==1 || iIc==0) return;
	else if (iIdx!=null) return getLanguageText("SAPUR_ITMPOS",new Array(iIdx,iIc));
	return "";
}
function ur_SCR_getStatusText(o){
	var sSt=ur_getAttD(o,"st","");
	if(sSt=="") return "";
	var arrS=new Array();
	
	
	if(sSt.indexOf("9")>-1) arrS.push(getLanguageText("SAPUR_F"));
	if(sSt.indexOf("a")>-1) arrS.push(getLanguageText("SAPUR_SUCCESS"));
	if(sSt.indexOf("b")>-1) arrS.push(getLanguageText("SAPUR_ERROR"));
	if(sSt.indexOf("c")>-1) arrS.push(getLanguageText("SAPUR_COMPLETED"));
	if(sSt.indexOf("d")>-1) arrS.push(getLanguageText("SAPUR_DISABLED"));
	if(sSt.indexOf("e")>-1) arrS.push(getLanguageText("SAPUR_END"));
	if(sSt.indexOf("f")>-1) arrS.push(getLanguageText("SAPUR_INFO"));
	if(sSt.indexOf("g")>-1) arrS.push(getLanguageText("SAPUR_NOTIFICATION"));
	if(sSt.indexOf("h")>-1) arrS.push(getLanguageText("SAPUR_TASK"));
	if(sSt.indexOf("i")>-1) arrS.push(getLanguageText("SAPUR_INVALID"));
	if(sSt.indexOf("l")>-1) arrS.push(getLanguageText("SAPUR_LOADING"));
	if(sSt.indexOf("m")>-1) arrS.push(getLanguageText("SAPUR_REQUIRED"));
        if(sSt.indexOf("n")>-1) arrS.push(getLanguageText("SAPUR_NOTSELECTED"));
	if(sSt.indexOf("o")>-1) arrS.push(getLanguageText("SAPUR_UNCOMPLETED"));
	if(sSt.indexOf("p")>-1) arrS.push(getLanguageText("SAPUR_PRESSED"));
	if(sSt.indexOf("r")>-1) arrS.push(getLanguageText("SAPUR_READONLY"));	
	if(sSt.indexOf("s")>-1) arrS.push(getLanguageText("SAPUR_SELECTED"));
	if(sSt.indexOf("t")>-1) arrS.push(getLanguageText("SAPUR_TODAY"));
	if(sSt.indexOf("u")>-1) arrS.push(getLanguageText("SAPUR_UNDEFINED"));
	if(sSt.indexOf("v")>-1) arrS.push(getLanguageText("SAPUR_VALID"));
	if(sSt.indexOf("w")>-1) arrS.push(getLanguageText("SAPUR_WARNING"));
	if(sSt.indexOf("x")>-1) arrS.push(getLanguageText("SAPUR_UNCHECKED"));
	if(sSt.indexOf("y")>-1) arrS.push(getLanguageText("SAPUR_DYNAMIC"));
	if(sSt.indexOf("z")>-1) arrS.push(getLanguageText("SAPUR_MINIMIZED"));
	if(sSt.indexOf("0")>-1) arrS.push(getLanguageText("SAPUR_EMPTY"));
	if(sSt.indexOf("1")>-1) arrS.push(getLanguageText("SAPUR_START"));	
	if(sSt.indexOf("2")>-1) arrS.push(getLanguageText("SAPUR_SORTED_ASC"));
	if(sSt.indexOf("3")>-1) arrS.push(getLanguageText("SAPUR_SORTED_DESC"));
	if(sSt.indexOf("4")>-1) arrS.push(getLanguageText("SAPUR_SORTED_NOT"));
	if(sSt.indexOf("5")>-1) arrS.push(getLanguageText("SAPUR_STOP"));
	if(sSt.indexOf("-")>-1) arrS.push(getLanguageText("SAPUR_COLLAPSED"));
	if(sSt.indexOf("+")>-1) arrS.push(getLanguageText("SAPUR_EXPANDED"));
	if(sSt.indexOf("!")>-1) arrS.push(getLanguageText("SAPUR_ALERT"));
	if(sSt.indexOf("*")>-1) arrS.push(getLanguageText("SAPUR_RECURRING"));
	
	if(sSt.indexOf("T")>-1) arrS.push(getLanguageText("SAPUR_TOGGLED"));  
	if(sSt.indexOf("N")>-1) arrS.push(getLanguageText("SAPUR_NOTTOGGLED")); 
		
	
	if (arrS.length==0) return ""; 
	var sStTxt=arrS.join(" "+getLanguageText("SAPUR_SEPARATOR")+" ");
	
	sStTxt=sStTxt.replace(/\s+/g," ");
  return sStTxt;
}
function ur_SCR_getTooltip(o){
		return o.getAttribute("tt");;
}
function ur_SCR_getIcon(o){
		return o.getAttribute("ico");
}
function ur_SCR_getTutorTxt(sCt,o,oR,bNav,oEvt,sTutMsgId){	
	if (sCt == "IMG" && o.interactive == "false")
		return;
		
	
	if((o.ic==1 && sCt!=ur_type.Calendar_DayColumn && sCt!=ur_type.Calendar_Entry && sCt!=ur_type.ComboBox && sCt!=ur_type.ComboBox_DropDownListBox) || 
	   (ur_isSt(o,ur_st.DISABLED) || ur_isSt(o,ur_st.READONLY)) && sCt!=ur_type.RadioButton && sCt!=ur_type.BreadCrumb && sCt!=ur_type.Tray  && sCt!=ur_type.InputTokenizer) 
		return;
	
	
	if(bNav && (sCt==ur_type.ComboBox || sCt==ur_type.ComboBox_DropDownListBox))
		return;
		
	
	if(sTutMsgId!=1)
		return getLanguageText(sTutMsgId);
		
	var sMsgId="SAPUR_"+sCt+"_TUT";
  sType=o.getAttribute("tp");
	if(sType!=null && sType!="" && (sType=="DATE" || sType=="TIME" || sType=="INTEGER"|| sType=="PW"))
		sMsgId="SAPUR_"+sCt+"_"+sType+"_TUT";
	
	
	if(sCt==ur_type.PopupMenu_Item || sCt==ur_type.Calendar_Entry || sCt==ur_type.Calendar_Entry_Fullday){
		if(ur_isSt(o,ur_st.SELECTED))
			sMsgId="SAPUR_"+sCt+"_SEL_TUT";
		else if(ur_isSt(o,ur_st.NOTSELECTED))
			sMsgId="SAPUR_"+sCt+"_NSEL_TUT";
	}
	else if(sCt==ur_type.CheckBox || sCt==ur_type.Tree_Folder || sCt==ur_type.Tree_Leaf || sCt==ur_type.DateNavigator_Day){
		if(ur_isSt(o,ur_st.SELECTED))
			sMsgId="SAPUR_DESELECT_TUT";
		else if(ur_isSt(o,ur_st.NOTSELECTED) || ur_isSt(o,ur_st.SELECTABLE))
			sMsgId="SAPUR_SELECT_TUT";	
	}
	
	else if(sCt==ur_type.BreadCrumb_Item || sCt==ur_type.BreadCrumb_SingleLink || sCt==ur_type.DateNavigator_Month || sCt==ur_type.DateNavigator_Week ){
		if(ur_isSt(o,ur_st.NOTSELECTED) || sCt==ur_type.BreadCrumb_SingleLink)
			sMsgId="SAPUR_SELECT_TUT";	
		else
			return;
	}
	
	 else if(sCt==ur_type.Button_Toggle){
		if(ur_isSt(o,ur_st.EXPANDED))
			sMsgId="SAPUR_"+sCt+"_EXP_TUT";
		else if(ur_isSt(o,ur_st.COLLAPSED))
			sMsgId="SAPUR_"+sCt+"_COLL_TUT";
	}
	
	else if(sCt==ur_type.Calendar_RowHeader){
		if(ur_isSt(o,ur_st.EXPANDED))
			sMsgId="SAPUR_CAL_RH_EXP_TUT";
		else if(ur_isSt(o,ur_st.COLLAPSED))
			sMsgId="SAPUR_CAL_RH_COLL_TUT";
	}
	
	else if(sCt=="R"){
		if(ur_isSt(oR.id,ur_st.DISABLED) || ur_isSt(oR.id,ur_st.READONLY))
			sMsgId="SAPUR_"+sCt+"_DSBL_TUT"	;
	}	
	
	else if(sCt=="I"){
		if(ur_isSt(oR.id,ur_st.DISABLED)) return;
		if(o.getAttribute("f4")=="true")
			sMsgId="SAPUR_"+sCt+"_F4_TUT";
	}
	
	else if(sCt=="TRI"){
		if(ur_isSt(oR.id,ur_st.SELECTED))
			sMsgId="SAPUR_"+sCt+"_SEL_TUT";
		else if(ur_isSt(oR.id,ur_st.NOTSELECTED))
			sMsgId="SAPUR_"+sCt+"_NSEL_TUT";
		else
			sMsgId="SAPUR_"+sCt+"_UNDEF_TUT";
	}
	
	else if(sCt==ur_type.FreeArea || sCt==ur_type.NavigationList || sCt==ur_type.Tray)
	{	
		
		var bEnter="_NO_ENTER";
		if(o.o)bEnter="";
		if (ur_isSt(oR,ur_st.COLLAPSED))sMsgId="SAPUR_GROUPEXP"+bEnter+"_TUT";
		else if(ur_isSt(oR,ur_st.EXPANDED))sMsgId="SAPUR_GROUPCOLL_TUT";
		else sMsgId="SAPUR_GROUP_TUT";
	}
	
	else if(sCt=="PCTAB_I" || sCt=="PCSEQ_I" ){
		if(ur_isSt(o,ur_st.NOTSELECTED)&& !ur_isSt(oR,ur_st.DISABLED))
				sMsgId="SAPUR_SELECT_TUT";
		else
			return;
	}
	
	else if(sCt=="TS_ITM" || sCt.indexOf("HCNP") > -1){
		if(ur_isSt(o,ur_st.NOTSELECTED)&& !ur_isSt(o,ur_st.DISABLED))
				sMsgId="SAPUR_SELECT_TUT";
		else
			return;
	}
	
	else if(sCt=="NL")
	{
		if(ur_isSt(oR.id,ur_st.DISABLED)) return;
		if(bNav=false) return;
	}
	
	else if(sCt=="NL_I"){
		sPop=o.parentElement.getAttribute("pop");
		if(!ur_isSt(o,ur_st.DISABLED) && sPop)
		return	getLanguageText("SAPUR_NL_I_POP_TUT");
	}
	
	else if (sCt=="IT"){
		var del= o.getAttribute("delimiter");
		if(del==";")del="SAPUR_IT_SC";
		else if(del==",")del="SAPUR_IT_CM";
		else if(del=="-")del="SAPUR_IT_DS";
		return	getLanguageText(sMsgId,new Array(del));
	}
	
	else if(sCt=="ST_SC"){
		if(ur_isSt(o,ur_st.DISABLED)) return;
		if(ur_isSt(o,ur_st.SELECTED) && ur_isSt(o,ur_st.DESELECTABLE))
			sMsgId="SAPUR_"+sCt+"_S_TUT";
		else if(ur_isSt(o,ur_st.NOTSELECTED))
			sMsgId="SAPUR_"+sCt+"_N_TUT";
	}	
	
	else if(sCt.indexOf("ST_HDR")>=0){
		if(ur_isSt(o,ur_st.SORTEDDESC) || ur_isSt(o,ur_st.NOTSORTED) || ur_isSt(o,ur_st.SORTEDASC))	{
			if(o && o.getAttribute("stasc")) {
				if(ur_isSt(o,ur_st.SORTEDDESC)) {
					return getLanguageText("SAPUR_ST_SRT_ASC_TUT");
				} else if(ur_isSt(o,ur_st.SORTEDASC)) {
					return getLanguageText("SAPUR_ST_SRT_DES_TUT");
				} else if(ur_isSt(o,ur_st.NOTSORTED)) {
					return getLanguageText("SAPUR_ST_SRT_TUT");
				}
			} else {
				return getLanguageText("SAPUR_ST_HDR_SORT");
			}
		}
	}
	
	
	else if(sCt=="TBV_HC"){
		if(ur_isSt(o,ur_st.SORTEDDESC) || ur_isSt(o,ur_st.NOTSORTED))	
			return	getLanguageText("SAPUR_TBV_HEADER_CHANGE");
		else if(ur_isSt(o,ur_st.SORTEDASC))	
			return	getLanguageText("SAPUR_TBV_HEADER_CHANGE");
	}
	
	else if(sCt=="TBV_SC"){
		if(ur_isSt(o,ur_st.SELECTED))
		{
			if(o.getAttribute("isSingleSel")=="true") return;
			else
			sMsgId="SAPUR_"+sCt+"_SEL_TUT";
		}
		else
			sMsgId="SAPUR_"+sCt+"_NSEL_TUT";
	}
	
	else if(sCt=="TBV_TOPBTN" || sCt=="TBV_PRVPG" || sCt=="TBV_PRVROW" || sCt=="TBV_NXTROW" || sCt=="TBV_NXTPG" || sCt=="TBV_BOTBTN" )
	{
		if(ur_isSt(o,ur_st.DISABLED)) return;
		else
		sMsgId="SAPUR_"+sCt+"_TUT";
	}
	
	else if(sCt=="RM_STN" || sCt=="RM_RTCLO" || sCt=="RM_RTSTR" || sCt=="RM_RTEND" || sCt=="RM_SUB")
	{
			if(ur_isSt(o,ur_st.DISABLED) || ur_isSt(o,ur_st.SELECTED) || ur_isSt(o,ur_st.DYNAMIC))
				return;
			if(ur_isSt(o,ur_st.SELECTABLE))
				sMsgId="SAPUR_SELECT_TUT";
	}
	
	else if(sCt=="VS" )
	{
		if(bNav)
		{
			if(!ur_isSt(o,ur_st.SELECTED) && !ur_isSt(o,ur_st.DISABLED))
			{
				sMsgId="SAPUR_"+sCt+"_NSEL_TUT";
				return getLanguageText(sMsgId);
			}
			else
			{
				return;
			}
		} 
		else
		{
			sMsgId="SAPUR_"+sCt+"_TUT";
			return getLanguageText(sMsgId);
		}
	}
	
	else if(sCt=="MNB_I"){
		if(o==oR) sMsgId="SAPUR_MNB_TUT";
		else if(ur_isSt(o.id,ur_st.DISABLED)) return;
	}
	
	if ( sCt==ur_type.Calendar_DayColumn ) {
	  var result = "";
	  if ( parseInt(ur_getAttD(o,"ic","1"))>1 ) {
		  result = getLanguageText(sMsgId);
		}
	  if ( ur_getAttD(o,"ici","")!="" ) {
	    result +=getLanguageText("SAPUR_CAL_DCOL_ENTRY_TUT");
	  }
		return result; 
	}
		
	return getLanguageText(sMsgId);
}
function ur_SCR_getContextMenuTutorTxt(o,oR){	
	var sCtx=o.getAttribute("ctx");
	if(sCtx==null || sCtx!=1) return;
	return getLanguageText("SAPUR_CONTEXTMENU_TUT");
}
function ur_SCR_getDataTip(o,oR){
	var oDataTip=ur_get(o.id+"-dtip");
	if(oDataTip==null) return;
	var	sDtTxt=sapUrMapi_DataTip_getText(o.id);
	var	sDtType=getLanguageText("SAPUR_MSG_"+sapUrMapi_DataTip_getType(o.id).toUpperCase());
	if (sapUrMapi_DataTip_getType(o.id) == "Ok") sDtType = getLanguageText("SAPUR_MSG_SUCCESS");
	if (sapUrMapi_DataTip_getType(o.id) == "Text") sDtType = "";
	sDtTxt=sDtType+" "+sDtTxt;
	return sDtTxt;
}
function ur_SCR_getTableInfo(o){
	if(o.getAttribute("intbl")!="true") return; 
 	return o.getAttribute("tttbl");
}
function ur_SCR_getSapTableInfo(o,oTab){
	var oCell=o;
	var sCellType="";
	var sTableInfo="";
	var sColor="";
	
	
	var oLoopObject=oCell, sLoopCt=null, sLoopTagName=null, sLoopCellTP = null;
	while(oLoopObject){
		sLoopCt = ur_getAttD(oCell,"ct","");
		sLoopTagName = oLoopObject.tagName;
		
		if (sLoopCt=="PG" || sLoopTagName=="BODY") return;
				
		if(oLoopObject.getAttribute("tp")) sLoopCellTP = oLoopObject.getAttribute("tp");
		if( (sLoopTagName == "TD" || sLoopTagName == "TH") && oLoopObject.className.indexOf("urST3") != -1 && sLoopCellTP) {
			var oBodyTable = oLoopObject.parentNode.parentNode.parentNode; 
			
			
			if( oBodyTable.className.indexOf("urST3Bd") != -1) 
			{
				sCellType = sLoopCellTP;
				oCell = oLoopObject;
				break;
			}
		}
		
		oLoopObject = oLoopObject.parentNode;
	}
	
	
	if(sCellType=="C" || sCellType=="HIC"){
		var oTab=ur_getRootObj(oCell);
		var sHeaders="";
		var sRowHeaders="";
		var oRow=ur_SCR_getRow(oCell);
		var sRow=oRow.getAttribute("rr");
		var sRowAccDescription=oRow.getAttribute("t");
		
		if(sRowAccDescription) {
			sTableInfo = sRowAccDescription;
		} else if(parseInt(oTab.r)>0 && parseInt(sRow)>0){
			sHeaders=ur_SCR_getHeaders(ur_SCR_getCell(oCell),false);
			sRowHeaders=ur_SCR_getHeaders(ur_SCR_getCell(oCell),true);
			
			if (sHeaders==null) {
				var oTmpCell = ur_SCR_getCell(oCell),
					sCollAttribute = oTmpCell.getAttribute("cc");
				
				sHeaders = (sCollAttribute != null)? sCollAttribute: (oTmpCell.cellIndex+1);
			}
			
			if (sRowHeaders==null) 
				sRowHeaders=sRow;					
			sTableInfo=getLanguageText("SAPUR_ST_C",new Array(sRowHeaders,sHeaders));
		}	
		if(sCellType=="HIC"){
			var sLvl=oCell.getAttribute("lv");
			if(sLvl!=null && sLvl!="")
				sTableInfo+=" "+getLanguageText("SAPUR_SEPARATOR")+" "+getLanguageText("SAPUR_LEVEL",new Array(sLvl));
			if(ur_isSt(oCell.id,ur_st.EXPANDED))
				sTableInfo+=" "+getLanguageText("SAPUR_SEPARATOR")+" "+getLanguageText("SAPUR_ST_COL_TUT");
			else if(ur_isSt(oCell.id,ur_st.COLLAPSED))
				sTableInfo+=" "+getLanguageText("SAPUR_SEPARATOR")+" "+getLanguageText("SAPUR_ST_EXP_TUT");			
		}
	
		
		if(oCell && oCell.firstChild && oCell.firstChild.getAttribute("empty")) {
			sTableInfo = getLanguageText("SAPUR_EMPTY") + " " + getLanguageText("SAPUR_SEPARATOR") + " " + sTableInfo;
		}
	
	}
  
	else if(sCellType=="F"){
		var sHeaders=ur_SCR_getHeaders(ur_SCR_getCell(oCell),false);
		var sSt=oCell.st;
		if(sHeaders!=null && sSt=="")
			sTableInfo=getLanguageText("SAPUR_ST_F",new Array(sHeaders))+" "+getLanguageText("SAPUR_SEPARATOR")+" "+getLanguageText("SAPUR_ST_F_TUT");
		else if(sHeaders!=null && sSt=="ro")
			sTableInfo=getLanguageText("SAPUR_ST_F",new Array(sHeaders));
	}
 
	
	sColor=ur_SCR_getSemantic(oCell,oTab);
	if(sColor!=null && sColor!="")
		sTableInfo=sTableInfo+" "+getLanguageText("SAPUR_SEPARATOR")+" "+sColor;
	
	if(sCellType=="C") {
		var sBiType = ur_getAttD(oCell,"BiTp","");
		if(sBiType) {
			if(sBiType == "h1") sTableInfo = getLanguageText("SAPUR_ST_HDR1") + " - " + sTableInfo;
			else if(sBiType == "h2") sTableInfo = getLanguageText("SAPUR_ST_HDR2") + " - " + sTableInfo;
			else if(sBiType == "h3") sTableInfo = getLanguageText("SAPUR_ST_HDR3") + " - " + sTableInfo;
		}
	}
	return sTableInfo;
}
function ur_SCR_getSemantic(o,oR){
	var sSem = o.getAttribute("sem");
	var sSel = o.getAttribute("s");
	var arrSem=new Array();
	if(sSem) {
	  if (oR && oR.getAttribute && oR.getAttribute("legend") && oR.getAttribute("legend").indexOf(sSem) > -1) {
	    var sLeg = oR.getAttribute("legend");
  	  sLeg = sLeg.replace(/(:)+/g,":'");
  	  sLeg = sLeg.replace(/(,)+/g,"',");
  	  sLeg = "return {" + sLeg + "'};";
  	  oLeg = (new Function (sLeg))();
  	  if ( oLeg[sSem]) arrSem.push( oLeg[sSem] );
	  } 
	}
	if (sSel && arrSem.length == 0) {
	  if(sSel.indexOf("1")!=-1) arrSem.push(getLanguageText("SAPUR_H1"));
	  if(sSel.indexOf("2")!=-1) arrSem.push(getLanguageText("SAPUR_H2"));
	  if(sSel.indexOf("3")!=-1) arrSem.push(getLanguageText("SAPUR_H3"));
	  if(sSel.indexOf("4")!=-1) arrSem.push(getLanguageText("SAPUR_H4"));
	  if(sSel.indexOf("5")!=-1) arrSem.push(getLanguageText("SAPUR_H5"));
	  if(sSel.indexOf("6")!=-1) arrSem.push(getLanguageText("SAPUR_H6"));
	  if(sSel.indexOf("b")!=-1) arrSem.push(getLanguageText("SAPUR_BADVALUE"));
	  if(sSel.indexOf("c")!=-1) arrSem.push(getLanguageText("SAPUR_CRITICALVALUE"));
	  if(sSel.indexOf("e")!=-1) arrSem.push(getLanguageText("SAPUR_EMPHASIZED"));
	  if(sSel.indexOf("n")!=-1) arrSem.push(getLanguageText("SAPUR_NEGATIVE"));
	  if(sSel.indexOf("p")!=-1) arrSem.push(getLanguageText("SAPUR_POSITIVE"));	
	  if(sSel.indexOf("s")!=-1) arrSem.push(getLanguageText("SAPUR_SELECTED"));
	  if(sSel.indexOf("t")!=-1) arrSem.push(getLanguageText("SAPUR_TOTAL"));
	  if(sSel.indexOf("u")!=-1) arrSem.push(getLanguageText("SAPUR_SUBTOTAL"));
	  if(sSel.indexOf("g")!=-1) arrSem.push(getLanguageText("SAPUR_GOODVALUE"));
	  if(sSel.indexOf("k")!=-1) arrSem.push(getLanguageText("SAPUR_KEY"));
	  if(sSel.indexOf("a")!=-1) arrSem.push(getLanguageText("SAPUR_STANDARD"));
	  
	  if (arrSem.length==0) return ""; 
	} else if (sSel) {
	  if(sSel.indexOf("1")!=-1) arrSem.push(getLanguageText("SAPUR_H1"));
	  if(sSel.indexOf("2")!=-1) arrSem.push(getLanguageText("SAPUR_H2"));
	  if(sSel.indexOf("3")!=-1) arrSem.push(getLanguageText("SAPUR_H3"));
	  if(sSel.indexOf("4")!=-1) arrSem.push(getLanguageText("SAPUR_H4"));
	  if(sSel.indexOf("s")!=-1) arrSem.push(getLanguageText("SAPUR_SELECTED"));
	}
	
	sSemTxt=arrSem.join(" ");
	
	sSemTxt=sSemTxt.replace(/\s+/g," ");
	return sSemTxt;
}
function ur_SCR_getLevel(o,oR){
	var sLv=o.getAttribute("lv");
	if(sLv==null || sLv=="") return;
	return getLanguageText("SAPUR_LEVEL",new Array(sLv));
}
function	ur_SCR_setTooltip(o,aTxt){
	var sTitle="";
	var sSep=" "+getLanguageText("SAPUR_SEPARATOR")+" ";
	for(var i=0; i<aTxt.length; i++){
		if(aTxt[i]==null || aTxt[i]=="" || typeof(aTxt[i])=="undefined" || aTxt[i].search(/\S/)==-1) 
			continue;
		if(sTitle!="")
			sTitle+=sSep;
		sTitle+=aTxt[i];
	}		
	if(o.getAttribute("hascnt")=="true")
		o.setAttribute("scrtt",sTitle);
	else
	o.title=sTitle;
}
function ur_SCR_getHeaders(oCell,bRow){
	var aHeaders;
	var sHeaders="";
	var oHeaderRoot, oHeaderContent, sText;
	
	if(bRow==true)
		sHeaders=oCell.getAttribute("rowheaders");
	else
		sHeaders=oCell.getAttribute("headers");
		
	if(sHeaders==null || sHeaders=="") return null;
	aHeaders=sHeaders.split(" ");
	sHeaders="";
	
	for(var i=0;i<aHeaders.length;i++){
		sText = "";
		
		oHeaderContent=ur_get(aHeaders[i]+"-content");
		if(oHeaderContent && oHeaderContent.getAttribute("t")) {
			sText=oHeaderContent.getAttribute("t");
		} else {
			
			oHeaderRoot=ur_get(aHeaders[i]);
			if(oHeaderRoot) {
				sText = oHeaderRoot.innerText;
				if(sText && sText.indexOf("*") == 0 && oHeaderRoot.innerHTML && oHeaderRoot.innerHTML.indexOf("urST3HReq") != -1) {
					
					sText = sText.substr(1);
				}
				if((sText.lastIndexOf("*")+1) == sText.length) {
					sText = sText.substring(0, sText.lastIndexOf("*"));
				}
			}
		}
		
		if(sText) {
			sHeaders+=sText + " ";
		}
	}
	
	
	if(sHeaders) {
		sHeaders = sHeaders.replace(/\s+$/,"").replace(/^\s+/,"");
	}
	return sHeaders;
}
function ur_SCR_getRow(o){
	while(o.tagName!="TR") o=o.parentNode;
	return o;
}
function ur_SCR_getCell(o){
	while(o.tagName!="TD") o=o.parentNode;
	return o;
}
function ur_SCR_getContainer(o){
	var oCnt=o;
	
	while(oCnt!=null && oCnt.tagName!="BODY"){
		var sCt=oCnt.getAttribute("ct");
		if(_ur_cnt[sCt]!=null)
			return oCnt;
		oCnt=oCnt.parentNode;
	}
	return null; 
}
function ur_SCR_getDayWeek(o,oEvt){
	var sWeek=o.parentNode.firstChild.getAttribute("t");
	var sDay=o.parentNode.parentNode.rows[1].cells[o.cellIndex].title;
	var sTbl="";
	if(oEvt.fromElement != null) {
		if(oEvt.fromElement.tagName!="TD" || (o.cellIndex!=oEvt.fromElement.cellIndex))
			sTbl=sDay;
		if(oEvt.fromElement.tagName!="TD" || (o.parentNode.rowIndex!=oEvt.fromElement.parentNode.rowIndex)){
			if(sTbl!="") sTbl+=" ";
			sTbl+=sWeek;
		}	
	}
	return sTbl;
}

//** Scrollbar.ie5 **
var ur_SCB_obj;      
var ur_SCB_handle;   
var ur_SCB_initialMousePos; 
var ur_SCB_initialHandlePos;
var ur_SCB_max;      
var ur_SCB_timer;    
var ur_SCB_pixelStop;  
var ur_SCB_src;      
var ur_SCB_arr = new Array(); 
var ur_SCB_evt; 
var ur_SCB_showst=false; 
function sapUrMapi_Scrollbar_handler(oEvt) {
  ur_SCB_evt=oEvt;
  ur_SCB_src=ur_EVT_src(oEvt);  
  if (ur_SCB_src.className=="urSCBBtn") ur_SCB_src=ur_SCB_src.parentNode;
  var o=ur_getRootObj(ur_SCB_src);
  if(oEvt.type == "mousewheel" && o.getAttribute("ct") != "SCB") {
  	
  	var oObj = o;
  	
  	while (oObj.tagName!="BODY") {
    	if (oObj && oObj.getAttribute && oObj.getAttribute("ct")=="ST") break;
    	oObj=oObj.parentNode;
  	}
  	
  	if(oObj && oObj.getAttribute("urScrlbar")) {
	  	o = document.getElementById(oObj.getAttribute("urScrlbar"));
	  	ur_SCB_src = o;
	  }
  }
  sArea=ur_getAttD(ur_SCB_src,"area",""); 
  if(o && o.id && oEvt.type!="mousemove" && oEvt.type!="mouseup") {
    ur_SCB_obj=ur_Scrollbar_getObj(o.id); 
    if(ur_Scrollbar_isDisabled(ur_SCB_obj)) return false; 
  }
  
  if (ur_SCB_obj.showscrolltip) {
    if (!ur_get("ur-scrolltip")) {
      var oScrollTip=document.createElement("SPAN");
      oScrollTip.setAttribute("id","ur-scrolltip");
      oScrollTip.style.position="absolute";
      oScrollTip.style.visibility="hidden";
      oScrollTip.style.top="0";
      oScrollTip.style.left="0";
      document.getElementsByTagName("BODY")[0].appendChild(oScrollTip);
    }
    ur_SCB_obj.scrolltip=ur_get("ur-scrolltip");
    while ( ur_SCB_obj.sScrolltips.indexOf("_")>0) ur_SCB_obj.sScrolltips=ur_SCB_obj.sScrolltips.replace("_","'");
    if(ur_SCB_obj.sScrolltips) ur_SCB_obj.scrolltips = eval("result=" + ur_SCB_obj.sScrolltips +";");
  }
  
  if (oEvt.type == "mousewheel") {
    if (o.sdir!="v") return;
    if (oEvt.wheelDelta > 0){ 
       ur_Scrollbar_scroll(ur_SCB_obj,"up");
    } else {
       ur_Scrollbar_scroll(ur_SCB_obj,"down");
    }
    
    clearTimeout(ur_SCB_timer);
    
    
    ur_SCB_evt={};
    ur_SCB_timer=ur_callDelayed("ur_Scrollbar_fireChange(ur_SCB_obj, ur_SCB_evt)",300);
    ur_EVT_cancel(oEvt);
  
  } else if (oEvt.type=="mousedown" && oEvt.button==1) { 
    
    if(document.activeElement && (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA")) {
      
      
      try{
        document.activeElement.blur();
      } catch(e){}
    }
    if (ur_SCB_src.id.indexOf("-h")>-1) { 
      ur_SCB_handle=ur_SCB_src;
      ur_SCB_handle.setCapture();
      ur_SCB_handle.attachEvent("onmousemove",sapUrMapi_Scrollbar_handler);
      ur_SCB_handle.attachEvent("onmouseup",sapUrMapi_Scrollbar_handler);
      ur_SCB_handle.firstChild.className="urSCBBtnPressed";
      if (ur_SCB_obj.sdir=="v") {
        ur_SCB_initialHandlePos=parseInt(ur_SCB_src.style.marginTop);
        ur_SCB_initialMousePos=oEvt.y;
        ur_SCB_max=ur_SCB_src.parentNode.offsetHeight - ur_SCB_src.offsetHeight;
      } else {
        ur_SCB_initialHandlePos=parseInt((ur_system.direction=="rtl")? ur_SCB_src.style.marginRight: ur_SCB_src.style.marginLeft);
        ur_SCB_initialMousePos=oEvt.x;
        ur_SCB_max = ur_SCB_src.parentNode.offsetWidth - ur_SCB_src.offsetWidth;
      }
      ur_EVT_cancel(oEvt);
    
    } else if (sArea == "bar") {
      var iPos=0, offsetPos;
      ur_SCB_handle=ur_get(o.id+"-h");
      ur_SCB_handle.firstChild.className="urSCBBtnPressed";
      ur_SCB_src.setCapture();
      if (ur_SCB_obj.sdir=="v") {
      	offsetPos = oEvt.offsetY;
        iPos=parseInt(ur_SCB_handle.style.marginTop);
      } else {
        if (ur_system.direction=="rtl") {
          offsetPos = ur_SCB_obj.totalPixels-oEvt.offsetX;
          iPos=parseInt(ur_SCB_src.firstChild.style.marginRight);
        } else {
          offsetPos = oEvt.offsetX;
          iPos=parseInt(ur_SCB_src.firstChild.style.marginLeft);
        }
      }
      
      ur_SCB_pixelStop = ur_SCB_obj.range / ur_SCB_obj.totalPixels * offsetPos + ur_SCB_obj.min;
      if (offsetPos<iPos) {
        ur_Scrollbar_page(ur_SCB_obj,"up");
        ur_scrollDir="up";
        ur_SCB_timer=setInterval("ur_Scrollbar_pageStart(ur_SCB_obj,'up')",300);
      } else if (offsetPos>iPos) {
        ur_Scrollbar_page(ur_SCB_obj,"down");
        ur_scrollDir="down";
        ur_SCB_timer=setInterval("ur_Scrollbar_pageStart(ur_SCB_obj,'down')",300);
      }
      
      ur_SCB_src.attachEvent("onmouseup",ur_Scrollbar_stopButton);
      ur_SCB_src.attachEvent("onmouseout",ur_Scrollbar_stopButton);
      ur_SCB_src.attachEvent("onmousemove",ur_Scrollbar_correctStopValue);
    
    } else if ("ebudpn".indexOf(sArea)>-1) {
      ur_SCB_handle=ur_get(o.id+"-h");
      ur_SCB_src.setCapture();
      ur_SCB_src.className=ur_SCB_src.className.replace("urSCBBtn","urSCBBtnPressed");
      ur_SCB_src.attachEvent("onmouseup",ur_Scrollbar_stopButton);
      ur_SCB_src.attachEvent("onmouseout",ur_Scrollbar_stopButton);
      ur_SCB_handle.firstChild.className="urSCBBtnPressed";
      if (sArea=="e") {
        ur_Scrollbar_bounce(ur_SCB_obj,"down");
      
      } else if (sArea=="b") {
        ur_Scrollbar_bounce(ur_SCB_obj,"up");
      
      } else if (sArea=="u" || sArea=="p") {
        ur_Scrollbar_scroll(ur_SCB_obj,"up");
        ur_SCB_timer=setInterval("ur_Scrollbar_scrollStart(ur_SCB_obj,'up')",180);
      
      } else if (sArea=="d" || sArea=="n") {
        ur_Scrollbar_scroll(ur_SCB_obj,"down");
        ur_SCB_timer=setInterval("ur_Scrollbar_scrollStart(ur_SCB_obj,'down')",180);
      }
    }
  
  } else if (oEvt.type=="mousemove") {
    if (ur_SCB_handle) {
      var iDiff=0, iNewPos=0;
    	
      if (ur_SCB_obj.sdir=="v") {
      	iDiff=oEvt.y - ur_SCB_initialMousePos;
      } else {
      	iDiff = (ur_system.direction=="rtl")? ur_SCB_initialMousePos - oEvt.x: oEvt.x - ur_SCB_initialMousePos;
      }
      
      iNewPos = ur_SCB_initialHandlePos + iDiff;      
      
      if (iNewPos<0) iNewPos=0;
      if (iNewPos>ur_SCB_max) iNewPos=ur_SCB_max;
      
      if (iNewPos + ur_SCB_obj.handlesize >= ur_SCB_obj.totalPixels ) iNewPos = ur_SCB_obj.totalPixels - ur_SCB_obj.handlesize;
      
      if (ur_SCB_obj.sdir=="v") {
        ur_SCB_handle.style.marginTop = iNewPos;
      } else {
        if (ur_system.direction=="rtl")
          ur_SCB_handle.style.marginRight=iNewPos;
        else
          ur_SCB_handle.style.marginLeft=iNewPos;
       }
       
      ur_SCB_obj.newvalue = Math.floor(ur_SCB_obj.range/ur_SCB_max*iNewPos+ur_SCB_obj.min);
       
      ur_SCB_showst=true;
      ur_Scrollbar_showScrollTip(ur_SCB_obj, ur_SCB_obj.newvalue);
      if(ur_SCB_obj.sCallBackChange && ur_SCB_obj.sid) {
        window[ur_SCB_obj.sCallBackChange](ur_SCB_obj.sid, ur_SCB_obj.newvalue);
      }
      ur_EVT_cancel(oEvt);
    }
  
  } else if (oEvt.type=="mouseup") {
    if(!ur_SCB_handle) ur_SCB_handle=ur_get(o.id+"-h");
    ur_SCB_handle.releaseCapture();
    ur_SCB_handle.detachEvent("onmousemove",sapUrMapi_Scrollbar_handler);
    ur_SCB_handle.detachEvent("onmouseup",sapUrMapi_Scrollbar_handler);
    ur_SCB_handle.firstChild.className="urSCBBtn";
    ur_SCB_handle=null;
    ur_Scrollbar_applyHandlePos(ur_SCB_obj);
    
    ur_Scrollbar_fireChange(ur_SCB_obj, ur_SCB_evt);
  }
}
function ur_Scrollbar_fireChange(ur_SCB_obj, oEvt) {
  ur_Scrollbar_hideScrollTip();
  ur_SCB_showst=false;
  var iMod=ur_SCB_obj.newvalue%ur_SCB_obj.smallChange;
  if (Math.abs(iMod)>0) {
    if (ur_SCB_obj.smallChange/2>iMod) ur_SCB_obj.newvalue=ur_SCB_obj.newvalue-iMod;
    else ur_SCB_obj.newvalue=ur_SCB_obj.newvalue+ur_SCB_obj.smallChange-iMod;
  }
  if (ur_SCB_obj.newvalue!=ur_SCB_obj.value) {
    ur_SCB_obj.value=ur_SCB_obj.newvalue;
    ur_SCB_obj.ref.setAttribute("val",ur_SCB_obj.value);
    oEvt.ur_param=new Array();
    oEvt.ur_param["pos"]=ur_SCB_obj.value;
    oEvt.ur_param["dir"]=ur_SCB_obj.sdir;
    ur_EVT_fire(ur_SCB_obj.ref,"oscrlf",oEvt);
    if(ur_SCB_obj.sCallBackChange && ur_SCB_obj.sid) {
      window[ur_SCB_obj.sCallBackChange](ur_SCB_obj.sid, ur_SCB_obj.value);
    }
  }
}
function ur_Scrollbar_pageStart(o,sDir) {
  clearInterval(ur_SCB_timer);
  ur_Scrollbar_page(o,sDir);
  ur_SCB_showst=true;
  ur_SCB_timer=setInterval("ur_Scrollbar_page(ur_SCB_obj,'"+sDir+"')",100)
}
function ur_Scrollbar_scrollStart(o,sDir) {
  clearInterval(ur_SCB_timer);
  ur_Scrollbar_scroll(o,sDir);
  ur_SCB_showst=true;
  ur_SCB_timer=setInterval("ur_Scrollbar_scroll(ur_SCB_obj,'"+sDir+"')",50)
}
function ur_Scrollbar_correctStopValue(oEvt) {
  if (ur_SCB_obj.sdir=="v") {
    var newValue=ur_SCB_obj.range / ur_SCB_obj.totalPixels * oEvt.offsetY + ur_SCB_obj.min;
    var iPos=parseInt(ur_SCB_handle.style.marginTop);
    if (ur_scrollDir=="up" && newValue<iPos) ur_SCB_pixelStop=newValue;
    if (ur_scrollDir=="down" && newValue>iPos) ur_SCB_pixelStop=newValue;
  } else {
    var newValue=ur_SCB_obj.range / ur_SCB_obj.totalPixels * oEvt.offsetX + ur_SCB_obj.min;
    var iPos=parseInt(ur_SCB_handle.style.marginLeft);
    if (ur_scrollDir=="up" && newValue<iPos) ur_SCB_pixelStop=newValue;
    if (ur_scrollDir=="down" && newValue>iPos) ur_SCB_pixelStop=newValue;
  }
}
function ur_Scrollbar_stopButton(oEvt) {
  ur_SCB_evt=oEvt;
  if (ur_SCB_timer) window.clearInterval(ur_SCB_timer);
  
  if (ur_SCB_src) {
    ur_SCB_src.className=ur_SCB_src.className.replace("urSCBBtnPressed","urSCBBtn");
    ur_SCB_src.detachEvent("onmouseup",ur_Scrollbar_stopButton);
    ur_SCB_src.detachEvent("onmouseout",ur_Scrollbar_stopButton);
    ur_SCB_src.detachEvent("onmousemove",ur_Scrollbar_correctStopValue);
    ur_SCB_handle.firstChild.className="urSCBBtn";
    ur_SCB_src.releaseCapture();
    ur_SCB_src=null;
  }
  ur_Scrollbar_fireChange(ur_SCB_obj, ur_SCB_evt);
  ur_SCB_handle=null;
}
function sapUrMapi_Scrollbar_registerCreate(sId) {
  sapUrMapi_Create_AddItem(sId, "ur_Scrollbar_init('"+sId+"')");
  
}
var ur_iScrollbarResizeProcessObject;
function ur_Scrollbar_resize(oEvt) {
  if (!oEvt) return;
  var sId = ur_EVT_src(oEvt).id;
  if(!ur_iScrollbarResizeProcessObject) ur_iScrollbarResizeProcessObject = {};
  if(!ur_iScrollbarResizeProcessObject[sId]) ur_iScrollbarResizeProcessObject[sId] = 0;
  ur_iScrollbarResizeProcessObject[sId]++;
  ur_callDelayed("ur_Scrollbar_resize_serialized("+ur_iScrollbarResizeProcessObject[sId]+",'"+sId+"')",0);
}
function ur_Scrollbar_resize_serialized(iProcessId, sId) {
  if(iProcessId == ur_iScrollbarResizeProcessObject[sId]) {
    var oScrollbarObj = ur_Scrollbar_getObj(sId),
      sCallBackResize = oScrollbarObj.sCallBackResize,
      sConnnectedId = oScrollbarObj.sid;
    if(oScrollbarObj.sdir == "v") {
    	if(oScrollbarObj.iLastParentHeight == oScrollbarObj.ref.parentNode.offsetHeight) return;
    	oScrollbarObj.iLastParentHeight = oScrollbarObj.ref.parentNode.offsetHeight;
    }
    delete ur_iScrollbarResizeProcessObject[sId];
    oScrollbarObj = null;
    if(sCallBackResize && sConnnectedId) {
      window[sCallBackResize](sConnnectedId);
    }
    ur_SCB_arr[sId]=null;
    ur_Scrollbar_init(sId);
  }
}
function ur_Scrollbar_EnvironmentCleanUp() {
  ur_SCB_arr=null;
  ur_iScrollbarResizeProcessObject = null;
}
function ur_Scrollbar_EnvironmentInit() {
  ur_SCB_arr = new Array();
  ur_iScrollbarResizeProcessObject = {};
}
function ur_Scrollbar_getObj(sId) {
  var oDomRefScrollbar = ur_get(sId);
  if (!oDomRefScrollbar) return null;
  if (!ur_SCB_arr[sId]) {
    var obj = {id:sId,
         sid:ur_getAttD(oDomRefScrollbar,"sid",""),
         sdir:ur_getAttD(oDomRefScrollbar,"sdir",""),
         value:parseInt(ur_getAttD(oDomRefScrollbar,"val","0")),
         newvalue:parseInt(ur_getAttD(oDomRefScrollbar,"val","0")),
         max:parseInt(ur_getAttD(oDomRefScrollbar,"max","")),
         min:parseInt(ur_getAttD(oDomRefScrollbar,"min","")),
         smallChange:parseInt(ur_getAttD(oDomRefScrollbar,"sml","")),
         largeChange:parseInt(ur_getAttD(oDomRefScrollbar,"lrg","")),
         showscrolltip:ur_getAttD(oDomRefScrollbar,"scs","")=="1",
         scrolltipdefault:ur_getAttD(oDomRefScrollbar,"scd",""),
         sScrolltips:ur_getAttD(oDomRefScrollbar,"sct",""),
         scrolltips:null,
         ref:oDomRefScrollbar,
         handle:ur_get(sId+"-h"),
         sCallBackResize: ur_getAttD(oDomRefScrollbar,"cbRz", null),
         sCallBackChange: ur_getAttD(oDomRefScrollbar,"cbCh", null),
         iLastParentHeight: 0
        };
    
    
    
    
    if(obj.value > 1 && obj.min >= obj.max) obj.max=obj.value;
    if (obj.sdir == "v") {
      obj.iLastParentHeight = obj.ref.parentNode.offsetHeight;
      obj.totalPixels = obj.handle.parentNode.offsetHeight;
    } else {
      obj.totalPixels = obj.handle.parentNode.offsetWidth;
    }
    if (obj.value < obj.min) obj.value = obj.min;
    obj.range = obj.max-obj.min;
    obj.handlesize=ur_Scrollbar_getHandleSize(obj);
    
    
    if (obj.sdir == "v") {
    	obj.handle.style.width = "100%";
    	obj.handle.style.height = obj.handlesize;
    } else {
      obj.handle.style.width = obj.handlesize;
      obj.handle.style.height = "100%";
    }
    
    ur_SCB_arr[sId] = obj;
		
    
    if (ur_Scrollbar_isDisabled(obj)) {
      
    } else {
      
    }
    oDomRefScrollbar.attachEvent("onresize",ur_Scrollbar_resize);
    
    if(obj.sdir == "v" && obj.sid) {
    	
    	var oScrolledElement = document.getElementById(obj.sid);
    	if(oScrolledElement && !oScrolledElement.getAttribute("urScrlbar")) {
    		oScrolledElement.attachEvent("onmousewheel", sapUrMapi_Scrollbar_handler);
    		oScrolledElement.setAttribute("urScrlbar", obj.id);
    	}
    }
    
    return obj;
  } else {
    return ur_SCB_arr[sId];
  }
}
function ur_Scrollbar_page(o,dir,oEvt) {
  if (!oEvt) oEvt=ur_SCB_evt;
  if (dir=="up") o.newvalue=o.newvalue-o.largeChange;
  else o.newvalue=o.newvalue+o.largeChange;
  if (o.newvalue>o.max) o.newvalue=o.max;
  if (o.newvalue<o.min) o.newvalue=o.min;
  
  
  o.newvalue=Math.ceil(o.newvalue);
  ur_Scrollbar_applyHandlePos(o);
  ur_Scrollbar_showScrollTip(o,o.newvalue);
}
function ur_Scrollbar_scroll(o,dir,oEvt) {
  if (!oEvt) oEvt=ur_SCB_evt;
  if (dir=="up") o.newvalue=o.newvalue-o.smallChange;
  else o.newvalue=o.newvalue+o.smallChange;
  if (o.newvalue>o.max) o.newvalue=o.max;
  if (o.newvalue<o.min) o.newvalue=o.min;
  ur_Scrollbar_applyHandlePos(o);
  ur_Scrollbar_showScrollTip(o,o.newvalue);
}
function ur_Scrollbar_bounce(o,dir,oEvt) {
  if (!oEvt) oEvt=ur_SCB_evt;
  if (dir=="up") o.newvalue=o.min;
  else o.newvalue=o.max;
  ur_Scrollbar_applyHandlePos(o);
}
function ur_Scrollbar_getHandleSize(o) {
  if(ur_Scrollbar_isDisabled(o)) return 0;
  var iTotal = 0;
  var elemCount = o.range + o.largeChange;
  var iSize=Math.floor(o.totalPixels / elemCount * o.largeChange);
  if (iSize<6) iSize=6;
  if (o.totalPixels <= iSize) iSize=0;
  o.totalPixels = o.totalPixels;
  return iSize;
}
function ur_Scrollbar_applyHandleSize(o) {
  if(ur_Scrollbar_isDisabled(o)) {
    o.handle.style.display = "none";
  } else {
    o.handle.style.display = "block";
    if (o.sdir == "v") {
      o.handle.style.height = o.handlesize+"px";
    } else {
      o.handle.style.width = o.handlesize+"px";
    }
  }
}
function ur_Scrollbar_isDisabled(o) {
  return (o)? o.min >= o.max: false;
}
function ur_Scrollbar_applyHandlePos(o) {
  if(ur_Scrollbar_isDisabled(o)) return;
  var iVal = o.newvalue - o.min;
  iVal = Math.floor((o.totalPixels / o.range) * iVal);
  
  if (o.totalPixels == 0) return;
  iVal=iVal - Math.ceil((o.handlesize / o.totalPixels) * iVal);
  if (iVal != 0) {
    if (iVal + o.handlesize >= o.totalPixels) iVal = o.totalPixels - o.handlesize;
  }
  if (o.sdir == "v") {
    o.handle.style.marginTop = iVal;
  } else {
    if (ur_system.direction=="rtl")
      o.handle.style.marginRight = iVal;
    else
      o.handle.style.marginLeft = iVal;
  }
}
function ur_Scrollbar_init(sId) {
   var o = ur_Scrollbar_getObj(sId);
   if (!o) return;
   ur_Scrollbar_applyHandleSize(o);
   ur_Scrollbar_applyHandlePos(o);
}
function sapUrMapi_Scrollbar_scroll(sId,oEvt) {
   var o = ur_get(sId);
   var oScr=ur_Scrollbar_getObj(ur_getRootObj(ur_EVT_src(oEvt).id));
   if (o && o.style.overflow=="hidden") {
      if (oScr.sdir=="v")
        o.scrollTop=(o.scrollHeight/oScr.range)*(oScr.value-oScr.min); 
      else
        o.scrollleft=(o.scrollWidth/oScr.range)*(oScr.value-oScr.min); 
   }
}
function ur_Scrollbar_hideScrollTip() {
  if (oPopup)
    oPopup.hide();
}
function ur_Scrollbar_showScrollTip(obj,val) {
  
  
  if (obj.showscrolltip && ur_SCB_showst) {
    var oScrollTip=ur_get('ur-scrolltip');
    var s="<table class=\"urDataTipStd urDataTipTxt\" style=\"text-align:right;padding:1px 3px;height:16px;width:1px;\">";
    
    if (obj.scrolltips) { 
      var lastMatchValue;
      s += "<tr><td nowrap><b>";
      for(var n in obj.scrolltips) { 
        if (n>val) break;
        else lastMatchValue=n;
      }
      
      var sDomObjIndex = obj.scrolltips[lastMatchValue];
      
      var sHTML = ur_get(obj.id + "-sct-" + sDomObjIndex).innerHTML;
      s += sHTML + "</b></td></tr>";
    }
    
    var fromIndex=val, toIndex=fromIndex+obj.largeChange-1, ofCount=obj.max+obj.largeChange-1;
    if (obj.sdir=="v" && obj.scrolltipdefault=="ROW") {
      s += "<tr><td nowrap>" + getLanguageText("SAPUR_PG_ROW") + " " + fromIndex + " - " + toIndex + " " + getLanguageText("SAPUR_PG_INDEX") + " " + ofCount + "</td></tr>";
    } else if (obj.sdir=="h" && obj.scrolltipdefault=="COL") {
      s += "<tr><td nowrap>" + getLanguageText("SAPUR_PG_COLUMN") + " " + fromIndex + " - " + toIndex + " " + getLanguageText("SAPUR_PG_INDEX") + " " + ofCount + "</td></tr>";
    }
    oScrollTip.innerHTML= s + "</table>";
    if (obj.sdir=="v") {
      oScrollTip.firstChild.style.textAlign="right";
    } else
      oScrollTip.firstChild.style.textAlign="left";
    var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
    oPopup = new sapPopup(window,arrUrls,oScrollTip,obj.handle,0);
    oPopup.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
    if (obj.sdir=="v") {
      oPopup.position.left-=obj.ref.offsetWidth;
      oPopup.position.top-=obj.handle.offsetHeight;
    } else {
      oPopup.position.left-=obj.handle.offsetWidth-oScrollTip.offsetWidth;
      oPopup.position.top-=obj.handle.offsetHeight+oScrollTip.offsetHeight;
    }
    oPopup.show(true);
  } else {
    if (oPopup)
      oPopup.hide();
  }
}
function ur_Scrollbar_setSizingParams(sId, iValue, iMax, iLargeChange) {
  var oDomRefScrollbar = ur_get(sId), oScrollBarObj = ur_SCB_arr[sId];
  if(oDomRefScrollbar) {
      oDomRefScrollbar.setAttribute("val", iValue);
      oDomRefScrollbar.setAttribute("max", iMax);
      oDomRefScrollbar.setAttribute("lrg", iLargeChange);
  }
  if (oScrollBarObj) {
    oScrollBarObj.value = iValue;
    oScrollBarObj.max = iMax;
    oScrollBarObj.largeChange = iLargeChange;
  }
}
function ur_Scrollbar_setCallback(sId, sCbRz, sCbCh) {
  var oDomRefScrollbar = ur_get(sId), oScrollBarObj = ur_SCB_arr[sId];
  if(oDomRefScrollbar) {
    oDomRefScrollbar.setAttribute("cbRz", sCbRz);
    oDomRefScrollbar.setAttribute("cbCh", sCbCh);
  }
  if (oScrollBarObj) {
    oScrollBarObj.sCallBackResize = sCbRz;
    oScrollBarObj.sCallBackChange = sCbCh;
  }
}
//** Splitter.ie5 **

function urSp_addEventListener(node, eventname, listener, useCapturePhase)
{
			var _tmp, _eventname;
			if (!node || ! eventname )
			{
					return false;
			}
			if (useCapturePhase)
			{
				if (node.setCapture)
				{
						node.setCapture();
						
				}
 				else if (window.captureEvents)
				{
      				if (eventname == "mousemove")
					{
							window.captureEvents(Event.MOUSEMOVE);
					} else if (eventname == "mouseup")
					{
							window.captureEvents(Event.MOUSEUP);
					} else if (eventname == "mouseout")
					{
							window.captureEvents(Event.MOUSEOUT);
					} else if (eventname == "mousedown")
					{
							window.captureEvents(Event.MOUSEDOWN);
					}	
									
  				} 
  				
  					
  				
			}
			if (node.addEventListener)
			{
				
					node.addEventListener(eventname, listener, useCapturePhase);
			}
			else {
				_eventname = 'on'+eventname;
				if (node.attachEvent) {
					
					node.attachEvent(_eventname, listener);
					}
				else {
					
					_tmp = node[_eventname];
					node[_eventname] = typeof _tmp == 'function'
					? (function() { _tmp(); listener(); })
					: listener;
				}
			}
			
			
			return true;
}
function urSp_removeEventListener(node, eventname, listener, useCapturePhase)
{
			var _tmp, _eventname;
			if (!node || !eventname )
			{
				return false;
			}
			if (useCapturePhase)
			{
				if (node.releaseCapture)
				{
						node.releaseCapture();
						
				}
 				else if (window.releaseEvents)
				{
      				if (eventname == "mousemove")
					{
							window.releaseEvents(Event.MOUSEMOVE);
					} else if (eventname == "mouseup")
					{
							window.releaseEvents(Event.MOUSEUP);
					} else if (eventname == "mouseout")
					{
							window.releaseEvents(Event.MOUSEOUT);
					} else if (eventname == "mousedown")
					{
							window.releaseEvents(Event.MOUSEDOWN);
					}
  				} 
  				
  					
  				
			}
			if (node.removeEventListener)
			{
				
				node.removeEventListener(eventname, listener, useCapturePhase);
			}
			else
			{
				_eventname = 'on'+eventname;
				if (node.detachEvent)
				{ 
					node.detachEvent(_eventname, listener);
				}
				else
				{ 	
					node[_eventname] = "";
				}
			}
			return true;
}
function urSp_getChildNodesByTagName(parent, tagname)
			{
				var children = new Array();
				if (parent != null)
				{
					var old_children = parent.childNodes;
					var i = 0;
					for(i = 0; i < old_children.length; i++)
					{
						if (old_children[i].nodeName == tagname )
						{
							children.push(old_children[i]);
						}
					}
				}	
				return children;
}
function urSp_getFirstChildNodeByTagName(parent, tagname)
			{				
				if (parent != null)
				{
					var old_children = parent.childNodes;
					var i = 0;
					for(i = 0; i < old_children.length; i++)
					{
						if (old_children[i].nodeName == tagname )
						{
							return old_children[i];
						}
					}
				}	
				return null;
}
			
function urSp_checkTPElement(Id, event)
{	
	var element = urSp_getTPElement(event);
	if ( element.id != Id )
	{
		
		return null;
	}
	return element;
}	
function urSp_getTPElement(event)
{
	var element = (event.target) ? event.target : event.srcElement;
	while( element != null && ! element.getAttribute("tp") )
	{
		element = element.parentNode;	
	}
	if (element == null)
	{
		
		return null;
	}
	return element;
}		
			
function urSp_checkEvent(event)
{
	var evt = event ? event : window.event;
	if (! evt.target && ! evt.srcElement )
	{
		
		return null;
	}
	return evt;
}	
function urSp_refreshTable(table)
{
	if (table.refresh)
	{
		table.refresh();
	} else 
	{   
		var old = table.style.display; 
		table.style.display = "none";
		var colgroup = urSp_getFirstChildNodeByTagName(table, "COLGROUP");
		var cols = urSp_getChildNodesByTagName(colgroup, "COL");
		var tbody = urSp_getFirstChildNodeByTagName(table, "TBODY");
		var trs = urSp_getChildNodesByTagName(tbody, "TR");
		var k = 0;
		for (k=0; k < (trs.length - 1); k++)
		{						
			var td1 = urSp_getFirstChildNodeByTagName(trs[k], "TD");
			if (td1.getAttribute("tp") != null && td1.getAttribute("tp") == "urSpTP") 
			{
				var tds = urSp_getChildNodesByTagName(trs[k], "TD");	
				var l = 0;
				for (l=0; l< (cols.length -1); l++)			
				{
					var td = tds[l];
					if (td.getAttribute("tp") != null && td.getAttribute("tp") == "urSpTP")
					{
						var col = cols[l];		
						if (col.width && col.width!= null && col.width != "*")
						{
							td.width = col.width;										
						}
					}		
				}
			}	
		}	
		
		
		
		
		table.style.display = old;	
	}
} 
			var urSp = new Object();
			
			urSp.bPressed = false;
			
			urSp.sActiveSplitterID = null;
			
			
			
			urSp.oPreviousElements = new Array();
			
			urSp.oNextElements = new Array();
			
			urSp.iStartPositionX = null;
			
			urSp.iStartPositionY = null;
			
			
			
			
			
			
			urSp.iPreviousElementsWidth = null;
			
			urSp.iNextElementsWidth = null;
			
			urSp.iPreviousElementsHeight = null;
			
			urSp.iNextElementsHeight = null;
			
			urSp.sSplitterType = null;
			
			urSp.iCollapseSize = 25;
function urSpGetSplitterType() 
{
	if (urSpIsVerticalSplitter())
	{
		return "columnresize";
	} else if (urSpIsHorizontalSplitter())
	{
		return "rowresize";
	}
	return null;				
}
function urSpIsVerticalSplitter() 
{
	if (urSp.sSplitterType != null && urSp.sSplitterType == 'c')
	{
		return true;
	}
	return false;				
}
function urSpIsHorizontalSplitter() 
{
	if (urSp.sSplitterType != null && urSp.sSplitterType == 'r')
	{
		return true;
	}
	return false;				
}
function sapUrMapi_SplitterSashActivate_handler(Id, event)
{
	urSpTSDwnList(Id, event);
}
function sapUrMapi_SplitterSashPassivate_handler(Id, event) 
{
	var evt = urSp_checkEvent(event);
	var element = urSp_checkTPElement(Id, evt);
	urSpTSUpList(evt);
}
function sapUrMapi_SplitterSashHover_handler(Id, event) 
{
	var evt = urSp_checkEvent(event);	
	var element = urSp_checkTPElement(Id, evt);
	urSpTHovList(evt);
}
function urSpTSDwnList(Id, event)
			{
				var evt = urSp_checkEvent(event);
				var oSash = urSp_checkTPElement(Id, evt);
				
				if ( oSash.getAttribute("tp") == "urSpTVsD"
					 || oSash.getAttribute("tp") == "urSpTHsD"
				)
				{
					
					
				} else
				{
				if (oSash.getAttribute("tp") == "urSpTVs")
				{
					urSp.sSplitterType= "c"; 
				} else 
				{
					urSp.sSplitterType = "r"; 
				} 
					
					
				
				if (event.preventDefault)
				{
					event.preventDefault(); 
				}	
				urSpTDeHovList(event);
			{
				
				
				var children = new Array();
				var tbody = oSash.parentNode.parentNode;
				var oSplitter = tbody.parentNode;
				urSp.sActiveSplitterID = oSplitter.id;
				if (urSpIsVerticalSplitter() )
				{ 
					var iRow = parseInt(oSash.getAttribute("prevcol"));
					
					
					
					var mElements = urSp_getColumnElements(oSplitter,iRow); 
					urSp.oPreviousElements = mElements.prev;
					urSp.oNextElements = mElements.next;
					if (ur_system.direction == "rtl")
					{
						urSp.oPreviousElementsTemp = urSp.oPreviousElements;
						urSp.oPreviousElements = urSp.oNextElements;
						urSp.oNextElements = urSp.oPreviousElementsTemp;
					}
				} else 
				{ 
					var iCol = parseInt( oSash.getAttribute("prevrow"));
					
					
						var mElements = urSp_getRowElements(oSplitter,iCol); 
						urSp.oPreviousElements = mElements.prev;
						urSp.oNextElements = mElements.next;
				}
			}
				urSp.bPressed = true;
				urSp.iPreviousElementsWidth = urSpTSGetSize(urSp.oPreviousElements, true);
				urSp.iNextElementsWidth = urSpTSGetSize(urSp.oNextElements, true);
				urSp.iPreviousElementsHeight = urSpTSGetSize(urSp.oPreviousElements, false);
				urSp.iNextElementsHeight = urSpTSGetSize(urSp.oNextElements, false);
				{ 
				var oSplitterPosition = sapUrMapi_getAbsolutePosition(oSplitter);
				
				var oSashPosition = sapUrMapi_getAbsolutePosition(oSash);
				
				var oParentPosition = sapUrMapi_getAbsolutePosition(oSplitter.parentNode);
				
				
					
				
				
				var iSplitterBackgroundTop;
				
				{
						urSp.iStartPositionX = parseInt(oSashPosition.left);
						urSp.iStartPositionY = parseInt(oSashPosition.top);
						iSplitterBackgroundTop = parseInt(oSplitterPosition.top) ;	
				}  				
					
				var oBody = document.getElementsByTagName("BODY")[0];
				
				var iSplitterOffsetHeight = oSplitter.offsetHeight;
				var iSplitterOffsetWidth = oSplitter.offsetWidth;
				var iSashOffsetWidth =  oSash.offsetWidth;
				var iSashOffsetHeight =  oSash.offsetHeight;
	
				var oSplitterBack = document.getElementById(urSp.sActiveSplitterID + "-bgdiv");
				var oSplitterBackiframe = document.getElementById(urSp.sActiveSplitterID + "-bgiframe");
				var oSplitterdiv = document.getElementById(urSp.sActiveSplitterID + "-div");
				var oSplitteriframe = document.getElementById(urSp.sActiveSplitterID + "-iframe");	
			
					
				if (oSplitterBack == null)
				{
						{	
				
							var oSplitterBack = document.createElement("div");
							oSplitterBack.setAttribute("id", urSp.sActiveSplitterID + "-bgdiv");
							oSplitterBack.className = "urSpTSB";					
							oBody.insertBefore(oSplitterBack, oBody.firstChild);
						
							urSp_addEventListener(oSplitterBack,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitterBack,"mouseup",urSpTSUpList, true);
			
							var oSplitterBackiframe = document.createElement("iframe");
							oSplitterBackiframe.setAttribute("id", urSp.sActiveSplitterID + "-bgiframe");
							oSplitterBackiframe.frameBorder="0";
							oSplitterBackiframe.className = "urSpTSB";					
							oBody.insertBefore(oSplitterBackiframe, oBody.firstChild);
						
							urSp_addEventListener(oSplitterBackiframe,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitterBackiframe,"mouseup",urSpTSUpList, true);
						}				
						{	
							var oSplitterdiv = document.createElement("div");
							oSplitterdiv.setAttribute("id", urSp.sActiveSplitterID + "-div");			
							oBody.insertBefore(oSplitterdiv, oBody.firstChild);
						
							urSp_addEventListener(oSplitterdiv,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitterdiv,"mouseup",urSpTSUpList, true);				
				
							var oSplitteriframe = document.createElement("iframe");
							oSplitteriframe.setAttribute("id", urSp.sActiveSplitterID + "-iframe");
							oSplitteriframe.frameBorder="0";					
							oBody.insertBefore(oSplitteriframe, oBody.firstChild);
						
							urSp_addEventListener(oSplitteriframe,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitteriframe,"mouseup",urSpTSUpList, true);
				
						}
				}	
				{
					if ( urSpIsVerticalSplitter())
					{
						oSplitterBack.style.top = iSplitterBackgroundTop + "px"	;
						oSplitterBack.style.left = (urSp.iStartPositionX - parseInt(urSp.iPreviousElementsWidth)) + "px";
						oSplitterBack.style.height = iSplitterOffsetHeight  + "px"	;
						oSplitterBack.style.width = (parseInt(urSp.iPreviousElementsWidth) + parseInt(urSp.iNextElementsWidth) + parseInt(iSashOffsetWidth))  + "px";	
					} else 
					{
						oSplitterBack.style.top =(urSp.iStartPositionY - parseInt(urSp.iPreviousElementsHeight)) + "px";
						oSplitterBack.style.left = urSp.iStartPositionX   + "px";
						oSplitterBack.style.height =  (parseInt(urSp.iPreviousElementsHeight) + parseInt(urSp.iNextElementsHeight) + parseInt(iSashOffsetHeight ))  + "px";
						oSplitterBack.style.width = iSplitterOffsetWidth  + "px";		
					}
	
					oSplitterBackiframe.style.top = oSplitterBack.style.top;
					oSplitterBackiframe.style.left = oSplitterBack.style.left;
					oSplitterBackiframe.style.height = oSplitterBack.style.height;
					oSplitterBackiframe.style.width = oSplitterBack.style.width;	
				}	
				{	
					var className;
					if ( urSpIsVerticalSplitter())
					{
						className = "urSpTVsA";
					} else
					{
						className = "urSpTHsA";	
					}	
					oSplitterdiv.className = className;	
					oSplitteriframe.className = className;	
	
					if ( urSpIsVerticalSplitter())
					{
						oSplitterdiv.style.top = iSplitterBackgroundTop + "px";
						oSplitterdiv.style.left = (urSp.iStartPositionX - (parseInt(iSashOffsetWidth) / 2)) +  "px";
						oSplitterdiv.style.height = iSplitterOffsetHeight  + "px";
						oSplitterdiv.style.width = iSashOffsetWidth + "px";
					} else 
					{
						oSplitterdiv.style.top = (urSp.iStartPositionY - (parseInt(iSashOffsetHeight ) / 2)) +  "px";
						oSplitterdiv.style.left =  urSp.iStartPositionX  + "px";
						oSplitterdiv.style.height = iSashOffsetHeight   + "px";
						oSplitterdiv.style.width = iSplitterOffsetWidth  + "px";
					}	
	
					oSplitteriframe.style.top = oSplitterdiv.style.top;
					oSplitteriframe.style.left = oSplitterdiv.style.left;
					oSplitteriframe.style.height = oSplitterdiv.style.height;
					oSplitteriframe.style.width = oSplitterdiv.style.width;
		
				}		
				oSplitterBack.style.display = "inline";
				oSplitterBackiframe.style.display = "inline";	
				oSplitterdiv.style.display = "inline";
				oSplitteriframe.style.display = "inline";	
				urSp_addEventListener(oBody,"mousemove", urSpTSBMoveList, true);
				urSp_addEventListener(oBody,"mouseup",urSpTSUpList, true);
			}
		}
}
function urSpTSGetSize(elements, isWidth) 
{
	var size = -1;
	{
		var i = 0;
		for (i =0; i < elements.length; i++)
		{
			var t = document.getElementById(elements[i]);
			{
				if (isWidth)
				{
					if ( ! t.width || t.width.indexOf("%") > -1)
					{ 
						size = t.offsetWidth;
					} else
					{ 
						size = t.width;
						break;
					}
				} else
				{
					if ( ! t.height || t.height.indexOf("%") > -1)
					{ 
						size = t.offsetHeight;
					} else
					{ 
						size = t.height;
						break;
					}
				}	
			}
		}
		
	}
	return size;				
}
function urSpTSUpList(event)
{								
				
				if (urSp.bPressed)
				{  
					urSp.bPressed = false;
					if(urSp.sActiveSplitterID != null)
					{
							var evt = urSp_checkEvent(event);
							var oSplitter = document.getElementById(urSp.sActiveSplitterID);
							var oSplitterBack = document.getElementById(urSp.sActiveSplitterID + "-bgdiv");
							var oSplitteriframe = document.getElementById(urSp.sActiveSplitterID + "-iframe");
							var oPreviousElements = document.getElementById(urSp.oPreviousElements[0]);							
							var oNextElements = document.getElementById(urSp.oNextElements[0]);
								if (urSpIsVerticalSplitter())
								{
									
									{
										var curX = evt.clientX - parseInt(urSp.iStartPositionX); 
									}									
									var colgroup = urSp_getFirstChildNodeByTagName(oSplitter,"COLGROUP");
									var cols = urSp_getChildNodesByTagName(colgroup, "COL");
									
									if (cols.length >= 2)
									{
										
										
										var iDifferencePreviousElements = parseInt(curX)  - (parseInt(oSplitteriframe.offsetWidth) / 2);
										var iDifferenceNextElements = (parseInt(oSplitteriframe.offsetWidth) / 2) - parseInt(curX);
										var iPreviousElementsOffsetWidth = oPreviousElements.offsetWidth;
										var iNextElementsOffsetWidth = oNextElements.offsetWidth;
										
										if ( (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*")
										  	&&  (oNextElements.width == null || oNextElements.width == "" || oNextElements.width == "*")
											)
										{
												
										} else  if (oPreviousElements.width.indexOf("%") > -1 || oNextElements.width.indexOf("%") > -1)
										{ 
											var iPreviousElementsWidth = oPreviousElements.width ;
											if (! (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*") )
											{	 
												
												var iPaneSize = Math.floor((1 + iDifferencePreviousElements / oPreviousElements.offsetWidth) * parseInt(oPreviousElements.width));
												if (iPaneSize >= parseInt(oNextElements.width) + parseInt(oPreviousElements.width) )
												{
													iPaneSize = parseInt(oNextElements.width) + parseInt(oPreviousElements.width) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = iPaneSize + "%";
													}
												} else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = "1%";
													}
												}
											}
											if (!(oNextElements.width == null || oNextElements.width == "" || oNextElements.width == "*"))
											{ 	
												
												if (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*")
												{
													iPreviousElementsWidth = (parseInt(oNextElements.width) *  iPreviousElementsOffsetWidth)  / iNextElementsOffsetWidth
												}
												var iPaneSize =  Math.ceil((- iDifferencePreviousElements / iPreviousElementsOffsetWidth)  * parseInt(iPreviousElementsWidth)) + parseInt(oNextElements.width);
												if (iPaneSize >= parseInt(oNextElements.width) + parseInt(iPreviousElementsWidth) )
												{
													iPaneSize = parseInt(oNextElements.width) + parseInt(iPreviousElementsWidth) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).width = iPaneSize + "%";
													}
												}  else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).width = "1%";
													}
												}
											}
										} else 
										{	
											if (! (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*") )
											{
														
														var iPaneSizeOfPreviousElements = parseInt(oPreviousElements.width) + iDifferencePreviousElements;														
														if ( iPaneSizeOfPreviousElements >= parseInt(iPreviousElementsOffsetWidth) + parseInt(iNextElementsOffsetWidth) - urSp.iCollapseSize )
														{  
															iPaneSizeOfPreviousElements = parseInt(iPreviousElementsOffsetWidth) + parseInt(iNextElementsOffsetWidth) - 1;
														}
														if (iPaneSizeOfPreviousElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = iPaneSizeOfPreviousElements + "px";	
															}					
																								
															
														}
											}
											if (!(oNextElements.width == null || oNextElements.width == "" || oNextElements.width == "*"))
											{
														
														var iPaneSizeOfNextElements = parseInt(oNextElements.width) + iDifferenceNextElements;
														if ( (iPreviousElementsOffsetWidth + iDifferencePreviousElements)  < urSp.iCollapseSize )  
														{ 
															iPaneSizeOfNextElements = parseInt(iPreviousElementsOffsetWidth) + parseInt(iNextElementsOffsetWidth) - 1;
														}
														if (iPaneSizeOfNextElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).width = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).width = iPaneSizeOfNextElements + "px";
															}
														}		
											}
											urSp_refreshTable(oSplitter);
									}
									
									
									var oPreviousElements = new Array();
									var oNextElements = new Array();
									var oPreviousElementIds = new Array();
									var oNextElementIds = new Array();
									var tbody = urSp_getFirstChildNodeByTagName(oSplitter, "TBODY");
									var trs = urSp_getChildNodesByTagName(tbody, "TR");
									
									if (document.getElementById(urSp.oNextElements[0]).nodeName == "COL")
									{   
										var colgroup = urSp_getFirstChildNodeByTagName(oSplitter, "COLGROUP");
										var cols = urSp_getChildNodesByTagName(colgroup, "COL");
				
										var iPreviousElementsColumnPosition = 0;
										for (iPreviousElementsColumnPosition=0; iPreviousElementsColumnPosition < cols.length; iPreviousElementsColumnPosition++)
										{
											if (cols[iPreviousElementsColumnPosition].id != null &&  cols[iPreviousElementsColumnPosition].id == urSp.oPreviousElements[0] )
											{
												break;
											}
										}
				
										for (iRowPosition = 0; (iRowPosition * 2) < trs.length; iRowPosition++)
										{
											var tds = urSp_getChildNodesByTagName(trs[iRowPosition * 2], "TD");
											
											{
												if (iRowPosition == 0)
												{
													
													oPreviousElements.push(tds[iPreviousElementsColumnPosition]);
													oNextElements.push(tds[iPreviousElementsColumnPosition + 2]);
												} else
												{	
													oPreviousElements.push(tds[iPreviousElementsColumnPosition / 2]);
													oNextElements.push(tds[iPreviousElementsColumnPosition/ 2 + 1]);
												}
											}
										}
									} else
									{
											oNextElements = urSp.oNextElements;	
											oPreviousElements = urSp.oPreviousElements;															
									}
																																				
									{
										for (iPos = 0;  iPos < oPreviousElements.length; iPos++)
										{
											oPreviousElements[iPos].width = document.getElementById(urSp.oPreviousElements[0]).width;
											oPreviousElementIds.push(oPreviousElements[iPos].id);	
											
											
											 										 
										}
									}
									{
										
										for (iPos = 0;  iPos < oNextElements.length; iPos++)
										{
											oNextElements[iPos].width = document.getElementById(urSp.oNextElements[0]).width;
											oNextElementIds.push(oNextElements[iPos].id);	
									
											
											 
										}
									}
									evt["ur_param"]={type: urSpGetSplitterType(), prev: document.getElementById(urSp.oPreviousElements[0]).width, next: document.getElementById(urSp.oNextElements[0]).width, prevElements: oPreviousElementIds.join(","), nextElements: oNextElementIds.join(",")};
									ur_EVT_fire(oSplitter,"onsashmovingfinished",evt);		
								}	
								} else 
								{
									
									{
										var curY = evt.clientY - parseInt(urSp.iStartPositionY) ; 
									}
									var tbody = urSp_getFirstChildNodeByTagName(oSplitter,"TBODY");
									var trs = urSp_getChildNodesByTagName(tbody, "TR");
									if (trs.length  >= 2)
									{
										var iDifferencePreviousElements = parseInt(curY)  - (parseInt(oSplitteriframe.offsetHeight) / 2);
										var iDifferenceNextElements = (parseInt(oSplitteriframe.offsetHeight) / 2) - parseInt(curY);
										var iPreviousElementsOffsetHeight = oPreviousElements.offsetHeight;
										var iNextElementsOffsetHeight = oNextElements.offsetHeight;
										
										if (   (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*")
											   &&  (oNextElements.height == null || oNextElements.height == "" || oNextElements.height == "*")
											)
										{
												
										} else  if (oPreviousElements.height.indexOf("%") > -1 || oNextElements.height.indexOf("%") > -1)
										{ 
											var oPreviousElements_height = oPreviousElements.height;
											
											if (! (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*") )
											{	 
												
												var iPaneSize = Math.floor((1 + iDifferencePreviousElements / oPreviousElements.offsetHeight) * parseInt(oPreviousElements.height));
												if (iPaneSize >= parseInt(oNextElements.height) + parseInt(oPreviousElements.height) )
												{
													iPaneSize = parseInt(oNextElements.height) + parseInt(oPreviousElements.height) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = iPaneSize + "%";
													}
												} else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = "1%";
													}
												}
											}
											if (!(oNextElements.height == null || oNextElements.height == "" || oNextElements.height == "*"))
											{ 	
												
												if (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*")
												{
													oPreviousElements_height = (parseInt(oNextElements.height) *  iPreviousElementsOffsetHeight)  / iNextElementsOffsetHeight;
												}
												var iPaneSize =  Math.ceil((- iDifferencePreviousElements / iPreviousElementsOffsetHeight)  * parseInt(oPreviousElements_height)) + parseInt(oNextElements.height);
												if (iPaneSize >= parseInt(oNextElements.height) + parseInt(oPreviousElements_height) )
												{
													iPaneSize = parseInt(oNextElements.height) + parseInt(oPreviousElements_height) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).height = iPaneSize + "%";
													}
												}  else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).height = "1%";
													}
												}
											}
										} else 
										{
											var iPreviousElementsOffsetHeight = oPreviousElements.offsetHeight ;
											if (! (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*") )
											{
														
														var iPaneSizeOfPreviousElements = parseInt(oPreviousElements.height) + iDifferencePreviousElements;
														if ( iPaneSizeOfPreviousElements >= parseInt(iPreviousElementsOffsetHeight) + parseInt(iNextElementsOffsetHeight) - urSp.iCollapseSize )
														{  
															iPaneSizeOfPreviousElements = parseInt(iPreviousElementsOffsetHeight) + parseInt(iNextElementsOffsetHeight) - 1;
														}
														if (iPaneSizeOfPreviousElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = iPaneSizeOfPreviousElements + "px";
															}
														}
											}
											if (!(oNextElements.height == null || oNextElements.height == "" || oNextElements.height == "*"))
											{
														
														var iPaneSizeOfNextElements = parseInt(oNextElements.height) + iDifferenceNextElements;
														if ( (iPreviousElementsOffsetHeight + iDifferencePreviousElements) < urSp.iCollapseSize )  
														{ 
															iPaneSizeOfNextElements = parseInt(iPreviousElementsOffsetHeight) + parseInt(iNextElementsOffsetHeight) - 1;
														}
														if (iPaneSizeOfNextElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).height = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).height = iPaneSizeOfNextElements + "px";
															}
														}
											}
										}
									}								
										
										
	
										evt["ur_param"]={type: urSpGetSplitterType(), prev: document.getElementById(urSp.oPreviousElements[0]).height, next: document.getElementById(urSp.oNextElements[0]).height, prevElements: urSp.oPreviousElements.join(","), nextElements: urSp.oNextElements.join(",")};
										ur_EVT_fire(oSplitter,"onsashmovingfinished",evt);	
								}	
							var oBody = document.getElementsByTagName("BODY")[0];
							urSp_removeEventListener(oBody,"mousemove", urSpTSBMoveList, true);
							urSp_removeEventListener(oBody,"mouseup",urSpTSUpList, true);
							
							{	
								var n = document.getElementById(urSp.sActiveSplitterID + "-bgiframe");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
							{	
								var n = document.getElementById(urSp.sActiveSplitterID + "-bgdiv");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
							
							{ 
								var n = document.getElementById(urSp.sActiveSplitterID + "-iframe");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
							{ 
								var n = document.getElementById(urSp.sActiveSplitterID + "-div");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
																							
							{ 
								var n = oSplitterBack;
								
								n.style.display = "none";
							}
							urSp.sActiveSplitterID = null;	
					}
				}
}
function urSpTSBMoveList(event)
{
				if (! urSp.bPressed)
				{
					return;
				} else
				{	
				var evt = urSp_checkEvent(event);
				var oSplitter = document.getElementById(urSp.sActiveSplitterID);
				var oSplitteriframe = document.getElementById(urSp.sActiveSplitterID + "-iframe");
				var oSplitterdiv = document.getElementById(urSp.sActiveSplitterID + "-div");
				
					if (urSp.oPreviousElements.length == 0)
					{
						
					} else if (urSp.oNextElements.length == 0 )
					{
						
					} else
				{
				if ( urSpIsVerticalSplitter()) {
					
														
					
					{	
						var curX = evt.clientX - parseInt(urSp.iStartPositionX) ; 
					}		
					{
						if (urSp.iPreviousElementsWidth != null && urSp.iNextElementsWidth != null)
							{
						if ( 
							parseInt(urSp.iPreviousElementsWidth) + parseInt(curX) < 0 ||
							parseInt(urSp.iNextElementsWidth) - parseInt(curX) < 0
						)
						{
							
						} else
						{
							
							
							{
								oSplitteriframe.style.left = evt.clientX ; 
							}
							oSplitterdiv.style.left = oSplitteriframe.style.left;
						}
						}
					}
				} else 
				{   
					 
					{	
						var curY = evt.clientY - parseInt(urSp.iStartPositionY); 
					}
					
					
						if ( 
							parseInt(urSp.iPreviousElementsHeight) + parseInt(curY)  < -1 ||
							parseInt(urSp.iNextElementsHeight) - parseInt(curY) < -1
						)
						{
							
						} else
						{
							
							
							{
								oSplitteriframe.style.top = evt.clientY ; 
							}
							oSplitterdiv.style.top = oSplitteriframe.style.top;
						}
				}
			}
		}
}
function urSpTHovList(event)
{
				var evt = urSp_checkEvent(event);
				var oSash = urSp_getTPElement(evt);
				if (oSash.getAttribute("tp") == "urSpTVs")
				{
					urSpSetSashClass(oSash, "urSpTVsH");
				} else 
				{
					urSpSetSashClass(oSash, "urSpTHsH");
				}
				urSp_addEventListener(oSash,"mouseout",urSpTDeHovList, false);
}
function urSpTDeHovList(event)
{
				var evt = urSp_checkEvent(event);
				var oSash = urSp_getTPElement(evt);
				if (oSash.getAttribute("tp") == "urSpTVs") 
				{
					urSpSetSashClass(oSash, "urSpTVs");
				} else 
				{
					urSpSetSashClass(oSash, "urSpTHs");
				}
				urSp_removeEventListener(oSash,"mouseout",urSpTDeHovList, false);
}
			
function urSpSetSashClass(oSash,sClassName)
{
	oSash.className = sClassName;
}	
function urSp_getColumnElements(oSplitter,iRow)
{
	var aPreviousElements = new Array();
	var aNextElements = new Array();
	var colgroup = urSp_getFirstChildNodeByTagName(oSplitter,"COLGROUP");
	{
		var cols = urSp_getChildNodesByTagName(colgroup, "COL");
		
		if (iRow > -1 &&  cols[ (iRow)  * 2  ].id)
		{
			aPreviousElements.push(  cols[ (iRow)  * 2   ].id );
		}
		else
		{
			
		}
		if ((iRow + 1) * 2 < cols.length && cols[ (iRow + 1)  * 2  ].id)
		{
			aNextElements.push(  cols[ (iRow + 1)  * 2   ].id );
		}
		
	}
	var mParameters = { prev: aPreviousElements, next: aNextElements};
	return mParameters;
}
function urSp_getRowElements(oSplitter,iCol)
{
	var aPreviousElements = new Array();
	var aNextElements = new Array();
	var tbody = urSp_getFirstChildNodeByTagName(oSplitter, "TBODY");
	var trs = urSp_getChildNodesByTagName(tbody, "TR");
	
	var tds = urSp_getChildNodesByTagName( trs[(iCol) * 2 ],"TD");
	if (iCol == 0)
	{ 	
		for (p = 0; (p * 2) < tds.length; p++)
		{
			if ( tds[p * 2].id  )
			{
				aPreviousElements.push(  tds[p * 2].id  );
			}
				
		}
	} else
	{ 
		for (p = 0; p < tds.length; p++)
		{
			if ( tds[p].id  )
			{
				aPreviousElements.push(  tds[p].id  );
			}
				
		}
	}
	{ 
		var tds = urSp_getChildNodesByTagName(trs[(iCol + 1) * 2 ],"TD");
		for (p = 0; p < tds.length; p++)
		{
			if (tds[p].id )
			{
				aNextElements.push(  tds[p].id  );
			}
			
		}
	}
	var mParameters = { prev: aPreviousElements, next: aNextElements};
	return mParameters;
}
function sapUrMapi_Splitter_setColumnWidth(Id,column,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		var mElements = urSp_getColumnElements(oSplitter, parseInt(column)); 
		
		
		for (iPanesPosition = 0; iPanesPosition < mElements.prev.length; iPanesPosition++ )
		{
			if (sizeMode == "RELATIVE")
			{
				document.getElementById(mElements.prev[iPanesPosition]).width = size + "%";
			} else 
			{
				document.getElementById(mElements.prev[iPanesPosition]).width = size + "px";
			}
		}
	} else
	{
		oSplitter.width =  "100%";
	}	
}
function sapUrMapi_Splitter_setSplitterWidth(Id,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		if (sizeMode == "RELATIVE")
		{
			oSplitter.width = iSize + "%";
			return;
		} else 
		{
			oSplitter.width = iSize + "px";
			return;
		} 
	} else
	{
		oSplitter.width =  size; 
	}
}
function sapUrMapi_Splitter_setRowHeight(Id,row,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		var mElements = urSp_getRowElements(oSplitter,parseInt(row)); 
		
		
		
		for (iPanesPosition = 0; iPanesPosition < mElements.prev.length; iPanesPosition++ )
		{
			if (sizeMode == "RELATIVE")
			{
				document.getElementById(mElements.prev[iPanesPosition]).height = iSize + "%";
			} else 
			{
				document.getElementById(mElements.prev[iPanesPosition]).height = iSize + "px";
			}
		}
	} else
	{
		oSplitter.height =  "100%";
	}
}
function sapUrMapi_Splitter_setSplitterHeight(Id,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		if (sizeMode == "RELATIVE")
		{
			oSplitter.height = iSize + "%";
			return;
		} else 
		{
			oSplitter.height = iSize + "px";
			return;
		} 
	} else
	{
		oSplitter.height =  "100%";
	}
}

//** SelectableLinkBar.ie5 **

function sapUrMapi_SelectableLinkBar_RegisterCreate(sId) {
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_SelectableLinkBar_create('" + sId + "')");
}
function sapUrMapi_SelectableLinkBar_create(sId) {
	
	ur_IScr_getObj(sId);
	ur_IScr_create(sId);
	sapUrMapi_Resize_AddItem(sId, "ur_IScr_resize('"+sId+"')");
	ur_IScr_resize(sId);
	
}
function ur_SLB_oadi(sId)
{
	var oScrl = ur_IScr[sId];
	if(oScrl.first == 0)
		ur_get(sId+'-SrlLt').className= "urLnkBarScrlLeftDsbl";
	else
		ur_get(sId+'-SrlLt').className= "urLnkBarScrlLeft";
	if(oScrl.last == oScrl.items.length -1)
		ur_get(sId+'-SrlRt').className= "urLnkBarScrlRightDsbl";
	else
		ur_get(sId+'-SrlRt').className= "urLnkBarScrlRight";
	
}
function sapUrMapi_SelectableLinkBar_draw(sId) {
  var oLinkBar = ur_get(sId);
  var iWidth = oLinkBar.offsetWidth;
  var iOrgWidth=iWidth;
  var oLinkBarContent = ur_get(sId+"-cnt");
  var oLinkBarScrollPrev = ur_get(sId+"-p");
  var oLinkBarScrollNext = ur_get(sId+"-n");
  iWidth-=oLinkBarScrollPrev.offsetWidth;
  iWidth-=oLinkBarScrollNext.offsetWidth;
  var nWidth=0;
  var xWidth=0;
  var xHeight=oLinkBarScrollNext.offsetHeight;
  var collItems = oLinkBarContent.childNodes;
  var iFirstVisible=sapUrMapi_SelectableLinkBar_getFirstVisibleItem(sId);
  var iLastVisible=parseInt(ur_get(sId).getAttribute("lastitemidx"));
  for (var n=0;n<collItems.length;n++) {
		  collItems.item(n).style.width="50px";
  }
  var ix=0;
  if (iWidth==0) {
  	oLinkBar.style.width="100%";
  	return;
  }
  if (iFirstVisible==-1) {
	  for (var n=0;n<iLastVisible+1;n++) {
		  if (n>=collItems.length) break;
		  collItems.item(n).style.height=xHeight;
	   	collItems.item(n).style.display="block";
	    nWidth+=collItems.item(n).offsetWidth;
	    if (nWidth<iWidth) {
	      xWidth=nWidth;
	    }
 	    if (nWidth>iWidth) {
	      collItems.item(ix).style.display="none";
	      ix++;
	      iFirstVisible=ix;
	    }
    }
    if (nWidth<iWidth) {
		  for (var n=iLastVisible+1;n<collItems.length;n++) {
		   	collItems.item(n).style.display="block";
  	    iLastVisible=n-1;
		    if (nWidth<iWidth) {
		      xWidth=nWidth;
		    }
 	      nWidth+=collItems.item(n).offsetWidth;
	 	    if (nWidth>iWidth) {
	 	    	break;
		    }
	    }
    }
  } else {
    var iLastVisible=-1;
	  for (var n=0;n<collItems.length;n++) {
		   collItems.item(n).style.height=xHeight;
		   if (n<iFirstVisible) {
		   	collItems.item(n).style.display="none";
		    continue;
		   } else {
		   	collItems.item(n).style.display="block";
		   }
		   nWidth+=collItems.item(n).offsetWidth;
		   if (nWidth<iWidth) {
		     xWidth=nWidth;
		   }
		   if (nWidth>iWidth) {
		     collItems.item(n).style.display="none";
		     if (iLastVisible==-1) {
		     	 iLastVisible=n-1;
		     }
		   }
		   if (nWidth<iWidth) {
		     xWidth=nWidth;
		   }
	  }
  }
  if (iLastVisible==-1) {
  	 iLastVisible=collItems.length-1;
  }
  if (iFirstVisible==-1) {
  	 iFirstVisible=0;
  }
  oLinkBar.setAttribute("lastitemidx",iLastVisible);
  oLinkBar.setAttribute("firstitemidx",iFirstVisible);
  
  
	if (oLinkBarScrollNext.onclick!=null) {
    oLinkBarScrollNext.setAttribute("oldonclick",oLinkBarScrollNext.onclick);
	}
  if (iLastVisible>=collItems.length-1) {
    oLinkBarScrollNext.className="urLnkBarScrlRight urLnkBarScrlRightDsbl";
    oLinkBarScrollNext.onclick=null;
  } else {
    oLinkBarScrollNext.className="urLnkBarScrlRight";
    oLinkBarScrollNext.onclick=oLinkBarScrollNext.getAttribute("oldonclick");
  }
	if (oLinkBarScrollPrev.onclick!=null) {
    oLinkBarScrollPrev.setAttribute("oldonclick",oLinkBarScrollPrev.onclick);
	}
  if (iFirstVisible==0) {
    oLinkBarScrollPrev.className="urLnkBarScrlLeft urLnkBarScrlLeftDsbl";
    oLinkBarScrollPrev.onclick=null;
  } else {
    oLinkBarScrollPrev.className="urLnkBarScrlLeft";
    oLinkBarScrollPrev.onclick=oLinkBarScrollPrev.getAttribute("oldonclick");
  }
  var oLinkBarDiv = ur_get(sId+"-div");
  oLinkBarDiv.style.height=xHeight;
  oLinkBarDiv.style.width=xWidth;
}
function sapUrMapi_SelectableLinkBar_getFirstVisibleItem(sLinkBarId) {
	return parseInt(ur_get(sLinkBarId).getAttribute("firstitemidx"));
}
function sapUrMapi_SelectableLinkBar_resize(sLinkBarId,e) {
  sapUrMapi_SelectableLinkBar_create(sLinkBarId);
}
function sapUrMapi_SelectableLinkBar_scroll(sLinkBarId,sDirection) {
  var iFirstVisible=sapUrMapi_SelectableLinkBar_getFirstVisibleItem(sLinkBarId);
  var iLastVisible=ur_get(sLinkBarId).getAttribute("lastitemidx");
  var iPageSize=iLastVisible-iFirstVisible;
  if (sDirection=="PREV") {
		iLastVisible=iFirstVisible-1;
		iFirstVisible=-1;
  } else if (sDirection=="NEXT") {
		iFirstVisible=iLastVisible+1;
		iLastVisible=-1;
	}	else {
	  iFirstVisible=-1;
	  iLastVisible=parseInt(sDirection.split("-")[2]);
	}
	ur_get(sLinkBarId).setAttribute("firstitemidx",iFirstVisible)
	ur_get(sLinkBarId).setAttribute("lastitemidx",iLastVisible)
  sapUrMapi_SelectableLinkBar_draw(sLinkBarId);
}
function sapUrMapi_SelectableLinkBar_goprevious(sId,o,e) {
	if(o.tagName == "TABLE"){
			o=o.firstChild.firstChild.firstChild;
		} else {
			while(o.tagName != "TD") o=o.parentNode;
			sapUrMapi_setTabIndex(o.firstChild,-1);
			o=o.previousSibling;
			if(o==null) return;
		}
		if(o.firstChild.className == "urLnkBarLnkDsbl" && ur_system.is508 == false ) o=o.previousSibling;
		if(o==null) return;
		if(o.style.display=="none")
		  sapUrMapi_SelectableLinkBar_scroll(sId,"PREV");
		sapUrMapi_setTabIndex(o.firstChild,0);
		sapUrMapi_focusElement(o.firstChild);
		ur_EVT_cancel(e);
		return true;
}
function sapUrMapi_SelectableLinkBar_gonext(sId,o,e) {
	if(o.tagName == "TABLE"){
			o=o.firstChild.firstChild.firstChild;
		}
		else{
			while(o.tagName != "TD") o=o.parentNode;
			sapUrMapi_setTabIndex(o.firstChild,-1);
			o=o.nextSibling;
			if(o==null) return;
		}
		if(o.firstChild.className == "urLnkBarLnkDsbl" && ur_system.is508 == false ) o=o.nextSibling;
		if(o==null) return;
		if(o.style.display=="none")
			sapUrMapi_SelectableLinkBar_scroll(sId,"NEXT");
		sapUrMapi_setTabIndex(o.firstChild,0);
		sapUrMapi_focusElement(o.firstChild);
		ur_EVT_cancel(e);
		return true;
}
function sapUrMapi_SelectableLinkBar_keydown(sId,e) {
	var o=e.srcElement;
	
	if(e.keyCode=="32"){
		if(o.tagName=="A")o.click();
		ur_EVT_cancel(e);
	}
	
	if(e.keyCode=="39"){
		if (ur_system.direction=="rtl")
			return sapUrMapi_SelectableLinkBar_goprevious(sId,o,e)
		else
			return sapUrMapi_SelectableLinkBar_gonext(sId,o,e)
	}
	
	if(e.keyCode=="37"){
		if (ur_system.direction=="rtl")
			return sapUrMapi_SelectableLinkBar_gonext(sId,o,e);
		else
			return sapUrMapi_SelectableLinkBar_goprevious(sId,o,e);
	}
	
	if(e.keyCode=="9"){
		if(o.tagName == "TABLE"){
			o=o.firstChild.firstChild.firstChild;
		} else {
			while(o.tagName != "TD") o=o.parentNode;
			sapUrMapi_setTabIndex(o.firstChild,-1);
			o=o.previousSibling;
			if(o==null) return;
		}
	}
}

//** Skip.ie5 **

function sapUrMapi_skip(sId,oEvt) 
{
	var sCt=sapUrMapi_getControlType(sId);
	if(sCt=="AX" || sCt=="AP" || sCt=="IF" || sCt=="T" )
		sId+="-r";
	var oR=ur_get(sId);
	var oN=null;
	var oF=null;
	
	
	if( oEvt.shiftKey && oEvt.keyCode == 117 )
	{
		oF = ur_getPreviousFocusableElement(oR);
	}	 
	
	else if( oEvt.keyCode == 117 ){
		oF = ur_getNextFocusableElement(oR);
	}	
	if(oF!=null)
	{
		ur_focus(oF);
		return ur_EVT_cancel(oEvt);
	}
    if(oEvt.keyCode== 13)
	 {
		if(oR.getAttribute("dbid")!=null)
		 {
			 sapUrMapi_triggerDefaultButton(sId,oEvt);
		 }else{
		 
		 	if(oEvt.srcElement.ct=="IT")
		 		ur_EVT_cancel(oEvt);
		 }
	 }	 
}
function ur_getPreviousFocusableElement(oR) {
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.previousSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;
		oN=oR.previousSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN,true);
			if(oF==null)
				oN=oN.previousSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
function ur_getNextFocusableElement(oR) {
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.nextSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;				
		oN=oR.nextSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN);
			if(oF==null)
				oN=oN.nextSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
//** Status.ie5 **

function ur_setSt(sId,aSt,bOn){
	var o=null;
	if(typeof(sId)=="string") o=ur_get(sId);
	else o=sId;
	if (!o) return 
	var sSt=o.getAttribute("st");
	
	if(sSt==null) sSt="";
	if(typeof(aSt)=="string")
		aSt=new Array(aSt);
	
	for(var i=0; i<aSt.length;i++){
		if(sSt=="" || sSt.indexOf(aSt[i])==-1){
			if(bOn) sSt+=aSt[i];
		}
		else{
			if(!bOn) sSt=sSt.replace(aSt[i],"");
		}
	}
	
	o.setAttribute("st",sSt);
}
function ur_isSt(sId,aSt){
	var o=null;
	if(typeof(sId)=="string") o=ur_get(sId);
	else o=sId;
	if (!o) return false; 
	var sSt=o.getAttribute("st");
	var bRet=true;
	if(sSt==null) return false;
	
	if(typeof(aSt)=="string")
		aSt=new Array(aSt);
	
	for(var i=0; i<aSt.length;i++)
		if(sSt.indexOf(aSt[i])==-1)
			bRet=false;
	return bRet;
}
function ur_getRootObj(o) {
  while(o.getAttribute!=null && (o.getAttribute("ct")==null || o.getAttribute("ct")==""))
    o=o.parentNode;
  if (o.getAttribute!=null && o.getAttribute("ct")!=null && o.getAttribute("ct")!="")
    return o;
}

//** TableView.ie5 **

function sapUrMapi_Table_selectRow(sTableId,iRow,e) 
{
  var oInput = ur_get(sTableId+'-itm-'+iRow);
  var oInputGrp = document.getElementsByName(oInput.name);
  if ((oInputGrp.length==1)&&(oInput.type!="radio"))
  {
    if (e.srcElement.tagName=="IMG") oInput.checked = (!oInput.checked);
		var oImg = ur_get(oInput.id + "-img");
		oImg.className = "urImgCbgImg";
		if (oInput.checked) oImg.className = "urImgCbgImgChk";
		
		var oRow = oInput.parentElement;
		while(!oRow.rr)
		{
			oRow=oRow.parentElement;
		}
		for (var n=0;n<oRow.cells.length;n++)
		{
			var oCell = oRow.cells[n];
			if (oInput.checked)
			{
			  oCell.setAttribute("unselectedclass",oCell.className);
			  
			}
			else
			{
	  		  
			}
		}
		if(oInput.checked)
	    {
			ur_setSt(oInput,ur_st.NOTSELECTED,false);
			ur_setSt(oInput,ur_st.SELECTED,true);
		}
		else
		{
			ur_setSt(oInput,ur_st.NOTSELECTED,true);
			ur_setSt(oInput,ur_st.SELECTED,false);
		}
  } 
   else
  {
	  for (var i = 0; i < oInputGrp.length; i++)
	  {
	    var oImg = ur_get(oInputGrp[i].id + "-img");
	    if (oInputGrp[i]==oInput)
		{
			  if (e.srcElement.tagName=="IMG") oInput.checked=true;
			  if (e.srcElement.tagName=="IMG") ur_focus(oInputGrp[i]);
		      oImg.className = "urImgRbgImgChk";
			  ur_setSt(oInput,ur_st.NOTSELECTED,false);
			  ur_setSt(oInput,ur_st.SELECTED,true);
	    } 
		else
		{
			 if (oImg.onclick)
			 {
				oInputGrp[i].checked=false;
				oImg.className = "urImgRbgImg";
				ur_setSt(oInputGrp[i],ur_st.NOTSELECTED,true);
				ur_setSt(oInputGrp[i],ur_st.SELECTED,false);
			 }
	    }
	 }
	
  }
  e.cancelBubble=true;
  e.returnValue=true;
}
function sapUrMapi_Table_getClickedRowIndex(sId) {
 	 oSrc = window.event.srcElement;
   var obj = event.srcElement;
   while ( (obj!=null) && (obj.tagName!='TD') )
      obj = obj.parentElement;
   if(obj==null) return;
   var parent = obj.parentElement;
   var rowIndex = parent.rr;
   return parseInt(parent.rr);
}
function sapUrMapi_Table_getClickedColIndex(sId) {
 	 oSrc = window.event.srcElement;
   var obj = event.srcElement;
   while ( (obj!=null) && (obj.tagName!='TD') )
      obj = obj.parentElement;
   oCell = obj;
   while ( (obj!=null) && (obj.tagName!='TABLE') )
      obj = obj.parentElement;
   if ( obj==null ) return;
   var colidx =  oCell.cellIndex - parseInt( obj.nmi );
   return colidx;
}
function sapUrMapi_Table_getClickedCellId(sId) {
 	 oSrc = window.event.srcElement;
   var obj = event.srcElement;
   while ( (obj!=null) && (obj.tagName!='TD') )
      obj = obj.parentElement;
   oCell = obj;
   var cellid =  oCell.id;
   return cellid;
}
function sapUrMapi_Table_clickSelButton(o){
	var oRow = o;
	while(oRow.tagName!="TR") oRow = oRow.parentNode;
	if(oRow.tagName!="TR")return;
	var sButtons = oRow.getElementsByTagName("BUTTON");
	for(var i=0;i<sButtons.length;i++)
		if(sButtons[i].className=="urSTRowUnSelIcon" || sButtons[i].className=="urSTRowSelIcon")
			if(o.id != sButtons[i].id)
				sButtons[i].click();
}
function sapUrMapi_Table_getCellIndex(oCell){
	var i=0;
	var o=oCell;
	var oRow=oCell.parentNode;
	var oTab=oRow.parentNode.parentNode;
	
	while(o.previousSibling!=null){
		for(var j=oRow.rowIndex-1;j>=0;j--){
			if(oTab.rows[j].cells.length<=o.cellIndex) continue;
			if(oTab.rows[j].cells[o.cellIndex].rowSpan>1 && oTab.rows[j].rowIndex+oTab.rows[j].cells[o.cellIndex].rowSpan-1>=oRow.rowIndex){
				i+=oTab.rows[j].cells[o.cellIndex].rowSpan-1;
				break;
			}
		}
		if(o.previousSibling!=null) o=o.previousSibling;
		i+=o.colSpan;
	}
	return i;
}
function sapUrMapi_Table_getCell(oRow,iIdx){
	var o=oRow.firstChild;
	var oTab=oRow.parentNode.parentNode;
	var i=0;
	
	while(i<iIdx){
		for(var j=oRow.rowIndex-1;j>=0;j--){
			if(oTab.rows[j].cells.length<=o.cellIndex) continue;
			if(oTab.rows[j].cells[o.cellIndex].rowSpan>1 && oTab.rows[j].rowIndex+oTab.rows[j].cells[o.cellIndex].rowSpan-1>=oRow.rowIndex){
				iIdx-=oTab.rows[j].cells[o.cellIndex].rowSpan-1;
				break;
			}
		}
		if(o.nextSibling!=null && i<iIdx) o=o.nextSibling;
		else break;
		i+=o.colSpan;
	}
	return o;
}
function sapUrMapi_Table_focusUp(sId,o){
	var oCell = o;
	var iCellIdx=0;
	
	while(oCell.tagName != "TD" && oCell.tagName != "TH") oCell = oCell.parentNode;
	iCellIdx=sapUrMapi_Table_getCellIndex(oCell);
	
	var oCurrRow = oCell.parentNode;
	var oRow=oCurrRow.parentNode.firstChild;
	while(oRow.nextSibling!=oCurrRow){
		oCell=sapUrMapi_Table_getCell(oRow,iCellIdx);
		if(oRow.rowIndex+oCell.rowSpan >= oCurrRow.rowIndex)
			break;
		oRow=oRow.nextSibling;
	}
	
	if(oCurrRow.previousSibling==null && oRow.parentNode.previousSibling!=null)
		oRow=oRow.parentNode.previousSibling.firstChild;
	
	oCell=sapUrMapi_Table_getCell(oRow,iCellIdx);
	if(oCell!=null) ur_focus(oCell);
}
function sapUrMapi_Table_focusDown(sId,o){
	var oCell=o;
	var bLastRow=false;
	
	while(oCell.tagName != "TD" && oCell.tagName != "TH") oCell = oCell.parentNode;
	
	var oRow=oCell.parentNode;
	for(var i=0; i<oCell.rowSpan;i++){
		if(oRow.nextSibling!=null)
			oRow=oRow.nextSibling;
		else{
			bLastRow=true;
			break;
		}
	}
	
	if(bLastRow && oRow.parentNode.nextSibling!=null && oRow.parentNode.nextSibling.tagName!="TFOOT")
	 oRow=oRow.parentNode.nextSibling.firstChild;
	else if(bLastRow) return;
	
	oCell=sapUrMapi_Table_getCell(oRow,sapUrMapi_Table_getCellIndex(oCell));
	if(oCell!=null) ur_focus(oCell);
}
function sapUrMapi_Table_focusPrevious(sId,o){
	var oCell = o;
	var oPCell = null;
	var oTab = null;
	while(!(oCell.className.substr(0,4)=="urST"&& (oCell.tagName=="TD"||oCell.tagName=="TH"))){
		oCell=oCell.parentNode;
		if(oCell==null||oCell.id==sId) return false;
	}
	oTab = oCell;
	while(oTab.tagName!="TABLE") oTab = oTab.parentNode;
	for(var i=0; i<oCell.parentNode.rowIndex; i++){
		for(var j=0; j<=oCell.cellIndex; j++){
			if(oTab.rows[i].cells.length > j)
			if( oTab.rows[i].rowIndex+parseInt(oTab.rows[i].cells[j].rowSpan)-1>=oCell.parentNode.rowIndex && oCell.cellIndex==oTab.rows[i].cells[j].cellIndex)
				oPCell=oTab.rows[i].cells[j];
		}
	}
	if(oPCell==null && oCell.previousSibling!=null) oPCell=oCell.previousSibling;
	if(oPCell!=null) ur_focus(oPCell);
}
function sapUrMapi_Table_focusNext(sId,o){
	var oCell = o;
	var oTab;
	while(!(oCell.className.substr(0,4)=="urST"&& (oCell.tagName=="TD"||oCell.tagName=="TH"))){
		oCell=oCell.parentNode;
		if(oCell==null||oCell.id==sId) return false;
	}
	oTab = oCell;
	while(oTab.tagName!="TABLE") oTab = oTab.parentNode;
	if(oTab.parentNode.parentNode.parentNode.parentNode.id!=sId)
		sapUrMapi_Table_focusNext(sId,oTab.parentNode);
	else
		if( oCell.nextSibling != null ) ur_focus(oCell.nextSibling);
}
function sapUrMapi_Table_tabBack(sId,o){
	var oCell = o;
	var oTab;
	if( o.tagName == "TABLE" || o.tagName == "TBODY" ) return false;
	while(oCell.tagName != "TD" && oCell.tagName != "TH"){
		oCell = oCell.parentNode;
		sControl = oCell.getAttribute("ct");
		if(sControl=="T" || sControl=="PG") return;
	}
	if(oCell.tagName != "TD" && oCell.tagName != "TH") return false;
	oTab = oCell;
	while(oTab.tagName!="TABLE") oTab = oTab.parentNode;
	if(oTab.parentNode.parentNode.parentNode.parentNode.id!=sId) return false;
	if( oCell.previousSibling != null){
		ur_focus(oCell.previousSibling);
		return true;
	}
	else{
		var oRow = oCell.parentNode.previousSibling;
		if( oRow != null){
			ur_focus(oRow.lastChild);
			return true;
		}
		else{
			ur_focus(oTab.parentNode.parentNode.parentNode.parentNode);
			return true;
		}
	}
	return false;
}
function sapUrMapi_Table_keydown(sId,e){
  var o=e.srcElement;
	var iKey=e.keyCode;
	var sCt=sapUrMapi_getControlTypeFromObject(o);
	if(sId.indexOf("-skipstart")==-1) sId+="-skipstart";
	
	if(iKey==32 && sCt!="I" && sCt!="TE" && sCt!="CB"){
		try{
			o.click();
		} catch(ex){ }
		ur_EVT_cancel(e);
		return true;
	}
	
	if(e.keyCode == "40" && e.srcElement.tagName != "SELECT"){
		sapUrMapi_Table_focusDown(sId,e.srcElement);
		ur_EVT_cancel(e);
		return true;
	}
	
	if(e.keyCode == "38" && e.srcElement.tagName != "SELECT"){
		sapUrMapi_Table_focusUp(sId,e.srcElement);
		ur_EVT_cancel(e);
		return true;
	}
	
	if(e.keyCode == "39" && (e.srcElement.tagName != "INPUT" || e.srcElement.type.toUpperCase()=="CHECKBOX" || e.srcElement.type.toUpperCase()=="RADIO")){
		if (ur_system.direction=="rtl")
			sapUrMapi_Table_focusPrevious(sId,e.srcElement);
		else
			sapUrMapi_Table_focusNext(sId,e.srcElement);
		ur_EVT_cancel(e);
		return true;
	}
	
	if(e.keyCode == "37" && (e.srcElement.tagName != "INPUT" || e.srcElement.type.toUpperCase()=="CHECKBOX" || e.srcElement.type.toUpperCase()=="RADIO")){
		if (ur_system.direction=="rtl")
			sapUrMapi_Table_focusNext(sId,e.srcElement);
		else
			sapUrMapi_Table_focusPrevious(sId,e.srcElement);
		e.returnValue=false;
		e.cancelBubble=true;
		return true;
	}
	
	if(e.keyCode == "9" && e.shiftKey == true ){
		if( sapUrMapi_Table_tabBack(sId,e.srcElement) ){
			e.returnValue = false;
			e.cancelBubble = true;
			return true;
		}
	}
  
  if(ur_get(sId).getElementsByTagName("TFOOT")[0]!=null){
  var o=e.srcElement;
  var sTag=o.tagName;
	var iKey=e.keyCode;
	var bS=e.shiftKey;
	var bA=e.altKey;
	var bC=e.ctrlKey;
  var sTag=e.srcElement.tagName;
	var aBtns=ur_get(sId).getElementsByTagName("TFOOT")[0].getElementsByTagName("IMG");
	if (aBtns.length!=null) {
			
			if(iKey==36 && !bA && !bS && bC && sTag!="INPUT" && sTag!="TEXTAREA"){
				for (var i=0;i<aBtns.length;i++) {
				  if (aBtns[i].className.indexOf("Top")>-1 && aBtns[i].className.indexOf("Dsbl")==-1) {
				    aBtns[i].click();
				    ur_EVT_cancel(e);
						break;
				  }
				}
				return;
			}
			
			if(iKey==35 && !bA && !bS && bC && sTag!="INPUT" && sTag!="TEXTAREA"){
				for (var i=0;i<aBtns.length;i++) {
				  if (aBtns[i].className.indexOf("Bottom")>-1 && aBtns[i].className.indexOf("Dsbl")==-1) {
				    aBtns[i].click();
				    ur_EVT_cancel(e);
						break;
				  }
				}
				return;
			}
			
			if(iKey==33 && !bA && !bS &&!bC && sTag!="INPUT" && sTag!="TEXTAREA"){
				for (var i=0;i<aBtns.length;i++) {
				  if (aBtns[i].className.indexOf("PgUp")>-1 && aBtns[i].className.indexOf("Dsbl")==-1) {
				    aBtns[i].click();
				    ur_EVT_cancel(e);
						break;
				  }
				}
				return;
			}
			
			if(iKey==34 && !bA && !bS &&!bC && sTag!="INPUT" && sTag!="TEXTAREA"){
				for (var i=0;i<aBtns.length;i++) {
				  if (aBtns[i].className.indexOf("PgDown")>-1 && aBtns[i].className.indexOf("Dsbl")==-1) {
				    aBtns[i].click();
				    ur_EVT_cancel(e);
						break;
				  }
				}
				return;
			}
	}
	}
	
	return sapUrMapi_skip(sId,e);
}
function sapUrMapi_Table_activate(sId,e){
	var isCell = e.srcElement.tagName == "TD" || e.srcElement.tagName == "TH";
	
	
	if(!isCell) return;
	var o = e.srcElement.firstChild;
	
	if(o!=null) {
		var oChild = o.firstChild;
		var oFocus = null;
		
		while(oFocus==null){
			while(oFocus==null){
				if(o==null) break;
				if(o.nodeType!=3 && (sapUrMapi_Focus_canFocus(o)==true||o.type=="radio")){
					oFocus=o;
					break;
				}
				o = o.firstChild;
			}
			if(oChild==null) break;
			oChild=oChild.nextSibling;
			o=oChild;
		}
		
		if(oFocus!=null) {
			if (ur_system.is508) sapUrMapi_Table_getTooltip(oFocus);
		  
		  
			if(oFocus.id)
				sapUrMapi_triggerFocus(oFocus.id);
			else 
				setTimeout(function(){ur_focus(oFocus);},0);
			return;
		}
	} 
    
    
	if (ur_system.is508) {
	    var oFocus = e.srcElement;
		sapUrMapi_Table_getTooltip(oFocus, true);
		setTimeout(function(){ur_focus(oFocus);},0);
	}
	
}
function sapUrMapi_Table_getTooltip(oF, isEmptyCell){
	 
		var sTooltip="";
		var sSep=" "+getLanguageText("SAPUR_SEPARATOR")+" ";
		var o = oF;
		
		if(!isEmptyCell) {
			o = oF.parentElement;
			while(o.tagName!="TD") o=o.parentNode;
		}
		
		var row = parseInt(o.getAttribute("rowIndex"))+1;
		var col = parseInt(o.getAttribute("colIndex"))+1;
	    
		var aHeaders;
		var sHeaders=o.getAttribute("headers");
		var oHeader;
		
		if(isNaN(row)) return;
		
		if (sHeaders==null || sHeaders=="") {
			if(isNaN(col)) return;
			sTooltip = getLanguageText("SAPUR_TBV_CELL",new Array(row,col));
		} else {
			aHeaders=sHeaders.split(" ");
			sHeaders="";
			for(var i=0;i<aHeaders.length;i++)
			{
				oHeader=ur_get(aHeaders[i]);
				if(oHeader!=null)sHeaders+=oHeader.innerText;
				if(i<aHeaders.length) sHeaders+=" ";
			}
			sTooltip = getLanguageText("SAPUR_TBV_CELL",new Array(row,sHeaders));
		}
		
		if(isEmptyCell) {
			sTooltip = getLanguageText("SAPUR_EMPTY") + sSep + sTooltip;
			oF.setAttribute("noCntanrAnnouce","X");
		}
		
		if(o.className.indexOf("urSTbvCellNeg")>0) sTooltip+=sSep+getLanguageText("SAPUR_NEGATIVE");
		else if(o.className.indexOf("urSTbvCellTot")>=0) sTooltip+=sSep+getLanguageText("SAPUR_TOTAL");
		else if(o.className.indexOf("urSTbvCellSubtot")>=0) sTooltip+=sSep+getLanguageText("SAPUR_SUBTOTAL");
		else if(o.className.indexOf("urSTbvCellBad")>=0) sTooltip+=sSep+getLanguageText("SAPUR_BADVALUE");
		else if(o.className.indexOf("urSTbvCellCrit")>=0) sTooltip+=sSep+getLanguageText("SAPUR_CRITICALVALUE");
		else if(o.className.indexOf("urSTbvCellPos")>=0) sTooltip+=sSep+getLanguageText("SAPUR_POSITIVE");
		if(o.className.indexOf("urSTbvCellSel")>=0) sTooltip+=sSep+getLanguageText("SAPUR_SELECTED");
	  oF.setAttribute("tttbl",sTooltip);
	  oF.setAttribute("intbl","true");
		
	  var oActiveElement = document.activeElement;
	  
	  if(oActiveElement != null && oActiveElement != oF) {
	  	oActiveElement.setAttribute("tttbl",sTooltip);
	  	oActiveElement.setAttribute("intbl","true");
	  	oActiveElement.setAttribute("noCntanrAnnouce","X");
	  }
		
}
//** TabStrip.ie5 **

function sapUrMapi_TabStrip_RegisterCreate(sId,iCount,iActive) {
	if(!sId || iCount==0 || iActive<0) return;
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_TabStrip_create('" + sId + "','" + iCount + "','" + iActive + "')");
}
function sapUrMapi_TabStrip_create(sId,iCount,iActive) {
	
	var oTabTable=ur_get(sId);
	var curTab = ur_get(sId + "-cnt-" + iActive);
	
	if (curTab == null) return;
	
	var iHeight = 0
	var iWidth = 0;
	
	if (curTab.childNodes[0] != null && sapUrMapi_getCurrentStyle(curTab.childNodes[0],"overflow")!="visible") {
		var oContent = ur_TS_drawScrollContent(sId);
		var iHeight = oContent.height;
		var iWidth = oContent.width;
	}
	
	if (oTabTable.getAttribute("exact") == "1") {
		
		var aTabCnts = curTab.parentElement.childNodes;
		var curTabHeight, curTabWidth;
		for(i = 0; i < iCount; i++){
			if (sapUrMapi_getCurrentStyle(aTabCnts[i].childNodes[0],"overflow") == "visible") {
				curTabHeight = aTabCnts[i].scrollHeight;
				curTabWidth = aTabCnts[i].scrollWidth;
				
				if (curTabWidth == aTabCnts[i].parentNode.scrollWidth) curTabWidth = 0;
				if (curTabHeight > iHeight) iHeight = curTabHeight;
				if (curTabWidth > iWidth) iWidth = curTabWidth;
				
			} else {
				aTabCnts[i].childNodes[0].style.height = iHeight;
				aTabCnts[i].childNodes[0].style.width = iWidth;
			}
		}
		if (curTab.offsetHeight < iHeight) { 
			curTab.style.height = iHeight;
		}
		
		if (curTab.offsetWidth < iWidth && oTabTable.style.width != "100%") {
			curTab.style.width = iWidth;
		}
	}
		
	if(ur_get(sId).getAttribute("scrl")=="1") 
	{
		ur_IScr_getObj(sId);
		ur_IScr[sId].scrl.style.width = "auto";
		
		if ( oTabTable.style.width == "" && iWidth != 0 ) {
			oTabTable.style.width = iWidth;
		}
		ur_IScr_create(sId);
		
		
		var oPag = ur_get(sId+"-pg");
		sapUrMapi_Paginator_removeFromTabChain(sId+"-pg");
		var oScr = ur_IScr[sId];
		var iSelIdx = parseInt(oTabTable.getAttribute('sidx'));
		var iTabWidth = 0;
		for (var n = 0; n < oScr.items.length; n++) {
		  if (oScr.items[n].width > iTabWidth) iTabWidth=oScr.items[n].width;
		}
		var iPagWidth=oPag.parentNode.offsetWidth;
		if (iWidth==0) iWidth=oTabTable.offsetWidth;
		
		
		
		
		try{
			if(iWidth  < (iPagWidth+iTabWidth+(iTabWidth/2)))
			{
				oTabTable.style.width=iPagWidth+iTabWidth+(iTabWidth/2);
				ur_IScr_draw(sId);
				ur_TS_drawScrollContent(sId);
			}
		}catch(ex){};
		
		
		
		
		if(!oScr.items[iSelIdx].visible)
		{
			
			
			
							
			ur_get(sId+"-scrl").setAttribute("fsrl",iSelIdx);
			oScr.first = iSelIdx;
			ur_IScr_create(sId);
			oTabTable.setAttribute("fidx",iSelIdx);
			sapUrMapi_setTabIndex(oScr.items[iSelIdx][1],0);
		}
		else
		{
			sapUrMapi_setTabIndex(oScr.items[iSelIdx][1],0);
			oTabTable.setAttribute("fidx",iSelIdx);
		}
	}
	oTabTable.onresize = new Function("event","sapUrMapi_TabStrip_resize('"+sId+"',"+iWidth+","+iHeight+")");
	
}
function ur_TS_drawScrollContent(sId) {
	var curTab = ur_get(sId + "-cnt-" + ur_get(sId).getAttribute("sidx"));
	if (sapUrMapi_getCurrentStyle(curTab.childNodes[0],"overflow")!="visible") {
	  	var oBorders=curTab.parentNode;
		var iBl=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
		var iBr=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderRightWidth"));
		var iBt=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderTopWidth"));
		var iBb=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
	  	curTab.childNodes[0].style.height=curTab.parentNode.offsetHeight-iBt-iBb;
	  	curTab.childNodes[0].style.width=curTab.parentNode.offsetWidth-iBl-iBr;
	  	curTab.style.overflow="visible";
	  	return {height:curTab.parentNode.offsetHeight-iBt-iBb,width:curTab.parentNode.offsetWidth-iBl-iBr};
	} else {
	  	return {height:curTab.offsetHeight,width:curTab.offsetWidth};
	}
}
function sapUrMapi_TabStrip_resize(sId,iWidth,iHeight) {
	var o = ur_get(sId);
	if(!o) return;
	if(o.getAttribute("scrl") == 1) {
	var iWidth = o.offsetWidth;
		if (ur_IScr[sId].iWidth && ur_IScr[sId].iWidth == iWidth ) return;
		ur_IScr_resize(sId);
		ur_IScr[sId].iWidth = iWidth;
	}
  	ur_TS_drawScrollContent(sId);
}
function sapUrMapi_TabStrip_getSelectedItemId(sTabStripId) {
  	var oTabTable = ur_get(sTabStripId);
	var iSelTab	= parseInt(oTabTable.getAttribute("sidx"));
	return sTabStripId+"-itm-"+iSelTab;
}
function sapUrMapi_TabStrip_keySelect(strId, intSelectedIdx, intTabCount,e) {
	var o = ur_KY_getObj(strId,"-tbl","TD","id","h",true),
		oTabScrl = ur_get(strId),
		bScroll = oTabScrl.getAttribute("scrl")=="1";
	
	if(e.keyCode == 9)
	{	
		var iSelIdx = parseInt(oTabScrl.getAttribute("sidx"));
		var iFocIdx = parseInt(oTabScrl.getAttribute("fidx"));
		
		if(bScroll)
		{
			var oScrl = ur_IScr[strId];
			
			if(!oScrl.items[iSelIdx].visible)
			{
				ur_focus_Itm(oScrl.items[oScrl.first][1],oScrl.items[iSelIdx][1]);
				if(oScrl.first != iFocIdx)
					sapUrMapi_setTabIndex(oScrl.items[iFocIdx][1],-1);
				oTabScrl.setAttribute("fidx",oScrl.first);
			}
			else
			{
				if(intSelectedIdx != iSelIdx){
					ur_focus_Itm(oScrl.items[iSelIdx][1],oScrl.items[intSelectedIdx][1]);
					oTabScrl.setAttribute("fidx",iSelIdx);
				}
			}
		}
		else
		  ur_KY_nav(e,o);
	}
	else if (sapUrMapi_checkKey(e,"keydown",new Array("39","37","33","34","35","36"))){			
		if(bScroll){
			var iKey=e.keyCode;
			var bNext=false;
			var bPrev=false;
			if(iKey==39 || iKey==34 || iKey==35){
				if (ur_system.direction != "rtl"){
					bNext=true;
					intSelectedIdx=intSelectedIdx + 1;
				}else{
					bPrev=true;
					intSelectedIdx = intSelectedIdx - 1;
				}
			}else if(iKey==37 || iKey ==33 || iKey == 36){
				if (ur_system.direction != "rtl"){
					bPrev=true;
					intSelectedIdx = intSelectedIdx - 1;
				}else{
					bNext=true;
					intSelectedIdx = intSelectedIdx + 1;
				}
			}
			if (!ur_system.is508){
				var check = ur_KY_checkDsbl(o,intSelectedIdx,e.keyCode); 
			    var intSelectedIdx= check["idx"];
			    var oFrom = check["from"];
			 }
			sapUrMapi_TabStrip_triggerScroll(strId,intSelectedIdx,intTabCount,bNext,bPrev,oFrom,e);
		}
			ur_KY_nav(e,o);
  }
  
  if (sapUrMapi_checkKey(e,"keydown",new Array("32"))){
  	e.srcElement.click();
	ur_EVT_cancel(e);
  	return;
  }
  
}
function sapUrMapi_TabStrip_triggerScroll(sTabStripId,iFocusIdx,iTabCount,bNext,bPrev,oFrom,evt) {
  	var oTabTable 	= ur_get(sTabStripId);
  	var objTab = ur_IScr[sTabStripId];
	if (isNaN(iFocusIdx)) iFocusIdx = parseInt(ur_get(sTabStripId).getAttribute("fidx"));
	if (bNext) {
		if(evt.keyCode == 33 || evt.keyCode == 34) 
		{
			if(iFocusIdx < objTab.items.length - 1)
				ur_IScr_toNextPage(sTabStripId);
		}
		else if(evt.keyCode == 36 || evt.keyCode == 35)
		{
			if(iFocusIdx < objTab.items.length - 1)
				ur_IScr_toEnd(sTabStripId);
		}
		else if(evt.keyCode==39 || evt.keyCode==37) {
			if(iFocusIdx > objTab.last || oFrom=="last"){
				if(iFocusIdx >= objTab.items.length || oFrom == "last")
					ur_IScr_toBegin(sTabStripId);
				else
					ur_IScr_toNextItem(sTabStripId);
			}
		}
	}
	if (bPrev) {
		if(evt.keyCode == 33 || evt.keyCode == 34)
		{
			if(iFocusIdx > 0)
				ur_IScr_toPrevPage(sTabStripId);
		}
		else if(evt.keyCode == 36 || evt.keyCode == 35)
		{
			if(iFocusIdx > 0)
				ur_IScr_toBegin(sTabStripId);
		}
		else if(evt.keyCode==39 || evt.keyCode==37){
			if(iFocusIdx < objTab.first || oFrom=="first"){
			   if(oFrom=="first" || iFocusIdx<0)
			      ur_IScr_toEnd(sTabStripId);
			   else
			   	ur_IScr_toPrevItem(sTabStripId);
			}
		}
	}
	try{
		ur_EVT_addParam(evt,"FirstVisibleItemIdx",objTab.first);
	}catch(ex){};
}
function ur_TS_setTabIdx(sId,iOldFocIdx,iNewIndex)
{
	var oTabScrl = ur_get(sId);
	var iselIdx = oTabScrl.getAttribute("sidx");
	if (ur_IScr[sId] == null) ur_IScr_getObj(sId);
	var oScrl = ur_IScr[sId];
	
	if(!isNaN(iOldFocIdx))
	{
		
		if(iNewIndex == -1) 
		{
			iNewIndex  = iselIdx;
			if(!oScrl.items[iselIdx].visible)
			{
				sapUrMapi_setTabIndex(oScrl.items[oScrl.first][1],0);
				if(oScrl.first != iOldFocIdx)
					sapUrMapi_setTabIndex(oScrl.items[iOldFocIdx][1],-1);
				oTabScrl.setAttribute("fidx",oScrl.first);
			}
			else
			{
				sapUrMapi_setTabIndex(oScrl.items[iNewIndex][1],0);
				sapUrMapi_setTabIndex(oScrl.items[iOldFocIdx][1],-1);
				oTabScrl.setAttribute("fidx",iNewIndex);
			}
			
		}
		else{
			sapUrMapi_setTabIndex(oScrl.items[iOldFocIdx][1],-1);
			sapUrMapi_setTabIndex(oScrl.items[iNewIndex][1],0);
			oTabScrl.setAttribute("fidx",iNewIndex);
			oScrl.items[iNewIndex][1].focus();
		}
	}
}
function sapUrMapi_TabStrip_focusItem(sTabStripId,iFocusIdx,iTabCount,bNext,bPrev,evt){
	if (evt == null) {
		evt = window.event;
	}
	sapUrMapi_TabStrip_keySelect(sTabStripId, iFocusIdx, iTabCount,evt);
}
function sapUrMapi_TabStrip_enter (sId,e) {
	if (e.srcElement.id==sId+"-skipstart") {
		if (sapUrMapi_skip(sId+'-skipstart',sId+'-skipend',e)) return;
    if (!e.shiftKey) { 
		  if (sapUrMapi_checkKey(e,"keydown",new Array("9","39","37"))){
	        sapUrMapi_TabStrip_focusItem(sId);
	   
				ur_EVT_cancelBubble(e);
		  }
	  }
	}
}
function sapUrMapi_TabStrip_setActiveItem(sId,iIdx) {
		if (isNaN(iIdx)) return;
				
		if(ur_IScr[sId] == null)
			ur_IScr_getObj(sId);
		var oScrl = ur_IScr[sId];
		var obj	= ur_get(sId);
		
		if (obj != oScrl.Ref) {
			ur_IScr_getObj(sId);
			oScrl = ur_IScr[sId]
		}
			
		var iSelTab	= parseInt(obj.getAttribute("sidx"));
		var iTabLength	= parseInt(obj.getAttribute("ic"));
		
		if (oScrl.items[iIdx][1].getAttribute("st") != null && oScrl.items[iIdx][1].getAttribute("st").indexOf("d") >- 1) return false; 
		if ((iTabLength==1) || (iSelTab==iIdx)) return true; 
		
		var oCurrentTxt  = oScrl.items[iSelTab][1].firstChild;
		var oCurrentCell = oScrl.items[iSelTab][1];
		var oClickedTxt  = oScrl.items[iIdx][1].firstChild;
		var oClickedCell = oScrl.items[iIdx][1];
		
		var oCurrentContent  = ur_get(sId+"-cnt-"+iSelTab);
	  	var oClickedContent  = ur_get(sId+"-cnt-"+iIdx);
		
		var oCloseCurrent = ur_get(sId + "-itm-cl-" + iSelTab);
		var oCloseClicked = ur_get(sId + "-itm-cl-" + iIdx);
		
		var oBorders=oClickedContent.parentNode;
		var iBl=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
		var iBr=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderRightWidth"));
		var iBt=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderTopWidth"));
		var iBb=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
		
		oCurrentCell.className="urTbsLabelOff"; 
		oCurrentTxt.className = "urTbsTxtOff";  
		oClickedTxt.className = "urTbsTxtOn";   
	  	oClickedCell.className="urTbsLabelOn";  
	  
		if (oCloseCurrent != null) oCloseCurrent.className = "urTbsCloseUnSel";
		if (oCloseClicked != null) oCloseClicked.className = "urTbsCloseSel";
	  
	  	sapUrMapi_setTabIndex(oCurrentCell,-1);
	  	sapUrMapi_setTabIndex(oClickedCell,0);
	  	
		obj.setAttribute("sidx",iIdx);
	  	obj.setAttribute("fidx",iIdx); 
	  
	  
    	if ( sapUrMapi_getCurrentStyle(oClickedContent.childNodes[0],"overflow") != "visible") {
  			oClickedContent.childNodes[0].style.height=oClickedContent.parentNode.offsetHeight-iBt-iBb;
  			oClickedContent.childNodes[0].style.width=oClickedContent.parentNode.offsetWidth-iBl-iBr;
		} else {
			if ( obj.getAttribute("exact") == "1") {
		    	oClickedContent.style.height=oClickedContent.parentNode.offsetHeight-iBt-iBb;
		    	if ( !oClickedContent.style.width == "100%" )
		    		oClickedContent.style.width=oClickedContent.parentNode.offsetWidth-iBl-iBr;
		  	}
		}
		
		with ( oCurrentContent.style ) {
			overflow = "hidden";
			position = "absolute";
			top = "-1000";
			left = "0";
			visibility = "hidden";
		}
		
		with ( oClickedContent.style ) {
			overflow="visible";
			position="static";
			visibility="inherit";
		}
		
		if(ur_get(sId+"-itm-cl-"+iIdx))
		{
			ur_get(sId+"-itm-cl-"+iIdx).className = "urTbsCloseSel";
		}
		if(ur_get(sId+"-itm-cl-"+iSelTab))
		{
			ur_get(sId+"-itm-cl-"+iSelTab).className = "urTbsCloseUnSel";
		}
	
	ur_setSt(oCurrentCell,ur_st.NOTSELECTED,true);
	ur_setSt(oCurrentCell,ur_st.SELECTED,false);
	ur_setSt(oClickedCell,ur_st.NOTSELECTED,false);
	ur_setSt(oClickedCell,ur_st.SELECTED,true);
	
	
  if (obj.getAttribute("exact")=="1")
	  ur_TS_oadi(sId);
  else {
    var bVisible=oScrl.items[iIdx].visible;
    if (bVisible) ur_IScr_draw(sId);
    if (!oScrl.items[iIdx].visible || !bVisible) {
      oScrl.first=iIdx;
      oScrl.last=-1;
      ur_IScr_draw(sId);
    }
  }
  
  if (ur_system.is508) {
	if(oClickedCell.style.display == "inline"){
	   sapUrMapi_refocusElement(oClickedCell.id);
	}else{
		sapUrMapi_refocusElement(oScrl.items[oScrl.first][1]);
	}
  }
	return true;
}
function ur_TS_cl(sId,evt)
  {
	var sElm = evt.srcElement;
	var bIdPresent = false;
	while(!bIdPresent)
	{	
		if(sElm.getAttribute('idx') !=null)
		{
			if (oScrl.items[param[1]][1].getAttribute("st")!=null && oScrl.items[param[1]][1].getAttribute("st").indexOf("d")>-1) return false; 
			ur_EVT_fire(ur_get(sId+'-scrl'),"otc");
			bIdPresent = true;
		}
		else{
			sElm = sElm.parentNode;
			}
		
	} 
	   
  }
	
function ur_TS_oadi(sId) {
  var oScrl = ur_IScr[sId];
	
	var iFirst = oScrl.first;
	
	var iLast = oScrl.last;
  if (oScrl.ref.getAttribute("scrl")!="1") {
    iFirst=0;
    iLast=parseInt(oScrl.ref.getAttribute("ic"))-1;
  }
  
	
	var iSel = parseInt(ur_get(oScrl.ref.id).getAttribute('sidx')); 
	
	for(i=iFirst;i<=iLast;i++) {
		var arrItems = oScrl.items[i];
		var oItemImage = arrItems[0];
		
		if(iFirst == i ) {
			if(iFirst != 0) { 
				if(iSel== i) 
					oItemImage.className = "urTbsFirstAngOnPrevOn";
				else
					oItemImage.className = "urTbsFirstAngOffPrevOn";
			} else {
				if(iSel== i) 
					oItemImage.className = "urTbsFirstAngOnPrevOff";
				else
					oItemImage.className = "urTbsFirstAngOffPrevoff";
			}
		} else { 
			if((i!=0 && iSel== i-1)) 
			  oItemImage.className = "urTbsAngOnOff"; 
			else if(iSel == i) 
				oItemImage.className = "urTbsAngOffOn";
			else 
				oItemImage.className = "urTbsAngOffOff";
		}
		
		if(iLast == i ) {
			var oLastImg=ur_get(oScrl.ref.id+"-n");
			if(iLast != (oScrl.items.length -1)) { 
				if(iSel== i) 
					oLastImg.className = "urTbsLastOnNextOn";
				else 
					oLastImg.className = "urTbsLastOffNextOn";
			} else {
				if(iSel== i)
					oLastImg.className = "urTbsLastOnNextOff";
				else 
					oLastImg.className = "urTbsLastOffNextOff";
			}
		}
	}
	
	if(ur_get(sId).getAttribute("scrl") == "1")
		ur_TS_setPagiButtonState(iFirst,iLast,sId);
	
}
function ur_TS_setPagiButtonState(iFirst,iLast,sId) {
  var oScrl = ur_IScr[sId];
  var oBtns = ur_get(sId + "-pg");	
  
  
  	if ( ur_IScr[sId].first == 0 && ur_IScr[sId].last == oScrl.items.length - 1 ){
		oBtns.style.visibility = "hidden";
		return;
	}
	else {
		if ( oBtns.style.visibility == "hidden" )
		   oBtns.style.visibility = "visible";
	}
  
	
	sapUrMapi_Paginator_setStates(sId+'-pg',new Array("","",UR_PAGINATOR_BUTTON.PREVIOUS_ITEM,UR_PAGINATOR_BUTTON.NEXT_ITEM,"",""),new Array("","",true,true,"",""));
	
	
	if(ur_IScr[sId].last == oScrl.items.length -1 || ur_IScr[sId].last == -1)
	{
		
		var arrBtn = new Array();
		arrBtn[3] = UR_PAGINATOR_BUTTON.NEXT_ITEM;
				
		var arrBtnState = new Array();
		arrBtnState[3] = false;
		
		sapUrMapi_Paginator_setStates(sId+'-pg',arrBtn,arrBtnState);
	}
    
	
	if(ur_IScr[sId].first == 0)
	{
		
		sapUrMapi_Paginator_setStates(sId+'-pg', new Array("","",UR_PAGINATOR_BUTTON.PREVIOUS_ITEM), new Array("","",false));
	}
}
function sapUrMapi_TabStripItem_keydown(sId,evt)
{
	if(evt.keyCode== 13)
	{
		var oR = ur_get(sId);
		if(oR.getAttribute("dbid")!=null)
		 {
			 sapUrMapi_triggerDefaultButton(sId,evt);
		 }
	 }	 
}
function sapUrMapi_TabStrip_initFocus (sTabStripId,iFocusIdx) {
	var oTabstrip = ur_get(sTabStripId);
	var oTab = ur_get(sTabStripId+"-itm-"+iFocusIdx);
	
	if (isNaN(iFocusIdx)) iFocusIdx = parseInt(oTabstrip.getAttribute("fidx"));
	
	sapUrMapi_setTabIndex(oTab,0);
	oTab.focus();
}
//** TextEdit.ie5 **

function sapUrMapi_TextEdit_focus(sId,oEvt){
	sapUrMapi_DataTip_show(sId,"focus");
}
function sapUrMapi_TextEdit_blur(sId,oEvt) {
	if(ur_get(sId).getAttribute("chgFire") == "1")
	{
		ur_EVT_fire(ur_get(sId),'notifyChange',oEvt);
		ur_get(sId).setAttribute("chgFire","0");
	}
	sapUrMapi_DataTip_hide(sId);
}
function sapUrMapi_TextEdit_keydown(sId,oEvt) {
	
	if(oEvt.keyCode == "73" && oEvt.ctrlKey && oEvt.shiftKey && !oEvt.altKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		ur_EVT_cancel(oEvt);
	}
	if( (ur_get(sId).getAttribute('rc')) == '1') 
	{
		var iMaxLength = parseInt(ur_get(sId).getAttribute('cc'));
		
		if(ur_TE_getCorrectLength(ur_get(sId).value) == iMaxLength)
		{
			
			if(oEvt.keyCode == 8 
			|| (oEvt.keyCode==86 && oEvt.ctrlKey) 
			|| (oEvt.keyCode==88 && oEvt.ctrlKey) 
			|| (oEvt.keyCode==89 && oEvt.ctrlKey) 
			|| (oEvt.keyCode==90 && oEvt.ctrlKey)
			|| (oEvt.keyCode==65 && oEvt.ctrlKey)
			|| (document.selection && document.selection.createRange().text.length>0)
			) {
				if (oEvt.keyCode==90 && oEvt.ctrlKey) { 
					ur_callDelayed("ur_TE_restrictChar('"+sId+"')",0);
				}
  			return true;
			}
		}
		
		
		if(oEvt.keyCode==13){
		  iMaxLength = iMaxLength -1;
		}		
		
		if(ur_TE_getCorrectLength(ur_get(sId).value) >= iMaxLength && ur_TE_checkValidKey(oEvt))
		{
				ur_EVT_cancel(oEvt);
		}
		
	}
	if(oEvt.keyCode == "27"){
		sapUrMapi_DataTip_hide(sId);
		ur_EVT_cancel(oEvt);
	}
}
function ur_TE_checkValidKey(oEvt)
{
	switch(oEvt.keyCode)
	{
		case 37: 
		case 39: 
		case 38: 
		case 40: 
		case 46: 
		case 45: 
		case 16: 
		case 17: 
		case 9: 
		case 33:
		case 34:
		case 35:
		case 36:
			return false;
			break;
		default:
			return true;
	}
}
function ur_TE_KeyUp(sId,oEvt)
{
	ur_EVT_fire(ur_get(sId),'notifyKeyUp',oEvt);
}
function ur_TE_Change(sId, oEvt)
{
	ur_EVT_fire(ur_get(sId),'notifyChange',oEvt);
}
function ur_TE_onPaste(sId,oEvt)
{
	
	if( (ur_get(sId).getAttribute('rc')) == '1') 	
	{
		ur_callDelayed("ur_TE_restrictChar('"+sId+"')",0);
		ur_get(sId).setAttribute("chgFire","1");
	}
}
function ur_TE_getCorrectLength(txtValue)
{
	  if (txtValue.indexOf('\r\n')!=-1)
	    ; 
	  else if (txtValue.indexOf('\r')!=-1)
	    txtValue=txtValue.replace ( /\r/g, "\r\n" ); 
	  else if (txtValue.indexOf('\n')!=-1)
	     txtValue=txtValue.replace ( /\n/g, "\r\n" ); 
		return txtValue.length;
}
function ur_TE_restrictChar( sId ) 
{
	var oTextEdt = ur_get(sId), 
		txtValue=oTextEdt.value,
		lineBreakCount = 0,
		charCount = parseInt(oTextEdt.getAttribute('cc'));
	if(txtValue != "" && ur_TE_getCorrectLength(txtValue) >= charCount) {
		txtValue = txtValue.substr(0,charCount);
		
		
		
	  if (txtValue.indexOf('\r\n')!=-1)
	    lineBreakCount = 0; 
	  else if (txtValue.indexOf('\r')!=-1)
	    lineBreakCount = (txtValue.split(/\r/g).length - 1); 
	  else if (txtValue.indexOf('\n')!=-1)
	    lineBreakCount = (txtValue.split(/\n/g).length - 1); 
		if (lineBreakCount > 0 ) txtValue = txtValue.substr(0,charCount-lineBreakCount);
		oTextEdt.value = txtValue;
	}	
}
function ur_TE_setCursorTop(sId)
{
var d=document, ta, rng;
if(d.all){
	ta=d.all[sId];
	if(ta && ta.createTextRange){
		rng=ta.createTextRange();
		rng.collapse(true);
		rng.select();
		}
	}
}
function ur_TE_setCursorBottom(sId)
{
var d=document, ta, rng;
if(d.all){
	ta=d.all[sId];
	if(ta && ta.createTextRange){
		rng=ta.createTextRange();
		rng.collapse(false);
		rng.select();
		}
	}
}
function ur_TE_getCursorPosition(o)
{
	var CaretPos = 0;
	
	if (document.selection) {
		o.focus ();
		var Sel = document.selection.createRange ();
		Sel.moveStart ('character', -o.value.length);
		CaretPos = Sel.text.length;
	}
	
	else if (o.selectionStart || o.selectionStart == '0')
		CaretPos = o.selectionStart;
	return (CaretPos);
}
function ur_TE_setCursorPosition(o, pos)
{
	if(o.setSelectionRange)
	{
		o.focus();
		o.setSelectionRange(pos,pos);
	}
	else if (o.createTextRange) {
		var range = o.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

//** TextView.ie5 **

function sapUrMapi_TextView_menuActivate(sTextViewId,e) {
	var o=ur_get(sTextViewId);
	if (sapUrMapi_checkKey(e,"keydown",new Array("32","40"))) {
		if(o.onclick) {o.onclick();return false;} 
		if(o.oncontextmenu) {o.oncontextmenu();return false;} 
		if(o.onmouseover) {o.onmouseover();return false;} 
	}
  return false;
}
//** Toolbar.ie5 **

function sapUrMapi_Toolbar_toggleItems(sControlId,e) {
  if((e.type == "keydown" && e.keyCode==32) || e.type == "click") {
	  var oToggleButton = ur_get(sControlId+"-tgl");
	  var oToolbar = ur_get(sControlId);
	  var colItems = oToolbar.childNodes;
		ur_EVT_cancel(e);
	  var bShowAllState = oToggleButton.getAttribute("showall")=="true";
	  for (var n=0;n<colItems.length;n++) {
	  	var oItem=colItems.item(n);
	  	if (oItem.nodeType!=3) {
		  	if (oItem.getAttribute("cancollapse")=="true") {
		  	  if (bShowAllState) {
		  		  oItem.style.display="none";
		  		  oItem.setAttribute("show","false");
		      } else {
		    	  oItem.style.display="inline";
		  		  oItem.setAttribute("show","true");
		    	}
		    }
		  }
	    if (oItem==oToggleButton) break;
		}
	  if (bShowAllState) {
	    oToggleButton.setAttribute("showall","false");
	    oToggleButton.className="urBtnStd urTBtnCol";
	    oToggleButton.title=getLanguageText("SAPUR_T_BTN_E");
	    if(ur_system.is508)
				oToggleButton.setAttribute("t",getLanguageText("SAPUR_T_BTN_E"));
	  } else {
	    oToggleButton.setAttribute("showall","true");
	    oToggleButton.className="urBtnStd urTBtnExp";
	    oToggleButton.title=getLanguageText("SAPUR_T_BTN_C");
	    if(ur_system.is508)
				oToggleButton.setAttribute("t",getLanguageText("SAPUR_T_BTN_C"));
	    
	  }
	  sapUrMapi_Focus_showFocusRect(oToggleButton.id);
  }
  else {
	return;
  }
}

//** ToolbarButton.ie5 **
function sapUrMapi_ToolbarButton_setFunctionFromMenuItem(sMenuItemId) {
  if (ur_replace_function) {
  	var clickedItem = ur_get(sMenuItemId);
    var sImgSrc=""
    if (clickedItem.getElementsByTagName("img").length>0) {
      sImgSrc=clickedItem.getElementsByTagName("img").item(0).src;
    }
    var sText=clickedItem.getElementsByTagName("nobr").item(0).innerText;
    var effectedButtonId=ur_replace_function_button_id;
    ur_replace_function_button_id="";
    ur_replace_function=false;
    sapUrMapi_ToolbarButton_applyFunction( effectedButtonId, sText, sImgSrc, clickedItem.onclick)
  }
}
function sapUrMapi_ToolbarButton_applyFunction( sButtonId, sNewText, sNewImageSrc, fNewClickHandler){
  var effectedButton=ur_get(sButtonId);
  var bNoText=(ur_get(sButtonId+"-r").getAttribute("notext")=="true");
  effectedButton.onclick=fNewClickHandler;
  effectedButton.onkeydown=fNewClickHandler;
  var sButtonContent=effectedButton.getElementsByTagName("nobr").item(0).innerHTML;
  var oButtonContent = effectedButton.getElementsByTagName("nobr").item(0);
  if (oButtonContent.getElementsByTagName("img").length>0) {
    if (sNewImageSrc=="") {
    	if (!bNoText) { 
      effectedButton.getElementsByTagName("nobr").item(0).innerHTML="<img alt=\"\" height=\"12\" width=\"1\" border=\"0\" align=\"absmiddle\" src=\""+ur_system.mimepath+"1x1.gif\">"+sNewText
    } else {
	      effectedButton.getElementsByTagName("nobr").item(0).innerHTML="<img alt=\"\" height=\"12\" width=\"12\" border=\"0\" align=\"absmiddle\" src=\""+ur_system.mimepath+"1x1.gif\">";
    	}
    } else {
    	if (!bNoText) { 
      effectedButton.getElementsByTagName("nobr").item(0).innerHTML="<img alt=\"\" border=\"0\" align=\"absmiddle\" src=\""+sNewImageSrc+"\">&nbsp;"+sNewText;
      } else {
        effectedButton.getElementsByTagName("nobr").item(0).innerHTML="<img alt=\"\" border=\"0\" align=\"absmiddle\" src=\""+sNewImageSrc+"\">";
      }
    }
  } else {
    effectedButton.getElementsByTagName("nobr").item(0).innerHTML=sNewText;
  }
 }
function sapUrMapi_ToolbarButton_openMenu( sButtonId, e){
	var sPopupId=document.getElementById(sButtonId).getAttribute("popup");
	if (document.getElementById(sPopupId)==null) return;
	if (document.getElementById(sButtonId+"-r").getAttribute("replaceable")=="true") {
	  ur_replace_function=true;
	  ur_replace_function_button_id=sButtonId;
	}
	if (ur_system.direction=="rtl")
 	  sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENULEFT,e);
 	else
 	  sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENURIGHT,e);
  e.cancelBubble=false;
	if ((e.type=="contextmenu")) {
    e.returnValue=false;
  } else {
    e.returnValue=true;
  }
}
function sapUrMapi_ToolbarButton_keydown(sButtonId,e)
{
	var o=ur_get(sButtonId);
	while (o.getAttribute("ct")!="TB") {
	  o=o.parentNode;
	} 
	 if (ur_isSt(o,ur_st.DISABLED)) return;
	var attr_tp=o.getAttribute("tp");	
	if((attr_tp=="MNUSEC") || (attr_tp=="MNU"))
	{
		if(e.altKey && e.keyCode==40)
		{
		  sapUrMapi_ToolbarButton_openMenu(o.id,e);
		}
	}
	if ((e.type!="click")&&(e.type!="contextmenu")) {
		if (!sapUrMapi_checkKey(e,"keypress",new Array("32","40"))) {
	    e.cancelBubble=true;
	    e.returnValue=true;
		  return false;
		}
	}
	if (e.keyCode==32) return ur_EVT_fire(o,"ocl",e);
}
//** ToolbarInputField.ie5 **

function sapUrMapi_ToolbarInputField_blur(sId,event){
	sapUrMapi_InputField_Blur(sId,event);
}
function sapUrMapi_ToolbarInputField_keydown(sId,oEvt) {
	
	if(oEvt.keyCode == "73" && oEvt.ctrlKey && oEvt.shiftKey && !oEvt.altKey ){
		ur_EVT_cancel(oEvt);
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
	}
	if(oEvt.keyCode == "27"){
		ur_EVT_cancel(oEvt);
		sapUrMapi_DataTip_hide();
	}
}

//** Tray.ie5 **

function sapUrMapi_Tray_RegisterCreate(sId, bScroll, bCollapsed) {
	
}
function sapUrMapi_Tray_create(sId,bScroll,bCollapsed) {
}
function sapUrMapi_Tray_showOptionMenu2(sTrayId,sMenuContentId,oEvt) {
 	if (ur_system.direction=="rtl")
	  sapUrMapi_Tray_showOptionMenu(sTrayId,sTrayId+"-menu",sMenuContentId,sapPopupPositionBehavior.MENULEFT,oEvt) 
	else
	  sapUrMapi_Tray_showOptionMenu(sTrayId,sTrayId+"-menu",sMenuContentId,sapPopupPositionBehavior.MENURIGHT,oEvt) 
}
function sapUrMapi_Tray_showOptionMenu(sTrayId,sTriggerId,sMenuContentId,enumPositionBehavior,e) {
	if (e.type!="click") {
		if (!sapUrMapi_checkKey(e,"keydown",new Array("32","40"))) {
		  return false;
	  } else {
		  ur_EVT_cancel(e);
		}
	}
	sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
}
function sapUrMapi_Tray_toggle(sTrayId,e)
{
	ur_EVT_cancelBubble(e);
	var elBody = ur_get(sTrayId+"-bd"); 
	var elHeader = ur_get(sTrayId+"-hd");
	var oTray = ur_get(sTrayId);
	var elExp = ur_get(sTrayId+"-exp");
	if ( elBody != null && elExp != null )
	{
		var sScrollMode = elBody.getAttribute("scrlMode"),
			iHeight = elBody.getAttribute("cntHeight"),
			oTbar = ur_get(sTrayId+"-tbar"),
			oTbody = ur_get(sTrayId+"-height");
		if ( elBody.style.visibility == "hidden" )
		{
			if (oTbar != null) oTbar.style.display = "block";
			elBody.style.visibility = "inherit";
			elBody.style.overflow = sScrollMode;
			elBody.style.height = "100%";
			oTbody.parentNode.className = oTbody.parentNode.className.replace(" urTryCTransBody", "");
			oTbody.style.height = iHeight;
			
			ur_setSt(oTray,ur_st.COLLAPSED,false);
			ur_setSt(oTray,ur_st.EXPANDED,true);
			sapUrMapi_Focus_showFocusRect();
			if (elExp.className.indexOf("Closed") != -1)
			{
				var re = /Closed/gi;
				var clsNm = elExp.className;
				
				elExp.className = clsNm.replace(re, "Open");
			}
			if (elHeader.className == "urTrcHdBgClosedIco" ) elHeader.className = "urTrcHdBgOpenIco";
			elExp.title=getLanguageText("SAPUR_TY_BTNE");
			sapUrMapi_refocusElement(oTray);
		} 
		else
		{
			if (oTbar != null) oTbar.style.display = "none";
			elBody.style.overflow = "hidden";
			elBody.style.height = "1px";
			oTbody.style.height = "1px";
			oTbody.parentNode.className = oTbody.parentNode.className + " urTryCTransBody";
			elBody.style.visibility = "hidden";
			
			
			ur_setSt(oTray,ur_st.COLLAPSED,true);
			ur_setSt(oTray,ur_st.EXPANDED,false);
			sapUrMapi_Focus_showFocusRect();
			if (elExp.className.indexOf("Open") != -1)
			{
				var re = /Open/gi;
				var clsNm = elExp.className;
				
				elExp.className = clsNm.replace(re, "Closed");
				
			}
			if (elHeader.className == "urTrcHdBgOpenIco" ) elHeader.className = "urTrcHdBgClosedIco";
			elExp.title=getLanguageText("SAPUR_TY_BTNC");
			sapUrMapi_refocusElement(oTray);
		}
	}
	return true;
}
function sapUrMapi_Tray_keydown(sTrayId,e)
{
	var elBody = ur_get(sTrayId+"-tbd"); 
	var elHeader = ur_get(sTrayId+"-hd");
	var oSkip=document.getElementById(sTrayId);
	var sCt=ur_EVT_src(e).ct;
	
	if(e.keyCode==107 && !ur_isSt(oSkip,ur_st.DISABLED) && ur_isSt(oSkip,ur_st.COLLAPSED) && sCt=="TY")
	 {
		sapUrMapi_Tray_toggle(sTrayId,e);
		sapUrMapi_DBTN_showDBtn();
		return true;
	 }
	 
	 else  if(e.keyCode==109 && !ur_isSt(oSkip,ur_st.DISABLED) && ur_isSt(oSkip,ur_st.EXPANDED) && sCt=="TY")
	 {
			sapUrMapi_Tray_toggle(sTrayId,e);
			sapUrMapi_DBTN_hideDBtn(); 
			return true;
	 }
	  else if(e.keyCode== 13)
	 {
		sapUrMapi_triggerDefaultButton(sTrayId,e);
	 }	 
	 else
		return sapUrMapi_skip(sTrayId,e);	
     
}

//** Tree.ie5 **

function sapUrMapi_Tree_collapseAll(sTreeId) {
    var eRootNode = ur_get(sTreeId + "-r");
    var eNodes = eRootNode.getElementsByTagName("DIV");
    
    for (var i =  eNodes.length-1; i >-1; i--){
      if (ur_getAttD(eNodes[i],"tp","").indexOf("F")>-1) {
        sapUrMapi_Tree_toggle( sTreeId, eNodes[i].id, true, true)
      }
    }
}
function sapUrMapi_Tree_expandAll(sTreeId) {
    var eRootNode = ur_get(sTreeId + "-r");
    var eNodes = eRootNode.getElementsByTagName("DIV");
    
    for (var i =  eNodes.length-1; i >-1; i--){
      if (ur_getAttD(eNodes[i],"tp","").indexOf("F")>-1) {
        sapUrMapi_Tree_toggle( sTreeId, eNodes[i].id, false, true)
      }
    }
}
function sapUrMapi_Tree_toggle( sTreeId, sNodeId, bClose, bKey) {
	var nodeDiv = ur_get(sNodeId);
  var oMainContainerNode = ur_get(sTreeId+"-r");
  var oEvt = window.event;
  if (oEvt) ur_EVT_cancelBubble(oEvt);
  if (ur_isSt(nodeDiv,ur_st.DISABLED)) return;
  if (!bKey) {
    oMainContainerNode.setAttribute("focuced_id",sNodeId);
    try { sapUrMapi_Tree_focusNode(sTreeId,sNodeId); } catch (e) {};
	}
  var childrenDiv = ur_get( nodeDiv.id + "-child" );
  if (!childrenDiv) return;
	var expander = ur_get( nodeDiv.id + "-exp" );
	if ((ur_isSt(nodeDiv,ur_st.COLLAPSED) && !bKey)||(bKey && !bClose && ur_isSt(nodeDiv,ur_st.COLLAPSED)))
	{
	  nodeDiv.className = nodeDiv.className+" urTreNlExp";
		childrenDiv.style.display="block";
		
		
		eLength = expander.className.length;
		expander.className = expander.className.substr(0,eLength-3) + "Op";
    nodeDiv.setAttribute("st",nodeDiv.getAttribute("st").replace("-","+"));
    try { sapUrMapi_Tree_focusNode(sTreeId,sNodeId); } catch (e) {};
    return;
	}
	if ((ur_isSt(nodeDiv,ur_st.EXPANDED)&&!bKey)||(bKey && bClose && ur_isSt(nodeDiv,ur_st.EXPANDED)))
	{
		if (nodeDiv.className.lastIndexOf(" ")>-1) {
		  nodeDiv.className = nodeDiv.className.substring(0,nodeDiv.className.lastIndexOf(" "));
		}
		childrenDiv.style.display="none";
		eLength = expander.className.length;
		expander.className = expander.className.substr(0,eLength-2) + "Clo";
    nodeDiv.setAttribute("st",nodeDiv.getAttribute("st").replace("+","-"));
    try { sapUrMapi_Tree_focusNode(sTreeId,sNodeId); } catch (e) {};
		return;
	}
}
function sapUrMapi_Tree_focusNode(sTreeId,sNodeId,bInit,bNoFocus) {
	var oMainContainerNode = ur_get(sTreeId+"-r");
	var oR=ur_get(sTreeId+"-skipstart");
	if (sNodeId=="") return;
	if (sNodeId.indexOf("-skipstart")>0) return;
	var oNode = ur_get(sNodeId);
	if (bInit) oMainContainerNode.setAttribute("focuced_id",null);
	var sOldNode = oMainContainerNode.getAttribute("focuced_id");
	try {
		if (sOldNode) {
		  sapUrMapi_setTabIndex(ur_get(sOldNode),-1);
		}
  } catch (ex) {
  }
	oMainContainerNode.setAttribute("focuced_id",oNode.id);
	if(ur_system.is508) {
		var sTtTree=oMainContainerNode.getAttribute("tt");
		var sTt=oNode.getAttribute("tt");	
		var sAccTt="";
	}
	sapUrMapi_setTabIndex(oNode,0);
  try {
    if (!bNoFocus) ur_focus(oNode);
  } catch (ex) {}
  sapUrMapi_Focus_showFocusRect();
}
function sapUrMapi_TreeNode_keyDown(sTreeId,sNodeId,e) {
	if (sapUrMapi_checkKey(e,"keydown",new Array("32"))) {
		 
		 if (ur_isSt(ur_get(sNodeId),ur_st.DISABLED)) return;
		 oNodeEvents = ur_get(sNodeId+"-cnt-start");
		 if (oNodeEvents.onclick) {
		 	  oNodeEvents.onclick();
		 	  return true;
		 } else {
		 	
		 	e.cancelBubble=false;
		 	e.returnValue=false;
		 }
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("121")) && e.shiftKey) { 
		oNodeEvents = ur_get(sNodeId);
		if (oNodeEvents.oncontextmenu) {
			oNodeEvents.oncontextmenu();
			return true;
		}
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("38","39","40","37","9","107","109","106"))) {
		sapUrMapi_Tree_keyDown(sTreeId,e)
  }
}
function sapUrMapi_TreeNode_hover(sTreeId,sNodeId,bIn,e) {
	if ((e.srcElement.level) && (!e.srcElement.container)) {
	  var sClass="urTreNoEnbl";
	  if (e.srcElement.getAttribute("clickable")=="true") {
	    sClass+="Clk";
	  }
    if (bIn) e.srcElement.className=sClass+" urTreNoEnblClkHover"
    else e.srcElement.className=sClass;
  }
}
function sapUrMapi_TreeNode_mouseover(sTreeId,sNodeId,e) {
	sapUrMapi_TreeNode_hover(sTreeId, sNodeId, true, e);
}
function sapUrMapi_TreeNode_mouseout(sTreeId,sNodeId,e) {
	sapUrMapi_TreeNode_hover(sTreeId, sNodeId, false, e);
}
function sapUrMapi_Tree_enter (sTreeId,e) {
	
	
	var oFocusedNode=null;
	if (e.srcElement.id==sTreeId+"-skipstart") {
	  var oMainContainerNode = ur_get(sTreeId+"-r");
		
		
		if (ur_get(sTreeId+"-skipstart").getAttribute("exit")=="true") {
			ur_get(sTreeId+"-skipstart").setAttribute("exit","false");
			var sFocusedNode= oMainContainerNode.getAttribute("focuced_id");
		  if (sFocusedNode!="") {
		  	 oFocusedNode=ur_get(sFocusedNode);
			   sapUrMapi_setTabIndex(oFocusedNode.lastChild,-1);
		  }
		} else {
			
		  var sFocusedNode= oMainContainerNode.getAttribute("focuced_id");
		  if (sFocusedNode) {
				 oFocusedNode=ur_get(sFocusedNode);
		  } else {
		  	 var nodelist= oMainContainerNode.getElementsByTagName("DIV");
		  	 for (var nlc=0;nlc<nodelist.length;nlc++) {
		  	   if (nodelist.item(nlc).getAttribute("sellevel")=="1") {
		  	     oFocusedNode=nodelist.item(nlc);
		  	     break;
		  	   }
		  	 }
		     if (oFocusedNode==null) {
		       var nodelist=oMainContainerNode.getElementsByTagName("DIV");
		  	   oFocusedNode=nodelist.item(0);
		  	    if (!oFocusedNode || oFocusedNode.childNodes.length==0) {
							
							var oLastElement=ur_get(sTreeId+"-skipend");
							oLastElement.setAttribute("exit","true");
							ur_focus(sTreeId+"-skipend");
							return;
		  	   }
		  	   if (oFocusedNode.id.indexOf("-")>0) {
		  	     oFocusedNode=oFocusedNode.childNodes.item(0);
		  	   }
			}
			}
			sapUrMapi_Tree_focusNode(sTreeId,oFocusedNode.id,true);
	  }
	} else {
		
		var oLastElement=ur_get(sTreeId+"-skipend")
		if (oLastElement.getAttribute("exit")=="true") {
			
			
			oLastElement.setAttribute("exit","false");
		} else {
			ur_focus(ur_get(sTreeId+"-skipstart"));
	  }
	}
}
function sapUrMapi_Tree_expandNode(sTreeId,o,sMainContainerNode) {
	if (o && ur_getAttD(o,"tp","").indexOf("F")>-1 && ur_isSt(o,ur_st.COLLAPSED) && !ur_isSt(o,ur_st.DISABLED)) {
		sapUrMapi_Tree_toggle(sTreeId,o.id,false,true);
	}
}
function sapUrMapi_Tree_collapseNode(sTreeId,o, sMainContainerNode) {
	if (o && ur_getAttD(o,"tp","").indexOf("F")>-1 && !ur_isSt(o,ur_st.COLLAPSED) && !ur_isSt(o,ur_st.DISABLED)) {
		sapUrMapi_Tree_toggle(sTreeId,o.id,true,true);
	}
}
function sapUrMapi_Tree_keyDown(sTreeId,e) {
  var oFocusedNode=null;
  var oMainContainerNode = ur_get(sTreeId+"-r");
  var sFocusedNode= oMainContainerNode.getAttribute("focuced_id");
  if (sFocusedNode!="") {
  	 oFocusedNode=ur_get(sFocusedNode);
  }
  if (sapUrMapi_checkKey(e,"keydown",new Array("38","39","40","37","9","32","107","109","106"))) {
  	if (e.keyCode==9) { 
  		if (!e.shiftKey) {
  			oLastElement = ur_get(sTreeId+"-skipend");
  			oLastElement.setAttribute("exit","true");
  			ur_focus(oLastElement);
	  		e.cancelBubble=false;
	  		e.returnValue=true;
	  		return;
  		} else {
  			oFirstElement = ur_get(sTreeId+"-skipstart");
  			oFirstElement.setAttribute("exit","true");
  			ur_focus(oFirstElement);
  			e.cancelBubble=false;
	  		e.returnValue=true;
	  		return;
  		}
  	}
  	if (e.keyCode==40) { 
		  if (!oFocusedNode) {
	  	  oFocusedNode=oMainContainerNode.childNodes.item(0);
		  } else {
		  	if (ur_isSt(oFocusedNode,ur_st.EXPANDED) || ur_getAttD(oFocusedNode,"tp","").indexOf("L")>-1) { 
		  	  oNextContainer = ur_get(oFocusedNode.id+"-child");
		  	  if (oNextContainer && oFocusedNode.nextSibling.firstChild) oFocusedNode=oFocusedNode.nextSibling.childNodes.item(0);
          else if (oNextContainer && oFocusedNode.nextSibling.nextSibling) oFocusedNode=oFocusedNode.nextSibling.nextSibling; 
          else if (!oNextContainer && oFocusedNode.nextSibling) oFocusedNode=oFocusedNode.nextSibling; 
          else if (oFocusedNode.parentElement !=oMainContainerNode)
			  	     { 
				  	     	oParent = oFocusedNode.parentElement.previousSibling;
				  	     	while ((!oParent.nextSibling.nextSibling) && (oParent.parentElement!=oMainContainerNode)) {
				  	     		 oParent=oParent.parentElement.previousSibling;
				  	     	}
				  	     	if (oParent.nextSibling.nextSibling) {
				  	     		oFocusedNode=oParent.nextSibling.nextSibling;
				  	     	}
			  	     }
			  } else {
		  		if (ur_isSt(oFocusedNode,ur_st.COLLAPSED) || ur_getAttD(oFocusedNode,"tp","").indexOf("L")) {
			  		if (oFocusedNode.nextSibling.nextSibling) {
				  	  oFocusedNode=oFocusedNode.nextSibling.nextSibling;
			  		} else { 
		  	     	oParent = oFocusedNode;
		  	     	while ((!oParent.nextSibling.nextSibling) && (oParent.parentElement!=oMainContainerNode)) {
		  	     		 oParent=oParent.parentElement.previousSibling;
		  	     	}
		  	     	if (oParent.nextSibling.nextSibling) {
		  	     		oFocusedNode=oParent.nextSibling.nextSibling;
		  	     	}
			  		}
		  		}
		  	}
		  }
		}
		if (e.keyCode==39) { 
		  if (ur_system.direction=="rtl") {
		    sapUrMapi_Tree_collapseNode(sTreeId,oFocusedNode,oMainContainerNode);
		  } else {
		    sapUrMapi_Tree_expandNode(sTreeId,oFocusedNode,oMainContainerNode)
		  }
		}
		if (e.keyCode==37) { 
		  if (ur_system.direction=="rtl") {
		    sapUrMapi_Tree_expandNode(sTreeId,oFocusedNode,oMainContainerNode)
		  } else {
		    sapUrMapi_Tree_collapseNode(sTreeId,oFocusedNode,oMainContainerNode);
		  }
		}
		if (e.keyCode==109) { 
			sapUrMapi_Tree_collapseNode(sTreeId,oFocusedNode,oMainContainerNode);
		}
		if (e.keyCode==107) {
		  sapUrMapi_Tree_expandNode(sTreeId,oFocusedNode,oMainContainerNode);
		}
		if (e.keyCode==106) { 
			sapUrMapi_Tree_collapseAll(sTreeId);
			return;
		}
		if (e.keyCode==38) { 
		  if (!oFocusedNode) {
			  oFocusedNode=oMainContainerNode.childNodes.item(0);
		  } else {
			  oParent = oFocusedNode.parentElement;
	    	if (oFocusedNode != oMainContainerNode.childNodes.item(0)) {
		    	if (oFocusedNode==oParent.childNodes(0)) {
		    		if (oParent==oMainContainerNode) {
		    			oFocusedNode=oParent.lastChild;
				  		while ((oFocusedNode.id.indexOf("-child")>-1)&&(ur_isSt(oFocusedNode.previousSibling,ur_st.COLLAPSED)||ur_getAttD(oFocusedNode.previousSibling,"tp","").indexOf("L")>-1)) {
				  		  oFocusedNode=oFocusedNode.previousSibling;
				  		}
				  		while ((oFocusedNode.id.indexOf("-child")>-1)&&(ur_isSt(oFocusedNode.previousSibling,ur_st.EXPANDED)||ur_getAttD(oFocusedNode.previousSibling,"tp","").indexOf("L")>-1)) {
				  		  oFocusedNode=oFocusedNode.lastChild;
				  		}
		    		} else {
			  		  oFocusedNode=oParent.previousSibling;
						}
					} else {
							oFocusedNode=oFocusedNode.previousSibling;
							while ((oFocusedNode.id.indexOf("-child")>-1)&&(ur_isSt(oFocusedNode.previousSibling,ur_st.COLLAPSED) || !oFocusedNode.lastChild)) {
								oFocusedNode=oFocusedNode.previousSibling;
							}
							while ((oFocusedNode.id.indexOf("-child")>-1) && (ur_isSt(oFocusedNode.previousSibling,ur_st.EXPANDED)) && oFocusedNode.lastChild) {
								oFocusedNode=oFocusedNode.lastChild;
							}
							while (oFocusedNode.style.display == "none") {
							  if (oFocusedNode.previousSibling) {
							    oFocusedNode = oFocusedNode.previousSibling;
							  } else if (oFocusedNode.parentNode){
							    oFocusedNode = oFocusedNode.parentNode;
							  }
							}
					}
				}
			}
	  }
		ur_EVT_cancelBubble(e);
		
	  	if (sTreeId && oFocusedNode) {
			sapUrMapi_Tree_focusNode(sTreeId,oFocusedNode.id);
		}
		
		if (ur_system.is508 && oFocusedNode) {
			  sapUrMapi_refocusElement(oFocusedNode.id);
		}
  }
}
function sapUrMapi_Tree_controlExit(sTreeId, sNodeId,e) {
	var oContainer = ur_get(sNodeId+"-cnt-start");
  sapUrMapi_setTabIndex(oContainer,-1); 
  oContainer.onkeydown=null;  
  														
  oContainer.title = ""
  var oNode=ur_get(sNodeId);  														
	sapUrMapi_setTabIndex(oNode.lastChild,0);
	sapUrMapi_setTabIndex(ur_get(sNodeId+"-cnt-end"),-1);
	ur_get(sNodeId+"-cnt-end").title="";
	sapUrMapi_Tree_focusNode(sTreeId,sNodeId)
	e.cancelBubble=false;
  e.returnValue=false;
}
function sapUrMapi_Tree_ignoreControlEvents() {
	ur_EVT_cancel(event);
}
function sapUrMapi_Tree_controlEnter(sTreeId, sNodeId,e) {
	var oControlExitPoint = ur_get(sNodeId+"-cnt-end");
	var oControlEventer   = ur_get(sNodeId+"-cnt-start");
	var sAllowTag=",INPUT,SELECT,TEXTAREA,";
	var sEvType = e.srcElement.type;
	if (sAllowTag.indexOf(","+e.srcElement.tagName+",")>-1) {
	  
		sapUrMapi_Tree_focusNode(sTreeId,sNodeId,true,true);
		sapUrMapi_setTabIndex(oControlExitPoint,0);
		sapUrMapi_setTabIndex(oControlEventer,0);
		if(sEvType.indexOf("select")>-1){
			ur_focus(e.srcElement.options[0]);
		}else{
			ur_focus(e.srcElement);
		}
		oControlEventer.onkeydown=sapUrMapi_Tree_ignoreControlEvents; 
		return true;
	}
	if (oControlExitPoint) {
		sapUrMapi_setTabIndex(oControlExitPoint,0);
		sapUrMapi_setTabIndex(oControlEventer,0);
		oControlExitPoint.title = getLanguageText("SAPUR_TREE_ITEM_CONTAINER_END");
		oControlEventer.title   = getLanguageText("SAPUR_TREE_ITEM_CONT_SELECTED");
		ur_focus(oControlEventer);
		oControlEventer.onkeydown=sapUrMapi_Tree_ignoreControlEvents; 
		ur_EVT_cancelBubble(e);
		
		return true;
	}
	return false;
}
function sapUrMapi_Tree_getNodeId(sId) {
	var o=ur_get(sId);
	while (o.tagName!="BODY") {
		if (o.tagName=="DIV" && ((String(o.getAttribute("tp")).indexOf("F")>-1) || (String(o.getAttribute("tp")).indexOf("L")>-1))) return o.id;
		o=o.parentNode;
	}
	return "";
}
function sapUrMapi_Tree_selectNode(sTreeId, sNodeId, iSelLevel) {
	var oNode   = ur_get(sNodeId);
	var bExp    = oNode.className.indexOf("urTreNlExp")>0;
	var sClass = oNode.className.substring(0,oNode.className.indexOf(" "));
	if (sClass=="") var sClass = oNode.className;
	oNode.setAttribute("sellevel",""+iSelLevel);
	ur_get(sNodeId+"-cnt-start").setAttribute("sellevel",""+iSelLevel);
	if (iSelLevel==1) sClass+=" urTreNSel";
	if (iSelLevel==2) sClass+=" urTreNSel2";
	if (bExp) sClass+=" urTreNlExp";
	oNode.className=sClass;
}
function sapUrMapi_Tree_deselectAll(sTreeId) {
	var colNodes   = document.getElementsByTagName("DIV");
	for (var n=0;n<colNodes.length;n++) {
		if (colNodes.item(n).sellevel) sapUrMapi_Tree_selectNode(sTreeId,colNodes.item(n).id,0);
	}
}
function sapUrMapi_Tree_showMenu(sTreeId,sNodeId,sPopupMenuId,oEvt) {
	if(!oEvt) oEvt=event;
	
	sapUrMapi_Tree_focusNode(sTreeId,sNodeId);
	o=ur_get(sNodeId);
	if (!oEvt || oEvt.type=="keydown") {
		sapUrMapi_PopupMenu_showMenu(sNodeId,sPopupMenuId,sapPopupPositionBehavior.MENULEFT,oEvt);
		if (oPopup) {
			oPopup.frame.object.style.top=parseInt(oPopup.frame.object.style.top)-7+"px";
			oPopup.frame.object.style.left=parseInt(oPopup.frame.object.style.left)+o.firstChild.offsetLeft+14+"px";
		}
	} else { 
		sapUrMapi_PopupMenu_showMenu(sNodeId,sPopupMenuId,sapPopupPositionBehavior.EVENT,oEvt);
	}
	if(oEvt!=null)
		ur_EVT_cancel(oEvt);
}

//** TriStateCheckBox.ie5 **

function sapUrMapi_TriStateCheckBox_toggle(sId,e) {
  var o=ur_get(sId);
  var oImg=ur_get(sId+"-img");
  if (ur_isSt(o,ur_st.DISABLED) || ur_isSt(o,ur_st.READONLY) || (e.type=="keydown" && e.keyCode!=32)) 
		return false;
	if (ur_isSt(o,ur_st.SELECTED)){
		ur_setSt(o,ur_st.SELECTED,false);
		ur_setSt(o,ur_st.UNDEFINED,true);
		oImg.className=oImg.className.replace("On","Ind");
	}
	else if (ur_isSt(o,ur_st.NOTSELECTED)){
		ur_setSt(o,ur_st.NOTSELECTED,false);
		ur_setSt(o,ur_st.SELECTED,true);
		oImg.className=oImg.className.replace("Off","On");	
	}
	else{
		ur_setSt(o,ur_st.UNDEFINED,false);
		ur_setSt(o,ur_st.NOTSELECTED,true);
		oImg.className=oImg.className.replace("Ind","Off");	
	}
	ur_focus(o);
	if (ur_system.is508) o.fireEvent("onactivate");
	return ur_EVT_cancel(e);
}
function sapUrMapi_TriStateCheckBox_setDisabled(sId) {
	sapUrMapi_CheckBox_setDisabled(sId);
}
function sapUrMapi_TriStateCheckBox_setEnabled(sId) {
	sapUrMapi_CheckBox_setEnabled(sId);
}
function sapUrMapi_TriStateCheckBox_setReadonly(sId,bSet){
	sapUrMapi_CheckBox_setReadonly(sId,bSet);
}

//** ViewSwitch.ie5 **

function ur_VS_sel(oEvt) {
  var o=ur_VS_getObj(oEvt).ref;
  oItm=ur_EVT_src(oEvt);
  while (oItm.getAttribute && (oItm.getAttribute("idx")==null || oItm.getAttribute("idx")=="")) {
    oItm=oItm.parentNode;
    if (oItm.tagName=="TR") return;
  }
  var iIdx=parseInt(oItm.getAttribute("idx"));
  var sSt=oItm.getAttribute("st");
  if (sSt.indexOf("d")==-1) { 
	  	ur_EVT_fire(oItm,"osel",oEvt);
	}
}
function ur_VS_getObj(oEvt) {
  var o={ref:ur_getRootObj(ur_EVT_src(oEvt))};
  var items=new Array();
  for (var i=0;i<o.ref.firstChild.childNodes.length;i++)
    items.push(o.ref.firstChild.childNodes[i].firstChild);
  o["items"]=items;
  o["selected"]=o.ref.getAttribute("sidx");
  return o;
}
function ur_VS_cl(oEvt)
{
    if (!oEvt) oEvt=event; 
    ur_VS_sel(oEvt); 
}
function ur_VS_kd(oEvt) {
  if (!oEvt) oEvt=event;
  if (oEvt.keyCode==32 || oEvt.keyCode==13) {
    ur_VS_sel(oEvt);
    ur_EVT_cancel(oEvt);
  }
  else if(oEvt.keyCode==38 || oEvt.keyCode==40){
  	ur_VS_ac(oEvt);
  }
 var o=ur_VS_getObj(oEvt);
   ur_KY_nav(oEvt,o);
}
function ur_VS_ac(oEvt)
{
   var o=ur_VS_getObj(oEvt);
   var aItms=o.ref.getElementsByTagName("TR");
   
   var oCur=ur_EVT_src(oEvt);
   var iIdx= parseInt(oCur.getAttribute("idx"));
   if(oEvt.keyCode==38) 
   	  iIdx=iIdx-1;
   	else if(oEvt.keyCode==40) 
   	  iIdx=iIdx+1;
   if(iIdx<0 || iIdx>aItms.length)return;
   if(aItms[iIdx]==null)return;
   
   ur_focus_Itm(aItms[iIdx].firstChild,oCur);
}
function ur_VS_mm(oEvt) {
  
}
