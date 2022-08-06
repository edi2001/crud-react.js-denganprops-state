import React from 'react'

const makanan=[
    {
        nama:'soto',
        harga:12000
    },
    {
        nama:'bakso',
        harga:10000
    },{
        nama:'mie ayam',
        harga:11000
    },{
        nama:'nasi goreng',
        harga:15000
    }
]

// Reduce
const total_bayar = makanan.reduce((total_harga,makanan)=>{
    return total_harga +makanan.harga
}
,0
)

const Map = () => {
  return ( 
    <div>
        <h2>map</h2>
        <ul>
            {makanan.map((makanan)=>(
              <li>{makanan.nama}- Harga {makanan.harga}</li>
  
            ))}
        </ul>
        <h2>Map filter harga yang kebih dari 11.000</h2>
        <ul>
            {makanan.filter((makanan=>makanan.harga>11000)).map((makanan)=>(
              <li>{makanan.nama}- Harga {makanan.harga}</li>
  
            ))}
        </ul>
        <h3>total harga:{total_bayar}</h3>
    </div>
  )
}

export default Map