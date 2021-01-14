import React from 'react';

export default function Register() {
  const [userData, setUserData] = setState();

  const getCategoriesApi = async () => {
    setLoading(true);
    const response = await axios
      .get('/categories.php')
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setCategoriesApi(response.data.categories);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <h1>Welcome to register</h1>
      <button>Register</button>
    </div>
  );
}
