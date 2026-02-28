import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { trackFormSubmission } from "@/utils/gadsConversions";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedService?: string;
  preselectedPpfType?: string;
  preselectedPpfPackage?: string;
  preselectedMessage?: string;
}

export const QuoteModal = ({ open, onOpenChange, preselectedService, preselectedPpfType, preselectedPpfPackage, preselectedMessage }: QuoteModalProps) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [ppfType, setPpfType] = useState("");
  const [ppfPackage, setPpfPackage] = useState("");

  // Apply preselections when modal opens
  useEffect(() => {
    if (open) {
      if (preselectedService) setSelectedService(preselectedService);
      if (preselectedPpfType) setPpfType(preselectedPpfType);
      if (preselectedPpfPackage) setPpfPackage(preselectedPpfPackage);
      if (preselectedMessage) {
        setTimeout(() => {
          const msgField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
          if (msgField) msgField.value = preselectedMessage;
        }, 100);
      }
    }
  }, [open, preselectedService, preselectedPpfType, preselectedPpfPackage, preselectedMessage]);

  // Reset PPF type when service changes away from PPF
  useEffect(() => {
    if (selectedService !== "Paint Protection Film (PPF)") {
      setPpfType("");
      setPpfPackage("");
    }
  }, [selectedService]);

  // Reset package when PPF type changes away from Clear
  useEffect(() => {
    if (ppfType !== "Clear Paint Protection Film") {
      setPpfPackage("");
    }
  }, [ppfType]);

  const handleSubmit = async () => {
    const form = document.querySelector('#quote-modal-form') as HTMLFormElement;
    
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    const contactMethods = Array.from(form.querySelectorAll('input[name="contactMethod"]:checked')).map(input => (input as HTMLInputElement).value);
    const formData = new FormData(form);
    
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      // Build service string with PPF type if applicable
      let serviceValue = formData.get('service') as string;
      if (serviceValue === "Paint Protection Film (PPF)" && ppfType) {
        serviceValue = `PPF - ${ppfType}`;
        if (ppfType === "Clear Paint Protection Film" && ppfPackage) {
          serviceValue += ` (${ppfPackage})`;
        }
      }
      
      const { error } = await supabase.functions.invoke('send-quote-email', {
        body: {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          vehicle: formData.get('vehicle'),
          service: serviceValue,
          contactMethods: contactMethods,
          message: formData.get('message'),
        }
      });

      if (error) throw error;

      // Fire Google Ads conversion before navigating
      trackFormSubmission();

      form.reset();
      setSelectedService("");
      setPpfType("");
      setPpfPackage("");
      onOpenChange(false);
      navigate("/thank-you");
    } catch (error) {
      console.error('Error sending quote:', error);
      alert('There was an error sending your quote. Please try again or call us at (786) 395-9172.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <form id="quote-modal-form">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name *</label>
                <input name="firstName" required className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input name="lastName" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone *</label>
              <input name="phone" type="tel" required className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="(786) 395-9172" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input name="email" type="email" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Vehicle Make & Model *</label>
              <input name="vehicle" required className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="2024 Porsche 911" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Interest *</label>
              <select 
                name="service" 
                required 
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select a service...</option>
                <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Vinyl Wrap">Vinyl Wrap</option>
                <option value="Ceramic Tint">Ceramic Tint</option>
                <option value="Marine PPF">Marine PPF</option>
                <option value="Marine Ceramic Coating">Marine Ceramic Coating</option>
                <option value="Marine Ceramic Tint">Marine Ceramic Tint</option>
                <option value="Multiple Services">Multiple Services</option>
              </select>
            </div>
            {selectedService === "Paint Protection Film (PPF)" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">PPF Type *</label>
                <select 
                  name="ppfType" 
                  required 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  value={ppfType}
                  onChange={(e) => setPpfType(e.target.value)}
                >
                  <option value="">Select PPF type...</option>
                  <option value="Clear Paint Protection Film">Clear Paint Protection Film</option>
                  <option value="Stealth (Satin Finish)">Stealth (Satin Finish)</option>
                  <option value="Color PPF">Color PPF</option>
                </select>
              </div>
            )}
            {ppfType === "Clear Paint Protection Film" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">PPF Package *</label>
                <select 
                  name="ppfPackage" 
                  required 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  value={ppfPackage}
                  onChange={(e) => setPpfPackage(e.target.value)}
                >
                  <option value="">Select a package...</option>
                  <option value="Full Front Package">Full Front Package</option>
                  <option value="Track Package">Track Package</option>
                  <option value="Full Body">Full Body</option>
                </select>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Contact Method</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="contactMethod" value="text" className="rounded border-input" />
                  <span className="text-sm">Text</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="contactMethod" value="phone" className="rounded border-input" />
                  <span className="text-sm">Phone</span>
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message *</label>
              <textarea name="message" required className="w-full px-3 py-2 border border-input rounded-md bg-background min-h-24" placeholder="Tell us about your project..."></textarea>
            </div>
          </form>
          
          
          <Button variant="premium" className="w-full" onClick={handleSubmit}>
            Submit Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
