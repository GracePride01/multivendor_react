import React from 'react';
import "./customerList.css";
import {DataGrid} from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'


export default function CustomerList(){
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'username',
          headerName: 'User Name',
          
          width: 150,
          
   
        //   renderCell:(params)=>{
        //     return(
        //           <div className='userListUser'>
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
          field: 'status',
          headerName: 'Status',
          width: 160,
          
        },
        {
            field: 'action',
            headerName:'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                        <button className='userLidstEdit'>Edit</button>
                            <DeleteOutline className='userLidstDelete'/>
                    </>
                    )
            }
        },
      ];
      
      const rows = [
        {
            id: 1, 
            username: 'user01',
            // avatar:'../../../pages/images/user.png',
            email:'user01@user.com',
            phone: '9182736450',
            status:'Active',
        },
        {
            id: 2, 
            username: 'azmi',
            // avatar:'../../../pages/images/user.png',
            email:'azmi@user.com',
            phone:'93236547148',
            status:'Active',
        },
        {
            id: 3, 
            username: 'abcdef',
            // avatar:'../../../pages/images/user.png',
            email:'abcdef@user.com',
            phone: '9080706050',
            status:'Active',
        },
        {
            id: 4, 
            username: 'sri',
            // avatar:'../../../pages/images/user.png',
            email:'sri@user.com',
            phone: '7245096578',
            status:'Active',
        },
        {
            id: 5, 
            username: 'sun',
            // avatar:'../../../pages/images/user.png',
            email:'sun@user.com',
            phone:'6380557101',
            status:'Active',
        },
        {
            id: 6, 
            username: 'reshmi',
            // avatar:'../../../pages/images/user.png',
            email:'reshmi@gmail.com',
            phone:'6787634321',
            status:'Active',
        },
        {
            id: 7, 
            username: 'sri01',
            // avatar:'../../../pages/images/user.png',
            email:'sri011@user.com',
            status:'Active',
        },
        {
            id: 8, 
            username: 'mani',
            // avatar:'../../../pages/images/user.png',
            email:'mani@gmail.com',
            status:'Active',
        },
        {
            id: 9, 
            username: 'abcd',
            // avatar:'../../../pages/images/user.png',
            email:'hfudsgk@user.com',
            status:'Active',
        },
        {
            id: 10, 
            username: 'gfkkjkg',
            // avatar:'../../../pages/images/user.png',
            email:'vhjhjkul@gmail.com',
            status:'Active',
        },
        
    
      ];
    return(
        <div className='cusList'>
            <br></br>
            <center>
              <h1 class="hd-vw" >Manage Customer</h1>
                <br></br>
            </center>
            <div style={{ height: 460, width: '90%' }}>
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