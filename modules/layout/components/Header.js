import Link from 'next/link';
import '../styles/header.scss';
import '../../../assets/images/icons/mnet.svg'

class Header extends React.Component {

  render () {
    return (
      <nav className="page-header navbar">
        <div className="page-header__logo-container col d-flex align-items-center">
          <Link href="/home">
            <a className="page-header__logo">
              <svg className="page-header__head-img">
                <use xlinkHref="#mnet" />
              </svg>
            </a>
          </Link>
        </div>
      </nav>
    )
  }
}
export default Header;