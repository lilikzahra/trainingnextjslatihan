import PropTypes from 'prop-types'
import Button from './components/button'
import { Navbar } from './components/navbar.component'

function Modal(props) {
    console.log(props, 'COMPONENT MODAL')
    return(
        <div className={`
            ${
                props?.visible ? 'flex' : 'hidden'
            }
            fixed top-0 left-0 w-full items-center justify-center bg-black bg-opacity-50 h-screen
            `}>
            
            <div className={'z-[1] relative w-2/4 h-3/4 mx-auto bg-white rounded-xl'}>
            <Button         
            htmlType={'button'}
            type={'default'}
            onClick={props?.onchange}
            >
            {/* {
                props?.visible ? 'CLOSE' : 'OPEN'
            } */}
            </Button>
                {props?.children}
            </div>
            
            {/* <div
                className={`
                    fixed  z-[0]

                    w-full h-full
                `}>
                    

            </div>   */}
            
        </div>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onchange: PropTypes.func.isRequired
}
Modal.defaultProps = {
    visible: false,
    onchange: function() {

    }
}

export default Modal