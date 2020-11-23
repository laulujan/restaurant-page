const contactpage = (() => {
    // DOM Elements
    const contentDiv = document.querySelector("#content");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Contact Us";

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div")
    
    const par = document.createElement("p");
    par.textContent = "Calvario 234";
    const par1  = document.createElement("p");
    par1.textContent += "Durango, Dgo MX";
    const par2  = document.createElement("p");
    par2.textContent += "818-23-43";
    textDiv.appendChild(par);
    textDiv.appendChild(par1);
    textDiv.appendChild(par2);
    
    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);
    containerDiv.appendChild(textDiv);

});

export {contactpage}