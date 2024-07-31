require('dotenv').config();
const express = require("express")
const cors = require("cors")
const app = express()
const dbConnect = require("./Database/MongoDB")
const bodyParser = require('body-parser')


const Newsletter = require("./Models/Newsletter")

const sendEmail = require("./Utils/sendEmail");



// ---------database connection-----------------------------
dbConnect()

// middlewares
app.use(express.json())
app.use(cors())

app.use(bodyParser.json({ limit: '70mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '70mb' }));


// starting the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Port connected ${PORT}`)
})






// ----------------------------------------------------

app.post("/api/newsletter", async (req, res) => {
    const { email } = req.body;

    try {
        let emaill = await Newsletter.findOne({ email: email })

        if (emaill) {
            res.json("exists")
        }
        else{
            const newEmail = new Newsletter({ email });
            await newEmail.save();

            console.log(newEmail);

            const text = "Thank you!"

            await sendEmail(newEmail.email, "Verify Email", text)

            res.json("Mail sent")
        }

        
    }
    catch(e){
        console.log(e);
    }

})  



const adminRoute = require("./Routes/AdmiinRoute")

const clientRoute = require("./Routes/ClientRoutes")

app.use("/admin",adminRoute)
app.use("/api",clientRoute)