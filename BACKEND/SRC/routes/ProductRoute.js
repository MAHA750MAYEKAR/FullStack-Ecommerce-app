import express from 'express'
import { addProductController, fetchAllProductsController } from '../controllers/ProductController.js'
import { upload } from '../middleware/MulterMiddleware.js'


const Router = express.Router()
Router.post('/add', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
]), addProductController);

Router.get("/list-products", fetchAllProductsController);




export default Router