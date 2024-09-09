import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  return (
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
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Explore a selection of our past projects and see how we've helped
              our clients achieve their digital goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {/* Portfolio Cards */}
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
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                View Work
              </Link>
            </CardContent>
          </Card>
          {/* Add other portfolio cards similarly */}
        </div>
      </div>
    </section>
  );
}
