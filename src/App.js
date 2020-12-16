import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import EmployeeLogin from './components/auth/EmployeeLogin';
import EmployeeRegister from './components/auth/EmployeeRegister';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Sample from './components/layouts/Sample';
import CreateProduct from './components/auth/CreateProduct';
import DeleteProduct from './components/auth/DeleteProduct';
import UpdateProduct from './components/auth/UpdateProduct';
import ReadProduct from './components/auth/ReadProduct';
import ReadProductByCategory from './components/auth/ReadProductByCategory';
import ReadAllProducts from './components/auth/ReadAllProducts.jsx';
import CreateReview from './components/auth/CreateReview';
import UpdateReview from './components/auth/UpdateReview';
import DeleteReview from './components/auth/DeleteReview';
import PostList from "./components/layouts/PostList";
import { Provider } from "react-redux";
import store from './redux/store/store'
import ReadReviewByProductId from "./components/auth/ReadReviewByProductId";

const postList = [
  {
    id:1,
    content:'This world1 will be out of pandemic',
    user:'prince1'
  },
  {
    id:2,
    content:'This world2 will be out of pandemic',
    user:'prince2'
  },
  {
    id:3,
    content:'This world3 will be out of pandemic',
    user:'prince3'
  },
  {
    id:4,
    content:'This world4 will be out of pandemic',
    user:'prince4'
  }
]
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
       <Router>
        <Header></Header>
        <Route exact path="/" component= {Landing}></Route>
        <Route exact path="/login" component= {Login}></Route>
        <Route exact path="/register" component= {Register}></Route>
        <Route exact path="/employeelogin" component= {EmployeeLogin}></Route>
        <Route exact path="/employeeregister" component= {EmployeeRegister}></Route>
        <Route exact path="/sample" component = {Sample}></Route>
        <Route exact path="/createProduct" component = {CreateProduct}></Route>
        <Route exact path="/deleteProduct" component = {DeleteProduct}></Route>
        <Route exact path="/updateProduct" component = {UpdateProduct}></Route>
        <Route exact path="/getProduct" component = {ReadProduct}></Route>
        <Route exact path="/getAllProducts" component = {ReadAllProducts}></Route>
        <Route exact path="/getProductByCategory" component = {ReadProductByCategory}></Route>

        <Route exact path="/createReview" component = {CreateReview}></Route>
        <Route exact path="/updateReview" component = {UpdateReview}></Route>
        <Route exact path="/deleteReview" component = {DeleteReview}></Route>
        <Route exact path="/getProductReviewById" component = {ReadReviewByProductId}></Route>
        <Footer></Footer>
      </Router>
    </div>
    </Provider>
  );
}

export default App;

// import React, { Component } from 'react'


// export default class PostList extends Component {
//   render() {
//     return (
//       <div>
//         <PostList posts = {postList}></PostList>
//       </div>
//     )
//   }
// }



    

{/* <PostList posts = {postList}></PostList> */}