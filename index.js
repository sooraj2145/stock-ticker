import { getData } from "./fakeSrockApi.js";

setInterval(function () {
    const stockData = getData();
    renderStockTicker(stockData)    
},1500);

let prvPrice = null;
function renderStockTicker(stockData){
    const stockName = document.getElementById('name');
    const stockSymbol = document.getElementById('symbol');
    const stockPrice = document.getElementById('price');
    const stockPriceIcon = document.getElementById('price-icon');
    const stockTime = document.getElementById('time');

    const {name, sym, price, time} = stockData;
    const priceDirectionIcon = price > prvPrice ? 'green.svg' : price < prvPrice ? 'red.svg' : 'grey.svg'; 
    const priceIconElement = document.createElement('img');
    priceIconElement.src = `./svg/${priceDirectionIcon}`;
    priceIconElement.alt = 'stock ticker icon';
    stockPriceIcon.innerHTML = '';
    stockPriceIcon.appendChild(priceIconElement);

    stockName.innerText = name;
    stockSymbol.innerText = sym;
    stockPrice.innerText = price;
    stockTime.innerText = time;

    prvPrice = price;
}