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

   

/* ------------------------------------- */

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

(function (){
      var create = $ ('.result-button'),
      bgColorInput = $ ('#bg-color');
     


      bgColorInput.on('change' , function (){
          var newColor = '#' + $(this).val();
          create.css({
            'background-color':  newColor 
          });

          console.log(newColor)
      });


}());




   