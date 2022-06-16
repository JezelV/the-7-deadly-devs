$(function() {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});

//Efecto de maquina de escribir
const typeWriter = document.getElementById("typewriter-text");
const text = `Somos &lt;The 7 deadly devs/&gt;`;

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);

//Metodo de descarga para cv
if ( ! Modernizr.adownload ) {
    var $link = $('a');
   
      $link.each(function() {
          var $download = $(this).attr('download');
       
          if (typeof $download !== typeof undefined && $download !== false) {
        var $el = $('<div>').addClass('download-instruction').text('Right-click and select "Download Linked File"');
        $el.insertAfter($(this));
          }
   
      });
  }