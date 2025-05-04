import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Skeleton className="h-8 w-[300px] mb-2" />
        <Skeleton className="h-4 w-[350px]" />
      </div>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-[200px]" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-[100px]" />
            <Skeleton className="h-10 w-[100px]" />
          </div>
        </div>
        <Skeleton className="h-[500px] w-full rounded-md" />
      </div>
    </div>
  )
}
