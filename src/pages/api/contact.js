import sendEmail from "@/utilis/sendEmail";

export default async function handler(req, res) {
  
  try {
    if (req.method === "POST") {

      const ifSend = await sendEmail(
        req.from,
        "Test email NextJs",
        req.message
      )
      
      if(ifSend) {
        return res.json({
          status: true,
          message: "Email send successfully!!"
        });
      } else {
        return res.json({
          status: false,
          message: "There was an error while sending your email, please try again later!!"
        }); 
      }
  
    } else {

      return res.json({
        status: false,
        message: "Only POST requests are allowed!!"
      }); 

    }
  } catch (error) {

    return res.json(
        { 
          message: `Error: ${error.message}`
        }
      );
  
  }
  
  

  
}
