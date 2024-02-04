import React,{useState} from 'react'

export default function About() {
  const[myStyle,setMyStyle]=useState({
    color: 'black',
    backgroundColor:'white'
  })
  const[btntext, setBtnText] = useState("Enable Dark Mode ")

 const toggleStyle=()=>
  {
   if(myStyle.color=== 'black')
   {
    setMyStyle({
      color: 'white',
    backgroundColor:'black',
    border:'1px solid white'
    })
    setBtnText("Enable Light Mode ☀️");
   }
   else
   {
    setMyStyle({
    color: 'black',
    backgroundColor:'white'
  })
  setBtnText("Enable Dark Mode ");
   }
  }
  
  
  
  return (
    <div className='container' style={myStyle} >
        <h1 className="my-4">About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        WELCOME  😊
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Welcome to TextConverto 📝 </strong>,your go-to destination for seamless text manipulation! 
        At TextConverto, we specialize in transforming text effortlessly, offering a suite of handy 
        tools designed to enhance your text editing experience. Dive into the world of precision
         with our easy-to-use features, including converting text to uppercase, lowercase, 
         and seamlessly removing unwanted spaces.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        FEATURES 🚀
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Our intuitive platform provides a preview section, allowing you to witness the 
       transformation before finalizing your edits. Say goodbye to guesswork and hello 
       to precision as you tailor your text exactly the way you want it. Whether you're drafting 
       a document, fine-tuning code, or simply polishing your prose, TextConverto is
        here to streamline your text conversion needs.
        But that's not all – we go beyond the basics!
         TextConverto also boasts a robust word and character counting feature, 
         ensuring you stay on top of your text's length and structure. Our commitment to 
         simplicity and efficiency makes TextConverto the ideal
         companion for writers, coders, and anyone looking to elevate their text editing game.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle} >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         JOIN US 🎉    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         Join us on this journey of text transformation where precision meets convenience.
          Experience the power of TextConverto – because every word deserves to be just right!
      </div>
    </div>
  </div>
</div>
<div className='container my-4'>
<button type="button" onClick={toggleStyle} className="btn btn-primary ">{btntext} </button>

</div>
</div>
  )
}
