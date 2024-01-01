import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { BiMessageAltDetail } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
const MainNav = () => {
    return (
        <div className=' h-20 flex items-center flex-row max-sm:flex-col max-sm:m-2  justify-between pl-10 max-sm:pl-0 '>
            <div className='flex  items-center  w-80  max-sm:w-[100%] text-xl   gap-2 border border-gray-700 border-opacity-30 p-2'>
                <BiSearchAlt className='max-sm:w-[20%]' />
                <input type="text" placeholder='search...' className=' border-none  outline-0 ' />
            </div>
            <div className='flex items-center justify-end gap-2 pt-2 max-sm:pt-1 pr-5 w-1/2 max-sm:w-[90%] max-sm:justify-center '>
                <div>
                    <Menu as="div" className=" relative">
                        <Menu.Button className="">
                            <BiMessageAltDetail className='text-2xl cursor-pointer' />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-2  ">
                                    <h3 className=' font-medium'>Messages</h3>
                                    <p>This is messages panel.</p>
                                </div>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div>
                    <Menu as="div" className=" relative">
                        <Menu.Button className="">
                            <IoMdNotificationsOutline className='text-3xl cursor-pointer' />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-2  ">
                                    <h3 className=' font-medium'>Notifications</h3>
                                    <p>This is notification panel.</p>
                                </div>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div>
                    <Menu as="div" className=" relative">
                        <Menu.Button className="">
                            <div className=' rounded-full cursor-pointer  overflow-hidden'><img src="https://source.unsplash.com/40x40?face" alt="personal image" /></div>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className=" z-50 absolute right-0  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className=" overflow-hidden flex flex-col  shadow-md pl-2  ">
                                    <Menu.Item>
                                        <button className='text-gray-900 flex w-full px-2 py-3 text-sm hover:bg-gray-200 '>
                                            Your Profile
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className='text-gray-900 flex w-full px-2 py-3 text-sm hover:bg-gray-200 '>
                                            Settings
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className='text-red-400 flex w-full px-2 py-3 text-sm hover:bg-gray-200 text-red-600 '>
                                            Sign out
                                        </button>
                                    </Menu.Item>

                                </div>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default MainNav