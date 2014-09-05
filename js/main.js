/* -----------Options-------------- */

//Slider border-radius



   

//Slider border-size



/* ------------------------------------- */

(function (){

  //Переменные

      var create = $ ('.result-button'),
      bgColorInput = $ ('#bg-color'),
      brColorInput = $ ('#border-color'),
      btnText = $('.btn'),
      btnNewText = $('#button'),
      btnColorText = $ ('#text-color'),
      btnFont = $('#font'),
      cssCodeResultArea = $('#resultcss'),
      htmlCodeResultArea = $('#resulthtml');
      
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
            
         updateResult();  
    }


  });

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
           updateResult();
    }
    
});
      //изменение backgound-color у кнопки

      bgColorInput.on('change' , function (){
          var newColor = '#' + $(this).val();
          create.css({
            'background-color':  newColor 
          });
      updateResult();
      });

      //изменение border-color у кнопки

      brColorInput.on('change' , function (){
          var newColor = '#' + $(this).val();
          create.css({
            'border-color':  newColor 
          });
          updateResult();
      });

      //button-text

      btnText.on('keyup' , function(){
         btnNewText.text($(this).val());
         htmlArea();
      });

      //изменение text-color у текста кнопки

      btnColorText.on('change' , function (){
          var newColorText = '#' + $(this).val();
          create.css({
            'color':  newColorText 
          });
          updateResult();
      });

      //измение font-family у кнопки
      btnFont.on('change' , function (){
          var newFont = $(this).val();
          create.css({
            'font-family':  newFont
          });
          updateResult();
      });

     var updateResult = function() {

      var borderRad = create.css('border-radius'),
          borderSize = create.css('border-width'),
          fontFamily = create.css('font-family'),
          bgcolor = create.css('background-color'),
          brcolor = create.css('border-color'),
          textcolor = create.css('color');



      cssCodeResultArea.text(

          '.button {\n' +
            'font-family:'           + fontFamily + ';\n' +
            'background-color:'      + bgcolor + ';\n' +
            'border-color:'          + brcolor + ';\n' +
            'color:'                 + textcolor + ';\n' +
            '-webkit-border-radius:' + borderRad + ';\n' +
            '-moz-border-radius:'    + borderRad + ';\n' +
            'border-radius:'         + borderRad + ';\n' +
            'border-width:'          + borderSize + ';\n' +
            '};'
        );

     }
      
    updateResult();

    var htmlArea = function(){

      var text = $('.btn').val();

      htmlCodeResultArea.text(
          '<button class="create-button"> ' + text + ' </button>\n'
        );
    }

    htmlArea();

}());

//$(document).ready ( function(){
 
//$(".btn").keyup(function() {
        // $('#button').text($(".btn").val());
//});
 
//});