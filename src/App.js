import React, {useEffect, useState} from "react";
import './App.css';

import {axios} from "./common/axios";
import Categories from "./components/category/Categories";
import Loading from "./components/loading/Loading";


function App() {
    const [loading, setLoading] = useState(true);
    const [categoriesApi, setCategoriesApi] = useState();


    const getCategoriesApi = async () => {
        setLoading(true)
        const response = await axios.get('/categories.php').catch((err) => console.log("Error:", err))
        if (response && response.data) {
            setCategoriesApi(response.data)
            setLoading(false)
            console.log("data:", response.data)
        }


    }
    useEffect(() => {
        getCategoriesApi();
    }, [])

    if (loading) {
        return (<main>
            <Loading/>
        </main>)
    }

    return (
        <>
            <div>
                <Categories categories={categoriesApi}/>
            </div>

        </>)
}

export default App;
