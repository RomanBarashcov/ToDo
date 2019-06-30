import React, {Component} from "react";
import moment from "moment";

class ToDoItemComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            description: this.props.description,
            priority: this.props.priority
        };

        this.completeStatusHandler = this.completeStatusHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.priorityHandler = this.priorityHandler.bind(this);
        this.editToDoHandler = this.editToDoHandler.bind(this);
        this.deleteToDoHandler = this.deleteToDoHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCancelHandler = this.onCancelHandler.bind(this);
    }

    completeStatusHandler() {
        let id = this.props.todoId;
        let complete = this.props.complete;
        this.props.completeStatusHandler(id, complete);
    }

    descriptionHandler(evt) {
        let { value } = evt.target;
        this.setState({description: value});
    }

    priorityHandler(evt) {
        let { value } = evt.target;
        this.setState({priority: value});
    }
    
    editToDoHandler() {
        this.setState({ edit: true });
    }

    deleteToDoHandler() {
        let id = this.props.todoId;
        this.props.actions.deleteToDo(id);
    }

    onSubmitHandler() {
        const { description, complete, priority } = this.state;
        let todoId = this.props.todoId; 
        let createAt = this.props.createAt;
        this.props.actions.updateToDos(todoId, description, createAt, complete, priority);
        this.setState({ edit: false });
    }

    onCancelHandler() {
        this.setState({
            edit: false, 
            description: this.props.description, 
            priority: this.props.priority
        });
    }

    renderStatic() {

        return (
            <tr data-id={this.props.todoId}>
                    <td><div>{this.props.index}</div></td>
                    <td><div>{this.props.priority}</div></td>
                    <td><div>{this.props.description}</div></td>
                    <td><div>{moment(this.props.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div></td>
                    <td><div onClick={this.completeStatusHandler}>
                            <input type="checkbox" className="form-check-input" value={this.props.complete} />
                        </div>
                    </td>
                    <td>
                        <button onClick={this.editToDoHandler} className="btn btn-primary mb-2">Edit</button>
                    </td>
                    <td>
                        <button onClick={this.deleteToDoHandler} className="btn btn-danger mb-2">Delete</button>
                    </td>
                </tr>
        );
    }

    renderEdit() {;

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
                        <input type="text" className="form-control" placeholder="Discription" onChange={this.descriptionHandler} value={this.state.description} />
                    </div>
                </td>
                <td>
                    <div>{moment(this.props.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                </td>
                <td><div onClick={this.completeStatusHandler}>
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
