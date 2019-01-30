import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Input} from 'reactstrap';
import styled from 'styled-components';

//import './post-add-form.css';

const Post = styled.form`
    display: fex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <Post 
                onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type="submit"
                    outline 
                    color="secondary">
                    Добавить
                </Button>
            </Post>
        )
    }
}