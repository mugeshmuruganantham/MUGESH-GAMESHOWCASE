function toggleDescription(card) {
  var description = card.querySelector('.card-description');
  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}