$(function() {
  //fullpage option
  $('#fullpage').fullpage({
    autoScrolling: false,
    scrollHorizontally: true,
    lockAnchors : false,
    anchors:['first', 'second', 'third', 'fourth' , 'fifth'],
    navigation : false,
    navigationPosition :'right',
    sectionsColor : ['#1D3666', '#fff' , '#fff', '#fff' , '#fff'],
    sectionSeletor:'.section',
  });

  //서브메뉴 show, hide
  $('header .logo, .menu, .submenu, .submenu_bg').mouseover(function() {
    $('nav .menu>li>a').css({"color": "#000"}).delay(500);
    $('.submenu, .submenu_bg').stop(true).slideDown(500);
  });
  $('header .logo, .menu, .submenu, .submenu_bg').mouseout(function() {
      $('nav .menu>li>a').css({"color": "#eee"}).delay(500);
      $('.submenu, .submenu_bg').stop(true).slideUp(500);
  });

  //메인 슬라이드
  var mainSwiper = new Swiper('.mainslide', {
    effect : 'fade',
    autoplay: {delay: 4000},
    crossFade : false,
    loop: true, // 반복재생 여부
    slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 20, // 슬라이드 사이 여백
    // 페이저 버튼 사용자 설정
    pagination: {   //페이징 사용자 설정
      el: ".mainslide_pagination",   //페이징 태그 클래스 설정 
      type : 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        var number = ('0' + (index + 1)).slice(-2);
        return '<span class="' + className + '">' + number + "</span>";
      },
    },
    // nav 화살표 출력 시 추가
    navigation: {
      prevEl: '.swiper-prev',
      nextEl: '.swiper-next',
    }, 
  });

  //scroll activate  
  $(document).on("scroll", function() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 100) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  //제품 1번 옵션 선택시 2번 옵션 출력
  $("#option1").on("change", function () {
    var options = {
        "의약품 선택": ["효능별 선택"],
        "전문의약품": ["선택해주세요", "호흡기계", "항생제", "항바이러스제", "항진균제", 
                   "해열진통소염제", "소화기계", "순환기계", "당뇨병용제",
                   "비뇨기계", "항히스타민제", "구강용제", "골다공증치료제", 
                   "외용제", "스테로이드제", "정신신경용제", "외피용제"],
        "일반의약품": ["선택해주세요", "호흡기계", "해열진통제", "소화기용제", "외용제", "구강용제", "항히스타민제"],
        "노마제품": ["선택해주세요", "노마제품"]
    };
    var target = $("#option2");
    target.empty();
    $.each(options[this.value], function (index, value) {
        target.append($("<option></option>").attr("value", value).text(value));
    });
  });

  //제품 슬라이드
  $('.products_slide').slick({
    slide: 'div',
    slidesToShow : 1,
    slidesToScroll : 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay : true,
    autoplaySpeed: 15000,
  });

});
