import React, { useEffect, useState } from "react";
import Category from "./Category";
import { axios } from "../../common/axios";
import Loading from "../loading/Loading";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categoriesApi, setCategoriesApi] = useState();

  const getCategoriesApi = async () => {
    setLoading(true);
    const response = await axios
      .get("/categories.php")
      .catch((err) => console.log("Error:", err));
    if (response && response.data) {
      setCategoriesApi(response.data.categories);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  useEffect(() => {
    getCategoriesApi();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <section>
      <div className="title">
        <h2>Menu</h2>
        <div>
          {categoriesApi.map((category) => {
            return <Category key={category.idCategory} {...category} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
