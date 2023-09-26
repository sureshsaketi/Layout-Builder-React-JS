import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-control-bg-container">
          <div className="configuration-control-container">
            <h1 className="layout-heading">Layout</h1>
            <ul className="navbar-list">
              <li className="list-item">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label htmlFor="content">Content</label>
              </li>
              <li className="list-item">
                <input
                  type="checkbox"
                  id="left-navbar"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                />
                <label htmlFor="left-navbar">Left Navbar</label>
              </li>
              <li className="list-item">
                <input
                  type="checkbox"
                  id="right-navbar"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                />
                <label htmlFor="right-navbar">Right Navbar</label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
