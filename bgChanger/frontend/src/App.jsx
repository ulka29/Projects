import { useState, useEffect } from 'react'
import Logo from './assets/logo.svg'
import image from './assets/butterfly.jpg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  const [colors, setColors] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/colors")
      .then(res => res.json())
      .then(data => setColors(data))
      .catch(err => console.error("Error fetching colors:", err))
  }, [])

  return (
    <>
      <div 
        className='w-full h-screen duration-200'
        style={{ background: color }}
      >
        <img src={Logo} className="logo" alt="Vite logo" />
        <img src={image} className="image" alt="React logo" />

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-transparent'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            
            {colors.map((item, index) => (
              <button
                key={index}
                onClick={() => setColor(item.value)}
                className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{ background: item.value }}
              >
                {item.name}
              </button>
            ))}

          </div>
        </div>
      </div>
      <div 
        className='w-full h-screen duration-200'
        style={{ background: color }}
      ></div>
    </>
  )
}

export default App