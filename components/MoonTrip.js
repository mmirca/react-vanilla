const MoonTrip = React.createClass({
  render: function () {
    // We can use variables to store HTML fragments
    let pageContent;
    switch (this.props.step) {
      case 3:
        pageContent = React.createElement('p', {}, `Done!! \u{1F468}\u{200D}\u{1F680} \u{1F47E}`);
        break;
      case 2:
        pageContent = React.createElement('p', {}, `Don't look down... \u{1F319}`);
        break;
      case 1:
        pageContent = React.createElement('p', {}, `Bye... \u{1F30D}`);
        break;
      default:
        pageContent = React.createElement('p', {}, `Lets's get started! \u{1F680}`);
    }
    return React.createElement('div', {
      className: 'display-4 mt-2'
    }, pageContent);
  }
});
