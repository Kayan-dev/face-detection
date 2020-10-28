// export default function Ranks() {
//   const params = useParams();
//   const homePageID = Number(params.id);
//   // console.log("PAGE ID", typeof homePageID);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(detailPages);
//   }, []);

//   const details = useSelector(selectAllStories);
//   //console.log("details", details);

//   //Buffer render time
//   if (!details) return <div>Loading...</div>;

//   /*
//  == I dont know since they are all created @ the SAME time
//  */
//   const sorted_details = [...details].sort(compare_time);
//   // console.log("sorted:", sorted_details);

//   //filter stories based on homePage ID
//   const filteredResult = sorted_details.filter(function (page) {
//     //   console.log("home ID?", typeof page.homepageId);
//     return homePageID === page.homepageId;
//   });

//   // console.log("Filtered", filteredResult);
//   return (
//     <div>
//       <Jumbotron>
//         <h1>Stories</h1>
//       </Jumbotron>

//       {filteredResult.map((page, index) => {
//         return (
//           <div
//             style={{
//               backgroundColor: page.color,
//               color: page.backgroundColor,
//             }}
//             key={page.id}
//           >
//             <h4>{page.name}</h4>
//             <br></br>
//             <p>{page.content}</p>
//             <img alt={page.name} src={page.imageUrl}></img>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
