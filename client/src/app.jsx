import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '/'
    }
  }
  componentDidMount() {
    // jquery - get what page to load

    // set state

  }

  checkout(e) {
    // jquery - post
    e.preventDefault();

    // go to next form

  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <form action="/checkout" method="post">
          <input type="submit" value="Checkout" onSubmit={this.checkout.bind(this)}/>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
