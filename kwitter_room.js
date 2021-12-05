//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDVzVyDzUnIjw3G2SyIItix12PWzKdh7dQ",
      authDomain: "social-website-7f896.firebaseapp.com",
      databaseURL: "https://social-website-7f896-default-rtdb.firebaseio.com",
      projectId: "social-website-7f896",
      storageBucket: "social-website-7f896.appspot.com",
      messagingSenderId: "119857130391",
      appId: "1:119857130391:web:165689f9cad3064af6f2d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        //Start code
                        console.log("Room Name - " + Room_names);
                        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                        document.getElementById("output").innerHTML += row;

                        //End code
                  });
            });
}
getData();

function addroom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


