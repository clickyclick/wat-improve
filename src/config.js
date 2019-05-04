const local = {
    serverURL: "http://localhost:3000",
    webURL: "http://localhost:3000"
};

const prod = {
    serverURL: "https://watimprove.com",
    webURL: "https://watimprove.com"
};

const envConfig = process.env.REACT_APP_ENV === 'production'
    ? prod
    : local;

export default {
    // Add common config values here
  
   envConfig
};