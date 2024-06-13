import React from 'react'

const FromPast = () => {
  const data = [
    "https://scontent.forn3-2.fna.fbcdn.net/v/t39.30808-6/434078527_931471758983334_7001921732659593430_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PrEZ0FQpDLoQ7kNvgFNtgLl&_nc_ht=scontent.forn3-2.fna&oh=00_AYB3QQt8qKVIsrmQEvOkEN6svbRr4BR8zQu6aBzpP4-nwQ&oe=6668E319",
    "https://scontent.forn3-5.fna.fbcdn.net/v/t39.30808-6/402556261_836471161816728_6270921720596547529_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QkImsxzI2dgQ7kNvgHI0lsU&_nc_ht=scontent.forn3-5.fna&oh=00_AYCvj1sbCc_G7DyhCpncC6iLwfRTC7U5ofSpOSlDLBKeGQ&oe=66690CBA",
    "https://scontent.forn3-2.fna.fbcdn.net/v/t39.30808-6/358703426_750239597106552_8918322343800627526_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wLqYIjlvoKMQ7kNvgGV2ulK&_nc_ht=scontent.forn3-2.fna&oh=00_AYDpgUM2_nMy4yhxhOm9sulCTYUUk88G-kYe3oGGYogbug&oe=66691528",
    "https://scontent.forn3-1.fna.fbcdn.net/v/t39.30808-6/358714768_750239457106566_6281150561083763356_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ks_pSrzTuocQ7kNvgEKUCfd&_nc_ht=scontent.forn3-1.fna&oh=00_AYCsGdHGJJ3_drcMSu2a9U5aL-eHpkT_R_fFGuiHXbWkaA&oe=6668D8D5",
    "https://scontent.forn3-5.fna.fbcdn.net/v/t39.30808-6/352167777_615051267253236_7249396625996630027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TWO6HZh_F1EQ7kNvgG3jx2L&_nc_ht=scontent.forn3-5.fna&oh=00_AYCLA4z7jzwtoSXAd4uBfUqO0Q3SrpymJY13eNi-ilrWOQ&oe=6668FACE",
    "https://scontent.forn3-5.fna.fbcdn.net/v/t39.30808-6/328690929_588215562726721_2026803279811955751_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ugp2uyjiHXYQ7kNvgGC4-6K&_nc_ht=scontent.forn3-5.fna&oh=00_AYDpAc6bto-Pu4WIAlWn_1r00pA8gYHlKQQ-qN0ZOS2UzA&oe=6668FEFD",
  ];
  return (
    <div id='img' className=' flex justify-center items-center flex-col p-5'>
        <h4 className=' text-4xl font-extrabold'>
           بعض صور المؤسسة
        </h4>
        <div className='md:grid md:grid-cols-4 md:gap-7 mt-5 flex justify-center items-center flex-col gap-3'>
         {data.map((item : any , index : any) => (
            <div> 
                	<div className="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-cyan-800 via-cyan-700 to-cyan-500 text-gray-50" style={{ 
  backgroundImage: `url("${item}")`,
  backgroundSize: "cover",
  backgroundPosition: "center"
}}>
		<div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48  flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
			<div className="text p-3 flex flex-col justify-evenly h-full">
				<span className="font-bold text-2xl"></span>
				<p className="subtitle"></p>
			</div>
		</div>
	</div>
            </div>
         ))}
        </div>
    </div>
  )
}

export default FromPast