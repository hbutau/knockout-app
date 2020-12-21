import _ from 'lodash';
// import materialize from 'materialize-css';
import '/node_modules/materialize-css/dist/css/materialize.css';
import '/src/styles/app.css';
import '/src/styles/materialfonts.css';
import ko from 'knockout';
import $ from 'jquery';

//diclare ViewModel.

function ProductsViewModel() {
  var self = this;

  self.getProducts = function() {
    self.url = 'http://localhost:8000/api/products'

    fetch('http://localhost:8000/api/products')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        self.products = ko.observableArray(data);

        self.name = ko.observable("");
        self.sku = ko.observable("");
        self.category_id = ko.observable("");
        self.unit_price = ko.observable("");

        self.addProduct = function() {
          let data = {
            name: self.name(),
            sku: self.sku(),
            category_id: self.category_id(),
            unit_price: self.unit_price()

          };

          self.products.push(data)
          console.log(data)
          fetch(self.url, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            })
            .then(function(res) {
              console.log(res);
            })
            .catch(function(err) {
              console.err;
            })

          self.name('');
          self.sku('');
          self.category_id('');
          self.unit_price('');
        }
        self.removeProduct = function(product) {
          self.products.remove(product);
          let product_id = {
            product_id: product.id
          }
          fetch(
            self.url + '/' + product.id, {
              method: 'DELETE',
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            }
          );
          console.log(product.id)
        }
        ko.applyBindings(self);
      });
  }
}

// $(document).ready(function() {

//   let pros = new ProductsViewModel();
//   pros.getProducts();
// });

let pros = new ProductsViewModel();
pros.getProducts();
