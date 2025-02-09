import { projects } from "@/data/data";

const ResentProject = () => {
    return ( 
        <div className="py-20">
            <h1 className="heading text-white">
              My Projects {' '}<br/>
                <span className="text-purple">
                   Recent Project
                </span>
                </h1>
                <div className=" flex flex-wrap items-center justify-center p-4 mt-10 gap-16  text-white">  
                    {projects.map((item)=>(
                        <div key={item.id} className="w-full max-w-md">
                           {item.title}
                        </div>
                    ))}
                </div>
        </div>
     );
}
 
export default ResentProject;