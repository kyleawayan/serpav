const { Pool, Client } = require("pg");

export default async function handler(req, res) {
  const client = new Client();
  await client.connect();

  const response = await client.query(
    `SELECT COUNT("FoodId") FROM "Survey" WHERE "FoodId" = 1`
  );

  console.log(response);
  await client.end();

  res.status(200).json({ name: "John Doe" });
}
