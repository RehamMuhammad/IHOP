
import './App.css';
import {SideBar} from './components/sidebar'

function App() {
//  const [categories, setCatego]  = useState([]);
// const eventCollectionRef = collection(db, "events")
 
// useEffect(() => {

//   const getEvents = async () => {
//     const eventsData = await getDocs(eventCollectionRef);
//     const lectures = await collection(eventCollectionRef, "lectures", "lectures")

//     const lecturesData = await getDocs(lectures);

//     console.log(eventsData.docs.map((doc) => ({...doc.data(), id: doc.id})))
//     console.log(lecturesData.docs.map((doc) => ({...doc.data(), id: doc.id})))

//     // setCatego(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

//   }

//   getEvents()
  // getDocs(eventCollectionRef)
  // .then(snapshot => {
  //     snapshot.docs.forEach(hospital => {
  //         let currentID = hospital.id
  //         let appObj = { ...hospital.data(), ['id']: currentID }
          

  //         categories.push(hospital.data())
  //       }).then(lectures => {
  //         const getlec = async() => {
  //           console.log(lectures)
  //           console.log(eventCollectionRef)
  //           const data = await getDocs(lectures);
            
  //           console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //             }
  //             getlec()
  //       setCatego(categories)
  //       console.log(categories)
  //   })
    
  //   })


    
// }, [])

  return (

    <div className="App">
       <SideBar/>
      {/* <input type="text" placeholder="Name"/>
      <input type="text" placeholder="icon"/>
      <input type="number" placeholder="ID"/>
      <button> Create Event</button> */}
{/* <UserType /> */}


    {/* {categories.map((cat) => {
    return <div>
      <h1>Name: {cat.name}</h1>
      <h1>Icon: {cat.icon}</h1>
      <h1>categoryId: {cat.categoryId}</h1>


    </div>})} */}
    </div>
  );
}

export default App;
