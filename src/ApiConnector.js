import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query'

});

export const getDataForStock = (symbol) =>{
    return axiosInstance.get('', {
        params: {
            function: 'TIME_SERIES_MONTHLY',
            symbol,
            apikey: 'CKAETJZKKTMU2224',
        }
    })
};

