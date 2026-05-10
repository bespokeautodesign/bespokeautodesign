import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const ServiceAreaDoral = () => <ServiceAreaTemplate content={getServiceAreaContent("doral")} />;

export default ServiceAreaDoral;
