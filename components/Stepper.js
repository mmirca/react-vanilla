const Stepper = React.createClass({
  // Custom function: Use the callback provided by the parent to set the parent's state
  emitNextStep: function(e) {
    this.props.onNextStep(Number(e.target.value));
  },
  // Custom function: Return active style class name if the provided value matches the "step" property
  // the parent is parent is passing down to this component
  getBackgroundClass: function(stepValue) {
    if (this.props.step === stepValue) {
      return 'bg-primary';
    } else {
      return 'bg-dark';
    }
  },
  render: function() {
    return React.createElement('div', {}, [
      React.createElement('button', {
        key: 0,
        // React property: Used to declare CSS classes
        className: `rounded-circle text-white mr-2 ${this.getBackgroundClass(0)}`,
        // React property: Used to attach a callback to the element's click event
        onClick: this.emitNextStep,
        // HTML property: Plain HTML value property
        value: 0
      }, '1'),
      React.createElement('button', {
        key: 1,
        className: `rounded-circle text-white mr-2 ${this.getBackgroundClass(1)}`,
        onClick: this.emitNextStep,
        value: 1
      }, '2'),
      React.createElement('button', {
        key: 2,
        className: `rounded-circle text-white mr-2 ${this.getBackgroundClass(2)}`,
        onClick: this.emitNextStep,
        value: 2
      }, '3'),
      React.createElement('button', {
        key: 3,
        className: `rounded-circle text-white ${this.getBackgroundClass(3)}`,
        onClick: this.emitNextStep,
        value: 3
      }, '4'),
    ])
  }
});
