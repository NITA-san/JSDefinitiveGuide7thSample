function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares;
}

let portfolio = new Object;
addstock(portfolio, "bob", 10);
addstock(portfolio, "taro", 20);

console.log(portfolio);

function computeValue(portfolio) {
    let total = 0.0;
    for(let stock in portfolio) {       // For each stock in the portfolio:
        let shares = portfolio[stock];  // get the number of shares
        let price = getQuote(stock);    // look up share price
        total += shares * price;        // add stock value to total value
    }
    return total;                       // Return total value.
}

function getQuote(stock) {
    return 10;
}

console.log(computeValue(portfolio));