jQuery("#backtop").click(function(){
    jQuery("body,html").animate({
        scrollTop:0
    },600);
});

jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop() > 150)
    {
        jQuery("#backtop").addClass("visible");
    }
    else
    {
        jQuery("#backtop").removeClass("visible");
    }
})

