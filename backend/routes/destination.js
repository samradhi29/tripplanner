import express from 'express';
import Destination from '../models/destination.js';
const router = express.Router();
router.get('/' , async(req ,res)=>{
   try{
    const destinations = await Destination.find();
    res.json(destinations);
   }
   catch(error){
res.status(500).json({message : 'failed to fetch destinations' , error});
   }
})
export default router;