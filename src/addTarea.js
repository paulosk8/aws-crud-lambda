const { v4 } = require("uuid");
const AWS = require("aws-sdk");
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

exports.addTarea = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { title, description } = event.body;
  const crearAT = new Date();
  const id = v4();
  const nuevaTarea = {
    id,
    title,
    description,
    crearAT,
    done: false,
  };

  await dynamodb
    .put({
      TableName: "TareasTable",
      Item: nuevaTarea,
    })
    .promise();
  return {
    status: 200,
    body: nuevaTarea,
  };
};
module.exports = {
  nuevaTarea: middy(nuevaTarea).use(jsonBodyParser),
};