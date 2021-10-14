class PrettyPalette {
  constructor() {
    this.colorDivs = document.querySelectorAll(".color");
    this.allDivsHexes = document.querySelectorAll(".color h2");
    this.generateBtn = document.querySelector(".generate");
    this.allLockAndAdjustIcons = document.querySelectorAll(".controls button");
    this.allSliders = document.querySelectorAll("input[type='range']");
    this.all15SliderInputs = document.querySelectorAll(".sliders input");
    this.allAdjusts = document.querySelectorAll(".adjust");
    this.allSlidersClose = document.querySelectorAll(".close-adjustment");
    this.allLocks = document.querySelectorAll(".lock");
    this.saveBtn = document.querySelector(".save");
    this.submitSaveBtn = document.querySelector(".submit-save");
    this.saveContainer = document.querySelector(".save-container");
    this.savePopup = document.querySelector(".save-popup");
    this.closeSave = document.querySelector(".close-save");
    this.library = document.querySelector(".library");
    this.libraryContainer = document.querySelector(".library-container");
    this.libraryPopup = document.querySelector(".library-popup");
    this.closeLibrary = document.querySelector(".close-library");
    this.saveInput = document.querySelector(".save-name");
    this.emptyBtn = document.querySelector(".empty");
    this.allHueSliders = document.querySelectorAll(".hue-input");
    this.allBrightnessSliders = document.querySelectorAll(".brightness-input");
    this.allSaturationSliders = document.querySelectorAll(".saturation-input");
    this.darkBtn = document.querySelector(".darkBtn");
    this.initialColors;
    this.savedPalette = [];
  }

  // EVENT LISTENERS-----------------------------------------------------------------------------------------------------

  eventListeners() {
    // Generate Button

    this.generateBtn.addEventListener("click", () => {
      this.applyColors();
    });

    // Copy To Clipboard

    this.allDivsHexes.forEach((hex) => {
      hex.addEventListener("click", () => {
        this.copyToClipboard(hex);
      });
    });

    // Slider close buttons

    this.allSlidersClose.forEach((closeBtn, index) => {
      closeBtn.addEventListener("click", (e) => {
        const sliders = document.querySelectorAll(".sliders");
        sliders[index].classList.toggle("active");
      });
    });

    //Save Button
    this.saveBtn.addEventListener("click", (e) => {
      this.saveContainer.classList.add("active");
      this.savePopup.classList.add("active");
    });
    this.closeSave.addEventListener("click", () => {
      this.saveContainer.classList.remove("active");
      this.savePopup.classList.remove("active");
    });
    this.submitSaveBtn.addEventListener("click", (e) => {
      this.savePalette();
    });

    // Library Button
    this.library.addEventListener("click", (e) => {
      this.libraryContainer.classList.add("active");
      this.libraryPopup.classList.add("active");
    });
    this.closeLibrary.addEventListener("click", () => {
      this.libraryContainer.classList.remove("active");
      this.libraryPopup.classList.remove("active");
    });

    this.colorDivs.forEach((div, index) => {
      div.addEventListener("change", () => {
        this.updateTextUi(index);
      });
    });

    //Handle Adjusts
    this.allAdjusts.forEach((adjustBtn, index) => {
      adjustBtn.addEventListener("click", (e) => {
        const sliders = document.querySelectorAll(".sliders");
        sliders[index].classList.toggle("active");
      });
    });

    //Handle locks
    this.allLocks.forEach((lock, index) => {
      lock.addEventListener("click", (e) => {
        this.handleLock(e, index);
      });
    });

    //Handle Empty Library
    this.emptyBtn.addEventListener("click", () => {
      this.emptyLibrary();
    });

    this.allSliders.forEach((slider) => {
      slider.addEventListener("input", (e) => {
        this.hslControls(e);
      });
    });

    // Dark mode button
    this.darkBtn.addEventListener("click", () => {
      if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    });
  }

  // FUNCTIONS---------------------------------------------------------------------------------------------------------------

  generateColors() {
    /* Generating colors manually
    const letters = "0123456789abcdef";
    let hash = "#";
    for (let i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;
    */
    return chroma.random().hex(); //using chroma library
  }

  applyColors() {
    this.initialColors = [];

    this.colorDivs.forEach((div, index) => {
      const hexText = div.children[0];
      const adjust = div.children[1].children[0];
      const lock = div.children[1].children[1];
      const randomColor = this.generateColors();

      // Add generated color to array
      if (div.classList.contains("locked")) {
        this.initialColors.push(hexText.innerText);
        return;
      } else {
        this.initialColors.push(randomColor);
      }
      // Set div background and hex text
      hexText.innerText = randomColor;
      div.style.background = randomColor;

      //contrast check
      this.checkTextIconContrast(randomColor, hexText, adjust, lock);

      //   Initialize slider color

      const eachDivHue = this.allHueSliders[index];
      const eachDivBrightness = this.allBrightnessSliders[index];
      const eachDivSaturation = this.allSaturationSliders[index];

      this.colorizeSliders(
        randomColor,
        eachDivHue,
        eachDivBrightness,
        eachDivSaturation
      );
    });

    //Reset Inputs
    this.resetInputs(this.initialColors);
  }

  checkTextIconContrast(color, text, adjust, lock) {
    const luminance = chroma(color).luminance();

    text.style.color = luminance > 0.5 ? "black" : "white";
    adjust.style.color = luminance > 0.5 ? "black" : "white";
    lock.style.color = luminance > 0.5 ? "black" : "white";
  }

  colorizeSliders(color, hue, brightness, saturation) {
    //   Scale Saturation here .s means saturation .l means brightness .h means hue hence hsl(hue,sat,bright)
    const noSat = chroma(color).set("hsl.s", 0);
    const fullSat = chroma(color).set("hsl.s", 1);
    const scaleSat = chroma.scale([noSat, chroma(color), fullSat]);

    // Brightness
    const midBright = chroma(color).set("hsl.l", 0.5);
    const scaleBright = chroma.scale(["black", midBright, "white"]);

    // Update Input colors
    saturation.style.backgroundImage = `linear-gradient(to right,${scaleSat(
      0
    )},${scaleSat(1)})`;

    brightness.style.backgroundImage = `linear-gradient(to right,${scaleBright(
      0.5
    )},${scaleBright(1)})`;

    hue.style.backgroundImage = `linear-gradient(to right,rgb(204,75,75),rgb(204,204,75),rgb(75,204,75),rgb(75,204,204),rgb(75,75,204),rgb(204,75,204),rgb(204,75,75))`;
  }

  hslControls(e) {
    const index =
      e.target.getAttribute("data-hue") ||
      e.target.getAttribute("data-bright") ||
      e.target.getAttribute("data-sat");

    //Getting each value in a single color div
    let slider = e.target.parentElement.querySelectorAll("input[type='range']");

    const [hue, brightness, saturation] = slider; //Extracting individual values

    const bgColor = this.initialColors[index];

    let color = chroma(bgColor)
      .set("hsl.s", saturation.value)
      .set("hsl.l", brightness.value)
      .set("hsl.h", hue.value);

    this.colorDivs[index].style.backgroundColor = color;

    //colorize input/sliders with movement if we change brightness saturation should be auto updated
    this.colorizeSliders(color, hue, brightness, saturation);
  }
  updateTextUi(index) {
    const currentDiv = this.colorDivs[index];
    const color = chroma(currentDiv.style.backgroundColor);
    const hexText = currentDiv.querySelector("h2");
    const adjust = currentDiv.children[1].children[0];
    const lock = currentDiv.children[1].children[1];
    hexText.innerText = color.hex();

    this.checkTextIconContrast(color, hexText, adjust, lock);
  }
  resetInputs(colorToReset) {
    this.all15SliderInputs.forEach((slider, index) => {
      if (slider.name === "hue") {
        const hueColor = colorToReset[slider.getAttribute("data-hue")];
        const hueValue = chroma(hueColor).hsl()[0]; // h=hue index 0
        slider.value = Math.floor(hueValue);
      }

      if (slider.name === "brightness") {
        const brightColor = colorToReset[slider.getAttribute("data-bright")];
        const brightValue = chroma(brightColor).hsl()[2]; //l=brightness index 2
        slider.value = Math.floor(brightValue * 100) / 100;
      }

      if (slider.name === "saturation") {
        const satColor = colorToReset[slider.getAttribute("data-sat")];
        const satValue = chroma(satColor).hsl()[1]; //s = saturation index 1

        slider.value = Math.floor(satValue * 100) / 100;
      }
    });
  }

  copyToClipboard(hex) {
    const element = document.createElement("textarea");
    element.value = hex.innerText;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);

    //popup Animation
    const popup = document.querySelector(".copy-container");
    const popupBox = popup.children[0];
    popup.classList.add("active");
    popupBox.classList.add("active");

    popup.addEventListener("transitionend", () => {
      popup.classList.remove("active");
      popupBox.classList.remove("active");
    });
    //can also remove the class by setTimeout
    // setTimeout(() => {
    //   popup.classList.remove("active");
    //   popupBox.classList.remove("active");
    // }, 1000);
  }

  handleLock(e, index) {
    this.colorDivs[index].classList.toggle("locked");
    if (this.colorDivs[index].classList.contains("locked")) {
      this.allLocks[index].innerHTML = `<i class="fas fa-lock"></i>`;
    }
    if (!this.colorDivs[index].classList.contains("locked")) {
      this.allLocks[index].innerHTML = `<i class="fas fa-lock-open"></i>`;
    }
  }
  savePalette(e) {
    this.saveContainer.classList.remove("active");
    this.savePopup.classList.remove("active");
    const name = this.saveInput.value;
    let colors = [];
    this.allDivsHexes.forEach((hex) => {
      colors.push(hex.innerText);
    });
    //Generate object
    let fetchedFromLocal;

    if (localStorage.getItem("palettes") === null) {
      fetchedFromLocal = "";
    } else {
      fetchedFromLocal = JSON.parse(localStorage.getItem("palettes"));
    }

    let paletteNum;

    if (fetchedFromLocal.length >= 0) {
      paletteNum = fetchedFromLocal.length;
    } else {
      paletteNum = this.savedPalette.length;
    }

    const savedObject = { name: name, colors: colors, Num: paletteNum }; //If name and value name is same we can just write name
    this.savedPalette.push(savedObject);

    //Save to Local storage
    this.saveToLocal(savedObject);
    this.saveInput.value = "";
    this.generateLibraryPalettes(savedObject, this.savedPalette);
  }

  generateLibraryPalettes(savedObject, savedPalette) {
    // Generate palette for library

    const palette = document.createElement("div");
    palette.classList.add("custom-palette");
    const title = document.createElement("h4");
    title.innerText = savedObject.name;
    const preview = document.createElement("div");
    preview.classList.add("small-preview");

    savedObject.colors.forEach((color) => {
      const smallDiv = document.createElement("div");
      smallDiv.style.backgroundColor = color;
      preview.appendChild(smallDiv);
    });

    const paletteBtn = document.createElement("button");

    paletteBtn.classList.add("pick-palette-btn");

    paletteBtn.classList.add(savedObject.Num);
    paletteBtn.innerText = "Select";

    paletteBtn.addEventListener("click", (e) => {
      this.libraryContainer.classList.remove("active");
      this.libraryPopup.classList.remove("active");
      const paletteIndex = e.target.classList[1];
      this.initialColors = [];
      savedPalette[paletteIndex].colors.forEach((color, index) => {
        this.initialColors.push(color);
        this.colorDivs[index].style.background = color;

        const text = this.colorDivs[index].children[0];
        const adjust = this.colorDivs[index].children[1].children[0];
        const lock = this.colorDivs[index].children[1].children[1];
        this.checkTextIconContrast(color, text, adjust, lock);
        this.updateTextUi(index);
      });
      this.resetInputs(savedPalette[paletteIndex].colors);
    });

    // Append to Library
    palette.appendChild(title);
    palette.appendChild(preview);
    palette.appendChild(paletteBtn);
    this.libraryPopup.appendChild(palette);
  }

  saveToLocal(obj) {
    let tempPalette;
    if (localStorage.getItem("palettes") === null) {
      tempPalette = [];
    } else {
      tempPalette = JSON.parse(localStorage.getItem("palettes"));
    }
    tempPalette.push(obj);
    localStorage.setItem("palettes", JSON.stringify(tempPalette));
  }

  getFromLocal() {
    let localPalettes;
    if (localStorage.getItem("palettes") === null) {
      localPalettes = [];
    } else {
      localPalettes = JSON.parse(localStorage.getItem("palettes"));
      this.savedPalette = [...localPalettes];
      localPalettes.forEach((obj) => {
        this.generateLibraryPalettes(obj, localPalettes);
      });
    }
  }

  emptyLibrary() {
    localStorage.clear();
    const divs = document.querySelectorAll(".custom-palette");
    divs.forEach((div) => {
      div.remove();
    });
  }
}

// OBJECT CREATION ----------------------------------------------------------------------------------------------------------

const colorPalette = new PrettyPalette();

colorPalette.applyColors();

colorPalette.getFromLocal();
colorPalette.eventListeners();
