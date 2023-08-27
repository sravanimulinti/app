// Write your code here
import './index.css'

const AppItem = props => {
  const {detailApp} = props
  const {appName, imageUrl} = detailApp

  return (
    <li className="li">
      <img src={imageUrl} className="img" alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}
export default AppItem
