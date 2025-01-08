import React, { useState } from 'react';

const HelpFaq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I upload a contract for analysis?",
      answer: "Navigate to the Dashboard and use the 'Upload Contract' button to upload your document. Supported formats include PDF and DOCX.",
    },
    {
      question: "What types of risks does this tool identify?",
      answer: "The tool identifies risks across various categories, including payment terms, termination clauses, indemnity agreements, and more.",
    },
    {
      question: "How can I view detailed risk insights?",
      answer: "After uploading a contract, click on the 'Detailed Risk Insights' link from the Dashboard to view clause-by-clause breakdowns.",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddFaq = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    } else {
      alert("Please fill in both the question and answer fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Help & FAQ</h1>
        <p className="mt-2">Quick tips and answers to commonly asked questions about using the tool.</p>
      </header>

      <main className="p-6">
        {/* Quick Tips Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Quick Tips</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Ensure your contracts are in supported formats (PDF or DOCX).</li>
            <li>Use the Dashboard for quick access to all functionalities, including upload and analysis results.</li>
            <li>Check the Detailed Risk Insights for in-depth analysis of clauses and risks.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-4">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Add New Question Section */}
        <section>
          <h2 className="text-2xl font-semibold">Add a New Question</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600">Question</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border rounded-md"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Enter your question here"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">Answer</label>
              <textarea
                className="w-full p-2 mt-1 border rounded-md"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Enter the answer here"
              ></textarea>
            </div>
            <button
              onClick={handleAddFaq}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Add Question
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HelpFaq;
