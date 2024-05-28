import React from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const data = [
  { rank: 1, name: "Selling with re entr", calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, price: "-", action: "View" },
  { rank: 2, name: "strategy_name", calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, price: 500, action: "Buy" },
  { rank: 3, name: "Based on premium and", calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, price: "-", action: "View" },
  { rank: 4, name: "strategy_name", calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: "-", action: "View" },
  { rank: 5, name: "strategy_name", calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: "-", action: "View" },
  { rank: 6, name: "Based on premium wit", calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: 0.49, price: "-", action: "View" },
  { rank: 7, name: "strategy_name", calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: 0.6, price: "-", action: "View" },
  { rank: 8, name: "Wait and trade_Save", calmarRatio: 2.62, overallProfit: 178252.5, avgDailyProfit: 161.9, winPercentage: 0.63, price: "-", action: "View" },
  { rank: 9, name: "iron condor", calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercentage: 0.65, price: "-", action: "View" },
  { rank: 10, name: "strategy_name", calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercentage: 0.62, price: "-", action: "View" },
];

const Leaderboard = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center py-6  bg-[#E27498] text-white shadow-md">Basic Backtest</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Rank</th>
                <th className="py-4 px-6 text-left font-semibold">Name</th>
                <th className="py-4 px-6 text-center font-semibold">Calmar Ratio</th>
                <th className="py-4 px-6 text-right font-semibold">Overall Profit</th>
                <th className="py-4 px-6 text-right font-semibold">Avg. Daily Profit</th>
                <th className="py-4 px-6 text-center font-semibold">Win %(Day)</th>
                <th className="py-4 px-6 text-center font-semibold">Price (Rs)</th>
                <th className="py-4 px-6 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.rank} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-gray-100 transition duration-150`}>
                  <td className="py-4 px-6 text-left">{item.rank}</td>
                  <td className="py-4 px-6">{item.name}</td>
                  <td className="py-4 px-6 text-center">{item.calmarRatio.toFixed(2)}</td>
                  <td className="py-4 px-6 text-right">{item.overallProfit.toLocaleString()}</td>
                  <td className="py-4 px-6 text-right">{item.avgDailyProfit.toFixed(2)}</td>
                  <td className="py-4 px-6 text-center">{(item.winPercentage * 100).toFixed(2)}%</td>
                  <td className="py-4 px-6 text-center">{item.price === "-" ? "-" : item.price.toLocaleString()}</td>
                  <td className="py-4 px-6 text-center">
                    {item.action === "View" ? (
                      <button className="text-blue-500 hover:text-blue-700 transition duration-150">
                        <FaEye size={18} />
                      </button>
                    ) : (
                      <button className="text-green-500 hover:text-green-700 transition duration-150">
                        <FaShoppingCart size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;



