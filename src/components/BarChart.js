import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const [categories, setCategories] = useState([]);
  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await fetch("https://viaje.ai/mainvia_api/");
        const result = await response.json();

        // Extract dates and values
        const fetchedCategories = result.data.map(item => item["0"]);
        const fetchedSeries1 = result.data.map(item => item["1"]);
        const fetchedSeries2 = result.data.map(item => item["2"]);

        setCategories(fetchedCategories);
        setSeries1(fetchedSeries1);
        setSeries2(fetchedSeries2);
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
      text: 'Double Bar Graph'
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
      name: 'Series 1',
      data: series1
    }, {
      name: 'Series 2',
      data: series2
    }]
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
