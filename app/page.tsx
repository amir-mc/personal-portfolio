
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import ResentProject from "@/components/resentporoject";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WorkExprience from "@/components/workExprience";
import { navItems } from "@/data/data";

import Image from "next/image";

export default function Home() {
  return (
   
   <main className="relative bg-black-100 flex justify-center 
   items-center flex-col mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full ">
      <FloatingNav
        navItems={navItems}
      />
      <Hero />
        <Grid/>
        <ResentProject/>
        <WorkExprience/>
        <ContactUs/>
        <Footer/>
    </div>
         
    </main>
   
  );
}
