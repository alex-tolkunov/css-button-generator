(function() {

    var app = {
        initialize: function() {
            this.setUpListeners();
            this.setUpPlugins();
            this.updateCssResult(); 
            this.updateHtmlArea();
            

        },
        setUpListeners: function () {
          //Slider(Ползунки) border-radius and border-size
          $ ('#slider-border-radius').on('slide',$.proxy(this.borderRadChange, this));
          $ ('#slider-border-size').on('slide',$.proxy(this.borderSizeChange, this));
          //Color
          $ ('#bg-color').on('change',$.proxy(this.BgColor, this));
          $ ('#border-color').on('change',$.proxy(this.BrColor, this));
          //Font/Text
          $ ('#btn-text').on('keyup',$.proxy(this.BtnText, this));
          $ ('#text-color').on('change',$.proxy(this.BtnColorText, this));
          $ ('#font').on('change',$.proxy(this.BtnFontText, this));
          $ ('#slider-font-size').on('slide',$.proxy(this.FontSize, this)); 
          //HorSize and VerSize
          $ ('#slider-width').on('slide',$.proxy(this.SliderWidth, this));
          $ ('#slider-height').on('slide',$.proxy(this.SliderHeiht, this));
          //Валидация
          $ ('form').on('submit', app.submitForm);
          $ ('form').on('keydown', 'input', app.removeError);

        },

        //Кнопка
        create : $ ('.result-button'),
        input_email: $('#inputEmail'),
        
        //Slider UI border-radius
        setUpPlugins: function() {

            //Slider UI border-radius
            $( "#slider-border-radius" ).slider(
              {
              range: 'min',
              max: 25,
              min: 0,
              animate: "fast",
              });
            //Slider UI border-size
            $( "#slider-border-size" ).slider(
              {
              range: 'min',
              max: 6,
              min: 0,
              animate: "fast",
              });

              //Slider UI Height 
              $( "#slider-height" ).slider(
              {
              range: 'min',
              max: 30,
              min: 0,
              animate: "fast",
              });

              //Slider UI Width
              $( "#slider-width" ).slider(
              {
              range: 'min',
              max: 60,
              min: 0,
              animate: "fast",
              });

              //Slider UI Font-size
              $( '#slider-font-size' ).slider(
              {
              range: 'min',
              max: 46,
              min: 12,
              animate: "fast",
              slide: function( event, ui ) {
              $( "#amount" ).val( ui.value + ' px' );
            }
              });
              $( "#amount" ).val( $( '#slider-font-size' ).slider( "value" ) + ' px' );

            },

        submitForm : function(a) {
            a.preventDefault();
              
            var form = $(this);
                submitBtn = form.find('button[type="submit"]');

            if(app.validateForm(form) === false ) return false;

            submitBtn.attr('disabled', 'disabled');

            var str = form.serialize();
               
            
            $.ajax ({
              url : 'send.php',
              type: 'POST',
              data: str,
                    

            })
            .done(function(msg) {
                if(msg === "OK"){
                    //var result = "<div = 'bg-success'>Код твоей кнопки выслан на почту!</div>";
                    var obj = $('#msg').show();
                    var msg ='<div class="bg-success">Чекай почту!Код твоей кнопки уже там!=)</div>';
                    $('#msg').addClass('ok').removeClass('error');
                    //$('#inputEmail').addClass('ok').removeClass('error');
                    $('#msg').find('.msg_text').html(msg);
                    $('#inputEmail').val('');

                }else{
                    //form.html(msg);
                    var msg = '<div class="bg-danger">Неправильный email</div>';
                    $('#msg').addClass('error').removeClass('ok');
                    //$('#inputEmail').addClass('error').removeClass('ok');
                    $('#msg').find('.msg_text').html(msg);
                
                }
            })
            .always(function() {
                submitBtn.removeAttr('disabled');
            });
            
            
            
        },

        validateForm: function (form) {
            var inputs = form.find('input'),
            valid = true;

            inputs.tooltip('destroy');

            $.each(inputs, function(index, val) {
            var input = $(val),
                val = input.val(),
                formGroup = input.parents('.form-group'),
                label = formGroup.find('label').text().toLowerCase(),
                textError = 'Введите ' + label;

            if(val.length === 0) {
                formGroup.addClass('has-error').removeClass('has-success');
                input.tooltip({
                    trigger: 'manual',
                    placement: 'right',
                    title: textError
                }).tooltip('show');
                valid = false;
            }else{
                formGroup.addClass('has-success').removeClass('has-error');
              } 
              
              });
             return valid;
         },  

         removeError: function() {
            $(this).tooltip('destroy').parents('.form-group').removeClass('has-error');
         },

         
            
           
            

           

        //Изменение border-radius
        borderRadChange:function (e,ui) {
            this.create.css({
                'border-radius' : ui.value
            });
            this.updateCssResult();
        },

        //Изменение border-size
        borderSizeChange:function (e,ui) {
            this.create.css({
                'border-width' : ui.value
            });
        this.updateCssResult();
        },

        //Изменение высоты
        SliderHeiht:function (e,ui) {
            this.create.css({
                'padding-top' : ui.value,
                'padding-bottom' : ui.value,
            });
            this.updateCssResult();
        },

        //Изменение ширины
        SliderWidth:function (e,ui) {
            this.create.css({
                'padding-left' : ui.value,
                'padding-right' : ui.value,
            });
            this.updateCssResult();
        },

        //Изменение backgrounds-color
        BgColor: function() {
            var newColor = '#' + $('#bg-color').val();
            this.create.css({
                'background-color':  newColor 
            });
            this.updateCssResult();     
        },

        //Изменение border-color
        BrColor: function() {
            var newColor = '#' + $('#border-color').val();
            this.create.css({
                'border-color':  newColor 
            });
            this.updateCssResult();
        },

        //Изменение текста кнопки
        BtnText: function() {
            $('#button').text($('#btn-text').val());
            this.updateHtmlArea();
        },

        //Изменение цвета текста кнопки
        BtnColorText: function() {
            var newColorText = '#' + $('#text-color').val();
            this.create.css({
                'color':  newColorText 
            });
            this.updateCssResult();
        },

        //Изменение Font-family кнопки
        BtnFontText: function () {
            var newFont = $('#font').val();
            this.create.css({
                'font-family':  newFont
            });
            this.updateCssResult(); 
        },

        //Изменение Font-size
        FontSize:function (e,ui) {
            this.create.css({
                'font-size' : ui.value,
            });
            this.updateCssResult();
        },

        //Динамическое изменение css textarea 
        updateCssResult: function() {
            var borderRad = this.create.css('border-radius'),
                borderSize = this.create.css('border-width'),
                bgcolor = this.create.css('background-color'),
                brcolor = this.create.css('border-color'),
                textcolor = this.create.css('color'),
                Pad = this.create.css('padding-top') + ' ' + this.create.css('padding-left'),
                Font = this.create.css('font-size') + ' ' + this.create.css('font-family'),
                BrSizeSlider = $ ('#slider-border-size').slider('value'),
                BrRadSlider = $ ('#slider-border-radius').slider('value'),
                cssCodeResultArea = $('#resultcss');



                  if ( BrSizeSlider > 0) {
                      cssCodeResultArea.text(
                          '.create-button {\n' +
                          'font'                  + ': ' + Font + ';\n' +
                          'padding'               + ': ' + Pad + ';\n' +
                          'background-color'      + ': ' + bgcolor + ';\n' +
                          'border'                + ': ' + borderSize  +  ' solid '  + brcolor + ';\n' +
                          'color'                 + ': ' + textcolor + ';\n' +
                          '-webkit-border-radius' + ': ' + borderRad + ';\n' +
                          '-moz-border-radius'    + ': ' + borderRad + ';\n' +
                          'border-radius'         + ': ' + borderRad + ';\n' +
                          '};'
                      );
                    }

                   

                  else {
                      cssCodeResultArea.text(
                          '.create-button {\n' +
                          'font'                  + ': ' + Font + ';\n' +
                          'padding'               + ': ' + Pad + ';\n' +
                          'background-color'      + ': ' + bgcolor + ';\n' +
                          'color'                 + ': '   + textcolor + ';\n' +
                          '-webkit-border-radius' + ': ' + borderRad + ';\n' +
                          '-moz-border-radius'    + ': ' + borderRad + ';\n' +
                          'border-radius'         + ': ' + borderRad + ';\n' +
                          '};'
                          );
                      };

                   
                    


                      

        


        },

        //Динамическое изменение html textarea 
        updateHtmlArea: function(){
            var htmlCodeResultArea = $('#resulthtml'),
                text = $('#btn-text').val();

            htmlCodeResultArea.text(
                '<button class="create-button"> ' + text + ' </button>\n'
            );
        }
    }

    app.initialize();
})();

