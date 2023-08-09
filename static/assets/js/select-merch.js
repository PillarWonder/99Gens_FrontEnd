var bigimage = $("#owl-select-merch");
var thumbs = $("#thumbnails-pagination");
var clickedNum = 1;
var globalSettingsUrl;

var saveData = {};
var completed_count = [0, 0, 0, 0, 0, 0, 0];
var flags = [0, 0, 0, 0, 0, 0, 0];

var products = [
  "backpack", "hoodie", "unisex-sweatshirt", "tote-bag",
  "jigsaw-puzzle-520", "canvas-1824", "crop-tee-s", "gym-bag",
  "beanie", "premium-pillow", "joggers-women", "gaming-mouse-pad",
  "tank-top-women", "tough-iphone-case", "men-atheletic-t-shirt", "minimalist-backpack",
  "women-crew-neck-t-shirt", "duffle-bag", "men-windbreaker", "bomber-jacket",
  "one-piece-swimsuit", "unisex-track-pants", "unisex-wide-leg-pants",
  "long-sleeve-midi-dress", "womens-cropped-windbreaker"];

var product_urls = [
  "https://backpack.99gens-api.com/api/printful/create_task", "https://hoodie.99gens-api.com/api/printful/create_task",
  "https://sweatshirt.99gens-api.com/api/printful/create_task", "https://tote-bag.99gens-api.com/api/printful/create_task",
  "https://jigsaw-puzzle.99gens-api.com/api/printful/create_task", "https://canvas.99gens-api.com/api/printful/create_task",
  "https://crop-tee.99gens-api.com/api/printful/create_task", "https://gym-bag.99gens-api.com/api/printful/create_task",
  "https://beanie.99gens-api.com/api/printful/create_task", "https://premium-pillow.99gens-api.com/api/printful/create_task",
  "https://female-joggers.99gens-api.com/api/printful/create_task", "https://gaming-mouse.99gens-api.com/api/printful/create_task",
  "https://windbreaker.99gens-api.com/api/printful/create_task", "https://bomber-jacket.99gens-api.com/api/printful/create_task",
  "https://iphone-case.99gens-api.com/api/printful/create_task", "https://duffle-bag.99gens-api.com/api/printful/create_task",
  "https://min-backpack.99gens-api.com/api/printful/create_task", "https://men-athletic-shirt.99gens-api.com/api/printful/create_task",
  "https://women-crew-neck-tshirt.99gens-api.com/api/printful/create_task", "https://female-tank-top.99gens-api.com/api/printful/create_task",
  "https://one-piece-swimsuit.99gens-api.com/api/printful/create_task", "https://unisex-track-pants.99gens-api.com/api/printful/create_task",
  "https://unisex-wide-leg-pants.99gens-api.com/api/printful/create_task", "https://long-sleeve-midi-dress.99gens-api.com/api/printful/create_task",
  "https://womens-cropped-windbreaker.99gens-api.com/api/printful/create_task"];

var overPrintBack;

$(document).ready(function () {
  for (let i = 0; i < products.length; i++) {
    localStorage.setItem(products[i], "");
  }
  create_task_products(1);
});

$(document).on("click", ".owl-next", function (e) {
  let thumbnail_count = [];
  thumbnail_count = JSON.parse(localStorage.getItem("mergify"));
  var currentIndex = $("div.active").index();
  $("#thumbnails-pagination .selected").toggleClass("selected");
  $(`#thumbnails-pagination .box${currentIndex + 1}`).toggleClass("selected");
  if (currentIndex <= thumbnail_count.length) {
    clickedNum = currentIndex + 1;
    if (flags[clickedNum] == 0) {
      create_task_products(clickedNum);
    }
  }
});

$(document).on("click", ".owl-prev", function (e) {
  let thumbnail_count = [];
  thumbnail_count = JSON.parse(localStorage.getItem("mergify"));
  var currentIndex = $("div.active").index();
  $("#thumbnails-pagination .selected").toggleClass("selected");
  $(`#thumbnails-pagination .box${currentIndex + 1}`).toggleClass("selected");
  clickedNum = currentIndex + 1;
  if (clickedNum > 1) {
    if (flags[clickedNum] == 0) {
      create_task_products(clickedNum);
    }
  }
});

$(document).on("click", ".expand-btn", function (e) {
  let longClass = $(".expand-btn").parent().prev().prev().attr("class");
  let dialogTitle = $(".expand-btn").parent().prev().prev().find("#merchImages").attr('alt');
  const myArray = longClass.split(" ");

  overPrintBack = localStorage.getItem("item" + clickedNum + "_" + myArray[0]).substring(1);

  if (overPrintBack == "") {
  } else {
    let splitArray = overPrintBack.split(",");
    if (splitArray.length == 1) {
      document.getElementById("show-img").src = splitArray[0].substring(1).slice(0, -2);
      globalSettingsUrl = splitArray[0].substring(1).slice(0, -2);
    } else {
      document.getElementById("show-img").src = splitArray[0].substring(1).slice(0, -1);
      globalSettingsUrl = splitArray[0].substring(1).slice(0, -1);
    }
    document.getElementById("small-img-roll").innerHTML = "";
    if (myArray[0] == "hoodie") {
      for (let i = 0; i < 3; i++) {
        document.getElementById("small-img-roll").innerHTML += `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
    } else if (myArray[0] == "bomber-jacket") {
      for (let i = 0; i < 4; i++) {
        document.getElementById("small-img-roll").innerHTML += `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
    } else if (myArray[0] == "men-windbreaker") {
      for (let i = 0; i < 3; i++) {
        document.getElementById("small-img-roll").innerHTML += `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
      document.getElementById("small-img-roll").innerHTML += `<img id="img5" class="show-small-img" src=${splitArray[5]} alt="product-bag-1" />`;
    } else if (myArray[0] == "gym-bag") {
      for (let i = 0; i < 5; i++) {
        document.getElementById("small-img-roll").innerHTML += `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
    } else if (myArray[0] == "long-sleeve-midi-dress") {
      for (let i = 0; i < 2; i++) {
        document.getElementById("small-img-roll").innerHTML += `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
      for (let i = 4; i < 6; i++) {
        document.getElementById("small-img-roll").innerHTML += `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
    } else {
      for (let i = 0; i < splitArray.length; i++) {
        document.getElementById("small-img-roll").innerHTML += `<img id="img${i}" class="show-small-img" src=${splitArray[i]} alt="product-bag-1" />`;
      }
    }
  }

  $("#modal-heading-top .heading-top").html(`
    <h2>All-Over-Print ${dialogTitle}</h2>
    <div class="close-out">
      <div class="close" data-bs-dismiss="modal"><img src="../assets/img/icon-close-white.png" alt="icon-close-white" /></div>
    </div>
	`);
  $('#ex3').zoom({ on: 'click' });
});

$(document).on("click", "#product-carousel-slot .box", function (e) {
  e.preventDefault();
  $(this).toggleClass("selected");
  var orderNum = $("#product-carousel-slot .selected").length;
  // $("#page-header .heading-top").html(`
  //  <h2>Merchification Results</h2>
  //  <div class="results"><a href="#">Results (#000${orderNum})</a></div>`);
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

$(document).on("click", "#thumbnails-pagination .box", function (e, checkNum) {
  completed_count[clickedNum] = 0;
  $("#thumbnails-pagination .selected").toggleClass("selected");
  $(this).toggleClass("selected");
  clickedNum = $(this).find(".number").text();
  $("#owl-select-merch").trigger("to.owl.carousel", clickedNum - 1);
  if (flags[clickedNum] == 0) {
    create_task_products(clickedNum);
  }
});

$(document).on("click", "#small-img-roll .show-small-img", function (e, checkNum) {
  let selectID = $(this).attr("id");
  let val = selectID.substring(3);
  let splitArray = overPrintBack.split(",");
  if (val == splitArray.length - 1) {
    document.getElementById("show-img").src = splitArray[val].substring(1).slice(0, -2);
    globalSettingsUrl = splitArray[val].substring(1).slice(0, -2);

  } else {
    document.getElementById("show-img").src = splitArray[val].substring(1).slice(0, -1);
    globalSettingsUrl = splitArray[val].substring(1).slice(0, -1);
  }
  $('#ex3').zoom({ on: 'click' });
});

const delay = ms => new Promise(res => setTimeout(res, ms));

const addEntry = (myObject, key, value) => ({ ...myObject, [key]: value });

const add_value = (key, value) => {
  saveData.hasOwnProperty(key) ? saveData[key][Object.keys(saveData[key]).length] = value : saveData[key] = { "0": value };
};

function create_task_products(clickedNum) {
  clearLocalStorage();
  flags[clickedNum] = 1;
  var storedImages = JSON.parse(localStorage.getItem("mergify"));
  if (storedImages.length > clickedNum - 1) {
    let settings = new Array();
    let data_key = new Array();
    let data_id = new Array();
    let imgUrl = storedImages[clickedNum - 1].upscaled;
    let imgUrl_original = storedImages[clickedNum - 1].original;

    let temparr = localStorage.getItem("job_id");
    const myArray = temparr.split(",");
    for (let i = 0; i < 24; i++) {
      settings[i] = {
        url: product_urls[i],
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          image: imgUrl,
          original: imgUrl_original,
          id: myArray[clickedNum - 1],
          name: products[i],
        }),
      };
      data_key[i] = "";
      data_id[i] = "";

      $.ajax(settings[i]).done(function (response) {
        if (response && response.status) {
          const { result } = response.que;
          data_key[i] = result.task_key;
          data_id[i] = response.id;
          shopifyPublish(data_id[i], products[i], imgUrl_original);
          setTimeout(function () {
            redorectToBackPack(data_key[i], i, data_id[i], clickedNum);
          }, 5000);
        } else {
          return data_key[i];
        }
      }).catch((error) => {

      })
    }
  } else {

  }
}

async function redorectToBackPack(str, seq, data_id, screening_id) {
  let temparr = localStorage.getItem("job_id");
  const myArray = temparr.split(",");
  var settings = {
    url:
      "https://99gens-api.com/api/printful/status?task_key=" +
      str +
      "&id=" +
      data_id,
    method: "GET",
    timeout: 0,
    crossDomain: true,
  };
  let time = 0;

  while (time < 50) {
    time += 5;
    await delay(5000);
    let response_origin;
    await $.ajax(settings).done(function (response) {
      response_origin = response;
    }).catch((error) => {
    })
    const result = response_origin.result.mockups;
    const images = [];
    $.map(result, function (val, i) {
      images.push(val.mockup_url);
    });
    if (response_origin.result.status == "completed") {
      completed_count[screening_id]++;
      $(".item" + screening_id + " ." + products[seq] + " .merchImages").attr("src", response_origin.result.mockups[0].mockup_url);
      add_value(products[seq], images);
      localStorage.setItem("item" + screening_id + "_" + products[seq], JSON.stringify(images));
      break;
    }
  }

  if (completed_count[screening_id] == 24) {
    var Array1 = [];
    Array1 = JSON.parse(localStorage.getItem("mergify"));
    var save_thumbnail = Array1[screening_id - 1].original;
    completed_count[screening_id] = 0;
    var settings_back = {
      url: "http://localhost:8080/api/v1/carousels/save",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        carousel_uID: localStorage.getItem("carousel_uID"),
        carousel_created_time: localStorage.getItem("carousel_uID_time"),
        carousels: saveData,
        thumbnail: save_thumbnail,
        userEmail: localStorage.getItem("email")
      }),
    };
    $.ajax(settings_back).done((response) => {
    }).catch((error) => {
    })
    saveData = {};
  }
}

async function shopifyPublish(id_val, sku_name, imgUrl_original) {
  setting = {
    url: "https://shopify-publish.99gens-api.com/api/shopify/publish",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      id: id_val,
      SKUs: sku_name,
      image: imgUrl_original
    }),
  };
  let response_origin;
  await $.ajax(setting).done(function (response) {
    response_origin = response;
  }).catch(function (error) {
    console.log(error);
  })
}

async function clearLocalStorage() {
  for (let i = 1; i <= 6; i++) {
    for (let j = 0; j <= 23; j++) {
      localStorage.removeItem(`item${i}` + products[j], "");
    }
  }
}


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