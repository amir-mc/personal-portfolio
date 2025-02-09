
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import ResentProject from "@/components/resentporoject";
import { FloatingNav } from "@/components/ui/floating-navbar";

import Image from "next/image";

export default function Home() {
  return (
   
   <main className="relative bg-black-100 flex justify-center 
   items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full ">
      <FloatingNav
        navItems={[
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
          { name: "Contact", link: "/contact" },
        ]}
      />
      <Hero />
        <Grid/>
        <ResentProject/>
    </div>
         
    </main>
   
  );
}
