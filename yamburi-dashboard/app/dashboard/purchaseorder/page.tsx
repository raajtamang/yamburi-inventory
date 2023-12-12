"use client";
import Profiletop from '@/components/ProfileTop/profiletop'
import React, { HtmlHTMLAttributes, useState } from 'react'
import './css/style.css';

type Props = {}
type activepaidBtns = "all" | "paid" | "unpaid";
type tbldata = {
    date: Date;
    ordernumber: string;
    orderdate: Date;
    shipdate: Date;
    status: "Incomplete" | "Fulfilled";
    total: number;
    balance: number;
}[];
type userInput = string;
const Page = (props: Props) => {
    const [activepaid, setActivepaid] = useState<activepaidBtns>("all");
    const [userinput, setUserinput] = useState<userInput>("");




    //   the data from the api
    const apidata: tbldata = [
        {
            date: new Date('2022-02-02'),
            ordernumber: "A",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
        {
            date: new Date('2022-02-03'),
            ordernumber: "b101",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
        {
            date: new Date('2022-02-04'),
            ordernumber: "c101",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
        {
            date: new Date('2022-02-05'),
            ordernumber: "c101",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
    ]
    const inputorderchanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        setUserinput(e.target.value);

        const thedata = [...apidata];
        const filtereddata = thedata.filter(data => {
            return data.ordernumber.toLowerCase().includes(e.target.value.toLowerCase())
            // return data.ordernumber.includes(userinput)
        });
        setTabledata(filtereddata);
        console.log(filtereddata);
        console.log("the filter is running");
        console.log(tabledata);

    }

    const [tabledata, setTabledata] = useState<tbldata>([
        {
            date: new Date('2022-02-02'),
            ordernumber: "A",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
        {
            date: new Date('2022-02-03'),
            ordernumber: "b101",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
        {
            date: new Date('2022-02-04'),
            ordernumber: "c101",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
        {
            date: new Date('2022-02-05'),
            ordernumber: "c101",
            orderdate: new Date('2022-02-02'),
            shipdate: new Date('2022-02-02'),
            status: "Incomplete",
            total: 1000,
            balance: 5000
        },
    ])
    return (
        <div className='purchaseorder'>
            <Profiletop />
            <div className='purchaseorder-main'>
                <div className='purchaseorder-main--top'>
                    <div className='purchaseorder-main--top_head'>
                        <h2>Purchasing Order</h2>
                    </div>
                    <div className='purchaseorder-main--top_bottom'>
                        <div className='purchaseorder-main--top_bottom__search'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="carbon:search">
                                    <path id="Vector" d="M14.5001 13.793L10.7241 10.017C11.6315 8.92766 12.0839 7.53042 11.9874 6.11595C11.8908 4.70149 11.2527 3.3787 10.2057 2.42276C9.15867 1.46682 7.78343 0.951338 6.36604 0.983544C4.94864 1.01575 3.59823 1.59316 2.59573 2.59567C1.59322 3.59818 1.01581 4.94859 0.983601 6.36598C0.951395 7.78337 1.46688 9.15862 2.42282 10.2056C3.37875 11.2526 4.70154 11.8908 6.11601 11.9873C7.53048 12.0839 8.92771 11.6314 10.0171 10.724L13.7931 14.5L14.5001 13.793ZM2.00006 6.5C2.00006 5.60998 2.26398 4.73996 2.75844 3.99993C3.25291 3.25991 3.95571 2.68314 4.77798 2.34254C5.60025 2.00195 6.50505 1.91283 7.37796 2.08647C8.25088 2.2601 9.0527 2.68868 9.68204 3.31802C10.3114 3.94736 10.74 4.74918 10.9136 5.62209C11.0872 6.49501 10.9981 7.39981 10.6575 8.22208C10.3169 9.04434 9.74014 9.74715 9.00012 10.2416C8.2601 10.7361 7.39007 11 6.50006 11C5.30699 10.9987 4.16317 10.5241 3.31954 9.68052C2.47591 8.83689 2.00138 7.69307 2.00006 6.5Z" fill="#A6A3A3" />
                                </g>
                            </svg>
                            <input type='text' placeholder='search' value={userinput} onChange={inputorderchanged} />

                        </div>

                        <div className='purchaseorder-main--top_bottom__middle' >
                            <div onClick={() => setActivepaid("all")} className={activepaid === "all" ? "purchaseorder-main--top_bottom__middle-all activebtnFilter" : "purchaseorder-main--top_bottom__middle-all"}>
                                All
                            </div>

                            <div onClick={() => setActivepaid("paid")} className={activepaid === "paid" ? "purchaseorder-main--top_bottom__middle-paid activebtnFilter" : "purchaseorder-main--top_bottom__middle-paid"}>
                                Paid
                            </div>

                            <div onClick={() => setActivepaid("unpaid")} className={activepaid === "unpaid" ? "purchaseorder-main--top_bottom__middle-unpaid activebtnFilter" : "purchaseorder-main--top_bottom__middle-unpaid"}>
                                UnPaid
                            </div>

                        </div>

                        <div className='purchaseorder-main--top_bottom__neworder'>
                            <h3> +New Order</h3>
                        </div>
                    </div>
                </div>
                <div className='purchaseorder-main--table'>

                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Order Number</th>
                                <th>Order Date</th>
                                <th>Ship Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Balance</th>

                            </tr>
                        </thead>
                        <tbody>

                            {tabledata.map((index, i) =>
                                <tr key={i}>
                                    <td>{index.date.toLocaleDateString()}</td>
                                    <td>{index.ordernumber}</td>
                                    <td>{index.orderdate.toLocaleDateString()}</td>
                                    <td>{index.shipdate.toLocaleDateString()}</td>
                                    <td className='tablebtndiv'><div className='statusdata'>{index.status}</div></td>
                                    <td>{index.total}</td>
                                    <td>{index.balance}</td>

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