//Variables used on a global scope
let total = 0;

//Job Role
//#Displays other input when other is selected, else clears and hides othertitle field
$('#title').change(function (e){
  if(e.target.value === "other"){
      $('#other-title').show();
  }else {
    $('#other-title').val("");
    $('#other-title').hide();
  }
});

//Name validation check
$('#name').keyup(function (e){
  if($('#name').val().length === 0){
    nameVal.blank = false;
  }else {
    nameVal.blank = true;
  }
  validateName();
});

//T-Shirt
//#only display the color options that match the design selected in the "Design" menu
$('#design').change(function (e){
  $('#color option').each(function (){
    $(this).hide();
  });

  $('label[for=color]').show();
  $('#color').show();

  switch (e.target.value) {
    case "js puns":
      $('#color option[value=cornflowerblue]').show().prop('selected', true);
      $('#color option[value=darkslategrey]').show();
      $('#color option[value=gold]').show();
      break;
    case "heart js":
      $('#color option[value=tomato]').show().prop('selected', true);
      $('#color option[value=steelblue]').show();
      $('#color option[value=dimgrey]').show();
      break;
    default:
      $('label[for=color]').hide();
      $('#color').hide();
      //console.log("Value is '" + e.target.value + "'");
  }
});

//Activities
//#enables and disables options based on availability and options picked
//#calculates total
$('.activities input').change(function(e){
  if ($(this).prop('name') === "js-frameworks"){
      $('.activities input').each(function () {
          if ($(this).attr("name") === "express" && $(this).prop('disabled') === false){
              $(this).attr('disabled', true);
          }else if ($(this).attr('name') === "express"){
              $(this).attr('disabled', false);
          }
      });
  }
  if ($(this).prop('name') === "express"){
      $('.activities input').each(function () {
          if ($(this).attr("name") === "js-frameworks" && $(this).prop('disabled') === false){
              $(this).attr('disabled', true);
          }else if ($(this).attr('name') === "js-frameworks"){
              $(this).attr('disabled', false);
          }
      });
  }

  if ($(this).prop('name') === "js-libs"){
      $('.activities input').each(function () {
          if ($(this).attr("name") === "node" && $(this).prop('disabled') === false){
              $(this).attr('disabled', true);
          }else if ($(this).attr('name') === "node"){
              $(this).attr('disabled', false);
          }
      });
  }

  if ($(this).prop('name') === "node"){
      $('.activities input').each(function () {
          if ($(this).attr("name") === "js-libs" && $(this).prop('disabled') === false){
              $(this).attr('disabled', true);
          }else if ($(this).attr('name') === "js-libs"){
              $(this).attr('disabled', false);
          }
      });
  }

  //calculates totals based on activities selected
  total = 0;
  $('.activities input').each(function () {
      let activites = $(this).attr("name");
      if($(this).is(":checked")){
          switch (activites) {
              case 'all':
                  total += 200;
                  break;
              case 'js-frameworks':
                  total += 100;
                  break;
              case 'js-libs':
                  total += 100;
                  break;
              case 'express':
                  total += 100;
                  break;
              case 'node':
                  total += 100;
                  break;
              case 'build-tools':
                  total += 100;
                  break;
              case 'npm':
                  total += 100;
                  break;
          }
      }

      if (total === 0){
        activitiesVal.blank = false;
      }else{
        activitiesVal.blank = true;
      }

      validateActivities();
  });

  if($('#total').length === 0)
      $('.activities').append("<h3 id=\"total\">Total: $" + total + "</h3>");
  else{
      $('#total').text("Total: $" + total);
  }
});

//Payment
//#shows payment section depending on option select_method
$('#payment').change(function(e){
  switch (e.target.value) {
    case 'credit card':
      $('#credit-card').show();
      $('#credit-card').next().hide();
      $('#credit-card').next().next().hide();
      break;
    case 'paypal':
      $('#credit-card').hide();
      $('#credit-card').next().show();
      $('#credit-card').next().next().hide();
      break;
    case 'bitcoin':
      $('#credit-card').hide();
      $('#credit-card').next().hide();
      $('#credit-card').next().next().show();
      break;
  }
});

//#Focus name field on load
//#hides color options
//#disables initial select payment method option and payment sections
$(document).ready(function (){
  $('#name').focus();

  $('#other-title').hide();

  $('label[for=color]').hide();
  $('#color').hide();

  $('#payment option[value=select_method]').prop('disabled', true);
  $('#credit-card').hide();
  $('#credit-card').next().hide();
  $('#credit-card').next().next().hide();
});
