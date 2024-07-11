//TARGET STORE API

const fetchButton = document.getElementById('test_button');
const batteries = document.getElementById('batteries');

function targetFetch() {
	const url = 'https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '163120faf3msh6af389338066b79p1f41f3jsn520223d6927d',
			'x-rapidapi-host': 'target1.p.rapidapi.com'
		}
	};

fetch(url, options)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data)
		console.log("secondConsoleLog", data.data.search.products[0].item.product_description.title)
		console.log("secondConsoleLog", data.data.search.products[0].price.current_retail)

		const listItem = document.createElement('li');
		listItem.textContent = data.data.search.products[0].item.product_description.title;

		const listPrice = document.createElement('li');
		listPrice.textContent = data.data.search.products[0].price.current_retail;
		
		batteries.appendChild(listItem);
		batteries.appendChild(listPrice);
	})
}

fetchButton.addEventListener('click', function ()


// for (let i = 0; i < data.length; i++) {
//   }