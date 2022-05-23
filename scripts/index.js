//store the products array in localstorage as "products"

let arr= JSON.parse(localStorage.getItem("products")) || [];

function Product(type,desc,price,image){ // here we store details into the new object blue print

    this.type=type,
    this.desc=desc,
    this.price=price,
    this.image=image
};

document.querySelector("#add_product").addEventListener("click",addProduct)

function addProduct(){
    event.preventDefault();
    let type =document.querySelector("#type").value;
    let desc =document.querySelector("#desc").value;
    let price =document.querySelector("#price").value;
    let image =document.querySelector("#image").value;


    let p1 = new Product(type,desc,price,image);

    arr.push(p1);
    console.log(arr);
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload();
}

document.querySelector("#show_products").addEventListener("click",openeProd);

function openeProd(){
    window.location.href="inventory.html";
}