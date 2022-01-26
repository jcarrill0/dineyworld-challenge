// import 'dotenv/config'
require('dotenv').config();

module.exports = {
  development: {
    database: 'disney_dev',
    use_env_variables: 'DB_DEV_URL',
    dialect: 'postgres'
  },
  test: {
    database: 'disney_test',
    use_env_variables: 'DB_TEST_URL',
    dialect: 'postgres'
  },
  production: {
    database: 'disney_prod',
    use_env_variables: 'DB_PROD_URL',
    dialect: 'postgres'
  }
}

// export default configEnviroment
