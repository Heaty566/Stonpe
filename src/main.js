$(document).ready( () => {
  $('#btn-mobile').on("click", () => {
    $('#btn-mobile').toggleClass("dropdown");
    $('#navbar-mobile').slideToggle("slow");
  });
});

