import React, {Component} from "react";
import ToDoItemComponent from "./todo_item_component";

class ToDoListComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            orderBy: "",
            ascOrDesc: false,
            filteredByComplet: false
        };

        this.completeStatusHandler = this.completeStatusHandler.bind(this);
        this.orderByHandler = this.orderByHandler.bind(this);
        this.filterHandler = this.filterHandler.bind(this);
    }

    completeStatusHandler(todoId, complete) {
        this.props.actions.changeTodoCompleteStatus(todoId, complete);
    }

    orderByHandler(evt) {
        const orderBy = evt.currentTarget.getAttribute("data");
        debugger;

        this.state.setState({
            orderBy: orderBy,
            ascOrDesc: !this.state.ascOrDesc
        });

        this.actions.loadToDos(this.state.orderBy, this.state.ascOrDesc, this.state.filteredByComplet);
    }

    filterHandler() {
        this.setState({filteredByComplet: !this.state.filteredByComplet});
        this.props.actions.loadToDos(this.state.orderBy, this.state.ascOrDesc, this.state.filteredByComplet);
    }

    renderFilterButton() {

        let content = null;
        
        if(!this.state.filteredByComplet) {

            content = (<div>Filter by: <button>Isn't Complete</button></div>);
        } else {

            content = (<div>Filter by: <button>Completed</button></div>);
        }

        return content;
    }

    render() {

        let content = null;

        if (this.props.data.loading) {
            return (<div className="content">
                        <span> Loading ...</span>
                    </div>);
        }

        if (this.props.data.loaded) {

            content = (
                    <div>
                        <br />
                         {this.renderFilterButton}
                        <br />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><div>#</div></th>
                                <th scope="col" data="priority" onClick={this.orderByHandler}><div>Priority</div></th>
                                <th scope="col" data="description" onClick={this.orderByHandler}><div>Description</div></th>
                                <th scope="col" data="createdAt" onClick={this.orderByHandler}><div>Created At</div></th>
                                <th scope="col"><div>Complete</div></th>
                                <th scope="col"><div></div></th>
                                <th scope="col"><div></div></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.data.list.map((item, index) => {
                                return (
                                    <ToDoItemComponent
                                        key={index}
                                        todoId={item.id}
                                        priority={item.priority}
                                        completed={item.completed}
                                        description={item.description}
                                        createdAt={item.createdAt}
                                        completeStatusHandler={this.completeStatusHandler}
                                        actions={this.props.actions} />
                                );
                            }, this)
                        }
                        </tbody>
                    </table>
                    </div>
            );
        }

        return content;
    }
}

export default ToDoListComponent;
