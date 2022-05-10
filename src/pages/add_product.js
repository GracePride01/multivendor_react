
import React, { useState } from 'react';
import './add_product.css';
import axios from "axios";
function Addproduct() {
  const [proname, setProname] = useState("");
  const [short_line, setShort_line] = useState("");
  const[detail_des,setDetail_des]=useState("");
  const[img_1,setImg_1]=useState("");
  const[img_2,setImg_2]=useState("");
  const[img_3,setImg_3]=useState("");
  const[img_4,setImg_4]=useState("");
  const[size,setSize]=useState("");
  const[actual_p,setActual]=useState("");
  const[discount_p,setDiscount]=useState("");
  const[selling_p,setSell]=useState("");
  const[stock,setStock]=useState("");
  const[categ,setCateg]=useState("");
  const [message, setMessage] = useState("");
  let sizes = [];

 
  // store size function
const storeSizes = () => {
  sizes = [];
  let sizeCheckBox = document.querySelectorAll('.size-checkbox');
  sizeCheckBox.forEach(item => {
      if(item.checked){
          sizes.push(item.value);
      }
  })
}
let showAlert = (msg) => {
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  alertMsg.innerHTML = msg;
  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000);
}

  let handleSubmit = async (e) => {
    e.preventDefault();
    storeSizes();
    axios({
      method: 'get',
      url: "http://localhost/mv_php/add_product.php?proname="+proname+"&short_line="+short_line+"&detail_des="+detail_des+"&img_1="+img_1+"&img_2="+img_2+"&img_3="+img_3+"&img_4="+img_4+"&size="+sizes+"&actual_p="+actual_p+"&discount_p="+discount_p+"&selling_p="+selling_p+"&stock="+stock+"&categ="+categ
  })
  .then(function (response) {
        if (response.status === 200) {
    if(response.data==="s"){
      
      setProname("");
      setShort_line("");
      setDetail_des("");
      setImg_1("");
      setImg_2("");
      setImg_3("");
      setImg_4("");
      setSize("");
      setActual("");
      setDiscount("");
      setSell("");
      setStock("");
      setCateg("");
    setMessage(response.data);
    showAlert("Product Uploaded Successfully...");

    }
    else{
      
      setProname("");
      setShort_line("");
      setDetail_des("");
      setImg_1("");
      setImg_2("");
      setImg_3("");
      setImg_4("");
      setSize("");
      setActual("");
      setDiscount("");
      setSell("");
      setStock("");
      setCateg("");
    setMessage(response.data);
    showAlert("Error...");

    }
    
  } 
  else {
    setMessage("Some error occured");
  }
console.log(response)

  })
  .catch(function (response) {
      //handle error
      console.log(response)
  });




const showAlert = (msg) => {
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  alertMsg.innerHTML = msg;
  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000);
}


  };
  

return (
	<div class="bdy">
	<h1 class="add_head" >Add Product</h1>

<form onSubmit={handleSubmit}encType="multipart">
    <input type="text" id="product-name" placeholder="Product Name" value={proname} onChange={(e) => setProname(e.target.value)}/>
    <input type="text" id="short-des" placeholder="Short line about the product"value={short_line} onChange={(e) => setShort_line(e.target.value)}/>
    <textarea id="des" placeholder="Detail Description" value={detail_des} onChange={(e) => setDetail_des(e.target.value)}></textarea>

    {/* <!-- product image --> */}
    <div class="product-info">
        <div class="product-image"><p class="text">Product Image</p></div>
        <div class="upload-image-sec">
            {/* <!-- upload inputs --> */}
            <p class="text"><img src= {require("./images/2.jpg")} alt=""/>Upload Image</p>
            <div class="upload-catalouge">
                <input type="file" class="fileupload" id="first-file-upload-btn" value={img_1}  onChange={(e) => setImg_1(e.target.value)} hidden/>
                <label for="first-file-upload-btn" class="upload-image"></label>
                <input type="file" class="fileupload" id="second-file-upload-btn" value={img_2} onChange={(e) => setImg_2(e.target.value)}hidden/>
                <label for="second-file-upload-btn" class="upload-image"></label>
                <input type="file" class="fileupload" id="third-file-upload-btn" value={img_3} onChange={(e) => setImg_3(e.target.value)}hidden/>
                <label for="third-file-upload-btn" class="upload-image"></label>
                <input type="file" class="fileupload" id="fourth-file-upload-btn" value={img_4} onChange={(e) => setImg_4(e.target.value)} hidden/>
                <label for="fourth-file-upload-btn" class="upload-image"></label>
            </div>
        </div>
        <div class="select-sizes">
            <p class="text">Size Available</p>
            <div class="sizes" >
                <input type="checkbox" class="size-checkbox" id="xs" value="xs" onChange={(e) => setSize(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="s" value="s" onChange={(e) => setSize(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="m" value="m" onChange={(e) => setSize(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="l" value="l" onChange={(e) => setSize(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="xl" value="xl" onChange={(e) => setSize(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="xxl" value="xxl" onChange={(e) => setSize(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="xxxl" value="xxxl" onChange={(e) => setSize(e.target.value)}/>
            </div>
        </div>
    </div>

    <div class="product-price">
        <input type="number" id="actual-price" placeholder="Actual Price" value={actual_p} onChange={(e) => setActual(e.target.value)}/>
        <input type="number" id="discount" placeholder="Discount Percentage" value={discount_p} onChange={(e) => setDiscount(e.target.value)}/>
        <input type="number" id="sell-price" placeholder="Selling Price" value={selling_p} onChange={(e) => setSell(e.target.value)}/>
    </div>

    <input type="number" id="stock" min="20" placeholder="Item in stocks (minimum 20)"value={stock} onChange={(e) => setStock(e.target.value)}/>

    <textarea id="tags" placeholder="Enter categories here, for example - Men, Jeans, Blue Jeans, Rough jeans (you sholud add men or women at start)" value={categ} onChange={(e) => setCateg(e.target.value)}></textarea>

    <input type="checkbox" class="checkbox" id="tac"/>
    <label for="tac">Clothing take 30% from your total sell</label>

    <div class="buttons" >
        <input type="submit" class="btn" id="add-btn" value="add product"/>
        <input type="button" class="btn" id="save-btn" value="save draft"/>
    </div>
    <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
	</div>
);
};

export default Addproduct;
