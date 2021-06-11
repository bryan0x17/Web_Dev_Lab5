// JS file for Lab 5 Part B

// Takes the ID of the figcaption and toggles it's display value
function showCaption(id) {
    let caption = document.getElementById(id);
    if (caption.style.display === "none") {
        caption.style.display = "block";
      } else {
        caption.style.display = "none";
      }
}