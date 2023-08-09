/***************************************
 * Search Art Using Lexica Search API *
****************************************/

var lexicaImages = [];
var lexicaImageIndex = 0;

$(document).on('ready', function () {
  $('.btn-loadmore').hide();
});

$(document).on('click', '.feature-links li', function (e) {
  e.preventDefault();
  $(this).addClass('active').hide();
  var newVal = $('.search-input').val() ? $('.search-input').val() + ' and ' + $(this).text() : $(this).text();
  $('.search-input').val(newVal);
  if ($('.feature-links li:not(.active)').length === 0) {
    $('.feature-links').hide();
  }
});

$(document).on('keyup', '.search-input', function (e) {
  if (e.key === "Enter") {
    searchArtOnLexica();
  }
});

$(document).on('click', '.btn-search', function (e) {
  searchArtOnLexica();
});

$(document).on('click', '.btn-loadmore', function (e) {
  if (lexicaImageIndex < 50) {
    lexicaImageIndex++;
    searchArtOnLexicaByImgID();
  } else {
    $(this).hide();
  }
});

function searchArtOnLexica() {
  var query = $('.search-input').val();
  if (!query) {
    $('.search-results').empty();
    return;
  }
  var api = `https://lexica.art/api/v1/search?q=${query}`;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(api, requestOptions)
    .then(response =>
      response.json()
    )
    .then(result => {
      if (result.images && result.images.length) {
        $('.search-results').empty();
        lexicaImages = result.images;
        lexicaImageIndex = 0;
        searchArtOnLexicaByImgID();
        $('.btn-loadmore').show();
      } else {
        $('.search-results').html(`
          <span>There is no search result.</span>
        `);
      }
    })
    .catch(error => {
      console.log('error: ', error);
    });
}

function searchArtOnLexicaByImgID() {
  if (!lexicaImages) {
    lexicaImageIndex = 0;
    return;
  }
  var query = lexicaImages[lexicaImageIndex].src;
  var api = `https://lexica.art/api/v1/search?q=${query}`;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  $('.loading-spin-container').show();
  fetch(api, requestOptions)
    .then(response =>
      response.json()
    )
    .then(result => {
      $('.loading-spin-container').hide();
      if (result.images && result.images.length) {
        renderSearchedArt(result.images);
      } else {

      }
    })
    .catch(error => {
      $('.loading-spin-container').hide();
      console.log('error: ', error);
    });
}

function renderSearchedArt(images) {
  var imgMax = images.length > 49 ? 49 : images.length;
  for (var i = 0; i < imgMax; i++) {
    $('.search-results').append(`
      <div class="search-art">
        <a class="light-elem box"
          href="${images[i].srcSmall}"
          title=""
          data-lcl-txt=""
          data-lcl-author=""
          data-lcl-thumb="${images[i].srcSmall}"
          data-id="${images[i].id}"
          data-src="${images[i].src}"
          data-prompt="${images[i].prompt}"
          data-promptid="${images[i].promptid}"
          >
          <div class="figure square-shape">
            <img class="art-img" src="${images[i].srcSmall}" alt="searched-art" />
          </div>
        </a>
      </div>
    `);
  }
  // 
  initLightBox();
  // 
  if (lexicaImageIndex === 50) {
    $('.btn-loadmore').hide();
  }
}

function initLightBox() {
  lc_lightbox('.light-elem', {
    wrap_class: 'lcl_fade_oc',
    gallery: true,
    thumb_attr: 'data-lcl-thumb',
    skin: 'light',
    show_title: false,
    show_descr: true,
    show_author: true,
    slideshow_time: 3000,
    tn_hidden: false,
  });
}

// 
$(document).on('click', '.search-art .light-elem', function () {
  var params = {
    index: $(this).index(),
    id: $(this).data('id'),
    src: $(this).data('src'),
    prompt: $(this).data('prompt'),
    promptid: $(this).data('promptid')
  };
  console.log('A - clicked the image item - ', params);
  console.log("This is the SRC", params.src);
  const merchifyArr = [];

  merchifyArr.push({
    id_val: 0,
    original: params.src,
    upscaled: params.src,
  });
  localStorage.setItem("mergify", JSON.stringify(merchifyArr));
  localStorage.setItem("job_id", ',,,,,');
});

function getImageDataInFullViewMode() {
  var selectedIndex = $('.lcl_sel_thumb').index();
  const merchifyArr = [];

  var that = $('.search-art .light-elem').get(selectedIndex);
  var params = {
    index: $(that).index(),
    id: $(that).data('id'),
    src: $(that).data('src'),
    prompt: $(that).data('prompt'),
    promptid: $(that).data('promptid')
  };
  console.log('B(Fullsreen mode) - choosed the image item - ', params);

  merchifyArr.push({
    id_val: 0,
    original: params.src,
    upscaled: params.src,
  });
  localStorage.setItem("mergify", JSON.stringify(merchifyArr));
  localStorage.setItem("job_id", ',,,,,');
}