import React, { Component } from 'react';
import axios from 'axios';

export default class ReadProduct extends Component {
  constructor(props){
    super(props);

    this.state = {
      category: '',
      posts:''
    }
}   

  submitForm = (e) => {
    e.preventDefault();
   // const JSONtext=JSON.parse(localStorage.getItem('data'))
    axios.get('http://localhost:9030/api/product/category/'+parseInt(this.state.category),
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
       category: parseInt(e.target.value)
     });
   }


  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.productId}>
            <div className="card-content">
              <span className="card-title">{post.productName}</span><br />
              <span className="card-title">{post.descroption}</span>
              <p>{post.expiryDate}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );
    return (
        <div>
        <form>
          Name: <input type="number" name="category" onChange={this.handleNameChange}/>
          <br />
          <input type="button" value="Submit" onClick={this.submitForm}/>
          {/* <p>The Price Id is {this.state.posts.priceId}</p> */}
          
          <div>
        <div className="container">
          <h4 className="center">Fetch All Prices Home</h4>
          {postList}
        </div>
         </div>
        
          </form>
        </div>
    )
  }
}

