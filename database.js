var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout', {useNewurlParser: true})
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((err) => {
    console.error(err.stack);
  });

var checkoutSchema = new mongoose.Schema({
  account: {
    name: String,
    email: String,
    password: String
  },
  shipping: {
    address: String,
    address2: String,
    city: String,
    state: String,
    zipcode: String,
    phone: String
  },
  billing: {
    zipcode: String
  },
  payment: {
    creditcard: String,
    cardexpiry: String,
    cvv: String
  }
});

var CheckoutModel = mongoose.model('Checkout', checkoutSchema);

var save = (data, callback) => {

  let checkoutModel = {
    account: {
      name: data.account.name,
      email: data.account.email,
      password: data.account.password,
    },
    shipping: {
      address: data.shipping.address,
      address2: data.shipping.address2,
      city: data.shipping.city,
      state: data.shipping.state,
      zipcode: data.shipping.zipcode,
      phone: data.shipping.phone
    },
    billing: {
      zipcode: data.billing.zipcode
    },
    payment: {
      creditcard: data.payment.creditcard,
      cardexpiry: data.payment.cardexpiry,
      cvv: data.payment.cvv
    }
  };

  let query = { "account.email": data.account.email };
  let options = { upsert: true,  new: true, useFindAndModify: false };

  // CheckoutModel.find(conditions, callback);
  CheckoutModel
    .findOneAndUpdate(query, checkoutModel, options, callback);
}

module.exports.save = save;
