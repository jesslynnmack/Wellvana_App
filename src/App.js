import React from "react";
import { ButtonGroup } from "reactstrap";
import "./App.css";
import Link from "./components/Links";
import Navigation from "./components/NavBar";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="App">
        <Navigation
          className="logo"
          image="http://wellvana.com/wp-content/uploads/2020/01/Wellvana_Logo-1400x356-2-e1578693909470.png"
        />
        <div className="container-fluid">
          <ButtonGroup size="lg">
            <Link
              url="http://wellvana.com/markets/"
              className="my-button"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons2_0005_motus-creative-group-marketing-agency-service-icons-branding-Asset-1.png"
              text="Find a Wellvana Provider"
            ></Link>
            <Link
              url="#"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0007_Layer-14.png"
              text="Patient Resources"
            ></Link>
          </ButtonGroup>
          <ButtonGroup size="lg">
            <Link
              url="https://apps.apple.com/us/app/sherpaa/id934508304"
              className="my-button"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0001_Layer-20.png"
              text="TeleMedicine"
            ></Link>
            <Link
              url="https://pratter.us/"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons-1_0006_Layer-15.png"
              text="Pratter.us"
            ></Link>
          </ButtonGroup>
          <ButtonGroup size="lg">
            <Link
              url="http://altrisk.com/"
              className="my-button"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons2_0004_motus-creative-group-marketing-agency-service-icons-branding-Asset-2.png"
              text="Access Plan Info"
            ></Link>
            <Link
              url="#"
              image="http://wellvana.com/wp-content/uploads/2019/10/wellvana-graphic-icons2_0001_motus-creative-group-marketing-agency-service-icons-branding-Asset-5.png"
              text="Care Management"
            ></Link>
          </ButtonGroup>
        </div>
        <div className="contactUs">
          <h2>Contact Us</h2>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <input
                placeholder="Name"
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                className="form-control"
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default App;
