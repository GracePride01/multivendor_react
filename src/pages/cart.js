import React from 'react';
import { useState } from "react";
import"./cart.css";
import Navbar from '../components/index';
import '../components/footer.css';
function Cart  () {

    const [pass, setPass] = useState("1");

    let changeplus = () => {
        var cnt = parseInt(pass)+1;
        setPass(cnt);
        changeamt();
    }

    let changeamt = () => {
        var cnt = parseInt(pass)+1;
        setPass(cnt);
    }
    let remove = () => {
        document.getElementById("notif").remove()
    }


    let changeminu = () => {
        var cnt = parseInt(pass)-1;
        if(cnt <=1){
            setPass("1");
        }else{
            setPass(cnt);
        }
        
    }

return (
	<div>
    <Navbar />
	<div class="cart-section">
        <div class="product-list">
            <p className='section-heading'>Cart</p>
            <div class="cart">
                {/* cart product goes here*/}
                {/* <img  class="empty-img" src={require("./images/empty-cart.png")}></img> */}
                {/*https://www.youtube.com/watch?v=Smtg4zFvjz0&list=PLqm86YkewF6S45smPYeNv01aFFKWZSgYD&index=4      1.11.59  */}
                <div class="sm-product" id="notif">
                    <img src={require("./images/product image 1.png")} class="sm-product-img" alt=""></img>
                    <div class="sm-text">
                        <p class="sm-product-name">Brand</p>
                        <p class="sm-des">Short Line about product</p>
                    </div>
                    <div class="item-counter">
                        <button onClick={changeminu} class="counter-btn decrement">-</button>
                        <p class="item-count">{pass}</p>
                        <button onClick={changeplus} class="counter-btn increment">+</button>
                    </div>
                    <p class="sm-price">$20</p>
                    <button onClick={remove} class="sm-delete-btn"><img src={require("./images/close.png")} alt=""></img></button>
                </div>
                <div class="sm-product">
                    <img src={require("./images/product image 1.png")} class="sm-product-img" alt=""></img>
                    <div class="sm-text">
                        <p class="sm-product-name">Brand</p>
                        <p class="sm-des">Short Line about product</p>
                    </div>
                    <div class="item-counter">
                        <button onClick={changeminu} class="counter-btn decrement">-</button>
                        <p class="item-count">{pass}</p>
                        <button onClick={changeplus} class="counter-btn increment">+</button>
                    </div>
                    <p class="sm-price">$20</p>
                    <button class="sm-delete-btn"><img src={require("./images/close.png")} alt=""></img></button>
                </div><div class="sm-product">
                    <img src={require("./images/product image 1.png")} class="sm-product-img" alt=""></img>
                    <div class="sm-text">
                        <p class="sm-product-name">Brand</p>
                        <p class="sm-des">Short Line about product</p>
                    </div>
                    <div class="item-counter">
                        <button onClick={changeminu} class="counter-btn decrement">-</button>
                        <p class="item-count">{pass}</p>
                        <button onClick={changeplus} class="counter-btn increment">+</button>
                    </div>
                    <p class="sm-price">$20</p>
                    <button class="sm-delete-btn"><img src={require("./images/close.png")} alt=""></img></button>
                </div><div class="sm-product">
                    <img src={require("./images/product image 1.png")} class="sm-product-img" alt=""></img>
                    <div class="sm-text">
                        <p class="sm-product-name">Brand</p>
                        <p class="sm-des">Short Line about product</p>
                    </div>
                    <div class="item-counter">
                        <button onClick={changeminu} class="counter-btn decrement">-</button>
                        <p class="item-count">{pass}</p>
                        <button onClick={changeplus} class="counter-btn increment">+</button>
                    </div>
                    <p class="sm-price">$20</p>
                    <button class="sm-delete-btn"><img src={require("./images/close.png")} alt=""></img></button>
                </div>
            </div>
            <p className='section-heading'>Wish List</p>
            <div class="wishlist">
                {/* wishlist product goes  here*/}
            </div>
        </div>
        <div class="checkout-section">
            <div class="checkout-box">
                <p class="text">your total bill</p>
                <h1 class="bill">$00</h1>
                <a href="/checkout" class="checkout-btn">checkout</a>
            </div>
        </div>

    </div>
    <footer>
		2022 Copy Rights @ CITS
	</footer>
	</div>
);
};
export default Cart;

