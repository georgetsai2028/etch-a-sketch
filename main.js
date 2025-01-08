function divCreator(width, height){
    const mainContainer = document.getElementById("mainDiv");
    mainContainer.style.display = "flex";
    mainContainer.style.width = "100vw";
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
        mainContainer.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.style.backgroundColor = "black";
        })
    }
}
divCreator(16,16);

