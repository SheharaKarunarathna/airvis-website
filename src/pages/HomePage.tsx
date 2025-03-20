import React, { useState } from 'react';
import { ThermometerSun, Timer, Power, Wind } from 'lucide-react';

const HomePage = () => {
  const [mode, setMode] = useState<'manual' | 'auto'>('manual');
  const [temperature, setTemperature] = useState(22);
  const [fanSpeed, setFanSpeed] = useState(2);
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gray-800 p-8 md:p-12">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">Smart AC Control</h1>
          <p className="text-xl text-gray-300">Control your air conditioning system with precision</p>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1628919350249-eb45d8829629?auto=format&fit=crop&w=800"
              alt="Modern AC Unit"
              className="w-full h-full object-cover opacity-20"
            />
            {isOn && (
              <>
                <div className="air-flow" style={{ left: '20%', top: '40%' }} />
                <div className="air-flow" style={{ left: '40%', top: '40%', animationDelay: '0.5s' }} />
                <div className="air-flow" style={{ left: '60%', top: '40%', animationDelay: '1s' }} />
              </>
            )}
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-96 h-96">
          <div className="gradient-blur"></div>
        </div>
      </div>

      {/* Control Modes */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mode Selection */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode('manual')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                mode === 'manual'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Manual Mode
            </button>
            <button
              onClick={() => setMode('auto')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                mode === 'auto'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Auto Mode
            </button>
          </div>

          {/* Power Button */}
          <button
            onClick={() => setIsOn(!isOn)}
            className={`w-full py-4 rounded-lg mb-6 flex items-center justify-center gap-2 font-medium transition ${
              isOn
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            <Power className="w-5 h-5" />
            {isOn ? 'Turn Off' : mode === 'auto' ? 'Turn On AirVis' : 'Turn On'}
          </button>

          {/* Current Status */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-blue-400 font-medium mb-2">Current Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <ThermometerSun className="w-5 h-5 text-blue-400" />
                <span>{temperature}°C</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Wind className="w-5 h-5 text-blue-400" />
                <span>Fan Speed: {fanSpeed}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Timer className="w-5 h-5 text-blue-400" />
                <span>{mode === 'auto' ? 'Auto' : 'Manual'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-900/30">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            {mode === 'manual' ? 'Manual Controls' : 'Auto Settings'}
          </h2>

          {mode === 'manual' ? (
            <div className="space-y-6">
              {/* Temperature Control */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Temperature
                </label>
                <input
                  type="range"
                  min="16"
                  max="30"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 text-blue-400 font-medium">
                  {temperature}°C
                </div>
              </div>

              {/* Fan Speed Control */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Fan Speed
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setFanSpeed(speed)}
                      className={`py-2 rounded ${
                        fanSpeed === speed
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      Speed {speed}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-blue-400 font-medium mb-2">Smart Schedule</h3>
                <p className="text-gray-300 text-sm">
                  The AC will automatically adjust based on:
                </p>
                <ul className="mt-2 space-y-2 text-sm text-gray-400">
                  <li>• Room temperature</li>
                  <li>• Time of day</li>
                  <li>• Occupancy detection</li>
                  <li>• Weather forecast</li>
                </ul>
              </div>
              
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Configure Auto Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;