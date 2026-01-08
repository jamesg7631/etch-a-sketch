function main() {
  const INITIAl_SIZE = 16;
  createGrid(INITIAl_SIZE);
  changeGridSize();
}

function changeGridSize() {
  const gridSizeInputField = document.querySelector(".change-grid-size-form");
  const changeGridSizeBtn = document.querySelector(".change-grid-size-btn");
  changeGridSizeBtn.addEventListener("click", () => {
    let size = parseInt(gridSizeInputField.value);
    if (isNaN(size) || size <= 0) {
      alert("Please enter a number greater than 0");
    } else if (size > 100) {
      alert("Maximum size is 100. Setting to 100 for you!");
      size = 100;
      gridSizeInputField.value = size;
      removeGrid();
      createGrid(size);
    } else {
      removeGrid();
      createGrid(size);
    }
  });
}

function removeGrid() {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = "";
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
  // Try mouseover and mouseenter so I can see the difference. Sounds like mouseenter is what I want
  gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-item")) {
      pixelateGridItem(e.target);
    }
  });
}

function pixelateGridItem(e) {
  e.classList.add("grid-item-visited");
}

main();
