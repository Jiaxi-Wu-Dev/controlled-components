import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            age: '',
            gender: ''
        }

        /*    this.typingChange = this.typingChange.bind;
           this.formSubmit = this.formSubmit.bind */
    }

    typingChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        /* alert(' A name was submitted: ' + this.state.value) */
        console.log(this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Username: </label>
                    <input type="text" value={this.state.value} onChange={this.typingChange} name="name" />
                    <label> Password: </label>
                    <input type="text" value={this.state.value} onChange={this.typingChange} password="password" />
                    <label> Age: </label>
                    <input type="text" value={this.state.value} onChange={this.typingChange} age="age" />
                    <label> Gender: </label>
                    <input type="text" value={this.state.value} onChange={this.typingChange} gender="gender" />
                    <input type="submit" value="Submit" />
                </form>
                <h1>{this.state.name}</h1>
                <h1>{this.state.password}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.gender}</h1>
            </div>
        );
    }
}

export default Form;