//TARGET STORE API

//HTML elements
const fetchButton = document.getElementById('test_button');
const item0 = document.getElementById('item1');
const item1 = document.getElementById('item2');
const item2 = document.getElementById('item3');
const item3 = document.getElementById('item4');


//Target API info
function targetFetch() {
	const url = 'https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '163120faf3msh6af389338066b79p1f41f3jsn520223d6927d',
			'x-rapidapi-host': 'target1.p.rapidapi.com'
		}
	};

//Main info fetch
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

		//Item 1
		console.log("secondItemName", data.data.search.products[1].item.product_description.title);
		console.log("secondItemPrice", data.data.search.products[1].price.current_retail);

		const listItem1 = document.createElement('li');
		listItem1.textContent = data.data.search.products[1].item.product_description.title;

		const listPrice1 = document.createElement('li');
		listPrice1.textContent = data.data.search.products[1].price.current_retail;
		
		item1.appendChild(listItem1);
		item1.appendChild(listPrice1);

		//Item 2
		console.log("thirdItemName", data.data.search.products[2].item.product_description.title);
		console.log("thirdItemPrice", data.data.search.products[2].price.current_retail);

		const listItem2 = document.createElement('li');
		listItem3.textContent = data.data.search.products[2].item.product_description.title;

		const listPrice2 = document.createElement('li');
		listPrice3.textContent = data.data.search.products[2].price.current_retail;
		
		item2.appendChild(listItem2);
		item2.appendChild(listPrice2);

		//Item 3
		console.log("fourthItemName", data.data.search.products[3].item.product_description.title);
		console.log("fourthItemPrice", data.data.search.products[3].price.current_retail);

		const listItem3 = document.createElement('li');
		listItem.textContent = data.data.search.products[3].item.product_description.title;

		const listPrice3 = document.createElement('li');
		listPrice.textContent = data.data.search.products[3].price.current_retail;
		
		item3.appendChild(listItem3);
		item3.appendChild(listPrice3);
	})
};

fetchButton.addEventListener('click', function () {

});