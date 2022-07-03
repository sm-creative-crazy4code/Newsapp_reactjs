import React, { Component } from 'react'

export default class Newsitem extends Component {
 

  
  render() {  
    let {title, description,imgUrl,newsUrl,author,date,source} = this.props;
    return (
      
<div className="card my-3" >
  <img className="card-img-top" src={imgUrl} alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}  <span className="badge badge-danger">{source}</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By: {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
 
    <a href={newsUrl}  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>



    
    )
  }
}
