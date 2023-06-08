import { Component, ReactNode } from 'react'

import Header from './components/Header/Header'

type State = { 
}

export default class App extends Component<any, State> {
  constructor() {
    super({})
    this.state = {
    }
  }

  render(): ReactNode {
    return (
      <>
        <Header />
      </>
    )
  }
}
