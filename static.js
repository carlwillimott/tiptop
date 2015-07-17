(function(window, document, $, responsiveVoice) {

    window.onload = function() {

        var setup = {

            init: function() {
                this.voices();
                this.buttons();
                this.switcher();
            },

            buttons: function() {

                var buttons = $('.button');

                if (!!buttons.length) {

                    buttons.on('click', function() {
                        responsiveVoice.speak($(this).data('speech'));
                    });

                }

            },

            switcher: function() {

                var switcher = $('#language-switcher');

                switcher.on('change', function() {
                    responsiveVoice.setDefaultVoice($(this).val());
                });


            },

            voices: function() {

                var voices = responsiveVoice.getVoices();

                var html = '';

                $.each(voices, function() {
                    var name = $(this)[0].name;
                    html += '<option value="' + name + '">' + name + '</option>';
                });

                var switcher = $('#language-switcher');

                if (!!switcher.length) {
                    switcher.html(html);
                }


            }

        };

        setup.init();

    };

})(window, document, jQuery, responsiveVoice);