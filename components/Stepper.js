const Stepper = React.createClass({
  emitNextStep: function(e) {
    this.props.onNextStep(Number(e.target.value));
  },
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
        className: `rounded-circle text-white mr-2 ${this.getBackgroundClass(0)}`,
        onClick: this.emitNextStep,
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
