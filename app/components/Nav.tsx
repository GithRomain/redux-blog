"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "../styles/layout.module.css";
import { fetchUsers, useDispatch } from "@/lib/redux";

export const Nav = () => {
	const dispatch = useDispatch();
	dispatch(fetchUsers());

	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<Link
				className={`${styles.link} ${
					pathname === "/" ? styles.active : ""
				}`}
				href="/"
			>
				Home
			</Link>
			<Link
				className={`${styles.link} ${
					pathname === "/verify" ? styles.active : ""
				}`}
				href="/verify"
			>
				Verify
			</Link>
			<Link
				className={`${styles.link} ${
					pathname === "/pages/postsPage" ? styles.active : ""
				}`}
				href="/pages/postsPage"
			>
				Posts
			</Link>
		</nav>
	);
};
