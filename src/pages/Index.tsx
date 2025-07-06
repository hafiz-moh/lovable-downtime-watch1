
import StatusIndicator from '@/components/StatusIndicator';
import LiveUpdates from '@/components/LiveUpdates';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Cuecard Performance Issues</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Status Message */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-l-4 border-yellow-400">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Users may be experiencing slower than normal response times when using Cuecard website. 
            Our engineering team is investigating to improve performance and mitigate the issue. 
            We appreciate your patience as we work to resolve this issue.
          </p>
          
          <StatusIndicator />
        </div>

        {/* Live Updates Section */}
        <LiveUpdates />
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-sm text-gray-500 text-center">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
