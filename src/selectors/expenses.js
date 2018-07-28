//get visible expenses
import moment from 'moment';

export default (expenses,{ text, sortBy, startDate, endDate,}) =>{
    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt); 
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true; 
        const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment,'day') : true;
        const lowerd = expense.description.toLowerCase(); 
        const lowert = text.toLowerCase();
        const theText = lowerd.includes(lowert);
        return startDateMatch && endDateMatch && theText;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
           return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy == 'amount'){
            return a.amount < b.amount ? 1: -1;
        }
    });  
 };