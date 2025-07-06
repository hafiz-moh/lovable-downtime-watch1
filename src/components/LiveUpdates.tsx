
const LiveUpdates = () => {
  const updates = [
    {
      id: 1,
      timestamp: "2 hours ago",
      message: "Thank you for reaching me out. We regret that you have faced this issue the 3rd time and I take this time to sincerely apologize for the inconvenience caused. As we consider this matter serious; our technical team will actively work to restore your access and ensure to mitigate this problem by taking necessary action.\n\nAs we work on this, we will continue to keep you updated on the progress.\n\nWe truly value your business and appreciate your patience in this process. If there is anything that we could assist you in the meantime; please don't hesitate to let me know."
    },
    {
      id: 2,
      timestamp: "4 hours ago", 
      message: "We were looking forward to the conversation today. We regret that things didn't go as planned for today's recording. I thank Mark for sending his regrets.\n\nI would like to know if we could reschedule the recording at a time that works best for him. Let me know on his availability and I will make necessary arrangements.\n\nI look forward to hearing from you."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Live Updates</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {updates.map((update) => (
          <div key={update.id} className="px-6 py-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-2 w-2 bg-blue-400 rounded-full mt-2"></div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Update #{update.id}</p>
                  <p className="text-sm text-gray-500">{update.timestamp}</p>
                </div>
                <div className="text-gray-700 whitespace-pre-line">
                  {update.message}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveUpdates;
