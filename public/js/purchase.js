$(document).ready(function() {
  //init DateTimePickers
  //materialKit.initFormExtendedDatetimepickers();

  // Sliders Init
  //materialKit.initSliders();

  $("#purchase").on("click", function() {
    $.ajax({
      url: "history/purchase",
      type: "POST",
      beforeSend: function() {
        //console.log(this.data);
      },
      success: function(res) {
        window.location.href = res.redirect;
      }
    });
  });

  //   function scrollToDownload() {
  //     if ($(".section-download").length != 0) {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $(".section-download").offset().top
  //         },
  //         1000
  //       );
  //     }
  //   }
});
