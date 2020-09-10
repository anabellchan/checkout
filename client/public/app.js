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

  handlHomePage(e) {
    e.preventDefault(); // go to next form

    this.setState({
      form: 'account'
    });
    this.loadForm();
  }

  handleAccount(e) {
    e.preventDefault();
    console.log(e.target.value);
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
    console.log('current form', this.state.form);

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
          //        console.log('account');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Create an Account"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handleAccount
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "name"
          }, "Name:"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "name",
            id: "name",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "email"
          }, "Email:"), /*#__PURE__*/React.createElement("input", {
            type: "email",
            name: "email",
            id: "email",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "password"
          }, "Password:"), /*#__PURE__*/React.createElement("input", {
            type: "password",
            name: "password",
            id: "password",
            minLength: "5",
            required: true
          })), /*#__PURE__*/React.createElement("input", {
            type: "hidden",
            name: "form",
            value: "account"
          }), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next"
          })));
        }

      case 'shipping':
        {
          // console.log('shipping');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Shipping Information"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handleShipping
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "address"
          }, "Address"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "address",
            id: "address",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "address2"
          }, "Address 2"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "address2",
            id: "address2",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "city"
          }, "City"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "city",
            id: "city",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "state"
          }, "State"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "state",
            id: "state",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "zipcode"
          }, "Zip Code"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "zipcode",
            id: "zipcode",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "phone"
          }, "Phone Number"), /*#__PURE__*/React.createElement("input", {
            type: "tel",
            name: "phone",
            id: "phone",
            required: true
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next"
          })));
        }

      case 'payment':
        {
          // console.log('payment');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Billing and Payment"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handlePayment
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "creditcard"
          }, "Credit Card #"), /*#__PURE__*/React.createElement("input", {
            type: "number",
            name: "creditcard",
            id: "creditcard",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "cardexpiry"
          }, "Expiry Date"), /*#__PURE__*/React.createElement("input", {
            type: "date",
            name: "cardexpiry",
            id: "cardexpiry",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "cvv"
          }, "CVV"), /*#__PURE__*/React.createElement("input", {
            type: "number",
            name: "cvv",
            id: "cvv",
            min: "3",
            max: "3",
            required: true
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
            htmlFor: "b-zipcode"
          }, "Billing Zip Code"), /*#__PURE__*/React.createElement("input", {
            type: "text",
            name: "b-zipcode",
            id: "b-zipcode",
            required: true
          })), /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Next"
          })));
        }

      case 'confirmation':
        {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Account Information"), /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handleConfirmation
          }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.account.name), /*#__PURE__*/React.createElement("dd", null, this.state.account.email)), /*#__PURE__*/React.createElement("h2", null, "Shipping Information"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.shipping.address), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.address2), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.city), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.state), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.zipcode), /*#__PURE__*/React.createElement("dd", null, this.state.shipping.phone)), /*#__PURE__*/React.createElement("h2", null, "Billing Payment Information"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dd", null, this.state.payment.creditcard), /*#__PURE__*/React.createElement("dd", null, this.state.payment.cardexpiry), /*#__PURE__*/React.createElement("dd", null, this.state.billing.zipcode)), /*#__PURE__*/React.createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsImFjY291bnQiLCJjb21wb25lbnREaWRNb3VudCIsImhhbmRsSG9tZVBhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImxvYWRGb3JtIiwiaGFuZGxlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNoaXBwaW5nIiwiaGFuZGxlUGF5bWVudCIsImhhbmRsZUNvbmZpcm1hdGlvbiIsImhhbmRsZUhvbWVQYWdlIiwiYmluZCIsIm5hbWUiLCJlbWFpbCIsInNoaXBwaW5nIiwiYWRkcmVzcyIsImFkZHJlc3MyIiwiY2l0eSIsInppcGNvZGUiLCJwaG9uZSIsInBheW1lbnQiLCJjcmVkaXRjYXJkIiwiY2FyZGV4cGlyeSIsImJpbGxpbmciLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLE1BREs7QUFFWEMsTUFBQUEsT0FBTyxFQUFFO0FBRkUsS0FBYjtBQUlEOztBQUNEQyxFQUFBQSxpQkFBaUIsR0FBRyxDQUNsQjtBQUVBO0FBRUQ7O0FBRURDLEVBQUFBLGFBQWEsQ0FBQ0MsQ0FBRCxFQUFJO0FBQ2ZBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURlLENBRWY7O0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQ1pOLE1BQUFBLElBQUksRUFBRTtBQURNLEtBQWQ7QUFHQSxTQUFLTyxRQUFMO0FBQ0Q7O0FBRURDLEVBQUFBLGFBQWEsQ0FB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UUFBWCxDQUFvQkMsT0FBekIsQ0FERixlQUVFLGdDQUFLLEtBQUt0QixLQUFMLENBQVdxQixRQUFYLENBQW9CRSxRQUF6QixDQUZGLGVBR0UsZ0NBQUssS0FBS3ZCLEtBQUwsQ0FBV3FCLFFBQVgsQ0FBb0JHLElBQXpCLENBSEYsZUFJRSxnQ0FBSyxLQUFLeEIsS0FBTCxDQUFXcUIsUUFBWCxDQUFvQnJCLEtBQXpCLENBSkYsZUFLRSxnQ0FBSyxLQUFLQSxLQUFMLENBQVdxQixRQUFYLENBQW9CSSxPQUF6QixDQUxGLGVBTUUsZ0NBQUssS0FBS3pCLEtBQUwsQ0FBV3FCLFFBQVgsQ0FBb0JLLEtBQXpCLENBTkYsQ0FORixlQWNFLDhEQWRGLGVBZUUsNkNBQ0UsZ0NBQUssS0FBSzFCLEtBQUwsQ0FBVzJCLE9BQVgsQ0FBbUJDLFVBQXhCLENBREYsZUFFRSxnQ0FBSyxLQUFLNUIsS0FBTCxDQUFXMkIsT0FBWCxDQUFtQkUsVUFBeEIsQ0FGRixlQUdFLGdDQUFLLEtBQUs3QixLQUFMLENBQVc4QixPQUFYLENBQW1CTCxPQUF4QixDQUhGLENBZkYsZUFvQkU7QUFBTyxZQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUEsS0FBSyxFQUFDO0FBQTNCLFlBcEJGLENBRkYsQ0FERjtBQTJCRDtBQTNISDtBQTZIRDs7QUFFRE0sRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0UsMkNBREYsRUFFRyxLQUFLdkIsUUFBTCxFQUZILENBREY7QUFNRDs7QUFwTCtCOztBQXlMbEN3QixRQUFRLENBQUNELE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF3QkUsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiAnaG9tZScsXG4gICAgICBhY2NvdW50OiB7fVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBqcXVlcnkgLSBnZXQgd2hhdCBwYWdlIHRvIGxvYWRcblxuICAgIC8vIHNldCBzdGF0ZVxuXG4gIH1cblxuICBoYW5kbEhvbWVQYWdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZ28gdG8gbmV4dCBmb3JtXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtOiAnYWNjb3VudCdcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRGb3JtKCk7XG4gIH1cblxuICBoYW5kbGVBY2NvdW50KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlU2hpcHBpbmcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9XG5cbiAgaGFuZGxlUGF5bWVudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxuICBoYW5kbGVDb25maXJtYXRpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9XG5cbiAgbG9hZEZvcm0oKSB7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnQgZm9ybScsIHRoaXMuc3RhdGUuZm9ybSk7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmZvcm0pIHtcbiAgICAgIGNhc2UgJ2hvbWUnOiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5NeSBDYXJ0PC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDaGVja291dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSG9tZVBhZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBjYXNlICdhY2NvdW50Jzoge1xuLy8gICAgICAgIGNvbnNvbGUubG9nKCdhY2NvdW50Jyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DcmVhdGUgYW4gQWNjb3VudDwvaDE+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVBY2NvdW50fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbWluTGVuZ3RoPVwiNVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtXCIgdmFsdWU9XCJhY2NvdW50XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSAnc2hpcHBpbmcnOiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwcGluZycpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+U2hpcHBpbmcgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2hpcHBpbmd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzXCIgaWQ9XCJhZGRyZXNzXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzMlwiPkFkZHJlc3MgMjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCIgaWQ9XCJhZGRyZXNzMlwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgaWQ9XCJjaXR5XCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGF0ZVwiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBpZD1cInN0YXRlXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ6aXBjb2RlXCI+WmlwIENvZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBjb2RlXCIgaWQ9XCJ6aXBjb2RlXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgY2FzZSAncGF5bWVudCc6IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BheW1lbnQnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkJpbGxpbmcgYW5kIFBheW1lbnQ8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlUGF5bWVudH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjcmVkaXRjYXJkXCI+Q3JlZGl0IENhcmQgIzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiY3JlZGl0Y2FyZFwiIGlkPVwiY3JlZGl0Y2FyZFwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FyZGV4cGlyeVwiPkV4cGlyeSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiY2FyZGV4cGlyeVwiIGlkPVwiY2FyZGV4cGlyeVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3Z2XCI+Q1ZWPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjdnZcIiBpZD1cImN2dlwiIG1pbj1cIjNcIiAgbWF4PVwiM1wiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYi16aXBjb2RlXCI+QmlsbGluZyBaaXAgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImItemlwY29kZVwiIGlkPVwiYi16aXBjb2RlXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgY2FzZSAnY29uZmlybWF0aW9uJzoge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+QWNjb3VudCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVDb25maXJtYXRpb259PlxuICAgICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLmFjY291bnQubmFtZX08L2RkPlxuICAgICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5hY2NvdW50LmVtYWlsfTwvZGQ+XG4gICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICAgIDxoMj5TaGlwcGluZyBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuYWRkcmVzc308L2RkPlxuICAgICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5hZGRyZXNzMn08L2RkPlxuICAgICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5jaXR5fTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLnN0YXRlfTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLnppcGNvZGV9PC9kZD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcucGhvbmV9PC9kZD5cbiAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgICAgPGgyPkJpbGxpbmcgUGF5bWVudCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUucGF5bWVudC5jcmVkaXRjYXJkfTwvZGQ+XG4gICAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnBheW1lbnQuY2FyZGV4cGlyeX08L2RkPlxuICAgICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5iaWxsaW5nLnppcGNvZGV9PC9kZD5cbiAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlB1cmNoYXNlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q2hlY2tvdXQ8L2gxPlxuICAgICAgICB7dGhpcy5sb2FkRm9ybSgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19