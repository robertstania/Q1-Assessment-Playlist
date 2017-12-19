$(document).ready(function () {
  $.get('https://lit-fortress-6467.herokuapp.com/object', function (data) {
        console.log("data: ", data.results)
    for (let i = 0; i < 3; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      if(data.results[i] = data.results[j]) {
        var img = $('<img/>');
        img.attr("src", "./assets/images/" + data.results[j].cover_art);
        $("#cdList").append(img)[j];
      }
    }
  })
})
