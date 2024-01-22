import { Separator } from '@radix-ui/react-separator'

import { Skeleton } from '@/components/ui/skeleton'

export const SchoolDetailSkeleton = () => {
  return (
    <div className="spece-y-6 flex justify-between">
      <div>
        <h3 className="font-medium">Informações - INSE</h3>
        <Separator
          orientation="vertical"
          className="my-4 h-1 rounded-sm bg-teal-500"
        />
        <div className="flex flex-col gap-2">
          <Skeleton className=" h-4 w-[80px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[40px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[40px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[70px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[70px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[110px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[120px] bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>

      <div>
        <h3 className="font-medium">Informações - Percentuais</h3>
        <Separator
          orientation="vertical"
          className="my-4 h-1 rounded-sm bg-teal-500"
        />
        <div className="flex flex-col gap-2">
          <Skeleton className=" h-4 w-[80px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[40px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[40px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[70px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[70px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[110px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[120px] bg-gray-300 dark:bg-gray-700" />
          <Skeleton className=" h-4 w-[120px] bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
