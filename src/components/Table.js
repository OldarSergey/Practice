import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Table.css';
import Chart from './Chart';
import TotalPieCharts from './TotalPieCharts';
import BarCharts from './BarCharts';

const numberWithSpaces = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const Table = (props) => {
  const renderDataRow = (title, data) => {
    if (title === 'Факт отгрузки' || title === 'Факт оплаты' || title === 'Факт реализации( из 1С)') {
      return (
        <tr>
          <td>{title}</td>
          <td colSpan="3" className="text-right">{numberWithSpaces(data)}</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{title}</td>
          <td className="text-right min-width">{numberWithSpaces(data.plan)}</td>
          <td className="text-right min-width">{numberWithSpaces(data.fact)}</td>
          <td className="text-center min-width">{data.percent}</td>
        </tr>
      );
    }
  };

  return (
    <>
     <div className="d-flex flex-graph">
      <div className="dashboard-table flex-grow-1">
          <Card style={{ backgroundColor: '#e3effa', maxWidth: '89%', overflowX: 'auto' }} className="mb-3">
            <Card.Body>
              <table className="table table-bordered table-sm custom-bg-color">
                <colgroup>
                  <col className="col" />
                  <col className="min-width" />
                  <col className="min-width" />
                  <col className="min-width" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col" className="text-right">План</th>
                    <th scope="col" className="text-right">Факт</th>
                    <th scope="col" className="text-center">Процент</th>
                  </tr>
                </thead>
                <tbody>
                  {renderDataRow('Выполнение плана отгрузки', props.data.current.shipment)}
                  {renderDataRow('Выполнение плана оплаты', props.data.current.payment)}
                  {renderDataRow('Выполнение плана выпуска готовой продукции', props.data.current.release)}
                </tbody>
              </table>
            </Card.Body>
          </Card>
      </div>
    </div>
  </>
  );
};

export default Table;
