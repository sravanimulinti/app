// Write your code here
const AppItem = props => {
  const {detailApp} = props
  const {AppName, imgUrl} = detailApp

  return (
    <li className="li">
      <img src={imgUrl} className="img" alt={AppName} />
      <p className="para">{AppName}</p>
    </li>
  )
}
export default AppItem
