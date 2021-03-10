// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className ='box box--small'style={{backgroundColor: 'lightBlue', fontStyle: 'italic'}}>small lightblue box</div>
const mediumBox = <div className ='box box--medium' style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
const largeBox = <div className ='box box--large' style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>


function Box({className, style, ...props}){
    return <div className={'box ' + className} style={{fontStyle: 'italic', ...style}} {...props}></div>
}
function App() {
  return (
    <div>
        {/* Em JSX estilos css sao passados como objetos para o elemento, o nome dos atributos em css
        escritas em kebab-case, tornam-se  os nomes das propriedades do objeto. Em camelCase o valor das
        propriedades vai entre aspas*/}
        <div style={{marginTop: '20px', backgroundColor: 'blue'}}>Teste</div> 
        <Box className="box--small" style={{backgroundColor: 'lightBlue'}} id='box1'>Small lightBlue Box</Box>
        <Box className="box--medium" style={{backgroundColor: 'pink'}} id='box2'>Medium Pink Box</Box>
        <Box className="box--large" style={{backgroundColor: 'orange'}} id='box3'>Large Orange Box</Box>
        
    </div>
  )
}

export default App
