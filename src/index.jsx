import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  render() {
    return ( < h1 > Hello World < /h1>)
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

// hmr enabled
if (module.hot) {
  module.hot.accept()
}
