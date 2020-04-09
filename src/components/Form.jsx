import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        /*    this.typingChange = this.typingChange.bind;
           this.formSubmit = this.formSubmit.bind */
    }

    typingChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        /* alert(' A name was submitted: ' + this.state.value) */
        let el = document.createElement("div");
        el.innerHTML = '<p>{this.state.value}</p>'
        console.log(this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Username: </label>
                    <input type="text" value={this.state.value} onChange={this.typingChange} name="name" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;