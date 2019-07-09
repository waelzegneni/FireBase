var firebaseConfig = {
    apiKey: "AIzaSyAhxLeuqdi3z4RYNKzXQbNvUfqQn91RdbY",
    authDomain: "first-project-917d1.firebaseapp.com",
    databaseURL: "https://first-project-917d1.firebaseio.com",
    projectId: "first-project-917d1",
    storageBucket: "",
    messagingSenderId: "203184224081",
    appId: "1:203184224081:web:1b74b1b274650bb0"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database();










function submit() {

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    university = document.getElementById("university").value;
    course = document.getElementById("select").value;

    let data = {
        name: name,
        email: email,
        number: number,
        university: university,
        course: course
    }
    let ref = database.ref("myDataBase/" + university);

    ref.push(data);

}



document.getElementById("form-fieldset").addEventListener("submit", function (e) {
    e.preventDefault();
    submit();
})





