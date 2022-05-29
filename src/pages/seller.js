import {useEffect ,React} from 'react';
import './seller.css';
import './add_product.css';
import '../components/footer.css';
import Navbar from '../components/index';
import SideMnu from '../components/SideMnu';
function Seller()  {



useEffect(() => { 


const becomeSellerElement=document.querySelector('.become-seller');
const productListingElement=document.querySelector('.product-listing');
const applyForm=document.querySelector('.apply-form');
const showApplyFormBtn=document.querySelector('#apply-btn');

// form submission
const applyFormButton = document.querySelector('#apply-form-btn'); 
const businessName = document.querySelector('#business-name'); 
const address = document.querySelector('#business-add'); 
const about = document.querySelector('#about'); 
const number = document.querySelector('#number'); 
const tac = document.querySelector('#terms-and-condi');
const legitInfo = document.querySelector('#legitInfo');

// applyFormButton.addEventListener('click', ()=> {
// if(!businessName.value. length || !address.value. length || !about.value.length || !number.value.length) {
//     showAlert('fill all the inputs');
// }else if(!TrackEvent.checked|| !legitInfo.checked){
//     showAlert('you must agree to our terms and condition')
// }
// })
});



return (
   <>
   <Navbar />
   <SideMnu />
	<div class="seller_bdy bdy">
        {/* become seller element */}
        <div class="become-seller hide">
            <p class="heading">Become a seller</p>
            <p> Lotem ipsum dolor, sit amet consectectur adipisicingelit. Quas hic incidunt nam at magni animi reiciendis velit...........</p>
            <button class ="btn-seller" id="apply-btn">Apply for seller account</button>
        </div>
        {/*apply form */}

        <div class="apply-form">
        <h1 class="hd-vw" >Add Users</h1>
            <input type="text" id="username" placeholder='User Name'></input>
            <input type="password" id="pass" placeholder='Password'></input>
            <input type="text" id="business-name" placeholder='Business name/Company name/ Shop name'></input>
            <textarea id="business-add" placeholder='address'></textarea>
            <textarea id="type" placeholder='Product Type'></textarea>
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
    <footer>
			2022 Copy Rights @ CITS
	</footer>
    </>
);
};

export default Seller;
