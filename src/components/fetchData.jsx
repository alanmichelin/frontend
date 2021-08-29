const fetchData = async (params) =>{
    try{
    const gettingData = await fetch(params)
    const res = await gettingData.json()
    return res
    }
    catch (err) {
        console.error('err', err);
      }
    
}
export default fetchData