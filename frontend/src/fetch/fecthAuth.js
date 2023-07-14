export async function fecthToken() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((d) => {
      if (d.status != 200) {
        alert("Please login first");
        window.location = "/login";
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function fecthRegister(data) {
  try {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.status == 200;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function fecthLogin(data) {
  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    localStorage.setItem("token", result.token);
    // console.log("Success:", result);
    return response.status == 200 && result.token != null;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
