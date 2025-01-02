const AWS = require("aws-sdk");
exports.getTarea = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const result = await dynamodb
    .get({
      TableName: "TareasTable",
      Key: {
        id,
      },
    })
    .promise();
  const tarea = result.Item;
  return {
    status: 200,
    body: tarea,
  };
};
