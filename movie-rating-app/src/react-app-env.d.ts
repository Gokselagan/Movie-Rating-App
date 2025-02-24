/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL: string;
      REACT_APP_ACCESS_TOKEN: string;
      REACT_APP_MOVIEDETAILS_API_URL: string;
      REACT_APP_API_KEY: string;
    }
  }