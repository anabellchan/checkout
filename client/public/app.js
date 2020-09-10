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
    };
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

  handleHomePage(e) {
    e.preventDefault(); // go to next form

    this.setState({
      form: 'account'
    });
    this.loadForm();
  }

  handleAccountInputChange(e) {
    this.setState({
      account: { ...this.state.account,
        [e.target.name]: e.target.value
      }
    });
  }

  handleAccount(e) {
    e.preventDefault(); // jquery post to the server

    this.setState({
      form: 'shipping'
    });
    this.loadForm();
  }

  handleShippingInputChange(e) {
    this.setState({
      shipping: { ...this.state.shipping,
        [e.target.name]: e.target.value
      }
    });
  }

  handleShipping(e) {
    e.preventDefault(); // jquery post to the server

    this.setState({
      form: 'payment'
    });
    this.loadForm();
  }

  handlePaymentInputChange(e) {
    this.setState({
      payment: { ...this.state.payment,
        [e.target.name]: e.target.value
      }
    });
  }

  handleBillingInputChange(e) {
    this.setState({
      billing: { ...this.state.billing,
        [e.target.name]: e.target.value
      }
    });
  }

  handlePayment(e) {
    e.preventDefault(); // jquery post to the server

    this.setState({
      form: 'confirmation'
    });
    this.loadForm();
  }

  handleConfirmation(e) {
    e.preventDefault(); // send to homepage

    this.setState({
      form: 'homepage'
    });
    this.loadForm();
  }

  loadForm() {
    switch (this.state.form) {
      case 'homepage':
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
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Create an Account"), /*#__PURE__*/React.createElement("form", {
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

      case 'shipping':
        {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Shipping Information"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handleShipping
          }, /*#__PURE__*/React.createElement("label", null, "Address", /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "address",
            required: true,
            value: this.state.shipping.address,
            onChange: this.handleShippingInputChange
          })), /*#__PURE__*/React.createElement("label", null, "Address 2", /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "address2",
            value: this.state.shipping.address2,
            onChange: this.handleShippingInputChange
          })), /*#__PURE__*/React.createElement("label", null, "City", /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "city",
            required: true,
            value: this.state.shipping.city,
            onChange: this.handleShippingInputChange
          })), /*#__PURE__*/React.createElement("label", null, "State", /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "state",
            id: "state",
            required: true,
            value: this.state.shipping.state,
            onChange: this.handleShippingInputChange
          })), /*#__PURE__*/React.createElement("label", null, "Zip Code", /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "zipcode",
            id: "zipcode",
            required: true,
            value: this.state.shipping.zipcode,
            onChange: this.handleShippingInputChange
          })), /*#__PURE__*/React.createElement("label", null, "Phone Number", /*#__PURE__*/React.createElement("input", {
            type: "tel",
            name: "phone",
            id: "phone",
            required: true,
            value: this.state.shipping.phone,
            onChange: this.handleShippingInputChange
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next"
          })));
        }

      case 'payment':
        {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Billing and Payment"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handlePayment
          }, /*#__PURE__*/React.createElement("label", null, "Credit Card #", /*#__PURE__*/React.createElement("input", {
            type: "number",
            name: "creditcard",
            required: true,
            value: this.state.payment.creditcard,
            onChange: this.handlePaymentInputChange
          })), /*#__PURE__*/React.createElement("label", null, "Expiry Date", /*#__PURE__*/React.createElement("input", {
            type: "date",
            name: "cardexpiry",
            required: true,
            value: this.state.payment.cardexpiry,
            onChange: this.handlePaymentInputChange
          })), /*#__PURE__*/React.createElement("label", null, "CVV", /*#__PURE__*/React.createElement("input", {
            type: "number",
            name: "cvv",
            min: "000",
            max: "999",
            placeholder: "nnn",
            required: true,
            value: this.state.payment.cvv,
            onChange: this.handlePaymentInputChange
          })), /*#__PURE__*/React.createElement("label", null, "Billing Zip Code", /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "zipcode",
            required: true,
            value: this.state.billing.zipcode,
            onChange: this.handleBillingInputChange
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next"
          })));
        }

      case 'confirmation':
        {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Account Information"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handleConfirmation
          }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.account.name), /*#__PURE__*/React.createElement("dd", null, this.state.account.email)), /*#__PURE__*/React.createElement("h2", null, "Shipping Information"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.shipping.address), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.address2), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.city), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.state), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.zipcode), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.phone)), /*#__PURE__*/React.createElement("h2", null, "Billing Payment Information"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.payment.creditcard), /*#__PURE__*/React.createElement("dd", null, this.state.payment.cardexpiry), /*#__PURE__*/React.createElement("dd", null, this.state.payment.cvv), /*#__PURE__*/React.createElement("dd", null, this.state.billing.zipcode)), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Purchase"
          })));
        }
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Checkout"), this.loadForm());
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsImFjY291bnQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInNoaXBwaW5nIiwiYWRkcmVzcyIsImFkZHJlc3MyIiwiY2l0eSIsInppcGNvZGUiLCJwaG9uZSIsImJpbGxpbmciLCJwYXltZW50IiwiY3JlZGl0Y2FyZCIsImNhcmRleHBpcnkiLCJjdnYiLCJoYW5kbGVIb21lUGFnZSIsImJpbmQiLCJoYW5kbGVBY2NvdW50IiwiaGFuZGxlU2hpcHBpbmciLCJoYW5kbGVQYXltZW50IiwiaGFuZGxlQ29uZmlybWF0aW9uIiwiaGFuZGxlQWNjb3VudElucHV0Q2hhbmdlIiwiaGFuZGxlU2hpcHBpbmdJbnB1dENoYW5nZSIsImhhbmRsZVBheW1lbnRJbnB1dENoYW5nZSIsImhhbmRsZUJpbGxpbmdJbnB1dENoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibG9hZEZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsVUFESztBQUVYQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFLEVBREM7QUFFUEMsUUFBQUEsS0FBSyxFQUFFLEVBRkE7QUFHUEMsUUFBQUEsUUFBUSxFQUFFO0FBSEgsT0FGRTtBQU9YQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkMsUUFBQUEsT0FBTyxFQUFFLEVBREQ7QUFFUkMsUUFBQUEsUUFB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SyxLQUFLWCxLQUFMLENBQVdhLE9BQVgsQ0FBbUJDLFVBQXhCLENBREYsZUFFRSxnQ0FBSyxLQUFLZCxLQUFMLENBQVdhLE9BQVgsQ0FBbUJFLFVBQXhCLENBRkYsZUFHRSxnQ0FBSyxLQUFLZixLQUFMLENBQVdhLE9BQVgsQ0FBbUJHLEdBQXhCLENBSEYsZUFJRSxnQ0FBSyxLQUFLaEIsS0FBTCxDQUFXWSxPQUFYLENBQW1CRixPQUF4QixDQUpGLENBZkYsZUFxQkU7QUFBTyxZQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUEsS0FBSyxFQUFDO0FBQTNCLFlBckJGLENBRkYsQ0FERjtBQTRCRDtBQS9KSDtBQWlLRDs7QUFFRHVCLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLDhDQUNFLDJDQURGLEVBRUcsS0FBS0gsUUFBTCxFQUZILENBREY7QUFNRDs7QUFuUytCOztBQXdTbENJLFFBQVEsQ0FBQ0QsTUFBVCxlQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXdCRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06ICdob21lcGFnZScsXG4gICAgICBhY2NvdW50OiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nOiB7XG4gICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICBhZGRyZXNzMjogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHppcGNvZGU6ICcnLFxuICAgICAgICBwaG9uZTogJydcbiAgICAgIH0sXG4gICAgICBiaWxsaW5nOiB7XG4gICAgICAgIHppcGNvZGU6ICcnXG4gICAgICB9LFxuICAgICAgcGF5bWVudDoge1xuICAgICAgICBjcmVkaXRjYXJkOiAnJyxcbiAgICAgICAgY2FyZGV4cGlyeTogJycsXG4gICAgICAgIGN2djogJydcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5oYW5kbGVIb21lUGFnZSA9IHRoaXMuaGFuZGxlSG9tZVBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFjY291bnQgPSB0aGlzLmhhbmRsZUFjY291bnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNoaXBwaW5nID0gdGhpcy5oYW5kbGVTaGlwcGluZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUGF5bWVudCA9IHRoaXMuaGFuZGxlUGF5bWVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ29uZmlybWF0aW9uID0gdGhpcy5oYW5kbGVDb25maXJtYXRpb24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlQWNjb3VudElucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVBY2NvdW50SW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNoaXBwaW5nSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZVNoaXBwaW5nSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVBheW1lbnRJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlUGF5bWVudElucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVCaWxsaW5nSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUJpbGxpbmdJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlSG9tZVBhZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBnbyB0byBuZXh0IGZvcm1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm06ICdhY2NvdW50J1xuICAgIH0pO1xuICAgIHRoaXMubG9hZEZvcm0oKTtcbiAgfVxuXG4gIGhhbmRsZUFjY291bnRJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY2NvdW50OiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuYWNjb3VudCxcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQWNjb3VudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGpxdWVyeSBwb3N0IHRvIHRoZSBzZXJ2ZXJcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm06ICdzaGlwcGluZydcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRGb3JtKCk7XG4gIH1cblxuICBoYW5kbGVTaGlwcGluZ0lucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNoaXBwaW5nOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuc2hpcHBpbmcsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNoaXBwaW5nKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8ganF1ZXJ5IHBvc3QgdG8gdGhlIHNlcnZlclxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybTogJ3BheW1lbnQnXG4gICAgfSk7XG4gICAgdGhpcy5sb2FkRm9ybSgpO1xuICB9XG5cbiAgaGFuZGxlUGF5bWVudElucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBheW1lbnQ6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5wYXltZW50LFxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVCaWxsaW5nSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYmlsbGluZzoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmJpbGxpbmcsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVBheW1lbnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBqcXVlcnkgcG9zdCB0byB0aGUgc2VydmVyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtOiAnY29uZmlybWF0aW9uJ1xuICAgIH0pO1xuICAgIHRoaXMubG9hZEZvcm0oKTtcbiAgfVxuXG4gIGhhbmRsZUNvbmZpcm1hdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHNlbmQgdG8gaG9tZXBhZ2VcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm06ICdob21lcGFnZSdcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRGb3JtKCk7XG4gIH1cblxuICBsb2FkRm9ybSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuZm9ybSkge1xuICAgICAgY2FzZSAnaG9tZXBhZ2UnOiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5NeSBDYXJ0PC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDaGVja291dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSG9tZVBhZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBjYXNlICdhY2NvdW50Jzoge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+Q3JlYXRlIGFuIEFjY291bnQ8L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQWNjb3VudH0+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjY291bnQubmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFjY291bnRJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWNjb3VudC5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFjY291bnRJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBtaW5MZW5ndGg9XCI1XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjY291bnQucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBY2NvdW50SW5wdXRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NoaXBwaW5nJzoge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+U2hpcHBpbmcgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2hpcHBpbmd9PlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgQWRkcmVzc1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNoaXBwaW5nLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTaGlwcGluZ0lucHV0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgQWRkcmVzcyAyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNoaXBwaW5nLmFkZHJlc3MyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hpcHBpbmdJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIENpdHlcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zaGlwcGluZy5jaXR5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hpcHBpbmdJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIFN0YXRlXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgaWQ9XCJzdGF0ZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zaGlwcGluZy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoaXBwaW5nSW5wdXRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBaaXAgQ29kZVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBjb2RlXCIgaWQ9XCJ6aXBjb2RlXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNoaXBwaW5nLnppcGNvZGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTaGlwcGluZ0lucHV0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNoaXBwaW5nLnBob25lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hpcHBpbmdJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjYXNlICdwYXltZW50Jzoge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+QmlsbGluZyBhbmQgUGF5bWVudDwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVQYXltZW50fT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIENyZWRpdCBDYXJkICNcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjcmVkaXRjYXJkXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBheW1lbnQuY3JlZGl0Y2FyZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBheW1lbnRJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIEV4cGlyeSBEYXRlXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJjYXJkZXhwaXJ5XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBheW1lbnQuY2FyZGV4cGlyeX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBheW1lbnRJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIENWVlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjdnZcIiBtaW49XCIwMDBcIiBtYXg9XCI5OTlcIiBwbGFjZWhvbGRlcj1cIm5ublwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXltZW50LmN2dn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBheW1lbnRJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIEJpbGxpbmcgWmlwIENvZGVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iaWxsaW5nLnppcGNvZGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCaWxsaW5nSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjYXNlICdjb25maXJtYXRpb24nOiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5BY2NvdW50IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNvbmZpcm1hdGlvbn0+XG4gICAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuYWNjb3VudC5uYW1lfTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLmFjY291bnQuZW1haWx9PC9kZD5cbiAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgICAgPGgyPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5hZGRyZXNzfTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLmFkZHJlc3MyfTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLmNpdHl9PC9kZD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuc3RhdGV9PC9kZD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuemlwY29kZX08L2RkPlxuICAgICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5waG9uZX08L2RkPlxuICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICA8aDI+QmlsbGluZyBQYXltZW50IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5wYXltZW50LmNyZWRpdGNhcmR9PC9kZD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUucGF5bWVudC5jYXJkZXhwaXJ5fTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnBheW1lbnQuY3Z2fTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLmJpbGxpbmcuemlwY29kZX08L2RkPlxuICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUHVyY2hhc2VcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGVja291dDwvaDE+XG4gICAgICAgIHt0aGlzLmxvYWRGb3JtKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=