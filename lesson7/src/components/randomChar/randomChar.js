import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
//import './randomChar.css';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`
const RandomBlockHeader = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`
const RandomSpan = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock className="rounded">
                <RandomBlockHeader>Random Character: John</RandomBlockHeader>
                <ListGroup flush>
                    <ListGroupItem className="d-flex justify-content-between">
                        <RandomSpan>Gender </RandomSpan>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <RandomSpan>Born </RandomSpan>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <RandomSpan>Died </RandomSpan>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <RandomSpan>Culture </RandomSpan>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}
