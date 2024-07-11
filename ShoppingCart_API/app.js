//define varaibles

let renderData = document.querySelector(".renderData");
let renderCartData = document.querySelector(".renderCartData");

//get data from api

async function getData(){
    const res = await fetch("https://fakestoreapi.com/products"); 
    const data = await res.json();
    console.log(data)

    data.map((ele) => {
        let createImgEle = document.createElement("img");
        let createTitle = document.createElement("p");
        let createPriceEle = document.createElement("p");
        let btnEle = document.createElement("button");
        let btnText = document.createTextNode("Add to Cart");
        let createPriceText = document.createTextNode('Price : $${ele.price}');
        let createTextTitle = document.createTextNode(ele.title);
        createImgEle.setAttribute("src", ele.image);
        createImgEle.setAttribute("class", "myImages");
        createTitle.appendChild(createTextTitle);
        createPriceEle.appendChild(createPriceText);
        btnEle.appendChild(btnText);
        renderData.appendChild(createImgEle);
        renderData.appendChild(createTitle);
        renderData.appendChild(btnEle);
        renderData.appendChild(createPriceEle);

        function addToCart(img, price){
            let cartImgEle = document.createElement("img");
            let cartTrashBtn = document.createElement("i");
            cartTrashBtn.setAttribute("class", "fa-solid fa-trash");
            cartImgEle.setAttribute("src", img);
            cartImgEle.setAttribute("class", "cartImgElement");
            let cartPriceEle = document.createElement("p");
            let cartPriceText = document.createTextNode(price);
            cartPriceEle.appendChild(cartPriceText);

            renderCartData.appendChild(cartImgEle);
            renderCartData.appendChild(cartPriceEle);
            renderCartData.appendChild(cartTrashBtn);

            console.log("MyImage : "+ img)
            console.log("MyPrice : " + price)    
    }
    btnEle.addEventListener("click", ()=> addToCart(ele.image , ele.price))
    })
}

getData();