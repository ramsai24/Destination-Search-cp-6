// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItems from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  //   onClear = event => {
  //     // const {searchInput} = this.state

  //     event.target.value = ''
  //   }

  onSearch = event => {
    //  const {searchInput} = this.state
    console.log(event.target.value)

    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const newList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const buttondisplay = <button type="button">clear</button>
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              className="inputEl"
              type="search"
              placeholder="search"
              onChange={this.onSearch}
            />
            {searchInput === '' ? null : buttondisplay}
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-logo"
            />
          </div>

          <ul className="display-container">
            {newList.map(each => (
              <DestinationItems key={each.id} destinationItem={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
