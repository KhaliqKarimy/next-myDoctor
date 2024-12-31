"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./header.module.css";




export default function HeaderComponent(): ReactElement {
    const pathName : string = usePathname();
  return (
    <header className={styles.header}>

        <nav >
            <ul>
                <li>
                    <Link href="/" className={clsx(pathName === '/' && styles.active)}>خانه</Link>
                    <Link href="/search" className={clsx(pathName === '/search' && styles.active)}>جستجو</Link>

                </li>
            </ul>
        </nav>

        <button className={styles.btnLogin}>ورود | ثبت نام</button>
     
    </header>
  );
}