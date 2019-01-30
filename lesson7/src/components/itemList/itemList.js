import React, {Component} from 'react';
import { ListGroupItem } from 'reactstrap';
import './itemList.css';

export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list">
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ul>
        );
    }
}