const homepage = function() {
    // DOM Elements
    const contentDiv = document.querySelector("#content");

    
    // Creating Elements
    // Homepage Elements
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("restaurant-image");
    const backgroundImage = document.createElement("img");
    backgroundImage.setAttribute("src", "https://i.ibb.co/PwyR90d/dmagazine.jpg");
    const centeredClass = document.createElement("div");
    centeredClass.classList.add("centered");
    const title = document.createElement("h2");
    title.textContent = "Antojito"
    const lineBreak = document.createElement("BR");
    const spanText = document.createElement("span");
    spanText.classList.add("description");
    spanText.innerText = "The best flavor in town";


    // Appending Elements to Each Other

    contentDiv.appendChild(imageDiv);
    imageDiv.appendChild(backgroundImage);
    imageDiv.appendChild(centeredClass);
    centeredClass.appendChild(title);
    centeredClass.appendChild(spanText);
}

export {homepage};