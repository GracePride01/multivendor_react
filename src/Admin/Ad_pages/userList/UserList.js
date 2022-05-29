import React from 'react';
import "./userList.css";
import {DataGrid} from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'


export default function UserList(){
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'customername',
          headerName: 'Customer',
           width: 140,
          
   
        //   renderCell:(params)=>{
        //     return(
        //           <div className='cusListUser'>
        //               <img  className="userListImg" src={params.rows.avatar} alt="" />
        //               {params.row.username}
        //           </div>
        //       );
        //   },
          
        },
        
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
         
        },
        {
            field: 'phone',
            headerName: 'Mobile',
            width: 160,
        },
        {
          field: 'shop',
          headerName: 'Shop',
          width: 110,
          
        },

        {
          field: 'address',
          headerName: 'Address',
          width: 130,
        },
        {
          field: 'protype',
          headerName: 'Product Type',
          width: 150,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'action',
            headerName:'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                        <button className='cusLidstEdit'>Edit</button>
                            <DeleteOutline className='cusLidstDelete'/>
                    </>
                    )
            }
        },
      ];
      
      const rows = [
        {
            id: 1, 
            customername: 'azmi',
            // avatar:'../../../pages/images/user.png',
           
            email:'azmi@gmail.com',
            phone: '8777634251',
            shop: 'imza',
            address: 'svpuram',
            protype:'cloth',
            status:'Active',
        },
        {
            id: 2, 
            customername: 'ananthi',
            // avatar:'../../../pages/images/user.png',
            email:'ananthi@gmail.com',
            phone:'9874561230',
            shop: 'aji',
            address: 'vkpuram',
            protype:'cloth',
            status:'Active',
        },
        {
            id: 3, 
            customername: 'misha',
            // avatar:'../../../pages/images/user.png',
            phone:'9812763450',
            email:'misha@gmail.com',
            shop: 'misha',
            address: 'dsdfs',
            protype:'cloth',
            status:'Active',
        },
        {
            id: 4, 
            customername: 'sri',
            // avatar:'../../../pages/images/user.png',
            phone: '8712653409',
            email:'sri@gmail.com',
            shop: 'kdlgji',
            address: 'jdsghdj',
            protype:'shoes',
            status:'Active',
        },
        {
            id: 5, 
            customername: 'mani',
            // avatar:'../../../pages/images/user.png',
            phone: '998888888',
            email:'mani@gmail.com',
            shop: 'mani',
            address: 'ambai',
            protype:'cloth',
            status:'Active',
        },
        {
            id: 6, 
            customername: 'azmi01',
            // avatar:'../../../pages/images/user.png',
            email:'azmi01@gmail.com',
            phone :'9766354723',
            shop: 'az0011',
            address: 'ygzdACs',
            protype:'shoes',
            status:'Active',
        },
        {
            id: 7, 
            customername: 'sri01',
            // avatar:'../../../pages/images/user.png',
            email:'sri01@gmail.com',
            phone: '8765342832',
            shop: 'sri1116',
            address: 'tvl',
            protype:'shoes',
            status:'Active',
        },
        {
            id: 8, 
            customername: 'abcd',
            // avatar:'../../../pages/images/user.png',
            email:'abcd@gmail.com',
            phone:'9479364211',
            shop: 'efgh',
            address: 'ffadf',
            protype:'cloth',
            status:'Active',
        },
        {
            id: 9, 
            customername: 'hfudsgk',
            // avatar:'../../../pages/images/user.png',
            email:'hfudsgk@gmail.com',
            phone:'9886644211',
            shop: 'hfudsgk',
            address: 'jhdbj',
            protype:'cloth',
            status:'Active',
        },
        {
            id: 10, 
            customername: 'sri0011',
            // avatar:'../../../pages/images/user.png',
            email:'sri0011@gmail.com',
            phone:'9977553311',
            shop: 'sri',
            address: 'Tirunelveli',
            protype:'cloth',
            status:'Active',
        },
        
    
      ];
    return(
        <div className='userList'>
            <br></br>
            <center>
              <h1 class="hd-vw" >Manage Users</h1>
                <br></br>
            </center>
            <div style={{ height: 460, width: '95%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>   
                 
        </div>
    )
}