import generateTagColor from "../../../utils/generateTagColor";
import '../styles/BarChart.scss'

const BarChart = ({ price, status, max }) => {
  const width = (price / max) * 100;
  const color = generateTagColor(status);

  return (
    <div className='row no-gutters bar-chart'>
      <div className='col-2'>
        <b
          className="bar-chart__value"
          style={{
            color: color
          }}
        >{price}</b>
      </div>
      <div className='col-10'>
        <div
          className="bar-chart__bar"
          style={{
            backgroundColor: color,
            width: width + '%'
          }}
        >
        </div>
      </div>
    </div>
  )
}

export default BarChart;

