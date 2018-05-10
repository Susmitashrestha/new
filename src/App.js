import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';


//import Table from './components/table'
class App extends Component{
	render(){
		return(
			<div>
			 <MuiThemeProvider>
			 <BrowserRouter>
				 <Switch>
					 <Route path="/login" component={Login} />
					 <Route path="/board" component={Dashboard} />
				 </Switch>
			 </BrowserRouter>
			 </MuiThemeProvider>
			</div> 
            );
	}
}
export default App;