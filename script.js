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
				return response.json();
			})
			.then(function (data) {
				console.log(data);

		//Item 1
		console.log("secondItemName", data.data.search.products[1].item.product_description.title);
		console.log("secondItemPrice", data.data.search.products[1].price.current_retail);

		const listItem1 = document.createElement('li');
		listItem1.textContent = data.data.search.products[1].item.product_description.title;

		const listPrice1 = document.createElement('li');
		listPrice1.textContent = data.data.search.products[1].price.current_retail;
		
		item1.appendChild(listItem1);
		item1.appendChild(listPrice1);
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

//Item 3 fetch
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
	});
};