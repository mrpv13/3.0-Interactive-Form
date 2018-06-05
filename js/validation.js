//class for the validation
class validation {
  constructor(name, email){
    this.name = name;
    this.blank = false;
    this.email = email;
  }
}

class CCvalidation extends validation {
  constructor(name, email, cc, zip, cvv){
    super(name, email);
    this.cc = cc;
    this.zip = zip;
    this.cvv = cvv;
    this.blank = true;
  }

  notCC(){
    this.blank = true;
    this.cc = true;
    this.zip = true;
    this.cvv = true;
    validateCC();
  }
}

//Name validation
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

//email validation
const validateEmail = () => {
  if(emailVal.blank || emailVal.blank === null){
    $('#mailblank').hide();
    $('#mail').css("border-color", "");
  }else {
    if($('#mailblank').length === 0){
      $('#mail').after('<p id="mailblank">Please enter a valid email address. Ex. john@email.com</p>');
      $('#mailblank').css("color", "red");
    } else{
      $('#mailblank').show();
    }
    $('#mail').css("border-color", "red");
  }

  if(emailVal.email){
    $('#mailblank').hide();
    $('#mail').css("border-color", "");
  }else {
    if($('#mailblank').length === 0){
      $('#mail').after('<p id="mailblank">Please enter a valid email address. Ex. john@email.com</p>');
      $('#mailblank').css("color", "red");
    } else{
      $('#mailblank').show();
    }
    $('#mail').css("border-color", "red");
  }

  return (emailVal.blank && emailVal.email);
}

//activites validation
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

//cc fields validation
const validateCC = () => {
  if($('#payment').val() === null){
    if($('#paymentblank').length === 0){
      $('#payment').after('<p id="paymentblank">Please select a payment option.</p>');
      $('#paymentblank').css('color', 'red');
    }else {
      $('#paymentblank').show();
    }
  }else {
    $('#paymentblank').hide();
    if(ccVal.blank && ccVal.cc){
      $('#ccblank').hide();
      $('#cc-num').css('border-color', '');
    }else {
      if($('#ccblank').length === 0){
          $('#payment').after('<p id="ccblank">Please enter a valid credit card 13-16 digit number.</p>');
          $('#ccblank').css("color", "red");
      }else{
          $('#ccblank').show();
      }
      $('#cc-num').css('border-color', 'red');
    }
  }

    if(ccVal.zip){
      $('#zipval').hide();
      $('#zip').css('border-color', '');
    }else {
      if($('#zipval').length === 0){
          $('#payment').after('<p id="zipval">Please enter a valid 5 digit zip code.</p>');
          $('#zipval').css("color", "red");
      }else{
          $('#zipval').show();
      }
      $('#zip').css('border-color', 'red');
    }

    if(ccVal.cvv){
      $('#cvvval').hide();
      $('#cvv').css('border-color', '');
      }else {
      if($('#cvvval').length === 0){
          $('#payment').after('<p id="cvvval">Please enter a valid 3 digit cvv code.</p>');
          $('#cvvval').css("color", "red");
      }else{
          $('#cvvval').show();
      }
      $('#cvv').css('border-color', 'red');
    }

  return (ccVal.blank && ccVal.cc && ccVal.zip && ccVal.cvv);
}

//final validation function call
const finalValidation = () => {
  let val = [validateName(), validateEmail(), validateActivities(), validateCC()];
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
        $('button').before('<p id="finalval">The form is not complete. Please go back and ensure that all fields are filled out.</p>');
        $('#finalval').css("color", "red");
      }else{
        $('#finalval').show();
      }
      return false;
    }
});

//declaring validation variables to use in main file
const nameVal = new validation('nameVal');
const emailVal = new validation('emailVal', null);
const activitiesVal = new validation('activitiesVal');
const ccVal = new CCvalidation('ccVal', null, false, true, true);
