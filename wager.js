const foodIds = document.querySelectorAll("[data-category]");
const Btn = document.querySelectorAll("button");
const containers = document.querySelectorAll(".dishes");
const breakfast = document.querySelectorAll("#breakfast");
const lunch = document.querySelectorAll("#lunch");
const shakes = document.querySelectorAll("#shakes");



// Add click event listeners to menu buttons
Btn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const menuBtn = e.currentTarget.dataset.category;
    console.log(menuBtn);

    // Show the selected container based on the menu button
    if (menuBtn === "breakfast") {
      showMenuItems(breakfast);
    } else if (menuBtn === "lunch") {
      showMenuItems(lunch);
    } else if (menuBtn === "shakes") {
      showMenuItems(shakes);
    } else {
      showMenuItems(containers);
    }
  });
});

function showMenuItems(menuItems) {
  // Hide all containers
  containers.forEach(function (item) {
    item.classList.add("fade");
  });
  // Show the selected menu items
  menuItems.forEach(function (item) {
    item.classList.remove("fade");
  });
}
