import  express  from "express";
import cors from 'cors'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

// configue openai
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

// express configure
const app = express()
app.use(cors())
app.use(express.json())

// home route
app.get('/', async (req,res)=>{
    res.status(200).send("ITS WORKING")
})

// home post route
app.post('/', async(req,res)=>{
    try {
     const prompt = req.body.prompt;
     const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0, 
        max_tokens: 3000, 
        top_p: 1, 
        frequency_penalty: 0.5, 
        presence_penalty: 0, 
      });

      res.status(200).send({
        bot: response.data.choices[0].text
      })

    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})

app.listen(5000, ()=>console.log("Listening on port 500"))