import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText,CardMedia,CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
//import Avatar from 'material-ui/Avatar';
import logo from '../assets/logo.jpg';
import FlatButton from 'material-ui/FlatButton';


class Login extends Component 
{
	
	alignCenter = {
		height: "100vh",          
		display: "flex",
		justifyContent: "center",
		alignItems: "center"

	}

	CardWidth = {
		width: "800px"
	}

	floatActionButtonRight = {
		float: "right"
	}



	constructor(props){
		super(props)

		this.state={
			email:'',
			Apikey:''
		}	
	}
	render(){
		return(
			<div style={this.alignCenter}>
			<Card style={this.CardWidth}>
			
			<CardHeader title="Login form"/>

			<CardText>
			Email=<input type='text' placeholder='email'
			value={this.state.email}
			onChange={(e)=>this.onEmailChange(e)}/><br/>

			Apikey=<input type='password' placeholder='apikey'
			value={this.state.Apikey}
			onChange={(e)=>this.onApiChange(e)}/><br/>
			</CardText>
			<CardActions>
			<FlatButton label ="Submit" onClick={(event)=> this.handleClick(event)}/>
			</CardActions>
			</Card>
			</div>
			)
		}

		handleClick = function(e){

			fetch('https://api.rebrandly.com/v1/accounts',
			{
				headers: {
					Apikey: this.state.Apikey
				}
			})
			.then(response =>
			{
				if(response.ok){
					response.json()
					.then(data => {
						console.log(data);
						if(data.email === this.state.email){
							console.log("right user");
						}
						else{
							alert('unauthorized username');
						}
					})
				}
				else{
					alert(response.statusText)
				}	
			})

		}
		onEmailChange = function(e){
			this.setState({
				email: e.target.value
			});
		}
		onApiChange = function(e){
			this.setState({

				Apikey: e.target.value
			});
		}
	}
	export default Login;