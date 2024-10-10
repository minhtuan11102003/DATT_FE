
const staffMembers:{ name: string; img: string; position: string; description: string }[] = [
    { name: 'John Doe', position: 'Hotel Manager', img: './images/staff.jpg', description: 'Semper ac dolor vitae.' },
    { name: 'Jane Smith', position: 'Receptionist', img: './images/staff.jpg', description: 'Lorem ipsum dolor sit.' },
    { name: 'Michael Lee', position: 'Chef', img: './images/staff.jpg', description: 'Cras interdum hendrerit.' },
    { name: 'Sarah Connor', position: 'Head of Housekeeping', img: './images/staff.jpg', description: 'Phasellus accumsan.' },
    { name: 'Tommy Shelby', position: 'Security Officer', img: './images/staff.jpg', description: 'Nulla accumsan urna.' },
    { name: 'Emma Watson', position: 'Event Coordinator', img: './images/staff.jpg', description: 'Interdum et malesuada.' },
    { name: 'Chris Evans', position: 'Marketing Manager', img: './images/staff.jpg', description: 'Ut ac massa volutpat.' },
  ]
  
   function OurStaffComponent() {
    return (
        <div className='w-full '>
            <div className='relative w-full h-[313px]'>
                <img src="./images/banner2.jpg" alt="about-us" className='w-full h-full object-cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h2 className='text-white text-4xl mt-9' style={{ textShadow: '0 0 20px black' }}>OUR STAFF</h2>
                    <img src="./images/bonus.png" alt="Additional" className='mt-2 h-auto' />
                    <div className="absolute w-[215px] h-[272px] top-0 right-80">
                        <img
                            src="./images/sale.png"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-24 xl:px-32 max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-8">Our Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((staff, index) => (
              <div
                key={index}
                className="relative group text-center bg-white rounded-lg shadow-md overflow-hidden h-96"
              >
                <img
                  src={staff.img}
                  alt={staff.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
  
                <div className="absolute inset-0 bg-red-500 bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
  
                <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                  <h3 className="text-xl font-semibold mt-4">{staff.name}</h3>
                  <p className="text-sm text-gray-500">{staff.position}</p>
                  <p className="mt-4 text-gray-700">{staff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    );
  }
  export default OurStaffComponent
  
