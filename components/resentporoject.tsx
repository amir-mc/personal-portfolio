import { projects } from "@/data/data";
import { ThreeDCardDemo } from "./ui/cardContainer";

const ResentProject = () => {
    return ( 
        <div className="py-20" id="projects">
            <h1 className="heading text-white"> 
              My Projects {' '}<br/>
                <span className="text-purple">
                   Recent Project
                </span>
                </h1>
                <div className=" flex flex-wrap items-center justify-center p-4 mt-10 gap-16  text-white">  
                    {projects.map((item)=>(
                        <div key={item.id} className="lg:min-h-[27.5rem] h-[25rem] mr-5 ml-5  sm:mt-7 sm:mb-7 flex item-center justify-center sm:w-96 w-[80wv]">
                           
                           <ThreeDCardDemo link={item.link} img={item.img} title={item.title} des={item.des}/>
                        </div>
                    ))}
                </div>
        </div>
     );
}
 
export default ResentProject;