import React from 'react';
import Emailjs from 'emailjs-com';

Emailjs.init("user_mFR0rtdLRX29kDeb1QdFO");

function ContactForm()
{
    function sendEmail(e) {
        e.preventDefault();
        showSuccessToast();
         Emailjs.sendForm('portfolio_mail_sender', 'template_gqdmul7', e.target)
            .then((result) => {
                showSuccessToast();
            }, (error) => {
                alert(error.text);
            }); 
    }

    function showSuccessToast()
    {
        var toast = document.getElementById('success_toast');
        toast.animate([
            { opacity: '0',
              transform: 'translateX(-25%)'},
            { opacity: '1',
            transformY: 'translateY(0%)'},
        ], {
            duration: 300,
            easing: 'ease-in'
        });
        toast.classList.remove('opacity-0');
        var x = setTimeout(hideSuccessToast, 2000);
    }

    function hideSuccessToast(){
        var toast = document.getElementById('success_toast');
        toast.animate([
            { opacity: '1'},
            { opacity: '0'},
        ], {
            duration: 300,
            easing: 'ease-out'
        });
        toast.classList.add('opacity-0');
    }
    
    return(
        <div className="bg-black place-self-center w-full max-w-lg">
            <form className="bg-white shadow-lg" onSubmit={sendEmail}>
                <div className="px-8 pt-8 pb-6 flex flex-col border border-gray-200">
                    <p className="text-black font-semibold font-display text-2xl md:text-3xl pb-2">Contact Me</p>
                    <hr></hr>
                    <label for="name" className="font-bold pb-1 pt-6">Your Name<span className="text-red-600">*</span></label>
                    <input type="text" id="name" name="from_name" className="mb-3 border border-gray-300 h-10 px-3" required></input>
                    <label for="email" className="font-bold pb-1">Your Email<span className="text-red-600">*</span></label>
                    <input type="email" id="email" name="reply_to" className="mb-3 border border-gray-300 h-10 px-3" required></input>
                    <label for="message" className="font-bold pb-1">Your Message<span className="text-red-600">*</span></label>
                    <textarea type="text" id="message" name="message" className="mb-3 border border-gray-300 overflow-y-auto h-40 p-3" required></textarea>
                </div>
                <div className="p-8 bg-gray-800">
                    <button type="submit" value="Send" className="transition border-brandGreen font-semibold text-center uppercase hover:text-black hover:bg-brandGreen font-display h-10 border-2 w-full bg-transparent text-brandGreen">Send</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;