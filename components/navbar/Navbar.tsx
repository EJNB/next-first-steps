import Link from "next/link";
import { ActiveLink } from "@/components";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

// const temporal = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   });
// };

export function Navbar() {
  console.log("Navbar component created");

  // await temporal();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/">
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((nav) => (
        <ActiveLink key={nav.path} {...nav} />
      ))}
    </nav>
  );
}
