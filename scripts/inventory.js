let arr = JSON.parse(localStorage.getItem("products")) || [];

arr.map(function(elem,index){

let box = document.createElement("div");

let type = document.createElement("p");
type.innerText=elem.type;
type.setAttribute("id","type")

let desc = document.createElement("p");
desc.innerText=elem.desc;
desc.setAttribute("id","desc")

let price = document.createElement("p");
price.innerText=elem.price;
price.setAttribute("id","price")

let image = document.createElement("img");
image.setAttribute("id","image")
image.src=elem.image;

let remove = document.createElement("button");
remove.innerText="Remove Product";
remove.setAttribute("id","remove_product")
remove.addEventListener("click",function(){
    removeBtn(elem,index);
})

box.append(image,type,desc,price,remove);
document.querySelector("#all_products").append(box);

});


function removeBtn(elem,index){
    arr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload();
}

document.querySelector("#add_more_product").addEventListener("click",GoToMainPage);

function GoToMainPage(){
    window.location.href="index.html";
}
