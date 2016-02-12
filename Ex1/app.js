(
function(){
  var gems = [{ name: 'Azurite', price: 2.95 , canPurchase:true},
  { name: 'Azurite1', price: 3.95 , canPurchase:false}];
  var app = angular.module('gemStore', []);
  
  app.controller("StoreController", function(){
    this.products = gems;
	
  });
    
})();
