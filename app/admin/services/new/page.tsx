import AdminBar from '../../AdminBar';
import ServiceForm from '../ServiceForm';

export default function NewServicePage() {
  return (
    <>
      <AdminBar active="services" />
      <h1 className="mb-6 font-display text-xl font-semibold text-white">New Service</h1>
      <ServiceForm />
    </>
  );
}
