class BuyOneGetYHalfPricePromotion {
    constructor(buyProductCode, getProductCode) {
      this.buyProductCode = buyProductCode;
      this.getProductCode = getProductCode;
    }
  
    apply(items, subtotal) {
      const buyCount = items.filter(item => item.code === this.buyProductCode).length;
      const getCount = items.filter(item => item.code === this.getProductCode).length;

      let applicableGets = Math.min(buyCount, getCount);
      if(this.buyProductCode === this.getProductCode){ // same product
        applicableGets = parseInt(buyCount/2);
      }
     // console.log({applicableGets, subtotal, buyCount, getCount, buyProductCode: this.buyProductCode, getProductCode: this.getProductCode})
  
      if (applicableGets > 0) {
        const getProductPrice = items.find(item => item.code === this.getProductCode).price;
        subtotal -= applicableGets * getProductPrice * 0.5;
      }
      return subtotal;
    }
  }
  
  const promotions = [
    new BuyOneGetYHalfPricePromotion('R01', 'R01'),
    
  ];
  
  module.exports = promotions;