function divCreator(width, height){
    const mainContainer = document.getElementById("mainDiv");
    mainContainer.style.display = "flex";
    for (let i = 0; i < width; i++)
    {
        const widthDiv = document.createElement("div");
        widthDiv.style.width ="36px";
        widthDiv.style.height = "36px";
        widthDiv.textContent = "um";
        mainContainer.appendChild(widthDiv);
        for (let j = 0; j < height; j++)
        {
            const heightDiv = document.createElement("div");
            heightDiv.style.width = "36px";
            heightDiv.style.height = "36px";
            heightDiv.textContent = "hi";
            mainContainer.appendChild(heightDiv)
            break;
            
        }
    }
}
divCreator(16,16);