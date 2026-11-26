
let menus = [
  "腕立て伏せ 10回",
  "スクワット 10回",
  "腹筋 10回"
];

let records = [];

function showMenu() {
  document.getElementById("menuTitle").textContent =
    "今日の筋トレ";

  let list = document.getElementById("menu");
  list.innerHTML = "";

  for (let i = 0; i < menus.length; i++) {
    let li = document.createElement("li");

    li.textContent = menus[i];

    let btn = document.createElement("button");
    btn.textContent = "削除";

    btn.onclick = function() {
      menus.splice(i, 1);
      showMenu();
    };

    li.appendChild(btn);
    list.appendChild(li);
  }
}

function addMenu() {
  let input = document.getElementById("newMenu");

  if (input.value == "") {
    return;
  }

  menus.push(input.value);
  input.value = "";

  showMenu();
}

function complete() {
  records.push(new Date().toLocaleDateString());

  document.getElementById("result").textContent =
    "トレーニング完了！お疲れ様！";
}

function home() {
  document.getElementById("home").style.display = "block";
  document.getElementById("record").style.display = "none";
}

function record() {
  document.getElementById("home").style.display = "none";
  document.getElementById("record").style.display = "block";

  document.getElementById("recordList").textContent =
    records.join("、");
}

showMenu();
