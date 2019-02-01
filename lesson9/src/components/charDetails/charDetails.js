import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './charDetails.css';
import gotService from '../../services/gotServices';

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

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
        //this.foo.bar = 0;
    }

    render() {

        if(!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;
        
        return (
            <MainDiv className="rounded">
                <HeaderFour>{name}</HeaderFour>
                <ListGroup flush>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Gender</BoldSpan>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Born</BoldSpan>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Died</BoldSpan>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <BoldSpan>Culture</BoldSpan>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </MainDiv>
        );
    }
}