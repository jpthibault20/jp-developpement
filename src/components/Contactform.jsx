"use client"

import React from 'react'
import {useState} from 'react'

const Contactform = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');
    
  return (
    <div>
      <form  className="max-w-xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nom</span>
          </label>
          <input
            type="text"
            placeholder="DUPONT"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Prenom</span>
          </label>
          <input
            type="text"
            placeholder="Jean"
            className="input input-bordered"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Jean@DUPONT.com"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Telephone</span>
          </label>
          <input
            type="telephone"
            placeholder="0611223344"
            className="input input-bordered"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Entrez votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary bg-[#dde3ff]">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contactform
