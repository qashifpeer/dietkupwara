import { EmployeeCard } from "@/components";
import { getData } from "@/lib/client";
import { EmployeeType } from "@/lib/interface";

export const revalidate = 60; // ISR: revalidate data every 60 seconds
export default async function AdminPage() {
  const posts: EmployeeType[] = await getData();

  // Sort posts by numeric level (lowest first)
  const sortedPosts = posts.sort((a, b) => {
    const levelA = a.level ?? Infinity;
    const levelB = b.level ?? Infinity;
    return levelA - levelB;
  });

  return (
    <section className="relative w-screen h-full bg-gradient-to-tl from-teal-400 from-0% via-indigo-600 via-50% to-emerald-700 to-100%">
      <div className="max-w-7xl mx-auto pt-20 p-4">
        <div className="flex justify-between items-center pl-4 my-4 bg-gradient-to-r from-orange-800 to-slate-900">
          <h1 className="text-xl text-slate-100 uppercase font-kalam py-2">
            Administration
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.length > 0 &&
            sortedPosts.map((post, idx) => (
              <EmployeeCard key={idx} postData={post} />
            ))}
        </div>
      </div>
    </section>
  );
}
