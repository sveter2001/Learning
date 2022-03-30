import React, { Component } from 'react'
import logo from './logo.svg';
import Case_prisma_link from './Case_prisma_link'

export default class Home extends Component{
	render(){
		return(
		<div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Рулетка</p>
      </header>
      <Case_prisma_link />
		</div>
		)
	}
}
