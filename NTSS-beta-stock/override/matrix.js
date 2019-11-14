
$(document).ready(function(){
	// === Resize window related === //
	//设置左侧菜单高度
	$(window).resize(function()
	{
		var h=$(window).height()-41;
		$("ul.tree").css("height",h+"px");
	});
	
	
	var h=$(window).height()-41;
	$("ul.tree").css("height",h+"px");

	// === Style switcher === //
	$('#style-switcher i').click(function()
	{
		if($(this).hasClass('open'))
		{
			$(this).parent().animate({marginRight:'-=190'});
			$(this).removeClass('open');
		} else
		{
			$(this).parent().animate({marginRight:'+=190'});
			$(this).addClass('open');
		}
		$(this).toggleClass('icon-arrow-left');
		$(this).toggleClass('icon-arrow-right');
	});

	$('#style-switcher a').click(function()
	{
		var style = $(this).attr('href').replace('#','');
		$('.skin-color').attr('href','css/maruti.'+style+'.css');
		$(this).siblings('a').css({'border-color':'transparent'});
		$(this).css({'border-color':'#aaaaaa'});
	});

	$('.lightbox_trigger').click(function(e) {

		e.preventDefault();

		var image_href = $(this).attr("href");

		if ($('#lightbox').length > 0) {

			$('#imgbox').html('<img src="' + image_href + '" /><p><i class="icon-remove icon-white"></i></p>');

			$('#lightbox').slideDown(500);
		}

		else {
			var lightbox =
				'<div id="lightbox" style="display:none;">' +
				'<div id="imgbox"><img src="' + image_href +'" />' +
				'<p><i class="icon-remove icon-white"></i></p>' +
				'</div>' +
				'</div>';

			$('body').append(lightbox);
			$('#lightbox').slideDown(500);
		}

	});

	$('#lightbox').on('click', function() {
		$('#lightbox').hide(200);
	});

	$(document).on("click", ".selectProvince", function(){
		$(this).next(".province").stop().slideDown();
		$("#province").removeAttr("style");
		$("#province").attr("style","overflow: hidden; height: 240px; display: block; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;");
	});
	$(document).on("click", ".province li", function(){
		var inputs=$(this).parents("ul").parents(".province").prevAll(".selectProvince").children(".provinceInput");
		inputs.attr("value",$(this).html());
		$(".province").stop().slideUp();
	});

	$(document).on("hover",".selectProvince", function(){
			$("body").unbind("click");
		},
		function() {
			$("body").bind("click",
				function() {
					$(this).find(".companySelect").stop().slideUp(200);
				});
		});

	//点击隐藏
	$("body").bind("click",
		function() {
			$(this).find("#province").slideUp(200);
		});
	//阻止冒泡解除事件绑定
	$(".selectProvince").hover(function() {
			$("body").unbind("click");
		},
		function() {
			$("body").bind("click",
				function() {
					$(this).find(".companySelect").stop().slideUp(200);
				});
		});//选省结束


	$(".closeCon").click(function(e) {
		var parent=$(this).parents(".showDetail");
		if(parent.children(".closeCon").hasClass("openCon")==true)
		{
			parent.nextAll(".childBox").show();
			parent.children(".closeCon").removeClass("openCon");
			parent.children(".closeCon").attr("title","收起");
		}
		else
		{
			parent.nextAll(".childBox").hide();
			parent.children(".closeCon").addClass("openCon");
			parent.children(".closeCon").attr("title","展开");
		}
	});


});

