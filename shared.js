var header = document.querySelector('header');
var toggleButton = document.querySelector('.toggle-button');
var navHolder = document.querySelector('.nav-holder');
var share = document.querySelector('.share');
var shareListContainer = document.querySelector('.share-list-container');
var shareSpan = document.querySelector('.share span');
// var fa = document.querySelector('.fa');



toggleButton.addEventListener('click', function() {
	navHolder.classList.toggle('open');
});

share.addEventListener('click', function() {
	shareListContainer.classList.toggle('open');
	share.classList.toggle('share-onclick');
	header.classList.toggle('header_share-onclick');
	shareSpan.classList.toggle('share_line-through');
});

// var portFilter = document.querySelector('.filter-button');
// var hidFilter = document.querySelector('.hid-filter');

// portFilter.addEventListener('click',function() {
// 	// hidFilter.classList.toggle('open');
// 	hidFilter.style.display = 'block';
// });






