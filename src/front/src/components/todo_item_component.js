import React, {Component} from "react";

class ToDoItemComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        };

        this.completeTodoHandler = this.completeTodoHandler.bind(this);
        this.editToDoHandler = this.editToDoHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.priorityHandler = this.priorityHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCancelHandler = this.onCancelHandler.bind(this);
    }

    completeTodoHandler(evt) {
        evt.preventDefault();
        let id = parseInt(evt.currentTarget.getAttribute("data-id"), 10);
        this.props.completeTodoHandler(id);
    }

    editToDoHandler() {
        this.setState({edit: true});
    }

    descriptionHandler(evt) {
        let { value } = evt.target;
        this.setState({description: value});
    }

    priorityHandler(evt) {
        let { value } = evt.target;
        this.setState({priority: value});
    }
    
    onSubmitHandler() {
        const {description, complete, priority} = this.state;
        let createAt = new Date(); 
        this.props.action.createToDo(description, createAt, complete, priority);
        this.destroyState();
    }

    onCancelHandler() {
        this.setState({edit: false});
    }

    renderStatic() {

        return (
            <tr data-id={this.props.todoId}>
                    <td><div>{this.props.index}</div></td>
                    <td><div>{this.props.priority}</div></td>
                    <td><div>{this.props.description}</div></td>
                    <td><div>{this.props.createAt}</div></td>
                    <td><div onClick={this.completeTodoHandler}>
                            <input type="checkbox" className="form-check-input" value={this.props.complete} />
                        </div>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
        );
    }

    renderEdit() {
        return (
            <tr data-id={this.props.todoId}>
                <td>
                    <div>{this.props.index}</div>
                </td>
                <td>
                    <div> 
                        <input type="number" min="1" max="100" className="form-control" placeholder="Priority" onChange={this.priorityHandler} value={this.state.priority}/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="text" classNames="form-control" placeholder="Discription" onChange={this.descriptionHandler} value={this.state.description} />
                    </div>
                </td>
                <td>
                    <div>{this.props.createAt}</div>
                </td>
                <td><div onClick={this.completeTodoHandler}>
                        <input type="checkbox" className="form-check-input" value={this.props.complete} />
                    </div>
                </td>
                <td>
                    <button onClick={this.onSubmitHandler} className="btn btn-success mb-2">Save</button>
                </td>
                <td>
                    <button onClick={this.onCancelHandler} className="btn btn-warning mb-2">Cancel</button>
                </td>
            </tr>
        );
    }

    render() {

        let content = null;
        
        if(this.state.edit) {
            content = this.renderEdit();
        } else {
            content = this.renderStatic();
        }
       
        return content;
    }
}


export default ToDoItemComponent;
