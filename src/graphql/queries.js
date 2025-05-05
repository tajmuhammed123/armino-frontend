import { gql } from "@apollo/client/core";

export const GET_WEATHER = gql`
  query GetWeather {
    getWeather {
      city
      temperature
      description
      icon
      date
      feels_like
      sunset
    }
  }
`;
