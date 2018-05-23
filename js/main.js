//Job Role
$('#title').change(function (e){
  if(e.target.value === "other"){
    if($('#other-title').length === 0){
      $('#title').after('<input type="text" id="other-title" placeholder="Your Job Role">');
    }else {
      $('#other-title').show();
    }
  }else {
    $('#other-title').val("");
    $('#other-title').hide();
  }
});

//Perform this once document loads
$(document).ready(function (){
  $('#name').focus();
});
