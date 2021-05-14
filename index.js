// msform

$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  $("#msform").validate({
    debug: true,
    rules: {
      surname: "required",
      fselect: "required",
      sselect: "required",
      minlength: 3
    },
    messages: {
      surname: "minimum of three letters",
      firstname: "minimum of three letters",
      lastname: "minimum of three letters",
      email: "enter a valid email address",
      UTME: "enter a valid UTME no.",
      pwd: "password must be longer than five",
      cpwd: "password must be longer than five",
      fselect: "select a mode of entry",
      sselect: "select choice",
      phone: "enter a valid phone number"
    }
  });


  setProgressBar(current);
  
  $(".next").click(function(){

    var form = $(this).closest("form");
    var validator = form.data("validator");
    var section = $(this).closest("div");
    var fields = section.find(":input");

  //   var me = document.querySelector("input");;

  //   console.log("this is the me" + me)
  //   console.log("this is the me")

  // console.log("this are the fields or inputs" + fields)

    if (fields.valid()){

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
      step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
      
      current_fs.css({
      'display': 'none',
      'position': 'relative'
      });
      next_fs.css({'opacity': opacity});
      },
      duration: 500
      });
      setProgressBar(++current);
    
    }
  });
  
  $(".previous").click(function(){
  
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        
        current_fs.css({
          'display': 'none',
          'position': 'relative'
        });
        previous_fs.css({'opacity': opacity});
      },
      duration: 500
    });
    setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
  }
  
  $(".submit").click(function(){
    return false;
  })
  
});