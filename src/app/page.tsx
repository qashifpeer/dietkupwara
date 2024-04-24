import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4">
      
<h1 className="text-center font-extrabold tangerine-bold text-4xl my-4">District Institute Of Education <br/>Kupwara</h1>
<div className="flex flex-col justify-center items-center">
  <h2 className="my-6 text-lg text-slate-100 font-bold bg-slate-900 px-4 py-2">Class 8th Results 2024</h2>
  <Link href="https://dietkup.educian.com/campus_management_front_end_client/onlineresults"> <button className="bg-sky-500 px-4 cursor-pointer py-2 rounded-full font-bold hover:bg-sky-300 duration-300">View Result</button>
  </Link>
  </div>
     

      
    </section>
  );
}
