const local = {
    serverURL: "http://localhost:3001",
    webURL: "http://localhost:3000"
};

const prod = {
    serverURL: "http://ec2-18-218-117-80.us-east-2.compute.amazonaws.com:3001",
    webURL: "https://watimprove.com"
};

const envConfig = process.env.REACT_APP_ENV === 'production'
    ? prod
    : local;

export default {
    // Add common config values here
  
   envConfig
};