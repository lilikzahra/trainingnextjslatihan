import Button from "@/src/components/button";
import { Navbar } from "@/src/components/navbar.component";
import { useEffect, useState } from "react";
import Modal from "@/src/modal";
import Image from "next/image";


export default function Home() {
  const [visible, setVisible] = useState(false)
  console.log('visible', visible)
  function onChangeModal() {
      setVisible(!visible)
  }
  return(
    <div>
      <Navbar></Navbar>
      <div className="h-screen w-full">
        <div className="h-screen w-full">
            <Image
              width={1000}
              height={1000}
              src='/rakun.jpg'>
            </Image>
        </div>
        <div className="h-screen w-full">
            <Image
              width={1000}
              height={1000}
              src='/rakun.jpg'>
            </Image>
        </div>
        <div className="h-screen w-full">
            <Image
              width={1000}
              height={1000}
              src='/rakun.jpg'>
            </Image>
        </div>
      </div>
      
            <div className="space-x-4">
              <Button
                  htmlType={'button'}
                  type={'default'}
                  onClick={onChangeModal}
                >Open Modal</Button>

                <Modal 
                    visible={visible}
                    onchange={onChangeModal}
                    >
                      <div className="w-full flex items-center justify-between">
                        <h1>Title Modal</h1>
                        <Button
                             htmlType={'button'}
                             type={'default'}
                             onClick={onChangeModal}
                           >Close</Button>
                      </div>
                    </Modal>
                    <h1 className={'text-red-500'}>Home</h1>
            </div>
      <Button 
        htmlType={'button'}
        type={'default'}
        onClick={(e)=> {
          console.log(e,'BUTTON 1')
        }}
      >BUTTON 1</Button>
      <Button 
        htmlType={'button'}
        type={'primary'}
        onClick={(e)=> {
          console.log(e,'BUTTON 2')
        }}
      >BUTTON 2</Button>
      <h1 className={'text-purple-500'}>Home Pages</h1>
    </div>
  )
}