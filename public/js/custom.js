$(document).ready(function(){
    AOS.init();
    $("#lightgallery").lightGallery(); 
    $("#profile").show();  
    $("#work").hide();
    $("#resume").hide();

    $(".nav li a").click(function(){
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
    });

    $("#profile-nav").click(function()   
    {  
        $("#profile").show();  
        $("#work").hide();
        $("#resume").hide();

    });  
    $("#work-nav").click(function()  
    {  
        $("#profile").hide();  
        $("#work").show();
        $("#resume").hide();
    });  
    $("#resume-nav").click(function()  
    {  
        $("#profile").hide();  
        $("#work").hide();
        $("#resume").show();
    });  
});