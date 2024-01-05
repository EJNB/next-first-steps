"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  console.log(pathName, path);

  return (
    <Link
      className={`mr-2 ${styles.link} ${
        pathName == path && styles["active-link"]
      }`}
      key={path}
      href={path}
    >
      {text}
    </Link>
  );
};
