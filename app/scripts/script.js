// DateTime Dsplay
function startTime() {
    var today = new Date();
    document.getElementById('datetime').innerHTML =
     today;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

// Function that starts the clock on page load
  document.getElementById("body").addEventListener("onload", startTime());

// Notepad Functions

// When window loads, execute getNote function
window.onload = getNote();

// add event handlers for saving and clearing the note
// Event listener for saving the notepad
document.getElementById('notepad').addEventListener('keyup', saveNote);

// Event listener for clearing the notepad
document.getElementById('clearbtn').addEventListener("click", clearNote);

// getnote function
  function getNote() {
     // Retrieve the JSON string
     var storedObj = localStorage.getItem("note");
     //parse the JSON string back to JS object
     var retrievedObj = JSON.parse(storedObj);
    // check to see if the retrieved note is equal to a blank string or not null or undefined
    if(retrievedObj === '' || retrievedObj !== null || retrievedObj == undefined) {

      // display contents of note
      document.getElementById('notepad').innerHTML = retrievedObj.note;

      // if the note is null set the note to a predefined string!
    } else if (retrievedObj === null) {
      
      //set the string
      retrievedObj = "Write a note here!";

      //put string into the notepad
      document.getElementById('notead').innerHTML = retrievedObj.note;
    } 
  }
// savenote function
  function saveNote() {
    //pull in the innerHTML of the note and set to a var
    var rawNote = document.getElementById('notepad').value;
    //create an object to hold the note data and key
    var rawNoteObj = {'note': rawNote};

    //convert the obj to JSON string and save it to storage
    localStorage.setItem("note", JSON.stringify(rawNoteObj));
  }
  //clearnote function
  function clearNote() {
    // clear local storage
    window.localStorage.clear();
    // reload the page
    window.location.reload();
    // set note to blank string
    rawNote = "";
    return false;
  }