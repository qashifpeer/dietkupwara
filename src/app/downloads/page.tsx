// app/orders/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDownloads } from "@/lib/client";

interface Download {
  _id: string;
  title: string;
  date: string;
  fileUrl: string;
}

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDownloads(50, page * 50);
      setDownloads(data);
      setHasMore(data.length === 50); // If less than 50, no more pages
    };
    fetchData();
  }, [page]);

  return (
   <section className="w-full h-screen bg-gradient-to-b from-stone-900 from- via-gray-900 via-100% to-stone-900 to-100%">
     <div className="p-6 max-w-5xl mx-auto pt-20">
      <h1 className="text-2xl font-bold mb-6 text-sky-100">All Download Files</h1>

      {downloads.length === 0 ? (
        <p className="text-sky-200">No File available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="text-left  bg-gradient-to-r from-orange-800 to-slate-900">
                <th className="p-2 border-b text-sm montserrat-bold font-medium text-sky-100">
                  Date
                </th>
                <th className="p-2 border-b text-sm montserrat-bold font-medium text-sky-100">
                  Title/Download
                </th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((download) => (
                <tr key={download._id} className="hover:bg-gray-500 hover:text-sky-500 transition-colors">
                  <td className="p-2 border-b text-sm text-sky-200">
                    {new Date(download.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="p-2 border-b">
                    <Link
                      href={download.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-100 hover:underline"
                    >
                      {download.title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-600">Page {page + 1}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!hasMore}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
   </section>
  );
}
