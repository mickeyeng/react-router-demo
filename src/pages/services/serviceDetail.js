import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './servicesData';



const ServiceDetail = () => {
  const {serviceId} = useParams();
  const serviceInfo = servicesData.find((service) => service._id === serviceId)
  console.log(serviceInfo);
  return (
    <>
      <h1>Service deatil</h1>
      <h2>{serviceInfo.name} - {serviceInfo.price}</h2>
      <h2>{serviceInfo.description}</h2>
    </>
  )
}

export default ServiceDetail