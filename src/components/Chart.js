import { CartesianGrid, Legend, Line, LineChart, XAxis,Tooltip, YAxis } from 'recharts';

function Chart(props) {
  const transformDataForChart = (data) => {
    if (!data || !data.startYear || !data.startYear.monthly) {
      return [];
    }

    const monthlyData = data.startYear.monthly;
    
    const chartData = monthlyData.map((month) => ({
        date: month.date,
        Shipment: month.shipment,
        Payment: month.payment,
        Release: month.release,
        PaymentFact: data.current.payment.fact, 
        ShipmentFact: data.current.shipment.fact, 
        ReleaseFact: data.current.release.fact, 
      }));
    return chartData;
  };

  const chartData = transformDataForChart(props.data);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '90vw', height: '300px' }}>
        <LineChart width={600} height={300} data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <Line type="monotone" dataKey="Shipment" stroke="#2196F3" strokeWidth={3} />
          <Line type="monotone" dataKey="Payment" stroke="#F44236" strokeWidth={3} />
          <Line type="monotone" dataKey="Release" stroke="#FFCA29" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
}
export default Chart;
