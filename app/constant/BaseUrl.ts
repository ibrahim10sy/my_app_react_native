const ENV = {
    dev: 'http://10.0.2.2:9000/api-koumi', // Adresse pour l'Android Emulator
    prod: 'https://koumi.ml/api-koumi',
  };
  
  const getEnvVars = () => {
    return ENV.dev;
  };
  
  export const API_URL = getEnvVars();
  
  export const getStockImage = (id : any) => `${API_URL}/Stock/${id}`;
  