
"use client";
import React, { useEffect, useState } from 'react';
import { Container, Grid, MantineProvider } from '@mantine/core';
import { Card, Text, Button, Paper } from '@mantine/core';
import axios from "axios";
import './Pages.css'

export default function Home() {
  const [data, setData] = useState([])
  const [follow, setFollow] = useState(true)


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response)
        setData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])


  const handleDeleteData = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      setData((prevData) => prevData.filter((item) => item.id !== id))
      console.log("Data Deletedd Successfuly")
    } catch (err) {
      console.error('Error deleting data:', err);

    }
  }

  const unfollowHandle = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, follow: !item.follow } : item
      )
    );
    setFollow(!follow)
  };
  

  return (
    <>

      <MantineProvider>
        <Container size="lg" >
          <Grid gutter="lg">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: "10px" }}>
              {data.map((users, id) => {

                
                return (

                  <Paper key={id} style={{
                    margin: '10px', backgroundColor: '#fff', border: '1px solid #ccc'
                    , borderRadius: "10px", padding: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    boxSizing: 'border-box' 

                    
                  }}>

                    <div className="flex" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                      <img title={users.name}
                        src={` https://api.dicebear.com/7.x/initials/svg?seed=${users.name}`}
                        alt={`Image ${users}`}
                        style={{ borderRadius: '50%', width: 120, height: 120, marginTop: "10px" }}
                      />

                    </div>
                    {/* <div style={{textAlign: "center" }}>{follow ? <h4 style={{ fontWeight: 500 }}><b>{users.name}</b></h4> :
                    
                    <h4 style={{ fontWeight: 500 ,textAlign: "center" , justifyContent: "flex-end"}}>
                     <span style={{ display:"flex", position:"absolute", justifyItems:"center"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-star">
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                    </svg></span><b>{users.name}</b></h4>}</div> */}
                    <div style={{ textAlign: "center" }}>
                      {!users.follow ? (
                        <h4 style={{ fontWeight: 500 }}>
                          <b>{users.name}</b>
                        </h4>
                      ) : (
                        <h4 style={{ fontWeight: 500, marginRight: "90px" }}>
                          <span style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <b>{users.name}</b>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="tabler-icon tabler-icon-star"
                            >
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                          </span>
                        </h4>
                      )}
                    </div>


                    <div className="text" style={{ marginLeft: "10px", paddingTop: "10px" }}>

                      <Text style={{ display: "flex", padding: "3px" }}><span style={{ marginTop: "3px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-at">
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path></svg></span>
                        <a style={{ marginLeft: "5px", color: "#868e96", fontSize: "15px" }} href={users.email}>

                          {users.email}</a></Text>
                      <Text style={{ display: "flex", padding: "3px" }}><span style={{ marginTop: "3px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" className="tabler-icon tabler-icon-phone-call"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                          </path><path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path></svg></span>
                        <a style={{ marginLeft: "5px", color: "#868e96", fontSize: "15px" }} href={users.phone}>
                          {users.phone}</a></Text>

                      <Text style={{ display: "flex", padding: "3px" }}><span style={{ marginTop: "3px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                          className="tabler-icon tabler-icon-world"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path>
                          <path d="M3.6 15h16.8">
                          </path><path d="M11.5 3a17 17 0 0 0 0 18"></path>
                          <path d="M12.5 3a17 17 0 0 1 0 18"></path></svg></span>
                        <a style={{ marginLeft: "5px", color: "#868e96", fontSize: "15px" }} href={users.website}>
                          {users.website}</a></Text>


                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', marginBottom: "10px" }}>
                      {users.follow ?
                        <Button className="unfollow" onClick={() => unfollowHandle(users.id)} style={{ backgroundColor: "#d3d3d3 ", color: "#000", borderRadius: "5px solid black", width: "161px", height: "35px", marginLeft: "0px", fontSize: "14px" }}>
                          <span style={{ position: "absolute", marginLeft: "-25px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-user-minus"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128"></path>
                            <path d="M16 19h6"></path></svg></span><b>Unfollow</b></Button>
                        :
                        <Button className="unfollow" onClick={() => unfollowHandle(users.id)} style={{ backgroundColor: '#228be6', color: "white", borderRadius: "5px", width: "161px", height: "35px", marginLeft: "0px", fontSize: "14px" }}>
                          <span style={{ position: "absolute", marginLeft: "-25px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-user-plus"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                            <path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4">
                            </path></svg></span><b>Follow</b></Button>
                      }
                      <Button onClick={() => handleDeleteData(users.id)} color="red" style={{ fontSize: "14px", backgroundColor: 'white', color: "#228be6", border: "1px solid blue", borderRadius: "5px", width: "161px", height: "35px", marginLeft: "10px" }}>
                        <span style={{ position: "absolute", marginLeft: "-25px", marginTop: "2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-trash"><path d="M4 7l16 0">
                          </path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
                          </path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg></span>
                        <b>Delete</b></Button>

                    </div>

                  </Paper>

                )
              })}
            </div>
          </Grid>
        </Container>
      </MantineProvider>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );

}

