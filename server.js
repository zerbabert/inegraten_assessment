const clever=require('clever');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.status(200).json({massage:"server is running "})
    });
    
app.get('/',(req,res)=>{
    res.status(200).json({massage:"server is pushed use"})
    });
app.listen(port,()=>{
    console.log(`this server into customer:${port}`);
})