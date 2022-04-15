import express, {Response, Request} from 'express'; 
const router = express.Router();
import { DB } from '../db';
import CRC32 from "crc-32"; 
//Url looks like this: http://localhost:3001/1379401704

const createHash = async (url: string, expires: Number) => {
    let results; 
    if(expires == 1) results = await DB(1).findOne({url: url}) || await DB(15).findOne({url: url}) || await DB(30).findOne({url: url});
    if(expires == 15) results = await DB(15).findOne({url: url}) || await DB(30).findOne({url: url});
    if(expires == 30) results = await DB(30).findOne({url: url});
    console.log("Already Exist: " + results);
    if(results) return results.code; 

    let encodedLink = Math.abs(CRC32.str(url));
    console.log(encodedLink); 
    try {
        await DB(expires).insertMany({code: encodedLink, url: url}); 
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
    const code = await createHash(req.body.link, req.body.expires); 
    if(!code) res.status(400); 

    res.status(200).json(
        code
    );
}); 



module.exports = router; 