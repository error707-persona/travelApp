import List from '../../Home/List'
import React from 'react'
import FilterPanel from '../../Home/FilterPanel'
import SearchBar from '../../Home/SearchBar'
import "./style.css"
import { useState, useEffect } from 'react'
import { dataList } from '../../constants'
import EmptyView from '../../common/EmptyView'
const Home = () => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectedPrice, setselectedPrice] = useState([1000,5000]);
  const [list, setlist] = useState(dataList);
  const [inputSearch, setinputSearch] = useState('');
  const [result, setresult] = useState(false);

  const handleSelectCategory = (event, value) => !value?null:setselectedCategory(value);

  const [selectedRating, setselectedRating] = useState(null);
  const handleSelectRating = (event, value) => !value?null:setselectedRating(value);

  const [cuisines, setcuisines] = useState([
    {
      id: 1, 
      checked:false, 
      label: `American`,
    },
    {
      id: 2, 
      checked:false, 
      label: `Chinese`,
    },
    {
      id: 3, 
      checked:false, 
      label: `Italian`,
    }
  ])



  const handlechangeChecked = (id) => {
    const cuisineStateList = cuisines;
    const changeCheckedCuisines = cuisineStateList.map((item)=>
      item.id===id?{...item, checked:!item.checked}:item
    );
    setcuisines(changeCheckedCuisines);
  }

  const handleChangePrice = (event, value) => setselectedPrice(value);

  const applyFilters = () => {
    let updateList = dataList;
    //rating filter
    if(selectedRating){
      updateList=updateList.filter(item=>parseInt(item.rating)===parseInt(selectedRating)
      );
    }
    //category
    if(selectedCategory){
      updateList=updateList.filter(item=>item.category===selectedCategory
      );
    }
    //cuisine
    const cuisineChecked=cuisines.filter((item)=>item.checked)
    .map((item)=>item.label.toLowerCase());
    if(cuisineChecked.length){
      updateList = updateList.filter((item)=>
      cuisineChecked.includes(item.cuisine)
      );
    }

    //price filter

    const minPrice=selectedPrice[0];
    const maxPrice=selectedPrice[1];

    updateList=updateList.filter(
      (item)=>item.price>=minPrice&&item.price<=maxPrice)

    if (inputSearch){
      updateList=updateList.filter((item)=>item.title.toLowerCase().search(inputSearch.toLocaleLowerCase().trim())!==-1
      );
    }

    setlist(updateList);
    !updateList.length ? setresult(false):setresult(true)
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory,cuisines, selectedPrice, inputSearch])
  

  return (
    <div className='home'>
      {/* Search */}
      <SearchBar value={inputSearch} changeInput={e=>setinputSearch(e.target.value)}/>


      <div className="home_panelList-wrap">
          <div className="home_panel-wrap">
        {/* Side Panel */}
            <FilterPanel 
            selectToggle={handleSelectCategory} 
            selectedCategory={selectedCategory}
            selectedRating = {selectedRating}
            selectRating = {handleSelectRating}
            cuisines = {cuisines}
            changeChecked = {handlechangeChecked}
            selectedPrice = {selectedPrice}
            changedPrice = {handleChangePrice}
            />
          </div>
        <div className="home_list-wrap">
          {/* List & empt view */}
          {(result)?<List list={list}/>:<EmptyView/>}
        </div>
      </div>
    </div>
  )
}

export default Home