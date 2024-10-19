import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../ui/button";
import { User2 } from "lucide-react";

const Navbar = () => {

  const user = false;

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>{" "}
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Job</li>
            <li>Browse</li>
          </ul>

          {
            !user ? (
              <div className="flex items-center gap-2">
                <Button variant="outline">Outline</Button>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]" >Sign-up</Button>
              </div>
            ) : (
                  <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer ">
                    <AvatarImage
                      className="h-10 w-10"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="">
                    <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer ">
                      <AvatarImage className="h-10 w-10"
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                        <div>
                          <h4 className="font-medium">Laxman Shinde</h4>
                          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                        </div>
                    </div>
                  <div className="flex flex-col gap-3 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2/>
                        <Button variant="link">Show Profile</Button>
                    </div>

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2/>
                        <Button variant="link"> Logout</Button>
                    </div>         
                  </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
            
          }

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
