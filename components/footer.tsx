import { socialMedia } from "@/data/data";
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="w-full pt-20 pb-10 " id="contact">
            
            
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center" >
                 <p className="md:text-base text-sm text-white-200 md:font-normal font-right">
                 © 2025 Amir Fooladi. All rights reserved.
                 </p>
                 <div className="flex items-center  md:gap-3 gap-6 ">
                        {socialMedia.map((items)=>(
                            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-white-200"
                             key={items.id}>
                                <a href={items.address}>
                                    <Image
                                    src={items.img}
                                    alt='pro'
                                    
                                    width={20}
                                    height={20}
                                    />
                                    </a>
                            </div>
                        ))}
                 </div>
            </div>
        </footer>
     ); 
}
 
export default Footer;