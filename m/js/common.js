$(document).ready(function() {
  //<!-- 제이쿼리 레이어 스라이딩 오픈 클로즈 -->
  $(".toggle").click(function() {
    var id = $(this).attr("id");
    $("#" + id + "_slide").slideToggle();
  });

  // 탑버튼
  $(".C_totop").click(function() {
    $('body,html').animate({
      'scrollTop': 0
    }, 2000)
  });

  // 200스크롤 진행시 탑 버튼 보이게
  $ (window) .scroll (function() {
    var  value = $ ( this ) .scrollTop ();   // 스크롤 값을 취득

    if ( value > 200 ) {
      $(".C_totop").css("opacity","1");
    } else {
      $(".C_totop").css("opacity","0");
    }
  });



});
