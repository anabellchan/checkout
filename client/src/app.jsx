

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'homepage',
      account: {
        name: '',
        email: '',
        password: ''
      },
      shipping: {
        address: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        phone: ''
      },
      billing: {
        zipcode: ''
      },
      payment: {
        creditcard: '',
        cardexpiry: '',
        cvv: ''
      }
    }
    this.handleHomePage = this.handleHomePage.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);

    this.handleAccountInputChange = this.handleAccountInputChange.bind(this);
    this.handleShippingInputChange = this.handleShippingInputChange.bind(this);
    this.handlePaymentInputChange = this.handlePaymentInputChange.bind(this);
    this.handleBillingInputChange = this.handleBillingInputChange.bind(this);
  }

  saveInfo() {
    $.ajax({
      url: 'http://localhost:3000/save',
      method: 'POST',
      data: this.state
    })
      .done(() => {
        this.loadForm();
      });
  }

  handleHomePage(e) {
    e.preventDefault();
    // go to next form
    this.setState({
      form: 'account'
    });
    this.loadForm();
  }

  handleAccount(e) {
    e.preventDefault();
    // jquery post to the server
    this.setState({
      form: 'shipping'
    });
    this.saveInfo();
  }

  handleShipping(e) {
    e.preventDefault();
    // jquery post to the server
    this.setState({
      form: 'payment'
    });
    this.saveInfo();
  }

  handlePayment(e) {
    e.preventDefault();
    // jquery post to the server
    this.setState({
      form: 'confirmation'
    });
    this.saveInfo();
  }

  handleConfirmation(e) {
    e.preventDefault();
    // send to homepage
    this.setState({
      form: 'homepage'
    });
    this.loadForm();
  }

  handleAccountInputChange(e) {
    this.setState({
      account: {
        ...this.state.account,
        [e.target.name]: e.target.value
      }
    });
  }

  handleShippingInputChange(e) {
    this.setState({
      shipping: {
        ...this.state.shipping,
        [e.target.name]: e.target.value
      }
    });
  }

  handlePaymentInputChange(e) {
    this.setState({
      payment: {
        ...this.state.payment,
        [e.target.name]: e.target.value
      }
    });
  }

  handleBillingInputChange(e) {
    this.setState({
      billing: {
        ...this.state.billing,
        [e.target.name]: e.target.value
      }
    });
  }

  loadForm() {
    switch (this.state.form) {
      case 'homepage': {
        return (
          <div>
            <h1>My Cart</h1>
            <input type="button" value="Checkout" onClick={this.handleHomePage.bind(this)} />
          </div>
        );
      };
      case 'account': {
        return (
          <div>
            <h2>Create an Account</h2>
            <form onSubmit={this.handleAccount}>
              <label>
                Name:
                <input type="text" name="name" required
                  value={this.state.account.name}
                  onChange={this.handleAccountInputChange}>
                </input>
              </label>
              <label>
                Email:
                <input type="email" name="email" required
                  value={this.state.account.email}
                  onChange={this.handleAccountInputChange}>
                </input>
              </label>
              <label>
                Password:
                <input type="password" name="password" minLength="5" required
                  value={this.state.account.password}
                  onChange={this.handleAccountInputChange}>
                </input>
              </label>
              <input type="submit" value="Next"></input>
            </form>
          </div>
        );
      }
      case 'shipping': {
        return (
          <div>
            <h2>Shipping Information</h2>
            <form onSubmit={this.handleShipping}>
              <label>
                Address
                <input type="text" name="address" required
                  value={this.state.shipping.address}
                  onChange={this.handleShippingInputChange}>
                </input>
              </label>
              <label>
                Address 2
                <input type="text" name="address2"
                  value={this.state.shipping.address2}
                  onChange={this.handleShippingInputChange}>
                </input>
              </label>
              <label>
                City
                <input type="text" name="city" required
                  value={this.state.shipping.city}
                  onChange={this.handleShippingInputChange}>
                </input>
              </label>
              <label>
                State
                <input type="text" name="state" id="state" required
                  value={this.state.shipping.state}
                  onChange={this.handleShippingInputChange}>
                </input>
              </label>
              <label>
                Zip Code
                <input type="text" name="zipcode" id="zipcode" required
                  value={this.state.shipping.zipcode}
                  onChange={this.handleShippingInputChange}>
                </input>
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" id="phone" required
                  value={this.state.shipping.phone}
                  onChange={this.handleShippingInputChange}>
                </input>
              </label>
              <input type="submit" value="Next"></input>
            </form>
          </div>
        )
      }
      case 'payment': {
        return (
          <div>
            <h2>Billing and Payment</h2>
            <form onSubmit={this.handlePayment}>
              <label>
                Credit Card #
                <input type="number" name="creditcard" required
                  value={this.state.payment.creditcard}
                  onChange={this.handlePaymentInputChange}
                ></input>
              </label>
              <label>
                Expiry Date
              <input type="date" name="cardexpiry" required
                  value={this.state.payment.cardexpiry}
                  onChange={this.handlePaymentInputChange}
              ></input>
                </label>
              <label>
                CVV
              <input type="number" name="cvv" min="000" max="999" placeholder="nnn" required
                  value={this.state.payment.cvv}
                  onChange={this.handlePaymentInputChange}
              ></input>
                </label>
              <label>
                Billing Zip Code
                <input type="text" name="zipcode" required
                  value={this.state.billing.zipcode}
                  onChange={this.handleBillingInputChange}
                ></input>
                </label>
              <input type="submit" value="Next"></input>
            </form>
          </div>
        )
      }
      case 'confirmation': {
        return (
          <div>
            <h2>Account Information</h2>
            <form onSubmit={this.handleConfirmation}>
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
                <dd>{this.state.payment.cvv}</dd>
                <dd>{this.state.billing.zipcode}</dd>
              </dl>
              <input type="submit" value="Purchase"></input>
            </form>
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
