//class for the validation
class validation {
  constructor(name){
    this.name = name;
    this.blank = false;
  }
}

const validateName = () => {
  if(nameVal.blank){
    $('#nameblank').hide();
    $('#name').css("border-color", "");
    return true;
  }else {
    if($('#nameblank').length === 0){
      $('#name').after('<p id="nameblank">Please enter a name.</p>');
      $('#nameblank').css("color", "red");
    } else{
      $('#nameblank').show();
    }
    $('#name').css("border-color", "red");
    return false;
  }
}

const validateActivities = () => {
  if(activitiesVal.blank){
    $('#activitiesblank').hide();
    return true;
  }else {
    if($('#activitiesblank').length === 0){
        $('.activities').after('<p id="activitiesblank">Please register for at least one activity.</p>');
        $('#activitiesblank').css("color", "red");
    }else{
        $('#activitiesblank').show();
    }
    return false;
  }
}

//final validation function call
const finalValidation = () => {
  let val = [validateName(), validateActivities()];
  for(let i = 0; i < val.length; i++){
    if(!val[i]){
      return false;
    }
  }
  return true;
}

//overwrites button function
$('button').click(function(e) {
  e.preventDefault;
  if(finalValidation()){
    $('#finalval').hide();
    return true;
  }else{
    if($('#finalval').length === 0){
            $('button').before('<p id="finalval">The form is not complete. Please go back and ensure that the form is filled out.</p>');
            $('#finalval').css("color", "red");
        }else{
            $('#finalval').show();
    }
    return false;
  }
});

//declaring validation variables to use in main file
const nameVal = new validation('nameVal');
const emailVal = new validation('emailVal');
const activitiesVal = new validation('activitiesVal');
const ccVal = new validation('ccVal');
