import { Spinner } from "@/components";


export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner size="lg" color="border-green-500" />
    </div>
  );
}
