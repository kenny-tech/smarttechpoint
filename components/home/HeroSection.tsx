import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-primary">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl">
            Elevate Your Digital Presence
          </h1>
          <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
            Acme Software is a leading software development company that
            specializes in creating innovative and user-friendly digital
            solutions.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
