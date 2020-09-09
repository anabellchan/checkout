class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'home',
      account: {}
    };
  }

  componentDidMount() {// jquery - get what page to load
    // set state
  }

  checkout(e) {
    e.preventDefault(); // go to next form

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
      case 'home':
        {
          console.log('home');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My Cart"), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Checkout",
            onSubmit: this.checkout.bind(this)
          }));
        }
        ;

      case 'account':
        {
          console.log('account');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Create an Account"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "name"
          }, "Name:"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "name",
            id: "name",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "email"
          }, "Email:"), /*#__PURE__*/React.createElement("input", {
            type: "email",
            name: "email",
            id: "email",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "password"
          }, "Password:"), /*#__PURE__*/React.createElement("input", {
            type: "password",
            name: "password",
            id: "password",
            minlength: "5",
            required: true
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next",
            onSubmit: this.bind.account(this)
          }));
        }

      case 'shipping':
        {
          console.log('shipping');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Shipping Information"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "address"
          }, "Address"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "address",
            id: "address",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "address2"
          }, "Address 2"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "address2",
            id: "address2",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "city"
          }, "City"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "city",
            id: "city",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "state"
          }, "State"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "state",
            id: "state",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "zipcode"
          }, "Zip Code"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "zipcode",
            id: "zipcode",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "phone"
          }, "Phone Number"), /*#__PURE__*/React.createElement("input", {
            type: "tel",
            name: "phone",
            id: "phone",
            required: true
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next",
            onSubmit: this.bind.shipping(this)
          }));
        }

      case 'payment':
        {
          console.log('payment');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Billing and Payment"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "creditcard"
          }, "Credit Card #"), /*#__PURE__*/React.createElement("input", {
            type: "number",
            name: "creditcard",
            id: "creditcard",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "cardexpiry"
          }, "Expiry Date"), /*#__PURE__*/React.createElement("input", {
            type: "date",
            name: "cardexpiry",
            id: "cardexpiry",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "cvv"
          }, "CVV"), /*#__PURE__*/React.createElement("input", {
            type: "number",
            name: "cvv",
            id: "cvv",
            min: "3",
            max: "3",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            for: "b-zipcode"
          }, "Billing Zip Code"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "b-zipcode",
            id: "b-zipcode",
            required: true
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next",
            onSubmit: this.bind.payment(this)
          }));
        }

      case 'confirmation':
        {
          console.log('state', this.state);
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Account Information"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.account.name), /*#__PURE__*/React.createElement("dd", null, this.state.account.email)), /*#__PURE__*/React.createElement("h2", null, "Shipping Information"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.shipping.address), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.address2), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.city), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.state), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.zipcode), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.phone)), /*#__PURE__*/React.createElement("h2", null, "Billing Payment Information"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.payment.creditcard), /*#__PURE__*/React.createElement("dd", null, this.state.payment.cardexpiry), /*#__PURE__*/React.createElement("dd", null, this.state.billing.zipcode)), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Purchase",
            onSubmit: this.bind.purchase(this)
          }));
        }
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Checkout"), this.loadForm());
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsImFjY291bnQiLCJjb21wb25lbnREaWRNb3VudCIsImNoZWNrb3V0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJsb2FkRm9ybSIsInNoaXBwaW5nIiwicGF5bWVudCIsInB1cmNoYXNlIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwiYWRkcmVzczIiLCJjaXR5IiwiemlwY29kZSIsInBob25lIiwiY3JlZGl0Y2FyZCIsImNhcmRleHBpcnkiLCJiaWxsaW5nIiwicmVuZGVyIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFFQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRSxNQURLO0FBRVhDLE1BQUFBLE9BQU8sRUFBRTtBQUZFLEtBQWI7QUFJRDs7QUFDREMsRUFBQUEsaUJBQWlCLEdBQUcsQ0FDbEI7QUFFQTtBQUVEOztBQUVEQyxFQUFBQSxRQUFRLENBQUNDLENBQUQsRUFBSTtBQUNWQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEVSxDQUVWOztBQUNBLFNBQUtDLFFBQUwsQ0FBYztBQUNaTixNQUFBQSxJQUFJLEVBQUU7QUFETSxLQUFkO0FBR0EsU0FBS08sUUFBTDtBQUNEOztBQUVETixFQUFBQSxPQUFPLENBQUNHLENBQUQsRUFBSTtBQUNUQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDRDs7QUFFREcsRUFBQUEsUUFBUSxDQUFDSixDQUFELEVBQUk7QUFDVkEsSUFBQUEsQ0FBQyxD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LENBSEYsZUFJRSxnQ0FBSyxLQUFLbkIsS0FBTCxDQUFXUyxRQUFYLENBQW9CVCxLQUF6QixDQUpGLGVBS0UsZ0NBQUssS0FBS0EsS0FBTCxDQUFXUyxRQUFYLENBQW9CVyxPQUF6QixDQUxGLGVBTUUsZ0NBQUssS0FBS3BCLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQlksS0FBekIsQ0FORixDQVBGLGVBZUUsOERBZkYsZUFnQkUsNkNBQ0UsZ0NBQUssS0FBS3JCLEtBQUwsQ0FBV1UsT0FBWCxDQUFtQlksVUFBeEIsQ0FERixlQUVFLGdDQUFLLEtBQUt0QixLQUFMLENBQVdVLE9BQVgsQ0FBbUJhLFVBQXhCLENBRkYsZUFHRSxnQ0FBSyxLQUFLdkIsS0FBTCxDQUFXd0IsT0FBWCxDQUFtQkosT0FBeEIsQ0FIRixDQWhCRixlQXFCRTtBQUFPLFlBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsWUFBQSxLQUFLLEVBQUMsVUFBM0I7QUFBc0MsWUFBQSxRQUFRLEVBQUUsS0FBS04sSUFBTCxDQUFVSCxRQUFWLENBQW1CLElBQW5CO0FBQWhELFlBckJGLENBREY7QUF5QkQ7QUFwSEg7QUFzSEQ7O0FBRURjLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLDhDQUNFLDJDQURGLEVBRUcsS0FBS2pCLFFBQUwsRUFGSCxDQURGO0FBTUQ7O0FBM0srQjs7QUFnTGxDa0IsUUFBUSxDQUFDRCxNQUFULGVBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBd0JFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybTogJ2hvbWUnLFxuICAgICAgYWNjb3VudDoge31cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8ganF1ZXJ5IC0gZ2V0IHdoYXQgcGFnZSB0byBsb2FkXG5cbiAgICAvLyBzZXQgc3RhdGVcblxuICB9XG5cbiAgY2hlY2tvdXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBnbyB0byBuZXh0IGZvcm1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm06ICdhY2NvdW50J1xuICAgIH0pO1xuICAgIHRoaXMubG9hZEZvcm0oKTtcbiAgfVxuXG4gIGFjY291bnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHNoaXBwaW5nKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgfVxuXG4gIHBheW1lbnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9XG5cbiAgcHVyY2hhc2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9XG5cbiAgbG9hZEZvcm0oKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmZvcm0pIHtcbiAgICAgIGNhc2UgJ2hvbWUnOiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdob21lJyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5NeSBDYXJ0PC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDaGVja291dFwiIG9uU3VibWl0PXt0aGlzLmNoZWNrb3V0LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgY2FzZSAnYWNjb3VudCc6IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY291bnQnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNyZWF0ZSBhbiBBY2NvdW50PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBtaW5sZW5ndGg9XCI1XCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvblN1Ym1pdD17dGhpcy5iaW5kLmFjY291bnQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlICdzaGlwcGluZyc6IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NoaXBwaW5nJyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc1wiIGlkPVwiYWRkcmVzc1wiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzMlwiPkFkZHJlc3MgMjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzMlwiIGlkPVwiYWRkcmVzczJcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIGlkPVwiY2l0eVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0ZVwiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgaWQ9XCJzdGF0ZVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ6aXBjb2RlXCI+WmlwIENvZGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIGlkPVwiemlwY29kZVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwaG9uZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInBob25lXCIgaWQ9XCJwaG9uZVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25TdWJtaXQ9e3RoaXMuYmluZC5zaGlwcGluZyh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgY2FzZSAncGF5bWVudCc6IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BheW1lbnQnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkJpbGxpbmcgYW5kIFBheW1lbnQ8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNyZWRpdGNhcmRcIj5DcmVkaXQgQ2FyZCAjPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiY3JlZGl0Y2FyZFwiIGlkPVwiY3JlZGl0Y2FyZFwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXJkZXhwaXJ5XCI+RXhwaXJ5IERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiY2FyZGV4cGlyeVwiIGlkPVwiY2FyZGV4cGlyeVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdnZcIj5DVlY8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjdnZcIiBpZD1cImN2dlwiIG1pbj1cIjNcIiAgbWF4PVwiM1wiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJiLXppcGNvZGVcIj5CaWxsaW5nIFppcCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImItemlwY29kZVwiIGlkPVwiYi16aXBjb2RlXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvblN1Ym1pdD17dGhpcy5iaW5kLnBheW1lbnQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NvbmZpcm1hdGlvbic6IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXRlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5BY2NvdW50IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLmFjY291bnQubmFtZX08L2RkPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuYWNjb3VudC5lbWFpbH08L2RkPlxuICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgIDxoMj5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5hZGRyZXNzfTwvZGQ+XG4gICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5hZGRyZXNzMn08L2RkPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuY2l0eX08L2RkPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuc3RhdGV9PC9kZD5cbiAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLnppcGNvZGV9PC9kZD5cbiAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLnBob25lfTwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPGgyPkJpbGxpbmcgUGF5bWVudCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5wYXltZW50LmNyZWRpdGNhcmR9PC9kZD5cbiAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnBheW1lbnQuY2FyZGV4cGlyeX08L2RkPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuYmlsbGluZy56aXBjb2RlfTwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlB1cmNoYXNlXCIgb25TdWJtaXQ9e3RoaXMuYmluZC5wdXJjaGFzZSh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q2hlY2tvdXQ8L2gxPlxuICAgICAgICB7dGhpcy5sb2FkRm9ybSgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19