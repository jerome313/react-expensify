import React from 'react'; 
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';


class ExpenseListFilters extends React.Component{
  state={
    calendarFocused: null
  };
  onDatesChange = ({ startDate,endDate }) => {
     this.props.dispatch(setStartDate(startDate));
     this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) =>{
    this.setState(()=>({calendarFocused}));
  }
render(){
  return(
    <div>
      <input type="text" value={this.props.filters.text} onChange={(e)=>{
        this.props.dispatch(setTextFilter(e.target.value));
      }}/>
      <select
        onChange={(e)=>{
        e.target.value === 'date'? 
        this.props.dispatch(sortByDate()):
        this.props.dispatch(sortByAmount())
      }}>
    
      <option value="date">Date</option>
      <option value="Amount">Amount</option>
      </select>
      <DateRangePicker
       startDate={this.props.filters.startDate}
       endDate={this.props.filters.endDate}
       onDatesChange={this.onDatesChange}
       focusedInput={this.state.calendarFocused}
       onFocusChange={this.onFocusChange}
       showClearDates={true}
       numberOfMonths={1}
       isOutsideRange={()=>false}
       />
    </div>
)
}; 
};
  

const mapToStateProps = (state) => {
  return{
    filters: state.filters
  };
};

export default connect(mapToStateProps)(ExpenseListFilters);
