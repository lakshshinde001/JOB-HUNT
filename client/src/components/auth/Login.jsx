import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup} from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/Constant";
import { toast } from "sonner";

const Login = () => {
  const [input, setInput] = useState({

    email : "",
    password : "",
    role : "",
  });
  
  const navigate = useNavigate()
  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  }
  
  const changeFileHandler = (e) => {
    setInput({...input, file:e.target.files?.[0]})
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers : {
          "Content-Type" : "application/json"
        },
        withCredentials:true
      }) 
      if(res.data.success){
        navigate('/')
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }

  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center  max-w-7xl mx-auto">
          <form
            onSubmit={submitHandler}
            className="w-1/2 border border-gray-200 rounded-md p-4"
          >
            <h1 className="font-bold text-xl mb-5">Login</h1>
          
            <div className="my-2">
              <Label>Email</Label>
              <Input 
                type="email" 
                placeholder="laxman@gmail.com"
                value={input.email}
                onChange={changeEventHandler}
                name = "email"  
              />
            </div>
            
            <div className="my-2">
              <Label>password</Label>
              <Input 
                type="password" 
                placeholder="password"
                value={input.password}
                onChange={changeEventHandler}
                name = "password"  
              />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-4">
                <div className="flex items-center space-x-2">

                <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked ={input.role === 'student'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />

                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked ={input.role === 'recruiter'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>

             
            </div>
            <Button type="submit" className="w-full my-4">Submit </Button>
            <span className="text-sm">Don't have an Account? <Link to="/signup">Signup</Link>  </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
