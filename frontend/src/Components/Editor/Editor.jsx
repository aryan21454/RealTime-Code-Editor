import React, { useEffect } from 'react'
import Codemirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/shadowfox.css'
import './Editor.css'
function Editor() {
    useEffect(() => {
      async function init()
      {
        Codemirror.fromTextArea(document.getElementById('realTimeEditor'),{
            mode:{name: 'javascript' , json:true},
            theme :'shadowfox',
            autoClosetags : true,
            autoCloseBrackets : true,
            lineNumbers : true 
        });

      }
      init();
      console.log(true)
    
    }, [])
    
  return (
    <div>
        <textarea id='realTimeEditor' className='' ></textarea>
        
    </div>
  )
}

export default Editor