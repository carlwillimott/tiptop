(function(window, document, responsiveVoice) {

    window.onload = function() {

        var buttons = document.getElementsByClassName('button');

        if (buttons) {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function(e) {
                    var text = this.getAttribute('data-speech');
                    responsiveVoice.speak(text);
                });
            }
        }

    };

})(window, document, responsiveVoice);