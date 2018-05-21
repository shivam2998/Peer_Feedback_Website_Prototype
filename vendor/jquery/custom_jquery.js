//SOURCE: https://codepen.io/anon/pen/zjeqBa  Changed the timing of fadeout

window.setTimeout(function() {
    $(".alert").fadeTo(300, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 2300);



//SOURCE: http://jsfiddle.net/nick_craver/JDfae/
$(document).ready(function () {
    
    $('.notification-button').click( function () {
        $('#message-box').slideDown('slow').delay(1500).slideUp('slow');
    });
    
});