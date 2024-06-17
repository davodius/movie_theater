function saveSeats() {
  // Fetch booked seats from localstorage, if there are no seats then start a new array
  const bookedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];

  // Create new array for seats
  let newSeats = [...bookedSeats];

  // Fetches all selected boxes (seats)
  const checkBoxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );

  // look through checked boxes to add if needed
  for (let i = 0; i < checkBoxes.length; i++) {
    // Om sätet efter id inte finns med i arrayen ska det nya värdet läggas till.
    if (!newSeats.includes(checkBoxes[i].id)) {
      newSeats.push(checkBoxes[i].id);
    }
  }
  // Spara den updaterade listan av dem valda sätena till localStorage.
  localStorage.setItem("selectedSeats", JSON.stringify(newSeats));
}
