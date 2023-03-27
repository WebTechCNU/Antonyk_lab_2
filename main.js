const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

let arrayProducts = [
    {
        img: "assets/products/1.png",
        name: "1",
        description: "this is the 1st product"
    },
    {
        img: "assets/products/2.png",
        name: "2",
        description: "this is the 2st product"
    },
    {
        img: "assets/products/3.png",
        name: "3",
        description: "this is the 3st product"
    },
    {
        img: "assets/products/4.png",
        name: "4",
        description: "this is the 4st product"
    },
    {
        img: "assets/products/5.png",
        name: "5",
        description: "this is the 5st product"
    }
];

function getElements(){
    let container = document.querySelector("#container");
    let output = "";
    arrayProducts.forEach(element => {
        let elem = "<div class='card__item card__inner'><img src="+ element.img +" alt="+element.name+"> <span>"+element.name+" : "+element.description+"</span></div>"
        output += elem;
    });
    container.innerHTML = output;
}

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "assets/images/cross.png";
    } else {
        navBtnImg.src = "assets/images/hamburg.png";
    }
}