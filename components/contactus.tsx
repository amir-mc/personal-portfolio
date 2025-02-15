const ContactUs = () => {
    
    return ( 
        <div className="w-full pt-20 pb-10 " id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">

        
        <img
        src="/footer-grid.svg"
        alt="footer"
        className="w-full h-full opacity-100" 
        />
        </div>
        <div className="flex flex-col items-center">
            <h1 className="heading text-white lg:max-w-[45vw]">
                Ready to Take <span className="text-blue-800">Your</span> project
            </h1>
            <h2 className="heading text-white lg:max-w-[35vw]">
                contact <span className="text-blue-800">me</span> now
            </h2>
        </div>
        
    </div>
     );
}
 
export default ContactUs;