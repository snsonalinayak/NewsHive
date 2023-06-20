import React, { Component } from 'react'
// import loading from './loading.gif'


const Spinner=()=> {

    return (

    <div className="d-flex justify-content-center">
        <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
  </div>
</div>
    )
  
}
export default Spinner
