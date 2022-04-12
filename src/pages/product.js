import {useEffect ,React} from 'react';
import"./product.css";

const Products = () => {

    useEffect(() => { 

        const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
        const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element
        
        let activeImageSlide = 0; // default slider image
        
        productImages.forEach((item, i) => { // loopinh through each image thumb
            item.addEventListener('click', () => { // adding click event to each image thumbnail
                productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
                item.classList.add('active'); // adding active class to the current or clicked image thumb
                productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
                activeImageSlide = i; // updating the image slider variable to track current thumb
            })
        })
        const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
        let checkedBtn = 0; // current selected button
        
        sizeBtns.forEach((item, i) => { // looping through each button
            item.addEventListener('click', () => { // adding click event to each 
                sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
                item.classList.add('check'); // adding check class to clicked button
                checkedBtn = i; // upading the variable
            })
        });
        });

return (
	<div>
        <section class="product-details">
            <div class="image-slider">
                <div class="product-images">
                    
                    <img src={require("./images/product image 1.png")} alt=""/>
                    <img src={require("./images/product image 2.png")} alt=""/>
                    <img src={require("./images/product image 3.png")} alt=""/>
                    <img src={require("./images/product image 4.png")} alt=""/>
                </div>
            </div>
            <div class="details">
                <h2 class="product-brand">calvin klein</h2>
                <p class="product-short-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <span class="product-price">$99</span>
                <span class="product-actual-price">$200</span>
                <span class="product-discount">( 50% off )</span>

                <p class="product-sub-heading">select size</p>

                <input type="radio" name="size" value="s" hidden id="s-size"/>
                <label for="s-size" class="size-radio-btn check">s</label>
                <input type="radio" name="size" value="m" hidden id="m-size"/>
                <label for="m-size" class="size-radio-btn">m</label>
                <input type="radio" name="size" value="l" hidden id="l-size"/>
                <label for="l-size" class="size-radio-btn">l</label>
                <input type="radio" name="size" value="xl" hidden id="xl-size"/>
                <label for="xl-size" class="size-radio-btn">xl</label>
                <input type="radio" name="size" value="xxl" hidden id="xxl-size"/>
                <label for="xxl-size" class="size-radio-btn">xxl</label>

                <button class="btn cart-btn">add to cart</button>
                <button class="btn">add to wishlist</button>
            </div>
        </section>
        <section class="detail-des">
            <h2 class="heading">description</h2>
            <p class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ......</p>
        </section>

    
	</div>
);
};

export default Products;
