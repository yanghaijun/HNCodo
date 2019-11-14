$(function(){
	rollTop();
	resize();
});

function resize(){
	$("[rollAppear='true']").hide();
	$(window).resize(function(){ 
		var jqTopDivList = $("div[rollTop='true']");
		if(jqTopDivList.length>0){
			jqTopDivList.hide();
			var topDiv = jqTopDivList[0];
			var width = $("[class='m_content_inner2']").width();
			$(topDiv).attr("style","width:"+width+"px;");
		}
	});
}


/**
 * 头部下拉跟踪
 */
function rollTop(){
	var jqTopDivList = $("div[rollTop='true']");
	if(jqTopDivList.length>0){
		var topDiv = jqTopDivList[0];
		jqTopDivList.hide();
		$(window).scroll(function() {	
			var top = $(this).scrollTop();
			var width = $("[class='m_content_inner2']").width();
			if(top>15){
				jqTopDivList.show();
				$(topDiv).addClass('header_top_wrap');
				$(topDiv).attr("style","width:"+width+"px;")
				$("[rollAppear='true']").show();
				$("[rollAppear='false']").each(function(){
					$(this).hide();
				});
			}else{
				jqTopDivList.hide();
				$(topDiv).removeClass('header_top_wrap');
				$("[rollAppear='true']").hide();
				$("[rollAppear='false']").each(function(){
					$(this).show();
				});
			}
		});
	}else{
		return;
	}
}
