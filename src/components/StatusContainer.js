'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StatusContainer extends Component {
  constructor(props) {
    super(props)
    this.getStatusText = this.getStatusText.bind(this)
    this.onUploadClick = this.onUploadClick.bind(this)

    this.fileUploadInput = React.createRef()
  }

  renderIcon() {
    const isString = typeof this.props.icon === 'string'
    return <div className="card-icon">{!isString && this.props.icon}</div>
  }

  onUploadClick(/*event*/) {
    // event.preventDefault()
    this.fileUploadInput.current.click()
  }

  getStatusText(status) {
    switch (status) {
      case 'online':
      // return 'Siamo online!'
      case 'offline':
      // return 'Lasciaci un messaggio'
      case 'away':
        // return 'Nessun operatore online'
        return 'Aiuto e Supporto'
      default:
        return 'Connessione...'
    }
  }

  render() {
    return (
      <div className="status-container">
        {this.getStatusText(this.props.accountStatus)}
        {!this.props.isOffline && (
          <div className="options-button" onClick={this.onUploadClick}>
            <div className="options-button-bar" />
            <input
              ref={this.fileUploadInput}
              type="file"
              style={{ visibility: 'hidden', width: 1 }}
              onChange={e => {
                this.props.onFileUpload(e)
                this.fileUploadInput.current.value = ''
              }}
            />
          </div>
        )}
        <div className="minimize-button" onClick={this.props.minimizeOnClick}>
          <div className="minimize-button-bar" />
        </div>
      </div>
    )
  }
}

StatusContainer.displayName = 'StatusContainer'
StatusContainer.propTypes = {
  accountStatus: PropTypes.string,
  minimizeOnClick: PropTypes.func,
  onFileUpload: PropTypes.func,
  isOffline: PropTypes.bool
}
export default StatusContainer
