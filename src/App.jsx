import LineChart from './components/LineChart'
import ChartPie from './components/ChartPie'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className="side-bar">
        <p className='options active'>Dashboard</p>
        <p className='options'>Inventory</p>
        <p className='options'>Order</p>
        <p className='options'>Returns</p>
        <p className='options'>Customers</p>
        <p className='options'>Shipping</p>
        <p className='options'>Channel</p>
        <p className='options'>Integrations</p>
        <p className='options'>Calculators</p>
        <p className='options'>Reports</p>
        <p className='options'>Account</p>
      </div>
      <div className="main-container">
        <div className="header">
          <p className='title'>Dashboard</p>
        </div>
        <div className="dashboard-container">
          <div className="chart-container">
            <h3>Sales vs Orders</h3>
            <hr/>
            <LineChart />
          </div>
          <div className="chart-container">
            <h3>Portion of Sales <span>&#128712;</span> </h3>
            <hr/>
            <ChartPie />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App