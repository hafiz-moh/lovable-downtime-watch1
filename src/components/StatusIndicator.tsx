
import { AlertTriangle } from 'lucide-react';

const StatusIndicator = () => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <div className="flex-shrink-0">
        <AlertTriangle className="h-5 w-5 text-yellow-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-yellow-800">
          System Status: Partially Degraded
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="h-3 w-3 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default StatusIndicator;
