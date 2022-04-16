
import React, { useState } from 'react';
import './add_product.css';

function Addproduct() {
  const [proname, setProname] = useState("");
  const [short_line, setShort_line] = useState("");
  const[detail_des,setDetail_des]=useState("");
  const[img_1,setImg_1]=useState("");
  const[img_2,setImg_2]=useState("");
  const[img_3,setImg_3]=useState("");
  const[img_4,setImg_4]=useState("");
  const[size_sel,setSize_sel]=useState("");
  const[actual,setActual]=useState("");
  const[discount,setDiscount]=useState("");
  const[sell,setSell]=useState("");
  const[stock,setStock]=useState("");
  const[categ,setCateg]=useState("");

  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/auth/add_product/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          proname: proname,
          short_line: short_line,
          detail_des:detail_des,
          img_1:img_1,
          img_2:img_2,
          img_3:img_3,
          img_4:img_4,
          size_sel:size_sel,
          actual:actual,
          discount:discount,
          sell:sell,
          stock:stock,
          categ:categ
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setProname("");
        setShort_line("");
        setDetail_des("");
        setImg_1("");
        setImg_2("");
        setImg_3("");
        setImg_4("");
        setSize_sel("");
        setActual("");
        setDiscount("");
        setSell("");
        setStock("");
        setCateg("");
        setMessage(resJson.proname);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }


//     let uploadImages = document.querySelectorAll('.fileupload');
//   let imagePaths = []; // will store all uploaded images paths;

//   uploadImages.forEach((fileupload, index) => {
//     fileupload.addEventListener('change', () => {
//         const file = fileupload.files[0];
//         let imageUrl;

//         if(file.type.includes('image')){
//             // means user uploaded an image

//         } else{
//             showAlert('upload image only');
//         }
//     })
// })
// const showAlert = (msg) => {
//   let alertBox = document.querySelector('.alert-box');
//   let alertMsg = document.querySelector('.alert-msg');
//   alertMsg.innerHTML = msg;
//   alertBox.classList.add('show');
//   setTimeout(() => {
//     alertBox.classList.remove('show');
//   }, 3000);
// }


  };
  

return (
	<div class="bdy">
	

<form onsubmit={handleSubmit}>
    <input type="text" id="product-name" placeholder="product name" value={proname} onChange={(e) => setProname(e.target.value)}/>
    <input type="text" id="short-des" placeholder="short line about the product"value={short_line} onChange={(e) => setShort_line(e.target.value)}/>
    <textarea id="des" placeholder="detail description" value={detail_des} onChange={(e) => setDetail_des(e.target.value)}></textarea>

    {/* <!-- product image --> */}
    <div class="product-info">
        <div class="product-image"><p class="text">product image</p></div>
        <div class="upload-image-sec">
            {/* <!-- upload inputs --> */}
            <p class="text"><img src= {require("./images/2.jpg")} alt=""/>upload image</p>
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
            <p class="text">size available</p>
            <div class="sizes">
                <input type="checkbox" class="size-checkbox" id="xs" value="xs" onChange={(e) => setSize_sel(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="s" value="s" onChange={(e) => setSize_sel(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="m" value="m" onChange={(e) => setSize_sel(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="l" value="l" onChange={(e) => setSize_sel(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="xl" value="xl" onChange={(e) => setSize_sel(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="xxl" value="xxl" onChange={(e) => setSize_sel(e.target.value)}/>
                <input type="checkbox" class="size-checkbox" id="xxxl" value="xxxl" onChange={(e) => setSize_sel(e.target.value)}/>
            </div>
        </div>
    </div>

    <div class="product-price">
        <input type="number" id="actual-price" placeholder="actual price" value={actual} onChange={(e) => setActual(e.target.value)}/>
        <input type="number" id="discount" placeholder="discount percentage" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
        <input type="number" id="sell-price" placeholder="selling price" value={sell} onChange={(e) => setSell(e.target.value)}/>
    </div>

    <input type="number" id="stock" min="20" placeholder="item in stocks (minimum 20)"value={stock} onChange={(e) => setStock(e.target.value)}/>

    <textarea id="tags" placeholder="Enter categories here, for example - Men, Jeans, Blue Jeans, Rough jeans (you sholud add men or women at start)" value={categ} onChange={(e) => setCateg(e.target.value)}></textarea>

    <input type="checkbox" class="checkbox" id="tac"/>
    <label for="tac">clothing take 30% from your total sell</label>

    <div class="buttons">
        <button class="btn" id="add-btn">add product</button>
        <button class="btn" id="save-btn">save draft</button>
    </div>
    <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
	</div>
);
};

export default Addproduct;
