const contactpage = (() => {
    // DOM Elements
    const contentDiv = document.querySelector("#content");

    // Creating Elements
    // Container
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    // Page Header
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Contact Us";
    // Span Text
    const spanTag = document.createElement("span");
    spanTag.classList.add("contact");
    const imgTag = document.createElement("img");
    imgTag.classList.add("google-map");
    imgTag.src = "https://bit.ly/3nGoRIs";
    spanTag.textContent = "1122 East-West Highway Suite x/0 \r\n";
    spanTag.textContent += "West North, Texas \r\n";
    spanTag.textContent += "s111-222-3333";
    const lineBreak = document.createElement("br");
    // Appending Elements to Each Other
    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);
    containerDiv.appendChild(imgTag);
    containerDiv.appendChild(lineBreak);
    containerDiv.appendChild(spanTag);

});

export {contactpage}