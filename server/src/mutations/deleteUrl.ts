import express, {Response, Request} from 'express'; 
const router = express.Router();
import { URLS } from '../db';

const deleteURL = async (code: string): Promise<Boolean | undefined> => {
    if(!code) return false; 
    try {
        await URLS.deleteMany({code: code}); 
        return true; 
    }
    catch (error) {
        console.error("There was an error: " + error);
        return false; 
    }
}


router.delete('/', async (req: Request, res: Response) => {
    //Add check for no data being sent 
    const results = await deleteURL(req.body.code); 
    if(results == false) res.status(400); 
    console.log(results); 
    res.status(200).json(
        results
    );
}); 



module.exports = router; 