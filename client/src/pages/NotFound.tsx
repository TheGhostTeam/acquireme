import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-32 pb-20 text-center">
        <p className="font-mono text-8xl font-bold text-white/[0.04] mb-4">404</p>
        <h1 className="font-serif text-3xl text-foreground mb-4">Page Not Found</h1>
        <p className="text-ivory-muted mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-teal hover:bg-teal-dark text-background gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
