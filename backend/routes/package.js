import  express from 'express';
import Package from '../models/package.js';
const router = express.Router();
router.get('/top-selling' , async(req , res)=>{
    try {
        const packages = await Package.find();
  res.json(packages);
   }
   catch(error){
res.status(500).json({message : 'failed to fetch packages' , error});
   }
})
export default router;