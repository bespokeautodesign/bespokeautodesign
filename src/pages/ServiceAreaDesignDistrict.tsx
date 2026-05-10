import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const ServiceAreaDesignDistrict = () => <ServiceAreaTemplate content={getServiceAreaContent("design-district")} />;

export default ServiceAreaDesignDistrict;
