import express from "express";
export const tableRouter = express.Router();

tableRouter.get("/", (req, res) => {
  const number = parseInt(req.query.number) || 2;
  const length = parseInt(req.query.length) || 10;

  const tablePrepare = [];
  for (let i = 1; i <= length; i++) {
    tablePrepare.push(`${number} X ${i} = ${number * i}`);
  }

  res.render("table", { tablePrepare });
});
