import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const [categories, setCategories] = useState([]);
  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await fetch("https://viaje.ai/mainvia_api/");
        const result = await response.json();
        const fetchedCategories = result.data.map(item => item["0"]);
        const fetchedSeries1 = result.data.map(item => item["1"]);
        const fetchedSeries2 = result.data.map(item => item["2"]);
        const fetchedSeries3 = result.data.map(item => item["3"]);

        setCategories(fetchedCategories);
        setSeries1(fetchedSeries1);
        setSeries2(fetchedSeries2);
        setSeries3(fetchedSeries3);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Bar Graph'
    },
    xAxis: {
      categories: categories,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Values'
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Via Booking Count',
      data: series1
    }, {
      name: 'Main Booking Count',
      data: series2
    }, {
      name: 'Total Seats',
      data: series3
    }
  ]
  };

  return (
    <div className='m-auto chart'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default BarChart;
