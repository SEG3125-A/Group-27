// jQuery that will "listen" to the html niceSurvey.html
// $(document).ready(function(){

//     $('form').on('submit', function(){
        
//         var item = $('form input');
//         console.log(item.serializeArray());
  
//         $.ajax({
//           type: 'POST',
//           url: '/home',
//           data: $(this).serializeArray(),
//           success: function(data){
//             // do something with the data via front-end framework
//             // Make the submit button red, disabled and saying Thank you
//             $("#submit").css("background-color", "red");
//             $("#submit").prop("disabled", "true");
//             $("#submit").text("Thank you!");
//           }
//         });
//         return false;
//     });
//   });