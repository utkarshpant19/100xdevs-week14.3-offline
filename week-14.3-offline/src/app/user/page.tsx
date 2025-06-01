import client from "@/app/db";

async function getUserDetails() {
  try {
    // Fetching the data from the same server
    // const response = await axios.get("http:localhost:3000/api/user");
    // return response.data;

    const userdata = await client.user.findFirst();
    return userdata;
  } catch (err) {
    console.log(err);
  }
}

export default async function User() {
  const userData = await getUserDetails();

  return (
    <>
      <div>{userData?.username}</div>
    </>
  );
}
