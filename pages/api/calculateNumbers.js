const { Client } = require("pg");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const reqFoodId = req.body.reqFoodId;

    if (!reqFoodId) {
      res.status(400).json({ error: "Invalid request" });
      return;
    }

    const client = new Client();
    await client.connect();

    await client.query(
      `UPDATE "Food"
      SET "AverageLooks" = (
        SELECT AVG("Rating_Looks") FROM "Survey"
        WHERE "FoodId" = $1
      )
      WHERE id = $1`,
      [reqFoodId]
    );

    await client.query(
      `UPDATE "Food"
      SET "AverageTaste" = (
        SELECT AVG("Rating_Taste") FROM "Survey"
        WHERE "FoodId" = $1
      )
      WHERE id = $1`,
      [reqFoodId]
    );

    await client.query(
      `UPDATE "Food"
      SET "ReviewCount" = (
        SELECT COUNT("FoodId") FROM "Survey"
        WHERE "FoodId" = $1
      )
      WHERE id = $1`,
      [reqFoodId]
    );

    await client.end();

    res.status(200).json({ status: "Success" });
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
}
