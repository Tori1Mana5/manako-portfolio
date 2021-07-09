//メインコンテンツ部分スクロールでゆっくり表示
$(function(){
　$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 300){
            $(this).addClass('scrollin');
        }
    });
　});
});
//全体ロードしたらゆっくり表示する
$('head').append(
	'<style>body{display:none;}'
	);
$(window).on("load", function() {
	$('body').delay(350).fadeIn(2000);
});

$(function(){
	$('a[href^="#"').click(function(){
		var speed = 2000;	//ミリ秒で記述
		var adjust = 200;	//位置調整
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - adjust;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
