const Root = React.createClass({
  // React function: Set the initial state of the component
  getInitialState: function() {
    return {step: 0}
  },
  // Custom function: to set the new component state
  onNextStep: function(stepNumber) {
    this.setState({step: stepNumber || 0 });
  },
  // React function: Render the returned content
  render: function() {
    return React.createElement('div', {}, [
      React.createElement(Stepper, {
        // Optional: Used for array rendering performance
        key: 'stepper',
        // Pass the component's onNextStep function as callback to the child component
        onNextStep: this.onNextStep,
        // Pass the parent state "step" value to the child component
        step: this.state.step
      }),
      React.createElement(MoonTrip, {
        key: 'moontrip',
        step: this.state.step
      })
    ]);
  }
});
