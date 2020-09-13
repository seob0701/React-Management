import React, { Component } from "react";

class Customer extends Component {
  render() {
    return (
      <>
        <CustomerProfile
          image={this.props.image}
          name={this.props.name}
          id={this.props.id}
        />
        <CustomerInfo
          birthday={this.props.birthday}
          gender={this.props.gender}
          job={this.props.job}
        />
      </>
    );
  }
}

class CustomerProfile extends Component {
  //id name image
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </div>
    );
  }
}
class CustomerInfo extends Component {
  // birthday, job, gender
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
