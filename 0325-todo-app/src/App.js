import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoList from "./TodoList";
import ListItem from "./ListItem";
import TodoListDelete from "./TodoListDelete"


class App extends Component {
	
	render(){
		
		return (
		<div className="App">
			<TodoListHeader />
			<TodoList />
			<TodoListDelete>
		</div>
		);	
	}
}

export default App;
