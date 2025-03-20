import React from 'react';
import { Battery, Zap, DollarSign, Leaf } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const powerData = [
  { time: '00:00', usage: 1.2 },
  { time: '03:00', usage: 0.8 },
  { time: '06:00', usage: 0.6 },
  { time: '09:00', usage: 1.5 },
  { time: '12:00', usage: 2.1 },
  { time: '15:00', usage: 2.3 },
  { time: '18:00', usage: 1.8 },
  { time: '21:00', usage: 1.4 },
];

const efficiencyData = [
  { name: 'Optimal', value: 65 },
  { name: 'Average', value: 25 },
  { name: 'Inefficient', value: 10 },
];

const COLORS = ['#60A5FA', '#93C5FD', '#BFDBFE'];

const PowerUsagePage = () => {
  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-900/30">
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Current Power</p>
              <p className="text-2xl font-bold text-blue-400">1.8 kW</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-900/30">
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 p-3 rounded-lg">
              <Battery className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Daily Usage</p>
              <p className="text-2xl font-bold text-blue-400">12.4 kWh</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-900/30">
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Est. Cost</p>
              <p className="text-2xl font-bold text-blue-400">$3.45</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-900/30">
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 p-3 rounded-lg">
              <Leaf className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Efficiency</p>
              <p className="text-2xl font-bold text-blue-400">85%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Power Usage Chart */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
          <h2 className="text-xl font-bold text-blue-400 mb-6">Power Usage Over Time</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={powerData}>
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
                  dataKey="usage"
                  stroke="#60A5FA"
                  strokeWidth={2}
                  name="Power Usage (kW)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Efficiency Distribution */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
          <h2 className="text-xl font-bold text-blue-400 mb-6">Efficiency Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={efficiencyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {efficiencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem',
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
        <h2 className="text-xl font-bold text-blue-400 mb-4">Energy Saving Tips</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-blue-400 mb-2">Optimal Temperature</h3>
            <p className="text-gray-300 text-sm">
              Set your AC between 23-26°C for the best balance of comfort and efficiency.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-blue-400 mb-2">Regular Maintenance</h3>
            <p className="text-gray-300 text-sm">
              Clean filters monthly to maintain optimal performance and reduce power consumption.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-blue-400 mb-2">Smart Scheduling</h3>
            <p className="text-gray-300 text-sm">
              Use auto mode during peak hours to optimize power usage and cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerUsagePage;