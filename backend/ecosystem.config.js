module.exports = {
  apps: [
    {
      name: "backend",
      script: "./dist/main.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        JWT_SECRET: process.env.JWT_SECRET,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_DB: process.env.POSTGRES_DB,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
      },
    },
  ],
};
