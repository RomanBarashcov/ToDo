import React, {Component} from "react";
import ToDoItemComponent from "./todo_item_component";

class ToDoListComponent extends Component {
    
    constructor(props) {
        super(props);

        this.completeTodoHandler = this.completeTodoHandler.bind(this);
    }

    completeTodoHandler(todoId) {
        this.props.actions.completeTodo(todoId);
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

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><div>#</div></th>
                                <th scope="col"><div>Priority</div></th>
                                <th scope="col"><div>Description</div></th>
                                <th scope="col"><div>Created At</div></th>
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
                                        complete={item.complete}
                                        description={item.description}
                                        createdAt={item.createdAt}
                                        completeTodoHandler={this.completeTodoHandler} />
                                );
                            }, this)
                        }
                        </tbody>
                    </table>
            );
        }

        return content;
    }
}

export default ToDoListComponent;
