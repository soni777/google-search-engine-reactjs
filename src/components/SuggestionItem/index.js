import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestionItem, onClickSuggestion} = this.props
    const {suggestion} = suggestionItem
    const onClickArrow = () => {
      onClickSuggestion(suggestion)
    }
    return (
      <li className="suggestion-card">
        <p className="suggestion-title">{suggestion}</p>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={onClickArrow}
        />
      </li>
    )
  }
}

export default SuggestionItem
