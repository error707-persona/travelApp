import React from 'react'
import FilerListToggle from '../../common/FilterListToggle'
import { categoryList } from '../../constants'
import "./style.css"
import { ratingList } from '../../constants'
import CheckBoxProton from '../../common/CheckBoxProton'
import SliderProton from '../../common/SliderProton'
const FilterPanel = ({selectedCategory, 
  selectToggle, 
  selectedRating, 
  selectRating, 
  cuisines,
changeChecked,
changedPrice,
selectedPrice
}) => {
  return (
    <div>
        {/* Categoty */}
        <div className="input-group">
            <p className='label'>Category</p>
            <FilerListToggle 
            options={categoryList} 
            value={selectedCategory} 
            selectToggle={selectToggle}/>
        </div>
        {/* Cuisines */}
        <div className="input-group">
        <p className='label'>Cuisines</p>
        {cuisines.map(cuisine=>(
        <CheckBoxProton 
            key={cuisine.id} 
            cuisine={cuisine} 
            changeChecked={changeChecked}/>))}
        </div>
        {/* Price margin */}
        <div className="input-group">
        <p className='label-range'>Price range</p>
            <SliderProton value={selectedPrice} changedPrice={changedPrice}/>
        </div>
        {/* Star rating */}
        <div className="input-group">
          <p className='label'>Star ratings</p>
          <FilerListToggle 
              options={ratingList} 
              value={selectedRating} 
              selectToggle={selectRating}/>
        </div>
    </div>
  )
}

export default FilterPanel