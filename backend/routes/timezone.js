const router = require('express').Router();




// Router

router.get(["/", "/:zone"],  (req, res) => {

    // url parameters are been extracted and  are stored in a variable

    const gmt = req.params.zone;
    // const cvt = req.params.zone;
    // const wat = req.params.zone;
    // const cat = req.params.zone;
    // const eat = req.params.zone;
    // const mt = req.params.zone;



    // Check for various parameters from the frontend.

    if(gmt === "GMT" || gmt === "gmt") {
        const date = new Date()
        const gmtTimeZone =  date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        
        res.status(200).json({
            status: "success",
            time: gmtTimeZone,  
            localZone: gmt 
        })

    } else if(gmt === "CVT" || gmt === "cvt") {
        const date = new Date()
        const cvtTimeZone =  date.getUTCHours() - 1 + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        
        res.status(200).json({
            status: "success",
            time: cvtTimeZone,  
            localZone: cvt  
        })
        
    } else if (gmt === "WAT" || gmt === "wat") {
        const date = new Date()
        const watTimeZone =  date.getUTCHours() + 1 + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        
        res.status(200).json({
            status: "success",
            time: watTimeZone,  
            localZone: wat  
          
        })

    } else if (gmt === "CAT" || gmt === "cat") {
        const date = new Date()
        const catTimeZone =  date.getUTCHours() + 2 + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        
        res.status(200).json({
            status: "success",
            time: catTimeZone,  
            localZone:cat  
          
        })
    } else if (gmt === "EAT" || gmt === "eat") {
        const date = new Date()
        const eatTimeZone =  date.getUTCHours() + 3 + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        
        res.status(200).json({
            status: "success",
            time: eatTimeZone,  
            localZone: eat  
           
        })

    } else if (gmt === "MT" || gmt === "mt") {
        const date = new Date()
        const mtTimeZone =  date.getUTCHours() + 4 + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        
        res.status(200).json({
            status: "success",
            time: mtTimeZone,  
            localZone: mt  
           
        })

      
    } else {
        res.status(200).json({error: "The time for the timezone you've entered is not available"})
    }
        
    res.status(500).json()
 
})

module.exports = router;