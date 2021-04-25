(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel({dist: 0,padding: 0,fullWidth: true,indicator: false,duration: 100,});
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 2500);
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space
