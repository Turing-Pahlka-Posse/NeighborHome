import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  },
});
