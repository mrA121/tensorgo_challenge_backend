const app = require("./src/app");

const sequelize = require("./src/utils/database");

sequelize
  .sync()
  .then(result=>{
    console.log(result)
    app.listen(5000, () => {
        console.log("running on port 5000");
        console.log("--------------------------");
    })})
  .catch(
      err => console.log(err)
    );