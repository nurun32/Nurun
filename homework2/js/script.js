

/*start of fixed-navbar*/
var $sticky = $(".menu");
$(window).on("scroll", function(){
    var $scrolling = $(this).scrollTop();
    
    if($scrolling > 110){
        $sticky.addClass("navBg");
    }
    else{
        $sticky.removeClass("navBg");
    }
});

/*end of fixed-navbar*/
