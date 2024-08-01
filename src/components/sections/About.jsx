"use client";

import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import useRequestData from "@/hooks/useRequestData";

const About = () => {
    const { data, isLoading, error, makeRequest } = useRequestData();

    useEffect(() => {
      makeRequest("http://localhost:5029/hero/", "GET", null);
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error... 😒</p>;
    if (!data) return null;
  return (
    <section>
      
    </section>
  )
}

export default About
