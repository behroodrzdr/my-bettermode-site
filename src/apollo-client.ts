import { ApolloClient, InMemoryCache } from "@apollo/client";

const fakeToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVCTWxpR2lTTUEiLCJuZXR3b3JrSWQiOiJVa3F2N0pVcUh3IiwibmV0d29ya0RvbWFpbiI6ImJhc2ljLThraDV5ODk4LmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoielJtbXE3WGhXMnhwRWFicVhIbWNlS25tZlR4c0JKYUQxdjMwb2pQMHhjUUpPekpSZ0UiLCJpYXQiOjE3MzM2NDYyOTcsImV4cCI6MTczNjIzODI5N30.Ai60HbCVJJe5LIzw8XctJYURwUandmTJ_Gxcto6gQeU";

const client = new ApolloClient({
  uri: "https://api.bettermode.com/",
  headers: {
    Authorization: `Bearer ${fakeToken}`,
  },
  cache: new InMemoryCache(),
});

export default client;
