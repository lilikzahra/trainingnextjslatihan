import PropTypes from 'prop-types'

function Button(props) {
    console.log('props button', props)
    return <button 
                type={props?.htmlType}
                onClick={props?.onClick}
                // className={'p-4 !bg-gray-200 !rounded-xl transition duration-200 hover:!bg-blue-800'}>
                className={'btn-primary'}>
        {props?.children}</button>
}

Button.propTypes = {
    htmlType: PropTypes.oneOf(['button', 'submit']).isRequired,
    type: PropTypes.oneOf(['primary', 'default']),
    onClick: PropTypes.func.isRequired,
}
Button.defaultProps = {
    htmlType: 'button',
    type: 'default',
    onClick: function(events){
        console.log(events)
    }
}

export default Button