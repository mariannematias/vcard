$(document).ready(function(){
    $("#lightgallery").lightGallery({
        download: false
    }); 
    $("#section1").show();  
    $("#section2, #section3, #section4, #section5").hide();

    /* show/hide sections when navigation is clicked */
    $(".showSection").click(function(){
        $(".targetDiv").hide();
        $(".targetDiv").removeClass("show");
        $('#section'+$(this).attr("id")).show().addClass("show");
    });
    
    /* add active class on selected navigation */
    $(".nav li a").click(function(){
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
    });

    /* show/hide thumbnail pictures depending on portfolio category */
    $(".work-nav").click(function(){
        if ($(this).attr("id") == "all") {
            $(".thumb").show();
        } else {
            $(".thumb").hide();
            $('.cat'+$(this).attr("id")).show();
        }
    });

    /* show/hide sections when next/prev is clicked */
    $('.btn-next').click(function(){
        if ($('.show').next('.targetDiv').length) {
            $('.show').hide().next('.targetDiv').show();
            var section = parseInt($('.show').attr('id').replace('section','')) + 1;
            $(".nav li a").removeClass("active");
            $(".nav li a#"+section).addClass("active");
            $('.show').removeClass('show')
                        .next('.targetDiv')
                        .addClass('show');
        }
    });
    $('.btn-prev').click(function(){
        if ($('.show').prev('.targetDiv').length) {
            $('.show').hide().prev('.targetDiv').show();
            var section = parseInt($('.show').attr('id').replace('section','')) - 1;
            $(".nav li a").removeClass("active");
            $(".nav li a#"+section).addClass("active");
            $('.show').removeClass('show')
                        .prev('.targetDiv')
                        .addClass('show');
        }
    });
});