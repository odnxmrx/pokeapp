const { Router } = require("express");
const { getTypesHandler, postTypesHandler } = require("../handlers/typesHandler");

const typesRouter = Router();

typesRouter.get("/", getTypesHandler);
typesRouter.post("/", postTypesHandler);

module.exports = typesRouter;