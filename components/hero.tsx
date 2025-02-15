import ButtonsMagic from "./ui/magic-buttons";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
    return ( 
       
         <div className="pb-20 pt-63">
            <div>
                 <Spotlight className="-top-100 -left-10 md:-left-32 md:-top-22 h-screen "fill='white' />
                 <Spotlight className="top-1 left-02 md:left-32 md:top-22 h-screen "fill='purple' />
           
            <Spotlight className="-top-28 -left-80 md:-left-32 h-[100vh] w-[90vw]      "fill='blue' />
            <Spotlight className="-top-10 -left-20 md:-left-32 h-[10vh] w-[200vw] "fill='white' />
                </div>
                 <div className="h-[50rem] w-full dark:bg-black bg-white/[0.0] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white/[0.0] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="felx justify-center relative my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="text-gray-400 tracking-wider text-4xl md:text-5xl lg:text-6xl font-bold text-center">
               Amir Fooladi
                </h2>
    

        
        <TextGenerateEffect 
        words="Developer"
        className="text-5xl dark text-center justify-center rounded-full md:text-5xl lg:text-6xl font-bold  " 
        duration={0.5}    
        />
        <p className="text-center text-gray-400 mb-3" >
            Hi, I&apos;m amir, i use a React JS , Next JS , Typescript and tailwind css 
        </p>
        <a href="#about">
             <ButtonsMagic
             title="About me"
         
             />
        </a>
       
    </div>
      </div>
    </div>

           
         </div>
      

);
}
 
export default Hero;
 