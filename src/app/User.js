import React from 'react'
import Image from "next/image";
import { useEffect , useState  } from 'react';
import { Container, Grid, MantineProvider } from '@mantine/core';
import { Card, Text, Button, Paper } from '@mantine/core';
import axios from "axios";
const User = () => {
  return (
    <Container size="lg" >
          <Grid gutter="lg">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: "10px", padding: "10px" }}>
              {data.map((item, id) => {
                return (

                  <Paper key={id} style={{
                    margin: '10px', backgroundColor: '#fff;', border: '1px solid #ccc'
                    , borderRadius: "10px", padding: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', flex: '1 0 calc(25% - 20px)'
                  }}>


                    <div className="flex" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                      <img
                        // src={`https://picsum.photos/id/${item}/200/200`}
                        src={` https://api.dicebear.com/7.x/initials/svg?seed=UserName`}
                       
                        alt={`Image ${item}`}
                        style={{ borderRadius: '50%', width: 130, height: 130 }}
                      />

                    </div>
                    <div className="username" style={{ textAlign: "center" }}><h4><b>{item.name}</b></h4></div>
                    <div className="text" style={{ marginLeft: "20px" }}>
                      <Text style={{ padding: "3px" }}><a href="www.google.com">Shanna@melissa.tv</a></Text>
                      <Text style={{ padding: "3px" }}> <a href="www.google.com">Shanna@melissa.tv</a></Text>
                      <Text style={{ padding: "3px" }}> <a href="www.google.com">Shanna@melissa.tv</a></Text>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', marginBottom: "10px" }}>
                      <Button style={{ backgroundColor: 'blue', color: "white", borderRadius: "5px", width: "154px", height: "35px", marginLeft: "10px" }}>Follow</Button>
                      <Button color="red" style={{ backgroundColor: 'white', color: "blue", border: "1px solid blue", borderRadius: "5px", width: "154px", height: "35px", marginLeft: "10px" }}>Delete</Button>

                    </div>

                  </Paper>

                )
              })}
            </div>
          </Grid>
        </Container>
  )
}

export default User