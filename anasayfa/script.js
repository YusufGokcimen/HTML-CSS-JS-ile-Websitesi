function search() {
  let filter = document.getElementById("find").value.toUpperCase();
  let item = document.querySelectorAll(".product");
  let l = document.getElementsByTagName("h3");
  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName("h3")[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

/*nav-bar*/

let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

/* tarih ve saat */

window.onload = function getTime() {
  var time = new Date();

  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  var day = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  month = month < 10 ? "0" + (month + 1) : moth;

  document.getElementById("hour").innerText = hour + ":";
  document.getElementById("minute").innerText = minute + ":";
  document.getElementById("second").innerText = second;

  document.getElementById("tarih").innerText = day + "/" + month + "/" + year;

  var inter = setInterval(getTime, 1000);
};
