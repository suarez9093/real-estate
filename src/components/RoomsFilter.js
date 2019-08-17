import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title'
// get all unique values
const getUnique = (items,value) =>{
    return [...new Set(items.map(item =>item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const{
        handleChange,
        type,
        capacity,
        price,
        minPrice,
         maxPrice,
         minSize,
         maxSize, 
         breakfast, 
         pets
    }=context;
    // get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ['all',...types];
    // map to jsx
    types = types.map((item,index)=>{
        return <option value ={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) =>{
        return <option key={index} value={item}>{item}</option>
    })
    
    return <section className="filter-container">
        <Title title="Search Homes" />
        <form className="filter-form">
            {/* select type */}
            <div className="form-group">
                <label htmlFor="type">Home Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
            </div>
            {/* end select type */}
             {/* guest */}
             <div className="form-group">
                <label htmlFor="capacity">Garage</label>
                    <select name="capacity"
                     id="capacity"
                      value={capacity} className="form-control" 
                      onChange={handleChange}>
                        {people}
                    </select>
            </div>
            {/* end guest */}
            {/* room price */}
            <div className="form-group">
                <label htmlFor="price">home price ${price}</label>
                    <input name="price"
                     type="range"
                      min={minPrice} max={maxPrice}
                      id="price" 
                      value={price}
                      onChange={handleChange}
                      className="form-control">
                        
                    </input>
            </div>
            {/* end of room price */}
            {/* size */}
            <div className="form-group">
                <label htmlFor="size">home size sq ft</label>
                   <div className="size-inputs">
                       <input type="number" name="minSize" id="size"
                       value={minSize} onChange={handleChange}
                       className="size-input"></input>
                           <input type="number" name="maxSize" id="size"
                       value={maxSize} onChange={handleChange}
                       className="size-input"></input>
                   </div>
            </div>
            {/* end of size */}
            {/* extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}></input>
                    <label htmlFor="breakfast">view now</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" 
                    id="pets" 
                    checked={pets} onChange={handleChange}></input>
                    <label htmlFor="pets">view today</label>
                </div>
            </div>
            {/* end of extras */}
        </form>
    </section>
}
