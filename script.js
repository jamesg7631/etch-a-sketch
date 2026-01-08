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

function generateRandomHue(currentLightness = 0) {
  const hue = Math.random() * 360;
  const saturation = Math.random() * 100;
  const lightness = currentLightness + 10;
  // do i need a ; after$)?
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function convertRGBToHue(rgbString) {
  const removePrefix = rgbString.split("(");
  const removeSuffix = removePrefix.at(1).replace(")", "");
  const rgbListString = removeSuffix.split(",");
  const rgbListIntegers = rgbListString.map((value) => parseInt(value));
  console.log(`RGB Values: ${rgbListIntegers}`);
  const red = 255 / rgbListIntegers.at(0);
  const green = 255 / rgbListIntegers.at(1);
  const blue = 255 / rgbListIntegers.at(2);
  const rgbDict = {};
  rgbDict[red] = "red";
  rgbDict[green] = "green";
  rgbDict[blue] = "blue";
  maxValue = Math.max(red, green, blue);
  minValue = Math.min(red, green, blue);
  d = maxValue - minValue;

  let hue;
  if (d !== 0) {
    let color = rgbDict[maxValue];
    if (color === "red") {
      hue = 60 * (((green - blue) / d) % 6);
    } else if (color === "green") {
      hue = 60 * ((blue - green) / d + 2);
    } else if (color === "blue") {
      hue = 60 * ((red - green) / d + 4);
    }
  } else {
    hue = 0;
  }

  if (hue < 0) {
    hue += 360;
  }
  return hue;
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
  // e.classList.add("grid-item-visited");
  const actualColor = window.getComputedStyle(e).backgroundColor;
  const currentHue = convertRGBToHue(actualColor);
  const newHSL = generateRandomHue(currentHue);
  e.style.backgroundColor = newHSL;
}

main();
