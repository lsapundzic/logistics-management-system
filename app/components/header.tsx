import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <Link href="./">Home</Link>
            <Link href="./list">List</Link>
            <Link href="./settings">Settings</Link>
        </nav>
    )
}