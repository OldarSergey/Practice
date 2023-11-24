import { CartesianGrid, Legend, Line, LineChart, XAxis,Tooltip, YAxis, ResponsiveContainer  } from 'recharts';
import './Chart.css'
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
    <div style={{marginLeft:'auto', marginRight:'auto',    height: '300px'}}>
      <ResponsiveContainer style={{borderRadius:'15px', justifyContent: 'center', backgroundColor:'#e3effa', alignItems: 'center', marginLeft:'auto', marginRight:'auto'}}  id={ResponsiveContainer} width="80%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <Line type="monotone" dataKey="Shipment" stroke="#2196F3" strokeWidth={3}/>
          <Line type="monotone" dataKey="Payment" stroke="#F44236" strokeWidth={3}/>
          <Line type="monotone" dataKey="Release" stroke="#FFCA29" strokeWidth={3}/>
          <CartesianGrid stroke="#ccc"/>
          <XAxis dataKey="date"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;
