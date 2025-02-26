# 🛒 Cart Billing System - Sales Platform with Dynamic Pricing

## A Powerful E-Commerce Solution by Harpal Singh (HSK11)
[![Twitter Follow](https://img.shields.io/twitter/follow/hsk11dev?label=Follow)](https://twitter.com/intent/follow?screen_name=hsk11dev)
[![Linkedin: Harpal Singh](https://img.shields.io/badge/-hsk11-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/hsk11)](https://www.linkedin.com/in/hsk11/)
[![GitHub followers](https://img.shields.io/github/followers/hsk11?label=Follow&style=social)](https://github.com/hsk11)
[![npm version](https://badge.fury.io/js/jai-server.svg)](https://www.npmjs.com/package/jai-server)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Welcome to **Plates Co's Cart Billing Service** - a robust, flexible solution designed to handle complex pricing scenarios including promotions, discounts, and delivery charges. This proof-of-concept demonstrates a modern approach to e-commerce billing systems with a focus on scalability and configurability.

## ✨ Key Features

### Core Capabilities
- **Custom API Server** - Built on the powerful Jai-server framework (developed by Harpal Singh)
- **CLI Integration** - Command-line interface for rapid testing and deployment
- **Modular Architecture** - Components designed for reusability and maintainability
- **Enterprise-Grade Scalability** - Ready to grow with your business needs
- **Extensive Configuration Options** - Customize every aspect of the billing process

### Billing Intelligence
- **Comprehensive Cart Information** - Detailed breakdown of all cart elements
- **Dynamic Product Management** - Flexible product code system
- **Automatic Discount Application** - Rule-based discount engine
- **Smart Delivery Calculation** - Cost determination based on order parameters
- **Precise Totaling** - Accurate final calculations with proper rounding

### Developer Experience
- **Thorough Test Coverage** - Robust test suite ensures reliability
- **Clear Documentation** - Comprehensive guides for implementation
- **Simple Integration Path** - Easily connect with existing 
systems
- **Code formating using Es-lint** - Easily format code using eslint

## 🚀 Getting Started

### Installation

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Configuration

The system comes pre-configured with standard settings, but can be customized through the `config` directory.

## 💻 Usage Guide

### Starting the API Server

Launch the server with a simple command:

```bash
npm run start
```

The server will be available at `http://localhost:3000` by default.

### API Documentation

#### Endpoint: GET `/bill`

Query parameters:
- `products`: Comma-separated list of product codes

Example request:
```
GET http://localhost:3000/bill?products=B01,B01,R01,R01,R01
```

Example response:
```json
{
  "products": ["B01", "B01", "R01", "R01", "R01"],
  "MRP": 114.75,
  "discount": -16.47,
  "deliveryCost": 0,
  "finalTotal": 98.27
}
```

### Using the CLI Interface

The system includes a convenient CLI for quick testing and operations:

```bash
npm run start:cli PRODUCT_CODE1 PRODUCT_CODE2 PRODUCT_CODE3
```

Example:
```bash
npm run start:cli B01 B01 R01 R01
```

Example output:
```
Bill Info
{
  products: [ 'B01', 'B01', 'R01', 'R01' ],
  MRP: 81.8,
  discount: -16.47,
  deliveryCost: 2.95,
  finalTotal: 68.27
}
```

## 📊 Understanding the Billing Process

The system follows a sequential process to calculate the final bill:

1. **Product Collection** - Gathers all products in the cart
2. **Base Price Calculation** - Sums the MRP of all products
3. **Discount Application** - Applies relevant promotional rules
4. **Delivery Cost Calculation** - Determines shipping fees based on order total
5. **Final Totaling** - Combines all components for the final amount

### Product Codes

The system currently supports the following product codes:
- `R01` - Red Plate
- `G01` - Green Plate
- `B01` - Blue Plate

## 🔧 Advanced Configuration

### Discount Rules

The discount engine can be configured with custom rules in the `services/promotion.js` file. The system supports:

- Buy-one-get-one promotions

### Delivery Charges

Delivery charges are calculated based on order totals and can be configured in `config/deliveryTiers.js`.

## 🧪 Testing

Run the comprehensive test suite with:

```bash
npm test
```

This will validate all components including:
- API functionality
- Discount calculations
- Delivery cost determinations
- Edge cases

## 🛠️ Technical Architecture

The system is built on a modular architecture with the following key components:

- **Cart Manager** - Handles product collections and initial calculations
- **Discount Engine** - Applies promotional rules based on cart contents
- **Delivery Calculator** - Determines shipping costs based on order parameters
- **API Server** - Provides HTTP interface for remote access
- **CLI Interface** - Enables command-line operations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 About the Author

Developed by Harpal Singh (HSK11), a specialist in e-commerce solutions and scalable architecture.

---

*This README is part of the Cart Billing System documentation. For more information, please contact the development team.*