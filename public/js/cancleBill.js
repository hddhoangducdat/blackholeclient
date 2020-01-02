$(document).ready(function() {
  $(".deleteBill").on("click", function() {
    let billId = $(this).data("id");
    $.ajax({
      url: "history/cancleBill",
      type: "POST",
      data: {
        id: cardId
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
