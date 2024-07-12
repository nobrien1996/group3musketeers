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

	const data = await url.json();

//Item 0 fetch
	fetch(url, options)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
        })