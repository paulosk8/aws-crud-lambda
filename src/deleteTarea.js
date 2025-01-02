const AWS = require("aws-sdk");

exports.deleteTarea = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  await dynamodb
    .delete({
      TableName: "TareasTable",
      Key: { id },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: "Tarea eliminada",
    },
  };
};
