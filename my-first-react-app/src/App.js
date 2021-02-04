import React from 'react';
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

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

  render() {
    return (
      <div className='wizard'>
        <h1>React Wizard Form</h1>
        <p>Step {this.state.currentStep} </p>
        <form>
          <Step1 />
          <Step2 />
          <Step3 />
        </form>
      </div>
    );
  }
}

export default MasterForm;
