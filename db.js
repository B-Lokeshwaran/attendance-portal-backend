const { MongoClient } = require("mongodb");

module.exports = {
  db: null,
  async connect() {
    try {
      let con = await MongoClient.connect("mongodb+srv://toor:toor@cluster0.mfvku.mongodb.net?retryWrites=true&w=majority");
      this.db = con.db('attendance-portal');
      console.log("---MongoDB Connected---");
    } catch (err) {
      console.log(err);
    }
  },
};
