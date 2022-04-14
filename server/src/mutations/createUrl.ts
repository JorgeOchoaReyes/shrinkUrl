import express, {Response, Request} from 'express'; 
const router = express.Router();
import { URLS } from '../db';
import CRC32 from "crc-32"; 
;

const createHash = async (url: string) => {
    let results = await URLS.findOne({url: url})
    if(results) return results.code; 

    let encodedLink = Math.abs(CRC32.str(url));
    console.log(encodedLink); 
    try {
        await URLS.insertMany({code: encodedLink, url: url}); 
        return encodedLink; 
    }
    catch (error) {
        console.error("There was an error: " + error);
        return; 
    }
}


router.post('/', async (req: Request, res: Response) => {
    //Add check for no data being sent 
    console.log(req.body);
    const code = await createHash(req.body.link); 
    if(!code) res.status(400); 

    res.status(200).json(
        code
    );
}); 



module.exports = router; 