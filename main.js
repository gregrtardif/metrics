var submit = document.querySelector("#submit");
var currentocc = document.querySelector("#currentocc");
var daysinmonth = document.querySelector("#daysinmonth");
var daysleft = document.querySelector("#daysleft");
var talkneeded = document.querySelector("#talkneeded");
var reset = document.querySelector("#reset");
var callsaday = document.querySelector("#callsaday");
var currentdph = document.querySelector("#currentdph");
var czechbox = document.querySelector("#czechbox");
var occ = 28;
var occtotime = 0.08;
var talkgoal = 2.24;
var dialgoal = 56;
var talktotal;
var dayssofar;
var talksofar;
var talksofartotal;
var difference;
var talkneed;
var callsneeded;

currentocc.addEventListener("change", function() {
  currentocc.textContent = currentocc.value;
  currentocc = Number(currentocc.value);
});
currentdph.addEventListener("change", function() {
  currentdph.textContent = currentdph.value;
  currentdph = Number(currentdph.value);
});
daysinmonth.addEventListener("change", function() {
  daysinmonth.textContent = daysinmonth.value;
  daysinmonth = Number(daysinmonth.value);
});
daysleft.addEventListener("change", function() {
  daysleft.textContent = daysleft.value;
  daysleft = Number(daysleft.value);
});

submit.addEventListener("click", function() {
  talkneed = (
    (60 *
      (daysinmonth * talkgoal -
        currentocc * occtotime * (daysinmonth - daysleft))) /
    daysleft
  ).toFixed(2);

  talkneeded.textContent = talkneed;
  callsneeded = (
    (daysinmonth * dialgoal - currentdph * 8 * (daysinmonth - daysleft)) /
    daysleft
  ).toFixed(2);
  callsaday.textContent = callsneeded;
});
reset.addEventListener("click", function() {
  window.location.reload();
});

function isChecked() {
  if (czechbox.checked) {
    document.querySelector(".sales").style.display = "none";
    document.querySelector(".retention").style.display = "flex";
    document.querySelector(".salesheader").style.color = "gray";
    document.querySelector(".retentionheader").style.color = "black";
  } else {
    document.querySelector(".sales").style.display = "flex";
    document.querySelector(".retention").style.display = "none";
    document.querySelector(".retentionheader").style.color = "gray";
    document.querySelector(".salesheader").style.color = "black";
  }
}
