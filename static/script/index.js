// Create account 2, profile picture 
var upload = function() {
    var uploadphoto = document.getElementById("uploadphoto");
    if (uploadphoto) {
      var img = document.createElement("img");
      img.src = "images/color.png";
      img.alt = "gebruiker";
      img.id = "output";
      uploadphoto.appendChild(img);
    }
  }
  // Bron: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
var loadFile = function(event) {
  // Asynchronously loading the image 
  var reader = new FileReader();
  //Starts reading the content from input type="file"
  reader.readAsDataURL(event.target.files[0]);
  // When something is loaded, call function:
  reader.onload = function() {
    // Search for basic image
    var output = document.getElementById('output');
    // Sets src attribute to the loaded image
    output.src = reader.result;
  };
}

// Create account 3, Choose interests
var loadFile1 = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output1 = document.getElementById('output1');
    output1.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

var loadFile2 = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output2 = document.getElementById('output2');
    output2.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
var loadFile3 = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output3 = document.getElementById('output3');
    output3.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
var loadFile4 = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output4 = document.getElementById('output4');
    output4.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
var loadFile5 = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output5 = document.getElementById('output5');
    output5.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

upload()
  //Bron: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

/* 
var remove = document.getElementById('js-remove')

if (remove) {
  remove.addEventListener('click', onremove)
}

function onremove(ev) {
  var node = ev.target
  var id = node.dataset.id
}

var res = new XMLHttpRequest()

res.open('DELETE', '/' + id) res.onload = onload res.send()

function onload() {
  if (res.status !== 200) {
    throw new Error('Could not delete!')
  }


  window.location = '/'
}

Bron: https://docs.google.com/presentation/d/137YTmMadaUNCJ2ksKHzU_NCZT-BIv3q9tGhXc38EZ3g/edit#slide=id.g4e3b0a74b9_1_1260
 */