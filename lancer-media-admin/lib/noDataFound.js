import { FolderPlusIcon } from "@heroicons/react/24/outline";

const NoData = ({msg}) => {
  return (
    <div className="container max-w-screen mb-10 rounded-md border border-gray-200 bg-white p-4 text-center flex flex-col gap-4 justify-center shadow-sm">
      <FolderPlusIcon className="w-8 h-8 mx-auto"></FolderPlusIcon>
      <p className="font-bold">No data found</p>
      <p>Create the first record by clicking on Create button</p>
    </div>
  )
};

export default NoData;