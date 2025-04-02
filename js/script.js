$(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('active'); // ハンバーガーメニューの状態を切り替え
        $('#menu').toggleClass('hidden active'); // メニューの表示/非表示を切り替え
    });
    $(function () {
        // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
        $(".hamb").click(function () {
      
          // 現在のbodyタグのoverflowスタイルを確認
          if ($("body").css("overflow") === "hidden") {
      
            // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
            $("body").css({ height: "", overflow: "" });
      
          } else {
      
            // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
            $("body").css({ height: "100%", overflow: "hidden" });
      
          }
        });
      });
// スライダー
function initslider() {
        $('.slide').slick({
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 4000,
            arrows: false,
        });
    }

    function checkBreakPoint() {
        const w = $(window).width();
        if (w <= 480) {
            // スマホ向け
            if (!$('.kpbanner').hasClass('slick-initialized')) {
                $('.kpbanner').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 7000,
                });
            }
        } else {
            // スマホ以外の場合はスライダーを破棄
            if ($('.kpbanner').hasClass('slick-initialized')) {
                $('.kpbanner').slick('unslick');
            }
        }
    }
        // 初期化
        initslider();
        checkBreakPoint();
    
        // リサイズ時のチェック
        $(window).on('resize', function() {
            checkBreakPoint();
        });
        $(function () {
            const $pageTop = $("#js-pagetop");
          
            $(window).scroll(function () {
              if ($(window).scrollTop() > 1) {
                $pageTop.fadeIn(300).css('display', 'flex');
              } else {
                $pageTop.fadeOut(300);
              }
            });
          
            $pageTop.click(function () {
              $('html, body').animate({ scrollTop: 0 }, 300);
            });
          });
});