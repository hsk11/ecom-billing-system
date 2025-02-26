class Basket {
    constructor(productCatalog, deliveryTiers, promotions) {
      this.productCatalog = productCatalog;
      this.deliveryTiers = deliveryTiers;
      this.promotions = promotions;
      this.items = [];
    }
  
    addItem(productCode) {
      const product = this.productCatalog.find(p => p.code === productCode);
      if (!product) {
        throw new Error(`Product with code ${productCode} not found.`);
      }
      this.items.push(product);
    }

    addItems(productCodes) {
        productCodes.forEach(productCode => this.addItem(productCode));
    }
  
    calculateTotal() {
      let subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
  
      // Apply Promotions
      let beforeDiscount = subtotal;
      for (const promotion of this.promotions) {
        subtotal = promotion.apply(this.items, subtotal);
      }
  
      const deliveryCost = this.calculateDeliveryCost(subtotal);
      return  {
        MRP: Math.floor( beforeDiscount * 100) / 100,
        discount: Math.floor((beforeDiscount - subtotal) * 100) / 100,
        deliveryCost,
        finalTotal:Math.floor((subtotal + deliveryCost) * 100) / 100,

    }
  }
  
    calculateDeliveryCost(subtotal) {
      if(subtotal === 0) {
        return 0;
      }
      const applicableTier = this.deliveryTiers.find(tier => subtotal < tier.threshold);
      return applicableTier ? applicableTier.cost : 0; // Free delivery if no tier applies
    }
  }
  
  module.exports = Basket;
  
  

  
