/* -----------Options-------------- */

//Slider border-radius

$(function() {
    $( "#slider-border-radius" ).slider(
        {
            min: 0,
            max: 20,
            range: 'min',
            change: setInputsFromSlider,
            slide: setInputsFromSlider,
            stop: setInputsFromSlider
        },
        'value'
      );

        var btnBorderRadius = document.getElementsByClassName('result-button');
        style = btnBorderRadius[0].style;

    function setInputsFromSlider (event, ui) {
        var val = $('#slider-border-radius').slider('value');
            style.borderRadius = val + 'px';
            style.webkitBorderRadius = val + 'px';
            style.mozBorderRadius = val + 'px';
    }
  });

   

//Slider border-size

$(function() {
    $( "#slider-border-size" ).slider(
        {
            min: 0,
            max: 6,
            range: 'min',
            change: setInputsFromSlider,
            slide: setInputsFromSlider,
            stop: setInputsFromSlider
        },
        'value'
      );

    var btnBorderWidth = document.getElementsByClassName('result-button');
        style = btnBorderWidth[0].style;

    function setInputsFromSlider (event, ui) {
        var val = $('#slider-border-size').slider('value');
            style.borderWidth = val + 'px';
    }
});

/* ------------------------------------- */

(function (){

  //Переменные

      var create = $ ('.result-button'),
      bgColorInput = $ ('#bg-color'),
      brColorInput = $ ('#border-color'),
      btnText = $('.btn'),
      btnNewText = $('#button'),
      btnColorText =$ ('#text-color');
      
      //backgound-color

      bgColorInput.on('change' , function (){
          var newColor = '#' + $(this).val();
          create.css({
            'background-color':  newColor 
          });
      });

      //border-color

      brColorInput.on('change' , function (){
          var newColor = '#' + $(this).val();
          create.css({
            'border-color':  newColor 
          });
      });

      //button-text

      btnText.on('keyup' , function(){
         btnNewText.text($(this).val());
      });

      //button-text-color

      btnColorText.on('change' , function (){
          var newColorText = '#' + $(this).val();
          create.css({
            'color':  newColorText 
          });
      });

}());

//$(document).ready ( function(){
 
//$(".btn").keyup(function() {
        // $('#button').text($(".btn").val());
//});
 
//});