import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};
// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/search',
//   params: {q: '<REQUIRED>', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
//     'X-RapidAPI-Key': '5d261b28demsh4c85df60f6a8ffdp130a96jsnf4e0b3a53417'
//   }
// };
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
