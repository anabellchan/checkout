import React from 'react';
import ReactDOM from 'react-dom';
import e from 'express';

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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Checkout"), loadForm());
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJlIiwiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsImFjY291bnQiLCJjb21wb25lbnREaWRNb3VudCIsImNoZWNrb3V0IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImxvYWRGb3JtIiwic2hpcHBpbmciLCJwYXltZW50IiwicHVyY2hhc2UiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsIm5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJhZGRyZXNzMiIsImNpdHkiLCJ6aXBjb2RlIiwicGhvbmUiLCJjcmVkaXRjYXJkIiwiY2FyZGV4cGlyeSIsImJpbGxpbmciLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxTQUFkOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JILEtBQUssQ0FBQ0ksU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLE1BREs7QUFFWEMsTUFBQUEsT0FBTyxFQUFFO0FBRkUsS0FBYjtBQUlEOztBQUNEQyxFQUFBQSxpQkFBaUIsR0FBRyxDQUNsQjtBQUVBO0FBRUQ7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ1QsQ0FBRCxFQUFJO0FBQ1ZBLElBQUFBLENBQUMsQ0FBQ1UsY0FBRixHQURVLENBRVY7O0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQ1pMLE1BQUFBLElBQUksRUFBRTtBQURNLEtBQWQ7QUFHQSxTQUFLTSxRQUFMO0FBQ0Q7O0FBRURMLEVBQUFBLE9BQU8sQ0FBQ1AsQ0FBRCxFQUFJO0FB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QixLQUFMLENBQVdRLFFBQVgsQ0FBb0JTLFFBQXpCLENBRkYsZUFHRSxnQ0FBSyxLQUFLakIsS0FBTCxDQUFXUSxRQUFYLENBQW9CVSxJQUF6QixDQUhGLGVBSUUsZ0NBQUssS0FBS2xCLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQlIsS0FBekIsQ0FKRixlQUtFLGdDQUFLLEtBQUtBLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQlcsT0FBekIsQ0FMRixlQU1FLGdDQUFLLEtBQUtuQixLQUFMLENBQVdRLFFBQVgsQ0FBb0JZLEtBQXpCLENBTkYsQ0FQRixlQWVFLDhEQWZGLGVBZ0JFLDZDQUNFLGdDQUFLLEtBQUtwQixLQUFMLENBQVdTLE9BQVgsQ0FBbUJZLFVBQXhCLENBREYsZUFFRSxnQ0FBSyxLQUFLckIsS0FBTCxDQUFXUyxPQUFYLENBQW1CYSxVQUF4QixDQUZGLGVBR0UsZ0NBQUssS0FBS3RCLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJKLE9BQXhCLENBSEYsQ0FoQkYsZUFxQkU7QUFBTyxZQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUEsS0FBSyxFQUFDLFVBQTNCO0FBQXNDLFlBQUEsUUFBUSxFQUFFLEtBQUtOLElBQUwsQ0FBVUgsUUFBVixDQUFtQixJQUFuQjtBQUFoRCxZQXJCRixDQURGO0FBeUJEO0FBcEhIO0FBc0hEOztBQUVEYyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSw4Q0FDRSwyQ0FERixFQUVHakIsUUFBUSxFQUZYLENBREY7QUFNRDs7QUEzSytCOztBQWdMbENiLFFBQVEsQ0FBQzhCLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF3QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGUgZnJvbSAnZXhwcmVzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiAnaG9tZScsXG4gICAgICBhY2NvdW50OiB7fVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBqcXVlcnkgLSBnZXQgd2hhdCBwYWdlIHRvIGxvYWRcblxuICAgIC8vIHNldCBzdGF0ZVxuXG4gIH1cblxuICBjaGVja291dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGdvIHRvIG5leHQgZm9ybVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybTogJ2FjY291bnQnXG4gICAgfSk7XG4gICAgdGhpcy5sb2FkRm9ybSgpO1xuICB9XG5cbiAgYWNjb3VudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2hpcHBpbmcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9XG5cbiAgcGF5bWVudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxuICBwdXJjaGFzZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxuICBsb2FkRm9ybSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuZm9ybSkge1xuICAgICAgY2FzZSAnaG9tZSc6IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPk15IENhcnQ8L2gxPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNoZWNrb3V0XCIgb25TdWJtaXQ9e3RoaXMuY2hlY2tvdXQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBjYXNlICdhY2NvdW50Jzoge1xuICAgICAgICBjb25zb2xlLmxvZygnYWNjb3VudCcpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q3JlYXRlIGFuIEFjY291bnQ8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG1pbmxlbmd0aD1cIjVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uU3VibWl0PXt0aGlzLmJpbmQuYWNjb3VudCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NoaXBwaW5nJzoge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hpcHBpbmcnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzXCIgaWQ9XCJhZGRyZXNzXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3MyXCI+QWRkcmVzcyAyPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3MyXCIgaWQ9XCJhZGRyZXNzMlwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+Q2l0eTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgaWQ9XCJjaXR5XCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRlXCI+U3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBpZD1cInN0YXRlXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInppcGNvZGVcIj5aaXAgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBjb2RlXCIgaWQ9XCJ6aXBjb2RlXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvblN1Ym1pdD17dGhpcy5iaW5kLnNoaXBwaW5nKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjYXNlICdwYXltZW50Jzoge1xuICAgICAgICBjb25zb2xlLmxvZygncGF5bWVudCcpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+QmlsbGluZyBhbmQgUGF5bWVudDwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3JlZGl0Y2FyZFwiPkNyZWRpdCBDYXJkICM8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjcmVkaXRjYXJkXCIgaWQ9XCJjcmVkaXRjYXJkXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcmRleHBpcnlcIj5FeHBpcnkgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJjYXJkZXhwaXJ5XCIgaWQ9XCJjYXJkZXhwaXJ5XCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImN2dlwiPkNWVjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImN2dlwiIGlkPVwiY3Z2XCIgbWluPVwiM1wiICBtYXg9XCIzXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImItemlwY29kZVwiPkJpbGxpbmcgWmlwIENvZGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYi16aXBjb2RlXCIgaWQ9XCJiLXppcGNvZGVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uU3VibWl0PXt0aGlzLmJpbmQucGF5bWVudCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgY2FzZSAnY29uZmlybWF0aW9uJzoge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhdGUnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkFjY291bnQgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuYWNjb3VudC5uYW1lfTwvZGQ+XG4gICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5hY2NvdW50LmVtYWlsfTwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPGgyPlNoaXBwaW5nIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLmFkZHJlc3N9PC9kZD5cbiAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnNoaXBwaW5nLmFkZHJlc3MyfTwvZGQ+XG4gICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5jaXR5fTwvZGQ+XG4gICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5zaGlwcGluZy5zdGF0ZX08L2RkPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcuemlwY29kZX08L2RkPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUuc2hpcHBpbmcucGhvbmV9PC9kZD5cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8aDI+QmlsbGluZyBQYXltZW50IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgPGRkPnt0aGlzLnN0YXRlLnBheW1lbnQuY3JlZGl0Y2FyZH08L2RkPlxuICAgICAgICAgICAgICA8ZGQ+e3RoaXMuc3RhdGUucGF5bWVudC5jYXJkZXhwaXJ5fTwvZGQ+XG4gICAgICAgICAgICAgIDxkZD57dGhpcy5zdGF0ZS5iaWxsaW5nLnppcGNvZGV9PC9kZD5cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUHVyY2hhc2VcIiBvblN1Ym1pdD17dGhpcy5iaW5kLnB1cmNoYXNlKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGVja291dDwvaDE+XG4gICAgICAgIHtsb2FkRm9ybSgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19