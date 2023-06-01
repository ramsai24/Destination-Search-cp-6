// Write your code here
import './index.css'

const DestinationItems = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  console.log(destinationItem)

  return (
    <li className="card-container">
      <img className="img" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItems
