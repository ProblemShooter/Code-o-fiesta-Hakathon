import React from 'react';

const Cards = () => {
    let data = [{image: "https://images.unsplash.com/photo-1725656470959-ef96831e6b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", title:"naya image", desc:"bhai kuch naya ha, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sapiente cupiditate reprehenderit."},
                {image: "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D", title:"photo image", desc:"something is new in photographny field, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sapiente cupiditate reprehenderit."},
                {image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUnfGVufDB8fDB8fHww", title: "Apple", desc: "apple ha par apple nhi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sapiente cupiditate reprehenderit."},]
 
    return (
        <div className="container mx-auto p-4 flex gap-5">
            {data.map((elem, val) => (
                
            <div key={val} className="w-64 rounded overflow-hidden shadow-lg border border-gray-300 bg-white mx-auto">
                {/* Image */}
                <img
                    className="w-full h-40 object-cover"
                    src={elem.image}
                    alt="Card Image"
                />

                {/* Card Content */}
                <div className="p-4 h-36">
                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-2">{elem.title}</h2>

                    {/* Paragraph with lower opacity */}
                    <p className="text-gray-600 opacity-75 line-clamp-3">
                        {elem.desc}
                    </p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Cards;
