import React, {Component} from 'react';
import { ListGroupItem } from 'reactstrap';
import './itemList.css';
import gotService from '../../services/gotServices';
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const {charList} = this.state;

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list">
                {items}
            </ul>
        );
    }
}