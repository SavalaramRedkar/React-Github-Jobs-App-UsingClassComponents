import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Job from "./Components/Job";
import SearchForm from "./Components/SearchForm";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      loading: false,
      error: false,
      query: "",
    };
  }

  url =
    "https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

  getData = () => {
    axios
      .get(this.url, {
        params: {
          markdown: true,
          description: this.state.query,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          jobs: response.data,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          jobs: [],
          loading: false,
          error: true,
        });
      });
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.getData();
  }

  handleInputChange = (e) => {
    e.preventDefault();

    this.setState({
      query: e.target.value,
    });
    this.getData();
  };

  render() {
    return (
      <Container>
        <h1 className="mb-4">GitHub Jobs</h1>
        <SearchForm
          query={this.state.query}
          handleInputChange={this.handleInputChange}
        />
        {this.loading && "Loading..."}
        {this.error && "Error Occurred! Please try refreshing page!"}
        {this.state.jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </Container>
    );
  }
}

export default App;
