import React, {useState, useEffect} from 'react';
import {axios} from "../../common/axios";
import Loading from "../loading/Loading";
import Title from "./Title";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import RandomMealCarusel from "./RandomMealCarusel";
import "./Carusel.css";
import Categories from './../category/Categories';


function Carusel() {
    const [loading, setLoading] = useState(true);
    const [randomMealCarusel, setRandomMealCarusel] = useState()
    const [index, setIndex] = useState(0)

    //set the index in the interval
    useEffect(() => {
        const lastIndex = 4 - 1;  // 4 = randomMealCarusel.length doar ca plm nu stie lenght-ul aici
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, randomMealCarusel])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return () => clearInterval(slider)
    }, [index])


    //get 4 random meals from the api
    const getRandomMeals = async () => {
        setLoading(true);
        let data = [];
        for (let i = 0; i < 4; i++) {
            let response = await axios.get("/random.php").catch((err) => console.log("Error:", err));
            if (response && response.data) {
                data.push(response.data.meals[0])
            }
            setRandomMealCarusel(data)
        }
        setLoading(false);
    }


    useEffect(() => {
        getRandomMeals();
    }, []);

    //handle increment and decrement index
    const handleNextPersonBtn = () => {
        setIndex(index + 1)
    }
    const handlePrevPersonBtn = () => {
        setIndex(index - 1)
    }

    //loading component
    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        );
    }


    return (
        <>
        <section className='section'>
            <Title/>
            <div className='section-center'>
                <RandomMealCarusel randomMealCarusel={randomMealCarusel} index={index}/>
                <LeftButton handlePrevPersonBtn={handlePrevPersonBtn}/>
                <RightButton handleNextPersonBtn={handleNextPersonBtn}/>
            </div>
        </section>
        <div className="card-categories">
                <Categories/>
                </div>
        </>
    )
}

export default Carusel;