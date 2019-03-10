import Header from '../modules/layout/components/Header';
import { bindActionCreators } from "redux";
import '../modules/layout/styles/HomeLayout.scss';
import Stocks from '../modules/content/components/Stocks';
import ViewMode from '../modules/content/components/ViewMode';

class Home extends React.Component {
  state = {}

  render() {
    // const { data } = this.props;
    return (
      <div className="home-layout">
        <Header />
        <ViewMode />
        <Stocks />
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     StoreLanguages: StoreLanguagesAction,
//     StoreMovies: StoreMoviesAction
//   }, dispatch)
// );

export default Home;