import Linecharts from '@/components/Linechart/Linechart'
import Piecharts from '@/components/Piechart/Piecharts'
import Image from 'next/image'
import React from 'react'

import dynamic from 'next/dynamic';
import Profiletop from '@/components/ProfileTop/profiletop';

const DynamicComponent = dynamic(() => import('@/components/Piechart/Piecharts'), { ssr: false });

type Props = {}

const page = (props: Props) => {
  return (
    <div className='dashboardmain'>
      <div className='dashboardmain-top'>
        <div className='dashboardmain-top--profile'>
          {/* <div className='dashboardmain-top--profile_modediv'>
            <div className='dashboardmain-top--profile_modediv__mode'>
              <div className='dashboardmain-top--profile_modediv__mode-btn'>

              </div>
            </div>
            <h5>Dark mode</h5>
          </div> */}

          {/* <div className='dashboardmain-top--profile_div'>
            <div className='dashboardmain-top--profile_div_img'>
              <Image
                src='/profilepic.png'
                width={40}
                height={40}
                priority
                alt='Person Logo'
              />
            </div>

            <div className='dashboardmain-top--profile_div_names'>
              <div className='dashboardmain-top--profile_div_names__main'>
                Anisha Mishra
              </div>
              <div className='dashboardmain-top--profile_div_names__position'>
                Admin
              </div>
            </div>
          </div> */}
          <Profiletop/>
        </div>


        <div className='dashboardmain-top--report'>
          <div className='dashboardmain-top--report_singlediv'>
            <div className='dashboardmain-top--report_singlediv__absolute brown'>
              <Image
                src='/personabs.svg'
                width={30}
                height={30}
                priority
                alt='Person Logo'
              />
            </div>
            <div className='dashboardmain-top--report_singlediv__top'>
              <p className='desc'>Todays Month</p>
              <p className='data'>200$</p>
            </div>
            <hr />
            <div className='dashboardmain-top--report_singlediv__bottom'>
              <div className='dashboardmain-top--report_singlediv__bottom-desc'>
                <p className='dashboardmain-top--report_singlediv__bottom-desc--percentage'>+5%</p>
                more than last month
              </div>
            </div>
          </div>

          <div className='dashboardmain-top--report_singlediv'>
            <div className='dashboardmain-top--report_singlediv__absolute green'>
              <Image
                src='/personabs.svg'
                width={30}
                height={30}
                priority
                alt='Person Logo'
              />
            </div>
            <div className='dashboardmain-top--report_singlediv__top'>
              <p className='desc'>Todays Month</p>
              <p className='data'>200$</p>
            </div>
            <hr />
            <div className='dashboardmain-top--report_singlediv__bottom'>
              <div className='dashboardmain-top--report_singlediv__bottom-desc'>
                <p className='dashboardmain-top--report_singlediv__bottom-desc--percentage'>+5%</p>
                more than last month
              </div>
            </div>
          </div>

          <div className='dashboardmain-top--report_singlediv'>
            <div className='dashboardmain-top--report_singlediv__absolute blue'>
              <Image
                src='/personabs.svg'
                width={30}
                height={30}
                priority
                alt='Person Logo'
              />
            </div>
            <div className='dashboardmain-top--report_singlediv__top'>
              <p className='desc'>Todays Month</p>
              <p className='data'>200$</p>
            </div>
            <hr />
            <div className='dashboardmain-top--report_singlediv__bottom'>
              <div className='dashboardmain-top--report_singlediv__bottom-desc'>
                <p className='dashboardmain-top--report_singlediv__bottom-desc--percentage'>+5%</p>
                more than last month
              </div>
            </div>
          </div>

          <div className='dashboardmain-top--report_singlediv'>
            <div className='dashboardmain-top--report_singlediv__absolute red'>
              <Image
                src='/personabs.svg'
                width={30}
                height={30}
                priority
                alt='Person Logo'
              />
            </div>
            <div className='dashboardmain-top--report_singlediv__top'>
              <p className='desc'>Todays Month</p>
              <p className='data'>200$</p>
            </div>
            <hr />
            <div className='dashboardmain-top--report_singlediv__bottom'>
              <div className='dashboardmain-top--report_singlediv__bottom-desc'>
                <p className='dashboardmain-top--report_singlediv__bottom-desc--percentage'>+5%</p>
                more than last month
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='dashboardmain-bottom'>
        <div className='dashboardmain-bottom--charts'>
          <div className='dashboardmain-bottom--charts_pie'>
            <div className='dashboardmain-bottom--charts_pie__img'>
              <Piecharts />
            </div>
            <div className='dashboardmain-bottom--charts_pie__desc'>
              <div className='dashboardmain-bottom--charts_pie__desc-revenue'>
                <h3>Revenue receivables</h3>

                <div className='dashboardmain-bottom--charts_pie__desc-revenue--div'>
                  <div className='dot'></div>
                  <p>21k</p>
                </div>
              </div>
              <div className='dashboardmain-bottom--charts_pie__desc-order'>


                <h3>Order Growth</h3>

                <div className='dashboardmain-bottom--charts_pie__desc-order--div'>
                  <div className='dot'></div>
                  <p>21%</p>
                </div>
              </div>


              <div className='dashboardmain-bottom--charts_pie__desc-revenuegrowth'>

                <h2>Revenue growth</h2>


                <div className='dashboardmain-bottom--charts_pie__desc-revenuegrowth--div'>
                  <div className='dot'></div>
                  <p>21%</p>
                </div>

              </div>
            </div>
          </div>

          <div className='dashboardmain-bottom--charts_line'>

            <Linecharts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page