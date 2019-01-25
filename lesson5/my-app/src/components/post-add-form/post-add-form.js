import React from 'react';
import {Button} from 'reactstrap';
import {Input} from 'reactstrap';
import styled from 'styled-components';

//import './post-add-form.css';

const Post = styled.div`
    display: fex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

const PostAddForm = ({onAdd}) => {
    return (
        <Post>
            <Input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <Button
                type="submit"
                outline 
                color="secondary"
                onClick={() => onAdd('Hello')}>
                Добавить
            </Button>
        </Post>
    )
}

export default PostAddForm;