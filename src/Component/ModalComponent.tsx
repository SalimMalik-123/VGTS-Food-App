import React, { useState } from 'react';
import {  Modal, Space } from 'antd';
import Button from './Button';



interface Props{
  open: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  handleOk: () => void
  handleCancel: () => void
  children : React.ReactNode
  isCheck:boolean
}
const ModalComponent = (props:Props) => {
  const {open,setOpen,handleCancel,handleOk ,children,isCheck} = props

  return (
    <>
      
      <Modal
        open={open}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        style={{fontFamily:'roboto',color:'inherit'}}
        footer={(_, { OkBtn, CancelBtn }) => (
          <div className='w-100 d-flex justify-content-center'>
            {/* <Button>Custom Button</Button> */}
            <Button 
              label='Cancel'
              className='btn text-white   btn-danger mx-2'
              minWidth={130}
              onClick={handleCancel}
            />

            <Button 
              label={isCheck ? 'Place Order': 'Checkout'}
              className={` btn ${isCheck ?'text-white btn-secondary' :'btn-primary'} mx-2`} 
              minWidth={130}
              onClick={handleOk}
            />            
          </div>
        )}
      >
       <div className='w-100 ' >
          {children}
       </div>
      </Modal>
    </>
  );
};

export default ModalComponent;