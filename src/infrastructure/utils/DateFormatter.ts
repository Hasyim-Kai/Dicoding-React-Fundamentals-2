const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export const formatDate = (date : string) => new Date(date).toLocaleDateString("en-US", options)