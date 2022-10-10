import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    let {suggestionsList} = this.props
    suggestionsList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="card-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-engine-container">
            <div className="google-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                className="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onChangeSearchValue}
              />
            </div>
            <ul className="suggestion-container">
              {suggestionsList.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionItem={eachItem}
                  onClickSuggestion={this.onClickSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
