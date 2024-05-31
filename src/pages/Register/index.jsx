import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SigleBlogCardnews from "../../components/SigleBlogCardnews";
import SigleBlogCardnews1 from "../../components/SigleBlogCardnews1";
import { useNavigate,Link } from "react-router-dom";

export default function RegisterPage() {
  let navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  let auth
useEffect(()=>{
   auth=localStorage.getItem("user")
  if(auth){
    navigate("/")
  }
},[auth])
  const handleSignup=async()=>{
    console.log(password,name,email);
    let result=await fetch("http://localhost:2000/signup",{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-type':'application/json'
      }
    })
    result=await result.json()
    console.log(result);
    if(result.name && result.email && result.password){
      localStorage.setItem("user", JSON.stringify(result))
    }
    if (localStorage.getItem("user")) {
      navigate("/login")
    }else{
      alert("All fiels is Mandatory to fill")
    }
   
    
    
  }
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center">
          <Header className="self-stretch" />
          <div className="mt-[53px] flex w-[90%] flex-col items-center md:w-full md:p-5">
            <div className="flex w-[46%] flex-col gap-[29px] md:w-full">
              <Heading size="4xl" as="h1" className="tracking-[-0.50px]">
                Let&#39;s join as Our Devloper Community
              </Heading>
              <Text
                size="3xl"
                as="p"
                className="w-[96%] text-center leading-[35px] tracking-[-0.50px] !text-black-900_7f md:w-full"
              >
                We are Hiring a Volounteer for the Different tech stack like AI ML & Web Dev & App Dev and Also a Cyber Expert  and others
              </Text>
            </div>
            <div className="mt-[50px] flex w-[41%] flex-col items-center gap-[57px] border border-solid border-blue_gray-900 bg-white-A700 p-[54px] md:w-full md:p-5 sm:gap-7">
              <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                Register
              </Heading>
              <div className="flex flex-col items-start gap-[31px] self-stretch">
                <div className="flex flex-col gap-[30px] self-stretch">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-start gap-2.5">
                      <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                        Name
                      </Text>
                      <input

                      onChange={(e)=>{setName(e.target.value)}} 
                      type="text" 
                      required
                       placeholder="Enter your name" 
                       />
                      
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                        Email
                      </Text>
                      <input
                      placeholder="Enter the email"
                      type="text"
                      required={true}
                      onChange={(e)=>{setEmail(e.target.value)}} 

                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <Text size="md" as="p" className="!font-poppins tracking-[0.07px] !text-black-900">
                        Password
                      </Text>
                        <input

                         placeholder="Enter the password"
                      type="text"
                      onChange={(e)=>{setPassword(e.target.value)}}
                        
                      />
                    </div>
                 
                  </div>
                  <button
                    type="submit"
                    onClick={handleSignup}
                    className="w-full bg-pink-700 text-white-A700 p-4 !rounded-[10px] font-poppins font-medium tracking-[0.08px] sm:px-5"
                  >
                    Register
                  </button>
                </div>

                  <Text size="md" as="p" className="ml-[50px] tracking-[-0.50px] !text-black-900 md:ml-0">
                    <span className="text-black-900">Do you already have an account??&nbsp;</span>
                    <Link to={"/login"}><span className="text-blue_gray-900">Login Now</span></Link>
                    </Text>
                 

                
              </div>
            </div>
            <div className="mx-auto mt-[122px] flex w-full max-w-[1294px]">
              <div className="flex w-full flex-col gap-[49px]">
                <div className="flex flex-col gap-[27px]">
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="3xl" as="h3" className="tracking-[-0.50px]">
                      Hot Topic News{" "}
                    </Heading>
                    <Button shape="round" className="min-w-[122px] font-semibold tracking-[-0.50px] sm:px-5">
                      View All
                    </Button>
                  </div>
                  <div className="h-px bg-black-900_7f" />
                </div>
                <div className="flex gap-5 md:flex-col">
                  <SigleBlogCardnews tag={true} />
                  <SigleBlogCardnews image="images/img_unsplash_ef7hn40wbaq_246x418.png" tag="Political" />
                  <SigleBlogCardnews1 />
                </div>
              </div>
            </div>
          </div>
          <Footer className="mt-[120px]" />
        </div>
      </div>
    </>
  );
}