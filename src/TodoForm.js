import React,{Component} from 'react';
import uuid from 'uuid/v4';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:{
                title: '',
                id: uuid()
            }
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerChange(e){
        this.setState({
            item: {...this.state.item, [e.target.name]: e.target.value}
        });
    }
    handlerSubmit(e){
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({item: {
            title: '',
            id: uuid()
        }});
    }

    render(){
        return(
            <form onSubmit={this.handlerSubmit}>
                <input value={this.state.item.title}
                type='text'
                onChange={this.handlerChange}
                name='title'
                />
                <button>Create</button>
            </form>
        )
    }
}
export default TodoForm;