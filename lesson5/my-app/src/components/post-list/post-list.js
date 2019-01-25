import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import PostListItem from '../post-list-item/';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item)=> {
        const {id, ...itemProps} = item;

         if (itemProps.label != undefined) {
            return (
                <ListGroupItem key={id}>
                    <PostListItem 
                    {...itemProps} 
                    onDelete={()=> onDelete(id)}/>
                </ListGroupItem>
            )
        }
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;