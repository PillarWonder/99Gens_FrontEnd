var bigimage = $("#owl-select-merch");
var thumbs = $("#thumbnails-pagination-1");
var clickedNum = 1;
var globalSettingsUrl;

var saveData = {};
var completed_count = 0;
var flags = [0, 0, 0, 0, 0, 0, 0];

var overPrintBackCreations;

$(document).on("click", ".owl-next", function (e) {
  let thumbnail_count = [];
  thumbnail_count = JSON.parse(localStorage.getItem("mergify"));
  var currentIndex = $("div.active").index();
  $("#thumbnails-pagination-1 .selected").toggleClass("selected");
  $(`#thumbnails-pagination-1 .box${currentIndex + 1}`).toggleClass("selected");
});

$(document).on("click", ".owl-prev", function (e) {
  let thumbnail_count = [];
  thumbnail_count = JSON.parse(localStorage.getItem("mergify"));
  var currentIndex = $("div.active").index();
  $("#thumbnails-pagination-1 .selected").toggleClass("selected");
  $(`#thumbnails-pagination-1 .box${currentIndex + 1}`).toggleClass("selected");
});

$(document).on("click", ".expand-btn", async function (e) {
  let itemClass = $(".expand-btn").parent().parent().parent().parent().parent().parent().attr("class");
  let itemId = itemClass.substring(5);
  let longClass = $(".expand-btn").parent().prev().prev().attr("class");
  let dialogTitle = $(".expand-btn").parent().prev().prev().find("#merchImages").attr('alt');
  const myArray = longClass.split(" ");
  overPrintBackCreations = localStorage.getItem(itemId + myArray[0]);
  if (myArray[0] == "hoodie") {
    if (overPrintBackCreations == null) {
    } else {
      let splitArray = overPrintBackCreations.split(",");
      document.getElementById("show-img").src = splitArray[0];
      document.getElementById("small-img-roll").innerHTML = "";
      for (let i = 0; i < 4; i++) {
        document.getElementById("small-img-roll").innerHTML +=
          `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
      globalSettingsUrl = splitArray[0];
    }
  } else if (myArray[0] == "men-windbreaker") {
    if (overPrintBackCreations == "") {
    } else {
      let splitArray = overPrintBackCreations.split(",");
      document.getElementById("show-img").src = splitArray[0];
      document.getElementById("small-img-roll").innerHTML = "";
      for (let i = 0; i < 3; i++) {
        document.getElementById("small-img-roll").innerHTML +=
          `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
      `<img id="img${5}" class="show-small-img" src=${splitArray[5]} alt="product-bag-1" />`;
      globalSettingsUrl = splitArray[0];
    }
  } else if (myArray[0] == "long-sleeve-midi-dress") {
    if (overPrintBackCreations == "") {
    } else {
      let splitArray = overPrintBackCreations.split(",");
      document.getElementById("show-img").src = splitArray[0];
      document.getElementById("small-img-roll").innerHTML = "";
      for (let i = 0; i < 2; i++) {
        document.getElementById("small-img-roll").innerHTML +=
          `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
      document.getElementById("small-img-roll").innerHTML += `<img id="img${4}" class="show-small-img" src=${splitArray[4]} alt="product-bag-1" />`;
      document.getElementById("small-img-roll").innerHTML += `<img id="img${5}" class="show-small-img" src=${splitArray[5]} alt="product-bag-1" />`;
      globalSettingsUrl = splitArray[0];
    }
  } else {
    if (overPrintBackCreations == null) {
    } else {
      let splitArray = overPrintBackCreations.split(",");
      document.getElementById("show-img").src = splitArray[0];
      document.getElementById("small-img-roll").innerHTML = "";
      for (let i = 0; i < splitArray.length; i++) {
        document.getElementById("small-img-roll").innerHTML +=
          `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
      globalSettingsUrl = splitArray[0];
    }

  }
  $('#ex3').zoom({ on: 'click' });

  $("#modal-heading-top .heading-top").html(`
    <h2>All-Over-Print ${dialogTitle}</h2>
    <div class="close-out">
      <div class="close" data-bs-dismiss="modal"><img src="../assets/img/icon-close-white.png" alt="icon-close-white" /></div>
    </div>
  `);
});


$(document).on("click", "#product-carousel-slot .box", function (e) {
  e.preventDefault();
  $(this).toggleClass("selected");
  var orderNum = $("#product-carousel-slot .selected").length;
  // $("#page-header .heading-top").html(`
  // <h2>Merchification Results</h2>
  // <div class="results"><a href="#">Results (#000${orderNum})</a></div>`);
  if ($(this).hasClass("selected")) {
    $(this)
      .find(".aside")
      .html(`<div class="number">${orderNum}</div> <a href="#select-merch" class="expand-btn" data-bs-toggle="modal">Expand</a>`);
  } else {
    var clickedNum = $(this).find(".number").text();
    $(this).find(".aside").empty();
    var selectedArts = $("#product-carousel-slot .selected");
    selectedArts.each(function () {
      var oldNum = Number($(this).find(".number").text());
      if (oldNum > clickedNum) {
        $(this)
          .find(".number")
          .text(Number(oldNum - 1));
      }
    });
  }
});

$(document).on("click", "#thumbnails-pagination-1 .box", function (e, checkNum) {
  completed_count = 0;
  $("#thumbnails-pagination-1 .selected").toggleClass("selected");
  $(this).toggleClass("selected");
  clickedNum = $(this).find(".number").text();
  $("#owl-select-merch").trigger("to.owl.carousel", clickedNum - 1);
  if (flags[clickedNum] == 0) {
  }
});

$(document).on("click", "#small-img-roll .show-small-img", function (e, checkNum) {
  let selectID = $(this).attr("id");
  let val = selectID.substring(3);
  let splitArray = overPrintBackCreations.split(",");
  document.getElementById("show-img").src = splitArray[val];
  globalSettingsUrl = splitArray[val];
  $('#ex3').zoom({ on: 'click' });
});


(function ($) {
  var defaults = {
    url: false,
    callback: false,
    target: false,
    duration: 120,
    on: 'mouseover', // other options: grab, click, toggle
    touch: true, // enables a touch fallback
    onZoomIn: false,
    onZoomOut: false,
    magnify: 1
  };

  // Core Zoom Logic, independent of event listeners.
  $.zoom = function (target, source, img, magnify) {
    var targetHeight,
      targetWidth,
      sourceHeight,
      sourceWidth,
      xRatio,
      yRatio,
      offset,
      $target = $(target),
      position = $target.css('position'),
      $source = $(source);

    // The parent element needs positioning so that the zoomed element can be correctly positioned within.
    target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
    target.style.overflow = 'hidden';
    img.style.width = img.style.height = '';

    $(img)
      .addClass('zoomImg')
      .css({
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        width: img.width * magnify,
        height: img.height * magnify,
        border: 'none',
        maxWidth: 'none',
        maxHeight: 'none'
      })
      .appendTo(target);

    return {
      init: function () {
        targetWidth = $target.outerWidth();
        targetHeight = $target.outerHeight();

        if (source === target) {
          sourceWidth = targetWidth;
          sourceHeight = targetHeight;
        } else {
          sourceWidth = $source.outerWidth();
          sourceHeight = $source.outerHeight();
        }

        xRatio = (img.width - targetWidth) / sourceWidth;
        yRatio = (img.height - targetHeight) / sourceHeight;

        offset = $source.offset();
      },
      move: function (e) {
        var left = (e.pageX - offset.left),
          top = (e.pageY - offset.top);

        top = Math.max(Math.min(top, sourceHeight), 0);
        left = Math.max(Math.min(left, sourceWidth), 0);

        img.style.left = (left * -xRatio) + 'px';
        img.style.top = (top * -yRatio) + 'px';
      }
    };
  };

  $.fn.zoom = function (options) {
    return this.each(function () {
      var
        settings = $.extend({}, defaults, options || {}),
        //target will display the zoomed image
        target = settings.target && $(settings.target)[0] || this,
        //source will provide zoom location info (thumbnail)
        source = this,
        $source = $(source),
        img = document.createElement('img'),
        $img = $(img),
        mousemove = 'mousemove.zoom',
        clicked = false,
        touched = false;
      settings.url = globalSettingsUrl;

      $source.one('zoom.destroy', function (position, overflow) {
        $source.off(".zoom");
        target.style.position = position;
        target.style.overflow = overflow;
        img.onload = null;
        $img.remove();
      }.bind(this, target.style.position, target.style.overflow));

      img.onload = function () {
        var zoom = $.zoom(target, source, img, settings.magnify);

        function start(e) {
          zoom.init();
          zoom.move(e);

          // Skip the fade-in for IE8 and lower since it chokes on fading-in
          // and changing position based on mousemovement at the same time.
          $img.stop()
            .fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
        }

        function stop() {
          $img.stop()
            .fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
        }

        // Mouse events
        if (settings.on === 'click') {
          $source.on('click.zoom',
            function (e) {
              if (clicked) {
                document.getElementById("ex3").style.cursor = "zoom-in";
                // bubble the event up to the document to trigger the unbind.
                return;
              } else {
                document.getElementById("ex3").style.cursor = "zoom-out";
                clicked = true;
                start(e);
                $(document).on(mousemove, zoom.move);
                $(document).one('click.zoom',
                  function () {
                    stop();
                    clicked = false;
                    $(document).off(mousemove, zoom.move);
                  }
                );
                return false;
              }
            }
          );
        }
        // Touch fallback
        if (settings.touch) {
          $source
            .on('touchstart.zoom', function (e) {
              e.preventDefault();
              if (touched) {
                touched = false;
                stop();
              } else {
                touched = true;
                start(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]);
              }
            })
            .on('touchmove.zoom', function (e) {
              e.preventDefault();
              zoom.move(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]);
            })
            .on('touchend.zoom', function (e) {
              e.preventDefault();
              if (touched) {
                touched = false;
                stop();
              }
            });
        }

        if ($.isFunction(settings.callback)) {
          settings.callback.call(img);
        }
      };

      img.setAttribute('role', 'presentation');
      img.alt = '';
      img.src = settings.url;
    });
  };

  $.fn.zoom.defaults = defaults;
}(window.jQuery));