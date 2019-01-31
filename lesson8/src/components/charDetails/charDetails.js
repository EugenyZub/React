import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './charDetails.css';

const MainDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`
const HeaderFour = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`
const BoldSpan = styled.span`
    font-weight: bold;
`

export default class CharDetails extends Component {

    render() {
        return (
            <MainDiv className="rounded">
                <HeaderFour>John Snow</HeaderFour>
                <ListGroup flush>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Gender</BoldSpan>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Born</BoldSpan>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Died</BoldSpan>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Culture</BoldSpan>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </MainDiv>
        );
    }
}