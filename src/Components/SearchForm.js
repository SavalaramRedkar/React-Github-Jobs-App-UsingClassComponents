import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

export class SearchForm extends Component {
  render() {
    return (
      <Form className="mb-4">
        <Form.Row className="align-items-end">
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={this.props.query}
              onChange={this.props.handleInputChange}
              name="description"
              type="text"
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default SearchForm;
