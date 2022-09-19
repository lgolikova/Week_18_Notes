document.addEventListener("DOMContentLoaded", function(event) {
    let notes1 = "";
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (localStorage.getItem(key) != null) {
            notes1 += `${key}: ${localStorage.getItem(key)}<br/><br/>`;
        }
    }
    notes.innerHTML = notes1;

});

let date = document.querySelector("#date");
let note = document.querySelector("#note");
let btn = document.querySelector("#save");
let notes = document.querySelector(".notes");
let btnClear = document.querySelector("#clear");


btn.addEventListener("click", () => {
    if (localStorage.getItem(`${date.value}`) == null) {
        localStorage.setItem(`${date.value}`, `${note.value}`);
    }

    if (date.value == '') {
        notes.innerHTML += '';
    }
    else {
    notes.innerHTML += `${date.value}: ${note.value}<br/><br/>`;
    }

    date.value = '';
    note.value = '';

        
    // if (localStorage.getItem(date) == null) {
    //     localStorage.setItem(date, `$date.value`)
    // }
    // if (localStorage.getItem(note) == null) {
    //     localStorage.setItem(note, `$note.value`)
    // }
})

btnClear.addEventListener("click", () => {
    notes.innerHTML = '';
    localStorage.clear();

})

