$(document).ready(function() {
			
	$("#icon_menu").click(function() {
		$(".menu_list").slideToggle("normal");
	});  

	$(window).resize(function ()
    {
      $(".menu_list").removeAttr("style");
   	});          

    $(".menu_link").click(function() {
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 1000);
		return false;
	});    
});

