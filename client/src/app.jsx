

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'home',
      account: {}
    }
  }
  componentDidMount() {
    // jquery - get what page to load

    // set state

  }

  checkout(e) {
    e.preventDefault();
    // go to next form
    this.setState({
      form: 'account'
    });
    this.loadForm();
  }

  account(e) {
    e.preventDefault();
  }

  shipping(e) {
    e.preventDefault();

  }

  payment(e) {
    e.preventDefault();

  }

  purchase(e) {
    e.preventDefault();

  }

  loadForm() {
    switch (this.state.form) {
      case 'home': {
        console.log('home');
        return (
          <div>
            <h1>My Cart</h1>
            <input type="submit" value="Checkout" onSubmit={this.checkout.bind(this)} />
          </div>
        );
      };
      case 'account': {
        console.log('account');
        return (
          <div>
            <h1>Create an Account</h1>
            <div>
              <label for="name">Name:</label>
              <input type="text" name="name" id="name" required></input>
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" name="email" id="email" required></input>
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" name="password" id="password" minlength="5" required></input>
            </div>
            <input type="submit" value="Next" onSubmit={this.bind.account(this)}></input>
          </div>
        );
      }
      case 'shipping': {
        console.log('shipping');
        return (
          <div>
            <h1>Shipping Information</h1>
            <div>
              <label for="address">Address</label>
              <input type="text" name="address" id="address" required></input>
            </div>
            <div>
              <label for="address2">Address 2</label>
              <input type="text" name="address2" id="address2" required></input>
            </div>
            <div>
              <label for="city">City</label>
              <input type="text" name="city" id="city" required></input>
            </div>
            <div>
              <label for="state">State</label>
              <input type="text" name="state" id="state" required></input>
            </div>
            <div>
              <label for="zipcode">Zip Code</label>
              <input type="text" name="zipcode" id="zipcode" required></input>
            </div>
            <div>
              <label for="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" required></input>
            </div>
            <input type="submit" value="Next" onSubmit={this.bind.shipping(this)}></input>
          </div>
        )
      }
      case 'payment': {
        console.log('payment');
        return (
          <div>
            <h1>Billing and Payment</h1>
            <div>
              <label for="creditcard">Credit Card #</label>
              <input type="number" name="creditcard" id="creditcard" required></input>
            </div>
            <div>
              <label for="cardexpiry">Expiry Date</label>
              <input type="date" name="cardexpiry" id="cardexpiry" required></input>
            </div>
            <div>
              <label for="cvv">CVV</label>
              <input type="number" name="cvv" id="cvv" min="3"  max="3" required></input>
            </div>
            <div>
              <label for="b-zipcode">Billing Zip Code</label>
              <input type="text" name="b-zipcode" id="b-zipcode" required></input>
            </div>
            <input type="submit" value="Next" onSubmit={this.bind.payment(this)}></input>
          </div>
        )
      }
      case 'confirmation': {
        console.log('state', this.state);
        return (
          <div>
            <h2>Account Information</h2>
            <dl>
              <dd>{this.state.account.name}</dd>
              <dd>{this.state.account.email}</dd>
            </dl>
            <h2>Shipping Information</h2>
            <dl>
              <dd>{this.state.shipping.address}</dd>
              <dd>{this.state.shipping.address2}</dd>
              <dd>{this.state.shipping.city}</dd>
              <dd>{this.state.shipping.state}</dd>
              <dd>{this.state.shipping.zipcode}</dd>
              <dd>{this.state.shipping.phone}</dd>
            </dl>
            <h2>Billing Payment Information</h2>
            <dl>
              <dd>{this.state.payment.creditcard}</dd>
              <dd>{this.state.payment.cardexpiry}</dd>
              <dd>{this.state.billing.zipcode}</dd>
            </dl>
            <input type="submit" value="Purchase" onSubmit={this.bind.purchase(this)}></input>
          </div>
        );
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        {this.loadForm()}
      </div>
    )
  }
}



ReactDOM.render(<App/>, document.getElementById('app'));
