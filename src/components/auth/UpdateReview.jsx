import React, { useState } from 'react'
import axios from 'axios'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {createProduct} from '../../redux/actions/authAction'

export default function Product() { 
    const [productData, setProductData] = useState({id: '', comment: '', rating:'', productId:'', username:''})
    const  {id, comment, rating, productId, username} = productData;
    const handleChange = (event) => {
        setProductData({...productData, [event.target.name]: event.target.value,})
      };
    const onSubmit = (e) => {
        e.preventDefault();
        const productDetails = {
          id: id,
          comment: comment,
          rating: rating,
          productId: productId,
          username: username
        };
        axios
          .put("http://localhost:9060/api/review/"+productDetails.id, productDetails)
          .then((response) => {console.log("This is response"+JSON.stringify(response))
          })
          .catch((err) => console.log(err));
          
      };
      
    return (
        <div>
        <form onSubmit={onSubmit}>
        <h3>Update Product Review</h3>

        <div className="form-group">
            <label>Review Id</label>
                    <input type="number" className="form-control" name="id" placeholder="Review ID" value={id} required
            onChange={handleChange} />
        </div>
        <div className="form-group">
            <label>Comment</label>
            <input type="text" className="form-control" placeholder="Comment" name="comment" value={comment} onChange={handleChange}
          />
        </div>

        <div className="form-group">
            <label>Rating</label>
                    <input type="number" className="form-control" name="rating" placeholder="Rating" value={rating} required
            onChange={handleChange} />
        </div>

        <div className="form-group">
            <label>Product Id</label>
            <input type="number" className="form-control" name="productId" placeholder="Product Id"  value={productId}
            onChange={handleChange} />
        </div>

        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="username" placeholder="UserName"  value={username}
            onChange={handleChange} />
        </div>


        <button type="submit" className="btn btn-primary btn-block">Submit</button>
    </form>
    </div>
    )
}