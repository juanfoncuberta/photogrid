import React, { Component } from 'react';
import { connect } from 'react-redux';
import Warning from './Warning';

class WarningCointaner extends Component {
  state = {
    warningVisible: this.props.warningVisible,
    warningContent: this.props.warningContent,
  };
  static getDerivedStateFromProps({ warningVisible, warningContent }) {
    return {
        warningVisible,
        warningContent,
    };
  }

  render() {
    return (
      <Warning
      warningVisible={this.state.warningVisible}
        warningContent={this.state.warningContent}

      />
    );
  }
}

const mapStateToProps = state => ({
    warningContent: state.home.warningContent,
  warningVisible: state.home.warningVisible
});

export default connect(mapStateToProps)(WarningCointaner);
