// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabItem = isActive ? 'active-tab-btn ' : ''

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tabContainer">
      <button
        className={`tabButton ${activeTabItem}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
