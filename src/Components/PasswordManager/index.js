import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const colorHexCodes = ['#0b69ff', '#94a3b8', '#b6c3ca']

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    yourPasswordsList: [],
    isChecked: false,
  }

  onWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddNewPassword = event => {
    event.preventDefault()

    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPasswordDetails = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      yourPasswordsList: [...prevState.yourPasswordsList, newPasswordDetails],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  renderAddNewPassword = () => {
    const {websiteInput, usernameInput, passwordInput} = this.state

    return (
      <form className="form" onSubmit={this.onAddNewPassword}>
        <h1 className="password-title">Add New Password</h1>

        <div className="passwords-con">
          <img
            className="password-img-sty"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
          />
          <input
            type="text"
            placeholder="Enter Website"
            className="input-sty"
            value={websiteInput}
            onChange={this.onWebsiteInput}
          />
        </div>

        <div className="passwords-con">
          <img
            className="password-img-sty"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
            alt="username"
          />
          <input
            type="text"
            placeholder="Enter Username"
            className="input-sty"
            value={usernameInput}
            onChange={this.onUsernameInput}
          />
        </div>

        <div className="passwords-con">
          <img
            className="password-img-sty"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="input-sty"
            value={passwordInput}
            onChange={this.onPasswordInput}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    )
  }

  render() {
    const {yourPasswordsList} = this.state
    const passwordsLength = yourPasswordsList.length !== 0

    return (
      <div className="app-con">
        <div className="card-con">
          <img
            className="app-logo-sty"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="credentials-con">
            <img
              className="passwordManage-sty"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
              alt="password manager"
            />
            {this.renderAddNewPassword()}
          </div>

          <div className="your-password-container">
            <div className="search-and-count-container">
              <div className="lengthPass-con">
                <h1 className="pass-pera">Your Passwords</h1>
                <p className="length-pass-sty">{yourPasswordsList.length}</p>
              </div>
              <div className="search-con">
                <img
                  className="search-img-sty"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                />
                <input
                  className="search-input-sty"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="hr-sty" />
            <div className="filter-con">
              <input type="checkbox" id="checkBox-Id" />
              <label className="label-sty" htmlFor="checkBox-Id">
                Show Passwords
              </label>
            </div>
            {!passwordsLength && (
              <div className="no-password-con">
                <img
                  className="no-password-img-sty"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p className="no-password-pera-sty">No Passwords</p>
              </div>
            )}

            {passwordsLength && (
              <ul className="unOrder-list-sty">
                {yourPasswordsList.map(eachList => (
                  <PasswordItem
                    passwordItem={eachList}
                    key={eachList.id}
                    colorHexCodes={colorHexCodes}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
