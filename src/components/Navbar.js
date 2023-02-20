import React,{useState} from 'react';
import Products from './Products'
import EcommercePage from './EcommercePage'
export default function Navbar(props) {
  const[query,setQuery]=useState("")
  return (
    <>
      {' '}
      <nav class="container-fluid navbar navbar-expand-lg bg-body-tertiary position-fixed">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              className="logo"
              src="https://seeklogo.com/images/P/pc-the-mobile-shop-logo-BD88FC7782-seeklogo.com.png"
              alt="myMobiles"
            />
          </a>
          <input type="text" className="search form-control" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> */}
            </ul>
            <div class="d-flex">
              <input
                class="form-control me-2"
                name="title"
                onChange={props.data}
                placeholder="Product Title"
                aria-label="Title"
              />

              <input
                class="form-control me-2"
                name="img"
                onChange={props.data}
                placeholder="/image-path"
                aria-label="Image"
              />

              <input
                class="form-control me-2"
                name="price"
                onChange={props.data}
                placeholder="Original Price"
                aria-label="Price"
              />

              <input
                class="form-control me-2"
                name="offer"
                onChange={props.data}
                placeholder="Offer Price"
                aria-label="Offer"
              />
              <button
                className="btn btn-outline-danger"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                onClick={props.adding}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </nav>
      {
        props.x.filter((mobile) => mobile.title.toLowerCase().includes(query)).map((mobiles) =>{
          <>
          {/* <Products/> */}
          {/* <EcommercePage/> */}
          <li>{mobiles}</li>
          </>
          console.log(mobiles) 
        })
      }
    </>
  );
}
