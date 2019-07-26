import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import uuid from 'uuid/v4';

class TodoList extends Component{
    constructor(props){
        super(props);
        //name id
        this.state = {
            list: [{
                title: 'todo item 1',
                id: uuid()
            }]
        }
        this.addItem =  this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }
    addItem(item){
        this.setState((state)=> ({
            list: [...this.state.list, item]
        }))
    }
    removeItem(id){
        this.setState({
            list: this.state.list.filter((item)=>{
                return id !== item.id;
            })
        });
    }
    updateItem(item){
        console.log('updateItem');
        this.setState({
            list: this.state.list.map((todo)=>{
                if(item.id === todo.id){
                    todo.title = item.title;
                }
                return todo;
            })
        });
        console.log(this.state.list);
    }
    render(){
        const todos = this.state.list.map((item)=>(
            <TodoItem title={item.title} 
            key={item.id} 
            id={item.id}
            removeItem={this.removeItem}
            updateItem={this.updateItem}/>
        ));
        return(
            <div>
                {todos}
                <TodoForm addItem={this.addItem}/>
            </div>
        )
    }
}
export default TodoList;