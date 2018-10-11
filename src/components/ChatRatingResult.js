'use strict'

import React, { Component } from 'react'
import CardContainer from 'components/CardContainer'
// import ActionButton from 'components/ActionButton'
import zChat from 'vendor/web-sdk'
import { log } from 'utils'

class ChatRatingResult extends Component {
  constructor(props) {
    super(props)
  }

  rateDown(event) {
    event.preventDefault()
    zChat.sendChatRatingResult('bad', err => {
      if (err) {
        log('Error occured >>>', err)
        return
      }
    })
  }

  rateUp(event) {
    event.preventDefault()
    zChat.sendChatRatingResult('good', err => {
      if (err) {
        log('Error occured >>>', err)
        return
      }
    })
  }

  render() {
    return (
      <CardContainer title="Valutazione Chat" addClass="chat-rating-card">
        Grazie per il feedback!{' '}
        {this.props.agent.rating === 'good' ? '👍' : '👎'}
        {/*<div className="buttons-container">
          <ActionButton
            addClass="button button-rate-down"
            label="👎"
            onClick={this.rateDown}
          />
          <ActionButton
            addClass="button button-rate-up"
            label="👍"
            onClick={this.rateUp}
          />
        </div>*/}
      </CardContainer>
    )
  }
}

ChatRatingResult.displayName = 'ChatRatingResult'
ChatRatingResult.propTypes = {
  agent: React.PropTypes.object
}
ChatRatingResult.defaultProps = {}

export default ChatRatingResult
