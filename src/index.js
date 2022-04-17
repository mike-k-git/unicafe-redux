import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const updateState = (type) => {
    store.dispatch({ type })
  }

  return (
    <div>
      <button onClick={() => updateState('GOOD')}>good</button>
      <button onClick={() => updateState('OK')}>ok</button>
      <button onClick={() => updateState('BAD')}>bad</button>
      <button onClick={() => updateState('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
