import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("");
  
  const handleUpClick =  ()=>{
    let resultText = text.toUpperCase();
    setText(resultText);
    props.showAlert("Converted To UpperCase", "success")
  }
  const handleOnChange =  (event)=>{
    setText(event.target.value)
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success")
  }
  
  const handleclearClick = ()=>{
    setText('')
    props.showAlert("Text Cleared", "success")
  }

  const handleSpeak = () => {
    props.showAlert("Speaking Now", "success")
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    
  }

  const handleCopy = () => {
    props.showAlert("Text Copied to ClipBoard", "success")
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    
  }

  const handleExtraSpacesClick = () =>{
    props.showAlert("Extra Spaces removed", "success")
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    
  } 
  

  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#262424', color: props.mode==='light'?'black':'white'}} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
        <button type="submit" onClick={handleCopy} className="btn btn-primary mx-2">Copy to clipboard</button>
        <button type="submit" onClick={handleExtraSpacesClick} className="btn btn-primary mx-2">Remove Extra Spaces</button>
        <button type="submit" onClick={handleSpeak} className="btn btn-danger mx-2">Speak</button>

        
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length? text: "Enter something to preview here"}</p>
    </div>
    
    </>
  )
}
