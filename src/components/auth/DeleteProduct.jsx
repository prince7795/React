import React, { useState } from 'react'
import axios from 'axios'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {createProduct} from '../../redux/actions/authAction'

export default function Product() {
    const [productData, setProductData] = useState({productId: ''})
    const {productId} = productData;
    const handleChange = (event) => {
        setProductData({...productData, [event.target.name]: event.target.value,})
      };
    const onSubmit = (e) => {
        e.preventDefault();
        const productDetails = {
          productId: productId,
        //   productName: productName,
        //   category: category,
        //   descroption: descroption,
        //   expiryDate: expiryDate
        };
        axios
          .delete("http://localhost:9030/api/product/deleteProduct/"+productDetails.productId, productDetails)
          .then((response) => {console.log("This is response"+JSON.stringify(response))
          })
          .catch((err) => console.log(err));
          
      };
      
    return (
        <div>
        <form onSubmit={onSubmit}>
        <h3>Delete Product</h3>

        <div className="form-group">
            <label>ProductId</label>
                    <input type="number" className="form-control" name="productId" placeholder="productId" value={productId} required
            onChange={handleChange} />
        </div>
        {/* <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control" placeholder="Product Name" name="productName" value={productName} onChange={handleChange}
          />
        </div>

        <div className="form-group">
            <label>Category</label>
                    <input type="text" className="form-control" name="category" placeholder="Category" value={category} required
            onChange={handleChange} />
        </div>

        <div className="form-group">
            <label>Description</label>
            <input type="text" className="form-control" name="descroption" placeholder="Description"  value={descroption}
            onChange={handleChange} />
        </div>

        <div className="form-group">
            <label>Expiry Date</label>
            <input type="date" className="form-control" name="expiryDate" placeholder="Expiry Date"  value={expiryDate}
            onChange={handleChange} />
        </div> */}


        <button type="submit" className="btn btn-primary btn-block">Submit</button>
    </form>
    </div>
    )
}