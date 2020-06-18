$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 100;

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navbar a.active').removeClass('active');
                    $('.navbar a').eq(i).addClass('active');
            }
    });
}).scroll();

function message_me(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
console.log(name+" "+email+" "+message); 
data ={
        name: name,
        email:email,
        message: message
}
$.ajax({
        type: "POST",
        url: "/message_me",
        data: data,
        success: function(msg){
              alert( "Message sent");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           alert("some error");
        }
      });
return false;
}