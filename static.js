(function(window, document, $, responsiveVoice) {

    window.onload = function() {

        var buttons = $('.button');

        if (!!buttons.length) {

            buttons.on('click', function() {
                responsiveVoice.speak($(this).data('speech'));
            });

        }

        var switcher = $('#language-switcher');

        switcher.on('change', function() {
            responsiveVoice.setDefaultVoice($(this).val());
        });

    };

})(window, document, jQuery, responsiveVoice);