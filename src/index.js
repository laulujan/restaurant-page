import {homepage} from "./modules/home";
import {gallery} from "./modules/gallery";
import {contactpage} from "./modules/contact";

const InitialLoad = (() => {

    window.onload = (event) => {
        createNavBar();
        homepage();
        addLinkEvents();
    }

    // Navigation Links
    const pages = ["Home", "Gallery", "Contact"];

    // DOM Elements
    const contentDiv = document.getElementById("content");
    

    // Creating Elements
    // Navigation Bar Elements
    const navbarDiv = document.createElement("div");
    navbarDiv.classList.add("navbar");
    // Function to create multiple nav links
    function createNavLink(page){
        let navLinkHref = document.createElement("a");
        navLinkHref.classList.add("nav-link");
        navLinkHref.setAttribute("href", "#");
        navLinkHref.innerText = page;
        navbarDiv.appendChild(navLinkHref);
    }
    function createNavBar() {
        for (let i = 0; i < pages.length; i++) {
            createNavLink(pages[i]);
        }
        // Appending Elements to Each Other
        contentDiv.appendChild(navbarDiv);
    }

    // CLearing Page Content
    function clearContent() {
        while (contentDiv.lastChild) {
            contentDiv.removeChild(contentDiv.lastChild);
        }
        while (navbarDiv.lastChild) {
            navbarDiv.removeChild(navbarDiv.lastChild);
        }
        removeLinkEvents();
    }

    // Navigation Logic
    function navSelection(page) {
        switch (page) {
            case 'Home':
              clearContent();
              createNavBar();
              homepage();
              addLinkEvents();
              break
            case 'Gallery':
              clearContent();
              createNavBar();
              gallery();
              addLinkEvents();
              break
            case 'Contact':
              clearContent();
              createNavBar();
              contactpage();
              addLinkEvents()
              break
            default:
              clear()
              createNavBar()
              addClickLinks()
          }
    }

    // Adding Event Listeners
    function addLinkEvents() {
        let navlinks = document.querySelectorAll(".nav-link");
        navlinks.forEach((link) => {
            link.addEventListener("click", function() {
                navSelection(link);
            })
        })
    }
    function removeLinkEvents() {
        let navlinks = document.querySelectorAll(".nav-link");
        navlinks.forEach((link) => {
            link.removeEventListener("click", function(){})
        });
    }


})();