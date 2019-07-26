import React,{Component} from 'react';
import TodoEditForm from './TodoEditForm';
import './TodoItem.css';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = { 
            showEditForm: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.updateShowForm = this.updateShowForm.bind(this);
    }
    updateShowForm(){
        this.setState({showEditForm: false});
    }
    handleClick(e){
        switch (e.target.name) {
            case 'delete':
                this.props.removeItem(this.props.id);
                break;
            case 'edit':
                this.setState({showEditForm: true});
                break;
            default:
                break;
        }
    }
    render(){
        const displayOptions = (this.state.showEditForm ?
            <TodoEditForm title={this.props.title} 
            id={this.props.id} 
            updateItem={this.props.updateItem}
            updateShowForm={this.updateShowForm}/> 
            :<div className='TodoItem-container'>
                <p className='TodoItem-title'>{this.props.title}</p>
                <section>
                    <button name='edit' 
                    onClick={this.handleClick}>edit</button>                
                    <button name='delete' 
                    onClick={this.handleClick}>X</button>
                </section>
            </div>
            );
        return(
            <div>
                {displayOptions}
            </div>
        )
    }
}
export default TodoItem;