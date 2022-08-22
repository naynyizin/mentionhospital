$(document).ready(function(){
    // Start Header Section

    // Start Banner Section
    // $(".carousel").carousel({

    // })
    // End Banner Section

    // End Header Section

    // Start Info Section
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);

        if(getscrollpoint>=200){
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        }else{
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    })
    // End Info Section

    // Start ADV Section

    $("#videos").click(function(){
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
        var videourlwithauto= getvideosrc+"?autoplay=1";

        $(getmodal + " iframe").attr("src",videourlwithauto);

        $(getmodal + " button.btn-close").click(function(){
            $(getmodal+ " iframe").attr("src",getvideosrc);
        })
    })

    // End ADV Section

    // Start Premises Section
    $("#lightslider").lightSlider({
        item:4,
        loop:true,
        auto:true,
        slideMove:1,
        speed:600
    });
    // End Premises Section

    // Start Pricing Section
    $(window).scroll(function(){
        let getscroll=$(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >= 2450){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }
    })
    // End Pricing Section
})

// Start Join Us Section
    $('#accordion').accordion();
// End Join Us Section

// Start Footer Section
$('#getyear').text(new Date().getUTCFullYear())
// End Footer Section

// Start Progress

// By Jquery

 $(window).scroll(function(){

    //jquery
    
    var getprogress = $('#progresses');
    var getprogressval = $('#progressvalues');
    var gertscrolltop = $(this).scrollTop();
    // console.log(gertscrolltop);

    //jquery

    // var getscrollheight = $(document).height();
    // console.log(getscrollheight);
    // var getclientheight = $(window).height();
    // console.log(getclientheight);
    // var calcheight = getscrollheight - getclientheight;
    // var getfinalheight = Math.round(gertscrolltop * 100 / calcheight);
    // console.log(getfinalheight);

// By Javascript

    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);
    var calcheight = getscrollheight - getclientheight;
    var getfinalheight = Math.round(gertscrolltop * 100/ calcheight)

    getprogressval.text(`${getfinalheight}%`);
    getprogress.css({
        "background" : `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
    })
    
 })
// End Progress

