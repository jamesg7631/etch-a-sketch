function createGrid() {
  let n = 16;
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

createGrid();
