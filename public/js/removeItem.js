$(document).ready(function() {
  $(".removeItem").on("click", function() {
    let productId = $(this).data("id");
    $.ajax({
      url: "cart/removeItem",
      type: "POST",
      data: {
        id: productId
      },
      beforeSend: function() {
        //console.log(this.data);
      },
      success: function(res) {
        window.location.href = res.redirect;
      }
    });
  });

  function scrollToDownload() {
    if ($(".section-download").length != 0) {
      $("html, body").animate(
        {
          scrollTop: $(".section-download").offset().top
        },
        1000
      );
    }
  }
});
