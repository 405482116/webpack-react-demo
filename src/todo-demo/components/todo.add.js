import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import {Form, Button} from 'react-bootstrap';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Todo description</Form.Label>
                    <Form.Control type="text" placeholder="What todo need?" 
                            onChange={e => this.updateInput(e.target.value)}
                            value={this.state.input} />
                    <Form.Text className="text-muted">
                    We'll never share your todo with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleAddTodo}>
                    Add Todo
                </Button>
            </Form>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);