import { LuLayoutDashboard } from 'react-icons/lu';
import { FaStoreAlt } from 'react-icons/fa';
import { BiMessageAltDetail } from 'react-icons/bi';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { LuListOrdered } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { LuSettings } from 'react-icons/lu';
import { BiHelpCircle } from 'react-icons/bi';
import { SlLogout } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';
const SidBar = () => {
    let mypath = useLocation().pathname
    return (
        <div className='  flex flex-col justify-between h-screen  bg-stone-800 text-white  w-3/12 max-sm:w-fit  overflow-hidden transation-all duration-300'>
            <div className='topThings flex flex-1 border-b  border-opacity-75 border-gray-500 flex-col' >
                <div className='title flex gap-2 mt-8 ml-4 text-2xl  items-center ' >
                    <FaStoreAlt className='text-blue-300 max-sm:hidden' />
                    <span>
                        OpenShop
                    </span>
                </div>
                <div className='links mt-8'>
                    <ul>
                        <Link to={"./" }>
                            <li className={`flex gap-2 items-center text-lg my-2 ml-3 rounded-r-md   hover:bg-blue-600 duration-200 transition-all  p-2 ${mypath == "/" ? "bg-blue-700" : "bg-blue-500"}` }><LuLayoutDashboard /> <span>Dashboard</span></li>
                        </Link>
                        <Link to={"./ProductsPage"}>
                            <li className={`flex gap-2 items-center text-lg my-2 ml-3 rounded-r-md   hover:bg-blue-600 duration-200 transition-all  p-2 ${mypath == "/ProductsPage" ? "bg-blue-700" : "bg-blue-500"}` }><MdProductionQuantityLimits /> <span>Products</span></li>
                        </Link>
                        <Link to={"./OrdersPage"}>
                            <li className={`flex gap-2 items-center text-lg my-2 ml-3 rounded-r-md   hover:bg-blue-600 duration-200 transition-all  p-2 ${mypath == "/OrdersPage" ? "bg-blue-700" : "bg-blue-500"}` }><LuListOrdered /> <span>Orders </span></li>
                        </Link>
                        <Link to={"./CustomersPage"}>
                            <li className={`flex gap-2 items-center text-lg my-2 ml-3 rounded-r-md   hover:bg-blue-600 duration-200 transition-all  p-2 ${mypath == "/CustomersPage" ? "bg-blue-700" : "bg-blue-500"}` }><GoPeople /> <span>Customers </span></li>
                        </Link>
                        <Link to={"./Transactions"}>
                            <li className={`flex gap-2 items-center text-lg my-2 ml-3 rounded-r-md   hover:bg-blue-600 duration-200 transition-all  p-2 ${mypath == "/Transactions" ? "bg-blue-700" : "bg-blue-500"}` }><HiOutlineNewspaper /> <span>Transactions </span></li>
                        </Link>
                        <Link to={"./Messages"}>
                            <li className={`flex gap-2 items-center text-lg my-2 ml-3 rounded-r-md   hover:bg-blue-600 duration-200 transition-all  p-2 ${mypath == "/Messages" ? "bg-blue-700" : "bg-blue-500"}` }><BiMessageAltDetail /> <span>Messages </span></li>
                        </Link>

                    </ul>
                </div>
            </div>
            <div className='bottomThings'>
                <ul>
                    <Link to={"./"}>
                        <li className='flex gap-1.5 items-center text-md my-1 ml-3 rounded-r-md   hover:text-blue-300 duration-200 transition-all  p-2'><LuSettings /> <span>settings</span></li>
                    </Link>
                    <Link to={"./"}>
                        <li className='flex gap-1.5 items-center text-md my-1 ml-3 rounded-r-md   hover:text-blue-300 duration-200 transition-all  p-2'><BiHelpCircle /> <span>Dashboard</span></li>
                    </Link>
                    <Link to={"./"}>
                        <li className='flex gap-1.5 text-red-400 items-center text-md my-1 ml-3 rounded-r-md   hover:text-red-500 duration-200 transition-all  p-2'><SlLogout /> <span>Dashboard</span></li>
                    </Link>
                </ul>
            </div>
        </div >
    )
}

export default SidBar