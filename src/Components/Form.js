import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import './Form.css';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       handle: '',
       tweet: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/b883ad3f-014e-48c3-81ac-c7c2076addb4', this.state)
    .then(response => {
      console.log(response);
    })
  }
  render() {
    const {name, handle, tweet} = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>Post!</Header>
        <Form className="form">
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type='text' name="name" value = {name} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Handle</label>
            <input placeholder='Enter your handle' type="text" name = "handle" value = {handle} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Tweet</label>
            <input placeholder='Tweet' type="text" name = "tweet" value = {tweet} onChange={this.changeHandler} />
          </Form.Field>
          
          <Button color="blue" type='submit'>Tweet</Button>
        </Form>
      </Container>
    )
  }
}