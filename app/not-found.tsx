import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/80 to-white">
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-brand-200/50 blur-[120px]" />
      <div className="container-x flex min-h-[80svh] flex-col items-center justify-center pt-24 pb-16 text-center">
        <p className="text-gradient text-[6rem] leading-none font-extrabold tracking-tighter">404</p>
        <h1 className="display-2 mt-4">This page took a different career path.</h1>
        <p className="lead mt-4 max-w-md">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Button href="/" className="mt-8" arrow>
          Back to Home
        </Button>
      </div>
    </section>
  );
}
