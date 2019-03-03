const dateConvetor =date=>{
    const parsedDate = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return parsedDate.toLocaleDateString('en-US', options);
}


export default dateConvetor;
