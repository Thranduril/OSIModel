$(document).ready(() => {  
    $("#back").hide();
    $("#layer1").hide();
    $("#layer2").hide();
    $("#layer3").hide();
    $("#layer4").hide();
    $("#layer5").hide();
    $("#layer6").hide();
    $("#layer7").hide();
    $('#video').YTPlayer({
        fitToBackground: true,
        videoId: 'ea_UOPzuyZU',
        mute: false,
        repeat: false,
    });
    delayRun()
    delayRun2()
    delayRun3()
    delayRun4()
    delayRun5()
    delayRun6()
    delayRun7()
    delayRun8()
    
    var timeoutId = -1;
    function functionToRun()
    {
        $("#back").fadeIn("slow");
        $("#back").animate({
            width: '+=0px'
        }, 1000);
    }
    
    function delayRun()
    {
        timeoutId = setTimeout(functionToRun, 13 * 1000);
    }
    
     var timeoutId2 = -1;
    function functionToRun2()
    {
        $("#layer1").fadeIn("slow");
        $("#layer1").animate({width: '100%', height: 120}, 1000);
    }
    function delayRun2()
    {
        timeoutId2 = setTimeout(functionToRun2, 15 * 1000);
    }
    
    var timeoutId3 = -1;
    function functionToRun3()
    {
        $("#layer2").fadeIn("slow");
        $("#layer2").animate({width: '100%', height: 120}, 1000);
    }
    function delayRun3()
    {
        timeoutId3 = setTimeout(functionToRun3, 21 * 1000);
    }
    
    var timeoutId4 = -1;
    function functionToRun4()
    {
        $("#layer3").fadeIn("slow");
        $("#layer3").animate({width: '100%', height: 120}, 1000);
    }
    function delayRun4()
    {
        timeoutId4 = setTimeout(functionToRun4, 27 * 1000);
    }
    
     var timeoutId5 = -1;
    function functionToRun5()
    {
        $("#layer4").fadeIn("slow");
        $("#layer4").animate({width: '100%', height: 120}, 1000);
    }
    function delayRun5()
    {
        timeoutId5 = setTimeout(functionToRun5, 34 * 1000);
    }
   
    var timeoutId6 = -1;
    function functionToRun6()
    {
        $("#layer5").fadeIn("fast");
        $("#layer5").animate({width: '100%', height: 120}, 1000);
    }
    function delayRun6()
    {
        timeoutId6 = setTimeout(functionToRun6, 41 * 1000);
    }
   
    var timeoutId7 = -1;
    function functionToRun7()
    {
        $("#layer6").fadeIn("slow");
        $("#layer6").animate({width: '100%' , height: 120}, 1000);
    }
    function delayRun7()
    {
        timeoutId7 = setTimeout(functionToRun7, 47 * 1000);
    }
    
    var timeoutId8 = -1;
    function functionToRun8()
    {
        $("#layer7").fadeIn("slow");
        $("#layer7").animate({width: '100%', height: 120}, 1000);
    }
    function delayRun8()
    {
        timeoutId8 = setTimeout(functionToRun8, 53 * 1000);
    }
});













