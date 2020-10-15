const app = require("./src/app");

const sequelize = require("./src/utils/databse");

sequelize
  .sync()
  .then(result=>{
    console.log(result)
    app.listen(9000, () => {
        console.log("running on port 9000");
        console.log("--------------------------");
    })})
  .catch(
      err => console.log(err)
    );