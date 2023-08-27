import './index.css'

const TabItem = props => {
  const {appDetails, appListItem, isActive} = props
  const {tabId, displayText} = appDetails

  const resultGet = () => {
    appListItem(tabId)
  }
  const tableGet = isActive ? 'button' : 'save'

  return (
    <li className="">
      <button className={tableGet} type="button" onClick={resultGet}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
