$(document).ready(function(){
    $("#lightgallery").lightGallery(); 
    $("#profile").show();  
    $("#work").hide();
    $("#resume").hide();
    $("#blog").hide();

    $(".nav li a").click(function(){
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
    });

    $("#profile-nav").click(function()   
    {  
        $("#profile").show();  
        $("#work").hide();
        $("#resume").hide();
        $("#blog").hide();

    });  
    $("#work-nav").click(function()  
    {  
        $("#profile").hide();  
        $("#work").show();
        $("#resume").hide();
        $("#blog").hide();
    });  
    $("#resume-nav").click(function()  
    {  
        $("#profile").hide();  
        $("#work").hide();
        $("#resume").show();
        $("#blog").hide();
    });  
    $("#blog-nav").click(function()  
    {  
        $("#profile").hide();  
        $("#work").hide();
        $("#resume").hide();
        $("#blog").show();
    });  
});