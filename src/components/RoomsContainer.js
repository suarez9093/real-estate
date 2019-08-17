import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (

        <>
           
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}
export default withRoomConsumer(RoomsContainer)




// import React from 'react'
// import HomesFilter from './HomesFilter'
// import HomesList from './HomesList'
// import { Homesonsumer, HomeConsumer } from '../Context'
// import Loading from './Loading'



// export default function HomesContainer() {
//     return (
//         <HomeConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedHomes, homes } = value
//                     if(loading){
//                         return <Loading />;
//                     }
//                     return (

//                         <div>
//                             hello from Homes Container
//             <HomesFilter homes={homes} />
//                             <HomesList homes={sortedHomes} />
//                         </div>
//                     );
//                 }}
//         </HomeConsumer>
//     );
// }
