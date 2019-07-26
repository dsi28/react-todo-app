import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props);
        //name id
        this.state = {
            list: [{
                title: 'todo item 1'
            }]
        }
        this.addItem =  this.addItem.bind(this);
    }
    addItem(item){
        this.setState((state)=> ({
            list: [...this.state.list, item]
        }))
    }
    render(){
        const todos = this.state.list.map((item)=>(
            <TodoItem title={item.title} id={item.id}/>
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