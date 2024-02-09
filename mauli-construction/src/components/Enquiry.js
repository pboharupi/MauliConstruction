import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
//function Enquiry() {
    export const Enquiry = () => {
        const form = useRef();
        var output="";
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_im0eukp', 'template_rzlhwds', form.current, 'W9OI5lnWtwUVb7q6O')
            .then((result) => {
                console.log(result.text);
                 alert("Email sent successfully");
                 
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        };
    return (
        <div class="panel panel-primary border border-light">
            <div class="panel-heading" style={{ textAlign: "center" }}>

                <h5 class="panel-title ">Send Your Enquiry</h5>
            </div>
            <div class="panel-body" style={{ marginTop: "-20px" }}>
                <div class="m-4">

                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="text" class="form-control" id="from_name" name="from_name" placeholder="Your Full Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email Address</label>
                            <input type="email" class="form-control" id="from_email" name='from_email' placeholder="email@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Contact Number</label>
                            <input type="tel" class="form-control" id="mobile" name='mobile' placeholder="Your Contact Number" />
                            <input type="hidden" class="form-control" id="to_email" name='to_email' value="puruboharupi17@gmail.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Enquiry Details</label>
                            <textarea class="form-control" id="message" name="message" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">Send Enquiry</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Enquiry;