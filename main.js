function divCreator(width, height){
    const mainContainer = document.getElementById("mainDiv");
    mainContainer.style.display = "flex";
    mainContainer.width = "100%";
    mainContainer.height = "100%";
    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";
    mainContainer.style.flexWrap = "wrap";
    for (let i = 0; i < width; i++)
    {
        const widthDiv = document.createElement("div");
        widthDiv.style.display = "flex";
        widthDiv.style.width ="25%";
        widthDiv.textContent = "um";
        widthDiv.style.aspectRatio = "1";
        mainContainer.appendChild(widthDiv);
        for (let j = 0; j < height; j++)
        {
            const heightDiv = document.createElement("div");
            heightDiv.style.display = "flex";
            heightDiv.style.width = "25%";
            heightDiv.textContent = "hi";
            mainContainer.appendChild(heightDiv)
            break;
            
        }
    }
}
divCreator(16,16);