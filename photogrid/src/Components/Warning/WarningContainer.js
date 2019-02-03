import React, { Component } from 'react';
import { connect } from 'react-redux';
import Warning from './Warning';
import { homeSet } from '../../Store'

class WarningCointaner extends Component {
  state = {
        warningVisible: this.props.warningVisible
  };
  static getDerivedStateFromProps({ warningVisible, warningContent }) {
    return {
        warningVisible,
        warningContent,
    };
  }
  onWarningClicked = () => {  
    this.state.warningVisible = false
    this.props.homeSet(this.state)
  }

  render() {
    return (
      <Warning
        warningVisible={this.state.warningVisible}
        warningContent={this.state.warningContent}
        onWarningClicked={this.onWarningClicked}

      />
    );
  }
}

const mapStateToProps = state => ({
    warningContent: state.home.warningContent,
    warningVisible: state.home.warningVisible
});

const mapDispatchToProps = {
    homeSet
}
export default connect(mapStateToProps,mapDispatchToProps)(WarningCointaner);

