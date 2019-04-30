const local = {
    serverURL: "http://localhost:3001",
    webURL: "http://localhost:3000"
};

const prod = {
    serverURL: "tester.com",
    webURL: "http://localhost:3000"
};

const envConfig = process.env.REACT_APP_ENV === 'production'
    ? prod
    : local;

export default {
    // Add common config values here
  
   envConfig
};