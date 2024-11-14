const ShowContentModal = ({ content, closeModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{content.title}</h2>

        <div className="mb-4">
          <p>
            <strong>Hook:</strong> {content.hook}
          </p>
          <p>
            <strong>Script:</strong> {content.script}
          </p>
          <p>
            <strong>CTA:</strong> {content.cta}
          </p>
          <p>
            <strong>Target Audience:</strong> {content.targetAudience}
          </p>
          <p>
            <strong>Focus:</strong> {content.focus}
          </p>
          <p>
            <strong>Posting:</strong> {content.posting}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Tasks</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Task</th>
                <th className="text-left">Priority</th>
                <th className="text-left">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {content && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                  onClick={closeModal}
                >
                  <div
                    className="bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-3 right-3 text-gray-500 text-xl font-bold"
                      onClick={closeModal}
                    >
                      &times;
                    </button>

                    {/* Header Icons */}
                    <div className="flex justify-between items-center mb-4">
                      {/* <div className="flex space-x-3 text-gray-500">

                        <span>Icon1</span>
                        <span>Icon2</span>
                      </div> */}
                      <div className="text-gray-500">
                        {/* Edit Icon */}
                        <span>✏️</span>
                      </div>
                    </div>

                    {/* Labels Above Badges */}
                    <div className="flex justify-around text-xs text-gray-500 font-semibold mb-1">
                      <span>Content Pillar</span>
                      <span>Content Type</span>
                      <span>Platform</span>
                    </div>

                    {/* Top Row with Badges */}
                    <div className="flex justify-around mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {content.contentPillar}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                        {content.contentType}
                      </span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">
                        {content.platform}
                      </span>
                    </div>

                    {/* Hook Text as Header */}

                    {/* Main Content */}
                    <div className="space-y-4 text-sm text-gray-700">
                      <div className="flex items-start mb-6">
                        <span className="font mr-2">Hook:</span>
                        <h2 className="text-xl font-bold break-words">
                          {content.hook}
                        </h2>
                      </div>

                      <div className="flex items-start">
                        <span className="font mr-4">Script:</span>
                        <span className="break-words font-semibold">
                          {content.script}
                        </span>
                      </div>

                      <div className="flex items-start">
                        <span className="font mr-5">CTA:</span>
                        <span className="break-words font-semibold">
                          {content.cta}
                        </span>
                      </div>

                      <div className="flex items-start">
                        <span className="font mr-4">Target Audience:</span>
                        <span className="break-words font-semibold">
                          {content.targetAudience}
                        </span>
                      </div>

                      <div className="flex items-start">
                        <span className="font mr-5">Focus:</span>
                        <span className="break-words font-semibold">
                          {content.focus}
                        </span>
                      </div>

                      <div className="flex items-start">
                        <span className="font mr-5">Posting:</span>
                        <span className="break-words font-semibold">
                          {content.posting}
                        </span>
                      </div>
                    </div>

                    {/* Divider Above Tasks */}
                    <hr className="my-6 border-gray-300" />

                    {/* Tasks Section */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-semibold text-orange-500">
                          Tasks
                        </h3>
                        <button className="text-orange-500 font-semibold text-xs flex items-center">
                          <span className="mr-1">+</span> Add Task
                        </button>
                      </div>
                      <div className="flex items-center border-b border-gray-200 py-2">
                        <input type="checkbox" className="mr-2" />
                        <span className="flex-1 text-gray-700 text-sm">
                          Record video tomorrow
                        </span>
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                          High
                        </span>
                        <span className="ml-3 text-gray-500 text-sm">
                          Tomorrow
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowContentModal;
