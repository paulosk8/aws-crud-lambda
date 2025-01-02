const AWS = require("aws-sdk");
exports.getTareas = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb
    .scan({
      TableName: "TareasTable",
    })
    .promise();
  const tareas = result.Items;
  return {
    status: 200,
    body: {
      tareas,
    },
  };
};
