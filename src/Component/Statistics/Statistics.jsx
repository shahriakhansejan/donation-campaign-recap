import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from '../../utility/backEnd';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    const dataLength = data.length;
    const loaderData = getStoredApplication();
    const loaderDataLength = loaderData.length;


    const chartData = [
        { name: 'Your Donation', value: loaderDataLength },
        { name: 'Total Donation', value: dataLength },

    ];

    const colors = ['#0088FE', '#00C49F'];

    
    return (
        <PieChart className='pt-28' width={1500} height={1500}>
        <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} label>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
            ))
          }
        </Pie>
      </PieChart>
    );
  }


    Statistics.propTypes = {

    };

    export default Statistics;