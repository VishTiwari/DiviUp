import React, { useEffect, useState } from "react";
import { getDataForStock } from './ApiConnector';


/*function formatStockData(stockData) {
  // Convert stockData from an object to an array
  return Object.entries(stockData).map(entries => {
      const [date, priceData] = entries;

      return {
          date,
          open: Number(priceData['1. open']),
          high: Number(priceData['2. high']),
          low: Number(priceData['3. low']),
          close: Number(priceData['4. close'])
      }
  });
};  

const DataFunc = () => {
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
      const fetchStockData = async () => {
          const result = await getDataForStock('TSLA');
          setStockData(formatStockData(result.data['Time Series (Monthly)']));
          console.log(result.data);
      };    
      fetchStockData();
  }, []);
};*/

let data = {
  exchanges: [
    {
      name: "S&P 500",
      index: 4280.70,
      change: 14.21,
    },
    {
      name: "NASDAQ",
      index: 14360.39,
      change: -9.32,
    },
    {
      name: "NYSE",
      index: 16658.79,
      change: 100.16,
    },
    {
      name: "DOW Jones",
      index: 34434,
      change: 237.29,
    },
  ],
  stocks: [
    {
      name: "Texas Instruments",
      ticker: 'TXN',
      bid: 187.50,
      ask: 190.00,
      sector: "Semiconductors",
      change: 2.50,
      dividends: {
        2021: 4.00,
        2020: 3.72,
        2019: 3.21,
        2018: 2.63,
        2017: 2.12,
        2016: 1.64,
        2015: 1.40,
        2014: 1.24,
        2013: 1.07,
        2012: 0.72,
        2011: 0.56,
        2010: 0.49,
        2009: 0.45,
        2008: 0.41,
        2007: 0.30,
        2006: 0.13,
        2005: 0.105,
        2004: 0.08875,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "", authorId: "author123" },
          id: 1,
        },
      ],
    },
    {
      name: "Broadcom",
      ticker: "AVGO",
      bid: 462.30,
      ask: 463.46,
      sector: "Semiconductors",
      change: 1.16,
      dividends: {
        2021: 14.50,
        2020: 13.35,
        2019: 11.20,
        2018: 7.90,
        2017: 4.81,
        2016: 2.52,
        2015: 1.64,
        2014: 1.23,
        2013: 0.88,
        2012: 0.61,
        2011: 0.40,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "", authorId: "author123" },
          id: 1,
        },
        {
          title: "Second research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "", authorId: "author123" },
          id: 2,
        },
      ],
    },
    {
      name: "Canadian Pacific",
      ticker: "CP",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2021: 4.00,
        2020: 2.66,
        2019: 2.382,
        2018: 1.922,
        2017: 1.696,
        2016: 1.415,
        2015: 1.084,
        2014: 1.256,
        2013: 1.342,
        2012: 1.355,
        2011: 1.176,
        2010: 0.80,
        2009: 0.656,
        2008: 0.487,
        2007: 0.419,
        2006: 0.495,
        2005: 13.09,
        2004: 0.406,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "", authorId: "author123" },
          id: 1,
        },
      ],
    },
    {
      name: "T. Rowe Price",
      ticker: "TROW",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2021: 4.00,
        2020: 3.72,
        2019: 3.21,
        2018: 2.63,
        2017: 2.12,
        2016: 1.64,
        2015: 1.40,
        2014: 1.24,
        2013: 1.07,
        2012: 0.72,
        2011: 0.56,
        2010: 0.49,
        2009: 0.45,
        2008: 0.41,
        2007: 0.30,
        2006: 0.13,
        2005: 0.105,
        2004: 0.08875,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "", authorId: "author123" },
          id: 1,
        },
      ],
    },
    {
      name: "JPMorgan Chase",
      ticker: "JPM",
      bid: 128.5,
      ask: 129.0,
      sector: "Industry",
      change: 1.54,
      dividends: {
        2021: 3.87,
        2020: 3.72,
        2019: 3.21,
        2018: 2.63,
        2017: 2.12,
        2016: 1.64,
        2015: 1.40,
        2014: 1.24,
        2013: 1.07,
        2012: 0.72,
        2011: 0.56,
        2010: 0.49,
        2009: 0.45,
        2008: 0.41,
        2007: 0.30,
        2006: 0.13,
        2005: 0.105,
        2004: 0.08875,
      },
      homepage: "https://google.com",
      investorpage: "https://google.com",
      pe: 15,
      research: [
        {
          title: "First research",
          description:
            "This is the description. It is usually a lot longer than the title and contains information about the research that has been done",
          link: "https://google.com",
          author: { name: "", authorId: "author123" },
          id: 1,
        },
      ],
    },
  ],
};

export default data;
