//TARGET STORE API

//const defined
const data = null;
const xhr = new XMLHttpRequest();

xhr.withCredentials = true;

//if function
xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

//api info
xhr.open('GET', 'https://target1.p.rapidapi.com/stores/get-details?location_id=911');
xhr.setRequestHeader('x-rapidapi-key', '163120faf3msh6af389338066b79p1f41f3jsn520223d6927d');
xhr.setRequestHeader('x-rapidapi-host', 'target1.p.rapidapi.com');

xhr.send(data);