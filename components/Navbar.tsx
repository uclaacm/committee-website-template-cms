import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WordmarkLogo from '../public/acm-logo-wordmark-extended.png';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [data,setData] = useState([]);
  const getData=()=>{
    fetch('public/output.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  let text;
  if(data.length >=1){
    text = <div>got the data</div>;
  }
  else{
    text = <div>nope</div>;
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <a className="force-child-display-block">
            <Image
              src={WordmarkLogo}
              width={106}
              height={40}
              alt="Open Source at ACM Home"
            />
          </a>
        </Link>
      </div>
      <div className="navbar-items">
        <div className="navbar-link">
          <Link href="/teamPage">Other Page </Link>
        </div>
        <div>
          {text}
        </div>
        <div className="navbar-link">
          <Link href="/eventsPage">Events Page</Link>
        </div>
      </div>
    </nav>
  );
}
