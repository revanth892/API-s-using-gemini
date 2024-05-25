const model=require('../config/geminiconig.js')

const promptfunc=async(req,res)=>{
    const {prompt} =req.body;
    try{
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        if(text)
        {
            res.status(201).json({data:text,message:"the prompt has been answered successfully"})
        }
        else
        {
            res.status(500).json({message:"error fetching prompt"})
        }
    }
    catch(err)
    {
        res.status(400).json({message:"internal server error"})
    }
}

module.exports={promptfunc};