$(document).ready(function() {
  $('.button').on('click', function() {

    $.get("https://lit-fortress-6467.herokuapp.com/object ", function(data) {
      console.log(data);
      for (var i = 0; i < 3; i++) {
        console.log(data.results[i]);
        console.log(data.results[i].cover_art);
        console.log(data.results[i].title);

        var j = Math.floor(Math.random() * (i + 1));
        data.results[i] = data.results[j];
        

        // data.results[0].cover_art.attr("src", Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/ghost_in_the_machine.jpg)
        // data.results[1].cover_art.attr("src",  /Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/ghost_in_the_machine.jpg)
        // data.results[2].cover_art.attr("src", /Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/the_division_bell.jpg)
        // data.results[3].cover_art.attr("src", /Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/thriller.jpg)
        // data.results[4].cover_art.attr("src", /Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/thriller.jpg)

        //$("#content").empty();
        var img = $('<img/>');
        let title= $("<h1></h1>");

        img.attr("src",  "/Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/" + data.results[j].cover_art);
        console.log("/Users/taniaroberts/Documents/Galvanize/Projects/Playlist/playlist/images/" + data.results[j].cover_art);
        // img.attr("src", data.results[j].cover_art);
        // img.attr("src", data.results[j].cover_art);

        title.text(data.results[j].title);
        // title.text(data.results[j].title);
        // title.text(data.results[j].title);

        $("#content").append(img);
        $("#content").append(title);

        $("#content").append(img);
        $("#content").append(title);

        $("#content").append(img);
        $("#content").append(title);
      }
    })
  })
})



//   var div = $("<div></div>");
//   div.addClass("box");
//   $("body").append(div);
//   }
//   });
// })
// })




// var keys = Object.keys(data.results.);
// var keys = [];
//  for (var key in  {
//      if (data.hasOwnProperty(key)) keys.push(key);
//  }
