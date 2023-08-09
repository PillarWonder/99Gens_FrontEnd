$(document).ready(function () {
  setTimeout(function () {
    var retrievedData = localStorage.getItem("thingtoShow");
    var dataArray = JSON.parse(retrievedData);
    document.getElementById("show-img").src = dataArray[0];
    var retrievedData = localStorage.getItem("thingtoShow");
    let myArray = retrievedData.split(",");
    for (let i = 0; i < myArray.length; i++) {
      let id = "img" + `${i+1}`;
      document.getElementById(id).src = dataArray[i];
    }
  }, 100);
});

$(document).on("click", "#small-img-roll .show-small-img", function (e, checkNum) {
  let selectID = $(this).attr("id");
  let val = selectID.substring(3);
  changesrc111(val);
});

function changesrc111(num) {
  var retrievedData = localStorage.getItem("thingtoShow");
  var dataArray = JSON.parse(retrievedData);
  document.getElementById("show-img").src = dataArray[num-1];
};

function changesrc(_src) {
  document.getElementById("show-img").src = _src;
}
