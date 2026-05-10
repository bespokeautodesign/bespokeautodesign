import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const ServiceAreaSurfside = () => <ServiceAreaTemplate content={getServiceAreaContent("surfside")} />;

export default ServiceAreaSurfside;
