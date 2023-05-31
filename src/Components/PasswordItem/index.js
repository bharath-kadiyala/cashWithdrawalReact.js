import './index.css'

const PasswordItem = props => {
  const {passwordItem, colorHexCodes, isChecked, deletePassword} = props
  const {website, username, password} = passwordItem

  const initialLetter = website[0].toUpperCase()

  const randomIndex = Math.ceil(Math.random() * colorHexCodes.length - 1)

  return (
    <li className="password-item-container">
      <div className="details-container">
        <p
          className="initial-text"
          style={{backgroundColor: `${colorHexCodes[randomIndex]}`}}
        >
          {initialLetter}
        </p>
        <div className="detail-container">
          <p className="website-name">{website}</p>
          <p className="username">{username}</p>
          {!isChecked && (
            <img
              className="stars-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
          {isChecked && <p className="password">{password}</p>}
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
