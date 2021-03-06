'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StatusContainer extends Component {
  constructor(props) {
    super(props)
    this.getStatusText = this.getStatusText.bind(this)
  }

  renderIcon() {
    const isString = typeof this.props.icon === 'string'
    return <div className="card-icon">{!isString && this.props.icon}</div>
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
        <div className="minimize-button" onClick={this.props.minimizeOnClick}>
          X{/*<div className="minimize-button-bar" />*/}
        </div>
      </div>
    )
  }
}

StatusContainer.displayName = 'StatusContainer'
StatusContainer.propTypes = {
  accountStatus: PropTypes.string,
  minimizeOnClick: PropTypes.func
}
export default StatusContainer
