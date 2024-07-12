//define varaibles

let renderData = document.querySelector(".renderData");
let renderCartData = document.querySelector(".renderCartData");

//get data from api

async function getData(){
    //const res = await fetch("https://fakestoreapi.com/products"); 
  //  const data = await res.json();

    //Target API item 1
function targetFetch1() {
	const url = 'https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '163120faf3msh6af389338066b79p1f41f3jsn520223d6927d',
			'x-rapidapi-host': 'target1.p.rapidapi.com'
		}
	};

//Item 0 fetch
	fetch(url, options)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);

			//Item 0
			console.log("firstItemName", data.data.search.products[0].item.product_description.title);
			console.log("firstItemPrice", data.data.search.products[0].price.current_retail);

			const listItem0 = document.createElement('li');
			listItem0.textContent = data.data.search.products[0].item.product_description.title;

			const listPrice0 = document.createElement('li');
			listPrice0.textContent = data.data.search.products[0].price.current_retail;
			
			item0.appendChild(listItem0);
			item0.appendChild(listPrice0);
	});
};


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