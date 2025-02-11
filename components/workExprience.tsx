import { workExperience } from "@/data/data";
import { Button } from "./ui/moving-border";

const WorkExprience = () => {
    return ( 

            <div className="py-20 "id="work" >
                <h1 className="heading text-gray-300">
                    MY&nbsp;
                    <span className="text-purple">
                        Work Exprience
                    </span>
                </h1>
                <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4  gap-10">
                    {workExperience.map((item) => (
                        
                            <Button key={item.id}
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                           className="flex text-white border-slate-800 "
                            >
                                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                    <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="lg:w-32 md:w-20 w-16"
                                    />
                                    <div className="lg:ms-5">
                                        <h1 className="text-start md:text-3xl text-2xl font-semibold">
                                            {item.title}
                                        </h1>
                                        <p className=" text-start mt-3 font-semibold text-gray-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                                </Button>
              
                    ))}
                </div>

            </div>

     );
}
 
export default WorkExprience;