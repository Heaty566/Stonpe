"use strict";

$(document).ready(function () {
  $('#btn-mobile').on("click", function () {
    $('#btn-mobile').toggleClass("dropdown");
    $('#navbar-mobile').slideToggle("slow");
  });
});