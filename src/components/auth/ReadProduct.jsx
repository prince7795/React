import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class ReadProduct extends Component {
  constructor(props){
    super(props);

    this.state = {
      productId: '',
      posts:''
    }
}   

  submitForm = (e) => {
    e.preventDefault();
   // const JSONtext=JSON.parse(localStorage.getItem('data'))
    axios.get('http://localhost:9030/api/product/getProduct/'+parseInt(this.state.productId),
    {
      headers:{
        "Access-Control-Allow-Origin": "*"
      }
  })
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data
        });
      })
     // const data={};
    //<FetchPrice data={this.state.posts} />,
    //<Redirect to='/FetchPrice'></Redirect>
  } 

   handleNameChange = (e) => {
     console.log(e.target.value);
     this.setState({
       productId: parseInt(e.target.value)
     });
   }


  render() {
    return (
        <div>
        <form>
          Name: <input type="text" name="productId" onChange={this.handleNameChange}/>
          <br />
          <input type="button" value="Submit" onClick={this.submitForm}/>
          {/* <p>The Price Id is {this.state.posts.priceId}</p> */}
          <table>
          <tr>
          <th>Product Id </th>
          <th>ProductName </th>
          <th>Product Category </th>
          <th>Product Description </th> 
          <th>Product ExpiryDate </th> 
          </tr>
          <tr>
            <td>{this.state.posts.productId}</td>
            <td>{this.state.posts.productName}</td>
            <td>{this.state.posts.category}</td>
            <td>{this.state.posts.descroption}</td>
            <td>{this.state.posts.expiryDate}</td>
          </tr>
          </table>
          </form>
        </div>
    )
  }
}
