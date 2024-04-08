import Link from "next/link";

const LinkButton = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="btn btn-primary bg-amber-500 text-indigo-50 p-2 text-sm rounded-md"
    >
      {label}
    </Link>
  );
};

export default LinkButton;