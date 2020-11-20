const homepage = function() {
    // DOM Elements
    const contentDiv = document.querySelector("#content");

    
    // Creating Elements
    // Homepage Elements
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("restaurant-image");
    const backgroundImage = document.createElement("img");
    backgroundImage.setAttribute("src", "https://bit.ly/3kNRKkc");
    const centeredClass = document.createElement("div");
    centeredClass.classList.add("centered");
    centeredClass.innerText = "Antojito";
    const lineBreak = document.createElement("BR");
    const spanText = document.createElement("span");
    spanText.classList.add("smaller-text");
    spanText.innerText = "Ipsum exercitation ea dolore est irure dolor laboris voluptate aute nostrud velit eu in.";


    // Appending Elements to Each Other

    contentDiv.appendChild(imageDiv);
    imageDiv.appendChild(backgroundImage);
    imageDiv.appendChild(centeredClass);
    centeredClass.appendChild(lineBreak);
    centeredClass.appendChild(spanText);
}

export {homepage};