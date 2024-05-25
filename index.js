const express =require('express')
const router=require('./routes/route.js')
const PORT =5000
const app=express();


app.use(express.json())

app.use('/api',router)

app.listen(PORT,()=>{
  console.log('Server is running')
})