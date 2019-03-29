(function(shop) {
	shop = {
		init: function() {
			this.clickAccount();
			this.hm();
			this.initScroll();
			this.cm();
			this.cos();
			this.hotpro();
			this.addcar();
			this.cpic();
		},
		clickAccount: function() {
			document.querySelector('.account').onclick = function() {
				let ul = this.getElementsByTagName('ul')[0];
				if (ul.className == 'dropdown-links') {
					ul.classList.add('active');
				} else {
					ul.classList.remove('active');
				}
			}
			document.querySelector('.money').onclick = function() {
				let ul = this.getElementsByTagName('ul')[0];
				if (ul.className == 'dropdown-links') {
					ul.classList.add('active');
				} else {
					ul.classList.remove('active');
				}
			}
			document.querySelector('.language').onclick = function() {
				let ul = this.getElementsByTagName('ul')[0];
				if (ul.className == 'dropdown-links') {
					ul.classList.add('active');
				} else {
					ul.classList.remove('active');
				}
			}
		},
		hm: function() {
			let lis = document.querySelectorAll('.main-menu>ul>li');
			for (var i = 0; i < lis.length; i++) {
				(function(item) {
					let that = lis[item];
					that.addEventListener("mouseover", function() {
						that.querySelector('.main-page-sub') && (that.querySelector('.main-page-sub').style.transform = 'scaleY(1)');
						that.querySelector('.store-sub') && (that.querySelector('.store-sub').style.transform = 'scaleY(1)');
					});
					that.addEventListener("mouseout", function() {
						that.querySelector('.main-page-sub') && (that.querySelector('.main-page-sub').style.transform = 'scaleY(0)');
						that.querySelector('.store-sub') && (that.querySelector('.store-sub').style.transform = 'scaleY(0)');
					});
				})(i)
			}
		},
		initScroll: function() {
			document.addEventListener("scroll", function() {
				var scrollDis = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollDis >= 176) {
					document.querySelector('.head-bottom').classList.add('stick');
				} else {
					document.querySelector('.head-bottom').classList.remove('stick');
				}
			});
		},
		cm: function() {
			let co = document.querySelector('.categories-menu');
			co.onclick = function() {
				clean();
				let col = co.querySelector('.category-menu-inner');
				if (col.className == 'category-menu-inner') {
					col.classList.add('open');
				} else {
					col.classList.remove('open');
				}
			}
			//菜单栏menutab
			let lis = document.querySelectorAll('.category-menu-inner>ul>li:nth-child(n+1):nth-child(-n+3)');
			for (var i = 0; i < lis.length; i++) {
				(function(item) {
					let that = lis[item];
					that.onclick = function(event) {
						clean();
						event.stopImmediatePropagation(); //避免事件向上传，从而影响父类
						let innerSub = that.querySelector('.category-menu-inner-sub');
						innerSub.style.visibility = 'visible';
						innerSub.style.left = '100%';
					}
				})(i)
			}
			//清除clean all
			function clean() {
				for (var i = 0; i < lis.length; i++) {
					(function(item) {
						let that = lis[item];
						let innerSub = that.querySelector('.category-menu-inner-sub');
						innerSub.style.visibility = 'hidden';
						innerSub.style.left = '120%';
					})(i)
				}
			}
		},
		cos:function(){
			let sliderOne = document.querySelector('.slider-one');
			let sliderTwo = document.querySelector('.slider-two');
			let dot1 = document.querySelector('.dots .nav-dot:nth-child(1)');
			let dot2 = document.querySelector('.dots .nav-dot:last-child');
			let count = 1;
			setInterval(function(){
				if(count%2==0){
					sliderTwo.style.opacity='1';
					dot2.classList.add('active');
					sliderOne.style.opacity='0';
					dot1.classList.remove('active');
					sliderOne.style.left='-200px';
					sliderTwo.style.left='0'
				}else{
					sliderOne.style.opacity='1';
					dot1.classList.add('active');
					sliderTwo.style.opacity='0';
					dot2.classList.remove('active');
					sliderOne.style.left='0';
					sliderTwo.style.left='-200px'
					count=1;
					console.log(count);
				}
				count++;
			},2000);			
		},
		hotpro:function(){
			$('.hot-product-banner').owlCarousel({
				autoplay:!0,
				loop:!0,
				nav:!0,
				autoplayTimeout:2000,
				items:1,
				dots:!1,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				responsiveClass:!0,
				responsive:{
					0:{
						items:1
					},
					576:{
						item:2
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});
			$('.new-product-banner').owlCarousel({
				autoplay:!1,
				loop:!0,
				nav:!0,
				autoplayTimeout:2000,
				items:1,
				dots:!1,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				responsiveClass:!0,
				responsive:{
					0:{
						items:1
					},
					576:{
						item:2
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});
		},
		addcar:function(){
			let cars = document.querySelectorAll('.product-car');
			 for(var i=0;i<cars.length;i++){
				 (function(obj){
					 obj.onclick=function(){
						 $('.modal').modal("show")
					 }
				 })(cars[i]);
			 }
		},
		cpic:function(){
			let imgDit={
				'img/cart5.jpg':'img/product44.jpg',
				'img/cart6.jpg':'img/product45.jpg',
				'img/cart7.jpg':'img/product46.jpg',
			}
			let imgs=document.querySelectorAll(".modal-left-tab-img");
			for(var i=0;i<imgs.length;i++){
				(function(that){
					that.onclick=function(){
						let src = that.querySelector("img").getAttribute("src");
						document.querySelector('.modal-left-lagger-detail img').src=imgDit[src];
					}
				})(imgs[i]);
			}
		},
		
	}
	shop.init();
})(window.shop || {});
