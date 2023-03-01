// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");
// button variable
let add = document.querySelector(".add");
let clear = document.querySelector(".clear");

// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

// let images = ['https://i.ytimg.com/vi/hLlNJfBS3T4/maxresdefault.jpg', 'https://img.youtube.com/vi/AjGkbFqi67c/0.jpg', 'https://i1.sndcdn.com/artworks-000080331953-unkpcp-t500x500.jpg', 'https://upload.wikimedia.org/wikipedia/en/6/60/Album_Julieta_Venegas_limon_y_sal_cover.jpg', 'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a1/71/e1/a171e1e8-845e-b2ff-e748-52545f4f80ed/0.jpg/600x600bf-60.jpg'];
// let songNames = ['Mexico Lindo Y Querido', 'Lo Que Siento', 'La Chona', 'Limon Y Sal', 'Cielito Lindo'];
// let artists = ['Vicente Fernadez', 'Cuco', 'Los Tucanes De Tijuana', 'Julieta Venegas', 'Angela Aguilar'];
// let songLinks = ['https://www.youtube.com/watch?v=KfQzn081fes', 'https://www.youtube.com/watch?v=AjGkbFqi67c', 'https://www.youtube.com/watch?v=ULxcmMgsxf4', 'https://www.youtube.com/watch?v=IJ92gmhvZpM', 'https://www.youtube.com/watch?v=UP6Fc09GHQk'];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.

let Mexico_Lindo_Y_Querido;
let Lo_Que_Siento;
let La_Chona;
let Limon_Y_Sal;
let Cielito_Lindo;

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.

Mexico_Lindo_Y_Querido = {
  imageUrl: "https://i.ytimg.com/vi/hLlNJfBS3T4/maxresdefault.jpg",
  songName: "Mexico Lindo Y Querido",
  artist: "Vicente Fernadez",
  songLink: "https://www.youtube.com/watch?v=KfQzn081fes"
}
Lo_Que_Siento = {
  imageUrl: "https://img.youtube.com/vi/AjGkbFqi67c/0.jpg",
  songName: "Lo Que Siento",
  artist: "Cuco",
  songLink: "https://www.youtube.com/watch?v=AjGkbFqi67c"
}
La_Chona = {
  imageUrl: "https://i1.sndcdn.com/artworks-000080331953-unkpcp-t500x500.jpg",
  songName: "La Chona",
  artist: "Los Tucanes De TiJuana",
  songLink: "https://www.youtube.com/watch?v=ULxcmMgsxf4"
}
Limon_Y_Sal = {
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Album_Julieta_Venegas_limon_y_sal_cover.jpg",
  songName: "Limon Y Sal",
  artist: "Julieta Venegas",
  songLink: "https://www.youtube.com/watch?v=IJ92gmhvZpM"
}
Cielito_Lindo = {
  imageUrl: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a1/71/e1/a171e1e8-845e-b2ff-e748-52545f4f80ed/0.jpg/600x600bf-60.jpg",
  songName: "Cielito Lindo",
  artist: "Angela Aguilar",
  songLink: "https://www.youtube.com/watch?v=UP6Fc09GHQk"
}

// task 14: create an array that stores all of the objects.

let songList = [Mexico_Lindo_Y_Querido, Lo_Que_Siento, La_Chona, Limon_Y_Sal, Cielito_Lindo];

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.

// task 16: update your `.push()` so the input object is added to your array of objects.

// task 17: update your loops based on your new array of objects.

function addSongInfo() {
  let songInfoObj = {
    imageUrl: image.value,
    songName: songName.value,
    artist: artist.value,
    songLink: songLink.value
  }
  songList.push(songInfoObj);
  console.log(songInfoObj);
  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  // let imageInput = image.value;
  // console.log(imageInput);
  // let songNameInput = songName.value;
  // console.log(songNameInput);
  // let artistInput = artist.value;
  // console.log(artistInput);
  // let songLinkInput = songLink.value;
  // console.log(songLinkInput);
  // task 10: use `.push()` to add each input value to the correct array.
  // images.push(imageInput);
  // console.log(images);
  // console.log(images.length);
  // songNames.push(songNameInput);
  // console.log(songNames);
  // console.log(songNames.length);
  // artists.push(artistInput);
  // console.log(artists);
  // console.log(artists.length);
  // songLinks.push(songLinkInput);
  // console.log(songLinks);
  // console.log(songLinks.length);
}

/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}

function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  // image.forEach(function(link) {
  //   displayImage.insertAdjacentHTML('beforeend', `<p><img src='${link}'></p>`)
  // });
  // songName.forEach(function(song) {
  //   displaySong.insertAdjacentHTML('beforeend', `<p>${song}</p>`)
  // });
  // artist.forEach(function(singer) {
  //   displayArtist.insertAdjacentHTML('beforeend', `<p>${singer}</p>`)
  // });
  // for (let i = 0; i < songLink.length; i++) {
  //   displayLink.insertAdjacentHTML('beforeend', `<a href='${songLink[i]}'<p>Click here to listen</p></a>`)
  // };
  // songLinks.forEach(function(url) {
  //   displayLink.insertAdjacentHTML('beforeend', `<a href='${url}'<p>Click here to listen</p></a>`)
  // });
  
  songList.forEach(function(songList) {
    displayImage.insertAdjacentHTML('beforeend', `<p><img src='${songList.imageUrl}'></p>`)
  });
  songList.forEach(function(songList) {
    displaySong.insertAdjacentHTML('beforeend', `<p>${songList.songName}</p>`)
  });
  songList.forEach(function(songList) {
    displayArtist.insertAdjacentHTML('beforeend', `<p>${songList.artist}</p>`)
  });
  songList.forEach(function(songList) {
    displayLink.insertAdjacentHTML('beforeend', `<a href='${songList.songLink}'<p>Click here to listen</p></a>`)
  });
}
// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
};

clear.onclick = function() {
  emptyDisplay();
};
// function call to display stored songs
displaySongInfo();
