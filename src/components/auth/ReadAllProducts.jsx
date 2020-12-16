import React, { Component } from 'react'
import axios from 'axios'

class ReadAllProducts extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    const JSONtext=JSON.parse(localStorage.getItem('data'))
    axios.get('http://localhost:9030/api/product/getAllProducts/',{
        headers:{
            "Access-Control-Allow-Origin": "*"
        }
    })
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
       
        return (
          <table>
          <tr>
          <th>Product Id</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>ExpiryDate</th>
          </tr>
        
          <div className="post card" key={post.productId}>
            <div className="card-content">
            <span className="card-title">{post.productId}</span><br />
              <span className="card-title">{post.productName}</span><br />
              <span className="card-title">{post.category}</span><br />
              <span className="card-title">{post.descroption}</span><br />
              <span className="card-title">{post.expiryDate}</span><br />
              {/* <p>{post.priceValue}</p> */}
            </div>
          </div>
          </table>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Fetch All Prices Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

export default ReadAllProducts