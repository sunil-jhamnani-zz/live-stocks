import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import '../styles/ViewMode.scss'
import '../../../assets/images/icons/bars-icon.svg';
import '../../../assets/images/icons/tag-icon.svg';
import {
  ToggleMode as ToggleModeAction
} from '../../../actions/stockActions';
import classNames from 'classnames';
class ViewMode extends React.Component {
  state = {
    viewMode: 'tags'
  }

  handleModeChange(viewMode) {
    const { ToggleMode } = this.props;
    this.setState({
      viewMode
    });
    ToggleMode(viewMode)
  }

  render() {
    const {stockData} = this.props;

    return (
      <div className="view-mode text-right">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <button className={classNames('btn btn-light d-flex view-mode__button', {'active': stockData.viewMode === 'tags'})} onClick={() => this.handleModeChange('tags')}>
            <svg className="view-mode__icon">
              <use xlinkHref="#tag-icon" />
            </svg>
            Tag View
          </button>
          <button className={classNames('btn btn-light d-flex view-mode__button', {'active': stockData.viewMode === 'bars'})} onClick={() => this.handleModeChange('bars')}>
            <svg className="view-mode__icon">
              <use xlinkHref="#bars-icon" />
            </svg>
            Bar View
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ToggleMode: ToggleModeAction
  }, dispatch)
);

const mapStateToProps = state => ({
  stockData: state.stockData
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMode);