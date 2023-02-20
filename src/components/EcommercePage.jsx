import React,{useState} from 'react';
import Products from './Products.jsx';
import Percentage from './Percentage.js';
import './css/e-com.css';
import Navbar from './Navbar.js'

class EcommercePage extends React.Component {

  constructor() {
    super();
    this.state = {
      id: 1,
      title: "",
      img: "",
      price: "0",
      offer: "0",
      rating: 4.3,
      mobiles: [
        {
          id: 1,
          title: 'Apple iPhone 11 (White, 128 GB)',
          img: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70',
          price: '₹48,900',
          offer: '₹45,999',
          rating: '4.5',
        },
        {
          id: 2,
          title: 'SAMSUNG Galaxy F13 (Sunrise Copper, 64 GB)  (4 GB RAM)',
          img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70',
          price: '₹14,999',
          offer: '₹9,799',
          rating: '4.4',
        },
        {
          id: 3,
          title: 'Infinix HOT 20 Play (Fantasy Purple, 64 GB)  (4 GB RAM)',
          img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/a/p/r/-original-imagkgrxwg386pjk.jpeg?q=70',
          price: '₹11,999',
          offer: '₹8,299',
          rating: '4.4',
        },
        {
          id: 4,
          title: 'vivo T1 44W (Starry Sky, 128 GB)  (4 GB RAM)',
          img: 'https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70',
          price: '₹19,990',
          offer: '₹14,499',
          rating: '4.5',
        },
      ],
    };
  }
  items = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.title)
  };
  add = () => {
    
    this.setState({
      mobiles: [
        ...this.state.mobiles,
        {
          // id: this.state.id++,
          title: this.state.title,
          img: this.state.img,
          price: this.state.price,
          offer: this.state.offer,
          rating: this.state.rating,
        },
      ],
    });
    if(this.state.title.length==0|| this.state.img.length == 0||this.state.price == 0 || this.state.offer==0){
      if(document.getElementById("missing").style.display="none"){
        document.getElementById("missing").style.display="block"
      }
      this.setState({
        mobiles:[...this.state.mobiles]
      })
      

    }
    else if(document.getElementById("alert").style.display="none"){
      document.getElementById("alert").style.display="block"
    }
    
  }; 
  close = () =>{
    if(document.getElementById("alert").style.display="block"){
      document.getElementById("alert").style.display="none"
      if(document.getElementById("missing").style.display="block"){
        document.getElementById("missing").style.display="none"
      }
    }}

  
  render() {
    return (
      <div className="">
      <div id="alert"class="alert">
        <span id="close-btn"class="closebtn" onClick={this.close}>&times;</span> 
        <strong>Yeah!</strong> Product Added Successfully.
      </div>
      <div id="missing"class="alert">
        <span id="close-btn"class="closebtn" onClick={this.close}>&times;</span> 
        <strong>Missing!</strong> Product Details.
      </div>

      <Navbar data={this.items} adding={this.add} x={this.state.mobiles}/>
        {...this.state.mobiles.map((x) => {
          return (
            <div>
              <Products data={x}/>
            </div>
          );
        })}
      </div>
    );
  }
}
export default EcommercePage;
