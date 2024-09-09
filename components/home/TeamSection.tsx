export default function TeamSection() {
  return (
    <section
      id="team"
      className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Meet Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
              The People Behind Our Success
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our team of talented professionals is dedicated to delivering
              top-notch digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
