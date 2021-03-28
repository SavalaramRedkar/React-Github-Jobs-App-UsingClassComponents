import React, { Component } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleViewDetails = () => {
    this.setState((prevOpen) => ({
      open: !prevOpen.open,
    }));
  };

  render() {
    return (
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {this.props.job.title} -{" "}
                <span className="text-muted font-weight-light">
                  {this.props.job.company}
                </span>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                {new Date(this.props.job.created_at).toLocaleDateString()}
              </Card.Subtitle>
              <Badge variant="secondary" className="mr-2">
                {this.props.job.type}
              </Badge>
              <Badge variant="secondary">{this.props.job.location}</Badge>
              <div style={{ wordBreak: "break-all" }}>
                <ReactMarkdown source={this.props.job.how_to_apply} />
              </div>
            </div>
            <img
              className="d-none d-md-block"
              height="50"
              alt={this.props.job.company}
              src={this.props.job.company_logo}
            />
          </div>
          <Card.Text>
            <Button onClick={this.handleViewDetails} variant="primary">
              {this.state.open ? "Hide Details" : "View Details"}
            </Button>
          </Card.Text>
          <Collapse in={this.state.open}>
            <div className="mt-4">
              <ReactMarkdown source={this.props.job.description} />
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    );
  }
}

export default Job;
