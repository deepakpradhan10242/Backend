--> First clone the repository by below command line <--


git clone https://github.com/deepakpradhan10242/Backend.git


cd Backend


-->after cloning run below command line<--


npm install 

-->add .env (these are the sample environments)<-->


JWT_SECRET_KEY="ksdfksfsdfuirowrebvtyuiolkjhgfds"


NODE_ENV="development"


MONGODB_URI=


SMTP_USER = ""


SMTP_PASS = ""


SENDER_EMAIL = "binbag@gmail.com"


-->afterthat for starting the server<--


node index.js


-> POSTMAN apis <-


POST request

for registeration - http://localhost:8080/api/auth/register

for login - http://localhost:8080/api/auth/login

for logout - http://localhost:8080/api/auth/logout

GET request

for fetching userdata - http://localhost:8080/api/user/data

for profile update - http://localhost:8080/api/user/update



