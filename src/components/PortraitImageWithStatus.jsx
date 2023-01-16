import { EmployeeStatus } from '@/componensts/EmployeeStatus';
import { PortraitImage } from '@/componensts/PortraitImage';

export function PortraitImageWithStatus({ employee }) {
  return (
    <span className="relative">
      <PortraitImage src={employee?.portrait} />
      <span className="absolute top-6 right-6 justify-end space-y-2">
        <EmployeeStatus status={employee?.status} />
      </span>
    </span>
  );
}
