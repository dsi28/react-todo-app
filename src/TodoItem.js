import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        switch (e.target.name) {
            case 'delete':
                this.props.removeItem(this.props.id);
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
                <button name='delete' onClick={this.handleClick}>X</button>
            </div>
        )
    }
}
export default TodoItem;