export async function fetchUserDetail() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
