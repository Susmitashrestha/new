import React, { Component } from 'react';

class User extends Component{
	constructor(props)
	{
		super(props)
		this.state={
			name: props.detail.name,
			add: props.address
		}
	}
	render(){
		return(
			<div>
			<p>this is {this.state.name} {this.props.detail.address}</p>
			<input type="text" value={this.state.name} onChange={(event)=> this.handleClick(event)} />
			</div>
			
			)
		}
		handleClick =function(event){
			this.setState({
				name:event.target.value
			})
		}
		
	}

export default User;