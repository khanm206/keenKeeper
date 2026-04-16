import { PieChart, Pie, ResponsiveContainer } from "recharts";
const StatusChart = ({ timeline }) => {
  let call = timeline.filter((d) => d.action === "call").length;
  let text = timeline.filter((d) => d.action === "text").length;
  let video = timeline.filter((d) => d.action === "video").length;

  const data = [
    { name: "Call", value: call, fill: "#244D3F" },
    { name: "Text", value: text, fill: "#7E35E1" },
    { name: "Video Chat", value: video, fill: "#37A163" },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="80%"
            outerRadius="100%"
            paddingAngle={1}
            cornerRadius="20%"
            isAnimationActive={true}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusChart;
