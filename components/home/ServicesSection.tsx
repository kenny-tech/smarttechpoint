import { Card } from "@/components/ui/card";

export default function ServicesSection() {
  return (
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
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
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
              Crafting visually stunning and highly functional websites tailored
              to your business needs.
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
              Developing cutting-edge mobile applications that provide seamless
              user experiences.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <BrushIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">UX/UI Design</h3>
            <p className="text-muted-foreground">
              Crafting intuitive and visually appealing user interfaces that
              enhance the overall user experience.
            </p>
          </Card>
        </div>
      </div>
    </section>
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
