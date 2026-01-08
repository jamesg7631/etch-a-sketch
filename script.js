function main() {
  const INITIAl_SIZE = 16;
  createGrid(INITIAl_SIZE);
  const gridItemList = document.querySelectorAll(".grid-item");
  // Try mouseover and mouseenter so I can see the difference. Sounds like mouseenter is what I want
  gridItemList.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", (e) => pixelateGridItem(e.target));
  });
}

function createGrid(n) {
  const gridContainer = document.querySelector(".grid-container");
  let flexProperty = "1 1 ";
  const widthPercentage = (1 / n) * 100;
  flexProperty += widthPercentage + "%";
  for (let i = 0; i < n * n; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.style.flex = flexProperty;
    gridContainer.append(gridItem);
  }
}

function pixelateGridItem(e) {
  e.className = "grid-item-visited";
}

main();
