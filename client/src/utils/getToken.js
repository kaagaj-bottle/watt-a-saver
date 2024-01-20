export const getToken=()=>{
  const accessTokenObj = JSON.parse(localStorage.getItem("token"));
  return accessTokenObj
}
