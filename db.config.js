module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    // PORT: '1433',
    DB: "test",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };