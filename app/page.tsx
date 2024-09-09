/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WxiqRGA4lqO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Portfolio
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Team
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
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
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Team
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-primary">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
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
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  Tailored Solutions for Your Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Software offers a wide range of services to help your
                  business thrive in the digital landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="p-6 flex flex-col items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <GlobeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Web Development
                </h3>
                <p className="text-muted-foreground">
                  Crafting visually stunning and highly functional websites
                  tailored to your business needs.
                </p>
              </Card>
              <Card className="p-6 flex flex-col items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <SmartphoneIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Mobile App Development
                </h3>
                <p className="text-muted-foreground">
                  Developing cutting-edge mobile applications that provide
                  seamless user experiences.
                </p>
              </Card>
              <Card className="p-6 flex flex-col items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BrushIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  UX/UI Design
                </h3>
                <p className="text-muted-foreground">
                  Crafting intuitive and visually appealing user interfaces that
                  enhance the overall user experience.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  Showcasing Our Exceptional Work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a selection of our past projects and see how we've
                  helped our clients achieve their digital goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio"
                  className="w-full aspect-video object-cover object-center"
                />
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Acme Inc Website
                  </h3>
                  <p className="text-muted-foreground">
                    Designed and developed a modern and responsive website for a
                    leading manufacturing company.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Work
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio"
                  className="w-full aspect-video object-cover object-center"
                />
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Zenith Mobile App
                  </h3>
                  <p className="text-muted-foreground">
                    Crafted a user-friendly mobile application for a fitness
                    tracking startup.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Work
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio"
                  className="w-full aspect-video object-cover object-center"
                />
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Streamline Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    Designed and developed a data-driven dashboard for a
                    logistics company.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Work
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio"
                  className="w-full aspect-video object-cover object-center"
                />
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Acme Branding
                  </h3>
                  <p className="text-muted-foreground">
                    Designed a comprehensive brand identity for a manufacturing
                    company.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Work
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio"
                  className="w-full aspect-video object-cover object-center"
                />
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Logistics Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    Developed a data-driven dashboard for a logistics company.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Work
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio"
                  className="w-full aspect-video object-cover object-center"
                />
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Fitness Tracker App
                  </h3>
                  <p className="text-muted-foreground">
                    Designed and developed a mobile app for a fitness tracking
                    startup.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Work
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="team"
          className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  Meet the Experts Behind Acme Software
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of developers, designers, and strategists
                  are dedicated to delivering exceptional digital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BrushIcon(props: any) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function GlobeIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
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

function SmartphoneIcon(props: any) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
