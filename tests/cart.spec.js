/* eslint-disable no-undef */
const { getCartTotal } = require('../src/services/cart');
const productCatalog = require('../src/config/products');
const deliveryTiers = require('../src/config/deliveryTiers');
const promotions = require('../src/services/promotions');

describe('getCartTotal', () => {
  it('Case 1', () => {
    const productCodes = ['G01', 'B01'];
    const expectedTotal = {
      products: ['G01', 'B01'],
      MRP: 32.9,
      discount: 0,
      deliveryCost: 4.95,
      finalTotal: 37.85,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });
  it('Case 2', () => {
    const productCodes = ['R01', 'R01'];
    const expectedTotal = {
      products: productCodes,
      MRP: 65.9,
      discount: 16.47,
      deliveryCost: 4.95,
      finalTotal: 54.37,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });
  it('Case 3', () => {
    const productCodes = ['R01', 'G01'];
    const expectedTotal = {
      products: productCodes,
      MRP: 57.9,
      discount: 0,
      deliveryCost: 2.95,
      finalTotal: 60.85,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });
  it('Case 3', () => {
    const productCodes = ['R01', 'G01'];
    const expectedTotal = {
      products: productCodes,
      MRP: 57.9,
      discount: 0,
      deliveryCost: 2.95,
      finalTotal: 60.85,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });
  it('Case 4', () => {
    const productCodes = ['B01', 'B01', 'R01', 'R01', 'R01'];
    const expectedTotal = {
      products: productCodes,
      MRP: 114.75,
      discount: 16.47,
      deliveryCost: 0,
      finalTotal: 98.27,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });
  it('should calculate the correct cart total for a simple basket', () => {
    const productCodes = ['B01', 'G01'];
    const expectedTotal = {
      products: ['B01', 'G01'],
      MRP: 32.90,
      discount: 0,
      deliveryCost: 4.95,
      finalTotal: 37.85,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });

  it('should apply the buy-one-get-one-half-price promotion', () => {
    const productCodes = ['R01', 'R01'];
    const expectedTotal = {
      products: ['R01', 'R01'],
      MRP: 65.90,
      discount: 16.47,
      deliveryCost: 4.95,
      finalTotal: 54.37,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });

  it('should calculate the correct total with free delivery', () => {
    const productCodes = ['R01', 'R01', 'R01'];
    const expectedTotal = {
      products: ['R01', 'R01', 'R01'],
      MRP: 98.85,
      discount: 16.47,
      deliveryCost: 2.95,
      finalTotal: 85.32,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });

  it('should calculate the correct total with multiple items and promotions', () => {
    const productCodes = ['R01', 'R01', 'B01', 'G01'];
    const expectedTotal = {
      products: ['R01', 'R01', 'B01', 'G01'],
      MRP: 98.8,
      discount: 16.47,
      deliveryCost: 2.95,
      finalTotal: 85.27,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });


  it('should handle an empty cart', () => {
    const productCodes = [];
    const expectedTotal = {
      products: [],
      MRP: 0,
      discount: 0,
      deliveryCost: 0,
      finalTotal: 0,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });

  it('should handle no promotion', () => {
    const productCodes = ['G01', 'G01', 'B01'];
    const expectedTotal = {
      products: ['G01', 'G01', 'B01'],
      MRP: 57.85,
      discount: 0,
      deliveryCost: 2.95,
      finalTotal: 60.8,
    };
    const actualTotal = getCartTotal(productCodes, productCatalog, deliveryTiers, promotions);
    expect(actualTotal).toEqual(expectedTotal);
  });

  it('should handle no product', () => {
    const productCodes = ['X02'];
    expect(() => getCartTotal(productCodes, productCatalog, deliveryTiers, promotions)).toThrowError();
  });



});