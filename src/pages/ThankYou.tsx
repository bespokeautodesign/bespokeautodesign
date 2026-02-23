import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Thank You for Your Request!
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We've received your quote request and our team will get back to you within <strong className="text-foreground">24 hours</strong>. 
              For immediate assistance, feel free to give us a call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="premium" size="lg" asChild>
              <a href="tel:+17863959172">
                <Phone className="w-4 h-4" />
                Call (786) 395-9172
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
