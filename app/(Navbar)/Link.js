import Link from "next/link";

export default function NavLink({ name, href }) {
  return (
    <Link
      className="text-2xl font-bold ml-4 mr-4 hover:text-yellow-400 hover:duration-300 transition-colors"
      href={href}
    >
      {name}
    </Link>
  );
}
