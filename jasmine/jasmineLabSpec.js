const User = require('../jasmineLab');

describe('jasmine lab User class', () => {
  let user;
  beforeAll(() => {
    user = new User('bassel', '123');
  });

  describe('addToCart', () => {
    it('Should have nothing in cart, if nothing is added yet', () => {
      expect(user.cart).toHaveSize(0);
    });
    it('Should have one item, after adding one', () => {
      const product = {
        name: 'biscuit',
        price: 5,
      };
      user.addToCart(product);
      expect(user.cart).toHaveSize(1);
      expect(user.cart[0].price).toEqual(5);
    });
  });

  describe('calculateTotalCartPrice', () => {
    it('Should return total of items price', () => {
      const total = user.calculateTotalCartPrice();
      expect(total).toEqual(jasmine.any(Number));
      expect(total).toEqual(5);
    });
  });

  describe('checkout', () => {
    it('Should call fake functions', () => {
      const fakeObj = jasmine.createSpyObj(['goToVerifyPage', 'returnBack', 'isVerify']);
      fakeObj.isVerify.and.callFake(() => {
        return true;
      });
      let fakeFunction = jasmine.createSpy('deliveyOrder');

      user.checkout(fakeObj, fakeFunction);
      expect(fakeObj.goToVerifyPage).toHaveBeenCalled();
      expect(fakeObj.returnBack).toHaveBeenCalledTimes(1);
      expect(fakeObj.isVerify).toHaveBeenCalled();
    });
  });
});
