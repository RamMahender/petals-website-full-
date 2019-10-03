import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

 

class Viewattendance extends Component {
	render() {
	
		return (
			<PieChart
			data={[
			  { title: 'One', value: 30, color: '#E38627' },
			  { title: 'Two', value: 10, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
        { title: 'Four', value: 40, color: '#FFFFFF' }
			]}
			style={{width: '10%'}}
		  />
		)
	}
}
 
export default Viewattendance;
