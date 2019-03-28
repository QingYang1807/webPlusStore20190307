//  $(".hot-product-banner").mousedown(function(){
// 	var X = $('#hot-product-slider').offset().left;
// 	position = position+50+'px';
// })()


document.addEventListener("scroll", function() {
	var scrollDis = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollDis >= 176) {
		document.querySelector('.head-bottom').classList.add('stick');
	} else {
		document.querySelector('.head-bottom').classList.remove('stick');
	}
});

/*五角星*/
$(function() {
	$(".owl-item ul li").hover(function() {
		$(this).addClass('hs');
		$(this).prevAll().addClass('hs');
	}, function() {
		$(this).removeClass('hs');
		$(this).prevAll().removeClass('hs');
	})

	$(".owl-item ul li").click(function() {
		$(this).addClass('cs');
		$(this).prevAll().addClass('cs');
		$(this).nextAll().removeClass('cs');
	})
})
/*
let col1 = document.querySelector('.category-menu-inner>ul>li:nth-child(1)');
let col2 = document.querySelector('.category-menu-inner>ul>li:nth-child(2)');
let col3 = document.querySelector('.category-menu-inner>ul>li:nth-child(3)');
col1.onmouseover = function() {
	let innerSub = col1.querySelector('.category-menu-inner-sub');
	innerSub.style.visibility = 'visible';
	innerSub.style.left = '100%';
}
col1.onmouseout = function() {
	let innerSub = col1.querySelector('.category-menu-inner-sub');
	innerSub.style.visibility = 'hidden';
	innerSub.style.left = '100%';
}

col2.onmouseover = function() {
	let innerSub = col2.querySelector('.category-menu-inner-sub');
	innerSub.style.visibility = 'visible';
	innerSub.style.left = '100%';
}
col2.onmouseout = function() {
	let innerSub = col2.querySelector('.category-menu-inner-sub');
	innerSub.style.visibility = 'hidden';
	innerSub.style.left = '100%';
}

col3.onmouseover = function() {
	let innerSub = col3.querySelector('.category-menu-inner-sub');
	innerSub.style.visibility = 'visible';
	innerSub.style.left = '100%';
}
col3.onmouseout = function() {
	let innerSub = col3.querySelector('.category-menu-inner-sub');
	innerSub.style.visibility = 'hidden';
	innerSub.style.left = '100%';
}
*/
/*
let co = document.querySelector('.categories-menu');
co.onclick = function() {
	let col = co.querySelector('.category-menu-inner');
	if (col.className == 'category-menu-inner') {
		col.classList.add('open');
	} else {
		col.classList.remove('open');
	}
}
}*/
/*
let c1 = document.querySelector('.main-menu>ul>li:nth-child(1)');
let c2 = document.querySelector('.main-menu>ul>li:nth-child(2)');
let c3 = document.querySelector('.main-menu>ul>li:nth-child(3)');
c1.addEventListener("mouseover", function() {
	c1.querySelector('.main-page-sub').style.transform = 'scaleY(1)';
});
c1.addEventListener("mouseout", function() {
	c1.querySelector('.main-page-sub').style.transform = 'scaleY(0)';
});

c2.addEventListener("mouseover", function() {
	c2.querySelector('.store-sub').style.transform = 'scaleY(1)';
});
c2.addEventListener("mouseout", function() {
	c2.querySelector('.store-sub').style.transform = 'scaleY(0)';
});

c3.addEventListener("mouseover", function() {
	c3.querySelector('.store-sub').style.transform = 'scaleY(1)';
});
c3.addEventListener("mouseout", function() {
	c3.querySelector('.store-sub').style.transform = 'scaleY(0)';
});*/
/*
let dl = document.getElementsByTagName('ul')[0];
function account(obj) {
	let ul = obj.getElementsByTagName('ul')[0];
	if (ul.className == 'dropdown-links') {
		ul.classList.add('active');
	} else {
		ul.classList.remove('active');
	}
}*/
/*
let dot = document.querySelector('.slider-area>div:nth-child(3)');
dot.addEventListener("mouseover", function() {
	if (dot.querySelector('.nav-dot1').classList == 'nav-dot1') {
		dot.classList.add('active');
	} else {
		if (dot.querySelector('.nav-dot2').classList == 'nav-dot2 active') {
			dot.querySelector('.nav-dot2').classList.remove('active');
		} else {

		}
	}
});
dot.addEventListener("mouseover", function() {
	if (dot.querySelector('.nav-dot2').classList == 'nav-dot2') {
		dot.classList.add('active');
	} else {
		if (dot.querySelector('.nav-dot1').classList == 'nav-dot1 active') {
			dot.querySelector('.nav-dot1').classList.remove('active');
		} else {

		}
	}
});*/
