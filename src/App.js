import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Header from './components/Header'
import Login from './components/Login'
//import Table from './components/table'
class App extends Component{
	render(){
		return(
			
			 <MuiThemeProvider>
			
				<Login />
			
             </MuiThemeProvider>
            
            );
	}
}
export default App;