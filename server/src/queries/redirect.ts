import express, {Response, Request} from 'express'; 
const router = express.Router();
import { DB } from '../db';


router.get('/:code', async (req: Request, res: Response) => {
    // console.log(req.params.code)
    if(!req.params.code) return res.status(400); 

    const code = await DB(1).findOne({code: req.params.code}) || await DB(15).findOne({code: req.params.code}) || await DB(30).findOne({code: req.params.code});

    if(!code) res.status(400); 

    res.redirect(code.url); 

    // Optional: If no metrics needed then use Redirect 301 

}); 



module.exports = router; 