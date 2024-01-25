import React, { Component } from 'react';
import TreeLvl1 from './TreeLvl1';

class DeepTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'our data',
    };
  }

  handleUniverseDestruction = () => {
    alert('But why');
  };

  render() {
    const { user } = this.props;

    return (
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
        }}
      >
        <h1>DeepTree</h1>
        <TreeLvl1
          data={this.state.data}
          handleClick={this.handleUniverseDestruction}
          style={{ color: 'red' }}
          user={user}
          children={<p>Magic</p>}
        />
      </div>
    );
  }
}

export default DeepTree;
