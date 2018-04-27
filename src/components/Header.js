import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component{
	constructor(props){
		super(props)
		this.state={open:false}
	}
	render(){
		return(
			<div>
			<AppBar
			onLeftIconButtonClick={()=>this.toggleSidebar()}
           title="Sagarmatha"/>
           <Drawer open={this.state.open}
           docked={false}
           onRequestChange={()=>this.toggleSidebar()}
           	>
           <MenuItem>First</MenuItem>
           <MenuItem>Second</MenuItem>
           </Drawer>
			</div>
			)
		
	}
	toggleSidebar(){
		this.setState({open:!this.state.open})
	}
}
export default Header;