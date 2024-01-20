export const pages = [
  {
    id: 0,
    label: "Dashboard",
    route: "/"
  }, {
    id: 1,
    label: "Account",
    route: "/account"
  }
]

export const drawerWidth = 240

export const styleObject = {
  marginLeft: { sm: `${drawerWidth - 60}px` },
  marginTop: { sm: '2rem' },
}

export const greenAccent = '#4CAF50'

export const userDevices = [{
  name: "Phone",
  count: 3,
  power: 15,
  avgHourUsage: 3,
},
{
  name: "Electric Motor",
  count: 1,
  power: 1000,
  avgHourUsage: 1,
},
{
  name: "Fridge",
  count: 1,
  power: 750,
  avgHourUsage: 24
},
{
  name: "Water Heater",
  count: 1,
  power: 1000,
  avgHourUsage: 2,
}, {
  name: "Car",
  count: 1,
  power: 5000,
  avgHourUsage: 5,
}
].sort((a,b)=>{
  return b.power-a.power
})

export const topThree=userDevices.slice(0,3)
export const bottomThree=userDevices.sort((a,b)=>a.power-b.power).slice(0,3)




