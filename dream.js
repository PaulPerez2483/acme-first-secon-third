const slots = ["first", "second", "third"];

const users = [
  { id: 1, name: "moe", slot: "first" },
  { id: 2, name: "larry", slot: "second" },
  { id: 3, name: "curly", slot: "third" },
  { id: 4, name: "lucy", slot: "third", selected: true }
];
let arrLi = [];

function insertData(obj) {
  let [first, second, third] = slots;
  let firstBox = document.getElementById(first);
  let secondBox = document.getElementById(second);
  let thirdBox = document.getElementById(third);
  console.log(firstBox, secondBox, thirdBox);
  obj.forEach(el => {
    if (el.slot === first) {
      firstBox.innerHTML += `<li id="${el.id}">${el.name}</li>`;
    } else if (el.slot === second) {
      secondBox.innerHTML += `<li id="${el.id}">${el.name}</li>`;
    } else if (el.slot === third) {
      if (el.selected) {
        thirdBox.innerHTML += `<li  class="orangeColor" id="${el.id}">${el.name}</li>`;
      } else {
        thirdBox.innerHTML += `<li id="${el.id}">${el.name}</li>`;
      }
    }
  });
}
insertData(users);

const buttons = document.getElementsByTagName("BUTTON");
console.log(buttons);

function selectIl() {
  const li = document.getElementsByTagName("LI");
  [...li].forEach(el => {
    el.addEventListener("click", function(ev) {
      if (ev.target.classList.contains("orangeColor")) {
        ev.target.classList.remove("orangeColor");
        // // arrLi.pop(ev.target.outerHTML)
        // let n= Number(ev.target.id);
        // for(let key in users) {
        //     if (users[key].id === n){
        //         users[key].selected = false;
        //     }
        // }
      } else {
        ev.target.classList.add("orangeColor");
        // // arrLi.push(ev.target.outerHTML)
        // let n= Number(ev.target.id);
        // for(let key in users) {
        //     if (users[key].id === n){
        //         users[key].selected = true;
        //     }
        // }
      }
    });
  });
}
selectIl();

function selectButtons(obj) {
  const buttons = document.getElementsByTagName("BUTTON");
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("third");

  [...buttons].forEach(el => {
    if (!el.classList.contains("disabled")) {
      if (el.classList.contains("first_right")) {
        el.addEventListener("click", function(ev) {
          [...first.children].forEach(e => {
            if (e.classList.contains("orangeColor")) {
              // console.log(e)
              document.getElementById("second").append((innerHTML = e));
            }
          });
        });
      }
      if (el.classList.contains("second_right")) {
        el.addEventListener("click", function() {
          [...second.children].forEach(el => {
            if (el.classList.contains("orangeColor")) {
              document.getElementById("third").append((innerHTML = el));
            }
          });
        });
      }
      if (el.classList.contains("second_left")) {
        el.addEventListener("click", function() {
          [...second.children].forEach(el => {
            if (el.classList.contains("orangeColor")) {
              document.getElementById("first").append((innerHTML = el));
            }
          });
        });
      }
      if (el.classList.contains("third_left")) {
        el.addEventListener("click", function() {
          [...third.children].forEach(el => {
            if (el.classList.contains("orangeColor")) {
              document.getElementById("second").append((innerHTML = el));
            }
          });
        });
      }
    }
  });
}
selectButtons(users);
