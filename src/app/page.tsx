import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4">
      
<h1 className="text-center font-extrabold tangerine-bold text-4xl my-4">District Institute Of Education <br/>Kupwara</h1>
<div className="flex justify-center items-center">
  <Link href="/"> <button className="bg-sky-500 px-4 cursor-pointer py-2 rounded-full font-bold hover:bg-sky-300 duration-300">View Result</button>
  </Link>
  </div>
     

      
    </section>
  );
}
