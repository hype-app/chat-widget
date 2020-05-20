import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Widget from 'components/Widget'
import { Provider } from 'react-redux'
import ChatStore from 'stores/ChatStore'
import PropTypes from 'prop-types'
import config from 'config'

class ChatWidget extends Component {
  constructor(props) {
    super(props)
  }

  static init = ({
    selector = 'widget',
    theme = 'hype',
    chatAccountKey,
    botAccountKey,
    botEndpoint,
    botName = 'Hype Bot',
    emailAddress = 'hello@hype.it',
    servicesCheckUrl = 'https://www.pp-hype.it/api/rest/FREE/services',
    servicesCheckUrlOptions,
    keywords = ['operatore']
  } = {}) => {
    let widget = document.getElementById(selector)

    if (!widget) {
      widget = document.createElement('div')
      widget.id = selector
      document.body.appendChild(widget)
    }

    // Render the main component into the dom
    return ReactDOM.render(
      <ChatWidget
        theme={theme}
        chatAccountKey={chatAccountKey}
        botAccountKey={botAccountKey}
        botEndpoint={botEndpoint}
        botName={botName}
        emailAddress={emailAddress}
        servicesCheckUrl={servicesCheckUrl}
        servicesCheckUrlOptions={servicesCheckUrlOptions}
        keywords={keywords}
      />,
      widget
    )
  }

  setVisible(visible) {
    this.child.setVisible(visible)
  }

  setVisitorInfo(info) {
    this.child.setVisitorInfo(info)
  }

  render() {
    return (
      <Provider store={ChatStore}>
        <Widget
          onRef={ref => (this.child = ref)}
          theme={this.props.theme}
          chatAccountKey={this.props.chatAccountKey}
          botAccountKey={this.props.botAccountKey}
          botEndpoint={this.props.botEndpoint}
          botName={this.props.botName}
          emailAddress={this.props.emailAddress}
          servicesCheckUrl={this.props.servicesCheckUrl}
          servicesCheckUrlOptions={this.props.servicesCheckUrlOptions}
          keywords={this.props.keywords}
        />
      </Provider>
    )
  }
}

ChatWidget.displayName = 'ChatWidget'
ChatWidget.propTypes = {
  theme: PropTypes.string,
  chatAccountKey: PropTypes.string,
  botAccountKey: PropTypes.string,
  botEndpoint: PropTypes.string,
  botName: PropTypes.string,
  emailAddress: PropTypes.string,
  servicesCheckUrl: PropTypes.string,
  servicesCheckUrlOptions: PropTypes.object,
  keywords: PropTypes.array
}

export default ChatWidget

if (process.env.SCOPE === 'demo') {
  window.onload = () => {
    const {
      ACCOUNT_KEY: chatAccountKey,
      BOT_ACCOUNT_KEY: botAccountKey,
      BOT_ENDPOINT: botEndpoint,
      BOT_NAME: botName,
      EMAIL_ADDRESS: emailAddress,
      SERVICES_CHECK_URL: servicesCheckUrl,
      SERVICES_CHECK_URL_OPTIONS: servicesCheckUrlOptions,
      SKIN: theme,
      KEYWORDS: keywords
    } = config

    ChatWidget.init({
      selector: 'widget',
      theme,
      chatAccountKey,
      botAccountKey,
      botEndpoint,
      botName,
      emailAddress,
      servicesCheckUrl,
      servicesCheckUrlOptions: !!servicesCheckUrlOptions
        ? JSON.parse(servicesCheckUrlOptions)
        : undefined,
      keywords
    })
  }
}
