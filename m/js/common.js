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
  })

  var spotarr = [];
  $('body section').each(function(i, e) {
    spotarr.push($(e).offset().top)
  })

  $(window).scroll(function() {
    var sct = $(window).scrollTop()
    $('body section').each(function(i, e) {
      bg(sct)
    })
  })

  $(window).trigger('scroll')

  function bg(x) {
    if (x > 200) {
      $('.C_totop').css({
        'opacity': '1'
      })
    } else {
      $('.C_totop').css({
        'opacity': '0'
      })
    }
  }

}); //제이쿼리끝
