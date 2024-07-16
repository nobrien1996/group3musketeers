//TARGET STORE API

//HTML elements
const fetchButton1 = document.getElementById('test_button1');
const fetchButton2 = document.getElementById('test_button2');
const fetchButton3 = document.getElementById('test_button3');
const fetchButton4 = document.getElementById('test_button4');
const item0 = document.getElementById('item1');
const item1 = document.getElementById('item2');
const item2 = document.getElementById('item3');
const item3 = document.getElementById('item4');


targetFetch1()
targetFetch2()
targetFetch3()
targetFetch4()

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
		//	console.log("firstItemImage", data.data.search.products[0].price.item.enrichment.images.primary_image_url);

			const listItem0 = document.createElement('li');
			listItem0.textContent = data.data.search.products[0].item.product_description.title;

			const listPrice0 = document.createElement('li');
			listPrice0.textContent = data.data.search.products[0].price.current_retail;

			const listImage0 = document.createElement('img');
			listImage0.setAttribute("src", data.data.search.products[0].item.enrichment.images.primary_image_url);
			
			//const listImg0 = document.createElement("img");
			//listImg0.setAttribute("src", "https://target.scene7.com/is/image/Target/GUEST_52e68c7e-814d-4391-b742-a98ad09f9737");
		
			item0.appendChild(listItem0);
			item0.appendChild(listPrice0);
			item0.appendChild(listImage0);
	});
};

//Target API item 2
function targetFetch2() {
	const url = 'https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '163120faf3msh6af389338066b79p1f41f3jsn520223d6927d',
			'x-rapidapi-host': 'target1.p.rapidapi.com'
		}
	};

//Item 1 fetch
	fetch(url, options)
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (data) {
				console.log(data);
			//for (let i=0; i<data.data.search.products.length; i++){
			for (let i=0; i<5; i++){
				
		//Item 1
		console.log("secondItemName", data.data.search.products[i].item.product_description.title);
		console.log("secondItemPrice", data.data.search.products[i].price.current_retail);
		
		const listItem1 = document.createElement('li');
		listItem1.textContent = data.data.search.products[i].item.product_description.title;

		const listPrice1 = document.createElement('li');
		listPrice1.textContent = data.data.search.products[i].price.current_retail;

		const listImage1 = document.createElement("img");
		listImage1.setAttribute("src", data.data.search.products[i].item.enrichment.images.primary_image_url);
			
		//listImg1.setAttribute("src", "https://target.scene7.com/is/image/Target/GUEST_20effe8b-9387-4f13-ac1c-bcc1ecbadc56");
		
		item1.appendChild(listItem1);
		item1.appendChild(listPrice1);
		item1.appendChild(listImage1);
			}
	});
};

//Target API item 2
function targetFetch3() {
	const url = 'https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '163120faf3msh6af389338066b79p1f41f3jsn520223d6927d',
			'x-rapidapi-host': 'target1.p.rapidapi.com'
		}
	};

//Item 2 fetch
	fetch(url, options)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);

		//Item 2
		console.log("thirdItemName", data.data.search.products[2].item.product_description.title);
		console.log("thirdItemPrice", data.data.search.products[2].price.current_retail);

		const listItem2 = document.createElement('li');
		listItem2.textContent = data.data.search.products[2].item.product_description.title;

		const listPrice2 = document.createElement('li');
		listPrice2.textContent = data.data.search.products[2].price.current_retail;
		
		item2.appendChild(listItem2);
		item2.appendChild(listPrice2);
	});
};

//Target API item 3
function targetFetch4() {
	const url = 'https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '163120faf3msh6af389338066b79p1f41f3jsn520223d6927d',
			'x-rapidapi-host': 'target1.p.rapidapi.com'
		}
	};

/*
Item 3 fetch
	fetch(url, options)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);

		//Item 3
		console.log("fourthItemName", data.data.search.products[3].item.product_description.title);
		console.log("fourthItemPrice", data.data.search.products[3].price.current_retail);

		const listItem3 = document.createElement('li');
		listItem3.textContent = data.data.search.products[3].item.product_description.title;

		const listPrice3 = document.createElement('li');
		listPrice3.textContent = data.data.search.products[3].price.current_retail;
		
		item3.appendChild(listItem3);
		item3.appendChild(listPrice3);
	});*/
};

