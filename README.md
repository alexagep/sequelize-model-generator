# Sequelize-model-generator [![NPM Module](https://img.shields.io/badge/npm%20package-0.1.0-red)](https://github.com/alexagep/sequelize-model-generator)

***
Generates how many seed files you want for Sequelize from existing databases in less than a second.
Supported db engines till now:
* PostgreSQL
* MySQL

## Installation
### Global module
To install module globally simply type npm i -g sequelize-model-generator in your console.
### Local module
or use it directly in your project with npm install sequelize-model-generator



## Usage
There are two ways to use this utility:
- Use step by step wizard which will guide you though the process - just type `npx sequelize-model-generator` in your console.
- Provide all parameters through command line(examples below)

```
Usage:

const { createModel } = require('sequelize-model-generator')

createModel({
    output : 'test-seed', // output file
    username: 'username',
    password: 'password',
    database: 'seederalize',
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    port: 5432
  })
```

Use `npx sequelize-model-generator --desc` to see all available parameters with their descriptions. Some basic parameters below:
```shell
Usage: sequelize-model-generator -h <host> -d <database> -p [port] -u <user> -x
[password] -e [engine]

Options:
  --desc                 Show help command line options
  -v                     Show version number
  -h, --host             IP address/Hostname for database server
                                                          [default: "127.0.0.1" or "localhost"]
  -d, --database         Database name                             [required]
  -u, --user             Username for database server              [required]
  -x, --pass             Password for database server              [required]
  -p, --port             Port number for database server           [default: 5432]
  -e, --engine           Database engine
                                    [choices: "postgres", "mysql"]  [default: "postgres"]
  -o, --output           Where to place generated models   [default: "./db"]
  -l, --logging          logging option when composing a query object   [default: false] [boolean]
```


### Examples

* Creating seed from local Postgres database
   * Global module
      ```
      sequelize-model-generator -h localhost -d postgres -u postgres -x !Passw0rd -e postgres -o .
      ````
   * Npx Way
      ```
      npx sequelize-model-generator -h localhost -d postgres -u postgres -x !Passw0rd -e postgres -o .
      ````



## 🤝 Contribution

I will be grateful for any help you can provide to make this package better

