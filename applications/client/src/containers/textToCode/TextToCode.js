import React from 'react';
import {Component} from 'react';
import {Container, Form, Button, Card} from 'react-bootstrap';
import Dropdown from '../../components/Dropdown';
import { Col, Row } from "react-bootstrap";
import "../../index.css";
const {Configuration , OpenAIApi} = require("openai");

export default class TextToCode extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            heading: 'The response from the AI will be shown here',
            response: '....... await the response',
            language: '',
        };
        
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleDropdown = (language) => {
        this.setState({language});
    };

    onFormSubmit = e =>{

        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        console.log(formDataObj.productName);

        //OPENAI

        const configuration = new Configuration({
        apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion({
        model: "code-davinci-002",
        prompt: `${formDataObj.productName}\n\n\\"\\"\\"\nWrite a programming language code based on the given question:\n`,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["\"\"\""],
        }).then((response) =>{
            console.log(response)
       
            this.setState({
                heading: `AI Code Generation :`,
                response: `${response.data.choices[0].text}`,
            })
        });
    }

    render(){

        return(
            <Container>
                <br/>
                    <div className="div-containerrow">
                    <h1> Generate code for your query</h1>
                    <h4> Enter text and display the result for it.</h4>
                    </div>
                    <br />
                    <br />

                    <Dropdown
                        data={[
                            {value: 1, label: 'Python'},
                            {value: 2, label: 'Java'},
                            {value: 3, label: 'C++'},
                        ]}
                        value={this.state.language}
                        placeholder='Select programming language'
                        onChange={this.handleDropdown}  
                    />
                    <br />
                    <br />
                

                    <Row>
                    <Col>
                        <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> What code you want to generate? </Form.Label>
                            <Form.Control as="textarea" name="productName" placeholder="Enter your query" rows={5}/>
                            <Form.Text className="text-muted">
                            Enter as much information as possible for more accurate code generation.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" size="lg" type="submit">
                            Get AI Suggestions
                        </Button>
                        </Form>
                    </Col>  
                    </Row>
                    <br />
                    <br />
                    <Card>
                    <Card.Body>
                        <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                        <br />
                        <Card.Text>
                        <h4>
                            {this.state.response}
                        </h4>
                        </Card.Text>
                    </Card.Body>
                    </Card>          
            </Container> 
        )
    }
  }






  