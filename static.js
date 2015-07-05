(function(window, document) {

    window.onload = function() {

        var buttons = document.getElementsByClassName('button');

        if (buttons) {

            for (var i = 0; i < buttons.length; i++) {

                buttons[i].addEventListener('click', function(e) {
                    alert("click");
                });

            }

        }

    };

})(window, document);