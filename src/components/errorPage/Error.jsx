import { Link } from "react-router";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold tracking-tight ">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

        <p className="mt-2 text-slate">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bgs transition shadow-lg"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
