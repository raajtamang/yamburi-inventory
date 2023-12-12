"use client";
import Profiletop from '@/components/ProfileTop/profiletop'
import React, { HtmlHTMLAttributes, useState } from 'react'
import './css/style.css';
import Image from 'next/image';

type Props = {}
type activepaidBtns = "all" | "paid" | "unpaid";
type tbldata = {

    name: string;
    phone: string;
    email: string;
    province: string;
    address: string;
}[];
type userInput = string;
const Page = (props: Props) => {
    const [activepaid, setActivepaid] = useState<activepaidBtns>("all");
    const [userinput, setUserinput] = useState<userInput>("");




    //   the data from the api
    const apidata: tbldata = [
        {
            name: "default1",
            phone: "984113131",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
        {
            name: "default2",
            phone: "984113132",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
        {
            name: "default3",
            phone: "984113133",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
        {
            name: "default4",
            phone: "984113134",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
    ]


    const inputchanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        console.log(e.target.value);
        setUserinput(e.target.value);
        const thedata = [...apidata];
        const filtereddata = thedata.filter(data => {
            // return data.name.toLowerCase().includes(userinput.toLowerCase())
            return data.name.toLowerCase().includes(e.target.value.toLowerCase())


            // data.ordernumber.includes(userinput)
        });
        setTabledata(filtereddata);
        console.log(filtereddata);
        console.log("the filter is running");
        console.log(tabledata);
        console.log("over");






    }

    const [tabledata, setTabledata] = useState<tbldata>([
        {
            name: "default1",
            phone: "984113131",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
        {
            name: "default2",
            phone: "984113132",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
        {
            name: "default3",
            phone: "984113133",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
        {
            name: "default4",
            phone: "984113134",
            email: "defaultemail",
            province: "provinvce 1",
            address: "address 1",
        },
    ])
    return (
        <div className='categories'>
            <Profiletop />
            <div className='categories-main'>
                <div className='categories-main--top'>
                    <div className='categories-main--top_head'>
                        <h2>Customer</h2>
                    </div>
                    <div className='categories-main--top_bottom'>
                        <div className='categories-main--top_bottom__search'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="carbon:search">
                                    <path id="Vector" d="M14.5001 13.793L10.7241 10.017C11.6315 8.92766 12.0839 7.53042 11.9874 6.11595C11.8908 4.70149 11.2527 3.3787 10.2057 2.42276C9.15867 1.46682 7.78343 0.951338 6.36604 0.983544C4.94864 1.01575 3.59823 1.59316 2.59573 2.59567C1.59322 3.59818 1.01581 4.94859 0.983601 6.36598C0.951395 7.78337 1.46688 9.15862 2.42282 10.2056C3.37875 11.2526 4.70154 11.8908 6.11601 11.9873C7.53048 12.0839 8.92771 11.6314 10.0171 10.724L13.7931 14.5L14.5001 13.793ZM2.00006 6.5C2.00006 5.60998 2.26398 4.73996 2.75844 3.99993C3.25291 3.25991 3.95571 2.68314 4.77798 2.34254C5.60025 2.00195 6.50505 1.91283 7.37796 2.08647C8.25088 2.2601 9.0527 2.68868 9.68204 3.31802C10.3114 3.94736 10.74 4.74918 10.9136 5.62209C11.0872 6.49501 10.9981 7.39981 10.6575 8.22208C10.3169 9.04434 9.74014 9.74715 9.00012 10.2416C8.2601 10.7361 7.39007 11 6.50006 11C5.30699 10.9987 4.16317 10.5241 3.31954 9.68052C2.47591 8.83689 2.00138 7.69307 2.00006 6.5Z" fill="#A6A3A3" />
                                </g>
                            </svg>
                            <input type='text' placeholder='search' value={userinput} onChange={inputchanged} />

                        </div>



                        <div className='categories-main--top_bottom__newproduct'>
                            <h3> +New Customer</h3>
                        </div>
                    </div>
                </div>
                <div className='categories-main--table'>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Province</th>
                                <th>Address</th>

                            </tr>
                        </thead>
                        <tbody>

                            {tabledata.map((index, i) =>
                                <tr key={i}>
                                    <td>{index.name}</td>

                                    <td>{index.phone}</td>
                                    <td>{index.email}</td>
                                    <td>{index.province}</td>
                                    <td>{index.address}</td>
                                    
                                </tr>
                            )}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Page