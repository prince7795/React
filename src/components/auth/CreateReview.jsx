import React, { useState } from 'react'
import axios from 'axios'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {createProduct} from '../../redux/actions/authAction'

export default function Product() {
    const [productData, setProductData] = useState({comment: '',  rating:'', productId:'',  username:''})
    const  {comment, productId, rating, username} = productData;
    const handleChange = (event) => {
        setProductData({...productData, [event.target.name]: event.target.value,})
      };
    const onSubmit = (e) => {
        e.preventDefault();
        const productDetails = {
          comment: comment,
          
          rating: rating,
          productId: productId,
          username: username,
        };
        axios
          .post("http://localhost:9060/api/review/createReview/", productDetails)
          .then((response) => {console.log("This is response"+JSON.stringify(response))
          })
          .catch((err) => console.log(err));
          
      };
      
    return (
        <div>
        <form onSubmit={onSubmit}>
        <h3>Create Product Review</h3>

        {/* <div className="form-group">
            <label>Review Id</label>
                    <input type="text" className="form-control" name="id" placeholder="Review Id" value={id} required
            onChange={handleChange} />
        </div> */}

        <div className="form-group">
            <label>Comment</label>
                    <input type="text" className="form-control" name="comment" placeholder="Write your comments..." value={comment} required
            onChange={handleChange} />
        </div>
        <div className="form-group">
            <label>Ratings</label>
                    <input type="number" className="form-control" name="rating" placeholder="Rating(/10)" value={rating} required
            onChange={handleChange} />
        </div>

        <div className="form-group">
            <label>Product Id</label>
                    <input type="number" className="form-control" name="productId" placeholder="Product Id" value={productId} required
            onChange={handleChange} />
        </div>


        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username"  value={username}
            onChange={handleChange} />
        </div>


        <button type="submit" className="btn btn-primary btn-block">Submit</button>
    </form>
    </div>
    )
}