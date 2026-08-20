import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js // TypeScript // Tailwind CSS</p>
      </div>
      <a href="#home">[ RETURN_TO_TOP ↑ ]</a>
    </footer>
  );
}
