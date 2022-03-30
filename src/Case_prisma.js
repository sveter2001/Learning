import React, { Component } from 'react'
import m4 from './custom_src/m4.png'
import awp from './custom_src/awp.png'
export default class Case_prisma extends Component{
	render(){
		return(
		<div>
		<img src={m4} className="weapon-logo"  />
		<img src={awp} className="weapon-logo"  />
		<button>Мне повезет!</button>
		</div>
		)
	}
}
