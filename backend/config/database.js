const mongoose = require("mongoose");

exports.connectDataBase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => {
      console.log(
        `DataBase Connect : ${con.connection.host} : ${con.connection.port}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
