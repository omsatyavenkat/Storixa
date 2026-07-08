import { HardDrive, Files, Upload, Users } from "lucide-react";

function StatsCards({ stats }) {
  // Default values if stats haven't loaded yet
  const safeStats = stats || {
    storageUsed: 0,
    totalFiles: 0,
    totalUploads: 0,
  };

  const storageMB = (
    safeStats.storageUsed /
    (1024 * 1024)
  ).toFixed(2);

  const cards = [
    {
      title: "Storage Used",
      value: `${storageMB} MB`,
      icon: <HardDrive size={28} />,
    },
    {
      title: "Files",
      value: safeStats.totalFiles,
      icon: <Files size={28} />,
    },
    {
      title: "Uploads",
      value: safeStats.totalUploads,
      icon: <Upload size={28} />,
    },
    {
      title: "Storage Limit",
      value: "5 GB",
      icon: <Users size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow"
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