import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Let's Work Together
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Whether you're looking to start a new project or need support for an existing one, we're here to help.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
