const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll(".container header nav a");
  navBar.forEach((item, index)=>{
    item.innerHTML=siteContent["nav"][`nav-item-${index+1}`];
  });
let cta = document.querySelector(".cta .cta-text h1");
  cta.innerHTML=siteContent["cta"]["h1"];

  document.querySelector(".cta .cta-text button").innerHTML=siteContent["cta"]["button"];

  document.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"]);
//creating a nodelist of nodes of everything in "main content"
  let main = document.querySelectorAll(".main-content .text-content h4, .main-content .text-content p");
 //creating an array of the content for "main-content"
  let content = Object.entries(siteContent["main-content"]).filter(item => item[0].includes("h4") || item[0].includes("content")).map(item => item[1]);
// assigning content where it belongs using forEach and index
  main.forEach((item, index) => item.innerHTML = content[index] );
   
  document.querySelector("#middle-img").setAttribute("src", siteContent["main-content"][["middle-img-src"]]);

let contact=document.querySelectorAll(".contact h4, .contact p");
let contactContent=Object.values(sitecontent["contact"]);
  contact.forEach((item,index)=>item.innerHTML=contactContent[index]);
//I cant figure out why my footer is not going in
  document.querySelector("footer p").innerHTML = 
          siteContent["footer"]["copyright"];

let moreNav = document.createElement("a");
    moreNav.setAttribute("href","#");
    moreNav.innerHTML="Appended Navigation!";

document.querySelector(".container header nav").append(moreNav);
// i do not think that my appended navigation is working properly either