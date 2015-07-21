//<!-- 제이쿼리 레이어 스라이딩 오픈 클로즈 -->
$(document).ready(function () {
    $(".toggle").click(function () {
        var id = $(this).attr("id");
        $("#" + id + "_slide").slideToggle();
    });
});
