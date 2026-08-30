import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6 text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">Login</h1>

      <div className="flex w-full max-w-sm flex-col gap-3 rounded-2xl border border-foreground/15 p-6">
        <button className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90">
          <FcGoogle size={20} />
          Login with Google Account
        </button>
        <button className="flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-black px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
          <FaGithub size={20} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
}