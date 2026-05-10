import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { getServiceAreaContent } from "@/data/serviceAreaContent";

const ServiceAreaFisherIsland = () => <ServiceAreaTemplate content={getServiceAreaContent("fisher-island")} />;

export default ServiceAreaFisherIsland;
