/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";


const COLORS = ['#FF0000','#00FF00'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const Statistics = () => {
  const [total, setTotal]= useState(12);
  const [totalDonation, setTotalDonation] = useState(0);
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setTotalDonation(donationItems.length);
    }
  }, []);
  const data = [
    { name: 'Total Donation', value: total },
    { name: 'My Donation', value: totalDonation }
    ];
  
    return (
      <div className="max-w-7xl mx-auto">
        
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
      
    </div>
    );
};

export default Statistics;