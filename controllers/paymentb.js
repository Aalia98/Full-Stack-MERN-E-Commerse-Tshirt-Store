const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "kcmtjy9jdx4r87dc",
  publicKey: "yct9wqrztbm5s2zp",
  privateKey: "55e23b03e7891a7944f0bb9d8bbd565f"
});


exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, (err, response) => {
       if (err) {
           res.status(500).send(err);
       }else {
           res.send(response);
       }
      });
};

exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce

    let amountFromTheClient = req.body.amount
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        
        options: {
          submitForSettlement: true
        }
      }, (err, result) => {
          if (err) {
              res.status(500).json(error);
          }else {
              res.json(result);
          }
      });
};