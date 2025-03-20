import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, ThermometerSun } from 'lucide-react';

const data = [
  { time: '00:00', temperature: 24, targetTemp: 23 },
  { time: '03:00', temperature: 23, targetTemp: 23 },
  { time: '06:00', temperature: 22, targetTemp: 22 },
  { time: '09:00', temperature: 23, targetTemp: 23 },
  { time: '12:00', temperature: 25, targetTemp: 24 },
  { time: '15:00', temperature: 26, targetTemp: 24 },
  { time: '18:00', temperature: 24, targetTemp: 23 },
  { time: '21:00', temperature: 23, targetTemp: 23 },
];

const HistoryPage = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-400">Temperature History</h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600">
              <Calendar className="w-4 h-4" />
              Last 24 Hours
            </button>
          </div>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#60A5FA"
                strokeWidth={2}
                name="Actual Temperature"
              />
              <Line
                type="monotone"
                dataKey="targetTemp"
                stroke="#93C5FD"
                strokeWidth={2}
                name="Target Temperature"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Recent Events</h3>
          <div className="space-y-4">
            {[
              { time: '21:30', event: 'Temperature adjusted to 23°C' },
              { time: '18:45', event: 'Mode changed to Auto' },
              { time: '15:20', event: 'Fan speed increased to level 3' },
              { time: '12:10', event: 'Temperature adjusted to 24°C' },
            ].map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg"
              >
                <ThermometerSun className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 font-medium">{event.event}</p>
                  <p className="text-sm text-blue-400">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Average Temperature</p>
              <p className="text-2xl font-bold text-blue-400">23.8°C</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Time in Auto Mode</p>
              <p className="text-2xl font-bold text-blue-400">14h 30m</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Temperature Range</p>
              <p className="text-2xl font-bold text-blue-400">22-26°C</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Cooling Time</p>
              <p className="text-2xl font-bold text-blue-400">8h 45m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;