// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  toggleButton = () => {
    this.setState(prevState => ({
      mode: !prevState.mode,
    }))
  }

  render() {
    const {mode} = this.state
    const modeClass = mode ? 'dark-mode' : 'light-mode'
    const headingClass = mode ? 'dark-heading' : 'light-heading'
    return (
      <div className="bg-container">
        <div className={`${modeClass}`}>
          <h1 className={`${headingClass}`}>Click To Change Mode</h1>
          <button type="button" onClick={this.toggleButton}>
            {mode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
