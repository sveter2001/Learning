import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";
import case_prisma from './custom_src/case_prisma.png'

class Case_prisma_link extends Component{
  constructor(props) {
    super(props);

    this.onImageClick = this.onImageClick.bind(this);
  }
  
  onImageClick() {
    debugger;
    this.props.history('/Case_prisma');
  }

	render(){
		return(
    
      <div className="font_case">
        <p>Призма кейс</p>
        <div onClick={this.onImageClick}>
          <img src={case_prisma} className="case_prisma-logo"  />
        </div>
      </div>
		)
	}
}

function Case_prisma_link_wrapper(props) {
  return (
    <Case_prisma_link {...props} history={useNavigate()} />
  )
}

export default Case_prisma_link_wrapper;
