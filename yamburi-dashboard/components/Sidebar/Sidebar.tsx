"use client";
import React, { use, useState } from 'react';
import './css/style.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}
type Navstate = "purchasing" | "inventory" |
    "sales" | "report" | "none";
type Bluestate = "dashboard" | "employee" | "purchaseorder" | "vendor" |
    "categories" | "product" | "customer" | "salesorder" | "salesreport" |"stockreport" | "purchasingreport" | "accountreport" | "none";
// type Innernavstatetwo = "first" | "second" | "none";
// type Innernavstatefour = "first" | "second" | "third" | "fourth" | "none";

const Sidebar = (props: Props) => {
    const [activenav, setActivenav] = useState<Navstate>("none");
    const [bluenav, setBluenav] = useState<Bluestate>("dashboard");
    

    const clickedfunction = (props: Navstate) => {
        if (activenav === "none") {
            setActivenav(props);
        }
        else if (props == activenav) {
            setActivenav("none");
        }
        else {
            setActivenav(props);
        }

    }
    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <Image
                    src='/yamburi.png'
                    width={159}
                    height={61}
                    priority
                    alt='Yamburi Logo'
                />
            </div>

            <div className='sidebar-bottom'>
                <Link href='/dashboard' className={bluenav === "dashboard" ? 'sidebar-bottom--nav activenav' : "sidebar-bottom--nav"}
                    onClick={() => setBluenav("dashboard")}>
                    <div className='sidebar-bottom--nav_btn'>
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="solar:home-bold">
                                <path d="M19.4979 3H16.9234C16.7868 3 16.6559 3.05268 16.5593 3.14645C16.4628 3.24021 16.4085 3.36739 16.4085 3.5V3.559L20.0128 6.359V3.5C20.0128 3.36739 19.9585 3.24021 19.862 3.14645C19.7654 3.05268 19.6344 3 19.4979 3Z" fill={bluenav === "dashboard" ? "white" : "black"} />
                                <path id="Vector_2" d="M11.517 9.5C11.517 9.16848 11.6526 8.85054 11.8941 8.61612C12.1355 8.3817 12.4629 8.25 12.8043 8.25C13.1457 8.25 13.4731 8.3817 13.7145 8.61612C13.9559 8.85054 14.0915 9.16848 14.0915 9.5C14.0915 9.83152 13.9559 10.1495 13.7145 10.3839C13.4731 10.6183 13.1457 10.75 12.8043 10.75C12.4629 10.75 12.1355 10.6183 11.8941 10.3839C11.6526 10.1495 11.517 9.83152 11.517 9.5Z" fill={bluenav === "dashboard" ? "white" : "black"} />
                                <path id="Vector_3" fillRule="evenodd" clipRule="evenodd" d="M21.8149 10.96L22.6202 11.586C22.7805 11.7073 22.9836 11.7624 23.1854 11.7393C23.3873 11.7161 23.5716 11.6167 23.6984 11.4625C23.8253 11.3082 23.8844 11.1117 23.863 10.9154C23.8416 10.7192 23.7414 10.539 23.5841 10.414L15.217 3.914C14.5322 3.38186 13.6813 3.09194 12.8043 3.09194C11.9272 3.09194 11.0763 3.38186 10.3915 3.914L2.02444 10.414C1.86439 10.5383 1.76173 10.7192 1.73904 10.9169C1.71635 11.1147 1.77548 11.3131 1.90344 11.4685C2.03139 11.6239 2.21769 11.7236 2.42133 11.7456C2.62498 11.7677 2.8293 11.7103 2.98935 11.586L3.79361 10.96V21.25H2.50638C2.30154 21.25 2.10509 21.329 1.96025 21.4697C1.81541 21.6103 1.73404 21.8011 1.73404 22C1.73404 22.1989 1.81541 22.3897 1.96025 22.5303C2.10509 22.671 2.30154 22.75 2.50638 22.75H23.1021C23.307 22.75 23.5034 22.671 23.6483 22.5303C23.7931 22.3897 23.8745 22.1989 23.8745 22C23.8745 21.8011 23.7931 21.6103 23.6483 21.4697C23.5034 21.329 23.307 21.25 23.1021 21.25H21.8149V10.96ZM9.97234 9.5C9.97234 8.77065 10.2707 8.07118 10.8018 7.55546C11.3329 7.03973 12.0532 6.75 12.8043 6.75C13.5553 6.75 14.2756 7.03973 14.8067 7.55546C15.3378 8.07118 15.6362 8.77065 15.6362 9.5C15.6362 10.2293 15.3378 10.9288 14.8067 11.4445C14.2756 11.9603 13.5553 12.25 12.8043 12.25C12.0532 12.25 11.3329 11.9603 10.8018 11.4445C10.2707 10.9288 9.97234 10.2293 9.97234 9.5ZM12.8557 13.25C13.5395 13.25 14.1296 13.25 14.6023 13.312C15.1089 13.378 15.5939 13.527 15.9873 13.909C16.3807 14.291 16.5341 14.762 16.6021 15.254C16.6618 15.684 16.666 16.214 16.666 16.827V21.25H15.1213V17C15.1213 16.272 15.1192 15.8 15.0718 15.454C15.0265 15.129 14.9544 15.027 14.8947 14.97C14.836 14.913 14.731 14.842 14.3963 14.798C14.039 14.752 13.5539 14.75 12.8043 14.75C12.0546 14.75 11.5685 14.752 11.2122 14.798C10.8775 14.842 10.7725 14.913 10.7138 14.97C10.6551 15.027 10.582 15.129 10.5367 15.454C10.4893 15.801 10.4872 16.272 10.4872 17V21.25H8.94255V16.95C8.94255 16.286 8.94255 15.713 9.0064 15.254C9.07436 14.762 9.2278 14.291 9.62118 13.909C10.0146 13.527 10.5006 13.378 11.0062 13.312C11.4789 13.25 12.069 13.25 12.7538 13.25H12.8547H12.8557Z" fill={bluenav === "dashboard" ? "white" : "black"} />
                                <path id="Vector_4" d="M11.517 9.5C11.517 9.16848 11.6526 8.85054 11.8941 8.61612C12.1355 8.3817 12.4629 8.25 12.8043 8.25C13.1457 8.25 13.4731 8.3817 13.7145 8.61612C13.9559 8.85054 14.0915 9.16848 14.0915 9.5C14.0915 9.83152 13.9559 10.1495 13.7145 10.3839C13.4731 10.6183 13.1457 10.75 12.8043 10.75C12.4629 10.75 12.1355 10.6183 11.8941 10.3839C11.6526 10.1495 11.517 9.83152 11.517 9.5Z" fill={bluenav === "dashboard" ? "white" : "black"} />
                            </g>
                        </svg>
                        <p className='sidebar-bottom--nav_btn__para'>Dashboard</p>
                    </div>
                </Link>


                <Link href='/dashboard/employee' className={bluenav === "employee" ? 'sidebar-bottom--nav activenav' : "sidebar-bottom--nav"}
                    onClick={() => setBluenav("employee")}>
                    <div className='sidebar-bottom--nav_btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="clarity:employee-solid">
                                <path d="M11.24 10.7933C13.6185 10.7933 15.5467 8.86517 15.5467 6.48667C15.5467 4.10816 13.6185 2.18 11.24 2.18C8.86148 2.18 6.93332 4.10816 6.93332 6.48667C6.93332 8.86517 8.86148 10.7933 11.24 10.7933Z" fill={bluenav === "employee" ? "white" : "black"} />
                                <path id="Vector_2" d="M14 18.6667H18.6667V19.6H14V18.6667Z" fill="black" />
                                <path id="Vector_3" d="M10 20V22C10 22.1768 10.0702 22.3464 10.1953 22.4714C10.3203 22.5964 10.4899 22.6667 10.6667 22.6667H22C22.1768 22.6667 22.3464 22.5964 22.4714 22.4714C22.5964 22.3464 22.6667 22.1768 22.6667 22V15.3333C22.6667 15.1565 22.5964 14.987 22.4714 14.8619C22.3464 14.7369 22.1768 14.6667 22 14.6667H17.3333V13.6867C17.3333 13.5099 17.2631 13.3403 17.1381 13.2153C17.0131 13.0902 16.8435 13.02 16.6667 13.02C16.4899 13.02 16.3203 13.0902 16.1953 13.2153C16.0702 13.3403 16 13.5099 16 13.6867V14.6667H14.6667V12.28C13.5338 12.095 12.3879 12.0013 11.24 12C8.70854 11.9892 6.20544 12.5331 3.90668 13.5933C3.52833 13.7719 3.20915 14.0552 2.987 14.4097C2.76484 14.7642 2.64904 15.175 2.65334 15.5933V20H10ZM21.3333 21.3333H11.3333V16H16V16.28C16 16.4568 16.0702 16.6264 16.1953 16.7514C16.3203 16.8764 16.4899 16.9467 16.6667 16.9467C16.8435 16.9467 17.0131 16.8764 17.1381 16.7514C17.2631 16.6264 17.3333 16.4568 17.3333 16.28V16H21.3333V21.3333Z" fill={bluenav === "employee" ? "white" : "black"} />
                            </g>
                        </svg>

                        <p className='sidebar-bottom--nav_btn__para'>Employee</p>
                    </div>
                </Link>

                <div className="sidebar-bottom--nav"
                    onClick={() => clickedfunction("purchasing")}>
                    <div className='sidebar-bottom--nav_btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="bxs:purchase-tag">
                                <path d="M12.586 2.586C12.211 2.2109 11.7024 2.00011 11.172 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11.172C2.00011 11.7024 2.2109 12.211 2.586 12.586L10.586 20.586C10.9611 20.9609 11.4697 21.1716 12 21.1716C12.5303 21.1716 13.0389 20.9609 13.414 20.586L20.586 13.414C20.9609 13.0389 21.1716 12.5303 21.1716 12C21.1716 11.4697 20.9609 10.9611 20.586 10.586L12.586 2.586ZM7 9C6.46943 8.99987 5.96065 8.78897 5.58558 8.41371C5.21051 8.03845 4.99987 7.52957 5 6.999C5.00013 6.46843 5.21103 5.95965 5.58629 5.58458C5.96155 5.20951 6.47043 4.99887 7.001 4.999C7.53157 4.99913 8.04035 5.21003 8.41542 5.58529C8.79049 5.96055 9.00113 6.46943 9.001 7C9.00087 7.53057 8.78997 8.03935 8.41471 8.41442C8.03945 8.78949 7.53057 9.00013 7 9Z" fill="black" />
                            </g>
                        </svg>

                        <p className='sidebar-bottom--nav_btn__para'>Purchasing</p>
                    </div>
                    <div className='sidebar-bottom--nav_arrow'>
                        <svg transform={activenav === "purchasing" ? 'rotate(180)' : ""} width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 1" d="M1 1L11.5 12L22 1" stroke="black" strokeWidth="4" strokeLinecap="round" />
                        </svg>

                    </div>
                </div>
                {activenav === "purchasing" &&
                    <div className='sidebar-bottom--onactive'>
                        <Link href='/dashboard/purchaseorder' className={bluenav == "purchaseorder" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("purchaseorder")}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="bxs:purchase-tag">
                                    <path id="Vector" d="M10.4884 2.15501C10.1759 1.84242 9.75207 1.66677 9.31008 1.66667H3.33341C2.89139 1.66667 2.46746 1.84227 2.1549 2.15483C1.84234 2.46739 1.66675 2.89131 1.66675 3.33334V9.31001C1.66684 9.752 1.8425 10.1759 2.15508 10.4883L8.82175 17.155C9.13429 17.4675 9.55814 17.643 10.0001 17.643C10.442 17.643 10.8659 17.4675 11.1784 17.155L17.1551 11.1783C17.4675 10.8658 17.6431 10.4419 17.6431 10C17.6431 9.55807 17.4675 9.13422 17.1551 8.82167L10.4884 2.15501ZM5.83342 7.50001C5.39128 7.4999 4.96729 7.32415 4.65473 7.01143C4.34217 6.69872 4.16664 6.27464 4.16675 5.83251C4.16686 5.39037 4.3426 4.96638 4.65532 4.65382C4.96804 4.34126 5.39211 4.16573 5.83425 4.16584C6.27639 4.16595 6.70037 4.34169 7.01293 4.65441C7.32549 4.96713 7.50103 5.3912 7.50092 5.83334C7.5008 6.27548 7.32506 6.69946 7.01234 7.01202C6.69963 7.32458 6.27555 7.50012 5.83342 7.50001Z" fill={bluenav== "purchaseorder" ? "white" : "black"} />
                                </g>
                            </svg>


                            <p className='sidebar-bottom--onactive_btn__para'>Purchasing Order</p>
                        </Link>
                        <Link href='/dashboard/vendor' className={bluenav == "vendor" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("vendor")}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="bxs:purchase-tag" clip-path="url(#clip0_147_399)">
                                    <path id="Vector" d="M5.71612 8.76942H15.8824C15.9862 8.76942 15.9862 8.76942 15.9862 8.68325C15.8824 8.25239 15.7787 7.90771 15.5712 7.56303C15.1563 6.78749 14.4301 6.27047 13.6002 5.83961L13.1853 5.66727C13.1853 5.66727 13.1853 5.5811 13.289 5.5811C13.6002 5.23642 13.9114 4.89173 14.2226 4.46088C14.3264 4.37471 14.3264 4.28854 14.2226 4.20236C14.1189 4.11619 14.0152 4.20236 13.9114 4.28854L12.9778 5.40876C12.9778 5.40876 12.874 5.49493 12.874 5.40876C12.0441 5.15024 11.2142 5.06407 10.3843 5.06407C9.7619 5.06407 9.24321 5.23641 8.72452 5.40876H8.62079L7.68714 4.37471C7.68714 4.37471 7.68714 4.28854 7.58341 4.28854C7.47967 4.20236 7.37593 4.20236 7.37593 4.28854C7.27219 4.28854 7.27219 4.37471 7.37593 4.46088C7.37593 4.46088 7.37593 4.54705 7.47967 4.54705C7.68714 4.89173 7.99836 5.23642 8.30957 5.5811L8.41331 5.66727H8.30957C7.68714 5.92578 7.16845 6.27047 6.7535 6.70132C6.13107 7.21834 5.71612 7.90771 5.61238 8.68325C5.61238 8.76942 5.61238 8.76942 5.71612 8.76942ZM13.0815 6.35664C13.4965 6.35664 13.9114 6.61515 13.9114 7.046C13.9114 7.39069 13.6002 7.73537 13.1853 7.73537C12.7703 7.73537 12.3554 7.47686 12.3554 7.046C12.2516 6.70132 12.6666 6.35664 13.0815 6.35664ZM8.62079 6.35664C9.03574 6.35664 9.45069 6.61515 9.45069 7.046C9.45069 7.39069 9.13948 7.73537 8.72452 7.73537C8.20583 7.73537 7.79088 7.39069 7.79088 7.046C7.79088 6.70132 8.20583 6.35664 8.62079 6.35664ZM3.53762 9.63113C3.01893 9.63113 2.50024 10.062 2.50024 10.4928V14.8014C2.50024 15.2322 3.01893 15.6631 3.53762 15.6631C4.05631 15.6631 4.575 15.2322 4.575 14.8014V10.4928C4.575 10.062 4.05631 9.63113 3.53762 9.63113ZM18.0609 9.63113C17.5423 9.63113 17.0236 10.062 17.0236 10.4928V14.8014C17.0236 15.2322 17.5423 15.6631 18.0609 15.6631C18.5796 15.6631 19.0983 15.2322 19.0983 14.8014V10.4928C19.0983 10.062 18.5796 9.63113 18.0609 9.63113ZM5.61238 16.5248C5.61238 16.9557 6.13107 17.3865 6.64976 17.3865H7.68714V19.9716C7.68714 20.4025 8.20583 20.8333 8.72452 20.8333C9.24321 20.8333 9.7619 20.4025 9.7619 19.9716V17.3865H11.8367V19.9716C11.8367 20.4025 12.3554 20.8333 12.874 20.8333C13.3927 20.8333 13.9114 20.4025 13.9114 19.9716V17.3865H14.9488C15.4675 17.3865 15.9862 16.9557 15.9862 16.5248V9.63113H5.61238V16.5248Z" fill={bluenav == "vendor" ? "white" : "black"} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_147_399">
                                        <rect width="20" height="20" fill="white" transform="translate(0.0620117)" />
                                    </clipPath>
                                </defs>
                            </svg>



                            <p className='sidebar-bottom--onactive_btn__para'>Vendors</p>
                        </Link>
                    </div>}

                <div className="sidebar-bottom--nav"
                    onClick={() => clickedfunction("inventory")}>
                    <div className='sidebar-bottom--nav_btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="material-symbols:inventory-2">
                                <path d="M5 22C4.45 22 3.97933 21.8043 3.588 21.413C3.19667 21.0217 3.00067 20.5507 3 20V8.725C2.7 8.54167 2.45833 8.30433 2.275 8.013C2.09167 7.72167 2 7.384 2 7V4C2 3.45 2.196 2.97933 2.588 2.588C2.98 2.19667 3.45067 2.00067 4 2H20C20.55 2 21.021 2.196 21.413 2.588C21.805 2.98 22.0007 3.45067 22 4V7C22 7.38333 21.9083 7.721 21.725 8.013C21.5417 8.305 21.3 8.542 21 8.724V20C21 20.55 20.8043 21.021 20.413 21.413C20.0217 21.805 19.5507 22.0007 19 22H5ZM4 7H20V4H4V7ZM9 14H15V12H9V14Z" fill="black" />
                            </g>
                        </svg>

                        <p className='sidebar-bottom--nav_btn__para'>Inventory</p>
                    </div>
                    <div className='sidebar-bottom--nav_arrow'>
                        <svg transform={activenav === "inventory" ? 'rotate(180)' : ""} width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 1" d="M1 1L11.5 12L22 1" stroke="black" strokeWidth="4" strokeLinecap="round" />
                        </svg>

                    </div>
                </div>
                {activenav === "inventory" &&
                    <div className='sidebar-bottom--onactive'>
                        <Link href='/dashboard/categories' className={bluenav === "categories" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("categories")}>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M2.975 1.25002L3.25625 1.80627L3.6 2.50002H6.25V5.62501H1.25V1.25002H2.975ZM3.3625 1.514e-05H0.625C0.45924 1.514e-05 0.300268 0.0658633 0.183058 0.183074C0.065848 0.300284 0 0.459255 0 0.625015V6.25001C0 6.41578 0.065848 6.57475 0.183058 6.69196C0.300268 6.80917 0.45924 6.87501 0.625 6.87501H6.875C7.04076 6.87501 7.19973 6.80917 7.31694 6.69196C7.43415 6.57475 7.5 6.41578 7.5 6.25001V1.87502C7.5 1.70925 7.43415 1.55028 7.31694 1.43307C7.19973 1.31586 7.04076 1.25002 6.875 1.25002H4.375L3.925 0.343765C3.87259 0.239743 3.79215 0.152438 3.69276 0.091699C3.59336 0.0309601 3.47898 -0.000795478 3.3625 1.514e-05ZM12.975 1.25002L13.2562 1.80627L13.6 2.50002H16.25V5.62501H11.25V1.25002H12.975ZM13.3625 1.514e-05H10.625C10.4592 1.514e-05 10.3003 0.0658633 10.1831 0.183074C10.0658 0.300284 10 0.459255 10 0.625015V6.25001C10 6.41578 10.0658 6.57475 10.1831 6.69196C10.3003 6.80917 10.4592 6.87501 10.625 6.87501H16.875C17.0408 6.87501 17.1997 6.80917 17.3169 6.69196C17.4342 6.57475 17.5 6.41578 17.5 6.25001V1.87502C17.5 1.70925 17.4342 1.55028 17.3169 1.43307C17.1997 1.31586 17.0408 1.25002 16.875 1.25002H14.375L13.925 0.343765C13.8726 0.239743 13.7921 0.152438 13.6928 0.091699C13.5934 0.0309601 13.479 -0.000795478 13.3625 1.514e-05ZM2.975 9.37502L3.25625 9.93126L3.6 10.625H6.25V13.75H1.25V9.37502H2.975ZM3.3625 8.12502H0.625C0.45924 8.12502 0.300268 8.19086 0.183058 8.30807C0.065848 8.42528 0 8.58426 0 8.75002V14.375C0 14.5408 0.065848 14.6997 0.183058 14.817C0.300268 14.9342 0.45924 15 0.625 15H6.875C7.04076 15 7.19973 14.9342 7.31694 14.817C7.43415 14.6997 7.5 14.5408 7.5 14.375V10C7.5 9.83426 7.43415 9.67528 7.31694 9.55807C7.19973 9.44086 7.04076 9.37502 6.875 9.37502H4.375L3.925 8.46876C3.87259 8.36474 3.79215 8.27744 3.69276 8.2167C3.59336 8.15596 3.47898 8.1242 3.3625 8.12502ZM12.975 9.37502L13.2562 9.93126L13.6 10.625H16.25V13.75H11.25V9.37502H12.975ZM13.3625 8.12502H10.625C10.4592 8.12502 10.3003 8.19086 10.1831 8.30807C10.0658 8.42528 10 8.58426 10 8.75002V14.375C10 14.5408 10.0658 14.6997 10.1831 14.817C10.3003 14.9342 10.4592 15 10.625 15H16.875C17.0408 15 17.1997 14.9342 17.3169 14.817C17.4342 14.6997 17.5 14.5408 17.5 14.375V10C17.5 9.83426 17.4342 9.67528 17.3169 9.55807C17.1997 9.44086 17.0408 9.37502 16.875 9.37502H14.375L13.925 8.46876C13.8726 8.36474 13.7921 8.27744 13.6928 8.2167C13.5934 8.15596 13.479 8.1242 13.3625 8.12502Z" fill={bluenav == "categories" ? "white" : "black"} />
                            </svg>



                            <p className='sidebar-bottom--onactive_btn__para'>Categories</p>
                        </Link>
                        <Link href='/dashboard/product' className={bluenav === "product" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("product")}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="fa6-brands:product-hunt" clip-path="url(#clip0_172_700)">
                                    <path id="Vector" d="M12.7461 8.54688C12.7461 9.34766 12.0938 10 11.293 10H8.54688V7.09375H11.293C12.0938 7.09375 12.7461 7.74609 12.7461 8.54688ZM19.6875 10C19.6875 15.3516 15.3516 19.6875 10 19.6875C4.64844 19.6875 0.3125 15.3516 0.3125 10C0.3125 4.64844 4.64844 0.3125 10 0.3125C15.3516 0.3125 19.6875 4.64844 19.6875 10ZM14.6836 8.54688C14.6836 6.67578 13.1641 5.15625 11.293 5.15625H6.60938V14.8438H8.54688V11.9375H11.293C13.1641 11.9375 14.6836 10.418 14.6836 8.54688Z" fill={bluenav == "product" ? "white" : "black"} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_172_700">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>




                            <p className='sidebar-bottom--onactive_btn__para'>Product</p>
                        </Link>
                    </div>}

                <div className="sidebar-bottom--nav"
                    onClick={() => clickedfunction("sales")}>
                    <div className='sidebar-bottom--nav_btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon-park-solid:sales-report">
                                <g id="Mask group">
                                    <mask id="mask0_94_1598" maskUnits="userSpaceOnUse" x="1" y="0" width="22" height="24">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path d="M20.5 7L12 2L3.5 7V17L12 22L20.5 17V7Z" fill="white" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                                                <path id="Vector_2" d="M12 11V15M16 9V15M8 13V15" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </g>
                                    </mask>
                                    <g mask="url(#mask0_94_1598)">
                                        <path id="Vector_3" d="M0 0H24V24H0V0Z" fill="black" />
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <p className='sidebar-bottom--nav_btn__para'>Sales</p>
                    </div>
                    <div className='sidebar-bottom--nav_arrow'>
                        <svg transform={activenav === "sales" ? 'rotate(180)' : ""} width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 1" d="M1 1L11.5 12L22 1" stroke="black" strokeWidth="4" strokeLinecap="round" />
                        </svg>

                    </div>
                </div>
                {activenav === "sales" &&
                    <div className='sidebar-bottom--onactive'>
                        <Link href='/dashboard/customer' className={bluenav === "customer" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("customer")}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="material-symbols:person">
                                    <path id="Vector" d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.146 16.1127 4.438 15.638C4.73 15.1633 5.11733 14.8007 5.6 14.55C6.63333 14.0333 7.68333 13.646 8.75 13.388C9.81667 13.13 10.9 13.0007 12 13C13.1 13 14.1833 13.1293 15.25 13.388C16.3167 13.6467 17.3667 14.034 18.4 14.55C18.8833 14.8 19.271 15.1627 19.563 15.638C19.855 16.1133 20.0007 16.634 20 17.2V20H4Z" fill={bluenav == "customer" ? "white" : "black"} />
                                </g>
                            </svg>



                            <p className='sidebar-bottom--onactive_btn__para'>Customers</p>
                        </Link>
                        <Link href='/dashboard/salesorder' className={bluenav === "salesorder" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("salesorder")}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon-park-solid:sales-report">
                                    <g id="Mask group">
                                        <mask id="mask0_94_1598" maskUnits="userSpaceOnUse" x="1" y="0" width="22" height="24">
                                            <g id="Group">
                                                {/* <g id="Group_2">
                                                    <path id="Vector" d="M20.5 7L12 2L3.5 7V17L12 22L20.5 17V7Z" fill={salesnav == "second" ? "white" : "black"} stroke="black" stroke-width="4" stroke-linejoin="round" />
                                                    <path id="Vector_2" d="M12 11V15M16 9V15M8 13V15" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                                </g> */}
                                            </g>
                                        </mask>
                                        <g mask="url(#mask0_94_1598)">
                                            <path id="Vector_3" d="M0 0H24V24H0V0Z" fill={bluenav == "salesorder" ? "white" : "black"} />
                                        </g>
                                    </g>
                                </g>
                            </svg>




                            <p className='sidebar-bottom--onactive_btn__para'>Sales Order</p>
                        </Link>
                    </div>}

                <div className="sidebar-bottom--nav"
                    onClick={() => clickedfunction("report")}>
                    <div className='sidebar-bottom--nav_btn'>
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="solar:home-bold">
                                <path d="M19.4979 3H16.9234C16.7868 3 16.6559 3.05268 16.5593 3.14645C16.4628 3.24021 16.4085 3.36739 16.4085 3.5V3.559L20.0128 6.359V3.5C20.0128 3.36739 19.9585 3.24021 19.862 3.14645C19.7654 3.05268 19.6344 3 19.4979 3Z" fill="black" />
                                <path id="Vector_2" d="M11.517 9.5C11.517 9.16848 11.6526 8.85054 11.8941 8.61612C12.1355 8.3817 12.4629 8.25 12.8043 8.25C13.1457 8.25 13.4731 8.3817 13.7145 8.61612C13.9559 8.85054 14.0915 9.16848 14.0915 9.5C14.0915 9.83152 13.9559 10.1495 13.7145 10.3839C13.4731 10.6183 13.1457 10.75 12.8043 10.75C12.4629 10.75 12.1355 10.6183 11.8941 10.3839C11.6526 10.1495 11.517 9.83152 11.517 9.5Z" fill="black" />
                                <path id="Vector_3" fillRule="evenodd" clipRule="evenodd" d="M21.8149 10.96L22.6202 11.586C22.7805 11.7073 22.9836 11.7624 23.1854 11.7393C23.3873 11.7161 23.5716 11.6167 23.6984 11.4625C23.8253 11.3082 23.8844 11.1117 23.863 10.9154C23.8416 10.7192 23.7414 10.539 23.5841 10.414L15.217 3.914C14.5322 3.38186 13.6813 3.09194 12.8043 3.09194C11.9272 3.09194 11.0763 3.38186 10.3915 3.914L2.02444 10.414C1.86439 10.5383 1.76173 10.7192 1.73904 10.9169C1.71635 11.1147 1.77548 11.3131 1.90344 11.4685C2.03139 11.6239 2.21769 11.7236 2.42133 11.7456C2.62498 11.7677 2.8293 11.7103 2.98935 11.586L3.79361 10.96V21.25H2.50638C2.30154 21.25 2.10509 21.329 1.96025 21.4697C1.81541 21.6103 1.73404 21.8011 1.73404 22C1.73404 22.1989 1.81541 22.3897 1.96025 22.5303C2.10509 22.671 2.30154 22.75 2.50638 22.75H23.1021C23.307 22.75 23.5034 22.671 23.6483 22.5303C23.7931 22.3897 23.8745 22.1989 23.8745 22C23.8745 21.8011 23.7931 21.6103 23.6483 21.4697C23.5034 21.329 23.307 21.25 23.1021 21.25H21.8149V10.96ZM9.97234 9.5C9.97234 8.77065 10.2707 8.07118 10.8018 7.55546C11.3329 7.03973 12.0532 6.75 12.8043 6.75C13.5553 6.75 14.2756 7.03973 14.8067 7.55546C15.3378 8.07118 15.6362 8.77065 15.6362 9.5C15.6362 10.2293 15.3378 10.9288 14.8067 11.4445C14.2756 11.9603 13.5553 12.25 12.8043 12.25C12.0532 12.25 11.3329 11.9603 10.8018 11.4445C10.2707 10.9288 9.97234 10.2293 9.97234 9.5ZM12.8557 13.25C13.5395 13.25 14.1296 13.25 14.6023 13.312C15.1089 13.378 15.5939 13.527 15.9873 13.909C16.3807 14.291 16.5341 14.762 16.6021 15.254C16.6618 15.684 16.666 16.214 16.666 16.827V21.25H15.1213V17C15.1213 16.272 15.1192 15.8 15.0718 15.454C15.0265 15.129 14.9544 15.027 14.8947 14.97C14.836 14.913 14.731 14.842 14.3963 14.798C14.039 14.752 13.5539 14.75 12.8043 14.75C12.0546 14.75 11.5685 14.752 11.2122 14.798C10.8775 14.842 10.7725 14.913 10.7138 14.97C10.6551 15.027 10.582 15.129 10.5367 15.454C10.4893 15.801 10.4872 16.272 10.4872 17V21.25H8.94255V16.95C8.94255 16.286 8.94255 15.713 9.0064 15.254C9.07436 14.762 9.2278 14.291 9.62118 13.909C10.0146 13.527 10.5006 13.378 11.0062 13.312C11.4789 13.25 12.069 13.25 12.7538 13.25H12.8547H12.8557Z" fill="black" />
                                <path id="Vector_4" d="M11.517 9.5C11.517 9.16848 11.6526 8.85054 11.8941 8.61612C12.1355 8.3817 12.4629 8.25 12.8043 8.25C13.1457 8.25 13.4731 8.3817 13.7145 8.61612C13.9559 8.85054 14.0915 9.16848 14.0915 9.5C14.0915 9.83152 13.9559 10.1495 13.7145 10.3839C13.4731 10.6183 13.1457 10.75 12.8043 10.75C12.4629 10.75 12.1355 10.6183 11.8941 10.3839C11.6526 10.1495 11.517 9.83152 11.517 9.5Z" fill="black" />
                            </g>
                        </svg>
                        <p className='sidebar-bottom--nav_btn__para'>Reports</p>
                    </div>
                    <div className='sidebar-bottom--nav_arrow'>
                        <svg transform={activenav === "report" ? 'rotate(180)' : ""} width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 1" d="M1 1L11.5 12L22 1" stroke="black" strokeWidth="4" strokeLinecap="round" />
                        </svg>

                    </div>
                </div>
                {activenav === "report" &&
                    <div className='sidebar-bottom--onactive'>
                        <Link href='/dashboard/salesreport' className={bluenav === "salesreport" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("salesreport")}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon-park-solid:sales-report">
                                    <g id="Mask group">
                                        <mask id="mask0_94_1598" maskUnits="userSpaceOnUse" x="1" y="0" width="22" height="24">
                                            {/* <g id="Group">
                                                <g id="Group_2">
                                                    <path d="M20.5 7L12 2L3.5 7V17L12 22L20.5 17V7Z" fill="white" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                                                    <path id="Vector_2" d="M12 11V15M16 9V15M8 13V15" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </g> */}
                                        </mask>
                                        <g mask="url(#mask0_94_1598)">
                                            <path id="Vector_3" d="M0 0H24V24H0V0Z" fill={bluenav == "salesreport" ? "white" : "black"} />
                                        </g>
                                    </g>
                                </g>
                            </svg>



                            <p className='sidebar-bottom--onactive_btn__para'>Sales</p>
                        </Link>
                        <div className={bluenav === "stockreport" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("stockreport")}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="emojione-v1:stock-chart" clip-path="url(#clip0_265_103)">
                                    <path id="Vector" d="M21.9004 19.5126C21.9006 19.8223 21.8398 20.129 21.7215 20.4152C21.6031 20.7014 21.4295 20.9615 21.2106 21.1806C20.9917 21.3997 20.7318 21.5735 20.4457 21.6921C20.1597 21.8107 19.853 21.8717 19.5433 21.8718H2.38605C1.76069 21.8714 1.16109 21.6227 0.719125 21.1803C0.277159 20.7378 0.0290235 20.138 0.0292971 19.5126V2.35812C0.0292971 1.056 1.08461 0 2.38605 0H19.5433C19.8529 4.51329e-05 20.1595 0.0610781 20.4455 0.179614C20.7315 0.298149 20.9914 0.471865 21.2103 0.690842C21.4292 0.909819 21.6028 1.16977 21.7212 1.45584C21.8396 1.74192 21.9005 2.04851 21.9004 2.35812V19.5126Z" fill="#E6E7E8" />
                                    <g id="Group">
                                        <path id="Vector_2" d="M0.0292969 3.79845H21.9021H0.0292969ZM0.0292969 3.62623H21.9021V3.96998H0.0327344L0.0292969 3.62623ZM0.0292969 8.88182H21.9021H0.0292969ZM0.0292969 8.70995H21.9021V9.0537H0.0327344L0.0292969 8.70995ZM0.0292969 13.9762H21.9021H0.0292969ZM0.0292969 13.805H21.9021V14.1488H0.0327344L0.0292969 13.805ZM0.0292969 19.061H21.9021H0.0292969ZM0.0292969 18.8874H21.9021V19.2311H0.0327344L0.0292969 18.8874ZM3.53348 21.8728V0.00344849V21.8728Z" fill="#E5F6FE" />
                                        <path id="Vector_3" d="M3.36133 0H3.70508V21.8728H3.36133V0ZM8.61761 21.8728V0.0034375V21.8728ZM8.44436 0H8.78811V21.8728H8.44436V0ZM13.7113 21.8728V0.0034375V21.8728ZM13.5401 0H13.8839V21.8728H13.5401V0ZM18.794 21.8728V0.0034375V21.8728ZM18.6207 0H18.9645V21.8728H18.6207V0Z" fill="#E5F6FE" />
                                    </g>
                                    <g id="Group_2">
                                        <path id="Vector_4" d="M0 14.5784L5.96097 9.39469C5.89516 9.28675 5.83436 9.17583 5.77878 9.06228C5.53094 8.98562 5.28172 8.93612 5.04041 8.83987L0 13.1997V14.5815" fill={bluenav == "stockreport" ? "white" : "black"} />
                                        <path id="Vector_5" d="M9.40967 14.6448C10.0824 14.7139 10.0105 14.6527 10.4323 14.2415L5.77795 8.89004C5.68678 8.78529 5.55774 8.72104 5.4192 8.71144C5.28066 8.70183 5.14399 8.74765 5.03923 8.83882C4.93448 8.92999 4.87024 9.05904 4.86063 9.19757C4.85102 9.33611 4.89685 9.47279 4.98801 9.57754L9.39764 14.6465C9.40176 14.6451 9.40486 14.6441 9.40967 14.6448ZM21.8991 9.13376L19.234 6.06957C19.1889 6.01779 19.1341 5.9754 19.0726 5.94482C19.0111 5.91424 18.9442 5.89607 18.8757 5.89135C18.8072 5.88662 18.7385 5.89544 18.6734 5.91729C18.6083 5.93914 18.5481 5.9736 18.4964 6.0187C18.4443 6.06368 18.4017 6.11849 18.3709 6.17998C18.3401 6.24147 18.3218 6.30844 18.3169 6.37704C18.3121 6.44563 18.3208 6.51452 18.3426 6.57973C18.3645 6.64495 18.3989 6.70521 18.4441 6.75707L21.8988 10.7284L21.8991 9.13376Z" fill="black" />
                                        <path id="Vector_6" d="M10.3577 14.3141C10.0895 14.5475 9.71898 14.5595 9.52923 14.3402C9.33983 14.1226 9.40273 13.7572 9.67017 13.5241L18.3086 6.00942C18.5757 5.77705 18.9473 5.76502 19.1374 5.98261C19.3268 6.20021 19.2635 6.56699 18.9958 6.79936L10.3577 14.3141Z" fill="black" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_265_103">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>





                            <p className='sidebar-bottom--onactive_btn__para'>Stock Level</p>
                        </div>

                        <div className={bluenav === "purchasingreport" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("purchasingreport")}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="bxs:purchase-tag">
                                    <path id="Vector" d="M10.4884 2.15501C10.1759 1.84242 9.75207 1.66677 9.31008 1.66667H3.33341C2.89139 1.66667 2.46746 1.84227 2.1549 2.15483C1.84234 2.46739 1.66675 2.89131 1.66675 3.33334V9.31001C1.66684 9.752 1.8425 10.1759 2.15508 10.4883L8.82175 17.155C9.13429 17.4675 9.55814 17.643 10.0001 17.643C10.442 17.643 10.8659 17.4675 11.1784 17.155L17.1551 11.1783C17.4675 10.8658 17.6431 10.4419 17.6431 10C17.6431 9.55807 17.4675 9.13422 17.1551 8.82167L10.4884 2.15501ZM5.83342 7.50001C5.39128 7.4999 4.96729 7.32415 4.65473 7.01143C4.34217 6.69872 4.16664 6.27464 4.16675 5.83251C4.16686 5.39037 4.3426 4.96638 4.65532 4.65382C4.96804 4.34126 5.39211 4.16573 5.83425 4.16584C6.27639 4.16595 6.70037 4.34169 7.01293 4.65441C7.32549 4.96713 7.50103 5.3912 7.50092 5.83334C7.5008 6.27548 7.32506 6.69946 7.01234 7.01202C6.69963 7.32458 6.27555 7.50012 5.83342 7.50001Z" fill={bluenav == "purchasingreport" ? "white" : "black"} />
                                </g>
                            </svg>




                            <p className='sidebar-bottom--onactive_btn__para'>Purchasing</p>
                        </div>

                        <div className={bluenav === "accountreport" ? 'sidebar-bottom--onactive_div activenav' : 'sidebar-bottom--onactive_div'}
                            onClick={() => setBluenav("accountreport")}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="material-symbols-light:account-box">
                                    <path id="Vector" d="M12 13.077C12.8387 13.077 13.5483 12.7867 14.129 12.206C14.7097 11.6253 15 10.9153 15 10.076C15 9.238 14.7097 8.52867 14.129 7.948C13.5483 7.36733 12.8387 7.077 12 7.077C11.1613 7.077 10.4517 7.36733 9.871 7.948C9.29033 8.52867 9 9.23833 9 10.077C9 10.9157 9.29033 11.6253 9.871 12.206C10.4517 12.7867 11.1613 13.0777 12 13.077ZM5.615 20C5.155 20 4.771 19.846 4.463 19.538C4.15433 19.2293 4 18.845 4 18.385V5.615C4 5.155 4.15433 4.771 4.463 4.463C4.771 4.15433 5.155 4 5.615 4H18.385C18.845 4 19.229 4.15433 19.537 4.463C19.8457 4.771 20 5.155 20 5.615V18.385C20 18.845 19.846 19.229 19.538 19.537C19.2293 19.8457 18.845 20 18.385 20H5.615ZM5.423 19H18.577C18.7177 18.9113 18.8137 18.7933 18.865 18.646C18.9163 18.4987 18.9613 18.3617 19 18.235C18.1 17.3517 17.0543 16.6557 15.863 16.147C14.6717 15.6383 13.384 15.3843 12 15.385C10.6167 15.385 9.329 15.639 8.137 16.147C6.945 16.655 5.89933 17.351 5 18.235C5.03867 18.3617 5.08367 18.4987 5.135 18.646C5.18633 18.7933 5.28233 18.9113 5.423 19Z" fill={bluenav == "accountreport" ? "white" : "black"} />
                                </g>
                            </svg>




                            <p className='sidebar-bottom--onactive_btn__para'>Account And payment</p>
                        </div>

                    </div>}


            </div>
        </div>
    )
}

export default Sidebar