import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

export default function WorldsNews() {

  const { worldWide, setWorldWide } = useContext(DataContext);

  const [untilFive, setUntilFive] = useState([]);
  const [untilEnd, setUntilEnd] = useState([]);

  const calc = () => {
    let array = new Object([]);
    for (let i = 1; i < 5; i++) {
      array[i] = worldWide[i];
    }
    setUntilFive(array)
  }

  const calcEnd = () => {
    let arrayEnd = new Object([]);
    for (let i = 6; i < 24; i++) {
      arrayEnd[i] = worldWide[i];
    }
    setUntilEnd(arrayEnd)
  }

  useEffect(() => {
    calc()
    calcEnd()
  }, [])

  return (
    <>
      <div className='border'></div>
      <h1 className='title-page'>WORLD NEW</h1>
      <p className='text-under-title'>World news is all reports on stories involving politicians, conflict and revolutions outside of the United States and Israel that affect the world and the Jewish state. 'World news' helps the global environment set the political agenda through journalists situated in conflict regions reporting on the important facts.</p>
      <div className='border'></div>

      <section className='menu grid'>
        <div>
          <div className='box-top'>
            <img src={worldWide[0].imageUrl} />
            <h1>{worldWide[0].title}</h1>
            <p>By {worldWide[0].author}</p>
          </div>
        </div>

        <div className='boxes-right grid'>
          {
            untilFive.map((item) => <div className='box'>
              <img src={item.imageUrl} />
              <h4>{item.title}</h4>
              <p>By{item.author}</p>
            </div>)
          }
        </div>
      </section>
      <br></br>
      <br></br>
      <div className='border'></div>

      <section className='last-block'>
        {
          untilEnd.map((item) => <div className='block'>
            <img src={item.imageUrl} alt="" />
            <span className='mrg-ri'>
              <h2>{item.title}</h2>
              <h5>{item.content}</h5>
              <span className='fl'>
                <p>By {item.author}</p>
                <p className='date'>{item.date}</p>
              </span>
            </span>
          </div>)
        }
      </section>
    </>
  )
}

