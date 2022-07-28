export const formatDate = (month, year) => {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(year, month);
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
};
