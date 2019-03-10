import generateTagColor from '../../../utils/generateTagColor';
import '../styles/Tag.scss';
import '../../../assets/images/icons/arrow-down.svg';
import '../../../assets/images/icons/arrow-up.svg'

const Tag = ({ price, status }) => (
  <div
    className={`status-tag ${status}`}
    style={{
      backgroundColor: generateTagColor(status)
    }}
  >
    <span>{price}</span>
    <svg className="status-tag__arrow">
      <use xlinkHref={`#${(status === 'increased') ? 'arrow-up' : 'arrow-down'}`} />
    </svg>
  </div>
);

export default Tag;