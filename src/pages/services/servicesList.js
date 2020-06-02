import React from 'react';
import servicesData from './servicesData';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  const services = servicesData.map((service) => {
    return (
      <h2>
        <Link to={`services/${service._id}`}>{service.name}</Link> - {service.price}
      </h2>
    )
  })

  return (
    <>
    <h1>Services list</h1>
    {services}
    </>
  )
}

export default ServicesList