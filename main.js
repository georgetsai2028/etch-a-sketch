function divCreator(width, height){
    const mainContainer = document.getElementById("mainDiv");
    mainContainer.style.display = "flex";
    mainContainer.style.height = "100vh";
    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";
    mainContainer.style.flexWrap = "wrap";
    const totalDivs = width * height;
    const divWidth = 100 / width;
    for (let i = 0; i < totalDivs; i++)
    {
        const gridDiv = document.createElement("div");
        gridDiv.style.width = `${divWidth}%`;
        gridDiv.style.height = `${divWidth}vh`;
        gridDiv.textContent = i + 1;
        gridDiv.style.display = "flex";
        gridDiv.style.alignItems = "center";
        gridDiv.style.justifyContent = "center";
        mainContainer.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.style.backgroundColor = "black";
        })
    }
}
divCreator(16,16);
const outsideContainter = document.getElementById("outsideDiv");
outsideContainter.style.display = "flex";
outsideContainter.style.flexDirection = "column";
outsideContainter.style.margin = "1px";
outsideContainter.style.padding = "50px";
outsideContainter.style.border = "5px solid black";
outsideContainter.style.backgroundColor = "#FFA0A0";

const title = document.createElement("h1");
title.style.margin = "0 0 20px 0";
title.style.textAlign = "center";
title.textContent = "Etch-A-Sketch";
outsideContainter.appendChild(title);

const sizeInput = document.createElement("button");
sizeInput.textContent = "Choose Grid Size"
sizeInput.style.display = "flex";
title.appendChild(sizeInput);

sizeInput.addEventListener

const mainContainer = document.getElementById("mainDiv");
mainContainer.style.flex = "1";
outsideContainter.appendChild(mainContainer);


