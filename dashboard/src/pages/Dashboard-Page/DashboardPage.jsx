import React from 'react'
import { LiaSalesforce } from "react-icons/lia"
import { GiExpense } from "react-icons/Gi"
import { RiCustomerService2Line } from "react-icons/ri"
import { VscListUnordered } from "react-icons/vsc"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom'
//////Chart 1///////
const data = [
  {
    name: 'jan',
    Expense: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Expense: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: ' Mar',
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Expense: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Expense: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Expense: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
];
//////Chart 2///////
const dataPieChart = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 600 },
  { name: 'Other', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
//////Order Status/////
let OrderStatus = (status) => {
  switch (status) {
    case "Placed":
      return <td className='text-blue-500  font-extrabold hover:text-blue-600'>Placed</td>
      break;
    case "Confirmed":
      return <td className='text-red-500  font-extrabold hover:text-red-600'>Confirmed</td>
      break;
    case "Shipped":
      return <td className='text-green-500  font-extrabold hover:text-green-600'>Shipped</td>
      break;
    case "Out_For_Delivery":
      return <td className='text-yellow-500  font-extrabold hover:text-yellow-600'>Out For Delivery</td>
      break;
    case "Delivered":
      return <td className='text-yellow-500  font-extrabold hover:text-yellow-600'>Delivered</td>
      break;
    default:
      return status
      break;
  }

}
const DashboardPage = () => {
  return (
    <div className=' container  bg-gray-200 p-3  flex flex-col   h-max'>
      <div className='totalEveryThings  my-3 w-full flex flex-row  max-sm:flex-col items-center gap-1  '>
        <div className='w-1/4 max-sm:w-full  h-20 flex flex-row border border-gray-300 bg-white items-center justify-center gap-3 '>
          <div className='icon text-4xl text-white bg-blue-400 border  rounded-full p-2 '><LiaSalesforce /></div>
          <div className='theTotal flex flex-col '>
            <span className='font-light'>Total Sales</span>
            <span className='font-medium text-lg'>$54232<sup className='ml-1 text-green-500'>+343</sup></span>
          </div>
        </div>
        <div className='w-1/4  max-sm:w-full h-20 flex flex-row border border-gray-300 bg-white items-center justify-center gap-3 '>
          <div className='icon text-4xl text-white bg-orange-500 border  rounded-full p-2 '><GiExpense /></div>
          <div className='theTotal flex flex-col '>
            <span className='font-light'>Total Expenses</span>
            <span className='font-medium text-lg'>$5234<sup className='ml-1 text-red-500'>-33</sup></span>
          </div>
        </div>
        <div className='w-1/4 max-sm:w-full  h-20 flex flex-row border border-gray-300 bg-white items-center justify-center gap-3 '>
          <div className='icon text-4xl text-white  bg-yellow-400 border  rounded-full p-2 '><RiCustomerService2Line /></div>
          <div className='theTotal flex flex-col '>
            <span className='font-light'>Total Customers</span>
            <span className='font-medium text-lg'>$3241<sup className='ml-1 text-green-500'>+783</sup></span>
          </div>
        </div>
        <div className='w-1/4 max-sm:w-full  h-20 flex flex-row border border-gray-300 bg-white items-center justify-center gap-3 '>
          <div className='icon text-4xl text-white bg-green-400 border  rounded-full p-2 '><VscListUnordered /></div>
          <div className='theTotal flex flex-col '>
            <span className='font-light'>Total Orders</span>
            <span className='font-medium text-lg'>$4356<sup className='ml-1 text-green-500'>+83</sup></span>
          </div>
        </div>

      </div>
      <div className='flex flex-row  md:flex-row  max-sm:flex-col'>
        <div className='bg-white md:w-8/12 max-sm:w-full h-80 border border-gray-300'>
          <p className='ml-2 mt-2'>Transactions</p>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Income" fill="#0EA5E9" background={{ fill: '#eee' }} />
              <Bar dataKey="Expense" fill="#EA580C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='bg-white md:w-4/12 max-sm:w-full h-80 border border-gray-300'>
          <p className='ml-2 mt-2'>Buyer Profile</p>
          <ResponsiveContainer width="100%" height="84%">
            <PieChart >
              <Pie
                data={dataPieChart}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>

          </ResponsiveContainer>
        </div>
      </div>
      <div className='flex flex-row max-sm:flex-col '>
        <div className='bg-white w-8/12 max-sm:w-full   overflow-auto  h-max border border-gray-300 '>
          <p className='ml-2 mt-4 '>Recent Orders</p>
          <table className=' border m-3 text-center min-h-max' >
            <tr className='bg-gray-200 h-[65px] text-sm hover:bg-gray-300 transition-all duration-70'><th className=' font-medium p-2'>ID</th><th className=' font-medium p-2'>Product ID</th><th className=' font-medium p-2'>Customer Name</th><th className=' font-medium p-2'>Order Date</th><th className=' font-medium p-2'>Order Total</th><th className=' font-medium p-2'>Shipping Address</th><th className=' font-medium p-2'>Order Status</th></tr>
            <tr className='bg-gray-100 h-[65px] text-sm hover:bg-gray-200 transition-all duration-70'><td className='text-green-500'><Link to={"/order/1"}>#1</Link></td><td className='text-blue-500'><Link to={"/product/4324"}>#4324</Link></td><td className='text-red-500'><Link to={"/customer/96453"}>Shirley A. Lape</Link></td><td>17 May 2022</td><td>$435.56</td><td>Cottage Grove, OR 97424</td>{OrderStatus("Placed")}</tr>
            <tr className='bg-gray-100 h-[65px] text-sm hover:bg-gray-200 transition-all duration-70'><td className='text-green-500'><Link to={"/order/2"}>#2</Link></td><td className='text-blue-500'><Link to={"/product/4324"}>#8563</Link></td><td className='text-red-500'><Link to={"/customer/96453"}>Ryan Carroll</Link></td><td>3 jun 2012</td><td>$6332.30</td><td>Los Angeles, CA 90017</td>{OrderStatus("Confirmed")}</tr>
            <tr className='bg-gray-100 h-[65px] text-sm hover:bg-gray-200 transition-all duration-70'><td className='text-green-500'><Link to={"/order/3"}>#3</Link></td><td className='text-blue-500'><Link to={"/product/4324"}>#7662</Link></td><td className='text-red-500'><Link to={"/customer/96453"}>Mason Nash</Link></td><td>15 May 2020</td><td>$345.10</td><td>Westminster, CA 92683</td>{OrderStatus("Shipped")}</tr>
            <tr className='bg-gray-100 h-[65px] text-sm hover:bg-gray-200 transition-all duration-70'><td className='text-green-500'><Link to={"/order/4"}>#4</Link></td><td className='text-blue-500'><Link to={"/product/4324"}>#7454</Link></td><td className='text-red-500'><Link to={"/customer/96453"}>Luke Parkin</Link></td><td>17 May 2019</td><td>$34.00</td><td>	San Mateo, CA 94403</td>{OrderStatus("Shipped")}</tr>
            <tr className='bg-gray-100 h-[65px] text-sm hover:bg-gray-200 transition-all duration-70'><td className='text-green-500'><Link to={"/order/5"}>#5</Link></td><td className='text-blue-500'><Link to={"/product/4324"}>#9476</Link></td><td className='text-red-500'><Link to={"/customer/96453"}>Anthony Fry</Link></td><td>21 Feb 2023</td><td>$342.00</td><td>San Mateo, CA 94403</td>{OrderStatus("Out_For_Delivery")}</tr>
            <tr className='bg-gray-100 h-[65px] text-sm hover:bg-gray-200 transition-all duration-70'><td className='text-green-500'><Link to={"/order/6"}>#6</Link></td><td className='text-blue-500'><Link to={"/product/4324"}>#1256</Link></td><td className='text-red-500'><Link to={"/customer/96453"}>Ali swaq </Link></td><td>14 May 2020</td><td>$42.30</td><td>Los Angeles, CA 90017</td>{OrderStatus("Delivered")}</tr>
          </table>
        </div>
        <div className='bg-white w-4/12 max-sm:w-full  overflow-auto  h-max border border-gray-300'>
          <p className='ml-2 mt-4 '>Popular Products</p>
          <div className='products px-1 h-max  flex flex-col '>
            <div className='singleProd p-1 my-[2px] hover:bg-gray-200 transition-all duration-75 bg-gray-100 flex flex-row items-center justify-center gap-x-2 '>

              <img src="https://source.unsplash.com/80x90?product" alt="" className=' w-[18%]' />
              <div className="info w-[75%]">
                <p className=' font-meduim w-full leading-[1]  '>Nothing Earbuds One</p>
                <span className=' text-green-500'>453 in Stock</span>
              </div>
              <div className="price w-max  text-gray-400 text-sm  ">
                $1499.00
              </div>

            </div>
            <div className='singleProd p-1 my-[2px] hover:bg-gray-200 transition-all duration-75 bg-gray-100 flex flex-row items-center justify-center gap-x-2 '>

              <img src="https://source.unsplash.com/60x50?product" alt="" className=' w-[18%]' />
              <div className="info w-[75%]">
                <p className=' font-meduim w-full leading-[1]  '>Nothing Earbuds One</p>
                <span className=' text-green-500'>453 in Stock</span>
              </div>
              <div className="price w-max  text-gray-400 text-sm  ">
                $1499.00
              </div>

            </div>
            <div className='singleProd p-1 my-[2px] hover:bg-gray-200 transition-all duration-75 bg-gray-100 flex flex-row items-center justify-center gap-x-2 '>

              <img src="https://source.unsplash.com/90x90?product" alt="" className=' w-[18%]' />
              <div className="info w-[75%]">
                <p className=' font-meduim w-full leading-[1]  '>Nothing Earbuds One</p>
                <span className=' text-green-500'>453 in Stock</span>
              </div>
              <div className="price w-max  text-gray-400 text-sm  ">
                $1499.00
              </div>

            </div>
            <div className='singleProd p-1 my-[2px] hover:bg-gray-200 transition-all duration-75 bg-gray-100 flex flex-row items-center justify-center gap-x-2 '>

              <img src="https://source.unsplash.com/90x60?product" alt="" className=' w-[18%]' />
              <div className="info w-[75%]">
                <p className=' font-meduim w-full leading-[1]  '>Nothing Earbuds One</p>
                <span className=' text-green-500'>453 in Stock</span>
              </div>
              <div className="price w-max  text-gray-400 text-sm  ">
                $1499.00
              </div>

            </div>
            <div className='singleProd p-1 my-[2px] hover:bg-gray-200 transition-all duration-75 bg-gray-100 flex flex-row items-center justify-center gap-x-2 '>

              <img src="https://source.unsplash.com/70x70?product" alt="" className=' w-[18%]' />
              <div className="info w-[75%]">
                <p className=' font-meduim w-full leading-[1]  '>Nothing Earbuds One</p>
                <span className=' text-green-500'>453 in Stock</span>
              </div>
              <div className="price w-max  text-gray-400 text-sm  ">
                $1499.00
              </div>

            </div>
            <div className='singleProd p-1 my-[2px] hover:bg-gray-200 transition-all duration-75 bg-gray-100 flex flex-row items-center justify-center gap-x-2 '>

              <img src="https://source.unsplash.com/60x60?product" alt="" className=' w-[18%]' />
              <div className="info w-[75%]">
                <p className=' font-meduim w-full leading-[1]  '>Nothing Earbuds One</p>
                <span className=' text-green-500'>453 in Stock</span>
              </div>
              <div className="price w-max  text-gray-400 text-sm  ">
                $1499.00
              </div>

            </div>
            <div className='singleProd p-1 my-[2px] hover:bg-gray-200 transition-all duration-75 bg-gray-100 flex flex-row items-center justify-center gap-x-2 '>

              <img src="https://source.unsplash.com/1000x1000?product" alt="" className=' w-[18%]' />
              <div className="info w-[75%]">
                <p className=' font-meduim w-full leading-[1]  '>Nothing Earbuds One</p>
                <span className=' text-green-500'>453 in Stock</span>
              </div>
              <div className="price w-max  text-gray-400 text-sm  ">
                $1499.00
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage