(function() {

    var app = {
        initialize: function() {
            this.setUpListeners();
            this.updateResult(); 
            this.setUpPlugins();
            this.setUpPluginsTwo();
            this.htmlArea();
        },
        setUpListeners: function () {
          //Slider(Ползунки)
          $ ('#slider-border-radius').on('slidechange',$.proxy(this.borderRadChange, this));
          $ ('#slider-border-size').on('slidechange',$.proxy(this.borderSizeChange, this));
          //Color
          $ ('#bg-color').on('change',$.proxy(this.BgColor, this));
          $ ('#border-color').on('change',$.proxy(this.BrColor, this));
          //Text
          $ ('#btn-text').on('keyup',$.proxy(this.BtnText, this));
          $ ('#text-color').on('change',$.proxy(this.BtnColorText, this));
          $ ('#font').on('change',$.proxy(this.BtnFontText, this)); 
        },

        //Кнопка
        create : $ ('.result-button'),

        //Slider UI border-radius
        setUpPlugins:function() {
            $( "#slider-border-radius" ).slider(
              {
              range: 'min',
              max: 20,
              min: 0,
              });
        },

        //Изменение border-radius
        borderRadChange:function (e,ui) {
            this.create.css({
                'border-radius' : ui.value
            });
            this.updateResult();
        },

        //Slider UI border-size
        setUpPluginsTwo:function() {
            $( "#slider-border-size" ).slider(
              {
              range: 'min',
              max: 6,
              min: 0,
              });
        },

        //Изменение border-size
        borderSizeChange:function (e,ui) {
            this.create.css({
                'border-width' : ui.value
            });
            this.updateResult();
        },

        //Изменение backgrouns-color
        BgColor: function() {
            var newColor = '#' + $('#bg-color').val();
            this.create.css({
                'background-color':  newColor 
            });
            this.updateResult();     
        },

        //Изменение border-color
        BrColor: function() {
            var newColor = '#' + $('#border-color').val();
            this.create.css({
                'border-color':  newColor 
            });
            this.updateResult();
        },

        //Изменение текста кнопки
        BtnText: function() {
            $('#button').text($('#btn-text').val());
            this.htmlArea();
        },

        //Изменение цвета текста кнопки
        BtnColorText: function() {
            var newColorText = '#' + $('#text-color').val();
            this.create.css({
                'color':  newColorText 
            });
            this.updateResult();
        },

        //Изменение шрифта кнопки
        BtnFontText: function () {
            var newFont = $('#font').val();
            this.create.css({
                'font-family':  newFont
            });
            this.updateResult(); 
        },

        //Динамическое изменение css textarea 
        updateResult: function() {
            var borderRad = this.create.css('border-radius'),
                borderSize = this.create.css('border-width'),
                fontFamily = this.create.css('font-family'),
                bgcolor = this.create.css('background-color'),
                brcolor = this.create.css('border-color'),
                textcolor = this.create.css('color'),
                cssCodeResultArea = $('#resultcss');

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

        },

        
        //Динамическое изменение html textarea 
        htmlArea: function(){
            var htmlCodeResultArea = $('#resulthtml'),
                text = $('.btn').val();

            htmlCodeResultArea.text(
                '<button class="create-button"> ' + text + ' </button>\n'
            );
        }


    }

    app.initialize();
})();

