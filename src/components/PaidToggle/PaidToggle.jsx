import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


export default function PaidToggle() {
    const [paid, setPaid] = useState({});
    const [buttonPressed, setButtonPressed] = useState(false)
  
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch('http://localhost:3000/expenses')
            setPaid(response.data)
        } catch (err) {
          console.log(err)
        }
      })()
    }, [buttonPressed]);
  
    const handleClick = async (statusChange, id) => {
      try {
        const response = await fetch(`http://localhost:3000/expenses/${month._id}`, {
          status: statusChange
        })
        if(response.status === 200) {
          setButtonPressed(!buttonPressed)
        } else {
          console.log('Something went wrong')
        }
      } catch (err) {
        console.log(err)
      }
    }
  
    return (
      <div className="paidToggle">
        <div className="container">
          <div id='unpaid' className='section'>
            <h2>
              To-Do
            </h2>
            <div className='list'>
            {
              tasks["Bills"] ?
              tasks["Paid"].map((item, idx) => {
                return(
                  <div className="paid" key="{idx}">
                    <Link to={`/${item._id}`}>{item.entry}</Link>
                    <div>
                      <button onClick={() => {handleClick("PENDING", item._id)}} className="button">Pending</button>
                      <button onClick={() => {handleClick("COMPLETED", item._id)}} className="button">Completed</button>
                    </div>
                  </div>
                )
              })
              :
              ""
            }
            </div>
          </div>
          <div id='pending' className='section'>
            <h2>
              Pending
            </h2>
            <div className='list'>
            {
              tasks["PENDING"] ?
              tasks["PENDING"].map((item, idx) => {
                return(
                  <div className="task" key="{idx}">
                    <Link to={`/${item._id}`}>{item.entry}</Link>
                    <div>
                      <button onClick={() => {handleClick("TO-DO", item._id)}} className="button">To-Do</button>
                      <button onClick={() => {handleClick("COMPLETED", item._id)}} className="button">Completed</button>
                    </div>
                  </div>
                )
              })
              :
              ""
            }
            </div>
          </div>
          <div id='completed' className='section'>
            <h2>
              Completed
            </h2>
            <div className='list'>
            {
              tasks["COMPLETED"] ?
              tasks["COMPLETED"].map((item, idx) => {
                return(
                  <div className="task" key="{idx}">
                    <Link to={`/${item._id}`}>{item.entry}</Link>
                    <div>
                      <button onClick={() => {handleClick("TO-DO", item._id)}} className="button">To-Do</button>
                      <button onClick={() => {handleClick("PENDING", item._id)}} className="button">Pending</button>
                    </div>
                  </div>
                )
              })
              :
              ""
            }
            </div>
          </div>
          <div id='completed' className='section'>
            <h2>
              Completed
            </h2>
            <div className='list'>
            {
              tasks["COMPLETED"] ?
              tasks["COMPLETED"].map((item, idx) => {
                return(
                  <div className="task" key="{idx}">
                    <Link to={`/${item._id}`}>{item.entry}</Link>
                    <div>
                      <button onClick={() => {handleClick("TO-DO", item._id)}} className="button">To-Do</button>
                      <button onClick={() => {handleClick("PENDING", item._id)}} className="button">Pending</button>
                    </div>
                  </div>
                )
              })
              :
              ""
            }
            </div>
          </div>
        </div>
      </div>
    )
  };