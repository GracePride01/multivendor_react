import {useEffect,React} from 'react';




const Home = () => {
	useEffect(() => { 
		const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});
	});
return (
	<div >

		<header class="hero-section">
			<div class="content">
				<img src={require("./images/light-logo.png")} class="logo" alt=""/>
				<p class="sub-heading">best fashion collection of all time</p>
			</div>
		</header>


		<section class="product">
			<h2 class="product-category">best selling</h2>
			<button class="pre-btn"><img src={require('./images/arrow.png')} alt=""/></button>
			<button class="nxt-btn"><img src={require('./images/arrow.png')} alt=""/></button>
		
			<div class="product-container">
		
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/2.jpg')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">brand</h2>
					<p class="product-short-des">a short line about the cloth..</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/1.jpg')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">brand</h2>
					<p class="product-short-des">a short line about the cloth..</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/3.jpg')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">brand</h2>
					<p class="product-short-des">a short line about the cloth..</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/4.jpg')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">brand</h2>
					<p class="product-short-des">a short line about the cloth..</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/5.jpg')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">brand</h2>
					<p class="product-short-des">a short line about the cloth..</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
		
	</div>
	

		</section>

		<section class="collection-container">
    <a href="#" class="collection">
        <img src={require("./images/women-collection.png")} alt=""/>
        <p class="collection-title">women <br/> apparels</p>
    </a>
    <a href="#" class="collection">
        <img src={require("./images/men-collection.png")} alt=""/>
        <p class="collection-title">men <br/> apparels</p>
    </a>
    <a href="#" class="collection">
        <img src={require("./images/accessories-collection.png")} alt=""/>
        <p class="collection-title">accessories</p>
    </a>
</section>
		

		






	{/* <div class="d1">
		 <img src={require('./images/1.jpg')} width="550" height="450"alt='1'/>
	</div>
	<div class="d2">
		<img src={require('./images/2.jpg')} width="150" height="100"alt='2'> 
		
		</img><br/>
		<font color="red">Camera $120<br/>Discount 10%</font><br/>
		<input type="submit" value="Add to Cart" class="btn1"/>
	</div>
	 <div class="d3">
		<img src={require('./images/3.jpg')} width="150" height="100"alt='3'></img>
		<br/><font color="red">Laptop<br/>$550 Discount 20%</font><br/> 
		<input type="submit" value="Add to cart" class="btn1"/>
		
	</div>
	<div class="d4"> 
		<img src={require('./images/4.jpg')} width="150" height="100"alt='4'></img> 
		 <br/>
		<font color="red">Speakers<br/>$140 Discount 15%</font><br/> 
		<input type="submit" value="Add to cart" class="btn1"/>
	</div>
	<div class="d5"> 
		<img src={require('./images/5.jpg')} width="150" height="100"alt='5'></img> 
		 <br/>
		<font color="red">Speakers<br/>$140 Discount 15%</font><br/> 
		<input type="submit" value="Add to cart" class="btn1"/> 
	
	</div>
	<div class="d6"> 
		<img src={require('./images/6.jpg')} width="150" height="100"alt='6'></img> 
		 <br/>
		<font color="red">Speakers<br/>$140 Discount 15%</font><br/> 
		<input type="submit" value="Add to cart" class="btn1"/> 
		
	</div>
	<div class="d7">
		<img src={require('./images/7.jpg')} width="150" height="100"alt='7'></img> 
		 <br/>
		<font color="red">Speakers<br/>$140 Discount 15%</font><br/> 
		<input type="submit" value="Add to cart" class="btn1"/> 
		
	</div>
	<div class="d8"> 
	<img src={require('./images/3.jpg')} height="100" width="100"alt='8'></img><br/> 
		<center> Available<br/>Gift's<br/>For<br/>All<br/>Shopping...<br/><br/> Place<br/>Your<br/>Orders<br/>Right<br/>Now...</center>
		
	</div>  */}
	


	</div>
);
};

export default Home;
