import React, { useState } from 'react';
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import "./styles.css";

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      password: '',
    }
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };
  
  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
      return (
        <button 
          className='btn btn-secondary' 
          type='button' 
          onClick={this.prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }
  
  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button'
          onClick={this.next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
            Email: ${email} \n 
            Username: ${username} \n
            Password: ${password}`);
  };

  render() {
    return (
      <div className='wizard'>
        <h1>React Wizard Form</h1>
        <p>Step {this.state.currentStep} </p>
        <form onSubmit={this.handleSubmit}>
          <Step1 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email} 
          />
          <Step2 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email} 
          />
          <Step3 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email} 
          />
          {this.previousButton()}
          {this.nextButton()}
          <UserComponent />
        </form>
      </div>
    );
  }
}

function UserComponent() {
  const [name, setName] = useState('Jack')
  if(name === 'Jack') {
    setName("cerol")
  }
  return <h1> Hello World! {name}</h1>
}

export default MasterForm;
