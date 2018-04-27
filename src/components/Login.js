import React, {Component} from 'react';

class Login extends Component 
{
	constructor(props){
		super(props)
        
        this.state={
        	email:'',
        	Apikey:''
        }	
	}
	render(){
		return(
			<div>
			
			 Email=<input type='text' placeholder='email'
			 value={this.state.email}
			 onChange={(e)=>this.onEmailChange(e)}/><br/>

			 Apikey=<input type='password' placeholder='apikey'
			 value={this.state.Apikey}
			 onChange={(e)=>this.onApiChange(e)}/><br/>
			 <button onClick={()=>this.onSubmit()} type="button">Submit</button>
			  </div>
			)
	}
	onEmailChange(e)
	{
			this.setState({email:e.target.value})
	}
	onApiChange(e)
	{
			this.setState({Apikey:e.target.value})
	}
	onSubmit()
	{
		//console.log("jdnjnjcdn")
			
			fetch('https://api.rebrandly.com/v1/account',
			{
				headers:
				{
					apikey: this.state.Apikey
				}
			})
			.then(response=>
			{
				if(response.ok)
				{
					console.log(response.json())

			    }
				else
				{
					alert(response.statusText)
				}
			})
	}
}
export default Login;
