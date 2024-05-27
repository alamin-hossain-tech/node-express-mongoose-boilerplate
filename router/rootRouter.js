import todoRouter from "./todoRouter.js";

const initRootRouter = (app) => {
  app.use("/api/v1", todoRouter);
};
export default initRootRouter;
