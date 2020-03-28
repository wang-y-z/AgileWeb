import React,{Component} from 'react';
import './ListItem.css';


const ListItem = (props) => {
	const item = props.item;
	
	if(item.done){
		return <p className="done-item">{item.content}</p>
	} else{
		return <p className="item">{item.content}</p>
	}
}
export default ListItem;