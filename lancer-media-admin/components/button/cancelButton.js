import Link from "next/link";
export default function CancelButton({href}) {
  return (
    <Link
          href={href}
          className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
        >
          Cancel
        </Link>
  )
}
