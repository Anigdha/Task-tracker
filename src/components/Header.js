import PropTypes from 'prop-types'
import Button from './Button'


const Header = ( {title} ) => {
    const headingStyle = {
        color : 'red',
        backgroundColor : 'green'
    }
    const btnClickHandler = () => {
        console.log('clicked!');
    }
    return (
        <header className='header'>
            <h1 /*style = {headingStyle}*/ >
                {title}
            </h1>
            <Button /*color = 'red'  /> */
            onClick = {btnClickHandler} />
            
        </header>
    )
}

Header.defaultProps = {
    title : 'task - tracker'
}

Header.propTypes = {
    title : PropTypes.string
}

export default Header