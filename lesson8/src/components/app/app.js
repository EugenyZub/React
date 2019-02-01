import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: true
        }
        this.hiddenBlock = this.hiddenBlock.bind(this);
    }

    hiddenBlock() {
        this.setState(prevState => ({ visible: !prevState.visible }));
    }

    render () {
        return (
            <> 
                <Container>
                    <Header onHidden={this.hiddenBlock}/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {this.state.visible ? <RandomChar/> : null}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};