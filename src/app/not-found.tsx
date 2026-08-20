import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p>[ERR 404]</p>
      <h1>Path not found.</h1>
      <p>The requested process does not exist in this portfolio.</p>
      <Link href="/">[ RETURN_HOME ]</Link>
    </main>
  );
}
