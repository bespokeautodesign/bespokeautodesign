import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const ServiceAreaWynwood = () => <ServiceAreaTemplate content={getServiceAreaContent("wynwood")} />;

export default ServiceAreaWynwood;
