import React from 'react'
import airShipment from "../assets/air-cargo-freight-pallets.jpg"
import seaShipment from "../assets/sea-shipment.jpg"
import roadShipment from "../assets/truck-on-the-road.jpg"

export default function WhyUs() {
    return (
        <div className='px-3 lg:px-16'>
            <div className='card bg-base-300 container px-2 mx-auto py-5 md:p-10 mb-10 rounded-xl md:rounded-3xl'>
                <div className='max-w-4xl mb-6'>
                    <p className='text-4xl md:text-5xl font-bold mb-5'>Why choose us.</p>
                    <p className='sm:text-xl'>Because Terek will make it easier to send your package with the features we have.</p>
                </div>


                {/* We do... */}
                <div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6 justify-items-center'>
                        {[{ photo: airShipment, title: "Air Shipment", subTitle: "Fast, secure air delivery across global destinations" }, { photo: roadShipment, title: "Road Shipment", subTitle: "Reliable ground transportation for regional and nationwide deliveries" }, { photo: seaShipment, title: "Ocean Shipment", subTitle: "Cost-effective sea freight for large international cargo" }].map((item, i) => (
                            <div key={i} className="card card-xl bg-base-100 image-full shadow-sm overflow-hidden">
                                <figure>
                                    <img
                                        src={item.photo}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body bg-linear-to-t from-secondary/20 to-transparent h-full">
                                    <div className='absolute bottom-0 left-0 right-0 p-8'>
                                        <h2 className="card-title">{item.title}</h2>
                                        <p>{item.subTitle}</p>
                                    </div>
                                    {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className='my-16 text-gray-400' />

                <div className='grid grid-cols-2 md:grid-cols-3 sm:gap-2 justify-items-center'>
                    {[
                        { title: "Real time tracking", subTitle: "You can check the status of the shipment in real time using your shipment code." },
                        { title: "Pickup Delivery", subTitle: "To add to the convenience & security of your shipmeny, we provide a pick-up service that can make it easier for you" },
                        { title: "Insurance Service", subTitle: "Provides protection for your package which adds security when shipping goods" }, { title: "24 Hours", subTitle: "Generate something with ai for this" }, { title: "Packaging", subTitle: "We provide packaging services. Let us know if you need this service, we will be happy to help you" }, 6].map((item, i) => (
                            <div key={i} className="card w-full card-sm sm:card-md lg:card-xl shadow-sm bg-base-100 border border-base-300 transition-all ease-in-out duration-100 hover:border-secondary/30 rounded-3xl">
                                <div className="card-body">
                                    <h1 className='text-xl sm:text-4xl font-bold'>0{i + 1}</h1>
                                    <h2 className="card-title ">{item.title}</h2>
                                    <p>{item.subTitle}</p>
                                </div>

                            </div>

                        ))}
                </div>


            </div>
        </div>
    )
}
