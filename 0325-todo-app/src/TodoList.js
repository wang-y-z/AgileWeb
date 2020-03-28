import React,{Component} from 'react';
import ListItem from './ListItem';
import NewItem from './NewItem';


class TodoList extends Component{
	
	constructor(){
		super();
		this.state = {
			todoList : [
				{content:'sssss', done:true},
				{content:'sssfffs', done:false}
			]
		}
	}
	
	addNewItem = (newItemContent) => {
		const newList = [...this.state.todoList,{content: newItemContent,done: false}];
		this.setState({
			todoList:newList
		}
		)
	}
	render(){		
		return (
			<div>
			{
				this.state.todoList.map(item => <ListItem item={item}/>)
			}
			<NewItem addItem={this.addNewItem}/>
			</div>
		);
	}
}

export default TodoList;