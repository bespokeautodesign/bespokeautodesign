import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const ServiceAreaPinecrest = () => <ServiceAreaTemplate content={getServiceAreaContent("pinecrest")} />;

export default ServiceAreaPinecrest;
