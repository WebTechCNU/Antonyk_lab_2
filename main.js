const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

let arrayProducts = [
    {
        img: "assets/products/1.png",
        name: "1",
        description: "this is the 1st product",
        type: "book"
    },
    {
        img: "assets/products/2.png",
        name: "2",
        description: "this is the 2st product",
        type: "electronics"
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
    let output = "<div class='row'>";
    let i = 0;
    arrayProducts.forEach(element => {
        let elem = "<div class='col-sm-4'><img class='img-fluid d-block' src="+ element.img +" alt="+element.name+"> <label>"+element.name+" : "+element.description+"</label></div>"
        if(i % 3 == 2){
            elem += "</div><div class='row'>"
        }
        i ++;
        output += elem;
    });
    output += "</div>";
    container.innerHTML = output;
}

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "assets/images/cross.png";
    } else {
        navBtnImg.src = "assets/images/hamburg.png";
    }
}