import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon, 
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
}) => {
  return (
    <div
      className={cn( 
        "row-span-1 rounded-xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,0,135,1) 66%, rgba(12,36,168,1) 100%)'
      }}
    >






      <div className={`${id === 6}&& 'flex justify-center h-full`}>
                <div className="w-full h-full absolute">
                   {img && 
                     <img src={img} alt={img} className={cn(imgClassName,'object-cover object-center')}/>
                           }
                  </div>
          <div className={`'absolute  -bottom-0 -right-0''${id === 5}&& 'w-full opacity-80'`}>
            {
              spareImg &&(
               <img src={spareImg} alt={spareImg} className={cn(imgClassName,'object-cover object-center w-full h-full ')}/>
                
              )
            }   
            </div>
            {id===6
            &&(
              <BackgroundGradientAnimation 
              gradientBackgroundStart="rgb(2,0,36)"
              gradientBackgroundEnd="rgb(12,36,168)"
              firstColor="rgb(2,0,36)"
              secondColor="rgb(4,0,135)"
              thirdColor="rgb(12,36,168)"
              >
                <div className="absolute z-50 flex items-center justify-center text-white font-bold ">

                </div>
              </BackgroundGradientAnimation>
              
            )}
            <div className={cn(titleClassName,'group-hover/bento:translate-x-2   transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
              <div className="font-sans  font-extralight text-sm md:trxt-xs dark:text-neutral-300">
               {description} 
              </div>
              <div className="font-sans text-[#c1c2d3] font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
              </div>
      </div>
    </div>
  );
};
