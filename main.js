function divCreator(width, height){
    const mainContainer = document.getElementById("mainDiv");
    mainContainer.style.display = "grid";
    mainContainer.style.width = "100vw";
    mainContainer.style.height = "100vh";
    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";
    mainContainer.style.flexWrap = "wrap";
    for (let i = 0; i < width; i++)
    {
        const widthDiv = document.createElement("div");
        widthDiv.style.display = "flex";
        widthDiv.style.width ="25%";
        mainContainer.appendChild(widthDiv);
        widthDiv.addEventListener("mouseenter", () => {
            widthDiv.style.backgroundColor = "black";
        })
        for (let j = 0; j < height; j++)
        {
            const heightDiv = document.createElement("div");
            heightDiv.style.display = "flex";
            heightDiv.style.width = "25%";
            mainContainer.appendChild(heightDiv)
            heightDiv.addEventListener("mouseenter", () => {
                heightDiv.style.backgroundColor = "black";
            })
            break;
            
        }
    }
}
divCreator(16,16);

