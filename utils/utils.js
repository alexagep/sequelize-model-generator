const packagejson = require('../package.json')
const md5 = require("md5");

class Utils {

  /**
   * this function writes package version and its author on the terminal
   * @type {function}
   * @function packageVersion
   */
  static packageVersion = () => {
    process.stderr.write(
      [
        // No dependencies, so we do it from hand.
        `${packagejson.name}@${packagejson.version} (c) ${packagejson.author}`,
      ].join('\n') +
        '\n\n' +
        `Usage: seederalize -h <host> -d <database> -p [port] \n -u <user> -x [password] -e [engine] \n\n
        or use --desc to see description of the package\n\n`
    )
    process.exit(1)
  }

  /**
   * this function writes package info / help section on the terminal
   * @type {function}
   * @function showingHelp
   */
  static showingHelp = () => {
    const help = `
      Usage: seederalize -h <host> -d <database> -p [port] -u <user> -x [password] -e [engine]

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
        `

    console.log(help)
    process.exit(1)
  }

  /**
   * this function hashes raw password with md5 package and returns that hashed password
   * @type {function}
   * @function hashPass
   * @return {string}
   */
  static hashPass = (rawPassword, { salt = 15, rounds = 10 }) => {

    let hashed = md5(rawPassword + salt);
    for (let i = 0; i <= rounds; i++) {
      hashed = md5(hashed);
    }

    return `${salt}$${rounds}$${hashed}`;
  }
}



module.exports = {
  Utils,
}
