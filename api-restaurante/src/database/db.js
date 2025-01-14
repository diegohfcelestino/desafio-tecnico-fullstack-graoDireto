import mongoose from "mongoose";

export const connectDatabase = () => {
  console.log("Aguarde, conectando ao banco de dados");

  mongoose
    .connect(
      process.env.MONGODB_URI /* ,
    { useNewUrlParser: true, useUnifiedTopology: true } */
    )
    .then(() => console.log("Conectado ao Mongo DB Atlas"))
    .catch((error) => console.log(error));
};

