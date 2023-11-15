import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ name, href }) {
  const pathname = usePathname();
  let style =
    "text-2xl font-bold ml-4 mr-4 hover:text-yellow-400 hover:duration-300 transition-colors";
  if (pathname === href) {
    style += " text-yellow-400";
  }
  return (
    <Link className={style} href={href}>
      {name}
    </Link>
  );
}
