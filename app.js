$(document).ready(function() {
    $.get("https://lit-fortress-6467.herokuapp.com/object ", function(data) {
      console.log(data);
      for (var i = 0; i < 3; i++) {
        console.log(data.results[i]);
        console.log(data.results[i].cover_art);
        console.log(data.results[i].title);

        var j = Math.floor(Math.random() * (i + 1));
        data.results[i] = data.results[j];

        var img = $('<img/>');
        let title= $("<h1></h1>");

        img.attr("src",  "/Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/" + data.results[j].cover_art);
        console.log("/Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/" + data.results[j].cover_art);

        title.text(data.results[j].title);

        $("#content").append(img);
        $("#content").append(title);

        $("#content").append(img);
        $("#content").append(title);

        $("#content").append(img);
        $("#content").append(title);
      }
    })
  //})
})
