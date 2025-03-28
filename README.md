//First clone the repository by below command line
git clone https://github.com/deepakpradhan10242/Backend.git

//after cloning run below command line
npm install 

//add .env (this is the sample environments)
JWT_SECRET_KEY="ksdfksfsdfuirowrebvtyuiolkjhgfds"
NODE_ENV="development"
MONGODB_URI=

//this requires for account retrival through otp
SMTP_USER = ""
SMTP_PASS = ""

SENDER_EMAIL = "binbag@gmail.com"


//afterthat for starting the server
node index.js
