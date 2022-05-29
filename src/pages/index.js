import {useEffect,React} from 'react';
import Navbar from '../components/index';
import '../components/footer.css';


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
		<Navbar />
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
					<img src={require('./images/card1.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
				<h2 class="product-brand">$1436</h2>
					<p class="product-short-des">Zivame</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">20% off</span>
					<img src={require('./images/women-collection.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
				<h2 class="product-brand">$1355</h2>
					<p class="product-short-des">Burberry</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/card2.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
				<h2 class="product-brand">b$790</h2>
					<p class="product-short-des">Raymonds</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">15% off</span>
					<img src={require('./images/card4.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
				<h2 class="product-brand">$490</h2>
					<p class="product-short-des">Zivame</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">10% off</span>
					<img src={require('./images/card3.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">$599</h2>
					<p class="product-short-des">llen Solly</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
		
	</div>
	

		</section>
		<h2 class="product-category">Categories</h2>
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



		<section class="product">
			<h2 class="product-category">Shoes</h2>
			<button class="pre-btn"><img src={require('./images/arrow.png')} alt=""/></button>
			<button class="nxt-btn"><img src={require('./images/arrow.png')} alt=""/></button>
		
			<div class="product-container">
		
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/card9.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">$1,690</h2>
					<p class="product-short-des">Nike</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">20% off</span>
					<img src={require('./images/card10.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">$2,270</h2>
					<p class="product-short-des">Adidas</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">50% off</span>
					<img src={require('./images/card11.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">$945</h2>
					<p class="product-short-des">Reebok</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">15% off</span>
					<img src={require('./images/card12.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">$1,535</h2>
					<p class="product-short-des">Lee Cooper</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
			<div class="product-card">
				<div class="product-image">
					<span class="discount-tag">10% off</span>
					<img src={require('./images/card10.png')} class="product-thumb" alt=""/>
					<button class="card-btn">add to whislist</button>
				</div>
				<div class="product-info">
					<h2 class="product-brand">$1,180</h2>
					<p class="product-short-des">Seeand Wear</p>
					<span class="price">$20</span><span class="actual-price">$40</span>
				</div>
			</div>
		
	</div>
	

		</section>



	<footer>
			2022 Copy Rights @ CITS
	</footer>

	</div>
);
};

export default Home;
