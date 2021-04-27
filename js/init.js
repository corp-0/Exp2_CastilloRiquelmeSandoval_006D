(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel({dist: 0,padding: 0,fullWidth: true,indicator: false,duration: 100,});
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('select').formSelect();
    $('select').material_select();
    // for HTML5 "required" attribute
    $("select[required]").css({
      display: "inline",
      height: 0,
      padding: 0,
      width: 0
    });
    autoplay();
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 2500);
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space
