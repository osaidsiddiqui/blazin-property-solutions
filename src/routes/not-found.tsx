import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-fire-gradient">404</h1>
        <h2 className="mt-4 font-display text-2xl">PAGE NOT FOUND</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-fire-gradient px-7 py-3 text-sm font-bold uppercase tracking-widest text-white glow-flame"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
