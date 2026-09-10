import conf from "./conf/conf"



function App() {
  console.log("Appwrite Url ",conf.appwriteURL, "Project Id: ",conf.appwriteProjectId)
  return (
    <>
    <h1>My Blog Project Started</h1>
    </>
  )
}

export default App
