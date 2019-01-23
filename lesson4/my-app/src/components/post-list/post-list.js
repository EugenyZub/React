import React from 'react';

import PostListItem from '../post-list-item/';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item)=> {
        const {id, ...itemProps} = item;

         if (itemProps.label != undefined) {
            return (
                //console.log(itemProps.label)
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps} />
                </li>
            )
        }

        // return (
        //     <li key={id} className='list-group-item'>
        //         <PostListItem {...itemProps} />
        //         {/* label={item.label}
        //          important={item.important} */}
        //     </li>
        // )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;