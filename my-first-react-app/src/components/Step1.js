function Step1(props) {
    if (props.currentStep !== 1) {
        return null;
    }
    return <h1>Step 1 Component</h1>;
}

export default Step1;