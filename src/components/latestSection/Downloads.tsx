"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getDownloads } from "@/lib/client";

interface Order {
  _id: string;
  title: string;
  date: string;
  fileUrl: string;
}

export default function DownloadsPreview() {
  const [downloads, setDownloads] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDownloads(5, 0); // latest 10 orders
      setDownloads(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>

      {downloads.length === 0 ? (
        <p className="text-gray-500">No downloads available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border-b text-sm font-medium text-gray-700">
                  Date
                </th>
                <th className="p-2 border-b text-sm font-medium text-gray-700">
                  Order
                </th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((download) => (
                <tr key={download._id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-2 border-b text-sm text-gray-600">
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
                      className="text-emerald-700 hover:underline"
                    >
                      {download.title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* See all button */}
          <div className="mt-4 text-center">
            <Link
              href="/orders"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              See all downloads
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
