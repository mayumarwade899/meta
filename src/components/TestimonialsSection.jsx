import { useEffect, useState } from "react";

function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
               const response = await fetch("https://5ff411ee16cf4f0017c1fabe.mockapi.io/Restaurant");
               const data = await response.json();
               setTestimonials(data); 
            }
            catch (error) {
                console.log("Error fetching testimonials: ", error);
            }
        }

        fetchData();
    }, []);

  return (
    <section className="flex flex-col items-center justify-center">
        <h1 className="capitalize text-indigo-600 text-3xl font-semibold">Testimonials</h1>
        <h2 className="text-3xl font-bold text-center mt-3 mb-8">What users say about us...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-screen-xl text-left">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white/20 backdrop-blur-lg md:h-full p-6 shadow-md transition duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.profile}
                alt={`${testimonial.name}'s avatar`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.email}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{testimonial.comments}</p>
          </div>
        ))}
        </div>
    </section>
  )
}

export default TestimonialsSection


