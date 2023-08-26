import './index.css'

const TabItem = props => {
  const {appDetails, appListItem, isActive} = props
  const {tabId, displayText} = appDetails

  const resultGet = () => {
    appListItem(tabId)
  }
  const itemElement = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="">
      <button className={itemElement} type="button" onClick={resultGet}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
