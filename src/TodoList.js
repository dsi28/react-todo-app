import React,{Component} from 'react';
import TodoForm from './TodoForm';

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
        return(
            <div>
                <TodoForm addItem={this.addItem}/>
            </div>
        )
    }
}
export default TodoList;