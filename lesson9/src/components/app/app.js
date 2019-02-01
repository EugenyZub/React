import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            error: false
        }
        this.hiddenBlock = this.hiddenBlock.bind(this);
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    hiddenBlock() {
        this.setState(prevState => ({
             visible: !prevState.visible 
            })
        );
    }

    render() {
        const {visible} = this.state;

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header onHidden={this.hiddenBlock}/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {visible ? <RandomChar/> : null}
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};