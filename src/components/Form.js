import React from 'react'
import { useDispatch } from 'react-redux';
import { useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { newEntry } from '../actions/formActions';
import { Link } from 'react-router-dom';



export default function Form() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const nameRef=useRef(null);
    const deptRef=useRef(null);
    const skypeRef=useRef(null);
    const emailRef=useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const n=nameRef.current.value.trim();
        const d=deptRef.current.value.trim();
        const s=skypeRef.current.value.trim();
        const e=emailRef.current.value.trim();

        const new_obj={name: n, dept:d, skype:s, email:e}

        if (n!=="") {
          dispatch(newEntry(new_obj));
        //   console.log(name);
          navigate('/data')
        } else {
          alert('Please fill out all fields.');
        }
    }

  return (
    <div className='Form'>
        <h1>Welcome to Q3 tech</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Your name</label>
                <input placeholder='Enter your name' type='text' ref={nameRef} ></input>
            </div>
            <div>
                <label htmlFor='name'>Department</label>
                <input placeholder='Enter your department' type='text' ref={deptRef} ></input>
            </div>
            <div>
                <label htmlFor='name'>Skype</label>
                <input placeholder='Enter your skype' type='text' ref={skypeRef} ></input>
            </div>
            <div>
                <label htmlFor='name'>Email</label>
                <input placeholder='Enter your email' type='text' ref={emailRef} ></input>
            </div>

            <button type="submit">Send</button>
        </form>

        <Link to="/data">
            <button>Go to previous responses</button>
        </Link>
        

    </div>
  )
}
