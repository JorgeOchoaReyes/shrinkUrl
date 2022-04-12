
export const useFetch = async (method, link) => {
    let res; 
    switch (method) {
        case "post":
            try{
               res = await fetch("http://localhost:3001/createUrl", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({link: link})
              });
              return res.json(); 
            }
            catch(error) {
                console.error("An error occured: " + error);
            }

        // case "get":
        //     try{
        //         res = await fetch("http://localhost:3000/"); 
        //         return res.json().code;  
        //     }
        //     catch(error) {
        //         console.error("An error occured: " + error)
        //     }

        // case "delete": 
        //     try{
        //         res = await fetch("http://localhost:3000/deleteUrl", {
        //          method: 'DELETE',
        //          headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //           },
        //           body: JSON.stringify({code: code})
        //        });
        //        return res.json().results; 
        //     }
        //     catch(error) {
        //         console.error("An error occured: " + error)
        //     }
    }


}