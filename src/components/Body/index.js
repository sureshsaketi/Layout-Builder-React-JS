import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const renderLeftNavbarMenu = () => (
    <ConfigurationContext.Consumer>
      {value => {
        const {showLeftNavbar} = value
        return (
          <>
            {showLeftNavbar ? (
              <div className="left-navbar-menu">
                <h1 className="item-heading">Left Navbar Menu</h1>
                <ul className="left-navbar-list">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            ) : null}
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  )

  const renderContentView = () => (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent} = value
        return (
          <>
            {showContent ? (
              <div className="content">
                <h1 className="item-heading">Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            ) : null}
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  )

  const renderRightNavbar = () => (
    <ConfigurationContext.Consumer>
      {value => {
        const {showRightNavbar} = value
        return (
          <>
            {showRightNavbar ? (
              <div className="right-navbar">
                <h1 className="item-heading">Right Navbar</h1>
                <div className="ads-container">
                  <div className="ad-box">
                    <p>Ad 1</p>
                  </div>
                  <div className="ad-box">
                    <p>Ad 2</p>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  )

  return (
    <div className="body-container">
      {renderLeftNavbarMenu()}
      {renderContentView()}
      {renderRightNavbar()}
    </div>
  )
}
export default Body
