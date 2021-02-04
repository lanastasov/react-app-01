import React from 'react';
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

  render() {
    return (
      <div className='wizard'>
        <h1>React Wizard Form</h1>
        <p>Step {this.state.currentStep} </p>
        <form>
          <Step1 currentStep={this.state.currentStep} />
          <Step2 currentStep={this.state.currentStep} />
          <Step3 currentStep={this.state.currentStep} />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </div>
    );
  }
}

export default MasterForm;
