import { HardDrive, Files, Upload, Users } from "lucide-react";

function StatsCards() {
  const stats = [
    {
      title: "Storage Used",
      value: "0 MB",
      icon: <HardDrive size={28} />,
    },
    {
      title: "Files",
      value: "0",
      icon: <Files size={28} />,
    },
    {
      title: "Uploads",
      value: "0",
      icon: <Upload size={28} />,
    },
    {
      title: "Shared",
      value: "0",
      icon: <Users size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {stats.map((card, index) => (
        <div
          key={index}
          className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800 hover:border-cyan-400 transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400">{card.title}</p>

              <h2 className="text-3xl font-bold text-white mt-2">
                {card.value}
              </h2>
            </div>

            <div className="text-cyan-400">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;