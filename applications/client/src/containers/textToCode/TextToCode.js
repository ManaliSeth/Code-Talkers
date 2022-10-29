import React from 'react';
import {Component} from 'react';
import {Container, Form, Button, Card} from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import "../../index.css";
const {Configuration , OpenAIApi} = require("openai");

export default class CodeToCode extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            heading: 'The response from the AI will be shown here',
            response: '....... await the response',
            dropdownValue: "Python"
        };
        
        this.handleDropdown = this.handleDropdown.bind(this);
    }


    handleDropdown = event => {
        this.setState({
          dropdownValue: event.target.value
        });
      };

    handleFormSubmit = e =>{

        e.preventDefault()

        console.log("Chosen programming language:", this.state.dropdownValue);

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj.query)

        //OPENAI

        const configuration = new Configuration({
        apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion({
        model: "code-davinci-002",
        prompt: `\n\n\\"\\"\\"\nWrite a ${this.state.dropdownValue} code to ${formDataObj.query}:\n`,
        temperature: 0.1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["\"\"\""],
        }).then((response) =>{
            console.log(response);
            this.setState({
                heading: `AI Code Generation :`,
                response: `${response.data.choices[0].text}`,
                dropdownValue: `${this.state.dropdownValue}`,
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

                    <Row>
                    <Col>
                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="progLang">Select Programming language</Form.Label>
                                <Form.Select
                                    value={this.state.dropdownValue}
                                    onChange={this.handleDropdown}
                                    className="form-control"
                                    id="progLang"
                                    >
                                    {/* <option value="noLangSelected">Select language</option> */}
                                    <option value="Python">Python</option>
                                    <option value="Java">Java</option>
                                    <option value="C++">C++</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Write your query to generate code </Form.Label>
                                <Form.Control required as="textarea" name="query" placeholder="Enter your query" rows={5}/>
                                <Form.Text className="text-muted">
                                    Enter as much information as possible for more accurate code generation. By default it will generate code in Python
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
                        <Card.Title><h3>{this.state.dropdownValue} code</h3></Card.Title>
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






  