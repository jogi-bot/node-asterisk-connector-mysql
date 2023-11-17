const AsteriskManager = require("asterisk-manager");
const mysql = require("mysql2");

// Create an AMI connection
const ami = new AsteriskManager();

const amiConfig = {
  host: "", // Asterisk server IP
  port: 5038,
  username: "asterisk", // AMI username
  password: "asterisk", // AMI password
};

ami.connect(amiConfig, (amiErr) => {
  if (amiErr) {
    console.error("Failed to connect to Asterisk AMI:", amiErr);
  } else {
    console.log("Connected to Asterisk AMI");

    // Create a database connection
    const dbConfig = {
      host: "", // enter host of your databse ip
      user: "krunal", // enter user of db
      password: "", // enter user of password
      database: "asterisk", // enter db name
      port: 3306, // enter port
    };

    const dbConnection = mysql.createConnection(dbConfig);

    dbConnection.connect((dbErr) => {
      if (dbErr) {
        console.error("Failed to connect to the database:", dbErr);
      } else {
        console.log("Connected to the database");

        // Now, you can perform database operations here.

        // Don't forget to close the database connection when you're done.
        dbConnection.end();
      }
    });
  }
});
