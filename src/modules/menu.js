const menupage = function() {
    const menuItems = [
        {
            name: "Chilaquiles",
            desc: "Tortilla chips with your prefered protein(cheese, eggs or chicken), select your salsa: Chipotle, Poblano, Mole, Red or Green",
            img: "https://i.ibb.co/0ysrpSV/Photograher-Greg-Dupree-Prop-Stylist-Thom-Driver-Food-Stylist-Chelsea-Zimmer.jpg"
        },
        {
            name: "Tamales",
            desc: "Filled with Pork, Chicken, Corn, Poblano slices with cheese",
            img: "https://i.ibb.co/JycQ8xb/23645.jpg"
        },
        {
            name: "Pozole",
            desc: "Pork or chicken home made pozole",
            img: "https://i.ibb.co/Js01YCM/pozole-victor-protasio2.jpg"
        }
    ]

    // DOM Elements
    const contentDiv = document.querySelector("#content");

    
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Menu";

    
    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);

    // Iterating through menuItems to create each item and add to the DOM
    function addMenuItem(item) {
        let menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menu-items");
        containerDiv.appendChild(menuItemDiv);

        let itemName = document.createElement("h4");
        menuItemDiv.appendChild(itemName);
        itemName.innerText = menuItems[item].name;

        let itemDesc = document.createElement("span");
        menuItemDiv.appendChild(itemDesc);
        itemDesc.innerText = menuItems[item].desc;

        let itemImg = document.createElement("img");
        itemImg.classList.add("menu-img");
        menuItemDiv.appendChild(itemImg);
        itemImg.setAttribute("src", menuItems[item].img);
        
    }

    for (let i = 0; i < menuItems.length; i++) { 
        addMenuItem(i);
    }
    
}

export {menupage};