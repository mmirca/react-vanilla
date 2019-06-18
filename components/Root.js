const Root = React.createClass({
  getInitialState: function() {
    return {step: 0}
  },
  onNextStep: function(stepNumber) {
    this.setState({step: stepNumber || 0 });
  },
  render: function() {
    return React.createElement('div', {}, [
      React.createElement(Stepper, {
        key: 'stepper',
        onNextStep: this.onNextStep,
        step: this.state.step
      }),
      React.createElement(MoonTrip, {
        key: 'moontrip',
        step: this.state.step
      })
    ]);
  }
});
