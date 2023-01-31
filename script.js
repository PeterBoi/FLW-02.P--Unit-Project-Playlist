// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");
// button variable
let add = document.querySelector(".add");

// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let images = ['https://i.ytimg.com/vi/hLlNJfBS3T4/maxresdefault.jpg', 'https://img.youtube.com/vi/AjGkbFqi67c/0.jpg', 'https://i1.sndcdn.com/artworks-000080331953-unkpcp-t500x500.jpg', 'https://upload.wikimedia.org/wikipedia/en/6/60/Album_Julieta_Venegas_limon_y_sal_cover.jpg', 'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a1/71/e1/a171e1e8-845e-b2ff-e748-52545f4f80ed/0.jpg/600x600bf-60.jpg'];
let songNames = ['Mexico Lindo Y Querido', 'Lo Que Siento', 'La Chona', 'Limon Y Sal', 'Cielito Lindo'];
let artists = ['Vicente Fernadez', 'Cuco', 'Los Tucanes De Tijuana', 'Julieta Venegas', 'Angela Aguilar'];
let songLinks = ['https://www.youtube.com/watch?v=KfQzn081fes', 'https://www.youtube.com/watch?v=AjGkbFqi67c', 'https://www.youtube.com/watch?v=ULxcmMgsxf4', 'https://www.youtube.com/watch?v=IJ92gmhvZpM', 'https://www.youtube.com/watch?v=UP6Fc09GHQk'];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
// review later^^

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.

// task 16: update your `.push()` so the input object is added to your array of objects.

// task 17: update your loops based on your new array of objects.

function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let imageInput = image.value;
  console.log(imageInput);
  let songNameInput = songName.value;
  let artistInput = artist.value; 
  let songLinkInput = songLink.value;
  // task 10: use `.push()` to add each input value to the correct array.
  images.push(imageInput);
  songNames.push(songNameInput);
  artists.push(artistInput);
  songLinks.push(songLinkInput);
  

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
  images.forEach(function(link) {
    displayImage.insertAdjacentHTML('beforeend', `<img src='${link}'>`)
  });
  songNames.forEach(function(song) {
    displaySong.insertAdjacentHTML('beforeend', `<p>${song}</p>`)
  });
  artists.forEach(function(singer) {
    displayArtist.insertAdjacentHTML('beforeend', `<p>${singer}</p>`)
  });
  songLinks.forEach(function(url) {
    displayLink.insertAdjacentHTML('beforeend', `<h3>${url}</h3>`)
  });
}

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
