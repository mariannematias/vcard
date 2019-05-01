$(document).ready(function(){
    $("#lightgallery").lightGallery(); 
    $("#section1").show();  
    $("#section2").hide();
    $("#section3").hide();
    $("#section4").hide();
    $("#section5").hide();

    $(".nav li a").click(function(){
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".showSection").click(function(){
        $(".targetDiv").hide();
        $('#section'+$(this).attr("id")).show();
    });
});