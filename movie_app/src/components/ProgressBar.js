import React, {Component}  from 'react';
import './style.css';

class ProgressBar extends Component {
  render() {
    return (
      <div class="progress progress-infinite progress-striped">
        <div class="progress-bar"/>
      </div>
    )
  }
}

export default ProgressBar;