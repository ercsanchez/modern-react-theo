import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="font-semi-bold flex w-full items-center justify-between border-b p-4 text-xl">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
