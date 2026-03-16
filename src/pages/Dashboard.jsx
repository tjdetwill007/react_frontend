import './Dashboard.css'

const stats = [
  { label: 'Total Users', value: '12,480', change: '+8.2%', positive: true },
  { label: 'Revenue', value: '$48,350', change: '+5.1%', positive: true },
  { label: 'Orders', value: '3,291', change: '-1.4%', positive: false },
  { label: 'Avg. Session', value: '4m 32s', change: '+0.9%', positive: true },
]

const recentOrders = [
  { id: '#ORD-001', customer: 'Alice Johnson', product: 'Pro Plan', amount: '$99.00', status: 'Completed' },
  { id: '#ORD-002', customer: 'Bob Martinez', product: 'Starter Plan', amount: '$29.00', status: 'Pending' },
  { id: '#ORD-003', customer: 'Carol White', product: 'Enterprise Plan', amount: '$299.00', status: 'Completed' },
  { id: '#ORD-004', customer: 'David Kim', product: 'Pro Plan', amount: '$99.00', status: 'Failed' },
  { id: '#ORD-005', customer: 'Eva Brown', product: 'Starter Plan', amount: '$29.00', status: 'Completed' },
]

const topProducts = [
  { name: 'Pro Plan', sales: 540, revenue: '$53,460' },
  { name: 'Enterprise Plan', sales: 120, revenue: '$35,880' },
  { name: 'Starter Plan', sales: 980, revenue: '$28,420' },
  { name: 'Add-on: Analytics', sales: 310, revenue: '$9,300' },
]

const activityData = [
  { month: 'Oct', value: 65 },
  { month: 'Nov', value: 80 },
  { month: 'Dec', value: 55 },
  { month: 'Jan', value: 90 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 95 },
]

const BAR_MAX = 100

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <span className="dashboard-date">March 2026</span>
      </header>

      {/* Stats Cards */}
      <section className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
            <p className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
              {stat.positive ? '▲' : '▼'} {stat.change} vs last month
            </p>
          </div>
        ))}
      </section>

      <div className="dashboard-row">
        {/* Activity Chart */}
        <section className="chart-card">
          <h2>Monthly Activity</h2>
          <div className="bar-chart">
            {activityData.map((item) => (
              <div key={item.month} className="bar-group">
                <div
                  className="bar"
                  style={{ height: `${(item.value / BAR_MAX) * 150}px` }}
                  title={`${item.value}`}
                />
                <span className="bar-label">{item.month}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Products */}
        <section className="products-card">
          <h2>Top Products</h2>
          <table className="products-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.sales}</td>
                  <td>{product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* Recent Orders */}
      <section className="orders-card">
        <h2>Recent Orders</h2>
        <div className="table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`badge badge-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
