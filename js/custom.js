

// go up page button script

$(document).ready(function() {
  $(window).scroll(function() {
    $(this).scrollTop() >= 400 ? $('#up').show() : $('#up').hide();

    $('#up').click(function() {
      $(window).scrollTop(0);
    });
  });
});

// create menu button script

$(document).ready(function() {
  $(".menu").click(function() {
    $(".sidebar").css("inset-inline-start", "0px");
    function showMenu() {
      $(".sidebar").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,100% 100%,0% 100%)"
      );
      $(".menu").animate({ insetInlineEnd: "-100" }, 300);
      $(".logo").animate({ insetInlineStart: "400" }, 300);
    }
    setTimeout(showMenu, 100);
  });

  $(".contnet").click(function () {
    $(".sidebar").css("inset-inline-start", "0px");
    function showMenu() {
      $(".sidebar").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,100% 100%,0% 100%)"
      );
      $(".menu").animate({ insetInlineEnd: "-100" }, 300);
      $(".logo").animate({ insetInlineStart: "400" }, 300);
    }
    setTimeout(showMenu, 100);
  });

  $(".close").click(function() {
    $(".sidebar").css(
      "-webkit-clip-path",
      "polygon(0 0,0% 0,100% 100%,0% 100%)"
    );
    function hideMenu() {
      $(".sidebar").css("inset-inline-start", "-300px");
      $(".menu").animate({ insetInlineEnd: "50" }, 300);
      $(".logo").animate({ insetInlineStart: "10%" }, 300);
    }
    setTimeout(hideMenu, 300);

    function originalLayout() {
      $(".sidebar").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,0% 100%,0% 100%)"
      );
    }
    setTimeout(originalLayout, 600);
  });
});

// initialization of swipper slider

var swiper = new Swiper(".swiper-container", {
  speed: 3000,
  autoplay: {
    delay: 3000
  },
  effect: "fade",
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// initialization of wow library

new WOW().init();

// init owl carousel

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    itemsCustom: false,
    singleItem: false,
    itemsScaleUp: false,
    autoplayHoverPause: false,
    margin: 30,
    smartSpeed: 700,
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      500: { items: 2 },
      800: { items: 3 }
    }
  });
});


// header-2 script

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $("header.fixed-header").addClass("sticky");
    } else {
      $("header.fixed-header").removeClass("sticky");
    }
  });
});


// search bar animated width

$(document).ready(function(){
  $('.search-animate').click(function(){
  $('.search-animate, .search-bar').toggleClass('active');
  $('input[type=search]').focus();
  });
});

// message us fixed button

$(document).ready(function(){
  $('.message').click(function(e){
    e.preventDefault();
    $(this).fadeOut();
    $('.message-us textarea').focus();
    $('.message-us').css('transform', 'scale(1)');
    $('#close-message-box').click(function(){
      $('.message-us').css('transform', 'scale(0)');
      $('.message').fadeIn();
    });
  });
});

// prevent default for bell

$(document).ready(function(){
  $('.notification-bell').click(function(e) {
    e.preventDefault();
  })
});


// Created by @conmarap.

Array.prototype.search = function(elem) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] == elem) return i;
    }
    
    return -1;
};

var Multiselect = function(selector) {
    if(!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];

    (function(that) {
        that.events();
    })(this);
};


Multiselect.prototype = {
    open: function(that) {
        var target = $(that).parent().attr("data-target");

        // If we are not keeping track of this one's entries, then
        // start doing so.
        if(!this.selections) {
            this.selections = [ ];
        }

        $(this.selector + ".multiselect").toggleClass("active");
    },

    close: function() {
        $(this.selector + ".multiselect").removeClass("active");
    },

    events: function() {
        var that = this;

        $(document).on("click", that.selector + ".multiselect > .title", function(e) {
            if(e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect option", function(e) {
            var selection = $(this).attr("data-text");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if(io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect > .title > .close-icon", function(e) {
            that.clearSelections();
        });

        $(document).click(function(e) {
            if(e.target.className.indexOf("title") < 0) {
                if(e.target.className.indexOf("text") < 0) {
                    if(e.target.className.indexOf("-icon") < 0) {
                        if(e.target.className.indexOf("selected") < 0 ||
                           e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function() {
        var obj = $(this.selector + ".multiselect");

        if(this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function() {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
    },

    getSelections: function() {
        return this.selections;
    },

    setSelectionsString: function() {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect option");

        if(selects.length > 6) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 6);
            $(this.selector + ".multiselect > .title > .text")
                .text(_selects + " [...]");
        }
        else {
            $(this.selector + ".multiselect > .title > .text")
                .text(selects);
        }

        for(var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }

        for(var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for(var i = 0; i < opts.length; i++) {
                if($(opts[i]).attr("data-text") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function() {
        if(this.selections.length > 0)
            return this.selections.join(", ");
        else return "Select";
    },

    setSelections: function(arr) {
        if(!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};

$(document).ready(function() {
    var multi = new Multiselect("#countries");
});


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.firstElementChild.classList.toggle("active");
    if(this.firstElementChild.firstElementChild.classList.contains('fa-caret-down')){
      this.firstElementChild.firstElementChild.classList.remove('fa-caret-down');
      this.firstElementChild.firstElementChild.classList.add('fa-caret-up');
    }else{
      this.firstElementChild.firstElementChild.classList.remove('fa-caret-up');
      this.firstElementChild.firstElementChild.classList.add('fa-caret-down');
    }
    var dropdownContent = this.lastElementChild;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}