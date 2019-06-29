import React, {Component} from "react";

class AddToDoComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            priority: 1,
            complete: false
        }

        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.priorityHandler = this.priorityHandler.bind(this);
        this.completeTodoHandler = this.completeTodoHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.destroyState = this.destroyState.bind(this);
    }

    descriptionHandler(evt) {
        let { value } = evt.target;
        this.setState({description: value});
    }

    priorityHandler(evt) {
        let { value } = evt.target;
        this.setState({priority: value});
    }

    completeTodoHandler(evt) {
        let { value } = evt.target;
        this.setState({complete: value});
    }
    
    onSubmitHandler() {
        const {description, priority, complete} = this.state;
        let createdAt = new Date(); 
        this.props.actions.createToDo(description, createdAt, complete, priority);
        this.destroyState();
    }

    destroyState() {
        this.setState({
            description: "",
            priority: 1,
            complete: false
        });
    }

    render() {

        let content = null;

        content = (<div className="row">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" placeholder="Discription" onChange={this.descriptionHandler} value={this.state.description} />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="number" min="1" max="100" className="form-control" placeholder="Priority" onChange={this.priorityHandler} value={this.state.priority}/>     
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="checkbox" className="form-check-input" onChange={this.completeTodoHandler} value={this.state.complete}/>       
                    </div>
                    <button className="btn btn-success mb-2" onClick={this.onSubmitHandler}>Add ToDo</button>
                </div>
        );
        
        return content;
    }
}


export default AddToDoComponent;
