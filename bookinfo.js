document.addEventListener("DOMContentLoaded", function () {
  //get local storage and save to getboxes
  const getBoxes = JSON.parse(localStorage.getItem("selectedSeats"));
  // loop throught each elemnt in getboxes and create an append li for each element in local storage
  const ul = document.getElementById("selected-seats-list");

  getBoxes.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  });
});

//pop up window to confirm
function confirmation() {
  localStorage.removeItem("selectedSeats");
  alert("Booking is done, check your email.");
}
