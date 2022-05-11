import React from 'react';
import './seller.css';
import './add_product.css';
function Seller()  {
const becomeSellerElement=document.querySelector('.become-seller');
const applyForm=document.querySelector('.apply-form');
const showApplyFormBtn=document.querySelector('#apply-btn');


// form submission
const applyFormButton = document.querySelector('#apply-form-btn"); const businessName = document.querySelector('#business-name'); const address = document.querySelector('#business-add'); const about = document.querySelector('#about'); const number = document.querySelector('#number'); const tac = document.querySelector('#terms-and-condi const legitInfo = document.querySelector('#legitInfo');
applyFormButton.addEventListener("click', 0 => {
if(!businessName.value. length || !address.value. length || !about.value.length || !number.value.length) {
    
}})



return (
   
	<div class="seller_bdy bdy">
        {/* become seller element */}
        <div class="become-seller hide">
            <p class="heading">Become a seller</p>
            <p> Lotem ipsum dolor, sit amet consectectur adipisicingelit. Quas hic incidunt nam at magni animi reiciendis velit...........</p>
            <button class ="btn-seller" id="apply-btn">Apply for seller account</button>
        </div>
        {/*apply form */}
        <div class="apply-form">
            <input type="text" id="business-name" placeholder='Business name/Company name/ Shop name'></input>
            <textarea id="business-add" placeholder='address'></textarea>
            <textarea id="about" placeholder='about'></textarea>
            <input type="text" id="number" placeholder='Number'></input>
            <input type="checkbox" class="checkbox" id="terms-and-cond"></input>
            <label type="terms-and-cond"> Agree to our<a href="">Terms and conditions</a></label>
            <br/>
            <input type="checkbox" class="checkbox" id="legitInfo"></input>
            <label for="legitInfo"> all information is legit</label>
            <br/>
            <button type="submit" class="submit-btn" id="appply-form-btn">apply</button>
         </div>
	</div>
   
);
};

export default Seller;
