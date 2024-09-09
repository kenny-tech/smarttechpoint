import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Software</span>
      </Link>
      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-background p-4"
          >
            <nav className="grid gap-4">
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Team
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
