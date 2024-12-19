
export const getdata = () => {
    return JSON.parse(localStorage.getItem('products')) || []
}