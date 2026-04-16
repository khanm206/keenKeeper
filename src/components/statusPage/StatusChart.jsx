import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

const StatusChart = ({ timeline }) => {
  const call = timeline.filter((d) => d.action === "call").length;
  const text = timeline.filter((d) => d.action === "text").length;
  const video = timeline.filter((d) => d.action === "video").length;

  const data = [
    { name: "Call", value: call, color: "#244D3F" },
    { name: "Text", value: text, color: "#7E35E1" },
    { name: "Video", value: video, color: "#37A163" },
  ];

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={90}
            outerRadius={140}
            paddingAngle={3}
            cornerRadius={8}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusChart;
