

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'home',
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
        cardexpiry: ''
      }
    }
    this.handleAccount = this.handleAccount.bind(this);
    this.handleAccountInputChange = this.handleAccountInputChange.bind(this);
  }
  componentDidMount() {
    // jquery - get what page to load

    // set state

  }

  handleHomePage(e) {
    e.preventDefault();
    // go to next form
    this.setState({
      form: 'account'
    });
    this.loadForm();
  }

  handleAccountInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      account: {
        ...this.state.account,
        [name]: value
      }
    });
    console.log(this.state);

  }

  handleAccount(e) {
    e.preventDefault();
    // jquery post to the server
    this.setState({
      form: 'shipping'
    });
    this.loadForm();
  }

  handleShipping(e) {
    e.preventDefault();

  }

  handlePayment(e) {
    e.preventDefault();

  }

  handleConfirmation(e) {
    e.preventDefault();

  }

  loadForm() {
    console.log('form:', this.state.form);
    switch (this.state.form) {
      case 'home': {
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
            <h1>Create an Account</h1>
            <form onSubmit={this.handleAccount}>
              <label>
                Name:
                <input type="text" name="name" required
                  value={this.state.account.name}
                  onChange={this.handleAccountInputChange}></input>
              </label>
              <label>
                Email:
                <input type="email" name="email" required
                  value={this.state.account.email}
                  onChange={this.handleAccountInputChange}></input>
              </label>
              <label>
                Password:
                <input type="password" name="password" minLength="5" required
                  value={this.state.account.password}
                  onChange={this.handleAccountInputChange}></input>
              </label>
              <input type="submit" value="Next"></input>
            </form>
          </div>
        );
      }
      // case 'shipping': {
      //   // console.log('shipping');
      //   return (
      //     <div>
      //       <h1>Shipping Information</h1>
      //       <form onSubmit={this.handleShipping}>
      //         <div>
      //           <label htmlFor="address">Address</label>
      //           <input type="text" name="address" id="address" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="address2">Address 2</label>
      //           <input type="text" name="address2" id="address2" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="city">City</label>
      //           <input type="text" name="city" id="city" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="state">State</label>
      //           <input type="text" name="state" id="state" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="zipcode">Zip Code</label>
      //           <input type="text" name="zipcode" id="zipcode" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="phone">Phone Number</label>
      //           <input type="tel" name="phone" id="phone" required></input>
      //         </div>
      //         <input type="submit" value="Next"></input>
      //       </form>
      //     </div>
      //   )
      // }
      // case 'payment': {
      //   // console.log('payment');
      //   return (
      //     <div>
      //       <h1>Billing and Payment</h1>
      //       <form onSubmit={this.handlePayment}>
      //         <div>
      //           <label htmlFor="creditcard">Credit Card #</label>
      //           <input type="number" name="creditcard" id="creditcard" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="cardexpiry">Expiry Date</label>
      //           <input type="date" name="cardexpiry" id="cardexpiry" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="cvv">CVV</label>
      //           <input type="number" name="cvv" id="cvv" min="3"  max="3" required></input>
      //         </div>
      //         <div>
      //           <label htmlFor="b-zipcode">Billing Zip Code</label>
      //           <input type="text" name="b-zipcode" id="b-zipcode" required></input>
      //         </div>
      //         <input type="submit" value="Next"></input>
      //       </form>
      //     </div>
      //   )
      // }
      // case 'confirmation': {
      //   return (
      //     <div>
      //       <h2>Account Information</h2>
      //       <form onSubmit={this.handleConfirmation}>
      //         <dl>
      //           <dd>{this.state.account.name}</dd>
      //           <dd>{this.state.account.email}</dd>
      //         </dl>
      //         <h2>Shipping Information</h2>
      //         <dl>
      //           <dd>{this.state.shipping.address}</dd>
      //           <dd>{this.state.shipping.address2}</dd>
      //           <dd>{this.state.shipping.city}</dd>
      //           <dd>{this.state.shipping.state}</dd>
      //           <dd>{this.state.shipping.zipcode}</dd>
      //           <dd>{this.state.shipping.phone}</dd>
      //         </dl>
      //         <h2>Billing Payment Information</h2>
      //         <dl>
      //           <dd>{this.state.payment.creditcard}</dd>
      //           <dd>{this.state.payment.cardexpiry}</dd>
      //           <dd>{this.state.billing.zipcode}</dd>
      //         </dl>
      //         <input type="submit" value="Purchase"></input>
      //       </form>
      //     </div>
      //   );
      // }
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
