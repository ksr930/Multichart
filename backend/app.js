const express=require('express')

const bodyParser=require('body-parser')

const cors=require('cors')
const app = express();


 app.use(bodyParser.urlencoded({extended:true}));

app.use(cors())

app.get('/data',(req,res)=>{
res.json({
	id:'series1',
	name: "kDM",
    data: [180, 199, -313, -136, 330, -145, 233,344,212,-12,234,322,-412,134,-443,-163,-284,302,-123,164,224,413,134]
})
})



var port=process.env.PORT||5000;
app.listen(port,(err)=>{
	if(!err)
	{
		console.log('server connected')
	}
})