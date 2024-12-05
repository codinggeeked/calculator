import React, { useState } from 'react';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
    PI: '',
    LL: '',
  });
  const [result, setResult] = useState(null);

  const classifySoil = (data) => {
    const { A, B, C, D, E } = data;
    let classification = '';
    let Cu = 0;
    let Cc = 0;

    if (A < 50) {
      const H = 100 - B;
      const I = B - A;

      if (I > H) {
        Cu = C / E;
        Cc = (D * D) / (C * E);
        classification =
          A < 5 ? (Cu >= 6 && Cc >= 1 && Cc <= 3 ? 'SW' : 'SP') : 'SM';
      } else {
        Cu = C / E;
        Cc = (D * D) / (C * E);
        classification =
          A < 5 ? (Cu >= 4 && Cc >= 1 && Cc <= 3 ? 'GW' : 'GP') : 'GM';
      }
    } else {
      classification = 'Conditions for A > 50% are not defined.';
    }

    return { classification, Cu, Cc };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData, ...Object.fromEntries(new FormData(e.target)) };
    setFormData(data);
    setResult(classifySoil(data));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl text-center font-bold mb-6">Soil Classification</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
        {['A', 'B', 'C', 'D', 'E', 'PI', 'LL'].map((field) => (
          <div key={field} className="mb-4">
            <label className="block font-medium mb-2">{field}</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 border rounded"
              name={field}
              required
            />
          </div>
        ))}
        <button className="w-full py-2 bg-blue-500 text-white rounded">Classify</button>
      </form>
      {result && (
        <div className="mt-8 max-w-lg mx-auto bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold">Classification Result</h3>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Parameter</th>
                <th className="border p-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Classification</td>
                <td className="border p-2">{result.classification}</td>
              </tr>
              <tr>
                <td className="border p-2">Cu</td>
                <td className="border p-2">{result.Cu}</td>
              </tr>
              <tr>
                <td className="border p-2">Cc</td>
                <td className="border p-2">{result.Cc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
