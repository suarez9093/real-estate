import React from 'react'
import {Link} from 'react-router-dom'

export default function FormButton() {
    return (
       
              <Link to='/formpage' className="btn-primary">
                  Schedule a viewing
              </Link>
    )
}
