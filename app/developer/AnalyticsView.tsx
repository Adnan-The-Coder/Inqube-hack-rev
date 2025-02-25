import React, { useState, useEffect, useRef } from "react";
import { Calendar, Settings, Download, RefreshCw } from "lucide-react";
import ChartJS from "chart.js/auto";

const AnalyticsView = () => {
  const [timeframe, setTimeframe] = useState<"month" | "quarter" | "year">("month");
  const [isLoading, setIsLoading] = useState(true);
  
  const performanceChartRef = useRef<ChartJS | null>(null);
  const fundingChartRef = useRef<ChartJS | null>(null);
  const timelineChartRef = useRef<ChartJS | null>(null);
  const performanceData = {
    month: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Completed Tasks",
          data: [18, 25, 30, 22],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Pending Tasks",
          data: [10, 15, 8, 12],
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          tension: 0.4,
          fill: true,
        }
      ]
    },
    quarter: {
      labels: ["Jan", "Feb", "Mar"],
      datasets: [
        {
          label: "Completed Tasks",
          data: [65, 75, 82],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Pending Tasks",
          data: [35, 28, 30],
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          tension: 0.4,
          fill: true,
        }
      ]
    },
    year: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Completed Tasks",
          data: [220, 250, 280, 310],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Pending Tasks",
          data: [90, 85, 70, 65],
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          tension: 0.4,
          fill: true,
        }
      ]
    }
  };

  const fundingData = {
    month: {
      labels: ["Research", "Development", "Marketing", "Operations"],
      datasets: [
        {
          data: [25, 40, 20, 15],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
            "rgba(16, 185, 129, 0.8)",
            "rgba(245, 158, 11, 0.8)",
            "rgba(139, 92, 246, 0.8)"
          ],
          borderWidth: 1
        }
      ]
    },
    quarter: {
      labels: ["Research", "Development", "Marketing", "Operations"],
      datasets: [
        {
          data: [30, 35, 25, 10],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
            "rgba(16, 185, 129, 0.8)",
            "rgba(245, 158, 11, 0.8)",
            "rgba(139, 92, 246, 0.8)"
          ],
          borderWidth: 1
        }
      ]
    },
    year: {
      labels: ["Research", "Development", "Marketing", "Operations"],
      datasets: [
        {
          data: [22, 45, 18, 15],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
            "rgba(16, 185, 129, 0.8)",
            "rgba(245, 158, 11, 0.8)",
            "rgba(139, 92, 246, 0.8)"
          ],
          borderWidth: 1
        }
      ]
    }
  };

  const timelineData = {
    month: [15, 20, 25, 22, 30, 35, 40, 38, 45, 43, 47, 50],
    quarter: [60, 75, 90, 85, 95, 105, 110, 108, 115, 120, 125, 130],
    year: [200, 250, 300, 280, 320, 350, 370, 360, 390, 410, 430, 450]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (performanceChartRef.current) {
        performanceChartRef.current.destroy();
      }
      if (fundingChartRef.current) {
        fundingChartRef.current.destroy();
      }
      if (timelineChartRef.current) {
        timelineChartRef.current.destroy();
      }
      const performanceCtx = document.getElementById('performanceChart') as HTMLCanvasElement;
      if (performanceCtx) {
        performanceChartRef.current = new ChartJS(performanceCtx, {
          type: 'line',
          data: performanceData[timeframe],
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: '#e5e7eb'
                }
              },
              tooltip: {
                mode: 'index',
                intersect: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: '#e5e7eb'
                }
              },
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: '#e5e7eb'
                }
              }
            }
          }
        });
      }
      const fundingCtx = document.getElementById('fundingChart') as HTMLCanvasElement;
      if (fundingCtx) {
        fundingChartRef.current = new ChartJS(fundingCtx, {
          type: 'doughnut',
          data: fundingData[timeframe],
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: '#e5e7eb'
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context: any) {
                    const label = context.label || '';
                    const value = context.raw || 0;

                    return `${label}: ${value}%`;
                  }
                }
              }
            }
          }
        });
      }
      const timelineCtx = document.getElementById('timelineChart') as HTMLCanvasElement;
      if (timelineCtx) {
        timelineChartRef.current = new ChartJS(timelineCtx, {
          type: 'bar',
          data: {
            labels: Array.from({ length: 12 }).map((_, index) => 
              new Date(2025, index).toLocaleDateString('en-US', { month: 'short' })
            ),
            datasets: [{
              label: 'Project Progress',
              data: timelineData[timeframe],
              backgroundColor: 'rgba(59, 130, 246, 0.7)',
              borderColor: '#3b82f6',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: '#e5e7eb'
                }
              },
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: '#e5e7eb'
                }
              }
            }
          }
        });
      }
    }

    return () => {
      if (performanceChartRef.current) {
        performanceChartRef.current.destroy();
      }
      if (fundingChartRef.current) {
        fundingChartRef.current.destroy();
      }
      if (timelineChartRef.current) {
        timelineChartRef.current.destroy();
      }
    };
  }, [isLoading, timeframe]);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-white lg:text-4xl">Analytics Dashboard</h1>
          <p className="mt-2 text-gray-400">Get insights into your projects and performance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border border-gray-600 bg-[#2a2a2a]">
            <button 
              className={`px-4 py-2 text-sm ${timeframe === 'month' ? 'bg-blue-600 text-white' : 'text-gray-300'} rounded-l-lg`}
              onClick={() => setTimeframe('month')}
            >
              Month
            </button>
            <button 
              className={`px-4 py-2 text-sm ${timeframe === 'quarter' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
              onClick={() => setTimeframe('quarter')}
            >
              Quarter
            </button>
            <button 
              className={`px-4 py-2 text-sm ${timeframe === 'year' ? 'bg-blue-600 text-white' : 'text-gray-300'} rounded-r-lg`}
              onClick={() => setTimeframe('year')}
            >
              Year
            </button>
          </div>
          <button 
            className="flex items-center gap-1 rounded-lg border border-gray-600 bg-[#2a2a2a] px-3 py-2 text-sm text-gray-300"
            onClick={handleRefresh}
          >
            <RefreshCw size={16} /> Refresh
          </button>
          <button className="flex items-center gap-1 rounded-lg border border-gray-600 bg-[#2a2a2a] px-3 py-2 text-sm text-gray-300">
            <Calendar size={16} /> Calendar
          </button>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-600 bg-[#242424] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Total Projects</h3>
            <span className="text-xs text-gray-400">+12% from last period</span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-3xl font-bold text-white">24</span>
            <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-500">
              +3 new
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-gray-600 bg-[#242424] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Task Completion</h3>
            <span className="text-xs text-gray-400">+5% from last period</span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-3xl font-bold text-white">78%</span>
            <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-500">
              On track
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-gray-600 bg-[#242424] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Total Budget</h3>
            <span className="text-xs text-gray-400">-3% from last period</span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-3xl font-bold text-white">$1.2M</span>
            <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-500">
              Review needed
            </span>
          </div>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Project Performance</h3>
            <button className="rounded-full p-1 text-gray-400 hover:bg-gray-700 hover:text-white">
              <Download size={16} />
            </button>
          </div>
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="size-8 animate-spin rounded-full border-4 border-t-[#76b900]"></div>
            </div>
          ) : (
            <div className="h-64 w-full">
              <canvas id="performanceChart"></canvas>
            </div>
          )}
        </div>
        <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Funding Overview</h3>
            <button className="rounded-full p-1 text-gray-400 hover:bg-gray-700 hover:text-white">
              <Settings size={16} />
            </button>
          </div>
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="size-8 animate-spin rounded-full border-4 border-t-[#76b900]"></div>
            </div>
          ) : (
            <div className="h-64 w-full">
              <canvas id="fundingChart"></canvas>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">Project Timeline</h3>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-gray-600 bg-[#2a2a2a] px-3 py-1 text-sm text-gray-300">
              Export
            </button>
            <button className="rounded-lg border border-gray-600 bg-[#2a2a2a] px-3 py-1 text-sm text-white">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex h-80 items-center justify-center">
              <div className="size-8 animate-spin rounded-full border-4 border-t-[#76b900]"></div>
            </div>
          ) : (
            <div className="min-w-[800px]">
              <canvas id="timelineChart" className="h-80 w-full"></canvas>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;