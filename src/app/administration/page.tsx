import { EmployeeCard } from "@/components";
import {  getData } from "@/lib/client";
import { EmployeeType } from "@/lib/interface";

import Image from "next/image";

interface Employee {
  _id: string;
  name: string;
  email: string;
  contact: string;
  level: string;
}
export const revalidate = 60; // ISR: revalidate data every 60 seconds
export default async function AdminPage() {
  const posts: EmployeeType[] = await getData();
  return (
    <section className="max-w-7xl mx-auto mt-10 p-4">
      
      <div className="flex justify-between items-center pl-4 my-4 bg-gradient-to-r from-orange-800 to-slate-900">
        <h1 className="text-xl text-slate-100   uppercase font-kalam py-2">
          Administration
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.length > 0 &&
          posts.map((post, idx) => <EmployeeCard key={idx} postData={post} />)}
      </div>
    </section>
  );
}