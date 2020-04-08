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
  //Display notes from local storage
  document.getElementById("notepad").addEventListener("onload", displayNote());

  function displayNote() {
      if(localStorage) {
          localStorage.getItem("savedNote");
      }
  }

  //Save note to local storage with button
  document.getElementById("savebtn").addEventListener("onclick", saveNotes());

  function saveNotes() {
        if(typeof(Storage) !=="undefined") {
            savedNote = document.getElementById("notepad").value;
            localStorage.setItem("savedNote", savedNote);
        }
  }