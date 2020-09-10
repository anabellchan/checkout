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
    };
    this.handleAccount = this.handleAccount.bind(this);
    this.handleAccountInputChange = this.handleAccountInputChange.bind(this);
  }

  componentDidMount() {// jquery - get what page to load
    // set state
  }

  handleHomePage(e) {
    e.preventDefault(); // go to next form

    this.setState({
      form: 'account'
    });
    this.loadForm();
  }

  handleAccountInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      account: { ...this.state.account,
        [name]: value
      }
    });
    console.log(this.state);
  }

  handleAccount(e) {
    e.preventDefault(); // jquery post to the server

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
      case 'home':
        {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My Cart"), /*#__PURE__*/React.createElement("input", {
            type: "button",
            value: "Checkout",
            onClick: this.handleHomePage.bind(this)
          }));
        }
        ;

      case 'account':
        {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Create an Account"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handleAccount
          }, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "name",
            required: true,
            value: this.state.account.name,
            onChange: this.handleAccountInputChange
          })), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
            type: "email",
            name: "email",
            required: true,
            value: this.state.account.email,
            onChange: this.handleAccountInputChange
          })), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
            type: "password",
            name: "password",
            minLength: "5",
            required: true,
            value: this.state.account.password,
            onChange: this.handleAccountInputChange
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next"
          })));
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
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Checkout"), this.loadForm());
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsImFjY291bnQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInNoaXBwaW5nIiwiYWRkcmVzcyIsImFkZHJlc3MyIiwiY2l0eSIsInppcGNvZGUiLCJwaG9uZSIsImJpbGxpbmciLCJwYXltZW50IiwiY3JlZGl0Y2FyZCIsImNhcmRleHBpcnkiLCJoYW5kbGVBY2NvdW50IiwiYmluZCIsImhhbmRsZUFjY291bnRJbnB1dENoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGFuZGxlSG9tZVBhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImxvYWRGb3JtIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2hpcHBpbmciLCJoYW5kbGVQYXltZW50IiwiaGFuZGxlQ29uZmlybWF0aW9uIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFFQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRSxNQURLO0FBRVhDLE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxJQUFJLEVBQUUsRUFEQztBQUVQQyxRQUFBQSxLQUFLLEVBQUUsRUFGQTtBQUdQQyxRQUFBQSxRQUFRLEVBQUU7QUFISCxPQUZFO0FBT1hDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxPQUFPLEVBQUUsRUFERDtBQUVSQyxRQUFBQSxRQUFRLEVBQUUsRUFGRjtBQUdSQyxRQUFBQSxJQUFJLEVBQUUsRUFIRTtBQUlSVCxRQUFBQSxL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Q0E7QUFDQTtBQS9IRjtBQWlJRDs7QUFFRGMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0UsMkNBREYsRUFFRyxLQUFLUixRQUFMLEVBRkgsQ0FERjtBQU1EOztBQTlOK0I7O0FBbU9sQ1MsUUFBUSxDQUFDRCxNQUFULGVBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBd0JFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybTogJ2hvbWUnLFxuICAgICAgYWNjb3VudDoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZzoge1xuICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgYWRkcmVzczI6ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICB6aXBjb2RlOiAnJyxcbiAgICAgICAgcGhvbmU6ICcnXG4gICAgICB9LFxuICAgICAgYmlsbGluZzoge1xuICAgICAgICB6aXBjb2RlOiAnJ1xuICAgICAgfSxcbiAgICAgIHBheW1lbnQ6IHtcbiAgICAgICAgY3JlZGl0Y2FyZDogJycsXG4gICAgICAgIGNhcmRleHBpcnk6ICcnXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQWNjb3VudCA9IHRoaXMuaGFuZGxlQWNjb3VudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQWNjb3VudElucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVBY2NvdW50SW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBqcXVlcnkgLSBnZXQgd2hhdCBwYWdlIHRvIGxvYWRcblxuICAgIC8vIHNldCBzdGF0ZVxuXG4gIH1cblxuICBoYW5kbGVIb21lUGFnZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGdvIHRvIG5leHQgZm9ybVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybTogJ2FjY291bnQnXG4gICAgfSk7XG4gICAgdGhpcy5sb2FkRm9ybSgpO1xuICB9XG5cbiAgaGFuZGxlQWNjb3VudElucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWNjb3VudDoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmFjY291bnQsXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcblxuICB9XG5cbiAgaGFuZGxlQWNjb3VudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGpxdWVyeSBwb3N0IHRvIHRoZSBzZXJ2ZXJcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm06ICdzaGlwcGluZydcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRGb3JtKCk7XG4gIH1cblxuICBoYW5kbGVTaGlwcGluZyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxuICBoYW5kbGVQYXltZW50KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgfVxuXG4gIGhhbmRsZUNvbmZpcm1hdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxuICBsb2FkRm9ybSgpIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybTonLCB0aGlzLnN0YXRlLmZvcm0pO1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5mb3JtKSB7XG4gICAgICBjYXNlICdob21lJzoge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TXkgQ2FydDwvaDE+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ2hlY2tvdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUhvbWVQYWdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgY2FzZSAnYWNjb3VudCc6IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNyZWF0ZSBhbiBBY2NvdW50PC9oMT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUFjY291bnR9PlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY2NvdW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBY2NvdW50SW5wdXRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjY291bnQuZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBY2NvdW50SW5wdXRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgbWluTGVuZ3RoPVwiNVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY2NvdW50LnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWNjb3VudElucHV0Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBjYXNlICdzaGlwcGluZyc6IHtcbiAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ3NoaXBwaW5nJyk7XG4gICAgICAvLyAgIHJldHVybiAoXG4gICAgICAvLyAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgIDxoMT5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAvLyAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTaGlwcGluZ30+XG4gICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAvLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XG4gICAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3NcIiBpZD1cImFkZHJlc3NcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3MyXCI+QWRkcmVzcyAyPC9sYWJlbD5cbiAgICAgIC8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzczJcIiBpZD1cImFkZHJlc3MyXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAvLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaXR5XCI+Q2l0eTwvbGFiZWw+XG4gICAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBpZD1cImNpdHlcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXRlXCI+U3RhdGU8L2xhYmVsPlxuICAgICAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIGlkPVwic3RhdGVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInppcGNvZGVcIj5aaXAgQ29kZTwvbGFiZWw+XG4gICAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcGNvZGVcIiBpZD1cInppcGNvZGVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgIC8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwicGhvbmVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIj48L2lucHV0PlxuICAgICAgLy8gICAgICAgPC9mb3JtPlxuICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgLy8gICApXG4gICAgICAvLyB9XG4gICAgICAvLyBjYXNlICdwYXltZW50Jzoge1xuICAgICAgLy8gICAvLyBjb25zb2xlLmxvZygncGF5bWVudCcpO1xuICAgICAgLy8gICByZXR1cm4gKFxuICAgICAgLy8gICAgIDxkaXY+XG4gICAgICAvLyAgICAgICA8aDE+QmlsbGluZyBhbmQgUGF5bWVudDwvaDE+XG4gICAgICAvLyAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVQYXltZW50fT5cbiAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNyZWRpdGNhcmRcIj5DcmVkaXQgQ2FyZCAjPC9sYWJlbD5cbiAgICAgIC8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjcmVkaXRjYXJkXCIgaWQ9XCJjcmVkaXRjYXJkXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAvLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXJkZXhwaXJ5XCI+RXhwaXJ5IERhdGU8L2xhYmVsPlxuICAgICAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJjYXJkZXhwaXJ5XCIgaWQ9XCJjYXJkZXhwaXJ5XCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAvLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdnZcIj5DVlY8L2xhYmVsPlxuICAgICAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImN2dlwiIGlkPVwiY3Z2XCIgbWluPVwiM1wiICBtYXg9XCIzXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAvLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiLXppcGNvZGVcIj5CaWxsaW5nIFppcCBDb2RlPC9sYWJlbD5cbiAgICAgIC8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYi16aXBjb2RlXCIgaWQ9XCJiLXppcGNvZGVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIj48L2lucHV0PlxuICAgICAgLy8gICAgICAgPC9mb3JtPlxuICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgLy8gICApXG4gICAgICAvLyB9XG4gICAgICAvLyBjYXNlICdjb25maXJtYXRpb24nOiB7XG4gICAgICAvLyAgIHJldHVybiAoXG4gICAgICAvLyAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgIDxoMj5BY2NvdW50IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgIC8vICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNvbmZpcm1hdGlvbn0+XG4gICAgICAvLyAgICAgICAgIDxkbD5cbiAgICAgIC8vICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuYWNjb3VudC5uYW1lfTwvZGQ+XG4gICAgICAvLyAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLmFjY291bnQuZW1haWx9PC9kZD5cbiAgICAgIC8vICAgICAgICAgPC9kbD5cbiAgICAgIC8vICAgICAgICAgPGgyPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgIC8vICAgICAgICAgPGRsPlxuICAgICAgLy8gICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5hZGRyZXNzfTwvZGQ+XG4gICAgICAvLyAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLmFkZHJlc3MyfTwvZGQ+XG4gICAgICAvLyAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLmNpdHl9PC9kZD5cbiAgICAgIC8vICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuc3RhdGV9PC9kZD5cbiAgICAgIC8vICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuemlwY29kZX08L2RkPlxuICAgICAgLy8gICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5waG9uZX08L2RkPlxuICAgICAgLy8gICAgICAgICA8L2RsPlxuICAgICAgLy8gICAgICAgICA8aDI+QmlsbGluZyBQYXltZW50IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgIC8vICAgICAgICAgPGRsPlxuICAgICAgLy8gICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5wYXltZW50LmNyZWRpdGNhcmR9PC9kZD5cbiAgICAgIC8vICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUucGF5bWVudC5jYXJkZXhwaXJ5fTwvZGQ+XG4gICAgICAvLyAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLmJpbGxpbmcuemlwY29kZX08L2RkPlxuICAgICAgLy8gICAgICAgICA8L2RsPlxuICAgICAgLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUHVyY2hhc2VcIj48L2lucHV0PlxuICAgICAgLy8gICAgICAgPC9mb3JtPlxuICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgLy8gICApO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGVja291dDwvaDE+XG4gICAgICAgIHt0aGlzLmxvYWRGb3JtKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=