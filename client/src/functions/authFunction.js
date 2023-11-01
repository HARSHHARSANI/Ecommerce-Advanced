import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  console.log(`${process.env.REACT_APP_API}/create-or-update-user `);
  const response = await axios.post(
    `${process.env.REACT_APP_API}/auth/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
  console.log(response.data);
  return response;
  // console.log("create or Update response :->", response.data);
};

export const currentUser = async (authtoken) => {
  // console.log(`${process.env.REACT_APP_API}/create-or-update-user `);
  const response = await axios.post(
    `${process.env.REACT_APP_API}/auth/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
  return response;
  // console.log("create or Update response :->", response.data);
};

export const CurrentAdmin = async (authtoken) => {
  // console.log(`${process.env.REACT_APP_API}/create-or-update-user `);
  const response = await axios.post(
    `${process.env.REACT_APP_API}/auth/current-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
  return response;
  // console.log("create or Update response :->", response.data);
};
