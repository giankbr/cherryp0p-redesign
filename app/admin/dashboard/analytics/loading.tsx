import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Skeleton className="h-8 w-[300px] mb-2" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[120px] w-full rounded-md" />
            ))}
        </div>
        <Skeleton className="h-[300px] w-full rounded-md" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[250px] w-full rounded-md" />
            ))}
        </div>
      </div>
    </div>
  )
}
