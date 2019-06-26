var ser1 = document.querySelector('#ser1');
var ser2 = document.querySelector('#ser2');
var ser3 = document.querySelector('#ser3');
var ser4 = document.querySelector('#ser4');
var ser = document.getElementsByClassName('.serv-details');

function dispSer1() {
	ser1.style.display = 'block';
	ser2.style.display = 'none';
	ser3.style.display = 'none';
	ser4.style.display = 'none';
}

function dispSer2() {
	ser2.style.display = 'block';
	ser1.style.display = 'none';
	ser3.style.display = 'none';
	ser4.style.display = 'none';
}

function dispSer3() {
	ser3.style.display = 'block';
	ser1.style.display = 'none';
	ser2.style.display = 'none';
	ser4.style.display = 'none';
}

function dispSer4() {
	ser4.style.display = 'block';
	ser1.style.display = 'none';
	ser2.style.display = 'none';
	ser3.style.display = 'none';
}