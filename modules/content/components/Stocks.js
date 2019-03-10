import { connect } from 'react-redux';
import {WEB_SOCKET_URL} from "../../../constants";
import '../styles/Stocks.scss'
import Tag from './Tag';
import BarChart from './BarChart';
import TimeAgo from 'react-timeago';

class Stocks extends React.Component {
  state = {
    oldPrices: {},
    prices: [],
    time: (new Date())
  }

  componentDidMount() {
    const _this = this;
    const connection = new WebSocket(WEB_SOCKET_URL);

    connection.onmessage = function (e) {
      const time = new Date();
      const { prices } = _this.state;
      const oldPrices = {};

      prices.map(function([name, price]) {
        oldPrices[name] = {
          'price': price,
          'time': new Date()
        }
      });

      let newPrices = JSON.parse(e.data).sort();
      let max = 0;

      newPrices.map(function([name, price], index) {
        if(price > max){
          max = price;
        }
        let status = (oldPrices[name] && oldPrices[name].price && oldPrices[name].price > price) ? 'decreased' : 'increased';
        newPrices[index].push(status);
      });

      _this.setState({
        prices: newPrices,
        max,
        oldPrices,
        time
      });
    };
  }

  render() {
    const { prices, time, oldPrices, max } = this.state;
    const { stockData } = this.props;
    return (
      <div className="container all-stocks">
        <div className="row all-stocks__header-row">
          <div className="col-3 text-center">
            <span>Ticker Symbol</span>
          </div>
          <div className="col-6 text-center">
            <span>Price</span>
          </div>
          <div className="col-3 text-center">
            <span>Last Updated</span>
          </div>
        </div>
        {
          prices.map(([name, price, status], index) => (
            <div className="row all-stocks__stock-row" key={index}>
              <div className="col-3 text-center">
                <span>{name}</span>
              </div>
              <div className="col-6 text-center all-stocks__stock-price">
                {
                  stockData.viewMode === 'tags' ? (
                    <Tag price={parseFloat(price).toFixed(3)} status={status} />
                  ) : (
                    <BarChart price={parseFloat(price).toFixed(3)} max={max} status={status} />
                  )
                }
              </div>
              <div className="col-3 text-center">
                <span>
                  <TimeAgo date={oldPrices[name] && oldPrices[name].time !== undefined ? oldPrices[name].time : new Date()}/>
                </span>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stockData: state.stockData
});

export default connect(mapStateToProps, null)(Stocks);