import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    save() {
        var todos = [...this.state.todos];
        todos.push(this.newText.value);
        console.log(todos)
        this.setState({ todos });
        this.newText.value = "";
    }

    render() {
        function showValue(id) {
            console.log(`The id ${id}`);
        }

        return (
            <div className="comment">
                <h1> Comentários</h1>
                <textarea ref={(comment) => { this.newText = comment }} />
                <button onClick={this.save.bind(this)}>Save</button>
                <ul>
                    {this.state.todos.map(function (todo, index) {
                        return <li key={index}>{todo} ::<button onClick={() => showValue(index)}>Print</button></li>
                    })}
                </ul>
            </div>
        );
    }

}

export default Form;