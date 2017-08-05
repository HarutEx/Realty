$(document).ready(function(){
    $(".div-destination").click(function(){
        $(".dropdown-menu").toggle();
    });
});

$(document).ready(function(){
    $(".div-guest").click(function(){
        $(".dropdown-menu").toggle();
    });
});

$(document).ready(function(){
    $(".panel-heading").click(function(){
        $("#panel").toggle("slow");
    });
});